import type { RailConstants, RailShape } from "./shape";
import type { RailVector4 } from "./vector4";
import { add, same, zeroVector } from "./vector4";
import { vectorFromRailShape } from "./vectorFromShape";

export const accmulateVector = (shapes: ReadonlyArray<RailShape>) => {
  return shapes.reduce<RailVector4>(
    (vector, shape) => add(vector, vectorFromRailShape(shape)),
    zeroVector()
  );
};

export const areCompletedCircle = (shape: RailShape[], unit: RailConstants) => {
  const arc = shape.reduce<number>((value, s) => value + s.arc, 0);
  return (
    Math.abs(arc) >= unit.ACTUAL_CIRCLE_DEGREES &&
    0 === (arc + unit.ACTUAL_CIRCLE_DEGREES) % unit.ACTUAL_CIRCLE_DEGREES
  );
};
export const areComplatedLayout = (
  shapes: RailShape[],
  unit: RailConstants
) => {
  // 円を構成できるか？
  if (!areCompletedCircle(shapes, unit)) {
    return false;
  }
  const railVector = accmulateVector(shapes);
  return same(railVector, zeroVector());
};