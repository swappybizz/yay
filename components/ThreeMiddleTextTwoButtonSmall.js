import React from "react"

const ThreeMiddleTextTwoButtonSmall = props => {
  return (
    <div
    data-cursor-exclusion 
    >
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full flex flex-col items-center">
            {props.props.top && (
              <p className="mb-8 leading-relaxed font-admitTitle ">{props.props.top.toUpperCase()}</p>
            )}

            {props.props.middle && (
              <h1 className="title-font font-admitTitle sm:text-6xl text-4xl mb-4 font-semibold  text-gray-900">
                {props.props.middle}
              </h1>
            )}

            {props.props.bottom && (
              <p className="mb-8 leading-relaxed w-3/4 ">{props.props.bottom}</p>
            )}

            <div className="flex justify-center">
              {props.props.button1 && (
                <a href={props.props.link1}>
                <div data-cursor-size="10px" >
                <button className="inline-flex text-white bg-admit-blue border-0 py-2 my-10 px-12 focus:outline-none hover:bg-admit-blue-pressed rounded-full text-lg">
                  {props.props.button1}
                </button>
                </div>
                </a>
              )}

              {props.props.button2 && (
                <a href={props.props.link2}>
                <div data-cursor-size="10px" >
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 my-10 py-2 px-12 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                  {props.props.button2}
                </button>
                </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThreeMiddleTextTwoButtonSmall