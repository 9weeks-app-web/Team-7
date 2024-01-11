import { useParams } from "react-router-dom";
import { MOCK_PORTFOLIO_DETAIL } from "../mocks/mockPortfolioDetail";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../components/portfolioDetail/PrevArrow";
import NextArrow from "../components/portfolioDetail/NextArrow";
import SliderItem from "../components/portfolioDetail/SliderItem";
import Tooltip from "../components/portfolio/Tooltip";
import Avatar from "../components/design/Avatar";
import SocialProfile from "../components/portfolio/SocialProfile";
import { MOCK_USER_PROFILE } from "../mocks/mockUser";
import { useEffect } from "react";

const settings = {
  className: "slider variable-width",
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const PortfolioDetail = () => {
  const { id } = useParams();

  const detailDatas = MOCK_PORTFOLIO_DETAIL.filter((item) => item.id === id);

  if (detailDatas.length === 0) return <div>유효하지 않은 URL입니다.</div>;

  const detailData = detailDatas[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div>
            <div className="w-[894px] bg-white m-auto rounded-t-xl">
              <div className="p-s-4 grid gap-[60px]">
                <div className="flex justify-between">
                  <div className="flex gap-[12px]">
                    <Tooltip
                      hoverSource={
                        <Avatar
                          width="w-[40px]"
                          height="w-[40px]"
                          src={`/portfolio/${detailData.users[0].profile}.png`}
                        />
                      }
                      TooltipContent={
                        <SocialProfile profile={MOCK_USER_PROFILE} />
                      }
                    />
                    <div>
                      <p className="font-bold text-sm text-neutral-90">
                        {detailData.title}
                      </p>
                      <div className="flex gap-[10px]">
                        <span className="text-sm text-neutral-70">
                          {detailData.users[0].userName}
                        </span>
                        <span className="text-sm text-primary-90 cursor-pointer">
                          팔로우
                        </span>
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
              <div className="py-s-2 px-[35px]">
                <div className="flex justify-end mb-[40px]">
                  <div className="flex gap-[5px]">
                    <img
                      src="/portfolio/copyrightNeutral.svg"
                      alt="copyrightNeutral"
                    />
                    <img
                      src="/portfolio/attributionNeutral.svg"
                      alt="attributionNeutral"
                    />
                  </div>
                </div>
                <div className="px-[15px] grid gap-[60px]">
                  <div className="grid gap-s-2">
                    <p className="text-neutral-90 text-xl font-bold">
                      작업 정보
                    </p>
                    <div className="grid border border-primary-[rgb(246,248,255)] grid-cols-[232px_562px] rounded-md">
                      <div className="p-[16px] font-bold text-sm text-primary-70 border-b border-primary-10 bg-[rgb(246,248,255)] rounded-tr-md">
                        작업 유형
                      </div>
                      <div className="p-[16px] text-sm text-neutral-40 border-b border-primary-10">
                        개인 프로젝트
                      </div>
                      <div className="p-[16px] font-bold text-sm text-primary-70 border-b border-primary-10 bg-[rgb(246,248,255)]">
                        카테고리
                      </div>
                      <div className="p-[16px] text-sm text-neutral-40 border-b border-primary-10">
                        UX UI 디자인
                      </div>
                      <div className="p-[16px] font-bold text-sm text-primary-70 bg-[rgb(246,248,255)] rounded-br-md">
                        기간
                      </div>
                      <div className="p-[16px] text-sm text-neutral-40">
                        2023.12.16~2024.01.12
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-s-2">
                    <p className="text-neutral-90 text-xl font-bold">사용 툴</p>
                    <div className="flex gap-s-2">
                      {detailData.useTools.map((item) => (
                        <img key={item} src={`/${item}.svg`} alt={item} />
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-s-2">
                    <p className="text-neutral-90 text-xl font-bold">
                      작업 참여 멤버
                    </p>
                    <div className="flex gap-[60px]">
                      {detailData.users.map((item) => (
                        <div className="flex gap-[16px]" key={item.userName}>
                          <div className="w-[40px] h-[40px]">
                            <img
                              className="w-full h-full rounded-full"
                              src={`/portfolio/${item.profile}.png`}
                              alt="profile"
                            />
                          </div>
                          <div>
                            <p className="text-neutral-90 font-semibold">
                              {item.userName}
                            </p>
                            <div className="flex gap-[10px] text-sm">
                              <span className="text-neutral-70">
                                {item.position}
                              </span>
                              <span className="text-primary-90 cursor-pointer">
                                팔로우
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-s-2">
                    <p className="text-neutral-90 text-xl font-bold">키워드</p>
                    <div className="flex gap-s-2">
                      {detailData.keyword.map((item) => (
                        <div
                          key={item}
                          className="bg-white text-neutral-50 text-sm px-[37px] py-[6px] border border-neutral-20 rounded-md"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid gap-[4px] justify-center">
                      <div className="h-s-4">
                        <div className="flex justify-center">
                          <div className="relative min-w-[100%]">
                            <div className="w-s-4 h-s-4 border-2 rounded-full border-white absolute left-1/2 -translate-x-[calc(50%+31px)] z-[3]">
                              <img
                                className="rounded-full"
                                src={`/portfolio/${detailData.users[0].profile}.png`}
                                alt="profile"
                              />
                            </div>
                            <div className="w-s-4 h-s-4 border-2 rounded-full border-white absolute left-1/2 -translate-x-1/2 z-[2]">
                              <img
                                className="rounded-full"
                                src={`/portfolio/${detailData.users[1].profile}.png`}
                                alt="profile"
                              />
                            </div>
                            <div className="w-s-4 h-s-4 border-2 rounded-full border-white absolute left-1/2 -translate-x-[calc(50%-31px)]">
                              <img
                                className="rounded-full"
                                src={`/portfolio/${detailData.users[2].profile}.png`}
                                alt="profile"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl text-neutral-90">
                          {detailData.title}
                        </p>
                        <div className="flex gap-[14px] justify-center text-neutral-50 text-sm">
                          <span>{detailData.date}</span>
                          <div className="flex gap-[4px] items-center">
                            <img src="/view.svg" alt="view" />
                            <span>{detailData.view}</span>
                          </div>
                          <div className="flex gap-[4px] items-center">
                            <img src="/heart.svg" alt="heart" />
                            <span>{detailData.like}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[60px]">
                    <div className="grid gap-[40px] text-neutral-20">
                      <div className="grid gap-[16px] grid-cols-[50px_auto] mb-[10px]">
                        <div className="w-[50px] h-[50px]">
                          <img
                            className="rounded-full"
                            src="/portfolio/profile_4.png"
                            alt="profile"
                          />
                        </div>
                        <div className="relative">
                          <input
                            className="w-full h-[50px] border border-neutral-20 placeholder:text-neutral-10 rounded-md p-[14px]"
                            placeholder="피드백을 입력해 보세요."
                          />
                          <img
                            className="absolute top-1/2 -translate-y-1/2 right-[14px] cursor-pointer"
                            src="/submitIcon.svg"
                            alt="submit"
                          />
                        </div>
                      </div>
                      {detailData.coments.map((item) => (
                        <div
                          className="grid gap-[16px] grid-cols-[50px_auto_70px]"
                          key={item.userName}
                        >
                          <div className="w-[50px] h-[50px]">
                            <img
                              className="rounded-full"
                              src={`/portfolio/${item.profile}.png`}
                              alt="profile"
                            />
                          </div>
                          <div>
                            <div className="flex gap-[10px]">
                              <span className="font-semibold text-neutral-90">
                                {item.userName}
                              </span>
                              <span>{item.date}</span>
                            </div>
                            <p className="text-neutral-90">{item.coment}</p>
                          </div>
                          <div>
                            <p className="cursor-pointer">답글 달기</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-90 p-s-4 rounded-b-xl">
              <p className="text-white text-2xl font-bold mb-s-3">
                연관 콘텐츠
              </p>
              <div className="h-[256px]">
                <Slider {...settings}>
                  {detailData.relatedPortfolio.map((item) => (
                    <SliderItem
                      key={item.title}
                      title={item.title}
                      thumbnail={item.thumbnail}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
