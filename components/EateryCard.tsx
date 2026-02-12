import React from 'react';
import { Eatery } from '../types';

interface EateryCardProps {
    eatery: Eatery;
}

const EateryCard: React.FC<EateryCardProps> = ({ eatery }) => {
    return (
        <div className="group block bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-yellow-700/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 p-6">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-2 block">
                        {eatery.category}
                    </span>
                    <h3 className="text-xl font-serif text-white group-hover:text-yellow-500 transition-colors">
                        {eatery.name}
                    </h3>
                </div>
            </div>

            <p className="text-neutral-400 text-sm mb-6">
                {eatery.address.street}, {eatery.address.city}
            </p>

            <div className="space-y-3 mb-6">
                {eatery.phone && (
                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                        <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <a href={`tel:${eatery.phone.e164}`} className="hover:text-yellow-500 transition-colors">{eatery.phone.display}</a>
                    </div>
                )}
            </div>

            <div className="flex gap-3 mt-auto">
                {eatery.website && (
                    <a
                        href={eatery.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-neutral-800 hover:bg-neutral-700 text-white text-sm py-2 rounded-lg transition-colors border border-neutral-700"
                    >
                        Website
                    </a>
                )}
                <a
                    href={eatery.maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-yellow-600/10 hover:bg-yellow-600/20 text-yellow-500 hover:text-yellow-400 text-sm py-2 rounded-lg transition-colors border border-yellow-600/20"
                >
                    Directions
                </a>
            </div>
        </div>
    );
};

export default EateryCard;
