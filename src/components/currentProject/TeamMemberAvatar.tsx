import Avatar from "../design/Avatar";
import { POPULAR_PROJECTS } from "../../mocks/mockProject";

const TeamMemberAvatar = () => {
  return (
    <div className="flex relative">
      <Avatar
        src={POPULAR_PROJECTS[0].teamMembers[0].avatar}
        alt="first-member-profile"
        width="w-[33px]"
        height="h-[33px]"
        border="rounded-full border-2 border-white"
        customStyle="z-10 absolute left-0 top-0 cursor-pointer"
      ></Avatar>
      <Avatar
        src={POPULAR_PROJECTS[0].teamMembers[1].avatar}
        alt="second-member-profile"
        width="w-[33px]"
        height="h-[33px]"
        border="rounded-full border-2 border-white"
        spacing="ml-[18px]"
        customStyle="z-20 absolute left-0 top-0 cursor-pointer"
      ></Avatar>
      <Avatar
        src={POPULAR_PROJECTS[0].teamMembers[2].avatar}
        alt="3rd-member-profile"
        width="w-[33px]"
        height="h-[33px]"
        border="rounded-full border-2 border-white"
        spacing="ml-[36px]"
        customStyle="z-30 absolute left-0 top-0 cursor-pointer"
      ></Avatar>
      <div className="bg-primary-40 w-[33px] h-[33px] rounded-full border-2 border-white ml-[54px] z-40 absolute left-0 top-0 cursor-pointer">
        <span className="caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          +2
        </span>
      </div>
    </div>
  );
};

export default TeamMemberAvatar;
