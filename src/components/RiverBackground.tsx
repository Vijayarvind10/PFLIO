import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Plane, Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function FlowingWater({ targetColor }: { targetColor: string }) {
    const ref = useRef<THREE.Mesh>(null)
    const materialRef = useRef<any>(null)

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
        }
        if (materialRef.current) {
            // Smoothly interpolate color
            materialRef.current.color.lerp(new THREE.Color(targetColor), 0.02)
        }
    })

    return (
        <Plane args={[100, 100, 64, 64]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, -10]}>
            <MeshDistortMaterial
                ref={materialRef}
                color={targetColor}
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
                metalness={0.8}
                side={THREE.DoubleSide}
            />
        </Plane>
    )
}

export default function RiverBackground({ targetColor = "#001e3c" }: { targetColor?: string }) {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#000510]">
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[20, 20, 20]} intensity={2} color="#4fa1db" />
                <pointLight position={[-20, -10, -10]} intensity={1} color="#00d9ff" />
                <directionalLight position={[0, 10, 0]} intensity={1} color="#ffffff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <FlowingWater targetColor={targetColor} />
            </Canvas>
        </div>
    )
}
