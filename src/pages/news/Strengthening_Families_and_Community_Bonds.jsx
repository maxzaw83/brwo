import React, { useState } from "react";
import Slideshow from "../../components/Slideshows/Slideshow2";
export function Strengthening_families_and_community_bonds() {
  const images = [
    "../news/sfcb1.jpg",
    "../news/sfcb2.jpg",
    "../news/sfcb3.jpg",
    "../news/sfcb4.jpg",
    "../news/sfcb5.jpg",
    "../news/sfcb6.jpg",
    "../news/sfcb7.jpg",
    "../news/sfcb8.jpg",
    "../news/sfcb9.jpg",
  ];
  return (
    <>
      <br />
      <section className="px-4 sm:px-40  py-2  text-black text-sm mb-8">
        <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">
          BRWO's Engagement Visit to Blenheim
        </h2>
        <Slideshow images={images} />
        <br />
        <p>
          During our 3-day community visit to Blenheim, the Burmese Rohingya
          Welfare Organization successfully delivered programs focused on
          building healthy families (addressing functional and dysfunctional
          relationships), preventing family violence, and fostering social
          cohesion.
        </p>
        <br />
        <p>
          Over these three days, we had the valuable opportunity to meet with
          the Blenheim Rohingya community and listen to their insights regarding
          the challenges they are facing as they resettle in Blenheim. Our
          organization carefully noted each individual's concerns and committed
          to working alongside them to address these issues systematically.
          Also, we recognized that consistent interaction between community
          leaders and the wider population not only strengthens trust but also
          effectively addresses the community's needs.
        </p>
      </section>
    </>
  );
}
