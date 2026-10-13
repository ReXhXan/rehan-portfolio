// ABOUT SECTION — content for Rehan Khan
import {
  SiPython, SiFastapi, SiPydantic, SiStreamlit, SiPytest, SiSqlite, SiDocker, SiGit,
  SiGithub, SiOpenai, SiOllama, SiHuggingface, SiNumpy, SiPandas, SiScikitlearn, SiLinux,
  SiFigma, SiJupyter,
} from "react-icons/si";
import { TbDatabase, TbRobot, TbPlugConnected, TbVectorTriangle, TbBrain, TbAtom, TbCpu, TbWifi } from "react-icons/tb";
import { PROFILE, EXPERIENCE as EXP, EDUCATION } from "@/data/profile";

export const SECTION = { label: "About Me" };

export const HEADING = { line1: "Building", line2: "intelligent", line3: "systems." };

// *word* = highlighted/bold in BlurText
export const BIO = [
  ...PROFILE.bio,
  "My projects include a production-style *RAG* chat-with-your-documents system, an *AI-powered NFC business card*, a *self-testing coding agent* that writes and repairs its own code, and *Jarvis*, a personal agent built around an *MCP-style tool registry*.",
  "I care about systems that are *grounded*, *testable* and *pluggable*: every project runs offline with mock LLMs and ships with a full *pytest* suite, while swapping in *OpenAI*, *Groq* or *Ollama* through configuration.",
];

export const RESUME_URL = PROFILE.resume;

export const TECH = [
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Pydantic", icon: SiPydantic },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "pytest", icon: SiPytest },
  { name: "RAG", icon: TbVectorTriangle },
  { name: "LLMs (OpenAI)", icon: SiOpenai },
  { name: "Ollama", icon: SiOllama },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "ChromaDB", icon: TbDatabase },
  { name: "AI Agents", icon: TbRobot },
  { name: "MCP-style Tools", icon: TbPlugConnected },
  { name: "SQLite", icon: SiSqlite },
  { name: "NumPy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "Jupyter", icon: SiJupyter },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Linux", icon: SiLinux },
];

// "Creative" slot → interests & design
export const CREATIVE = [
  { name: "Quantum Computing", icon: TbAtom },
  { name: "Liquid Neural Networks", icon: TbBrain },
  { name: "Edge AI", icon: TbCpu },
  { name: "IoT", icon: TbWifi },
  { name: "UI/UX (Figma)", icon: SiFigma },
];

export const EXPERIENCE = [
  ...EXP.map((e) => ({ role: `${e.role}, ${e.org}`, period: e.period || "Present" })),
  ...EDUCATION.map((e) => ({ role: `${e.degree} — ${e.school} (${e.detail})`, period: e.period })),
];
