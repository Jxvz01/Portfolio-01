'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 5000 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    ref.current.rotation.z += 0.001;
    ref.current.position.z = (state.clock.getElapsedTime() * 2) % 50;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffcc"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

const GeometricCore = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.2;
    mesh.current.rotation.y = t * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.4, 200, 32]} />
        <MeshDistortMaterial
          color="#00ffcc"
          speed={3}
          distort={0.3}
          radius={1}
          emissive="#00ffcc"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

export default function Scene3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000' }}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
        <color attach="background" args={['#000']} />
        <fog attach="fog" args={['#000', 5, 20]} />
        
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00ffcc" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
        
        <ParticleField />
        <GeometricCore />
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        {/* Grid Floor for Depth */}
        <gridHelper args={[50, 50, '#111', '#050505']} position={[0, -5, 0]} rotation={[0, 0, 0]} />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, transparent, rgba(0,0,0,0.8))',
        pointerEvents: 'none'
      }} />
    </div>
  );
}
