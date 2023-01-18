import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Model from "./Model";
import Content from "../components/Content"

function Rig({ children }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 20,
      0.05
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 20,
      0.05
    );
  });
  return <group ref={ref}>{children}</group>;
}

export default function Camp2() {
  return (
    <>
      <div className="flex h-screen align-middle items-center pr-5 transition-all duration-1000">
        <Canvas
          className="h-1/2"
          camera={{ position: [0, -10, 65], fov: 50 }}
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
                <Model url="/compressed.glb" />
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
        <div className="w-1/2 pr-10">
          <p className="font-heroSubText font-semibold mb-5">
            Er du klar for å ta din markedsføring et skritt videre?
          </p>
          <b className="text-6xl font-admitTitle ">
            Når du frem med {" "}
            <p className="group transition duration-300 overflow-hiddens">
              
              
            ditt budskap til 
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-admit-red"></span>
            </p>
            <p className="group transition duration-300">
              
              
               rett publikum?
              <span class="block max-w-0 group-hover:max-w-lg transition-all duration-500 h-0.5 bg-admit-dark-blue"></span>
            </p>
          </b>

          <p className="pt-10 font-heroSubText">
            I dagens jungel av ulike og lett tilgjengelige kanaler og muligheter
            for markedsføring, kan det være vanskelig å velge ut de mest
            relevante for sin bedrift og sine produkter. Markedsføringsfaget og
            markedskompetanse har forandret seg mye de siste årene og er, i
            økende grad, mer spisset inn i ulike små fagfelt som
            søkemotoroptimalisering, tekstredigering, webdesign, sosiale medier,
            videoredigering, digital annonsering mm.. Kompetansefelt som er
            nødvendig for å kunne fortsette å være konkurransedyktig og ha
            bærekraftig utvikling.
          </p>
        </div>
      </div>
     <Content/>
    </>
  );
}
