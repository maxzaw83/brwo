import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshows/Slideshow";
import FeatureNew from "../components/FeaturedNews";
import LatestNews from "../components/LatestNews";

const HomePage = () => {
  const images = ["/s1.png", "/s2.jpg"];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <br></br> <br></br>
      <Slideshow images={images} />
      <div>
        <FeatureNew />
        <LatestNews />
      </div>
    </div>
  );
};

export default HomePage;
