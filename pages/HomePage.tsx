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
                <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col">

            {/* Hero Section / Save the Date */}
            <div className="py-20 px-4 text-center border-b border-neutral-900">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-serif text-white">
                        Wilson-Walleser <span className="text-yellow-600 italic block mt-2">Guest Guide</span>
                    </h1>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-neutral-300 text-lg md:text-xl font-medium tracking-wide mt-8">
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-600">June 27th, 2026</span>
                        </div>
                        <div className="hidden md:block w-2 h-2 rounded-full bg-neutral-800"></div>
                        <div className="flex items-center gap-2">
                            <span>The Hatchery Riverside</span>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto mt-8 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800">
                        <h3 className="text-xl font-serif text-white mb-2">Hatchery Riverside Hotel & Event Venue</h3>
                        <p className="text-neutral-400 mb-4 leading-relaxed">
                            Located along the Mississippi River in Riverside Park, just steps from downtown La Crosse, Wisconsin.
                        </p>
                        <p className="text-sm text-yellow-600/80 italic">
                            * On-site boutique hotel rooms are reserved for the wedding party.
                        </p>
                        <a href="https://hatcheryriverside.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-neutral-500 hover:text-white transition-colors underline decoration-neutral-700 underline-offset-4">
                            hatcheryriverside.com
                        </a>
                    </div>
                </div>
            </div>

            {/* CTAs Section */}
            <div className="py-16 px-4 bg-neutral-900/30">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Wedding Website CTA */}
                    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center space-y-4 hover:border-yellow-900/40 transition-colors">
                        <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-full flex items-center justify-center text-yellow-600 mb-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-serif text-white">Official Wedding Website</h3>
                        <p className="text-neutral-400 text-sm">
                            You’re currently viewing the Wilson–Walleser travel guide to help you plan your trip and travel plans. Be on the lookout for RSVPs by mail or text in the coming months.
                        </p>
                        <button disabled className="w-full py-3 px-6 bg-neutral-800 text-neutral-500 rounded font-medium cursor-not-allowed border border-neutral-700/50 mt-2">
                            Coming Soon
                        </button>
                    </div>

                    {/* Address Update CTA */}
                    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center space-y-4 hover:border-yellow-900/40 transition-colors">
                        <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-full flex items-center justify-center text-yellow-600 mb-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-2xl font-serif text-white">We Need Your Info!</h3>
                        <p className="text-neutral-400 text-sm">
                            Please help us update our guest list with your current mailing address and contact information.
                        </p>
                        <a
                            href="https://www.zola.com/addr/vvMMmNKlQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-3 px-6 bg-yellow-600 hover:bg-yellow-500 text-black rounded font-bold uppercase tracking-wide transition-all hover:shadow-[0_0_20px_rgba(202,138,4,0.2)] mt-2"
                        >
                            Update My Address
                        </a>
                    </div>
                </div>
            </div>

            {/* Accommodations & Guide Section */}
            <div className="flex-grow py-16 px-4">
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* Hero Banner Underlay */}
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-12 group">
                        {/* Background Image Placeholder - using a gradient/pattern for now since I can't upload images, but set up for it */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900">
                            {/* If user had an image, it would go here: <img src="..." className="w-full h-full object-cover" /> */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        </div>
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 drop-shadow-lg">
                                La Crosse <span className="text-yellow-500 italic">Travel Guide</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
                                Information on where to stay, eat, and explore during your visit.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {cards.map((card, idx) => (
                            <Link
                                key={idx}
                                to={card.link}
                                className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-yellow-700/50 transition-all duration-300 hover:bg-neutral-800/50 hover:-translate-y-2 text-center h-full flex flex-col items-center justify-center"
                            >
                                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                                    {card.icon}
                                </div>
                                <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-yellow-500 transition-colors">
                                    {card.title}
                                </h2>
                                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors text-sm">
                                    {card.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
