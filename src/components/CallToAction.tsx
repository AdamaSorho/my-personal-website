import { Button } from "flowbite-react";
import type React from "react";
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  subtitle: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold">{title}</h2>
        <p className="mb-8 text-xl">{subtitle}</p>
        <div className="flex justify-center gap-4">
          <Button
            as={Link}
            to={`mailto:adamasorho36@gmail.com`}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"
            size="lg"
          >
            Contact Me
          </Button>
          <Button as={Link} to="/projects" color="light" size="lg">
            View My Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
