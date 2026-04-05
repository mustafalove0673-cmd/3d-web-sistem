'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

function WireframeBuilding() {
  const meshRef = useRef<THREE.Mesh>(null)
  const edgesRef = useRef<THREE.LineSegments>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.04
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.y = state.clock.elapsedTime * 0.12
      edgesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.04
    }
  })

  const edges = useMemo(() => {
    const geo = new THREE.BoxGeometry(2, 3.5, 1.5)
    return new THREE.EdgesGeometry(geo)
  }, [])

  return (
    <group position={[0, -0.5, 0]}>
      <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.2}>
        <mesh ref={meshRef}>
          <boxGeometry args={[2, 3.5, 1.5]} />
          <meshStandardMaterial color="#0A0A0A" transparent opacity={0.02} />
          <lineSegments ref={edgesRef} geometry={edges}>
            <lineBasicMaterial color="#E63946" transparent opacity={0.5} />
          </lineSegments>
        </mesh>
      </Float>
    </group>
  )
}

function SecondaryStructure() {
  const ref = useRef<THREE.Mesh>(null)
  const edges2 = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(0.8, 1.4, 0.8)), [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.elapsedTime * 0.18
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15 + 0.5
    }
  })

  return (
    <group position={[-2.8, -1.2, -1]}>
      <mesh ref={ref}>
        <boxGeometry args={[0.8, 1.4, 0.8]} />
        <meshStandardMaterial color="#0A0A0A" transparent opacity={0.02} />
        <lineSegments geometry={edges2}>
          <lineBasicMaterial color="#F4A261" transparent opacity={0.35} />
        </lineSegments>
      </mesh>
    </group>
  )
}

function TowerStructure() {
  const ref = useRef<THREE.Mesh>(null)
  const edges3 = useMemo(() => new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.35, 0.35, 2.8, 8)), [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.25 + 1) * 0.1 - 0.5
    }
  })

  return (
    <group position={[3, -1, -0.5]}>
      <mesh ref={ref}>
        <cylinderGeometry args={[0.35, 0.35, 2.8, 8]} />
        <meshStandardMaterial color="#0A0A0A" transparent opacity={0.02} />
        <lineSegments geometry={edges3}>
          <lineBasicMaterial color="#E9C46A" transparent opacity={0.25} />
        </lineSegments>
      </mesh>
    </group>
  )
}

function FloorGrid() {
  return (
    <gridHelper
      args={[24, 24, '#E63946', '#1A1212']}
      position={[0, -2.5, 0]}
    />
  )
}

function ConstructionParticles() {
  const count = 50
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  const ref = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#E63946" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.x = Math.sin(t * 0.1) * 0.5 + 4
    state.camera.position.y = Math.cos(t * 0.08) * 0.3 + 2
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [4, 2, 5], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 8, 3]} intensity={0.3} color="#E63946" />
      <pointLight position={[-3, 2, 2]} intensity={0.2} color="#F4A261" />
      <pointLight position={[3, 1, -2]} intensity={0.15} color="#E9C46A" />

      <CameraRig />

      <WireframeBuilding />
      <SecondaryStructure />
      <TowerStructure />
      <FloorGrid />
      <ConstructionParticles />

      <Sparkles count={25} scale={8} size={1.5} speed={0.2} color="#E63946" opacity={0.2} />
      <Stars radius={50} depth={50} count={100} factor={2} saturation={0} fade speed={0.5} />

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={0.4} />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>

      <fog attach="fog" args={['#0A0A0A', 6, 18]} />
    </Canvas>
  )
}
