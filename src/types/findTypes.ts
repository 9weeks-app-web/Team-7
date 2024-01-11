export interface RecoveryUser {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface FindUsernameInputs {
  [index: string]: string;
}

export interface FindPasswordInputs {
  [index: string]: string;
}

export interface ChangePasswordFormProps {
  password: string;
  password_confirm: string;
}

export interface ConfirmUsernameFormProps {
  recoveredUsername: string;
}

export interface FindUsernameFormProps {
  onAuthenticationChange: (isAuthenticated: boolean) => void;
  onUsernameRecovery: (recoveredUsername: string) => void;
}
