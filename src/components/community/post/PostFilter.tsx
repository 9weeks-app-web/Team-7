const PostFilter = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-[6px] my-[20px]">
        <div className="w-[68px] h-[36px] text-xs justify-center text-white bg-primary-50 p-[11px] font-semibold rounded-full flex cursor-pointer">
          <span>전체</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-[#808080] font-semibold p-[11px] rounded-full flex cursor-pointer">
          <span>기획</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-[#808080] font-semibold p-[11px] rounded-full flex cursor-pointer">
          <span>디자인</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-[#808080] font-semibold p-[11px] rounded-full flex cursor-pointer">
          <span>창작</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-[#808080] font-semibold p-[11px] rounded-full flex cursor-pointer">
          <span>자유</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-[#808080] font-semibold p-[11px] rounded-full flex cursor-pointer">
          <span>요청</span>
        </div>
      </div>

      <div className="flex">
        <span className="text-[#B3B3B3]">정렬방식</span>
        <span className="flex items-center ml-[6px]">
          <span className="mr-[10px] cursor-pointer">최신 순</span>
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1.5L4 4.5L1 1.5"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PostFilter;
