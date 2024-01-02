import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default ProtectedRouter;
