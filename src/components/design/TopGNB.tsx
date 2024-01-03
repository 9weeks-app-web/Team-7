import { Link, useLocation, useNavigate } from "react-router-dom";

const TopGNB = (): JSX.Element => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <nav className="fixed top-0 left-0 h-[96px] bg-white shadow-shadow-1 w-full z-10">
      <div className="grid gap-s-1">
        <div className="h-[40px] bg-[#F3F3F3]">
          <div className="max-w-[1200px] mx-auto flex h-full">
            <div className="w-[100px] bg-white flex items-center justify-center">
              <Link to="/">
                <img src="/logoSfacEN.svg" alt="sfac-logo" />
              </Link>
            </div>
            <div className="w-[100px] bg-transparent flex items-center justify-center">
              <img src="/logoSfaclogKR.svg" alt="sfac-logo" />
            </div>
          </div>
        </div>
        <div className="h-[50px] bg-white border-b border-neutral-10">
          <div className="max-w-[1200px] mx-auto h-full flex justify-between items-center">
            <div className="grid grid-cols-4 gap-s-1 h-full">
              <TopGNBTab
                isSelected={pathname === "/signup" || pathname === "/"}
                to="/"
              >
                스팩폴리오 홈
              </TopGNBTab>
              <TopGNBTab isSelected={pathname === "/portfolio"} to="/portfolio">
                포트폴리오
              </TopGNBTab>
              <TopGNBTab isSelected={pathname === "/community"} to="/community">
                커뮤니티
              </TopGNBTab>
              <TopGNBTab isSelected={pathname === "/projects"} to="/projects">
                프로젝트
              </TopGNBTab>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="relative">
                <input
                  className="w-[314px] h-[30px] pl-[14px] pr-[36px] caption rounded-full border border-primary-90"
                  placeholder="다양한 포트폴리오를 검색해보세요"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-[14px] cursor-pointer">
                  <img src="/search.svg" alt="search" />
                </div>
              </div>
              <div className="flex items-center gap-[22px]">
                <Link to={"/login"} className="text-xs font-semibold">
                  로그인
                </Link>
                <Link
                  to={"/signup"}
                  className="bg-black text-white text-xs font-semibold rounded-full px-[20px] py-[10px]"
                >
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface topGNBTabProps {
  children: string;
  isSelected: boolean;
  to: string;
}

const TopGNBTab = ({
  children,
  isSelected,
  to,
}: topGNBTabProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className={`w-[96px] flex items-center justify-center cursor-pointer${
        isSelected ? " border-b-2 border-primary-90" : ""
      }`}
      onClick={() => navigate(to)}
    >
      {children}
    </div>
  );
};

export default TopGNB;
