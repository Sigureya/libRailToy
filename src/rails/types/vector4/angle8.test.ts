import { expect, describe, it } from "vitest";
import { calculateCurveVector, normalizedStraightVector } from "./angle8";
import { RailVector4 } from "./railVector4";

describe("RailVector calculations", () => {
  it("should return correct normalized straight vector for angle 0", () => {
    const result = normalizedStraightVector(0);
    expect(result).toEqual({
      STRAIGHT: { a: 1, b: 0, c: 0, d: 0 },
      CURVE: { a: 2, b: 0, c: 0, d: 0 },
    });
  });

  it("should return correct normalized straight vector for angle 7", () => {
    const result = normalizedStraightVector(7);
    expect(result).toEqual({
      STRAIGHT: { a: 0, b: 0, c: 0, d: -1 },
      CURVE: { a: 0, b: 0, c: 0, d: -2 },
    });
  });

  it("should correctly calculate curve vector between two angles", () => {
    const startAngle = 0;
    const endAngle = 1;
    const result: RailVector4 = calculateCurveVector(startAngle, endAngle);
    expect(result).toEqual({ a: 2, b: 2, c: 0, d: 0 });
  });

  it("should handle angles greater than 7 by modulo operation", () => {
    const angle = 15; // equivalent to angle 7
    const result = normalizedStraightVector(angle);
    expect(result).toEqual({
      STRAIGHT: { a: 0, b: 0, c: 0, d: -1 },
      CURVE: { a: 0, b: 0, c: 0, d: -2 },
    });
  });
});
