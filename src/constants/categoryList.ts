import { categoryListType } from "../types/filterMenuTypes";

export const categoryList: categoryListType[] = [
  {
    name: "기획",
    uri: "plan",
    items: [
      "기획 전체",
      "서비스 기획",
      "광고 기획",
      "마케팅 기획",
      "홍보 기획",
    ],
  },
  {
    name: "디자인",
    uri: "design",
    items: [
      "디자인 전체",
      "UI/UX",
      "캐릭터 디자인",
      "그래픽 디자인",
      "영상/모션그래픽",
      "제품/패키지 디자인",
      "브랜딩/편집",
      "디지털 아트",
      "타이포그래피",
    ],
  },
  {
    name: "창작",
    uri: "creation",
    items: ["창작 전체", "일러스트레이션", "포토그래피", "공예", "파인아트"],
  },
];
