import React from "react";
import BgCircles from "../components/BgCircles";
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton";
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall";
import WeAdmit from "../components/WeAdmit";
const text1 = {
  top: "SYSTEM SOM BASE FOR SUKSESS",
  middle: "Systemtenkning",
  bottom:
    "“Når mørke skyer dekker himmelen blir det snart regn og storm” -Peter Senge",
};
const text2 = {
  middle: "Grunnleggende systemtenkning",
  bottom:
    "Admit jobber med å utvikle lærende organisasjoner gjennom prosessledelse. Prosessledelse bidrar til at enkeltpersoner ser seg selv som en del av en helhet og forstår at deres måte å være på/handle på, bidrar til at andre og organisasjonen når ønsket resultat på en bedre måte. (Peter Senge) Arkivsystem og valg av samhandlingsplattform er med andre ord et strategisk valg og helt grunnleggende for systemtenkning.",
};
const text3 = {
  middle: "ISO",
  bottom:
    " ISO er en samling av flere standarder, som går på kvalitetsledelse, miljø mm. Standardene i ISO-familien er generelle og  kan brukes av alle virksomheter, uavhengig av: om det er en stor eller liten organisasjon, hva slags produkt som leveres (varer eller tjenester), bransje eller sektor og om de ønsker å sertifisere seg eller ikke.Vårt mål er at alle virksomheter skal tenke systematisk for å oppnå bærekraftig vekst. Ved å innføre et kvalitetsledelsessystem får virksomheten fokus og oversikt over: kundens krav og forventninger, fokus på ledelsens forpliktelser, styring med interne prosesser, hensiktsmessig intern kommunikasjon, fastlagte oppgaver, ansvar og kompetansebehov for medarbeiderne.  ",
};
const text4 = {
  middle: "Microsoft 365",
  bottom:
    "Admit har gjort et strategisk valg om å bruke Microsoft sin skybaserte løsning som vår prefererte samhandlingsplattform.",
  button1: "BOOK MØTE",
  link1: "https://calendly.com/admitas/",
};

const systems = () => {
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
      <WeAdmit />
      <div className="fixed flex top-12 left-[2rem] scale-[20]  md:scale-50 rotate-90 ">
        <BgCircles />
      </div>
    </>
  );
};
export default systems;
