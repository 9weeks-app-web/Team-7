import { FilterButtonProps } from "../../types/filterButtonTypes";

const FilterButton: React.FC<FilterButtonProps> = ({
  onClick,
  isActive,
  label,
  icon,
}) => {
  return (
    <button
      className={`flex items-center py-1.5 px-4 text-1 rounded-[1.125rem] border-solid border-[1px] text-sm ${
        isActive
          ? "border-[#99bdff] bg-[#f5f8ff] text-primary-70"
          : "text-neutral-60  border-[#e6e6e6] bg-white"
      }`}
      onClick={onClick}
    >
      <img src={`/${icon}.svg`} alt={icon} />
      <span>{label}</span>
      <img
        src={`${
          isActive ? "/filterArrowActive.svg" : "/filterArrowDefault.svg"
        }`}
        alt="filterArrowDefault"
      />
    </button>
  );
};

export default FilterButton;
