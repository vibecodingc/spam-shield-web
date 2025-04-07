
import React, { useEffect, useRef } from "react";

const AnimatedCircuit = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const paths = svgRef.current.querySelectorAll('path');
    
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      
      // Set up the starting position
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      
      // Define the animation
      path.animate(
        [
          { strokeDashoffset: length },
          { strokeDashoffset: 0 }
        ],
        {
          duration: 2000 + (index * 500),
          delay: index * 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
      );
    });
  }, []);
  
  return (
    <svg
      ref={svgRef}
      className="absolute top-0 right-0 w-full h-full opacity-20 transform translate-x-1/4 z-0"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100,100 L300,50 L500,150 L700,100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-rspamd-accent"
      />
      <path
        d="M150,150 L250,250 L450,200 L650,300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-rspamd-accent"
      />
      <path
        d="M200,300 L300,350 L500,300 L700,400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-rspamd-accent"
      />
      <path
        d="M100,400 L250,450 L450,400 L600,500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-rspamd-accent"
      />
      <circle cx="300" cy="50" r="6" fill="currentColor" className="text-rspamd-accent pulse-slow" />
      <circle cx="500" cy="150" r="6" fill="currentColor" className="text-rspamd-accent pulse-slow" />
      <circle cx="250" cy="250" r="6" fill="currentColor" className="text-rspamd-accent pulse-slow" />
      <circle cx="450" cy="200" r="6" fill="currentColor" className="text-rspamd-accent pulse-slow" />
      <circle cx="500" cy="300" r="6" fill="currentColor" className="text-rspamd-accent pulse-slow" />
      <circle cx="250" cy="450" r="6" fill="currentColor" className="text-rspamd-accent pulse-slow" />
    </svg>
  );
};

export default AnimatedCircuit;
