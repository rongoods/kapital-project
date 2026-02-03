import React from 'react';
import StudioCard from '../components/StudioCard';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    const metrics = [
        { label: t('home.metrics.valuation'), value: '€25M+' },
        { label: t('home.metrics.partners'), value: '12' },
        { label: t('home.metrics.ventures'), value: '8' },
        { label: t('home.metrics.moic'), value: '2.1x' },
    ];

    const studios = [
        {
            title: t('studios.marketing.title'),
            description: t('studios.marketing.desc'),
            link: '/marketing'
        },
        {
            title: t('studios.itProduct.title'),
            description: t('studios.itProduct.desc'),
            link: '/it-product'
        },
        {
            title: t('studios.design.title'),
            description: t('studios.design.desc'),
            link: '/design'
        },
        {
            title: t('studios.investment.title'),
            description: t('studios.investment.desc'),
            link: '/investment'
        }
    ];

    return (
        <div className="page-wrapper animate-fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">
                    {t('home.headline')}
                </h1>
                <p className="hero-subtitle">
                    {t('home.subHeadline')}
                </p>

                <div className="scroll-indicator">
                    [{t('common.scroll')}]
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
                    <h2 className="section-title">{t('common.selectDivision')}</h2>
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
