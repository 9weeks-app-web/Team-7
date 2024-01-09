import { ButtonWithIconProps } from "../../types/buttonWithIconTypes";

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  icon,
  text,
}: ButtonWithIconProps) => (
  <button className="flex gap-x-1.5 justify-center bg-neutral-90 py-[0.9375rem] px-[1.75rem] text-white rounded-[6.25rem] shadow-md text-center">
    <img src={icon} alt={text} />
    <span className="w-[9.375rem]">{text}</span>
  </button>
);

export default ButtonWithIcon;
