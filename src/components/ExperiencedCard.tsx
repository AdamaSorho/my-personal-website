import {
  Badge,
  Card,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import type React from "react";
import {
  HiBriefcase,
  HiCalendar,
  HiCheckCircle,
  HiChip,
  HiCode,
  HiDatabase,
  HiLightningBolt,
  HiServer,
} from "react-icons/hi";
import type { Job } from "../models/experience.model";

interface ExperiencedCardProps {
  job: Job;
  jobIndex: number;
}

const ExperiencedCard: React.FC<ExperiencedCardProps> = ({ job, jobIndex }) => {
  const getAchievementIcon = (index: number) => {
    const icons = [
      HiCode,
      HiServer,
      HiDatabase,
      HiChip,
      HiLightningBolt,
      HiCheckCircle,
    ];
    return icons[index % icons.length];
  };

  return (
    <TimelineItem key={jobIndex}>
      <TimelinePoint icon={HiBriefcase} />
      <TimelineContent>
        <TimelineTime>
          <div className="flex items-center text-gray-500">
            <HiCalendar className="mr-2" />
            {job.period}
          </div>
        </TimelineTime>
        <TimelineTitle className="flex flex-wrap items-center justify-between">
          <span>{job.title}</span>
          <Badge color="indigo" className="mt-1 ml-2">
            {job.company}
          </Badge>
        </TimelineTitle>

        <TimelineBody>
          <p className="mb-4 text-gray-600">{job.description}</p>

          <Card className="mb-4">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              Key Achievements
            </h3>
            <ul className="space-y-4">
              {job.achievements?.map((achievement, achievementIndex) => {
                const Icon = getAchievementIcon(achievementIndex);
                return (
                  <li key={achievementIndex} className="flex">
                    <div className="mr-3 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                );
              })}
            </ul>
          </Card>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.technologies?.map((tech, techIndex) => (
                <Badge key={techIndex} color="info" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </TimelineBody>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperiencedCard;
