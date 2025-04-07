export interface Project {
  id: string;
  title: string;
  timeline: string;
  problem: string;
  solution?: string;
  technologies: string[];
  results: string[];
  demoLink?: string;
  repoLink?: string;
  imageUrl?: string;
  details?: string;
  challenges?: string[];
  contributions?: string[];
  shortDescription?: string;
  approach?: string;
}
