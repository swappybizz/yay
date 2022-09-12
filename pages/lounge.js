import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
import ThreeColorRings from "../components/ThreeColorRings"
const text1 = {
  top: "DER MULIGHETER DELES",
  middle: "Admit Lounge",
  bottom:
"Samarbeidsvekst betyr å komme sammen, for å vokse sammen. Admit Lounge er en hub for kompetansedeling og fasilitering. Et sted med kontorfellesskap for både fjernarbeid og nærarbeid, som motiverer og legger til rette for bærekraftig utvikling  og innovasjon."}

const text2 = {
  middle: "Fasiliteter ved Stordal Lounge",
  bottom:"Flexplass i åpent landska\nCellekontor stort/lite\nLounge-område \n Møterom for 12 personer \n Konferanseutstyr \nKjøkken \nIn-house Smartstudio \nTreningsstudio"
}
const text3 = {
  middle: "Medlemsfordeler",
  bottom:"Høyhastighets wifi​--Printer/scanner​--Ekstra skjerm​Kaffe/te​ Rabatterte priser på studiotid og eventer ​"
}


const text6 = {
  middle: "Bli medlem",
  // button1: "Bli Medlem",
  button1: "KONTAKT OSS",
  bottom:"Møte likesinnede for input og inspirasjon​. Ta med dine ansatte eller ditt team, på våre events eller workshops der endringskompetanse står i fokus. Bli med i kompetansenettverket vårt !"
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