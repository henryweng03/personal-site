import React from "react";

export default function ProjectCard({
  projectName,
  techStack,
  description,
  imgSrc
}) {
  return (
    <div className="hover-border">
      <div className = "project-grid">
        <div className="col-start-1 px-0  col-end-2">
          <img src={imgSrc} alt={projectName} />
        </div>
        <div className="col-start-2 sm:mt-0 col-end-2">
            <h3 className="text-xl sm:text-2xl">{projectName}</h3>
            <div className="flex flex-wrap mt-2">
              {techStack.map((tech) => (
                <div 
                  key={tech}
                  className="tag-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">{tech}</p>
                </div>
              ))}
            </div>
            <ul className="list-square pl-8 pt-1">
              {description.map((listItem) => (
                <li 
                  key={listItem}
                >
                  {listItem}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}