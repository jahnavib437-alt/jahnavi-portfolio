import { Heart, Command, Database, Award, GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
import { DEV_INFO } from "../data";

export default function About() {
  const CoreValues = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
      title: "Type Safety & Robustness",
      description: "Writing explicit, strongly-typed TypeScript and self-documenting code. Code should explain itself and eliminate logical faults at build time."
    },
    {
      icon: <Command className="w-5 h-5 text-purple-400" />,
      title: "Complexity Optimization",
      description: "Minimizing bundle and runtime memory weight. Designing data structures that guarantee quick, low-latency calculations."
    },
    {
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: "Algorithmic Precision",
      description: "Applying computer vision and machine learning frameworks under physical device constraints with adaptive, mathematically-rigorous logic."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/10">
      
      {/* Background radial highlight */}
      <div className="absolute top-[30%] right-[5%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section title header */}
        <div className="flex flex-col mb-16 space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400">
            <span>[01]</span>
            <span className="w-8 h-[1px] bg-blue-500/30" />
            <span className="uppercase tracking-widest">About Jahnavi B</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Developer Philosophy &amp; Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography Copywriting */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h3 className="font-sans font-bold text-xl text-zinc-100 tracking-wide leading-relaxed">
              Transforming ideas into intelligent applications using Python, Machine Learning, and AI-driven solutions.
            </h3>
            
            <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed">
              {DEV_INFO.description}
            </p>
            
            <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed">
              {DEV_INFO.philosophy}
            </p>

            {/* Core Values Rows */}
            <div className="flex flex-col space-y-5 pt-4">
              <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest border-b border-zinc-800 pb-2">
                Core Development Pillars
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {CoreValues.map((value, i) => (
                  <div 
                    key={i} 
                    className="flex space-x-4 p-4 border border-zinc-800/60 rounded-lg bg-black/20 hover:bg-black/30 hover:border-zinc-700/60 transition-all duration-300 group"
                  >
                    <div className="shrink-0 p-2 bg-zinc-900 border border-zinc-800 rounded-md group-hover:scale-105 transition-transform">
                      {value.icon}
                    </div>
                    <div className="flex flex-col space-y-1">
                      <h5 className="font-sans font-semibold text-sm text-zinc-200">
                        {value.title}
                      </h5>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Background Info Widget */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-28">
            <div className="border border-zinc-800/80 rounded-xl bg-black/40 p-6 backdrop-blur shadow-[0_10px_35px_rgba(0,0,0,0.4)] relative">
              <div className="absolute top-4 right-4 text-zinc-600 font-mono text-[9px]">BIODATA_META</div>
              
              <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-3 flex items-center space-x-2">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>QUALIFICATION_TELEMETRY</span>
              </h4>

              <div className="flex flex-col space-y-5 font-sans">
                
                {/* Academic credentials */}
                <div className="flex items-start space-x-4">
                  <div className="p-2bg-zinc-900/60 border border-zinc-800/80 rounded mt-0.5 shrink-0">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">EDUCATION</span>
                    <span className="font-semibold text-sm text-zinc-200 mt-1 leading-snug">
                      {DEV_INFO.education}
                    </span>
                  </div>
                </div>

                {/* Target Destination Profile */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-zinc-900/60 border border-zinc-800/80 rounded mt-0.5 shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">LOCATION</span>
                    <span className="font-semibold text-sm text-zinc-200 mt-1 leading-snug">
                      {DEV_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Relocation Preference */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-zinc-900/60 border border-zinc-800/80 rounded mt-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">CAREER FOCUS</span>
                    <span className="font-semibold text-sm text-zinc-200 mt-1 leading-snug">
                      {DEV_INFO.careerGoal}
                    </span>
                  </div>
                </div>

              </div>

              {/* Graphic stats decorative progress lines */}
              <div className="mt-8 space-y-3 font-mono text-[10px] border-t border-zinc-800 pt-6">
                <div className="flex justify-between text-zinc-400">
                  <span>COMPILING_CAPABILITY:</span>
                  <span className="text-cyan-400">OPTIMAL</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[94%]" />
                </div>
                
                <div className="flex justify-between text-zinc-400 pt-1">
                  <span>LOGIC_DENSITY_STRETCH:</span>
                  <span className="text-purple-400">100% SECURE</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-full" />
                </div>
              </div>
            </div>
            
            {/* Soft inline quote */}
            <div className="p-4 border-l-2 border-cyan-400 bg-white/5 rounded-r-md font-sans text-xs italic text-zinc-400 leading-relaxed">
              "Great software engineers aren't judged by how many features they write, but by how elegantly they handle complexity and prevent failures before they reach production."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
