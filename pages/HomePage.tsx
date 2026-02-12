import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const cards = [
        {
            title: "Airbnb Listings",
            description: "Curated private properties near the venue.",
            link: "/airbnbs",
            icon: (
                <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            )
        },
        {
            title: "Recommended Hotels",
            description: "Comfortable hotel stays for every budget.",
            link: "/hotels",
            icon: (
                <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            )
        },
        {
            title: "Local Eateries",
            description: "Explore the best dining spots in La Crosse.",
            link: "/eateries",
            icon: (
                <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> // Using a generic icon, maybe book/menu? Or just fork/knife
            )
        }
    ];

    // Actually the SVG path for utensils is complex. I'll use a simple "Glass" or generic marker if I can't guess it.
    // Let's us a simple "Map Marker" for eateries, implying "Places to go".
    const mapMarkerIcon = (
        <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    );

    cards[2].icon = mapMarkerIcon;

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4">
            <div className="text-center mb-16 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
                    Wilson-Walleser <span className="text-yellow-600 italic block mt-2">Guest Guide</span>
                </h1>
                <p className="text-neutral-400 text-xl leading-relaxed">
                    Welcome to La Crosse. We've curated a selection of the best places to stay and eat for our wedding weekend.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {cards.map((card, idx) => (
                    <Link
                        key={idx}
                        to={card.link}
                        className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-yellow-700/50 transition-all duration-300 hover:bg-neutral-800/50 hover:-translate-y-2 text-center"
                    >
                        <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                            {card.icon}
                        </div>
                        <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-yellow-500 transition-colors">
                            {card.title}
                        </h2>
                        <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                            {card.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
