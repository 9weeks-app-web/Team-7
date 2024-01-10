import { SliderItemProps } from "../../types/portfolioDetailTypes";

const SliderItem = ({ title, thumbnail }: SliderItemProps) => {
  return (
    <div>
      <div className="h-[256px] w-[276px]">
        <div className="w-[256px] h-full relative rounded-md cursor-pointer">
          <div className="bg-gradient-to-t from-[rgba(0,0,0,0.5)_20%] w-[256px] h-full absolute"></div>
          <div className="absolute bottom-[11px] left-[13px] w-full">
            <p className="text-white">{title}</p>
          </div>
          <img
            className="rounded-md"
            src={`/portfolio/${thumbnail}.png`}
            alt="thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
