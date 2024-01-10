import PageLayout from "../components/layout/PageLayout";
import Banner from "../components/banner/Banner";
import PortfolioList from "../components/portfolio/PortfolioList";
import SuccessfulPortfolio from "../components/successfulPortfolio/SuccessfulPortfolio";
import ProfessionalList from "../components/professional/ProfessionalList";
import RecomendCreator from "../components/recommendCreator/RecommendCreator";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import FilterPopup from "../components/filterPopup/FilterPopup";
import FilterButton from "../components/home/FilterButton";
import FilterTag from "../components/home/FilterTag";
import RegisterInfo from "../components/home/RegisterInfo";
import CurrentProject from "../components/currentProject/CurrentProject";
import FloatingButton from "../components/design/FloatingButton";
import { useAppSelector } from "../hooks/redux";

const Home = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");
  const isLogined = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <PageLayout>
      <div className="pt-s-4 grid gap-s-4">
        <div className="h-[305px]">
          <Banner />
        </div>
        <div className="grid gap-s-3">
          <div className="grid gap-s-2">
            <h1 className="font-bold text-2xl">👑 인기 급상승 포트폴리오</h1>
            <div className="relative flex gap-[10px]">
              <FilterButton handleOpen={handleOpen}>필터</FilterButton>
              {sub
                ?.split(",")
                .map((item) => <FilterTag key={item}>{item}</FilterTag>)}
              {isOpen && (
                <div className="absolute left-0 top-[42px] z-[5555]">
                  <FilterPopup />
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <PortfolioList />
            <div className="absolute bg-gradient-to-t from-[white_25%] w-full h-[326px] bottom-0 flex justify-center">
              <div className="absolute bottom-0 text-center">
                <p className="text-primary-80 text-2xl mb-s-2">
                  SPECFOLIO에서 최고의 아이디어 탐색하기
                </p>
                <Link
                  to={"/portfolio"}
                  className="text-primary-80 text-xl bg-[rgb(207,222,252)] py-s-2 px-s-3 rounded-full"
                >
                  포트폴리오 더 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-s-2">
          <h1 className="font-bold text-2xl">
            ⭐️ 대기업 합격자들의 포트폴리오
          </h1>
          <SuccessfulPortfolio />
        </div>
        <div className="grid gap-s-2">
          <h1 className="font-bold text-2xl">
            💎 스팩폴리오 보증, 전문가 피드백
          </h1>
          <ProfessionalList />
        </div>
        <div className="grid gap-s-2">
          <RecomendCreator />
        </div>
        <div className="grid gap-s-2">
          <CurrentProject />
        </div>
      </div>
      <div className="mt-[77px] mb-[72px]">
        {!isLogined && <RegisterInfo />}
      </div>
      <FloatingButton />
    </PageLayout>
  );
};

export default Home;
