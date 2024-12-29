import { test, expect, describe } from "vitest";
import type { RailShape } from "./shape";
import { ShapeFactory } from "./shape";
import { accmulateVector, areCompletedCircle } from "./complateLayout";
import { same, zeroVector } from "./vector4";

const factory = new ShapeFactory();
const curve = factory.curve(1);
const reverseCurve = factory.curve(-1);
const straight = factory.straight();

const fillRail = (shape: RailShape, num: number): ReadonlyArray<RailShape> => {
  return (new Array(num) as RailShape[]).fill(shape);
};

test("補助関数は正しいか？", () => {
  const layout = fillRail(curve, 8);
  expect(layout.length).toBe(8);
});

// describe("曲線レイアウトのベクトル", () => {
//   test("基本の曲線が正しく判定できるか?", () => {
//     const circle = fillRail(curve, 8);
//     const vec = accmulateVector(circle);
//     expect(vec).toEqual(zeroVector());
//   });
//   test("逆向きの曲線を正しく判定できるか？", () => {
//     const circle = fillRail(reverseCurve, 8);
//     const vec = accmulateVector(circle);
//     expect(vec).toEqual(zeroVector());
//   });
// });
