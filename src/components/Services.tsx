import { services } from '../content';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services</p>
          <h2>Everything you need to get found, get chosen, and grow.</h2>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <article key={s.title} className="service-card">
              <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
