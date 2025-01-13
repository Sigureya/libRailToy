import type { RailShape } from "./railShape";

export const accmulateShapeMember = <T>(
  key: keyof RailShape,
  sapes: ReadonlyArray<Readonly<T>>,
  map: (t: T) => Readonly<RailShape>
) => {
  sapes.reduce<number>((value, data) => {
    return map(data)[key] + value;
  }, 0);
};
