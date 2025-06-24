import React, { useState } from "react";

const VideoSlide = ({ videos }) => {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto my-4 overflow-hidden rounded-xl shadow-lg">
      <video
        key={videos[current]} // important for reloading video on slide change
        src={videos[current]}
        controls
        className="w-full md:h-[500px] h-[400px] object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {/* Left Button */}
      <button
        onClick={prevVideo}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        &#8592;
      </button>

      {/* Right Button */}
      <button
        onClick={nextVideo}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        &#8594;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlide;
