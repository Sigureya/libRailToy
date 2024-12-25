import { RailJoint } from "./railJoint";

/**
 * 正規化された角度を計算します。
 * 角度を0〜360000 (1周=360度×1000) の範囲に収めます。
 *
 * @param angle - 正規化する角度（milli-degree単位）。
 * @returns 0〜360000の範囲に収まる角度。
 */
export const normalizeAngle = (angle: number): number => {
  return angle % 360000;
};

/**
 * 2つのRailJointの向きが一致するかを判定します。
 * 向きが一致する条件は、(jointA.angle + jointB.angle) % 360000 === 0 です。
 *
 * @param jointA - 判定する最初のRailJoint。
 * @param jointB - 判定する2つ目のRailJoint。
 * @returns 向きが一致する場合はtrue、それ以外はfalse。
 */
export const areAnglesCompatible = (
  jointA: RailJoint,
  jointB: RailJoint
): boolean => {
  return normalizeAngle(jointA.angle + jointB.angle) === 0;
};

/**
 * 2つのRailJointの凸凹が一致するかを判定します。
 * 凸凹が一致する条件は、jointA.jointType + jointB.jointType === 0 です。
 *
 * @param jointA - 判定する最初のRailJoint。
 * @param jointB - 判定する2つ目のRailJoint。
 * @returns 凸凹が一致する場合はtrue、それ以外はfalse。
 */
export const areJointTypesCompatible = (
  jointA: RailJoint,
  jointB: RailJoint
): boolean => {
  return jointA.jointType + jointB.jointType === 0;
};

/**
 * 2つのRailJointの複線幅が一致するかを判定します。
 * 複線幅が一致する条件は、jointA.trackOffset === jointB.trackOffset です。
 *
 * @param jointA - 判定する最初のRailJoint。
 * @param jointB - 判定する2つ目のRailJoint。
 * @returns 複線幅が一致する場合はtrue、それ以外はfalse。
 */
export const areTrackOffsetsCompatible = (
  jointA: RailJoint,
  jointB: RailJoint
): boolean => {
  return jointA.trackOffset === jointB.trackOffset;
};

/**
 * 2つのRailJointの駅幅が一致するかを判定します。
 * 駅幅が一致する条件は、jointA.stationOffset === jointB.stationOffset です。
 *
 * @param jointA - 判定する最初のRailJoint。
 * @param jointB - 判定する2つ目のRailJoint。
 * @returns 駅幅が一致する場合はtrue、それ以外はfalse。
 */
export const areStationOffsetsCompatible = (
  jointA: RailJoint,
  jointB: RailJoint
): boolean => {
  return jointA.stationOffset === jointB.stationOffset;
};

/**
 * 2つのRailJointが接続可能かを判定します。
 * 接続可能な条件は以下の4つを全て満たすことです：
 * 1. 向きが一致していること。
 * 2. 凸凹が一致していること。
 * 3. 複線幅が一致していること。
 * 4. 駅幅が一致していること。
 *
 * @param jointA - 判定する最初のRailJoint。
 * @param jointB - 判定する2つ目のRailJoint。
 * @returns 接続可能な場合はtrue、それ以外はfalse。
 */
export const canConnect = (jointA: RailJoint, jointB: RailJoint): boolean => {
  return (
    areTrackOffsetsCompatible(jointA, jointB) &&
    areStationOffsetsCompatible(jointA, jointB) &&
    areJointTypesCompatible(jointA, jointB) &&
    areAnglesCompatible(jointA, jointB)
  );
};
