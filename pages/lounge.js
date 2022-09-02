import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
import ThreeColorRings from "../components/ThreeColorRings"
const text1 = {
  top: "PRODUSER KVALITETSINNHOLD HOS",
  middle: "Admit Lounge",
  bottom:
    "Bruksområdene for vårt Smart studio er uendelige og det er enkelt og intuitiv i bruk. Ønsker du å livestreame et webinar for en stor forsamling? Null problem. Spill inn forklaringsvideoer til dine kunder, blås konkurrentene dine av banen i salgsmøter, eller spill inn videoer til intern opplæring av dine ansatte.",
}

const text2 = {
  middle: "Fasiliteter ved Stordal Lounge",
  bottom:"Flexplass i åpent landska\nCellekontor stort/lite\nLounge-område \n Møterom for 12 personer \n Konferanseutstyr \nKjøkken \nIn-house Smartstudio \nTreningsstudio"
}
const text3 = {
  middle: "Medlemsfordeler",
  bottom:"Adgang 24/7​​ Høyhastighets wifi​ Printer/scanner​ Ekstra skjerm​ Kaffe/te​ Rabatterte priser på studio og eventer​"
}


const text6 = {
  middle: "Bli medlem",
  button1: "Bli Medlem",
  button2: "Kontact Oss",
  bottom:"Møte likesinnede for input og inspirasjon​. Ta med dine ansatte eller ditt team, for kortere eller lengre opphold."
}
const ringText ={
  leftTop : "Coworking",
  leftBottom :"Fleksibelt kontorfellesskap for deg som ser etter et større fellesskap, for deg med hybridløsning på jobben, fjernarbeidere eller andre.",
  middleTop: "Workstation",
  middleBottom: "Møt likesinnede for input og inspirasjon, eller få ro og tid til å løse utfordrende oppgaver. Noen dager på workation gir frihet og fleksibilitet til å jobbe og leve.Velg blant utallige naturopplevelser og aktiviteter, tilgjengelig rett utenfor døren.",
  rightTop: "Workretreat",
  rightBottom: "Hos Admit Lounge kan bedrifter ta med sine ansatte og team, for opphold i sammenheng med strategi-, innovasjonsarbeid e.l. Kombiner arbeidet med  Ute til lunsj aktiviteter, naturopplevingerog teambuilding. "

}

const lounge = () => {
  return (
    <>
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeColorRings props={ringText}/>
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButton props={text6} />
      <WeAdmit />
    </>
  )
}

export default lounge