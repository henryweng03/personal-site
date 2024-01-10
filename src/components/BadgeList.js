import React from "react";
import Badge from "./Badge";

const BadgeList = ({ badges, responsiveCentering = true }) => (
  <div
    className={`flex flex-wrap ${
      responsiveCentering ? "justify-center md:justify-start" : "justify-start"
    }`}
  >
    {badges.map((badge) => (
      <Badge text={badge} />
    ))}
  </div>
);

export default BadgeList;
