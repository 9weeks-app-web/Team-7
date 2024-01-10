import { useRef } from "react";
import { successfulDummy } from "../../constants/SuccessfulPortfolio";

interface RightContainerProps {
  currSlideIndex: number;
  setCurrSlideIndex: (flytoIndex: number) => void;
}

const RightContainer = ({
  currSlideIndex,
  setCurrSlideIndex,
}: RightContainerProps) => {
  const dummy = successfulDummy;

  const BG_NUM = dummy.length; // 기존 오리지널 더미 데이터의 length ==> 4

  const slideRef = useRef<HTMLUListElement | null>(null);

  const beforeSlide = dummy[BG_NUM - 1];
  const beforeSlide1 = dummy[BG_NUM - 2];
  const beforeSlide2 = dummy[BG_NUM - 3];
  const afterSlide = dummy[0];
  const afterSlide1 = dummy[1];
  const afterSlide2 = dummy[2];

  const slideArr = [
    beforeSlide2,
    beforeSlide1,
    beforeSlide,
    ...dummy,
    afterSlide,
    afterSlide1,
    afterSlide2,
  ];
  const SLIDE_NUM = slideArr.length; // 새로운 슬라이드의 length ==> 6

  const InfiniteSlideHandler = (flytoIndex: number) => {
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }
      setCurrSlideIndex(flytoIndex);
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 300ms ease-in-out";
        }
      }, 100);
    }, 300);
  };

  if (currSlideIndex === SLIDE_NUM - 3) {
    InfiniteSlideHandler(3);
  }

  if (currSlideIndex === 0) {
    InfiniteSlideHandler(BG_NUM);
  }

  return (
    <div className="imgData w-[995px] overflow-hidden relative">
      <div className="w-[1440px] h-full flex overflow-hidden">
        <ul
          ref={slideRef}
          style={{
            width: `${246 * SLIDE_NUM + (24 * SLIDE_NUM - 1)}px`,
            transition: "all 300ms ease-in-out",
            transform: `translateX(${
              -1 * ((100 / slideArr.length) * currSlideIndex)
            }%)`,
          }}
          className="w-[1056px] h-full flex gap-[24px]"
        >
          {slideArr.map((item, index) => {
            return (
              <li
                key={index}
                className="w-[246px] rounded-[6px] bg-primary-white overflow-hidden cursor-pointer transition-all"
              >
                <div className="absolute w-[246px] h-full rounded-[6px] flex flex-col justify-center items-center text-center gap-[10px] text-primary-white opacity-0 transition-all hover:bg-[#00000080] hover:opacity-100 hover:rounded-[6px]">
                  <img src="/lockCircle.svg" alt="logo" />
                  <div>
                    합격자 포트폴리오
                    <br />
                    보러가기
                  </div>
                </div>
                <div className="text-[12px] rounded-[6px] pt-[16px] pr-[26px] pb-[10px] pl-[16px]">
                  <p className="mb-[6px] text-[12px] text-primary-90">
                    {item.date}
                  </p>
                  <div className="flex flex-col gap-[10px] text-primary-90">
                    <div className="flex gap-[6px]">
                      <img
                        src={`successful/${item.corporate}.png`}
                        alt="N"
                        className="w-[22px] h-[22px] bg-neutral-200 rounded-full"
                      />
                      <span className="text-[14px] font-semibold">
                        {item.title}
                      </span>
                    </div>
                    <ul className="flex gap-[6px] text-neutral-50">
                      <li className="rounded-[4px] border border-neutral-10 py-[4px] px-[10px]">
                        {item.field.first}
                      </li>
                      <li className="rounded-[4px] border border-neutral-10 py-[4px] px-[10px]">
                        {item.field.second}
                      </li>
                    </ul>
                    <div className="flex gap-[6px]">
                      <img
                        src={`successful/${item.profile}.png`}
                        alt="N"
                        className="w-[34px] h-[34px] bg-neutral-200 rounded-full"
                      />
                      <div className="flex flex-col">
                        <strong className="text-[14px]">{item.username}</strong>
                        <span className="text-neutral-40">{item.job}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={`successful/${item.coImg}.png`}
                  alt="이미지1"
                  className="w-full h-[112px] object-cover"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightContainer;
