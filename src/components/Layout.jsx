import React from 'react';
import Header from './Header';
import { useLanguage } from '../context/LanguageContext';

export default function Layout({ children }) {
    const { t } = useLanguage();
    return (
        <div className="layout-root">
            <div className="grainy-arc-container">
                <div className="kinetic-arc"></div>
            </div>

            <Header />
            <main className="main-content">
                {children}
            </main>
            <footer className="app-footer">
                <p className="footer-text">
                    © {new Date().getFullYear()} {t('footer.rights')}
                </p>
            </footer>

            <svg style={{ display: 'none' }}>
                <filter id="grainyNoise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                        stitchTiles="stitch"
                        result="noise"
                    />
                    <feColorMatrix type="saturate" values="0" result="desatNoise" />
                    <feComponentTransfer in="desatNoise" result="sharpNoise">
                        <feFuncR type="linear" slope="0.3" />
                        <feFuncG type="linear" slope="0.3" />
                        <feFuncB type="linear" slope="0.3" />
                    </feComponentTransfer>

                    {/* The displacement map creates the "wobble" based on the noise */}
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="sharpNoise"
                        scale="20"
                        xChannelSelector="R"
                        yChannelSelector="G"
                        result="distorted"
                    />
                </filter>
            </svg>
        </div>
    );
}
