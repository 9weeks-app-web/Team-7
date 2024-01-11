import Card from "../../design/Card";

const PostList = () => {
  return (
    <Card
      width="w-auto"
      height="h-auto"
      spacing="pr-[18px]"
      border="border rounded-md"
      color="boder-[E6E6E6]"
    >
      <div className="border-b border-[#F3F3F3] w-[798px] flex flex-row items-center justify-start gap-[100px] p-[30px]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="text-[14px] leading-[140%] font-semibold text-[#999] whitespace-nowrap">
                창작
              </div>
              <div className="text-[20px] leading-[140%] font-semibold text-[#1a1a1a] whitespace-nowrap">
                포트폴리오 만들 때 프레임 크기는 어떻게 하면 좋을까요??
              </div>
              <div className="w-[514px] text-[14px] leading-[140%] font-medium text-[#808080]">
                일러스트레이션 포트폴리오를 만들고 있는데 일러스트의 크기들이 다
                달라서 어떻게 만들지 고
                <br />
                민이네요. 다른 분들은 포폴 어떻게 만드시는지 궁금합니다! 저는
                지금 세로...
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 디자인
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 포폴
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 취업
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-start">
                  <div className="text-[14px] leading-[140%] font-medium text-[#4d4d4d] text-center whitespace-nowrap">
                    이어드롭
                  </div>
                  <div className="text-[14px] leading-[140%] font-medium text-[#999] text-center whitespace-nowrap">
                    ・약 한 시간 전
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.22618 7.6113C1.10944 7.42646 1.05108 7.33404 1.01841 7.1915C0.993865 7.08443 0.993865 6.91557 1.01841 6.8085C1.05108 6.66596 1.10944 6.57354 1.22618 6.3887C2.19081 4.86129 5.06213 1 9.43784 1C13.8136 1 16.6849 4.86129 17.6495 6.3887C17.7662 6.57354 17.8246 6.66596 17.8573 6.8085C17.8818 6.91557 17.8818 7.08443 17.8573 7.1915C17.8246 7.33404 17.7662 7.42646 17.6495 7.6113C16.6849 9.13871 13.8136 13 9.43784 13C5.06213 13 2.19081 9.13871 1.22618 7.6113Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.43784 9.57143C10.858 9.57143 12.0093 8.42016 12.0093 7C12.0093 5.57984 10.858 4.42857 9.43784 4.42857C8.01768 4.42857 6.86642 5.57984 6.86642 7C6.86642 8.42016 8.01768 9.57143 9.43784 9.57143Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.59977 2.43711C6.25448 0.86435 4.01111 0.441282 2.32555 1.88146C0.63999 3.32164 0.402687 5.72955 1.72637 7.43286C2.82692 8.84904 6.15757 11.8359 7.24918 12.8026C7.3713 12.9108 7.43237 12.9648 7.50359 12.9861C7.56576 13.0046 7.63378 13.0046 7.69595 12.9861C7.76718 12.9648 7.82824 12.9108 7.95037 12.8026C9.04198 11.8359 12.3726 8.84904 13.4732 7.43286C14.7969 5.72955 14.5885 3.30649 12.874 1.88146C11.1595 0.456431 8.94507 0.86435 7.59977 2.43711Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  31
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.07544 12.9403L4.21841 12.0259L4.22681 12.0194C4.4651 11.8288 4.58534 11.7326 4.71949 11.6641C4.83985 11.6026 4.96819 11.5578 5.10059 11.5306C5.24981 11.5 5.40526 11.5 5.71729 11.5H12.228C13.0665 11.5 13.4862 11.5 13.8067 11.3367C14.089 11.1929 14.3186 10.9632 14.4624 10.6809C14.6257 10.3604 14.6257 9.94112 14.6257 9.10268V3.39768C14.6257 2.55925 14.6257 2.1394 14.4624 1.81885C14.3186 1.5366 14.0885 1.3073 13.8063 1.16349C13.4854 1 13.066 1 12.2259 1H3.52588C2.6858 1 2.26545 1 1.94458 1.16349C1.66234 1.3073 1.43303 1.5366 1.28922 1.81885C1.12573 2.13972 1.12573 2.56007 1.12573 3.40015V12.0034C1.12573 12.8027 1.12573 13.2022 1.28958 13.4075C1.43207 13.586 1.64806 13.6898 1.87646 13.6896C2.1391 13.6893 2.45131 13.4396 3.07544 12.9403Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#F3F3F3] w-[798px] flex flex-row items-center justify-start gap-[100px] p-[30px]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="text-[14px] leading-[140%] font-semibold text-[#999] whitespace-nowrap">
                창작
              </div>
              <div className="text-[20px] leading-[140%] font-semibold text-[#1a1a1a] whitespace-nowrap">
                디자인 레퍼런스 참고 사이트 모음
              </div>
              <div className="w-[514px] text-[14px] leading-[140%] font-medium text-[#808080]">
                안녕하세요, 레퍼런스 찾으려고 핀터레스트 많이 보시죠?
                <br />
                핀터레스트 말고도 좋은 사이트들이 꽤 있습니다!!...
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 디자인
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 레퍼런스
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 참고사이트
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-start">
                  <div className="text-[14px] leading-[140%] font-medium text-[#4d4d4d] text-center whitespace-nowrap">
                    MINSU KIM
                  </div>
                  <div className="text-[14px] leading-[140%] font-medium text-[#999] text-center whitespace-nowrap">
                    ・약 한 시간 전
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.22618 7.6113C1.10944 7.42646 1.05108 7.33404 1.01841 7.1915C0.993865 7.08443 0.993865 6.91557 1.01841 6.8085C1.05108 6.66596 1.10944 6.57354 1.22618 6.3887C2.19081 4.86129 5.06213 1 9.43784 1C13.8136 1 16.6849 4.86129 17.6495 6.3887C17.7662 6.57354 17.8246 6.66596 17.8573 6.8085C17.8818 6.91557 17.8818 7.08443 17.8573 7.1915C17.8246 7.33404 17.7662 7.42646 17.6495 7.6113C16.6849 9.13871 13.8136 13 9.43784 13C5.06213 13 2.19081 9.13871 1.22618 7.6113Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.43784 9.57143C10.858 9.57143 12.0093 8.42016 12.0093 7C12.0093 5.57984 10.858 4.42857 9.43784 4.42857C8.01768 4.42857 6.86642 5.57984 6.86642 7C6.86642 8.42016 8.01768 9.57143 9.43784 9.57143Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.59977 2.43711C6.25448 0.86435 4.01111 0.441282 2.32555 1.88146C0.63999 3.32164 0.402687 5.72955 1.72637 7.43286C2.82692 8.84904 6.15757 11.8359 7.24918 12.8026C7.3713 12.9108 7.43237 12.9648 7.50359 12.9861C7.56576 13.0046 7.63378 13.0046 7.69595 12.9861C7.76718 12.9648 7.82824 12.9108 7.95037 12.8026C9.04198 11.8359 12.3726 8.84904 13.4732 7.43286C14.7969 5.72955 14.5885 3.30649 12.874 1.88146C11.1595 0.456431 8.94507 0.86435 7.59977 2.43711Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  31
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.07544 12.9403L4.21841 12.0259L4.22681 12.0194C4.4651 11.8288 4.58534 11.7326 4.71949 11.6641C4.83985 11.6026 4.96819 11.5578 5.10059 11.5306C5.24981 11.5 5.40526 11.5 5.71729 11.5H12.228C13.0665 11.5 13.4862 11.5 13.8067 11.3367C14.089 11.1929 14.3186 10.9632 14.4624 10.6809C14.6257 10.3604 14.6257 9.94112 14.6257 9.10268V3.39768C14.6257 2.55925 14.6257 2.1394 14.4624 1.81885C14.3186 1.5366 14.0885 1.3073 13.8063 1.16349C13.4854 1 13.066 1 12.2259 1H3.52588C2.6858 1 2.26545 1 1.94458 1.16349C1.66234 1.3073 1.43303 1.5366 1.28922 1.81885C1.12573 2.13972 1.12573 2.56007 1.12573 3.40015V12.0034C1.12573 12.8027 1.12573 13.2022 1.28958 13.4075C1.43207 13.586 1.64806 13.6898 1.87646 13.6896C2.1391 13.6893 2.45131 13.4396 3.07544 12.9403Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="rounded-md"
          alt="..."
          width="124"
          height="118"
          src="/recommendThumbnail03.png"
        />
      </div>

      <div className="w-[798px] flex flex-row items-center justify-start gap-[100px] p-[30px] border-b border-[#F3F3F3]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="text-[14px] leading-[140%] font-semibold text-[#999] whitespace-nowrap">
                기획
              </div>
              <div className="text-[20px] leading-[140%] font-semibold text-[#1a1a1a] whitespace-nowrap">
                와이어프레임은 어디까지 그릴 수 있어야하는가?
              </div>
              <div className="w-[514px] text-[14px] leading-[140%] font-medium text-[#808080]">
                와이어프레임은 디자이너와 개발자와 소통을 할 때 용이하게 쓸 수
                있는 방법이기 때문에, 와이
                <br />
                어프레임을 만드는 기획자들이 많습니다. 제가 기획 포폴 컨설팅을
                할 때, 수도...
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 기획
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 와이어프레임
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-start">
                  <div className="text-[14px] leading-[140%] font-medium text-[#4d4d4d] text-center whitespace-nowrap">
                    Nayeon Yoon
                  </div>
                  <div className="text-[14px] leading-[140%] font-medium text-[#999] text-center whitespace-nowrap">
                    ・약 한 시간 전
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.22618 7.6113C1.10944 7.42646 1.05108 7.33404 1.01841 7.1915C0.993865 7.08443 0.993865 6.91557 1.01841 6.8085C1.05108 6.66596 1.10944 6.57354 1.22618 6.3887C2.19081 4.86129 5.06213 1 9.43784 1C13.8136 1 16.6849 4.86129 17.6495 6.3887C17.7662 6.57354 17.8246 6.66596 17.8573 6.8085C17.8818 6.91557 17.8818 7.08443 17.8573 7.1915C17.8246 7.33404 17.7662 7.42646 17.6495 7.6113C16.6849 9.13871 13.8136 13 9.43784 13C5.06213 13 2.19081 9.13871 1.22618 7.6113Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.43784 9.57143C10.858 9.57143 12.0093 8.42016 12.0093 7C12.0093 5.57984 10.858 4.42857 9.43784 4.42857C8.01768 4.42857 6.86642 5.57984 6.86642 7C6.86642 8.42016 8.01768 9.57143 9.43784 9.57143Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.59977 2.43711C6.25448 0.86435 4.01111 0.441282 2.32555 1.88146C0.63999 3.32164 0.402687 5.72955 1.72637 7.43286C2.82692 8.84904 6.15757 11.8359 7.24918 12.8026C7.3713 12.9108 7.43237 12.9648 7.50359 12.9861C7.56576 13.0046 7.63378 13.0046 7.69595 12.9861C7.76718 12.9648 7.82824 12.9108 7.95037 12.8026C9.04198 11.8359 12.3726 8.84904 13.4732 7.43286C14.7969 5.72955 14.5885 3.30649 12.874 1.88146C11.1595 0.456431 8.94507 0.86435 7.59977 2.43711Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  15
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.07544 12.9403L4.21841 12.0259L4.22681 12.0194C4.4651 11.8288 4.58534 11.7326 4.71949 11.6641C4.83985 11.6026 4.96819 11.5578 5.10059 11.5306C5.24981 11.5 5.40526 11.5 5.71729 11.5H12.228C13.0665 11.5 13.4862 11.5 13.8067 11.3367C14.089 11.1929 14.3186 10.9632 14.4624 10.6809C14.6257 10.3604 14.6257 9.94112 14.6257 9.10268V3.39768C14.6257 2.55925 14.6257 2.1394 14.4624 1.81885C14.3186 1.5366 14.0885 1.3073 13.8063 1.16349C13.4854 1 13.066 1 12.2259 1H3.52588C2.6858 1 2.26545 1 1.94458 1.16349C1.66234 1.3073 1.43303 1.5366 1.28922 1.81885C1.12573 2.13972 1.12573 2.56007 1.12573 3.40015V12.0034C1.12573 12.8027 1.12573 13.2022 1.28958 13.4075C1.43207 13.586 1.64806 13.6898 1.87646 13.6896C2.1391 13.6893 2.45131 13.4396 3.07544 12.9403Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  8
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="rounded-md"
          alt="..."
          width="124"
          height="118"
          src="/recommendThumbnail01.png"
        />
      </div>

      <div className="w-[798px] flex flex-row items-center justify-start gap-[100px] p-[30px] border-b border-[#F3F3F3]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="text-[14px] leading-[140%] font-semibold text-[#999] whitespace-nowrap">
                자유
              </div>
              <div className="text-[20px] leading-[140%] font-semibold text-[#1a1a1a] whitespace-nowrap">
                4학년 2학기 취준생, 바로 졸업 vs 졸업 유예
              </div>
              <div className="w-[514px] text-[14px] leading-[140%] font-medium text-[#808080]">
                안녕하세요! 올해 2월에 졸업하는 디자인과 학생입니다. 아직 취업을
                하지 못해서 유예를 할지 <br />
                말지 고민입니다. 제 주변 동기들은 다 유예를 해서 저도 유예를
                하는게 맞는...
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 시디과
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 고민
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 취준
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-start">
                  <div className="text-[14px] leading-[140%] font-medium text-[#4d4d4d] text-center whitespace-nowrap">
                    익명
                  </div>
                  <div className="text-[14px] leading-[140%] font-medium text-[#999] text-center whitespace-nowrap">
                    ・약 한 시간 전
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.22618 7.6113C1.10944 7.42646 1.05108 7.33404 1.01841 7.1915C0.993865 7.08443 0.993865 6.91557 1.01841 6.8085C1.05108 6.66596 1.10944 6.57354 1.22618 6.3887C2.19081 4.86129 5.06213 1 9.43784 1C13.8136 1 16.6849 4.86129 17.6495 6.3887C17.7662 6.57354 17.8246 6.66596 17.8573 6.8085C17.8818 6.91557 17.8818 7.08443 17.8573 7.1915C17.8246 7.33404 17.7662 7.42646 17.6495 7.6113C16.6849 9.13871 13.8136 13 9.43784 13C5.06213 13 2.19081 9.13871 1.22618 7.6113Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.43784 9.57143C10.858 9.57143 12.0093 8.42016 12.0093 7C12.0093 5.57984 10.858 4.42857 9.43784 4.42857C8.01768 4.42857 6.86642 5.57984 6.86642 7C6.86642 8.42016 8.01768 9.57143 9.43784 9.57143Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.59977 2.43711C6.25448 0.86435 4.01111 0.441282 2.32555 1.88146C0.63999 3.32164 0.402687 5.72955 1.72637 7.43286C2.82692 8.84904 6.15757 11.8359 7.24918 12.8026C7.3713 12.9108 7.43237 12.9648 7.50359 12.9861C7.56576 13.0046 7.63378 13.0046 7.69595 12.9861C7.76718 12.9648 7.82824 12.9108 7.95037 12.8026C9.04198 11.8359 12.3726 8.84904 13.4732 7.43286C14.7969 5.72955 14.5885 3.30649 12.874 1.88146C11.1595 0.456431 8.94507 0.86435 7.59977 2.43711Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.07544 12.9403L4.21841 12.0259L4.22681 12.0194C4.4651 11.8288 4.58534 11.7326 4.71949 11.6641C4.83985 11.6026 4.96819 11.5578 5.10059 11.5306C5.24981 11.5 5.40526 11.5 5.71729 11.5H12.228C13.0665 11.5 13.4862 11.5 13.8067 11.3367C14.089 11.1929 14.3186 10.9632 14.4624 10.6809C14.6257 10.3604 14.6257 9.94112 14.6257 9.10268V3.39768C14.6257 2.55925 14.6257 2.1394 14.4624 1.81885C14.3186 1.5366 14.0885 1.3073 13.8063 1.16349C13.4854 1 13.066 1 12.2259 1H3.52588C2.6858 1 2.26545 1 1.94458 1.16349C1.66234 1.3073 1.43303 1.5366 1.28922 1.81885C1.12573 2.13972 1.12573 2.56007 1.12573 3.40015V12.0034C1.12573 12.8027 1.12573 13.2022 1.28958 13.4075C1.43207 13.586 1.64806 13.6898 1.87646 13.6896C2.1391 13.6893 2.45131 13.4396 3.07544 12.9403Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[798px] flex flex-row items-center justify-start gap-[100px] p-[30px] border-b border-[#F3F3F3]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="text-[14px] leading-[140%] font-semibold text-[#999] whitespace-nowrap">
                자유
              </div>
              <div className="text-[20px] leading-[140%] font-semibold text-[#1a1a1a] whitespace-nowrap">
                다들 2024년 새해 목표가 있으신가요?
              </div>
              <div className="w-[514px] text-[14px] leading-[140%] font-medium text-[#808080]">
                저는 작품 활동도 열심히 하고, 건강 챙기는게 목표입니다!! 작년에
                한동안 크게 아팠었는데 정
                <br />말 아프니까 아무것도 못하겠더라고요ㅋㅋㅋ큐ㅠㅠㅠㅠ
                2024년엔 원하시...
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-[3px] px-[6px] bg-[#f5f8ff] rounded-[4px] overflow-hidden">
                <div className="text-[12px] leading-[140%] font-semibold text-[#7facff] whitespace-nowrap">
                  # 새해다짐
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-start">
                  <div className="text-[14px] leading-[140%] font-medium text-[#4d4d4d] text-center whitespace-nowrap">
                    오렌지색 블루
                  </div>
                  <div className="text-[14px] leading-[140%] font-medium text-[#999] text-center whitespace-nowrap">
                    ・약 한 시간 전
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.22618 7.6113C1.10944 7.42646 1.05108 7.33404 1.01841 7.1915C0.993865 7.08443 0.993865 6.91557 1.01841 6.8085C1.05108 6.66596 1.10944 6.57354 1.22618 6.3887C2.19081 4.86129 5.06213 1 9.43784 1C13.8136 1 16.6849 4.86129 17.6495 6.3887C17.7662 6.57354 17.8246 6.66596 17.8573 6.8085C17.8818 6.91557 17.8818 7.08443 17.8573 7.1915C17.8246 7.33404 17.7662 7.42646 17.6495 7.6113C16.6849 9.13871 13.8136 13 9.43784 13C5.06213 13 2.19081 9.13871 1.22618 7.6113Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.43784 9.57143C10.858 9.57143 12.0093 8.42016 12.0093 7C12.0093 5.57984 10.858 4.42857 9.43784 4.42857C8.01768 4.42857 6.86642 5.57984 6.86642 7C6.86642 8.42016 8.01768 9.57143 9.43784 9.57143Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.59977 2.43711C6.25448 0.86435 4.01111 0.441282 2.32555 1.88146C0.63999 3.32164 0.402687 5.72955 1.72637 7.43286C2.82692 8.84904 6.15757 11.8359 7.24918 12.8026C7.3713 12.9108 7.43237 12.9648 7.50359 12.9861C7.56576 13.0046 7.63378 13.0046 7.69595 12.9861C7.76718 12.9648 7.82824 12.9108 7.95037 12.8026C9.04198 11.8359 12.3726 8.84904 13.4732 7.43286C14.7969 5.72955 14.5885 3.30649 12.874 1.88146C11.1595 0.456431 8.94507 0.86435 7.59977 2.43711Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.07544 12.9403L4.21841 12.0259L4.22681 12.0194C4.4651 11.8288 4.58534 11.7326 4.71949 11.6641C4.83985 11.6026 4.96819 11.5578 5.10059 11.5306C5.24981 11.5 5.40526 11.5 5.71729 11.5H12.228C13.0665 11.5 13.4862 11.5 13.8067 11.3367C14.089 11.1929 14.3186 10.9632 14.4624 10.6809C14.6257 10.3604 14.6257 9.94112 14.6257 9.10268V3.39768C14.6257 2.55925 14.6257 2.1394 14.4624 1.81885C14.3186 1.5366 14.0885 1.3073 13.8063 1.16349C13.4854 1 13.066 1 12.2259 1H3.52588C2.6858 1 2.26545 1 1.94458 1.16349C1.66234 1.3073 1.43303 1.5366 1.28922 1.81885C1.12573 2.13972 1.12573 2.56007 1.12573 3.40015V12.0034C1.12573 12.8027 1.12573 13.2022 1.28958 13.4075C1.43207 13.586 1.64806 13.6898 1.87646 13.6896C2.1391 13.6893 2.45131 13.4396 3.07544 12.9403Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[14px] leading-[140%] font-medium text-[#808080] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="rounded-md"
          alt="..."
          width="124"
          height="118"
          src="/recommendThumbnail02.png"
        />
      </div>
    </Card>
  );
};

export default PostList;
