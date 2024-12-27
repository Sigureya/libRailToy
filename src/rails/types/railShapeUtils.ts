import { RailConstants } from "./constatantsClass";
import { RailShape, StraightRailUnit } from "./shepe";
import { normalizedStraightVector, scale } from "./vector4";

export const curveRadis = (
  constants: RailConstants,
  shape: RailShape
): number => {
  return (
    constants.INNER_CIRCLE_RADIUS +
    constants.GAUGE_HALF +
    shape.stationOffset * constants.STATION_WIDTH +
    shape.trackOffset * constants.TRACK_WIDTH
  );
};

export const straightVector = (shape: RailShape, angle = 0) => {
  const normal = normalizedStraightVector(shape.arc + angle);
  return scale(normal.STRAIGHT, shape.straightLength);
};
/**
 * @description レールの直線部分の長さを求める。
 */
const straightRailLength = (
  shape: RailShape,
  constants: RailConstants,
  unit: StraightRailUnit
) => {
  shape.straightLength;
};
