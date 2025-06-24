import React, { useState } from "react";
import VideoSlide from "../../components/Slideshows/VideoSlide";

export function Earthquake_relief_effort() {
  const videoLinks = ["../videos/eqrl.mp4"];

  return (
    <>
      <br />
      <section className="px-4 sm:px-40 py-2  text-black text-sm mb-8">
        <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">
          United for Myanmar: Rohingya Community Launches Earthquake Relief
          Effort
        </h2>
        <VideoSlide videos={videoLinks} />
        <p>
          Our Rohinhya community organization in New Zealand is graciously
          accepting donations and clothing for the individuals affected by the
          recent earthquake in Myanmar
        </p>
        <br />
        <p>
          Additionally, a few of our members are preparing to travel there to
          deliver the assistance in person without any bias based on the
          background of the victims.
        </p>
        <br />
        <p>
          We would also be delighted to invite and cordially welcome any
          organization that is interested in collaborating with us to provide
          assistance to those affected by earthquakes in Myanmar.
        </p>

        <br />
      </section>
    </>
  );
}
