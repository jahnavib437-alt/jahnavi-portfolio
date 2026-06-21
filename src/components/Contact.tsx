import React, { useState } from "react";
import { 
  Mail, MessageSquare, User, Send, CheckCircle2, 
  Github, Linkedin, AlertCircle, Sparkles, Terminal 
} from "lucide-react";
import { DEV_INFO } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || name.trim().length < 2) {
      setErrorMessage("Please input a valid Name (minimum 2 characters).");
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMessage("Please input a valid structural Email address.");
      setStatus("error");
      return;
    }
    if (!message || message.trim().length < 5) {
      setErrorMessage("Please write a meaningful Message (minimum 5 characters).");
      setStatus("error");
      return;
    }

    setErrorMessage("");
    setStatus("loading");

    // Simulate safe delivery transmission lag
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B0F19]">
      
      {/* Background flare highlights */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[115px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[125px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section title header */}
        <div className="flex flex-col mb-16 space-y-2 text-center items-center">
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400">
            <span>[07]</span>
            <span className="w-8 h-[1px] bg-blue-500/30" />
            <span className="uppercase tracking-widest text-[#00E5FF]">orbital connection</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight text-center">
            Establish Secure Transmission
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-lg text-center leading-relaxed">
            Have an open software engineer opening or want to consult on an AI/Computer Vision project? Dispatch a coordinate stream below.
          </p>
        </div>

        {/* Centered glassmorphic card layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* Left Column: Direct contact info & socials */}
          <div className="md:col-span-5 border border-zinc-850/80 rounded-xl bg-black/40 p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-[#00E5FF] uppercase tracking-widest">TRANSMISSION_DESK</span>
                <h3 className="font-sans font-bold text-lg text-white">Direct Connect channels</h3>
                <p className="text-zinc-450 text-xs leading-relaxed">
                  Interested in immediate discussions or tech reviews? Use the direct social indices to hook up.
                </p>
              </div>

              <div className="space-y-4 font-mono text-[#00E5FF] text-xs">
                
                {/* Email address Link */}
                <a 
                  href={`mailto:${DEV_INFO.email}`} 
                  className="flex items-center space-x-3.5 p-3.5 border border-zinc-900 bg-zinc-950/20 hover:border-cyan-400 rounded-lg group transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-105 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">EMAIL_ENDPOINT</span>
                    <span className="text-zinc-300 font-semibold text-xs mt-0.5 group-hover:text-cyan-400">{DEV_INFO.email}</span>
                  </div>
                </a>

                {/* GitHub link */}
                <a 
                  href={DEV_INFO.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center space-x-3.5 p-3.5 border border-zinc-900 bg-zinc-950/20 hover:border-blue-500 rounded-lg group transition-colors"
                >
                  <Github className="w-4 h-4 text-blue-400 group-hover:scale-105 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">GITHUB_NODE</span>
                    <span className="text-zinc-300 font-semibold text-xs mt-0.5 group-hover:text-blue-400">github.com/jahnavib437-alt</span>
                  </div>
                </a>

                {/* LinkedIn Link */}
                <a 
                  href={DEV_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center space-x-3.5 p-3.5 border border-zinc-900 bg-zinc-950/20 hover:border-purple-500 rounded-lg group transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-purple-400 group-hover:scale-105 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">LINKEDIN_CORE</span>
                    <span className="text-zinc-300 font-semibold text-xs mt-0.5 group-hover:text-purple-400">linkedin.com/in/jahnavi-b-03b611353</span>
                  </div>
                </a>

              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-zinc-900 text-left">
              <span className="font-mono text-[9px] text-zinc-600 block">SYSTEM_LOC_STAMP::</span>
              <span className="font-mono text-xs text-zinc-500">{DEV_INFO.location}</span>
            </div>

          </div>

          {/* Right Column: Contact send dispatch Form */}
          <div className="md:col-span-7 border border-zinc-850/80 rounded-xl bg-black/40 p-6 backdrop-blur shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            {status === "success" ? (
              <div className="flex-1 flex flex-col justify-center items-center text-center p-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest">TRANSMISSION_COMPLETE</span>
                  <h3 className="font-sans font-bold text-xl text-white">Coordinate packet dispatched!</h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm">
                    Connection sequence secured successfully. Jahnavi's sub-systems have flagged your coordinates. You'll receive a return communication shortly!
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded font-mono text-xs text-cyan-400"
                >
                  TRANSMIT_ANOTHER_PACKET
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4 font-sans text-left">
                
                {/* Form header details */}
                <div className="flex items-center justify-between font-mono text-[9px] border-b border-zinc-900 pb-3 mb-2">
                  <span className="text-zinc-500 flex items-center space-x-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>LAUNCH_COMMUNICATION_LINK</span>
                  </span>
                  <span className="text-zinc-650">SECURE_SSL: TLS_1.3</span>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wide flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Sender Index / Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rachel Adams, Technical Recruiter"
                    className="w-full px-3 py-2 bg-zinc-950/40 border border-zinc-850 focus:border-cyan-400 rounded outline-none text-zinc-200 text-xs transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wide flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Return Address / Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rachel@innovations.com"
                    className="w-full px-3 py-2 bg-zinc-950/40 border border-zinc-850 focus:border-cyan-400 rounded outline-none text-zinc-200 text-xs transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wide flex items-center space-x-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Message stream / Context *</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Jahnavi! I reviewed your VigilDrive driver monitoring and medico platforms, and we would love to schedule a technical round table..."
                    className="w-full px-3 py-2 bg-zinc-950/40 border border-zinc-850 focus:border-cyan-400 rounded outline-none text-zinc-200 text-xs transition-colors leading-relaxed"
                  />
                </div>

                {/* Error status display */}
                {status === "error" && (
                  <div className="p-3 border border-rose-500/20 bg-rose-500/5 text-rose-450 rounded text-xs flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit button bar */}
                <div className="flex items-center justify-between pt-2">
                  <div className="font-mono text-[9px] text-zinc-500 italic max-w-[50%] leading-tight">
                    * By clicking dispatch, coordinates are compiled and sent directly.
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs rounded transition-all shadow-[0_2px_15px_rgba(0,180,216,0.2)] flex items-center space-x-1.5"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                        <span>DISPATCH_PENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 shrink-0" />
                        <span>DISPATCH_TRANSMISSION</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

        {/* Humorous and elegant footnote credit */}
        <div className="mt-20 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] text-zinc-500">
          <span>&copy; {new Date().getFullYear()} JAHNAVI.IO. ALL ENYCRYPTED CODES STAND SECURED.</span>
          <span className="flex items-center space-x-1 text-zinc-650">
            <span>BUILT WITH FULL TYPE SAFETY</span>
            <Sparkles className="w-3 h-3 text-cyan-500 animate-pulse" />
            <span>&amp; SERVER SIDE COGNITION ENGINE</span>
          </span>
        </div>

      </div>
    </section>
  );
}
