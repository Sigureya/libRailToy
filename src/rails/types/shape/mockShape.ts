import type { RailShape } from "./railShape";
import { ShapeFactory } from "./shapeFactory";
export const MockShapeFactory = new ShapeFactory();
export const MockStraight: Readonly<RailShape> = {
  arc: 0,
  height: 0,
  curveLength: 0,
  stationOffset: 0,
  straightLength: 12,
  trackOffset: 0,
};
export const MockStraightLong: Readonly<RailShape> = {
  arc: 0,
  height: 0,
  curveLength: 0,
  stationOffset: 0,
  straightLength: 24,
  trackOffset: 0,
};
export const MockCurve0: Readonly<RailShape> = {
  arc: 0,
  height: 0,
  curveLength: 12,
  stationOffset: 0,
  straightLength: 0,
  trackOffset: 0,
};

export const MockCurve45: Readonly<RailShape> = {
  arc: 1,
  height: 0,
  curveLength: 12,
  stationOffset: 0,
  straightLength: 0,
  trackOffset: 0,
};
export const MockCurve45reverse: Readonly<RailShape> = {
  arc: -1,
  height: 0,
  curveLength: 12,
  stationOffset: 0,
  straightLength: 0,
  trackOffset: 0,
};
export const MockCurve90: Readonly<RailShape> = {
  arc: 2,
  height: 0,
  curveLength: 12,
  stationOffset: 0,
  straightLength: 0,
  trackOffset: 0,
};
export const MockCurve90reverse: Readonly<RailShape> = {
  arc: -2,
  height: 0,
  curveLength: 12,
  stationOffset: 0,
  straightLength: 0,
  trackOffset: 0,
};
