export default function NeuralNetViz() {
  const cx = 260, cy = 220;
  const innerR = 130;
  const meridians = 6;

  const innerNodes = Array.from({ length: meridians }, (_, i) => {
    const angle = (i / meridians) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + innerR * Math.cos(angle), y: cy + innerR * Math.sin(angle), id: i };
  });

  // outer satellite nodes (3, at larger radius, offset by 30°)
  const outerR = 210;
  const outerNodes = Array.from({ length: 3 }, (_, i) => {
    const angle = (i / 3) * Math.PI * 2 - Math.PI / 6;
    return { x: cx + outerR * Math.cos(angle), y: cy + outerR * Math.sin(angle), id: i };
  });

  const coreLines = innerNodes.map((n, i) => ({ x1: cx, y1: cy, x2: n.x, y2: n.y, delay: i * 0.25 }));
  const ringLines = innerNodes.map((n, i) => ({
    x1: n.x, y1: n.y,
    x2: innerNodes[(i + 1) % meridians].x,
    y2: innerNodes[(i + 1) % meridians].y,
    delay: 1.5 + i * 0.18,
  }));
  const outerLines = outerNodes.flatMap((o, oi) =>
    [0, 1, 2].map(ii => ({
      x1: o.x, y1: o.y,
      x2: innerNodes[(oi * 2 + ii) % meridians].x,
      y2: innerNodes[(oi * 2 + ii) % meridians].y,
      delay: 3 + oi * 0.3 + ii * 0.1,
      dim: true,
    }))
  );

  const allLines = [...coreLines, ...ringLines, ...outerLines];

  return (
    <div className="relative w-full h-full select-none">
      <svg viewBox="0 0 520 440" className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="outerNodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#26c6da" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#26c6da" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Outer ambient glow */}
        <circle cx={cx} cy={cy} r={220} fill="url(#centerGlow)" />

        {/* Connection lines */}
        {allLines.map((l, i) => (
          <g key={i}>
            {/* Base dim line */}
            <line
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke={l.dim ? "rgba(0,188,212,0.07)" : "rgba(0,188,212,0.14)"}
              strokeWidth={l.dim ? 0.6 : 1}
            />
            {/* Traveling pulse */}
            <line
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="#00bcd4"
              strokeWidth={l.dim ? 1 : 1.5}
              strokeLinecap="round"
              strokeDasharray="5 500"
              style={{
                animation: `travelPulse ${l.dim ? 4 : 3}s linear ${l.delay}s infinite`,
                opacity: l.dim ? 0.4 : 0.8,
              }}
            />
          </g>
        ))}

        {/* Outer nodes */}
        {outerNodes.map((n, i) => (
          <g key={`outer-${i}`}>
            <circle cx={n.x} cy={n.y} r={18} fill="url(#outerNodeGlow)"
              style={{ animation: `outerPulse 4s ease ${i * 1.3}s infinite` }} />
            <circle cx={n.x} cy={n.y} r={5} fill="#0d1f2d" stroke="#26c6da" strokeWidth={1.5}
              filter="url(#glowFilter)" />
            <circle cx={n.x} cy={n.y} r={2.5} fill="#26c6da"
              style={{ animation: `coreFlash 4s ease ${i * 1.3}s infinite` }} />
          </g>
        ))}

        {/* Inner nodes */}
        {innerNodes.map((n, i) => (
          <g key={`inner-${i}`}>
            <circle cx={n.x} cy={n.y} r={24} fill="url(#nodeGlow)"
              style={{ animation: `innerPulse 3s ease ${i * 0.4}s infinite` }} />
            <circle cx={n.x} cy={n.y} r={8} fill="#0d1f2d" stroke="#00bcd4" strokeWidth={1.5}
              filter="url(#glowFilter)" />
            <circle cx={n.x} cy={n.y} r={3.5} fill="#00bcd4"
              style={{ animation: `coreFlash 3s ease ${i * 0.4}s infinite` }} />
          </g>
        ))}

        {/* Center node — hub */}
        {/* Outermost rotating dashes */}
        <circle cx={cx} cy={cy} r={52} fill="none"
          stroke="rgba(0,188,212,0.18)" strokeWidth={1}
          strokeDasharray="10 8"
          style={{ animation: "spinCW 12s linear infinite", transformOrigin: `${cx}px ${cy}px` }} />
        <circle cx={cx} cy={cy} r={42} fill="none"
          stroke="rgba(0,188,212,0.1)" strokeWidth={1}
          strokeDasharray="6 12"
          style={{ animation: "spinCCW 18s linear infinite", transformOrigin: `${cx}px ${cy}px` }} />
        {/* Filled core circles */}
        <circle cx={cx} cy={cy} r={32} fill="rgba(0,188,212,0.08)" />
        <circle cx={cx} cy={cy} r={22} fill="rgba(0,188,212,0.15)" filter="url(#softGlow)" />
        <circle cx={cx} cy={cy} r={15} fill="#00bcd4" opacity="0.9" />
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize="11"
          fill="#0d1f2d" fontWeight="900" fontFamily="system-ui, sans-serif">AI</text>
      </svg>

      <style>{`
        @keyframes travelPulse {
          from { stroke-dashoffset: 505; }
          to   { stroke-dashoffset: -505; }
        }
        @keyframes innerPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50%       { opacity: 1;   transform: scale(1.1); }
        }
        @keyframes outerPulse {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.8; }
        }
        @keyframes coreFlash {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @keyframes spinCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinCCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
