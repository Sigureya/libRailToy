type AddArray<T> = T extends unknown[] ? T : T[];

export class CyclicArray<T, A extends unknown[] = AddArray<T>> {
  private _table: A;
  constructor(table: A) {
    this._table = table;
  }
  map<U>(fn: (item: A[number], index: number, array: CyclicArray<T, A>) => U) {
    const list = this._table.map((item, index) => {
      return fn(item, index, this);
    });
    return new CyclicArray(list);
  }
  at(angle: number): A[number] {
    const length = this._table.length;
    const result = angle % length;
    const index = result < 0 ? result + length : result;
    return this._table[index];
  }
  get array() {
    return this._table;
  }
  acm() {}

  get length() {
    return this._table.length;
  }
}
