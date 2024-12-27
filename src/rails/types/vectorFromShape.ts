import { type RailShape } from "./shape";
import {
  normalizedStraightVector,
  RailVector4,
  scale,
  zeroVector,
} from "./vector4";

// とりあえず直線成分だけ取得してみる
export const vectorFromShape = (shape: RailShape) => {
  const normalVector = normalizedStraightVector(shape.arc);

  scale(normalVector.STRAIGHT, shape.straightLength);
};
