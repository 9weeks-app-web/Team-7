import LogoSfacTitle from "../../public/logoSfacTitle.svg";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormInputBox from "../components/common/FormInputBox";
import Button from "../components/design/Button";
import { ChangePasswordFormProps } from "../types/changePasswordFormTypes";
import useModal from "../hooks/useModal";
import ModalText from "../components/common/ModalText";
import ModalButton from "../components/design/ModalButton";
import { Link } from "react-router-dom";

const ChangePassword: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormProps>({ mode: "onBlur" });
  const { Modal, openModal, closeModal } = useModal(() => {
    closeModal();
  });

  const onSubmit = async (data: ChangePasswordFormProps) => {
    setFormSubmitted(true);
    openModal();
    console.log(data);
  };
  const password = useRef<string | null>(null);
  password.current = watch("password", "");

  const password_confirm = useRef<string | null>(null);
  password_confirm.current = watch("password_confirm", "");

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
          {/* 새 비밀번호 */}
          <FormInputBox
            register={register}
            options={{
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
            minLength={8}
          />
          {/* 새 비밀번호 확인 */}
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
            <Link to={"/"}>
              <Button
                children="다음에 변경"
                width="w-[7.75rem]"
                type="button"
              />
            </Link>
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
            {formSubmitted && (
              <Modal>
                <div className=" flex flex-col items-center gap-y-[1.25rem]">
                  <ModalText>비밀번호 변경이 완료되었습니다.</ModalText>
                  <div className="flex gap-x-[0.375rem]">
                    <Link to={"/"}>
                      <ModalButton width="w-[8.5rem]">홈으로 가기</ModalButton>
                    </Link>
                    <Link to={"/login"}>
                      <ModalButton color="blue" width="w-[8.5rem]">
                        로그인하기
                      </ModalButton>
                    </Link>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
