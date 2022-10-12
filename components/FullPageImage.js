import React from "react";


const FullPageImage = () => {
  return (
    <div
    // data-cursor-exclusion 
    >
      <section
        className="text-white h-screen body-font flex bg-studio bg-cover"
        
      >
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed text-xl px-16 font-heroSubText">
              PROFESJONELT SMARTSTUDIO TIL LEIE
            </p>
            <h1 className="title-font sm:text-8xl text-4xl font-admitTitle mb-4 font-semibold  text-white">
              Admit Studio
            </h1>
            <p className="mb-8 px-8 md:px-24 leading-relaxed font-heroSubText text-xl drop-shadow-sm">
              I dag kreves det høy kvalitet på bilde og lyd. I Admit Studio kan
              du produsere profesjonelt medieinnhold til eget bruk, inkludert
              hjelp av teknikere som gjør tiden din i studio til en drøm. Vi
              bistår også med råd for presentasjonsteknikk og kommunikasjon
              foran kamera.
            </p>
            <div className="flex justify-center">
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="/studio">
              <button className="ml-4 font-heroSubText inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                LES MER
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullPageImage;
