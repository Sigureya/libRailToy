import { describe, expect, test } from "vitest";
import { MockShapeFactory, MockStraight } from "./mock";
describe("レール製造テスト", () => {
  test("直線", () => {
    expect(MockShapeFactory.straight()).toEqual(MockStraight);
  });
});
