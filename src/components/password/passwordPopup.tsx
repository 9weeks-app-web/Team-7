import Button from "../design/Button";

const PasswordPopup: React.FC = () => {
  return (
    <div className="w-96 rounded-md py-[1.875rem] flex flex-col items-center gap-y-[1.25rem] z-50 m-auto bg-white">
      <p className="text-base">비밀번호 변경이 완료되었습니다.</p>
      <div className="flex gap-x-[0.375rem]">
        <Button children="홈으로 가기" width="w-[8.5rem]" type="button" />
        <Button
          children="로그인하기"
          width="w-[8.5rem]"
          color="blue"
          type="button"
        />
      </div>
    </div>
  );
};

export default PasswordPopup;
