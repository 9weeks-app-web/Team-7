import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputDatas {
  [index: string]: string;
}

export interface NicknameContainerProps {
  children: JSX.Element | JSX.Element[];
}

export interface NicknameItemsProps {
  children: JSX.Element | JSX.Element[];
}

export interface NicknameCheckboxProps {
  title: string;
  target: string;
  register: UseFormRegister<FieldValues>;
}
