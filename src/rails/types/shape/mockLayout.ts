import {
  MockCurve45,
  MockCurve90,
  MockCurve90reverse,
  MockStraight,
} from "./mockShape";

export const MockLayoutStraight3 = [
  MockStraight,
  MockStraight,
  MockStraight,
] as const;

export const MockLayoutCircle270 = [
  MockCurve90,
  MockCurve90,
  MockCurve90,
] as const;

export const MockLayoutCircle360MixA = [
  MockCurve90,
  MockCurve45,
  MockCurve45,
  MockCurve90,
  MockCurve45,
  MockCurve45,
] as const;
export const MockLayoutCircle360MixB = [
  MockCurve45,
  MockCurve90,
  MockCurve45,
  MockCurve90,
  MockCurve45,
  MockCurve45,
] as const;
export const MockLayoutCircle45x8 = [
  MockCurve45,
  MockCurve45,
  MockCurve45,
  MockCurve45,
  MockCurve45,
  MockCurve45,
  MockCurve45,
  MockCurve45,
] as const;

export const MockLayoutCircle90x4 = [
  MockCurve90,
  MockCurve90,
  MockCurve90,
  MockCurve90,
] as const;
export const MockLayoutCircle90x4reverse = [
  MockCurve90reverse,
  MockCurve90reverse,
  MockCurve90reverse,
  MockCurve90reverse,
] as const;

export const MockLayoutOval = [
  MockCurve90,
  MockCurve90,
  MockStraight,
  MockCurve90,
  MockCurve90,
  MockStraight,
] as const;
