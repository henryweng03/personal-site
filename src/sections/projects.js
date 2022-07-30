import React from "react";
import ProjectCard from "../components/project-card";
import projectData from "../data/projectData.json";
import "../index.css";
import "./hero-background.css";

const projData = projectData;

const Projects = () => {
  return (
    <div className="h-auto bg-blue-dark">
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <div className="h-12"></div>
        <h2 className="text-center sm:text-left section-header">
          {">"} getProjects()
        </h2>
        <div className="px-8 sm:pr-16 sm:pl-0 mt-12">
          {projData.map((data) => (
            <div>
              <ProjectCard
                projectName={data.projectName}
                techStack={data.techStack}
                description={data.description}
                imgSrc={data.imgSrc}
                projectLink={data.projectLink}
              />
              <div className="h-12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
