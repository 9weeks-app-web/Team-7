import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import { OnboardingListItemProps } from "../../types/onboarding";
import { useEffect, useState } from "react";

const OnboardingForm = () => {
  const dummyData: OnboardingListItemProps[] = [
    {
      id: "1",
      imageUrl: "/public/logoSfacKR.svg",
      altText: "테스트용 이미지1 대체 텍스트",
      title: "제목1",
    },
    {
      id: "2",
      imageUrl: "",
      altText: "이미지2 대체 텍스트",
      title: "제목2",
    },
    {
      id: "3",
      imageUrl: "",
      altText: "이미지3 대체 텍스트",
      title: "제목3",
    },
    {
      id: "4",
      imageUrl: "",
      altText: "이미지4 대체 텍스트",
      title: "제목4",
    },
    {
      id: "5",
      imageUrl: "",
      altText: "이미지5 대체 텍스트",
      title: "제목5",
    },
  ];

  // 선택한 아이템 배열
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  console.log("선택된 아이템 배열: ", selectedItems);

  // 선택 된 아이템과 아닌 아이템 여부
  const [isSubmitActive, setIsSubmitActive] = useState<boolean>(false);
  console.log("isSubmitActive의 상태: ", isSubmitActive);

  const handleSelectItem = (title: string) => {
    if (selectedItems.includes(title)) {
      setSelectedItems((prevSelectItems) =>
        prevSelectItems.filter((item) => item !== title)
      );
    } else {
      if (selectedItems.length < 3 || selectedItems.length <= 0) {
        setSelectedItems((prevSelectItems) => [...prevSelectItems, title]);
      }
    }

    setIsSubmitActive(!isSubmitActive);
  };

  useEffect(() => {
    setIsSubmitActive(
      isSubmitActive
        ? selectedItems.length < 4 && selectedItems.length !== 0
        : selectedItems.length !== 0
    );
  }, [selectedItems, isSubmitActive]);

  return (
    <>
      <div className="max-w-[996px] h-[800px] mx-auto mt-[175px] mb-[50px] flex flex-col">
        <div>
          <h1>
            <img
              src="/public/logoSfackTitle.svg"
              alt="SFAC Logo"
              className="mx-auto mb-[20px]"
            />
          </h1>

          <div className="flex justify-center mb-[20px]">
            <span className="flex items-center justify-between bg-blue-100 text-blue-500 rounded-full px-[10px] py-[6px] mr-[6px] text-xs">
              단계 3/3
            </span>
            <strong className="font-bold text-[24px]">
              관심 분야를 선택하세요
            </strong>
          </div>

          <div className="flex flex-col justify-center items-center mb-[50px] gap-[20px]">
            <p>
              관심 분야를 바탕으로 포트폴리오를 추천해 드려요.
              <span>(최대 3개 선택)</span>
            </p>
          </div>
        </div>

        {/* 관심 분야 리스트 */}
        <form
          onSubmit={() => {}}
          className="flex flex-col px-[55px] h-[560px] overflow-y-scroll relative"
        >
          <div className="grid grid-cols-3 gap-x-[20px] gap-y-[30px]">
            {dummyData.map((item, index) => (
              <ListItem
                key={index + item.imageUrl}
                imageUrl={item.imageUrl}
                altText={item.altText}
                title={item.title}
                selectedImg="/public/logoSfackTitle.svg" // TODO:: 체크 됐을 떄 이미지 받으면 변경하기
                selectedListItem={handleSelectItem}
                isSubmitActive={selectedItems.includes(item.title)}
              />
            ))}
          </div>
        </form>

        {/* 다음에 설정 or 완료 버튼 */}
        <div className="w-[414px] flex gap-[6px] ml-auto mt-[50px] text-gray-500">
          <button
            type="button"
            className="w-1/3 rounded-[6px] border-[1px] border-gray-300"
          >
            <Link to={"/"} className="p-[14px]">
              다음에 설정
            </Link>
          </button>

          <button
            type="submit"
            className={`w-2/3 rounded-[6px] border-[1px] ${
              isSubmitActive ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            disabled={isSubmitActive}
          >
            {/* TODO:: 회원가입 완료 페이지로 path 변경하기 */}
            <Link to={"/"} className="p-[14px]">
              완료
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default OnboardingForm;