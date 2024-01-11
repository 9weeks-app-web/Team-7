import { InputHTMLAttributes } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues | any>;
  name: string;
  isError?: boolean;
  isVisible?: boolean;
  options?: RegisterOptions<FieldValues, string> | undefined;
  currentLength?: string;
}

export interface formInputBoxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues | any>;
  options?: RegisterOptions<FieldValues, string> | undefined;
  name: string;
  title: string;
  isError?: boolean;
  isSuccess?: boolean;
  isVisible?: boolean;
  errorMessage?: string;
  successMessage?: string;
  currentLength?: string;
}
