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
