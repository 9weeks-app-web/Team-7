import useThrottle from "../../hooks/useThrottle";

interface PrevArrowButtonProps {
  handleSlideDirection: (direction: number) => void;
}

const PrevArrowButton = ({ handleSlideDirection }: PrevArrowButtonProps) => {
  const handlePrevClick = useThrottle(() => {
    handleSlideDirection(-1);
  }, 400);
  return (
    <button
      onClick={handlePrevClick}
      className="absolute  top-[-6px] left-[-20px] h-[68px] bg-gradient-to-l from-[#ffffff00] via-[#ededed] to-[#ffffff]"
    >
      <img src="categoryJobs/arrowLeft.svg" alt="" />
    </button>
  );
};

export default PrevArrowButton;
