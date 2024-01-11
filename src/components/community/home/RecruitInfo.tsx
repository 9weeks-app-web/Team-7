import Card from "../../design/Card";

const RecruitInfo = () => {
  return (
    <section className="recruit-info">
      <Card
        width="w-[841px]"
        height="h-auto"
        spacing="p-[30px] mt-[20px]"
        color="border-[#E6E6E6]"
        border="border"
      >
        <div className="flex items-center cursor-pointer ml-auto">
          <h1 className="title">채용 정보도 스팩폴리오에서</h1>
          <span className="ml-auto mr-[10px]">1/10</span>
          <div className="flex gap-[10px]">
            <button className="w-[32px] h-[32px] rounded-full">
              <img src="/arrowLeft.svg" alt="왼쪽 버튼 누르기" />
            </button>
            <button className="w-[32px] h-[32px] rounded-full">
              <img src="/arrowRight.svg" alt="오른쪽 버튼 누르기" />
            </button>
          </div>
        </div>

        {/* 채용 프로필 */}

        <div className="flex flex-row items-start justify-start gap-[20px] mt-[20px]">
          <div className="flex flex-col items-start justify-start gap-[10px] bg-[#fff]">
            <svg
              width="239"
              height="156"
              viewBox="0 0 239 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="0.5"
                width="237"
                height="155"
                rx="5.5"
                fill="white"
                stroke="#E6E6E6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M73.3144 86.4601C76.9373 86.4601 78.5601 83.8349 78.5601 78.5846V68.3332H82.5567V80.834V87.3738C82.5567 94.8325 77.311 97 72.1489 97C66.1558 97 63.517 92.0328 68.3196 88.4406C67.3142 87.7086 66.5651 86.624 66.122 85.1547C64.9779 88.136 62.9743 89.6249 60.6165 89.6249C57.4937 89.6249 56.079 87.5412 56.079 83.6248V75.833H56.0808V64.5006C56.0808 64.0428 56.0808 63.8754 55.9135 63.8754C55.7463 63.8754 55.6626 64.0411 55.5381 64.5415L48.7923 89.169H41.8811L36.3026 69.3342C34.6798 63.5424 37.1354 60 41.7565 60C46.7104 60 48.2514 62.9992 48.2514 65.5834C48.2514 66.8871 47.9881 68.2246 47.5468 69.5051C47.1268 70.7198 45.931 73.076 45.262 74.1108L42.0893 72.4438C42.2883 72.0869 42.4769 71.7687 42.6563 71.4659C43.0769 70.7561 43.4476 70.1305 43.7869 69.2878C44.1694 68.3404 44.3385 67.4125 44.3385 66.6253C44.3385 65.042 43.5057 63.7917 42.1729 63.7917C40.4665 63.7917 39.0928 64.7499 40.3419 69.457H40.3437L44.9239 86.4583H45.673L51.1678 65.2913C51.9597 62.2494 53.458 60 56.0808 60C58.7037 60 60.4938 61.4586 60.4938 64.3759V79.0851H60.492V83.3327C60.492 85.5002 61.1165 86.4583 62.1575 86.4583C64.5722 86.4583 65.6541 82.9587 65.6541 78.5828V68.3332H69.6506V80.7093C69.6506 85.2099 71.0243 86.4601 73.3144 86.4601ZM72.1489 93.8334C74.98 93.8334 78.5601 92.8343 78.5601 86.542V85.737C77.1829 88.3337 74.9782 89.6267 72.4817 89.6267C71.446 89.6267 70.5065 89.4771 69.6773 89.1672C67.8392 91.4647 68.8997 93.8334 72.1489 93.8334ZM108.816 67.7081C102.445 67.7081 98.5323 72.2086 98.5323 78.7093H98.5305C98.5305 85.0852 102.153 89.7514 108.814 89.7514C114.31 89.7514 117.307 86.7914 118.431 82.7503H114.351C113.976 84.1252 112.561 86.5011 108.897 86.5011C104.817 86.5011 102.694 83.3345 102.694 79.8758H118.64V78.2925C118.64 71.8756 115.186 67.7081 108.816 67.7081ZM102.696 76.6682C102.863 73.2932 105.36 70.9602 108.691 70.9602C112.271 70.9602 114.478 73.4179 114.478 76.6682H102.696ZM90.5089 72.2924H90.4271V68.376H86.4305V89.169H90.4271V78.4599C90.4271 74.3762 93.0499 71.6673 96.671 71.6673C97.1693 71.6673 97.5447 71.6673 97.9611 71.8757V68.0002C97.3792 67.9165 96.8792 67.9165 96.0464 67.9165C93.299 67.9165 91.5908 69.7082 90.5089 72.2924ZM178.775 68.3759H182.772V89.1672H178.775V68.3759ZM197.717 67.7081C194.428 67.7081 192.471 69.3341 191.222 70.8337H191.181V68.3759H187.225V96.4176H191.181V86.5848H191.222C192.471 88.2518 194.428 89.7514 197.717 89.7514C202.963 89.7514 207 85.5839 207 78.7502C207 71.9165 202.963 67.7081 197.717 67.7081ZM197.05 86.4601C193.469 86.4601 191.222 83.4592 191.222 78.752C191.222 74.0448 193.469 71.0439 197.05 71.0439C200.92 71.0439 202.877 74.6682 202.877 78.752C202.877 82.8358 200.922 86.4601 197.05 86.4601ZM32 89.1672H36.1638L38.9824 82.1056L35.5499 80.5971L32 89.1672ZM168.492 72.2924H168.575C169.741 69.7082 171.365 67.9165 174.195 67.9165C174.987 67.9165 175.444 67.9165 176.026 68.0002V71.8757C175.609 71.6673 175.277 71.6673 174.777 71.6673C171.113 71.6673 168.49 74.3762 168.49 78.4581H168.492V89.1672H164.536V68.376H168.492V72.2924ZM157.127 83.4164V71.6245H161.123V68.3742H157.127V61.7079H153.171V68.3742H150.132V71.6245H153.171V83.3327C153.171 88.0416 155.296 89.4166 158.709 89.4166C159.541 89.4166 160.207 89.3756 161.248 89.1672V85.9169C161.096 85.9422 160.962 85.9659 160.841 85.9874C160.363 86.072 160.063 86.1253 159.499 86.1253C157.79 86.1253 157.125 85.6248 157.125 83.4164H157.127ZM178.483 60.3331H183.021V64.6662H178.483V60.3331ZM138.697 84.4583V74.8748C138.697 69.4997 135.283 67.7081 130.953 67.7081C124.625 67.7081 122.003 70.8337 121.795 74.8338H125.832C126.04 72.0412 127.208 70.9584 130.829 70.9584C133.825 70.9584 134.742 72.2086 134.742 73.6673C134.742 75.7083 132.825 76.125 129.537 76.7092C124.291 77.7511 120.752 79.0833 120.752 83.7922H120.754C120.754 87.3328 123.501 89.7496 127.581 89.7496C131.037 89.7496 133.451 88.3747 134.701 86.2072H134.784C135.076 88.624 136.158 89.4166 138.115 89.4166C138.663 89.4166 139.239 89.3033 139.796 89.1938C139.917 89.1701 140.036 89.1466 140.155 89.1245V86.624C139.905 86.7077 139.781 86.7077 139.697 86.7077C138.905 86.7077 138.697 85.9169 138.697 84.4583ZM134.74 81.0424C134.74 84.6684 132.16 86.5011 128.496 86.5011C126.04 86.5029 124.999 85.502 124.999 83.5019C124.999 81.3772 126.581 80.2926 130.161 79.6265C130.468 79.5483 130.769 79.4735 131.06 79.401C132.789 78.9712 134.207 78.619 134.742 78.0841V81.0424H134.74ZM143.388 60H147.384V89.1672H143.388V60Z"
                fill="#191919"
              />
            </svg>

            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="flex flex-row items-end justify-start">
                <div className="flex flex-row items-start justify-center gap-[10px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="text-[16px] leading-[140%] font-medium text-[#1a1a1a] text-center whitespace-nowrap">
                      (주)마이리얼트립
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[232px] text-[20px] font-semibold text-[#1a1a1a]">
                  프로덕트 디자이너 채용
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[13px] flex flex-row items-center justify-center pt-0 pr-[8px] pb-0 pl-0 bg-[#fff]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    서울시 마포구
                  </div>
                </div>
                <div className="h-[13px] flex flex-row items-center justify-center py-0 px-[8px] bg-[#fff]  border-#e6e6e6 border-x border-[0_0_0_1px]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    경력・신입
                  </div>
                </div>
                <div className="h-[13px] flex flex-row items-center justify-center py-0 px-[8px] bg-[#fff]  border-#e6e6e6 border-r border-[0_0_0_1px]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    정규직
                  </div>
                </div>
              </div>
              <div className="text-[14px] leading-[140%] font-medium text-[#4c8bff] whitespace-nowrap">
                ~01.12 (금)・채용시 마감
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-center py-[8px] px-[10px] border-[1px] border-solid border-[#e6e6e6] rounded-[4px] overflow-hidden">
                  <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                    🎁 취업 축하금
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[8px] px-[10px] border-[1px] border-solid border-[#e6e6e6] rounded-[4px] overflow-hidden">
                  <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                    👥 유연 근무제
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px] bg-[#fff]">
            <div className="relative w-[238px] h-[156px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[238px] h-[156px] border-[1px] border-solid border-[#e6e6e6] rounded-[6px]"></div>
              <img src="/community/everytime.png" alt="everytime"></img>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="flex flex-row items-end justify-start">
                <div className="flex flex-row items-start justify-center gap-[10px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="text-[16px] leading-[140%] font-medium text-[#1a1a1a] text-center whitespace-nowrap">
                      (주)에브리타임
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[232px] text-[20px] font-semibold text-[#1a1a1a]">
                  UXUI 디자이너 채용
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[13px] flex flex-row items-center justify-center pt-0 pr-[8px] pb-0 pl-0 bg-[#fff]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    서울시 용산구
                  </div>
                </div>
                <div className="h-[13px] flex flex-row items-center justify-center py-0 px-[8px] bg-[#fff] border-#e6e6e6 border-x border-[0_0_0_1px]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    경력・신입
                  </div>
                </div>
                <div className="h-[13px] flex flex-row items-center justify-center py-0 px-[8px] bg-[#fff] border-#e6e6e6 border-r border-[0_0_0_1px]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    정규직
                  </div>
                </div>
              </div>
              <div className="text-[14px] leading-[140%] font-medium text-[#4c8bff] whitespace-nowrap">
                ~01.05 (금)・채용시 마감
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px] bg-[#fff]">
            <div className="relative w-[238px] h-[156px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[238px] h-[156px] bg-[#fff] border-[1px] border-solid border-[#e6e6e6] rounded-[6px]"></div>
              <img
                className="absolute w-[238px] h-[156px]"
                src="/community/daangn.png"
                alt="daangn"
              ></img>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="flex flex-row items-end justify-start">
                <div className="flex flex-row items-start justify-center gap-[10px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="text-[16px] leading-[140%] font-medium text-[#1a1a1a] text-center whitespace-nowrap">
                      (주)당근
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[232px] text-[20px] font-semibold text-[#1a1a1a]">
                  당근마켓 23년 전직군 정규직 채용
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[13px] flex flex-row items-center justify-center pt-0 pr-[8px] pb-0 pl-0 bg-[#fff]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    서울시 서초구
                  </div>
                </div>
                <div className="h-[13px] flex flex-row items-center justify-center py-0 px-[8px] bg-[#fff] border-#e6e6e6 border-x border-[0_0_0_1px]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    경력 (5년 이상)
                  </div>
                </div>
                <div className="h-[13px] flex flex-row items-center justify-center py-0 px-[8px] bg-[#fff] border-#e6e6e6 border-r border-[0_0_0_1px]">
                  <div className="text-[14px] leading-[140%] font-medium text-[#333] text-center whitespace-nowrap">
                    정규직
                  </div>
                </div>
              </div>
              <div className="text-[14px] leading-[140%] font-medium text-[#4c8bff] whitespace-nowrap">
                ~01.05 (금)・채용시 마감
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-center py-[8px] px-[10px] border-[1px] border-solid border-[#e6e6e6] rounded-[4px] overflow-hidden">
                  <div className="text-[10px] leading-[140%] font-semibold text-[#b3b3b3] whitespace-nowrap">
                    🎁 취업 축하금
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[40px] mx-auto text-[#808080] border border-[#ccc] justify-center items-center rounded-[20px] w-[215px] px-[25px] py-[10px] flex cursor-pointer">
          <span className="mr-[10px]">직군별 채용정보 더보기</span>
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
      </Card>
    </section>
  );
};

export default RecruitInfo;
