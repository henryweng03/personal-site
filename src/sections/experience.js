import React from "react";
import experienceData from "../data/experienceData.json";
import "../index.css";
import "./hero-background.css";
import ExperienceCard from "../components/ExperienceCard";

const experiences = experienceData;

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
              <ExperienceCard props={experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
