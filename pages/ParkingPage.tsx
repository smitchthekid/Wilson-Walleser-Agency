import React from 'react';
import { Link } from 'react-router-dom';

const ParkingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
            &larr; Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <p className="text-gold-500 text-lg font-serif tracking-wide mb-3">
            Hatchery Riverside
          </p>
          <h1 className="text-4xl md:text-6xl font-brand-hero text-white mb-6">
            Parking <span className="text-gold-600 italic">Details</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-300 text-lg leading-relaxed font-sans">
            Use this venue map to find the parking area and the lounge, venue, and hotel entrances near Riverside Park.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 items-start">
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl shadow-gold-900/10">
            <img
              src="/images/parking-map.jpeg"
              alt="Parking map for Hatchery Riverside showing Riverside Park, venue entrances, hotel entrance, lounge entrance, and parking"
              className="w-full h-auto bg-white"
            />
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 lg:p-8">
            <h2 className="text-3xl font-brand-hero text-white mb-6">Arrival Notes</h2>
            <div className="space-y-5 text-neutral-300 font-sans leading-relaxed">
              <p>
                Parking is shown on the east side of the Hatchery Riverside property, near the patio and hotel entrance.
              </p>
              <p>
                The venue entrance is centered along the front drive. The lounge entrance is to the left, and the hotel entrance is to the right.
              </p>
              <p>
                The property sits by Riverside Park, with E. Veterans Memorial Drive looping in front of the venue.
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/Mfh1iDjqycS2PsCn6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full py-3 px-6 bg-neutral-800/80 text-neutral-100 rounded font-ui font-bold text-base border border-neutral-700 text-center transition-all duration-300 hover:border-gold-500/60 hover:bg-neutral-700 hover:text-white hover:shadow-xl hover:-translate-y-0.5"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingPage;
