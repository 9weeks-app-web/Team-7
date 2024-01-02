import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <div>
      <p>Home</p>
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
      </div>
    </div>
  );
};

export default Home;
