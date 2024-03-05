import React from "react";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => (
  <div className="py-0.5 my-1 px-2 rounded-md bg-secondary bg-opacity-30 mr-2 shadow-[inset_0px_0.5px_1.5px_0px_rgba(148,163,184,0.2)]">
    <p className="text-center text-xs sm:text-sm font-sfmono text-secondary-light">
      {text}
    </p>
  </div>
);

export default Badge;
