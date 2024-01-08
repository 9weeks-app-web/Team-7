import PageLayout from "../components/layout/PageLayout";
import Banner from "../components/banner/Banner";
import PortfolioList from "../components/portfolio/PortfolioList";
import SuccessfulPortfolio from "../components/successfulPortfolio/SuccessfulPortfolio";
import ProfessionalList from "../components/professional/ProfessionalList";
import RecomendCreator from "../components/recommendCreator/RecommendCreator";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import FilterPopup from "../components/filterPopup/FilterPopup";

const Home = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");

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
                <button className="text-primary-80 text-xl bg-[rgb(207,222,252)] py-s-2 px-s-3 rounded-full">
                  포트폴리오 더 보기
                </button>
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
      </div>
      <div className="mt-[77px] mb-[72px]">
        <RegisterInfo />
      </div>
    </PageLayout>
  );
};

interface filterButtonProps {
  children: string;
  handleOpen: () => void;
}

const FilterButton = ({
  children,
  handleOpen,
}: filterButtonProps): JSX.Element => {
  return (
    <div
      className="text-xs gap-[4px] text-white bg-primary-50 p-[11px] rounded-full flex cursor-pointer"
      onClick={handleOpen}
    >
      <img src="./filterWhite.svg" alt="filter" />
      <span>{children}</span>
    </div>
  );
};

interface filterTagProps {
  children: string;
}

const FilterTag = ({ children }: filterTagProps): JSX.Element => {
  return (
    <div className="text-xs gap-[4px] text-primary-70 p-[10px] border border-primary-70 rounded-full flex cursor-pointer">
      <img src="./checkPrimary.svg" alt="check" />
      <span>{children}</span>
    </div>
  );
};

const RegisterInfo = (): JSX.Element => {
  return (
    <div className="grid gap-s-3">
      <div className="text-center text-neutral-70 text-2xl">
        <p>회원가입 또는 로그인으로 SPECFOLIO</p>
        <p>멋진 활동들을 펼쳐보세요.</p>
      </div>
      <div className="flex justify-center items-center gap-s-2">
        <RegisterInfoButton to="/login" isLogin={true}>
          로그인
        </RegisterInfoButton>
        <span className="text-neutral-40 text-xl">또는</span>
        <RegisterInfoButton to="signup">회원가입</RegisterInfoButton>
      </div>
    </div>
  );
};

interface registerInfoButtonProps {
  children: string;
  isLogin?: boolean;
  to: string;
}

const RegisterInfoButton = ({
  children,
  isLogin,
  to,
}: registerInfoButtonProps) => {
  const loginStyle = "text-neutral-90 border border-neutral-10";
  const signupStyle = "bg-neutral-90 text-white";

  return (
    <Link
      to={to}
      className={`px-s-3 py-[10px] text-2xl rounded-full ${
        isLogin ? loginStyle : signupStyle
      }`}
    >
      {children}
    </Link>
  );
};

export default Home;
