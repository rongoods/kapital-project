import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();

  const navItems = [
    { label: t('header.manifesto'), path: '/' },
    { label: t('header.studios'), path: '/' },
    { label: t('header.ventures'), path: '/' },
    { label: t('header.contact'), path: '/contact' }
  ];

  return (
    <header className="app-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          KAPITAL STUDIO
        </Link>

        <nav className="nav-links">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="nav-link"
            >
              [{item.label}]
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="nav-link font-bold hover:text-white transition-colors"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
          >
            [{language === 'en' ? 'DE' : 'EN'}]
          </button>
        </nav>

        <button className="mobile-menu-btn">
          [{t('header.menu')}]
        </button>
      </div>
    </header>
  );
}
