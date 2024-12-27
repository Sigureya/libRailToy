import type { RailJoint } from "./joint";
import type { RailShape } from "./shape";

export interface RailSegment {
  name: string;
  id: number;
  joint: RailJoint;
  shape: RailShape;
}
