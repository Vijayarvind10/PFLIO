import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { hackathonImages, awsImages, samsungImages } from '../data/images'

// Combine all images for the carousel
const allImages = [
    ...hackathonImages,
    ...awsImages,
    ...samsungImages,
    // Duplicate some if needed to have enough cards
    ...hackathonImages
].slice(0, 8) // Limit to 8 cards

function CarouselItem({ index, count, url, radius = 4, onSelect }: { index: number, count: number, url: string, radius?: number, onSelect: (index: number) => void }) {
    const ref = useRef<THREE.Group>(null)
    const [hovered, setHover] = useState(false)

    // Calculate position in the ring
    const angle = (index / count) * Math.PI * 2

    useFrame(() => {
        if (ref.current) {
            // Calculate global rotation to keep cards facing center or camera
            // For a simple carousel, we just place them and let the parent group rotate
        }
    })

    return (
        <group
            ref={ref}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            rotation={[0, angle, 0]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={() => onSelect(index)}
        >
            <Image
                url={url}
                transparent
                side={THREE.DoubleSide}
                scale={hovered ? [1.6, 2.4] : [1.4, 2.1]} // Vertical aspect ratio
                toneMapped={false}
            />
        </group>
    )
}

function Carousel({ radius = 5 }) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((_, delta) => {
        if (groupRef.current) {
            // Slow rotation
            groupRef.current.rotation.y += delta * 0.1
        }
    })

    const handleSelect = (index: number) => {
        // Map index to section ID
        const sections = ['hackathons', 'aws', 'samsung', 'stats', 'contact']
        // Simple mapping logic: distribute clicks across sections
        const sectionId = sections[index % sections.length]
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <group ref={groupRef}>
            {allImages.map((img, i) => (
                <CarouselItem
                    key={i}
                    index={i}
                    count={allImages.length}
                    url={img}
                    radius={radius}
                    onSelect={handleSelect}
                />
            ))}
        </group>
    )
}

export default function Hero3D() {
    return (
        <section className="h-screen w-full bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
                    <ambientLight intensity={0.5} />
                    <Environment preset="city" />
                    <Carousel />
                </Canvas>
            </div>

            {/* Overlay Text */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-center space-y-4 bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                        Vijay Arvind Ramamoorthy
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 font-light tracking-wide">
                        Backend and systems engineer <span className="mx-2 text-neutral-500">·</span> MS CS, UC Santa Cruz
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 text-sm animate-bounce">
                Scroll to explore
            </div>
        </section>
    )
}
