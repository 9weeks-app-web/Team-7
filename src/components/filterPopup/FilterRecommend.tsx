import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterPopupButton from "./FilterPopupButton";

const FilterRecommend = () => {
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
        label="추천 서비스"
        icon={`${
          selectedFilter ? "filterRecommendActive" : "filterRecommendDefault"
        }`}
      />
      {isPopup && (
        <div className="absolute flex flex-col items-start gap-y-1.5 mt-[6px] w-[14.4rem] p-1.5 rounded-md border-[1px] border-solid border-[#e6e6e6] bg-white shadow-sm">
          <div className="flex items-start w-full px-[0.875rem] py-[0.625rem] rounded-md text-1 text-neutral-90 text-sm border-b-[1px] border-solid border-[#e6e6e6]">
            무료 서비스
          </div>
          <FilterPopupButton
            label="스팩폴리오 Pick"
            isActive={selectedFilter === "SfacPick"}
            onClick={() => handleFilter("SfacPick")}
          />
          <div className="flex items-start w-full px-[0.875rem] py-[0.625rem] rounded-md text-1 text-neutral-90 text-sm border-b-[1px] border-solid border-[#e6e6e6]">
            유료 서비스
          </div>
          <FilterPopupButton
            label="전문가 포트폴리오"
            isActive={selectedFilter === "Professional"}
            onClick={() => handleFilter("Professional")}
          />
          <FilterPopupButton
            label="합격자 포트폴리오"
            isActive={selectedFilter === "Successful"}
            onClick={() => handleFilter("Successful")}
          />
          <FilterPopupButton
            label="공모전 수상"
            isActive={selectedFilter === "Awards"}
            onClick={() => handleFilter("Awards")}
          />
        </div>
      )}
    </div>
  );
};

export default FilterRecommend;
