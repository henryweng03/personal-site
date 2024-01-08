import React from "react";
import "../index.css";
import skillData from "../data/skillData.json";
import Badge from "../components/Badge";

const skills = skillData;

const SkillsList = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      {skills.map((text) => (
        <Badge text={text} />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="h-auto bg-primary-dark">
      <div className="mx-auto max-w-6xl md:pl-16 z-0">
        <div className="h-12" />
        <div className="skills-grid">
          <h2 className="text-center md:text-left section-header">
            {">"} getSkills()
          </h2>
          <div className="mt-12 px-8 md:mt-0 md:pl-6 md:pr-6">
            <div>
              <h3 className="text-center md:text-left">Languages</h3>
              <div className="h-3"></div>
              {skills.map((skill) => (
                <SkillsList skills={skill.languages} />
              ))}
            </div>
          </div>
          <div className="col-start-3 mt-12 px-8 md:mt-0 col-end-3 md:pl-0 md:pr-16">
            <div>
              <h3 className="text-center md:text-left">Technologies</h3>
              <div className="h-3"></div>
              {skills.map((skill) => (
                <SkillsList skills={skill.technologies} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
