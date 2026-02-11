import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const PARTICLE_COUNT = 1000;
const CONNECTION_DISTANCE = 50;

class Particle {
    constructor(width, height) {
        this.reset(width, height);
        // Random target within the "K" shape bounds initially
        this.targetX = width / 2;
        this.targetY = height / 2;
        this.noiseOffset = Math.random() * 1000;
    }

    reset(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originX = this.x;
        this.originY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = 1;
    }

    update(width, height, targetX, targetY, convergence, time) {
        this.targetX = targetX;
        this.targetY = targetY;

        // living Jitter: Perpetual, hypnotic motion regardless of convergence
        const livingJitterX = Math.cos(this.noiseOffset * 2 + time * 0.0015) * 3;
        const livingJitterY = Math.sin(this.noiseOffset * 2 + time * 0.0015) * 3;

        // Phase 1: Brownian / Floating Motion
        const idleVx = Math.cos(this.noiseOffset + time * 0.001) * 0.4;
        const idleVy = Math.sin(this.noiseOffset + time * 0.001) * 0.4;

        // Final target includes the jitter to keep it "alive" when converged
        const currentTargetX = this.targetX + livingJitterX;
        const currentTargetY = this.targetY + livingJitterY;

        // Final position is weighted between floating state and target state
        const desiredX = (1 - convergence) * (this.x + idleVx) + convergence * currentTargetX;
        const desiredY = (1 - convergence) * (this.y + idleVy) + convergence * currentTargetY;

        // Apply fluid easing
        this.x += (desiredX - this.x) * 0.08;
        this.y += (desiredY - this.y) * 0.08;

        // Wrap around viewport if floating (low convergence)
        if (convergence < 0.1) {
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }
    }

    draw(ctx, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

export default function ParticleBackground() {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const { theme } = useTheme();
    const requestRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

            // Re-generate targets on resize
            generateTargets(width, height);
        };

        const generateTargets = (w, h) => {
            const centerX = w / 2;
            const centerY = h / 2;
            const kHeight = Math.min(w, h) * 0.4;
            const kWidth = kHeight * 0.6;
            const thickness = 90; // Doubled width of the "K" lines in pixels

            const targets = [];

            // Function to get a random point within a thickness range around a path
            const getThickPoint = (x, y) => ({
                x: x + (Math.random() - 0.5) * thickness,
                y: y + (Math.random() - 0.5) * thickness
            });

            // Vertical line
            const vertDots = Math.floor(PARTICLE_COUNT * 0.4);
            for (let i = 0; i < vertDots; i++) {
                targets.push(getThickPoint(
                    centerX - kWidth / 2,
                    centerY - kHeight / 2 + (i / vertDots) * kHeight
                ));
            }

            // Top diagonal
            const topDiagDots = Math.floor(PARTICLE_COUNT * 0.3);
            for (let i = 0; i < topDiagDots; i++) {
                targets.push(getThickPoint(
                    centerX - kWidth / 2 + (i / topDiagDots) * kWidth,
                    centerY - (i / topDiagDots) * (kHeight / 2)
                ));
            }

            // Bottom diagonal
            const botDiagDots = PARTICLE_COUNT - vertDots - topDiagDots;
            for (let i = 0; i < botDiagDots; i++) {
                targets.push(getThickPoint(
                    centerX - kWidth / 2 + (i / botDiagDots) * kWidth,
                    centerY + (i / botDiagDots) * (kHeight / 2)
                ));
            }

            // Assign targets to particles
            particlesRef.current.forEach((p, i) => {
                if (targets[i]) {
                    p.finalTargetX = targets[i].x;
                    p.finalTargetY = targets[i].y;
                }
            });
        };

        particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => new Particle(window.innerWidth, window.innerHeight));
        resize();
        window.addEventListener('resize', resize);

        const animate = (time) => {
            ctx.clearRect(0, 0, width, height);

            // Calculate convergence based on full page scroll
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
            const convergence = scrollProgress * 0.25;

            const particleColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(26, 26, 26, 0.12)';
            const lineColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.015)' : 'rgba(26, 26, 26, 0.015)';

            // Update and Draw Particles
            particlesRef.current.forEach(p => {
                p.update(width, height, p.finalTargetX, p.finalTargetY, convergence, time);
                p.draw(ctx, particleColor);
            });

            // Draw Link Effect
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                for (let j = i + 1; j < PARTICLE_COUNT; j++) {
                    const p1 = particlesRef.current[i];
                    const p2 = particlesRef.current[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(requestRef.current);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="particle-background"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 0 // Behind content, in front of kinetic-arc-container
            }}
        />
    );
}
