import { describe, expect, test } from "vitest";
import {
  MockCurve45,
  MockCurve90,
  MockShapeFactory,
  MockStraight,
} from "./mock";
describe("レール製造テスト", () => {
  test("直線", () => {
    expect(MockShapeFactory.straight()).toEqual(MockStraight);
  });
  test("曲線", () => {
    expect(MockShapeFactory.curve(1)).toEqual(MockCurve45);
    expect(MockShapeFactory.curve(2)).toEqual(MockCurve90);
  });
});
