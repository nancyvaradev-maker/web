export function Stamp({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`text-violet-deep ${className}`}
      role="img"
      aria-label="Sello: Contadora Pública, matrícula F242 T452 CPCECABA"
    >
      <defs>
        <path id="stamp-ring" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        fill="currentColor"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="13"
        letterSpacing="3.2"
      >
        <textPath href="#stamp-ring">CONTADORA PÚBLICA · CPCECABA · F242 T452 ·</textPath>
      </text>
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-instrument-serif), serif"
        fontSize="40"
        fontStyle="italic"
      >
        NV
      </text>
    </svg>
  );
}
