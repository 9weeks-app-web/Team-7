import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import { login } from "../../store/authSlice";
import Button from "../design/Button";
import FormInputBox from "../common/FormInputBox";
import ErrorText from "../common/ErrorText";
import { InputDatas } from "../../types/loginTypes";
import { isError } from "../../utils/inputUtils";
import { MOCK_USERS } from "../../mocks/mockUser";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { PATTERNS } from "../../constants/patterns";

const AuthForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberUser, setRememberUser] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<InputDatas>();

  const handleLoginSubmit: SubmitHandler<InputDatas> = async (
    data: InputDatas
  ) => {
    try {
      // TODO: login api 연동
      const user = MOCK_USERS.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        if (rememberUser) {
          localStorage.setItem("loggedInUser", JSON.stringify(user));
        }
        dispatch(login(user));
        navigate("/");
      } else {
        setError("root.serverError", {
          type: "401",
          message: "Authentication failed",
        });
      }
    } catch (error: unknown) {
      console.error("로그인 오류:", error);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      dispatch(login(user));
      navigate("/");
    }
  }, [dispatch, navigate]);

  const validateEmail = (email: string): string | undefined => {
    if (!PATTERNS.EMAIL.test(email)) {
      return ERROR_MESSAGES.INVALID_EMAIL_FORMAT;
    }
  };

  const validatePassword = (password: string): string | undefined => {
    if (!PATTERNS.PASSWORD.test(password)) {
      return ERROR_MESSAGES.INVALID_PASSWORD_FORMAT;
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
      <div className="mt-[50px]">
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
        <FormInputBox
          title="비밀번호"
          name="password"
          type="password"
          register={register}
          isError={isError("password", errors)}
          options={{
            required: ERROR_MESSAGES.PASSWORD_REQUIRED,
            validate: (password) => validatePassword(password),
          }}
          errorMessage={errors?.password?.message}
          placeholder="비밀번호"
        />
      </div>

      <div className="mt-[50px]">
        {errors?.root?.serverError && (
          <ErrorText errorMessage="가입되어 있지 않은 계정이거나, 이메일 또는 비밀번호가 일치하지 않습니다." />
        )}
        <Button color="black" width="w-[384px]">
          로그인
        </Button>
      </div>

      <div className="flex justify-between w-[384px] mt-[20px]">
        <div className="flex items-center">
          <input
            className="w-[18px] h-[18px]"
            type="checkbox"
            checked={rememberUser}
            onChange={() => setRememberUser(!rememberUser)}
          />
          <span className="text-2 text-neutral-70 ml-[6px]">로그인 유지</span>
        </div>
        <div>
          <Link className="text-2 text-neutral-90" to="/">
            아이디 찾기
          </Link>
          <span className="mx-[4px]">|</span>
          <Link to="/" className="text-2 text-neutral-90">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
