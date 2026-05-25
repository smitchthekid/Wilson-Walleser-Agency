import React from 'react';
import { Link } from 'react-router-dom';

const OFFICIAL_WEDDING_SITE_URL = "https://www.zola.com/wedding/mitchellandkatelyn2026";
const RSVP_URL = "https://www.zola.com/wedding/mitchellandkatelyn2026/rsvp";
const HATCHERY_DIRECTIONS_URL = "https://maps.app.goo.gl/Mfh1iDjqycS2PsCn6";
const ZOLA_SCHEDULE_URL = "https://www.zola.com/wedding/mitchellandkatelyn2026/event";
const ZOLA_REGISTRY_URL = "https://www.zola.com/wedding/mitchellandkatelyn2026/registry";
const ZOLA_GALLERY_URL = "https://www.zola.com/wedding/mitchellandkatelyn2026/photo";

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

    const zolaCards = [
        {
            title: "Schedule",
            description: "View the official wedding schedule and event details on Zola.",
            url: ZOLA_SCHEDULE_URL,
            buttonText: "View Schedule",
            image: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Registry",
            description: "Find the couple's official wedding registry and gift details.",
            url: ZOLA_REGISTRY_URL,
            buttonText: "View Registry",
            image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Gallery",
            description: "Browse wedding photos and shared gallery moments on Zola.",
            url: ZOLA_GALLERY_URL,
            buttonText: "View Gallery",
            image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80"
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

                {/* Official Wedding Site Banner */}
                <section className="w-full max-w-7xl mx-auto mt-12 text-left">
                    <div className="relative overflow-hidden rounded-2xl border border-gold-900/40 bg-neutral-900 shadow-2xl shadow-gold-900/10">
                        <img
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
                            alt="Wedding celebration"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/55" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
                        <div className="relative grid min-h-[340px] grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
                            <div className="max-w-3xl">
                                <p className="mb-3 text-lg font-serif tracking-wide text-gold-500">
                                    Official Wedding Details
                                </p>
                                <h2 className="text-4xl font-brand-hero text-white drop-shadow-md sm:text-5xl md:text-6xl">
                                    RSVP and wedding updates live on Zola.
                                </h2>
                                <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-neutral-100 font-sans">
                                    Use the official wedding site for RSVPs, schedule details, registry, FAQs, and guest-facing event updates.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-black/45 p-5 backdrop-blur-sm sm:flex-row lg:flex-col">
                                <a
                                    href={RSVP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full rounded bg-[#f6f0dc] px-6 py-4 text-center text-lg font-bold text-neutral-950 shadow-xl shadow-[#f6f0dc]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-2xl hover:shadow-[#f6f0dc]/30 font-ui"
                                >
                                    RSVP
                                </a>
                                <a
                                    href={OFFICIAL_WEDDING_SITE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full rounded border border-gold-900/60 bg-neutral-950/80 px-6 py-4 text-center text-lg font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500 hover:bg-neutral-900 hover:text-gold-500 hover:shadow-xl font-ui"
                                >
                                    Visit Wedding Site
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Details Cards */}
                <section className="w-full max-w-7xl mx-auto mt-10 text-left">
                    <h2 className="text-3xl md:text-4xl font-brand-hero text-white text-center mb-6">
                        Event <span className="text-gold-600 italic">Details</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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
                                    <h3 className="text-2xl font-brand-hero text-white drop-shadow-md">Hatchery Riverside</h3>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow items-center">
                                <p className="text-neutral-400 text-base mb-4 leading-relaxed font-sans">
                                    Historic riverside property set within Riverside Park along the Mississippi River.
                                </p>
                                <a
                                    href={HATCHERY_DIRECTIONS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 px-6 bg-neutral-800/80 text-neutral-100 rounded font-ui font-bold text-base border border-neutral-700 transition-all duration-300 hover:border-gold-500/60 hover:bg-neutral-700 hover:text-white hover:shadow-xl hover:-translate-y-0.5 mt-6"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>

                        {/* Parking CTA */}
                        <div className="group bg-neutral-900 border border-neutral-800 p-0 rounded-2xl text-center overflow-hidden hover:border-gold-900/40 transition-all hover:shadow-xl hover:shadow-gold-900/10 flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative bg-white">
                                <img
                                    src="/images/parking-map.jpeg"
                                    alt="Hatchery Riverside Parking Map"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-opacity" />
                                <div className="absolute bottom-4 left-0 right-0">
                                    <h3 className="text-2xl font-brand-hero text-white drop-shadow-md">Parking Details</h3>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow items-center">
                                <p className="text-neutral-400 text-base mb-4 leading-relaxed font-sans">
                                    View the Hatchery Riverside parking map and entrance notes before you arrive.
                                </p>
                                <Link
                                    to="/parking"
                                    className="block w-full py-3 px-6 bg-neutral-800/80 text-neutral-100 rounded font-ui font-bold text-base border border-neutral-700 transition-all duration-300 hover:border-gold-500/60 hover:bg-neutral-700 hover:text-white hover:shadow-xl hover:-translate-y-0.5 mt-6"
                                >
                                    View Parking Details
                                </Link>
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
                                    <h3 className="text-2xl font-brand-hero text-white drop-shadow-md">Update Details</h3>
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
                                    className="block w-full py-3 px-6 bg-neutral-800/80 text-neutral-100 rounded font-ui font-bold text-base border border-neutral-700 transition-all duration-300 hover:border-gold-500/60 hover:bg-neutral-700 hover:text-white hover:shadow-xl hover:-translate-y-0.5 mt-6"
                                >
                                    Update Guest Details
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guest Resources Cards */}
                <section className="w-full max-w-7xl mx-auto mt-12 text-left">
                    <h2 className="text-3xl md:text-4xl font-brand-hero text-white text-center mb-6">
                        Guest <span className="text-gold-600 italic">Resources</span>
                    </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto mt-8 text-left">
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
                                    <h3 className="text-2xl font-brand-hero text-white drop-shadow-md">
                                        {card.titlePart1} {card.titlePart2}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow items-center">
                                <p className="text-neutral-200 group-hover:text-white transition-colors text-base font-light leading-relaxed mb-6 font-sans">
                                    {card.description}
                                </p>
                                <div className="mt-6 py-3 px-8 bg-neutral-800/80 text-neutral-100 rounded font-ui font-bold text-base border border-neutral-700 hover:border-gold-500/60 hover:bg-neutral-700 hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 w-full">
                                    {card.buttonText}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                </section>

                <p className="text-sm text-gold-600/80 italic font-serif mt-8 mb-0">
                    * On-site boutique hotel rooms are reserved for the wedding party.
                </p>

                {/* Zola Links Cards */}
                <section className="w-full max-w-7xl mx-auto mt-12 text-left">
                    <h2 className="text-3xl md:text-4xl font-brand-hero text-white text-center mb-6">
                        Zola <span className="text-gold-600 italic">Links</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto text-left">
                        {zolaCards.map((card, idx) => (
                            <a
                                key={idx}
                                href={card.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-0 overflow-hidden hover:border-gold-900/40 transition-all duration-500 text-center h-full flex flex-col hover:shadow-xl hover:shadow-gold-900/10"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity" />
                                    <div className="absolute bottom-4 left-0 right-0">
                                        <h3 className="text-2xl font-brand-hero text-white drop-shadow-md">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow items-center">
                                    <p className="text-neutral-200 group-hover:text-white transition-colors text-base font-light leading-relaxed mb-6 font-sans">
                                        {card.description}
                                    </p>
                                    <div className="mt-6 py-3 px-8 bg-neutral-800/80 text-neutral-100 rounded font-ui font-bold text-base border border-neutral-700 hover:border-gold-500/60 hover:bg-neutral-700 hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 w-full">
                                        {card.buttonText}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default HomePage;
