import { JoinFormCheckboxProps } from "../../types/joinFormTypes";

const EmailCheckbox = ({
  title,
  target,
  register,
}: JoinFormCheckboxProps): JSX.Element => {
  return (
    <div className="flex justify-between text-sm">
      <div>
        <input id={target} type="checkbox" {...register(target)} />
        <label htmlFor={target} className="ml-[9px]">
          {title}
        </label>
      </div>
      {/* TODO:: 폰트 컬러 및 크기 설정하기 */}
      <button className="underline">확인하기</button>
    </div>
  );
};

export default EmailCheckbox;
