export interface Experience {
  jobs: Job[];
}

export interface Job {
  title: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  achievements?: string[];
  technologies?: string[];
}
