'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

function WireframeBuilding() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = s.clock.elapsedTime * 0.08
    }
  })
  const edges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 3, 1.5)), [])
  return (
    <Float speed={0.4} rotationIntensity={0.03} floatIntensity={0.15}>
      <group position={[1.5, -0.5, 0]}>
        <mesh ref={meshRef}>
          <boxGeometry args={[2, 3, 1.5]} />
          <meshStandardMaterial color="#FAFAFA" transparent opacity={0.01} />
          <lineSegments geometry={edges}>
            <lineBasicMaterial color="#2C3E6B" transparent opacity={0.2} />
          </lineSegments>
        </mesh>
      </group>
    </Float>
  )
}

function SecondBuilding() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = -s.clock.elapsedTime * 0.12
      ref.current.position.y = Math.sin(s.clock.elapsedTime * 0.3) * 0.1
    }
  })
  const edges = useMemo(() => new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.3, 0.3, 2, 6)), [])
  return (
    <group position={[-2, -1, -0.5]}>
      <mesh ref={ref}>
        <cylinderGeometry args={[0.3, 0.3, 2, 6]} />
        <meshStandardMaterial transparent opacity={0.01} />
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="#C8A97E" transparent opacity={0.15} />
        </lineSegments>
      </mesh>
    </group>
  )
}

function GridFloor() {
  return <gridHelper args={[20, 20, '#2C3E6B', '#EBE7E1']} position={[0, -2, 0]} />
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [4, 2, 5], fov: 45 }} dpr={[1, 1.5]}
      style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 3]} intensity={0.2} color="#2C3E6B" />
      <WireframeBuilding />
      <SecondBuilding />
      <GridFloor />
      <Sparkles count={15} scale={8} size={1} speed={0.2} color="#C8A97E" opacity={0.15} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} intensity={0.3} />
      </EffectComposer>
      <fog attach="fog" args={['#FAFAFA', 8, 20]} />
    </Canvas>
  )
}
