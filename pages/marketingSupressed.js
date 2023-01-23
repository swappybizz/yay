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
    <div className="overflow:hidden md:hidden w-full h-1/2 fixed opacity-70 top-96 z-[-10] rotate-90">

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