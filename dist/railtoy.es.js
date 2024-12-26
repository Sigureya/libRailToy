const s = (t) => t % 36e4, r = (t, e) => s(t.angle + e.angle) === 0, a = (t, e) => t.jointType + e.jointType === 0, o = (t, e) => t.trackOffset === e.trackOffset, f = (t, e) => t.height === e.height, c = (t, e) => t.stationOffset === e.stationOffset, i = (t, e) => o(t, e) && c(t, e) && a(t, e) && r(t, e), n = (t) => ({
  angle: 0,
  stationOffset: 0,
  trackOffset: 0,
  height: 0,
  ...t
}), l = () => n({ jointType: 1 }), p = () => n({ jointType: -1 });
export {
  r as areAnglesCompatible,
  f as areHeightCompatible,
  a as areJointTypesCompatible,
  c as areStationOffsetsCompatible,
  o as areTrackOffsetsCompatible,
  i as canConnect,
  n as joint,
  p as minus,
  s as normalizeAngle,
  l as plus
};
