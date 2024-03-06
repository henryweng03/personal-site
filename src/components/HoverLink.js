import React from "react";
import HoverTagWrapper from "./HoverTagWrapper";

export function removeProtocol(url) {
  // Remove the protocol (e.g., "https://", "http://", "ftp://")
  const withoutProtocol = url.replace(/^(https?|ftp):\/\//, "");
  // Remove any trailing slashes
  return withoutProtocol.replace(/\/$/, "");
}

const HoverLink = ({ linkText, linkAddress, linkHoverText }) => {
  const hoverText = linkHoverText ?? removeProtocol(linkAddress);

  return (
    <HoverTagWrapper hoverText={hoverText}>
      <a href={linkAddress} target="_blank" rel="noreferrer">
        <p className="link">{linkText}</p>
      </a>
    </HoverTagWrapper>
  );
};

export default HoverLink;
