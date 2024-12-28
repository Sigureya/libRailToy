import type { RailConstants } from "./constants";
import { SIMULATOR_RAIL_CONSTANTS } from "./constants";
import type { RailShape } from "./railShape";

export class ShapeFactory {
  private _constatns: Readonly<RailConstants>;
  constructor(constants: Readonly<RailConstants> = SIMULATOR_RAIL_CONSTANTS) {
    this._constatns = { ...constants };
  }
  get constants() {
    return this._constatns;
  }
  zeroShape(): RailShape {
    return {
      arc: 0,
      radis: 0,
      height: 0,
      stationOffset: 0,
      straightLength: 0,
      trackOffset: 0,
    };
  }
  createShape(shape: Partial<RailShape>): RailShape {
    return {
      ...this.zeroShape(),
      ...shape,
    };
  }
  curve(arc: number) {
    return this.createShape({ arc });
  }
  straight(scale = 1) {
    return this.createShape({
      straightLength: this._constatns.STRAIGHT_LENGTH * scale,
    });
  }
  straightHalf(scale = 1) {
    return this.createShape({
      straightLength: this._constatns.HALF_STRAIGHT_LENGTH * scale,
    });
  }
  straightQuarter(scale = 1) {
    return this.createShape({
      straightLength: this._constatns.QUARTER_STRAIGHT_LENGTH * scale,
    });
  }
  trackOffset() {
    return this.createShape({
      height: this._constatns.STRAIGHT_LENGTH,
      trackOffset: 1,
    });
  }
}
