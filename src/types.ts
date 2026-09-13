export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  category: 'AI & Web' | 'Industry & Systems' | 'Education & Mentoring';
  role: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  outcomeOrImpact: string;
  keyLearning: string;
  badge: string;
  accentColor?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
  semesterScores?: { semester: string; score: string }[];
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: string;
  badgeColor?: string;
}
