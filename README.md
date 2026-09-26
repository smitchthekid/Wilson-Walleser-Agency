# Wilson + Walleser — Digital Marketing Agency

Marketing site for the agency, built with Vite + React + TypeScript and deployed to Cloudflare.

## Editing content

All copy (agency name, services, process, founder bios, contact email) lives in
[`src/content.ts`](src/content.ts). Edit that file; no component changes needed.

Before launch, replace the placeholders marked `TODO` in that file:
- `brand.email` — the inbox the contact form sends to
- founder bios

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
