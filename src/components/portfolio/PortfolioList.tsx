import { useAppSelector } from "../../hooks/redux/index.ts";
import {
  MOCK_PORTFOLIO,
  MOCK_PORTFOLIO_AFTER_LOGIN,
} from "../../mocks/mockPortfolio.ts";
import { PortfolioBoxProps } from "../../types/portfolioBoxTypes.ts";
import PortfolioBox from "./PortfolioBox.tsx";

const PortfolioList: React.FC = () => {
  const isLogined = useAppSelector((state) => state.auth.isAuthenticated);
  const portfolioData: PortfolioBoxProps[] = isLogined
    ? MOCK_PORTFOLIO_AFTER_LOGIN
    : MOCK_PORTFOLIO;

  return (
    <div className="grid grid-cols-4 gap-6 ">
      {portfolioData.map((portfolio, index) => (
        <PortfolioBox key={index} {...portfolio} />
      ))}
    </div>
  );
};

export default PortfolioList;
