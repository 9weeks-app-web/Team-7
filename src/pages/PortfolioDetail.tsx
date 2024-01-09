import { useParams } from "react-router-dom";
import { MOCK_PORTFOLIO_DETAIL } from "../mocks/mockPortfolioDetail";

const PortfolioDetail = () => {
  const { id } = useParams();

  const detailDatas = MOCK_PORTFOLIO_DETAIL.filter((item) => item.id === id);

  if (detailDatas.length === 0) return <div>유효하지 않은 URL입니다.</div>;

  const detailData = detailDatas[0];

  return (
    <div className="bg-[rgba(0,0,0,0.7)]">
      <div className="max-w-[1200px] m-auto">
        <div className="w-[894px] py-[100px] m-auto relative">
          <div className="absolute top-0 right-0 flex gap-[15px]">
            {detailData.badge_premium && (
              <img src="/portfolio/badge_premium.svg" alt="badge_premium" />
            )}
            {detailData.badge_type !== "" && (
              <img src="/portfolio/badge_type.svg" alt="badge_type" />
            )}
            {detailData.badge_pick && (
              <img src="/portfolio/badge_pick.svg" alt="badge_pick" />
            )}
          </div>
          <div className="w-[894px] bg-white m-auto rounded-xl">
            <div className="p-s-4 grid gap-[60px]">
              <div className="flex justify-between">
                <div className="flex gap-[12px]">
                  <div className="w-[40px] h-[40px]">
                    <img
                      className="w-full h-full rounded-full"
                      src={`/portfolio/${detailData.users[0].profile}.png`}
                      alt="profile"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-neutral-90">
                      {detailData.title}
                    </p>
                    <div className="flex gap-[10px]">
                      <span className="text-sm text-neutral-70">
                        {detailData.users[0].userName}
                      </span>
                      <span className="text-sm text-primary-90">팔로우</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-s-2">
                  <p>UX UI 레퍼런스</p>
                  <button className="font-sm text-white bg-primary-90 px-[13px] py-s-1 rounded-full">
                    저장
                  </button>
                </div>
              </div>
              <div>
                <p className="text-neutral-50 text-center">
                  {detailData.description}
                </p>
              </div>
            </div>
            <div>
              <img
                src={`/portfolio/${detailData.contents}.png`}
                alt="contents"
              />
            </div>
            <div>
              <p>작업 정보</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
