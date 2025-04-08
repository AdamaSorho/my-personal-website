import { Button } from "flowbite-react";
import type React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  name: string;
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, title }) => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-900 py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center md:flex md:items-center md:justify-between md:text-left">
          <div className="md:w-2/3">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{name}</h1>
            <h2 className="mb-6 text-2xl font-light md:text-3xl">{title}</h2>
            <p className="mb-8 text-xl">
              Specializing in Java, Python, and AI/ML with a passion for
              building scalable solutions
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <Button
                as={Link}
                to={"/projects"}
                className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800"
                size="lg"
              >
                View My Work
              </Button>
              <Button as={Link} to={"/contact"} color="light" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/3">
            {/* Placeholder for a professional image or illustration */}
            <div className="mx-auto mt-8 flex h-64 w-64 items-center justify-center rounded-full bg-white/20 md:mt-0">
              <FaCode className="h-32 w-32 text-white/50" />
              {/* Replace with your actual image: <img src="/your-profile-image.jpg" alt="Adama Sorho" className="rounded-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
