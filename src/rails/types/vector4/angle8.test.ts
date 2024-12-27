import { expect, describe, it, test } from "vitest";
import { calculateCurveVector, normalizedStraightVector } from "./angle8";
import { RailVector4 } from "./railVector4";

describe("0", () => {
  test("0", () => {
    const up = normalizedStraightVector(0);
    expect<RailVector4>({ a: 1, b: 0, c: 0, d: 0 }).toEqual(up.STRAIGHT);
  });
});
describe("常に有効な値を取れるか", () => {
  test("", () => {
    for (let index = 0; index < 100; index++) {
      expect(normalizedStraightVector(index)).not.toBeUndefined();
      expect(normalizedStraightVector(-index)).not.toBeUndefined();
    }
  });
});
