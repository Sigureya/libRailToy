
export interface RailJoint {
  /**
   * @description 凹のレール接合部。基本は負の値だが、凸凸を作りたいなら両方を正の値にする必要がある。
   */
  input: number;
  /**
   * @description 凸のレール接合部。基本は正の値だが、凹凹を作りたいなら両方を負の値にする必要がある。
   */
  output: number;
}
