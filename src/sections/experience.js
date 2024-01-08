import React from "react";
import experienceData from "../data/experienceData.json";
import "../index.css";
import "./hero-background.css";

const experiences = experienceData;

const Experience = ({ props }) => {
  return (
    <div>
      <h3>
        {props.title} @{" "}
        <a
          href={props.companyLink}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          {props.companyName}
        </a>
      </h3>
      <p className="date">
        {props.startDate} - {props.endDate}
      </p>
      <ul className="list-square pl-8 pt-3">
        {props.bullets.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

const Experiences = () => {
  return (
    <div className="h-auto">
      <div className="mx-auto max-w-6xl md:pl-16 z-0">
        <div className="experience-grid">
          <h2 className="text-center md:text-left section-header">
            {">"} getExperience()
          </h2>
          <div className="col-start-2 mt-12 px-8 md:mt-0 col-end-2 md:pl-6 md:pr-16 space-y-8">
            {experiences.map((experience) => (
              <Experience props={experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
