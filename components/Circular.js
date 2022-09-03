import React from "react";

const Circular = () => {
  return (
    <div>
      <div data-cursor-color="#000">
        <section className="text-gray-600 body-font">
          <div className="flex px-5 py-24 justify-center">
            <div className="flex flex-wrap -m-4">
              <div
                data-cursor-color="#FFF"
                data-cursor-background-image="/strat.png"
                data-cursor-size="15rem"
              >
                <a
                  href="/strategy"
                  className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto"
                >
                  <p className="m-auto p-auto">Strategiarbeid</p>
                </a>
              </div>
              <div

              // data-cursor-background-image={System} data-cursor-size="250px"
              >
                <a
                  href="/systems"
                  className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto"
                >
                  <p className="m-auto p-auto">Systemtenkning</p>
                </a>
              </div>
              <div>
                <a
                  href="/hr"
                  // data-cursor-background-image={hms}
                  // data-cursor-size="250px"
                  className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto"
                >
                  <p className="m-auto p-auto">HR/HMS</p>
                </a>
              </div>
              <div
              //  data-cursor-background-image={digi} data-cursor-size="250px"
              >
                <a
                  href="/digital"
                  className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto"
                >
                  <p className="m-auto p-auto">Digitalisering</p>
                </a>
              </div>
              <div
              // data-cursor-background-image={oko} data-cursor-size="250px"
              >
                <a
                  href="/economy"
                  className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto"
                >
                  <p className="m-auto p-auto">Økonomi</p>
                </a>
              </div>
              <div
              // data-cursor-background-image={mar} data-cursor-size="250px"
              >
                <a
                  href="/marketing"
                  className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto"
                >
                  <p className="m-auto p-auto">Markedsføring</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div
        //   data-cursor-size="10px" data-cursor-color="#61dbfb"
        >
          <div data-cursor-size="10px" data-cursor-color="#000">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex justify-center -mx-4 -mb-10 text-center">
                  <div className="sm:w-1/2 mb-10 px-4">
                    <h2 className="title-font text-xl text-gray-900 mt-6 mb-3">
                      Om du er klar for endring, men usikker på hvor du bør
                      starte for å nå dine mål; Bestill tid her for en
                      utforpliktende kartleggings-prat,
                    </h2>

                    <button className="flex mx-auto mt-6 text-white bg-admit-blue border-0 py-2 px-12 focus:outline-none hover:bg-admit-blue-pressed rounded-full">
                      Kontact Oss
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circular;
