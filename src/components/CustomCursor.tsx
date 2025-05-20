
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const numTrails = 8; // Number of trailing elements

  useEffect(() => {
    // Initialize trailing elements
    trailsRef.current = Array.from({ length: numTrails }).map(() => document.createElement('div'));
    trailsRef.current.forEach((trail, index) => {
      trail.className = `cursor-trail trail-${index}`;
      document.body.appendChild(trail);
    });

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

      // Clean up trail elements
      trailsRef.current.forEach(trail => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      });
    };

    // Mouse move handler with trail effect
    const onMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);

      // Update trail positions with delay
      trailsRef.current.forEach((trail, index) => {
        setTimeout(() => {
          if (trail) {
            trail.style.left = `${newPosition.x}px`;
            trail.style.top = `${newPosition.y}px`;
            trail.style.opacity = (1 - (index / numTrails)).toString();
            
            // Scale down the trails as they go further back
            const scale = 1 - (index * 0.05);
            trail.style.transform = `translate(-50%, -50%) scale(${scale})`;
            
            // More visible when clicked
            if (clicked) {
              trail.style.opacity = (1 - (index / (numTrails * 1.5))).toString();
            }
          }
        }, index * 50); // Staggered delay
      });

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
  }, [hidden, linkHovered, clicked, numTrails]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  // Return null as we don't need the cursor dot anymore, only the trails
  return null;
};

export default CustomCursor;
