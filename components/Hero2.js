import React from "react";
import Link from "next/link"
const subtext =
  "#WeAdmit pil vi innrømmer, vi forplikter oss til; å dele kompetanse gjennom vårt støtte- og utviklingsmiljø og skape bærekraftig vekst gjennom innovasjon og bruk av fremtidsrettet verktøy.";
const Hero2 = () => {
  return (
    <div>
      <div className="admitHero">
        <h1 className="admitHeroText">#WeAdmit</h1>
        <p className="admitHeroSubtext">{subtext}
        <div 
        data-cursor-text="👀 Hvordan" 
        data-cursor-size="100px"
        >

        <Link href= "#circularSection">
          
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mt-[5rem] delay-1000 animate-bounce cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
        </Link>
        </div>
        </p>
        
      </div>
    </div>
  );
};

export default Hero2;


