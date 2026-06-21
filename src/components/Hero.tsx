import { Terminal, ArrowDown, ChevronRight, Eye, Play, Sparkles } from "lucide-react";
import jahnaviAvatar from "../assets/images/jahnavi_avatar_1782066280779.jpg";

interface HeroProps {
  onStartChat: () => void;
}

export default function Hero({ onStartChat }: HeroProps) {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[25%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-purple-600/5 blur-[125px]" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[100px]" />
        
        {/* Subtle Cyber Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.4)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column - Introduction copywriting */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Status highlight */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#00E5FF] uppercase">
              RECRUITMENT_CHANNEL: ACTIVE
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="font-mono text-sm text-cyan-400 tracking-wider">
              &lt;HELLO_WORLD&gt;
            </h2>
            <h1 className="font-sans font-extrabold text-5xl md:text-6xl text-white tracking-tight leading-[1.08]">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-[#00E5FF] to-purple-400">Jahnavi B</span>
            </h1>
            <h3 className="font-mono text-lg md:text-xl text-zinc-300 font-medium tracking-wide">
              Computer Science Undergraduate
            </h3>
          </div>

          <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
            Passionate about bridging advanced cognitive algorithms with modern high-fidelity web ecosystems. 
            I build responsive, low-latency applications with clean type safety, and train high-performance computer vision pipelines on edge endpoints.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 py-2 border-y border-zinc-800/60 max-w-lg font-mono">
            <div>
              <div className="text-lg font-bold text-white text-gradient bg-clip-text">Fresher</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Experience</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">5+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">AI & Web Projects</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">3+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Core Technical Certs</div>
            </div>
          </div>

          {/* Call-to-action actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToId("projects")}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-md font-sans text-sm font-semibold text-white tracking-wide transition-all shadow-[0_4px_20px_rgba(37,99,235,0.35)] flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={onStartChat}
              className="px-6 py-3 bg-black/60 hover:bg-zinc-900 border border-zinc-800 hover:border-cyan-400/50 rounded-md font-mono text-xs text-zinc-300 hover:text-white tracking-wide transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>TALK_TO_AI_DOUBLE</span>
            </button>

            <button
              onClick={() => scrollToId("contact")}
              className="px-6 py-3 bg-transparent hover:bg-white/5 border border-zinc-800 hover:border-zinc-700 rounded-md font-sans text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-all flex items-center justify-center cursor-pointer"
            >
              <span>Direct Hire</span>
            </button>
          </div>
        </div>

        {/* Right column - Interactive OpenCV mockup viewport graphic */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="w-full max-w-[380px] aspect-[4/5] border border-cyan-500/20 hover:border-cyan-500/40 rounded-xl bg-black/40 p-4 relative group transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            
            {/* Sci-fi wireframe border design helpers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl pointer-events-none" />

            {/* Inner Viewport simulated camera stream feed */}
            <div className="w-full h-full rounded-lg bg-[#0E1321] overflow-hidden relative flex flex-col select-none">
              
              {/* Scanline animated bar effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none animate-[scanline_4s_ease-in-out_infinite]" />

              {/* Live Overlay Status Indicators */}
              <div className="absolute top-3 left-3 z-10 flex items-center justify-between w-[calc(100%-24px)] font-mono text-[9px] text-cyan-400 bg-black/50 p-2 rounded border border-cyan-500/10 backdrop-blur-sm">
                <div className="flex items-center space-x-1.5">
                  <Eye className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                  <span>CV_FEED: LIVE [60FPS]</span>
                </div>
                <span className="text-zinc-500">ZOOM: x1.0</span>
              </div>

              {/* Stylized Developer Abstract Mesh Graphic representation */}
              <div className="flex-1 w-full flex items-center justify-center relative bg-[radial-gradient(#151D30_1.5px,transparent_1.5px)] bg-[size:16px_16px] overflow-hidden">
                
                {/* SVG vector representing artificial intelligence neural coordinate geometry mesh points */}
                <svg className="w-56 h-56 text-[#00E5FF]/10 z-0 absolute" viewBox="0 0 100 100">
                  <path d="M50 15 L25 40 L35 75 L65 75 L75 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M50 15 L50 45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M25 40 L50 45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M75 40 L50 45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M35 75 L50 45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M65 75 L50 45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  
                  {/* Point nodes */}
                  <circle cx="50" cy="15" r="1.5" fill="#00E5FF" className="animate-ping" />
                  <circle cx="50" cy="15" r="1" fill="#00E5FF" />
                  <circle cx="25" cy="40" r="1" fill="#00E5FF" />
                  <circle cx="75" cy="40" r="1" fill="#00E5FF" />
                  <circle cx="35" cy="75" r="1" fill="#00E5FF" />
                  <circle cx="65" cy="75" r="1" fill="#00E5FF" />
                  <circle cx="50" cy="45" r="1" fill="#7C3AED" />
                </svg>

                {/* Cybernetic geometric circle frame with user image inside */}
                <div className="relative w-48 h-48 rounded-full flex items-center justify-center">
                  
                  {/* Rotating outer rings */}
                  <div className="absolute inset-0 rounded-full border border-zinc-800/80 animate-[spin_30s_linear_infinite]">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#00E5FF]" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3B82F6]" />
                  </div>
                  <div className="absolute w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full border border-dashed border-cyan-400/20 animate-[spin_15s_linear_infinite_reverse]" />

                  {/* Profile Image container with pulsing shadow/glow */}
                  <div className="absolute w-36 h-36 rounded-full overflow-hidden border border-cyan-400/30 shadow-[0_0_15px_rgba(0,229,255,0.15)] flex items-center justify-center hover:scale-105 hover:border-cyan-400 transition-all duration-500 select-none bg-zinc-950">
                    <img 
                      src={jahnaviAvatar} 
                      alt="Jahnavi B" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover animate-[pulse_6s_ease-in-out_infinite]"
                    />
                    
                    {/* Cyber hologram scanning overlays over image */}
                    <div className="absolute inset-0 bg-cyan-500/10 mix-blend-color-dodge pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Simulated Computer Vision bounding box tracker that lights up on mouse hover over card */}
                <div className="absolute inset-x-8 top-[30%] bottom-[20%] border border-cyan-400/0 rounded-lg group-hover:border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* Anchor brackets helper */}
                  <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-cyan-400" />
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-cyan-400" />
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-cyan-400" />
                  
                  {/* Target labels */}
                  <div className="absolute -top-6 left-0 bg-[#00E5FF] text-black font-mono text-[9px] uppercase font-bold px-1 py-0.5 rounded shadow">
                    [target: software_engineer]
                  </div>
                  <div className="absolute -bottom-1 right-2 bg-blue-600 text-white font-mono text-[8px] px-1 py-0.2 rounded">
                    conf: 99.42%
                  </div>

                  {/* Facial landmarks tracker mockup points inside bounding box */}
                  <div className="absolute top-[28%] left-[48%] w-1 h-1 bg-[#00E5FF] rounded-full" />
                  <div className="absolute top-[34%] left-[40%] w-1.5 h-0.5 bg-[#00E5FF] rounded-full" />
                  <div className="absolute top-[34%] left-[56%] w-1.5 h-0.5 bg-[#00E5FF] rounded-full" />
                  <div className="absolute top-[48%] left-[48%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                  <div className="absolute top-[48%] left-[48%] w-1 h-1 bg-cyan-400 rounded-full" />
                  <div className="absolute top-[58%] left-[43%] w-3.5 h-0.5 bg-purple-500 rounded" />
                </div>

                {/* Subtitle indicator explaining developer metrics */}
                <div className="absolute bottom-4 inset-x-4 z-10 flex flex-col space-y-1 bg-black/60 border border-zinc-800 backdrop-blur p-2.5 rounded text-left font-mono">
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="text-zinc-400">DEVNAME:</span>
                    <span className="text-white">JAHNAVI_B_NET</span>
                  </div>
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="text-zinc-400">STATE:</span>
                    <span className="text-emerald-400 flex items-center space-x-1">
                      <span className="h-1 w-1 bg-emerald-400 rounded-full inline-block animate-pulse" />
                      <span>SOLVING_COMPLEX_PROBLEMS</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="text-zinc-400">LATENCY:</span>
                    <span className="text-cyan-400">0.08ms (OP_LEVEL)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bounce Arrow indicator */}
      <div 
        onClick={() => scrollToId("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10 text-zinc-500 hover:text-cyan-400 transition-colors flex flex-col items-center space-y-1"
      >
        <span className="font-mono text-[9px] tracking-widest text-zinc-600 uppercase">Scroll to learn</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
