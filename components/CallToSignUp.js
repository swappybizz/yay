import React from "react";

const CallToSignUp = () => {
  return (
    <section className="text-gray-600 body-font relative ">
      <div className="container ml-28 pl-2  py-2 mx-auto  ">
        <div className="flex flex-col w-full mb-2 ">
          <h1 className="sm:text-3xl text-6xl font-admitTitle font-semibold mb-4 text-admit-blue">
            Register Her
          </h1>
          <p className="lg:w-4/5  leading-relaxed text-base font-heroSubText">
            For å motta en kopi av simuleringen til din e-post, fyll ut her.
          </p>
        </div>
        <div className="lg:w-5/6 md:w-2/3 ">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-2/5">
              <div className="relative">
                <label for="name" className=" font-heroSubText leading-7 text-sm text-gray-600">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  disabled
                  placeholder="Komer Snart 🚧"
                  className="w-full shadow-md font-heroSubText bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-admit-blue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="font-heroSubText leading-7 text-sm text-gray-600">
                  E-Post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  disabled
                  placeholder="Komer Snart 🚧"
                  className="w-full shadow-md font-heroSubText bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-admit-blue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full"></div>
            <div className="p-2 w-full">
              <button disabled className="flex font-heroSubText text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
              Arbeid pågår 👷🏽
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSignUp;
