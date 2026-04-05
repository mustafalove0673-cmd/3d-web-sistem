'use client';

import { Suspense, useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

/* ── Blueprint Grid Floor ── */
function BlueprintGrid() {
  return (
    <Grid
      args={[30, 30]}
      cellSize={1}
      cellThickness={0.4}
      cellColor="#4A90D9"
      sectionSize={5}
      sectionThickness={0.8}
      sectionColor="#4A90D9"
      fadeDistance={25}
      fadeStrength={1}
      infiniteGrid
      position={[0, -2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

/* ── Rotating Building Wireframe ── */
function BuildingWireframe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  const wireframeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#4A90D9',
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      }),
    []
  );

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#C5A55A',
        wireframe: true,
        transparent: true,
        opacity: 0.5,
        emissive: '#C5A55A',
        emissiveIntensity: 0.3,
      }),
    []
  );

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main building body */}
      <mesh material={wireframeMaterial}>
        <boxGeometry args={[3, 4, 2.5]} />
      </mesh>

      {/* Roof */}
      <mesh material={goldMaterial} position={[0, 2.8, 0]}>
        <coneGeometry args={[2.2, 1.5, 4]} />
      </mesh>

      {/* Left wing */}
      <mesh material={wireframeMaterial} position={[-2.5, -0.3, 0]}>
        <boxGeometry args={[1.8, 3, 2]} />
      </mesh>

      {/* Right wing */}
      <mesh material={wireframeMaterial} position={[2.5, -0.3, 0]}>
        <boxGeometry args={[1.8, 3, 2]} />
      </mesh>

      {/* Second floor accent */}
      <mesh material={goldMaterial} position={[0, 0.5, 0]}>
        <boxGeometry args={[3.2, 0.15, 2.7]} />
      </mesh>

      {/* Window details - front */}
      {[[-0.7, 1.2, 1.26], [0.7, 1.2, 1.26]].map((pos, i) => (
        <mesh key={`window-${i}`} position={pos as [number, number, number]} material={goldMaterial}>
          <boxGeometry args={[0.8, 1, 0.02]} />
        </mesh>
      ))}

      {/* Ground floor columns */}
      {[-1.2, 1.2].map((x, i) => (
        <mesh key={`col-${i}`} position={[x, -1.5, 1.3]} material={goldMaterial}>
          <cylinderGeometry args={[0.06, 0.06, 1.5, 8]} />
        </mesh>
      ))}

      {/* Entrance */}
      <mesh position={[0, -1.2, 1.28]} material={goldMaterial}>
        <boxGeometry args={[1, 1.6, 0.04]} />
      </mesh>
    </group>
  );
}

/* ── Floating Construction Particles ── */
function ConstructionParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 60;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      const posArray = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        posArray[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#C5A55A"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Gold Metallic Accent Ring ── */
function GoldRing() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[5, 1, -3]}>
        <torusGeometry args={[0.8, 0.02, 16, 48]} />
        <meshStandardMaterial
          color="#C5A55A"
          emissive="#C5A55A"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

/* ── Second Gold Ring ── */
function GoldRing2() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[-4, 2, -2]}>
        <torusGeometry args={[0.5, 0.015, 16, 48]} />
        <meshStandardMaterial
          color="#4A90D9"
          emissive="#4A90D9"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

/* ── Mouse Reactive Camera ── */
function CameraController() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

/* ── Scene Content ── */
function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={0.6} color="#E8E4E0" />
      <directionalLight position={[-3, 5, -3]} intensity={0.2} color="#4A90D9" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#C5A55A" distance={15} />
      <pointLight position={[5, 2, 5]} intensity={0.2} color="#4A90D9" distance={10} />

      <BlueprintGrid />
      <BuildingWireframe />
      <ConstructionParticles />
      <GoldRing />
      <GoldRing2 />

      <Sparkles
        count={40}
        scale={15}
        size={1.5}
        speed={0.3}
        color="#C5A55A"
        opacity={0.3}
      />

      <CameraController />
    </>
  );
}

/* ── Main Scene3D Component ── */
export default function Scene3D() {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [6, 3, 6], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#1C1C1C' }}
      >
        <color attach="background" args={['#1C1C1C']} />
        <fog attach="fog" args={['#1C1C1C', 8, 25]} />
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
