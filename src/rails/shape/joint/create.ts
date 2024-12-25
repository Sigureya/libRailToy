import { RailJoint } from "./railJoint";

export const joint = (
  jointArg: Partial<RailJoint> & { jointType: RailJoint["jointType"] }
): RailJoint => ({
  angle: 0,
  stationOffset: 0,
  trackOffset: 0,
  ...jointArg,
});

export const plus = (): RailJoint => ({
  angle: 0,
  jointType: 1,
  stationOffset: 0,
  trackOffset: 0,
});
export const minus = (): RailJoint => ({
  angle: 0,
  jointType: -1,
  stationOffset: 0,
  trackOffset: 0,
});
