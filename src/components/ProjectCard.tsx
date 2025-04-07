import type React from "react";
import { Button, Card, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { FaCode } from "react-icons/fa";
import SkillBadge from "./SkillBadge";
import type { Project } from "../models/project.model";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  key: number;
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ key, project }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Card
        key={key}
        className="transition-shadow duration-300 hover:shadow-lg"
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-48 w-full rounded-t-lg object-cover"
          />
        ) : (
          <div className="flex h-48 items-center justify-center rounded-t-lg bg-blue-100">
            <FaCode className="h-24 w-24 text-blue-300" />
          </div>
        )}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {project.title}
          </h5>
          <div className="mb-3 text-sm text-gray-500">{project.timeline}</div>
          <p className="mb-4 font-normal text-gray-700">
            {project.shortDescription}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, index) => (
              <SkillBadge key={index} tech={tech} index={index} />
            ))}
            {project.technologies.length > 5 && (
              <span className="flex items-center text-xs text-gray-500">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          <Button
            color="blue"
            onClick={() => handleOpenModal(project)}
            className="w-full"
          >
            View Details
          </Button>
        </div>
      </Card>

      {/* Project Details Modal */}
      <Modal show={openModal} onClose={handleCloseModal} size="4xl">
        {selectedProject && (
          <>
            <ModalHeader>{selectedProject.title}</ModalHeader>
            <ModalBody>
              <div className="space-y-6">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="h-64 w-full rounded-lg object-cover"
                />

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Timeline</h3>
                  <p>{selectedProject.timeline}</p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Problem Statement
                  </h3>
                  <p>{selectedProject.problem}</p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Approach</h3>
                  <p>{selectedProject.approach}</p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Results & Metrics
                  </h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {selectedProject.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {selectedProject.demoLink && (
                    <Button
                      as={Link}
                      to={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </Button>
                  )}
                  {selectedProject.repoLink && (
                    <Button
                      as={Link}
                      color="light"
                      to={selectedProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </Button>
                  )}
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </Modal>
    </>
  );
};

export default ProjectCard;
