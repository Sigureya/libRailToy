import type { UnitRailVector4 } from "../railVector4";

type Vec4 = UnitRailVector4;
export const VECTOR_ANGLE_0: Readonly<Vec4> = { a: 1, b: 0, c: 0, d: 0 }; // 真上
export const VECTOR_ANGLE_1: Readonly<Vec4> = { a: 0, b: 1, c: 0, d: 0 }; // 右上
export const VECTOR_ANGLE_2: Readonly<Vec4> = { a: 0, b: 0, c: 1, d: 0 }; // 右
export const VECTOR_ANGLE_3: Readonly<Vec4> = { a: 0, b: 0, c: 0, d: 1 }; // 右下
export const VECTOR_ANGLE_4: Readonly<Vec4> = { a: -1, b: 0, c: 0, d: 0 }; // 真下
export const VECTOR_ANGLE_5: Readonly<Vec4> = { a: 0, b: -1, c: 0, d: 0 }; // 左下
export const VECTOR_ANGLE_6: Readonly<Vec4> = { a: 0, b: 0, c: -1, d: 0 }; // 左
export const VECTOR_ANGLE_7: Readonly<Vec4> = { a: 0, b: 0, c: 0, d: -1 }; // 左上
