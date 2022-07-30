import React from "react";

export default function ProjectCard({
  projectName,
  techStack,
  description,
  imgSrc,
  projectLink,
}) {
  if (typeof description == "string") {
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
                    <p className="text-xs sm:text-sm font-sfmono">{tech}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-300">{description}</p>
            </div>
          </div>
        </div>
      </a>
    );
  } else {
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
                    <p className="text-xs sm:text-sm font-sfmono">{tech}</p>
                  </div>
                ))}
              </div>
              <ul className="list-square pl-8 pt-1">
                {description.map((listItem) => (
                  <li key={listItem}>{listItem}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
