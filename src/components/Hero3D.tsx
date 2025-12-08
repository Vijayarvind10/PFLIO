import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function FloatingText() {
    const textRef = useRef<THREE.Group>(null)
    const [hovered, setHovered] = useState(false)

    useFrame((state) => {
        if (textRef.current) {
            // Gentle floating motion
            textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1

            // Mouse interaction
            const x = (state.mouse.x * window.innerWidth) / 2
            const y = (state.mouse.y * window.innerHeight) / 2
            textRef.current.rotation.x = THREE.MathUtils.lerp(textRef.current.rotation.x, -y / 2000, 0.1)
            textRef.current.rotation.y = THREE.MathUtils.lerp(textRef.current.rotation.y, x / 2000, 0.1)
        }
    })

    return (
        <group ref={textRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Text
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    fontSize={1.2}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, 0.2, 0]}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    Vijay Arvind
                    <meshStandardMaterial
                        color={hovered ? "#60a5fa" : "white"}
                        emissive={hovered ? "#3b82f6" : "black"}
                        emissiveIntensity={0.5}
                        toneMapped={false}
                    />
                </Text>
                <Text
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    fontSize={0.4}
                    color="#94a3b8"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -0.6, 0]}
                >
                    Software Engineer & Researcher
                </Text>
            </Float>
        </group>
    )
}

export default function Hero3D() {
    const handleScroll = () => {
        const nextSection = document.getElementById('timeline')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="h-screen w-full relative overflow-hidden">
            {/* 3D Canvas */}
            <div className="absolute inset-0 z-10">
                <Canvas camera={{ position: [0, 0, 8], fov: 35 }} gl={{ alpha: true }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={1} />
                    <Environment preset="city" />
                    <FloatingText />
                </Canvas>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
                onClick={handleScroll}
            >
                <div className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                    <span className="text-xs uppercase tracking-widest">Explore Journey</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-px h-12 bg-gradient-to-b from-transparent via-current to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    )
}
