import React from "react";
import { Button, Progress } from "flowbite-react";
import { FaJava, FaPython, FaDatabase, FaBrain } from "react-icons/fa";
import { SiSpringboot, SiAmazon } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import HeroSection from "../components/heroSection";
import { projectsData } from "../utils/data";

const HomePage: React.FC = () => {
  // Resume data
  const userData = {
    name: "Adama Sorho",
    title: "Senior Software Engineer",
    summary:
      "Results-driven Software Engineer with 7+ years of experience in designing and implementing scalable solutions. Strong expertise in Java, Python, Spring Boot, FastAPI, and cloud technologies. Solid understanding of machine learning principles, AI implementation, and debugging techniques.",
    yearsExperience: 7,
    skills: [
      { name: "Java", icon: <FaJava className="h-6 w-6" />, level: 90 },
      { name: "Python", icon: <FaPython className="h-6 w-6" />, level: 85 },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="h-6 w-6" />,
        level: 90,
      },
      { name: "AWS", icon: <SiAmazon className="h-6 w-6" />, level: 80 },
      {
        name: "Databases",
        icon: <FaDatabase className="h-6 w-6" />,
        level: 85,
      },
      {
        name: "Machine Learning",
        icon: <FaBrain className="h-6 w-6" />,
        level: 75,
      },
    ],
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection name={userData.name} title={userData.title} />

      {/* Brief About Me */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">About Me</h2>
          <p className="mb-8 text-lg text-gray-600">{userData.summary}</p>
          <Button href="/about" color="light" className="mt-4">
            Learn More About Me
          </Button>
        </div>
      </section>

      {/* Highlighted Skills */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Key Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {userData.skills.map((skill, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 text-blue-600">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <Progress
                  progress={skill.level}
                  progressLabelPosition="inside"
                  textLabel={`${skill.level}%`}
                  size="lg"
                  color="blue"
                  className="mb-2"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/skills" color="light">
              View All Skills
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/projects" color="light">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-20 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Collaborate?</h2>
          <p className="mb-8 text-xl">
            I'm currently open to new opportunities and exciting projects. Let's
            discuss how we can work together.
          </p>
          <Button
            className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800"
            size="lg"
          >
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
