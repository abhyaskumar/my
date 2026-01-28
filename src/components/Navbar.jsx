import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Mobile menu
  const [aboutOpen, setAboutOpen] = useState(false); // Mobile About dropdown

  return (
    <nav className="bg-blue-700 text-white px-3 sm:px-4 py-2 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow">
      {/* Logo + Text */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <img
          src="/log.webp"
          alt="logo"
          className="w-8 sm:w-10 md:w-16 h-8 sm:h-10 md:h-16 invert sepia saturate-[4000%] hue-rotate-[350deg] contrast-200"
        />

        <div className="flex flex-col">
          {/* School Name */}
          <span className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl text-center md:text-left">
            Vidya Sagar Public School{" "}
            <span className="text-yellow-400">Bero</span>
          </span>

          {/* Second line: School Code, Estd, Contact */}
          <span className="flex flex-row flex-nowrap justify-center md:justify-start items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-[9px] sm:text-[10px] md:text-sm font-medium mt-1 whitespace-nowrap overflow-x-auto">
            <span>School Code: <b className="text-yellow-400">20140700331</b></span>
            <span>Estd: <b  className="text-yellow-400">2010</b></span>
            <span>Contact: <b  className="text-yellow-400">+9534124780</b></span>
          </span>
        </div>
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden">
        <button
          className="text-white p-2 bg-yellow-400 rounded"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col md:flex md:flex-row absolute md:static left-0 top-full w-full md:w-auto bg-white md:bg-transparent z-40 md:items-center md:justify-start transition-all duration-300`}
      >
        <RouterLink
          to="/"
          className="p-2 px-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-serif text-gray-800 md:text-white hover:text-yellow-400 cursor-pointer text-center"
          onClick={() => setOpen(false)}
        >
          Home
        </RouterLink>

        {/* About Dropdown */}
        <div className="relative w-full md:w-auto group">
          <button
            className="p-2 px-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-serif text-gray-800  md:text-white hover:text-yellow-400 cursor-pointer flex items-center gap-1 w-full md:w-auto justify-center md:justify-start"
            onClick={() => setAboutOpen(!aboutOpen)} // Mobile toggle
          >
            About ▾
          </button>

          {/* Dropdown Menu */}
          <div
            className={`flex-col md:absolute md:left-0 md:mt-2 md:bg-white md:shadow-lg md:rounded-md w-full md:w-auto ${
              aboutOpen ? "flex" : "hidden"
            } md:group-hover:flex`}
          >
            <RouterLink
              to="/about/introduction"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-center md:text-left"
              onClick={() => {
                setOpen(false);
                setAboutOpen(false);
              }}
            >
              Introduction
            </RouterLink>
            <RouterLink
              to="/about/faculty"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-center md:text-left"
              onClick={() => {
                setOpen(false);
                setAboutOpen(false);
              }}
            >
              Faculty
            </RouterLink>
            <RouterLink
              to="/about/gallery"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-center md:text-left"
              onClick={() => {
                setOpen(false);
                setAboutOpen(false);
              }}
            >
              Gallery
            </RouterLink>
            <RouterLink
              to="/about/principal"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-center md:text-left"
              onClick={() => {
                setOpen(false);
                setAboutOpen(false);
              }}
            >
              About Principal
            </RouterLink>
          </div>
        </div>

        <RouterLink
          to="/admissions"
          className="p-2 px-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-serif text-gray-800 md:text-white hover:text-yellow-400 cursor-pointer text-center"
          onClick={() => setOpen(false)}
        >
          Admissions
        </RouterLink>
        <RouterLink
          to="/events"
          className="p-2 px-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-serif text-gray-800 md:text-white hover:text-yellow-400 cursor-pointer text-center"
          onClick={() => setOpen(false)}
        >
          Events
        </RouterLink>
        <RouterLink
          to="/contact"
          className="p-2 px-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-serif text-gray-800 md:text-white hover:text-yellow-400 cursor-pointer text-center"
          onClick={() => setOpen(false)}
        >
          Contact
        </RouterLink>
      </div>
    </nav>
  );
}
