import { JOINT_BASIC_MINUS, JOINT_BASIC_PLUS } from "./constants";

export interface RailJoint {
  /**
   * @description 凹のレール接合部。基本は負の値だが、凸凸を作りたいなら両方を正の値にする必要がある。
   */
  input: number;
  /**
   * @description 凸のレール接合部。基本は正の値だが、凹凹を作りたいなら両方を負の値にする必要がある。
   */
  output: number;
}
/**
 * @description レールの凹凸が接続可能か判定する。数値は形状を表し、対となる形状のみが接続可能。
 * @param jointA
 * @param jointB
 * @returns
 */
export const canJointConect = (jointA: RailJoint, jointB: RailJoint) => {
  return jointA.input - jointB.input === 0;
};

export const joint: (jointArg: Partial<RailJoint>) => RailJoint = (
  jointArg
) => ({
  input: JOINT_BASIC_MINUS, // -1
  output: JOINT_BASIC_PLUS, // +1
  ...jointArg,
});
