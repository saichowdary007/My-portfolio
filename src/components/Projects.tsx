"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Question Bank Generator",
    year: "2025",
    description:
      "Engineered a cost-effective, end-to-end pipeline to process PDFs from S3, generate MCQs using local LLMs (Ollama) to eliminate API costs, and serve them via a React UI. Added semantic deduplication and a validation system using gpt-oss-20b for >99% factual accuracy.",
    tech: ["FastAPI", "Python", "Docker", "Ollama", "AWS S3", "MongoDB", "React"]
  },
  {
    title: "DocuQuery-AI",
    year: "2025",
    description:
      "Built a full-stack conversational RAG engine for private document search and summarization. Unified ingestion with smart chunking and FAISS-based retrieval with LangChain.",
    tech: ["FastAPI", "LangChain", "FAISS", "Next.js", "Docker"]
  },
  {
    title: "Real-Time Voice Agent",
    year: "2025",
    description:
      "Developed a real-time voice assistant using Whisper for STT and Gemini for reasoning, achieving sub-250ms response latency with async orchestration of STT, LLM, and TTS tasks.",
    tech: ["FastAPI", "WebSockets", "Docker", "Whisper", "Gemini"]
  },
  {
    title: "AutoPR-SummarizeCode",
    year: "2025",
    description:
      "GitHub App agent that parses PR diffs, runs LLM prompts, and posts structured summaries, cutting review time by ~30%.",
    tech: ["FastAPI", "PyGithub", "Next.js", "Docker", "GitHub Actions"]
  },
  {
    title: "Personal AI Assistant Dashboard",
    year: "2025",
    description:
      "Next.js + FastAPI app with modules for Chat, Summarization, Email, Code Helper, and Translation. Real-time chat/translation via WebSockets.",
    tech: ["Next.js", "Tailwind CSS", "FastAPI", "WebSockets"]
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
      title: "Question Bank Generator",
      year: "2025",
      description:
        "Engineered a cost-effective, end-to-end pipeline to process PDFs from S3, generate MCQs using local LLMs (Ollama), added semantic deduplication, and validated with gpt-oss-20b to reach >99% accuracy. Multi-tenant input routing with pre-processing (OCR + page splitting) and retry-safe workers. Exposes REST endpoints for bulk uploads and a React UI for review/approval.",
      tech: ["FastAPI", "Python", "Docker", "Ollama", "AWS S3", "MongoDB", "React"]
    },
    {
      title: "DocuQuery-AI",
      year: "2025",
      description:
        "Conversational RAG engine for private document search and summarization with unified ingestion and FAISS-based retrieval. Implements smart chunking, metadata filters, and response grounding with source citations. Role-based access with per-namespace indices and low-latency caches.",
      tech: ["FastAPI", "LangChain", "FAISS", "Next.js", "Docker"]
    },
    {
      title: "Real-Time Voice Agent",
      year: "2025",
      description:
        "Real-time voice assistant using Whisper for STT and Gemini for reasoning with sub-250ms latency via async orchestration. Streaming transcription with partial results, interruption handling, and TTS fallback pathways. Connection health checks and auto-reconnect for stable sessions.",
      tech: ["FastAPI", "WebSockets", "Docker", "Whisper", "Gemini"]
    },
    {
      title: "AutoPR-SummarizeCode",
      year: "2025",
      description:
        "GitHub App agent that parses PR diffs, runs LLM prompts, and posts structured summaries to reduce reviewer time by ~30%. Adds risk level, breaking-change flags, and test-impact notes. Supports label automation and configurable prompt presets per repo.",
      tech: ["FastAPI", "PyGithub", "Next.js", "Docker", "GitHub Actions"]
    },
    {
      title: "Personal AI Assistant Dashboard",
      year: "2025",
      description:
        "Web-based AI productivity assistant with modules for Chat, Summarization, Email, Code Helper, and Translation using realtime WebSockets. Modular plugin architecture, persistent threads, and exportable transcripts. Rate-limit safe queues with optimistic UI updates.",
      tech: ["Next.js", "Tailwind CSS", "FastAPI", "WebSockets"]
    }
  ];

  return (
    <section id="projects" className="mb-20 overflow-hidden">
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
