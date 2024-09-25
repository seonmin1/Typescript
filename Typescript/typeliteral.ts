type angryDepth = 1 | 2 | 3 | 4 | 5;
const d1: angryDepth = 5;

type jobType = "전사" | "마법사" | "궁수" | "도적";
const d2: { id: string; level: number; job: jobType } = {
  id: "지존법사령이",
  level: 155,
  job: "도적",
};
type Hamburger =
  | "불고기버거"
  | "새우버거"
  | "치즈버거사주세요"
  | "빅맥"
  | "상하이버거";
type Side = "감자튀김" | "치즈스틱" | "콘솔로우" | "해쉬브라운";
type Drinks = "콜라" | "환타" | "제로콜라" | "물";
type SetMenu = { main: string; side: string; drinks: string };

const myMacdonald: SetMenu = {
  main: "빅맥",
  side: "감자튀김",
  drinks: "제로 스프라이트",
};

// type subway=빵, 메인, 치즈, 야채, 소스1, 소스2

type bread = "플랫" | "화이트" | "허니오트";
type main = "쉬림프" | "폴드포크" | "머쉬룸";
type cheese = "아메리칸" | "슈레드" | "모짜렐라";
type vegitable = "피망" | "양파" | "오이" | "피클";
type source = "스위트칠리" | "핫칠리" | "스위트어니언" | "소금" | "후추";
type subwayMenu = {
  bread: bread;
  main: main;
  cheese: cheese;
  vegitable: vegitable[];
  source: source[];
};

const mySubway: subwayMenu = {
  bread: "플랫",
  main: "쉬림프",
  cheese: "모짜렐라",
  vegitable: ["양파", "오이", "피망", "피클"],
  source: ["스위트어니언", "스위트칠리"],
};
