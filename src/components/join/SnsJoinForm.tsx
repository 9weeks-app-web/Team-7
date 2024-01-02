import { Link, useNavigate } from "react-router-dom";

const SnsJoinForm = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div>
        <h1 className="flex flex-col gap-s-2 justify-center items-center">
          <img src="logoSfackTitle.svg" alt="SFAC Logo" className="mx-auto" />
          <strong className="font-bold text-[24px] pb-s-4">
            스팩폴리오에서 당신의 꿈을
            <br /> 더 크고 아름답게 펼쳐보세요.
          </strong>
        </h1>
      </div>
      <div className="grid gap-[10px] mb-[50px]">
        <button className="bg-yellow-200 w-full px-s-2 rounded-md h-[52px] relative">
          <img
            className="w-[36px] h-[36px] absolute top-1/2 -translate-y-1/2"
            src="kakaoCircle.svg"
            alt="카카오로 시작하기"
          />
          카카오로 시작하기
        </button>
        <button className="bg-green-500 text-white w-full px-s-2 rounded-md h-[52px] relative">
          <img
            className="w-[36px] h-[36px] absolute top-1/2 -translate-y-1/2"
            src="naverCircle.svg"
            alt="네이버로 시작하기"
          />
          네이버로 시작하기
        </button>
        <button className="bg-white w-full px-s-2 rounded-md h-[52px] border relative">
          <img
            className="w-[36px] h-[36px] absolute top-1/2 -translate-y-1/2"
            src="googleCircle.svg"
            alt="구글로 시작하기"
          />
          구글로 시작하기
        </button>
        <button className="bg-black text-white w-full px-s-2 rounded-md h-[52px] relative">
          <img
            className="w-[36px] h-[36px] absolute top-1/2 -translate-y-1/2"
            src="appleCircle.svg"
            alt="Apple로 시작하기"
          />
          Apple로 시작하기
        </button>
        <button className="bg-blue-500 text-white w-full px-s-2 rounded-md h-[52px] relative">
          <img
            className="w-[36px] h-[36px] absolute top-1/2 -translate-y-1/2"
            src="facebookCircle.svg"
            alt="페이스북으로 시작하기"
          />
          페이스북으로 시작하기
        </button>
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="bg-gray-300 w-2/3 h-[1px]"></div>
          <p className="text-gray-300 text-xs w-1/3">또는</p>
          <div className="bg-gray-300 w-2/3 h-[1px]"></div>
        </div>
        <button className="w-full py-[14px] rounded-md border border-gray-300">
          <Link to={"/signup?type=email&step=1"}>이메일로 가입하기</Link>
        </button>
      </div>
      <div>
        <div className="mt-[50px]">
          <span className="text-sm">이미 스팩폴리오 회원이신가요?</span>
          <Link to="/login" className="ml-[40px] text-sm underline">
            로그인 하기
          </Link>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mt-[20px] caption mx-auto"
        >
          <span className="text-neutral-40">다음에 할래요</span>
          <img className="ml-[10px]" alt="close-x" src="/closeX.svg" />
        </button>
      </div>
    </div>
  );
};

export default SnsJoinForm;
