import React, { useState } from "react";
import { MOCK_PROFESSIONAL } from "../../mocks/mockProfessional";
import ProfessionalBox from "./ProfessionalBox";
import { ProfessionalBoxProps } from "../../types/professionalTypes";

const ProfessionalList: React.FC = () => {
  const professionalData: ProfessionalBoxProps[] = MOCK_PROFESSIONAL;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < professionalData.length - 1 ? prevSlide + 1 : prevSlide
    );
  };

  return (
    <div className="relative w-[75rem]">
      <div className=" bg-neutral-80 px-[1.875rem] py-5 gap-x-5slider-container relative overflow-hidden">
        <div
          className={`flex slider-track transition-transform duration-300 ease-in-out gap-x-5 `}
          style={{
            transform: `translateX(-${currentSlide * 63}%)`,
          }}
        >
          {professionalData.map((professional, index) => (
            <ProfessionalBox key={index} {...professional} />
          ))}
          <div className="min-w-[290px] h-[362px] bg-white rounded-md py-[2.5rem] px-[1.875rem]">
            <p className="text-1 text-2xl text-primary-80">
              다양한 전문가와
              <br />
              이야기를
              <br />
              나눠보세요
            </p>
            <button className="bg-[#e5eeff] text-primary-80 py-2.5 px-4 mt-[1.88rem] rounded-md">
              전문가 더 만나러가기 &gt;
            </button>
          </div>
        </div>
      </div>

      <button
        className="absolute top-[48%] left-4"
        onClick={handlePrevSlide}
        disabled={currentSlide === 0}
      >
        {" "}
        <img src="./leftButtonSkyblue.svg" alt="leftButtonSkyblue" />
      </button>
      <button
        className="absolute top-[48%] right-7"
        onClick={handleNextSlide}
        disabled={currentSlide === professionalData.length - 4}
      >
        <img src="./rightButtonSkyblue.svg" alt="rightButtonSkyblue" />
      </button>
    </div>
  );
};

export default ProfessionalList;
