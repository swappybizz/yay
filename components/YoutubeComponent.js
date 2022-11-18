import React from "react";

const YoutubeComponent = () => {
  return (
    <>
      <div className=" flex aspect-w-16 aspect-h-9 items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sqB5dZ35gqY?&rel=0&autoplay=1&showinfo=0&loop=1&controls=1"
          title="Activity Based Costing"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture,"
          allowfullscreen
          autoplay
          modestbranding
        ></iframe>
      </div>
    </>
  );
};

export default YoutubeComponent;
