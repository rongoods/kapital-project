import React from 'react';
import Header from './Header';
import { useLanguage } from '../context/LanguageContext';

export default function Layout({ children }) {
    const { t } = useLanguage();
    return (
        <div className="layout-root">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <footer className="app-footer">
                <p className="footer-text">
                    © {new Date().getFullYear()} {t('footer.rights')}
                </p>
            </footer>
        </div>
    );
}
