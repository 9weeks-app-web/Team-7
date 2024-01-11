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
        <label htmlFor={target} className="ml-[9px] text-neutral-70">
          {title}
        </label>
      </div>
      <button className="underline text-neutral-20">확인하기</button>
    </div>
  );
};

export default EmailCheckbox;
