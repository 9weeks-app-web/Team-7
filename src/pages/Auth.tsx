import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/login/AuthForm";
import CircleButton from "./../components/login/CircleButton";

const Auth = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen mb-[128px]">
      <Link to="/" className="mt-[175px]">
        <img alt="title-logo-sfac" src="/logoSfacTitle.svg" />
      </Link>
      <h1 className="title flex justify-center mt-[50px]">로그인</h1>
      <AuthForm />
      <div className="mt-[50px]">
        <div className="flex justify-center text-2 text-neutral-90">
          sns 연동 로그인
        </div>
        <div className="mt-[20px]">
          <CircleButton src="/kakaoCircle.svg" alt="kakao-circle" />
          <CircleButton
            src="/googleCircle.svg"
            alt="google-circle"
            margin="ml-[40px]"
          />
          <CircleButton
            src="/naverCircle.svg"
            alt="naver-circle"
            margin="ml-[40px]"
          />
          <CircleButton
            src="/appleCircle.svg"
            alt="apple-circle"
            margin="ml-[40px]"
          />
          <CircleButton
            src="/facebookCircle.svg"
            alt="facebook-circle"
            margin="ml-[40px]"
          />
        </div>
      </div>
      <div className="mt-[50px]">
        <span>아직 스팩폴리오 회원이 아니세요?</span>
        <Link to="/" className="ml-[40px] underline">
          회원 가입하기
        </Link>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mt-[20px] caption"
      >
        <span className="text-neutral-40">다음에 할래요</span>
        <img className="ml-[10px]" alt="close-x" src="/closeX.svg" />
      </button>
    </div>
  );
};

export default Auth;
