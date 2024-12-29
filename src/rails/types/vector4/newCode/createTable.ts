import type { DirectionalUnitVectors, UnitRailVector4 } from "../railVector4";
import { accmulateVector } from "../utils";

import { CyclicArray } from "./cyclicArray";
import {
  VECTOR_ANGLE_0,
  VECTOR_ANGLE_1,
  VECTOR_ANGLE_2,
  VECTOR_ANGLE_3,
  VECTOR_ANGLE_4,
  VECTOR_ANGLE_5,
  VECTOR_ANGLE_6,
  VECTOR_ANGLE_7,
} from "./identityConstants";

type VectorTable = CyclicArray<
  [
    UnitRailVector4,
    UnitRailVector4,
    UnitRailVector4,
    UnitRailVector4,
    UnitRailVector4,
    UnitRailVector4,
    UnitRailVector4,
    UnitRailVector4
  ]
>;
export const createIdentiyVectorTable = (): VectorTable => {
  return new CyclicArray([
    VECTOR_ANGLE_0,
    VECTOR_ANGLE_1,
    VECTOR_ANGLE_2,
    VECTOR_ANGLE_3,
    VECTOR_ANGLE_4,
    VECTOR_ANGLE_5,
    VECTOR_ANGLE_6,
    VECTOR_ANGLE_7,
  ]);
};

/**
 * @description 単位ベクトル4つを引数に、ベクトルを合成してテーブルを返す
 * @returns
 */
export const createSinCosTable = (arg: DirectionalUnitVectors) => {
  return new CyclicArray([
    accmulateVector([arg.forward, arg.right]),
    accmulateVector([arg.forward, arg.forward, arg.right, arg.right]),
    accmulateVector([arg.right, arg.back]),
    accmulateVector([arg.right, arg.right, arg.back, arg.back]),
    accmulateVector([arg.back, arg.left]),
    accmulateVector([arg.back, arg.back, arg.left, arg.left]),
    accmulateVector([arg.left, arg.forward]),
    accmulateVector([arg.left, arg.left, arg.forward, arg.forward]),
  ] as const);
};

export const createDirections = (
  table: VectorTable,
  angle: number
): DirectionalUnitVectors => {
  return {
    forward: table.at(angle),
    back: table.at(angle + 4),
    left: table.at(angle - 2),
    right: table.at(angle + 2),
  };
};
