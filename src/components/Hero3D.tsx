import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Text, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'
import { easing } from 'maath'

const cards = [
    { id: 1, title: 'Chennai', subtitle: 'SRM', url: import.meta.env.BASE_URL + 'AARUSH hackaton.jpg', target: 'journey' },
    { id: 2, title: 'Bangalore', subtitle: 'Samsung R&D', url: import.meta.env.BASE_URL + 'kelos.png', target: 'journey' },
    { id: 3, title: 'East Palo Alto', subtitle: 'AWS RDS', url: import.meta.env.BASE_URL + 'AWS.jpeg', target: 'experience' },
    { id: 4, title: 'Santa Cruz', subtitle: 'UCSC', url: import.meta.env.BASE_URL + 'IMG_0204.jpeg', target: 'experience' },
    { id: 5, title: 'Hackathon', subtitle: 'Wins', url: import.meta.env.BASE_URL + 'Hackaton.jpg', target: 'journey' },
    { id: 6, title: 'UniverseOS', subtitle: 'EtherWatch', url: import.meta.env.BASE_URL + 'AWS_.jpeg', target: 'projects' }
]

function Card({ position, rotation, url, title, subtitle, target }: any) {
    const ref = useRef<THREE.Group>(null)
    const [hovered, hover] = useState(false)

    useFrame((_state, delta) => {
        if (ref.current) {
            // Smoothly scale up on hover
            easing.damp3(ref.current.scale, hovered ? 1.2 : 1, 0.1, delta)
            // Add a subtle floating motion
            ref.current.position.y = position[1] + Math.sin(_state.clock.elapsedTime + position[0]) * 0.1
        }
    })

    const handleClick = () => {
        const section = document.getElementById(target)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <group ref={ref} position={position} rotation={rotation}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onClick={handleClick}
        >
            {/* Vertical Aspect Ratio: 2:3 or similar */}
            <Image url={url} transparent side={THREE.DoubleSide} scale={[2, 3]} toneMapped={false} radius={0.1}>
                <planeGeometry args={[1, 1, 32, 32]} />
            </Image>
            <Text position={[0, -1.7, 0.1]} fontSize={0.15} color="white" anchorX="center" anchorY="top" font="/Inter-Bold.woff">
                {title}
            </Text>
            <Text position={[0, -1.9, 0.1]} fontSize={0.1} color="#aaa" anchorX="center" anchorY="top" font="/Inter-Regular.woff">
                {subtitle}
            </Text>
        </group>
    )
}

function Rig() {
    const group = useRef<THREE.Group>(null)
    useFrame((_state, delta) => {
        if (group.current) {
            // Rotate the group slowly
            group.current.rotation.y += delta * 0.05
        }
    })
    return (
        <group ref={group} position={[0, -0.5, 0]}>
            {cards.map((card, i) => {
                const count = cards.length
                const radius = 4.5
                const angle = (i / count) * Math.PI * 2
                const x = Math.sin(angle) * radius
                const z = Math.cos(angle) * radius
                return (
                    <Card
                        key={card.id}
                        position={[x, 0, z]}
                        rotation={[0, angle, 0]}
                        url={card.url}
                        title={card.title}
                        subtitle={card.subtitle}
                        target={card.target}
                    />
                )
            })}
        </group>
    )
}

export default function Hero3D() {
    return (
        <div className="h-screen w-full relative bg-black">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                    <Environment preset="city" />
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Rig />
                    </Float>
                </Canvas>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10 mix-blend-difference">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                    Vijay Arvind Ramamoorthy
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                    Backend and Systems Engineer
                </p>
                <p className="text-sm md:text-base text-gray-400 mt-2">
                    MS CS at UC Santa Cruz
                </p>
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center z-10 animate-bounce pointer-events-none">
                <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</p>
            </div>
        </div>
    )
}
