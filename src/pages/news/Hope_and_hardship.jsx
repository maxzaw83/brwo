import React, { useState } from "react";
import VideoSlide from "../../components/Slideshows/VideoSlide";

export function Hope_and_hardship() {
  const videoLinks = ["../videos/re1.mp4", "../videos/re3.mp4"];

  return (
    <>
      <br />
      <section className="px-4 sm:px-40 py-2  text-black text-sm mb-8">
        <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">
          Home of Hope and Hardship: Anayat Ullah’s Visit to the Refugee Camps
        </h2>
        <VideoSlide videos={videoLinks} />
        <p>
          During our recent humanitarian visit to the Rohingya Refugee Camps in
          Bangladesh, we were deeply moved by a powerful moment of reflection
          shared by Brother Anayat Ullah a dedicated member of the Burmese
          Rohingya Welfare Organization New Zealand. Born and raised in these
          very camps, Brother Anayat walked through the same paths where he
          spent his childhood, now revisiting them as a committed advocate for
          his people.
        </p>
        <br />
        <p>
          As he shared his personal memories, stories of hardship, resilience,
          and hope unfolded. His experiences offered us a heartfelt and
          firsthand perspective on what life was like growing up as a Rohingya
          refugee and how those early struggles have shaped his unwavering
          commitment to justice and community empowerment today.
          <br />
        </p>
        <br />
        <p>
          His journey from a displaced child to a voice for his people on the
          global stage stands as a powerful reminder of the strength, courage,
          and potential within every refugee.
        </p>

        <br />
      </section>
    </>
  );
}
