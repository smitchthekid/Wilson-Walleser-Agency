import { Link } from 'react-router-dom';

export default function CtaBand({ heading }: { heading: string }) {
  return (
    <section className="section section-accent cta-band">
      <div className="container cta-inner">
        <h2>{heading}</h2>
        <Link to="/#contact" className="btn btn-dark">
          Start a project
        </Link>
      </div>
    </section>
  );
}
