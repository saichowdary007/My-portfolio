"use client";

import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import { cn } from "@/lib/utils";
import { SiLeetcode } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [showHireMe, setShowHireMe] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const hireMeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollIndicator(scrollTop < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hireMeText = "I'm a data-wrangling, SQL-savvy code-slinger who transforms chaotic datasets into scalable, cloud-crushing pipelines. With a knack for bug-busting and a love for optimization, I automate workflows, enhance business intelligence accuracy, and streamline ETL processing. My Python-punning, ETL-expert self builds interactive Power BI dashboards, develops predictive maintenance models, and optimizes marketing strategies through data-driven insights. The witty-warehousing, hire-me-hustler you need for data dazzle!";

  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHireMe(!showHireMe);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto z-10 relative px-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 className="text-[4rem] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent" custom={0} variants={textVariants}>
          Sai Kumar Pakalapati
        </motion.h1>
        <motion.p className="mt-6 text-lg text-primary/70" custom={1} variants={textVariants}>
          Data Analyst | BI & Analytics Specialist
        </motion.p>
        <motion.div className="mt-4 flex items-center justify-center gap-6 text-2xl" custom={2} variants={textVariants}>
          <motion.a href="mailto:saikpakalapati@gmail.com" className="text-primary opacity-85 hover:text-accent transition-colors duration-300 hover:scale-110" whileHover={{ scale: 1.2 }} variants={textVariants} custom={3}>
            <FaEnvelope />
          </motion.a>
          <motion.a href="https://github.com/saichowdary007" className="text-primary opacity-85 hover:text-accent transition-colors duration-300 hover:scale-110" whileHover={{ scale: 1.2 }} variants={textVariants} custom={4}>
            <FaGithub />
          </motion.a>
          <motion.a href="https://leetcode.com/u/saipakalapati/" className="text-primary opacity-85 hover:text-accent transition-colors duration-300 hover:scale-110" whileHover={{ scale: 1.2 }} variants={textVariants} custom={5}>
            <SiLeetcode />
          </motion.a>
          <motion.a href="tel:+1-940-536-9375" className="text-primary opacity-85 hover:text-accent transition-colors duration-300 hover:scale-110" whileHover={{ scale: 1.2 }} variants={textVariants} custom={6}>
            <FaPhone />
          </motion.a>
        </motion.div>

        <motion.p className="mt-8 max-w-2xl mx-auto text-muted-foreground" custom={7} variants={textVariants}>
          Data Analyst with 2+ years of experience in Python, SQL and Power BI, specializing in data extraction, visualization, and automation.
          Skilled in building interactive dashboards, optimizing ETL pipelines, and conducting statistical analysis to support business decision-making.
        </motion.p>

        <motion.div className="mt-8 flex flex-wrap gap-4 justify-center" custom={8} variants={textVariants}>
          <motion.a
            href="#why-hire"
            onClick={handleHireMeClick}
            className={cn(
              "inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm font-medium border hover:bg-accent hover:text-accent-foreground transition-colors",
              showHireMe ? "border-accent text-accent-foreground" : ""
            )}
            whileHover={{ scale: 1.05 }}
            variants={textVariants}
            custom={9}
          >
            {showHireMe ? 'Hide Details' : 'Why You Should Hire Me'}
          </motion.a>
        </motion.div>

        {showHireMe && (
          <motion.div
            ref={hireMeRef}
            className="mt-6 max-w-2xl mx-auto text-muted-foreground text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.p variants={textVariants} custom={10}>{hireMeText}</motion.p>
          </motion.div>
        )}
      </motion.div>
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            key="mouse-indicator"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="w-6 h-10 border-2 border-primary/70 rounded-full flex items-start justify-center p-1"><div className="w-1 h-2 bg-primary/70 rounded-full" /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
