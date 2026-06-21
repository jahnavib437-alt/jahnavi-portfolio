import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazily initialising the Gemini SDK
let aiClient: GoogleGenAI | null = null;
function getAi() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Interactive AI portfolio representative chatbot routing
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const isMock = !apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.includes("MY_GEMINI");

    if (isMock) {
      // Offline fallback mode to guarantee flawless functionality even before recruiter installs secrets!
      return res.json({
        text: `[Representative AI: Offline Mode Active]\n\nHi! I am Jahnavi B's virtual representative. It looks like the live Gemini API Key is not active yet, but I can still share her core details!\n\nJahnavi B is a **Computer Science Undergraduate** at Shri Siddhartha Institute of Technology with a CGPA of **9.0 / 10.0** and expertise in Python, C, Java, and Django. Some of her major achievements include developing the **VigilDrive AI-Powered Driver Monitoring platform** (fatigue detection using Python and OpenCV) and configuring a **Driverless Auto Pilot Car IoT mode** with real-time analytics.\n\nType in questions like *'What programming languages do you know?'* or *'Tell me about VigilDrive'* and see how she can fit into your technical team! Feel free to mail her at [jahnavib437@gmail.com](mailto:jahnavib437@gmail.com).`,
        isOffline: true
      });
    }

    const ai = getAi();
    const systemInstruction = `You are the Virtual AI Representative of Jahnavi B, a brilliant Computer Science Undergraduate.
Your goal is to represent Jahnavi professionally, intelligently, and enthusiastically to technical recruiters, hiring managers, and developer peer leads.
You have access to her complete background information:
- Name: Jahnavi B
- Role: Computer Science Undergraduate & Software Developer
- Education: Shri Siddhartha Institute of Technology (B.E. Computer Science, 2023 - 2027), CGPA: 9.0 / 10.0
- Key tech stack: Python, C, Java, JavaScript, C++, SQL, HTML/CSS, Django, Flask, React, Node.js, REST APIs, SQLite, MySQL, MongoDB, Git & VS Code.
- Focus Areas: Concurrency, Multithreading, Data Structures, Asynchronous backends, Real-time telemetry monitoring.
- Key Projects:
  1. VigilDrive AI-Powered Driver Monitoring: Real-time computer vision (Python/OpenCV/Machine Learning) determining driver fatigue metrics, EAR ratios, and multithreaded stream acquisitions.
  2. medico website: Django-driven medicine scheduler using REST APIs, PostgreSQL and SQLite db managers.
  3. Recipe Sharing Hub: Django web application using core auth validators, search algorithms, and responsive interfaces.
  4. Driverless Auto Pilot Car IoT Mode: Integrates IoT sensors and predictive analytics to simulate low-latency vehicle-to-cloud telemetry.
- Certifications: Verified NPTEL Computer Science modules and Infosys Springboard certificates.
- Contact: jahnavib437@gmail.com, GitHub & LinkedIn links available in the portfolio headers.

Style guidelines:
- Speak elegantly, with precision, confidence, and helpful engineering vocabulary.
- Keep responses relatively concise and extremely structured. Use lists, bold terms, or clean bullet blocks where appropriate.
- Always highlight her analytical mastery, academic discipline, dedication to robust data structures, and safe concurrency.
- If asked about fellowships or internships, politely direct them to write directly to Jahnavi's email at jahnavib437@gmail.com.
- Never make up fake stats; stick strictly to her verified portfolio specifications. Mention she is highly versatile and looking forward to technical evaluations!`;

    const contents = [];
    if (history && Array.isArray(history)) {
      for (const turn of history) {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }]
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in server representative chat proxy:", error);
    res.status(500).json({ error: "Sorry, I had an issue processing that answer. Error: " + error.message });
  }
});

// AI Cover Letter Builder endpoint matching Jahnavi B's skills to custom jobs
app.post("/api/generate-cover-letter", async (req, res) => {
  try {
    const { company, role, description } = req.body;
    if (!company || !role) {
      return res.status(400).json({ error: "Company and Role are required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const isMock = !apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.includes("MY_GEMINI");

    if (isMock) {
      // Mock Cover Letter fallback
      return res.json({
        letter: `Dear Hiring Team at ${company},\n\nI am writing to express my enthusiastic interest in the ${role} position. Given my background as a Computer Science Undergraduate at Shri Siddhartha Institute of Technology (maintaining a 9.0/10.0 CGPA), I am confident in my ability to deliver highly scalable, modern computational products that support your development engineering roadmap.\n\nThroughout my academic journey and independent project work, I have focused on Python, Django, C, Java, and SQLite/PostgreSQL databases. In building VigilDrive (AI-Powered Driver Monitoring), I constructed robust multithreaded frame consumers in Python and OpenCV. My additional work on Driverless Auto Pilot Car IoT modes trained me in handling real-time telemetry pipelines and low-latency cloud synchronization safely.\n\nI would love to learn more about how my focus on concurrency, data structures, and robust backends fits your current roadmap. Thank you for your consideration, and I look forward to connecting!\n\nSincerely,\nJahnavi B\njahnavib437@gmail.com`
      });
    }

    const ai = getAi();
    const prompt = `Write a high-impact, professional, customized cover letter for:
- Developer Name: Jahnavi B (Computer Science Undergraduate)
- Target Company: ${company}
- Target Role: ${role}
- Job Description details provided: ${description || "General position matching Python, Django full-stack or multi-threaded C/Java system engineering"}

Ensure the letter references her true background products:
- Shri Siddhartha Institute of Technology (B.E. Computer Science, 2023 - 2027), CGPA: 9.0 / 10.0
- VigilDrive AI-Powered Driver Monitoring (Python, OpenCV, EAR Fatigue Metrics)
- medico website scheduler (Django backend, REST APIs, PostgreSQL/SQLite database management)
- Driverless Auto Pilot Car IoT Mode (Simulating low-latency vehicle-to-cloud metrics)
- Certifications including NPTEL and Infosys Springboard certifications

The tone should be professional, respectful, mathematically grounded, and exciting, highlighting how her exact technical skills in algorithms, concurrency, and backend databases will solve developer objectives. Format the response as a ready-to-copy/paste markdown layout. Do not include extra commentary, just the cover letter template.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.75,
      }
    });

    res.json({ letter: response.text });
  } catch (error: any) {
    console.error("Cover letter generation error inside proxy:", error);
    res.status(500).json({ error: "Failed to compile custom cover letter: " + error.message });
  }
});

// Setup Vite Dev Middleware vs Serving Compiled Static Files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development server with Vite mounting
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Mounted Vite development middleware.");
  } else {
    // Serving compiled bundle in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log(`Serving static production build from: ${distPath}`);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express Portfolio Server running on port ${PORT}`);
  });
}

startServer();
