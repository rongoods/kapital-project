import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();
    const [phoneNumbers, setPhoneNumbers] = useState([]);
    const [formState, setFormState] = useState('idle'); // idle, sending, sent

    useEffect(() => {
        // Generate 3 random German mobile numbers
        const generateNumber = () => {
            const prefix = '+49 17';
            const suffix = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
            // Format as +49 17x xxx xx xx
            return `${prefix}${Math.floor(Math.random() * 10)} ${suffix.slice(0, 3)} ${suffix.slice(3, 5)} ${suffix.slice(5)}`;
        };

        setPhoneNumbers([generateNumber(), generateNumber(), generateNumber()]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');
        setTimeout(() => {
            setFormState('sent');
        }, 1500);
    };

    return (
        <div className="container page-wrapper animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">{t('contact.title')}</h1>
                <p className="page-subtitle">{t('contact.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                {/* Contact info side */}
                <section className="space-y-12">
                    {/* Phone Numbers */}
                    <div>
                        <h2 className="font-mono text-xs border-b border-theme pb-2 mb-4 uppercase text-gray-500">
                            {t('contact.phone')}
                        </h2>
                        <ul className="space-y-2 font-header text-2xl md:text-3xl">
                            {phoneNumbers.map((num, i) => (
                                <li key={i} className="tracking-widest hover:text-gray-300 transition-colors cursor-default">
                                    {num}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Email */}
                    <div>
                        <h2 className="font-mono text-xs border-b border-theme pb-2 mb-4 uppercase text-gray-500">
                            {t('contact.email')}
                        </h2>
                        <a href="mailto:info@kapitalstudio.com" className="font-header text-2xl md:text-3xl block hover:underline decoration-1 underline-offset-4 decoration-white">
                            INFO@KAPITALSTUDIO.COM
                        </a>
                    </div>
                </section>

                {/* Forum / Contact Form */}
                <section className="bg-card border border-theme p-8">
                    <h2 className="font-header text-2xl mb-8 border-b border-gray-800 pb-4">
                        {t('contact.forum.title')}
                    </h2>

                    {formState === 'sent' ? (
                        <div className="h-64 flex flex-col items-center justify-center text-center animate-fade-in">
                            <span className="text-4xl mb-4">✓</span>
                            <p className="font-mono text-sm tracking-widest">{t('contact.forum.sent')}</p>
                            <button
                                onClick={() => setFormState('idle')}
                                className="mt-8 font-mono text-xs underline hover:text-white text-gray-500"
                            >
                                [RESET]
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="font-mono text-xs uppercase text-gray-500 block">
                                    {t('contact.forum.name')}
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-[#333] py-2 font-mono text-sm focus:border-theme focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-xs uppercase text-gray-500 block">
                                    {t('contact.forum.email')}
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-[#333] py-2 font-mono text-sm focus:border-theme focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-xs uppercase text-gray-500 block">
                                    {t('contact.forum.message')}
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-b border-[#333] py-2 font-mono text-sm focus:border-theme focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formState === 'sending'}
                                className="w-full border border-theme py-4 font-mono text-sm uppercase bg-accent-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-wait mt-8"
                            >
                                {formState === 'sending' ? t('contact.forum.sending') : t('contact.forum.submit')}
                            </button>
                        </form>
                    )}
                </section>
            </div>

            <div className="page-footer">
                <Link to="/" className="btn-core">
                    <span>←</span> [{t('common.backToCore')}]
                </Link>
            </div>
        </div>
    );
}
