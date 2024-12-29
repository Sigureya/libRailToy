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
  const normalVector = normalizedStraightVector(angle);
  return scale(normalVector.STRAIGHT, shape.straightLength);
};

export const curveVector = (shape: RailShape, angle = 0) => {
  const normalVector = calculateCurveVector(angle + shape.arc);
  return scale(normalVector, shape.curveLength * shape.arc);
};
export const vectorFromRailShape = (shape: RailShape, angle = 0) =>
  add(straightVector(shape, angle), curveVector(shape, angle));
// railShape[]=>railNodeが必要
// まず表向きのレールだけ考える
