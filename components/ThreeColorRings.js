import React from "react"

const ThreeColorRings = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="container h-full relative">
                <img
                  alt="gallery"
                  className="absolute rounded-full inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 h-full rounded-full py-10 relative z-10 w-full border-4 border-admit-blue bg-white opacity-0 hover:opacity-100 transition-opacity duration-700">
                  <h2 className="tracking-widest text-3xl py-8 title-font text-center font-medium text-black mb-1">
                    {props.props.leftTop}
                  </h2>{" "}
                  <p className="leading-relaxed text-center">
                    {props.props.leftBottom}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="container h-full relative">
                <img
                  alt="gallery"
                  className="absolute rounded-full inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 h-full rounded-full py-10 relative z-10 w-full border-4 border-orange-500 bg-white opacity-0 hover:opacity-100 transition-opacity duration-700">
                  <h2 className="tracking-widest text-3xl py-8 title-font text-center font-medium text-black mb-1">
                    {props.props.middleTop}
                  </h2>{" "}
                  <p className="leading-relaxed text-center">
                    {props.props.middleBottom}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="container h-full relative">
                <img
                  alt="gallery"
                  className="absolute rounded-full inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/603x363"
                />
                <div className="px-8 h-full rounded-full py-10 relative z-10 w-full border-4 border-teal-500 bg-white opacity-0 hover:opacity-100 transition-opacity duration-700">
                  <h2 className="tracking-widest text-3xl py-8 title-font text-center font-medium text-black mb-1">
                    {props.props.rightTop}
                  </h2>{" "}
                  <p className="leading-relaxed text-center">
                    {props.props.rightBottom}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ThreeColorRings