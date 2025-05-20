
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only show custom cursor after mouse moves (prevents initial flash at 0,0)
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      // Track link and button hovers
      const interactiveElements = document.querySelectorAll('a, button, .hover-grow');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', onLinkMouseEnter);
        el.addEventListener('mouseleave', onLinkMouseLeave);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      const interactiveElements = document.querySelectorAll('a, button, .hover-grow');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onLinkMouseEnter);
        el.removeEventListener('mouseleave', onLinkMouseLeave);
      });
    };

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };
    
    // Mouse enter/leave window
    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    
    // Click handlers
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    
    // Link hover handlers
    const onLinkMouseEnter = () => setLinkHovered(true);
    const onLinkMouseLeave = () => setLinkHovered(false);

    // Add event listeners when the component mounts
    addEventListeners();

    // Remove event listeners when the component unmounts
    return () => removeEventListeners();
  }, [hidden, linkHovered]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-50' : ''
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${clicked ? 'scale(0.5)' : ''}`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? 'opacity-0' : 'opacity-100'} ${
          linkHovered ? 'scale-150 bg-planetOrange bg-opacity-10' : ''
        } ${clicked ? 'scale-75' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${linkHovered ? 'scale(1.5)' : ''} ${
            clicked ? 'scale(0.75)' : ''
          }`,
        }}
      />
    </>
  );
};

export default CustomCursor;
