import { Link } from 'react-router-dom';
import { Service } from '../content';

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="service-card">
      <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
      <h3>
        <Link to={`/services/${service.slug}`} className="card-link">
          {service.title}
        </Link>
      </h3>
      <p>{service.description}</p>
      <ul>
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="card-more" aria-hidden="true">
        Learn more →
      </span>
    </article>
  );
}
