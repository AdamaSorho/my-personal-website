import React from "react";
import type { Education } from "../models/education.model";
import { Card } from "flowbite-react";

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <Card>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold">{education.degree}</h3>
        <h4 className="mb-1 text-lg text-gray-700">{education.institution}</h4>
        <p className="mb-2 text-gray-600">{education.major}</p>
        {(education.period || education.location) && (
          <p className="mb-2 text-sm text-gray-500">
            {[education.period, education.location].filter(Boolean).join(" • ")}
          </p>
        )}
        {education.description && (
          <p className="text-sm text-gray-600">{education.description}</p>
        )}
      </div>
    </Card>
  );
};

export default EducationCard;
