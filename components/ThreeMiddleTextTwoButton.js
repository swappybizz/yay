import React from 'react'

const ThreeMiddleTextTwoButton = (props) => {
  return (
    <>
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            {props.props.top && (
              <p className="mb-8 leading-relaxed">{props.props.top}</p>
            )}

            {props.props.middle && (
              <h1 className="title-font sm:text-8xl text-4xl mb-4 font-medium text-gray-900">
                {props.props.middle}
              </h1>
            )}

            {props.props.bottom && (
              <p className="mb-8 leading-relaxed">{props.props.bottom}</p>
            )}

            <div className="flex justify-center">
              {props.props.button1 && (
                <button className="inline-flex text-white bg-admit-blue border-0 py-2 px-12 focus:outline-none hover:bg-admit-blue-pressed rounded-full text-lg">
                  {props.props.button1}
                </button>
              )}

              {props.props.button2 && (
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-12 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                  {props.props.button2}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ThreeMiddleTextTwoButton