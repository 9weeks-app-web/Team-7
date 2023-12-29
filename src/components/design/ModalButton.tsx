import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: "black" | "blue";
  width?: string;
}

const ModalButton = ({
  children,
  color,
  width,
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
      default:
        customStyle = "bg-primary-white text-neutral-40 border";
    }

    return customStyle;
  };

  const customStyle = selectStyle(color);

  return (
    <button
      className={`h-[40px] rounded-md ${width} flex justify-center items-center py-[15px] px-[17.5px] text-2 ${customStyle} disabled:bg-[#E6E6E6] text-[#999999]`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ModalButton;
