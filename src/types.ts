export type SkillCategory = 'Currently Learning' | 'Building With' | 'Exploring';

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
  focusArea: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  keyConcepts: string[];
  category: 'Python' | 'Creative & Media' | 'Interactive';
  detailedOverview: string;
  logicHighlights: string[];
}

export interface HackathonActivity {
  title: string;
  actionWord: 'Exploring' | 'Participating' | 'Building' | 'Learning' | 'Experimenting';
  focus: string;
  description: string;
  takeaway: string;
}

export interface VisionArea {
  title: string;
  description: string;
  status: 'Future Learning Goal';
}
