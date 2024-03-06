import React from "react";
import HoverLink from "./HoverLink.js";

const ExperienceCard = ({ props }) => {
  return (
    <div>
      <h3>
        {props.title} @{" "}
        <HoverLink
          linkText={props.companyName}
          linkAddress={props.companyLink}
        />
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
