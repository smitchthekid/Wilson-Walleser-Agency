import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const cards = [
        {
            title: "Airbnb Listings",
            description: "Curated private properties near the venue.",
            link: "/airbnbs",
            icon: (
                <svg className="w-12 h-12 text-gold-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            )
        },
        {
            title: "Recommended Hotels",
            description: "Comfortable hotel stays for every budget.",
            link: "/hotels",
            icon: (
                <svg className="w-12 h-12 text-gold-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            )
        },
        {
            title: "Local Eateries",
            description: "Explore the best dining spots in La Crosse.",
            link: "/eateries",
            icon: (
                <svg className="w-12 h-12 text-gold-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col">

            {/* Hero Section / Save the Date */}
            <div className="py-20 px-4 text-center border-b border-neutral-900">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-serif text-white">
                        Wilson-Walleser <span className="text-gold-600 italic block mt-2">Guest Guide</span>
                    </h1>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-neutral-400 text-lg md:text-xl font-serif tracking-wide mt-8">
                        <div className="flex items-center gap-2">
                            <span className="text-gold-600">June 27th, 2026</span>
                        </div>
                        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold-900/50"></div>
                        <div className="flex items-center gap-2">
                            <span>The Hatchery Riverside</span>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto mt-12 text-center">
                        <h3 className="text-2xl font-serif text-white mb-3">Hatchery Riverside Hotel & Event Venue</h3>
                        <p className="text-neutral-400 mb-2 leading-relaxed font-light text-lg">
                            Located along the Mississippi River in Riverside Park, just steps from downtown La Crosse, Wisconsin.
                        </p>

                    </div>

                    {/* Navigation Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-16 px-4">
                        {cards.map((card, idx) => (
                            <Link
                                key={idx}
                                to={card.link}
                                className="group block bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-8 hover:border-gold-600/30 transition-all duration-500 hover:bg-neutral-900/80 text-center h-full flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-gold-900/10"
                            >
                                <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-500 mb-6 opacity-80 group-hover:opacity-100">
                                    {/* Icon color update handled in cards array below, but need to update the SVG there too. Wait, cards are defined at top of file. */}
                                    {card.icon}
                                </div>
                                <h2 className="text-xl font-serif text-white mb-3 group-hover:text-gold-500 transition-colors tracking-wide">
                                    {card.title}
                                </h2>
                                <p className="text-neutral-500 group-hover:text-neutral-400 transition-colors text-sm font-light leading-relaxed">
                                    {card.description}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <p className="text-sm text-gold-600/80 italic font-serif mt-8 mb-4">
                        * On-site boutique hotel rooms are reserved for the wedding party.
                    </p>

                </div>
            </div>

            {/* CTAs Section */}
            <div className="py-16 px-4 bg-neutral-900/30">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Venue CTA */}
                    <div className="group bg-neutral-900 border border-neutral-800 p-0 rounded-2xl text-center overflow-hidden hover:border-gold-900/40 transition-all hover:shadow-xl hover:shadow-gold-900/10 flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                                alt="Hatchery Riverside Venue"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute bottom-4 left-0 right-0">
                                <h3 className="text-2xl font-serif text-white drop-shadow-md">Hatchery <span className="text-gold-500 italic">Riverside</span></h3>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-neutral-400 text-sm mb-4 flex-grow leading-relaxed">
                                Historic riverside property set within Riverside Park along the Mississippi River. Luxury boutique hotel rooms and event space.
                            </p>
                            <a
                                href="https://www.hatcheryriverside.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 px-6 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded font-medium transition-colors border border-neutral-700/50"
                            >
                                Visit Venue Website
                            </a>
                        </div>
                    </div>

                    {/* Wedding Website CTA */}
                    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center space-y-4 hover:border-gold-900/40 transition-colors flex flex-col justify-center h-full">
                        <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-full flex items-center justify-center text-gold-600 mb-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-serif text-white">Guest Guide</h3>
                        <p className="text-neutral-400 text-sm">
                            You’re currently viewing the Wilson–Walleser travel guide. Be on the lookout for RSVPs by mail or text.
                        </p>
                        <div className="mt-auto pt-2">
                            <span className="text-xs text-neutral-600 uppercase tracking-widest font-semibold">Official Website Coming Soon</span>
                        </div>
                    </div>

                    {/* Address Update CTA */}
                    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center space-y-4 hover:border-gold-900/40 transition-colors flex flex-col justify-center h-full">
                        <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-full flex items-center justify-center text-gold-600 mb-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-2xl font-serif text-white leading-tight">Need to Update your contact details?</h3>
                        <p className="text-neutral-400 text-sm">
                            Lookup your profile to update your address, guest details, or provide your phone number for text updates.
                        </p>
                        <a
                            href="https://www.zola.com/addr/vvMMmNKlQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-3 px-6 bg-gold-600 hover:bg-gold-500 text-black rounded font-bold uppercase tracking-wide transition-all hover:shadow-[0_0_20px_rgba(202,138,4,0.2)] mt-auto"
                        >
                            Update Guest Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
