import React from 'react';
import { Link } from 'react-router-dom';

const FlightsTransportPage: React.FC = () => {
    return (
        <div className="py-12 bg-neutral-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link to="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
                        &larr; Back to Home
                    </Link>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                        Flights & <span className="text-gold-600 italic">Transport</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-neutral-400 text-lg leading-relaxed">
                        Getting to La Crosse and making your way around town.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Airports */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gold-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </div>
                            <h2 className="text-2xl font-serif text-white">Airports</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">La Crosse Regional Airport (LSE)</h3>
                                <p className="text-neutral-400">Approximately 10 minutes from downtown La Crosse. The most convenient option, with connections typically through Chicago or Minneapolis.</p>
                            </div>

                            <div className="pt-6 border-t border-neutral-800">
                                <h3 className="text-xl font-medium text-white mb-2">Minneapolis–St. Paul International (MSP)</h3>
                                <p className="text-neutral-400">Approximately 2.5–3 hour drive to La Crosse. A major hub with more direct flight options, often at lower fares.</p>
                            </div>
                        </div>
                    </div>

                    {/* Local Transport */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gold-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h2 className="text-2xl font-serif text-white">Local Transportation</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">Walkability</h3>
                                <p className="text-neutral-400">Downtown La Crosse is very walkable. Most hotels, the venue, and recommended eateries are within a close radius.</p>
                            </div>

                            <div className="pt-6 border-t border-neutral-800">
                                <h3 className="text-xl font-medium text-white mb-2">Rideshare Services</h3>
                                <p className="text-neutral-400">Uber and Lyft operate in the La Crosse area and are reliable options for getting around town or traveling to/from the airport.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightsTransportPage;
