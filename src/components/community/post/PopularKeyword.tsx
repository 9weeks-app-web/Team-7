const PopularKeyword = () => {
  return (
    <>
      <div className="flex items-center font-semibold text-[20px] text-neutral-80 mb-[6px] ml-[20px] mt-[30px]">
        <span className="mr-[6px]">👀 지금 뜨고 있는 키워드</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 9.16667V13.3333M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5ZM10.0415 6.66667V6.75L9.9585 6.75016V6.66667H10.0415Z"
            stroke="#B3B3B3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="relative w-[359px] h-[415px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[6px] mt-[10px] ml-[20px]">
        <div className="absolute left-0 top-[10px] w-[357px] flex flex-col items-start justify-center gap-[6px] pt-[10px] pr-0 pb-[10px] pl-[24px]">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="text-[16px] leading-[140%] font-semibold text-[#808080] whitespace-nowrap">
                  1
                </div>
              </div>
            </div>
            <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
              AI
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                언급량
              </div>
              <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                1.1k
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                연관 키워드
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 포폴
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 취업
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[77px] w-[357px] flex flex-col items-start justify-center gap-[6px] pt-[10px] pr-0 pb-[10px] pl-[24px]">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="text-[16px] leading-[140%] font-semibold text-[#808080] whitespace-nowrap">
                  2
                </div>
              </div>
            </div>
            <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
              소셜
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                언급량
              </div>
              <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                1.1k
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                연관 키워드
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 포폴
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 취업
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[144px] w-[357px] flex flex-col items-start justify-center gap-[6px] pt-[10px] pr-0 pb-[10px] pl-[24px]">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="text-[16px] leading-[140%] font-semibold text-[#808080] whitespace-nowrap">
                  3
                </div>
              </div>
            </div>
            <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
              포트폴리오
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                언급량
              </div>
              <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                1.1k
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                연관 키워드
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 포폴
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 취업
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[211px] w-[357px] flex flex-col items-start justify-center gap-[6px] pt-[10px] pr-0 pb-[10px] pl-[24px]">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="text-[16px] leading-[140%] font-semibold text-[#808080] whitespace-nowrap">
                  4
                </div>
              </div>
            </div>
            <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
              경력
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                언급량
              </div>
              <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                1.1k
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                연관 키워드
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 포폴
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 취업
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[278px] w-[357px] flex flex-col items-start justify-center gap-[6px] pt-[10px] pr-0 pb-[10px] pl-[24px]">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="text-[16px] leading-[140%] font-semibold text-[#808080] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
            <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
              이직
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                언급량
              </div>
              <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                1.1k
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                연관 키워드
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 포폴
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[10px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 취업
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[24px] top-[375px] flex flex-row items-center justify-start gap-[6px] cursor-pointer">
          <div className="text-[14px] leading-[140%] font-bold text-[#337aff] whitespace-nowrap">
            뜨고 있는 키워드 더보기
          </div>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L5.5 6L1 10.5"
              stroke="#337AFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default PopularKeyword;
