import { test, expect, describe } from "vitest";
import { Angle8Class } from "./angle8Class";
test("shapeのテスト", () => {
  const angle8 = new Angle8Class(["aa", "bb", "cc", "dd"]);
  for (let index = 0; index < 100; index++) {
    expect(angle8.at(index)).not.toBeUndefined();
  }
});
