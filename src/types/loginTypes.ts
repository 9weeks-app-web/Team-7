export interface InputDatas {
  [index: string]: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface PasswordRecoveryUser {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: LoginUser | PasswordRecoveryUser | null;
}

export interface LoginErrorMessageProps {
  children: JSX.Element | JSX.Element[];
}
