import { useState } from "react";
import FilterRecommend from "../components/filterPopup/FilterRecommend";
import FilterSort from "../components/filterPopup/FilterSort";
import ModalContainer from "../components/jobsCategory/ModalContainer";
import PageLayout from "../components/layout/PageLayout";
import PortfolioList from "../components/portfolio/PortfolioList";
import UsedTool from "../components/portfolio/UsedTool";
import WorkColor from "../components/portfolio/WorkColor";
import FilterButton from "../components/filterPopup/FilterButton";
import ButtonWithIcon from "../components/design/ButtonWithIcon";

const Portfolio = () => {
  return (
    <PageLayout>
      <div className="py-[100px]">
        <div className="mb-[30px]">
          <ModalContainer />
        </div>
        <div className="flex gap-x-1.5 mb-s-4">
          <FilterSort />
          <FilterRecommend />
          <FilterTools />
          <FilterColor />
        </div>
        <PortfolioList />
        <div className="fixed bottom-[3.75rem] right-[7.85rem] flex flex-col justify-end items-end gap-y-5 z-50">
          <ButtonWithIcon icon="./compass.svg" text="포트폴리오 업로드" />
        </div>
      </div>
    </PageLayout>
  );
};

const FilterTools = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isPopup, setIsPopup] = useState(false);

  const handleFilter = (filter: string) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
    setIsPopup(!isPopup);
  };

  return (
    <div>
      <FilterButton
        onClick={() => setIsPopup(!isPopup)}
        isActive={!!selectedFilter}
        label="사용 툴"
        icon={`${selectedFilter ? "useToolsActive" : "useTools"}`}
      />

      {isPopup && (
        <div className="absolute flex flex-col items-start gap-y-1.5 mt-[6px] p-1.5 rounded-md border-[1px] border-solid border-[#e6e6e6] bg-white shadow-sm z-[1000]">
          <UsedTool handleFilter={handleFilter} />
        </div>
      )}
    </div>
  );
};

const FilterColor = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isPopup, setIsPopup] = useState(false);

  const handleFilter = (filter: string) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
    setIsPopup(!isPopup);
  };

  return (
    <div>
      <FilterButton
        onClick={() => setIsPopup(!isPopup)}
        isActive={!!selectedFilter}
        label="작업 색상"
        icon={`${selectedFilter ? "ColorActive" : "Color"}`}
      />

      {isPopup && (
        <div className="absolute flex flex-col items-start gap-y-1.5 mt-[6px] p-1.5 rounded-md border-[1px] border-solid border-[#e6e6e6] bg-white shadow-sm z-[1000]">
          <WorkColor handleFilter={handleFilter} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
