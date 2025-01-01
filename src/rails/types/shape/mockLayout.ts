import { MockCurve45, MockCurve90, MockStraight } from "./mockShape";

export const MockLayoutCircle = [
  MockCurve90,
  MockCurve90,
  MockCurve90,
  MockCurve90,
] as const;

export const MockLayoutOval = [
  MockCurve45,
  MockCurve45,
  MockCurve45,
  MockCurve45,
  MockStraight,
  MockCurve90,
  MockCurve90,
  MockStraight,
] as const;
