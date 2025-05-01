"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  colors?: string[];
  speed?: number;
  blur?: number;
  interactive?: boolean;
}

export function AnimatedGradientMesh({
  className,
  colors = ["#4F46E5", "#0EA5E9", "#10B981", "#6366F1", "#8B5CF6"],
  speed = 0.5,
  blur = 60,
  interactive = true,
}: AnimatedGradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const isMouseMoving = useRef(false);
  const blobs = useRef<any[]>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize blobs
    const createBlobs = () => {
      blobs.current = [];
      const numBlobs = 5;
      
      for (let i = 0; i < numBlobs; i++) {
        blobs.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 300 + 100,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          color: colors[i % colors.length],
        });
      }
    };

    createBlobs();

    // Set up mouse movement detection
    const handleMouseMove = (e: MouseEvent) => {
      if (interactive) {
        mousePosition.current = {
          x: e.clientX,
          y: e.clientY,
        };
        isMouseMoving.current = true;
        
        // Reset the flag after a short delay
        setTimeout(() => {
          isMouseMoving.current = false;
        }, 100);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply blur for smoother gradient effect
      ctx.filter = `blur(${blur}px)`;
      
      // Draw each blob
      blobs.current.forEach((blob, index) => {
        // Update position
        blob.x += blob.vx * speed;
        blob.y += blob.vy * speed;
        
        // Bounce off edges
        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;
        
        // Interactive response to mouse movement
        if (interactive && isMouseMoving.current) {
          const dx = mousePosition.current.x - blob.x;
          const dy = mousePosition.current.y - blob.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            const angle = Math.atan2(dy, dx);
            blob.vx -= Math.cos(angle) * 0.05;
            blob.vy -= Math.sin(angle) * 0.05;
          }
        }
        
        // Draw gradient circle
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Reset filter
      ctx.filter = "none";
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [colors, speed, blur, interactive]);
  
  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 -z-10 h-full w-full bg-background opacity-60",
        className
      )}
    />
  );
} 