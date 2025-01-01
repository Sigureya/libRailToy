import type { RailConstants } from "./constants";
import type { RailShape } from "./railShape";

export const areVaildShape = (unit: RailConstants, shape: RailShape) => {
  return Math.abs(shape.arc) < unit.CURVE_ARC_COUNT;
};
