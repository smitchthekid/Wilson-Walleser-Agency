// Theme tokens derived from two base colors. Used by the theme lab (ThemeLab.tsx)
// and applied on load from main.tsx so a previewed choice follows you across pages.

// Two base colors, each with its own palette. Only one palette drives the site at a time.
export type Base = { a: string; b: string; active: 'a' | 'b' | 'mint' | 'pacific' };

export const DEFAULT_BASE: Base = { a: '#2f8c99', b: '#82A1C0', active: 'a' };

const STORE_KEY = 'ww-theme-v2';
const INK_LIGHT = '#ffffff';

type RGB = [number, number, number];

export function normalizeHex(input: string): string | null {
  const m = input.trim().replace(/^#/, '');
  if (/^[0-9a-f]{3}$/i.test(m)) return '#' + m.split('').map((c) => c + c).join('').toLowerCase();
  if (/^[0-9a-f]{6}$/i.test(m)) return '#' + m.toLowerCase();
  return null;
}

function toRgb(hex: string): RGB {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function toHex([r, g, b]: RGB): string {
  return '#' + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
}

function toHsl(hex: string): [number, number, number] {
  const [r, g, b] = toRgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return [0, 0, l];
  const s = d / (1 - Math.abs(2 * l - 1));
  let h = 0;
  if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [(h * 60 + 360) % 360, s, l];
}

function fromHsl(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [r, g, b] =
    h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return toHex([(r + m) * 255, (g + m) * 255, (b + m) * 255]);
}

function luminance(hex: string): number {
  const [r, g, b] = toRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// Darken a color (keeping its hue) until it reads at the target contrast on a background.
function darkenToContrast(hex: string, bg: string, target: number): string {
  const [h, s, l0] = toHsl(hex);
  let l = l0;
  while (l > 0.05 && contrast(fromHsl(h, s, l), bg) < target) l -= 0.01;
  return fromHsl(h, s, l);
}

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const STEP_LIGHTNESS = [0.96, 0.9, 0.8, 0.69, 0.58, 0.48, 0.39, 0.3, 0.2, 0.12];

export type Palette = {
  base: string;
  scale: { step: number; hex: string }[];
  complement: string;
  support: string[];
  neutrals: string[];
};

// Everything here comes from one base color: its hue, saturation and a few offsets of that hue.
export function makePalette(base: string): Palette {
  const [h, s] = toHsl(base);
  const sat = Math.min(Math.max(s, 0.25), 0.85);
  const neutralSat = Math.min(s, 0.18);
  return {
    base,
    scale: STEPS.map((step, i) => ({ step, hex: fromHsl(h, sat, STEP_LIGHTNESS[i]) })),
    complement: fromHsl((h + 180) % 360, Math.min(sat, 0.6), 0.46),
    // split complements: the two hues either side of the complement
    support: [fromHsl((h + 150) % 360, Math.min(sat, 0.5), 0.5), fromHsl((h + 210) % 360, Math.min(sat, 0.5), 0.5)],
    neutrals: [0.97, 0.9, 0.62, 0.4, 0.14].map((l) => fromHsl(h, neutralSat, l)),
  };
}

// Fixed palette from the supplied swatches: off white, sage light, sage pale, mint.
export const MINT_SAGE = {
  offWhite: '#FAFFFB',
  sageLight: '#D2DCD2',
  sagePale: '#B4C7B4',
  mint: '#C8E6C9',
  plum: '#8E4F73', // complement of the mint hue
  clay: '#B58A5E', // warm support
};

function mintSageTokens(): Record<string, string> {
  const { offWhite, sageLight, mint } = MINT_SAGE;
  const ink = '#16241a';
  return {
    '--bg': offWhite,
    '--surface': '#ffffff',
    '--ink': ink,
    '--muted': '#4a524c',
    '--line': sageLight,
    '--accent': mint,
    '--accent-ink': ink,
    '--accent-text': darkenToContrast(mint, offWhite, 4.5),
    '--accent-2': MINT_SAGE.plum,
    '--accent-2-text': darkenToContrast(MINT_SAGE.plum, offWhite, 4.5),
    '--accent-3': MINT_SAGE.clay,
    '--tint': '#f1e6ee',
    '--dark': '#1d2e23',
    '--dark-muted': '#d9dfda',
    '--accent-on-dark': '#ffffff',
    '--dark-line': '#33473a',
  };
}

// Fixed palette: pacific cyan, blush rose, porcelain, jet black, graphite.
export const PACIFIC_ROSE = {
  cyan: '#2F8C99',
  rose: '#DA667B',
  porcelain: '#FFFFFC',
  jet: '#162521',
  graphite: '#2D2D2A',
};

function pacificRoseTokens(): Record<string, string> {
  const { cyan, rose, porcelain, jet, graphite } = PACIFIC_ROSE;
  return {
    '--bg': porcelain,
    '--surface': '#ffffff',
    '--ink': jet,
    '--muted': '#4a4b47',
    '--line': '#e1e3dc',
    '--accent': cyan,
    '--accent-ink': '#0a1210',
    '--accent-text': darkenToContrast(cyan, porcelain, 4.5),
    '--accent-2': rose,
    '--accent-2-text': darkenToContrast(rose, porcelain, 4.5),
    '--accent-3': graphite,
    '--tint': '#fbeaed',
    '--dark': jet,
    '--dark-muted': '#d0d4d1',
    '--accent-on-dark': '#ffffff',
    '--dark-line': '#2f3d38',
  };
}

export function deriveTokens(base: Base): Record<string, string> {
  if (base.active === 'mint') return mintSageTokens();
  if (base.active === 'pacific') return pacificRoseTokens();
  const accent = base.active === 'a' ? base.a : base.b;
  const p = makePalette(accent);
  const [bg, line, , , ink] = p.neutrals;
  const h = toHsl(accent)[0];

  return {
    '--bg': bg,
    '--surface': '#ffffff',
    '--ink': ink,
    '--muted': darkenToContrast(fromHsl(h, 0.05, 0.5), bg, 7),
    '--line': line,
    '--accent': accent,
    '--accent-ink': contrast(accent, INK_LIGHT) >= contrast(accent, ink) ? INK_LIGHT : ink,
    '--accent-text': darkenToContrast(accent, bg, 4.5),
    '--accent-2': darkenToContrast(p.complement, '#ffffff', 3),
    '--accent-2-text': darkenToContrast(p.complement, bg, 4.5),
    '--accent-3': p.support[0],
    '--tint': fromHsl(toHsl(p.complement)[0], 0.35, 0.94),
    '--dark': p.scale[9].hex,
    '--dark-muted': fromHsl(h, 0.05, 0.8),
    '--accent-on-dark': contrast(accent, p.scale[9].hex) >= 4.5 && luminance(accent) < 0.5 ? accent : '#ffffff',
    '--dark-line': p.scale[8].hex,
  };
}

export function loadBase(): Base {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const v = JSON.parse(raw);
      const a = normalizeHex(v.a);
      const b = normalizeHex(v.b);
      if (a && b) return { a, b, active: ['b', 'mint', 'pacific'].includes(v.active) ? v.active : 'a' };
    }
  } catch {
    /* storage blocked: fall back to defaults */
  }
  return DEFAULT_BASE;
}

export function saveBase(base: Base | null) {
  try {
    if (base) localStorage.setItem(STORE_KEY, JSON.stringify(base));
    else localStorage.removeItem(STORE_KEY);
  } catch {
    /* ignore */
  }
}

export function applyTokens(tokens: Record<string, string>) {
  const root = document.documentElement;
  for (const [k, v] of Object.entries(tokens)) root.style.setProperty(k, v);
}

export function applyStoredTheme() {
  applyTokens(deriveTokens(loadBase()));
}
