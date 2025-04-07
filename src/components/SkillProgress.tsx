import { Progress } from "flowbite-react";
import type { Skill } from "../models/skill.model";
import type React from "react";

interface SkillProgressProps {
  key: string;
  skill: Skill;
}

// Function to determine progress color based on skill level
const getProgressColor = (level: number): string => {
  if (level >= 90) return "blue";
  if (level >= 80) return "green";
  if (level >= 70) return "purple";
  if (level >= 60) return "yellow";
  return "gray";
};

// Function to determine text for skill level
const getSkillLevelText = (level: number): string => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 60) return "Intermediate";
  return "Foundational";
};

const SkillProgress: React.FC<SkillProgressProps> = ({ key, skill }) => {
  return (
    <div key={key}>
      <div className="mb-1 flex items-center justify-between">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className="text-xs text-gray-500">
          {getSkillLevelText(skill.level)}
        </span>
      </div>
      <Progress
        progress={skill.level}
        color={getProgressColor(skill.level)}
        size="sm"
        className="mb-2"
      />
    </div>
  );
};

export default SkillProgress;
