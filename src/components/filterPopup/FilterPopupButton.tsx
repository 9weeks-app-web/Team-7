import { FilterPopupButtonProps } from "../../types/filterPopupButtonTypes";

const FilterPopupButton: React.FC<FilterPopupButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`flex items-start w-full px-[0.875rem] py-[0.625rem] rounded-md text-1 text-neutral-60 text-sm hover:bg-[#F5F8FF] hover:text-primary-70 ${
        isActive ? "bg-[#f5f8ff] text-primary-70" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterPopupButton;
