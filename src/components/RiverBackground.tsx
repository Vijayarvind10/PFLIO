import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Plane, Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function FlowingWater() {
    const ref = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (ref.current) {
            // Move the plane to simulate flow if using a texture, 
            // but with MeshDistortMaterial we just rely on the distortion animation.
            // We can also rotate it slightly to make it feel organic.
            ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
        }
    })

    return (
        <Plane args={[20, 20, 64, 64]} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
            <MeshDistortMaterial
                color="#0a0a0a"
                attach="material"
                distort={0.6}
                speed={1.5}
                roughness={0.2}
                metalness={0.9}
                side={THREE.DoubleSide}
            />
        </Plane>
    )
}

export default function RiverBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#4fa1db" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a600ff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <FlowingWater />
            </Canvas>
        </div>
    )
}
