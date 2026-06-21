import { useState } from "react";
import { 
  Folder, Code, Eye, Sparkles, ExternalLink, 
  Github, ChevronRight, X, Terminal, Cpu, Clock 
} from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ai-ml" | "full-stack" | "tools">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "ALL_SYSTEMS" },
    { id: "ai-ml", label: "AI_&_COMPUTER_VISION" },
    { id: "full-stack", label: "FULL_STACK_APPS" },
    { id: "tools", label: "DEV_RESOURCES" }
  ];

  const filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  // Map engineering difficulty & metrics matching each project for the rich modal view
  const getProjectExtendedInfo = (id: string) => {
    switch(id) {
      case "vigildrive":
        return {
          challenges: "Processing real-time high-definition video frames on constrained computing modules without dropping frames or triggering high false alarm fatigue levels.",
          solution: "Wrote multithreaded frame capture buffers using Python and OpenCV. Integrated optimized temporal calculation algorithms over consecutive frame sets to compute precise Eye Aspect Ratio (EAR) fluctuations.",
          terminalOutput: "Initializing VigilDrive AI Engine...\n> Connecting video reference feed: dev/video0\n> Loading localized facial landmarks cascade models...\n> Multithreaded frame consumer started continuously.\n> Calculating local average Eye Aspect Ratio: EAR = 0.29\n> Blink rate metrics compiled: 14 blinks / min [NORMAL].\n> Thread safety validation: SUCCESS. Latency < 12ms."
        };
      case "medico":
        return {
          challenges: "Ensuring secure, conflict-free database transactional records for critical medicine scheduling timelines and managing multi-table relationships cleanly.",
          solution: "Designed a clean Django REST API using SQLite and PostgreSQL. Built granular database transaction blocks and schema validations ensuring zero calendar schedule overlaps.",
          terminalOutput: "Configuring Medico REST API Service...\n> Attaching PostgreSQL relational adapter.\n> Executing safe database seeding: SQLite & Postgres.\n> Mapping medicine scheduling models and user authentications.\n> Server processing query: GET /api/v1/schedules [200 OK]\n> Latency analysis: database index query completed in 1.45ms."
        };
      case "recipe-site":
        return {
          challenges: "Optimizing system database performance for rapid keyword search lookups and image rendering while safeguarding user auth systems.",
          solution: "Implemented efficient indexing across search attributes. Built Django custom security validators around resource creations and streamlined image delivery.",
          terminalOutput: "Launching Django Recipe Hub Service...\n> Preparing secure session token authentications.\n> Indexing recipe query key-sets for high-speed matches.\n> Triggering custom search: GET /recipes/search?q=django\n> Search completed: 18 items loaded gracefully.\n> State check: [AUTHORIZED] session valid."
        };
      case "autopilot-iot":
        return {
          challenges: "Minimizing telemetry communication overhead to maintain low latency socket connections and building predictive fail-safe architectures.",
          solution: "Engineered localized edge algorithms mapping time-series sensor fluctuations. Programmed optimized vehicle-to-cloud JSON packet structures via quick low-overhead protocols.",
          terminalOutput: "Initializing Driverless Auto Pilot SIM...\n> Activating localized IoT coordinate arrays.\n> Starting continuous vehicle-to-cloud transmission streams.\n> Real-time predictive telemetry: Pitch = -0.4, Roll = 1.2\n> Obstacle Avoidance Matrix initialized: 5m radius standard.\n> Emergency stop override condition check: [SAFE] System clear."
        };
      default:
        return {
          challenges: "Building robust, intuitive software interfaces.",
          solution: "Employed strict typescript practices, automated CI checking, and elegant CSS design rules.",
          terminalOutput: "Launching project runtime...\n> Compiling dependencies...\n> Serving portfolio container..."
        };
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B0F19]">
      
      {/* Background neon dots */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[105px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section title header */}
        <div className="flex flex-col mb-16 space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400">
            <span>[03]</span>
            <span className="w-8 h-[1px] bg-blue-500/30" />
            <span className="uppercase tracking-widest">Selected Works</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight">
                Case Studies &amp; Projects
              </h2>
              <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-xl">
                Click on any project's case study card to launch its advanced real-time debug telemetry log panel!
              </p>
            </div>
            
            {/* Category tabs filters */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3 py-1.5 rounded transition-all border ${
                    activeCategory === cat.id
                      ? "bg-cyan-500/10 border-cyan-400 text-cyan-400 font-semibold"
                      : "border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Card Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-zinc-800/80 rounded-xl bg-black/30 p-6 flex flex-col justify-between hover:bg-black/55 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              
              {/* Top sci-fi line coordinates */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-400/45 transition-all duration-500" />
              
              <div className="flex flex-col space-y-5">
                {/* Header indicators */}
                <div className="flex items-center justify-between font-mono text-[9px] text-zinc-600">
                  <span className="flex items-center space-x-1">
                    <Folder className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                    <span>PROJECT::{project.id.toUpperCase()}</span>
                  </span>
                  <span className="text-[10px] text-blue-500">{project.category}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-lg text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed min-h-[64px]">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="font-mono text-[9px] bg-zinc-900 border border-zinc-850 text-zinc-400 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons and expandable telemetry trigger */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-900 font-mono text-xs">
                
                {/* Expand Telemetry */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 group-hover:underline cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 shrink-0" />
                  <span>VIEW_LOGS</span>
                </button>

                <div className="flex items-center space-x-3 text-zinc-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4 shrink-0" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                      title="Launch Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Real-Time Projects Summary Deck */}
        <div className="mt-12 p-4 border border-[#2563EB]/20 bg-[#2563EB]/5 rounded-lg flex items-center justify-between max-w-4xl font-mono text-xs text-[#00E5FF]">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Interactive workspace ready for recrutiers.</span>
          </div>
          <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest text-[#2563EB]">Compiled successfully</span>
        </div>

      </div>

      {/* Expanded Project Details telemetry drawer panel (Modal overlay) */}
      {selectedProject && (() => {
        const ext = getProjectExtendedInfo(selectedProject.id);
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div 
              id="details-modal"
              className="w-full max-w-2xl bg-[#0E1321] border border-cyan-500/30 rounded-xl max-h-[85vh] overflow-y-auto relative flex flex-col p-6 shadow-[0_20px_50px_rgba(0,229,255,0.15)] animate-scale-up"
            >
              {/* Corner cyan accent anchors */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-xl pointer-events-none" />

              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-zinc-805 pb-4 mb-5">
                <div className="font-mono text-xs text-cyan-400 flex items-center space-x-1.5">
                  <Cpu className="w-4 h-4 animate-spin text-cyan-400 shrink-0" />
                  <span>ACTIVE_WORKSPACE_SESSION // {selectedProject.id.toUpperCase()}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 border border-zinc-850 hover:border-cyan-400 bg-zinc-950/40 rounded text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4 shrink-0" />
                </button>
              </div>

              {/* Title & Core stats */}
              <div className="space-y-2 mb-6">
                <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] uppercase text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded bg-blue-500/5">
                    Category: {selectedProject.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/5 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    COMPLETED: SUCCESS
                  </span>
                </div>
              </div>

              {/* Features, difficulty & solution checklist description */}
              <div className="flex flex-col space-y-5 flex-1 overflow-visible font-sans text-xs md:text-sm text-zinc-300">
                
                {/* Description */}
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Overview</h4>
                  <p className="leading-relaxed text-zinc-400">{selectedProject.description}</p>
                </div>

                {/* Key Technical Features list */}
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Architectural Highlights</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2 text-zinc-300">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Grid difficulty metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1.5">
                  <div className="p-4 border border-zinc-850 rounded-lg bg-black/25">
                    <h5 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Technical Challenge</h5>
                    <p className="text-zinc-400 text-xs leading-relaxed">{ext.challenges}</p>
                  </div>
                  <div className="p-4 border border-cyan-500/10 rounded-lg bg-cyan-500/5">
                    <h5 className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1">Implementation Solution</h5>
                    <p className="text-zinc-300 text-xs leading-relaxed">{ext.solution}</p>
                  </div>
                </div>

                {/* Live compiling CLI logs console! */}
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-504 uppercase tracking-widest mb-2 flex items-center space-x-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
                    <span>Developer Output Simulation</span>
                  </h4>
                  <div className="w-full bg-zinc-950 p-4 border border-zinc-900 rounded font-mono text-[10px] text-cyan-300 whitespace-pre-line leading-relaxed scrollbar-thin">
                    {ext.terminalOutput}
                  </div>
                </div>

              </div>

              {/* Bottom Actions links inside Modal */}
              <div className="flex items-center justify-between border-t border-zinc-900 pt-5 mt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 rounded text-zinc-400 hover:text-white transition-all font-mono text-xs"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>SRC_CODE_REPOS</span>
                </a>
                
                {selectedProject.demo ? (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#2563EB] hover:bg-blue-500 rounded text-white transition-all font-sans font-semibold text-xs"
                  >
                    <span>Launch Live Systems</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                ) : (
                  <span className="font-mono text-[10px] text-zinc-500 italic">No public endpoint available</span>
                )}
              </div>

            </div>
          </div>
        );
      })()}

    </section>
  );
}
