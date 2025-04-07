import React from "react";
import { Timeline, Button } from "flowbite-react";
import { experienceData } from "../utils/data";
import ExperiencedCard from "../components/ExperiencedCard";
import HeaderHeroSection from "../components/HeaderHeroSection";

const ExperiencePage: React.FC = () => {
  // Helper function to get achievement icon

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <HeaderHeroSection
        title="Work Experience"
        subtitle="My professional journey as a Software Engineer over the past 7+ years"
      />

      {/* Experience Timeline */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <Timeline>
            {experienceData.jobs.map((job, jobIndex) => (
              <ExperiencedCard key={jobIndex} job={job} jobIndex={jobIndex} />
            ))}
          </Timeline>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Skills Overview
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Throughout my career, I've developed expertise in various
            technologies and methodologies. From backend development with Java
            and Spring Boot to cloud infrastructure with AWS, and machine
            learning with Python, I bring a diverse skill set to every project.
          </p>
          <Button href="/skills" color="blue">
            Explore My Full Skill Set
          </Button>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Interested in My Experience?
          </h2>
          <p className="mb-8 text-xl">
            Let's discuss how my background can help with your next project.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"
              size="lg"
            >
              Contact Me
            </Button>
            <Button color="light" size="lg">
              View My Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
