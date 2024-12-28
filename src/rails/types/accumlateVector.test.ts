import { test, expect, describe } from "vitest";
import { accmulateVector3 } from "./accumlateVector";
import { MockCurve45, MockCurve90, MockStraight } from "./shape/mock";
import { vectorFromRailShape } from "./vectorFromShape";

const angles = [
  -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 259, 235, 353,
] as const;
describe("単一要素でのテスト", () => {
  test("直線", () => {
    angles.forEach((angle) => {
      const result = accmulateVector3([MockStraight], angle);
      expect(result.angle).toBe(angle + MockStraight.arc);
      expect(result.movement).toEqual(vectorFromRailShape(MockStraight));
    });
  });
  test("曲線", () => {
    angles.forEach((angle) => {
      const result = accmulateVector3([MockCurve90], angle);
      expect(result.angle).toBe(angle + MockCurve90.arc);
      expect(result.movement).toEqual(vectorFromRailShape(MockCurve90));
    });
    angles.forEach((angle) => {
      const result = accmulateVector3([MockCurve45], angle);
      expect(result.angle).toBe(angle + MockCurve45.arc);
      expect(result.movement).toEqual(vectorFromRailShape(MockCurve45));
    });
  });
});
