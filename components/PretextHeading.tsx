'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext';

/**
 * PretextHeading Component
 * Uses @chenglou/pretext for high-end typography rendering on canvas.
 * This ensures pixel-perfect text layout and linespacing that remains
 * consistent across different browsers and DPI settings.
 */
interface PretextHeadingProps {
  text: string;
  font: string; // e.g. "700 80px Playfair Display"
  width: number;
  lineHeight: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  letterSpacing?: number; // Added for more granular control
}

export default function PretextHeading({
  text,
  font,
  width,
  lineHeight,
  className = '',
  style = {},
  letterSpacing = 0
}: PretextHeadingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    let active = true;
    
    // Ensure fonts are loaded before professional rendering
    const render = () => {
      if (!active || !canvasRef.current) return;
      try {
        const handle = prepareWithSegments(text, font);
        const result = layoutWithLines(handle, width, lineHeight);
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = result.height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${result.height}px`;
        
        ctx.scale(dpr, dpr);
        ctx.font = font;
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#2F4156'; 

        result.lines.forEach((l: any, i: number) => {
           ctx.fillText(l.text, letterSpacing, i * lineHeight);
        });

        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
          containerRef.current.style.transform = 'translateY(0) scale(1)';
        }
      } catch (e) {
        console.error("Pretext Canvas Render Failed:", e);
      }
    };

    document.fonts.ready.then(render);
    // Safety fallback for slow font loads
    const timeoutId = setTimeout(render, 500); 

    return () => { 
      active = false; 
      clearTimeout(timeoutId);
    };
  }, [text, font, width, lineHeight, letterSpacing]);

  return (
    <div 
      ref={containerRef}
      className={`pretext-wrapper ${className}`} 
      style={{ 
        width: `${width}px`, 
        opacity: 0, 
        transform: 'translateY(10px) scale(0.98)', 
        transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)', 
        ...style 
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
