export class Angle8Class<T> {
  private _table: T[];
  constructor(table: T[]) {
    this._table = Array.from(table);
  }
  map<U>(
    fn: (item: T, index: number, array: Angle8Class<T>) => U
  ): Angle8Class<U> {
    const list = this._table.map((item, index) => {
      return fn(item, index, this);
    });
    return new Angle8Class(list);
  }
  at(angle: number) {
    const length = this._table.length;
    const result = angle % length;
    const index = result < 0 ? result + length : result;
    return this._table[index];
  }
  get length() {
    return this._table.length;
  }
}
