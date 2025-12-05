import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Text, Environment, Float } from '@react-three/drei'
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
            // Slow rotation with easing
            groupRef.current.rotation.y += delta * 0.05
        }
    })

    const handleSelect = (index: number) => {
        // Map index to section ID
        const sections = ['aws', 'samsung', 'hackathons', 'contact']
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

function Title3D() {
    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group position={[0, 0, 0]}>
                <Text
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    fontSize={0.8}
                    letterSpacing={-0.05}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, 0.3, 0]}
                >
                    Vijay Arvind
                </Text>
                <Text
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    fontSize={0.8}
                    letterSpacing={-0.05}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -0.7, 0]}
                >
                    Ramamoorthy
                </Text>
                <Text
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    fontSize={0.25}
                    color="#a3a3a3"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -1.6, 0]}
                >
                    Backend & Systems Engineer · MS CS, UC Santa Cruz
                </Text>
            </group>
        </Float>
    )
}

export default function Hero3D() {
    return (
        <section className="h-screen w-full relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0 pointer-events-none" />

                <Canvas camera={{ position: [0, 0, 12], fov: 35 }} gl={{ alpha: true }}>
                    <ambientLight intensity={0.5} />
                    <Environment preset="city" />
                    <Carousel />
                    <Title3D />
                </Canvas>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 text-sm animate-bounce pointer-events-none">
                Scroll to explore
            </div>
        </section>
    )
}
