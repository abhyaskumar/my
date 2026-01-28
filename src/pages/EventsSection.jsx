import React from "react";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      date: "September 05, 2025",
      title: "Teachers'  Day",
      description:
        "Students participated in various athletic events with great enthusiasm and showcased their talents.",
      image: "/events-t1.webp",
    },
    {
      id: 2,
      date: "August 15, 2025",
      title: "Independence Day",
      description:
        "Students organized a cultural program to honor their teachers and express gratitude.",
      image: "/campus-murto.webp",
    },
  ];

  return (
    <div id="events" className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Recent Events</h2>
      <div className="grid gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full md:w-1/3 h-48 md:h-auto object-cover"
            />
            {/* Text */}
            <div className="p-4 flex flex-col justify-center">
              <p className="text-sm text-gray-500">{event.date}</p>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
