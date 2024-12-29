import { test, expect, describe } from "vitest";
import { accmulateVector, add, reverse, zeroVector } from "../utils";
import { createIdentiyVectorTable } from "./createTable";

const table = createIdentiyVectorTable();
describe("", () => {
  test("ベクトルが基本条件を満たすか", () => {
    expect(accmulateVector(table.array)).toEqual(zeroVector());
  });
  table.array.forEach((vec, index) => {
    test(`逆ベクトルが正しく設定されているか:[${index}]`, () => {
      expect(add(vec, table.at(index + 4))).toEqual(zeroVector());
    });
  });
});
