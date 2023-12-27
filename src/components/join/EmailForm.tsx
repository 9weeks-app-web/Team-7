import { useForm, SubmitHandler } from "react-hook-form";
import { JoinFormValue } from "../../types/joinFormTypes";
import { useRef } from "react";
import EmailCheckbox from "./EmailCheckbox";
import EmailFormContainer from "./EmailFormContainer";
import EmailFormItems from "./EmailFormItems";
import { Link } from "react-router-dom";

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<JoinFormValue>({ mode: "onChange" });

  const handleDataSubmit: SubmitHandler<JoinFormValue> = (data) => {
    console.log("다음 버튼 클릭 후 data: ", data);
  };

  // 인풋의 상태 확인
  const usernameRef = useRef<string | null>(null);
  usernameRef.current = watch("username");

  const emailRef = useRef<string | null>(null);
  emailRef.current = watch("email");

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  const phoneNumberRef = useRef<string | null>(null);
  phoneNumberRef.current = watch("phoneNumber");

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

  console.log(allCheckboxesChecked);

  return (
    <div className="max-w-[1200px] m-auto py-[175px]">
      <EmailFormContainer>
        <EmailFormItems>
          <h1 className=" flex flex-col justify-between items-center">
            <img
              src="/public/logoSfackTitle.svg"
              alt="SFAC Logo"
              className="mx-auto mb-[20px]"
            />
            <div className="flex">
              <span className="flex items-center justify-between bg-blue-100 text-blue-500 rounded-full px-[10px] py-[6px] mr-[6px] text-xs">
                단계 <strong>1</strong>/3
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
          {/* 정보 입력 인풋 */}
          <EmailFormItems>
            <label htmlFor="username">이름</label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "이름을 입력해주세요.",
                pattern: {
                  value: /^[a-zA-Z가-힣0-9]{2,10}$/,
                  message:
                    "이름은 알파벳과 숫자 조합으로 2자에서 10자까지 입력해주세요.",
                },
                validate: (value) => value === usernameRef.current,
                minLength: 2,
                maxLength: 10,
              })}
              placeholder="이름 입력"
              className={`p-[14px] rounded-[6px] border-[1px]`}
            />
            <p className="text-red-500">{errors?.username?.message}</p>
          </EmailFormItems>

          <EmailFormItems>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "이메일을 입력해주세요.",
                validate: (value) => value === emailRef.current,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message:
                    "이메일 형식이 올바르지 않습니다. (example@example.com)",
                },
              })}
              placeholder="이메일 입력 (example@example.com)"
              className="p-[14px] rounded-[6px] border-[1px]"
            />
            <p className="text-red-500">{errors?.email?.message}</p>
          </EmailFormItems>

          <EmailFormItems>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "영문 대소문자/숫자/특수문자 포함 8자리 이상",
                },
              })}
              placeholder="영문 대소문자/숫자/특수문자 포함 8자리 이상"
              className="p-[14px] rounded-[6px] border-[1px]"
            />
            <p className="text-red-500">{errors?.password?.message}</p>
          </EmailFormItems>

          <EmailFormItems>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: "비밀번호가 일치하지 않습니다.",
                validate: (value) => {
                  return (
                    value === passwordRef.current ||
                    "비밀번호가 일치하지 않습니다."
                  );
                },
              })}
              placeholder="영문 대소문자/숫자/특수문자 포함 8자리 이상"
              className="p-[14px] rounded-[6px] border-[1px]"
            />
            <p className="text-red-500">
              {errors?.passwordConfirm && (
                <p className="text-red-500">
                  {errors?.passwordConfirm?.message}
                </p>
              )}
            </p>
          </EmailFormItems>

          {/* 휴대폰 인증 */}
          <EmailFormItems>
            <label
              htmlFor="phoneNumber"
              className="flex flex-col gap-[6px] w-[282px]"
            >
              휴대폰 인증
            </label>
            <div className="w-[282px] flex justify-start gap-[6px]">
              <button className="w-1/4 h-[52px] py-[9px] rounded-[6px] border-[1px]">
                SKT
              </button>
              <button className="w-1/4 h-[52px] py-[9px] rounded-[6px] border-[1px]">
                KT
              </button>
              <button className="w-1/4 h-[52px] py-[9px] rounded-[6px] border-[1px]">
                LG U+
              </button>
              <button className="w-1/4 h-[52px] py-[9px] rounded-[6px] border-[1px]">
                알뜰폰
              </button>
            </div>
            <div className="flex gap-[6px]">
              <input
                type="tel"
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: true,
                  validate: (value) => value === phoneNumberRef.current,
                  pattern: /^\d{10,11}$/,
                })}
                placeholder="휴대폰 번호 입력"
                className={`w-[282px] p-[14px] rounded-[6px] border-[1px]`}
              />

              <button
                type="button"
                onClick={() => console.log("인증요청 해주세요.")}
                disabled={!phoneNumberRef.current || !isValid}
                className={`w-[97px] h-[52px] py-[9px] rounded-[6px] text-gray-500 text-sm ${
                  !isValid ? "bg-gray-200" : "bg-blue-400 text-white"
                }`}
              >
                인증 요청
              </button>
            </div>

            <div>
              {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                <p className="text-red-500">
                  잘못된 인증번호입니다. 다시 인증해주세요.
                </p>
              )}
              {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
                <p className="text-red-500">
                  유효한 휴대폰 번호를 입력해 주세요.
                </p>
              )}
            </div>
          </EmailFormItems>

          {/* 본인인증 동의서 */}
          <EmailFormItems>
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
            <button
              type="button"
              disabled={isValid}
              onClick={() => console.log("이전으로", isValid)}
              className="w-1/3 p-[14px] rounded-[6px] border-[1px] border-gray-300"
            >
              이전
            </button>
            {/* isValid은 모든 인풋이 잘 들어가 있어야 isValid 된다. */}
            <button
              type="submit"
              disabled={!allCheckboxesChecked || !isValid}
              className={`w-2/3 p-[14px] rounded-[6px] ${
                !allCheckboxesChecked || !isValid
                  ? "bg-gray-200"
                  : "bg-blue-400 text-white"
              }`}
            >
              <Link to={"/join/onboarding"}>다음</Link>
            </button>
          </div>
        </form>
      </EmailFormContainer>
    </div>
  );
};

export default EmailForm;
