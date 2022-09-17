import React from "react"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
import ThreeColorRings from "../components/ThreeColorRings"
import BgCircles from "../components/BgCircles"
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
  bottom:"Bruksområdene for Admit Studio er mange. En arena for produksjon av profesjonelt medieinnhold for dine markedsføringskanaler. Livestreaming av webinar, innspilling av forklaringsvideoer, salgsmøter, intern opplæring osv.",
  button1: "LES MER",
  link1: "/studio"

}





const lounge = () => {
  return (
    <>
      <ThreeMiddleTextTwoButton props={text1} />
      {/* <ThreeColorRings props={ringText}/> */}
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      {/* <ThreeMiddleTextTwoButton props={text6} /> */}
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

export default lounge