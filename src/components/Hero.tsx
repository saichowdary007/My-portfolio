"use client";

import { useState } from 'react';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Hero() {
  const [showHireMe, setShowHireMe] = useState(false);
  
  const hireMeText = "I'm a data-wrangling, SQL-savvy code-slinger who transforms chaotic datasets into scalable, cloud-crushing pipelines. With a knack for bug-busting and a love for optimization, I automate workflows, enhance business intelligence accuracy, and streamline ETL processing. My Python-punning, ETL-expert self builds interactive Power BI dashboards, develops predictive maintenance models, and optimizes marketing strategies through data-driven insights. The witty-warehousing, hire-me-hustler you need for data dazzle!";

  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHireMe(!showHireMe);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4">
      <div className="max-w-7xl mx-auto z-10 relative px-6 w-full">
        <h1 className="text-[4rem] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent">
          Sai Kumar Pakalapati
        </h1>
        <p className="mt-6 text-lg text-primary/70">
          Data Analyst | BI & Analytics Specialist
        </p>
        
        <div className="mt-4 flex items-center justify-center gap-6 text-2xl">
          <a href="mailto:saikpakalapati@gmail.com" className="text-primary transition-transform duration-300 transform hover:scale-125">
            <FaEnvelope />
          </a>
          <a href="https://github.com/saichowdary007" className="text-primary transition-transform duration-300 transform hover:scale-125">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/saipakalapati/" className="text-primary transition-transform duration-300 transform hover:scale-125">
            <SiLeetcode />
          </a>
          <a href="tel:+1-940-536-9375" className="text-primary transition-transform duration-300 transform hover:scale-125">
            <FaPhone />
          </a>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-muted-foreground">
          Data Analyst with 2+ years of experience in Python, SQL and Power BI, specializing in data extraction, visualization, and automation.
          Skilled in building interactive dashboards, optimizing ETL pipelines, and conducting statistical analysis to support business decision-making.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#why-hire"
            onClick={handleHireMeClick}
            className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm font-medium border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {showHireMe ? 'Hide Details' : 'Why You Should Hire Me'}
          </a>
        </div>

        {showHireMe && (
          <div className="mt-6 max-w-2xl mx-auto text-muted-foreground text-left animate-fade">
            <p>{hireMeText}</p>
          </div>
        )}
      </div>
    </section>
  );
}
