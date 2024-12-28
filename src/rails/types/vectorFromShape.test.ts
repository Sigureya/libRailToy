import { describe, expect, test } from "vitest";
import { ShapeFactory } from "./shape";

describe("shapeのテスト", () => {
  const factory = new ShapeFactory();
  const mockCurve = factory.curve(1);
  test("", () => {
    expect(true).toBeTruthy();
  });
});
