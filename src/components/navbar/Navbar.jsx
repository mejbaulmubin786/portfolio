import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import resumeData from "../../data/resumeData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "About", label: "About" },
    { id: "Experience", label: "Experience" },
    { id: "Projects", label: "Projects" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/25">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#Home" className="text-xl md:text-2xl font-bold tracking-wide">
          {resumeData.personal.name}
          <span className="ml-2 text-sm text-gray-300 block md:inline">
            — {resumeData.personal.title}
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              className="text-gray-200 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}

          <a
            href={resumeData.personal.website}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#465697] to-[#2b3f82] text-sm font-semibold"
          >
            Visit Site
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/80">
          <div className="flex flex-col items-center gap-4 py-6">
            <a href="#About" onClick={() => setOpen(false)}>About</a>
            <a href="#Experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#Projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#Contact" onClick={() => setOpen(false)}>Contact</a>
            <a
              href={resumeData.personal.linkedin}
              className="text-sm mt-2"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
