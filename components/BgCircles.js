import React from "react";

const BgCircles = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden  ">
      <div className=" bgdot2 block absolute top-48 left-48 w-32 h-32 bg-transparent rounded-full hover:scale-95  transition-all duration-700 border border-admit-blue  "></div>
      <div className="block absolute top-12 left-12 w-64 h-64 bg-transparent rounded-full hover:scale-90  transition-all duration-1000 border border-admit-blue"></div>
      <div className=" block absolute top-24 left-48 w-96 h-96 bg-transparent rounded-full hover:scale-95  transition-all duration-1000 border border-admit-blue"></div>
      <div className=" block absolute top-72 left-12 w-96 h-96 bg-transparent rounded-full hover:scale-95  transition-all duration-1000 border border-admit-blue"></div>
      <div className="  block absolute top-36 left-24 w-64 h-64 bg-transparent rounded-full hover:scale-105 transition-all duration-1000 border-2 border-dashed border-admit-light-blue animate-spin-slow hover:animate-ping-once"></div>
      <div className="block absolute top-64 left-64 w-64 h-64 bg-transparent rounded-full hover:origin-top-left rotate-12 transition-all duration-1000  border border-admit-blue "></div>
      <div className=" bgdot3 block absolute top-36 left-36 w-3 h-3 bg-admit-blue rounded-full"></div>
      <div className=" bgdot1 block absolute top-96 left-48 w-2 h-2 bg-admit-red rounded-full"></div>
      <div className="block  absolute top-24 left-64 w-2 h-2 bg-admit-light-blue rounded-full"></div>
      <div className=" block absolute top-48 left-48 w-2 h-2 bg-admit-red rounded-full"></div>
      <div className=" block absolute top-72 left-[18rem] w-3 h-3 bg-admit-blue rounded-full"></div>
      <div className="block absolute top-12 left-48 w-3 h-3 bg-admit-light-blue rounded-full"></div>
      <div className="block absolute top-24 left-96 bgdot4">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.70001 0V6.70001H0V11.7H6.70001V18.3H11.7V11.7H18.3V6.70001H11.7V0H6.70001Z"
            fill="#004A98"
          />
        </svg>
      </div>
      <div className="block absolute top-72 left-48 ">
      <svg
          width="16"
          height="16"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block absolute top-48"
        >
          <path
            d="M6.70001 0V6.70001H0V11.7H6.70001V18.3H11.7V11.7H18.3V6.70001H11.7V0H6.70001Z"
            fill="#FF595A"
          />
        </svg>

      </div>
      <div className="block absolute top-48 left-12">
        <svg
          width="12"
          height="12"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block absolute top-48"
        >
          <path
            d="M6.70001 0V6.70001H0V11.7H6.70001V18.3H11.7V11.7H18.3V6.70001H11.7V0H6.70001Z"
            fill="#004A98"
          />
        </svg>
      </div>
      <div className="block absolute top-24 left-96 rotateit" >
      <svg
          width="12"
          height="12"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block absolute top-48"
        >
          <path
            d="M6.70001 0V6.70001H0V11.7H6.70001V18.3H11.7V11.7H18.3V6.70001H11.7V0H6.70001Z"
            fill="#FF595A"
          />
        </svg>


      </div>
    </div>
  );
};

export default BgCircles;
