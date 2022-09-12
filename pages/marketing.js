import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
import ThreeColorRings from "../components/ThreeColorRings"
const text1 = {
  top: "Få oversikt over mulighetene",
  middle: "Markedsføring",
  bottom:"I dagens jungel av salgs- og markedsføringskanaler, kan det være vanskelig å velge ut de mest relevante for sin bedrift og produktportefølje. Den viktigste forutsetningen for å lykkes er å ha en gjennomarbeidet bedriftsstrategi i bunnen, som følges opp av digital strategi og  markedsplan."
}

const text2 = {
  middle: "Markedsavdeling",
  bottom:"Vår markedsavdeling består av både inhouse-kompetanse og eksterne leverandører. Til sammen dekker vi  fagfelt som digital annonsering, søkemotoroptimalisering, tekstredigering, webdesign, sosiale medier, videoredigering, grafisk design etc.."
  
}
const text3 = {
  middle: "Admit Studio",
  bottom:"Bruksområdene for Admit Studio er mange. En arena for produksjon av profesjonelt medieinnhold for dine markedsføringskanaler. Livestreaming av webinar, innspilling av forklaringsvideoer, salgsmøter, intern opplæring osv..   ​"
}


const text6 = {
  button1: "Kontakt oss",
  link1:"https://calendly.com/admitas/",
}


const lounge = () => {
  return (
    <>
      <ThreeMiddleTextTwoButton props={text1} />
      {/* <ThreeColorRings props={ringText}/> */}
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButton props={text6} />
      <WeAdmit />
    </>
  )
}

export default lounge