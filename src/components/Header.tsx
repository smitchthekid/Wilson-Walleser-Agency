import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brand } from '../content';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/#process', label: 'Process' },
  { to: '/#about', label: 'About' },
  { to: '/blog', label: 'Blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo-mark">{brand.shortName}</span>
          <span className="logo-text">{brand.name}</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
        <nav id="site-nav" className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map((l) =>
            // NavLink ignores the #hash, so only real pages get the active style.
            l.to.includes('#') ? (
              <Link key={l.to} to={l.to} onClick={close}>
                {l.label}
              </Link>
            ) : (
              <NavLink key={l.to} to={l.to} onClick={close}>
                {l.label}
              </NavLink>
            )
          )}
          <Link to="/#contact" className="btn btn-primary btn-sm" onClick={close}>
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
