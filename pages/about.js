import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
import ThreeColorRings from "../components/ThreeColorRings"

const text1={
  top: "#weadmit",
  middle:"Vår misjon er å skape bærekraftig vekst.",
  bottom:"Bærekraft er et ord som forplikter og viser veg. Gjennom å dele kompetanse kan vi sammen bidra til fremtidsrettet utvikling og bærekraftig vekst, både for organisasjoner og den enkelte arbeidstaker. Nettverk og møteplasser gir større perspektiver, større kompetanse og mer effektive synergier for å nå målene vi har satt oss."
}
const text2={
 
  middle:"Bærekraftsmål",
}

const ringText={
  leftTop:"8: ANSTENDIG ARBEID OG ØKONOMISK VEKST",
leftBottom:"#8 Fremme varig, inkluderende og bærekraftig økonomisk vekst, full sysselsetting og anstendig arbeid for alle. Admit sitt hovedmål er å oppnå varig, inkluderende og bærekraftig økonomisk vekst for egen og andres bedrifter, samt personlig utvikling for den enkelte arbeidstaker. ",
middleTop:"9: INDUSTRI, INNOVATION OG INFRASTRUKTUR",
middleBottom:"#9 Bygge solid infrastruktur og fremme inkluderende og bærekraftig industrialisering og innovasjon. Gjennom vår Admit Avatar  skaper vi relevante arbeidsplasser i distriktene med klar miljøvennlig virkning. Samtidig får kunden, bedriftene i endring, den kompetansehjelpen de trenger levert digitalt via vår plattform.",
rightTop:"17: SAMARBEID FOR Å NÅ MÅLENE ",
rightBottom:"#17 Styrke virkemidlene som trengs for å gjennomføre arbeidet, og fornye globale partnerskap for bærekraftig utvikling. Vårt støtte- og utviklingsmiljø gir grobunn for samskaping og kompetansedeling med mål om fremtidsretta utvikling og bærekraftig vekst."
}
const about = () => {
  return (
    <>
      <ThreeMiddleTextTwoButtonSmall props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeColorRings props={ringText}/>
   <WeAdmit/> 
    </>
  )
}

export default about