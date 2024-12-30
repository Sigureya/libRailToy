import { test, expect, describe } from "vitest";
import { accmulateVector, add, reverse, zeroVector } from "./utils";
import { createIdentiyVectorTable } from "./createTable";
import {
  VECTOR_ANGLE_0,
  VECTOR_ANGLE_1,
  VECTOR_ANGLE_2,
  VECTOR_ANGLE_3,
  VECTOR_ANGLE_4,
  VECTOR_ANGLE_5,
  VECTOR_ANGLE_6,
  VECTOR_ANGLE_7,
} from "./types/identityConstants";

describe("単位ベクトルテーブルは正しいか?", () => {
  const table = createIdentiyVectorTable();
  test("長さOK?", () => {
    expect(table.length).toBe(8);
  });
  test("各ベクトルは正しく設定されているか?(直接アクセス)", () => {
    expect(table.array[0]).toEqual(VECTOR_ANGLE_0);
  });
  test("各ベクトルは想定値が割り当てられているか？", () => {
    expect(table.at(0)).toEqual(VECTOR_ANGLE_0);
    expect(table.at(1)).toEqual(VECTOR_ANGLE_1);
    expect(table.at(2)).toEqual(VECTOR_ANGLE_2);
    expect(table.at(3)).toEqual(VECTOR_ANGLE_3);
    expect(table.at(4)).toEqual(VECTOR_ANGLE_4);
    expect(table.at(5)).toEqual(VECTOR_ANGLE_5);
    expect(table.at(6)).toEqual(VECTOR_ANGLE_6);
    expect(table.at(7)).toEqual(VECTOR_ANGLE_7);
  });
  test("全ベクトルの合計が0になるか?", () => {
    expect(accmulateVector(table.array)).toEqual(zeroVector());
  });
  table.array.forEach((vec, index) => {
    test(`逆ベクトルが正しく設定されているか:[${index}]`, () => {
      expect(add(vec, table.at(index + 4))).toEqual(zeroVector());
    });
  });
});
