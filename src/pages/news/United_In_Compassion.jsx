import React, { useState } from "react";
import Slideshow from "../../components/Slideshows/Slideshow2";

export function United_In_Compassion() {
  const images = ["../news/compassion1.jpg"];
  return (
    <>
      <section className="px-4 sm:px-40 py-2  text-black text-sm mb-8">
        <Slideshow images={images} />
        <br />
        <p>
          Emergency Relief Appeal: Supporting Flood Victims in Bangladesh &
          Rohingya Refugees in Crisis{" "}
        </p>
        <br />
        <b> About the Cause</b>
        <br />

        <p>
          Recent devastating floods have severely impacted communities in
          Bangladesh, including thousands of Rohingya families living in refugee
          camps. Many have lost their homes, access to clean water, food, and
          other basic necessities. Tragically, some have also lost loved ones in
          the disaster.
        </p>
        <br />
        <p>
          The Burmese Rohingya Welfare Organization stands in solidarity with
          the people of Bangladesh and the Rohingya refugees, offering urgent
          humanitarian assistance. We are committed to providing emergency aid —
          but we cannot do it alone.
        </p>
        <br />

        <p>
          Your support can bring hope and healing to those who need it most.
          Whether through donations, supplies, or spreading the word, every act
          of compassion helps rebuild lives and restore dignity.
        </p>
        <br />
      </section>
    </>
  );
}
