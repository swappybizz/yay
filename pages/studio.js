import React from "react"
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
  bottom:" Produksjon av profesjonelt medieinnhold som webinar, salgspitch, podcast, promofilm eller annet innen lyd og bilde. Du kan selv være en del av produksjonen for å skape en tettere relasjon. Studioet gir deg tilgang til å streame direkte fra verdens fremste strømmeplattformer som Youtube, Twitch, Vimeo, Twitter, Instagram, Zoom, Teams etc.."

}
const text3 = {
  middle: "Hvor?",
  bottom:"Admit Studio er lokalisert i Stordal. Adresse: Stordal Lounge, Strandgaten 27, 6250 Stordal."
}
const text4 = {
  middle: "Teknisk",
  bottom:"Studioet består av en opptaksenhet, samt støtteteknologi for presentasjoner. Der er “greenscreen”-vegg og ellers det som skal til for en optimal produksjon. I tillegg kan vi bistå med råd for presentasjonsteknikk og kommunikasjon foran kamera. Våre teknikere gjør tiden din i studio til en drøm. Du fokuserer på det du skal si og gjøre, vi tar oss av resten."
}

const text6 = {
  middle :"Kom i gang",
  button1: "Book Studio",
  link1:"https://calendly.com/admitas/"
  
}

const studio = () => {
  return (
    <>
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <ThreeMiddleTextTwoButtonSmall props={text6} />
      <WeAdmit />
    </>
  )
}

export default studio