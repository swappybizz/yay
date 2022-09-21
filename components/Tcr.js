import React from "react";

const Tcr = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex justify-evenly items-center px-5 py-2 mx-auto">
          <div className="flex justify-center w-3/4 items-center translate-x-9 md:translate-x-0 flex-col lg:flex-row ">
            <div className="lg:w-1/3 sm:w-1/2 flex justify-center items-center mr-auto translate-x-[0%]  mb-12 md:translate-x-0">
              <div className="flex relative ">
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-48 h-48 p-5 md:w-[25rem] md:h-[25rem] items-center  pt-16 rounded-full border-4 transition-all duration-500 border-admit-blue bg-white ">
                  {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                  <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3">
                    {props.props.leftTop}
                  </h1>
                  <p className=" hidden md:flex font-heroSubText px-6 text-xl leading-relaxed">
                    {props.props.leftBottom}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 flex justify-center items-center mr-auto translate-x-[-0%] mb-12 md:translate-x-0">
              <div className="flex relative">
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-48 h-48 p-5 md:w-[25rem] md:h-[25rem] items-center  pt-16 rounded-full border-4 transition-all duration-500 border-admit-red bg-white  ">
                <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3">
                    {props.props.middleTop}
                  </h1>
                  <p className="leading-relaxed font-heroSubText px-6 text-xl hidden md:flex">
                    {props.props.middleBottom}
                  </p>
                </div>
              </div>
            </div>

            <div
              href="/systems"
              className="lg:w-1/3 sm:w-1/2 flex justify-center items-center mr-auto translate-x-[0%] mb-12 md:translate-x-0"
            >
              <div className="flex relative">
                <div className="px-2 py-2 relative z-10 text-center flex flex-col w-48 h-48 p-5 md:w-[25rem] md:h-[25rem] items-center pt-16 rounded-full border-4 transition-all duration-500 border-[#73c3d5] bg-white  ">
                  <h1 className="title-font font-admitTitle text-3xl font-semibold text-gray-900 mb-3">
                    {props.props.rightTop}
                  </h1>
                  <p className="leading-relaxed font-heroSubText px-6 text-xl hidden md:flex">
                    {props.props.rightBottom}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tcr;
