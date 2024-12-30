import { expect, describe, test } from "vitest";
import { calculateCurveVector, normalizedStraightVector } from "./angle8";
import type { RailVector4 } from "./railVector4";
import { add } from "./utils";
import { MockAngles } from "./mock";

// describe("0", () => {
//   test("0", () => {
//     const up = normalizedStraightVector(0);
//     expect<RailVector4>({ a: 1, b: 0, c: 0, d: 0 }).toEqual(up.STRAIGHT);
//   });
// });
// describe("曲線用の単位ベクトルが正しく合成できているか？", () => {
//   test.each(MockAngles)(`angle:%i`, (angle) => {
//     const up = normalizedStraightVector(angle);
//     const right = normalizedStraightVector(angle + 2);
//     expect(add(up.STRAIGHT, right.STRAIGHT)).toEqual(
//       normalizedStraightVector(angle).CURVE
//     );
//   });
// });
// describe("常に有効な値を取れるか", () => {
//   test("", () => {
//     for (let index = 0; index < 100; index++) {
//       expect(normalizedStraightVector(index)).not.toBeUndefined();
//       expect(normalizedStraightVector(-index)).not.toBeUndefined();
//     }
//   });
// });
