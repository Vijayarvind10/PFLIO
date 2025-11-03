import { act } from '@testing-library/react';
import { useGameStore, type SectionId } from '../useGameStore';

const resetStore = () => {
  useGameStore.setState({
    visited: new Set<SectionId>(),
    activeModal: null,
    fxReduced: false,
    muted: false,
    listView: false,
    introVisible: true,
    playerPosition: { x: 0, z: 0 },
    currentZone: null,
    joystick: { x: 0, y: 0 },
    interactionRequested: false
  });
};

describe('useGameStore progress tracking', () => {
  beforeEach(() => {
    resetStore();
  });

  it('computes exploration percentage based on visited sections', () => {
    expect(useGameStore.getState().progress()).toBe(0);

    act(() => {
      useGameStore.getState().openModal('experience');
    });
    expect(useGameStore.getState().progress()).toBe(20);

    act(() => {
      (['projects', 'awards', 'education', 'contact'] as SectionId[]).forEach((id) => {
        useGameStore.getState().openModal(id);
      });
    });

    expect(useGameStore.getState().progress()).toBe(100);
  });
});
