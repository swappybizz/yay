import React from "react"
import BgCircles from "../components/BgCircles"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
const text1 = {
  top: "Tenk nytt - Tenk nå!",
  middle: "Strategiarbeid",
}

const text2 = {
  middle: "Hva er strategi?",
  bottom:
    "For å sette forretningsidéen og visjonen ut i livet må bedriften jobbe frem en overordnet strategi. Denne må implementers og brukes kontinuerlig i bedriftens arbeid mot å realisere sine mål. Vi ønsker å sette nye tanker i sving og inviterer gjerne til en samtale/workshop der  vi diskuterer nye påstander og tanker som er relevant for de endringer som allerede er her og som potensielt kommer.  Sjeldent har verden vært så utfordrende og kompleks som nå. Vi står på startstreken til en ytterligere teknologisk revolusjon. Demografiske, geografiske og klimabaserte endringer gir oss nye utfordringer. Informasjonsdemokratiet utfordres  og krav om ansvarlighet og transparens endrer næringslivet, og gir nye samarbeidsstrukturer. En av de viktigste forutsetninger for å kunne møte disse endringene, er å ha en solid og gjennomarbeidet bedriftsstrategi.",
}
const text3 = {
  middle: "Hvordan bygge strategi ?",
  bottom:
    "En strategiprosess må gjennom ulike faser og må være godkjent av styret. Den starter med kartlegging som viser bedriftens behov for endringer nå og i årene fremover (“as is” og “to be”). Hvor står man i forhold til konkurrenter, produktportefølje, digitalisering, bærekraft mm. Prosessen fortsetter med en kreativ del som bør holdes utenfor de vante lokalene for å stimulere til mest mulig kreativitet og nye tanker. Til slutt går man inn i en konsoliderings- og gjennomføringsfase der man tar i bruk de verktøyene man har utviklet i løpet av prosessen.",
}
const text4 = {
  middle: "Preferanser, team og kreativitet",
  bottom:
    "Preferanser handler om å kartlegge «våre automatiserte vaner». Skal man tenke strategi må det legges til rette for kreativitet. For å få til det på en god måte, må det legges til rette for samtaler og refleksjoner. Admit’s teambygging baserer seg på Jungiansk typologi som karlegger preferanser og gir veiledning om hvilke funksjoner i et team som passer best for den enkelte. Et verktøy for å bygge effektive og velfungerende team, samt bedre samhandling mellom de ulike teamene i bedriften.",
  button1: "BOOK MØTE",
  link1 : "https://calendly.com/admitas/"
}

const strategy = () => {
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
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <WeAdmit />
      <div className="fixed flex top-72 scale-[20] md:scale-100 left-[-6rem] " >
      <BgCircles/>

      </div>
    </>
  )
}

export default strategy