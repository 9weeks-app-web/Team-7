import { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import ArrowButton from "./ArrowButton";

const RecomendCreator = () => {
  const [currSlideIndex, setCurrSlideIndex] = useState(3);

  const slideHandler = (direction: number) => {
    setCurrSlideIndex((prev) => prev + direction);
  };

  return (
    <div className="w-[1200px] mx-auto">
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
