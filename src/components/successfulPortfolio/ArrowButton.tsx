interface ArrowButtonProps {
  slideHandler: (direction: number) => void;
}

const ArrowButton = ({ slideHandler }: ArrowButtonProps) => {
  return (
    <div className="flex gap-[10px] absolute bottom-[48px] left-[20px]">
      <button
        className="w-[32px] h-[32px] rounded-full"
        onClick={() => slideHandler(-1)}
      >
        <img src="/arrowLeft.svg" alt="왼쪽 버튼 누르기" />
      </button>
      <button
        className="w-[32px] h-[32px] rounded-full"
        onClick={() => slideHandler(+1)}
      >
        <img src="/arrowRight.svg" alt="오른쪽 버튼 누르기" />
      </button>
    </div>
  );
};

export default ArrowButton;
