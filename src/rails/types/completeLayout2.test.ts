import { test, expect, describe } from "vitest";
import { areCompleteLayout, sameAngle } from "./completeLayout2";
import { SIMULATOR_RAIL_CONSTANTS } from "./shape";
import { MockCurve90, MockCurve90reverse, MockStraight } from "./shape/mock";
describe("sameAngle", () => {
  test("角度が異なる場合を正しく判定できるか？", () => {
    expect(sameAngle(SIMULATOR_RAIL_CONSTANTS, 4, 9)).toBe(false);
    expect(sameAngle(SIMULATOR_RAIL_CONSTANTS, 1, -1)).toBe(false);
  });
  test("角度が同じ場合を正しく判定できるか？", () => {
    for (let angle = -12; angle < 12; angle++) {
      expect(sameAngle(SIMULATOR_RAIL_CONSTANTS, angle, angle)).toBe(true);
    }
    expect(sameAngle(SIMULATOR_RAIL_CONSTANTS, 0, 8)).toBe(true);
    expect(sameAngle(SIMULATOR_RAIL_CONSTANTS, -4, -4)).toBe(true);
  });
});

// 完全レイアウトとは一周できるレイアウトである
describe("不完全レイアウトを判定できるか？", () => {
  test("曲線レール", () => {
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, [
        MockCurve90,
        MockCurve90,
        MockCurve90,
      ])
    ).toBe(false);
  });
  test("直線レールだけ", () => {
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, [
        MockStraight,
        MockStraight,
        MockStraight,
      ])
    ).toBe(false);
  });
});
describe("完全レイアウトを判定できるか？", () => {
  test("曲線レール", () => {
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, [
        MockCurve90,
        MockCurve90,
        MockCurve90,
        MockCurve90,
      ])
    ).toBe(true);
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, [
        MockCurve90,
        MockCurve90,
        MockCurve90,
        MockCurve90reverse,
      ])
    ).toBe(false);
  });
});
