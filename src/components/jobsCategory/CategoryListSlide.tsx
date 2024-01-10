import { useEffect, useRef, useState } from "react";
import { categoryJobs } from "../../constants/categoryJobs";
import PrevArrowButton from "./PrevArrowButton";
import NextArrowButton from "./NextArrowButton";
import { recommendCreatorDummy } from "../../constants/recommendCreator";

interface CategoryListSlideProps {
  handleOpenModal: () => void;
}
const CategoryListSlide = ({ handleOpenModal }: CategoryListSlideProps) => {
  const [currSlideIndex, setCurrSlideIndex] = useState(0);

  const handleSlideDirection = (direction: number) => {
    setCurrSlideIndex((prev) => prev + direction);
  };

  const dummy = recommendCreatorDummy;
  const BG_NUM = dummy.length;

  const slideRef = useRef<HTMLUListElement | null>(null);

  const beforeSlide = dummy[BG_NUM - 1];
  const afterSlide = dummy[0];

  const slideArr = [beforeSlide, ...dummy, afterSlide];
  const SLIDE_NUM = slideArr.length;

  useEffect(() => {
    if (currSlideIndex === SLIDE_NUM) {
      setCurrSlideIndex(0);
    }

    if (currSlideIndex === -1) {
      setCurrSlideIndex(SLIDE_NUM - 1);
    }
  }, [currSlideIndex, SLIDE_NUM]);

  return (
    <div className="w-full flex relative overflow-hidden">
      <div className="flex items-center overflow-hidden">
        {currSlideIndex !== 0 && (
          <PrevArrowButton
            handleSlideDirection={() => handleSlideDirection(-1)}
          />
        )}
        <ul
          ref={slideRef}
          className="flex gap-[10px] w-[3360px]"
          style={{
            width: `${214 * SLIDE_NUM + (10 * SLIDE_NUM - 1)}px`,
            transition: "all 300ms ease-in-out",
            transform: `translateX(${
              -1 * ((234 / slideArr.length) * currSlideIndex)
            }%)`,
          }}
        >
          {categoryJobs.map((job) => (
            <li
              key={job.name}
              className="flex-shrink-0 h-[60px] overflow-hidden rounded-[6px] items-center bg-line-gray-1 border-[2px] border-line-gray-1 hover:border-primary-40 hover:text-primary-100 transition-all"
            >
              {job.name !== "전체" ? (
                <button className="flex">
                  <img
                    className="rounded-l-md"
                    src={`categoryJobs/${job.img}`}
                    alt={job.name}
                  />
                  <span className="flex-grow px-[16px] py-[14.5px] text-[18px] font-semibold">
                    {job.name}
                  </span>
                </button>
              ) : (
                <button className="flex w-[120px]">
                  <span className="flex-grow px-[16px] py-[14.5px] text-[18px] font-semibold ">
                    전체
                  </span>
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className="absolute top-[-6px] right-0 w-[100px] h-[68px] bg-gradient-to-l from-[#ffffff] via-[#ededed] to-[#ffffff00] z-[101]">
          <NextArrowButton
            handleSlideDirection={() => handleSlideDirection(1)}
          />
          <button
            className="absolute top-[20px] right-[6px]"
            onClick={handleOpenModal}
          >
            <img src="categoryJobs/listDefault.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryListSlide;
