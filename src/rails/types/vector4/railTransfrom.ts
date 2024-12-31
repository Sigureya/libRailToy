import type { RailVector4 } from "./types/railVector4";

export interface RailTransform {
  angle: number;
  movement: RailVector4;
}

export interface ReadonlyRailTransform {
  readonly angle: number;
  readonly movement: Readonly<RailVector4>;
}
