import { PortfolioBoxProps } from "../../types/portfolioBoxTypes.tsx";

const PortfolioBox: React.FC<PortfolioBoxProps> = ({
  thumbnail,
  title,
  profile,
  userName,
  like,
  view,
  badge_premium,
  badge_type,
  badge_pick,
}: PortfolioBoxProps) => {
  const formatNumber = (number: number) => {
    if (number >= 1000 && number < 1000000) {
      return (number / 1000).toFixed(1) + "k";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "m";
    } else {
      return number.toString();
    }
  };

  return (
    <div className="w-[17.625rem] rounded-md flex flex-col items-start gap-y-1 drop-shadow-sm bg-white pb-1">
      <div className="relative">
        <div className="absolute top-0 right-0 flex gap-x-2.5 pl-2.5 pr-2.5">
          {badge_premium === true && (
            <img src="./portfolio/badge_premium.svg" alt="badge_premium" />
          )}
          {badge_type !== "" && (
            <img src="./portfolio/badge_type.svg" alt="badge_type" />
          )}
          {badge_pick === true && (
            <img src="./portfolio/badge_pick.svg" alt="badge_pick" />
          )}
        </div>
        <div>
          <img
            className="w-full h-[17.625rem] rounded-t-l"
            src={`./portfolio/${thumbnail}.png`}
            alt={thumbnail}
          />
          <div className="absolute bottom-0 left-0 z-10 w-full h-12 bg-gradient-to-t from-[#00000040] from-1% to-[#00000000] to-99%" />
        </div>
        <span className="caption text-base text-white z-10 absolute bottom-0 left-0 py-[0.6875rem] px-[0.8125rem]">
          {title}
        </span>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex p-1.5 gap-x-1.5">
          <img
            className="w-[1.375rem] h-[1.375rem] rounded-[1.375rem]"
            src={`./portfolio/${profile}.png`}
            alt={profile}
          />
          <span className="text_1 text-md text-neutral-90">{userName}</span>
        </div>
        <div className="flex pl-1.5 pr-1.5 gap-x-2.5 text-3 text-sm text-neutral-50">
          <div className="flex gap-x-[0.1875rem]">
            <img src="./heart.svg" alt="heart" />
            <span>{formatNumber(like)}</span>
          </div>
          <div className="flex gap-x-[0.1875rem]">
            <img src="./view.svg" alt="mainView" />
            <span>{formatNumber(view)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBox;
