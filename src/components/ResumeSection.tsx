import React, { useState } from "react";
import { 
  Download, Printer, Sparkles, Building, Briefcase, 
  FileText, Clipboard, Check, Terminal, Loader2, RefreshCw 
} from "lucide-react";
import { DEV_INFO, EXPERIENCE, SKILLS, CERTIFICATIONS } from "../data";

export default function ResumeSection() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [errorWord, setErrorWord] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const handleGenerateLetter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !role) {
      setErrorWord("Please supply both target Company Name and target Role/Position.");
      return;
    }
    setErrorWord("");
    setIsLoading(true);
    setGeneratedLetter("");

    try {
      const response = await fetch("/api/generate-cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, role, description: desc }),
      });
      const data = await response.json();
      if (response.ok) {
        setGeneratedLetter(data.letter);
      } else {
        setErrorWord(data.error || "An error occurred compiling cover letter.");
      }
    } catch (err: any) {
      setErrorWord("Failed to connect to full-stack server endpoints: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!generatedLetter) return;
    navigator.clipboard.writeText(generatedLetter);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#0A0D16]">
      {/* Background soft glow anchors */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section title header */}
        <div className="flex flex-col mb-12 space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400">
            <span>[06]</span>
            <span className="w-8 h-[1px] bg-blue-500/30" />
            <span className="uppercase tracking-widest text-[#00E5FF]">Credentials Locker</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Curriculum Vitae &amp; Cover Letter AI
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-xl">
            Download our print-ready developer transcript or leverage the built-in Gemini Agent to automatically compile an aligned matching cover letter!
          </p>
        </div>

        {/* Top Control Bar Action Items */}
        <div className="flex flex-wrap gap-4 mb-8 font-sans">
          
          {/* Printable direct button */}
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded font-semibold text-xs tracking-wide transition-all shadow-[0_2px_15px_rgba(0,180,216,0.18)] flex items-center space-x-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>DOWNLOAD / PRINT RESUME (PDF)</span>
          </button>

          {/* Direct Text Resume Link triggers */}
          <a
            href={`mailto:${DEV_INFO.email}?subject=Job Inquiry for Jahnavi`}
            className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded font-mono text-xs tracking-wider transition-all flex items-center space-x-1.5"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>REQUEST_PORTFOLIO_ZIP</span>
          </a>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Printable/Visual Web Resume Card mock */}
          <div className="lg:col-span-7">
            <div 
              id="resume-printable-card" 
              className="border border-zinc-850 bg-black/45 rounded-xl p-8 backdrop-blur text-left shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col font-sans"
            >
              
              {/* Header Profile Info panel */}
              <div className="border-b border-zinc-900 pb-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight">{DEV_INFO.name}</h3>
                  <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{DEV_INFO.title}</p>
                  <p className="text-zinc-500 text-xs mt-1">{DEV_INFO.location} // {DEV_INFO.email}</p>
                </div>
                <div className="shrink-0 p-2 border border-zinc-800 bg-zinc-950/40 rounded text-[10px] font-mono text-zinc-500">
                  CV_STATE_OPTIMAL::ACTIVE
                </div>
              </div>

              {/* Career Goal */}
              <div className="space-y-2 mb-6">
                <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Career Summary</h4>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  {DEV_INFO.description}
                </p>
              </div>

              {/* Experience block */}
              <div className="space-y-4 mb-6">
                <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">Employment History</h4>
                <div className="space-y-5">
                  {EXPERIENCE.map(item => (
                    <div key={item.id} className="space-y-1.5">
                      <div className="flex justify-between items-start text-xs">
                        <span className="font-bold text-zinc-200">{item.role} @ <span className="text-cyan-400">{item.company}</span></span>
                        <span className="font-mono text-[9px] text-zinc-500 shrink-0">{item.duration}</span>
                      </div>
                      <ul className="space-y-1 text-xs text-zinc-450 pl-3 list-none">
                        {item.responsibilities.slice(0, 2).map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-400 mr-2 shrink-0">&bull;</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Summarizer Grid */}
              <div className="space-y-4 pt-1 mb-6">
                <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">Technical Core Stack</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {SKILLS.slice(0, 8).map((skill, i) => (
                    <div key={i} className="flex justify-between items-center p-2 border border-zinc-900 bg-zinc-950/20 rounded font-mono text-[10px]">
                      <span className="text-zinc-400">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Row */}
              <div className="space-y-3 pt-1">
                <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">Verified Credentials</h4>
                <div className="space-y-2">
                  {CERTIFICATIONS.map(cert => (
                    <div key={cert.id} className="flex justify-between items-center text-xs">
                      <span className="text-zinc-350">{cert.name}</span>
                      <span className="font-mono text-[9px] text-zinc-500">{cert.organization} ({cert.year})</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Gemini AI Cover Letter wizard */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="border border-[#2563EB]/25 bg-[#0C1221] rounded-xl p-6 relative shadow-[0_15px_35px_rgba(37,99,235,0.04)]">
              
              {/* Cover Letter Title */}
              <div className="absolute top-4 right-4 font-mono text-[9px] text-[#00E5FF] uppercase flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse shrink-0" />
                <span>Gemini API Powered</span>
              </div>

              <h4 className="font-sans font-bold text-lg text-zinc-100 mb-2 mt-2">
                Custom Cover Letter Engine
              </h4>
              <p className="font-sans text-xs text-zinc-400 mb-6 leading-relaxed">
                Hiring Jahnavi? Input your target details below and watch Gemini customize her curriculum credentials to align with your organization's criteria!
              </p>

              {/* Formulation Form */}
              <form onSubmit={handleGenerateLetter} className="space-y-4 font-mono text-xs">
                
                {/* Target Company Name */}
                <div className="space-y-1">
                  <label className="text-zinc-400 uppercase tracking-wide text-[10px] flex items-center space-x-1">
                    <Building className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>Target Company Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Cognitive Innovations Inc."
                    className="w-full px-3 py-2 bg-zinc-950/50 border border-zinc-800 focus:border-cyan-400 rounded outline-none text-zinc-200 transition-colors"
                  />
                </div>

                {/* Target Role Title */}
                <div className="space-y-1">
                  <label className="text-zinc-400 uppercase tracking-wide text-[10px] flex items-center space-x-1">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>Target Role / Position Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Senior Machine Learning Engineer"
                    className="w-full px-3 py-2 bg-zinc-950/50 border border-zinc-800 focus:border-cyan-400 rounded outline-none text-zinc-200 transition-colors"
                  />
                </div>

                {/* Target Job specification parameters */}
                <div className="space-y-1">
                  <label className="text-zinc-400 uppercase tracking-wide text-[10px] flex items-center space-x-1">
                    <Terminal className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>Optional Job Specifications / Focus Stacks</span>
                  </label>
                  <textarea
                    rows={3}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Requires expertise in Python core pipelines, React UI dashboards, OpenCV filters or MediaPipe mesh estimation..."
                    className="w-full px-3 py-2 bg-zinc-950/50 border border-zinc-800 focus:border-cyan-400 rounded outline-none text-zinc-200 transition-colors font-sans"
                  />
                </div>

                {/* Error field */}
                {errorWord && (
                  <div className="p-3 border border-rose-500/20 bg-rose-500/5 text-rose-450 rounded font-sans text-xs">
                    {errorWord}
                  </div>
                )}

                {/* Trigger Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded font-sans font-semibold tracking-wide transition-all shadow-[0_3px_15px_rgba(37,99,235,0.25)] flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                      <span>COGNITIVE_MODEL_SOLVING...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 shrink-0" />
                      <span>COMPILE_COVER_LETTER</span>
                    </>
                  )}
                </button>

              </form>

              {/* Custom Cover letter results block */}
              {generatedLetter && (
                <div className="mt-6 space-y-3 font-sans border-t border-zinc-900 pt-5 text-left">
                  
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-[#00E5FF] flex items-center space-x-1">
                      <RefreshCw className="w-3 h-3 animate-spin text-cyan-450 mr-1" />
                      <span>LETTER_COMPILED::SUCCESS</span>
                    </span>
                    <button
                      onClick={copyToClipboard}
                      className="px-2.5 py-1 border border-zinc-850 hover:border-cyan-400 rounded bg-zinc-950/40 text-zinc-400 hover:text-white transition-colors flex items-center space-x-1"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Clipboard className="w-3.5 h-3.5" />}
                      <span>{isCopied ? "COPIED" : "COPY_CODE"}</span>
                    </button>
                  </div>

                  <div className="w-full bg-zinc-950/80 p-4 border border-zinc-900 rounded font-sans text-xs text-zinc-300 max-h-56 overflow-y-auto whitespace-pre-line leading-relaxed scrollbar-thin">
                    {generatedLetter}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
