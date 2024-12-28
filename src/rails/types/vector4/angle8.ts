import type { RailVector4 } from "./railVector4";
import { add, subtract } from "./utils";

interface Pair {
  readonly STRAIGHT: Readonly<RailVector4>;
  readonly CURVE: Readonly<RailVector4>;
}

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

// ここに回転行列テーブル必要では？
/**
 * @description 専用角度テーブル
 */
const VECTOR_ANGLE_TABLE: ReadonlyArray<Pair> = [
  { STRAIGHT: VECTOR_ANGLE_0, CURVE: add(VECTOR_ANGLE_0, VECTOR_ANGLE_2) }, // 真上
  { STRAIGHT: VECTOR_ANGLE_1, CURVE: add(VECTOR_ANGLE_1, VECTOR_ANGLE_3) }, // 右上
  { STRAIGHT: VECTOR_ANGLE_2, CURVE: add(VECTOR_ANGLE_2, VECTOR_ANGLE_4) }, // 右
  { STRAIGHT: VECTOR_ANGLE_3, CURVE: add(VECTOR_ANGLE_3, VECTOR_ANGLE_5) }, // 右下
  { STRAIGHT: VECTOR_ANGLE_4, CURVE: add(VECTOR_ANGLE_4, VECTOR_ANGLE_6) }, // 真下
  { STRAIGHT: VECTOR_ANGLE_5, CURVE: add(VECTOR_ANGLE_5, VECTOR_ANGLE_7) }, // 左下
  { STRAIGHT: VECTOR_ANGLE_6, CURVE: add(VECTOR_ANGLE_6, VECTOR_ANGLE_0) }, // 左
  { STRAIGHT: VECTOR_ANGLE_7, CURVE: add(VECTOR_ANGLE_7, VECTOR_ANGLE_1) }, // 左上
] as const;

/**
 * @description 専用角度に基づく単位ベクトルを取得
 * @param angle 専用角度 (0~8)
 * @returns 単位ベクトルペア
 */
export const normalizedStraightVector = (angle: number) => {
  const length = VECTOR_ANGLE_TABLE.length;
  const result = angle % length;
  const index = result < 0 ? result + length : result;
  return VECTOR_ANGLE_TABLE[index];
};

/**
 * @description 曲線移動を計算
 * @param angleStart 開始角度
 * @param angleEnd 終了角度
 * @returns 曲線移動のベクトル
 */
export const calculateCurveVector = (
  angleStart: number
): Readonly<RailVector4> => {
  return normalizedStraightVector(angleStart).CURVE;
};

// angleが負の値なら、逆ベクトルにしておきたい
// 方法を検討する
// 三項演算子しかなさそう
// 戻り値がreadonlyだと面倒なので、毎回作るか？
// 多用される関数だろうから、生成回数を減らす
// テーブル引きだけ・ちゃんと作成の2種類を用意するか
// ベクトルの配置方法を考えた方がいい。
// 相当面倒になっている
// 0→1の意味を考えよう
