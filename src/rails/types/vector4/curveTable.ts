import type { CyclicArray, RailVector4, UnitRailVector4 } from "./types";
import { add, zeroVector } from "./utils";

export const getLast = (list: ReadonlyArray<RailVector4>) => {
  if (list.length > 0) {
    return list[list.length - 1];
  }
  return zeroVector();
};

export const createCurveVectorTable = (
  list: ReadonlyArray<UnitRailVector4>
): RailVector4[] => {
  return list.reduce<RailVector4[]>((result, vec) => {
    const last = getLast(result);
    result.push(add(last, vec));
    return result;
  }, []);
};
