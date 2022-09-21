import React from 'react'
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import ThreeColorRings from "../components/ThreeColorRings"
import Tcr from '../components/Tcr'
import WeAdmit from "../components/WeAdmit"
import BgCircles from '../components/BgCircles'

const text1 ={
    top : "HVORDAN OG HVORFOR VELGE",
    middle : "Admit Avatar",
    bottom : "Vår samhandlingsplattform fungerer både som en digital medarbeider for deg og som distribusjonskanal for levering av våre tjenester. Slik fungerer det",
}

const text2 ={
    middle : "Kartlegging",
    bottom : "Vi gjør sammen en vurdering av hvilke behov din bedrift har. Enten det er en spesifikk tjeneste, tverrfaglig team, administrativ støttefunksjon, eller et prosjektbasert kompetansebehov."
}
const text3 ={
    middle : "Avtale",
    bottom : "Admit Avatar leveres i form av vår digitale samarbeidsplattform. Innholdet blir skreddersydd og levert på bakgrunn av avtalt behov. Du bestemmer selv tidsramme, stillingsprosent og kompetansefelt. Ingen overraskende fakturaer og ingen ansettelser."
}
const text4 ={
    middle : "Levering",
    bottom : "Admit Avatar vil bidra til sunn utvikling og vekst for din bedrift. Leveransen skjer via vår skybaserte løsning samt fysiske møter. Kognitiv tekonologi bidrar til erfaringslæring og automatisering som igjen vil gi deg som kunde en stadig forbedret løsning."
}
const text5 ={
    middle : "Hva er Admit Avatar?",
}
const text6 ={
    
    button1 : "KOM I GANG",
    link1: "https://calendly.com/admitas/"
}
const ringText ={
    leftTop : "Samhandling",
    leftBottom : "Plattform for både levering og “uttak” av kompetanse. En distribusjonskanal for levering av tjenester og din digitale medarbeider.",
    middleTop: "Teknisk",
    middleBottom: "Abonnement på teknisk løsning inkludert support og sikkerhet. Microsoft 365 (skybasert) som base og arkivstruktur basert på ISO-system. Automatiserte prosesser",
    rightTop: "Verdi",
    rightBottom: `Kompetanse “on demand”                  Forbedret tidsbruk      Sparringpartner  Sparringpartner   Nettverk`

}


const Avatar = () => {
  return (
    <>
        <ThreeMiddleTextTwoButton
        props= {text1}/>
        <ThreeMiddleTextTwoButtonSmall
        props= {text2}/>
        <ThreeMiddleTextTwoButtonSmall
        props= {text3}/>
        <ThreeMiddleTextTwoButtonSmall
        props= {text4}/>
        <ThreeMiddleTextTwoButton
        props= {text5}/>
<>
      <section className="text-gray-600 body-font">
        <div className="flex justify-evenly  items-center px-5 py-2 mx-auto ">
          <div className="flex justify-center w-3/4 items-center flex-col lg:flex-row translate-x-9 md:translate-x-0">
            <div className="lg:w-1/3 sm:w-1/2 flex justify-center items-center mr-auto translate-x-[0%]  mb-12 md:translate-x-0">
              <div className="flex relative ">
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-48 h-48 p-5 md:w-[25rem] md:h-[25rem] items-center  pt-16 rounded-full border-4 transition-all duration-500 border-admit-blue bg-white ">
                  {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                  <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3">
                    {ringText.leftTop}
                  </h1>
                  <p className=" hidden md:flex font-heroSubText px-6 text-xl leading-relaxed">
                    {ringText.leftBottom}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 flex justify-center items-center mr-auto translate-x-[-0%] mb-12 md:translate-x-0">
              <div className="flex relative">
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-48 h-48 p-5 md:w-[25rem] md:h-[25rem] items-center  pt-16 rounded-full border-4 transition-all duration-500 border-admit-red bg-white  ">
                <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3">
                    {ringText.middleTop}
                  </h1>
                  <p className="leading-relaxed font-heroSubText px-6 text-xl hidden md:flex">
                    {ringText.middleBottom}
                  </p>
                </div>
              </div>
            </div>

            <div
              href="/systems"
              className="lg:w-1/3 sm:w-1/2 flex justify-center items-center mr-auto translate-x-[0%] mb-12 md:translate-x-0"
            >
              <div className="flex relative">
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-48 h-48 p-5 md:w-[25rem] md:h-[25rem] items-center pt-16 rounded-full border-4 transition-all duration-500 border-[#73c3d5] bg-white  ">
                  <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3">
                    {ringText.rightTop}
                  </h1>
                  <p className="leading-relaxed font-heroSubText px-6 text-xl hidden md:flex">
                  Kompetanse “on demand” <br></br>
                  Forbedret tidsbruk     <br></br>
                  Sparringpartner    <br></br>
                  Sparringpartner    <br></br>
                  Nettverk    <br></br>
                 

                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

        {/* <Tcr
        props={ringText}/> */}
        <ThreeMiddleTextTwoButton
        props= {text6}/>
        <WeAdmit/>
        <div className="fixed flex top-0 right-[20rem] scale-[20] md:scale-75 rotate-45 " >
      <BgCircles/>

      </div>
      <div className="fixed flex top-12 left-[2rem] scale-[20]  md:scale-50 rotate-90 " >
      <BgCircles/>

      </div>
    </>
  )
}

export default Avatar