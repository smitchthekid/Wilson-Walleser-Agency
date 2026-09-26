import { useState } from 'react';
import { brand } from '../content';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={close}>
          <span className="logo-mark">{brand.shortName}</span>
          <span className="logo-text">{brand.name}</span>
        </a>
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
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm" onClick={close}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
