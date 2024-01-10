import React from "react";

const ExperienceCard = ({ props }) => {
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

export default ExperienceCard;
