import { about, founders } from '../content';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">About us</p>
          <h2>{about.heading}</h2>
          {about.body.map((para) => (
            <p key={para} className="about-body">
              {para}
            </p>
          ))}
        </div>
        <div className="founders">
          {founders.map((f) => (
            <article key={f.name} className="founder-card">
              <div className="avatar" aria-hidden="true">
                {f.initials}
              </div>
              <div>
                <h3>{f.name}</h3>
                <p className="founder-role">{f.role}</p>
                <p>{f.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
