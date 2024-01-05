import { MOCK_PORTFOLIO } from "../../mocks/mockPortfolio.ts";
import { PortfolioBoxProps } from "../../types/portfolioBoxTypes.ts";
import PortfolioBox from "./portfolioBox.tsx";

const PortfolioList: React.FC = () => {
  const portfolioData: PortfolioBoxProps[] = MOCK_PORTFOLIO;
  return (
    <div className="grid grid-cols-4 gap-6 ">
      {portfolioData.map((portfolio, index) => (
        <PortfolioBox key={index} {...portfolio} />
      ))}
    </div>
  );
};

export default PortfolioList;
