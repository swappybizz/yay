import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
const text1 = {
  top: "kontroll på økonomi og likviditet",
  middle: "Økonomi",
  bottom:"Har du tenkt over at mangel på penger - også kalt dårlig likviditet - er årsak til nesten alle konkurser? Med  Admit på laget, skal du oppleve å ha bedre oversikt og kontroll med økonomi og likviditet. Med en økonom på laget fra Admit som følger med på tallene, lager resultatprognoser, og beregner fremtidig saldo på din bankkonto, oppdages eventuelle trusler på et tidligere tidspunkt. Det gir deg mer tid til å iverksette tiltak. Kanskje det til og med er god “sovemedisin” ?"
}

const text2 = {
  middle: "Få bedre kontroll",
  bottom:"Budsjett, drift, balanse og likviditet. Regnskapsrapporter, prognose og resultatoppfølging."
}
const text3 = {
  middle: "Optimalisering",
  bottom:"Hjelp med overvåkning av kontantstrømmer, likviditet, Kalkulasjon og prisfastsetting vil gi deg bedre kontroll."
}

const text4 = {
  middle: "Datadrevet innsikt",
  bottom:"Kalkulasjon og resultat basert på aktivitetsområder også kalt Activity Based Costing (ABC). Dashboard med dine viktigste overvåkningspunkt - Balanced Scorecard",

  button1: "TA KONTAKT",
}

const economy = () => {
  return (
    <>
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <WeAdmit />
    </>
  )
}

export default economy