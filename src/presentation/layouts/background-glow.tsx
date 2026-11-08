export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className="glow-orb bg-brand-primary -left-24 top-0 h-72 w-72"
      />
      <div
        className="glow-orb bg-brand-accent right-0 top-1/3 h-80 w-80"
      />
      <div
        className="glow-orb bg-brand-secondary bottom-0 left-1/3 h-64 w-64"
      />
    </div>
  );
}
