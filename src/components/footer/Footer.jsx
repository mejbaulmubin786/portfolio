import React from "react";
import resumeData from "../../data/resumeData";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { personal } = resumeData;

  return (
    <footer id="Contact" className="bg-[#071229] mt-12 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold">Get in touch</h3>
          <p className="text-gray-400">I'm available for freelance or full-time opportunities.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={`mailto:${personal.email}`} className="flex items-center gap-2">
            <MdOutlineEmail /> {personal.email}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="text-center text-gray-600 mt-8">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
