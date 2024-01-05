import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

import UsersLayout from "../components/layout/UsersLayout";
import FormInputBox from "../components/common/FormInputBox";
import Button from "../components/design/Button";
import useModal from "../hooks/useModal";
import ModalText from "../components/common/ModalText";
import ModalButton from "../components/design/ModalButton";

import { ChangePasswordFormProps } from "../types/changePasswordFormTypes";
import { ERROR_MESSAGES } from "./../constants/errorMessages";
import { PATTERNS } from "./../constants/patterns";

const ChangePassword = (): JSX.Element => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const location = useLocation();
  const isRedirectedFromFindPassword = location.state?.fromFindPassword;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormProps>({ mode: "onBlur" });

  const { Modal, openModal, closeModal, handleConfirm } = useModal(() => {
    handleLogout();
    closeModal();
    navigate("/signup");
  });

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    dispatch(logout());
  };

  const handleCancel = () => {
    closeModal();
    navigate("/");
  };

  const onSubmit = async (data: ChangePasswordFormProps) => {
    setFormSubmitted(true);
    console.log(data);
    openModal();
  };
  const password = useRef<string | null>(null);
  password.current = watch("password", "");

  const password_confirm = useRef<string | null>(null);
  password_confirm.current = watch("password_confirm", "");

  return (
    <UsersLayout>
      <div className="flex justify-center">
        <Link to="/">
          <img
            className="w-[7.625rem]"
            src="/logoSfacTitle.svg"
            alt="LogoSfacTitle"
          />
        </Link>
      </div>
      <div className="flex justify-center flex-col items-center">
        <p className="text-2xl font-semibold mt-[20px]">비밀번호 변경하기</p>
        {isRedirectedFromFindPassword && (
          <div className="mt-[50px] text-system-green text-1">
            <div className="text-center">입력하신 정보와 일치합니다.</div>
            <div> 새로운 비밀번호를 입력해주세요!</div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-y-5"
        >
          {/* 새 비밀번호 */}
          <div className="mt-[50px]">
            <FormInputBox
              type="password"
              register={register}
              options={{
                pattern: {
                  value: PATTERNS.PASSWORD,
                  message: ERROR_MESSAGES.INVALID_PASSWORD_FORMAT,
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
          </div>

          {/* 새 비밀번호 확인 */}
          <div className="mt-[20px]">
            <FormInputBox
              type="password"
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
          </div>

          <div className="flex gap-x-1.5 mt-[50px]">
            {!isRedirectedFromFindPassword ? (
              <>
                <Button
                  onClick={handleCancel}
                  children="다음에 변경"
                  width="w-[7.75rem]"
                  type="button"
                />
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
              </>
            ) : (
              <Button
                children="비밀번호 변경하기"
                color="blue"
                width="w-[384px]"
                type="submit"
                disabled={
                  Object.keys(errors).length > 0 ||
                  !watch("password") ||
                  !watch("password_confirm") ||
                  watch("password") !== watch("password_confirm")
                }
              />
            )}

            {formSubmitted && (
              <Modal>
                <div className=" flex flex-col items-center gap-y-[1.25rem]">
                  <ModalText>비밀번호 변경이 완료되었습니다.</ModalText>
                  <div className="flex gap-x-[0.375rem]">
                    <ModalButton
                      onClick={handleCancel}
                      type="button"
                      width="w-[8.5rem]"
                    >
                      홈으로 가기
                    </ModalButton>
                    <ModalButton
                      onClick={handleConfirm}
                      type="button"
                      color="blue"
                      width="w-[8.5rem]"
                    >
                      로그인하기
                    </ModalButton>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        </form>
      </div>
    </UsersLayout>
  );
};

export default ChangePassword;
