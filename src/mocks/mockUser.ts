import { LoginUser } from "../types/loginTypes";
import { RecoveryUser } from "../types/findTypes";

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

export const MOCK_USER_PROFILE = {
  name: "민들레",
  role: "그래픽 디자인, UX UI 디자인",
  work: {
    count: 14,
    recentWorks: [
      {
        id: "123",
        name: "first work",
        image: "/portfolio/portfolioThumbnail_1.png",
      },
      {
        id: "234",
        name: "second work",
        image: "/portfolio/portfolioThumbnail_2.png",
      },
      {
        id: "345",
        name: "3th work",
        image: "/portfolio/portfolioThumbnail_3.png",
      },
    ],
  },
  following: 0,
  follower: 132,
};
