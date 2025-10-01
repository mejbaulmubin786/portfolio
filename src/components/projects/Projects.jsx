import React from "react";
import resumeData from "../../data/resumeData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projects } = resumeData;

  return (
    <section id="Projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Selected Projects</h2>

        <div className="flex flex-wrap gap-6">
          {projects.length === 0 ? (
            <div className="text-gray-400">No projects found. Add projects in <code>src/data/resumeData.js</code>.</div>
          ) : (
            projects.map((p, i) => <ProjectCard key={i} project={p} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
