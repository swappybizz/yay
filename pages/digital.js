import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
import BgCircles from "../components/BgCircles"
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
  bottom:"Vi opplever at mange tenker på nye produkter når temaet innovasjon kommer på agendaen. Konkurransefortrinn og nye muligheter handler svært ofte om å gjøre ting smartere og enklere. Ikke nødvendigvis nye produkter, men videreutvikling av dine eksisterende produkter/tjenester. ",
  button1: "BOOK MØTE",
  link1: "https://outlook.office365.com/owa/calendar/Vidrivermedforretningsutvikling@admit.no/bookings/"
}
const text5 = {
  middle: "Samskaping",
  bottom:"Har du tenkt på de nye mulighetene som skybaserte løsninger åpner for ? Kan du og dine leverandører og samarbeidspartnere samhandle bedre ? Tilbyr dere kundene løsninger som gir dere konkurransefortrinn ?"
}

const digital = () => {
  return (
    <>
    <div className="overflow:hidden md:hidden w-full h-1/2 fixed opacity-70 top-[90vh] z-[-10] rotate-45 left-[-10rem] ">

<div className= " md:hidded fixed block w-24 h-24 bgdot3 border  border-admit-blue rounded-full z-[-10] mix-blend-exclusion"> </div>
<div className= " md:hidded fixed block w-16 h-16 bgdot3 border border-dashed border-admit-light-blue mix-blend-exclusion rounded-full z-[-10]"> </div>
<div className= " md:hidded fixed block w-20 h-20 bgdot2 border border-admit-blue rounded-full mix-blend-exclusion z-[-10]"> </div>
<div className= " md:hidded fixed block w-1 h-1 bgdot2  bg-admit-blue rounded-full mix-blend-exclusion z-[-10]"> </div>
<div className= " md:hidded fixed block w-2 h-2 bgdot3 left-12  bg-admit-red rounded-full mix-blend-exclusion z-[-10]"> </div>
<div className="md:hidden mix-blend-exclusion bgdot2">
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
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <div className="fixed flex top-72 scale-[20] md:scale-100 left-[-6rem] " >
      <BgCircles/>

      </div>
      
      <ThreeMiddleTextTwoButtonSmall props={text5} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <WeAdmit/>
    </>
  )
}

export default digital