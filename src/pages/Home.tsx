import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    dispatch(logout());
  };
  return (
    <div>
      <p>Home</p>
      <p>테스트 유저 이름 : admin</p>
      <p>테스트 유저 이메일 : admin@sfacfolio.com</p>
      <p>테스트 유저 비밀번호 : sfacfolio7!</p>
      <p>테스트 유저 전화번호 : 010-1234-5678</p>
      <p>테스트 인증번호 : 555555</p>
      <button onClick={handleLogout}>로그아웃</button>
      <div className="grid">
        <Link to="login">로그인</Link>
        <Link to="signup">회원가입</Link>
        <Link to="find-password">비밀번호 찾기</Link>
        <Link to="find-username">아이디 찾기</Link>
        <Link to="portfolio">포트폴리오</Link>
        <Link to="portfolio/create">포트폴리오 작성</Link>
        <Link to="portfolio/today">오늘의 포트폴리오</Link>
        <Link to="portfolio/:id">포트폴리오 상세</Link>
        <Link to="mypage">마이페이지</Link>
        <Link to="mypage/change-password">비밀번호 변경</Link>
      </div>
    </div>
  );
};

export default Home;
