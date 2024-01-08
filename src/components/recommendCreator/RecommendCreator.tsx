import { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import ArrowButton from "./ArrowButton";

const RecomendCreator = () => {
  const [currSlideIndex, setCurrSlideIndex] = useState(1);

  const slideHandler = (direction: number) => {
    setCurrSlideIndex((prev) => prev + direction);
  };

  return (
    <div className="w-[1200px] mx-auto">
      <h2 className="text-[24px] font-bold mb-[20px]">
        🔥 스팩폴리오 추천 크리에이터
      </h2>
      <div className="w-full h-[306px] flex bg-bg-white py-[23px] relative">
        <div className="flex flex-col">
          <LeftContainer />
          <ArrowButton slideHandler={slideHandler} />
        </div>
        <RightContainer
          currSlideIndex={currSlideIndex}
          setCurrSlideIndex={setCurrSlideIndex}
        />
      </div>
    </div>
  );
};

export default RecomendCreator;
