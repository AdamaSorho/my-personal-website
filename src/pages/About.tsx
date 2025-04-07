import React from "react";
import {
  Card,
  Timeline,
  Button,
  TimelineItem,
  TimelineContent,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from "flowbite-react";
import { HiAcademicCap, HiCalendar, HiLightBulb, HiCog } from "react-icons/hi";
import { aboutData } from "../utils/data";
import HeaderHeroSection from "../components/HeaderHeroSection";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeaderHeroSection
        title="About Me"
        subtitle="Get to know my professional journey, education, and what drives me
            as a software engineer."
      />

      {/* Professional Background */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Professional Background
          </h2>
          <div className="mb-12">
            <Card>
              <p className="mb-6 text-lg text-gray-700">{aboutData.summary}</p>
              {aboutData.professionalBackground.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </Card>
          </div>

          <div className="mt-8 flex justify-center">
            <Button href="/experience" color="blue">
              View My Experience Timeline
            </Button>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Education
          </h2>

          <Timeline>
            {aboutData.education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelinePoint icon={HiAcademicCap} />
                <TimelineContent>
                  <TimelineTime>
                    <div className="flex items-center text-gray-500">
                      <HiCalendar className="mr-2" />
                      {edu.period}
                    </div>
                  </TimelineTime>
                  <TimelineTitle>{edu.degree}</TimelineTitle>
                  <TimelineBody>
                    <p className="mb-2 font-medium text-blue-600">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.description}</p>
                  </TimelineBody>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

          {/* Certifications */}
          <h3 className="mt-12 mb-6 text-2xl font-semibold text-gray-800">
            Certifications
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {aboutData.certifications.map((cert, index) => (
              <Card key={index} className="transition-shadow hover:shadow-md">
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <HiCog className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Philosophy */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            My Work Philosophy
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {aboutData.workPhilosophy.map((philosophy, index) => (
              <Card key={index} className="transition-shadow hover:shadow-md">
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <HiLightBulb className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      {philosophy.title}
                    </h3>
                    <p className="text-gray-600">{philosophy.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Interested in Working Together?
          </h2>
          <p className="mb-8 text-xl">
            I'm always open to discussing new projects, opportunities, and
            collaborations.
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

export default AboutPage;
