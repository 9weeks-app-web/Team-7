import useThrottle from "../../hooks/useThrottle";

interface ArrowButtonProps {
  slideHandler: (direction: number) => void;
}

const ArrowButton = ({ slideHandler }: ArrowButtonProps) => {
  const handlePrevClick = useThrottle(() => {
    slideHandler(-1);
  }, 400);
  const handleNextClick = useThrottle(() => {
    slideHandler(+1);
  }, 400);

  return (
    <div className="flex gap-[10px] absolute bottom-[48px] left-[20px]">
      <button
        className="w-[32px] h-[32px] rounded-full"
        onClick={handlePrevClick}
      >
        <img src="/arrowLeft.svg" alt="왼쪽 버튼 누르기" />
      </button>
      <button
        className="w-[32px] h-[32px] rounded-full"
        onClick={handleNextClick}
      >
        <img src="/arrowRight.svg" alt="오른쪽 버튼 누르기" />
      </button>
    </div>
  );
};

export default ArrowButton;
