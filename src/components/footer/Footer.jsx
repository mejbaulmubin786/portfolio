import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Contact"
      className="flex flex-col md:flex-row justify-between items-center bg-[#0f172a] text-white px-10 md:px-20 py-10"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <p className="text-gray-300 mt-2">Feel free to reach out!</p>
      </div>

      <ul className="mt-6 md:mt-0 space-y-3 md:space-y-0 md:space-x-8 flex flex-col md:flex-row">
        <li className="flex items-center gap-2 hover:text-[#465697] transition">
          <MdOutlineEmail /> mejbaulmubin@gmail.com
        </li>
        <li className="flex items-center gap-2 hover:text-[#465697] transition">
          <CiLinkedin /> linkedin.com/in/username
        </li>
        <li className="flex items-center gap-2 hover:text-[#465697] transition">
          <FaGithub /> github.com/username
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
