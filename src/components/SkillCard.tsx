import { Card } from "flowbite-react";
import type { SkillCategory } from "../models/skill.model";
import SkillProgress from "./SkillProgress";
import type React from "react";

interface SkillCardProps {
  key: string;
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ key, category }) => {
  return (
    <Card key={key} className="transition-shadow duration-300 hover:shadow-lg">
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {category.title}
        </h3>
        <p className="mb-4 text-gray-600">{category.description}</p>

        <div className="space-y-4">
          {category.skills.map((skill) => (
            <SkillProgress key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SkillCard;
