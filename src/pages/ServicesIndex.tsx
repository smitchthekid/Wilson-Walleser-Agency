import { services } from '../content';
import ServiceCard from '../components/ServiceCard';
import CtaBand from '../components/CtaBand';
import usePageTitle from '../usePageTitle';

export default function ServicesIndex() {
  usePageTitle('Services');
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1 className="page-title">What we can do for you.</h1>
          <p className="page-intro">
            Pick one service or combine several. Every engagement starts with a plan built around your goals and
            budget.
          </p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container">
          <div className="service-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand heading="Not sure where to start? We'll help you choose." />
    </>
  );
}
