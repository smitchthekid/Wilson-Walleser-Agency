import React, { useState, useEffect } from 'react';

// Google Fonts Data
const googleFonts = [
    { name: "Cinzel", value: '"Cinzel", serif', url: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" },
    { name: "Playfair Display", value: '"Playfair Display", serif', url: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" },
    { name: "Inter", value: '"Inter", sans-serif', url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" },
    { name: "Lato", value: '"Lato", sans-serif', url: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" },
    { name: "Cormorant Garamond", value: '"Cormorant Garamond", serif', url: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" },
    { name: "Proza Libre", value: '"Proza Libre", sans-serif', url: "https://fonts.googleapis.com/css2?family=Proza+Libre:wght@400;500;600&display=swap" },
    { name: "Montserrat", value: '"Montserrat", sans-serif', url: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" },
    { name: "Open Sans", value: '"Open Sans", sans-serif', url: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" },
];

// Local Fonts Data (Must allow specific selection)
const localFonts = [
    { name: "Bidenatrial", value: 'Bidenatrial, serif' },
    { name: "Crown Avenue", value: 'CrownAvenue, serif' },
    { name: "Geraldine", value: 'Geraldine, cursive' },
    { name: "Great Vibes", value: 'GreatVibes, cursive' },
    { name: "Madison Sauvage", value: 'MadisonSauvage, cursive' },
    { name: "Orange Avenue", value: 'OrangeAvenue, serif' },
    { name: "Orange Avenue Outline", value: 'OrangeAvenueOutline, serif' },
    { name: "Perfecto Calligraphy", value: 'PerfectoCalligraphy, cursive' },
    { name: "Pinyon Script", value: 'PinyonScript, cursive' },
    { name: "Priestacy", value: 'Priestacy, serif' },
    { name: "Zaslia", value: 'Zaslia, serif' },
];

const allFonts = [...googleFonts, ...localFonts];

const themes = {
    burnished: { name: "Burnished Gold", colors: { 500: '#C5A059', 600: '#A68442', 900: '#453518' } },
    burnished_single: { name: "Burnished Gold (Single)", colors: { 500: '#C5A059', 600: '#A68442', 900: '#453518' } },
    pearl: { name: "Creamy Pearl", colors: { 500: '#E8DCCA', 600: '#C9B8A0', 900: '#594F3F' } },
    pearl_single: { name: "Creamy Pearl (Single)", colors: { 500: '#E8DCCA', 600: '#C9B8A0', 900: '#594F3F' } },
    champagne: { name: "Champagne Shimmer", colors: { 500: '#F5E0B6', 600: '#D4C6A8', 900: '#5C5346' } },
    champagne_single: { name: "Champagne Shimmer (Single)", colors: { 500: '#F5E0B6', 600: '#D4C6A8', 900: '#5C5346' } },
    sand: { name: "Soft Sand", colors: { 500: '#C6A87C', 600: '#A68A5C', 900: '#3D3321' } },
    sand_single: { name: "Soft Sand (Single)", colors: { 500: '#C6A87C', 600: '#A68A5C', 900: '#3D3321' } },
    honey: { name: "Honey Gold", colors: { 500: '#E1B155', 600: '#BF9038', 900: '#5C4215' } },
    honey_single: { name: "Honey Gold (Single)", colors: { 500: '#E1B155', 600: '#BF9038', 900: '#5C4215' } },
    rosegold: { name: "Rose Gold", colors: { 500: '#E6BEAC', 600: '#CC9D8A', 900: '#694132' } },
    rosegold_single: { name: "Rose Gold (Single)", colors: { 500: '#E6BEAC', 600: '#CC9D8A', 900: '#694132' } },
    platinum: { name: "Platinum", colors: { 500: '#C5C6C7', 600: '#A3A4A6', 900: '#404142' } },
    platinum_single: { name: "Platinum (Single)", colors: { 500: '#C5C6C7', 600: '#A3A4A6', 900: '#404142' } },
    bronze: { name: "Antique Bronze", colors: { 500: '#B09B74', 600: '#8F7C56', 900: '#3E3625' } },
    bronze_single: { name: "Antique Bronze (Single)", colors: { 500: '#B09B74', 600: '#8F7C56', 900: '#3E3625' } },
    blush: { name: "Blush Champagne", colors: { 500: '#EDCFA9', 600: '#D0B199', 900: '#624A3C' } },
    blush_single: { name: "Blush Champagne (Single)", colors: { 500: '#EDCFA9', 600: '#D0B199', 900: '#624A3C' } },
    sterling: { name: "Sterling Rose", colors: { 500: '#D5C2BA', 600: '#B7A098', 900: '#54413A' } },
    sterling_single: { name: "Sterling Rose (Single)", colors: { 500: '#D5C2BA', 600: '#B7A098', 900: '#54413A' } },
    whitegold: { name: "Pale White Gold", colors: { 500: '#D3BB8E', 600: '#B19A6F', 900: '#4E412B' } },
    whitegold_single: { name: "Pale White Gold (Single)", colors: { 500: '#D3BB8E', 600: '#B19A6F', 900: '#4E412B' } }
};

const StyleConfigurator: React.FC = () => {
    // Ensure this component DOES NOT render in production
    if (!import.meta.env.DEV) {
        return null;
    }

    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState('pearl_single');
    const [customColors, setCustomColors] = useState(themes.pearl_single.colors);

    // Granular Font State
    const [brandLogoFont, setBrandLogoFont] = useState(localFonts.find(f => f.name === "Great Vibes")?.value || localFonts[0].value);
    const [brandTaglineFont, setBrandTaglineFont] = useState(localFonts.find(f => f.name === "Orange Avenue")?.value || googleFonts[1].value);
    const [brandHeroFont, setBrandHeroFont] = useState(localFonts.find(f => f.name === "Crown Avenue")?.value || localFonts[0].value);
    const [brandSubFont, setBrandSubFont] = useState(localFonts.find(f => f.name === "Great Vibes")?.value || localFonts[0].value);
    const [headingFont, setHeadingFont] = useState(localFonts.find(f => f.name === "Orange Avenue")?.value || googleFonts[1].value);
    const [bodyFont, setBodyFont] = useState(googleFonts.find(f => f.name === "Inter")?.value || googleFonts[2].value);

    // Filtered lists for UI
    const serifFonts = allFonts.filter(f => f.value.includes('serif') || f.value.includes('cursive'));
    const sansFonts = allFonts.filter(f => f.value.includes('sans-serif'));

    // Additional state for base text color
    const [baseTextColor, setBaseTextColor] = useState('#e5e5e5'); // neutral-200 approx

    useEffect(() => {
        // Load saved settings
        const savedTheme = localStorage.getItem('activeTheme');
        const savedColors = localStorage.getItem('customColors');
        const savedTextColor = localStorage.getItem('baseTextColor');

        const savedBrandLogo = localStorage.getItem('brandLogoFont');
        const savedBrandTagline = localStorage.getItem('brandTaglineFont');
        const savedBrandHero = localStorage.getItem('brandHeroFont');
        const savedBrandSub = localStorage.getItem('brandSubFont');
        const savedHeading = localStorage.getItem('headingFont');
        const savedBody = localStorage.getItem('bodyFont');

        if (savedTheme && themes[savedTheme as keyof typeof themes]) {
            setActiveTheme(savedTheme);
            setCustomColors(themes[savedTheme as keyof typeof themes].colors);
        }

        if (savedColors) {
            try {
                setCustomColors(JSON.parse(savedColors));
                if (savedTheme === 'custom') setActiveTheme('custom');
            } catch (e) {
                console.error("Failed to parse saved colors", e);
            }
        }

        if (savedTextColor) setBaseTextColor(savedTextColor);
        if (savedBrandLogo) setBrandLogoFont(savedBrandLogo);
        if (savedBrandTagline) setBrandTaglineFont(savedBrandTagline);
        if (savedBrandHero) setBrandHeroFont(savedBrandHero);
        if (savedBrandSub) setBrandSubFont(savedBrandSub);
        if (savedHeading) setHeadingFont(savedHeading);
        if (savedBody) setBodyFont(savedBody);

    }, []);

    // Apply Styles Effect
    useEffect(() => {
        // 1. Apply CSS Variables for Colors
        const root = document.documentElement;
        root.style.setProperty('--color-gold-500', customColors[500]);
        root.style.setProperty('--color-gold-600', customColors[600]);
        root.style.setProperty('--color-gold-900', customColors[900]);

        // 2. Load Google Fonts
        // Consolidate URLs from selected fonts if they are Google Fonts
        const activeFonts = [brandLogoFont, brandTaglineFont, brandHeroFont, brandSubFont, headingFont, bodyFont];
        const googleUrls = new Set<string>();
        activeFonts.forEach(fontVal => {
            const found = googleFonts.find(g => g.value === fontVal);
            if (found) googleUrls.add(found.url);
        });

        // Remove old dynamic links
        document.querySelectorAll('.dynamic-font-loader').forEach(el => el.remove());

        // Add new links
        googleUrls.forEach(url => {
            const link = document.createElement('link');
            link.className = 'dynamic-font-loader';
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        });

        // 3. Inject CSS Overrides
        const styleId = 'theme-overrides';
        let style = document.getElementById(styleId);
        if (!style) {
            style = document.createElement('style');
            style.id = styleId;
            document.head.appendChild(style);
        }

        style.innerHTML = `
            :root {
                --font-brand-logo: ${brandLogoFont};
                --font-brand-tagline: ${brandTaglineFont};
                --font-brand-hero: ${brandHeroFont};
                --font-brand-sub: ${brandSubFont};
                --font-display: ${headingFont};
                --font-serif: ${headingFont};
                --font-sans: ${bodyFont};
            }
            /* Override Tailwind Utilities & Custom Classes */
            .font-brand-logo { font-family: var(--font-brand-logo) !important; }
            .font-brand-tagline { font-family: var(--font-brand-tagline) !important; }
            .font-brand-hero { font-family: var(--font-brand-hero) !important; }
            .font-brand-sub { font-family: var(--font-brand-sub) !important; }
            
            .font-display { font-family: var(--font-display) !important; }
            .font-serif { font-family: var(--font-serif) !important; }
            .font-sans { font-family: var(--font-sans) !important; }
            
            /* Specific Header Overrides if needed */
            h1, h2, h3, h4, h5, h6 { font-family: var(--font-display) !important; }
            
            /* Base Text Color Override */
            body, .text-neutral-200 { color: ${baseTextColor} !important; }

            /* Single Color Theme Overrides */
            ${activeTheme.endsWith('_single') ? `
                /* Global Headings & Gold Text */
                h1, h2, h3, h4, h5, h6, 
                h1 span, h2 span, h3 span, h4 span, h5 span, h6 span,
                .text-gold-500, .text-gold-600 {
                    color: var(--color-gold-500) !important;
                    fill: var(--color-gold-500) !important;
                }
                
                /* Force Hero Section to be Single Color */
                .hero-section, .hero-section * {
                    color: var(--color-gold-500) !important;
                }
            ` : ''}
        `;

    }, [customColors, brandLogoFont, brandHeroFont, brandSubFont, headingFont, bodyFont, baseTextColor, activeTheme]);

    const handleThemeChange = (key: string) => {
        setActiveTheme(key);
        if (key !== 'custom') {
            const theme = themes[key as keyof typeof themes];
            setCustomColors(theme.colors);
            localStorage.setItem('activeTheme', key);
        }
    };

    const handleColorChange = (shade: keyof typeof customColors, value: string) => {
        const newColors = { ...customColors, [shade]: value };
        setCustomColors(newColors);
        setActiveTheme('custom');
        localStorage.setItem('activeTheme', 'custom');
        localStorage.setItem('customColors', JSON.stringify(newColors));
    };

    const handleFontSelection = (type: 'logo' | 'tagline' | 'hero' | 'sub' | 'heading' | 'body', value: string) => {
        if (type === 'logo') {
            setBrandLogoFont(value);
            localStorage.setItem('brandLogoFont', value);
        } else if (type === 'tagline') {
            setBrandTaglineFont(value);
            localStorage.setItem('brandTaglineFont', value);
        } else if (type === 'hero') {
            setBrandHeroFont(value);
            localStorage.setItem('brandHeroFont', value);
        } else if (type === 'sub') {
            setBrandSubFont(value);
            localStorage.setItem('brandSubFont', value);
        } else if (type === 'heading') {
            setHeadingFont(value);
            localStorage.setItem('headingFont', value);
        } else {
            setBodyFont(value);
            localStorage.setItem('bodyFont', value);
        }
    };

    const handleTextColorChange = (value: string) => {
        setBaseTextColor(value);
        localStorage.setItem('baseTextColor', value);
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-neutral-900 border border-gold-600 text-gold-500 p-3 rounded-full shadow-lg hover:bg-neutral-800 transition-colors z-[100]"
                title="Open Style Configurator (Dev Only)"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </button>
        );
    }

    return (
        <div
            className="fixed bottom-4 right-4 bg-neutral-950 border border-gold-900/50 p-6 rounded-2xl shadow-2xl z-[100] w-96 max-h-[90vh] overflow-y-auto animate-fade-in-up text-sm"
            style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-gold-500 font-serif text-lg font-bold">Design Studio</h3>
                <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>

            {/* Themes Section */}
            <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-semibold">Color Preset</h4>
                <div className="grid grid-cols-2 gap-2">
                    {Object.entries(themes).map(([key, theme]) => (
                        <button
                            key={key}
                            onClick={() => handleThemeChange(key)}
                            className={`flex items-center p-2 rounded-lg border transition-all ${activeTheme === key
                                ? 'bg-neutral-800 border-gold-500 text-white'
                                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                                }`}
                        >
                            <div
                                className="w-3 h-3 rounded-full mr-2 border border-white/20"
                                style={{ backgroundColor: theme.colors[500] }}
                            ></div>
                            <span className="font-medium text-xs">{theme.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Custom Colors Section */}
            <div className="mb-6 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-semibold">Palette Customization</h4>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-xs text-neutral-400">Primary (500)</label>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-neutral-500">{customColors[500]}</span>
                            <input
                                type="color"
                                value={customColors[500]}
                                onChange={(e) => handleColorChange(500, e.target.value)}
                                className="w-6 h-6 rounded cursor-pointer bg-transparent border-none"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="text-xs text-neutral-400">Base Text</label>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-neutral-500">{baseTextColor}</span>
                            <input
                                type="color"
                                value={baseTextColor}
                                onChange={(e) => handleTextColorChange(e.target.value)}
                                className="w-6 h-6 rounded cursor-pointer bg-transparent border-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fonts Section */}
            <div className="mb-2 space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-2 font-semibold">Typography</h4>

                {/* Brand Logo Font Selector */}
                <div>
                    <label className="block text-xs text-gold-500 mb-1">Navigation Logo</label>
                    <select
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-white text-xs"
                        value={brandLogoFont}
                        onChange={(e) => handleFontSelection('logo', e.target.value)}
                    >
                        <optgroup label="Local Fonts">
                            {localFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Google Fonts">
                            {googleFonts.filter(f => f.value.includes('serif') || f.value.includes('cursive')).map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>

                {/* Brand Tagline Font Selector */}
                <div>
                    <label className="block text-xs text-gold-500 mb-1">Navigation Tagline</label>
                    <select
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-white text-xs"
                        value={brandTaglineFont}
                        onChange={(e) => handleFontSelection('tagline', e.target.value)}
                    >
                        <optgroup label="Serif / Display">
                            {serifFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Sans Serif">
                            {sansFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>

                {/* Hero Title Font Selector */}
                <div>
                    <label className="block text-xs text-gold-500 mb-1">Hero Title (Wilson-Walleser)</label>
                    <select
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-white text-xs"
                        value={brandHeroFont}
                        onChange={(e) => handleFontSelection('hero', e.target.value)}
                    >
                        <optgroup label="Local Fonts">
                            {localFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Google Fonts">
                            {googleFonts.filter(f => f.value.includes('serif') || f.value.includes('cursive')).map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>

                {/* Hero Subtitle Font Selector */}
                <div>
                    <label className="block text-xs text-gold-500 mb-1">Hero Subtitle (Guest Guide)</label>
                    <select
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-white text-xs"
                        value={brandSubFont}
                        onChange={(e) => handleFontSelection('sub', e.target.value)}
                    >
                        <optgroup label="Local Fonts">
                            {localFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Google Fonts">
                            {googleFonts.filter(f => f.value.includes('serif') || f.value.includes('cursive')).map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>

                {/* Heading Font Selector */}
                <div>
                    <label className="block text-xs text-neutral-400 mb-1">Headings (H1-H6)</label>
                    <select
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-white text-xs"
                        value={headingFont}
                        onChange={(e) => handleFontSelection('heading', e.target.value)}
                    >
                        <optgroup label="Serif / Display">
                            {serifFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Sans Serif">
                            {sansFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>

                {/* Body Font Selector */}
                <div>
                    <label className="block text-xs text-neutral-400 mb-1">Body Text</label>
                    <select
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-white text-xs"
                        value={bodyFont}
                        onChange={(e) => handleFontSelection('body', e.target.value)}
                    >
                        <optgroup label="Sans Serif">
                            {sansFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Serif">
                            {serifFonts.map(f => (
                                <option key={f.name} value={f.value}>{f.name}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[10px] text-neutral-600 text-center uppercase tracking-widest">
                Local Development Tool Only
            </div>
        </div>
    );
};

export default StyleConfigurator;
