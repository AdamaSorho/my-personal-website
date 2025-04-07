export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}
