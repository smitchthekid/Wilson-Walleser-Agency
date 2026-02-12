import React, { useState, useEffect } from 'react';

const themes = {
    original: {
        name: "Legacy Yellow",
        colors: {
            500: '#eab308',
            600: '#ca8a04',
            900: '#713f12',
        }
    },
    metallic: {
        name: "True Metallic Gold",
        colors: {
            500: '#D4AF37',
            600: '#AA8C2C',
            900: '#42360E',
        }
    },
    champagne: {
        name: "Champagne Shimmer",
        colors: {
            500: '#F5E0B6',
            600: '#D4C6A8',
            900: '#5C5346',
        }
    },
    sand: {
        name: "Soft Sand",
        colors: {
            500: '#C6A87C',
            600: '#A68A5C',
            900: '#3D3321',
        }
    }
};

const StyleConfigurator: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState('metallic');

    useEffect(() => {
        // Load saved theme
        const saved = localStorage.getItem('activeTheme');
        if (saved && themes[saved as keyof typeof themes]) {
            applyTheme(saved);
        } else {
            applyTheme('metallic'); // Default to new gold
        }
    }, []);

    const applyTheme = (themeKey: string) => {
        const theme = themes[themeKey as keyof typeof themes];
        setActiveTheme(themeKey);
        localStorage.setItem('activeTheme', themeKey);

        const root = document.documentElement;
        root.style.setProperty('--color-gold-500', theme.colors[500]);
        root.style.setProperty('--color-gold-600', theme.colors[600]);
        root.style.setProperty('--color-gold-900', theme.colors[900]);
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-neutral-900 border border-neutral-700 text-white p-3 rounded-full shadow-lg hover:bg-neutral-800 transition-colors z-[100]"
                title="Style Configurator"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-2xl z-[100] w-80 animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-serif text-lg">Style Configurator</h3>
                <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>

            <div className="space-y-3">
                {Object.entries(themes).map(([key, theme]) => (
                    <button
                        key={key}
                        onClick={() => applyTheme(key)}
                        className={`w-full flex items-center p-3 rounded-lg border transition-all ${activeTheme === key
                                ? 'bg-neutral-800 border-white text-white'
                                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                            }`}
                    >
                        <div
                            className="w-6 h-6 rounded-full mr-3 border border-white/20"
                            style={{ backgroundColor: theme.colors[500] }}
                        ></div>
                        <span className="font-medium text-sm">{theme.name}</span>
                        {activeTheme === key && (
                            <svg className="w-4 h-4 ml-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        )}
                    </button>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-500 text-center">
                Refreshes applied instantly.<br />Persisted locally.
            </div>
        </div>
    );
};

export default StyleConfigurator;
