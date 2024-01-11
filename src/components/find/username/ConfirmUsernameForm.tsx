import Button from "../../design/Button";
import { useNavigate } from "react-router";
import { ConfirmUsernameFormProps } from "./../../../types/findTypes";

const ConfirmUsernameForm = ({
  recoveredUsername,
}: ConfirmUsernameFormProps) => {
  const navigate = useNavigate();
  return (
    <form>
      <div className="text-1 text-system-greem text-center mt-[50px]">
        정보와 일치하는 아이디 입니다.
      </div>
      <div className="mt-[20px]">
        <input
          className="p-[14px] w-full h-[52px] rounded-md border text-neutral-90 font-semibold text-sm"
          defaultValue={recoveredUsername}
          readOnly
        />
      </div>
      <div className="mt-[50px]">
        <Button
          onClick={() => navigate("/signup")}
          width="w-[384px]"
          color="blue"
          type="button"
        >
          로그인 하러가기
        </Button>
      </div>

      <div className="flex items-center mt-[50px]">
        <div className="flex-1 w-[169px] h-px bg-neutral-20"></div>
        <span className="mx-[9px] text-2 text-neutral-40">또는</span>
        <div className="flex-1 w-[169px] h-px bg-neutral-20"></div>
      </div>
      <div className="mt-[50px]">
        <Button onClick={() => navigate("/")} width="w-[384px]" type="button">
          홈으로 이동하기
        </Button>
      </div>
    </form>
  );
};

export default ConfirmUsernameForm;
