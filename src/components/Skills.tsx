'use client';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Skill {
  alt: string;
  src: string;
}

const skills: Skill[] = [
  { src: "https://cdn.simpleicons.org/numpy", alt: "NumPy" },
  { src: "https://cdn.simpleicons.org/pandas", alt: "Pandas" },
  { src: "https://cdn.simpleicons.org/tensorflow", alt: "TensorFlow" },
  { src: "https://cdn.simpleicons.org/scikitlearn", alt: "Scikit-learn" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", alt: "Matplotlib" },
  { src: "https://skillicons.dev/icons?i=python", alt: "Python" },
  { src: "https://skillicons.dev/icons?i=postgresql", alt: "SQL" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", alt: "Power BI" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png", alt: "Tableau" },
  { src: "https://cdn.simpleicons.org/r/276DC3", alt: "ggplot2" },
  { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
  { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", alt: "Oracle" },
  { src: "https://cdn.simpleicons.org/amazonredshift/DA1F29", alt: "Redshift" },
  { src: "https://cdn.simpleicons.org/apachecassandra/1287B1", alt: "Cassandra" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg", alt: "Jupyter" },
  { src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code" },
  { src: "https://skillicons.dev/icons?i=pycharm", alt: "PyCharm" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg", alt: "R Studio" },
];

// Define the type for itemVariants explicitly
interface ItemVariants {
  [key: string]: {
    y: number;
    opacity: number;
    transition?: {
      type: string;
      stiffness: number;
      damping: number;
    };
  };
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.01 }
    );

    const currentRef = sectionRef.current;
    observer.observe(currentRef);

    // Check immediately
    if ((currentRef as HTMLElement).getBoundingClientRect().top < window.innerHeight) {
      setHasAnimated(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: ItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  function SkillItem({ skill, index, scrollYProgress }: { 
    skill: Skill; 
    index: number; 
    scrollYProgress: MotionValue<number>; 
  }) {
    const row = Math.floor(index / 6);
    const col = index % 6;
    const yOffset = useTransform(scrollYProgress, [0, 1], [row * 8, row * -8]);
    const xOffset = useTransform(scrollYProgress, [0, 1], [col * 4, col * -4]);
    
    return (
      <motion.div
        key={skill.alt}
        className="flex flex-col items-center"
        style={{ y: yOffset, x: xOffset }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gray-800/60 flex items-center justify-center p-3 shadow-lg"
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={skill.src}
            alt={skill.alt}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <span className="text-xs text-gray-300 mt-2 text-center">
          {skill.alt}
        </span>
      </motion.div>
    );
  }

  return (
    <section ref={sectionRef} className="relative w-full py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-white mb-10 text-left"
          style={{ y: titleY }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillItem 
              key={skill.alt} 
              skill={skill} 
              index={index} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};