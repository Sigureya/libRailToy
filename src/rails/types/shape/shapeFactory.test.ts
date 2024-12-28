import { describe, expect, test } from "vitest";
import { MockCurve, MockShapeFactory, MockStraight } from "./mock";
describe("レール製造テスト", () => {
  test("直線", () => {
    expect(MockShapeFactory.straight()).toEqual(MockStraight);
  });
  test("曲線", () => {
    expect(MockShapeFactory.curve(1)).toEqual(MockCurve);
  });
});
