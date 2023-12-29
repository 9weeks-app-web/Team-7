import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import LogoSfacTitle from "../../public/logoSfacTitle.svg";
import FormInputBox from "../components/common/FormInputBox";
import Button from "../components/design/Button";
import PasswordPopup from "../components/password/passwordPopup";

interface ChangePasswordFormValue {
  password: string;
  password_confirm: string;
}

const ChangePasswordForm: React.FC = () => {
  const [isPopup, setIsPopup] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormValue>({ mode: "onBlur" });

  const onSubmit = (data: ChangePasswordFormValue) => {
    setIsPopup(true);
    console.log(data);
  };

  const password = useRef<string | null>(null);
  password.current = watch("password", "");

  return (
    <div className="flex items-center flex-col mt-[175px]">
      <img
        className="w-[7.625rem] mb-5"
        src={LogoSfacTitle}
        alt="LogoSfacTitle"
      />
      <div className="flex justify-center flex-col items-center">
        <p className="text-2xl font-semibold mb-[3.125rem]">
          비밀번호 변경하기
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-y-5"
        >
          <FormInputBox
            register={register}
            options={{
              minLength: {
                value: 8,
                message: `비밀번호 형식이 올바르지 않습니다.
(영문 대소문자/숫자/특수문자 포함 8자 이상)`,
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/,
                message: `비밀번호 형식이 올바르지 않습니다.
(영문 대소문자/숫자/특수문자 포함 8자 이상)`,
              },
            }}
            name="password"
            title="새 비밀번호"
            isVisible
            isError={!!errors.password}
            errorMessage={errors.password?.message}
            placeholder="영문 대소문자/숫자/특수문자 포함 8자 이상"
          />
          <FormInputBox
            register={register}
            name="password_confirm"
            options={{
              validate: (value) =>
                value === password.current || "비밀번호가 일치하지 않습니다.",
            }}
            title="새 비밀번호 확인"
            isVisible
            isError={!!errors.password_confirm}
            errorMessage={errors.password_confirm?.message}
            placeholder="영문 대소문자/숫자/특수문자 포함 8자 이상"
          />
          <div className="flex gap-x-1.5 pt-[1.87rem]">
            <Button children="다음에 변경" width="w-[7.75rem]" type="button" />
            <Button
              children="완료"
              color="blue"
              width="w-[15.875rem]"
              type="submit"
              disabled={
                Object.keys(errors).length > 0 ||
                !watch("password") ||
                !watch("password_confirm") ||
                watch("password") !== watch("password_confirm")
              }
            />
          </div>
        </form>
      </div>
      {isPopup && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10">
          <PasswordPopup />
        </div>
      )}
    </div>
  );
};

export default ChangePasswordForm;
