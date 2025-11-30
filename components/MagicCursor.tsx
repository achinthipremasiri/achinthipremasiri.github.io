import React, { useEffect, useRef } from 'react';

const blooms = ['🌸', '🌿', '🌱', '✨', '🍀', '🍄', '🌻', '🌺', '🌷'];

const MagicCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wand = cursorRef.current;
    if (!wand) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update wand position
      wand.style.left = `${x}px`;
      wand.style.top = `${y}px`;

      // Create blooming trail
      if (Math.random() > 0.8) { // Density control
        const trail = document.createElement('div');
        trail.className = 'bloom-trail fixed w-[15px] h-[15px] rounded-full pointer-events-none z-[9999] text-sm opacity-80';
        
        const bloomEmoji = blooms[Math.floor(Math.random() * blooms.length)];
        trail.innerHTML = bloomEmoji;

        const offsetX = (Math.random() - 0.5) * 15;
        const offsetY = (Math.random() - 0.5) * 15;
        
        trail.style.left = `${x + offsetX}px`;
        trail.style.top = `${y + offsetY}px`;

        document.body.appendChild(trail);

        setTimeout(() => {
          trail.remove();
        }, 800);
      }
    };

    // Add interactions for clickable elements to scale the wand
    const handleMouseEnter = () => {
      if (wand) wand.style.transform = 'translate(-50%, -50%) rotate(-20deg) scale(1.5)';
    };
    
    const handleMouseLeave = () => {
      if (wand) wand.style.transform = 'translate(-50%, -50%) rotate(-20deg) scale(1)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Attach hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed w-[25px] h-[25px] pointer-events-none z-[10000] text-2xl leading-none transition-transform duration-100 ease-out select-none"
      style={{ 
        textShadow: '0 0 5px #FFC107',
        transform: 'translate(-50%, -50%) rotate(-20deg)'
      }}
    >
      ✨
    </div>
  );
};

export default MagicCursor;
