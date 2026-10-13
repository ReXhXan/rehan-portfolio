// ─────────────────────────────────────────────
//  All personal content for the site lives here.
// ─────────────────────────────────────────────

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const PROFILE = {
  name: "Rehan Khan",
  firstName: "Rehan",
  initials: "RK",
  headline: "AI Systems Architect | Agentic Orchestration & MCP-driven Ecosystems | Quant-Optimized Intelligence",
  role: "AI Systems Architect",
  location: "Bhubaneswar, Odisha, India",
  email: "rehanrazzakhan123456@gmail.com",
  resume: "/Rehan_Khan_CV.pdf",
  avatar: "/photo/rehan.webp",
  socials: [
    { label: "GitHub", href: "https://github.com/ReXhXan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rehan-ab236b28a" },
    { label: "Email", href: "mailto:rehanrazzakhan123456@gmail.com" },
  ],
  bio: [
    "I'm *Rehan Khan*, a third-year (5th semester) B.Tech CSE (*AI/ML*) student at Centurion University of Technology and Management, based in *Bhubaneswar, Odisha*.",
    "I'm Co-Founder of *NAVANTA.IO*, and I build *AI agents*, *RAG systems* and *MCP-style tool registries* in Python.",
    "I'm currently exploring *Quantum Computing*, *Liquid Neural Networks*, *Edge AI* and *IoT*.",
  ],
};

export const SKILLS = [
  "Python", "FastAPI", "Pydantic", "Streamlit", "pytest",
  "RAG", "LLMs (OpenAI / Groq / Ollama)", "Embeddings", "ChromaDB",
  "AI Agents & Tool Calling", "MCP-style Tool Registries", "SQLite", "Docker", "Git",
];

export const INTERESTS = ["Quantum Computing", "Liquid Neural Networks (LNN)", "Edge AI", "IoT"];

export const EXPERIENCE = [
  { role: "Co-Founder", org: "NAVANTA.IO", period: "" },
];

export const EDUCATION = [
  {
    school: "Centurion University of Technology and Management",
    degree: "B.Tech, Computer Science & Engineering (AI/ML)",
    period: "Sep 2024 – Aug 2028",
    detail: "CGPA 8.87",
  },
  {
    school: "Kendriya Vidyalaya",
    degree: "Senior Secondary (PCMB)",
    period: "2020 – 2022",
    detail: "80.2%",
  },
];

export const ACHIEVEMENTS = ["Silver Medal, SOF Olympiad"];

export const ACTIVITIES = ["Coding Club", "AI/ML Student Chapter", "Design Club (UI/UX)", "Public Speaking Society"];

export const PROJECTS = [
  {
    id: "rag-docs-chat",
    title: "RAG Docs Chat",
    category: "Retrieval-Augmented Generation",
    summary: "Production-style chat-with-your-documents system with grounded answers and numbered citations.",
    description:
      "Upload PDFs, Word files, text or Markdown, then ask questions and get answers grounded in your documents with numbered citations (file, page and the exact chunk used). Embeddings, vector store and LLM are all pluggable through environment variables, and the full test suite runs offline with no API keys.",
    highlights: [
      "Page-aware ingestion of PDF, DOCX, TXT and MD with recursive chunking and overlap",
      "Local sentence-transformers or OpenAI embeddings; persistent ChromaDB or in-memory vector store",
      "Pluggable LLM: OpenAI, Groq, Ollama or an offline mock",
      "FastAPI backend (/ingest, /query, /documents, /health) and Streamlit chat UI",
      "Retrieval evaluation script (hit-rate@k, MRR, keyword recall), pytest suite, Docker + Compose",
    ],
    tech: ["Python", "FastAPI", "Streamlit", "ChromaDB", "sentence-transformers", "OpenAI / Groq / Ollama", "pytest", "Docker"],
  },
  {
    id: "smart-nfc-card",
    title: "Smart NFC Card",
    category: "AI-powered digital business card",
    summary: "Tap an NFC tag or scan a QR code to open a live profile with an AI-written bio and an \"Ask me\" chatbot.",
    description:
      "An NFC tag or QR code opens a live profile card: a short AI-written bio, skills and links, a one-tap vCard download, and an \"Ask me\" chatbot that answers visitors' questions using only what's in the profile. Every tap is logged for analytics.",
    highlights: [
      "Builds NFC Forum NDEF URI records (plus Type 2 TLV hex) and a PNG QR fallback",
      "AI bio and elevator pitch generation limited to profile facts",
      "Visitor chatbot with IDF-ranked profile facts fed to the LLM",
      "vCard 3.0 export and tap analytics by source, device and day",
      "FastAPI + SQLite, pluggable OpenAI / Groq / Ollama / mock LLM",
    ],
    tech: ["Python", "FastAPI", "SQLite", "NFC / NDEF", "QR", "LLMs"],
  },
  {
    id: "self-testing-code-assistant",
    title: "Self-Testing Code Assistant",
    category: "Coding agent",
    summary: "A coding agent that writes code and its own tests, runs them in a sandbox, and repairs itself until they pass.",
    description:
      "The assistant doesn't just write code: it writes the tests too, runs them in an isolated sandbox, and repairs its own code from the failures until the tests pass or it reaches an iteration limit.",
    highlights: [
      "Separate coder, tester and repairer roles",
      "Syntax checks with ast and code extraction from fenced replies",
      "Sandboxed pytest in a separate python -I process with timeout and CPU/memory/file-size rlimits",
      "Generate → test → run → repair loop with max_iterations",
      "CLI and optional FastAPI POST /solve endpoint",
    ],
    tech: ["Python", "pytest", "FastAPI", "LLMs", "Sandboxing"],
  },
  {
    id: "jarvis-agent",
    title: "Jarvis Personal AI Agent",
    category: "Tool-calling agent",
    summary: "Terminal-first personal assistant with an MCP-style tool registry, memory, reminders and optional voice.",
    description:
      "A personal assistant that calls tools to get things done: math, weather, notes, reminders, file search and system info. It remembers conversations across sessions and can be used by voice. Tools live in an MCP-style registry (name / description / inputSchema), so they can later be served over the Model Context Protocol.",
    highlights: [
      "MCP-style ToolRegistry with JSON-schema validation",
      "Tools: safe AST calculator, Open-Meteo weather, notes and reminders, allow-listed file search, system info",
      "Conversation memory in SQLite with a sliding window",
      "Optional voice I/O with SpeechRecognition and pyttsx3",
      "Pluggable OpenAI / Groq / Ollama / mock LLM",
    ],
    tech: ["Python", "AI Agents", "MCP-style tools", "SQLite", "LLMs"],
  },
].map((p) => ({ ...p, link: `https://github.com/ReXhXan/${p.id}` }));
