import type { RailShape } from "./shape";
import type { RailVector4 } from "./vector4";
import { add, normalizedStraightVector, scale, zeroVector } from "./vector4";

// とりあえず直線成分だけ取得してみる
export const straightVector = (shape: RailShape): RailVector4 => {
  const normalVector = normalizedStraightVector(shape.arc);
  return scale(normalVector.STRAIGHT, shape.straightLength);
};

export const curveVector = (shape: RailShape) => {
  const normalVector = normalizedStraightVector(shape.arc);
  return scale(normalVector.CURVE, shape.radis);
};
export const vectorFromRailShape = (shape: RailShape) =>
  add(straightVector(shape), curveVector(shape));
// railShape[]=>railNodeが必要
// まず表向きのレールだけ考える
