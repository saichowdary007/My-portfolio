"use client";

import React from "react";
import { AnimatedGradientMesh } from "@/components/ui/animated-gradient-mesh";
import { TechParticles } from "@/components/ui/tech-particles";
import { CodePattern } from "@/components/ui/code-pattern";

interface GlobalBackgroundProps {
  children: React.ReactNode;
}

export function GlobalBackground({ children }: GlobalBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated gradient mesh background - lowest layer */}
      <AnimatedGradientMesh 
        colors={["#3b82f6", "#8b5cf6", "#6366f1", "#0ea5e9", "#10b981"]} 
        blur={80}
        speed={0.3}
        className="z-[-30] fixed inset-0"
      />
      
      {/* Subtle code pattern - middle background layer */}
      <CodePattern opacity={0.04} speed={40} className="z-[-20] fixed inset-0" />
      
      {/* Tech particles overlay - top background layer */}
      <TechParticles 
        particleCount={70}
        particleColor="rgba(255, 255, 255, 0.5)"
        lineOpacity={0.12}
        className="z-[-10] fixed inset-0"
      />
      
      {/* Consistent semi-transparent overlay to improve content readability */}
      <div className="fixed inset-0 bg-background/50 z-[-5]"></div>
      
      {/* Content */}
      <div className="relative z-[1]">
        {children}
      </div>
    </div>
  );
} 