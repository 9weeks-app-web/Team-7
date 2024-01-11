import PageLayout from "../components/layout/PageLayout";
import ProjectCard from "../components/ProjectHome/ProjectCard";
import ProjectCategory from "../components/ProjectHome/ProjectCategory";
import Banner from "../components/banner/Banner";
import { ProjectInterest, ProjectHot } from "../constants/projectHome";
import ProjectList from "../components/ProjectHome/ProjectList";
import { useState } from "react";

const Projects = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isCardViewer, setIsCardViewr] = useState<boolean>(true);

  const handleMenuOpen = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const handleViewerChange = (selectedView: string) => {
    setIsCardViewr(selectedView === "card");
  };

  return (
    <PageLayout>
      <>
        <div className="w-[1200px] mx-auto">
          <ul className="flex gap-[30px] pt-[46px] pb-[6px] mb-[82px] text-[16px] font-semibold text-neutral-40 border-b-[1px] border-neutral-40">
            <li className="text-primary-90">
              <button>프로젝트 홈</button>
            </li>
            <li>
              <button>멤버찾기</button>
            </li>
            <li>
              <button>진행된 프로젝트</button>
            </li>
          </ul>

          {/* 탭박스 컨테이너 */}
          <div>
            <div className="flex justify-between">
              <h2 className="text-[24px] font-bold">🔥 오늘의 HOT 프로젝트</h2>
              <button className="flex gap-[4px] items-center">
                <img src="/projectHome/unfilter.svg" alt="필터 초기화" />
                <span className="text-[12px] mt-[3px]">필터 초기화</span>
              </button>
            </div>

            {/* 탭박스1 */}
            <div>
              {/* 카테고리에서 보기 클릭 시 */}
              <ProjectCategory
                handleMenuOpen={handleMenuOpen}
                isOpenMenu={isOpenMenu}
                handleViewerChange={handleViewerChange}
              />

              {/* 프로젝트 카드 형식 / 리스트 형식 */}
              {isCardViewer ? (
                <ProjectCard projectData={ProjectHot} />
              ) : (
                <ProjectList projectData={ProjectHot} />
              )}

              <div className="mt-[60px] mb-[160px]">
                <Banner />
              </div>

              <h2 className="text-[24px] font-bold mb-[30px]">
                💙 내가 관심 있을 만한 프로젝트
              </h2>

              {isCardViewer ? (
                <ProjectCard projectData={ProjectInterest} />
              ) : (
                <ProjectList projectData={ProjectInterest} />
              )}
            </div>

            {/* 탭박스2 */}
            <div></div>

            {/* 탭박스3 */}
            <div></div>
          </div>
        </div>
      </>
    </PageLayout>
  );
};

export default Projects;
