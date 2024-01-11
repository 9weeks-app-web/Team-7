const WeeklyPopularTopics = () => {
  return (
    <section className="border rounded-[6px] popular-topic overflow-hidden w-[841px] bg-[#F5F8FF]">
      <h1 className="title mt-[30px] ml-[42px]">
        이번주 스팩폴리오인 주목 토픽
      </h1>
      <div className="flex gap-[6px] my-[20px]">
        <div className="ml-[42px] w-[68px] h-[36px] text-xs justify-center text-white bg-primary-50 p-[11px] rounded-full flex cursor-pointer">
          <span>기획</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-primary-50 p-[11px] rounded-full flex cursor-pointer">
          <span>디자인</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-primary-50 p-[11px] rounded-full flex cursor-pointer">
          <span>창작</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-primary-50 p-[11px] rounded-full flex cursor-pointer">
          <span>질문</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-primary-50 p-[11px] rounded-full flex cursor-pointer">
          <span>고민</span>
        </div>
        <div className="w-[68px] h-[36px] text-xs border border-[#CCDEFF] justify-center text-primary-50 p-[11px] rounded-full flex cursor-pointer">
          <span>취준</span>
        </div>
      </div>
      <div className="ml-[42px] mt-[20px] relative w-[770px] h-[187px]">
        <div className=" absolute left-0 top-0 w-[1124px] h-[188px] flex">
          <div className="bg-[#F5F8FF] absolute left-0 top-0 flex flex-row items-start justify-start gap-[20px]">
            <div className="w-[266px] shrink-0 flex flex-col items-start justify-start pt-[20px] pr-[30px] pb-[20px] pl-[20px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[6px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="w-[207px] flex flex-col items-start justify-start gap-[6px]">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                      <div className="text-[10px] leading-[140%]  font-semibold text-[#7facff] whitespace-nowrap">
                        # 기획
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                      <div className="text-[10px] leading-[140%]  font-semibold text-[#7facff] whitespace-nowrap">
                        # 인사이트
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[207px] text-[20px] leading-[140%]  font-semibold text-[#1a1a1a]">
                      알아두면 쓸모있는 피피티 꿀팁
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-center justify-start">
                      <div className="text-[14px] leading-[140%]  font-medium text-[#4d4d4d] text-center whitespace-nowrap">
                        아상현상
                      </div>
                    </div>
                  </div>
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
                          d="M0.68848 6.00941C0.591204 5.85539 0.542566 5.77837 0.515339 5.65958C0.494887 5.57036 0.494887 5.42964 0.515339 5.34042C0.542566 5.22163 0.591204 5.14462 0.68848 4.99059C1.49234 3.71774 3.88511 0.5 7.53154 0.5C11.178 0.5 13.5707 3.71774 14.3746 4.99059C14.4719 5.14462 14.5205 5.22163 14.5477 5.34042C14.5682 5.42964 14.5682 5.57036 14.5477 5.65958C14.5205 5.77837 14.4719 5.85538 14.3746 6.00941C13.5707 7.28226 11.178 10.5 7.53154 10.5C3.88511 10.5 1.49234 7.28226 0.68848 6.00941Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.53154 7.64286C8.715 7.64286 9.67439 6.68347 9.67439 5.5C9.67439 4.31653 8.715 3.35714 7.53154 3.35714C6.34807 3.35714 5.38868 4.31653 5.38868 5.5C5.38868 6.68347 6.34807 7.64286 7.53154 7.64286Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] text-center whitespace-nowrap">
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
                          d="M6.16648 1.6976C5.0454 0.386959 3.17593 0.0344014 1.77129 1.23455C0.366658 2.4347 0.168906 4.44129 1.27197 5.86071C2.1891 7.04087 4.96464 9.5299 5.87431 10.3355C5.97609 10.4256 6.02697 10.4707 6.08633 10.4884C6.13813 10.5039 6.19482 10.5039 6.24663 10.4884C6.30598 10.4707 6.35687 10.4256 6.45864 10.3355C7.36831 9.5299 10.1439 7.04087 11.061 5.86071C12.164 4.44129 11.9904 2.42208 10.5617 1.23455C9.13288 0.0470258 7.28755 0.386959 6.16648 1.6976Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                        1
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.31393 9.90948L3.21464 9.18891L3.22126 9.18383C3.40904 9.0336 3.5038 8.95779 3.60952 8.90378C3.70436 8.85533 3.8055 8.82004 3.90984 8.79863C4.02743 8.77449 4.14993 8.77449 4.39582 8.77449H9.52661C10.1873 8.77449 10.5181 8.77449 10.7707 8.64578C10.9931 8.53245 11.1741 8.35143 11.2874 8.12901C11.4161 7.8764 11.4161 7.54602 11.4161 6.8853V2.38949C11.4161 1.72876 11.4161 1.3979 11.2874 1.14529C11.1741 0.92287 10.9928 0.742167 10.7703 0.628838C10.5175 0.5 10.1869 0.5 9.5249 0.5H2.66889C2.00687 0.5 1.67561 0.5 1.42276 0.628838C1.20034 0.742167 1.01963 0.92287 0.906304 1.14529C0.777466 1.39815 0.777466 1.72941 0.777466 2.39143V9.17119C0.777466 9.80106 0.777466 10.1159 0.906582 10.2777C1.01887 10.4184 1.18908 10.5002 1.36908 10.5C1.57604 10.4998 1.82208 10.303 2.31393 9.90948Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[266px] shrink-0 flex flex-col items-start justify-start pt-[20px] pr-[30px] pb-[20px] pl-[20px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[6px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="w-[207px] flex flex-col items-start justify-start gap-[6px]">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                      <div className="text-[10px] leading-[140%]  font-semibold text-[#7facff] whitespace-nowrap">
                        # 기획
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                      <div className="text-[10px] leading-[140%]  font-semibold text-[#7facff] whitespace-nowrap">
                        # 인사이트
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[207px] text-[20px] leading-[140%]  font-semibold text-[#1a1a1a]">
                      기획을 시작했을 때 알아두었다면 좋았던 것들
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-center justify-start">
                      <div className="text-[14px] leading-[140%]  font-medium text-[#4d4d4d] text-center whitespace-nowrap">
                        JAMIT
                      </div>
                    </div>
                  </div>
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
                          d="M0.68848 6.00941C0.591204 5.85539 0.542566 5.77837 0.515339 5.65958C0.494887 5.57036 0.494887 5.42964 0.515339 5.34042C0.542566 5.22163 0.591204 5.14462 0.68848 4.99059C1.49234 3.71774 3.88511 0.5 7.53154 0.5C11.178 0.5 13.5707 3.71774 14.3746 4.99059C14.4719 5.14462 14.5205 5.22163 14.5477 5.34042C14.5682 5.42964 14.5682 5.57036 14.5477 5.65958C14.5205 5.77837 14.4719 5.85538 14.3746 6.00941C13.5707 7.28226 11.178 10.5 7.53154 10.5C3.88511 10.5 1.49234 7.28226 0.68848 6.00941Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.53154 7.64286C8.715 7.64286 9.67439 6.68347 9.67439 5.5C9.67439 4.31653 8.715 3.35714 7.53154 3.35714C6.34807 3.35714 5.38868 4.31653 5.38868 5.5C5.38868 6.68347 6.34807 7.64286 7.53154 7.64286Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] text-center whitespace-nowrap">
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
                          d="M6.16648 1.6976C5.0454 0.386959 3.17593 0.0344014 1.77129 1.23455C0.366658 2.4347 0.168906 4.44129 1.27197 5.86071C2.1891 7.04087 4.96464 9.5299 5.87431 10.3355C5.97609 10.4256 6.02697 10.4707 6.08633 10.4884C6.13813 10.5039 6.19482 10.5039 6.24663 10.4884C6.30598 10.4707 6.35687 10.4256 6.45864 10.3355C7.36831 9.5299 10.1439 7.04087 11.061 5.86071C12.164 4.44129 11.9904 2.42208 10.5617 1.23455C9.13288 0.0470258 7.28755 0.386959 6.16648 1.6976Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                        142
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.31393 9.90948L3.21464 9.18891L3.22126 9.18383C3.40904 9.0336 3.5038 8.95779 3.60952 8.90378C3.70436 8.85533 3.8055 8.82004 3.90984 8.79863C4.02743 8.77449 4.14993 8.77449 4.39582 8.77449H9.52661C10.1873 8.77449 10.5181 8.77449 10.7707 8.64578C10.9931 8.53245 11.1741 8.35143 11.2874 8.12901C11.4161 7.8764 11.4161 7.54602 11.4161 6.8853V2.38949C11.4161 1.72876 11.4161 1.3979 11.2874 1.14529C11.1741 0.92287 10.9928 0.742167 10.7703 0.628838C10.5175 0.5 10.1869 0.5 9.5249 0.5H2.66889C2.00687 0.5 1.67561 0.5 1.42276 0.628838C1.20034 0.742167 1.01963 0.92287 0.906304 1.14529C0.777466 1.39815 0.777466 1.72941 0.777466 2.39143V9.17119C0.777466 9.80106 0.777466 10.1159 0.906582 10.2777C1.01887 10.4184 1.18908 10.5002 1.36908 10.5C1.57604 10.4998 1.82208 10.303 2.31393 9.90948Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[266px] shrink-0 flex flex-col items-start justify-start pt-[20px] pr-[30px] pb-[20px] pl-[20px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[6px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="w-[207px] flex flex-col items-start justify-start gap-[6px]">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                      <div className="text-[10px] leading-[140%]  font-semibold text-[#7facff] whitespace-nowrap">
                        # 기획
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                      <div className="text-[10px] leading-[140%]  font-semibold text-[#7facff] whitespace-nowrap">
                        # 인사이트
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[207px] text-[20px] leading-[140%]  font-semibold text-[#1a1a1a]">
                      기획 경력 5년, 이제서야 보이는 것들
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-center justify-start">
                      <div className="text-[14px] leading-[140%]  font-medium text-[#4d4d4d] text-center whitespace-nowrap">
                        실키
                      </div>
                    </div>
                  </div>
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
                          d="M0.68848 6.00941C0.591204 5.85539 0.542566 5.77837 0.515339 5.65958C0.494887 5.57036 0.494887 5.42964 0.515339 5.34042C0.542566 5.22163 0.591204 5.14462 0.68848 4.99059C1.49234 3.71774 3.88511 0.5 7.53154 0.5C11.178 0.5 13.5707 3.71774 14.3746 4.99059C14.4719 5.14462 14.5205 5.22163 14.5477 5.34042C14.5682 5.42964 14.5682 5.57036 14.5477 5.65958C14.5205 5.77837 14.4719 5.85538 14.3746 6.00941C13.5707 7.28226 11.178 10.5 7.53154 10.5C3.88511 10.5 1.49234 7.28226 0.68848 6.00941Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.53154 7.64286C8.715 7.64286 9.67439 6.68347 9.67439 5.5C9.67439 4.31653 8.715 3.35714 7.53154 3.35714C6.34807 3.35714 5.38868 4.31653 5.38868 5.5C5.38868 6.68347 6.34807 7.64286 7.53154 7.64286Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] text-center whitespace-nowrap">
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
                          d="M6.16648 1.6976C5.0454 0.386959 3.17593 0.0344014 1.77129 1.23455C0.366658 2.4347 0.168906 4.44129 1.27197 5.86071C2.1891 7.04087 4.96464 9.5299 5.87431 10.3355C5.97609 10.4256 6.02697 10.4707 6.08633 10.4884C6.13813 10.5039 6.19482 10.5039 6.24663 10.4884C6.30598 10.4707 6.35687 10.4256 6.45864 10.3355C7.36831 9.5299 10.1439 7.04087 11.061 5.86071C12.164 4.44129 11.9904 2.42208 10.5617 1.23455C9.13288 0.0470258 7.28755 0.386959 6.16648 1.6976Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                        31
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.31393 9.90948L3.21464 9.18891L3.22126 9.18383C3.40904 9.0336 3.5038 8.95779 3.60952 8.90378C3.70436 8.85533 3.8055 8.82004 3.90984 8.79863C4.02743 8.77449 4.14993 8.77449 4.39582 8.77449H9.52661C10.1873 8.77449 10.5181 8.77449 10.7707 8.64578C10.9931 8.53245 11.1741 8.35143 11.2874 8.12901C11.4161 7.8764 11.4161 7.54602 11.4161 6.8853V2.38949C11.4161 1.72876 11.4161 1.3979 11.2874 1.14529C11.1741 0.92287 10.9928 0.742167 10.7703 0.628838C10.5175 0.5 10.1869 0.5 9.5249 0.5H2.66889C2.00687 0.5 1.67561 0.5 1.42276 0.628838C1.20034 0.742167 1.01963 0.92287 0.906304 1.14529C0.777466 1.39815 0.777466 1.72941 0.777466 2.39143V9.17119C0.777466 9.80106 0.777466 10.1159 0.906582 10.2777C1.01887 10.4184 1.18908 10.5002 1.36908 10.5C1.57604 10.4998 1.82208 10.303 2.31393 9.90948Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[266px] shrink-0 flex flex-col items-start justify-start pt-[20px] pr-[30px] pb-[20px] pl-[20px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[6px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="w-[207px] flex flex-col items-start justify-start gap-[6px]">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                      <div className="text-[10px] leading-[140%]  font-semibold text-[#7facff] whitespace-nowrap">
                        # 기획
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center py-[6px] px-[8px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                      <div className="text-[10px] leading-[140%]  font-semibold text-[#7facff] whitespace-nowrap">
                        # 인사이트
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[207px] text-[20px] leading-[140%]  font-semibold text-[#1a1a1a]">
                      기획 경력 5년, 이제서야 보이는 것들
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-center justify-start">
                      <div className="text-[12px] leading-[140%]  font-semibold text-[#4d4d4d] text-center whitespace-nowrap">
                        작성자 이름
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                      3,201 조회
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
                          d="M6.10337 1.6976C4.98229 0.386959 3.11282 0.0344014 1.70818 1.23455C0.303548 2.4347 0.105795 4.44129 1.20886 5.86071C2.12599 7.04087 4.90153 9.5299 5.8112 10.3355C5.91298 10.4256 5.96386 10.4707 6.02322 10.4884C6.07502 10.5039 6.13171 10.5039 6.18351 10.4884C6.24287 10.4707 6.29376 10.4256 6.39553 10.3355C7.3052 9.5299 10.0807 7.04087 10.9979 5.86071C12.1009 4.44129 11.9273 2.42208 10.4985 1.23455C9.06977 0.0470258 7.22444 0.386959 6.10337 1.6976Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                        1
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.25082 9.90948L3.15153 9.18891L3.15815 9.18383C3.34593 9.0336 3.44069 8.95779 3.54641 8.90378C3.64125 8.85533 3.74239 8.82004 3.84673 8.79863C3.96432 8.77449 4.08682 8.77449 4.33271 8.77449H9.4635C10.1242 8.77449 10.455 8.77449 10.7076 8.64578C10.93 8.53245 11.1109 8.35143 11.2243 8.12901C11.353 7.8764 11.353 7.54602 11.353 6.8853V2.38949C11.353 1.72876 11.353 1.3979 11.2243 1.14529C11.1109 0.92287 10.9296 0.742167 10.7072 0.628838C10.4544 0.5 10.1238 0.5 9.46179 0.5H2.60578C1.94376 0.5 1.6125 0.5 1.35965 0.628838C1.13723 0.742167 0.956523 0.92287 0.843193 1.14529C0.714355 1.39815 0.714355 1.72941 0.714355 2.39143V9.17119C0.714355 9.80106 0.714355 10.1159 0.843471 10.2777C0.955761 10.4184 1.12597 10.5002 1.30597 10.5C1.51293 10.4998 1.75897 10.303 2.25082 9.90948Z"
                          stroke="#B3B3B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="text-[12px] leading-[140%]  text-[#b3b3b3] whitespace-nowrap">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[699px] top-0 w-[96px] h-[177px] flex">
            <div className="absolute left-0 top-0 h-[177px] flex flex-row items-start justify-start">
              <div className="w-[96px] h-[177px] shrink-0 bg-[linear-gradient(90deg,#ffffff00_0%,#fff_100%)]"></div>
            </div>
            <div className="absolute left-[56px] top-[82px] w-[24px] h-[23px] flex flex-row items-center justify-center rounded-[75px]">
              <div className="relative w-[24px] h-[24px] shrink-0 flex">
                <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[24px] h-[24px]  rounded-[75px]"></div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.706055"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#99BDFF"
                  />
                  <path
                    d="M10.25 17.9561L15.5 12.7061L10.25 7.45605"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-white">
        <div className="my-[30px] border border-[#ccc] justify-center items-center w-[183px] h-[42px] py-[10px] px-[25px] rounded-[20px] flex cursor-pointer">
          <span className="mr-[10px] text-[14px]">
            <span className="text-primary-100">기획</span> 게시글 더보기
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4.5"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
          >
            <path
              d="M0.75 1.5L5.25 6L0.75 10.5"
              stroke="#808080"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WeeklyPopularTopics;
