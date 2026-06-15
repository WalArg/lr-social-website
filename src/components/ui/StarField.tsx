'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleDelay: number;
}

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const starCount = 80;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
      const star: Star = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.4,
        twinkleSpeed: 2 + Math.random() * 4,
        twinkleDelay: Math.random() * 5,
      };

      const el = document.createElement('div');
      el.style.cssText = `
        position: absolute;
        left: ${star.x}%;
        top: ${star.y}%;
        width: ${star.size}px;
        height: ${star.size}px;
        border-radius: 50%;
        background: white;
        opacity: ${star.opacity};
        animation: twinkle ${star.twinkleSpeed}s ease-in-out ${star.twinkleDelay}s infinite;
        --star-opacity: ${star.opacity};
        ${star.size > 1.2 ? 'box-shadow: 0 0 4px rgba(255,255,255,0.5);' : ''}
      `;
      fragment.appendChild(el);
    }

    container.appendChild(fragment);

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
