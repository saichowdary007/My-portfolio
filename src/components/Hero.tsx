"use client";

import { useState } from 'react';

export default function Hero() {
  const [showHireMe, setShowHireMe] = useState(false);
  
  const hireMeText = "I'm a data-wrangling, SQL-savvy code-slinger who transforms chaotic datasets into scalable, cloud-crushing pipelines. With a knack for bug-busting and a spark for Spark, I optimize with humor. My Python-punning, ETL-expert self delivers insights fast, making me the witty-warehousing, hire-me-hustler your team needs for data dazzle!";

  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHireMe(!showHireMe);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4">
      <div className="max-w-7xl mx-auto z-10 relative px-6 w-full">
        <h1 className="text-[4rem] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent">
          Sai Pakalapati
        </h1>
        <p className="mt-6 text-lg text-primary/70">
          Data Engineer | Cloud Solutions Specialist
        </p>
        
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href="tel:+1-972-695-9445" className="hover:text-primary">+1-972-695-9445</a>
          <span>•</span>
          <a href="mailto:pakalapatisaikumarchowdary5@gmail.com" className="hover:text-primary">
            pakalapatisaikumarchowdary5@gmail.com
          </a>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-muted-foreground">
          Data Engineer with over 8 years of experience designing and implementing robust data pipelines and warehousing solutions.
          Expertise in cloud platforms, big data technologies, and data visualization tools. Proven ability to enhance data quality
          and streamline workflows across complex systems.
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
