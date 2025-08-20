"use client";

import { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [showHireMe, setShowHireMe] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollIndicator(scrollTop < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hireMeText = "AI Engineer with 1+ years building practical AI-driven applications. Strong in Python, FastAPI, LangChain, and Dockerized deployments. Hands-on with RAG pipelines, question generation systems, and real-time voice agents. I focus on scalable, maintainable, business-aligned solutions with measurable impact.";

  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHireMe(!showHireMe);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4">
      <div className="max-w-7xl mx-auto relative px-6 w-full">
        <div className="relative">
          <h1 className="text-[4rem] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent">
            Sai Kumar Pakalapati
          </h1>
          
          {/* Sparkles animation below the name */}
          <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 w-[40rem] h-40 overflow-hidden rounded-full">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Radial Gradient for soft edges */}
            <div
              className="absolute inset-0 w-full h-full bg-transparent pointer-events-none [mask-image:radial-gradient(ellipse 40% 70% at center, white 0%, white 60%, transparent 100%)] [-webkit-mask-image:radial-gradient(ellipse 40% 70% at center, white 0%, white 60%, transparent 100%)]"
            ></div>
          </div>
        </div>
        
        <p className="mt-6 text-lg text-primary/70">
          Gen AI Engineer | Python Developer
        </p>
        
        <div className="mt-4 flex items-center justify-center gap-6 text-2xl">
          <a href="mailto:saikpakalapati@gmail.com" className="text-primary opacity-85 transition-transform duration-300 transform hover:scale-125">
            <FaEnvelope />
          </a>
          <a href="https://github.com/saichowdary007" className="text-primary opacity-85 transition-transform duration-300 transform hover:scale-125">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/saipakalapati/" className="text-primary opacity-85 transition-transform duration-300 transform hover:scale-125">
            <SiLeetcode />
          </a>
          <a href="tel:+1-940-536-9375" className="text-primary opacity-85 transition-transform duration-300 transform hover:scale-125">
            <FaPhone />
          </a>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-muted-foreground">
          AI Engineer with 1+ years of professional experience in developing practical AI-driven applications. Skilled in Python, FastAPI, LangChain, and containerized deployments with Docker. Experience includes building RAG pipelines, question generation systems, and real-time voice assistants. Focused on delivering scalable, maintainable, and business-aligned AI solutions with measurable impact.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#why-hire"
            onClick={handleHireMeClick}
            className="inline-flex items-center rounded-lg bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium border border-primary/20 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {showHireMe ? 'Hide Details' : 'Why You Should Hire Me'}
          </a>
        </div>

        {showHireMe && (
          <div className="mt-6 max-w-2xl mx-auto text-muted-foreground text-left animate-fade backdrop-blur-sm bg-background/30 p-4 rounded-lg border border-primary/10">
            <p>{hireMeText}</p>
          </div>
        )}
      </div>
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            key="mouse-indicator"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 1.5, repeat: Infinity }
            }}
          >
            <div className="w-6 h-10 border-2 border-primary/70 rounded-full flex items-start justify-center p-1 backdrop-blur-sm">
              <div className="w-1 h-2 bg-primary/70 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

