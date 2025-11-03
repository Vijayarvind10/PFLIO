import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SECTION_METADATA } from './sections';
import { useGameStore } from './useGameStore';
import { World } from './World';
import { Avatar } from './Avatar';
import { Hotspot } from './Hotspot';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export const GameCanvas = () => {
  const fxReduced = useGameStore((state) => state.fxReduced);
  const openModal = useGameStore((state) => state.openModal);
  const setCurrentZone = useGameStore((state) => state.setCurrentZone);

  return (
    <div className="pointer-events-auto h-full w-full overflow-hidden rounded-[3rem] border border-white/40 bg-sand/80 shadow-soft backdrop-blur">
      <Canvas
        shadows
        camera={{ position: [10, 12, 16], fov: 45 }}
        performance={{ min: fxReduced ? 0.5 : 1 }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#f4d7bc']} />
          <fog attach="fog" args={['#f4d7bc', 12, 42]} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[6, 10, 4]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
          <World />
          <Avatar onEnterZone={setCurrentZone} onInteract={openModal} />
          {SECTION_METADATA.map((section) => (
            <Hotspot
              key={section.id}
              id={section.id}
              title={section.title}
              position={section.position}
              color={section.color}
              icon={section.icon}
              onOpen={() => openModal(section.id)}
            />
          ))}
          <OrbitControls
            makeDefault
            enablePan={false}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={(Math.PI / 3) * 1.25}
            maxDistance={22}
            minDistance={8}
          />
          {!fxReduced ? (
            <EffectComposer multisampling={0}>
              <Bloom
                intensity={0.4}
                mipmapBlur
                luminanceThreshold={0.7}
                luminanceSmoothing={0.2}
              />
              <Vignette eskil offset={0.12} darkness={0.8} blendFunction={BlendFunction.NORMAL} />
            </EffectComposer>
          ) : null}
        </Suspense>
      </Canvas>
    </div>
  );
};
