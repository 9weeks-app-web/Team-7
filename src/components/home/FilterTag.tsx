import { filterTagProps } from "../../types/homeTypes";

const FilterTag = ({ children }: filterTagProps): JSX.Element => {
  return (
    <div className="text-xs gap-[4px] text-primary-70 p-[10px] border border-primary-70 rounded-full flex cursor-pointer">
      <img src="./checkPrimary.svg" alt="check" />
      <span>{children}</span>
    </div>
  );
};

export default FilterTag;
