"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CodePatternProps {
  className?: string;
  speed?: number;
  opacity?: number;
}

export function CodePattern({
  className,
  speed = 30,
  opacity = 0.06,
}: CodePatternProps) {
  const pattern = [
    '010101',
    '{data}',
    'SELECT',
    'function()',
    '<div>',
    'async',
    '01110',
    'while(true)',
    'import',
    'React',
    'SQL',
    'query',
    '0xFF',
    'API',
    'JSON',
    'useState',
    'def main():',
    'return',
    'export',
    'class',
    '=> { }',
    'render()',
    'Python',
    'useEffect()',
    'const',
    'let',
    'schema',
    'npm run',
    'analytics',
    'dashboard',
    'ETL',
    'pipeline',
    'cloud',
    'database',
    'Promise',
    'async/await',
    '</>',
    '};',
    'for (i=0;i<n;i++)',
    '# TODO:',
    '* @param',
    'module',
    '[data]',
    'GROUP BY',
    'JOIN',
    'WHERE',
    'HAVING',
    'index.js',
    '.ts',
    'count(*)',
    'float',
    'int'
  ];

  // Create arrays to store random values for opacity and scale
  const [itemStyles, setItemStyles] = useState<Array<{ opacity: number, scale: number }>>([]);
  const [isClient, setIsClient] = useState(false);
  
  // Generate random values only on the client side
  useEffect(() => {
    const newStyles = pattern.map(() => ({
      opacity: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.4 + 0.8
    }));
    setItemStyles(newStyles);
    setIsClient(true);
  }, []);

  return (
    <div 
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none text-primary z-0",
        className
      )}
      style={{ opacity }}
    >
      <div 
        className="flex animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {isClient && [...Array(20)].map((_, colIndex) => (
          <div key={`col-${colIndex}`} className="mx-4">
            {pattern.map((text, i) => (
              <div 
                key={i} 
                className="text-xs my-2 opacity-60"
                style={itemStyles[i] ? { 
                  opacity: itemStyles[i].opacity,
                  transform: `scale(${itemStyles[i].scale})`
                } : {}}
              >
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
} 