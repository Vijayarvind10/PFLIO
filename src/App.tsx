import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { GameCanvas } from '@/game/GameCanvas';
import { MiniMap } from '@/game/MiniMap';
import { SECTION_METADATA } from '@/game/sections';
import { useGameStore } from '@/game/useGameStore';
import { Header } from '@/ui/Header';
import { ControlsHint } from '@/ui/ControlsHint';
import { ListView } from '@/ui/ListView';
import { ModalSwitchboard } from '@/ui/ModalSwitchboard';
import { MobileControls } from '@/ui/MobileControls';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const GameRoute = () => {
  const setListView = useGameStore((state) => state.setListView);
  const playerPosition = useGameStore((state) => state.playerPosition);

  useEffect(() => {
    setListView(false);
  }, [setListView]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sand via-peach to-mint/40" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="pointer-events-none relative mx-auto mt-6 flex w-[min(92vw,1100px)] flex-1 items-center justify-center pb-32">
          <GameCanvas />
          <MiniMap sections={SECTION_METADATA} playerPosition={playerPosition} />
          <MobileControls />
          <ControlsHint />
        </main>
        <ModalSwitchboard />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GameRoute />} />
        <Route path="/accessible" element={<ListView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
