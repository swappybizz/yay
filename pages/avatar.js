import React from 'react'
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import ThreeColorRings from "../components/ThreeColorRings"
import WeAdmit from "../components/WeAdmit"

const text1 ={
    top : "HVORDAN OG HVORFOR VELGE",
    middle : "Admit Avatar",
    bottom : "Vår samhandlingsplattform fungerer både som en digital medarbeider for deg og som distribusjonskanal for levering av våre tjenester.Slik fungerer det",
}

const text2 ={
    middle : "Kartlegging",
    bottom : "Vi gjør sammen en vurdering av hvilke behov din bedrift har. Enten det er en spesifikk tjeneste, tverrfaglig team, administrativ støttefunksjon, eller et prosjektbasert kompetansebehov."
}
const text3 ={
    middle : "Avtale",
    bottom : "Admit Avatar leveres i form av vår digitale samarbeidsplattform. Innholdet blir skreddersydd og levert på bakgrunn av avtalt behov. Du bestemmer selv tidsramme, stillingsprosent og kompetansefelt. Ingen overraskende fakturaer og ingen ansettelser."
}
const text4 ={
    middle : "Levering",
    bottom : "Admit Avatar vil bidra til sunn utvikling og vekst for din bedrift. Leveransen skjer via vår skybaserte løsning samt fysiske møter. Kognitiv tekonologi bidrar til erfaringslæring og automatisering som igjen vil gi deg som kunde en stadig forbedret løsning."
}
const text5 ={
    middle : "Hva er Admit Avatar?",
}
const text6 ={
    button1 : "SE VIDEO",
    button2 : "FAGFELT",
}
const ringText ={
    leftTop : "Samhandlings-plattform",
    leftBottom : "Plattform for både levering og “uttak” av kompetanse. En distribusjonskanal for levering av tjenester og din digitale medarbeider.",
    middleTop: "Teknisk",
    middleBottom: "Abonnement på teknisk løsning inkludert support og sikkerhetMicrosoft 365 (skybasert) som base Arkivstruktur basert på ISO-system Automatiserte prosesser",
    rightTop: "Verdi",
    rightBottom: "Kompetanse “on demand”Forbedred tidsbruk Sparringpartner Empowerment Nettverk"

}


const Avatar = () => {
  return (
    <>
        <ThreeMiddleTextTwoButton
        props= {text1}/>
        <ThreeMiddleTextTwoButtonSmall
        props= {text2}/>
        <ThreeMiddleTextTwoButtonSmall
        props= {text3}/>
        <ThreeMiddleTextTwoButtonSmall
        props= {text4}/>
        <ThreeMiddleTextTwoButton
        props= {text5}/>
        <ThreeColorRings
        props={ringText}/>
        <ThreeMiddleTextTwoButton
        props= {text6}/>
        <WeAdmit/>
    </>
  )
}

export default Avatar