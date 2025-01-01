import { describe, expect, test } from "vitest";
import { ShapeFactory } from "./shape";
import { vectorFromRailShape } from "./vectorFromShape";
import {
  accmulateVector,
  add,
  reverse,
  scale,
  ZERO_VECTOR,
  zeroVector,
} from "./vector4";
import {
  MockCurve0,
  MockCurve45,
  MockCurve45reverse,
  MockCurve90,
  MockCurve90reverse,
  MockStraight,
  MockStraightLong,
} from "./shape/mockShape";
const factory = new ShapeFactory();
const vectorCurve45 = vectorFromRailShape(MockCurve45);
const vectorCurve90 = vectorFromRailShape(MockCurve90);
const vectorCurve45reverse = vectorFromRailShape(MockCurve45reverse);

const vectorStraight = vectorFromRailShape(MockStraight);
const vectorStraightHalf = vectorFromRailShape(factory.straightHalf());
describe("shapeのテスト", () => {
  test("ゼロベクトルとの関係が正しいか?", () => {
    const vectorCurve0 = vectorFromRailShape(MockCurve0);
    expect(vectorCurve0).toEqual(zeroVector());
    expect(vectorCurve45).not.toEqual(zeroVector());
    expect(vectorCurve90).not.toEqual(zeroVector());
    expect(vectorCurve45reverse).not.toEqual(zeroVector());
  });

  test("単純曲線の計算結果が一致するか？", () => {
    expect(vectorCurve45);
  });

  //   test("曲線レールの足し算", () => {
  //     expect(add(vectorCurve45, vectorCurve45)).toEqual(vectorCurve90);
  //     expect(scale(vectorCurve45, 2)).toEqual(vectorCurve90);
  //   });
  test("直線レイアウトのベクトル", () => {
    expect(add(vectorStraightHalf, vectorStraightHalf)).toEqual(vectorStraight);
  });
  //   test("線路の定理各種は正しく機能するか？", () => {
  //     // 八の字の定理
  //     expect(accmulateVector([vectorStraight, vectorStraight])).toEqual(
  //       vectorFromRailShape(factory.curve(4))
  //     );
  //   });
});

describe("曲線レール同士の相殺", () => {
  //  1/2直線も試すこと
  test("曲線の相殺", () => {
    // ベクトルが一致するわけがない。
    // 横軸を基準に反転しているから、
    expect(
      add(
        vectorFromRailShape(MockCurve45, 0),
        vectorFromRailShape(MockCurve45reverse, 0)
      )
    ).not.toEqual(zeroVector());
    expect(
      add(
        vectorFromRailShape(MockCurve45, 0),
        vectorFromRailShape(MockCurve45, 0)
      )
    ).not.toEqual(zeroVector());
    // expect(
    //   add(
    //     vectorFromRailShape(MockCurve90, 0),
    //     vectorFromRailShape(MockCurve90reverse, 0)
    //   )
    // ).not.toEqual(zeroVector());
  });
});
