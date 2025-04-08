import { Card } from "flowbite-react";
import type React from "react";
import { HiExternalLink } from "react-icons/hi";
import type { Certification } from "../models/certification.model";
import SkillBadge from "./SkillBadge";

interface CertificationCardProps {
  index: number;
  cert: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  index,
  cert,
}) => {
  return (
    <Card
      key={index}
      className="transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h4 className="mb-1 text-lg font-bold">{cert.name}</h4>
          <span className="text-sm text-gray-500">{cert.year}</span>
        </div>
        <p className="mb-3 text-gray-700">Issued by: {cert.issuer}</p>

        <div className="mb-4">
          <h5 className="mb-2 text-sm font-semibold text-gray-600">
            Related Skills:
          </h5>
          <div className="flex flex-wrap gap-2">
            {cert.skills?.map((skill, index) => (
              <SkillBadge key={index} tech={skill} index={index} />
            ))}
          </div>
        </div>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
        >
          Verify Credential
          <HiExternalLink className="ml-1" />
        </a>
      </div>
    </Card>
  );
};

export default CertificationCard;
