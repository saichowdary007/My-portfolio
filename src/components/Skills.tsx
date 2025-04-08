'use client';
import { motion } from 'framer-motion';

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

export default function Skills() {
  return (
    <section className="relative w-full h-[500px] bg-transparent overflow-hidden px-6 py-10">
      <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
      <div className="relative w-full h-full z-20">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.alt}
            className="w-16 h-16 rounded-full absolute bottom-40"
            initial={{ x: -100, y: 0 }}
            animate={{
              x: "100vw",
              y: Array.from({ length: 7 }, (_, i) =>
                i % 2 === 0 ? 0 : -120 - Math.floor(Math.random() * 60)
              ),
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.445, 0.05, 0.55, 0.95], // easeInOutSine
              delay: index * 0.2,
            }}
            title={skill.alt}
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
