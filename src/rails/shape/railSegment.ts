import { RailJoint } from "./joint";
import { RailShape } from "./railShape";

export interface RailSegment {
  name: string;
  id: number;
  joint: RailJoint;
  shape: RailShape;
}
