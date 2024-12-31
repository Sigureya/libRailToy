import { ZERO_VECTOR } from "./types";
import type { RailVector4, UnitRailVector4 } from "./types/railVector4";

export const zeroVector = (): UnitRailVector4 => ({ a: 0, b: 0, c: 0, d: 0 });

export const same = (v1: RailVector4, v2: RailVector4) =>
  v1.a === v2.a && v1.b === v2.b && v1.c === v2.c && v1.d === v2.d;

/**
 * @description ゼロベクトルを加算し、-0を0に修正する
 * @param vec
 * @returns
 */
export const signNormalize = (vec: RailVector4) => {
  return add(vec, ZERO_VECTOR);
};

export const reverse = (vec: RailVector4): RailVector4 => ({
  a: -vec.a,
  b: -vec.b,
  c: -vec.c,
  d: -vec.d,
});

export const accmulateVector = (
  vector: ReadonlyArray<Readonly<RailVector4>>
) => {
  return vector.reduce<RailVector4>((v1, v2) => {
    v1.a += v2.a;
    v1.b += v2.b;
    v1.c += v2.c;
    v1.d += v2.d;
    return v1;
  }, zeroVector());
};

/**
 * Adds two RailVector4 objects.
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @returns A new RailVector4 representing the sum of v1 and v2.
 */
export function add(v1: RailVector4, v2: RailVector4): RailVector4 {
  return {
    a: v1.a + v2.a,
    b: v1.b + v2.b,
    c: v1.c + v2.c,
    d: v1.d + v2.d,
  };
}

/**
 * Subtracts one RailVector4 from another.
 * @param v1 The vector to subtract from.
 * @param v2 The vector to subtract.
 * @returns A new RailVector4 representing the difference of v1 and v2.
 */
export function subtract(v1: RailVector4, v2: RailVector4): RailVector4 {
  return {
    a: v1.a - v2.a,
    b: v1.b - v2.b,
    c: v1.c - v2.c,
    d: v1.d - v2.d,
  };
}

/**
 * Scales a RailVector4 by a scalar value.
 * @param v The vector to scale.
 * @param scalar The scalar value.
 * @returns A new RailVector4 representing the scaled vector.
 */
export function scale(v: Readonly<RailVector4>, scalar: number): RailVector4 {
  return {
    a: v.a * scalar,
    b: v.b * scalar,
    c: v.c * scalar,
    d: v.d * scalar,
  };
}

/**
 * Computes the dot product of two RailVector4 objects.
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @returns The dot product of v1 and v2.
 */
export function dotProduct(v1: RailVector4, v2: RailVector4): number {
  return v1.a * v2.a + v1.b * v2.b + v1.c * v2.c + v1.d * v2.d;
}

/**
 * Computes the magnitude (length) of a RailVector4.
 * @param v The vector.
 * @returns The magnitude of the vector.
 */
export function magnitude(v: RailVector4): number {
  return Math.sqrt(v.a ** 2 + v.b ** 2 + v.c ** 2 + v.d ** 2);
}
