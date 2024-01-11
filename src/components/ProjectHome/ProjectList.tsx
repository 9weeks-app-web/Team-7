import { ProjectInterest, ProjectHot } from "../../constants/projectHome";

interface ProjectHomeCardProps {
  projectData: ProjectHot | ProjectInterest;
}

const ProjectList = ({ projectData }: ProjectHomeCardProps) => {
  return (
    <ul className="flex flex-col gap-[26px] mb-[26px]">
      {projectData.map((projectItem) => (
        <li className="flex gap-[50px] w-full h-[108px] items-center bg-white rounded-[20px] py-[20px] px-[50px] shadow-shadow-2 box-border">
          <div className="flex gap-[20px] w-[240px]">
            <div className="w-[70px] h-[70px] rounded-[10px] overflow-hidden">
              <img src={`projectHome/${projectItem.thumbnail}`} alt="" />
            </div>
            <div className="flex flex-col justify-evenly">
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
          <div>
            <div className="text-[14px] text-neutral-50 w-[470px] mb-[6px]">
              {projectItem.context}
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
            </div>
          </div>
          <div className="flex text-[12px] text-neutral-70 w-[160px]">
            <p>마감 D-{projectItem.deadline}</p>
            <span className="text-neutral-30 mx-[4px]"> | </span>
            <p>마감 2월 13일 마감</p>
          </div>
          <button className="bg-primary-90 w-[88px] h-[42px] rounded-[6px] text-primary-white">
            지원하기
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
