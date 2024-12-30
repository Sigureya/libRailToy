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
  calcIndex(angle: number) {
    const length = this._table.length;
    const result = angle % length;
    return result < 0 ? result + length : result;
  }
  at(angle: number): A[number] {
    return this._table[this.calcIndex(angle)];
  }
  get array() {
    return this._table;
  }
  acm() {}

  get length() {
    return this._table.length;
  }
}
