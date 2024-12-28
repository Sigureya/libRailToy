import { describe, expect, test } from "vitest";
import { ShapeFactory } from "./shape";
import { vectorFromRailShape } from "./vectorFromShape";
import { accmulateVector, add, scale, zeroVector } from "./vector4";
describe("shapeのテスト", () => {
  const factory = new ShapeFactory();

  const vectorCurve45 = vectorFromRailShape(factory.curve(1));
  const vectorCurve90 = vectorFromRailShape(factory.curve(2));
  const vectorCurve45reverse = vectorFromRailShape(factory.curve(-1));

  const vectorStraight = vectorFromRailShape(factory.straight());
  const vectorStraightHalf = vectorFromRailShape(factory.straightHalf());

  test("ゼロベクトルとの関係が正しいか?", () => {
    const vectorCurve0 = vectorFromRailShape(factory.curve(0));
    expect(vectorCurve0).toEqual(zeroVector());
    expect(vectorCurve45).not.toEqual(zeroVector());
    expect(vectorCurve90).not.toEqual(zeroVector());
    expect(vectorCurve45reverse).not.toEqual(zeroVector());
  });

  //   test("単純曲線の計算結果が一致するか？", () => {
  //     expect(vectorCurve45)
  //   });

  test("曲線レールの足し算", () => {
    expect(add(vectorCurve45, vectorCurve45)).toEqual(vectorCurve90);
    expect(scale(vectorCurve45, 2)).toEqual(vectorCurve90);
  });
  test("直線レイアウトのベクトル", () => {
    expect(add(vectorStraightHalf, vectorStraightHalf)).toEqual(vectorStraight);
  });
  test("線路の定理各種は正しく機能するか？", () => {
    // 八の字の定理
    expect(accmulateVector([vectorStraight, vectorStraight])).toEqual(
      vectorFromRailShape(factory.curve(4))
    );
  });
});
