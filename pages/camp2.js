import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Model from "../components/Model";
import Content from "../components/Content";
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall";

const text1 = {
  bottom:
    "Gjennom de ulike kanalene får vi inn store mengder «big data» om forbrukere og kunder – store datamengder som gjennom prosessering kan anvendes på en hensiktsmessig måte. All denne informasjonen gir kunnskap om kundeadferd og kjøpsprosessen/kundereisen. Noe som igjen gir mulighet til å lage enda mer relevant innhold og tilpasset automasjon. I dette skifte mellom tradisjonell promotering og personalisering finner vi at bruken av AI (Artificial Intelligence) eller maskinlæring, er et verdifullt, og kanskje fremtidig nødvendig, verktøy for å kunne personalisere i stor skala.  Informasjonen gir mulighet til å kommunisere hensiktismessig innhold og kjøpsutløsende insentiver basert på individuell adferd.",
};
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
          className="max-h-[100%] overflow-visible"
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
            Når du frem med{" "}
            <p className="group transition duration-300 overflow-hiddens">
              ditt budskap til
              <span class="block max-w-0 group-hover:max-w-[80%] transition-all duration-500 h-0.5 bg-admit-red"></span>
            </p>
            <p className="group transition duration-300">
              rett publikum?
              <span class="block max-w-0 group-hover:max-w-[80%] transition-all duration-500 h-0.5 bg-admit-dark-blue"></span>
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
      <div className="w-full flex items-center justify-center overflow-hidden">
        <div className="w-1/3 ml-24">
          <b className="group transition duration-300 text-6xl font-admitTitle">
            Personlig tilpasset markedsføringsinnhold
            <span class="block max-w-0 group-hover:max-w-[100%] transition-all duration-500 h-0.5 bg-admit-dark-blue"></span>
          </b>
          <p className="pt-10 font-heroSubText">
            I tillegg har forbrukernes forventinger blitt høyere og kravet til
            personaliserte tjenester og markedsfokus øker. Disse nye
            forventningene setter nye krav som vi kan hjelpe deg med. Gjennom de
            ulike kanalene får vi inn store mengder «big data» om forbrukere og
            kunder – store datamengder som gjennom prosessering kan anvendes på
            en hensiktsmessig måte. All denne informasjonen gir kunnskap om
            kundeadferd og kjøpsprosessen/kundereisen. Noe som igjen gir
            mulighet til å lage enda mer relevant innhold og tilpasset
            automasjon. I dette skifte mellom tradisjonell promotering og
            personalisering finner vi at bruken av AI (Artificial Intelligence)
            eller maskinlæring, er et verdifullt, og kanskje fremtidig
            nødvendig, verktøy for å kunne personalisere i stor skala.
            Informasjonen gir mulighet til å kommunisere hensiktismessig innhold
            og kjøpsutløsende insentiver basert på individuell adferd.
          </p>
        </div>
        <div className="w-full">
          <Content />
        </div>

        <div className="justify-center items-center "></div>
      </div>
    </>
  );
}
