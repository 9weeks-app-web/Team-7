import { ProfessionalBoxProps } from "../../types/professionalTypes";

const ProfessionalBox: React.FC<ProfessionalBoxProps> = ({
  thumbnails,
  profile,
  name,
  fields,
  introduction,
  response,
  projects,
  feedback,
  accuracy,
}) => {
  return (
    <div className=" min-w-[18.125rem] h-[22.625rem] rounded-md bg-white border-solid border-[#e6e6e6] border-[1px] flex flex-col p-1.5 justify-start items-center">
      <div className="relative">
        <div className="flex gap-x-[0.0625rem]">
          <img
            className="w-[5.6875rem] h-[6.5rem] rounded-l-md "
            src={`./professional/${thumbnails.thumbnail_1}.png`}
            alt={thumbnails.thumbnail_1}
          />
          <img
            className="w-[5.6875rem] h-[6.5rem]"
            src={`./professional/${thumbnails.thumbnail_2}.png`}
            alt={thumbnails.thumbnail_2}
          />
          <img
            className="w-[5.6875rem] h-[6.5rem] rounded-r-md"
            src={`./professional/${thumbnails.thumbnail_3}.png`}
            alt={thumbnails.thumbnail_3}
          />
          <img
            className="w-[4.375rem] h-[4.375rem] rounded-full border-white border-2 absolute top-[63%] left-[37.5%]"
            src={`./professional/${profile}.png`}
            alt={profile}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-[2.98rem] gap-y-5">
        <div className="flex flex-col gap-x-1.5 items-center">
          <div className="flex gap-x-1.5">
            <span className="text-1 text-xl ">{name}</span>
            <img src="./checkCircle.svg" alt="" />
          </div>
          <span className="text-1 text-sm text-neutral-50">{fields}</span>
        </div>
        <div className="flex flex-col gap-y-1.5 items-center">
          <span className="text-1 text-sm text-neutral-80">{introduction}</span>
          <span className="text-1 text-sm text-primary-80">
            평균 {response}일 내 답변
          </span>
        </div>
        <div className="flex gap-x-5  justify-center items-center">
          <div className="flex flex-col items-center">
            <span className="text-1 text-xs text-neutral-50">작업수</span>
            <span className="text-1 text-xl text-neutral-80">{projects}</span>
          </div>
          <div className="flex flex-col items-center pl-5 pr-5 border-l-[1px] border-r-[1px] border-[#cccccc]">
            <span className="text-1 text-xs text-neutral-50">피드백 횟수</span>
            <span className="text-1 text-xl text-neutral-80">{feedback}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-1 text-xs text-neutral-50">명중률</span>
            <span className="text-1 text-xl text-neutral-80">{accuracy}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBox;
