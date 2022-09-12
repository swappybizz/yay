import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
const text1 = {
  top: "EN NØDVENDIGHET",
  middle: "Digitalisering",
  bottom:
    "Digitalisering handler om å bruke datamaskiner og annen digital teknologi til å fornye, forenkle og forbedre prosesser. Med skybaserte løsninger blir du i stand til å gjøre kontorarbeid overalt, forutsatt at du har tilgang til internett. Det legger til rette for økt verdiskaping og innovasjon, og brukt på riktig måte skapes bærekraftig vekst.",
}

const text2 = {
  middle: "Omstilling",
  bottom:
    "Verden er inne i ei bølge av omstillinger. Omstilling innebærer i de fleste tilfeller digitalisering og  digitalisering innebærer i de fleste tilfeller omstilling. Digitalisering er omstilling.",
}
const text3 = {
  middle: "Kompetansedeling",
  bottom:
    "Digitalisering av administrative prosesser gjør kompetansedeling enklere. Det legger også til rette for at du kan ta del i våre standardiserte og automatiserte prosesser. Den tiden du får frigjort kan så benyttes til innovasjon av kjerneprosesser i din egen bedrift.",
}
const text4 = {
  middle: "Innovasjon",
  bottom:
    "Digitalisering av administrative prosesser gjør kompetansedeling enklere. Det legger også til rette for at du kan ta del i våre standardiserte og automatiserte prosesser. Den tiden du får frigjort kan så benyttes til innovasjon av kjerneprosesser i din egen bedrift.",
  button1: "BOOK MØTE",
}
const text5 = {
  middle: "Samskaping",
  bottom:
    "Vi opplever at mange tenker på nye produkter når temaet innovasjon kommer på agendaen.  Konkurransefortrinn og nye muligheter handler svært ofte om å gjøre ting smartere og enklere. Ikke nødvendigvis nye produkter, men videreutvikling av dine eksisterende produkter/tjenester.",
}

const digital = () => {
  return (
    <>
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButton props={text5} />
      <ThreeMiddleTextTwoButton props={text4} />
      <WeAdmit/>
    </>
  )
}

export default digital