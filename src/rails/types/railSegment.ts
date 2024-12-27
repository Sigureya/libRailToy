import { RailJoint } from "./joint";
import { RailShape } from "./shape";

export interface RailSegment {
  name: string;
  id: number;
  joint: RailJoint;
  shape: RailShape;
}
