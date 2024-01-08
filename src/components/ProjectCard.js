import Badge from "../components/Badge";
import React from "react";

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
              {techStack.map((text) => (
                <Badge text={text} />
              ))}
            </div>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
