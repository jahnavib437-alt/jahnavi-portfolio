import { Briefcase, ChevronRight, Cpu } from "lucide-react";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0D16]">
      {/* Background soft glow highlights */}
      <div className="absolute top-[40%] left-[-15%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[115px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[105px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section title header */}
        <div className="flex flex-col mb-16 space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400">
            <span>[04]</span>
            <span className="w-8 h-[1px] bg-blue-500/30" />
            <span className="uppercase tracking-widest">Journey History</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Professional Experience Timeline
          </h2>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative max-w-4xl mx-auto font-sans">
          
          {/* Central Vertical glowing track background line */}
          <div className="absolute top-2 bottom-2 left-4 md:left-1/2 w-[1px] bg-[#2563EB]/25" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Outer point trigger nodes (pulsing coordinates on timeline) */}
                  <div className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 top-4 z-10 shrink-0">
                    <span className="flex h-4.5 w-4.5 relative items-center justify-center">
                      {item.current ? (
                        <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                        </>
                      ) : (
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2563EB] border border-[#00E5FF]/40"></span>
                      )}
                    </span>
                  </div>

                  {/* Spacer helper to align with the visual midline */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Core Card content block */}
                  <div className={`w-full md:w-[46%] pl-10 md:pl-0 ${
                    isEven ? "md:pr-10" : "md:pl-10"
                  }`}>
                    <div className="border border-zinc-850/80 rounded-xl bg-black/40 p-6 hover:bg-black/55 hover:border-blue-500/35 transition-all duration-300 relative group shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                      
                      {/* Active tag marker */}
                      {item.current && (
                        <span className="absolute -top-2.5 right-4 bg-[#00E5FF] text-black font-mono text-[8px] font-bold uppercase py-0.5 px-2 rounded-full tracking-wider shadow">
                          [actively_engaged]
                        </span>
                      )}

                      {/* Header detail */}
                      <div className="flex flex-col space-y-1 mb-4 border-b border-zinc-900 pb-3">
                        <div className="flex items-center space-x-1.5 font-mono text-[9px] text-[#00E5FF]">
                          <Briefcase className="w-3.5 h-3.5 shrink-0" />
                          <span>{item.duration.toUpperCase()}</span>
                        </div>
                        <h3 className="font-sans font-bold text-base text-zinc-100 group-hover:text-white transition-colors">
                          {item.role}
                        </h3>
                        <span className="text-sm font-semibold text-zinc-400">
                          {item.company}
                        </span>
                      </div>

                      {/* Responsibilities list bullets */}
                      <div className="space-y-3 font-sans text-xs md:text-sm text-zinc-400">
                        <h4 className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start space-x-2 text-zinc-400">
                              <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Achievements highlight row */}
                        <div className="pt-2">
                          <h4 className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest mb-2 flex items-center space-x-1">
                            <Cpu className="w-3 h-3 text-cyan-400" />
                            <span>KEY_METRICS_SOLVED</span>
                          </h4>
                          <ul className="space-y-1 bg-black/35 p-3 border border-zinc-900 rounded font-sans text-xs">
                            {item.achievements.map((ach, i) => (
                              <li key={i} className="text-zinc-350 italic">
                                "{ach}"
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
