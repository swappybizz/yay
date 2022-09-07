import React from "react";

const ThreeMiddleTextTwoButton = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div data-cursor-exclusion style={{ backgroundColor: "#fff" }}>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 flex flex-col justify-center items-center w-full">
              {props.props.top && (
                <p className="mb-8 leading-relaxed ">{props.props.top}</p>
              )}

              {props.props.middle && (
                <h1 className="title-font font-admitTitle sm:text-8xl text-4xl mb-4 font-medium text-gray-900">
                  {props.props.middle}
                </h1>
              )}

              {props.props.bottom && (
                <p className="mb-8 w-3/4 leading-relaxed">{props.props.bottom}</p>
              )}

              <div className="flex justify-center">
                {props.props.button1 && (
                  <div data-cursor-size="10px">
                    <button className="inline-flex text-white  bg-admit-blue border-0 py-2 px-12 focus:outline-none hover:bg-admit-blue-pressed rounded-full text-lg">
                      {props.props.button1}
                    </button>
                  </div>
                )}

                {props.props.button2 && (
                  <div data-cursor-size="10px">
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-12 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                      {props.props.button2}
                    </button>
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
