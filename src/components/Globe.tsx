import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars, Html } from '@react-three/drei'
import * as THREE from 'three'

const locations = [
    { name: 'Chennai', lat: 13.0827, lng: 80.2707, description: 'SRM Institute' },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946, description: 'Samsung R&D' },
    { name: 'Santa Cruz', lat: 36.9741, lng: -122.0308, description: 'UC Santa Cruz' },
    { name: 'East Palo Alto', lat: 37.4688, lng: -122.1411, description: 'AWS RDS' }
]

function latLngToVector3(lat: number, lng: number, radius: number) {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lng + 180) * (Math.PI / 180)
    const x = -(radius * Math.sin(phi) * Math.cos(theta))
    const z = radius * Math.sin(phi) * Math.sin(theta)
    const y = radius * Math.cos(phi)
    return new THREE.Vector3(x, y, z)
}

function Marker({ position, name, description }: any) {
    const [hidden, set] = useState(true)
    return (
        <group position={position}>
            <mesh onPointerOver={() => set(false)} onPointerOut={() => set(true)}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color="#3b82f6" />
            </mesh>
            <Html distanceFactor={10} className={`transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
                <div className="bg-black/80 p-2 rounded border border-blue-500 text-white text-xs w-32 backdrop-blur-md">
                    <h3 className="font-bold">{name}</h3>
                    <p>{description}</p>
                </div>
            </Html>
        </group>
    )
}

function Earth() {
    const earthRef = useRef<THREE.Mesh>(null)

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.001
        }
    })

    return (
        <group>
            {/* Dark Globe */}
            <Sphere ref={earthRef} args={[2, 64, 64]}>
                <meshPhongMaterial
                    color="#1a1a1a"
                    emissive="#000000"
                    specular="#111111"
                    shininess={10}
                    wireframe={false}
                />
            </Sphere>

            {/* Wireframe overlay for "Systems" look */}
            <Sphere args={[2.01, 32, 32]}>
                <meshBasicMaterial color="#333" wireframe transparent opacity={0.3} />
            </Sphere>

            {/* Markers */}
            {locations.map((loc, i) => (
                <Marker
                    key={i}
                    position={latLngToVector3(loc.lat, loc.lng, 2.05)}
                    name={loc.name}
                    description={loc.description}
                />
            ))}
        </group>
    )
}



export default function Globe() {
    return (
        <div className="h-[600px] w-full bg-neutral-950 relative">
            <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none">
                <h2 className="text-4xl font-bold text-white">Global Impact</h2>
                <p className="text-neutral-400 mt-2">Spin to explore my journey</p>
            </div>

            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Earth />
                <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
            </Canvas>
        </div>
    )
}
