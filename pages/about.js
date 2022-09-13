import React from "react"
// import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
// import ThreeColorRings from "../components/ThreeColorRings"
import UnitedNations from "../components/UnitedNations"

const text1={
  top: "#weadmit",
  middle:"Vår misjon er å skape bærekraftig vekst.",
  bottom:"Bærekraft er et ord som forplikter og viser veg. Gjennom å dele kompetanse kan vi sammen bidra til fremtidsrettet utvikling og bærekraftig vekst, både for organisasjoner og den enkelte arbeidstaker. Nettverk og møteplasser gir større perspektiver, større kompetanse og mer effektive synergier for å nå målene vi har satt oss."
}
const text2={
 
  middle:"Bærekraftsmål",
}

const about = () => {
  return (
    <>
      <ThreeMiddleTextTwoButtonSmall props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      {/* <ThreeColorRings props={ringText}/> */}
      <UnitedNations/>
   <WeAdmit/> 
    </>
  )
}

export default about