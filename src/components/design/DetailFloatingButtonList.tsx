import { useState } from "react";
import DetailFloatingButton from "./DetailFloatingButton";
import Button from "./Button";

const DetailFloatingButtonList = () => {
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isContentsActive, setIsContentsActive] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isDeletePopup, setIsDeletePopup] = useState(false);
  const [isSharePopup, setIsSharePopup] = useState(false);

  const handleLike = () => {
    setIsLikeActive(!isLikeActive);
  };

  const handleContents = () => {
    setIsContentsActive(!isContentsActive);
  };

  const handleContentsList = (content: string) => {
    setSelectedContent(
      (prevSelectedContent: string | null) =>
        (content === prevSelectedContent ? null : content) as null
    );
  };

  const handleDelete = () => {
    setIsDeletePopup(!isDeletePopup);
  };

  const handleShare = () => {
    setIsSharePopup(!isSharePopup);
  };

  const handleDeletePortfolio = () => {
    window.history.back();
  };

  const currentUrl = window.location.href;

  const MOCK_CONTENTS = [
    "목차",
    "오버뷰",
    "리서치1",
    "리서치2",
    "리서치3",
    "리서치4",
  ];

  const additionalContent = (
    <div className="fixed top-[23.5rem] right-[2rem] w-[8.5rem] bg-white rounded-md py-1 ">
      <div className="flex flex-col text-normal text-xs text-neutral-100 gap-y-[0.44rem]">
        {MOCK_CONTENTS.map((content) => (
          <div
            key={content}
            className={`flex justify-between rounded-md hover:bg-[#f3f3f3] py-1 pl-2 ${
              selectedContent === content ? "bg-[#f3f3f3]" : "bg-white"
            }`}
            onClick={() => handleContentsList(content)}
          >
            {content}
            {selectedContent === content ? (
              <img
                className="mr-[0.94rem]"
                src="/checkBlue.svg"
                alt="checkBlue"
              />
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const deletePopup = (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[100]">
      <div className="absolute top-[45%] left-[38.3%] w-[21.1rem] rounded-md py-[1.875rem] px-[0.88rem] flex flex-col items-center gap-y-[1.25rem] z-50 bg-white">
        <p className="text-base text-black">
          이 포트폴리오를 삭제하시겠습니까?
        </p>
        <div className="flex gap-x-[0.375rem]">
          <Button
            children="취소"
            width="w-[8.5rem]"
            type="button"
            height="h-[2.5rem]"
            padding="py-[0.81rem] px-[0.88rem]"
          />
          <Button
            children="삭제"
            width="w-[8.5rem]"
            color="blue"
            type="button"
            height="h-[2.5rem]"
            padding="py-[0.81rem] px-[0.88rem]"
            onClick={handleDeletePortfolio}
          />
        </div>
      </div>
    </div>
  );

  const sharePopup = (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[100]">
      <div className="absolute top-[30%] left-[32%] flex flex-col gap-y-[2.75rem] w-[33.0625rem] h-[22.5rem] rounded-md bg-white shadow-md text-neutral-90 p-[1.88rem]">
        <div className="flex justify-between">
          <span className="text-1 text-neutral-90 text-size-2xl">
            작업 공유하기
          </span>
          <img src="/closeBlack.svg" alt="closeBlack" />
        </div>
        <div className="flex gap-x-[1.88rem] items-center">
          <img
            className="w-[8.125rem] h-[8.125rem] rounded-md"
            src="/shareThumbnail.png"
            alt="shareThumbnail"
          />
          <span className="caption text-base">
            하나부터 열까지 관리하자! - 헬스케어 서비스 할수있당
          </span>
        </div>
        <div className="relative">
          <div className="flex w-[29.3rem] h-[3.31rem] border-solid border-[1px] border-neutral-20 bg-[#f3f3f3] rounded-md py-1.5 px-3 items-center caption text-sm">
            {currentUrl}
          </div>
          <button className="absolute top-0 right-0 flex px-5 py-4  h-[3.31rem] justify-center items-center rounded-md border-solid border-[1px] border-neutral-20 bg-white caption text-base text-neutral-50">
            URL 복사
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="fixed top-[6.25rem] right-[12rem] flex flex-col gap-y-5 items-center text-white text-normal text-xs">
      <DetailFloatingButton
        iconActive="detailProfile.png"
        iconDefault="detailProfile.png"
        label="프로필"
        onClick={() => {}}
        isActive={false}
      />
      <DetailFloatingButton
        iconActive="likeFloatingActive.svg"
        iconDefault="likeFloatingDefault.svg"
        label="좋아요"
        onClick={handleLike}
        isActive={isLikeActive}
      />
      <DetailFloatingButton
        iconActive="suggestFloating.svg"
        iconDefault="suggestFloating.svg"
        label="제안"
        onClick={() => {}}
        isActive={false}
      />
      <DetailFloatingButton
        iconActive="contentsFloatingActive.svg"
        iconDefault="contentsFloatingDefault.svg"
        label="목차"
        onClick={handleContents}
        isActive={isContentsActive}
        additionalContent={additionalContent}
      />
      <DetailFloatingButton
        iconActive="shareFloating.svg"
        iconDefault="shareFloating.svg"
        label="공유"
        onClick={handleShare}
        isActive={isSharePopup}
        additionalContent={sharePopup}
      />
      <DetailFloatingButton
        iconActive="editFloating.svg"
        iconDefault="editFloating.svg"
        label="수정"
        onClick={() => {}}
        isActive={false}
      />
      <DetailFloatingButton
        iconActive="deleteFloating.svg"
        iconDefault="deleteFloating.svg"
        label="삭제"
        onClick={handleDelete}
        isActive={isDeletePopup}
        additionalContent={deletePopup}
      />
    </div>
  );
};

export default DetailFloatingButtonList;
