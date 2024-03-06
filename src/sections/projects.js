import React from "react";
import projectData from "../data/projectData.json";
import "../index.css";
import "./hero-background.css";
import ProjectCard from "../components/ProjectCard";

const projData = projectData;

const Projects = () => {
  return (
    <div className="h-auto">
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <h2 className="text-center sm:text-left section-header">
          {">"} getProjects()
        </h2>
        <div className="px-8 sm:pr-16 sm:pl-0 mt-12 space-y-12">
          {projData.map((data) => (
            <div>
              <ProjectCard
                projectName={data.projectName}
                techStack={data.techStack}
                description={data.description}
                imgSrc={data.imgSrc}
                projectLink={data.projectLink}
                linkHoverText={data.linkHoverText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
