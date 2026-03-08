import React from 'react';
import { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <a
      href={listing.is_booked ? "#" : listing.url} target={listing.is_booked ? "_self" : "_blank"} rel="noopener noreferrer"
      className={`group block bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-gold-600/50 transition-all duration-300 ${listing.is_booked ? 'cursor-not-allowed opacity-80' : 'hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1'}`}
      onClick={(e) => listing.is_booked && e.preventDefault()}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={listing.images[0]}
          alt={listing.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${listing.is_booked ? 'opacity-50 grayscale' : 'group-hover:scale-110'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {listing.is_booked && (
          <div className="absolute top-4 right-4 bg-red-900/80 backdrop-blur-md text-red-100 px-4 py-1.5 rounded text-sm font-bold uppercase tracking-wider border border-red-500/30">
            Booked / Unavailable
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-serif text-white group-hover:text-gold-500 transition-colors line-clamp-1">{listing.name}</h3>
            <p className="text-neutral-400 text-sm mt-1">{listing.address.city}, {listing.address.state}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 my-4 text-sm text-neutral-500 border-y border-neutral-800 py-3">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span>{listing.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span>Up to {listing.max_guests} Guests</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-neutral-600">
            {listing.distance_from_venue.miles} miles from venue
          </span>
          <span className="text-gold-600 text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
            View Details &rarr;
          </span>
        </div>
      </div>
    </a >
  );
};

export default ListingCard;