
import { Vector3 } from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, useGLTF } from '@react-three/drei'

export default function App() {
  return (
    <div className='h-screen pt-11 overflow-visible'>
    <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [50, 3, 100], fov: 30 }}>
      <color attach="background" args={['#fff']} />
      <fog attach="fog" args={['black', 15, 20]} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <Carla rotation={[0, Math.PI - 0.2, 0]} position={[2.2, 0, 0.6]} scale={[0.22, 0.22, 0.22]} />
          <VideoText position={[3, 1.3, -2]} />
          
        </group>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
          <hemisphereLight
            color="#002A3A"
            groundColor="#b9b9b9"
            position={[-7, 2, 13]}
            intensity={0.95}
          />
          <hemisphereLight
            color="#FF595A"
            groundColor="#b9b9b9"
            position={[7, -2, -13]}
            intensity={0.95}
          />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        <Intro />
      </Suspense>
    </Canvas>
    </div>
  )
}

function Carla(props) {
  const { scene } = useGLTF('/carla-draco.glb')
  return <primitive object={scene} {...props} />
}

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text font="/Syncopate-Bold.ttf" fontSize={1.5} letterSpacing={-0.06} {...props}>
      ADMIT
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} 
        // encoding={THREE.sRGBEncoding} 
        />
      </meshBasicMaterial>
    </Text>
  )
}



function Intro() {
  const [vec] = useState(() => new Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
