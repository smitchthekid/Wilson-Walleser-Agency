import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const cards = [
        {
            titlePart1: "Airbnb",
            titlePart2: "Listings",
            description: "Curated private properties near the venue.",
            link: "/airbnbs",
            buttonText: "View Listings",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-53566277/original/2c7b1e97-5509-4a7a-b60b-e71e251cd54f.jpeg"
        },
        {
            titlePart1: "Recommended",
            titlePart2: "Hotels",
            description: "Comfortable hotel stays for every budget.",
            link: "/hotels",
            buttonText: "View Hotels",
            image: "/images/IMG_3596_Original-1920w.webp"
        },
        {
            titlePart1: "Local",
            titlePart2: "Eateries",
            description: "Explore the best dining spots in La Crosse.",
            link: "/eateries",
            buttonText: "View Eateries",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col">

            {/* Hero Section / Save the Date */}
            <div className="py-20 px-4 text-center border-b border-neutral-900">
                <div className="hero-section max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-brand-hero text-white">
                        Wilson-Walleser <span className="font-brand-sub text-gold-500 italic block mt-2">Guest Guide</span>
                    </h1>

                    {/* Date Section */}
                    <div className="flex flex-col gap-3 text-center mt-8">
                        <div className="text-gold-500 text-xl md:text-2xl font-serif tracking-wide">
                            June 27th, 2026
                        </div>
                        <div className="text-neutral-300 text-lg md:text-xl font-serif tracking-wide flex justify-center items-center gap-2">
                            <span>Hatchery Riverside</span>
                            <span className="text-gold-500/50">|</span>
                            <span>La Crosse, WI</span>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto mt-12 text-center">
                        <p className="text-white mb-6 leading-relaxed font-light text-lg font-sans">
                            Save the date and join us as we celebrate our wedding at the historic Hatchery Hotel in La Crosse, WI, June 27, 2026.
                        </p>
                        <p className="text-gold-500 text-3xl font-brand-sub italic">
                            - Mitch, Katelyn, & Bobby
                        </p>

                    </div>
                </div>

                {/* Navigation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto mt-16 text-left">
                    {cards.map((card, idx) => (
                        <Link
                            key={idx}
                            to={card.link}
                            className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-0 overflow-hidden hover:border-gold-900/40 transition-all duration-500 text-center h-full flex flex-col hover:shadow-xl hover:shadow-gold-900/10"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={card.image}
                                    alt={`${card.titlePart1} ${card.titlePart2}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity" />
                                <div className="absolute bottom-4 left-0 right-0">
                                    <h3 className="text-2xl font-serif text-white drop-shadow-md">
                                        {card.titlePart1} <span className="text-gold-500 italic">{card.titlePart2}</span>
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow items-center">
                                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors text-base font-light leading-relaxed mb-6 font-sans">
                                    {card.description}
                                </p>
                                <div className="mt-6 py-3 px-8 bg-gold-600 text-black rounded font-bold uppercase tracking-widest text-sm hover:bg-gold-900 hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 w-full">
                                    {card.buttonText}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <p className="text-sm text-gold-600/80 italic font-serif mt-12 mb-4">
                    * On-site boutique hotel rooms are reserved for the wedding party.
                </p>

            </div>

            {/* CTAs Section */}
            <div className="py-20 px-4 bg-neutral-900/30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Venue CTA */}
                    <div className="group bg-neutral-900 border border-neutral-800 p-0 rounded-2xl text-center overflow-hidden hover:border-gold-900/40 transition-all hover:shadow-xl hover:shadow-gold-900/10 flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src="/images/hatchimg_1189~~6525ac113bede (1).jpg"
                                alt="Hatchery Riverside Venue"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity" />
                            <div className="absolute bottom-4 left-0 right-0">
                                <h3 className="text-2xl font-serif text-white drop-shadow-md">Hatchery <span className="text-gold-500 italic">Riverside</span></h3>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow items-center">
                            <p className="text-neutral-400 text-base mb-4 leading-relaxed font-sans">
                                Historic riverside property set within Riverside Park along the Mississippi River.
                            </p>
                            <a
                                href="https://www.hatcheryriverside.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 px-6 bg-gold-600 text-black rounded font-bold uppercase tracking-widest transition-all duration-300 hover:bg-gold-900 hover:text-white hover:shadow-xl hover:-translate-y-0.5 mt-6"
                            >
                                Visit Venue Website
                            </a>
                        </div>
                    </div>

                    {/* Wedding Website CTA */}
                    <div className="group bg-neutral-900 border border-neutral-800 p-0 rounded-2xl text-center overflow-hidden hover:border-gold-900/40 transition-all hover:shadow-xl hover:shadow-gold-900/10 flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80"
                                alt="Guest Guide"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity" />
                            <div className="absolute bottom-4 left-0 right-0">
                                <h3 className="text-2xl font-serif text-white drop-shadow-md">Official <span className="text-gold-500 italic">Wedding Site</span></h3>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow items-center">
                            <p className="text-neutral-400 text-base mb-4 leading-relaxed font-sans">
                                You’re currently viewing the Wilson–Walleser travel guide. Be on the lookout for RSVPs by mail or text.
                            </p>
                            <div className="mt-6 pt-2 w-full">
                                <span className="block w-full py-3 px-6 bg-neutral-800 text-neutral-500 rounded font-medium border border-neutral-700/50 uppercase text-xs tracking-widest cursor-not-allowed">
                                    Official Website Coming Soon
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Address Update CTA */}
                    <div className="group bg-neutral-900 border border-neutral-800 p-0 rounded-2xl text-center overflow-hidden hover:border-gold-900/40 transition-all hover:shadow-xl hover:shadow-gold-900/10 flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
                                alt="Update Contact"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity" />
                            <div className="absolute bottom-4 left-0 right-0">
                                <h3 className="text-2xl font-serif text-white drop-shadow-md">Update <span className="text-gold-500 italic">Details</span></h3>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow items-center">
                            <p className="text-neutral-400 text-base mb-4 leading-relaxed font-sans">
                                Lookup your profile to update your address, guest details, or provide your phone number.
                            </p>
                            <a
                                href="https://www.zola.com/addr/vvMMmNKlQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 px-6 bg-gold-600 text-black rounded font-bold uppercase tracking-widest transition-all duration-300 hover:bg-gold-900 hover:text-white hover:shadow-xl hover:-translate-y-0.5 mt-6"
                            >
                                Update Guest Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
