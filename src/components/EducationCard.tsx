import React from "react";
import type { Education } from "../models/education.model";
import { Card } from "flowbite-react";

interface EducationCardProps {
  key: number;
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ key, education }) => {
  return (
    <Card key={key}>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold">{education.degree}</h3>
        <h4 className="mb-1 text-lg text-gray-700">{education.institution}</h4>
        <p className="mb-2 text-gray-600">{education.major}</p>
      </div>
    </Card>
  );
};

export default EducationCard;
