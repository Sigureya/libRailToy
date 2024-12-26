import { RailShape } from "./railShape";

/**
 * @description 0ベクトル。移動量0のレール。
 * @returns
 */
export const zeorShape = (): RailShape => ({
  arc: 0,
  height: 0,
  stationOffset: 0,
  straightLength: 0,
  trackOffset: 0,
});

export const createShape = (shape: Partial<RailShape>): RailShape => ({
  ...zeorShape(),
  ...shape,
});

/**
 * @param arc 時計回りなら正の値。1あたり45度として扱われる。
 * @param height 高さ。1に付きミニブロック橋脚1個分として扱う。
 * @returns
 */
export const curve = (arc: number, height = 0): RailShape =>
  createShape({ arc, height });

export const straight = (length: number, height = 0): RailShape =>
  createShape({ straightLength: length, height });
