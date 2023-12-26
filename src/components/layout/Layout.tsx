import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <div className="max-w-[1200px] m-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
