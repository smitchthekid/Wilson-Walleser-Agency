import { Link } from 'react-router-dom';
import { Post, formatDate } from '../blog';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <p className="post-meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
      </p>
      <h3>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
    </article>
  );
}
