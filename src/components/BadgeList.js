import React from "react";
import Badge from "./Badge";

const BadgeList = ({ badges }) => (
  <div className="flex flex-wrap justify-center md:justify-start">
    {badges.map((badge) => (
      <Badge text={badge} />
    ))}
  </div>
);

export default BadgeList;
