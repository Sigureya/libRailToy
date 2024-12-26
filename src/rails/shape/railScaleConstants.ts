// PIみたいな定数群
// レイアウトの計算では特殊な単位系を使っている。
// cmの座標系に変換するために定数を乗算する必要がある

// レール関連の定数 (10倍スケール)
export const GAUGE = 38 as const; // 軌間 (3.8cm -> 38)
export const STRAIGHT_LENGTH = 214 as const; // 直線レール1本の長さ (21.4cm -> 214)

// レールの幅や間隔
export const INNER_OUTER_WIDTH = 60 as const; // 内側-外側の幅 (6cm -> 60)

// GAUGE+INNER_OUTER_WIDTH。複線幅で隣に移った場合の移動量
const FUKUSEN_TRANSLATE = 98 as const;

// 曲線レール関連
export const CURVE_SEGMENTS: number = 8; // 曲線レールの分割数 (8本で1周)
export const INNER_CIRCLE_DIAMETER: number = 390; // 内側円の直径 (39cm -> 390)

// 計算に使用する定数
export const FULL_CIRCLE_DEGREES: number = 360; // 1周の角度
export const RIGHT_ANGLE_DEGREES: number = 90; // 直角の角度
export const HALF_CIRCLE_DEGREES: number = 180; // 半円の角度

// あれだ。レールのこれらの定数だけど、描画の際にPIみたいに乗算すればいいんだ
