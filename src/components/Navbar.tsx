import { useState, useEffect } from "react";
import { Terminal, Menu, X, Cpu } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-md border-b border-blue-500/20 py-3 shadow-[0_10px_30px_rgba(0,229,255,0.05)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Cyber Terminal Accent */}
        <div 
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 border border-cyan-500/40 rounded-lg overflow-hidden bg-black/40 group-hover:border-cyan-400 transition-colors">
            <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs text-cyan-400 tracking-wider">SYSTEM.EXE</span>
            <span className="font-sans font-extrabold tracking-tight text-white flex items-center">
              JAHNAVI<span className="text-blue-500 font-mono text-sm stroke-1">.IO</span>
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1 bg-black/20 border border-white/5 p-1 rounded-full backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wide transition-all ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_2px_10px_rgba(0,229,255,0.2)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              &lt;{item.label} /&gt;
            </button>
          ))}
        </div>

        {/* Action Button - Header representative chat */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="relative px-4 py-2 border border-cyan-400/40 hover:border-cyan-400 rounded-md font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-all bg-transparent overflow-hidden group shadow-[0_0_15px_rgba(37,99,235,0.1)]"
          >
            <span className="relative z-10 flex items-center space-x-1.5">
              <Terminal className="w-3.5 h-3.5 shrink-0" />
              <span>LAUNCH_CONSOLE</span>
            </span>
            <div className="absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 border border-zinc-800 rounded-md text-zinc-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden absolute top-full left-0 w-full bg-[#0B0F19]/95 border-b border-zinc-800 backdrop-blur-lg px-6 py-5 animate-fade-in"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`w-full py-3 px-4 rounded-md font-mono text-xs text-left transition-all ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border-l-2 border-cyan-400 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3 flex items-center justify-center space-x-2 border border-cyan-400/40 rounded-md font-mono text-xs text-cyan-400"
              >
                <Terminal className="w-4 h-4" />
                <span>LAUNCH_CONSOLE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
