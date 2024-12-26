import { RailVector4 } from "./railVector4";
export const areZeroVector = (vector: RailVector4) => {
  return vector.a === 0 && vector.b === 0 && vector.c === 0 && vector.d === 0;
};
export const sum = (v1: RailVector4, v2: RailVector4): RailVector4 => ({
  a: v1.a + v2.a,

  b: v1.b + v2.b,
  c: v1.c + v2.c,
  d: v1.d + v2.d,
});

export const mul = (vector: RailVector4, length: number): RailVector4 => ({
  a: vector.a * length,
  b: vector.a * length,
  c: vector.c * length,
  d: vector.d * length,
});

const sumVector = (vector: ReadonlyArray<RailVector4>) => {
  return vector.reduce((v1, v2) => {
    return sum(v1, v2);
  });
};
