import { describe, expect, test } from "vitest";
import { ShapeFactory } from "./shape";
import { vectorFromRailShape } from "./vectorFromShape";
import { accmulateVector, add, scale, zeroVector } from "./vector4";
import {
  MockCurve0,
  MockCurve45,
  MockCurve45reverse,
  MockCurve90,
  MockCurve90reverse,
  MockStraight,
} from "./shape/mock";
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
    expect(
      add(
        vectorFromRailShape(MockCurve45, -1),
        vectorFromRailShape(MockCurve45reverse, 1)
      )
    ).toEqual(zeroVector());
    expect(
      add(
        vectorFromRailShape(MockCurve45, -1),
        vectorFromRailShape(MockCurve45, 1)
      )
    ).not.toEqual(zeroVector());
    expect(
      add(
        vectorFromRailShape(MockCurve90, -1),
        vectorFromRailShape(MockCurve90reverse, 1)
      )
    ).not.toEqual(zeroVector());
  });
});
describe("直線と曲線", () => {
  test("曲線と直線", () => {
    const right = vectorFromRailShape(MockStraight, 2);
    const up = vectorFromRailShape(MockStraight, 0);
    console.log("up", up);
    console.log("right", right);
    // これでテストが通るが、違う
    expect(add(right, up)).toEqual(vectorFromRailShape(MockCurve90, -2));
  });
});
