# Deployment Notes

## Current App
- Vite + React + TypeScript single-page agency site.
- Source entry: `index.html` and `src/main.tsx`; site copy in `src/content.ts`
- Production output: `dist/`

## Build
```bash
npm install
npm run build
```

## Preview Locally
```bash
npm run preview -- --host
```

## Deploy
- Deploy the generated `dist/` directory to the static host.

## Cloudflare Wrangler Notes
- `wrangler.json` points static assets at `./dist`.
- Latest Wrangler requires Node.js 22+.
- System Node is still installed at `C:\Program Files\nodejs\node.exe` and reports Node.js 18.16.1.
- Portable Node.js 22.22.3 is available at `C:\tmp\node-v22.22.3-win-x64`.
- Do not deploy with Wrangler 3 for this project.

Safe deployment path with portable Node 22:
```powershell
$env:Path = 'C:\tmp\node-v22.22.3-win-x64;' + $env:Path
npm run build
npx wrangler@latest deploy
```

Optional dry run:
```bash
npm run build
npx wrangler@latest deploy --dry-run
```

Manual/static host deployment:
- Upload the contents of `dist/`, or use the prepared `dist-deploy.zip` archive.

## Railway QA Preview
A password-protected copy of the site for QA, deployed from `main`.
Production stays on Cloudflare; Railway runs `server.js`, which Cloudflare never uses.

`railway.json` sets the build (`npm ci && npm run build`), the start command
(`npm start` → `node server.js`) and the health check (`/healthz`).

What `server.js` does:
- Asks for a username and password (HTTP Basic Auth) on every page.
- Tells crawlers to stay out: `X-Robots-Tag: noindex, nofollow` on every response,
  and `/robots.txt` disallows everything. Neither is added to the Cloudflare build.
- Sends unknown paths to `index.html` so deep links like `/blog/<slug>` survive a refresh.
- Leaves `/healthz` and `/robots.txt` open so Railway's health check and crawlers can read them.
- Refuses to start if the credentials below are not set.

Railway setup:
1. New Project → Deploy from GitHub repo → this repo, branch `main`.
2. Service → Variables: set `PREVIEW_USER` and `PREVIEW_PASSWORD`.
   Keep the password out of the repo; change it here and redeploy to rotate it.
3. Service → Settings → Networking → Generate Domain, and share that URL with QA.

Test it locally:
```bash
npm run build
PREVIEW_USER=qa PREVIEW_PASSWORD=secret PORT=3000 npm start
```
