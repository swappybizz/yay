import React from "react"
import BgCircles from "../components/BgCircles"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
const text1 = {
  top: "PLIKTER OG RETTIGHETER",
  middle: "HR/HMS ",
  bottom:"For oss i Admit handler HR og HMS om å bygge sterke og velfungerende team, sett i sammenheng med systemtenkning. Et av de områdene vi jobber aktivt med er å få mennesker til å snakke sammen.  Gjennom å fasilitere prosesser der det er rom for å sitte ned med enkeltpersoner eller i grupper, for å sette fokus på samarbeidsutfordringer, ønsker vi å være med på å vedlikeholde og utvikle arbeidsmiljøet og bedriftene."
  }

const text2 = {
  middle: "Personalsystem",
  bottom:"Vi bistår med implementering av digitalt personalsystem, som gjør oppfølging av ansatte enklere og i hhld til oppdatert regelverk. Systemet bidrar til enkel håndtering av lovpålagt HMS-arbeid, og har integrasjon mot de fleste regnskapssystem."
  
}
const text3 = {
  middle: "Helse Miljø Sikkerhet",
  bottom:"Godt arbeidsmiljøarbeid handler om å redusere risiko for farer og ulykker. Samtidig må en aktivt rette søkelyset mot de positive og helsefremmende faktorene i arbeidsmiljøet."
  
}
const text4 = {
  middle: "Systematisk HMS-arbeid",
  bottom:"Vi leverer systematisk helse, miljø og sikkerhetsarbeid (internkontroll) til bedrifter, inkludert kursing og opplæring.",
  
  button1: "BOOK MØTE",
  link1:"https://outlook.office365.com/owa/calendar/Vidrivermedforretningsutvikling@admit.no/bookings/"
}
const hr = () => {
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
      <div className="fixed flex top-0 right-[20rem] scale-[20] md:scale-75 rotate-45 " >
      <BgCircles/>

      </div>
      <div className="fixed flex top-12 left-[2rem] scale-[20]  md:scale-50 rotate-90 " >
      <BgCircles/>

      </div>
    </>
  )
}

export default hr