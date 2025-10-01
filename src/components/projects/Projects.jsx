import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="Projects" className="px-10 md:px-20 py-20 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Projects</h1>
      
      <div className="flex flex-wrap justify-center gap-10">
        <ProjectCard
          title="Blogging Website"
          main="A blogging platform built with Next.js and Tailwind CSS."
        />
        <ProjectCard
          title="YouTube Clone"
          main="A video sharing app inspired by YouTube, built with React."
        />
        <ProjectCard
          title="Netflix Clone"
          main="A movie streaming platform clone with authentication & API integration."
        />
      </div>
    </section>
  );
};

export default Projects;
