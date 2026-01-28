import React, { useState } from "react";
import { motion } from "framer-motion";

// Modal to view image/video fullscreen
const MediaModal = ({ media, onClose }) => {
  if (!media) return null;
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-3xl w-full">
        {media.type === "image" ? (
          <img src={media.src} alt="" className="w-full rounded" />
        ) : (
          <video
            src={media.src}
            controls
            autoPlay
            className="w-full rounded"
          />
        )}
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // All media (images/videos) from public folder
  const media = [
    { id: 1, type: "image", src: "/events-c3.webp" },
    { id: 1, type: "image", src: "/events-c4.webp" },
    { id: 1, type: "image", src: "/events-c5.webp" },
    { id: 1, type: "image", src: "/events-c6.webp" },
    { id: 1, type: "image", src: "/events-c7.webp" },
    { id: 1, type: "image", src: "/events-c8.webp" },
    { id: 1, type: "image", src: "/events-c9.webp" },
    { id: 1, type: "image", src: "/events-s1.webp" },
    { id: 1, type: "image", src: "/events-s2.webp" },
    { id: 1, type: "image", src: "/events-c1.webp" },
    { id: 1, type: "image", src: "/events-c2.webp" },
  ];

  return (
    <div className="w-full pt-20 bg-gray-50">
      {/* Banner */}
      <motion.div
        className="relative w-full h-[150px] md:h-[250px] bg-cover bg-center"
        style={{ backgroundImage: "url('/vsps.webp')" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Overlay */}
<motion.div
  className="absolute right-0 top-0 h-full 
             w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%]
             bg-blue-500/60 flex items-center justify-center 
             text-white 
             [clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)]"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
<h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold px-4 py-2 text-center">
    Events Gallery
  </h1>
</motion.div>
      </motion.div>

      {/* Events Gallery */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {media.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt=""
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                controls
                playsInline
                style={{ pointerEvents: "auto" }}
              />
            )}

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{ pointerEvents: "none" }}
            ></div>

            {/* Play icon for videos */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-70 pointer-events-none">
                ▶
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal for full-screen view */}
      <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </div>
  );
}
