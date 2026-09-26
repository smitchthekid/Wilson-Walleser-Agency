import { Link, useParams } from 'react-router-dom';
import { getService, services } from '../content';
import { getPost, Post } from '../blog';
import PostCard from '../components/PostCard';
import CtaBand from '../components/CtaBand';
import usePageTitle from '../usePageTitle';
import NotFound from './NotFound';

export default function ServiceDetail() {
  const { slug = '' } = useParams();
  const service = getService(slug);
  usePageTitle(service?.title);
  if (!service) return <NotFound />;

  const related = service.relatedPosts.map(getPost).filter((p): p is Post => !!p);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/services">Services</Link> <span aria-hidden="true">/</span>
          </p>
          <h1 className="page-title">{service.title}</h1>
          <p className="page-intro">{service.intro}</p>
          <div className="hero-actions">
            <Link to="/#contact" className="btn btn-primary">
              Talk to us about this
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container detail-grid">
          <div>
            <h2 className="detail-heading">What's included</h2>
            <div className="included-grid">
              {service.included.map((item) => (
                <div key={item.title} className="included-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="detail-aside">
            <h2 className="aside-heading">A good fit for</h2>
            <ul className="check-list">
              {service.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tight">
          <div className="container">
            <h2 className="detail-heading">Related reading</h2>
            <div className="post-grid">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-tight">
        <div className="container">
          <h2 className="detail-heading">Other services</h2>
          <ul className="pill-list">
            {others.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand heading={`Ready to get started with ${service.title}?`} />
    </>
  );
}
