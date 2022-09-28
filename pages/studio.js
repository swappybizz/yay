import React from "react"
import BgCircles from "../components/BgCircles"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
const text1 = {
  top: "PRODUSER KVALITETSINNHOLD HOS",
  middle: "Admit Studio",
  bottom:"Bruksområdene for vårt Smart studio er uendelige og det er enkelt og intuitiv i bruk. Ønsker du å livestreame et webinar for en stor forsamling? Null problem. Spill inn forklaringsvideoer til dine kunder, blås konkurrentene dine av banen i salgsmøter, eller spill inn videoer til intern opplæring av dine ansatte."
}

const text2 = {
  middle: "Hva?",
  bottom:"Produksjon av profesjonelt medieinnhold som webinar, salgspitch, podcast, promofilm eller annet innen lyd og bilde. Du kan selv være en del av produksjonen for å skape en tettere relasjon. Studioet gir deg tilgang til å streame direkte fra verdens fremste strømmeplattformer som Youtube, Twitch, Vimeo, Twitter, Instagram, Zoom, Teams etc.."
  

}
const text3 = {
  middle: "Hvor?",
  bottom:"Admit Studio er lokalisert i Stordal. Innovasjon og kreativitet preger den tidligere møbelbygda og her satset det på nye næringer i gamle kulisser. Stordal Lounge, Strandgaten 27, 6250 Stordal."
  
}
const text4 = {
  middle: "Teknisk",
  bottom:"Studioet består av en opptaksenhet, samt støtteteknologi for presentasjoner. Der er “greenscreen”-vegg og ellers det som skal til for en optimal produksjon. I tillegg kan vi bistå med råd for presentasjonsteknikk og kommunikasjon foran kamera. Våre teknikere gjør tiden din i studio til en drøm. Du fokuserer på det du skal si og gjøre, vi tar oss av resten."
}

const text6 = {
  middle :"Kom i gang",
  button1: "BOOK STUDIO",
  link1:"https://outlook.office365.com/owa/calendar/Vidrivermedforretningsutvikling@admit.no/bookings/"
  
}

const studio = () => {
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
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <ThreeMiddleTextTwoButtonSmall props={text6} />
      <WeAdmit />
      <div className="fixed flex top-72 scale-[20] md:scale-100 left-[-6rem] " >
      <BgCircles/>

      </div>
    </>
  )
}

export default studio