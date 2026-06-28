export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  role: string;
  metrics: { label: string; value: string }[];
  description: string;
  bullets: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  level: number; // percentage (e.g. 95)
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  timestamp: string;
}
