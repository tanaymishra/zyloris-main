'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
    const ref = useRef<THREE.Points>(null!);

    // Generate random points in a sphere
    const positions = useMemo(() => {
        const count = 2000; // Number of particles
        const positions = new Float32Array(count * 3);
        const radius = 1.5; // Radius of the sphere

        for (let i = 0; i < count; i++) {
            const r = radius * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

function GridMesh() {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta / 20;
            mesh.current.rotation.y += delta / 20;
        }
    })

    return (
        <mesh ref={mesh} scale={[2, 2, 2]}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
        </mesh>
    )

}

export default function AnimationCanvas() {
    return (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ParticleField />
                <GridMesh />
            </Canvas>
            {/* Gradient fade at bottom to blend with content */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
        </div>
    );
}
