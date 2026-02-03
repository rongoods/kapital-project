import React from 'react';
import StudioCard from '../components/StudioCard';

export default function Home() {
    const metrics = [
        { label: 'Portfolio Valuation', value: '€25M+' },
        { label: 'Strategic Partners', value: '12' },
        { label: 'Active Ventures', value: '8' },
        { label: 'Current Portfolio MOIC', value: '2.1x' },
    ];

    const studios = [
        {
            title: 'Marketing Studio',
            description: 'Transitioning brands from "commodity" to "cult". Proprietary audience ownership and anti-algorithmic strategy.',
            link: '/marketing'
        },
        {
            title: 'IT & Product Studio',
            description: 'The technical backbone for rapid scaling. Deployment of the "Kapital Stack" and AI-Agent integration.',
            link: '/it-product'
        },
        {
            title: 'Design Studio',
            description: 'Defining visual gravity. High-friction branding and luxury-tier asset creation.',
            link: '/design'
        },
        {
            title: 'Investment Mgmt',
            description: 'Fueling growth through strategic equity and liquid capital. Seed-stage venture funding.',
            link: '/investment'
        }
    ];

    return (
        <div className="page-wrapper animate-fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">
                    KAPITAL STUDIO
                </h1>
                <p className="hero-subtitle">
                    THE ARCHITECTS OF MARKET DOMINANCE. BERLIN.
                </p>

                <div className="scroll-indicator">
                    [SCROLL]
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="container metrics-section">
                <div className="metrics-grid">
                    {metrics.map((metric, index) => (
                        <div key={index} className="metric-item">
                            <div className="metric-value">{metric.value}</div>
                            <div className="metric-label">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Studios Navigation */}
            <section className="container studios-section">
                <div className="section-header">
                    <span className="section-square"></span>
                    <h2 className="section-title">Select Division</h2>
                </div>

                <div className="studios-grid">
                    {studios.map((studio, index) => (
                        <StudioCard
                            key={index}
                            title={studio.title}
                            description={studio.description}
                            link={studio.link}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
