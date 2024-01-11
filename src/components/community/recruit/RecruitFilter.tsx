const RecruitFilter = () => {
  return (
    <div className="mt-[20px] flex">
      <div className="flex items-center py-[6px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[18px]">
        <div className="mr-[6px] text-[14px] leading-[140%]  font-semibold text-[#808080] text-center whitespace-nowrap">
          카테고리
        </div>
        <img src="/arrowDown.svg" alt="arrow-down" />
      </div>

      <div className="ml-[10px] flex items-center py-[6px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[18px]">
        <div className="mr-[6px] text-[14px] leading-[140%]  font-semibold text-[#808080] text-center whitespace-nowrap">
          포지션
        </div>
        <img src="/arrowDown.svg" alt="arrow-down" />
      </div>

      <div className="ml-[10px] flex items-center py-[6px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[18px]">
        <div className="mr-[6px] text-[14px] leading-[140%]  font-semibold text-[#808080] text-center whitespace-nowrap">
          지역
        </div>
        <img src="/arrowDown.svg" alt="arrow-down" />
      </div>

      <div className="ml-[10px] flex items-center py-[6px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[18px]">
        <div className="mr-[6px] text-[14px] leading-[140%]  font-semibold text-[#808080] text-center whitespace-nowrap">
          지원 마감일
        </div>
        <img src="/arrowDown.svg" alt="arrow-down" />
      </div>

      <div className="ml-[10px] flex items-center py-[6px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[18px]">
        <div className="mr-[6px] text-[14px] leading-[140%]  font-semibold text-[#808080] text-center whitespace-nowrap">
          기타 상세 정보
        </div>
        <img src="/arrowDown.svg" alt="arrow-down" />
      </div>

      <div className="ml-auto py-[11px] px-[20px] bg-[#337aff] border-[1px] border-solid border-[#337aff] rounded-[500px]">
        <div className="flex items-center text-[14px] leading-[140%]  font-semibold text-[#fff] whitespace-nowrap">
          <svg
            className="mr-[6px]"
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6H5.5M5.5 6H10M5.5 6V10.5M5.5 6V1.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          채용 공고 홍보하기
        </div>
      </div>
    </div>
  );
};

export default RecruitFilter;
