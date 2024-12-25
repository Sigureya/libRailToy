import { RailJoint } from "./railJoint";

export const joint = (
  jointArg: Partial<RailJoint> & { jointType: RailJoint["jointType"] }
): RailJoint => ({
  angle: 0,
  stationOffset: 0,
  trackOffset: 0,
  height: 0,
  ...jointArg,
});

export const plus = (): RailJoint => joint({ jointType: 1 });
export const minus = (): RailJoint => joint({ jointType: -1 });
