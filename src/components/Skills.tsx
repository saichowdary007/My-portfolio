'use client';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface Skill {
  alt: string;
  src: string;
}

const skills: Skill[] = [
  // Programming & Backend
  { src: "https://skillicons.dev/icons?i=python", alt: "Python" },
  { src: "https://cdn.simpleicons.org/fastapi", alt: "FastAPI" },
  { src: "https://skillicons.dev/icons?i=sqlite", alt: "SQL" },

  // AI/ML & LLM Stack
  { src: "https://cdn.simpleicons.org/langchain", alt: "LangChain" },
  { src: "https://cdn.simpleicons.org/ollama", alt: "Ollama" },
  { src: "https://cdn.simpleicons.org/openai", alt: "Whisper STT" },
  { src: "https://cdn.simpleicons.org/google", alt: "Gemini" },

  // Frontend & Realtime
  { src: "https://skillicons.dev/icons?i=react", alt: "React" },
  { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
  { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },

  // DevOps & Cloud
  { src: "https://skillicons.dev/icons?i=docker", alt: "Docker" },
  { src: "https://skillicons.dev/icons?i=aws", alt: "AWS" },
  { src: "https://cdn.simpleicons.org/githubactions", alt: "GitHub Actions" },

  // Databases
  { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
  { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },

  // Tools
  { src: "https://cdn.simpleicons.org/git", alt: "Git" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg", alt: "Jupyter Notebook" },
  { src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code" },
  { src: "https://skillicons.dev/icons?i=pycharm", alt: "PyCharm" },
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
          <Image
            src={skill.src}
            alt={skill.alt}
            width={64}
            height={64}
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
    <section ref={sectionRef} className="mb-20 px-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-semibold mb-8 gradient-text"
        >
          Technical Skills
        </h2>
        
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