import { NicknameCheckboxProps } from "../../types/nicknameTypes";

const NicknameCheckbox = ({
  title,
  target,
  register,
}: NicknameCheckboxProps): JSX.Element => {
  return (
    <div className="flex gap-s-1">
      <input id={target} type="checkbox" {...register(target)} />
      <label htmlFor={target}>{title}</label>
    </div>
  );
};

export default NicknameCheckbox;
