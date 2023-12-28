import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler;
  color: "white" | "gray" | "black" | "blue";
  width: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color,
  width,
  disabled,
}) => {
  let backgroundColor;
  let textColor;

  switch (color) {
    case "white":
      backgroundColor = "bg-primary-white";
      textColor = "text-neutral-40";
      break;
    case "gray":
      backgroundColor = "bg-neutral-10";
      textColor = "text-neutral-40";
      break;
    case "black":
      backgroundColor = "bg-[#333333]";
      textColor = "text-primary-white";
      break;
    case "blue":
      backgroundColor = "bg-primary-100";
      textColor = "text-primary-white";
      break;
    default:
      backgroundColor = "bg-white";
      textColor = "text-neutral-40";
  }
  return (
    <button
      onClick={onClick}
      className={`rounded-md ${width} flex justify-center items-center p-3.5 text-2 ${backgroundColor} ${textColor} disabled:bg-[#E6E6E6] text-[#999999]`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
