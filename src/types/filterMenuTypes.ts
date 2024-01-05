export interface categoryListType {
  name: string;
  items: string[];
  uri: string;
}

export interface popupCategoryProps {
  categoryList: categoryListType[];
  isMenuHeight: boolean;
  seletectedCategory: string;
  handleMainCategory: (target: string, reset?: boolean) => void;
  handleSubCategory: (target: string) => void;
  handelSelectCategory: (target: string) => void;
  seletectedSubCategory: string[];
  handelSelectSubCategory: (target: string[]) => void;
  subCategory: string[];
}

export interface popupSubCategoryItem {
  label: string;
  handleSubCategory: (target: string) => void;
  subCategory: string[];
  seletectedSubCategory: string[];
  handelSelectSubCategory: (target: string[]) => void;
}

export interface popupMainCategoryItem {
  label: string;
  handelSelectCategory: (target: string) => void;
  seletectedCategory: string;
  handleMainCategory: (target: string, reset?: boolean) => void;
  uri: string;
}
