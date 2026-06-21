export interface Skill {
  name: string;
  category: "languages" | "web-tech" | "ai-ml" | "tools";
  level: number; // 0 to 100
  iconName: string; // Dynamic icon rendering helper
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "ai-ml" | "full-stack" | "tools";
  tags: string[];
  features: string[];
  github: string;
  demo?: string;
  videoLink?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
  current?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  year: string;
  certificateLink: string;
  credentialId?: string;
}
