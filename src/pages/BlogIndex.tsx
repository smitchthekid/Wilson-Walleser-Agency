import { useState } from 'react';
import { blog } from '../content';
import { posts } from '../blog';
import PostCard from '../components/PostCard';
import usePageTitle from '../usePageTitle';

export default function BlogIndex() {
  usePageTitle('Blog');
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const shown = q
    ? posts.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
    : posts;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1 className="page-title">{blog.heading}</h1>
          <p className="page-intro">{blog.intro}</p>
          <label className="search">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              placeholder={`Search ${posts.length} articles`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container">
          {shown.length > 0 ? (
            <div className="post-grid">
              {shown.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="empty">No articles match "{query}".</p>
          )}
        </div>
      </section>
    </>
  );
}
