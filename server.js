// Password-protected server for the Railway QA preview. Not used by the
// Cloudflare production deploy, which serves dist/ directly.
//
// Requires PREVIEW_USER and PREVIEW_PASSWORD; refuses to start without them.
// Every response carries X-Robots-Tag: noindex, and /robots.txt disallows all.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { timingSafeEqual } from 'node:crypto';

const { PREVIEW_USER, PREVIEW_PASSWORD } = process.env;
if (!PREVIEW_USER || !PREVIEW_PASSWORD) {
  console.error('PREVIEW_USER and PREVIEW_PASSWORD must be set.');
  process.exit(1);
}

const port = Number(process.env.PORT) || 3000;
const root = fileURLToPath(new URL('./dist/', import.meta.url));
const expected = Buffer.from(`${PREVIEW_USER}:${PREVIEW_PASSWORD}`);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
};

function authorized(header = '') {
  const [scheme, encoded] = header.split(' ');
  if (scheme !== 'Basic' || !encoded) return false;
  const given = Buffer.from(encoded, 'base64');
  return given.length === expected.length && timingSafeEqual(given, expected);
}

// Resolve a URL path to a file inside dist/, or null if there isn't one.
async function findFile(pathname) {
  try {
    const file = normalize(join(root, decodeURIComponent(pathname)));
    if (!file.startsWith(root)) return null;
    const info = await stat(file);
    if (info.isFile()) return file;
    if (info.isDirectory()) return findFile(join(pathname, 'index.html'));
  } catch {}
  return null;
}

createServer(async (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  const { pathname } = new URL(req.url, 'http://localhost');

  if (pathname === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' }).end('OK');
    return;
  }
  if (pathname === '/robots.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain' }).end('User-agent: *\nDisallow: /\n');
    return;
  }
  if (!authorized(req.headers.authorization)) {
    res
      .writeHead(401, { 'WWW-Authenticate': 'Basic realm="QA preview", charset="UTF-8"' })
      .end('Authentication required.');
    return;
  }

  try {
    // Unknown paths get index.html so the React router can handle them.
    const file = (await findFile(pathname)) ?? join(root, 'index.html');
    const body = await readFile(file);
    const cache = file.includes(`${sep}assets${sep}`)
      ? 'public, max-age=31536000, immutable'
      : 'no-cache';
    res.writeHead(200, {
      'Content-Type': types[extname(file)] ?? 'application/octet-stream',
      'Cache-Control': cache,
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch (err) {
    console.error(err);
    res.writeHead(500).end('Server error.');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`QA preview listening on port ${port}`);
});
