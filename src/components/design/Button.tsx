import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "black" | "blue" | "gray";
  width?: string;
  height?: string;
  padding?: string;
}

const Button = ({
  children,
  color,
  width,
  height = "h-[52px]",
  padding = "p-3.5",
  ...props
}: ButtonProps): JSX.Element => {
  const selectStyle = (color: ButtonProps["color"]) => {
    let customStyle: string = "";

    switch (color) {
      case "black":
        customStyle = "bg-[#333333] text-primary-white";
        break;
      case "blue":
        customStyle = "bg-primary-100 text-primary-white";
        break;
      case "gray":
        customStyle = "bg-neutral-30 text-primary-white";
        break;
      default:
        customStyle = "bg-primary-white text-neutral-40 border";
    }

    return customStyle;
  };

  const customStyle = selectStyle(color);

  return (
    <button
      className={`${height} rounded-md ${width} flex justify-center items-center ${padding} text-2 ${customStyle} disabled:bg-[#E6E6E6] text-[#999999]`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
