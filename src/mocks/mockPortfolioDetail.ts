interface MOCK_PORTFOLIO_DETAIL_Types {
  id: string;
  contents: string;
  title: string;
  description: string;
  like: string;
  view: string;
  date: string;
  users: { profile: string; userName: string; position: string }[];
  useTools: string[];
  coments: {
    profile: string;
    userName: string;
    coment: string;
    date: string;
  }[];
  badge_premium: boolean;
  badge_type: string;
  badge_pick: boolean;
}

export const MOCK_PORTFOLIO_DETAIL: MOCK_PORTFOLIO_DETAIL_Types[] = [
  {
    id: "1",
    contents: "porfolioContents_1",
    title: "하나부터 열까지 관리하자! - 헬스 케어 서비스 할수있당",
    description:
      "할수있당은 직관적이고 사용자 친화적인 UI를 통해 쉬운 혈당 기록과 시각적 분석을 제공합니다. 개인 맞춤형 리마인더와 의료 전문가와의 연결 기능으로 사용자들은 더 나은 건강 습관을 형성할 수 있습니다. 시각적 효과와 사용의 간편성을 강조하여 사용자 경험을 최적화하였습니다.",
    like: "1.1k",
    view: "1.1k",
    date: "2024.01.12",
    users: [
      {
        profile: "profile_16",
        userName: "민들레",
        position: "디자인",
      },
      {
        profile: "profile_1",
        userName: "남윤아",
        position: "디자인",
      },
      {
        profile: "profile_3",
        userName: "권다인",
        position: "개발",
      },
    ],
    useTools: ["figmaIcon", "photoshopIcon", "illustratorIcon"],
    coments: [
      {
        profile: "profile_1",
        userName: "디자인 스튜디오 연",
        coment: "정말 멋진 작품이네요.",
        date: "19분 전",
      },
      {
        profile: "profile_1",
        userName: "김양현",
        coment: "우와 대단하시네요!!",
        date: "4시간 전",
      },
      {
        profile: "profile_1",
        userName: "손시아",
        coment: "깔끔하고 좋네요.",
        date: "2024.01.12",
      },
    ],
    badge_premium: true,
    badge_type: "UI/UX",
    badge_pick: true,
  },
];
