"use client";

import { motion } from "framer-motion";

const projects = [
  {
    "title": "DocuQuery AI",
    "year": "2025",
    "description": "An AI-powered system for querying uploaded documents (PDF, DOCX, CSV, etc.) using natural language. It comprises a Next.js and React frontend deployed on Vercel and a Python FastAPI backend deployed on Render. The system utilizes Retrieval-Augmented Generation (RAG) with LangChain, Google's Gemini API for language modeling, and FAISS for vector storage, with Docker for containerization.",
    "tech": ["Python", "FastAPI", "Gemini API", "LangChain", "Next.js", "React", "Docker", "Vercel", "Render"]
  },
  {
    "title": "AutoPR-SummarizeCode",
    "year": "2025",
    "description": "Developed an AI-powered GitHub workflow and dashboard that analyzes pull-request diffs, auto-generates concise summaries, and flags code-quality issues. A Next.js UI on Vercel connects to a Python FastAPI microservice on Render, orchestrated with Docker and GitHub Actions for seamless CI/CD.",
    "tech": ["Python", "FastAPI", "Gemini API", "Next.js", "Vercel", "Render", "GitHub Actions", "Docker"]
  },
  {
    title: "Personal AI Assistant",
    year: "2025",
    description: "Developed a full-stack AI assistant website leveraging Python and Google Gemini API for intelligent task handling, including chat, code, email, and translation. The frontend, built with Next.js, is deployed on Vercel, while the backend, using Python, is hosted on Render",
    tech: ["Python", "Next.js", "Vercel", "Render"]
  },
  {
    title: "Personal Portfolio Website",
    year: "2025",
    description: "Designed and developed a responsive portfolio website to showcase my skills, projects, and IT background. Deployed on Vercel for fast performance, highlighting my expertise in web development and digital design",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"]
  },
  {
    title: "Sales Performance Dashboard (Power BI & SQL)",
    year: "2022",
    description: "Reduced manual reporting efforts by 50% by building interactive real-time sales tracking dashboard with automated data updates via Excel/SQL Server integration",
    tech: ["Power BI", "SQL Server", "Excel"]
  },
  {
    title: "Customer Segmentation for E-commerce",
    year: "2021",
    description: "Increased targeted marketing conversions by 20% using K-Means clustering to analyze customer behavior and optimize engagement strategies",
    tech: ["Python", "Scikit-learn", "Pandas"]
  },
  {
    title: "Predictive Maintenance Model",
    year: "2020",
    description: "Saved operational costs by implementing proactive maintenance strategies using deep learning models on equipment sensor data",
    tech: ["Python", "TensorFlow", "Keras"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const tagVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Projects() {
  const projects = [
    {
      "title": "DocuQuery AI",
      "year": "2025",
      "description": "An AI-powered system for querying uploaded documents (PDF, DOCX, CSV, etc.) using natural language. It comprises a Next.js and React frontend deployed on Vercel and a Python FastAPI backend deployed on Render. The system utilizes Retrieval-Augmented Generation (RAG) with LangChain, Google's Gemini API for language modeling, and FAISS for vector storage, with Docker for containerization.",
      "tech": ["Python", "FastAPI", "Gemini API", "LangChain", "Next.js", "React", "Docker", "Vercel", "Render"]
    },
    {
      "title": "AutoPR-SummarizeCode",
      "year": "2025",
      "description": "Developed an AI-powered GitHub workflow and dashboard that analyzes pull-request diffs, auto-generates concise summaries, and flags code-quality issues. A Next.js UI on Vercel connects to a Python FastAPI microservice on Render, orchestrated with Docker and GitHub Actions for seamless CI/CD.",
      "tech": ["Python", "FastAPI", "Gemini API", "Next.js", "Vercel", "Render", "Docker"]
    },
    {
      title: "Personal AI Assistant",
      year: "2025",
      description: "Developed a full-stack AI assistant website leveraging Python and Google Gemini API for intelligent task handling, including chat, code, email, and translation. The frontend, built with Next.js, is deployed on Vercel, while the backend, using Python, is hosted on Render",
      tech: ["Python", "Next.js", "Vercel", "Render"]
    },
    {
      title: "Personal Portfolio Website",
      year: "2025",
      description: "Designed and developed a responsive portfolio website to showcase my skills, projects, and IT background. Deployed on Vercel for fast performance, highlighting my expertise in web development and digital design",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"]
    },
    {
      title: "Sales Performance Dashboard (Power BI & SQL)",
      year: "2022",
      description: "Reduced manual reporting efforts by 50% by building interactive real-time sales tracking dashboard with automated data updates via Excel/SQL Server integration",
      tech: ["Power BI", "SQL Server", "Excel"]
    },
    {
      title: "Customer Segmentation for E-commerce",
      year: "2021",
      description: "Increased targeted marketing conversions by 20% using K-Means clustering to analyze customer behavior and optimize engagement strategies",
      tech: ["Python", "Scikit-learn", "Pandas"]
    },
    {
      title: "Predictive Maintenance Model",
      year: "2020",
      description: "Saved operational costs by implementing proactive maintenance strategies using deep learning models on equipment sensor data",
      tech: ["Python", "TensorFlow", "Keras"]
    }
  ];

  return (
    <section className="mb-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 gradient-text">Key Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card p-6 md:[&:not(:nth-child(2n+1))]:border-l md:[&:not(:nth-child(2n+1))]:ml-[-1px] lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:ml-[-1px] border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-sm text-primary/70">{project.year}</span>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-secondary/20 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
