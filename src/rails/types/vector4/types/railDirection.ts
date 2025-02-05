import type { DirectionalUnitVectors, UnitRailVector4 } from "./railVector4";
import type { TableEntry } from "../createTable";
import type { CyclicArray } from "./cyclicArray";

export class RailAngleTable {
  private _table: CyclicArray<TableEntry>;
  constructor(table: CyclicArray<TableEntry>) {
    this._table = table;
  }
  straight(
    angle: number,
    direction: keyof DirectionalUnitVectors = "forward"
  ): UnitRailVector4 {
    return this._table.at(angle).STRAIGHT[direction];
  }
  curve(angle: number, arc: number) {
    return this._table.at(angle).CURVE.at(arc);
  }
  curve2(angle: number, arc: number) {}
}
