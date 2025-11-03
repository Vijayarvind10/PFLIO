import { useMemo, useState } from 'react';
import { Billboard, Float, Text } from '@react-three/drei';
import { useGameStore } from './useGameStore';
import type { SectionId } from './useGameStore';

type HotspotProps = {
  id: SectionId;
  title: string;
  icon: string;
  color: string;
  position: [number, number, number];
  onOpen: () => void;
};

export const Hotspot = ({ id, title, icon, color, position, onOpen }: HotspotProps) => {
  const currentZone = useGameStore((state) => state.currentZone);
  const visited = useGameStore((state) => state.visited.has(id));
  const [hovered, setHovered] = useState(false);

  const ringColor = useMemo(() => (visited ? '#8ed1c1' : color), [visited, color]);

  const handleClick = () => {
    onOpen();
  };

  return (
    <group position={position}>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleClick}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <ringGeometry args={[1.8, 2.2, 32]} />
        <meshStandardMaterial color={ringColor} transparent opacity={currentZone === id || hovered ? 0.9 : 0.45} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <circleGeometry args={[1.6, 32]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>
      <Float floatIntensity={0.6} rotationIntensity={0.4} speed={1.3}>
        <Billboard position={[0, 3.2, 0]}>
          <mesh onClick={handleClick} onPointerDown={(event) => event.stopPropagation()}>
            <planeGeometry args={[3.6, 1.4]} />
            <meshStandardMaterial transparent opacity={0.95} color="#ffffff" />
          </mesh>
          <Text fontSize={0.42} position={[0, 0, 0.01]} color="#2f2a3d" anchorX="center" anchorY="middle" maxWidth={3.2}>
            {title}
          </Text>
        </Billboard>
      </Float>
      <Float floatIntensity={1.1} speed={2.2}>
        <Billboard position={[0, 4.4, 0]}>
          <mesh>
            <circleGeometry args={[0.85, 32]} />
            <meshStandardMaterial color="#2f2a3d" />
          </mesh>
          <Text fontSize={0.6} position={[0, 0, 0.01]} color="#f7c8a9" anchorX="center" anchorY="middle">
            {icon}
          </Text>
        </Billboard>
      </Float>
      {visited ? (
        <Float floatIntensity={2} rotationIntensity={0.2} speed={2.6}>
          <Billboard position={[0, 5.8, 0]}>
            <mesh>
              <planeGeometry args={[1.8, 0.6]} />
              <meshStandardMaterial color="#8ed1c1" />
            </mesh>
            <Text fontSize={0.32} position={[0, 0, 0.01]} color="#2f2a3d" anchorX="center" anchorY="middle">
              ✓ Visited
            </Text>
          </Billboard>
        </Float>
      ) : null}
    </group>
  );
};
