// LatestNews.tsx - 4-column grid version with hover overlay and pagination
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";

const newsItems = [
  {
    title:
      "Strengthening Families and Community Bonds: BRWO's Engagement Visit to Blenheim",
    subtitle:
      "During our 3-day community visit to Blenheim, the Burmese Rohingya Welfare Organization successfully delivered programs focused on building healthy families (addressing functional and dysfunctional relationships), preventing family violence, and fostering social cohesion....",
    image: "/news/sfcb1.jpg",
    link: "/news/strengthening_families_and_community_bonds",
  },
  {
    title:
      "United for Myanmar: Rohingya Community Launches Earthquake Relief Effort",
    subtitle:
      "Our Rohinhya community organization in New Zealand is graciously accepting donations and clothing for the individuals affected by the recent earthquake in Myanmar. Additionally, a few of our members are preparing to travel there to deliver the assistance in person without any bias based on the background of the victims. We would also be delighted to invite and cordially welcome any organization that is interested in collaborating with us to provide assistance to those affected by earthquakes in Myanmar....",
    image: "/news/eqdonation.jpg",
    link: "/news/earthquake_relief_effort",
  },
  {
    title: "Global Rohingya Initiative for Emergency Relief for Rohingya",
    subtitle:
      "In response to the growing humanitarian crises impacting Rohingya communities across the globe — from refugee camps in Bangladesh to conflict-affected areas in Myanmar and diaspora communities in distress — we are launching the Global Rohingya Initiative for Emergency Relief....",
    image: "/news/re1.jpg",
    link: "/news/emergency_relief_for_rohingya",
  },
  {
    title:
      "Home of Hope and Hardship: Anayat Ullah’s Visit to the Refugee Camps",
    subtitle:
      "During our visit to the Rohingya Refugee Camps in Bangladesh, Brother Anayat Ullah , a member of our Burmese Rohingya Welfare Organization New Zealand, who was born and raised in this particular Camps shared his childhood memories....",
    image: "/news/re3.jpg",
    link: "/news/hope_and_hardship",
  },
  {
    title:
      "United in Compassion: Supporting Rohingya and Bangladeshi Families in Crisis",
    subtitle:
      "Recent catastrophic events have devasted the people of Bangladesh and our Rohingya families who fled to Bangladesh Refugee Camp, leaving many families without homes, food, and basic....",
    image: "/news/compassion1.jpg",
    link: "/news/united_in_compassion",
  },
];

const ITEMS_PER_PAGE = 4;

const LatestNews = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const paginatedNews = newsItems.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);

  return (
    <>
      <section className="px-4 sm:px-35 py-2">
        <h2 className="text-2xl font-bold text-center">LATEST NEWS</h2>
        <p className="text-center text-gray-500 text-sm mb-8">SUBTITLE</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedNews.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => navigate(item.link)}
            >
              <div className="rounded overflow-hidden shadow border bg-white group relative h-full">
                <div className="relative w-full h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <FaRegFileAlt className="text-white text-4xl" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-4">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === page ? "bg-black scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

export default LatestNews;
