import React from 'react';
import { HOTEL_LISTINGS } from '../constants';
import HotelCard from '../components/HotelCard';
import { Link } from 'react-router-dom';

const HotelsPage: React.FC = () => {
    return (
        <div className="py-12 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link to="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
                        &larr; Back to Home
                    </Link>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-brand-hero text-white mb-6">
                        Recommended <span className="text-gold-600 italic">Hotels</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-neutral-400 text-lg leading-relaxed">
                        We've selected these hotels for their proximity to the venue and comfort.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {HOTEL_LISTINGS.map((hotel) => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotelsPage;
