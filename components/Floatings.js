import { MathUtils } from "three";

const { lerp } = MathUtils;
import React, { Suspense, useRef, lazy, useState, useEffect } from "react";
const Model = lazy(() => import('./Model'));
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";

function Rig({ children }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 20,
      0.05
    );
    ref.current.rotation.x = lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 20,
      0.05
    );
  });
  return <group ref={ref}>{children}</group>;
}

export default function Floatings() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
      }, []);

  return (
    <div className="  ">
      <div className="flex-col h-screen items-center transition-all duration-1000">
        <Suspense
          fallback={
            <div className="flex justify-center items-center w-1/2 h-full bg-slate-100 rounded">
              <p className="text-gray-500 font-extralight text-6xl animate-pulse">
                Loading
              </p>
            </div>
          }
        >
          <Canvas
            className="overflow-visible"
            camera={{ position: [0, -10, 65], fov: 32.5 }}
            dpr={[1, 2]}
          >
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
            <Suspense fallback={null}>
              <group position={[0, 10, 0]}>
                <Rig>
                {!isMounted ||
          navigator?.connection?.saveData ||
          !matchMedia("(min-width: 768px)").matches ? null : (
            <Suspense fallback={null}>
          <Model url="/compressed.glb" />
            </Suspense>
          )}
                  
                </Rig>
                <ContactShadows
                  rotation-x={Math.PI / 2}
                  position={[0, -35, 0]}
                  opacity={0.25}
                  width={100}
                  height={100}
                  blur={2}
                  far={50}
                />
              </group>
            </Suspense>
          </Canvas>
        </Suspense>
        
      </div>
    </div>
  );
}
