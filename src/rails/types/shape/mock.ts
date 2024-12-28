import type { RailShape } from "./railShape";
import { ShapeFactory } from "./shapeFactory";
export const MockShapeFactory = new ShapeFactory();
export const MockStraight: Readonly<RailShape> = {
  arc: 0,
  height: 0,
  radis: 0,
  stationOffset: 0,
  straightLength: 12,
  trackOffset: 0,
};
