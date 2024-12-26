import { test, expect } from "vitest";
import {
  FUKUSEN_TRANSLATE,
  GAUGE,
  INNER_OUTER_WIDTH,
} from "./railScaleConstants";

test("定数のチェック", () => {
  expect(FUKUSEN_TRANSLATE).toBe(GAUGE + INNER_OUTER_WIDTH);
});
