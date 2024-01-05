import { LoginUser } from "../types/loginTypes";
import { RecoveryUser } from "../types/passwordTypes";

export const MOCK_LOGIN_USERS: LoginUser[] = [
  { email: "admin@sfacfolio.com", password: "sfacfolio7!" },
  { email: "support@sfacfolio.com", password: "sfacfolio7!" },
  { email: "sales@sfacfolio.com", password: "sfacfolio7!" },
  { email: "hr@sfacfolio.com", password: "sfacfolio7!" },
  { email: "contact@sfacfolio.com", password: "sfacfolio7!" },
];

export const MOCK_RECOVERY_USERS: RecoveryUser[] = [
  {
    name: "admin",
    email: "admin@sfacfolio.com",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "support",
    email: "support@sfacfolio.com",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "sales",
    email: "sales@sfacfolio.com",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "hr",
    email: "hr@sfacfolio.com",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "contact",
    email: "contact@sfacfolio.com",
    phoneNumber: "010-1234-5678",
  },
];
