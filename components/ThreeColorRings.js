import React from "react"

const ThreeColorRings = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="container h-full relative">
                
                  <h2 className="tracking-widest text-4xl  p-4  border-2 absolute flex flex-col items-center justify-center font-admitTitle rounded-full inset-0 w-full h-full object-cover object-center py-8 title-font text-center font-medium text-black mb-1">
                    {props.props.leftTop}
                  </h2>{" "}
                <div className="px-8 h-full rounded-full py-10   relative z-10 w-full border-4 border-admit-blue bg-white opacity-0 hover:opacity-100 transition-opacity duration-700">
                  <h2 className="tracking-widest text-3xl py-10  title-font text-center font-medium text-black mb-1 font-heroSubText">
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
                
                  <h2 className="tracking-widest absolute  p-4  rounded-full font-admitTitle flex flex-col items-center justify-center border-2 inset-0 w-full h-full object-cover object-center text-4xl  boder-2 py-8 title-font text-center font-medium text-black mb-1">
                    {props.props.middleTop}
                  </h2>{" "}
                
                <div className="px-8 h-full rounded-full py-10 relative z-10 w-full border-4 border-admit-red bg-white opacity-0 hover:opacity-100 transition-opacity duration-700">
                  <h2 className="tracking-widest text-3xl py-10 title-font text-center font-medium text-black mb-1 font-admitText">
                    {props.props.middleTop}
                  </h2>{" "}
                  <p className="leading-relaxed text-center">
                    {props.props.middleBottom}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="container h-full  relative">
                {/* <img
                  alt="gallery"
                  className="absolute rounded-full inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/603x363"
                /> */}
                  <h2 className="tracking-widest absolute rounded-full inset-0 w-full  p-4 h-full font-admitTitle flex flex-col items-center justify-center border-2 object-cover object-center text-4xl boder-2 py-8 title-font text-center font-medium text-black mb-1">
                    {props.props.rightTop}
                  </h2>{" "}
                <div className="px-8 h-full rounded-full py-10 relative z-10 w-full border-4 border-[#73c3d5] bg-white opacity-0 hover:opacity-100 transition-opacity duration-700">
                  <h2 className="tracking-widest text-3xl py-10 title-font text-center font-medium text-black mb-1 font-admitText">
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