import React from "react";
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton";
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall";
import WeAdmit from "../components/WeAdmit";
const text1 = {
  top: "SYSTEM SOM BASE FOR SUKSESS",
  middle: "Systemtenkning",
  // bottom: "Admit jobber med å utvikle lærende ",
};
const text2 = {
  middle: "Grunnleggende systemtenkning",
  bottom:
    "Admit jobber med å utvikle lærende organisasjoner gjennom prosessledelse. Prosessledelse bidrar til at enkeltpersoner ser seg selv som en del av en helhet og forstår at deres måte å være på/handle på, bidrar til at andre og organisasjonen når ønsket resultat på en bedre måte (Peter Senge). Arkivsystem og valg av samhandlingsplattform er med andre ord et strategisk valg og helt grunnleggende for systemtenkning.",
};
const text3 = {
  middle: "ISO",
  bottom:
    " ISO er en samling av flere standarder, som går på kvalitetsledelse, miljø mm. Standardene i ISO-familien er generelle og  kan brukes av alle virksomheter, uavhengig av: om det er en stor eller liten organisasjon, hva slags produkt som leveres (varer eller tjenester), bransje eller sektor og om de ønsker å sertifisere seg eller ikke.Vårt mål er at alle virksomheter skal tenke systematisk for å oppnå bærekraftig vekst. Ved å innføre et kvalitetsledelsessystem får virksomheten fokus og oversikt over: kundens krav og forventninger, fokus på ledelsens forpliktelser, styring med interne prosesser, hensiktsmessig intern kommunikasjon, fastlagte oppgaver, ansvar og kompetansebehov for medarbeiderne.  ",
};
const text4 = {
  middle: "Microsoft 365",
  bottom:
    "Admit har gjort et strategisk valg om å bruke Microsoft sin skybaserte løsning som vår prefererte samhandlingsplattform. tekst om system og strategivalg",
  button1: "BOOK MØTE",
  link1: "https://calendly.com/admitas/"
};

const systems = () => {
  return (
    <>
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <WeAdmit />
    </>
  );
};
export default systems;
