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

    const principles = [
        {
            title: t('home.principles.p1.title'),
            desc: t('home.principles.p1.desc'),
            num: '01'
        },
        {
            title: t('home.principles.p2.title'),
            desc: t('home.principles.p2.desc'),
            num: '02'
        },
        {
            title: t('home.principles.p3.title'),
            desc: t('home.principles.p3.desc'),
            num: '03'
        },
        {
            title: t('home.principles.p4.title'),
            desc: t('home.principles.p4.desc'),
            num: '04'
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

            {/* Principles Section */}
            <section className="container my-32">
                <h2 className="section-title mb-12 border-b border-white pb-6 inline-block w-full">
                    {t('home.principles.title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {principles.map((p, index) => (
                        <div key={index} className="border border-white p-6 hover:bg-[#111] transition-colors">
                            <div className="font-mono text-xs text-gray-500 mb-4">{p.num}</div>
                            <h3 className="font-header text-xl mb-4">{p.title}</h3>
                            <p className="font-mono text-xs text-gray-400 leading-relaxed">
                                {p.desc}
                            </p>
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
