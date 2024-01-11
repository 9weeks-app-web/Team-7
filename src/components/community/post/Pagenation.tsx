const Pagenation = () => {
  return (
    <div className="cursor-pointer flex flex-row items-center gap-[8px] justify-center mt-[79px]">
      <div className="h-[28px] flex flex-row items-center justify-center py-[2px] px-[10px] bg-[#f5f8ff] rounded-[4px]">
        <div className="text-[16px] leading-[140%] font-semibold text-[#0059ff] whitespace-nowrap">
          1
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          2
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          3
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          4
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          5
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          6
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          7
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          8
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          9
        </div>
      </div>
      <div className="w-[28px] h-[28px] shrink-0 flex flex-row items-center justify-center py-[2px] px-[10px] rounded-[4px]">
        <div className="text-[16px] leading-[140%] text-[#666] whitespace-nowrap">
          10
        </div>
      </div>
      <div className="h-[28px] flex flex-row items-center justify-center gap-[10px] py-[2px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[4px]">
        <div className="text-[12px] leading-[140%] text-[#666] whitespace-nowrap">
          다음
        </div>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L1 9"
            stroke="#808080"
            stroke-width="1.09091"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagenation;
