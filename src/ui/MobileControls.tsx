import { useCallback, useEffect, useRef, useState } from 'react';
import { useGameStore } from '@/game/useGameStore';

const getMatches = () => (typeof window !== 'undefined' ? window.matchMedia('(pointer: coarse)').matches : false);

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getMatches);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const mq = window.matchMedia('(pointer: coarse)');
    const listener = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  return isMobile;
};

export const MobileControls = () => {
  const isMobile = useIsMobile();
  const setJoystick = useGameStore((state) => state.setJoystick);
  const requestInteraction = useGameStore((state) => state.requestInteraction);
  const [knobOffset, setKnobOffset] = useState({ x: 0, y: 0 });
  const activePointerId = useRef<number | null>(null);

  const resetJoystick = useCallback(() => {
    setKnobOffset({ x: 0, y: 0 });
    setJoystick({ x: 0, y: 0 });
    activePointerId.current = null;
  }, [setJoystick]);

  const updateJoystick = useCallback(
    (clientX: number, clientY: number, rect: DOMRect) => {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const maxDistance = rect.width / 2;
      const distance = Math.min(Math.hypot(dx, dy), maxDistance);
      const angle = Math.atan2(dy, dx);
      const normalizedX = Number(((distance / maxDistance) * Math.cos(angle)).toFixed(2));
      const normalizedY = Number(((distance / maxDistance) * Math.sin(angle)).toFixed(2));

      setKnobOffset({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });
      setJoystick({ x: normalizedX, y: normalizedY });
    },
    [setJoystick]
  );

  useEffect(() => () => resetJoystick(), [resetJoystick]);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="pointer-events-auto absolute inset-x-0 bottom-6 flex items-center justify-between px-6">
      <div
        className="relative h-28 w-28 rounded-full border-2 border-white/80 bg-white/60 backdrop-blur"
        onPointerDown={(event) => {
          const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
          activePointerId.current = event.pointerId;
          event.currentTarget.setPointerCapture(event.pointerId);
          updateJoystick(event.clientX, event.clientY, rect);
        }}
        onPointerMove={(event) => {
          if (activePointerId.current !== event.pointerId) {
            return;
          }
          const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
          updateJoystick(event.clientX, event.clientY, rect);
        }}
        onPointerUp={(event) => {
          if (activePointerId.current !== event.pointerId) {
            return;
          }
          (event.currentTarget as HTMLDivElement).releasePointerCapture(event.pointerId);
          resetJoystick();
        }}
        onPointerLeave={(event) => {
          if (activePointerId.current === event.pointerId) {
            resetJoystick();
          }
        }}
        onPointerCancel={(event) => {
          if (activePointerId.current === event.pointerId) {
            resetJoystick();
          }
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dusk/70 shadow-inner transition-transform"
          style={{ transform: `translate(calc(-50% + ${knobOffset.x}px), calc(-50% + ${knobOffset.y}px))` }}
        />
      </div>

      <button
        type="button"
        onClick={() => requestInteraction()}
        className="rounded-full bg-dusk px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-soft transition active:scale-95"
      >
        Interact
      </button>
    </div>
  );
};
