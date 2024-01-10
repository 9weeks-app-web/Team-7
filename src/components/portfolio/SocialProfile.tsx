import Card from "../design/Card";
import Button from "../design/Button";
import Avatar from "../design/Avatar";
import { UserProfile } from "../../types/profileTypes";

interface SocialProfileProps {
  profile: UserProfile;
}
const SocialProfile = ({ profile }: SocialProfileProps): JSX.Element => {
  return (
    <Card
      width="w-[320px]"
      height="h-[329px]"
      spacing="py-[20px]"
      border="rounded-xl border border-neutral-10"
    >
      <div className="flex ml-[20px]">
        <Avatar
          src="/currentProject/ProjectTeamMemberProfile1-1.png"
          width="w-[60xp]"
          height="h-[60px]"
        />
        <div className="ml-[20px]">
          <div className="font-bold text-neutral-90">{profile.name}</div>
          <div className="text-3 text-neutral-90">{profile.role}</div>
        </div>
      </div>

      <div className="flex justify-center mt-[28px]">
        <div>
          <div className="text-center text-2 text-neutral-90">
            {profile.work.count}
          </div>
          <div className="text-3 text-neutral-50">작업</div>
        </div>

        <div className="mx-[70px]">
          <div className="text-center text-2 text-neutral-90">
            {profile.following}
          </div>
          <div className="text-3 text-neutral-50">팔로잉</div>
        </div>

        <div>
          <div className="text-center text-2 text-neutral-90">
            {profile.follower}
          </div>
          <div className="text-3 text-neutral-50">팔로워</div>
        </div>
      </div>
      <div className="flex mt-[15px]">
        {profile.work.recentWorks.map((recentWork, index) => (
          <img
            key={recentWork.id}
            className={`w-[104px] ${index === 1 ? "mx-[4px]" : ""}`}
            src={recentWork.image}
            alt={recentWork.image}
          />
        ))}
      </div>
      <div className="mt-[15px] flex justify-center">
        <Button
          color="blue"
          width="w-[135px]"
          height="h-[34px]"
          padding="px-[49px] py-[7px]"
        >
          팔로우
        </Button>
        <div className="ml-[14px]">
          <Button
            color="gray"
            width="w-[135px]"
            height="h-[34px]"
            padding="px-[49px] py-[7px]"
          >
            제안
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SocialProfile;
