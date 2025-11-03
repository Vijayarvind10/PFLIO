import { useNavigate, useLocation } from 'react-router-dom';
import { profile } from '@/data/profile';
import { useGameStore } from '@/game/useGameStore';

const ToggleButton = ({
  active,
  label,
  onClick,
  icon
}: {
  active?: boolean;
  label: string;
  icon: string;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-dusk transition hover:-translate-y-0.5 hover:border-dusk/30 hover:text-dusk focus-visible:ring-2 focus-visible:ring-dusk/40"
      aria-pressed={active}
    >
      <span aria-hidden>{icon}</span>
      {label}
    </button>
  );
};

export const Header = () => {
  const { muted, toggleMuted, fxReduced, setFxReduced } = useGameStore((state) => ({
    muted: state.muted,
    toggleMuted: state.toggleMuted,
    fxReduced: state.fxReduced,
    setFxReduced: state.setFxReduced
  }));
  const progressPct = useGameStore((state) => state.progress());
  const navigate = useNavigate();
  const location = useLocation();
  const isAccessibleRoute = location.pathname === '/accessible';

  return (
    <header className="pointer-events-auto flex w-full items-center justify-between px-6 pt-6">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-dusk/60">Playable Portfolio</p>
        <h1 className="text-2xl font-bold text-dusk">{profile.name}</h1>
        <p className="text-sm text-dusk/70">Driving through {profile.location}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-dusk/60">
          <span>Exploration</span>
          <div className="relative h-1.5 w-32 overflow-hidden rounded-full bg-white/60" aria-hidden>
            <span
              className="absolute left-0 top-0 h-full bg-mint/70 transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span>{progressPct}%</span>
          {progressPct === 100 ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-mint/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-dusk/70">
              <span aria-hidden>✨</span> 100% explored
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-dusk px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-dusk/90 focus-visible:ring-2 focus-visible:ring-dusk/50"
        >
          <span aria-hidden>⬇️</span> Download Resume
        </a>
        <ToggleButton
          icon={muted ? '🔇' : '🔊'}
          label={muted ? 'Muted' : 'Sound On'}
          onClick={toggleMuted}
          active={!muted}
        />
        <ToggleButton
          icon={fxReduced ? '🌙' : '✨'}
          label={fxReduced ? 'Reduced FX' : 'Full FX'}
          onClick={() => setFxReduced(!fxReduced)}
          active={!fxReduced}
        />
        <ToggleButton
          icon={isAccessibleRoute ? '🗺️' : '📋'}
          label={isAccessibleRoute ? 'World View' : 'List View'}
          onClick={() => navigate(isAccessibleRoute ? '/' : '/accessible')}
          active={!isAccessibleRoute}
        />
      </div>
    </header>
  );
};
