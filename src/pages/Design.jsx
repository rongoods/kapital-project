import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PartnershipForm from '../components/PartnershipForm';

export default function Design() {
    const { t } = useLanguage();

    const capabilities = [
        { title: t('studios.design.capabilities.1.title'), desc: t('studios.design.capabilities.1.desc') },
        { title: t('studios.design.capabilities.2.title'), desc: t('studios.design.capabilities.2.desc') },
        { title: t('studios.design.capabilities.3.title'), desc: t('studios.design.capabilities.3.desc') },
        { title: t('studios.design.capabilities.4.title'), desc: t('studios.design.capabilities.4.desc') }
    ];

    return (
        <div className="container page-wrapper animate-fade-in">
            {/* HEADER SECTION */}
            <div className="page-header mb-32 md:mb-48">
                <h1 className="page-title leading-tight">{t('studios.design.page.title')}</h1>
                <p className="page-subtitle mt-4">{t('studios.design.page.subtitle')}</p>
            </div>

            {/* MAIN HEADLINE & COPY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-32 md:mb-48 pb-12 border-b border-theme">
                <div>
                    <h2 className="text-4xl md:text-5xl font-header leading-[1.1]">
                        {t('studios.design.page.headline')}
                    </h2>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="font-mono text-sm md:text-base text-gray-300 leading-relaxed mb-12">
                        {t('studios.design.page.copy')}
                    </p>
                    <div className="border border-theme p-6 inline-block self-start">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#00ff41] animate-pulse">
                            ● {t('studios.design.page.purpose')}
                        </span>
                    </div>
                </div>
            </div>

            {/* BREAKDOWN SECTION */}
            <div className="mb-32 md:mb-48 pb-12 border-b border-theme">
                <h3 className="section-title mb-16 md:mb-24">{t('common.breakdown')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="border border-theme p-8 hover:bg-card transition-colors h-full">
                        <span className="block font-mono text-xs text-gray-500 mb-6">01</span>
                        <h4 className="font-header text-2xl mb-4">{t('studios.design.page.breakdown.1.title')}</h4>
                        <p className="font-mono text-xs text-gray-400 leading-relaxed">{t('studios.design.page.breakdown.1.desc')}</p>
                    </div>
                    <div className="border border-theme p-8 hover:bg-card transition-colors h-full">
                        <span className="block font-mono text-xs text-gray-500 mb-6">02</span>
                        <h4 className="font-header text-2xl mb-4">{t('studios.design.page.breakdown.2.title')}</h4>
                        <p className="font-mono text-xs text-gray-400 leading-relaxed">{t('studios.design.page.breakdown.2.desc')}</p>
                    </div>
                    <div className="border border-theme p-8 hover:bg-card transition-colors h-full">
                        <span className="block font-mono text-xs text-gray-500 mb-6">03</span>
                        <h4 className="font-header text-2xl mb-4">{t('studios.design.page.breakdown.3.title')}</h4>
                        <p className="font-mono text-xs text-gray-400 leading-relaxed">{t('studios.design.page.breakdown.3.desc')}</p>
                    </div>
                </div>
            </div>

            {/* CAPABILITIES / OPERATIONAL MODULES */}
            <div className="mb-32 md:mb-48 pb-12 border-b border-theme">
                <h3 className="section-title mb-16 md:mb-24">{t('common.capabilities')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="border border-theme p-8 md:p-12 hover-card transition-colors group">
                            <h4 className="font-header text-xl md:text-2xl mb-4 group-hover:text-white transition-colors">{cap.title}</h4>
                            <p className="font-mono text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SERVICE MODEL */}
            <div className="mb-32 md:mb-48">
                <h3 className="section-title mb-16 md:mb-24">{t('common.serviceModel')}</h3>
                <div className="bg-card p-12 md:p-16 border border-theme">
                    <h4 className="font-header text-3xl md:text-4xl mb-6 text-white">{t('studios.design.page.service.title')}</h4>
                    <p className="font-mono text-sm text-gray-400 max-w-3xl leading-relaxed">
                        {t('studios.design.page.service.desc')}
                    </p>
                </div>
            </div>

            {/* FORM SECTION */}
            <div className="mb-32">
                <PartnershipForm />
            </div>

            {/* FOOTER NAV */}
            <div className="page-footer mt-24 pt-12 border-t border-theme">
                <Link to="/" className="btn-core">
                    <span>←</span> [{t('common.backToCore')}]
                </Link>
            </div>
        </div>
    );
}
