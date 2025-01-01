import { describe, expect, test } from "vitest";
import {
  MockCurve45,
  MockCurve90,
  MockShapeFactory,
  MockStraight,
} from "./mockShape";
describe("レール製造テスト", () => {
  test("直線", () => {
    expect(MockShapeFactory.straight()).toEqual(MockStraight);
  });
  test("曲線", () => {
    expect(MockShapeFactory.curve(1)).toEqual(MockCurve45);
    expect(MockShapeFactory.curve(2)).toEqual(MockCurve90);
  });
});
describe("単位系が一致するか？", () => {
  test("曲線半径と直線の長さは一致する", () => {
    const curve = MockShapeFactory.curve(1);
    const straight = MockShapeFactory.straight();
    expect(curve.curveLength).toEqual(straight.straightLength);
  });
  test("直線の単位系が一致する", () => {
    const half = MockShapeFactory.straightHalf();
    const straight = MockShapeFactory.straight();
    const quarter = MockShapeFactory.straightQuarter();
    expect(half.straightLength * 2).toBe(straight.straightLength);
    expect(quarter.straightLength * 4).toBe(straight.straightLength);
    expect(quarter.straightLength * 2).toBe(half.straightLength);
  });
});
