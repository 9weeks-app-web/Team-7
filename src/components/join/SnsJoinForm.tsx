import { Link } from "react-router-dom";

const SnsJoinForm = () => {
  return (
    <div className="max-w-[1200px] m-auto mt-[175px]">
      <div>
        <div>
          <h1 className="flex flex-col justify-center items-center">
            <img
              src="/public/logoSfacTitle.svg"
              alt="SFAC Logo"
              className="mx-auto mb-[100px]"
            />
            <strong className="font-bold text-[24px] pb-[64px]">
              창작자님 반가워요!
            </strong>
          </h1>
          <button className="bg-yellow-200 w-full mb-[30px] py-[14px] rounded-md">
            <img src="" alt="카카오 간편로그인" />
            {/* <p>카카오 간편로그인</p> */}
          </button>
          <ul className="flex justify-between gap-[50px] px-[40px] mb-[30px]">
            <li>
              <Link to="">
                <img src="" alt="구글" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src="" alt="네이버" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src="" alt="애플" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src="" alt="페이스북" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center mb-[20px] gap-4 w-full">
          <div className="bg-gray-300 w-2/3 h-[1px]"></div>
          <p className="text-gray-300 text-xs w-1/3">또는</p>
          <div className="bg-gray-300 w-2/3 h-[1px]"></div>
        </div>

        <button className="mb-[50px] w-full py-[14px] rounded-md border border-gray-300">
          <Link to={"/join/email"}>이메일로 가입하기</Link>
        </button>
      </div>

      <div>
        <div className="flex mb-[20px] justify-between text-sm">
          <p>아직 스팩폴리오 회원이 아니세요?</p>
          <Link to={"/join/email"} className="underline">
            회원가입 하기
          </Link>
        </div>
        <Link to={"/"} className="text-xs text-gray-300">
          다음에 할래요 X
        </Link>
      </div>
    </div>
  );
};

export default SnsJoinForm;
