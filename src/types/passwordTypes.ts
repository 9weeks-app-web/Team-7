export interface FindPasswordInputs {
  [index: string]: string;
}

export interface PasswordRecoveryUser {
  name: string;
  email: string;
  phoneNumber: string;
}
