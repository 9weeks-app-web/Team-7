import { useEffect, useRef, useState } from "react";
import PopupMenus from "./PopupMenus";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { categoryList } from "../../constants/categoryList";
import PopupCategory from "./PopupCategory";

const FilterPopup = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sub = searchParams.get("sub");
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [isServiceOpen, setIsServieOpen] = useState<boolean>(false);
  const [seletectedCategory, setSelectedCategory] = useState<string>(
    category as string
  );
  const [seletectedSubCategory, setSelectedSubCategory] = useState<string[]>(
    sub !== null ? sub.split(",") : []
  );
  const [isMenuHeight, setIsMenuHeight] = useState<boolean>(true);
  const mainCategory = useRef<string>(category as string);
  const subCategory = useRef<string[]>(sub !== null ? sub.split(",") : []);
  const menuRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const handelSelectCategory = (target: string) => setSelectedCategory(target);
  const handelSelectSubCategory = (target: string[]) =>
    setSelectedSubCategory(target);
  const handleCategoryClick = () => setIsCategoryOpen((prev) => !prev);
  const handleSortClick = () => setIsSortOpen((prev) => !prev);
  const handleServiceClick = () => setIsServieOpen((prev) => !prev);
  const handleMainCategory = (target: string, reset?: boolean) =>
    reset
      ? (mainCategory.current = "")
      : (mainCategory.current = mainCategory.current + target);
  const handleSubCategory = (target: string) => {
    if (subCategory.current.includes(target))
      subCategory.current = subCategory.current.filter(
        (item) => target !== item
      );
    else subCategory.current = [...subCategory.current, target];
  };

  const checkHeight = () => {
    if (menuRef.current !== null && categoryRef.current !== null)
      return menuRef.current.clientHeight > categoryRef.current.clientHeight;
    else return true;
  };

  useEffect(() => {
    setIsMenuHeight(checkHeight());
  }, [isCategoryOpen, isSortOpen, isServiceOpen, seletectedCategory]);

  useEffect(() => {
    return () => {
      if (subCategory.current.length !== 0)
        navigate(
          `${pathname}?category=${
            mainCategory.current
          }&sub=${subCategory.current.join(",")}`
        );
      else
        navigate(
          `${pathname}${
            mainCategory.current ? `?category=${mainCategory.current}` : ""
          }`
        );
    };
  }, []);

  return (
    <div className={`inline-block${isMenuHeight ? " shadow-shadow-2" : ""}`}>
      <div className="flex">
        <div
          className={`w-[240px]${
            isMenuHeight && isCategoryOpen
              ? " border rounded-l-md"
              : isMenuHeight
                ? " border rounded-md"
                : ""
          }`}
        >
          <PopupMenus
            ref={menuRef}
            isCategoryOpen={isCategoryOpen}
            isSortOpen={isSortOpen}
            isServiceOpen={isServiceOpen}
            isMenuHeight={isMenuHeight}
            handleCategoryClick={handleCategoryClick}
            handleSortClick={handleSortClick}
            handleServiceClick={handleServiceClick}
          />
        </div>
        {isCategoryOpen && (
          <div
            className={`w-[452px] bg-white${
              isMenuHeight
                ? " border-t border-r border-b rounded-r-md"
                : " rounded-md"
            }`}
          >
            <PopupCategory
              ref={categoryRef}
              isMenuHeight={isMenuHeight}
              categoryList={categoryList}
              handleMainCategory={handleMainCategory}
              handleSubCategory={handleSubCategory}
              seletectedCategory={seletectedCategory}
              handelSelectCategory={handelSelectCategory}
              seletectedSubCategory={seletectedSubCategory}
              handelSelectSubCategory={handelSelectSubCategory}
              subCategory={subCategory.current}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPopup;
