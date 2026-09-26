# Wilson + Walleser — Digital Marketing Agency

Marketing site for the agency, built with Vite + React + TypeScript and deployed to Cloudflare.

## Editing content

All copy (agency name, services, process, founder bios, contact email) lives in
[`src/content.ts`](src/content.ts). Edit that file; no component changes needed.

Before launch, replace the placeholders marked `TODO` in that file:
- `brand.email` — the inbox the contact form sends to
- founder bios
- the detail copy for each service

## Pages

| URL | What it shows |
|---|---|
| `/` | Homepage |
| `/services` | Services directory |
| `/services/<slug>` | One service: what's included, who it suits, related articles |
| `/blog` | Blog directory, newest first, with search |
| `/blog/<slug>` | One article |

## Blog posts

Posts are Markdown files in [`content/blog/`](content/blog/), read at build time.
Only posts with `status: "publish"` in their front matter appear on the site.
To add a post, add a `.md` file with at least:

```yaml
---
title: "Post title"
slug: "post-title"
status: "publish"
date: "2026-01-31 09:00:00"
excerpt: "Optional one-line summary for the directory"
---
```

The posts are the 14 published articles from the PleaseCart WordPress
import (batch `test-1`, also in the `pleasecart-reboot` repo). They keep their
old WordPress slugs so old links can be redirected to `/blog/<slug>`. Three off-topic
posts are set to `status: "draft"` so they stay in the repo but are hidden.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for deploying.
