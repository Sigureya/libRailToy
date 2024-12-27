export interface RailConstants {
  /**
   * @description 軌間
   */
  GAUGE: number;
  /**
   * @description 曲線半径
   */
  CURVE_RADIUS: number; // 曲線半径
  /**
   * @description 直線の長さ
   */
  STRAIGHT_LENGTH: number; // 直線の長さ
  /**
   * @description 1/2レールの長さ
   */
  HALF_STRAIGHT_LENGTH: number; // 1/2レールの長さ
  /**
   * @description 1/4レールの長さ
   */
  QUARTER_STRAIGHT_LENGTH: number;
  /**
   * @description 1/6レールの長さ
   */
  SIXTH_STRAIGHT_LENGTH: number;
  /**
   * @description ミニブロック橋脚の高さ
   */
  MINI_BLOCK_PILLAR_HEIGHT: number;
  /**
   * @description 車両が通行できる高さ
   */
  PASSAGE_HEIGHT: number;
  /**
   * @description 複線レールの間隔
   */
  DOUBLE_TRACK_SPACING: number;
  /**
   * @description 駅幅の間隔
   */
  STATION_SPACING: number; // 駅幅の間隔
  /**
   * @description 一周の角度
   */
  ACTUAL_CIRCLE_DEGREES: number;
  /**
   * @description 一周の曲線レール数
   */
  CURVE_ARC_COUNT: number;
}
