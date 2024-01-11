import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "../../../store/authSlice";

import FormInputBox from "../../common/FormInputBox";
import PhoneCertification from "../../common/PhoneCertification";
import Button from "../../design/Button";
import useModal from "../../../hooks/useModal";

import { FindPasswordInputs } from "../../../types/findTypes";
import { isError } from "../../../utils/inputUtils";
import { PATTERNS } from "../../../constants/patterns";
import { ERROR_MESSAGES } from "../../../constants/errorMessages";
import { MOCK_RECOVERY_USERS } from "../../../mocks/mockUser";

const FindPasswordForm = (): JSX.Element => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { isValid, errors },
    clearErrors,
  } = useForm<FindPasswordInputs>({ mode: "onBlur" });

  const { Modal, openModal, closeModal } = useModal(() => {
    closeModal();
    navigate("/signup");
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlefindPasswordSubmit: SubmitHandler<FindPasswordInputs> = async (
    data: FindPasswordInputs
  ) => {
    try {
      // TODO: 가입된 사용자 검증 api 연동
      const user = MOCK_RECOVERY_USERS.find(
        (user) =>
          user.name === data.name &&
          user.email === data.email &&
          user.phoneNumber === data.phoneNumber
      );

      if (user) {
        dispatch(authenticateUser(user));
        navigate("/mypage/change-password", {
          state: { fromFindPassword: true },
        });
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

  const validateEmail = (email: string): string | undefined => {
    if (!PATTERNS.EMAIL.test(email)) {
      return ERROR_MESSAGES.INVALID_EMAIL_FORMAT;
    }
  };

  return (
    <form onSubmit={handleSubmit(handlefindPasswordSubmit)}>
      <div className="mt-[50px]">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              className="w-[7.625rem] mb-5"
              src="/logoSfacTitle.svg"
              alt="LogoSfacTitle"
            />
          </Link>
        </div>
        <h1 className="title flex justify-center mt-[20px]">비밀번호 찾기</h1>
        <Modal confrimLabel="회원가입 하러가기" cancelLabel="다시 입력하기">
          <div className="text-neutral-90 text-1">
            <div className="text-center">가입되어 있지 않은 계정이거나</div>
            <div> 입력하신 정보가 일치하지 않습니다.</div>
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
      </div>
      <div className="mt-[20px]">
        <FormInputBox
          title="이메일"
          name="email"
          register={register}
          isError={isError("email", errors)}
          options={{
            required: ERROR_MESSAGES.EMAIL_REQUIRED,
            validate: (email) => validateEmail(email),
          }}
          errorMessage={errors?.email?.message}
          placeholder="이메일 입력 (example@example.com)"
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
      </div>
    </form>
  );
};

export default FindPasswordForm;
