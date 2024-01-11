import RegisterInfoButton from "./RegisterInfoButton";

const RegisterInfo = (): JSX.Element => {
  return (
    <div className="grid gap-s-3">
      <div className="text-center text-neutral-70 text-2xl">
        <p>회원가입 또는 로그인으로 SPECFOLIO</p>
        <p>멋진 활동들을 펼쳐보세요.</p>
      </div>
      <div className="flex justify-center items-center gap-s-2">
        <RegisterInfoButton to="/login" isLogin={true}>
          로그인
        </RegisterInfoButton>
        <span className="text-neutral-40 text-xl">또는</span>
        <RegisterInfoButton to="signup">회원가입</RegisterInfoButton>
      </div>
    </div>
  );
};

export default RegisterInfo;
