export class CyclicArray<T> {
  private _table: T[];
  constructor(table: T[]) {
    this._table = Array.from(table);
  }
  map<U>(
    fn: (item: T, index: number, array: CyclicArray<T>) => U
  ): CyclicArray<U> {
    const list = this._table.map((item, index) => {
      return fn(item, index, this);
    });
    return new CyclicArray(list);
  }
  at(angle: number) {
    const length = this._table.length;
    const result = angle % length;
    const index = result < 0 ? result + length : result;
    return this._table[index];
  }
  acm() {}

  get length() {
    return this._table.length;
  }
}
