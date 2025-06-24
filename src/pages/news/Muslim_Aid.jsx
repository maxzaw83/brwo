import React, { useState } from "react";
import Slideshow from "../../components/Slideshows/Slideshow2";

export function Muslim_Aid() {
  const images = [
    "../news/aid1.jpg",
    "../news/aid2.jpg",
    "../news/aid3.jpg",
    "../news/aid4.jpg",
    "../news/aid5.jpg",
    "../news/aid6.jpg",
    "../news/aid7.jpg",
    "../news/aid8.jpg",
    "../news/aid9.jpg",
    "../news/aid10.jpg",
  ];
  return (
    <>
      <section className="px-4 sm:px-40 py-2  text-black text-sm mb-8">
        <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">
          Our Community Cares: Rohingya Refugee Support Milestone
        </h2>
        <Slideshow images={images} />
        <br />
        <p>We are incredibly grateful to our generous community members! 🙏 </p>
        <br />
        <p>
          The Burmese Rohingya Welfare Organization New Zealand is proud to
          announce that we have successfully contributed NZD14,000 in cash
          donations to support Rohingya refugees in camps in Bangladesh and
          those facing hardship inside Myanmar. This vital aid will provide
          essential resources and relief to those in desperate need.
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
        Bank Account Details: <br />
        <p>
          {" "}
          Account Name: Burmese Rohingya Welfare Organization New Zealand <br />
          Account Number: 02-0358-008316-00 <br />
          Bank : BNZ Reference: DONATE ROH
          <br />
          Thank you for standing with us in solidarity and support. Together, we
          can make a brighter future for the Rohingya community.
        </p>
      </section>
    </>
  );
}
