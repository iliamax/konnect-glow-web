
import React, { useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  element?: HTMLDivElement;
}

const Particles = () => {
  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.bg-particles');
      if (!container) return;
      
      // Clear existing particles
      container.innerHTML = '';
      
      // Create particles
      const particleCount = Math.min(window.innerWidth / 15, 50); // Responsive count
      const particles: Particle[] = [];
      
      const colors = [
        'rgba(255, 111, 0, 0.1)', // Orange
        'rgba(0, 87, 160, 0.1)', // Blue
        'rgba(255, 255, 255, 0.1)', // White
      ];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 30 + 10;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const speedX = Math.random() * 0.5 - 0.25;
        const speedY = Math.random() * 0.5 - 0.25;
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = colors[colorIndex];
        particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
        particle.style.filter = `blur(${Math.random() * 2 + 1}px)`;
        
        // Add to DOM and track
        container.appendChild(particle);
        particles.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color: colors[colorIndex],
          element: particle
        });
      }
      
      // Animation loop
      const animate = () => {
        particles.forEach(particle => {
          if (!particle.element) return;
          
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Wrap around screen
          if (particle.x < -particle.size) particle.x = window.innerWidth;
          if (particle.x > window.innerWidth) particle.x = -particle.size;
          if (particle.y < -particle.size) particle.y = window.innerHeight;
          if (particle.y > window.innerHeight) particle.y = -particle.size;
          
          // Update position
          particle.element.style.left = `${particle.x}px`;
          particle.element.style.top = `${particle.y}px`;
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    // Create particles on mount and window resize
    createParticles();
    window.addEventListener('resize', createParticles);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return <div className="bg-particles"></div>;
};

export default Particles;
