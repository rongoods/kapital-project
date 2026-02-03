import React from 'react';
import { Link } from 'react-router-dom';

export default function Marketing() {
    return (
        <div className="container page-wrapper animate-fade-in">
            {/* Header Section */}
            <div className="page-header">
                <h1 className="page-title">MARKETING STUDIO</h1>
                <p className="page-subtitle">[The Evangelism Division]</p>
            </div>

            <div className="page-content-grid">
                {/* Purpose */}
                <section className="content-block">
                    <h2>PURPOSE</h2>
                    <p className="purpose-text">
                        Transitioning brands from "commodity" to "cult."
                    </p>
                </section>

                {/* Breakdown */}
                <section className="content-block">
                    <h2>BREAKDOWN</h2>
                    <ul className="breakdown-list">
                        <li>
                            <span className="breakdown-num">01</span>
                            <div>
                                <strong className="block text-white mb-1">Audience Ownership</strong>
                                Proprietary Newsletter & Community ecosystems.
                            </div>
                        </li>
                        <li>
                            <span className="breakdown-num">02</span>
                            <div>
                                <strong className="block text-white mb-1">Brand Mythology</strong>
                                Constructing belief systems, not just campaigns.
                            </div>
                        </li>
                        <li>
                            <span className="breakdown-num">03</span>
                            <div>
                                <strong className="block text-white mb-1">Anti-Algorithmic</strong>
                                Strategies that survive platform volatility.
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Service Model */}
                <section className="content-block">
                    <h2>SERVICE MODEL</h2>
                    <div className="service-card">
                        <h3 className="service-title">Engineered Devotion</h3>
                        <p className="service-desc">
                            Building deep loyalty that bypasses traditional ad-spend mechanics. We turn customers into evangelists.
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
