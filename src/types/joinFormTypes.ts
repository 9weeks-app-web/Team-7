import { FieldValues, UseFormRegister } from "react-hook-form";

export interface JoinFormValue {
  [index: string]: string;
}

export interface JoinFormContainerProps {
  children: JSX.Element | JSX.Element[];
}

export interface JoinFormItemsProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export interface JoinFormCheckboxProps {
  title: string;
  target: string;
  register: UseFormRegister<FieldValues>;
}
