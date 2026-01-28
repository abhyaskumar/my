import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from "./AboutSection";
import AdmissionsSection from "./AdmissionsSection";
import EventsSection from "./EventsSection";
import ContactSection from "./ContactSection";

export default function Home() {

  const images = [
    "/bus.webp",
    "/vsps.webp",
    "/vote.webp",
    "/assemblyy.webp",
    "/assemblyy1.webp",
    "/assemblyy2.webp",
  ];

  const [current, setCurrent] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 3500);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const sliderHeight =
    "h-[220px] xs:h-[250px] sm:h-[350px] md:h-[500px] lg:h-[620px]";
  const sliderMobilePadding = "pt-16 xs:pt-20 sm:pt-0";

  return (
          <>
          <Helmet>
        <title>Vidya Sagar Public School Bero | Best School in Bero Ranchi</title>
        <meta
          name="description"
          content="Vidya Sagar Public School Bero provides quality education, modern facilities, experienced faculty, and holistic student development."
        />
        <meta
          name="keywords"
          content="Vidya Sagar Public School, VSPS Bero, best school in Bero, CBSE school Ranchi,
          Private school bero,Best school in bero,Lalan Singh School,School near Saraswati shishu vidya mandir Bero"
        />
        <link rel="canonical" href="https://vspsbero.com/" />
      </Helmet>
    <div className="w-full overflow-hidden">
      {showIntro && (
        <section className="relative w-full h-[100vh] md:h-screen flex flex-col items-center justify-center text-white px-4 overflow-hidden">

          {/* Background */}
          <img
            src="/h3.webp"
            alt="School Background"
            className="absolute inset-0 w-full h-full object-cover object-center blur-[1.5px] brightness-50 scale-110 animate-slowZoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center w-full">

            {/* MINIMAL LUXE TITLE */}
            <div className="flex flex-col items-center mb-6">

              {/* Golden Thin Line */}
              <span className="block h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-3"></span>

              {/* ⭐ ONE LINE SCHOOL NAME ON DESKTOP ⭐ */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[6px] 
                text-white drop-shadow-[0_3px_10px_rgba(255,255,255,0.6)]
                uppercase transition-all duration-300 hover:tracking-[8px]">
                  Vidya Sagar Public School Bero
                </h1>

              </div>

              {/* Golden Thin Line */}
              <span className="block h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mt-3"></span>
            </div>

            {/* CENTER LOGO */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-3xl shadow-2xl animate-float">
              <img
                src="/log.webp"
                alt="School Logo"
                className="w-24 sm:w-32 md:w-40 invert drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]"
              />
            </div>

            <p className="mt-6 max-w-xl text-sm sm:text-lg md:text-xl font-light animate-slideUp text-white/90">
              Nurturing students for a brighter & successful future
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 animate-fadeUp">
              <button className="px-8 py-3 sm:px-10 rounded-xl bg-yellow-400 text-blue-900 font-bold shadow-xl hover:scale-110 transition-all duration-300">

                Apply Now

              </button>

            </div>
          </div>
        </section>
      )}

      {/* ---------- IMAGE SLIDER ---------- */}
      {!showIntro && (
        <div
          className={`relative w-full overflow-hidden mb-4 sm:mb-6 md:mb-10 group ${sliderHeight} ${sliderMobilePadding}`}
        >
          <img
            src={images[current]}
            alt="School"
            className={`w-full ${sliderHeight} object-cover object-center transition-all duration-1000 ease-in-out transform`}
            loading="lazy"
          />

          {/* DOTS */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${current === idx ? "bg-yellow-400 scale-110" : "bg-white/50"
                  } transition-transform`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ---------- OTHER SECTIONS ---------- */}
      <div  className="px-3 sm:px-6 md:px-10 lg:px-20">
        <AboutSection />
      </div>

      <div data-aos="fade-right" data-aos-delay="200" className="px-3 sm:px-6 md:px-10 lg:px-20">
        <AdmissionsSection />
      </div>

      <div data-aos="fade-left" data-aos-delay="300" className="px-3 sm:px-6 md:px-10 lg:px-20">
        <EventsSection />
      </div>

      <div data-aos="zoom-in-up" data-aos-delay="400" className="px-3 sm:px-6 md:px-10 lg:px-20">
        <ContactSection />
      </div>

      <div className="fixed bottom-6 right-6 w-10 h-10 bg-yellow-400 rounded-full shadow-lg animate-floatSlow hidden sm:block"></div>
    </div>
    </>
  );
}
