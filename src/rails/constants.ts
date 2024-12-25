import { RailShape } from "./railShape";
// 直線レール
export const RAIL_SHAPE_STRAIGHT: RailShape = {
  input: {
    angle: 0,
    jointType: -1,
    stationOffset: 0,
    trackOffset: 0,
  },
  output: {
    angle: 0,
    jointType: 1,
    stationOffset: 0,
    trackOffset: 0,
  },
  vector: {
    x: 100,
    y: 0,
  },
};
// S字レール
export const RAIL_SHAPE_S_SHAPED: RailShape = {
  input: {
    angle: 0,
    jointType: -1,
    stationOffset: 0,
    trackOffset: 0,
  },
  output: {
    angle: 0,
    jointType: 1,
    stationOffset: 0,
    trackOffset: 1,
  },
  vector: {
    x: 100,
    y: 0,
  },
};

// 曲線レール
export const RAIL_SHAPE_CURVE: RailShape = {
  input: {
    angle: 0,
    jointType: -1,
    stationOffset: 0,
    trackOffset: 0,
  },
  output: {
    angle: 45,
    jointType: 1,
    stationOffset: 0,
    trackOffset: 0,
  },
  vector: {
    x: 50,
    y: 50,
  },
};
