
import React, { useEffect, useRef } from "react";

const DataFlowAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const particles = svgRef.current.querySelectorAll('.particle');
    const hexagons = svgRef.current.querySelectorAll('.hexagon');
    
    // Animate particles
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
    
    // Animate hexagons with pulse and rotation
    hexagons.forEach((hexagon, index) => {
      hexagon.animate(
        [
          { opacity: 0.3, transform: 'rotate(0deg) scale(0.9)' },
          { opacity: 0.8, transform: 'rotate(180deg) scale(1.1)' },
          { opacity: 0.3, transform: 'rotate(360deg) scale(0.9)' }
        ],
        {
          duration: 8000 + (index * 1000),
          delay: index * 500,
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
      {/* Hexagon Grid */}
      <polygon className="hexagon" points="30,40 15,60 30,80 60,80 75,60 60,40" stroke="#F97316" strokeWidth="1" fill="none" />
      <polygon className="hexagon" points="90,60 75,80 90,100 120,100 135,80 120,60" stroke="#F97316" strokeWidth="1" fill="none" />
      <polygon className="hexagon" points="150,40 135,60 150,80 180,80 195,60 180,40" stroke="#F97316" strokeWidth="1" fill="none" />
      <polygon className="hexagon" points="30,140 15,160 30,180 60,180 75,160 60,140" stroke="#F97316" strokeWidth="1" fill="none" />
      <polygon className="hexagon" points="90,160 75,180 90,200 120,200 135,180 120,160" stroke="#F97316" strokeWidth="1" fill="none" />
      <polygon className="hexagon" points="150,140 135,160 150,180 180,180 195,160 180,140" stroke="#F97316" strokeWidth="1" fill="none" />
      
      {/* Vertical data flow lines */}
      <line x1="40" y1="20" x2="40" y2="380" stroke="#F97316" strokeWidth="1" className="opacity-30" />
      <line x1="100" y1="20" x2="100" y2="380" stroke="#F97316" strokeWidth="1" className="opacity-30" />
      <line x1="160" y1="20" x2="160" y2="380" stroke="#F97316" strokeWidth="1" className="opacity-30" />
      
      {/* Diagonal connection lines */}
      <line x1="40" y1="80" x2="100" y2="160" stroke="#F97316" strokeWidth="1" className="opacity-30" strokeDasharray="4,4" />
      <line x1="100" y1="100" x2="160" y2="40" stroke="#F97316" strokeWidth="1" className="opacity-30" strokeDasharray="4,4" />
      <line x1="160" y1="180" x2="100" y2="200" stroke="#F97316" strokeWidth="1" className="opacity-30" strokeDasharray="4,4" />
      
      {/* Flow particles */}
      <circle className="particle" cx="40" cy="40" r="3" fill="#F97316" />
      <circle className="particle" cx="40" cy="80" r="3" fill="#F97316" />
      <circle className="particle" cx="40" cy="120" r="3" fill="#F97316" />
      <circle className="particle" cx="40" cy="160" r="3" fill="#F97316" />
      
      <circle className="particle" cx="100" cy="60" r="3" fill="#F97316" />
      <circle className="particle" cx="100" cy="100" r="3" fill="#F97316" />
      <circle className="particle" cx="100" cy="140" r="3" fill="#F97316" />
      <circle className="particle" cx="100" cy="180" r="3" fill="#F97316" />
      
      <circle className="particle" cx="160" cy="40" r="3" fill="#F97316" />
      <circle className="particle" cx="160" cy="80" r="3" fill="#F97316" />
      <circle className="particle" cx="160" cy="120" r="3" fill="#F97316" />
      <circle className="particle" cx="160" cy="160" r="3" fill="#F97316" />
      
      {/* Binary data elements */}
      <text x="45" y="50" fontSize="8" className="text-rspamd-accent opacity-40">01</text>
      <text x="105" y="70" fontSize="8" className="text-rspamd-accent opacity-40">10</text>
      <text x="165" y="50" fontSize="8" className="text-rspamd-accent opacity-40">11</text>
      <text x="45" y="150" fontSize="8" className="text-rspamd-accent opacity-40">00</text>
      <text x="105" y="170" fontSize="8" className="text-rspamd-accent opacity-40">10</text>
      <text x="165" y="150" fontSize="8" className="text-rspamd-accent opacity-40">01</text>
    </svg>
  );
};

export default DataFlowAnimation;
