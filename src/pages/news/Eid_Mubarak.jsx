import React, { useState } from "react";
import Slideshow from "../../components/Slideshows/Slideshow2";

export function Eid_Mubarak() {
  const images = [
    "../news/Eid1.jpg",
    "../news/Eid2.jpg",
    "../news/Eid3.jpg",
    "../news/Eid4.jpg",
    "../news/Eid5.jpg",
    "../news/Eid6.jpg",
  ];
  return (
    <>
      <section className="px-4 sm:px-40 py-2  text-black text-sm mb-8">
        <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">
          EID MUBARAK 2025 ( Celebrating Eid Together: A Night of Joy, Unity,
          and Gratitude )
        </h2>
        <Slideshow images={images} />
        <br />
        <p>We are incredibly grateful to our generous community members! 🙏 </p>
        <br />
        <p>
          We had a truly wonderful Eid celebration last night with our Rohingya
          community in New Zealand. It was a beautiful evening filled with
          smiles, laughter, and togetherness. From delicious food to heartfelt
          conversations and joyful moments, the event reminded us of the
          strength and unity of our community, especially during such meaningful
          occasions.
        </p>
        <br />
        <p>
          Your compassion and contributions have made a real difference in the
          lives of vulnerable Rohingya individuals and families. We are
          committed to continuing our efforts to provide aid and support. If you
          would like to join us in making a positive impact, please reach out to
          our organization ( Rohingyawonz@gmail.com) or donate directly to our
          bank account. Every contribution, no matter the size, makes a
          significant difference.
        </p>
        <br />

        <p>
          We’re also incredibly grateful to everyone who came out to join us.
          Your presence and participation made the evening truly special. These
          celebrations are more than just cultural events — they are a reminder
          of who we are, where we come from, and how far we've come together.
        </p>
        <br />
        <p>
          As the Burmese Rohingya Welfare Organization New Zealand, we are proud
          of our team and deeply thankful for the ongoing support from our
          community. Let’s continue to stand together, support one another, and
          build a brighter future for all.
        </p>
        <br />
        <p>
          Eid Mubarak to you and your families! 🌙✨
          <br />
          With love and thanks,
          <br />
          <b>BRWO New Zealand Team</b>
          <br />
        </p>
      </section>
    </>
  );
}
