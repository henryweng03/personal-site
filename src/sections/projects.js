import React from "react";
import projectData from "../data/projectData.json";
import "../index.css";
import "./hero-background.css";

const projData = projectData;

const ProjectCard = ({
  projectName,
  techStack,
  description,
  imgSrc,
  projectLink,
}) => {
  return (
    <a href={projectLink} target="_blank" rel="noreferrer">
      <div className="hover-border">
        <div className="project-grid">
          <div className="col-start-1 col-end-2 pr-0 md:pr-10">
            <img src={imgSrc} alt={projectName} />
            <div className="h-6 md:h-0"></div>
          </div>
          <div className="col-start-2 sm:mt-0 col-end-2">
            <h3 className="text-xl sm:text-2xl">{projectName}</h3>
            <div className="flex flex-wrap mt-2">
              {techStack.map((tech) => (
                <div key={tech} className="tag-wrapper">
                  <p className="text-center text-xs sm:text-sm font-sfmono">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

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
