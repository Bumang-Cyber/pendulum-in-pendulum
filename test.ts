type Type1 = "a" | "b";
type Type2 = "c" | "d";

type Type3 = Type1 & Type2;

let typed3: Type3;

type type4 = "a" | "b";
type type5 = "b" | "c";

type type6 = type4 & type5;

const typed6: type6 = "b";
console.log(typed6);

type PositionX = { x: number; z: number };
type PositionY = { y: number; z: string };
type PositionXY = PositionX & PositionY;

// const PositionXY: PositionXY = { x: 1, y: 1};

type Combined1 = { x: 1; y: 1 };
type Combined2 = number;
type Combined3 = Combined1 & Combined2;

type prim1 = number;
type prim2 = string;
type prim3 = prim1 & prim2;

// interface InterA {
//   x: number;
//   z: string;
// }

// interface InterB {
//   z: number;
//   u: number;
// }

// type InterC = InterA & InterB;

// const interC: InterC = {
//   x: 1,
//   y: 2,
//   z: 3,
//   u: 4,
// };

interface Objs {
  id: string;
}

const idObject: Objs = {
  id: "string",
};

const constant = {
  idKey: "id",
};

// 결과는?
console.log(idObject[constant["idKey"]]);

const colors = {
  red: "red",
  green: "green",
  blue: "blue",
} as const;

type ColorType = typeof colors;
type ColorKeys = keyof typeof colors; // "red" | "green" | "blue"
type ColorValues = (typeof colors)[ColorKeys]; // "red" | "green" | "blue"
type ColorValues2 = (typeof colors)[keyof typeof colors]; // "red" | "green" | "blue"

const a = [1, 2, 3, "1", "2", "3", true];
type aType = typeof a;
const b: [number, number][] = [
  [1, 2],
  [2, 3],
  [3, 4],
];
type bType = typeof b;
