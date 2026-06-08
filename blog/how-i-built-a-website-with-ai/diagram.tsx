export function LogoDiagram() {
  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-xs" role="img" aria-label="Logo: 探 in oracle bone script style">
      {/* 探 — 穴中有一只手 */}
      {/* 穴：洞穴 — 三边线框 */}
      <path d="M40 30 L150 30 L150 160 L40 160" stroke="#111827" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* 手：手腕 */}
      <path d="M3 100 L45 100" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
      {/* 手掌 */}
      <path d="M50 85 L65 85 L65 115 L50 115" stroke="#111827" strokeWidth="5" fill="none" strokeLinejoin="round" />
      {/* 手指 */}
      <path d="M65 85 L95 70" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <path d="M65 100 L105 100" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      <path d="M65 115 L95 130" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
