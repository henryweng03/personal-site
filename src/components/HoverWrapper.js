import React, { useState, useRef, useCallback, useEffect } from "react";

const HoverWrapper = ({ children, hoverComponent: HoverComponent }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const childRef = useRef(null);
  const hoverRef = useRef(null);
  const SCROLLBAR_WIDTH = 16;

  // Calculate the position of the hover component based on the mouse event
  const calculateHoverPosition = useCallback((mousePosition) => {
    const childRect = childRef.current.getBoundingClientRect();
    const hoverRect = hoverRef.current.getBoundingClientRect();
    const offsetX = mousePosition.x - childRect.left;
    const offsetY = mousePosition.y - childRect.top;
    const screenWidth = window.innerWidth;
    const hoverWidth = hoverRect.width;
    const spaceOnRight = screenWidth - mousePosition.x;

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
      setLastMousePosition({ x: event.clientX, y: event.clientY });
      calculateHoverPosition({ x: event.clientX, y: event.clientY });
    },
    [calculateHoverPosition]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      setLastMousePosition({ x: event.clientX, y: event.clientY });
      calculateHoverPosition({ x: event.clientX, y: event.clientY });
    },
    [calculateHoverPosition]
  );

  const handleScroll = useCallback(() => {
    if (isHovering) {
      calculateHoverPosition(lastMousePosition);
    }
  }, [isHovering, lastMousePosition, calculateHoverPosition]);

  // Add event listeners to the child element and window
  useEffect(() => {
    const childElement = childRef.current;
    childElement.addEventListener("mouseenter", handleMouseEnter);
    childElement.addEventListener("mouseleave", handleMouseLeave);
    childElement.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners on unmount
    return () => {
      childElement.removeEventListener("mouseenter", handleMouseEnter);
      childElement.removeEventListener("mouseleave", handleMouseLeave);
      childElement.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove, handleScroll]);

  return (
    <div ref={childRef} className="relative inline-block">
      {children}
      {isHovering && (
        <div
          ref={hoverRef}
          className="absolute z-10"
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <HoverComponent />
        </div>
      )}
    </div>
  );
};

export default HoverWrapper;
