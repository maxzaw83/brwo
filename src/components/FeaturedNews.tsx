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
    title: "Echoes of Home: Ayman Salam’s Tribute to Rohingya Mothers",
    description: `We are proud of you, Ayman Salaam.
You have wonderfully delivered your poem at The New Beginning Under Matariki Stars.
Your words carried deep meaning and emotion, reminding us of the suffering endured by the Rohingya people during the 2017 genocide — and more importantly, how they survived with strength, resilience, and dignity.`,
    image: "/news/poen.png",
    link: "/news/poem",
  },
  {
    title: "EID MUBARAK 2025",
    description: `We had a great Eid celebration for our Rohingya community last night, thanks to all the volunteers. We'd like to say a big thank you to everyone who came out, and we're really proud of our team.
Thank you all.`,
    image: "/f3.png",
    link: "/news/eid_mubarak",
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
