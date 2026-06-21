import { useState } from "react";
import { 
  Code, FileJson, Shield, Cpu, Database, 
  Layout, Server, Terminal, Palette, Brain, 
  Eye, Camera, GitMerge, Workflow, GitBranch, 
  Laptop, Layers, Cloud, Compass, Sparkles 
} from "lucide-react";
import { SKILLS } from "../data";
import { Skill } from "../types";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"all" | "languages" | "web-tech" | "ai-ml" | "tools">("all");

  const categories = [
    { id: "all", label: "All Tech" },
    { id: "languages", label: "Languages" },
    { id: "web-tech", label: "Web Frameworks" },
    { id: "ai-ml", label: "AI / Machine Learning" },
    { id: "tools", label: "Developer Tools" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  // Map icon strings to Lucide icon components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Code": return <Code className="w-5 h-5 text-cyan-400" />;
      case "FileJson": return <FileJson className="w-5 h-5 text-[#00E5FF]" />;
      case "Shield": return <Shield className="w-5 h-5 text-blue-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-purple-400" />;
      case "Database": return <Database className="w-5 h-5 text-emerald-400" />;
      case "Layout": return <Layout className="w-5 h-5 text-indigo-400" />;
      case "Atom": return <AtomIcon />;
      case "Server": return <Server className="w-5 h-5 text-yellow-400" />;
      case "Terminal": return <Terminal className="w-5 h-5 text-zinc-300" />;
      case "Palette": return <Palette className="w-5 h-5 text-rose-400" />;
      case "Brain": return <Brain className="w-5 h-5 text-fuchsia-400 animate-pulse" />;
      case "Eye": return <Eye className="w-5 h-5 text-sky-400" />;
      case "Camera": return <Camera className="w-5 h-5 text-teal-400" />;
      case "GitMerge": return <GitMerge className="w-5 h-5 text-blue-300" />;
      case "Workflow": return <Workflow className="w-5 h-5 text-[#7C3AED]" />;
      case "GitBranch": return <GitBranch className="w-5 h-5 text-orange-400" />;
      case "Laptop": return <Laptop className="w-5 h-5 text-amber-500" />;
      case "Layers": return <Layers className="w-5 h-5 text-cyan-300" />;
      case "Cloud": return <Cloud className="w-5 h-5 text-sky-300" />;
      case "Compass": return <Compass className="w-5 h-5 text-[#00E5FF]" />;
      default: return <Code className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0D16]">
      {/* Background flare */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col mb-16 space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400">
            <span>[02]</span>
            <span className="w-8 h-[1px] bg-blue-500/30" />
            <span className="uppercase tracking-widest">Expertise Matrix</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Technical Skill Inventory
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-xl">
            My technology toolset spans advanced client-side architecture compilation, production-ready databases, and robust high-accuracy machine learning capabilities.
          </p>
        </div>

        {/* Category Tabs Section */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-800/80 pb-5 mb-10 max-w-4xl font-mono">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs rounded transition-all flex items-center space-x-1.5 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border-b border-cyan-400 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skill Card Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="border border-zinc-800/80 rounded-xl bg-black/30 p-5 hover:bg-black/55 hover:border-cyan-500/35 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
            >
              {/* Corner tech accent line */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-zinc-800 group-hover:bg-cyan-500 transition-colors" />

              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:bg-zinc-850 group-hover:border-zinc-700 transition-colors shrink-0">
                    {renderIcon(skill.iconName)}
                  </div>
                  <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest bg-zinc-900/60 p-1 rounded border border-zinc-950">
                    {skill.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-zinc-200 tracking-wide group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-zinc-500">LEVEL_GAUGE:</span>
                    <span className="text-[#00E5FF] font-semibold">{skill.level}%</span>
                  </div>
                </div>
              </div>

              {/* Progress bar visualizer */}
              <div className="mt-5 pt-3 border-t border-zinc-900">
                <div className="w-full bg-zinc-950 h-1 rounded-sm overflow-hidden relative">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-sm relative group-hover:from-blue-400 group-hover:to-cyan-300" 
                    style={{ width: `${skill.level}%` }}
                  />
                  {/* Ping status anchor at end of level */}
                  <div 
                    className="absolute -top-0.5 w-2 h-2 rounded-full bg-cyan-400 scale-0 group-hover:scale-100 transition-transform opacity-80"
                    style={{ left: `calc(${skill.level}% - 4px)` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Skill Badge Counter Panel */}
        <div className="mt-12 p-4 border border-zinc-850/60 rounded-lg bg-black/15 flex items-center justify-between max-w-4xl font-mono text-xs text-zinc-500">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
            <span>TOTAL_TRACKED_COMPETENCIES: {SKILLS.length} modules</span>
          </div>
          <span className="hidden sm:inline-block text-[10px] uppercase text-zinc-600">ALL_SYSTEMS_FUNCTIONAL // COGNITIVE_ACCURACY: 99.42%</span>
        </div>

      </div>
    </section>
  );
}

// React Atom Icon SVG custom helper to render matching logo
function AtomIcon() {
  return (
    <svg className="w-5 h-5 text-blue-400 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30, 50, 50)" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90, 50, 50)" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(150, 50, 50)" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}
