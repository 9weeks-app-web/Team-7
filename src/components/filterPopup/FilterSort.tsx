import { useState } from "react";
import FilterPopupButton from "./FilterPopupButton";
import FilterButton from "./FilterButton";

const FilterSort: React.FC = () => {
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
        label="정렬"
        icon={`${selectedFilter ? "filterActive" : "filterDefault"}`}
      />

      {isPopup && (
        <div className="absolute flex flex-col items-start gap-y-1.5 mt-[6px] w-[14.4rem] p-1.5 rounded-md border-[1px] border-solid border-[#e6e6e6] bg-white shadow-sm z-[1000]">
          <FilterPopupButton
            label="인기순"
            isActive={selectedFilter === "popularity"}
            onClick={() => handleFilter("popularity")}
          />
          <FilterPopupButton
            label="최신순"
            isActive={selectedFilter === "latest"}
            onClick={() => handleFilter("latest")}
          />
          <FilterPopupButton
            label="팔로우한 작가만"
            isActive={selectedFilter === "followed"}
            onClick={() => handleFilter("followed")}
          />
        </div>
      )}
    </div>
  );
};

export default FilterSort;
