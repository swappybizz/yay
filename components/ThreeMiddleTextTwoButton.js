import React from "react";
import Link from "next/link"

const ThreeMiddleTextTwoButton = (props) => {
 
  return (
    <>
      <section className="text-gray-600 body-font mt-5">
        <div 
        // data-cursor-exclusion style={{ backgroundColor: "#fff" }}
        >
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 flex flex-col  justify-center items-center w-full">
              {props.props.top && (
                <p className="mb-8 leading-relaxed text-xl font-heroSubText ">{props.props.top.toUpperCase()}</p>
              )}

              {props.props.middle && (
                <h2 className="title-font sm:text-8xl text-4xl mb-9 font-semibold font-admitTitle text-gray-900">
                  {props.props.middle}
                </h2>
              )}

              {props.props.bottom && (
                <p className="mb-8 w-3/4 leading-relaxed text-xl font-heroSubText ">
                  {props.props.bottom}
                </p>
              )}

              <div className="flex justify-center">
                {props.props.button1 && (
                  <div data-cursor-size="10px">
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    href={props.props.link1}>
                      <button className="inline-flex text-white uppercase font-heroSubText bg-admit-blue border-0 py-2 px-12 focus:outline-none hover:bg-admit-blue-pressed rounded-full text-lg">
                        {props.props.button1.toUpperCase()}
                      </button>
                    </a>
                  </div>
                )}

                {props.props.button2 && (
                  <div data-cursor-size="10px">
                    <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.props.link1}>
                    <button className="ml-4 inline-flex uppercase text-gray-700 bg-gray-100 border-0 font-heroSubText py-2 px-12 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                      {props.props.button2}
                    </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeMiddleTextTwoButton;
