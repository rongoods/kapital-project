import React from 'react';
import { Link } from 'react-router-dom';

export default function Design() {
    return (
        <div className="container page-wrapper animate-fade-in">
            {/* Header Section */}
            <div className="page-header">
                <h1 className="page-title">DESIGN STUDIO</h1>
                <p className="page-subtitle">[The Aesthetic Division]</p>
            </div>

            <div className="page-content-grid">
                {/* Purpose */}
                <section className="content-block">
                    <h2>PURPOSE</h2>
                    <p className="purpose-text">
                        Defining the visual gravity of a brand.
                    </p>
                </section>

                {/* Breakdown */}
                <section className="content-block">
                    <h2>BREAKDOWN</h2>
                    <ul className="breakdown-list">
                        <li>
                            <span className="breakdown-num">01</span>
                            <div>
                                <strong className="block text-white mb-1">High-Friction Branding</strong>
                                Visuals that demand attention and pause.
                            </div>
                        </li>
                        <li>
                            <span className="breakdown-num">02</span>
                            <div>
                                <strong className="block text-white mb-1">The Feel &gt; Usability</strong>
                                Prioritizing visceral impact over generic usability patterns.
                            </div>
                        </li>
                        <li>
                            <span className="breakdown-num">03</span>
                            <div>
                                <strong className="block text-white mb-1">Luxury Assets</strong>
                                Creation of premium, world-class design assets.
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Service Model */}
                <section className="content-block">
                    <h2>SERVICE MODEL</h2>
                    <div className="service-card">
                        <h3 className="service-title">Visual Identity & Kinetic Design</h3>
                        <p className="service-desc">
                            We craft the visual soul of the company. Movement, typography, and layout that commands respect.
                        </p>
                    </div>
                </section>
            </div>

            <div className="page-footer">
                <Link to="/" className="btn-core">
                    <span>←</span> [BACK TO CORE]
                </Link>
            </div>
        </div>
    );
}
