import React from "react";
import HoverWrapper from "./HoverWrapper";

const HoverLink = ({ linkText, linkAddress, linkHoverText }) => {
  const HoverInfo = () => {
    return (
      <div
        className="bg-black px-2 py-0.5 whitespace-nowrap rounded-md
      shadow-[inset_0px_0.5px_3px_0px_rgba(148,163,184,0.4)]"
      >
        <p className="text-white text-base">{linkHoverText}</p>
      </div>
    );
  };

  return (
    <HoverWrapper hoverComponent={HoverInfo}>
      <a className="link " href={linkAddress} target="_blank" rel="noreferrer">
        {linkText}
      </a>
    </HoverWrapper>
  );
};

export default HoverLink;
