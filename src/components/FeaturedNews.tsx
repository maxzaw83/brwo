import React from "react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    title: "Our Community Cares: Rohingya Refugee Support Milestone",
    description: `We are incredibly grateful to our generous community members! 🙏 
The Burmese Rohingya Welfare Organization New Zealand is proud to announce that we have successfully contributed NZD14,000 in cash donations to support Rohingya refugees in camps in Bangladesh and those facing hardship inside Myanmar. This vital aid will provide essential resources and relief to those in desperate need.
Your compassion and contributions have made a real difference in the lives of vulnerable Rohingya individuals and families.`,
    image: "/f1.jpg",
    link: "/news/muslim_aid",
  },
  {
    title: "RASNZ - Refugees as Survivors New Zealand",
    description: `Our friend Adel has generously contributed his thoughts to this Stuff piece by the wonderful journalist Matthew Rosenberg: "You can have multi-million dollar initiatives, but the easiest thing is to knock on your neighbour's door and have a cup of tea...That guy across the road from another country might have a different language and culture, but very similar needs." #whatheSaid 🙌`,
    image: "/f2.jpg",
    link: "/news/rasnz",
  },
  {
    title: "EID MUBARAK 2025",
    description: `Hello Everyone EID MUBARAK and warm wishes from Rohingya Community in New Zealand`,
    image: "/f3.png",
    link: "/news/eid-2025",
  },
];

const FeaturedNews = () => {
  return (
    <section className="px-4 sm:px-35 py-2 bg-gray-100">
      <h2 className="text-2xl font-bold border-b pb-2 mb-8 ">Featured News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {newsItems.map((news, index) => (
          <div
            key={index}
            className="border rounded-md shadow-sm p-4 flex flex-col items-center bg-gray-100"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="font-semibold text-center text-lg mb-2">
              {news.title}
            </h3>
            <p className="text-sm text-gray-700 text-center mb-4">
              {news.description}
            </p>
            <Link
              to={news.link}
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm "
            >
              Read More <span className="ml-1">»</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
