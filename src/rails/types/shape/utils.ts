import type { RailConstants } from "./constants";
import type { RailShape } from "./railShape";
/**
 * @description 直線部分の長さを返す。ただし高低差は無視する。
 * @param shape
 * @returns
 */
export const straightLength = (shape: RailShape) => {
  return shape.straightLength;
};

// const curveRadius = (shape: RailShape,) => {
//         return shape.radis +
// }

// export const curveLength = (shape: RailShape, unit: RailConstants) => {
//   return (shape.curveRate * 2 * shape.arc * Math.PI) / unit.CURVE_ARC_COUNT;
// };

export const arcFlipedShape = (shape: RailShape): RailShape => ({
  ...shape,
  arc: -shape.arc,
});
