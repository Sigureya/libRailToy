import type { RailConstants } from "./constants";
import type { RailShape } from "./railShape";
const convertUnitValue = (
  value: number,
  constantKey: keyof RailConstants,
  sourceUnits: RailConstants,
  targetUnits: RailConstants
): number => {
  return (value * targetUnits[constantKey]) / sourceUnits[constantKey];
};
/**
 * @description 単位系を変換する。source->targetの方向で変換を行う。
 * @param sourceShape
 * @param sourceUnits
 * @param targetUnits
 * @returns
 */
export const convertRailShapeUnits = (
  sourceShape: RailShape,
  sourceUnits: RailConstants,
  targetUnits: RailConstants
): RailShape => ({
  straightLength: convertUnitValue(
    sourceShape.straightLength,
    "STRAIGHT_LENGTH",
    sourceUnits,
    targetUnits
  ),
  radis: convertUnitValue(
    sourceShape.radis,
    "STRAIGHT_LENGTH",
    sourceUnits,
    targetUnits
  ),
  arc: convertUnitValue(
    sourceShape.arc,
    "CURVE_ARC_COUNT",
    sourceUnits,
    targetUnits
  ),
  height: convertUnitValue(
    sourceShape.height,
    "MINI_BLOCK_PILLAR_HEIGHT",
    sourceUnits,
    targetUnits
  ),
  stationOffset: convertUnitValue(
    sourceShape.stationOffset,
    "STATION_SPACING",
    sourceUnits,
    targetUnits
  ),
  trackOffset: convertUnitValue(
    sourceShape.trackOffset,
    "DOUBLE_TRACK_SPACING",
    sourceUnits,
    targetUnits
  ),
});
