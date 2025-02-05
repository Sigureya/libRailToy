import type {
  DirectionalUnitVectors,
  RailVector4,
  UnitRailVector4,
} from "./types/";
import { CyclicArray } from "./types/";
import { accmulateVector, add, zeroVector } from "./utils";

import {
  VECTOR_ANGLE_0,
  VECTOR_ANGLE_1,
  VECTOR_ANGLE_2,
  VECTOR_ANGLE_3,
  VECTOR_ANGLE_4,
  VECTOR_ANGLE_5,
  VECTOR_ANGLE_6,
  VECTOR_ANGLE_7,
} from "./types/identityConstants";

export type VectorTable<Vec> = CyclicArray<
  [Vec, Vec, Vec, Vec, Vec, Vec, Vec, Vec]
>;
export type UnitVectorTable = VectorTable<UnitRailVector4>;

export const createIdentiyVectorTable = (): UnitVectorTable => {
  return new CyclicArray([
    VECTOR_ANGLE_0,
    VECTOR_ANGLE_1,
    VECTOR_ANGLE_2,
    VECTOR_ANGLE_3,
    VECTOR_ANGLE_4,
    VECTOR_ANGLE_5,
    VECTOR_ANGLE_6,
    VECTOR_ANGLE_7,
  ] as const);
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
  table: UnitVectorTable,
  angle: number
): DirectionalUnitVectors => {
  return {
    forward: table.at(angle),
    back: table.at(angle + 4),
    left: table.at(angle - 2),
    right: table.at(angle + 2),
  };
};

export const createAngleTableFromUnits = (
  table: UnitVectorTable
): CyclicArray<TableEntry> => {
  return table.map((vec, index, array) => {
    const straightDirection = createDirections(array, index);
    const curve = createSinCosTable(straightDirection);
    return {
      STRAIGHT: straightDirection,
      CURVE: curve,
    } as const;
  });
};

export interface TableEntry {
  STRAIGHT: DirectionalUnitVectors;
  CURVE: CyclicArray<RailVector4>;
}
export const createAngleTable = () => {
  const units = createIdentiyVectorTable();
  return createAngleTableFromUnits(units);
};

export const createCurveVectorTable = (
  list: CyclicArray<UnitRailVector4>,
  begin: number
) => {
  return list.reduce<RailVector4[]>(
    begin,
    (result, vec) => {
      const last = getLast(result);
      result.push(add(last, vec));
      return result;
    },
    []
  );
};
export const getLast = (list: ReadonlyArray<RailVector4>) => {
  if (list.length > 0) {
    return list[list.length - 1];
  }
  return zeroVector();
};
