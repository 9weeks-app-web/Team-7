import Card from "../design/Card";
import Avatar from "../design/Avatar";
import Badge from "../design/Badge";
import TeamMemberAvatar from "./TeamMemberAvatar";
import { Project } from "../../types/projectTypes";

interface ProjectsProps {
  project: Project;
}
const ProjectCard = ({ project }: ProjectsProps) => {
  return (
    <Card>
      <div className="flex">
        <Avatar
          src={project.image}
          alt={project.image}
          width="w-[82px]"
          height="h-[82px]"
          border="rounded-[10px]"
          spacing="mr-[10px]"
        ></Avatar>
        <div>
          <Badge
            width="w-[78px]"
            height="h-[22px]"
            border="rounded"
            color={
              project.remainingTasks > 2
                ? "bg-primary-10 text-primary-100"
                : "bg-[#FFE5E5] text-system-red"
            }
            font="text-[10px] font-semibold"
          >
            <div className="flex">
              <img
                src={
                  project.remainingTasks > 2
                    ? "/ddayPrimary.svg"
                    : "/ddayWarning.svg"
                }
                alt="d-day-primary"
              />
              <span className="ml-[4px]">마감 D-{project.remainingTasks}</span>
            </div>
          </Badge>
          <h1 className="my-[6px] text-[20px] font-bold text-neutral-90">
            {project.name}
          </h1>
          <div className="flex text-sm">
            <span className="text-neutral-50">
              총인원 {project.totalMembers}
            </span>
            <span className="mx-[6px] text-neutral-10">|</span>
            <span
              className={`font-semibold ${
                project.recruitingMembers <= 2
                  ? "text-system-red"
                  : "text-primary-80"
              }`}
            >
              {project.recruitingMembers}명 모집 중
            </span>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px]">
        {project.categories.map((category) => (
          <Badge key={category} color="bg-[#F5F8FF] text-neutral-70 mr-[6px]">
            {category}
          </Badge>
        ))}
      </div>
      <div className="project-content text-neutral-50 text-sm mt-[10px]">
        <pre>{project.introduction}</pre>
      </div>
      <div className="mt-[40px]">
        <TeamMemberAvatar />
        <div className="caption text-neutral-40 float-right mt-[16px] px-[20px]">
          <span>{project.createdAt}일전</span>
          <span> • </span>
          <span>이번주 {project.hits} 조회</span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
