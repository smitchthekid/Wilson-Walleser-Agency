import { Link } from 'react-router-dom';
import { posts } from '../blog';
import PostCard from './PostCard';

export default function LatestPosts() {
  if (posts.length === 0) return null;
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-head section-head-row">
          <div>
            <p className="eyebrow">From the blog</p>
            <h2>Recent writing.</h2>
          </div>
          <Link to="/blog" className="btn btn-ghost">
            All articles <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="post-grid">
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
