import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0B0F19]">
      {/* Background neon elements */}
      <div className="absolute top-[20%] right-[-15%] w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[115px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-10%] w-[30vw] h-[30vw] bg-cyan-600/5 rounded-full blur-[105px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section title header */}
        <div className="flex flex-col mb-16 space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400">
            <span>[05]</span>
            <span className="w-8 h-[1px] bg-blue-500/30" />
            <span className="uppercase tracking-widest">Achievements Verified</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Licenses &amp; Certifications
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-xl">
            A verified register of industry credentials verifying mathematical competency in artificial neural architectures and high-standards web development processes.
          </p>
        </div>

        {/* Dynamic Certification Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="border border-zinc-850/80 rounded-xl bg-black/40 p-6 flex flex-col justify-between hover:bg-black/55 hover:border-[#00E5FF]/45 hover:shadow-[0_10px_20px_rgba(0,180,216,0.06)] transition-all duration-300 relative group overflow-hidden"
            >
              
              {/* Corner decor tag */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-zinc-800 group-hover:bg-cyan-500 transition-colors" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:bg-zinc-850 transition-colors shrink-0">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  {cert.credentialId && (
                    <span className="font-mono text-[9px] text-zinc-500 hover:text-zinc-400 border border-zinc-850 bg-zinc-900/40 p-1 rounded">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-sm md:text-base text-zinc-250 group-hover:text-white transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400">
                    {cert.organization}
                  </p>
                </div>
              </div>

              {/* Verified Badge and credentials redirect link */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-900/80 font-mono text-xs">
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-[10px] uppercase font-semibold">VERIFIED_CREDENTIAL</span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1 text-zinc-500 text-[10px]">
                    <Calendar className="w-3 h-3 shrink-0" />
                    <span>{cert.year}</span>
                  </span>
                  
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-cyan-400 transition-colors"
                    title="Launch credentials verification link"
                  >
                    <ExternalLink className="w-4.5 h-4.5 shrink-0" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
