import React from "react";
import { ExternalLink } from "lucide-react";
export function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Making a home away from Myanmar: Rohingya in Auckland",
      url: "https://www.rnz.co.nz/national/programmes/voices/audio/2018953424/making-a-home-away-from-myanmar-rohingya-in-auckland",
    },
    {
      id: 2,
      title: "Rohingya Refugee Crisis",
      url: "https://www.worldvision.org.nz/causes/emergency-relief/rohingya-refugee-crisis/",
    },
    {
      id: 3,
      title: "Refugees & Migrants",
      url: "https://www.caritas.org.nz/refugees-migrants",
    },
    {
      id: 4,
      title: "NZ urgently needs to take more Rohingya refugees",
      url: "https://asiapacificreport.nz/2017/11/21/nz-urgently-needs-to-take-more-rohingya-refugees/",
    },
    {
      id: 5,
      title: "Rohingya families welcomed to Blenheim after fleeing persecution",
      url: "https://www.stuff.co.nz/marlborough-express/news/300747639/rohingya-families-welcomed-to-blenheim-after-fleeing-persecution-in-myanmar",
    },
    {
      id: 6,
      title: "Who are the Rohingya and why are they fleeing Myanmar?",
      url: "https://www.amnesty.org.nz/who-are-rohingya-and-why-are-they-fleeing-myanmar/",
    },
    {
      id: 7,
      title: "NZ's Rohingya determined to support their fleeing families",
      url: "https://www.stuff.co.nz/world/asia/96841122/nzs-rohingya-determined-to-support-their-fleeing-families",
    },
    {
      id: 8,
      title: "What is going on with Myanmar, the Rohingya and Aung San Suu Kyi",
      url: "https://www.stuff.co.nz/world/96787588/what-is-going-on-with-myanmar-the-rohingya-and-aung-san-suu-kyi",
    },
    {
      id: 9,
      title:
        "Aung San Suu Kyi makes things worse for Rohingya in Myanmar crisis",
      url: "https://www.stuff.co.nz/world/asia/96511096/aung-san-suu-kyi-makes-things-worse-for-rohingya-in-myanmar-crisis",
    },
    {
      id: 10,
      title:
        "Nearly 400 die as Myanmar army steps up crackdown on Rohingya militants",
      url: "https://www.stuff.co.nz/world/asia/96429830/nearly-400-die-as-myanmar-army-steps-up-crackdown-on-rohingya-militants",
    },
    {
      id: 11,
      title: "Rohingya refugees: Finding hope amongst the hopelessness",
      url: "https://www.oxfam.org.nz/news-media/blog/rohingya-refugees-finding-hope-amongst-hopelessness/",
    },
    {
      id: 12,
      title: "Rohingya families escape to the safety of New Zealand",
      url: "https://www.aljazeera.com/news/2015/5/26/rohingya-families-escape-to-the-safety-of-new-zealand",
    },
    {
      id: 13,
      title:
        "Rohingya see no end in sight six months after brutal attacks began",
      url: "https://www.stuff.co.nz/world/asia/101756807/rohingya-see-no-end-in-sight-six-months-after-brutal-attacks-began",
    },
    {
      id: 14,
      title:
        "'We are stronger together': Community is everything for young Rohingya refugee",
      url: "https://www.stuff.co.nz/pou-tiaki/300674089/we-are-stronger-together-community-is-everything-for-young-rohingya-refugee",
    },
  ];
  return (
    <>
      <div className="px-4 md:px-10 lg:px-40 mb-2">
        <div className="space-y-4">
          {newsArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <p className="text-base font-medium text-blue-600 hover:text-blue-800">
                  {article.title}
                </p>
                <ExternalLink
                  className="text-gray-400 ml-4 flex-shrink-0"
                  size={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
