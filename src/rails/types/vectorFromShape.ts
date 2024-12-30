import { ANGLE_TABLE } from "./classConstants";
import type { RailShape } from "./shape";
import type { RailVector4 } from "./vector4";
import {
  add,
  calculateCurveVector,
  normalizedStraightVector,
  scale,
  zeroVector,
} from "./vector4";

// とりあえず直線成分だけ取得してみる
export const straightVector = (shape: RailShape, angle = 0): RailVector4 => {
  return scale(ANGLE_TABLE.straight(angle), shape.straightLength);
};

export const curveVector = (shape: RailShape, angle = 0) => {
  const n = ANGLE_TABLE.curve(angle, shape.arc);
  return scale(n, shape.curveLength * shape.arc);
};
export const vectorFromRailShape = (shape: RailShape, angle = 0) =>
  add(straightVector(shape, angle), curveVector(shape, angle));
// railShape[]=>railNodeが必要
// まず表向きのレールだけ考える

// ベクトルを合成する必要があるので、 ループで対処する。
// そしてループ処理は重たいので、テーブルで持つ
// テスト用にテーブル実装を並行して用意する
