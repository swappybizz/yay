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
  bottom:"Kalkulasjon og resultat basert på aktivitetsområder også kalt Activity Based Costing (ABC). Et viktig verktøy for å kartlegge lønnsomme og ulønnsomme aktivitetsområder, på tvers av avdelinger. Dashboard med dine viktigste overvåkningspunkt - Balanced Scorecard. Ved hjelp av vår GPS for likviditet og kapital optimaliseres oversikten av, og behovet for kontantstrømmer. Kalkulasjon og prisfastsetting vil gi deg bedre kontroll. "
}

const text4 = {
  middle: "Datadrevet innsikt",
  bottom:"Kalkulasjon og resultat basert på aktivitetsområder også kalt Activity Based Costing (ABC). Dashboard med dine viktigste overvåkningspunkt - Balanced Scorecard",

  button1: "BOOK MØTE",
  link1:"https://calendly.com/admitas/"
}

const economy = () => {
  return (
    <>
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <WeAdmit />
      <div className="fixed flex top-0 right-[20rem] scale-[20] md:scale-75 rotate-45 " >
      <BgCircles/>

      </div>
      <div className="fixed flex top-12 left-[2rem] scale-[20]  md:scale-50 rotate-90 " >
      <BgCircles/>

      </div>
    </>
  )
}

export default economy