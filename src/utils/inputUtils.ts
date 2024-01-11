import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

export const isError = (name: string, errors: FieldErrors<FieldValues>) =>
  errors[name] ? true : false;

export const handleShowClick = (
  isShow: boolean,
  type: InputHTMLAttributes<HTMLInputElement>["type"],
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>,
  setType: React.Dispatch<
    React.SetStateAction<InputHTMLAttributes<HTMLInputElement>["type"]>
  >
) => {
  console.log(type);
  isShow ? setType("text") : setType(type);
  setIsShow((prev) => !prev);
};

export const customStyle = (
  className?: string,
  isError?: boolean,
  isVisible?: boolean
) => {
  let style = "";

  style += isError ? "input-waring " : "input-normal ";
  style += isVisible ? "pr-[46px] " : "";
  style += className ? className : "";

  return style;
};
