const a = "아메리카노";
const a1 = "라떼";

// 타입 어노테이션
// string으로 문자화시켰기 때문에 숫자 1만 오면 오류남
const a2: string = "1";
const a3: boolean = !!"";
const a4: number[] = [1, 2, 3, 4, 5];
const a5: {
  name: string;
  isAlive: boolean;
  price: number;
}[] = [
  { name: "엄준식", isAlive: true, price: 2000 },
  { name: "엄준식", isAlive: true, price: 2000 },
];

// age,isMan,nation
const a6: {
  age: number;
  isMan: boolean;
  nation: string;
}[] = [{ age: 20, isMan: true, nation: "korea" }];
