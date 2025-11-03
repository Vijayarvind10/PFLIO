import { useMemo } from 'react';
import { useGameStore } from './useGameStore';
import type { SectionMeta } from './sections';
import { MINIMAP_RADIUS } from './sections';

type MiniMapProps = {
  sections: SectionMeta[];
  playerPosition: { x: number; z: number };
};

const toPercent = (value: number) => {
  const clampValue = Math.max(-MINIMAP_RADIUS, Math.min(MINIMAP_RADIUS, value));
  return ((clampValue + MINIMAP_RADIUS) / (MINIMAP_RADIUS * 2)) * 100;
};

export const MiniMap = ({ sections, playerPosition }: MiniMapProps) => {
  const visited = useGameStore((state) => state.visited);
  const currentZone = useGameStore((state) => state.currentZone);
  const openModal = useGameStore((state) => state.openModal);

  const sectionMarkers = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        title: section.title,
        left: toPercent(section.position[0]),
        top: toPercent(-section.position[2])
      })),
    [sections]
  );

  const playerLeft = toPercent(playerPosition.x);
  const playerTop = toPercent(-playerPosition.z);

  return (
    <div
      className="pointer-events-auto absolute bottom-6 right-6 h-40 w-40 transform-gpu rounded-full border border-white/70 bg-white/70 shadow-soft backdrop-blur"
      aria-label="Mini-map"
    >
      <div className="relative h-full w-full">
        <span className="absolute inset-6 rounded-full border border-dashed border-dusk/20" />
        {sectionMarkers.map((marker) => (
          <button
            key={marker.id}
            type="button"
            style={{ left: `${marker.left}%`, top: `${marker.top}%`, transform: 'translate(-50%, -50%)' }}
            className="absolute h-4 w-4 -translate-y-[2px] rounded-full border-2 border-white bg-peach/80 shadow-md transition hover:scale-110 focus-visible:ring-2 focus-visible:ring-dusk/40"
            aria-label={marker.title}
            onClick={() => openModal(marker.id)}
          >
            {visited.has(marker.id) ? (
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-dusk">✓</span>
            ) : null}
            {currentZone === marker.id ? (
              <span className="absolute -left-2 -top-2 h-8 w-8 animate-ping rounded-full bg-mint/40" />
            ) : null}
          </button>
        ))}
        <span
          style={{ left: `${playerLeft}%`, top: `${playerTop}%`, transform: 'translate(-50%, -50%)' }}
          className="absolute h-3 w-3 rounded-full border border-white bg-dusk shadow-lg"
          aria-hidden
        />
      </div>
    </div>
  );
};
