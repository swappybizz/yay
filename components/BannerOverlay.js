import React, { useState } from "react";

const BannerOverlay = () => {
  const [showBanner, setBanner] = useState(true);

  return (
    <>
      {showBanner ? (
        <div className="fixed  top-0 left-0 right-0 bottom-0 h-screen w-screen mx-auto my-auto p-8 md:bg-gradient-to-r from-black to-transparent shadow-lg flex items-center justify-center">
          <div className="fixed overflow-hidden top-0 left-0 right-0 bottom-0 md:h-[70vh] h-[80vh] md:w-[65vw]  w-[90vw] mx-auto my-auto p-8 bg-black  rounded-lg shadow-lg flex items-center justify-center">
            <button
              onClick={() => setBanner(false)}
              className="bg-transparent text-admit-red p-2 rounded-full absolute top-0 left-0 mt-1 scale-75 ml-1  hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
            <h1 className="text-white md:text-6xl text-2xl font-semibold font-heroSubText absolute top-0 left-0 md:w-3/4 w-full ml-8 mt-10 ">
              Event: The state of AI 🤖 <br></br> 2023
            </h1>
            <p className="text-white md:text-xl text-base absolute font-light left-0 ml-8 font-heroSubText md:top-48 top-32 w-3/4">
              We look into the current events around AI. <br></br>
              Where do we stand on current updates and how to enhance our daily
              work by it? <br></br>
              How to put into good use - is it worthwhile, and more than just a
              fancy trick? <br></br>
              <br></br>
              <b className="md:text-2xl  font-medium">
                Gone is the era of finding good answers, now is the era of
                asking good questions.{" "}
              </b>
            </p>
            <p className="absolute bottom-0 mb-8  left-0 ml-8 text-neutral-100 font-heroSubText text-medium">
              Date : 28 feb 2023 <br></br>
              Venue: ÅKP, Rotunden <br></br>
              <br></br>
              0900: Coffee and registration <br></br>
              0930-1130: Workshop <br></br>
              1130: Lunch<br></br>
              price: 550,-
            </p>
            <a href="https://forms.office.com/e/DrFATy3Cvv" target="_blank">
              <button className="absolute md:bottom-12 bottom-4 right-6 md:right-auto px-6 py-3 shadow-2xl rounded-xl hover:text-neutral-700 bg-neutral-100 hover:shadow-inner font-heroSubText text-xl bg-opacity-80 text-black hover:bg-opacity-100  border-white">
                {" "}
                Register
              </button>
            </a>
            <video
              className="fixed md:flex hidden rounded-lg opacity-50 mr-auto top-0 left-0 right-0 bottom-0 h-[75vh] -z-10 ml-auto w-[65vw] my-auto"
              loop
              muted
              playsinline
              autoPlay
            >
              <source src="./holeyai.webm" type="video/webm" />
            </video>
          
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BannerOverlay;
