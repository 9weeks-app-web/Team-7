import { recommendCreatorDummy } from "../../constants/recommendCreator";
import { useRef } from "react";

interface RightContainerProps {
  currSlideIndex: number;
  setCurrSlideIndex: (flytoIndex: number) => void;
}

function RightContainer({
  currSlideIndex,
  setCurrSlideIndex,
}: RightContainerProps) {
  const dummy = recommendCreatorDummy;

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
    <>
      <div className="w-[995px] h-[256px] py-[23px] box-border overflow-hidden relative">
        <ul
          ref={slideRef}
          style={{
            width: `${336 * SLIDE_NUM + (24 * SLIDE_NUM - 1)}px`,
            transition: "all 300ms ease-in-out",
            transform: `translateX(${
              -1 * ((100 / slideArr.length) * currSlideIndex)
            }%)`,
          }}
          className="w-[1056px] h-full flex gap-[24px]"
        >
          {slideArr.map((item, index) => (
            <li
              key={index}
              className="w-[336px] h-[210px] p-[20px] rounded-[6px] cursor-pointer bg-primary-white"
            >
              <div className="flex justify-between mb-[24px]">
                <div className="flex">
                  <div className="bg-neutral-10 w-[54px] h-[54px] rounded-full mr-[10px] overflow-hidden">
                    <img
                      src={item.profileImg}
                      alt={`${item.username}의 프로필 사진`}
                    />
                  </div>
                  <div>
                    <h3 className="text-neutral-90 text-[16px]">
                      {item.username}
                    </h3>
                    <span className="text-neutral-90 text-[12px] py-[4px] px-[10px] bg-primary-20 rounded-[10px]">
                      {item.subject}
                    </span>
                  </div>
                </div>
                <button className="text-[12px] text-primary-white w-[52px] h-[28px] rounded-[6px] bg-primary-100 py-[4px] px-[8px]">
                  팔로우
                </button>
              </div>
              <ul className="flex justify-between overflow-hidden">
                <li className="w-[92px] h-[92px] bg-neutral-10 rounded-[6px] overflow-hidden">
                  <img src={item.products[0]} alt="" />
                </li>
                <li className="w-[92px] h-[92px] bg-neutral-10 rounded-[6px] overflow-hidden">
                  <img src={item.products[1]} alt="" />
                </li>
                <li className="w-[92px] h-[92px] bg-neutral-10 rounded-[6px] overflow-hidden">
                  <img src={item.products[2]} alt="" />
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RightContainer;
