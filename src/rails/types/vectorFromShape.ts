import { ANGLE_TABLE } from "./classConstants";
import type { RailShape } from "./shape";
import type { RailVector4 } from "./vector4";
import { add, scale } from "./vector4";

/**
 * @description レールの直線部分の形状を取得する
 * @param shape レールの形状
 * @param starAngle 開始地点の角度
 * @returns
 */
export const straightVector = (
  shape: RailShape,
  starAngle = 0
): RailVector4 => {
  // 曲線側を除算する代わりに直線を2倍にする
  return scale(ANGLE_TABLE.straight(starAngle), shape.straightLength * 2);
};

/**
 * @description 形状から曲線部分の移動量をベクトルで取得する
 * @param shape レールの形状
 * @param startAngle 開始地点の角度
 * @returns
 */
export const curveVector = (shape: RailShape, startAngle = 0): RailVector4 => {
  const begin = ANGLE_TABLE.straight(startAngle);
  const end = ANGLE_TABLE.straight(startAngle + shape.arc);
  const acm = add(begin, end);
  return scale(acm, shape.curveLength * Math.abs(shape.arc));
};
/**
 * @description レールの移動量をベクトルで取得する
 * @param shape レールの形状
 * @param startAngle 開始地点の角度
 * @returns
 */
export const vectorFromRailShape = (
  shape: RailShape,
  startAngle = 0
): RailVector4 => {
  return add(straightVector(shape, startAngle), curveVector(shape, startAngle));
};
