import { test, expect, describe } from "vitest";
import { sameAngle } from "./complateLayout2";
import { SIMULATOR_RAIL_CONSTANTS } from "./shape";
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
