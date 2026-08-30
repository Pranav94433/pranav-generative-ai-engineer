import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {
  BrainCircuit, Download, ArrowRight, Mail,
  Menu, X, Search, Bot, Code2, Database, BarChart3, Sparkles,
  Layers3, ChevronDown, ExternalLink, Briefcase,
  MessageCircleMore, ChevronLeft, ChevronRight
} from "lucide-react";
import "./index.css";

const github = "https://github.com/pranav94433";
const careerAssistant = "https://ai-career-assistant-y6vb8q2nrpcquqgibsqq3l.streamlit.app/";
const email = "pranavkumar94433@gmail.com";
const whatsapp = "https://wa.me/919360758807";

const tech = [
  ["Python", Code2],["SQL",Database],["LangChain",Layers3],
  ["Pandas",BarChart3],["Streamlit",Sparkles],["GitHub",Code2]
];

const resumeProfile = {
  name: "Pranav Kumar .S",
  title: "Generative AI Engineer",
  about: "I build practical AI products using LLMs, RAG, prompt engineering, Python, and AI agents for real-world business workflows.",
  services: [
    "AI chatbots",
    "RAG and document Q&A systems",
    "Prompt engineering",
    "AI automation",
    "Python-powered AI apps",
    "Freelance AI product development"
  ],
  stack: ["Python", "SQL", "LLMs", "RAG", "Prompt Engineering", "AI Agents", "Streamlit", "Pandas"],
  email,
  whatsapp,
  github,
  resume: "/Pranav-Kumar-Resume.pdf"
};

const resumeText = "/pranav-resume-knowledge.txt";

const resumeKnowledgeBase = [
  {
    keywords: ["who are you", "about you", "profile", "introduce", "yourself", "experience", "tell me about you", "what do you do"],
    answer: `${resumeProfile.about} I’m ${resumeProfile.name}, a ${resumeProfile.title} focused on practical AI product building and real-world automation.`
  },
  {
    keywords: ["service", "services", "help", "build", "freelance", "what can you do", "work", "can you help", "what do you build"],
    answer: `I help businesses and startups with ${resumeProfile.services.join(", ")}. I also build AI-powered web apps and automation workflows for real use cases.`
  },
  {
    keywords: ["prompt", "prompt engineering", "prompting", "instruct"],
    answer: "Prompt engineering is one of my strongest areas. I design prompts, optimize workflows, and improve output quality for LLM-powered applications and business use cases."
  },
  {
    keywords: ["rag", "retrieval", "document", "knowledge", "qna", "document qa", "grounded answer"],
    answer: "Yes — I work on RAG and document Q&A systems that ground answers in uploaded documents and internal knowledge so the output is more accurate and reliable."
  },
  {
    keywords: ["python", "llm", "agent", "stack", "tech", "technology", "tools", "frameworks", "ai stack"],
    answer: `My core stack includes ${resumeProfile.stack.join(", ")}. I use this combination to build AI products, automation flows, and practical business tools.`
  },
  {
    keywords: ["project", "projects", "portfolio", "case study", "work samples", "demo"],
    answer: "My project work includes AI career assistants, data analytics chatbots, and document-based RAG systems built for real-world AI use cases."
  },
  {
    keywords: ["contact", "email", "gmail", "reach", "phone", "whatsapp", "call me", "message me", "how to contact"],
    answer: `You can contact me by email at ${resumeProfile.email} or WhatsApp at ${resumeProfile.whatsapp.replace("https://wa.me/", "+")}.`
  },
  {
    keywords: ["resume", "cv", "download", "portfolio resume"],
    answer: `You can download my resume here: ${resumeProfile.resume}.`
  },
  {
    keywords: ["education", "btech", "it", "college", "degree"],
    answer: "I am a B.Tech Information Technology graduate with a strong interest in Generative AI, practical AI engineering, and intelligent product development."
  },
  {
    keywords: ["ai chatbot", "chatbot", "chat app", "assistant"],
    answer: "I build AI chatbot experiences and conversational interfaces for websites, internal tools, and business workflows using LLMs and structured logic."
  },
  {
    keywords: ["automation", "automate", "workflow", "process automation"],
    answer: "I also work on AI automation and business workflow optimization where repetitive tasks are handled with smart logic and AI-driven decision support."
  },
  {
    keywords: ["job", "career", "hire", "opportunity", "open to work", "freelance ai work"],
    answer: "I’m available for freelance AI work and open to meaningful AI engineering opportunities, collaborations, and product-focused projects."
  },
  {
    keywords: ["where are you from", "location", "city"],
    answer: "I’m a Generative AI Engineer focused on building practical AI projects and freelance AI solutions, and I’m open to remote or project-based work."
  }
];

const projectCards = [
  {
    title: "AI Career Assistant",
    category: "AI Product • Career Guidance",
    summary: "A resume-aware AI assistant designed to help users explore job roles, improve their profile, and receive guidance through conversational prompts.",
    challenge: "Job seekers needed a more personal, actionable way to understand career paths beyond static job portals.",
    solution: "I built a Streamlit-based system that combines resume context, LLM reasoning, and structured career recommendations into a polished experience.",
    outcome: "Improved user guidance quality by making recommendations personalized, adaptive, and easy to explore through natural-language interaction.",
    tags: ["LLM", "RAG", "Python", "Streamlit", "Prompt Engineering"],
    images: [
      "/WhatsApp Image 2026-08-30 at 05.54.09.jpeg"
    ]
  },
  {
    title: "Data Analytics Chatbot",
    category: "Data Intelligence • Conversational BI",
    summary: "A chatbot experience for CSV and Excel data that turns raw business information into conversational, actionable insight.",
    challenge: "Non-technical users often struggle to interpret spreadsheets and dashboards without relying on analysts or complex tools.",
    solution: "I created a conversational analytics workflow that lets users ask questions in natural language and receive readable, business-oriented answers from uploaded datasets.",
    outcome: "This makes data exploration more accessible and reduces friction in early-stage business analysis tasks.",
    tags: ["Python", "Pandas", "SQL", "Analytics", "AI Chatbot"],
    images: ["/project-analytics-chatbot-1.png", "/project-analytics-chatbot-2.png", "/project-analytics-chatbot-3.png"]
  },
  {
    title: "Document Q&A / RAG System",
    category: "Enterprise AI • Knowledge Retrieval",
    summary: "A retrieval-based AI workflow for grounded answers from uploaded files, documents, and internal knowledge bases.",
    challenge: "Businesses need reliable answers from documents without exposing sensitive content or relying on generic model output.",
    solution: "I designed a document-grounded system that retrieves relevant context and uses an LLM to respond with source-aware, grounded answers.",
    outcome: "This is a practical foundation for document search, internal knowledge assistants, and domain-specific AI tools.",
    tags: ["RAG", "LLM", "Knowledge Base", "Python", "AI Agents"],
    images: ["/project-rag-system-1.png", "/project-rag-system-2.png", "/project-rag-system-3.png"]
  }
];

function App(){
  const [open,setOpen]=useState(false);
  const [page,setPage]=useState("home");
  const [chatOpen,setChatOpen]=useState(false);
  const links=[["Home","home"],["About","about"],["Skills","skills"],["Projects","projects"],["Architecture","architecture"],["Contact","contact"]];

  const handleScrollTo = (target) => {
    setPage("home");
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 30);
  };

  if (page === "projects") {
    return <ProjectsPage onBack={() => setPage("home")} />;
  }

  return <div className="min-h-screen bg-[#02040b] text-white">
    <div className="fixed inset-0 -z-10 page-grid opacity-80"/>
    <div className="fixed inset-0 -z-10 hero-glow"/>

    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#02040b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-[92%] max-w-[1280px] items-center justify-between">
        <button onClick={() => handleScrollTo("home")} className="text-left text-[25px] font-extrabold tracking-tight">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 text-base text-violet-200">PK</span>
          <span className="ml-3 align-middle">Pranav Kumar<span className="text-violet-300">.S</span></span>
        </button>
        <nav className="links flex items-center gap-8">
          {links.map(([n,h],i)=><button key={n} onClick={() => h === "projects" ? setPage("projects") : handleScrollTo(h)} className={i===0?"text-violet-400": "text-slate-300 hover:text-white"}>{n}</button>)}
        </nav>
        <a className="desktop-resume inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200 shadow-[0_0_18px_rgba(139,92,246,0.12)] transition-all duration-200 hover:border-violet-300/50 hover:bg-violet-500/15" href="/Pranav-Kumar-Resume.pdf" download>
          <Download size={16}/> Hire Me
        </a>
        <button className="menu hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
      {open&&<div className="border-t border-white/5 bg-[#040716] px-6 py-4">
        {links.map(([n,h])=><button onClick={() => h === "projects" ? setPage("projects") : handleScrollTo(h)} className="block w-full py-3 text-left text-slate-300" key={n}>{n}</button>)}
      </div>}
    </header>

    <main id="home">
      <section className="hero mx-auto grid min-h-screen w-[92%] max-w-[1280px] grid-cols-2 items-center gap-8 pb-14 pt-[120px]">
        <div className="fade-up">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-violet-400/25 bg-violet-500/5 px-5 py-3 text-sm font-medium text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.12)]">
            <Sparkles size={17}/> Generative AI Engineer • Available for freelance AI work
          </div>

          <h1 className="text-[clamp(50px,6.4vw,88px)] font-black leading-[.95] tracking-[-4px]">
            Pranav <span className="gradient-text">Kumar</span>
          </h1>

          <h2 className="mt-5 text-[clamp(27px,3vw,42px)] font-extrabold leading-tight">
            <span className="text-blue-400">Generative AI Engineer</span>
            <span className="mt-2 block text-violet-300">Prompt Engineering Expert</span>
          </h2>

          <p className="desc mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Building intelligent, scalable AI products using <b className="text-slate-100">LLMs, RAG, Prompt Engineering, and AI Agents</b> to solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['LLMs', 'RAG', 'AI Agents', 'Prompt Engineering', 'Python'].map((item) => (
              <span key={item} className="hero-chip">{item}</span>
            ))}
          </div>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
            <div className="hero-stat">
              <span className="hero-stat-value">4+</span>
              <span className="hero-stat-label">AI Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">LLM</span>
              <span className="hero-stat-label">Focused</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">RAG</span>
              <span className="hero-stat-label">Powered</span>
            </div>
          </div>

          <div className="buttons mt-9 flex flex-wrap gap-4">
            <button onClick={() => setPage("projects")} className="gradient-btn inline-flex items-center gap-3 rounded-xl px-7 py-4 font-bold transition-transform duration-200 hover:scale-[1.02]">View My Projects <ArrowRight size={18}/></button>
            <a href="/Pranav-Kumar-Resume.pdf" download className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[.02] px-7 py-4 font-semibold text-slate-100 hover:bg-white/[.06] transition-colors duration-200"><Download size={18}/> Download Resume</a>
          </div>

          <div className="socials mt-10 flex flex-wrap gap-4">
            <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.025] px-5 py-3 text-slate-200 hover:border-violet-400/30 hover:text-white"><Code2 size={19}/> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.025] px-5 py-3 text-slate-200 hover:border-violet-400/30 hover:text-white"><Briefcase size={19}/> LinkedIn</a>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.025] px-5 py-3 text-slate-200 hover:border-violet-400/30 hover:text-white"><Mail size={19}/> Email</a>
          </div>
        </div>

        <div className="ai-stage float">
          <div className="ai-ring r1"/><div className="ai-ring r2"/><div className="ai-ring r3"/>
          <div className="node n-top"><small>Generative AI</small><strong>LLMs</strong></div>
          <div className="node n-left"><Search className="mx-auto mb-1 text-violet-300" size={22}/><strong>RAG Systems</strong></div>
          <div className="node n-right"><Bot className="mx-auto mb-1 text-violet-300" size={22}/><strong>AI Agents</strong></div>
          <div className="node n-bottom"><Code2 className="mx-auto mb-1 text-violet-300" size={22}/><strong>Prompt Engineering</strong></div>
          <div className="brain pulse"><div className="brain-core"/></div>
          <div className="platform"/>
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-[1280px] pb-10">
        <div className="tech-strip rounded-2xl p-5 md:p-6">
          <div className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-violet-400">Tech Stack</div>
          <div className="tech-grid grid grid-cols-6 gap-2 md:gap-5">
            {tech.map(([name,Icon])=><div key={name} className="flex flex-col items-center gap-2 border-r border-white/5 py-2 last:border-0">
              <Icon className="text-violet-400" size={27}/><span className="text-sm text-slate-300">{name}</span>
            </div>)}
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center gap-2 text-sm text-violet-300"><span className="rounded-full border border-white/20 px-2 py-1">↓</span> Scroll Down <ChevronDown size={16}/></div>
      </section>
    </main>

    <section id="about" className="border-t border-white/5 bg-[#050816] py-16">
      <div className="mx-auto w-[92%] max-w-[1100px]">
        <Section eyebrow="ABOUT ME" title="Engineering AI that solves real problems."/>
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-base leading-7 text-slate-300 md:text-lg">
            <p>I’m a B.Tech Information Technology graduate and aspiring Generative AI Engineer passionate about building practical AI applications.</p>
            <p>My interests include Generative AI, LLMs, Prompt Engineering, RAG, AI Agents, Python, Data Analytics, and AI-powered automation.</p>
            <p>I’ve worked on projects involving AI career assistance, document analysis, chatbot applications, and intelligent automation while improving my skills in AI development and deployment.</p>
            <p>I’m also open to freelance work and helping startups and businesses build AI-driven solutions, automation workflows, and modern web applications.</p>
          </div>
          <div className="stat-grid grid grid-cols-2 gap-4">
            <Stat n="LLM" t="AI Applications" icon={<BrainCircuit size={22} />} />
            <Stat n="RAG" t="Knowledge Retrieval" icon={<Database size={22} />} />
            <Stat n="Prompt" t="Engineering" icon={<Sparkles size={22} />} />
            <Stat n="Agents" t="AI Automation" icon={<Bot size={22} />} />
            <Stat n="Python" t="Core Development" icon={<Code2 size={22} />} />
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto w-[92%] max-w-[1280px]">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          <Sparkles size={16}/> Available for freelance work
        </div>
        <Section eyebrow="WHAT I CAN BUILD" title="AI solutions for businesses, startups, and modern digital products."/>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["AI Chatbots", "Custom LLM-powered chatbots for websites and businesses"],
            ["Document AI", "PDF/document Q&A and knowledge-base systems"],
            ["RAG Applications", "AI systems that answer questions from your own documents and data"],
            ["Data Analytics", "CSV/Excel analysis, dashboards, and visualizations"],
            ["Prompt Engineering", "Optimized prompts and AI workflows that improve model performance and output quality"],
            ["AI Automation", "Automate repetitive business tasks using AI"],
            ["AI Web Applications", "React/Streamlit/Gradio-based AI applications"],
            ["API Integration", "Connect AI models and external APIs to applications"],
            ["Freelance AI Solutions", "Helping individuals and small businesses build practical AI products"]
          ].map(([title, desc]) => (
            <div key={title} className={`rounded-2xl border p-5 hover:border-violet-400/30 hover:bg-white/[.04] ${title === "Prompt Engineering" ? "border-violet-400/40 bg-violet-500/[.08]" : "border-white/10 bg-white/[.025]"}`}>
              <div className="mb-4 text-violet-400"><Sparkles size={22}/></div>
              <b className="text-lg">{title}</b>
              <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="skills" className="py-24">
      <div className="mx-auto w-[92%] max-w-[1280px]">
        <Section eyebrow="TECHNICAL SKILLS" title="The stack behind my AI projects."/>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Python","SQL","LLMs","RAG","Prompt Engineering","AI Agents","LangChain","Pandas","Streamlit","Git & GitHub","Vector Databases","Data Visualization"].map((s,i)=>
            <div key={s} className="rounded-2xl border border-white/10 bg-white/[.025] p-5 hover:border-violet-400/30 hover:bg-white/[.04]">
              <div className="mb-5 text-violet-400">{i%3===0?<BrainCircuit/>:i%3===1?<Database/>:<Code2/>}</div>
              <b>{s}</b><p className="mt-2 text-xs text-slate-500">Applied in practical projects</p>
            </div>)}
        </div>
      </div>
    </section>

    <section id="architecture" className="py-24">
      <div className="mx-auto w-[92%] max-w-[1280px]">
        <Section eyebrow="AI ARCHITECTURE" title="From user query to intelligent response."/>
        <div className="neon-border rounded-3xl border border-white/10 bg-white/[.025] p-6 md:p-10">
          <div className="grid gap-4 md:grid-cols-5">
            {[['01','User Query',Search],['02','Orchestration',Bot],['03','Knowledge / RAG',Database],['04','LLM Reasoning',BrainCircuit],['05','Final Response',SendIcon]].map(([n,t,I])=><div key={n} className="rounded-2xl border border-white/10 bg-[#030611] p-5">
              <span className="text-xs text-cyan-300">{n}</span><I className="my-6 text-violet-400"/><b>{t}</b>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="border-t border-white/5 bg-[#050816] py-24 text-center">
      <div className="mx-auto w-[92%] max-w-[800px]">
        <Mail className="mx-auto mb-5 text-cyan-300" size={38}/>
        <p className="text-sm font-bold tracking-[.25em] text-cyan-300">LET'S CONNECT</p>
        <h2 className="mt-4 text-4xl font-black sm:text-5xl">Let’s build something intelligent.</h2>
        <p className="mx-auto mt-5 text-slate-400">Open to Generative AI engineering opportunities, collaborations and AI projects.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${email}`} className="gradient-btn inline-flex items-center gap-2 rounded-xl px-7 py-4 font-bold"><Mail size={18}/> Email Me</a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-7 py-4 font-bold text-emerald-300 hover:bg-emerald-500/20"><MessageCircleMore size={18}/> WhatsApp</a>
        </div>
      </div>
    </section>

    <button
      onClick={() => setChatOpen((prev) => !prev)}
      className="chatbot-float fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-violet-300/40 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35),_rgba(30,41,59,0.92)_55%,_rgba(15,23,42,1)_100%)] text-white shadow-[0_10px_30px_rgba(168,85,247,0.22),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_14px_34px_rgba(168,85,247,0.28),0_0_0_1px_rgba(255,255,255,0.08)]"
      aria-label="Open chatbot"
    >
      <Bot size={24} className="drop-shadow-[0_0_12px_rgba(140,92,246,0.8)]" />
    </button>

    {chatOpen && <div className="fixed bottom-24 right-6 z-50 w-[min(92vw,340px)] rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
      <div className="mb-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2">
        <div>
          <p className="text-[9px] font-bold tracking-[.24em] text-cyan-300">RESUME BOT</p>
          <h3 className="text-sm font-semibold text-white">Ask Pranav</h3>
        </div>
        <button onClick={() => setChatOpen(false)} className="rounded-full border border-white/10 bg-white/[.04] p-1.5 text-xs text-slate-300 transition-colors hover:text-white">X</button>
      </div>
      <ChatbotWidget compact />
    </div>}

    <footer className="border-t border-white/5 py-7">
      <div className="mx-auto flex w-[92%] max-w-[1280px] flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Pranav Kumar • Generative AI Engineer</p>
        <a href={github} target="_blank" rel="noreferrer" className="hover:text-white">github.com/pranav94433</a>
      </div>
    </footer>
  </div>
}

function ProjectsPage({ onBack }){
  return <div className="min-h-screen bg-[#02040b] text-white">
    <div className="fixed inset-0 -z-10 page-grid opacity-80"/>
    <div className="fixed inset-0 -z-10 hero-glow"/>

    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#02040b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-[92%] max-w-[1280px] items-center justify-between">
        <button onClick={onBack} className="text-left text-[25px] font-extrabold tracking-tight">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 text-base text-violet-200">PK</span>
          <span className="ml-3 align-middle">Pranav Kumar<span className="text-violet-300">.S</span></span>
        </button>
        <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200">Back to Home</button>
      </div>
    </header>

    <main className="mx-auto w-[92%] max-w-[1280px] pb-24 pt-[120px]">
      <section className="mb-10">
        <p className="text-sm font-bold tracking-[.25em] text-cyan-300">PROJECTS</p>
        <h1 className="mt-4 text-4xl font-black sm:text-5xl">Building AI systems that solve real problems.</h1>
      </section>

      {projectCards.map((project, index) => (
        <ProjectShowcase key={project.title} project={project} index={index} />
      ))}
    </main>
  </div>
}

function ProjectShowcase({ project, index }) {
  const mainImage = project.images?.[0] || "";

  return (
    <article className="mb-8 grid gap-5 rounded-3xl border border-white/10 bg-white/[.025] p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
      <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#0b1224] p-4">
        <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#020817] p-3 shadow-[0_0_18px_rgba(139,92,246,0.08)]">
          <img
            src={mainImage}
            alt={`${project.title} screenshot`}
            className="mx-auto h-60 w-full rounded-lg object-contain bg-[#020817] sm:h-72"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      <div>
        <div className="mb-3 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">Project {index + 1}</div>
        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
        <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>

        <div className="mt-5 space-y-3 text-sm text-slate-300">
          <p><span className="font-semibold text-white">Challenge:</span> {project.challenge}</p>
          <p><span className="font-semibold text-white">Solution:</span> {project.solution}</p>
          <p><span className="font-semibold text-white">Outcome:</span> {project.outcome}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[.025] px-3 py-1 text-xs text-slate-300">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function getResumeReply(message) {
  const text = message.toLowerCase().trim();
  if (!text) {
    return "Please ask a question about my profile, projects, services, or contact details.";
  }

  const textMatches = [
    { keywords: ["who are you", "about you", "intro", "yourself", "tell me about you", "what do you do"], answer: `${resumeProfile.about} I’m ${resumeProfile.name}, a ${resumeProfile.title} focused on practical AI product building and real-world automation.` },
    { keywords: ["service", "services", "what can you do", "build", "help", "work"], answer: `I help businesses and startups with ${resumeProfile.services.join(", ")}. I also build AI-powered web apps and automation workflows for real use cases.` },
    { keywords: ["prompt", "prompt engineering", "prompting"], answer: "Prompt engineering is one of my strongest areas. I design prompts, optimize workflows, and improve output quality for LLM-powered applications and business use cases." },
    { keywords: ["rag", "document", "knowledge", "qna", "document qa", "grounded answer"], answer: "Yes — I work on RAG and document Q&A systems that ground answers in uploaded documents and internal knowledge so the output is more accurate and reliable." },
    { keywords: ["python", "llm", "agent", "stack", "tech", "technology"], answer: `My core stack includes ${resumeProfile.stack.join(", ")}. I use this combination to build AI products, automation flows, and practical business tools.` },
    { keywords: ["project", "projects", "portfolio", "demo"], answer: "My project work includes AI career assistants, data analytics chatbots, and document-based RAG systems built for real-world AI use cases." },
    { keywords: ["contact", "email", "gmail", "reach", "phone", "whatsapp", "how to contact"], answer: `You can contact me by email at ${resumeProfile.email} or WhatsApp at ${resumeProfile.whatsapp.replace("https://wa.me/", "+")}.` },
    { keywords: ["resume", "cv", "download"], answer: `You can download my resume here: ${resumeProfile.resume}.` },
    { keywords: ["education", "btech", "it", "degree"], answer: "I am a B.Tech Information Technology graduate with a strong interest in Generative AI, practical AI engineering, and intelligent product development." },
    { keywords: ["freelance", "available", "open to work", "hire", "career"], answer: "I’m available for freelance AI work and open to meaningful AI engineering opportunities, collaborations, and product-focused projects." }
  ];

  let bestMatch = null;
  let bestScore = 0;

  for (const candidate of textMatches) {
    let score = 0;
    for (const keyword of candidate.keywords) {
      if (text.includes(keyword)) score += keyword.split(" ").length * 2;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = candidate;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.answer;
  }

  const generalResponses = [
    "I work in Generative AI, LLMs, RAG, prompt engineering, and AI automation for real business workflows.",
    "My focus is building practical AI products with Python, LLMs, and agent-based workflows.",
    "I help with AI chatbots, document Q&A systems, prompt optimization, and AI-powered product ideas.",
    "I’m open to freelance AI work and product-focused AI collaborations."
  ];

  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
}

function ChatbotWidget({ compact = false }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! I’m Pranav’s AI assistant. Ask me about my services, skills, projects, or contact details." }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { id: Date.now(), sender: "user", text: trimmed };
    const reply = { id: Date.now() + 1, sender: "bot", text: getResumeReply(trimmed) };

    setMessages((prev) => [...prev, userMessage, reply]);
    setInput("");
  };

  return (
    <section className={compact ? "w-full" : "mx-auto w-[92%] max-w-[1100px] py-10"}>
      <div className={compact ? "rounded-2xl border border-violet-400/20 bg-[#050816] p-3" : "rounded-3xl border border-violet-400/20 bg-[#050816] p-6 shadow-[0_0_30px_rgba(139,92,246,0.08)] md:p-8"}>
        {!compact && (
          <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs font-bold tracking-[.25em] text-cyan-300">RESUME CHAT</p>
              <h2 className="mt-2 text-3xl font-black">Ask about Pranav</h2>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">Live profile bot</div>
          </div>
        )}

        <div className="space-y-3 rounded-2xl border border-white/10 bg-[#020611] p-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] rounded-2xl px-3 py-2 text-xs leading-5 ${message.sender === "user" ? "bg-violet-500/20 text-violet-100 border border-violet-400/25" : "bg-white/[.03] text-slate-200 border border-white/10"}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about my profile..."
            className="flex-1 rounded-xl border border-white/10 bg-white/[.03] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-violet-400/40"
          />
          <button type="submit" className="gradient-btn rounded-xl px-3 py-2 text-sm font-bold">Ask</button>
        </form>
      </div>
    </section>
  );
}

function Section({eyebrow,title}){return <div className="mb-12"><p className="text-xs font-bold tracking-[.25em] text-cyan-300">{eyebrow}</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h2></div>}
function Stat({n,t,icon}){return <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><div className="mb-3 flex items-center gap-2 text-violet-400">{icon}</div><div className="gradient-text text-2xl font-black">{n}</div><div className="mt-2 text-sm text-slate-500">{t}</div></div>}
function Project({title,desc,tags,href="#contact",featured}){return <article className={`rounded-3xl border p-6 ${featured?"border-violet-400/35 bg-violet-500/[.045]":"border-white/10 bg-white/[.025]"}`}><div className="mb-7 grid h-12 w-12 place-items-center rounded-xl bg-violet-500/10 text-violet-300"><BrainCircuit/></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-4 min-h-24 leading-7 text-slate-400">{desc}</p><p className="mt-5 text-xs text-cyan-300">{tags}</p><a href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-white hover:text-cyan-300">View Project <ExternalLink size={16}/></a></article>}
function SendIcon(){return <ArrowRight/>}

createRoot(document.getElementById("root")).render(<App/>);