import { test, expect, describe } from "vitest";
import { accmulateVector, nextPosition } from "./accumlateVector";
import {
  MockCurve45,
  MockCurve90,
  MockCurve90reverse,
  MockStraight,
} from "./shape/mock";
import { vectorFromRailShape } from "./vectorFromShape";
import { ZERO_VECTOR, zeroVector } from "./vector4";

const angles = [
  -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 259, 235, 353,
] as const;
describe("nextPositonの結果は正しいか？", () => {
  test("", () => {
    const angle = 2;
    expect(ZERO_VECTOR).toEqual(zeroVector());
    const next1 = nextPosition({ angle, movement: ZERO_VECTOR }, MockStraight);
    // 間違えて書き変わってないか判定
    expect(ZERO_VECTOR).toEqual(zeroVector());
    expect(next1).toEqual(accmulateVector([MockStraight], angle));
  });
});

describe("単一要素でのテスト", () => {
  test("直線", () => {
    angles.forEach((angle) => {
      const result = accmulateVector([MockStraight], angle);
      expect(result.angle).toBe(angle + MockStraight.arc);
      // expect(result.movement).toEqual(vectorFromRailShape(MockStraight));
    });
  });
  test("曲線ベクトルが回転しても動くか？", () => {
    for (let index = -12; index < 18; index++) {
      const result = accmulateVector([MockCurve90], index);
      expect(result.angle).toBe(index + MockCurve90.arc);
      expect(result.movement).toEqual(vectorFromRailShape(MockCurve90, index));
    }
  });
  test("複数の曲線をつなげても動くか", () => {
    const result = accmulateVector([
      MockCurve90,
      MockCurve90,
      MockCurve90,
      MockCurve90,
    ]);
    expect(result.angle % 8).toBe(0);
    expect(result.movement).toEqual(zeroVector());
  });
});
// test("曲線と直線の混合", () => {
//   const straight = accmulateVector([
//     MockStraight,
//     MockStraight,
//     MockStraight,
//     MockStraight,
//   ]);
//   const curve = accmulateVector([
//     MockCurve90,
//     MockCurve90reverse,
//     MockCurve90reverse,
//     MockCurve90,
//   ]);
//   expect(straight.angle).toEqual(curve.angle);
//   expect(straight.movement).toEqual(curve.movement);
// });
