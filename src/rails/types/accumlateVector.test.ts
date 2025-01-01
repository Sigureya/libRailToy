import { test, expect, describe } from "vitest";
import { accmulateVector, mapVector, nextPosition } from "./accumlateVector";
import {
  MockCurve45,
  MockCurve90,
  MockCurve90reverse,
  MockStraight,
  MockStraightLong,
} from "./shape/mockShape";
import { vectorFromRailShape } from "./vectorFromShape";
import type { RailTransform, RailVector4 } from "./vector4";
import { ZERO_VECTOR, zeroVector } from "./vector4";
import { MockLayoutCircle90x4, MockLayoutStraight3 } from "./shape/mockLayout";
import { flat } from "./vector4/railTransfrom";

const angles = [
  -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 259, 235, 353,
] as const;
describe("nextPositonの結果は正しいか？", () => {
  test("直線レールの加算", () => {
    const angle = 2;
    expect(ZERO_VECTOR).toEqual(zeroVector());
    const next1 = nextPosition({ angle, movement: ZERO_VECTOR }, MockStraight);
    // 間違えて書き変わってないか判定
    expect(ZERO_VECTOR).toEqual(zeroVector());
    expect(next1).toEqual(accmulateVector([MockStraight], angle));
    const next2 = nextPosition(next1, MockStraight);
    expect(next2.movement).toEqual(
      vectorFromRailShape(MockStraightLong, angle)
    );
  });
});
describe("座標への変換の確認", () => {
  test("直線", () => {
    const positions = mapVector(MockLayoutStraight3);
    expect(positions.length).toBe(MockLayoutStraight3.length);
    expect(positions.every((t) => t.angle === 0)).toBe(true);
    const expectedPositions: RailVector4[] = [
      { a: 24, b: 0, c: 0, d: 0 },
      { a: 48, b: 0, c: 0, d: 0 },
      { a: 72, b: 0, c: 0, d: 0 },
    ];
    expect(positions.map((t) => t.movement)).toEqual(expectedPositions);
  });
  test("直線・90度カーブ・直線", () => {
    const positions = mapVector([MockStraight, MockCurve90, MockStraight]);
    expect(positions.length).toBe(3);
    console.table(positions.map(flat));
    const expectedPositions: RailTransform[] = [
      { movement: { a: 24, b: 0, c: 0, d: 0 }, angle: 0 },
      { movement: { a: 48, b: 0, c: 24, d: 0 }, angle: 2 },
      { movement: { a: 48, b: 0, c: 48, d: 0 }, angle: 2 },
    ];
    expect(positions).toEqual(expectedPositions);
  });
  test("直線・-90度カーブ・直線", () => {
    const positions = mapVector([
      MockStraight,
      MockCurve90reverse,
      MockStraight,
    ]);
    expect(positions.length).toBe(3);
    const expectedPositions: RailTransform[] = [
      { angle: 0, movement: { a: 24, b: 0, c: 0, d: 0 } },
      { angle: -2, movement: { a: 48, b: 0, c: -24, d: 0 } },
      { angle: -2, movement: { a: 48, b: 0, c: -48, d: 0 } },
    ];
    console.table(positions.map(flat));
    expect(positions).toEqual(expectedPositions);
  });
});
// describe("座標への変換", () => {});

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
    const result = accmulateVector(MockLayoutCircle90x4);
    expect(result.angle % 8).toBe(0);
    expect(result.movement).toEqual(zeroVector());
  });
});
test("曲線と直線の混合", () => {
  const straight = accmulateVector([
    MockStraight,
    MockStraight,
    MockStraight,
    MockStraight,
  ]);
  const curve = accmulateVector([
    MockCurve90,
    MockCurve90reverse,
    MockCurve90reverse,
    MockCurve90,
  ]);
  expect(straight.angle).toEqual(curve.angle);
  expect(straight.movement).toEqual(curve.movement);
});
