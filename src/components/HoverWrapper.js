import React, { useState, useRef, useCallback, useEffect } from "react";

const HoverWrapper = ({ children, hoverComponent: HoverComponent }) => {
  // State to track whether the mouse is hovering over the child component
  const [isHovering, setIsHovering] = useState(false);

  // Refs to store references to the child component and hover component
  const childRef = useRef(null);
  const hoverRef = useRef(null);

  // Event handler for mouse enter event
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  // Event handler for mouse leave event
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  // Event handler for mouse move event
  const handleMouseMove = useCallback((event) => {
    const childRect = childRef.current.getBoundingClientRect();
    const offsetX = event.clientX - childRect.left;
    const offsetY = event.clientY - childRect.top;

    if (hoverRef.current) {
      hoverRef.current.style.left = `${offsetX}px`;
      hoverRef.current.style.top = `${
        offsetY - hoverRef.current.offsetHeight - 2
      }px`;
    }
  }, []);

  // Effect to add and remove event listeners
  useEffect(() => {
    const childElement = childRef.current;

    childElement.addEventListener("mouseenter", handleMouseEnter);
    childElement.addEventListener("mouseleave", handleMouseLeave);
    childElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      childElement.removeEventListener("mouseenter", handleMouseEnter);
      childElement.removeEventListener("mouseleave", handleMouseLeave);
      childElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove]);

  // Effect to set the initial position of the hover component
  useEffect(() => {
    if (isHovering && hoverRef.current) {
      const childRect = childRef.current.getBoundingClientRect();
      const offsetX = childRect.width / 2;
      const offsetY = childRect.height / 2;

      hoverRef.current.style.left = `${offsetX}px`;
      hoverRef.current.style.top = `${
        offsetY - hoverRef.current.offsetHeight - 2
      }px`;
    }
  }, [isHovering]);

  return (
    <div ref={childRef} className="relative inline-block">
      {children}
      {isHovering && (
        <div ref={hoverRef} className="absolute z-10 text-white text-xl">
          <HoverComponent />
        </div>
      )}
    </div>
  );
};

export default HoverWrapper;
