import React from "react";
import experienceData from "../data/experienceData.json";
import "../index.css";
import "./hero-background.css";

const experiences = experienceData;

const Experience = () => {
  return (
    <div className="h-auto bg-blue-dark">
      <div className="mx-auto max-w-6xl md:pl-16 z-0">
        <div className="h-12" />
        <div className="experience-grid">
          <h2 className="text-center md:text-left section-header">
            {">"} getExperience()
          </h2>
          <div className="col-start-2 mt-12 px-8 md:mt-0 col-end-2 md:pl-6 md:pr-16">
            {experiences.map((experience) => (
              <div>
                <h3>
                  {experience.title} @{" "}
                  <a
                    href={experience.companyLink}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {experience.companyName}
                  </a>
                </h3>
                <p className="date">
                  {experience.startDate} - {experience.endDate}
                </p>
                <ul className="list-square pl-8 pt-3">
                  {experience.bullets.map((bullet) => (
                    <li>{bullet}</li>
                  ))}
                </ul>
                <div id={experience.tag} className="h-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
