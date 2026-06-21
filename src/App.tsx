import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import AiChatWidget from "./components/AiChatWidget";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isChatWidgetOpen, setIsChatWidgetOpen] = useState(false);

  // Set up clean Intersection Observer tracking section states for navbar offsets
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "certifications",
      "resume",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -60% 0px", // Trigger when the section occupies a significant portion of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-[#0B0F19] min-h-screen text-zinc-100 flex flex-col font-sans transition-colors duration-500 overflow-x-hidden selection:bg-cyan-500/35 selection:text-white">
      {/* Premium Floating Navigation Header bar */}
      <Navbar activeSection={activeSection} />

      {/* Structured Sections list */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Core scifi side lines overlays replicating the aesthetic in the uploaded video */}
        <div className="hidden xl:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-purple-500/10 pointer-events-none" />
        <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/10 via-cyan-500/5 to-blue-500/10 pointer-events-none" />

        <Hero onStartChat={() => setIsChatWidgetOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      {/* Conversational Floating Representative AI Double Capsule */}
      <AiChatWidget 
        isOpen={isChatWidgetOpen} 
        onToggle={() => setIsChatWidgetOpen(!isChatWidgetOpen)} 
      />
    </div>
  );
}
