import { popupSubCategoryItem } from "../../types/filterMenuTypes";

const PopupSubCategoryItem = ({
  label,
  handleSubCategory,
  seletectedSubCategory,
  handelSelectSubCategory,
}: popupSubCategoryItem): JSX.Element => {
  return (
    <div className="flex gap-s-1 h-[24px] items-center">
      <input
        className="w-[16px] h-[16px]"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const target = event.target as HTMLInputElement;

          if (seletectedSubCategory.includes(label)) {
            const temp = seletectedSubCategory.filter((item) => item !== label);
            handelSelectSubCategory(temp);
            handleSubCategory(target.id);
          } else {
            const temp = [...seletectedSubCategory];
            temp.push(label);
            handelSelectSubCategory(temp);
            handleSubCategory(target.id);
          }
        }}
        type="checkbox"
        checked={seletectedSubCategory.includes(label)}
        id={label}
      />
      <label className="caption text-neutral-70" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default PopupSubCategoryItem;
