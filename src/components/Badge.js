import React from "react";

const Badge = ({ text }) => (
  <div className="py-0.5 my-1 px-2 rounded-md bg-secondary bg-opacity-30 mr-2 mb-2r">
    <p className="text-center text-xs sm:text-sm font-sfmono text-secondary-light">
      {text}
    </p>
  </div>
);

export default Badge;
