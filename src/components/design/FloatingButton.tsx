import { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";

const FloatingButton = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="fixed bottom-[3.75rem] right-[7.85rem] flex flex-col justify-end items-end gap-y-5 z-50">
      {isExpanded && (
        <div className="w-[15rem] flex flex-col gap-y-5 text-xl text-white text-1">
          <ButtonWithIcon icon="./communication.svg" text="커뮤니티 글 쓰기" />
          <ButtonWithIcon icon="./compass.svg" text="프로젝트 모집하기" />
          <ButtonWithIcon icon="./compass.svg" text="포트폴리오 업로드" />
        </div>
      )}
      <button
        className={` h-[3.125rem] rounded-[6.25rem] shadow-md ${
          isExpanded
            ? "bg-primary-90 w-[3.125rem] rounded-full"
            : "bg-neutral-90  gap-x-2.5 px-7 text-1 text-xl"
        } text-white shadow-md flex justify-center items-center`}
        onClick={toggleExpanded}
      >
        {isExpanded ? (
          <>
            <img src="./cancelWhite.svg" alt="cancelWhite" />
          </>
        ) : (
          <>
            <img src="./plusWhite.svg" alt="plusWhite" />
            업로드
          </>
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
