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
  a: -1 | 0 | 1;
  b: -1 | 0 | 1;
  c: -1 | 0 | 1;
  d: -1 | 0 | 1;
}
