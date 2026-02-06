import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function StudioCard({ title, description, link }) {
    const { t } = useLanguage();
    return (
        <Link to={link} className="studio-card group border border-white hover:border-white transition-all">
            <div className="card-content p-8 h-full flex flex-col">
                <div className="card-header mb-4">
                    <h3 className="card-title text-2xl font-header group-hover:text-gray-300 transition-colors">
                        {title}
                    </h3>
                </div>

                <p className="card-desc font-mono text-sm text-gray-400 mb-8 flex-grow">
                    {description}
                </p>

                <div className="card-action mt-auto">
                    <span className="enter-badge font-mono text-xs uppercase tracking-widest border border-white px-4 py-2 group-hover:bg-white group-hover:text-black transition-all">
                        [{t('common.enter')}]
                    </span>
                </div>
            </div>

            {/* Corner accent removed in favor of pure 1px solid white border */}
        </Link>
    );
}
