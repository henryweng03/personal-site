import React, { useState, useRef, useCallback, useEffect } from "react";

const HoverWrapper = ({ children, hoverComponent: HoverComponent }) => {
  const [isHovering, setIsHovering] = useState(false);
  const childRef = useRef(null);
  const hoverRef = useRef(null);
  const SCROLLBAR_WIDTH = 16;

  // Calculate the position of the hover component based on the mouse event
  const calculateHoverPosition = useCallback((event) => {
    const childRect = childRef.current.getBoundingClientRect();
    const hoverRect = hoverRef.current.getBoundingClientRect();
    const offsetX = event.clientX - childRect.left;
    const offsetY = event.clientY - childRect.top;
    const screenWidth = window.innerWidth;
    const hoverWidth = hoverRect.width;
    const spaceOnRight = screenWidth - event.clientX;

    if (hoverRef.current) {
      if (spaceOnRight - SCROLLBAR_WIDTH >= hoverWidth) {
        // Position the hover component to the right of the mouse
        hoverRef.current.style.left = `${offsetX}px`;
        hoverRef.current.style.top = `${offsetY - hoverRect.height - 2}px`;
      } else {
        // Position the hover component to the left of the mouse
        hoverRef.current.style.left = `${offsetX - hoverWidth}px`;
        hoverRef.current.style.top = `${offsetY - hoverRect.height - 2}px`;
      }
    }
  }, []);

  // Event handlers
  const handleMouseEnter = useCallback(
    (event) => {
      setIsHovering(true);
      calculateHoverPosition(event);
    },
    [calculateHoverPosition]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      calculateHoverPosition(event);
    },
    [calculateHoverPosition]
  );

  // Add event listeners to the child element
  useEffect(() => {
    const childElement = childRef.current;
    childElement.addEventListener("mouseenter", handleMouseEnter);
    childElement.addEventListener("mouseleave", handleMouseLeave);
    childElement.addEventListener("mousemove", handleMouseMove);

    // Clean up event listeners on unmount
    return () => {
      childElement.removeEventListener("mouseenter", handleMouseEnter);
      childElement.removeEventListener("mouseleave", handleMouseLeave);
      childElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove]);

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
