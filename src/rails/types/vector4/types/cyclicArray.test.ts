import { test, expect } from "vitest";
import { CyclicArray } from "./cyclicArray";
test("shapeのテスト", () => {
  const angle8 = new CyclicArray(["aa", "bb", "cc", "dd"]);
  for (let index = 0; index < 100; index++) {
    expect(angle8.at(index)).not.toBeUndefined();
  }
});
