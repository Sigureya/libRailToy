import { test, expect, describe } from "vitest";
import { areCompleteLayout, sameAngle } from "./completeLayout";
import type { RailShape } from "./shape";
import { SIMULATOR_RAIL_CONSTANTS } from "./shape";
import {
  MockCurve45,
  MockCurve90,
  MockCurve90reverse,
  MockStraight,
} from "./shape/mockShape";
import { accmulateVector } from "./accumlateVector";
import { ZERO_VECTOR } from "./vector4";
import {
  MockLayoutCircle270,
  MockLayoutCircle90x4,
  MockLayoutCircle360MixA,
  MockLayoutStraight3,
} from "./shape/mockLayout";
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

// 完全レイアウトとは一周できるレイアウトである
describe("不完全レイアウトを判定できるか？", () => {
  test("曲線レール", () => {
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, MockLayoutCircle270)
    ).toBe(false);
  });
  test("直線レールだけ", () => {
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, MockLayoutStraight3)
    ).toBe(false);
  });
});
describe("完全レイアウトを判定できるか？", () => {
  test("90度曲線レール", () => {
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, MockLayoutCircle90x4)
    ).toBe(true);
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, [
        MockCurve90,
        MockCurve90,
        MockCurve90,
        MockCurve90reverse,
      ])
    ).toBe(false);
  });
  // test("90と45の混合円", () => {
  //   const layout1 = [
  //     MockCurve90,
  //     MockCurve90,
  //     MockCurve45,
  //     MockCurve45,
  //     MockCurve45,
  //     MockCurve45,
  //   ];

  //   expect(areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, layout1)).toBe(true);
  //   // expect(
  //   //   areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, MockLayoutCircle360MixA)
  //   // ).toBe(true);
  //   const layout2 = [
  //     MockCurve45,
  //     MockCurve45,
  //     MockCurve90,
  //     MockCurve90,
  //     MockCurve45,
  //     MockCurve45,
  //   ];

  //   expect(areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, layout2)).toBe(true);
  // });
  test("内回りの曲線レール", () => {
    const layout = [
      MockCurve90reverse,
      MockCurve90reverse,
      MockCurve90reverse,
      MockCurve90reverse,
    ];
    expect(areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, layout)).toBe(true);
  });
});

describe("直線と曲線によるレイアウトを完全判定できるか？", () => {
  test("オーバル。曲線の中に合計2本の直線があるレイアウト", () => {
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, [
        MockCurve90,
        MockCurve90,
        MockStraight,
        MockCurve90,
        MockCurve90,
        MockStraight,
      ])
    ).toBe(true);
    expect(
      areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, [
        MockCurve90,
        MockCurve90,
        MockCurve90,
        MockStraight,
        MockCurve90,
        MockStraight,
      ])
    ).toBe(false);
  });
});
// describe("", () => {
//   test("八の字の定理応用。", () => {
//     const layout: RailShape[] = [
//       MockCurve90,
//       MockCurve90reverse,
//       MockCurve90reverse,
//       MockCurve90,
//       MockCurve90reverse,
//       MockCurve90reverse,
//       MockStraight,
//       MockStraight,
//       MockStraight,
//       MockStraight,
//       MockCurve90reverse,
//       MockCurve90reverse,
//     ];
//     const acm = accmulateVector(layout);

//     expect(sameAngle(SIMULATOR_RAIL_CONSTANTS, acm.angle, 0)).toBe(true);
//     expect(acm.movement).toEqual(ZERO_VECTOR);
//     expect(areCompleteLayout(SIMULATOR_RAIL_CONSTANTS, layout)).toBe(true);
//   });
// });
