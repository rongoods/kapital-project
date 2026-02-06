import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Check localStorage or system preference, default to dark
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        const body = window.document.body;

        // Remove previous classes
        root.classList.remove('light-mode', 'dark-mode');
        body.classList.remove('light-mode', 'dark-mode');

        // Add new class
        root.classList.add(`${theme}-mode`);
        body.classList.add(`${theme}-mode`);

        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
