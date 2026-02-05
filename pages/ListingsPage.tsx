import React from 'react';
import { AIRBNB_LISTINGS } from '../constants';
import ListingCard from '../components/ListingCard';

const ListingsPage: React.FC = () => {
  return (
    <div className="py-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Wilson-Walleser <span className="text-yellow-600 italic">Lodging</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg leading-relaxed">
            We have curated a selection of beautiful properties near the Hatchery venue. 
            Browse our collection and book your perfect stay for the wedding weekend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AIRBNB_LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="mt-20 text-center border-t border-neutral-800 pt-12">
          <p className="text-neutral-500 mb-4">Can't find what you're looking for?</p>
          <a 
            href="https://www.airbnb.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-neutral-700 rounded-full text-neutral-300 hover:border-yellow-600 hover:text-yellow-500 transition-colors"
          >
            Browse all Airbnb Listings in Milwaukee
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;