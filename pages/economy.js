import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
import BgCircles from "../components/BgCircles"
const text1 = {
  top: "Kontroll på økonomi og likviditet",
  middle: "Økonomi",
  bottom:"Har du tenkt over at mangel på penger - også kalt dårlig likviditet - er årsak til nesten alle konkurser? Med  Admit på laget, skal du oppleve å ha bedre oversikt og kontroll med økonomi og likviditet. Med en økonom på laget fra Admit som følger med på tallene, lager resultatprognoser, og beregner fremtidig saldo på din bankkonto, oppdages eventuelle trusler på et tidligere tidspunkt. Det gir deg mer tid til å iverksette tiltak. Kanskje det til og med er god “sovemedisin” ?"
}

const text2 = {
  middle: "Få bedre kontroll",
  bottom:"Våre verktøy bidrar til å gi en enda bedre oversikt og forutsigbarhet når det kommer til budsjett, drift, balanse og likviditet. I tillegg til dine vanlige regnskapsrapporter, setter vi opp prognoser og resultatoppfølging etter behov."
}
const text3 = {
  middle: "Optimalisering",
  bottom:"Kalkulasjon og resultat basert på aktivitetsområder også kalt Activity Based Costing (ABC). Et viktig verktøy for å kartlegge lønnsomme og ulønnsomme aktivitetsområder, på tvers av avdelinger. Dashboard med dine viktigste overvåkningspunkt - Balanced Scorecard. Ved hjelp av vår GPS for likviditet og kapital optimaliseres oversikten av, og behovet for kontantstrømmer. Kalkulasjon og prisfastsetting vil gi deg bedre kontroll. ",
  link1:"/abc",
  button1:"SE MER"
}

const text4 = {
  middle: "Datadrevet innsikt",
  bottom:"Kalkulasjon og resultat basert på aktivitetsområder også kalt Activity Based Costing (ABC). Dashboard med dine viktigste overvåkningspunkt - Balanced Scorecard",

  button1: "BOOK MØTE",
  link1:"https://outlook.office365.com/owa/calendar/Vidrivermedforretningsutvikling@admit.no/bookings/"
}

const economy = () => {
  return (
    <>
    <div className="overflow:hidden md:hidden w-full h-1/2 fixed opacity-70 top-96 z-[-10]">

<div className= " md:hidded fixed block w-24 h-24 bgdot3 border  border-admit-blue rounded-full mix-blend-exclusion z-[-10]"> </div>
<div className= " md:hidded fixed block w-16 h-16 bgdot3 border border-dashed border-admit-light-blue mix-blend-exclusion rounded-full z-[-10]"> </div>
<div className= " md:hidded fixed block w-20 h-20 bgdot2 border border-admit-blue rounded-full mix-blend-exclusion z-[-10]"> </div>
<div className= " md:hidded fixed block w-1 h-1 bgdot2  bg-admit-blue rounded-full z-[-10] mix-blend-exclusion"> </div>
<div className= " md:hidded fixed block w-2 h-2 bgdot3 left-12  bg-admit-red rounded-full mix-blend-exclusion z-[-10]"> </div>
<div className="md:hidden bgdot2">
  <svg
    width="16"
    height="16"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="block absolute top-24 mix-blend-exclusion"
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
      <div className="fixed flex top-0 right-[20rem] scale-[100] md:scale-75 rotate-45 " >
      <BgCircles/>

      </div>
      <div className="fixed flex top-12 left-[2rem] scale-[100]  md:scale-50 rotate-90 " >
      <BgCircles/>

      </div>
    </>
  )
}

export default economy