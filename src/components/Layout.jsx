import React from 'react';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <div className="layout-root">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <footer className="app-footer">
                <p className="footer-text">
                    © {new Date().getFullYear()} KAPITAL STUDIO. ALL RIGHTS RESERVED.
                </p>
            </footer>
        </div>
    );
}
