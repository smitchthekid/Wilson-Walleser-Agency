import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { AIRBNB_LISTINGS } from '../constants';
import BookingForm from '../components/BookingForm';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const listing = AIRBNB_LISTINGS.find(l => l.id === id);

  if (!listing) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-neutral-950 min-h-screen pb-20">
      {/* Hero Header */}
      <div className="h-[50vh] relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={listing.images[0]} 
          alt={listing.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-neutral-950 to-transparent pt-32 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-white mb-6 transition-colors text-sm font-medium tracking-wide">
              &larr; Back to Listings
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">{listing.name}</h1>
            <p className="text-xl text-neutral-300 flex items-center gap-2">
              <span className="text-yellow-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
              </span>
              {listing.address.city}, {listing.address.state}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-12 py-6 border-y border-neutral-800">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-yellow-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                 </div>
                 <div>
                   <p className="text-white font-medium">{listing.bedrooms} Bedrooms</p>
                   <p className="text-sm text-neutral-500">{listing.beds} Beds</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-yellow-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
                 </div>
                 <div>
                   <p className="text-white font-medium">{listing.bathrooms} Bathrooms</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-yellow-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                 </div>
                 <div>
                   <p className="text-white font-medium">Up to {listing.max_guests} Guests</p>
                 </div>
              </div>
            </div>

            {/* External Link Button */}
            <div>
              <a 
                href={listing.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF5A5F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#E04B50] transition-all shadow-lg hover:shadow-red-900/30 transform hover:-translate-y-0.5 group"
              >
                <span>View original listing on Airbnb</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-serif text-white mb-4">About this place</h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {listing.overview}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-serif text-white mb-6">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-neutral-300">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Images Grid */}
            <div>
              <h2 className="text-2xl font-serif text-white mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {listing.images.slice(1).map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`${listing.name} view ${idx+2}`} 
                    className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-5">
            <BookingForm listing={listing} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;