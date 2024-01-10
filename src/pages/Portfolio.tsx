import FilterRecommend from "../components/filterPopup/FilterRecommend";
import FilterSort from "../components/filterPopup/FilterSort";
import PageLayout from "../components/layout/PageLayout";
import PortfolioList from "../components/portfolio/PortfolioList";

const Portfolio = () => {
  return (
    <PageLayout>
      <p>portfolio</p>
      <div className="flex gap-x-1.5">
        <FilterSort />
        <FilterRecommend />
      </div>
      <PortfolioList />
    </PageLayout>
  );
};

export default Portfolio;
