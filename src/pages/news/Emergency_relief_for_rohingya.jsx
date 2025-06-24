import React, { useState } from "react";
import VideoSlide from "../../components/Slideshows/VideoSlide";

export function Emergency_relief_for_rohingya() {
  const videoLinks = ["../videos/re1.mp4", "../videos/re2.mp4"];

  return (
    <>
      <br />
      <section className="px-4 sm:px-40 py-2  text-black text-sm mb-8">
        <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">
          Global Rohingya Initiative for Emergency Relief for Rohingya
        </h2>
        <VideoSlide videos={videoLinks} />
        <p>
          On 14th September 2024, the Global Rohingya Initiative for Emergency
          Relief carried out a successful humanitarian distribution across three
          critical locations: <br />
          📍 Buthidaung <br />
          📍 Maung Daw <br />
          📍 Rohingya Refugee
          <br />
          Camps in Bangladesh Thanks to the incredible solidarity and
          collaboration of the following organizations, this effort provided
          much-needed aid and hope to families facing severe hardship:
        </p>
        <br />
        <p>
          🔹 Central Rohingya Students Union <br />
          🔹 Rohingya Community Service of Georgia (RCSG)
          <br />
          🔹 Burmese Rohingya Community of Georgia (BRCG)
          <br />
          🔹Rohingya American Society (RAS) <br />
          🔹 Rohingya Culture Center <br />
          🔹 Burmese Rohingya Welfare Organization New Zealand (BRWONZ) <br />
          🔹 Burmese Rohingya Community Netherlands (BRCNL) <br />
          🔹 Rohingya Community UK (RCUK)
          <br />
        </p>
        <br />
        <p>
          Your unified support and generous donations have allowed us to
          distribute food, clothing, and essential supplies to Rohingya families
          still struggling in the aftermath of conflict, displacement, and
          natural disasters. 🤝 This was more than just aid it was a message of
          unity, compassion, and global solidarity. We are deeply thankful to
          every organization and supporter who made this possible. Let’s
          continue to work together for a future where no Rohingya is left
          behind.
        </p>

        <br />
      </section>
    </>
  );
}
