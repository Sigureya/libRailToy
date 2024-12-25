export interface RailJoint {
  // 接合点の向き（度単位）。
  // レール接合の整合性チェックに使用。
  // Milli-degree(0〜360000)なので注意
  angle: number;

  /**
   * @description 接合の形状。1: 凸, -1: 凹, 0xe331: 接続不能。
   */
  jointType: -1 | 1 | 0xe331;
  /**
   * @description 複線幅のオフセット。同じ値の時に接続できる。オフセット1は60cm
   */
  trackOffset: number;

  /**
   * @description 駅幅のオフセット。同じ値の時に接続できる。オフセット1は未計測
   */
  stationOffset: number;
}
