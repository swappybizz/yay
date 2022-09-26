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
const text32 ={
    middle : "Samhandling",
    bottom : "Plattform for både levering og “uttak” av kompetanse. En distribusjonskanal for levering av tjenester og din digitale medarbeider.",
}
const text33 ={
    middle : "Teknisk",
    bottom : 
    "Abonnement på teknisk løsning inkludert support og sikkerhet. Microsoft 365 (skybasert) som base og arkivstruktur basert på ISO-system. Automatiserte prosesser",
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
    middleBottom: 
    "Abonnement på teknisk løsning inkludert support og sikkerhet. Microsoft 365 (skybasert) som base og arkivstruktur basert på ISO-system. Automatiserte prosesser",
    rightTop: "Verdi",
    rightBottom: `Kompetanse “on demand”                  Forbedret tidsbruk      Sparringpartner  Sparringpartner   Nettverk`

}


const Avatar = () => {
  return (
    <>
    <div className="overflow:hidden md:hidden w-full h-1/2 fixed opacity-70 top-96 z-[-10]">

      <div className= " md:hidded fixed block w-24 h-24 bgdot3 border  border-admit-blue rounded-full z-[-10]"> </div>
      <div className= " md:hidded fixed block w-16 h-16 bgdot3 border border-dashed border-admit-light-blue rounded-full z-[-10]"> </div>
      <div className= " md:hidded fixed block w-20 h-20 bgdot2 border border-admit-blue rounded-full z-[-10]"> </div>
      <div className= " md:hidded fixed block w-1 h-1 bgdot2  bg-admit-blue rounded-full z-[-10]"> </div>
      <div className= " md:hidded fixed block w-2 h-2 bgdot3 left-12  bg-admit-red rounded-full z-[-10]"> </div>
      <div className="md:hidden bgdot2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block absolute top-24"
        >
          <path
            d="M6.70001 0V6.70001H0V11.7H6.70001V18.3H11.7V11.7H18.3V6.70001H11.7V0H6.70001Z"
            fill="#FF595A"
          />
        </svg>
      </div>
     
    </div>
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
      <section className="text-gray-600 body-font ">
        <div className="md:flex justify-evenly  items-center px-5 py-2 mx-auto hidden">
          <div className="flex justify-center w-3/4 items-center flex-col lg:flex-row translate-x-8 md:translate-x-0">
            <div className="lg:w-1/3 sm:w-1/2 flex justify-center items-center mr-auto translate-x-[0%]  mb-12 md:translate-x-0">
              <div className="flex relative ">
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-52 h-52 p-5 md:w-[25rem] md:h-[25rem] items-center  pt-16 rounded-full border-4 transition-all duration-500 border-admit-blue bg-white ">
                  {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                  <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3 mt-3 md:mt-0">
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
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-52 h-52 p-5 md:w-[25rem] md:h-[25rem] items-center  pt-16 rounded-full border-4 transition-all duration-500 border-admit-red bg-white  ">
                <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3 mt-3 md:mt-0">
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
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-52 h-52 p-5 md:w-[25rem] md:h-[25rem] items-center pt-16 rounded-full border-4 transition-all duration-500 border-[#73c3d5] bg-white  ">
                  <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3 mt-3 md:mt-0">
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

      <div className= "md:hidden translate-y-[-10rem]">
      <ThreeMiddleTextTwoButtonSmall
        props= {text32}/>
      <ThreeMiddleTextTwoButtonSmall
        props= {text33}/>
        <div
    // data-cursor-exclusion 
    >
      <section className="text-gray-600 body-font md:hidden">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full flex flex-col items-center">
            

            
              <h1 className="title-font font-admitTitle sm:text-6xl text-4xl mb-4 font-semibold  text-gray-900">
                {ringText.rightTop}
              </h1>
            

            
              <p className="mb-8 leading-relaxed text-xl w-3/4 font-heroSubText">Kompetanse “on demand” <br></br>
                  Forbedret tidsbruk     <br></br>
                  Sparringpartner    <br></br>
                  Sparringpartner    <br></br>
                  Nettverk    <br></br></p>
            

            {/* <div className="flex justify-center">
              {props.props.button1 && (
                <a 
                target="_blank"
                rel="noopener noreferrer"href={props.props.link1}>
                <div data-cursor-size="10px" >
                <button className="inline-flex text-white bg-admit-blue border-0 py-2 my-10 px-12 font-heroSubText focus:outline-none hover:bg-admit-blue-pressed rounded-full text-lg">
                  {props.props.button1}
                </button>
                </div>
                </a>
              )}

              {props.props.button2 && (
                <a
                target="_blank"
                rel="noopener noreferrer" href={props.props.link2}>
                <div data-cursor-size="10px" >
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 my-10 py-2 px-12 font-heroSubText focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                  {props.props.button2}
                </button>
                </div>
                </a>
              )}
            </div> */}
          </div>
        </div>
      </section>
      </div>
    </div>

    </>

        {/* <Tcr
        props={ringText}/> */}
        <div className="translate-y-[-15rem] md:translate-y-[-0rem]">
        <ThreeMiddleTextTwoButton
        props= {text6}/>
        </div>
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