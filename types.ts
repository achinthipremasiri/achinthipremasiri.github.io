export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  year: string;
  description: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  citation: string;
  link?: string;
  status?: 'Published' | 'In Press' | 'In Preparation';
}

export interface SkillItem {
  category: string;
  items: string[];
}

export interface ReferenceItem {
  id: string;
  name: string;
  title: string;
  department: string;
  university: string;
  email: string;
  phone: string;
}
