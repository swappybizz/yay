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
      <ThreeMiddleTextTwoButton props={text1} />
      <Tcr props={ringText} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButton props={text6} /><div className="fixed flex top-0 right-[20rem] scale-[20] md:scale-75 rotate-45 " >
      <BgCircles/>

      </div>
      <div className="fixed flex top-12 left-[2rem] scale-[20]  md:scale-50 rotate-90 " >
      <BgCircles/>

      </div>

      <WeAdmit />
    </>
  );
};

export default lounge;
