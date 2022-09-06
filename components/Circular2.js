import React from "react";
import Link from "next/link"

const Circular2 = () => {

  const bubbletext = "Om du er klar for endring, men usikker på hvor du bør starte for å nå dine mål; Bestill tid her for en utforpliktende kartleggings-prat,"

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <Link href="/strategy">
              <div
               data-cursor-text="👀 Hvordan" 
               data-cursor-size="250px"
               data-cursor-color="#c8c8c8"
              className="md:p-2 p-1 w-1/2 cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full rounded-xl object-cover h-full object-center block"
                  src="https://i.ibb.co/93Xjt4d/Frame-1.png"
                />
              </div>
              </Link>
              <Link href="/systems">
              <div data-cursor-text="👀 Hvordan" 
               data-cursor-size="200px"
               data-cursor-color="#b3b3b3" className="md:p-2 p-1 w-1/2 cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full rounded-xl object-cover h-full object-center block"
                  src="https://i.ibb.co/D4RvmZb/Frame-3.png"
                />
              </div>
              </Link>
              <Link href="/digital">
              <div data-cursor-text={bubbletext}
               data-cursor-size="300px"
               data-cursor-color="#BBB891" className="md:p-2 p-1 w-full cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full rounded-xl h-full object-cover object-center block"
                  src="https://i.ibb.co/CVZ3DZn/5-1.png"
                />

              </div>
              </Link>
            </div>
            <div className="flex flex-wrap w-1/2">
            <Link href="/hr">
              <div data-cursor-text="👀 Hvordan" 
               data-cursor-size="250px"
               data-cursor-color="#DC965A" className="md:p-2 p-1 w-full cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full rounded-xl h-full object-cover object-center block"
                  
                  src="https://i.ibb.co/5WpZZgv/Frame-4.png"
                />
              </div>
              </Link>
              <Link href="/economy">
              <div
              data-cursor-text="👀 Hvordan" 
              data-cursor-size="200px"
              data-cursor-color="#f87171"
              className="md:p-2 p-1 w-1/2 cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full rounded-xl object-cover h-full object-center block"
                  src="https://i.ibb.co/yQtKhVf/Frame-2.png"
                />
              </div>
              </Link>
              <Link href="/marketing">
              <div 
              data-cursor-text="👀 Hvordan" 
              data-cursor-size="300px"
              data-cursor-color="#242325"
              className="md:p-2 p-1 w-1/2 cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full rounded-xl object-cover h-full object-center block"
                  src="https://i.ibb.co/gMQ3hWy/5-2.png"
                />
              </div>
              </Link>
            </div>
          </div>
          <div className="flex w-full mt-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Vår kompetanse
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Om du er klar for endring, men usikker på hvor du bør
                      starte for å nå dine mål; Bestill tid her for en
                      utforpliktende kartleggings-prat,
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Circular2;