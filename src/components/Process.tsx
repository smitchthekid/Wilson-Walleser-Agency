import { process, values } from '../content';

export default function Process() {
  return (
    <section id="process" className="section section-dark">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How we work</p>
          <h2>A simple process, repeated until it works.</h2>
        </div>
        <ol className="process-grid">
          {process.map((p) => (
            <li key={p.step} className="process-step">
              <span className="process-num">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </li>
          ))}
        </ol>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.title} className="value">
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
