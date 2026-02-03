import React from 'react';
import { Link } from 'react-router-dom';

export default function Investment() {
    return (
        <div className="container page-wrapper animate-fade-in">
            {/* Header Section */}
            <div className="page-header">
                <h1 className="page-title">INVESTMENT MGMT</h1>
                <p className="page-subtitle">[The Capital Division]</p>
            </div>

            <div className="page-content-grid">
                {/* Purpose */}
                <section className="content-block">
                    <h2>PURPOSE</h2>
                    <p className="purpose-text">
                        Fueling growth through strategic equity and liquid capital.
                    </p>
                </section>

                {/* Breakdown */}
                <section className="content-block">
                    <h2>BREAKDOWN</h2>
                    <ul className="breakdown-list">
                        <li>
                            <span className="breakdown-num">01</span>
                            <div>
                                <strong className="block text-white mb-1">Sweat-Equity</strong>
                                Partnerships where we build in exchange for upside.
                            </div>
                        </li>
                        <li>
                            <span className="breakdown-num">02</span>
                            <div>
                                <strong className="block text-white mb-1">Venture Funding</strong>
                                Seed-stage capital deployment for high-growth potential.
                            </div>
                        </li>
                        <li>
                            <span className="breakdown-num">03</span>
                            <div>
                                <strong className="block text-white mb-1">Mittelstand Transition</strong>
                                Digital transformation portfolio management for legacy biz.
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Service Model */}
                <section className="content-block">
                    <h2>SERVICE MODEL</h2>
                    <div className="service-card">
                        <h3 className="service-title">Equity-for-Service & GP/LP</h3>
                        <p className="service-desc">
                            Aligning incentives. We win when you win. Structure capital for long-term compounding.
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
