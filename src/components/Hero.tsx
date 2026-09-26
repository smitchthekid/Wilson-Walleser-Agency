import { hero, services } from '../content';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">{hero.headline}</h1>
          <p className="hero-sub">{hero.subhead}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              {hero.primaryCta}
            </a>
            <a href="#services" className="btn btn-ghost">
              {hero.secondaryCta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <p className="hero-card-label">What we do</p>
          <ul>
            {services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
