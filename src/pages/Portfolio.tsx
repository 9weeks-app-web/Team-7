import FilterRecommend from "../components/filterPopup/FilterRecommend";
import FilterSort from "../components/filterPopup/FilterSort";
import PageLayout from "../components/layout/PageLayout";

const Portfolio = () => {
  return (
    <PageLayout>
      <p>portfolio</p>
      <div className="flex gap-x-1.5">
        <FilterSort />
        <FilterRecommend />
      </div>
    </PageLayout>
  );
};

export default Portfolio;
