import React from "react";
import Link from "next/link";
const subtext =
  " Vi forplikter oss til: Ved hjelp av vårt støtte- og utviklingsmiljø bidrar vi til vekst og bærekraftig utvikling for SMB-markedet. Gjennom innovasjon og bruk av fremtidsrettet verktøy medvirker vi til at våre kunder får bedre kontroll og mindre bekymringer.";
const sub =
  "Vi forplikter oss til:Ved hjelp av vårt støtte- og utviklingsmiljø bidrar vi til vekst og bærekraftig utvikling for SMB-markedet. Gjennom innovasjon og bruk av fremtidsrettet verktøy medvirker vi til at våre kunder får bedre kontroll og mindre bekymringer.";
const Hero2 = () => {

  
  return (
    <div>
      <div className="admitHero">
        <h1 className="admitHeroText">#weadmit</h1>
        <div className="admitHeroSubtext">
          Vi forplikter oss til: <br></br>Ved hjelp av vårt støtte- og
          utviklingsmiljø bidrar vi til vekst og bærekraftig utvikling <br></br>
          for SMB-markedet. Gjennom innovasjon og bruk av fremtidsrettet verktøy
          medvirker vi <br></br>til at våre kunder får bedre kontroll og mindre
          bekymringer. <br></br>
          <div className="rotate-180 mt-12">
            <a 
            href="#circularSection"
            
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mt-[5rem] delay-1000 animate-bounce cursor-pointer "
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="wavey">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
               
                backgroundImage: "url(" + "https://i.ibb.co/g3XH3HW/wave-top-1.png" + ")",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage: "url(" + "https://i.ibb.co/YDRxKpL/wave-mid.png" + ")",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage: "url(" + "https://i.ibb.co/jvkBxSk/wave-bot-2.png" + ")",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
