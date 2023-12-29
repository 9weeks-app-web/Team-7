import { useForm, SubmitHandler } from "react-hook-form";
import { JoinFormValue } from "../types/joinFormTypes";
import { useRef } from "react";
import EmailCheckbox from "../components/join/EmailCheckbox";
import EmailFormContainer from "../components/join/EmailFormContainer";
import EmailFormItems from "../components/join/EmailFormItems";
import { isError } from "../utils/inputUtils";
import FormInputBox from "../components/common/FormInputBox";
import Button from "../components/design/Button";
import PhoneCertification from "../components/common/PhoneCertification";

const JoinEmail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    clearErrors,
  } = useForm<JoinFormValue>({ mode: "onChange" });

  // 인풋의 상태 확인
  const usernameRef = useRef<string | null>(null);
  usernameRef.current = watch("username", "");

  const email = useRef<string | null>(null);
  email.current = watch("email", "");

  const password = useRef<string | null>(null);
  password.current = watch("password", "");

  const passwordConfirm = useRef<string | null>(null);
  passwordConfirm.current = watch("passwordConfirm", "");

  const phoneNumberRef = useRef<string | null>(null);
  phoneNumberRef.current = watch("phoneNumber", "");

  // 체크박스의 상태 확인
  const agreeTerms = watch("agreeTerms");
  const agreePrivacy = watch("agreePrivacy");
  const agreeIdentification = watch("agreeIdentification");
  const agreeCarrierTerms = watch("agreeCarrierTerms");
  const agreeServiceTerms = watch("agreeServiceTerms");

  // 모든 체크박스가 true 상태일 때 '다음' 버튼 클릭을 위한 상태값
  const allCheckboxesChecked =
    agreeTerms &&
    agreePrivacy &&
    agreeIdentification &&
    agreeCarrierTerms &&
    agreeServiceTerms;

  const handleDataSubmit: SubmitHandler<JoinFormValue> = (data) => {
    console.log("다음 버튼 클릭 후 data: ", data);
  };
  console.log(allCheckboxesChecked);

  return (
    <div className="max-w-[1200px] m-auto py-[175px]">
      <EmailFormContainer>
        <EmailFormItems>
          <h1 className="flex flex-col justify-between items-center mb-[50px]">
            <img
              src="/public/logoSfackTitle.svg"
              alt="SFAC Logo"
              className="mx-auto mb-[20px]"
            />
            <div className="flex">
              <span className="flex items-center justify-between bg-primary-20 text-primary-80 rounded-full px-[10px] py-[6px] mr-[6px] text-xs">
                단계 <strong> 1</strong>/3
              </span>
              <strong className="font-bold text-[24px]">
                이메일로 가입하기
              </strong>
            </div>
          </h1>
        </EmailFormItems>

        <form
          onSubmit={handleSubmit(handleDataSubmit)}
          className="flex flex-col justify-between items-center text-sm"
          method="post"
        >
          {/* 이름 */}
          <div className="w-[384px] mb-[20px]">
            <FormInputBox
              isError={isError("username", errors)}
              options={{
                required: true,
                pattern: {
                  value: /^[a-zA-Z가-힣0-9]{2,10}$/,
                  message:
                    "이름은 알파벳과 숫자 조합으로 2자에서 10자까지 입력해주세요.",
                },
              }}
              errorMessage={errors?.username?.message}
              isSuccess={!isError("username", errors)}
              successMessage={""}
              register={register}
              name="username"
              title="이름"
              placeholder="이름 입력"
              type="text"
              maxLength={10}
              minLength={2}
              currentLength={watch("username")}
            />
          </div>
          {/* 이메일 */}
          <div className="w-[384px] mb-[20px]">
            <FormInputBox
              isError={isError("email", errors)}
              options={{
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message:
                    "이메일 형식이 올바르지 않습니다. (example@example.com)",
                },
              }}
              errorMessage={errors?.email?.message}
              isSuccess={!isError("email", errors)}
              successMessage={errors ? "" : "사용 가능한 이메일입니다."}
              register={register}
              name="email"
              title="이메일"
              placeholder="이메일을 입력해주세요."
              type="email"
              currentLength={watch("email")}
            />
          </div>
          {/* 비밀번호 */}
          <div className="w-[384px] mb-[20px]">
            <FormInputBox
              isError={isError("password", errors)}
              options={{
                required:
                  "비밀번호 형식이 올바르지 않습니다.(영문 대소문자/숫자/특수문자 포함 8자 이상)",
                pattern: {
                  value:
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                  message: "",
                },
              }}
              errorMessage={errors?.password?.message}
              isSuccess={!isError("email", errors)}
              register={register}
              name="password"
              title="비밀번호"
              placeholder="영문 대소문자/숫자/특수문자 포함 8자 이상"
              type="password"
              isVisible
            />
          </div>
          {/* 비밀번호 확인 */}
          <div className="w-[384px] mb-[20px]">
            <FormInputBox
              isError={!!errors.passwordConfirm}
              options={{
                validate: (value) => {
                  if (value) {
                    return (
                      value === password.current ||
                      "비밀번호가 일치하지 않습니다."
                    );
                  } else {
                    return value === password.current || "";
                  }
                },
              }}
              errorMessage={errors.passwordConfirm?.message}
              isSuccess={!isError("email", errors)}
              register={register}
              name="passwordConfirm"
              title="비밀번호 확인"
              placeholder="영문 대소문자/숫자/특수문자 포함 8자 이상"
              type="password"
              isVisible
              className="w-[380px]"
            />
          </div>

          {/* 휴대폰 인증 */}
          <PhoneCertification
            register={register}
            watch={watch}
            errors={errors}
            clearErrors={clearErrors}
            certificationNumber={"555555"}
          />

          {/* 본인인증 동의서 */}
          <EmailFormItems className="mt-[20px] mb-[50px]">
            <EmailCheckbox
              register={register}
              title="본인인증 약관 전체동의(필수)"
              target="agreeTerms"
            />

            <EmailCheckbox
              register={register}
              title="개인정보 수정 이용 동의"
              target="agreePrivacy"
            />

            <EmailCheckbox
              register={register}
              title="고유식별 정보처리 동의"
              target="agreeIdentification"
            />

            <EmailCheckbox
              register={register}
              title="통신사 이용약관 동의"
              target="agreeCarrierTerms"
            />

            <EmailCheckbox
              register={register}
              title="서비스 이용약관 동의"
              target="agreeServiceTerms"
            />
          </EmailFormItems>

          {/* 회원가입 완료 페이지로 이동 */}
          <div className="w-full flex gap-[6px] text-gray-500">
            <Button
              disabled={isValid}
              onClick={() => console.log("이전으로", isValid)} // navigation 해서 이전 페이지로 이동 시키기
              width="w-[96px]"
            >
              이전
            </Button>

            {/* isValid은 모든 인풋이 잘 들어가 있어야 isValid 된다. */}
            <Button
              type="submit"
              disabled={!allCheckboxesChecked || !isValid}
              width="w-[282px]"
            >
              다음
            </Button>
          </div>
        </form>
      </EmailFormContainer>
    </div>
  );
};

export default JoinEmail;
