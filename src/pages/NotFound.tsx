import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="page-hero not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="page-title">We couldn't find that page.</h1>
        <p className="page-intro">It may have moved. Try one of these instead.</p>
        <div className="hero-actions">
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
          <Link to="/services" className="btn btn-ghost">
            Services
          </Link>
          <Link to="/blog" className="btn btn-ghost">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
