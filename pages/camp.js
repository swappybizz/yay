import React, { useRef, useEffect } from "react";
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall";
import YoutubeComponent from "../components/YoutubeComponent";
import CampaignDashboard from "../components/CampaignDashboard";
const text1 = {
  middle: "Er din bedrift i faresonen?",
  bottom:
    " Legg inn dine tall i kalkulatoren vår og finn ut hvordan det ser ut for din bedrift:",
};
const text2 = {
  middle: "Activity Based Costing",
  bottom:
    " Activity Based Costing benyttes til å kartlegge lønnsomme og ulønnsomme aktivitetsområder på tvers av avdelinger. Et viktig verktøy i en tid med konstant endring. Gjennom datadrevet innsikt sikrer du økonomisk lønnsomhet og bærekraft for bedriften.",
};
const text3 = {
  middle: " Hvorfor?",
  bottom:
    " Endringstakten i dagens samfunn er høy og det kan være utfordrende å vite hvor en skal starte for å henge med. Forskning viser at opp mot 40% av aktivitetene i alle bedrifter er ulønnsom og det er ikke alltid lett å vite hvor man tjener og taper penger. Ofte ser vi også interne avhengigheter som krever en konkret innsikt i ulike aktivitetene, for å kunne avgjøre om dette er lønnsomt eller ulønnsomt.",
};
const text4 = {
  middle: " Hvordan? ",
  bottom:
    " Prinsippet går ut på å identifisere ressurser som aktiviteten krever, kalkulere faste og variable kostnader og vurderer dette opp mot inntektene. På den måten får man fram det såkalte dekningsbidraget (salg – variable kostnader). Vurdert opp mot faste kostnader kan man beregne hva som skal til av omsetning for at aktiviteten skal gå med over- eller underskudd. Det kan godt være at aktiviteten isolert går med underskudd, men at intern avhengighet gjør at man likevel tar med den ulønnsomme aktiviteten. For å avgjøre hva som er faste og variable kostnader, benytter vi egne regnemodeller. ",
};
const text5 = {
  middle: "Få oversikt",
  bottom: "Book en innledende samtale med en av våre rådgivere",
  button1: "BOOK SAMTALE",
  link1:
    "https://outlook.office365.com/owa/calendar/Vidrivermedforretningsutvikling@admit.no/bookings/",
};

const text6 = {

  bottom : "Vi har tatt en titt på ca 1000 SMB bedrifter i M&R som til sammen hadde 30 milliarder i omsetning og ca 1,8 milliard i overskudd. Frem mot 2023 vil vi alle oppleve en kostnadsøkning på rundt 15% og om vi skal se inn i krystallkula, må man enten øke prisene eller minske kostnadene for å kunne opprettholde sin konkurranseevne. Om vi ikke følger med eller velger å sitte stille i båten kan overskuddet snu til rundt 3 milliarder i minus."
}

const camp = () => {
  const ref = useRef(null);
  const vidEnd = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      vidEnd();
    }, 15500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-admit-red via-slate-400">
      <YoutubeComponent embedId="sqB5dZ35gqY" />
      <div id="section-1">
        <ThreeMiddleTextTwoButtonSmall ref={ref} props={text1} />
        <CampaignDashboard />
      </div>
      <ThreeMiddleTextTwoButtonSmall props={text6} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <ThreeMiddleTextTwoButtonSmall props={text5} />
    </div>
  );
};

export default camp;
