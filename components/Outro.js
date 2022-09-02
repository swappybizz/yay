import React from 'react'

const Outro = () => {
  return (
    <>
    <section className="text-gray-900 h-screen body-font flex bg-gradient-to-b from-white to-admit-red via-slate-400">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            {/* <p className="mb-8 leading-relaxed">COWORKING OG MEDLEMSSKAP </p> */}
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900">
              Interessert i kompetansedeling og personlig utvikling?
            </h1>

            <div className="flex justify-center ">
              <button className="mt-12 inline-flex  text-black bg-white outline-black outline-2 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:outline-none  rounded-full text-lg">
                Bli med i Admit Lounge{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Outro