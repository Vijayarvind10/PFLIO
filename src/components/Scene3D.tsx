import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

/* ───────────────────── GLSL Shaders ───────────────────── */

const galaxyVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  attribute float aScale;
  attribute vec3 aRandomness;
  varying vec3 vColor;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.15;
    angle += angleOffset;
    modelPosition.x = cos(angle) * distanceToCenter;
    modelPosition.z = sin(angle) * distanceToCenter;

    modelPosition.xyz += aRandomness;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);

    vColor = color;
  }
`

const galaxyFragmentShader = /* glsl */ `
  varying vec3 vColor;

  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / distanceToCenter - 0.1;
    gl_FragColor = vec4(vColor, strength);
  }
`

/* ───────────────────── Galaxy Particles ───────────────────── */

const PARTICLE_COUNT = 4000
const GALAXY_RADIUS = 6
const BRANCHES = 5
const SPIN = 1.2
const RANDOMNESS_POWER = 3
const INSIDE_COLOR = new THREE.Color('#6366f1')
const OUTSIDE_COLOR = new THREE.Color('#a855f7')

function GalaxyParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const { positions, colors, scales, randomness } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const scales = new Float32Array(PARTICLE_COUNT)
    const randomness = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const radius = Math.random() * GALAXY_RADIUS
      const branchAngle = ((i % BRANCHES) / BRANCHES) * Math.PI * 2
      const spinAngle = radius * SPIN
      const randomFactor = 0.4 * radius

      const rx = Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * randomFactor
      const ry = Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * randomFactor * 0.5
      const rz = Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * randomFactor

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius
      positions[i3 + 1] = 0
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius

      randomness[i3] = rx
      randomness[i3 + 1] = ry
      randomness[i3 + 2] = rz

      const mixedColor = INSIDE_COLOR.clone()
      mixedColor.lerp(OUTSIDE_COLOR, radius / GALAXY_RADIUS)
      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b

      scales[i] = Math.random()
    }

    return { positions, colors, scales, randomness }
  }, [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
    if (pointsRef.current) {
      const scrollProgress = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02 + scrollProgress * 0.5
    }
  })

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uSize: { value: 30 * Math.min(window.devicePixelRatio, 2) },
  }), [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={PARTICLE_COUNT} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-aScale" count={PARTICLE_COUNT} array={scales} itemSize={1} />
        <bufferAttribute attach="attributes-aRandomness" count={PARTICLE_COUNT} array={randomness} itemSize={3} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={galaxyVertexShader}
        fragmentShader={galaxyFragmentShader}
        uniforms={uniforms}
        vertexColors
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ───────────────────── Floating Geometry ───────────────────── */

interface FloatingMeshProps {
  position: [number, number, number]
  geometry: 'icosahedron' | 'torus' | 'octahedron' | 'dodecahedron' | 'torusKnot'
  color: string
  speed: number
  scale?: number
}

function FloatingMesh({ position, geometry, color, speed, scale = 1 }: FloatingMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialPos = useRef(position)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.position.y = initialPos.current[1] + Math.sin(t * speed) * 0.4
    meshRef.current.position.x = initialPos.current[0] + Math.cos(t * speed * 0.7) * 0.15
    meshRef.current.rotation.x = t * speed * 0.3
    meshRef.current.rotation.z = t * speed * 0.2
  })

  const renderGeometry = () => {
    switch (geometry) {
      case 'icosahedron': return <icosahedronGeometry args={[0.4 * scale, 0]} />
      case 'torus': return <torusGeometry args={[0.3 * scale, 0.12 * scale, 16, 32]} />
      case 'octahedron': return <octahedronGeometry args={[0.35 * scale, 0]} />
      case 'dodecahedron': return <dodecahedronGeometry args={[0.3 * scale, 0]} />
      case 'torusKnot': return <torusKnotGeometry args={[0.25 * scale, 0.08 * scale, 64, 16]} />
    }
  }

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.35}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function FloatingObjects() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    const scrollProgress = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)
    groupRef.current.rotation.y = scrollProgress * Math.PI * 0.5
  })

  return (
    <group ref={groupRef}>
      <FloatingMesh position={[4, 1, -3]} geometry="icosahedron" color="#6366f1" speed={0.4} scale={1.2} />
      <FloatingMesh position={[-4, -1, -2]} geometry="torus" color="#a855f7" speed={0.3} />
      <FloatingMesh position={[3, -2, 1]} geometry="octahedron" color="#06b6d4" speed={0.5} />
      <FloatingMesh position={[-3, 2, -4]} geometry="dodecahedron" color="#3b82f6" speed={0.35} />
      <FloatingMesh position={[0, 3, -5]} geometry="torusKnot" color="#8b5cf6" speed={0.25} scale={0.8} />
      <FloatingMesh position={[-5, 0, -6]} geometry="icosahedron" color="#06b6d4" speed={0.45} scale={0.6} />
      <FloatingMesh position={[5, -3, -4]} geometry="octahedron" color="#a855f7" speed={0.55} scale={0.7} />
    </group>
  )
}

/* ───────────────────── Camera Controller ───────────────────── */

function CameraController() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0, z: 6 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight)
    const progress = window.scrollY / maxScroll

    target.current.x = mouse.current.x * 0.4
    target.current.y = -progress * 2.5 - mouse.current.y * 0.2
    target.current.z = 6 + Math.sin(progress * Math.PI * 0.8) * 1.5

    camera.position.x += (target.current.x - camera.position.x) * 0.03
    camera.position.y += (target.current.y - camera.position.y) * 0.03
    camera.position.z += (target.current.z - camera.position.z) * 0.03
    camera.lookAt(0, camera.position.y * 0.8, 0)
  })

  return null
}

/* ───────────────────── Main Scene ───────────────────── */

export default function Scene3D() {
  return (
    <>
      <color attach="background" args={['#030014']} />
      <fog attach="fog" args={['#030014', 8, 20]} />

      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#6366f1" distance={20} />
      <pointLight position={[-5, -5, -3]} intensity={0.8} color="#a855f7" distance={15} />
      <pointLight position={[0, 3, 2]} intensity={0.5} color="#06b6d4" distance={12} />

      <Stars radius={80} depth={60} count={6000} factor={4} saturation={0.1} fade speed={0.5} />

      <GalaxyParticles />
      <FloatingObjects />
      <CameraController />
    </>
  )
}
