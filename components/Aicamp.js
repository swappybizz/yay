import * as THREE from 'three'
import { useState, useRef } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { useGLTF, Clone, AccumulativeShadows, RandomizedLight, Html, Text, Effects, Environment, Center } from '@react-three/drei'
import { WaterPass, GlitchPass } from 'three-stdlib'


extend({ WaterPass, GlitchPass })

export default function aicamp() {
  return (
    <section>
    
    <div className='h-screen '>
    <Canvas eventPrefix="client" shadows camera={{ position: [1, 0.5, 10] }}>
      <color attach="background" args={['#f0f0f']} />
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} castShadow />
      <pointLight position={[-10, 0, -10]} intensity={2} />
      {/* <Input position={[0.4, 0, 0]} /> */}
      <group position={[0, -1, -2]}>
        <Center top rotation={[0, -Math.PI / 2, 0]}>
          <Model scale={1.5} />
        </Center>
        <Sphere scale={0.25} position={[-3, 0, 2]} />
        <Sphere scale={0.25} position={[-4, 0, -2]} />
        <Sphere scale={0.65} position={[3.5, 0, -2]} />
        <Text position={[-0, 6, -9]} font="/Inter-Regular.woff" fontSize={1}>
        Hvordan forstå og bruke 
          <meshStandardMaterial color="#002856" toneMapped={false} />
        </Text>
        <Text position={[1, 2, -10]} font="/Inter-Regular.woff" fontSize={10}>
         AI
          <meshStandardMaterial color="#FF595A" toneMapped={false} />
        </Text>
        <AccumulativeShadows temporal frames={100} alphaTest={0.8} scale={12}>
          <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[2.5, 5, -10]} />
        </AccumulativeShadows>
      </group>
      <Environment preset="city" />
      <Postpro />
      <Rig />
    </Canvas>
    </div>
    </section>
  )
}

function Postpro() {
  const ref = useRef()
  useFrame((state) => (ref.current.time = state.clock.elapsedTime * 3))
  return (
    <Effects>
      <waterPass ref={ref} factor={0.5} />
      <glitchPass />
    </Effects>
  )
}

function Rig({ vec = new THREE.Vector3() }) {
  useFrame((state) => {
    state.camera.position.lerp(vec.set(1 + state.pointer.x, 0.5, 3), 0.01)
    state.camera.lookAt(0, 0, 0)
  })
}

function Sphere(props) {
  return (
    <Center top {...props}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial />
      </mesh>
    </Center>
  )
}

function Model(props) {
  const { scene } = useGLTF('./bunny.gltf')
  return <Clone castShadow receiveShadow object={scene} {...props} />
}


