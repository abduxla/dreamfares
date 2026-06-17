/**
 * Global abstract backdrop: animated, multi-colour gradient orbs over a faint
 * dotted grid. Pure CSS animation (no JS) so it stays cheap and SSR-friendly.
 * Sits fixed behind all page content.
 */
export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Colour orbs */}
      <div className="orb -left-32 -top-24 h-[34rem] w-[34rem] animate-float-slow bg-brand-600/25" />
      <div className="orb right-[-12rem] top-24 h-[28rem] w-[28rem] animate-float bg-violet-500/20" />
      <div className="orb left-1/3 top-[42%] h-[30rem] w-[30rem] animate-float-slow bg-azure-500/15" />
      <div className="orb bottom-[-10rem] right-1/4 h-[26rem] w-[26rem] animate-float bg-grass-500/12" />
      <div className="orb bottom-24 left-[-8rem] h-[22rem] w-[22rem] animate-float-slow bg-gold-500/10" />

      {/* Vignette to deepen the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,6,15,0.7)_100%)]" />
    </div>
  );
}
