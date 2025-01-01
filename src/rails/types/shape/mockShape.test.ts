import { test, expect, describe } from "vitest";
import { MockStraight, MockStraightLong } from "./mockShape";

test("2倍直線レールは直線レールの2倍", () => {
  expect(MockStraight.straightLength * 2).toBe(MockStraightLong.straightLength);
});
