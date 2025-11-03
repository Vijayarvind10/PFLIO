import { useEffect, useRef } from 'react';
import { Group, Vector2, Vector3, Euler } from 'three';
import { useFrame } from '@react-three/fiber';
import { useGameStore, type SectionId } from './useGameStore';
import { SECTION_METADATA, WELCOME_POSITION } from './sections';

type AvatarProps = {
  onEnterZone?: (id: SectionId | null) => void;
  onInteract?: (id: SectionId) => void;
};

const MOVE_SPEED = 3.5;
const TURN_SMOOTHING = 0.18;
const WORLD_RADIUS = 13;
const HOTSPOT_RADIUS = 2.6;

const createKeysRef = () => ({
  forward: false,
  backward: false,
  left: false,
  right: false
});

export const Avatar = ({ onEnterZone, onInteract }: AvatarProps) => {
  const groupRef = useRef<Group>(null);
  const velocity = useRef(new Vector3());
  const heading = useRef(new Euler());
  const keys = useRef(createKeysRef());
  const joystick = useGameStore((state) => state.joystick);
  const setPlayerPosition = useGameStore((state) => state.setPlayerPosition);
  const consumeInteraction = useGameStore((state) => state.consumeInteraction);
  const dismissIntro = useGameStore((state) => state.dismissIntro);

  const position = useRef(new Vector3(...WELCOME_POSITION));
  const currentZone = useRef<SectionId | null>(null);
  const hasMoved = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          keys.current.forward = true;
          break;
        case 's':
        case 'arrowdown':
          keys.current.backward = true;
          break;
        case 'a':
        case 'arrowleft':
          keys.current.left = true;
          break;
        case 'd':
        case 'arrowright':
          keys.current.right = true;
          break;
        case ' ':
        case 'enter':
          event.preventDefault();
          if (currentZone.current) {
            onInteract?.(currentZone.current);
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          keys.current.forward = false;
          break;
        case 's':
        case 'arrowdown':
          keys.current.backward = false;
          break;
        case 'a':
        case 'arrowleft':
          keys.current.left = false;
          break;
        case 'd':
        case 'arrowright':
          keys.current.right = false;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [onInteract]);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(...WELCOME_POSITION);
      position.current.set(...WELCOME_POSITION);
    }
  }, []);

  const updateZone = (zone: SectionId | null) => {
    if (zone !== currentZone.current) {
      currentZone.current = zone;
      onEnterZone?.(zone);
    }
  };

  useFrame((_, delta) => {
    const dir2 = new Vector2(joystick.x, joystick.y);
    if (keys.current.forward) dir2.y -= 1;
    if (keys.current.backward) dir2.y += 1;
    if (keys.current.left) dir2.x -= 1;
    if (keys.current.right) dir2.x += 1;

    if (dir2.lengthSq() > 1) {
      dir2.normalize();
    }

    const dir3 = new Vector3(dir2.x, 0, dir2.y);

    if (dir3.lengthSq() > 0) {
      if (!hasMoved.current) {
        hasMoved.current = true;
        dismissIntro();
      }
      velocity.current.lerp(dir3.multiplyScalar(MOVE_SPEED), 0.2);
      const desiredHeading = Math.atan2(velocity.current.x, velocity.current.z);
      heading.current.y += (desiredHeading - heading.current.y) * TURN_SMOOTHING;
    } else {
      velocity.current.multiplyScalar(0.85);
    }

    position.current.addScaledVector(velocity.current, delta);

    const radial = Math.hypot(position.current.x, position.current.z);
    if (radial > WORLD_RADIUS) {
      position.current.multiplyScalar(WORLD_RADIUS / radial);
    }

    position.current.y = 0.3;

    const group = groupRef.current;
    if (group) {
      group.position.copy(position.current);
      group.rotation.set(0, heading.current.y, 0);
    }

    setPlayerPosition({ x: position.current.x, z: position.current.z });

    let closest: { id: SectionId; distance: number } | null = null;
    for (const section of SECTION_METADATA) {
      const dx = position.current.x - section.position[0];
      const dz = position.current.z - section.position[2];
      const distance = Math.hypot(dx, dz);
      if (!closest || distance < closest.distance) {
        closest = { id: section.id, distance };
      }
    }

    if (closest && closest.distance <= HOTSPOT_RADIUS) {
      updateZone(closest.id);
      if (consumeInteraction()) {
        onInteract?.(closest.id);
      }
    } else {
      updateZone(null);
    }
  });

  return (
    <group ref={groupRef} castShadow>
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.32, 1.1]} />
        <meshStandardMaterial color="#283039" roughness={0.5} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.55, -0.22]} castShadow>
        <boxGeometry args={[0.7, 0.25, 0.4]} />
        <meshStandardMaterial color="#f7c8a9" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.68, -0.28]} castShadow>
        <boxGeometry args={[0.4, 0.18, 0.3]} />
        <meshStandardMaterial color="#8ed1c1" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.2, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.8, 24]} />
        <meshBasicMaterial color="#000" transparent opacity={0.25} />
      </mesh>
      <mesh position={[0.35, 0.1, 0.35]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 10]} />
        <meshStandardMaterial color="#111" metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[-0.35, 0.1, 0.35]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 10]} />
        <meshStandardMaterial color="#111" metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[0.35, 0.1, -0.35]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 10]} />
        <meshStandardMaterial color="#111" metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[-0.35, 0.1, -0.35]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 10]} />
        <meshStandardMaterial color="#111" metalness={0.2} roughness={0.6} />
      </mesh>
    </group>
  );
};
