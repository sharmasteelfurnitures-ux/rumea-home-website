'use client';

import React, { useRef, useState, useEffect } from 'react';

interface CountUpNumberProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUpNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 800,
  className = '',
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string | number>(0);
  const [inView, setInView] = useState(false);

  // Extract numeric and non-numeric parts if passed as string
  const strVal = String(value);
  const match = strVal.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
  const autoPrefix = match ? match[1] : '';
  const targetNum = match ? parseFloat(match[2]) : typeof value === 'number' ? value : 0;
  const autoSuffix = match ? match[3] : '';
  const isFloat = strVal.includes('.') && !isNaN(targetNum);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setDisplayValue(targetNum);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [targetNum]);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * targetNum;

      setDisplayValue(isFloat ? current.toFixed(1) : Math.floor(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(isFloat ? targetNum.toFixed(1) : targetNum);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, targetNum, duration, isFloat]);

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {prefix || autoPrefix}
      {displayValue}
      {suffix || autoSuffix}
    </span>
  );
}
