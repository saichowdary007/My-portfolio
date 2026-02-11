'use client'
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const scrollX = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  const experiences = [
    {
      company: "Marsh",
      role: "AI Engineer",
      duration: "Nov 2025 – Present",
      location: "Phoenix, AZ",
      achievements: [
        "Building RAG (Retrieval-Augmented Generation) application for internal use, empowering fast and accurate access to company knowledge.",
        "Created robust knowledge base from structured and unstructured data sources, improving team productivity and information retrieval.",
        "Designed and implemented NLP-to-SQL pipeline, enabling conversational queries for internal databases.",
        "Developed AI system for generating real-time financial summaries, enhancing business decision-making and reporting.",
        "Integrated advanced NLP models for automated document analysis and insights extraction across financial reports.",
        "Collaborating with cross-department stakeholders to align AI solutions with business objectives, boosting innovation and efficiency."
      ]
    },
    {
      company: "Verzion",
      role: "AI Engineer",
      duration: "Oct 2025 – Nov 2025",
      location: "Irving, TX",
      achievements: [
        "Created agentic playbooks for interns to reference and build agentic workflows, streamlining onboarding and implementation.",
        "Deployed internal agents for agent harness, improving automation of routine business tasks and data processing.",
        "Designed modular framework for agentic workflows, enabling rapid prototyping and team collaboration.",
        "Automated recurring project management tasks with custom-built AI agents, reducing manual effort across teams.",
        "Led workshops to enable engineering interns in building and deploying agentic systems quickly and effectively.",
        "Developed monitoring tool to track agent performance and workflow success rates, optimizing internal operations."
      ]
    },
    {
      company: "Voxglobaltech",
      role: "Gen AI Engineer",
      duration: "Jul 2025 – Oct 2025",
      location: "Dallas, TX",
      achievements: [
        "Built and maintained the open-source project Question Bank Generator, architecting a scalable pipeline for generating and validating 50,000+ MCQs using local LLMs via Ollama.",
        "Developed an end-to-end ingestion and processing workflow leveraging AWS S3 for PDF intake, semantic deduplication for uniqueness, and MongoDB for structured storage.",
        "Implemented an advanced validation pipeline using gpt-oss-20b to ensure factual accuracy, boosting correctness to >99%.",
        "Containerized the system using Docker and deployed services with FastAPI, ensuring scalability, maintainability, and cost efficiency.",
        "Led cross-functional efforts to integrate the question-bank system into LearnKidz Academy's platform, supporting seamless UI consumption through a React frontend."
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