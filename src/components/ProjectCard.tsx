import type React from "react";
import { Button, Card } from "flowbite-react";
import { FaCode } from "react-icons/fa";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
  key: number;
  project: Project;
}

interface Project {
  id: number;
  title: string;
  duration: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ key, project }) => {
  return (
    <Card key={key} className="transition-shadow duration-300 hover:shadow-lg">
      <div className="flex h-48 items-center justify-center rounded-t-lg bg-blue-100">
        {/* Replace with actual project images */}
        <FaCode className="h-24 w-24 text-blue-300" />
        {/* <img src={project.image} alt={project.title} className="h-full w-full object-cover" /> */}
      </div>
      <h5 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
        {project.title}
      </h5>
      <p className="mb-2 text-sm text-gray-500">{project.duration}</p>
      <p className="mb-4 font-normal text-gray-700">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <SkillBadge key={index} tech={tech} index={index} />
        ))}
      </div>
      <Button href={`/projects/${project.id}`} color="blue">
        View Project Details
      </Button>
    </Card>
  );
};

export default ProjectCard;
