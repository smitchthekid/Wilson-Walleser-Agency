import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ListingsPage from './pages/ListingsPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import HotelsPage from './pages/HotelsPage';
import EateriesPage from './pages/EateriesPage';
import FlightsTransportPage from './pages/FlightsTransportPage';
import StyleConfigurator from './components/StyleConfigurator';

import { ASSETS } from './assets';

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
            className="w-12 h-12 rounded-full object-cover shadow-lg shadow-gold-900/20 group-hover:opacity-90 transition-opacity bg-gold-600 p-0.5"
          />
          <span className="text-2xl font-brand-tagline font-bold text-gold-500 tracking-wide">Wilson - Walleser Guest Guide</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/airbnbs" className="text-sm font-medium text-neutral-300 hover:text-gold-500 transition-colors">Airbnbs</Link>
          <Link to="/hotels" className="text-sm font-medium text-neutral-300 hover:text-gold-500 transition-colors">Hotels</Link>
          <Link to="/eateries" className="text-sm font-medium text-neutral-300 hover:text-gold-500 transition-colors">Eateries</Link>
          <Link to="/flights-transport" className="text-sm font-medium text-neutral-300 hover:text-gold-500 transition-colors">Flights & Transport</Link>
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
            <Route path="/listing/:id" element={<DetailPage />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/eateries" element={<EateriesPage />} />
            <Route path="/flights-transport" element={<FlightsTransportPage />} />
          </Routes>
        </main>
        <Footer />
        <StyleConfigurator />
      </div>
    </HashRouter>
  );
}