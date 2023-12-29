export interface InputDatas {
  [index: string]: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: LoginUser | null;
}

export interface LoginErrorMessageProps {
  children: JSX.Element | JSX.Element[];
}
