import { RailJoint } from "./joint";
import { RailShape } from "./shepe/railShape";

export interface RailSegment {
  name: string;
  id: number;
  joint: RailJoint;
  shape: RailShape;
}
