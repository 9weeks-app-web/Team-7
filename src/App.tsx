import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/portfolio"
        element={
          <div className="text-lg bg-primary-60">
            <p>Portfolio</p>
            <Link to={"/"}>홈</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
