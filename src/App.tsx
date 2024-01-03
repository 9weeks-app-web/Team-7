import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import ProtectedRouter from "./pages/ProtectedRouter";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";

const App = (): JSX.Element => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={isAuthenticated ? <Navigate to="/" /> : <Outlet />}>
          <Route path="login" element={<Auth />} />
          <Route path="signup" element={<Signup />} />
          <Route path="find-username" element={<div>find-username</div>} />
          <Route path="find-password" element={<div>find-password</div>} />
        </Route>
      </Route>
      <Route path="/portfolio" element={<Outlet />}>
        <Route index element={<div>portfolio</div>} />
        <Route element={<ProtectedRouter />}>
          <Route path="create" element={<div>create</div>} />
        </Route>
        <Route path="today" element={<div>today</div>} />
        <Route path=":id" element={<div>detail</div>} />
      </Route>
      <Route path="/community" element={<Outlet />}>
        <Route index element={<div>community</div>} />
        <Route element={<ProtectedRouter />}>
          <Route path="create" element={<div>create</div>} />
        </Route>
        <Route path="hot" element={<div>hot</div>} />
        <Route path="qna" element={<div>qna</div>} />
        <Route path="free" element={<div>free</div>} />
        <Route path=":id" element={<div>detail</div>} />
      </Route>
      <Route path="/projects" element={<Outlet />}>
        <Route index element={<div>projects</div>} />
        <Route element={<ProtectedRouter />}>
          <Route path="create" element={<div>create</div>} />
        </Route>
        <Route path="today" element={<div>today</div>} />
        <Route path=":id" element={<div>detail</div>} />
      </Route>
      <Route path="/mypage" element={<Outlet />}>
        <Route element={<ProtectedRouter />}>
          <Route index element={<div>mypage</div>} />
          <Route path="profile" element={<div>profile</div>} />
          <Route path="sns" element={<div>sns</div>} />
          <Route path="follow" element={<div>follow</div>} />
          <Route path="comments" element={<div>comments</div>} />
          <Route path="saved-posts" element={<div>saved-posts</div>} />
          <Route path="posts" element={<div>posts</div>} />
          <Route path="delete" element={<div>delete</div>} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
