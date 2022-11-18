import React from "react";
import Link from "next/link"

const Banner = () => {
  return (
    <a className="cursor-pointer hidden" href="/camp">
    <div className="flex w-full h-12 bg-admit-red items-center justify-center cursor-pointer">
        <p className="font-medium">Har konkurranseevnen til bedriften din endret seg ?</p>
    </div>
    </a>
  );
};

export default Banner;
