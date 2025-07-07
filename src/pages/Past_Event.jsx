import React from "react";
import { Calendar, MapPin, Facebook } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 overflow-hidden flex flex-col">
      {/* Event Image */}
      <div className="overflow-hidden">
        <img
          src={event.imageUrl}
          alt={`Banner for ${event.title}`}
          className="w-full h-40 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x300/E2E8F0/4A5568?text=Event";
          }}
        />
      </div>

      {/* Event Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>

        <div className="space-y-2 text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-2 flex-shrink-0" />
            <span>
              {new Date(event.date).toLocaleDateString("en-NZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              at {event.time}
            </span>
          </div>
          <div className="flex items-start">
            <MapPin size={14} className="mr-2 mt-1 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4 flex-grow">
          {event.organizer}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <a
            href="#"
            className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-md transition-colors text-sm"
          >
            MORE
          </a>
          <a
            href={event.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-800 hover:bg-blue-900 p-2 rounded-md transition-colors"
            aria-label="View on Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export function Past_Event() {
  const eventsData = [
    {
      id: 1,
      title: "Certificate Distribution Ceremony",
      date: "2024-08-14",
      time: "05:30 PM",
      location: "546 Mount Albert Rd, Three Kings, Auckland",
      imageUrl:
        "https://placehold.co/600x300/16a34a/ffffff?text=Community+Awards",
      organizer: "Burmese Rohingya Welfare Organization NZ",
      facebookUrl: "https://facebook.com",
    },
    {
      id: 2,
      title: "Business Networking Event for Women",
      date: "2024-02-01",
      time: "12:00 PM",
      location:
        "Corner Wairere Avenue and New North Road, Mount Albert, Auckland",
      imageUrl:
        "https://placehold.co/600x300/db2777/ffffff?text=Women+in+Business",
      organizer: "Burmese Rohingya Welfare Organization NZ",
      facebookUrl: "https://facebook.com",
    },
    {
      id: 3,
      title: "Community Baithak & Information Session",
      date: "2024-02-01",
      time: "05:00 PM",
      location: "Wairere Avenue & New North Road, Mount Albert, Auckland",
      imageUrl:
        "https://placehold.co/600x300/0284c7/ffffff?text=Community+Baithak",
      organizer: "Burmese Rohingya Welfare Organization NZ",
      facebookUrl: "https://facebook.com",
    },
    {
      id: 4,
      title: "Annual General Meeting (AGM)",
      date: "2023-11-20",
      time: "02:00 PM",
      location: "Fickling Convention Centre, Three Kings, Auckland",
      imageUrl: "https://placehold.co/600x300/f97316/ffffff?text=AGM+2023",
      organizer: "Burmese Rohingya Welfare Organization NZ",
      facebookUrl: "https://facebook.com",
    },
    {
      id: 5,
      title: "Cultural Food Festival",
      date: "2023-09-15",
      time: "11:00 AM",
      location: "Mt Roskill War Memorial Hall, Auckland",
      imageUrl: "https://placehold.co/600x300/84cc16/ffffff?text=Food+Festival",
      organizer: "Burmese Rohingya Welfare Organization NZ",
      facebookUrl: "https://facebook.com",
    },
    {
      id: 6,
      title: "Youth Sports Day",
      date: "2023-07-22",
      time: "10:00 AM",
      location: "Lovell Park, Mount Roskill, Auckland",
      imageUrl: "https://placehold.co/600x300/6d28d9/ffffff?text=Sports+Day",
      organizer: "Burmese Rohingya Welfare Organization NZ",
      facebookUrl: "https://facebook.com",
    },
  ];

  return (
    <>
      <div className="px-4 md:px-10 lg:px-40 mb-2">
        {" "}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
