import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Partnership() {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container page-wrapper animate-fade-in">
            <div className="page-header border-none mb-8">
                <h1 className="page-title text-4xl md:text-6xl">{t('partnership.title')}</h1>
                <p className="page-subtitle text-xs">{t('partnership.subtitle')}</p>
            </div>

            <div className="max-w-4xl mx-auto border border-white bg-[#0a0a0a] p-4 md:p-8 font-mono shadow-2xl relative overflow-hidden">
                {/* Terminal Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                        backgroundSize: '100% 2px, 3px 100%'
                    }}>
                </div>

                {submitted ? (
                    <div className="h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in">
                        <div className="text-green-500 mb-4 text-4xl">✓</div>
                        <p className="text-sm md:text-base tracking-widest text-green-500 typewriter">
                            {t('partnership.post_submit')}
                        </p>
                        <Link to="/" className="mt-12 text-xs hover:text-white text-gray-500 underline">
                            [TERMINATE SESSION]
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                        {/* Basics */}
                        <section>
                            <h2 className="text-xs border-b border-[#333] pb-2 mb-6 uppercase text-gray-500 tracking-widest">
                                01 // {t('partnership.basics.title')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400">{t('partnership.basics.name')}</label>
                                    <input type="text" required className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-white focus:outline-none transition-colors text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400">{t('partnership.basics.role')}</label>
                                    <input type="text" required className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-white focus:outline-none transition-colors text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400">{t('partnership.basics.url')}</label>
                                    <input type="url" required className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-white focus:outline-none transition-colors text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400">{t('partnership.basics.valuation')}</label>
                                    <input type="text" required className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-white focus:outline-none transition-colors text-white" placeholder="€" />
                                </div>
                            </div>
                        </section>

                        {/* Thesis */}
                        <section>
                            <h2 className="text-xs border-b border-[#333] pb-2 mb-6 uppercase text-gray-500 tracking-widest">
                                02 // {t('partnership.thesis.title')}
                            </h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400">{t('partnership.thesis.bottleneck')}</label>
                                    <textarea required rows={2} className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-white focus:outline-none transition-colors text-white resize-none"></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400">{t('partnership.thesis.devotion')}</label>
                                    <textarea required rows={2} className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-white focus:outline-none transition-colors text-white resize-none"></textarea>
                                </div>
                            </div>
                        </section>

                        {/* Technical Debt */}
                        <section>
                            <h2 className="text-xs border-b border-[#333] pb-2 mb-6 uppercase text-gray-500 tracking-widest">
                                03 // {t('partnership.debt.title')}
                            </h2>
                            <div className="space-y-4">
                                <label className="text-xs text-gray-400">{t('partnership.debt.ai_readiness')}</label>
                                <div className="flex justify-between gap-1">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                        <label key={num} className="cursor-pointer flex-1">
                                            <input type="radio" name="ai_ready" className="peer sr-only" />
                                            <span className="block text-center border border-[#333] py-2 text-xs text-gray-500 peer-checked:bg-white peer-checked:text-black hover:bg-[#222] transition-all">
                                                {num}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Service Selection */}
                        <section>
                            <h2 className="text-xs border-b border-[#333] pb-2 mb-6 uppercase text-gray-500 tracking-widest">
                                04 // {t('partnership.service.title')}
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {['it', 'marketing', 'design', 'investment'].map((key) => (
                                    <label key={key} className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="appearance-none w-4 h-4 border border-white checked:bg-white transition-colors" />
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                            {t(`partnership.service.${key}`)}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/* Submit */}
                        <div className="pt-8">
                            <button type="submit" className="w-full bg-white text-black py-4 text-sm uppercase font-bold tracking-widest hover:bg-gray-200 transition-colors">
                                &gt; {t('partnership.submit')}
                            </button>
                        </div>
                    </form>
                )}
            </div>

            <div className="page-footer">
                <Link to="/" className="btn-core">
                    <span>←</span> [{t('common.backToCore')}]
                </Link>
            </div>
        </div>
    );
}
