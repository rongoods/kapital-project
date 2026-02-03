import React from 'react';
import { Link } from 'react-router-dom';

export default function ITProduct() {
    return (
        <div className="container page-wrapper animate-fade-in">
            {/* Header Section */}
            <div className="page-header">
                <h1 className="page-title">IT & PRODUCT</h1>
                <p className="page-subtitle">[The Infrastructure Division]</p>
            </div>

            <div className="page-content-grid">
                {/* Purpose */}
                <section className="content-block">
                    <h2>PURPOSE</h2>
                    <p className="purpose-text">
                        Building the technical backbone for rapid scaling.
                    </p>
                </section>

                {/* Breakdown */}
                <section className="content-block">
                    <h2>BREAKDOWN</h2>
                    <ul className="breakdown-list">
                        <li>
                            <span className="breakdown-num">01</span>
                            <div>
                                <strong className="block text-white mb-1">The Kapital Stack</strong>
                                Deployment of our modular, high-performance codebase.
                            </div>
                        </li>
                        <li>
                            <span className="breakdown-num">02</span>
                            <div>
                                <strong className="block text-white mb-1">AI Integration</strong>
                                Autonomous agents for operational efficiency.
                            </div>
                        </li>
                        <li>
                            <span className="breakdown-num">03</span>
                            <div>
                                <strong className="block text-white mb-1">Rapid Prototyping</strong>
                                MVP delivery in 4-week sprints.
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Service Model */}
                <section className="content-block">
                    <h2>SERVICE MODEL</h2>
                    <div className="service-card">
                        <h3 className="service-title">Architecture as a Service</h3>
                        <p className="service-desc">
                            (AaaS). Infrastructure that scales from Day 0. We build systems that don't need rebuilding at Series A.
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
