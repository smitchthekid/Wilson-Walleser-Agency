import { useEffect, useMemo, useState } from 'react';
import {
  Base,
  DEFAULT_BASE,
  applyTokens,
  contrast,
  deriveTokens,
  loadBase,
  makePalette,
  MINT_SAGE,
  PACIFIC_ROSE,
  normalizeHex,
  saveBase,
} from '../theme';

const ORIGINAL: Base = { a: '#e8573a', b: '#16161a', active: 'a' };

const OPEN_KEY = 'ww-theme-lab';

// The panel only shows in dev, or when the address has ?lab=1 (remembered for the tab).
function labEnabled() {
  if (import.meta.env.DEV) return true;
  try {
    if (new URLSearchParams(window.location.search).get('lab') === '1') {
      sessionStorage.setItem(OPEN_KEY, '1');
    }
    return sessionStorage.getItem(OPEN_KEY) === '1';
  } catch {
    return false;
  }
}

function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [text, setText] = useState(value);
  useEffect(() => setText(value), [value]);
  return (
    <label className="lab-field">
      <span>{label}</span>
      <input type="color" value={value} onChange={(e) => onChange(e.target.value)} aria-label={`${label} picker`} />
      <input
        type="text"
        value={text}
        spellCheck={false}
        maxLength={7}
        aria-label={`${label} hex`}
        onChange={(e) => {
          setText(e.target.value);
          const hex = normalizeHex(e.target.value);
          if (hex) onChange(hex);
        }}
      />
    </label>
  );
}

export default function ThemeLab() {
  const [enabled] = useState(labEnabled);
  const [open, setOpen] = useState(true);
  const [base, setBase] = useState<Base>(loadBase);
  const tokens = useMemo(() => deriveTokens(base), [base]);

  useEffect(() => {
    applyTokens(tokens);
  }, [tokens]);

  if (!enabled) return null;

  const update = (patch: Partial<Base>) => {
    const next = { ...base, ...patch };
    setBase(next);
    saveBase(next);
  };

  const reset = (to: Base | null) => {
    setBase(to ?? DEFAULT_BASE);
    saveBase(to);
  };

  const css = `:root {\n${Object.entries(tokens)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n')}\n}`;

  const checks: [string, number][] = [
    ['Body text on page', contrast(tokens['--ink'], tokens['--bg'])],
    ['Muted text on page', contrast(tokens['--muted'], tokens['--bg'])],
    ['Link text on page', contrast(tokens['--accent-text'], tokens['--bg'])],
    ['Button label on accent', contrast(tokens['--accent-ink'], tokens['--accent'])],
    ['Accent on dark sections', contrast(tokens['--accent'], tokens['--dark'])],
  ];

  if (!open) {
    return (
      <button type="button" className="lab-tab" onClick={() => setOpen(true)}>
        Theme lab
      </button>
    );
  }

  return (
    <aside className="lab" aria-label="Theme lab">
      <header className="lab-head">
        <strong>Theme lab</strong>
        <button type="button" onClick={() => setOpen(false)} aria-label="Hide theme lab">
          Hide
        </button>
      </header>

      {(['a', 'b'] as const).map((key, i) => {
        const p = makePalette(base[key]);
        const chips = [...p.scale.map((c) => c.hex), p.complement, ...p.support];
        return (
          <section key={key} className={'lab-palette' + (base.active === key ? ' is-active' : '')}>
            <label className="lab-use">
              <input type="radio" name="palette" checked={base.active === key} onChange={() => update({ active: key })} />
              Use palette {i + 1}
            </label>
            <ColorField label={`Base ${i + 1}`} value={base[key]} onChange={(v) => update({ [key]: v })} />
            <div className="lab-swatches" title="Tints and shades, then the complement and two support colors">
              {chips.map((hex, n) => (
                <span key={n} title={hex} style={{ background: hex }} />
              ))}
            </div>
          </section>
        );
      })}

      <section className={'lab-palette' + (base.active === 'mint' ? ' is-active' : '')}>
        <label className="lab-use">
          <input type="radio" name="palette" checked={base.active === 'mint'} onChange={() => update({ active: 'mint' })} />
          Mint sage
        </label>
        <div className="lab-swatches">
          {Object.values(MINT_SAGE).map((hex) => (
            <span key={hex} title={hex} style={{ background: hex }} />
          ))}
        </div>
      </section>

      <section className={'lab-palette' + (base.active === 'pacific' ? ' is-active' : '')}>
        <label className="lab-use">
          <input type="radio" name="palette" checked={base.active === 'pacific'} onChange={() => update({ active: 'pacific' })} />
          Pacific rose
        </label>
        <div className="lab-swatches">
          {Object.values(PACIFIC_ROSE).map((hex) => (
            <span key={hex} title={hex} style={{ background: hex }} />
          ))}
        </div>
      </section>

      <ul className="lab-checks">
        {checks.map(([name, ratio]) => (
          <li key={name} className={ratio >= 4.5 ? 'ok' : 'low'}>
            <span>{name}</span>
            <span>{ratio.toFixed(1)}:1 {ratio >= 4.5 ? 'pass' : 'low'}</span>
          </li>
        ))}
      </ul>

      <div className="lab-actions">
        <button type="button" onClick={() => update({ a: base.b, b: base.a })}>
          Swap
        </button>
        <button type="button" onClick={() => reset(null)}>New default</button>
        <button type="button" onClick={() => reset(ORIGINAL)}>Original</button>
        <button type="button" onClick={() => navigator.clipboard?.writeText(css)}>Copy CSS</button>
      </div>
      <p className="lab-note">Saved in this browser only. Copy CSS to make a choice permanent.</p>
    </aside>
  );
}
