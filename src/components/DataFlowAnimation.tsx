
import React, { useEffect, useRef } from "react";

const DataFlowAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const particles = svgRef.current.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
      // Create a repeating animation
      particle.animate(
        [
          { opacity: 0, transform: 'translateY(0)' },
          { opacity: 1, transform: 'translateY(20px)' },
          { opacity: 0, transform: 'translateY(40px)' }
        ],
        {
          duration: 2000,
          delay: index * 200,
          iterations: Infinity,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
      );
    });
  }, []);
  
  return (
    <svg
      ref={svgRef}
      className="absolute left-0 h-full w-full opacity-20 z-0"
      viewBox="0 0 200 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="40" y1="20" x2="40" y2="380" stroke="currentColor" strokeWidth="1" className="text-rspamd-accent" />
      <line x1="100" y1="20" x2="100" y2="380" stroke="currentColor" strokeWidth="1" className="text-rspamd-accent" />
      <line x1="160" y1="20" x2="160" y2="380" stroke="currentColor" strokeWidth="1" className="text-rspamd-accent" />
      
      <circle className="particle" cx="40" cy="40" r="3" fill="currentColor" />
      <circle className="particle" cx="40" cy="80" r="3" fill="currentColor" />
      <circle className="particle" cx="40" cy="120" r="3" fill="currentColor" />
      <circle className="particle" cx="40" cy="160" r="3" fill="currentColor" />
      
      <circle className="particle" cx="100" cy="60" r="3" fill="currentColor" />
      <circle className="particle" cx="100" cy="100" r="3" fill="currentColor" />
      <circle className="particle" cx="100" cy="140" r="3" fill="currentColor" />
      <circle className="particle" cx="100" cy="180" r="3" fill="currentColor" />
      
      <circle className="particle" cx="160" cy="40" r="3" fill="currentColor" />
      <circle className="particle" cx="160" cy="80" r="3" fill="currentColor" />
      <circle className="particle" cx="160" cy="120" r="3" fill="currentColor" />
      <circle className="particle" cx="160" cy="160" r="3" fill="currentColor" />
    </svg>
  );
};

export default DataFlowAnimation;
