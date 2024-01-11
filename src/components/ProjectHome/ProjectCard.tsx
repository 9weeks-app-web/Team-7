import { ProjectInterest, ProjectHot } from "../../constants/projectHome";
import ProjectTeamMemberProfile from "./ProjectTeamMemberProfile";

interface ProjectHomeCardProps {
  projectData: ProjectHot | ProjectInterest;
}

const ProjectCard = ({ projectData }: ProjectHomeCardProps) => {
  return (
    <ul className="flex flex-wrap gap-x-[24px] gap-y-[30px] mb-[26px]">
      {projectData.map((projectItem) => (
        <li className="flex flex-col gap-[20px] w-[384px] h-[271px] bg-white rounded-[30px] p-[20px] shadow-shadow-2">
          <div className="flex gap-[10px]">
            <div className="w-[82px] h-[82px] rounded-[10px] overflow-hidden">
              <img src={`projectHome/${projectItem.thumbnail}`} alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <div
                className={`flex w-[78px] py-[4px] px-[11px] rounded-[4px] gap-[4px] ${
                  projectItem.deadline === 1
                    ? "bg-[#FFE5E5]"
                    : projectItem.deadline === 0
                      ? "bg-neutral-10"
                      : "bg-primary-10"
                }`}
              >
                <img
                  src={
                    projectItem.deadline === 1
                      ? "/projectHome/ddayWarning.svg"
                      : projectItem.deadline === 0
                        ? "/projectHome/ddayNeutral.svg"
                        : "/projectHome/ddayPrimary.svg"
                  }
                  alt=""
                />
                <span
                  className={`text-[9px] font-semibold ${
                    projectItem.deadline === 1
                      ? "text-system-red"
                      : projectItem.deadline === 0
                        ? "text-neutral-90"
                        : "text-primary-90"
                  }`}
                >
                  마감 D-{projectItem.deadline}
                </span>
              </div>
              <h3 className="text-[20px] font-bold text-neutral-90">
                {projectItem.title}
              </h3>
              <p className="text-[14px] text-neutral-50 font-medium">
                총 인원 {projectItem.groupmembers} |{" "}
                <span className="text-primary-80">
                  {projectItem.recruitment}명 모집중
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <ul className="flex gap-[6px] text-[12px] text-neutral-70 font-semibold">
              <li className="bg-bg-white rounded-[20px] py-[4px] px-[10px]">
                {projectItem.hashtag[0]}
              </li>
              <li className="bg-bg-white rounded-[20px] py-[4px] px-[10px]">
                {projectItem.hashtag[1]}
              </li>
              <li className="bg-bg-white rounded-[20px] py-[4px] px-[10px]">
                {projectItem.hashtag[2]}
              </li>
            </ul>
            <div className="text-[14px] text-neutral-50">
              {projectItem.context}
            </div>
          </div>
          <div className="flex justify-between relative">
            <ProjectTeamMemberProfile projectData={ProjectHot} />
            <div className="text-neutral-30 flex gap-[10px] text-[12px] mt-[16px]">
              <button className="flex items-center gap-[4px]">
                <img src="/projectHome/like.svg" alt="" />
                <span>{projectItem.liked}</span>
              </button>
              <button className="flex items-center gap-[4px]">
                <img src="/projectHome/bookmark.svg" alt="" />
                <span>{projectItem.bookmark}</span>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectCard;
