import React from 'react';
import { Hotel } from '../types';

interface HotelCardProps {
    hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
    return (
        <div className="group block bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-gold-600/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 p-6 relative">
            <div className="absolute top-0 right-0 p-4">
                {hotel.badge?.pet_policy === 'PET_FRIENDLY' && (
                    <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded-full border border-green-800">
                        Pet Friendly
                    </span>
                )}
            </div>

            <h3 className="text-xl font-serif text-white group-hover:text-gold-500 transition-colors mb-2 pr-24">
                {hotel.name}
            </h3>

            <p className="text-neutral-400 text-sm mb-4">
                {hotel.address.street}, {hotel.address.city}, {hotel.address.state}
            </p>

            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                    <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <a href={`tel:${hotel.phone.e164}`} className="hover:text-gold-500 transition-colors">{hotel.phone.display}</a>
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-300">
                    <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>{hotel.distance_from_venue.miles} miles from venue</span>
                </div>
            </div>

            {hotel.notes && hotel.notes.length > 0 && (
                <div className="bg-neutral-800/50 rounded-lg p-3 mb-6">
                    <ul className="list-disc list-inside text-xs text-neutral-400 space-y-1">
                        {hotel.notes.map((note, idx) => (
                            <li key={idx}>{note}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="flex gap-3 mt-auto">
                {hotel.website && (
                    <a
                        href={hotel.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-neutral-800 hover:bg-neutral-700 text-white text-sm py-2 rounded-lg transition-colors border border-neutral-700"
                    >
                        Website
                    </a>
                )}
                <a
                    href={hotel.maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gold-600/10 hover:bg-gold-600/20 text-gold-500 hover:text-gold-400 text-sm py-2 rounded-lg transition-colors border border-gold-600/20"
                >
                    Directions
                </a>
            </div>
        </div>
    );
};

export default HotelCard;
