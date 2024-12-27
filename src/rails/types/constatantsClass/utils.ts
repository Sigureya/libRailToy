import { RailConstants } from "./railConstatnts";

/**
 * @description プラレール規格に基づく初期値を返す関数。
 */
export const getDefaultRailConstants = (): RailConstants => ({
  STRAIGHT_FULL: 21.4, // cm
  STRAIGHT_HALF: 10.7, // cm
  STRAIGHT_QUARTER: 5.35, // cm
  STRAIGHT_SIXTH: 3.57, // cm (1/6 = 21.4 / 6)
  STRAIGHT_UNIT: 1.785, // cm (1/12 = 21.4 / 12)
  GAUGE: 3.8, // cm
  GAUGE_HALF: 1.9, // cm
  INNER_OUTER_WIDTH: 6.0, // cm
  TRACK_WIDTH: 9.8, // cm (INNER_OUTER_WIDTH + GAUGE)
  STATION_WIDTH: 11.0, // cm
  INNER_CIRCLE_DIAMETER: 39.0, // cm
  INNER_CIRCLE_RADIUS: 19.5, // cm (INNER_CIRCLE_DIAMETER / 2)
  UNIT_HEIGHT: 3.5, // cm (ミニブロック橋脚1個分)
  TRAIN_PASSAGE_HEIGHT: 14.0, // cm (ミニブロック橋脚4個分)
});
export class RailConstantsClass {
  STRAIGHT_FULL = 21.4; // cm
  STRAIGHT_HALF = this.STRAIGHT_FULL / 2;
  STRAIGHT_QUARTER = this.STRAIGHT_FULL / 4;
  STRAIGHT_SIXTH = this.STRAIGHT_FULL / 6;
  STRAIGHT_UNIT = this.STRAIGHT_FULL / 12;
  GAUGE = 3.8; // cm
  GAUGE_HALF = this.GAUGE / 2;
  INNER_OUTER_WIDTH = 6.0; // cm
  TRACK_WIDTH = this.INNER_OUTER_WIDTH + this.GAUGE;
  STATION_WIDTH = 11.0; // cm
  INNER_CIRCLE_DIAMETER = 39.0; // cm
  INNER_CIRCLE_RADIUS = this.INNER_CIRCLE_DIAMETER / 2;
  UNIT_HEIGHT = 3.5; // cm
  TRAIN_PASSAGE_HEIGHT = this.UNIT_HEIGHT * 4; // cm
}
