// Loads the Markdown posts in content/blog/ at build time.
// To add a post, drop a .md file with front matter (title, slug, status, date) into that folder.
import { Marked } from 'marked';

export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  readingMinutes: number;
  html: string;
  tags: string[];
};

const files = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const markdown = new Marked({
  walkTokens(token) {
    if (token.type === 'heading') token.depth = Math.min(token.depth + 1, 6);
  },
});

// Only the flat `key: "value"` lines and the `tags:` list are needed here.
function parseFrontMatter(raw: string) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {} as Record<string, string>, tags: [] as string[], body: raw };
  const data: Record<string, string> = {};
  const tags: string[] = [];
  let inTags = false;
  for (const line of m[1].split(/\r?\n/)) {
    const top = line.match(/^(\w+):\s*(.*)$/);
    if (top) {
      inTags = top[1] === 'tags';
      if (top[2]) data[top[1]] = unquote(top[2]);
      continue;
    }
    const item = line.match(/^\s+-\s+(.*)$/);
    if (inTags && item) tags.push(unquote(item[1]));
  }
  return { data, tags, body: raw.slice(m[0].length) };
}

function unquote(v: string) {
  const s = v.trim();
  if (s.startsWith('"') && s.endsWith('"')) {
    try {
      return JSON.parse(s) as string;
    } catch {
      return s.slice(1, -1);
    }
  }
  return s;
}

function plainText(md: string) {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\\(.)/g, '$1')
    .replace(/[#*_>`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// First real paragraph of the post, skipping headings, lists, images and short lead-ins.
function firstParagraph(md: string) {
  const paras = md
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !/^(#|!\[|>|-|\*|\d+\.|\|)/.test(p))
    .map(plainText);
  const text = paras.find((p) => p.length >= 40) ?? paras[0] ?? '';
  return text.length > 180 ? text.slice(0, 177).replace(/\s+\S*$/, '') + '…' : text;
}

// The post title is shown in the page header, so drop a matching leading heading
// and shift the remaining headings down one level so the page keeps a single h1.
function renderBody(md: string, title: string) {
  const body = md
    .replace(/^\s*#\s+(.+)\n/, (line, h: string) =>
      h.replace(/[*_]/g, '').trim() === title ? '' : line
    )
    // Old links to pleasecart.com posts point at the same slug here.
    .replace(/\]\(https?:\/\/(?:www\.)?pleasecart\.com\/(?:[^)]*\/)?([\w-]+)\/?\)/g, '](/blog/$1)');
  return { body, html: markdown.parse(body, { async: false }) as string };
}

export const posts: Post[] = Object.values(files)
  .map(parseFrontMatter)
  .filter(({ data }) => data.status === 'publish' && data.slug && data.title)
  .map(({ data, tags, body: md }) => {
    const { body, html } = renderBody(md, data.title);
    const words = plainText(body).split(' ').length;
    return {
      slug: data.slug,
      title: data.title,
      date: (data.date ?? '').slice(0, 10),
      excerpt: data.excerpt || firstParagraph(body),
      readingMinutes: Math.max(1, Math.round(words / 230)),
      html,
      tags,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
