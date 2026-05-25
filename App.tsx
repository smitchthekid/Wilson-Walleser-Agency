import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ListingsPage from './pages/ListingsPage';
import HomePage from './pages/HomePage';
import HotelsPage from './pages/HotelsPage';
import EateriesPage from './pages/EateriesPage';
import FlightsTransportPage from './pages/FlightsTransportPage';
import ParkingPage from './pages/ParkingPage';
import StyleConfigurator from './components/StyleConfigurator';

import { ASSETS } from './assets';

const RSVP_URL = "https://www.zola.com/wedding/mitchellandkatelyn2026/rsvp";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => (
  <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-gold-900/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={ASSETS.LOGO}
            alt="Wilson-Walleser Logo"
            className="w-14 h-14 rounded-full object-cover group-hover:opacity-90 transition-opacity"
          />
          <span className="text-lg font-brand-tagline text-white tracking-wide">Wilson-Walleser Guest Guide</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-lg font-ui font-medium text-white hover:text-gold-500 transition-colors tracking-wide">Home</Link>
          <a href={RSVP_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-ui font-medium text-white hover:text-gold-500 transition-colors tracking-wide">RSVP</a>
          <Link to="/parking" className="text-lg font-ui font-medium text-white hover:text-gold-500 transition-colors tracking-wide">Parking</Link>
          <Link to="/airbnbs" className="text-lg font-ui font-medium text-white hover:text-gold-500 transition-colors tracking-wide">Airbnbs</Link>
          <Link to="/hotels" className="text-lg font-ui font-medium text-white hover:text-gold-500 transition-colors tracking-wide">Hotels</Link>
          <Link to="/eateries" className="text-lg font-ui font-medium text-white hover:text-gold-500 transition-colors tracking-wide">Eateries</Link>
          <Link to="/flights-transport" className="text-lg font-ui font-medium text-white hover:text-gold-500 transition-colors tracking-wide">Flights & Transport</Link>
        </nav>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-neutral-900 border-t border-neutral-800 mt-20 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gold-600 font-brand text-lg mb-2">The Wilson-Walleser Wedding</p>
      <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Wilson-Walleser Wedding. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-gold-500 selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/airbnbs" element={<ListingsPage />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/eateries" element={<EateriesPage />} />
            <Route path="/parking" element={<ParkingPage />} />
            <Route path="/flights-transport" element={<FlightsTransportPage />} />
          </Routes>
        </main>
        <Footer />
        <StyleConfigurator />
      </div>
    </HashRouter>
  );
}
