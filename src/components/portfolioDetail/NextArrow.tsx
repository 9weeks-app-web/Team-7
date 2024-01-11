import { CustomArrowProps } from "react-slick";

const NextArrow = ({ onClick, currentSlide }: CustomArrowProps) => {
  return (
    <>
      {currentSlide !== 2 && (
        <div className="absolute right-0 top-0 bg-gradient-to-l from-[rgba(0,0,0,0.7)_5%] w-[50px] h-[256px]">
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-[10] cursor-pointer"
            onClick={onClick}
          >
            <img src="/portfolio/nextArrow.svg" alt="next" />
          </div>
        </div>
      )}
    </>
  );
};

export default NextArrow;
