import Card from "../../design/Card";
import Avatar from "../../design/Avatar";

const AskHelp = () => {
  return (
    <section className="ask-help mt-[20px]">
      <Card
        width="w-[840px]"
        height="auto"
        spacing="p-[30px]"
        border="border rounded-md"
        color="border-[E6E6E6] bg-[#F3F3F3]"
      >
        <div className="flex items-center ml-auto">
          <h1 className="title">당신의 도움이 필요해요! 도움 요청</h1>
          <span className="ml-auto mr-[6px] cursor-pointer">더보기</span>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.5L7 7L1.5 12.5"
              stroke="#808080"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="flex pt-[20px] gap-[20px] items-center">
          <svg
            className="cursor-pointer"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width="31"
              height="31"
              rx="15.5"
              fill="white"
              fill-opacity="0.5"
            />
            <rect
              x="0.5"
              y="1"
              width="31"
              height="31"
              rx="15.5"
              stroke="#CCCCCC"
            />
            <path
              d="M19 23.5L13 16.5L19 9.5"
              stroke="#808080"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <Card spacing="w-[328px]" height="h-[185px]" border="rounded-md">
            <div className="h-[112px] text-white bg-[#0059ff] opacity-50 pl-[25px] pr-[30px] py-[20px] rounded-t-md">
              <p>👚(기프티콘 증정) 쇼핑 플랫폼</p>
              <p>설문조사 부탁드립니다 👚</p>
            </div>
            <div className="flex items-center pl-[25px] pr-[30px] py-[20px]">
              <Avatar
                width="w-[32px]"
                height="h-[32px]"
                src="/recommendProfile02.png"
                alt="avatar"
              />
              <div className="ml-[10px]">익명</div>
            </div>
          </Card>

          <Card spacing="w-[328px]" height="h-[185px]" border="rounded-md">
            <div className="h-[112px] text-white bg-[#0059ff] opacity-50 pl-[25px] pr-[30px] py-[20px] rounded-t-md">
              <p>
                [2분 소요, 스타벅스 기프티콘 증정] 비건 뷰티 / 화장품 사용에
              </p>
              <p>관한 설문조사 🛁</p>
            </div>
            <div className="flex items-center pl-[25px] pr-[30px]">
              <Avatar width="w-[32px] h-[32px]" />
              <div className="ml-[10px]">익명</div>
            </div>
          </Card>

          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width="31"
              height="31"
              rx="15.5"
              fill="white"
              fill-opacity="0.5"
            />
            <rect
              x="0.5"
              y="1"
              width="31"
              height="31"
              rx="15.5"
              stroke="#CCCCCC"
            />
            <path
              d="M12.5 23.5L19.5 16.5L12.5 9.5"
              stroke="#808080"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Card>
    </section>
  );
};

export default AskHelp;
