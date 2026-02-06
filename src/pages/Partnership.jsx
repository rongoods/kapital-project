import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PartnershipForm from '../components/PartnershipForm';

export default function Partnership() {
    const { t } = useLanguage();

    return (
        <div className="container page-wrapper animate-fade-in">
            <div className="page-header border-none mb-8">
                <h1 className="page-title text-4xl md:text-6xl">{t('partnership.title')}</h1>
                <p className="page-subtitle text-xs">{t('partnership.subtitle')}</p>
            </div>

            <PartnershipForm />

            <div className="page-footer">
                <Link to="/" className="btn-core">
                    <span>←</span> [{t('common.backToCore')}]
                </Link>
            </div>
        </div>
    );
}
