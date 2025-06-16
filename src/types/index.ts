
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface LabChallenge {
  id: string;
  title: string;
  category: 'CTF' | 'Vulnerability Assessment' | 'Network Security' | 'Incident Response';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  problemStatement: string;
  approach: string;
  toolsUsed: string[];
  keyLearnings: string[];
  completionDate: string;
  screenshotUrls?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}
