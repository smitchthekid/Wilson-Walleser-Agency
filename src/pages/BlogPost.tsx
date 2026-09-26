import { Link, useParams } from 'react-router-dom';
import { formatDate, getPost, posts } from '../blog';
import PostCard from '../components/PostCard';
import CtaBand from '../components/CtaBand';
import usePageTitle from '../usePageTitle';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const post = getPost(slug);
  usePageTitle(post ? post.title : 'Page not found');
  if (!post) return <NotFound />;

  const i = posts.indexOf(post);
  const more = [...posts.slice(i + 1), ...posts.slice(0, i)].slice(0, 3);

  return (
    <>
      <article>
        <header className="page-hero post-hero">
          <div className="container container-narrow">
            <p className="breadcrumb">
              <Link to="/blog">Blog</Link> <span aria-hidden="true">/</span>
            </p>
            <h1 className="page-title">{post.title}</h1>
            <p className="post-meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
            </p>
          </div>
        </header>
        <div className="container container-narrow">
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>

      {more.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="detail-heading">More articles</h2>
            <div className="post-grid">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand heading="Want help putting this into practice?" />
    </>
  );
}
