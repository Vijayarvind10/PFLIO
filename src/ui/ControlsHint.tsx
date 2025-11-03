export const ControlsHint = () => (
  <aside className="pointer-events-none absolute bottom-6 left-1/2 w-[min(90vw,700px)] -translate-x-1/2 rounded-full bg-white/70 px-6 py-3 text-xs font-medium text-dusk shadow-soft backdrop-blur">
    <div className="flex flex-wrap items-center justify-center gap-4 text-center uppercase tracking-wide">
      <span className="flex items-center gap-2">
        <span aria-hidden>⌨️</span> WASD / Arrows to move
      </span>
      <span className="hidden items-center gap-2 sm:flex">
        <span aria-hidden>🖱</span> Drag to orbit
      </span>
      <span className="flex items-center gap-2">
        <span aria-hidden>⎵</span> Space to interact
      </span>
      <span className="flex items-center gap-2">
        <span aria-hidden>📱</span> Use joystick + Interact button on mobile
      </span>
    </div>
  </aside>
);
