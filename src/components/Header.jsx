import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: t('header.manifesto'), path: '/' },
    { label: t('header.studios'), path: '/' },
    { label: t('header.ventures'), path: '/' },
    { label: t('header.contact'), path: '/contact' }
  ];

  return (
    <>
      <header className="app-header">
        <div className="container header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
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
              onClick={toggleTheme}
              className="nav-link font-bold hover:text-white transition-colors"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
            >
              [{theme === 'dark' ? 'LIGHT' : 'DARK'}]
            </button>

            <button
              onClick={toggleLanguage}
              className="nav-link font-bold hover:text-white transition-colors"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
            >
              [{language === 'en' ? 'DE' : 'EN'}]
            </button>
          </nav>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            [{isMenuOpen ? t('header.close') || 'CLOSE' : t('header.menu')}]
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              [{item.label}]
            </Link>
          ))}

          <div className="mobile-menu-controls">
            <button
              onClick={toggleTheme}
              className="mobile-nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
            >
              [{theme === 'dark' ? 'LIGHT' : 'DARK'}]
            </button>

            <button
              onClick={toggleLanguage}
              className="mobile-nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
            >
              [{language === 'en' ? 'DE' : 'EN'}]
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
