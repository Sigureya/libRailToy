(function (t, i) {
  typeof exports == "object" && typeof module < "u"
    ? i(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], i)
    : ((t = typeof globalThis < "u" ? globalThis : t || self),
      i((t.RailToy = {})));
})(this, function (t) {
  "use strict";
  const i = (e) => e % 36e4,
    o = (e, n) => i(e.angle + n.angle) === 0,
    s = (e, n) => e.jointType + n.jointType === 0,
    f = (e, n) => e.trackOffset === n.trackOffset,
    r = (e, n) => e.height === n.height,
    l = (e, n) => e.stationOffset === n.stationOffset,
    c = (e, n) => f(e, n) && l(e, n) && s(e, n) && o(e, n),
    a = (e) => ({
      angle: 0,
      stationOffset: 0,
      trackOffset: 0,
      height: 0,
      ...e,
    }),
    u = () => a({ jointType: 1 }),
    m = () => a({ jointType: -1 });
  (t.areAnglesCompatible = o),
    (t.areHeightCompatible = r),
    (t.areJointTypesCompatible = s),
    (t.areStationOffsetsCompatible = l),
    (t.areTrackOffsetsCompatible = f),
    (t.canConnect = c),
    (t.joint = a),
    (t.minus = m),
    (t.normalizeAngle = i),
    (t.plus = u),
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
});
