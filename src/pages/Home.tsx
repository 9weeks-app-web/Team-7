import { Link } from "react-router-dom";
import Counter from "../components/home/Couner";

const Home = () => {
  return (
    <div className="text-lg bg-primary-60">
      <p>Root</p>

      <Counter />
      <Link to={"/portfolio"}>포트폴리오</Link>
    </div>
  );
};

export default Home;
