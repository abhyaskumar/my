import React from "react";
import { motion } from "framer-motion";

export default function Branch2() {
  const images = [
    "/faculty.webp",
    "/faculty4.webp",
    "/events-t1.webp",
  ];

  const videos = [
    "/faculty-v.mp4",
    "/prade.mp4",
  ];

  return (
    <div className="w-full">

      {/* ------------------ Hero Section ------------------ */}
      <div
        className="h-[45vh] sm:h-[50vh] md:h-[60vh] 
                   bg-cover bg-center flex items-center justify-center 
                   text-white px-4 text-center"
        style={{ backgroundImage: "url('/Mbanner.webp')" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl 
                     font-bold drop-shadow-lg leading-tight"
        >
          Our Second Branch
        </motion.h1>
      </div>

      {/* ------------------ About Section ------------------ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 
                         font-bold text-gray-800 mb-4">
            About This Branch
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            Our second branch is located in a peaceful area and offers a modern
            learning environment for students. This campus includes well-equipped
            classrooms, a digital learning lab, a library, and spacious play areas.
            Our experienced faculty ensures the best education and discipline.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
            With advanced teaching methods and a student-friendly atmosphere, we
            aim to build a strong academic foundation for every child.
          </p>
        </div>
      </section>

      {/* ------------------ Photo Gallery ------------------ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl 
                       font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          Branch Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.img
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              src={src}
              alt="branch"
              className="w-full h-56 sm:h-64 object-cover 
                         rounded-xl shadow-lg transition-all duration-300"
            />
          ))}
        </div>
      </section>

      {/* ------------------ Video Section ------------------ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-20 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl 
                       font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          Campus Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <video
                src={src}
                controls
                className="w-full h-52 sm:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ Contact Section ------------------ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-20">
        <div className="max-w-4xl mx-auto bg-white 
                        shadow-xl rounded-2xl 
                        p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 
                         font-bold mb-6 text-gray-800">
            Branch Contact Info
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-2">
            <strong>📍 Address:</strong> Auto stand,Murto Bero,Ranchi(Jharkhand)
          </p>

          <p className="text-base sm:text-lg text-gray-700 mb-2">
            <strong>📞 Phone:</strong> +91 9471359602
          </p>
          
          <p className="text-base sm:text-lg text-gray-700 mb-2">
            <strong>E-mail:</strong> vps2414murto@gmail.com
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            <strong>⏰ Timings:</strong> Mon–Sat, 8AM – 2PM
          </p>
        </div>
      </section>

    </div>
  );
}