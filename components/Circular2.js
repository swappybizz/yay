import React from "react";
import Link from "next/link";

const Circular2 = () => {
  const bubbletext =
    "Om du er klar for endring, men usikker på hvor du bør starte for å nå dine mål; Bestill tid her for en utforpliktende kartleggings-prat,";

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <Link href="/strategy">
                <div
                  data-cursor-text="👀 Hvordan"
                  data-cursor-size="150px"
                  data-cursor-color="#004a98"
                  className="md:p-2 p-1 w-1/2 cursor-pointer"
                >
                  <img
                    alt="Strategy"
                    className="w-full rounded-xl object-cover h-full object-center block"
                    src="https://i.ibb.co/xMhY8gv/Frame-9.png"
                    
                  />
                </div>
              </Link>
              <Link href="/systems">
                <div
                  data-cursor-text="Se Hvordan 🤌"
                  data-cursor-size="200px"
                  data-cursor-color="#002856"
                  className="md:p-2 p-1 w-1/2 cursor-pointer"
                >
                  <img
                    alt="gallery"
                    className="w-full rounded-xl object-contain h-full object-center block"
                    src="https://i.ibb.co/1XHLTBK/Frame-10-1.png"
                    
                  />
                </div>
              </Link>
              <Link href="/digital">
                <div
                  data-cursor-text={bubbletext}
                  data-cursor-size="300px"
                  data-cursor-color="#002a3a"
                  className="md:p-2 p-1 w-full cursor-pointer"
                >
                  <img
                    alt="Admit Digital"
                    className="w-full rounded-xl h-full object-cover object-center block"
                    src="https://i.ibb.co/c3b0PhS/Frame-12.png"
                  />
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap w-1/2">
              <Link href="/hr">
                <div
                  data-cursor-text="👀 Hvordan"
                  data-cursor-size="150px"
                  data-cursor-color="#d2dce5"
                  className="md:p-2 p-1 w-full cursor-pointer"
                >
                  <img
                    alt="hr"
                    className="w-full rounded-xl h-full object-cover object-center block"
                    src="https://i.ibb.co/NFkm1Cr/Frame-11.png"
                    // <img src="https://i.ibb.co/NFkm1Cr/Frame-11.png" alt="Frame-11" border="0"></img>
                  />
                </div>
              </Link>
              <Link href="/economy">
                <div
                  data-cursor-text="Hvordan🤌"
                  data-cursor-size="80px"
                  data-cursor-color="#73c3d5"
                  className="md:p-2 p-1 w-1/2 cursor-pointer"
                >
                  <img
                    alt="gallery"
                    className="w-full rounded-xl object-cover h-full object-center block"
                    src="https://i.ibb.co/KGGSWbW/Frame-13.png"
                  />
                </div>
              </Link>
              <Link href="/marketing">
                <div
                  data-cursor-text="Take me there 🏃‍♀️"
                  data-cursor-size="200px"
                  data-cursor-color="#ff595a"
                  className="md:p-2 p-1 w-1/2 cursor-pointer"
                >
                  <img
                    alt="gallery"
                    className="w-full rounded-xl object-cover h-full object-center block"
                    src="https://i.ibb.co/jZVb8Lt/Frame-14.png"
                    // src="https://www.cybermis.com/wp-content/uploads/2021/10/006b2787627b0b67bb91d9716d6e5058.gif"
                  />
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="flex w-full mt-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Vår kompetanse
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Om du er klar for endring, men usikker på hvor du bør
                      starte for å nå dine mål; Bestill tid her for en
                      utforpliktende kartleggings-prat,
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Circular2;
