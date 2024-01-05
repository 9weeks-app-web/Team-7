import { popupMainCategoryItem } from "../../types/filterMenuTypes";

const PopupMainCategoryItem = ({
  label,
  handelSelectCategory,
  seletectedCategory,
  handleMainCategory,
}: popupMainCategoryItem): JSX.Element => {
  return (
    <div className="flex gap-s-1 h-[24px] items-center">
      <input
        className="w-[16px] h-[16px]"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const target = event.target as HTMLInputElement;

          handleMainCategory("", true);

          if (label === seletectedCategory) {
            handelSelectCategory("");
          } else {
            handelSelectCategory(target.id);
            handleMainCategory(target.id);
          }
        }}
        checked={label === seletectedCategory}
        type="checkbox"
        id={label}
      />
      <label className="caption text-neutral-70" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default PopupMainCategoryItem;
