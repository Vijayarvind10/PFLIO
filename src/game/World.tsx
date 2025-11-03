import { Fragment, useMemo } from 'react';
import { Float, Text } from '@react-three/drei';

const TREE_POSITIONS: Array<[number, number, number]> = [
  [-6, 0, -6],
  [6, 0, -7],
  [9, 0, 2],
  [-9, 0, 4],
  [-2, 0, 9],
  [3, 0, -3],
  [-4, 0, 2]
];

const ROCK_POSITIONS: Array<[number, number, number]> = [
  [-2, 0, -5],
  [5, 0, 3],
  [-7, 0, 6],
  [2, 0, 7]
];

const CODE_CARDS: Array<{
  text: string;
  position: [number, number, number];
  rotation: [number, number, number];
}> = [
  { text: 'async resilience()', position: [-4, 4, -2], rotation: [0, 0.3, 0] },
  { text: 'postgres • eBPF', position: [4, 4.5, -1], rotation: [0, -0.4, 0] },
  { text: 'Latency < 5ms', position: [0, 5, 4], rotation: [0, 0, 0] }
];

export const World = () => {
  const treeMaterials = useMemo(() => ['#2c5f2d', '#45824b', '#6ca86a'], []);

  return (
    <group>
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[16, 64]} />
        <meshStandardMaterial color="#d8f2ea" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[13, 64]} />
        <meshStandardMaterial color="#f7c8a9" />
      </mesh>
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[3.5, 5.2, 64]} />
        <meshStandardMaterial color="#f4b58f" />
      </mesh>

      {TREE_POSITIONS.map((pos, index) => (
        <group position={pos} key={`tree-${index}`}>
          <mesh castShadow position={[0, 1.1, 0]}>
            <coneGeometry args={[0.9, 2.2, 6]} />
            <meshStandardMaterial color={treeMaterials[index % treeMaterials.length]} roughness={0.6} />
          </mesh>
          <mesh castShadow position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.25, 0.35, 0.8, 6]} />
            <meshStandardMaterial color="#684737" roughness={0.8} />
          </mesh>
        </group>
      ))}

      {ROCK_POSITIONS.map((pos, index) => (
        <mesh key={`rock-${index}`} position={[pos[0], 0.2, pos[2]]} scale={0.8} castShadow>
          <dodecahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#e6d1c2" roughness={0.9} />
        </mesh>
      ))}

      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[0, 2.8, 64]} />
        <meshStandardMaterial color="#fdf1df" />
      </mesh>

      {CODE_CARDS.map((card) => (
        <Float key={card.text} position={card.position} rotationIntensity={0.15} floatIntensity={0.4} speed={1.6}>
          <mesh rotation={card.rotation}>
            <planeGeometry args={[3, 1.6]} />
            <meshPhysicalMaterial
              color="#ffffff"
              opacity={0.8}
              transparent
              roughness={0.1}
              metalness={0.3}
              clearcoat={1}
              clearcoatRoughness={0.2}
            />
          </mesh>
          <Text
            rotation={card.rotation}
            position={[0, 0.02, 0]}
            fontSize={0.32}
            color="#2f2a3d"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.5}
          >
            {card.text}
          </Text>
        </Float>
      ))}

      <group position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[6.2, 6.6, 64]} />
        <meshStandardMaterial color="#f2bf94" />
      </group>

      {[[-4, -2], [4, 3], [-7, 0], [2, -6]].map(([x, z], idx) => (
        <Fragment key={`bush-${idx}`}>
          <mesh position={[x, 0.3, z]} castShadow>
            <sphereGeometry args={[0.7, 16, 16]} />
            <meshStandardMaterial color="#8ed1c1" roughness={0.5} />
          </mesh>
          <mesh position={[x + 0.6, 0.3, z + 0.2]} castShadow>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color="#7bb8a9" roughness={0.5} />
          </mesh>
        </Fragment>
      ))}
    </group>
  );
};
