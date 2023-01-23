import React from "react";
import Aicamp from "../components/Aicamp";
import Robo from "../components/Robo";
import Asci from "../components/Asci";

const aicamp = () => {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 ">
          <Aicamp />
        </div>
        <div class="container px-5 py-16 mx-auto flex font-admitTitle">
          <div class="lg:w-2/5 md:w-1/2 bg-transparent rounded-lg p-0 md:p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-18 relative z-10 shadow-none md:shadow-none">
            <div class="relative mb-4">
              <label
                for="email"
                class="leading-7 text-lg text-gray-800 font-heroSubText"
              >
                AI er et av de feltene innenfor teknologi som det snakkes mest
                om og har størst vekst i dag. Kunstig intelligens, eller
                informasjonsteknologi, som blir brukt til alt fra selvkjørende
                biler til søkemotorer. Til å skape nye innovative løsninger som
                forandrer måten vi lever og jobber på. Men hva ER egentlig AI og
                hvordan fungerer det? I denne bloggen skal vi ta en nærmere titt
                på grunnlaget for AI og noen av nøkkelfunksjonene og teknologien
                som driver utviklingen av den.
              </label>
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="leading-7 text-sm text-gray-600"
              ></label>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font relative h-screen">
        <div class="absolute inset-0 top-48 ">
          <Robo />
        </div>
        <div class="container px-5 py-16 mx-auto flex font-admitTitle">
          <div class="lg:w-2/5 md:w-1/2 bg-transparent rounded-lg p-0 md:p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-18 relative z-10 shadow-none md:shadow-none">
            <div class="relative mb-4 md:mt-48">
              <label
                for="email"
                class="leading-7 text-lg text-gray-800 font-heroSubText"
              >
                <div>
                  På sitt mest grunnleggende nivå, er AI en simulering av
                  menneskelig intelligens, der maskiner blir programmert til å
                  tenke og lære som mennesker. Det finnes ulike former for AI,
                  bla.a.:
                  <ul>
                    <li>
                      Reaktive maskiner: dette er den enkleste formen for AI og
                      er designet for å reagere på spesifikke situasjoner uten å
                      kunne huske tidligere erfaringer. For eksempel så kan en
                      selvkjørende bil bare reagere på det den ser i vegen i
                      øyeblikket.
                    </li>
                    <li>
                      Begrenset minne: her kan AI’en huske og bruke tidligere
                      erfaringer for å ta nye beslutninger. Som at en
                      selvkjørende bil kan bruke tidligere erfaringer til å ta
                      gode avgjørelser
                    </li>
                    <li>
                      Sinnsforståelse (ToM – Theory of Mind): en hypotetisk
                      variant av AI, som kan forstå menneskelige følelser og
                      tanker, og agere etter de.
                    </li>
                    <li>
                      Selvbevisst: en enda mer hypotetisk variant som vil kunne
                      forstå sin egen bevissthet og eksistens.
                    </li>
                  </ul>
                </div>
              </label>
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="leading-7 text-sm text-gray-600"
              ></label>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font relative h-screen">
        <div class="absolute inset-0 mt-36 ">
          <Asci />
        </div>
        <div class="container px-5 py-16 mx-auto flex font-admitTitle">
          <div class="lg:w-2/5 md:w-1/2 bg-transparent rounded-lg p-0 md:p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-18 relative z-10 shadow-none md:shadow-none">
            <div class="relative mb-4">
              <label
                for="email"
                class="leading-7 text-lg text-gray-800 font-heroSubText"
              >
                Kjernen av AI er maskinlæring. Maskinlæring er en metode for å
                la datamaskiner lære fra en stor mengde data, uten at den blir
                programmert på forhånd. Vi kan dele maskinlæring inn i to ulike
                typer: Overvåket læring: Ved å la maskinen få tilgang til en
                mengde bilder av katter og hunder, vil den lære å gjenkjenne de
                ulike rasene og trekkene av hver enkelt. Ikke overvåket læring:
                maskinlæring der man trener opp en modell til å bruke umerket
                data. Modellen lærer å identifisere mønster og sammenhenger fra
                datamengden selv. Det finnes også andre metoder som forsterket
                læring og dybdelæring.
              </label>
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="leading-7 text-sm text-gray-600"
              ></label>
            </div>
          </div>
          <div class="lg:w-2/5 md:w-1/2 bg-transparent rounded-lg p-0 md:p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-18 relative z-10 shadow-none md:shadow-none">
            <div class="relative mb-4">
              <label
                for="email"
                class="leading-7 text-lg text-gray-800 font-heroSubText"
              >
                AI blir brukt til et vidt spekter av applikasjoner, fra helse
                til finans, fra transport til industri. Noen av de mest brukte
                områdene er: Bildegjenkjennelse: analysere og klassifisere
                bilder, som å gjenkjenne ansikter i foto. Talegjenkjenning:
                gjenkjenning av tale og reagere på det, slik som Siri og Alexa.
                Robotisering: AI brukes til å kontrollere robåter og
                automatiserte oppgaver. Avsløre svindel: AI brukes til å
                identifisere og forhindre svindelaktivitet innen bla.a. finans.
              </label>
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="leading-7 text-sm text-gray-600"
              ></label>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-8 h-8 text-admit-blue mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg font-heroSubText">
              Kunstig intelligens er en raskt voksende teknologi som har en stor
              effekt på mange ulike industrier og fagområder. Utviklingen av AI
              er kompleks, og det blir mer og mer viktig å ha en grunnleggende
              kunnskap og forståelse rundt denne teknologien om en skal kunne
              følge med og for å bedre kunne forstå innvirkningen den vil ha på
              vår hverdag og verden rundt oss, både nå og i fremtiden. Og ikke
              minst, for å aktivt implementere og dra nytte av teknologien i
              sitt eget virke.
            </p>
            <span class="inline-block h-1 w-10 rounded bg-admit-red mt-8 mb-6"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
              
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aicamp;
