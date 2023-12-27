import { NicknameCheckboxProps } from "../../types/nicknameTypes";

const NicknameCheckbox = ({
  title,
  target,
  register,
}: NicknameCheckboxProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={target}>{title}</label>
      <input id={target} type="checkbox" {...register(target)} />
    </div>
  );
};

export default NicknameCheckbox;
