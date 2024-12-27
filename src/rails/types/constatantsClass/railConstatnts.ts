/**
 * @description レール定数。プラレール規格を基準にしている。単位は全てcm
 */
export interface RailConstants {
  /**
   * @description 標準の直線レールの長さ。プラレール規格では21.4cm。単位レール12本に相当する。
   */
  STRAIGHT_FULL: number;
  /**
   * @description 1/2直線レールの長さ。他のレールもそうだが、入力補完で表示されやすいように名称をSTRAIGHT_(長さ)で統一している。
   */
  STRAIGHT_HALF: number;
  /**
   * @description 1/4直線レールの長さ。
   */
  STRAIGHT_QUARTER: number;
  /**
   * @description 1/6直線レールの長さ。
   */
  STRAIGHT_SIXTH: number;
  /**
   * @description 最小の単位レール（STRAIGHT_SIXTHの1/2）。
   */
  STRAIGHT_UNIT: number;
  /**
   * @description 軌間。プラレール規格であれば3.8cm (1.5インチ)。
   */
  GAUGE: number;
  /**
   * @description 軌間の半分。レールは中心を基準としており、接線を求める場合に必要。
   */
  GAUGE_HALF: number;
  /**
   * @description 内側曲線の外周と外側曲線の内周の間にある幅。プラレール規格では6cm。
   */
  INNER_OUTER_WIDTH: number;
  /**
   * @description 複線幅で内周から外周へ移動した場合の平行移動量。INNER_OUTER_WIDTH + GAUGEと等しい。
   */
  TRACK_WIDTH: number;
  /**
   * @description 駅のホームの幅。プラレール規格では11cmであり、界隈では「駅幅」と呼称されるため、この名前にした。
   */
  STATION_WIDTH: number;
  /**
   * @description 内側曲線の内円の直径。プラレール規格では39cm。
   */
  INNER_CIRCLE_DIAMETER: number;

  /**
   * @description 内側曲線の内円の半径。プラレール規格では19.5cm。
   */
  INNER_CIRCLE_RADIUS: number;
  /**
   * @description 坂・段差の最少変化単位。プラレールならばミニブロック橋脚1個分が基準。
   */
  UNIT_HEIGHT: number;
  /**
   * @description 列車が通過可能な最小高さ。プラレールならミニブロック橋脚4個分に等しい。
   */
  TRAIN_PASSAGE_HEIGHT: number;
}
