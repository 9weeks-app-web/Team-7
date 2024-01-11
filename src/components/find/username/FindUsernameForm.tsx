import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../design/Button";
import FormInputBox from "../../common/FormInputBox";
import PhoneCertification from "../../common/PhoneCertification";
import useModal from "../../../hooks/useModal";

import { isError } from "../../../utils/inputUtils";
import { ERROR_MESSAGES } from "../../../constants/errorMessages";
import { MOCK_RECOVERY_USERS } from "../../../mocks/mockUser";
import { FindUsernameInputs } from "./../../../types/findTypes";
import { FindUsernameFormProps } from "./../../../types/findTypes";

const FindUsernameForm = ({
  onAuthenticationChange,
  onUsernameRecovery,
}: FindUsernameFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { isValid, errors },
    clearErrors,
  } = useForm<FindUsernameInputs>({ mode: "onBlur" });

  const { Modal, openModal, closeModal } = useModal(() => {
    closeModal();
    navigate("/signup");
  });

  const navigate = useNavigate();

  const handlefindUsernameSubmit: SubmitHandler<FindUsernameInputs> = async (
    data: FindUsernameInputs
  ) => {
    try {
      // TODO: 가입된 사용자 검증 api 연동
      const user = MOCK_RECOVERY_USERS.find(
        (user) =>
          user.name === data.name && user.phoneNumber === data.phoneNumber
      );

      if (user) {
        onAuthenticationChange(true);
        onUsernameRecovery(user.email);
      } else {
        openModal();
        setError("root.serverError", {
          type: "401",
          message: "Authentication failed",
        });
      }
    } catch (error: unknown) {
      console.error("사용자 인증 오류:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handlefindUsernameSubmit)}>
      <Modal confrimLabel="회원가입 하러가기" cancelLabel="다시 입력하기">
        <div className="text-neutral-90 text-1">
          <div className="text-center">입력하신 정보와 일치하는</div>
          <div>아이디가 없습니다.</div>
        </div>
      </Modal>
      <div className="mt-[50px]">
        <FormInputBox
          title="이름"
          name="name"
          type="text"
          register={register}
          isError={isError("name", errors)}
          options={{
            required: ERROR_MESSAGES.NAME_REQUIRED,
          }}
          errorMessage={errors?.name?.message}
          placeholder="이름 입력"
        />
      </div>
      <div className="mt-[20px]">
        <PhoneCertification
          register={register}
          watch={watch}
          errors={errors}
          clearErrors={clearErrors}
          certificationNumber={"555555"}
        />
      </div>

      <div className="flex mt-[50px]">
        <Button type="button" onClick={() => navigate(-1)} width="w-[96px]">
          이전
        </Button>
        <div className="ml-[6px]">
          <Button width="w-[282px]" color="blue" disabled={!isValid}>
            찾기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FindUsernameForm;
