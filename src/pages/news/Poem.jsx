import React, { useState } from "react";
import VideoSlide from "../../components/Slideshows/VideoSlide";
import VideoSlide2 from "../../components/Slideshows/VideoSlide";
export function Poem() {
  const videoLinks = [
    "../videos/2025-06-21_V1.mp4",
    "../videos/2025-06-21_V2.mp4",
  ];
  const videoLinks2 = [
    "../videos/2025-06-21_V2.mp4",
    "../videos/2025-06-21_V1.mp4",
  ];

  return (
    <>
      <br />
      <section className="px-4 sm:px-40 py-2  text-black text-sm mb-8">
        <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">
          Echoes of Home: Ayman Salam’s Tribute to Rohingya Mothers
        </h2>
        <VideoSlide videos={videoLinks} />
        <p>
          We are proud of you, Ayman Salaam. You have wonderfully delivered your
          poem at The New Beginning Under Matariki Stars.
        </p>
        <br />
        <p>
          Your words carried deep meaning and emotion, reminding us of the
          suffering endured by the Rohingya people during the 2017 genocide —
          and more importantly, how they survived with strength, resilience, and
          dignity.
        </p>
        <br />
        <p>
          Through your voice, you have honoured the memory of those we lost and
          given power to those still fighting for justice and hope. Your poem is
          not just a reflection of the past, but a beacon of our ongoing journey
          — a reminder that even in darkness, we carry the light of survival and
          unity.
        </p>
        <br />
        <p>
          Ka mau te wehi – you were amazing. We are all so proud of you.
          <br />
          May your voice continue to inspire and uplift our community. Burmese
          Rohingya Welfare Organization New Zealand is proud to have you. Thanks
          for taking your precious time and coming all the way from Palmy.
          <br />
        </p>
        <br /> <br />
        <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">
          Your Voice, Our Light: A Tribute to Ayman Salaam’s Poem Under Matariki
          Stars
        </h2>
        <VideoSlide videos={videoLinks2} />
        <p>
          Another powerful poem by Ayman Salam. <br />
          This time, Ayman brings us closer to our roots a tender reflection of
          our culture, identity, and love.
        </p>
        <br />
        <p>
          Through gentle words and heartfelt rhythm, the poem captures how
          Rohingya mothers used to sing or whisper lullabies to put their babies
          to sleep even in the most uncertain times. In refugee camps, amidst
          loss and fear, a mother’s voice remained a shelter soft, soothing, and
          sacred.
        </p>
        <br />
        <p>
          Ayman's poem is more than just poetry; it is an echo of home, a
          tribute to our mothers, and a preservation of the Rohingya soul passed
          down through generations.
          <br />
          Thank you, Ayman, for giving voice to our untold stories with honesty,
          with beauty, and with love.
          <br />
          Your words keep our memories alive.
          <br />
        </p>
      </section>
    </>
  );
}
