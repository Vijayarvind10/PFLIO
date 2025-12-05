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
        <Plane args={[100, 100, 64, 64]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, -10]}>
            <MeshDistortMaterial
                color="#001e3c"
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

export default function RiverBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#000510]">
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[20, 20, 20]} intensity={2} color="#4fa1db" />
                <pointLight position={[-20, -10, -10]} intensity={1} color="#00d9ff" />
                <directionalLight position={[0, 10, 0]} intensity={1} color="#ffffff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <FlowingWater />
            </Canvas>
        </div>
    )
}
