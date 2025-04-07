import React from "react";
import { educationData, skillsData, toolsData } from "../utils/data";
import HeaderHeroSection from "../components/HeaderHeroSection";
import SkillCard from "../components/SkillCard";
import EducationCard from "../components/EducationCard";

const SkillsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderHeroSection
        title="Skills & Expertise"
        subtitle="With over 7 years of experience, I've developed a comprehensive skill
          set spanning software development, AI/ML, cloud technologies, and
          DevOps practices."
      />

      {/* Skills Overview */}
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>

      {/* Tools & Technologies Section */}
      <div className="mb-12 rounded-lg bg-gray-50 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Tools & Technologies
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {toolsData.map((tool) => (
            <div
              key={tool}
              className="rounded-lg bg-white p-4 text-center shadow transition-shadow hover:shadow-md"
            >
              <div className="text-sm font-medium">{tool}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="mb-12">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Education Card */}
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}

          {/*todo: Add any certifications here in similar cards */}
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg bg-blue-50 p-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">
          Looking for these skills on your project?
        </h3>
        <p className="mb-6 text-gray-700">
          I'm available for challenging projects that require expertise in
          software engineering, AI implementation, and cloud infrastructure.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default SkillsPage;
