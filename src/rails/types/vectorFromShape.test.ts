import { describe, expect, test } from "vitest";
import { ShapeFactory } from "./shape";
import { vectorFromRailShape } from "./vectorFromShape";
import { add, scale, zeroVector } from "./vector4";

describe("shapeのテスト", () => {
  const factory = new ShapeFactory();

  const vectorCurve0 = vectorFromRailShape(factory.curve(0));
  const vectorCurve45 = vectorFromRailShape(factory.curve(1));
  const vectorCurve90 = vectorFromRailShape(factory.curve(2));

  test("0度の曲線はゼロベクトルか?", () => {
    expect(vectorCurve0).toEqual(zeroVector());
  });

  test("曲線レールの足し算", () => {
    expect(add(vectorCurve45, vectorCurve45)).toEqual(vectorCurve90);
    expect(scale(vectorCurve45, 2)).toEqual(vectorCurve90);
  });
});
