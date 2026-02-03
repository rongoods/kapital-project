import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const navItems = [
    { label: 'MANIFESTO', path: '/' }, // Placeholder
    { label: 'STUDIOS', path: '/' },
    { label: 'VENTURES', path: '/' },
    { label: 'CONTACT', path: '/' }
  ];

  return (
    <header className="app-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          KAPITAL STUDIO
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="nav-link"
            >
              [{item.label}]
            </Link>
          ))}
        </nav>

        <button className="mobile-menu-btn">
          [MENU]
        </button>
      </div>
    </header>
  );
}
