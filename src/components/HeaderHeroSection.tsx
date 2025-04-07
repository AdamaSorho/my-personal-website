import type React from "react";

interface HeaderHeroSectionProps {
  title: string;
  subtitle: string;
}

const HeaderHeroSection: React.FC<HeaderHeroSectionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-indigo-900 py-20 text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto max-w-3xl text-center text-xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeaderHeroSection;
