import React from 'react';
import { AIRBNB_LISTINGS } from '../constants';
import { Link } from 'react-router-dom';
import ListingCard from '../components/ListingCard';

const ListingsPage: React.FC = () => {
  return (
    <div className="py-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <Link to="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
            &larr; Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Wilson-Walleser <span className="text-yellow-600 italic">Lodging</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg leading-relaxed">
            We have curated a selection of beautiful properties near the venue.
            Browse our collection and book your perfect stay for the wedding weekend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AIRBNB_LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="mt-20 text-center border-t border-neutral-800 pt-12">
          <p className="text-neutral-500 mb-6">Can't find what you're looking for? Check other platforms for availability in La Crosse.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://www.airbnb.com/a/stays/La-Crosse--Wisconsin--United-States?mlamenities=true&gclsrc=aw.ds&&c=.pi0.pk475441696_80156775040&localized_ghost=true&gad_source=1&gad_campaignid=475441696&gbraid=0AAAAADz55Ll9ZKeD37tMlWg_ByQE10uow&gclid=Cj0KCQiAnJHMBhDAARIsABr7b86V-XqWpe3W27C4ktJy7CHHYgTqEK7wkzsPJtbI5S3hPBh1yCwMbmYaAm8qEALw_wcB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-700 rounded-full text-neutral-300 hover:border-[#FF5A5F] hover:text-[#FF5A5F] hover:bg-[#FF5A5F]/10 transition-colors"
            >
              Browse Airbnb in La Crosse
            </a>
            <a
              href="https://www.vrbo.com/search?destination=La%20Crosse%2C%20Wisconsin%2C%20United%20States%20of%20America&regionId=6023344&latLong=43.812859%2C-91.252396&flexibility=0_DAY&d1=2026-02-14&startDate=2026-02-14&d2=2026-02-21&endDate=2026-02-21&adults=2&typeaheadCollationId=a7f77ec6-71e1-4e63-97a7-5b7da5d9fb8b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-700 rounded-full text-neutral-300 hover:border-[#3b5998] hover:text-[#3b5998] hover:bg-[#3b5998]/10 transition-colors"
            >
              Browse VRBO in La Crosse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;