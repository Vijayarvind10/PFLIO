import { create } from 'zustand';

export type SectionId = 'experience' | 'projects' | 'awards' | 'education' | 'contact';

type AnalyticsEvent = {
  name: 'section_opened';
  payload: { id: SectionId };
};

const logEvent = (event: AnalyticsEvent) => {
  // Simple analytics stub for future integration
  console.info(`[analytics] ${event.name}`, event.payload);
};

interface GameState {
  visited: Set<SectionId>;
  activeModal: SectionId | null;
  fxReduced: boolean;
  muted: boolean;
  listView: boolean;
  introVisible: boolean;
  playerPosition: { x: number; z: number };
  currentZone: SectionId | null;
  joystick: { x: number; y: number };
  interactionRequested: boolean;
  openModal: (id: SectionId) => void;
  closeModal: () => void;
  markVisited: (id: SectionId) => void;
  setFxReduced: (value: boolean) => void;
  toggleMuted: () => void;
  setListView: (value: boolean) => void;
  dismissIntro: () => void;
  setPlayerPosition: (position: { x: number; z: number }) => void;
  setCurrentZone: (id: SectionId | null) => void;
  setJoystick: (joystick: { x: number; y: number }) => void;
  requestInteraction: () => void;
  consumeInteraction: () => boolean;
  progress: () => number;
}

export const useGameStore = create<GameState>((set, get) => ({
  visited: new Set<SectionId>(),
  activeModal: null,
  fxReduced: false,
  muted: false,
  listView: false,
  introVisible: true,
  playerPosition: { x: 0, z: 0 },
  currentZone: null,
  joystick: { x: 0, y: 0 },
  interactionRequested: false,
  openModal: (id) => {
    logEvent({ name: 'section_opened', payload: { id } });
    set({ activeModal: id });
    get().markVisited(id);
  },
  closeModal: () => set({ activeModal: null }),
  markVisited: (id) =>
    set((state) => {
      if (state.visited.has(id)) {
        return state;
      }
      const nextVisited = new Set(state.visited);
      nextVisited.add(id);
      return { visited: nextVisited };
    }),
  setFxReduced: (value) => set({ fxReduced: value }),
  toggleMuted: () => set((state) => ({ muted: !state.muted })),
  setListView: (value) => set({ listView: value }),
  dismissIntro: () => set({ introVisible: false }),
  setPlayerPosition: (position) =>
    set((state) => {
      const prev = state.playerPosition;
      if (Math.abs(prev.x - position.x) < 0.0001 && Math.abs(prev.z - position.z) < 0.0001) {
        return state;
      }
      return { playerPosition: position };
    }),
  setCurrentZone: (id) => set({ currentZone: id }),
  setJoystick: (joystick) => set({ joystick }),
  requestInteraction: () => set({ interactionRequested: true }),
  consumeInteraction: () => {
    if (get().interactionRequested) {
      set({ interactionRequested: false });
      return true;
    }
    return false;
  },
  progress: () => {
    const total = 5;
    const visited = get().visited.size;
    return Math.round((visited / total) * 100);
  }
}));
