import React from "react";
import HoverLink, { removeProtocol } from "./HoverLink.js";
import HoverTagWrapper from "./HoverTagWrapper.js";

const ExperienceCard = ({ props }) => {
  return (
    <div>
      <h3>
        {props.title} @{" "}
        <HoverTagWrapper
          hoverText={props.linkHoverText ?? removeProtocol(props.companyLink)}
        >
          <a
            className="link"
            href={props.companyLink}
            target="_blank"
            rel="noreferrer"
          >
            {props.companyName}
          </a>
        </HoverTagWrapper>
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
