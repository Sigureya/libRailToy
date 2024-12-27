/**
 * @description レールの形状
 */
export interface RailShape {
  /**
   * @description  円弧の長さ。0の場合それは曲線成分を持たない。値1に付き45度であり、計算の際はarc % 8してテーブル引きする。
   */
  arc: number;

  /**
   * @description 半径。言い換えると曲率であり、数値が大きいほど緩やかなカーブになる。
   */
  radis: number;
  /**
   * @description  直線部分の長さ。0の場合それは直線成分を持たない。arcと組み合わせて極座標へ変換して扱う。
   */
  straightLength: number;
  /**
   * @description 駅幅の移動セット。別途駅幅定数があり、仮に11cmとする。
   */
  stationOffset: number;
  /**
   * @description 複線幅の移動セット。1に付き9.8cm移動する。(9.8=軌間+複線間隔。軌間は3.8cm)
   */
  trackOffset: number;
  /**
   * @description 高さの移動セット。負の値なら下り坂。1に付きミニブロック橋脚1個分移動する。
   */
  height: number;
}

export type RailPolarCoordinate = Pick<RailShape, "arc" | "straightLength">;
export type RailOffset = Pick<
  RailShape,
  "stationOffset" | "trackOffset" | "height"
>;
