import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "About", href: "#About" },
    { id: 2, name: "Experience", href: "#Experience" },
    { id: 3, name: "Projects", href: "#Projects" },
    { id: 4, name: "Contact", href: "#Contact" },
  ];

  return (
    <nav className="flex justify-between items-center text-white px-10 md:px-20 py-6 backdrop-blur-lg bg-opacity-30 sticky top-0 z-50">
      {/* Brand Name */}
      <span className="text-2xl font-bold tracking-wide">Mubin’s Portfolio</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-semibold">
        {links.map(({ id, name, href }) => (
          <li key={id} className="hover:text-[#465697] transition">
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        {menuOpen ? (
          <FaTimes size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
        ) : (
          <FaBars size={28} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-20 left-0 w-full flex flex-col items-center gap-6 py-6 bg-black bg-opacity-90">
          {links.map(({ id, name, href }) => (
            <li key={id} className="text-lg">
              <a href={href} onClick={() => setMenuOpen(false)}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
