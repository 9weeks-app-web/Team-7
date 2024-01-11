import { Link } from "react-router-dom";
import Button from "../components/design/Button";
import UsersLayout from "../components/layout/UsersLayout";

const JoinComplete = () => {
  return (
    <UsersLayout>
      <div className="mx-auto text-center text-neutral-90">
        <img src="/joinComplete.png" alt="" className="w-full h-[260px]" />
        <h2 className="mb-[6px] text-[24px] font-semibold">
          회원가입이 완료되었습니다! 👋🏻
        </h2>
        <p className="mb-[50px]">지금 바로 다양한 작업을 감상해보세요</p>

        <Link to={"/login"}>
          <Button width="w-[100%]" color="blue">
            로그인 하러가기
          </Button>
        </Link>
      </div>
    </UsersLayout>
  );
};

export default JoinComplete;
