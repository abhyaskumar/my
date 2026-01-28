import React from "react";

export default function SchoolPicnicSection() {
  const picnicImages = [
    {
      id: 1,
      image: "/tour1.webp",
    },
    {
      id: 2,
      image: "/tour2.webp",
    },
    {
      id: 3,
      image: "/tour3.webp",
    },
    {
      id: 4,
      image: "/tour4.webp",
      title: "Lunch & Fun Time",
    },
    {
      id: 5,
      image: "/tour5.webp",
      
    },
    {
      id: 6,
      image: "/tour6.webp",
      
    },
        {
      id: 7,
      image: "/tour7.webp",
      
    },
        {
      id: 8,
      image: "/tour8.webp",
    },
        {
      id: 9,
      image: "/tour9.webp",
    },
  ];

  return (
    <section id="school-picnic" className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-800">
          School Picnic
        </h2>
        <p className="text-gray-600 mt-2">
          Fun-filled moments and unforgettable memories
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {picnicImages.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
              <h3 className="text-white text-lg font-semibold p-4">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
