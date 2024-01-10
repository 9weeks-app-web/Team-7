import { CustomArrowProps } from "react-slick";

const PrevArrow = ({ onClick, currentSlide }: CustomArrowProps) => {
  return (
    <>
      {currentSlide !== 0 && (
        <div className="absolute lfet-0 top-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)_5%] w-[50px] h-[256px] z-[10]">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-[10] cursor-pointer"
            onClick={onClick}
          >
            <img
              className="rotate-180"
              src="/portfolio/nextArrow.svg"
              alt="prev"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PrevArrow;
