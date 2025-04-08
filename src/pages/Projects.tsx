import React from "react";
import { Button } from "flowbite-react";
import HeaderHeroSection from "../components/HeaderHeroSection";
import { projectsData } from "../utils/data";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderHeroSection
        title="Projects"
        subtitle="Explore my recent work in AI and machine learning"
      />

      {/* Project Grid */}
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-8 rounded-lg bg-blue-50 p-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">
          Interested in collaborating or learning more?
        </h3>
        <p className="mb-6 text-gray-700">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <Button as={Link} to="/contact" size="lg">
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default ProjectsPage;
