import TopGNB from "../design/TopGNB";
import Footer from "../design/Footer";

interface pageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PageLayout = ({ children }: pageLayoutProps): JSX.Element => {
  return (
    <div>
      <TopGNB />
      <div className="mt-[96px]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
