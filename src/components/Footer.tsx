import { brand } from '../content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{brand.name}</p>
          <p className="footer-tagline">{brand.tagline}</p>
        </div>
        <div className="footer-meta">
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <p>{brand.location}</p>
          <p>© {new Date().getFullYear()} {brand.name}</p>
        </div>
      </div>
    </footer>
  );
}
