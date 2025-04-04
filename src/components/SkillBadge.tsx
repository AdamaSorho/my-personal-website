import { Badge } from "flowbite-react";
import type React from "react";

interface SkillBadgeProps {
  tech: string;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ tech, index }) => {
  return (
    <Badge key={index} color="info" className="text-xs">
      {tech}
    </Badge>
  );
};

export default SkillBadge;
