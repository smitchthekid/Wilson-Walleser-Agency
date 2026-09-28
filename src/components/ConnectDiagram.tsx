import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../content';

// Hero graphic: each service is a node linked to "Your business" in the center,
// with leads flowing inward along the paths. Plain SVG + CSS, no animation library.

const SIZE = 440;
const C = { x: 220, y: 205 }; // hub center
const RING = 140; // distance from hub to each service node
const HUB_R = 48;
const NODE_R = 28;
const SWIRL = 28; // degrees the path bends as it heads to the hub
const CYCLE_MS = 3200;

const shortLabels: Record<string, string> = {
  'brand-strategy': 'Brand',
  websites: 'Website',
  'paid-advertising': 'Ads',
  'seo-content': 'SEO',
  'social-media': 'Social',
  'email-analytics': 'Email',
};

// 24x24 stroke icons, drawn centered on 0,0.
const icons: Record<string, JSX.Element> = {
  'brand-strategy': <path d="M0 -10 L3 -3 L10 -3 L4.5 1.5 L6.5 9 L0 4.5 L-6.5 9 L-4.5 1.5 L-10 -3 L-3 -3 Z" />,
  websites: (
    <>
      <rect x="-11" y="-8" width="22" height="16" rx="2.5" />
      <path d="M-11 -3 H11" />
    </>
  ),
  'paid-advertising': <path d="M-10 -3 V3 H-5 L6 9 V-9 L-5 -3 Z M-5 3 L-3 9" />,
  'seo-content': (
    <>
      <circle cx="-2" cy="-2" r="7" />
      <path d="M3 3 L10 10" />
    </>
  ),
  'social-media': <path d="M-10 -7 H10 V5 H-2 L-7 9 V5 H-10 Z" />,
  'email-analytics': (
    <>
      <rect x="-11" y="-7" width="22" height="14" rx="2" />
      <path d="M-11 -6 L0 2 L11 -6" />
    </>
  ),
};

const polar = (deg: number, r: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: C.x + Math.cos(a) * r, y: C.y + Math.sin(a) * r };
};

const nodes = services.map((s, i) => {
  const angle = -90 + i * (360 / services.length);
  const pos = polar(angle, RING);
  const start = polar(angle, RING - NODE_R - 8);
  const end = polar(angle, HUB_R + 8);
  const ctrl = polar(angle + SWIRL, (RING + HUB_R) / 2);
  const f = (n: number) => n.toFixed(1);
  return {
    ...s,
    label: shortLabels[s.slug] ?? s.title,
    pos,
    labelY: pos.y < C.y - 1 ? pos.y - NODE_R - 12 : pos.y + NODE_R + 20,
    d: `M${f(start.x)} ${f(start.y)} Q${f(ctrl.x)} ${f(ctrl.y)} ${f(end.x)} ${f(end.y)}`,
  };
});

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export default function ConnectDiagram() {
  const navigate = useNavigate();
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Slowly cycle the highlighted service until the visitor points at one.
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % nodes.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion]);

  const current = nodes[active];

  return (
    <div className="connect" onMouseLeave={() => setPaused(false)}>
      <p className="hero-card-label">What we do</p>
      <svg
        className="connect-svg"
        viewBox={`0 0 ${SIZE} ${SIZE - 20}`}
        role="group"
        aria-label="Our services, all connected to your business"
      >
        {nodes.map((n, i) => (
          <g key={n.slug} className={`connect-link${i === active ? ' is-active' : ''}`}>
            <path className="connect-track" d={n.d} pathLength={100} style={{ animationDelay: `${i * 90}ms` }} />
            <path className="connect-flow" d={n.d} />
            {!reducedMotion &&
              [0, 1].map((k) => (
                <circle key={k} className="connect-lead" r="3.5" opacity="0">
                  <animateMotion path={n.d} dur="2.6s" begin={`${1.2 + i * 0.45 + k * 1.3}s`} repeatCount="indefinite" />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.15;0.8;1"
                    dur="2.6s"
                    begin={`${1.2 + i * 0.45 + k * 1.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
          </g>
        ))}

        <g className="connect-hub">
          <circle className="connect-hub-pulse" cx={C.x} cy={C.y} r={HUB_R} />
          <circle className="connect-hub-core" cx={C.x} cy={C.y} r={HUB_R} />
          <text x={C.x} y={C.y - 4} textAnchor="middle" className="connect-hub-text">
            Your
          </text>
          <text x={C.x} y={C.y + 14} textAnchor="middle" className="connect-hub-text">
            business
          </text>
        </g>

        {nodes.map((n, i) => (
          <a
            key={n.slug}
            href={`/services/${n.slug}`}
            className={`connect-node${i === active ? ' is-active' : ''}`}
            style={{ animationDelay: `${300 + i * 90}ms` }}
            aria-label={`${n.title}: ${n.description}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/services/${n.slug}`);
            }}
            onMouseEnter={() => {
              setPaused(true);
              setActive(i);
            }}
            onFocus={() => {
              setPaused(true);
              setActive(i);
            }}
            onBlur={() => setPaused(false)}
          >
            <circle className="connect-node-ring" cx={n.pos.x} cy={n.pos.y} r={NODE_R + 5} />
            <circle className="connect-node-core" cx={n.pos.x} cy={n.pos.y} r={NODE_R} />
            <g className="connect-icon" transform={`translate(${n.pos.x} ${n.pos.y})`}>
              {icons[n.slug]}
            </g>
            <text x={n.pos.x} y={n.labelY} textAnchor="middle" className="connect-label">
              {n.label}
            </text>
          </a>
        ))}
      </svg>

      {/* Only announce changes the visitor caused, not the auto-cycle. */}
      <div className="connect-caption" aria-live={paused ? 'polite' : 'off'}>
        <p className="connect-caption-title">{current.title}</p>
        <p className="connect-caption-text">{current.description}</p>
      </div>
    </div>
  );
}
