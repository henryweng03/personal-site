import React from "react";

export default function SkillsList({ skills }) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      {skills.map((tech) => (
        <div className="tag-wrapper">
          <p className="text-xs sm:text-sm font-sfmono">{tech}</p>
        </div>
      ))}
    </div>
  );
}
