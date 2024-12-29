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

export interface UnitRailVector4 {
  readonly a: -1 | 0 | 1;
  readonly b: -1 | 0 | 1;
  readonly c: -1 | 0 | 1;
  readonly d: -1 | 0 | 1;
}

export interface GGG {
  forward: UnitRailVector4;
  right: UnitRailVector4;
  back: UnitRailVector4;
  left: UnitRailVector4;
}
