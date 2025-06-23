// LatestNews.tsx - 4-column grid version with hover overlay and pagination
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";

const newsItems = [
  {
    title: "CERTIFICATE DISTRIBUTION CEREMONY- PANZ URDU SCHOOL",
    subtitle: "Assalam-o-Ailaikum/Kia Ora Dear respected community members...",
    image: "/l1.png",
    link: "/news/certificate",
  },
  {
    title: "LEADERSHIP AND COMMUNITY SERVICE AWARD-2022",
    subtitle: "Asalaam-o-Alaikum / Kia Ora Respected Community Members...",
    image: "/l2.jpg",
    link: "/news/certificate",
  },
  {
    title: "YOUM E ASHURA",
    subtitle:
      "Muharram is the month in which justice rose against injustice...",
    image: "/l3.jpg",
    link: "/news/certificate",
  },
  {
    title: "JASHAN-E-AZADI CAR RALLY",
    subtitle: "14 August 2022, to commemorate the country’s 75th year...",
    image: "/l4.jpg",
    link: "/news/certificate",
  },
  {
    title: "CULTURAL CELEBRATION NIGHT",
    subtitle:
      "An evening to celebrate diversity and tradition with community performances...",
    image: "/assets/news5.jpg",
    link: "/news/cultural-night",
  },
  {
    title: "COMMUNITY IFTAR 2024",
    subtitle:
      "Join us for a community Iftar in Ramadan to break fast together...",
    image: "/assets/news6.jpg",
    link: "/news/iftar2024",
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
