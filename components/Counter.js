import React from "react";

const Counter = () => {
  return (
    <>
      <div
      data-cursor-exclusion 
      >
        <section className="text-gray-600 body-font bg-gradient-to-b from-white to-admit-red via-slate-400">
          <div className="container px-5 md:py-48 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-8xl text-3xl text-gray-900">
                  22
                </h2>
                <p className="leading-relaxed font-medium">
                  konsulenter innen <br></br> ulike fagområder <br></br> som er
                  klar til å hkelpe deg.
                </p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-8xl text-3xl text-gray-900">
                  6
                </h2>
                <p className="leading-relaxed font-medium">
                  ulike fagfelt du <br></br>kan få hjelp innen
                </p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-8xl text-3xl text-gray-900">
                  12
                </h2>
                <p className="leading-relaxed font-medium">
                  timer er maks ventetid <br></br> for rådgivning
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Counter;
