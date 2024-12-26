// Vitest Test Code
import { describe, it, expect } from "vitest";
import { RailVector4 } from "./railVector4";
import { add, subtract, scale, dotProduct, magnitude } from "./utils";

describe("RailVector4 operations", () => {
  const v1: RailVector4 = { a: 1, b: 2, c: 3, d: 4 };
  const v2: RailVector4 = { a: 4, b: 3, c: 2, d: 1 };

  it("should add two RailVector4 objects correctly", () => {
    const result = add(v1, v2);
    expect(result).toEqual({ a: 5, b: 5, c: 5, d: 5 });
  });

  it("should subtract two RailVector4 objects correctly", () => {
    const result = subtract(v1, v2);
    expect(result).toEqual({ a: -3, b: -1, c: 1, d: 3 });
  });

  it("should scale a RailVector4 correctly", () => {
    const result = scale(v1, 2);
    expect(result).toEqual({ a: 2, b: 4, c: 6, d: 8 });
  });

  it("should compute the dot product of two RailVector4 objects correctly", () => {
    const result = dotProduct(v1, v2);
    expect(result).toBe(20); // 1*4 + 2*3 + 3*2 + 4*1
  });

  it("should compute the magnitude of a RailVector4 correctly", () => {
    const result = magnitude(v1);
    expect(result).toBeCloseTo(5.477, 3); // sqrt(1^2 + 2^2 + 3^2 + 4^2)
  });
});
