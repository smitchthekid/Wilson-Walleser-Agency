import { Link } from 'react-router-dom';
import { services } from '../content';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head section-head-row">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Everything you need to get found, get chosen, and grow.</h2>
          </div>
          <Link to="/services" className="btn btn-ghost">
            All services <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
