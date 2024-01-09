import useThrottle from "../../hooks/useThrottle";

interface NextArrowButtonProps {
  handleSlideDirection: (direction: number) => void;
}

const NextArrowButton = ({ handleSlideDirection }: NextArrowButtonProps) => {
  const handleNextClick = useThrottle(() => {
    handleSlideDirection(+1);
  }, 400);

  return (
    <button
      onClick={handleNextClick}
      className="absolute top-[1px] right-[12px]"
    >
      <img src="categoryJobs/arrowRight.svg" alt="" />
    </button>
  );
};

export default NextArrowButton;
