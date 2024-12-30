import { accmulateVector } from "./accumlateVector";
import type { RailConstants, RailShape } from "./shape";
import { same, ZERO_VECTOR } from "./vector4";

export const sameAngle = (
  unit: RailConstants,
  inputAngle: number,
  outputAngle: number
) => {
  return (
    inputAngle % unit.CURVE_ARC_COUNT === outputAngle % unit.CURVE_ARC_COUNT
  );
};

export const areCompleteLayout = (
  unit: RailConstants,
  shapes: ReadonlyArray<Readonly<RailShape>>,
  angle = 0
) => {
  const transform = accmulateVector(shapes, angle);
  return (
    same(transform.movement, ZERO_VECTOR) &&
    sameAngle(unit, angle, transform.angle)
  );
};
