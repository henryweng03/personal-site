import React from "react";
import HoverWrapper from "./HoverWrapper";

const HoverTagWrapper = ({ children, hoverText }) => {
  const HoverTag = () => {
    return (
      <div className="bg-black px-2 py-0.5 whitespace-nowrap rounded-md shadow-[inset_0px_0.5px_3px_0px_rgba(148,163,184,0.4)] border border-white border-opacity-50">
        <p className="text-white text-base">{hoverText}</p>
      </div>
    );
  };

  return <HoverWrapper hoverComponent={HoverTag}>{children}</HoverWrapper>;
};

export default HoverTagWrapper;
