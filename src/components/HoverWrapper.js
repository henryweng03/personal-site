import React, { useState, useRef } from "react";

const HoverWrapper = ({ children, hoverComponent: HoverComponent }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const childRef = useRef(null);
  const hoverRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (event) => {
    const childRect = childRef.current.getBoundingClientRect();
    const offsetX = event.clientX - childRect.left;
    const offsetY = event.clientY - childRect.top;
    setCursorPosition({ x: offsetX, y: offsetY });
  };

  return (
    <div
      ref={childRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isHovering && (
        <div
          ref={hoverRef}
          className="absolute z-10 text-white text-xl"
          style={{
            left: cursorPosition.x,
            top: hoverRef.current
              ? cursorPosition.y - hoverRef.current.offsetHeight - 20
              : cursorPosition.y,
          }}
        >
          <HoverComponent />
        </div>
      )}
    </div>
  );
};

export default HoverWrapper;
