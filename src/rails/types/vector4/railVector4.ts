export interface RailVector4 {
  /**
   * @description 0x,+y
   */
  a: number;
  /**
   * @description +x,+y
   */
  b: number;
  /**
   * @description +x,0y
   */
  c: number;
  /**
   * @description +x,-0
   */
  d: number;
}

/**
 * @description 基準ベクトル。おおむね単位ベクトル。
 */
export interface UnitRailVector4 {
  readonly a: -1 | 0 | 1;
  readonly b: -1 | 0 | 1;
  readonly c: -1 | 0 | 1;
  readonly d: -1 | 0 | 1;
}
/**
 * @description 特定の向きを基準にした、前後左右のベクトル。
 */
export interface DirectionVectors {
  forward: UnitRailVector4;
  right: UnitRailVector4;
  back: UnitRailVector4;
  left: UnitRailVector4;
}
