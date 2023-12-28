import { useState } from "react";
import { OnboardingListItemProps } from "../../types/onboarding";

const ListItem = ({
  imageUrl,
  altText,
  title,
  selectedImg,
  selectedListItem,
  isSubmitActive,
}: OnboardingListItemProps & {
  selectedListItem: (id: string) => void;
}) => {
  const [isSelectedItem, setIsSelectedItem] = useState(false); // 리스트 아이템의 클릭 여부

  // 1. 버튼을 클릭하면, isSelected의 상태가 true가 된다.
  // 2. isSelected의 상태가 true가 되면, imageUrl에 selectedImg 값을 넣어준다.

  const handleClickItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    selectedListItem(title); // 완료 버튼 활성화를 위한 선택된 아이템
    setIsSelectedItem(!isSelectedItem); // ListItem 토글
  };

  return (
    <button
      className={`flex flex-col w-full h-[170px] bg-gray-300 rounded-[6px] overflow-hidden cursor-pointer border-4 ${
        isSubmitActive ? "border-blue-500" : ""
      }`}
      onClick={handleClickItem}
    >
      <img
        src={isSubmitActive ? selectedImg : imageUrl}
        alt={altText}
        className="flex-grow"
      />
      <h3 className="w-full text-black text-left text-[24px] bg-white mt-auto indent-1">
        {title}
      </h3>
    </button>
  );
};

export default ListItem;
