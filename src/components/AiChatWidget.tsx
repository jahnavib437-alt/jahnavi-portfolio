import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, X, Send, Terminal, Cpu, Loader2, 
  Sparkles, CornerDownLeft, AlertCircle 
} from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

interface AiChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function AiChatWidget({ isOpen, onToggle }: AiChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hi! I am Jahnavi B's virtual AI representative. Ask me anything about her skills, academic milestones, or certifications, or click one of the quick suggestions below to begin!"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  const presetQuestions = [
    "What is Jahnavi's core tech stack?",
    "Tell me about the VigilDrive project.",
    "Details on the Driverless Auto Pilot Car.",
    "Is she open to internships?",
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;
    
    setErrorText("");
    const userMsg: Message = { role: "user", text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputVal("");
    setIsLoading(true);

    // Prepare conversation history payload
    // Exclude the initial greeting for cleaner system instruction contexts
    const chatHistory = messages.slice(1).map(m => ({
      role: m.role,
      text: m.text
    }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, history: chatHistory }),
      });
      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: "model", text: data.text }]);
      } else {
        setErrorText(data.error || "An issue occurred querying representative.");
      }
    } catch (err: any) {
      setErrorText("Failed to establish full-stack connection sequence: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputVal);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        <button
          onClick={onToggle}
          className="relative group p-4 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_25px_rgba(37,99,235,0.45)] border border-cyan-400/30 flex items-center justify-center cursor-pointer"
          title="Talk with my AI Representative Double!"
        >
          <MessageSquare className="w-6 h-6 text-white shrink-0 animate-pulse" />
          
          {/* Bubbling helper label tag on hover */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0E1321] border border-cyan-500/20 text-cyan-400 text-[10px] font-mono px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            <span>TALK_WITH_AI_REPRESENTATIVE</span>
          </div>

          {/* Core ping indicator */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-[370px] bg-[#0E1321] border border-cyan-500/30 rounded-xl shadow-[0_15px_45px_rgba(0,229,255,0.12)] flex flex-col max-h-[500px] overflow-hidden group font-sans animate-scale-up">
      
      {/* Sci-fi bracket corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400 rounded-tl-xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-400 rounded-bl-xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400 rounded-br-xl pointer-events-none" />

      {/* Card Header information panel */}
      <div className="p-4 bg-black/40 border-b border-zinc-900/60 flex items-center justify-between">
        <div className="flex items-center space-x-2 font-mono text-[10px]">
          <Cpu className="w-4 h-4 text-cyan-400 animate-spin shrink-0" />
          <div className="flex flex-col text-left">
            <span className="text-cyan-400 font-bold uppercase">REPRESENTATIVE_AI</span>
            <span className="text-zinc-500 text-[8px]">CORE: GEMINI-3.5-FLASH</span>
          </div>
        </div>

        {/* Collapsing trigger */}
        <button
          onClick={onToggle}
          className="p-1 border border-zinc-850 hover:border-cyan-400/40 rounded bg-zinc-950/20 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4 shrink-0" />
        </button>
      </div>

      {/* Messages viewport */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[290px] scrollbar-thin select-text">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col max-w-[85%] ${
              msg.role === "user" ? "ml-auto text-right items-end" : "mr-auto text-left items-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg text-xs leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-tr-none shadow-[0_2px_10px_rgba(37,99,235,0.2)]"
                  : "bg-zinc-900 border border-zinc-850 text-zinc-300 rounded-tl-none"
              }`}
            >
              {msg.text}
            </div>
            <span className="font-mono text-[8px] text-zinc-600 mt-1 uppercase tracking-widest">
              {msg.role === "user" ? "sender_client" : "system_agent"}
            </span>
          </div>
        ))}

        {/* Dynamic server compiling indicator */}
        {isLoading && (
          <div className="flex flex-col max-w-[80%] mr-auto text-left items-start">
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 rounded-tl-none flex items-center space-x-2">
              <Loader2 className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#00E5FF]">generating_response...</span>
            </div>
          </div>
        )}

        {/* Error panel */}
        {errorText && (
          <div className="p-3 border border-rose-500/20 bg-rose-500/5 text-rose-450 rounded text-xs flex items-start space-x-1.5 leading-snug">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span className="font-mono text-[10px]">{errorText}</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Presets Quick Toggles list */}
      {messages.length < 3 && !isLoading && (
        <div className="px-4 pb-2 text-left space-y-1.5 font-mono text-[9px] border-t border-zinc-950 pt-2 bg-black/15">
          <span className="text-zinc-600 uppercase">SUGGESTED_PROMPTS::</span>
          <div className="flex flex-wrap gap-1">
            {presetQuestions.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="px-2 py-1 border border-zinc-850 hover:border-cyan-500/30 text-zinc-400 hover:text-[#00E5FF] bg-zinc-900/40 rounded transition-colors"
              >
                &gt; {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Submission panel console */}
      <form 
        onSubmit={handleFormSubmit}
        className="p-3 bg-black/40 border-t border-zinc-900/60 flex items-center space-x-2"
      >
        <div className="relative flex-1 flex items-center">
          <input
            type="text"
            required
            disabled={isLoading}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type in questions about credentials..."
            className="w-full bg-zinc-950/80 border border-zinc-850 focus:border-cyan-400 rounded pl-3 pr-8 py-2 outline-none text-zinc-300 text-xs transition-colors shrink-0"
          />
          <span className="absolute right-2.5 text-zinc-600 font-mono text-[9px]">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </span>
        </div>
        <button
          type="submit"
          disabled={isLoading || !inputVal.trim()}
          className="p-2 border border-cyan-400/40 hover:border-cyan-400 rounded bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 hover:text-cyan-300 disabled:opacity-40 transition-colors shrink-0"
        >
          <Send className="w-4 h-4 shrink-0" />
        </button>
      </form>

    </div>
  );
}
