import { RailConstants } from "./constants/types";
import { RailShape } from "./railShape";

export class ShapeFactory {
  private _constatns: Readonly<RailConstants>;
  constructor(constants: Readonly<RailConstants>) {
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
  createShape(shape: Partial<RailShape>) {
    return {
      ...this.zeroShape(),
      ...shape,
    };
  }
  curve(arc: number) {
    return this.createShape({ arc });
  }
  straight(length = this._constatns.STRAIGHT_LENGTH) {
    return this.createShape({ straightLength: length });
  }
  straightHalf() {
    return this.straight(this._constatns.HALF_STRAIGHT_LENGTH);
  }
  straightQuarter() {
    return this.straight(this._constatns.QUARTER_STRAIGHT_LENGTH);
  }
  trackOffset() {
    return this.createShape({
      height: this._constatns.STRAIGHT_LENGTH,
      trackOffset: 1,
    });
  }
}
