import React from "react";

export default function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "INSPIRE Award Selection (2024–25)",
      description:
        "Adarsh Kumar Dhan, a Class 7 student of Vidyasagar Public School, Bero, has been selected under the INSPIRE Award MANAK scheme organized by the Ministry of Science & Technology, Government of India. His innovative idea related to national security has earned him a ₹10,000 grant to develop a model for district-level presentation. This achievement highlights the school’s excellence in innovation and academic quality",
      image: "/Achievements.webp",
    },
    {
      id: 2,
      title: "Food Festival",
      description:
        "Vidyasagar Public School, Bero successfully organized a Food Festival where students showcased a variety of traditional and modern dishes. The event aimed to promote creativity, teamwork, and awareness of healthy eating habits among students. The festival received wide appreciation from parents and visitors and was prominently covered in local newspapers.",
      image: "/newspaper1.webp",
    },
    {
      id: 3,
      title: "Science Exhibition",
      description:
        "Vidyasagar Public School, Bero organized a Science Exhibition where students displayed innovative and working models based on scientific concepts. The exhibition encouraged scientific thinking, creativity, and practical learning among students and was well appreciated by visitors and educators. The event was also covered in local newspapers.",
      image: "/newspaper2.webp",
    
    },

    
  ];

  return (
    <section
      id="achievements"
      className="max-w-7xl mx-auto px-6 py-14"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-700">
          Achievements & Media Highlights
        </h2>
        <p className="text-gray-600 mt-2">
          Celebrating success and moments that made headlines
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
