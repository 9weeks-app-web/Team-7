import { ReactNode } from "react";

interface TooltipTypes {
  hoverSource: ReactNode;
  TooltipContent: ReactNode;
  position?: string;
}
const Tooltip = ({
  hoverSource,
  TooltipContent,
  position = "top-[70px]",
}: TooltipTypes): JSX.Element => {
  return (
    <div className="flex">
      <div className="relative flex flex-col items-center group">
        {hoverSource}
        <div
          className={`absolute hidden ${position} flex-col items-center group-hover:flex`}
        >
          {TooltipContent}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
