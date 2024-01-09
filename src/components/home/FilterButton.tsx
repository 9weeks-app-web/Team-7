import { filterButtonProps } from "../../types/homeTypes";

const FilterButton = ({
  children,
  handleOpen,
}: filterButtonProps): JSX.Element => {
  return (
    <div
      className="text-xs gap-[4px] text-white bg-primary-50 p-[11px] rounded-full flex cursor-pointer"
      onClick={handleOpen}
    >
      <img src="./filterWhite.svg" alt="filter" />
      <span>{children}</span>
    </div>
  );
};

export default FilterButton;
