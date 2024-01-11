const BestPost = () => {
  return (
    <section className="best-posts mt-[17px] w-[841px] flex flex-col items-center justify-start gap-[40px] pt-[30px] pr-[16px] pb-[30px] pl-[30px] bg-[#fff] border-[1px] border-solid border-[#f3f3f3] rounded-[6px] overflow-hidden">
      <div className="flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-center justify-start">
            <div className="text-[24px] leading-[140%]  font-semibold text-[#1a1a1a] whitespace-nowrap">
              스팩폴리오 BEST 게시글
            </div>
          </div>
        </div>
        <div className="relative w-[769px] h-[195px] shrink-0">
          <div className="absolute left-0 top-0 h-[195px] flex flex-row items-start justify-start gap-[20px] bg-[#fff]">
            <div className="w-[266px] shrink-0 flex flex-col items-start justify-start pt-[20px] pr-[30px] pb-[20px] pl-[20px] bg-[#f5f8ff] border-[1px] border-solid border-[#e5eeff] rounded-[6px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <img
                      className="w-[31px] h-[31px] rounded-full"
                      src="/recommendProfile01.png"
                      alt="basic"
                    />
                    <div className="flex flex-row items-center justify-start">
                      <div className="text-[16px] leading-[140%]  font-semibold text-[#4d4d4d] text-center whitespace-nowrap">
                        Opiolis
                      </div>
                    </div>
                  </div>
                  <div className="w-[207px] flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="w-[207px] text-[20px] leading-[140%]  font-semibold text-[#1a1a1a]">
                        디자인 포트폴리오를 만들 때 자주 놓치는 것들
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px]">
                      <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#e5eeff] rounded-[4px] overflow-hidden">
                        <div className="text-[10px] leading-[140%]  font-semibold text-[#4c8bff] whitespace-nowrap">
                          # 기획
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#e5eeff] rounded-[4px] overflow-hidden">
                        <div className="text-[10px] leading-[140%]  font-semibold text-[#4c8bff] whitespace-nowrap">
                          # 인사이트
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.18848 6.00941C1.0912 5.85539 1.04257 5.77837 1.01534 5.65958C0.994887 5.57036 0.994887 5.42964 1.01534 5.34042C1.04257 5.22163 1.0912 5.14462 1.18848 4.99059C1.99234 3.71774 4.38511 0.5 8.03154 0.5C11.678 0.5 14.0707 3.71774 14.8746 4.99059C14.9719 5.14462 15.0205 5.22163 15.0477 5.34042C15.0682 5.42964 15.0682 5.57036 15.0477 5.65958C15.0205 5.77837 14.9719 5.85538 14.8746 6.00941C14.0707 7.28226 11.678 10.5 8.03154 10.5C4.38511 10.5 1.99234 7.28226 1.18848 6.00941Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.03154 7.64286C9.215 7.64286 10.1744 6.68347 10.1744 5.5C10.1744 4.31653 9.215 3.35714 8.03154 3.35714C6.84807 3.35714 5.88868 4.31653 5.88868 5.5C5.88868 6.68347 6.84807 7.64286 8.03154 7.64286Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] text-center whitespace-nowrap">
                        1.1k
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.66635 1.6976C5.54528 0.386959 3.6758 0.0344014 2.27117 1.23455C0.866536 2.4347 0.668784 4.44129 1.77185 5.86071C2.68898 7.04087 5.46452 9.5299 6.37419 10.3355C6.47596 10.4256 6.52685 10.4707 6.58621 10.4884C6.63801 10.5039 6.6947 10.5039 6.7465 10.4884C6.80586 10.4707 6.85675 10.4256 6.95852 10.3355C7.86819 9.5299 10.6437 7.04087 11.5609 5.86071C12.6639 4.44129 12.4903 2.42208 11.0615 1.23455C9.63276 0.0470258 7.78743 0.386959 6.66635 1.6976Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] whitespace-nowrap">
                        205
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.8138 9.90948L3.71452 9.18891L3.72114 9.18383C3.90892 9.0336 4.00368 8.95779 4.1094 8.90378C4.20424 8.85533 4.30538 8.82004 4.40971 8.79863C4.52731 8.77449 4.64981 8.77449 4.8957 8.77449H10.0265C10.6872 8.77449 11.018 8.77449 11.2706 8.64578C11.493 8.53245 11.6739 8.35143 11.7873 8.12901C11.916 7.8764 11.916 7.54602 11.916 6.8853V2.38949C11.916 1.72876 11.916 1.3979 11.7873 1.14529C11.6739 0.92287 11.4926 0.742167 11.2702 0.628838C11.0174 0.5 10.6868 0.5 10.0248 0.5H3.16877C2.50675 0.5 2.17549 0.5 1.92263 0.628838C1.70021 0.742167 1.51951 0.92287 1.40618 1.14529C1.27734 1.39815 1.27734 1.72941 1.27734 2.39143V9.17119C1.27734 9.80106 1.27734 10.1159 1.40646 10.2777C1.51875 10.4184 1.68896 10.5002 1.86896 10.5C2.07592 10.4998 2.32196 10.303 2.8138 9.90948Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] whitespace-nowrap">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[266px] shrink-0 flex flex-col items-start justify-start pt-[20px] pr-[30px] pb-[20px] pl-[20px] bg-[#f5f8ff] border-[1px] border-solid border-[#e5eeff] rounded-[6px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <img
                      className="w-[31px] h-[31px] rounded-full"
                      src="/recommendProfile02.png"
                      alt="basic"
                    />
                    <div className="flex flex-row items-center justify-start">
                      <div className="text-[16px] leading-[140%]  font-semibold text-[#4d4d4d] text-center whitespace-nowrap">
                        레모네이드
                      </div>
                    </div>
                  </div>
                  <div className="w-[207px] flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="w-[207px] text-[20px] leading-[140%]  font-semibold text-[#1a1a1a]">
                        나의 미래를 책임지는 첫직장의 중요성
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#e5eeff] rounded-[4px] overflow-hidden">
                        <div className="text-[10px] leading-[140%]  font-semibold text-[#4c8bff] whitespace-nowrap">
                          # 커리어
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.18848 6.00941C1.0912 5.85539 1.04257 5.77837 1.01534 5.65958C0.994887 5.57036 0.994887 5.42964 1.01534 5.34042C1.04257 5.22163 1.0912 5.14462 1.18848 4.99059C1.99234 3.71774 4.38511 0.5 8.03154 0.5C11.678 0.5 14.0707 3.71774 14.8746 4.99059C14.9719 5.14462 15.0205 5.22163 15.0477 5.34042C15.0682 5.42964 15.0682 5.57036 15.0477 5.65958C15.0205 5.77837 14.9719 5.85538 14.8746 6.00941C14.0707 7.28226 11.678 10.5 8.03154 10.5C4.38511 10.5 1.99234 7.28226 1.18848 6.00941Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.03154 7.64286C9.215 7.64286 10.1744 6.68347 10.1744 5.5C10.1744 4.31653 9.215 3.35714 8.03154 3.35714C6.84807 3.35714 5.88868 4.31653 5.88868 5.5C5.88868 6.68347 6.84807 7.64286 8.03154 7.64286Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] text-center whitespace-nowrap">
                        1.1k
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.66635 1.6976C5.54528 0.386959 3.6758 0.0344014 2.27117 1.23455C0.866536 2.4347 0.668784 4.44129 1.77185 5.86071C2.68898 7.04087 5.46452 9.5299 6.37419 10.3355C6.47596 10.4256 6.52685 10.4707 6.58621 10.4884C6.63801 10.5039 6.6947 10.5039 6.7465 10.4884C6.80586 10.4707 6.85675 10.4256 6.95852 10.3355C7.86819 9.5299 10.6437 7.04087 11.5609 5.86071C12.6639 4.44129 12.4903 2.42208 11.0615 1.23455C9.63276 0.0470258 7.78743 0.386959 6.66635 1.6976Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] whitespace-nowrap">
                        205
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.8138 9.90948L3.71452 9.18891L3.72114 9.18383C3.90892 9.0336 4.00368 8.95779 4.1094 8.90378C4.20424 8.85533 4.30538 8.82004 4.40971 8.79863C4.52731 8.77449 4.64981 8.77449 4.8957 8.77449H10.0265C10.6872 8.77449 11.018 8.77449 11.2706 8.64578C11.493 8.53245 11.6739 8.35143 11.7873 8.12901C11.916 7.8764 11.916 7.54602 11.916 6.8853V2.38949C11.916 1.72876 11.916 1.3979 11.7873 1.14529C11.6739 0.92287 11.4926 0.742167 11.2702 0.628838C11.0174 0.5 10.6868 0.5 10.0248 0.5H3.16877C2.50675 0.5 2.17549 0.5 1.92263 0.628838C1.70021 0.742167 1.51951 0.92287 1.40618 1.14529C1.27734 1.39815 1.27734 1.72941 1.27734 2.39143V9.17119C1.27734 9.80106 1.27734 10.1159 1.40646 10.2777C1.51875 10.4184 1.68896 10.5002 1.86896 10.5C2.07592 10.4998 2.32196 10.303 2.8138 9.90948Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] whitespace-nowrap">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[266px] shrink-0 flex flex-col items-start justify-start pt-[20px] pr-[30px] pb-[20px] pl-[20px] bg-[#f5f8ff] border-[1px] border-solid border-[#e5eeff] rounded-[6px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <img
                      className="w-[31px] h-[31px] rounded-full"
                      src="/recommendProfile03.png"
                      alt="basic"
                    />
                    <div className="flex flex-row items-center justify-start">
                      <div className="text-[16px] leading-[140%]  font-semibold text-[#4d4d4d] text-center whitespace-nowrap">
                        joshua
                      </div>
                    </div>
                  </div>
                  <div className="w-[207px] flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="w-[207px] text-[20px] leading-[140%]  font-semibold text-[#1a1a1a]">
                        다크모드, 눈에 정말로 좋을까요?
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px]">
                      <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#e5eeff] rounded-[4px] overflow-hidden">
                        <div className="text-[10px] leading-[140%]  font-semibold text-[#4c8bff] whitespace-nowrap">
                          # 다크모드
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#e5eeff] rounded-[4px] overflow-hidden">
                        <div className="text-[10px] leading-[140%]  font-semibold text-[#4c8bff] whitespace-nowrap">
                          # 디자인
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.18848 6.00941C1.0912 5.85539 1.04257 5.77837 1.01534 5.65958C0.994887 5.57036 0.994887 5.42964 1.01534 5.34042C1.04257 5.22163 1.0912 5.14462 1.18848 4.99059C1.99234 3.71774 4.38511 0.5 8.03154 0.5C11.678 0.5 14.0707 3.71774 14.8746 4.99059C14.9719 5.14462 15.0205 5.22163 15.0477 5.34042C15.0682 5.42964 15.0682 5.57036 15.0477 5.65958C15.0205 5.77837 14.9719 5.85538 14.8746 6.00941C14.0707 7.28226 11.678 10.5 8.03154 10.5C4.38511 10.5 1.99234 7.28226 1.18848 6.00941Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.03154 7.64286C9.215 7.64286 10.1744 6.68347 10.1744 5.5C10.1744 4.31653 9.215 3.35714 8.03154 3.35714C6.84807 3.35714 5.88868 4.31653 5.88868 5.5C5.88868 6.68347 6.84807 7.64286 8.03154 7.64286Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] text-center whitespace-nowrap">
                        1.1k
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.66635 1.6976C5.54528 0.386959 3.6758 0.0344014 2.27117 1.23455C0.866536 2.4347 0.668784 4.44129 1.77185 5.86071C2.68898 7.04087 5.46452 9.5299 6.37419 10.3355C6.47596 10.4256 6.52685 10.4707 6.58621 10.4884C6.63801 10.5039 6.6947 10.5039 6.7465 10.4884C6.80586 10.4707 6.85675 10.4256 6.95852 10.3355C7.86819 9.5299 10.6437 7.04087 11.5609 5.86071C12.6639 4.44129 12.4903 2.42208 11.0615 1.23455C9.63276 0.0470258 7.78743 0.386959 6.66635 1.6976Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] whitespace-nowrap">
                        205
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.8138 9.90948L3.71452 9.18891L3.72114 9.18383C3.90892 9.0336 4.00368 8.95779 4.1094 8.90378C4.20424 8.85533 4.30538 8.82004 4.40971 8.79863C4.52731 8.77449 4.64981 8.77449 4.8957 8.77449H10.0265C10.6872 8.77449 11.018 8.77449 11.2706 8.64578C11.493 8.53245 11.6739 8.35143 11.7873 8.12901C11.916 7.8764 11.916 7.54602 11.916 6.8853V2.38949C11.916 1.72876 11.916 1.3979 11.7873 1.14529C11.6739 0.92287 11.4926 0.742167 11.2702 0.628838C11.0174 0.5 10.6868 0.5 10.0248 0.5H3.16877C2.50675 0.5 2.17549 0.5 1.92263 0.628838C1.70021 0.742167 1.51951 0.92287 1.40618 1.14529C1.27734 1.39815 1.27734 1.72941 1.27734 2.39143V9.17119C1.27734 9.80106 1.27734 10.1159 1.40646 10.2777C1.51875 10.4184 1.68896 10.5002 1.86896 10.5C2.07592 10.4998 2.32196 10.303 2.8138 9.90948Z"
                          stroke="#333333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#333] whitespace-nowrap">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-[-30px] top-0 h-[195px] flex flex-row items-start justify-start gap-[10px]">
            <div className="w-[96px] h-[215px] shrink-0 bg-[linear-gradient(90deg,#ffffff00_0%,#fff_100%)]"></div>
            <div className="absolute left-[56px] top-[96px] w-[24px] h-[24px] shrink-0 flex flex-row items-center justify-center rounded-[75px]">
              <div className="relative w-[24px] h-[24px] shrink-0 flex">
                <div className="cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[24px] h-[24px]  rounded-[75px]"></div>
                <img alt="" src="/arrowRight.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[10px] py-[10px] px-[25px] bg-[#fff] border-[1px] border-solid border-[#ccc] rounded-[20px] overflow-hidden">
        <div className="text-[16px] leading-[140%]  text-[#808080] whitespace-nowrap">
          BEST 게시글 더보기
        </div>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 1.5L5.75 6L1.25 10.5"
            stroke="#808080"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default BestPost;
