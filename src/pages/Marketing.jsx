import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Marketing() {
    const { t } = useLanguage();
    return (
        <div className="container page-wrapper animate-fade-in">
            {/* Header Section */}
            <div className="page-header">
                <h1 className="page-title">{t('studios.marketing.page.title')}</h1>
                <p className="page-subtitle">{t('studios.marketing.page.subtitle')}</p>
            </div>

            <div className="page-content-grid">
                {/* Main Content */}
                <section className="content-block col-span-2">
                    <h2 className="text-xl md:text-3xl font-header mb-8 leading-tight">
                        {t('studios.marketing.page.headline')}
                    </h2>
                    <p className="font-mono text-sm md:text-base text-gray-300 leading-relaxed mb-12 max-w-2xl">
                        {t('studios.marketing.page.copy')}
                    </p>

                    <Link to="/partnership" className="btn-core group">
                        <span className="group-hover:mr-2 transition-all">→</span> [{t('studios.marketing.page.cta')}]
                    </Link>
                </section>

                {/* Breakdown - Now secondary */}
                <div className="space-y-16">
                    <section className="content-block">
                        <h2>{t('common.purpose')}</h2>
                        <p className="purpose-text text-lg">
                            {t('studios.marketing.page.purpose')}
                        </p>
                    </section>

                    <section className="content-block">
                        <h2>{t('common.serviceModel')}</h2>
                        <div className="service-card">
                            <h3 className="service-title">{t('studios.marketing.page.service.title')}</h3>
                            <p className="service-desc">
                                {t('studios.marketing.page.service.desc')}
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Breakdown Details */}
            <div className="mt-24 border-t border-[#333] pt-16">
                <h2 className="font-mono text-xs border-b border-white pb-2 mb-8 uppercase text-gray-500 w-full">{t('common.breakdown')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-[#333] p-6">
                        <span className="block font-mono text-xs text-gray-500 mb-2">01</span>
                        <strong className="block text-white mb-2 font-header text-xl">{t('studios.marketing.page.breakdown.1.title')}</strong>
                        <p className="font-mono text-xs text-gray-400">{t('studios.marketing.page.breakdown.1.desc')}</p>
                    </div>
                    <div className="border border-[#333] p-6">
                        <span className="block font-mono text-xs text-gray-500 mb-2">02</span>
                        <strong className="block text-white mb-2 font-header text-xl">{t('studios.marketing.page.breakdown.2.title')}</strong>
                        <p className="font-mono text-xs text-gray-400">{t('studios.marketing.page.breakdown.2.desc')}</p>
                    </div>
                    <div className="border border-[#333] p-6">
                        <span className="block font-mono text-xs text-gray-500 mb-2">03</span>
                        <strong className="block text-white mb-2 font-header text-xl">{t('studios.marketing.page.breakdown.3.title')}</strong>
                        <p className="font-mono text-xs text-gray-400">{t('studios.marketing.page.breakdown.3.desc')}</p>
                    </div>
                </div>
            </div>

            <div className="page-footer">
                <Link to="/" className="btn-core">
                    <span>←</span> [{t('common.backToCore')}]
                </Link>
            </div>
        </div>
    );
}
