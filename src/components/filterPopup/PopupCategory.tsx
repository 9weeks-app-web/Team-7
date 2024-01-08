import { ForwardedRef, forwardRef } from "react";
import PopupMainCategoryItem from "./PopupMainCategoryItem";
import PopupSubCategoryItem from "./PopupSubCategoryItem";
import { popupCategoryProps } from "../../types/filterMenuTypes";

const PopupCategory = forwardRef(
  (
    {
      categoryList,
      isMenuHeight,
      handleMainCategory,
      handleSubCategory,
      handelSelectCategory,
      seletectedCategory,
      subCategory,
      seletectedSubCategory,
      handelSelectSubCategory,
    }: popupCategoryProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const currentSubCategory = categoryList.filter(
      (item) =>
        item.name === seletectedCategory ||
        seletectedCategory === "카테고리 전체"
    );

    return (
      <div
        className={`pl-[15px] py-s-2 pr-[25.5px] bg-white${
          !isMenuHeight
            ? " border rounded-r-md rounded-b-md shadow-shadow-4"
            : " rounded-tr-md"
        }`}
        ref={ref}
      >
        <div className="grid gap-s-2">
          <div className="grid gap-[10px]">
            <PopupMainCategoryItem
              seletectedCategory={seletectedCategory}
              handelSelectCategory={handelSelectCategory}
              handleMainCategory={handleMainCategory}
              uri={"all"}
              label="카테고리 전체"
            />
            <div className="grid grid-cols-3">
              {categoryList.map((item) => (
                <PopupMainCategoryItem
                  key={item.name}
                  seletectedCategory={seletectedCategory}
                  handelSelectCategory={handelSelectCategory}
                  handleMainCategory={handleMainCategory}
                  uri={item.uri}
                  label={item.name}
                />
              ))}
            </div>
          </div>
          <div className="border-b border-neutral-10"></div>
          <div className="grid grid-cols-3">
            {currentSubCategory[0] &&
              currentSubCategory.map((items) =>
                items.items.map((item) => (
                  <PopupSubCategoryItem
                    key={item}
                    label={item}
                    handleSubCategory={handleSubCategory}
                    subCategory={subCategory}
                    seletectedSubCategory={seletectedSubCategory}
                    handelSelectSubCategory={handelSelectSubCategory}
                  />
                ))
              )}
          </div>
        </div>
      </div>
    );
  }
);

export default PopupCategory;
