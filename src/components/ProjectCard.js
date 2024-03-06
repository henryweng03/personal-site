import React from "react";
import BadgeList from "./BadgeList";
import HoverTagWrapper from "./HoverTagWrapper";

const ProjectCard = ({
  projectName,
  techStack,
  description,
  imgSrc,
  projectLink,
  linkHoverText,
}) => {
  return (
    <HoverTagWrapper
      hoverText={
        linkHoverText ??
        projectLink.replace(/^(https?|ftp):\/\//, "").replace(/\/$/, "")
      }
    >
      <a href={projectLink} target="_blank" rel="noreferrer">
        <div
          className="p-6 transition duration-150 rounded-xl 
      hover:bg-secondary-dark hover:bg-opacity-50 -mt-6 mb-0
        hover:shadow-[inset_0px_1px_2px_0px_rgba(148,163,184,0.15)] 
        hover:drop-shadow-2xl"
        >
          <div className="project-grid">
            <div className="col-start-1 col-end-2 pr-0 md:pr-10">
              <img className="rounded-lg" src={imgSrc} alt={projectName} />
              <div className="h-6 md:h-0"></div>
            </div>
            <div className="col-start-2 sm:mt-0 col-end-2">
              <h3 className="text-xl sm:text-2xl">{projectName}</h3>
              <div className="h-2" />
              <BadgeList badges={techStack} responsiveCentering={false} />
              <p className="text-gray-30 mt-2">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </HoverTagWrapper>
  );
};

export default ProjectCard;
