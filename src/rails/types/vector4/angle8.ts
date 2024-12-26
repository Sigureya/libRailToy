import { RailVector4 } from "./railVector4";
import { add } from "./utils";

/**
 * @description 直線と曲線のベクトルをペアとして生成する
 */
const createRailVectorPair = (
  straight: Readonly<RailVector4>,
  curve: Readonly<RailVector4>
): {
  readonly STRAIGHT: Readonly<RailVector4>;
  readonly CURVE: Readonly<RailVector4>;
} =>
  ({
    STRAIGHT: straight,
    CURVE: add(curve, curve),
  } as const);

/**
 * @description 8方向の専用角度を定義
 */
const VECTOR_ANGLE_0: Readonly<RailVector4> = { a: 1, b: 0, c: 0, d: 0 }; // 真上
const VECTOR_ANGLE_1: Readonly<RailVector4> = { a: 0, b: 1, c: 0, d: 0 }; // 右上
const VECTOR_ANGLE_2: Readonly<RailVector4> = { a: 0, b: 0, c: 1, d: 0 }; // 右
const VECTOR_ANGLE_3: Readonly<RailVector4> = { a: 0, b: 0, c: 0, d: 1 }; // 右下
const VECTOR_ANGLE_4: Readonly<RailVector4> = { a: -1, b: 0, c: 0, d: 0 }; // 真下
const VECTOR_ANGLE_5: Readonly<RailVector4> = { a: 0, b: -1, c: 0, d: 0 }; // 左下
const VECTOR_ANGLE_6: Readonly<RailVector4> = { a: 0, b: 0, c: -1, d: 0 }; // 左
const VECTOR_ANGLE_7: Readonly<RailVector4> = { a: 0, b: 0, c: 0, d: -1 }; // 左上

/**
 * @description 専用角度テーブル
 */
const VECTOR_ANGLE_TABLE = [
  createRailVectorPair(VECTOR_ANGLE_0, VECTOR_ANGLE_0), // 真上
  createRailVectorPair(VECTOR_ANGLE_1, VECTOR_ANGLE_1), // 右上
  createRailVectorPair(VECTOR_ANGLE_2, VECTOR_ANGLE_2), // 右
  createRailVectorPair(VECTOR_ANGLE_3, VECTOR_ANGLE_3), // 右下
  createRailVectorPair(VECTOR_ANGLE_4, VECTOR_ANGLE_4), // 真下
  createRailVectorPair(VECTOR_ANGLE_5, VECTOR_ANGLE_5), // 左下
  createRailVectorPair(VECTOR_ANGLE_6, VECTOR_ANGLE_6), // 左
  createRailVectorPair(VECTOR_ANGLE_7, VECTOR_ANGLE_7), // 左上
] as const;

/**
 * @description 専用角度に基づく単位ベクトルを取得
 * @param angle 専用角度 (0~8)
 * @returns 単位ベクトルペア
 */
export const normalizedStraightVector = (angle: number) =>
  VECTOR_ANGLE_TABLE[angle % 8];

/**
 * @description 曲線移動を計算
 * @param angleStart 開始角度
 * @param angleEnd 終了角度
 * @returns 曲線移動のベクトル
 */
export const calculateCurveVector = (
  angleStart: number,
  angleEnd: number
): Readonly<RailVector4> => {
  const startVector = normalizedStraightVector(angleStart).CURVE;
  const endVector = normalizedStraightVector(angleEnd).CURVE;
  return add(startVector, endVector);
};
