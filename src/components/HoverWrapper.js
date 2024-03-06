import React, { useState, useRef, useCallback, useEffect } from "react";

const HoverWrapper = ({ children, hoverComponent: HoverComponent }) => {
  const [isHovering, setIsHovering] = useState(false);
  const childRef = useRef(null);
  const hoverRef = useRef(null);
  const SCROLLBAR_WIDTH = 16;

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
        hoverRef.current.style.left = `${offsetX}px`;
        hoverRef.current.style.top = `${offsetY - hoverRect.height - 2}px`;
      } else {
        hoverRef.current.style.left = `${offsetX - hoverWidth}px`;
        hoverRef.current.style.top = `${offsetY - hoverRect.height - 2}px`;
      }
    }
  }, []);

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
