import React from "react";
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton";
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall";
import WeAdmit from "../components/WeAdmit";
// import ThreeColorRings from "../components/ThreeColorRings"
import Tcr from "../components/Tcr";
import BgCircles from "../components/BgCircles";
const text1 = {
  top: "DER MULIGHETER DELES",
  middle: "Admit Lounge",
  bottom:
    "Samarbeidsvekst betyr å komme sammen, for å vokse sammen. Admit Lounge er vårt kompetansenettverk og utviklingsmiljø, Vår misjon er å bidra til fremtidsretta utvikling og bærekraftig vekst for SMB-markedet. Vi har et fysisk sted med kontorfellesskap for både fjernarbeid og nærarbeid på Stordal Lounge, og et fellesskap der vi kan møtes både fysisk og digitalt, for kompetansedeling og fasilitering.",
};
const text2 = {
  middle: "Fasiliteter ved Stordal Lounge",
  bottom:
    "Flexplass i åpent landska /Cellekontor stort/lite /Lounge-område / Møterom for 12 personer / Konferanseutstyr \nKjøkken \nIn-house Smartstudio \nTreningsstudio",
};
const text3 = {
  middle: "Medlemsfordeler",
  bottom:
    "Høyhastighets wifi​--Printer/scanner​--Ekstra skjerm​Kaffe/te​ Rabatterte priser på studiotid og eventer ​",
};

const text6 = {
  middle: "Bli medlem",
  // button1: "Bli Medlem",
  button1: "KONTAKT OSS",
  link1: "https://calendly.com/admitas/",
  bottom:
    "Møte likesinnede for input og inspirasjon​. Ta med dine ansatte eller ditt team, på våre events eller workshops der endringskompetanse står i fokus. Bli med i kompetansenettverket vårt !",
};
const ringText = {
  leftTop: "Coworking",
  leftBottom:
    "Fleksibelt kontorfellesskap for deg som ser etter et større fellesskap, for deg med hybridløsning på jobben, fjernarbeidere eller andre.",
  middleTop: "Workation",
  middleBottom:
    "Møt likesinnede for input og inspirasjon, eller få ro og tid til å løse utfordrende oppgaver. Noen dager på workation gir frihet og fleksibilitet til å jobbe og leve.",
  rightTop: "Workretreat",
  rightBottom:
    "Hos Admit Lounge kan bedrifter melde på sine ansatte og team, for strategi-, innovasjonsarbeid e.l. Prosessene kan også kombineres med aktiviteter, naturopplevinger og annen type teambuilding.",
};

const lounge = () => {
  return (
    <>
    <div className="overflow:hidden md:hidden w-full h-1/2 fixed opacity-70 top-96 z-[-10] right-0 rotate-90">

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
      <ThreeMiddleTextTwoButton props={text1} />
      <Tcr props={ringText} />
      {/* <ThreeMiddleTextTwoButtonSmall props={text2} /> */}
      <div
    // data-cursor-exclusion 
    >
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full flex flex-col items-center">
            {text2.top && (
              <p className="mb-8 leading-relaxed text-xl font-heroSubText">{text2.top.toUpperCase()}</p>
            )}

            {text2.middle && (
              <h1 className="title-font font-admitTitle sm:text-6xl text-4xl mb-4 font-semibold  text-gray-900">
                {text2.middle}
              </h1>
            )}

            {text2.bottom && (
              <p className="mb-8 leading-relaxed text-xl w-3/4 font-heroSubText">
                
                Flexplass i åpent landskap <br></br>
                Cellekontor stort/lite <br></br>
                Lounge-område <br></br>
                 Møterom for 12 personer <br></br>
                  Konferanseutstyr <br></br>
                  Kjøkken <br></br>
                  In-house Smartstudio <br></br>
                Treningsstudio<br></br>

              
              </p>
            )}

            <div className="flex justify-center">
              {text2.button1 && (
                <a 
                target="_blank"
                rel="noopener noreferrer"href={text2.link1}>
                <div data-cursor-size="10px" >
                <button className="inline-flex text-white bg-admit-blue border-0 py-2 my-10 px-12 font-heroSubText focus:outline-none hover:bg-admit-blue-pressed rounded-full text-lg">
                  {text2.button1}
                </button>
                </div>
                </a>
              )}

              {text2.button2 && (
                <a
                target="_blank"
                rel="noopener noreferrer" href={text2.link2}>
                <div data-cursor-size="10px" >
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 my-10 py-2 px-12 font-heroSubText focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                  {text2.button2}
                </button>
                </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
      {/* <ThreeMiddleTextTwoButtonSmall props={text3} /> */}
      <ThreeMiddleTextTwoButton props={text6} />
      
      <div className="fixed flex top-12 left-[2rem] scale-[20]  md:scale-50 rotate-90 " >
      <BgCircles/>

      </div>

      <WeAdmit />
    </>
  );
};

export default lounge;
