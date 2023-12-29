import { FieldValues, UseFormRegister } from "react-hook-form";

export interface JoinFormValue {
  // username: string;
  // email: string;
  // password: string;
  // passwordCheck: string;

  // phoneNumber: number;
  // agreeTerms: boolean;
  // agreePrivacy: boolean;
  // agreeIdentification: boolean;
  // agreeCarrierTerms: boolean;
  // agreeServiceTerms: boolean;
  [index: string]: string;
}

export interface JoinFormContainerProps {
  children: JSX.Element | JSX.Element[];
}

export interface JoinFormItemsProps {
  children: JSX.Element | JSX.Element[];
}

export interface JoinFormCheckboxProps {
  title: string;
  target: string;
  register: UseFormRegister<FieldValues>;
}
