'use client';

import React, { useRef, useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  className?: string;
  delayOffset?: number;
}

export default function AnimatedHeading({
  text,
  as: Component = 'h2',
  className = '',
  delayOffset = 0,
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const handleChange = () => setReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.12 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        observer.disconnect();
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  const words = text.split(' ');

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const delayMs = delayOffset + idx * 60;
        return (
          <span
            key={idx}
            className="inline-block whitespace-pre mr-[0.26em] last:mr-0 will-change-[transform,opacity]"
            style={
              reducedMotion
                ? undefined
                : {
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(12px)',
                    transition: `opacity 400ms ease-out ${delayMs}ms, transform 400ms ease-out ${delayMs}ms`,
                  }
            }
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
}
