import React from "react";
import { Timeline, Button } from "flowbite-react";
import { experienceData } from "../utils/data";
import ExperiencedCard from "../components/ExperiencedCard";
import HeaderHeroSection from "../components/HeaderHeroSection";
import CallToAction from "../components/CallToAction";

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
      <CallToAction
        title="Interested in My Experience?"
        subtitle="Let's discuss how my background can help with your next project."
      />
    </div>
  );
};

export default ExperiencePage;
