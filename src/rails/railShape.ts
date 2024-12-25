import { RailJoint } from "./joint";

export interface RailShape {
  vector: { x: number; y: number }; // 始点から終点までの移動量。

  input: RailJoint;
  output: RailJoint;
}
