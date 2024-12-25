import { RailJoint } from "./joint";

export interface RailShape {
  vector: { x: number; y: number; z: number }; // 始点から終点までの移動量。

  input: RailJoint;
  output: RailJoint;
  //おそらく曲率の情報が必要。内側曲線レールと外側曲線レールを統一的に扱う時に必要になる
}
