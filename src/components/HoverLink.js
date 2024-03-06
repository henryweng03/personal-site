import React from "react";
import HoverWrapper from "./HoverWrapper";

const HoverLink = ({ linkText, linkAddress, linkHoverText }) => {
  const LinkTag = () => {
    function removeProtocol(url) {
      // Remove the protocol (e.g., "https://", "http://", "ftp://")
      const withoutProtocol = url.replace(/^(https?|ftp):\/\//, "");

      // Remove any trailing slashes
      return withoutProtocol.replace(/\/$/, "");
    }

    const hoverText = linkHoverText ?? removeProtocol(linkAddress);

    return (
      <div
        className="bg-black px-2 py-0.5 whitespace-nowrap rounded-md
      shadow-[inset_0px_0.5px_3px_0px_rgba(148,163,184,0.4)]
      border border-white border-opacity-50"
      >
        <p className="text-white text-base">{hoverText}</p>
      </div>
    );
  };

  return (
    <HoverWrapper hoverComponent={LinkTag}>
      <a href={linkAddress} target="_blank" rel="noreferrer">
        <p className="link">{linkText}</p>
      </a>
    </HoverWrapper>
  );
};

export default HoverLink;
