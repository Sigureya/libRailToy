import { joint, minus, plus } from "./joint/create";
import { RailShape } from "./railShape";

const BASE_SIZE = 25;

export const straight = (baseSize = BASE_SIZE): RailShape => ({
  input: minus(),
  output: plus(),
  vector: { x: baseSize * 4, y: 0 },
});

export const curve = (baseSize = BASE_SIZE): RailShape => ({
  input: minus(),
  output: joint({ jointType: 1, angle: 45 }),
  vector: { x: baseSize * 4, y: 0 },
});
const quarterPlusPlus = () => {};
// export const shapedS = (): RailShape => {

// };
/**
 * @description レール計算を単純化するための長さ0のレール。始点で使う
 */
export const zeroKiroPost = (): RailShape => ({
  input: minus(),
  output: plus(),
  vector: { x: 0, y: 0 },
});
