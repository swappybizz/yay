import React, { Suspense, useRef, lazy, useState, useEffect } from "react";
import Floatings from "../components/Floatings";
const Content = lazy(() => import("../components/Content"));

const marketingcamp = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 ">
          <Floatings />
        </div>
        <div class="container px-5 py-16 mx-auto flex font-admitTitle">
          <div class="lg:w-2/5 md:w-1/2 bg-transparent rounded-lg p-0 md:p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-none md:shadow-none">
            <div className="font-heroSubText font-semibold mb-5">
              Er du klar for å ta din markedsføring et skritt videre?
            </div>

            <b class=" text-6xl font-admitTitle mb-6 text-gray-600">
              Når du frem med
              <p className="group transition duration-300 text-gray-800 overflow-hiddens">
                ditt budskap til
                <span class="block max-w-0 group-hover:max-w-[80%] transition-all duration-500 h-0.5 bg-admit-red"></span>
              </p>
              <p className="group transition text-gray-800 duration-300">
                rett publikum?
                <span class="block max-w-0 group-hover:max-w-[80%] transition-all duration-500 h-0.5 bg-admit-dark-blue"></span>
              </p>
            </b>

            <div class="relative mb-4">
              <label
                for="email"
                class="leading-7 text-lg text-gray-800 font-heroSubText"
              >
                I dagens jungel av ulike og lett tilgjengelige kanaler og
                muligheter for markedsføring, kan det være vanskelig å velge ut
                de mest relevante for sin bedrift og sine produkter.
                Markedsføringsfaget og markedskompetanse har forandret seg mye
                de siste årene og er, i økende grad, mer spisset inn i ulike små
                fagfelt som søkemotoroptimalisering, tekstredigering, webdesign,
                sosiale medier, videoredigering, digital annonsering mm..
                Kompetansefelt som er nødvendig for å kunne fortsette å være
                konkurransedyktig og ha bærekraftig utvikling.
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
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-2 md:py-16 mx-auto flex">
          <div class="lg:w-1/2 md:w-1/2 bg-white bg-opacity-60 rounded-lg p-0 md:p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0 relative z-10 shadow-none md:shadow-none">
            <div className="font-heroSubText font-semibold mb-5"></div>

            <b class=" text-6xl font-admitTitle mb-6 text-gray-600 ">
              <p className="group transition duration-300 text-gray-800 overflow-hiddens">
                Personlig tilpasset
                <span class="block max-w-0 group-hover:max-w-[80%] transition-all duration-500 h-0.5 bg-admit-red"></span>
              </p>
              <p className="group transition text-gray-800 duration-300 text-2xl md:text-6xl">
              medieinnhold
                <span class="block max-w-0 group-hover:max-w-[80%] transition-all duration-500 h-0.5 bg-admit-dark-blue"></span>
              </p>
            </b>

            <div class="relative mb-4">
              <label
                for="email"
                class="leading-7 text-lg text-black shadow-sm font-heroSubText"
              >
                I tillegg har forbrukernes forventinger blitt høyere og kravet
                til personaliserte tjenester og markedsfokus øker. Disse nye
                forventningene setter nye krav som vi kan hjelpe deg med.
                Gjennom de ulike kanalene får vi inn store mengder «big data» om
                forbrukere og kunder – store datamengder som gjennom
                prosessering kan anvendes på en hensiktsmessig måte. All denne
                informasjonen gir kunnskap om kundeadferd og
                kjøpsprosessen/kundereisen. Noe som igjen gir mulighet til å
                lage enda mer relevant innhold og tilpasset automasjon. I dette
                skifte mellom tradisjonell promotering og personalisering finner
                vi at bruken av AI (Artificial Intelligence) eller maskinlæring,
                er et verdifullt, og kanskje fremtidig nødvendig, verktøy for å
                kunne personalisere i stor skala. Informasjonen gir mulighet til
                å kommunisere hensiktismessig innhold og kjøpsutløsende
                insentiver basert på individuell adferd.
              </label>
            </div>
            <div class="relative mb-4 font-heroSubText">
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  Noe for din bedrift?
                </span>
                <a
                  href="/aicamp"
                  class="flex mr-auto ml-10 text-white bg-admit-blue border-0 py-2 px-6  focus:outline-none hover:bg-admit-dark-blue rounded"
                >
                  Se Mer
                </a>
              </div>
              <label
                for="message"
                class="leading-7 text-sm text-gray-600"
              ></label>
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="leading-7 text-sm text-gray-600"
              ></label>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 opacity-0 sm:opacity-100">
          {!isMounted ||
          navigator?.connection?.saveData ||
          !matchMedia("(min-width: 768px)").matches ? null : (
            <Suspense
              fallback={
                <div className="flex justify-center items-center w-1/2 h-full bg-slate-100 rounded">
                  <p className="text-gray-500 font-extralight text-6xl animate-pulse">
                    Loading
                  </p>
                </div>
              }
            >
              <Content />
            </Suspense>
          )}
        </div>
      </section>
      <section class="text-gray-600 body-font relative flex-col md:flex">
        <img
          alt="ecommerce"
          class=" sm:absolute sm:left-24 md:w-1/3 w-full lg:h-auto h-48 object-cover object-center rounded md:mt-48"
          src="./team.gif"
        />
        <div class="container px-5 md:px-0 md:pr-24  md:ml-auto font-admitTitle flex-col md:flex ">
          <div class="lg:w-1/2 md:w-1/2 bg-transparent rounded-lg p-0 md:p-8 flex flex-col md:ml-auto w-full md:mt-24 relative z-10 shadow-none md:shadow-none">
            <div className="font-heroSubText font-semibold mb-5"></div>

            <b class=" text-6xl font-admitTitle mb-6 text-gray-600">
              <p className="group transition duration-300 text-gray-800 overflow-hiddens">
                Markedsteam
                <span class="block max-w-0 group-hover:max-w-[80%] transition-all duration-500 h-0.5 bg-admit-red"></span>
              </p>
              <p className="group transition text-gray-800 duration-300">
                til leie
                <span class="block max-w-0 group-hover:max-w-[80%] transition-all duration-500 h-0.5 bg-admit-dark-blue"></span>
              </p>
            </b>

            <div class="relative mb-4">
              <label
                for="email"
                class="leading-7 text-lg text-gray-800 font-heroSubText"
              >
                Våre markedsteam består av både in house-kompetanse og eksterne
                leverandører som settes sammen til team etter hvilke behov og
                utfordringer kunden har. Team som har fokus på å forstå kundens
                behov og produkter for å kunne markedsføres i relevante kanaler
                på en optimal måte. Samskapingsteam, som våre, har den ekstra
                fordelen at deltagerne ofte har ulike idéer og perspektiver, som
                igjen kan lede til bedre og mer innovative
                markedsføringsstrategier og kampanjer. Første steg i
                samarbeidet, er at vi setter av, minimum, 3 timer til en
                workshop, der både ledelse og produktutviklere er med for å gi
                nødvendig innsikt om bedriften, produktene, kundebehov og hvilke
                marked en skal bevege seg i. En kvalitetssikring av det videre
                samarbeidet, der alle har lik forståelse for oppdraget. Ved å
                leie inn markedsteam, får en tilgang på riktig kompetanse til
                riktig tid, uten å ha en hel markedsavdeling fast ansatt i
                bedriften. Ressursene blir brukt i hold til både bedrifts- og
                markedsstrategien og gir effektiv bruk av din verdifulle tid og
                kapasitet. I tillegg er våre team vant til å jobbe på tvers av
                de store fagområder, som del av Product management teams, noe
                som gir større forståelse for helheten av en bedrift og hva de
                ulike avdelinger kan og bør bidra med.
              </label>
            </div>
            <div class="relative mb-4 font-heroSubText">
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  Noe for din bedrift?
                </span>
                <a
                  href="https://outlook.office365.com/owa/calendar/Vidrivermedforretningsutvikling@admit.no/bookings/"
                  class="flex ml-auto text-white bg-admit-blue border-0 py-2 px-6 mr-6 focus:outline-none hover:bg-admit-dark-blue rounded"
                >
                  Book Møte
                </a>
              </div>
              <label
                for="message"
                class="leading-7 text-sm text-gray-600"
              ></label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default marketingcamp;
