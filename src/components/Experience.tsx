"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const scrollX = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  const experiences = [
    {
      company: "Voxglobaltech",
      role: "Gen AI Engineer",
      duration: "Jul 2025 – Present",
      location: "Dallas, TX",
      achievements: [
        "Built and maintained the open-source project Question Bank Generator, architecting a scalable pipeline for generating and validating 50,000+ MCQs using local LLMs via Ollama.",
        "Developed an end-to-end ingestion and processing workflow leveraging AWS S3 for PDF intake, semantic deduplication for uniqueness, and MongoDB for structured storage.",
        "Implemented an advanced validation pipeline using gpt-oss-20b to ensure factual accuracy, boosting correctness to >99%.",
        "Containerized the system using Docker and deployed services with FastAPI, ensuring scalability, maintainability, and cost efficiency.",
        "Led cross-functional efforts to integrate the question-bank system into LearnKidz Academy’s platform, supporting seamless UI consumption through a React frontend."
      ]
    },
    {
      company: "Vensolutions",
      role: "Python Developer",
      duration: "Jun 2024 – Jun 2025",
      location: "Dallas, TX",
      achievements: [
        "Developed Python-based internal tools and microservices with limited AI integration, focusing on productivity and workflow automation.",
        "Designed and implemented an internal Document RAG system for knowledge retrieval across company documentation, improving employee efficiency.",
        "Built a personal AI assistant prototype using FastAPI and LangChain concepts to support internal project management and task automation.",
        "Developed and deployed multiple FastAPI-based internal services to handle company-specific workflows and data pipelines, ensuring high performance and maintainability.",
        "Led the creation of the open-source project DocuQuery-AI, a conversational RAG engine enabling efficient private document search and summarization.",
        "Collaborated with cross-team stakeholders to align AI services with business objectives, improving internal document accessibility and productivity."
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="mb-20 px-6 w-full"
      style={{ x: scrollX }}
    >
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="card border border-gray-500/50 rounded-lg p-6 hover:border-primary transition-colors"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-primary/70">{exp.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">{exp.duration}</p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="text-muted-foreground">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}

