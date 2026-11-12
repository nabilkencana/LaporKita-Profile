import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  L as t,
  P as n,
  d as r,
  l as i,
  p as a,
  s as o,
  w as s,
  z as c,
} from "./react.Dfbt0i5D.mjs";
import { w as l } from "./motion.DA7Wf6OE.mjs";
import {
  $ as u,
  N as d,
  R as ee,
  r as te,
  s as f,
  t as ne,
  w as re,
  y as ie,
} from "./framer.DwK__Hy9.mjs";
function p(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function m(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function h(e) {
  throw Error(`Unexpected value: ${e}`);
}
function g(e, t, n, r) {
  (m(e >= t, e, `outside lower bound for`, r), m(e <= n, e, `outside upper bound for`, r));
}
function _(e) {
  return typeof e == `string`;
}
function v(e) {
  return Number.isFinite(e);
}
function y(e) {
  return e === null;
}
function b(e) {
  if (y(e)) return 0;
  switch (e.type) {
    case f.Array:
      return 1;
    case f.Boolean:
      return 2;
    case f.Color:
      return 3;
    case f.Date:
      return 4;
    case f.Enum:
      return 5;
    case f.File:
      return 6;
    case f.ResponsiveImage:
      return 10;
    case f.Link:
      return 7;
    case f.Number:
      return 8;
    case f.Object:
      return 9;
    case f.RichText:
      return 11;
    case f.String:
      return 12;
    case f.VectorSetItem:
      return 13;
    default:
      h(e);
  }
}
function ae(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = C.read(e);
    n.push(t);
  }
  return { type: f.Array, value: n };
}
function oe(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) C.write(e, n);
}
function se(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = C.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function ce(e) {
  return { type: f.Boolean, value: e.readUint8() !== 0 };
}
function le(e, t) {
  e.writeUint8(+!!t.value);
}
function ue(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function de(e) {
  return { type: f.Color, value: e.readString() };
}
function fe(e, t) {
  e.writeString(t.value);
}
function pe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function me(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: f.Date, value: n.toISOString() };
}
function he(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function ge(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function _e(e) {
  return { type: f.Enum, value: e.readString() };
}
function ve(e, t) {
  e.writeString(t.value);
}
function ye(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function be(e) {
  return { type: f.File, value: e.readString() };
}
function xe(e, t) {
  e.writeString(t.value);
}
function Se(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ce(e) {
  return { type: f.Link, value: e.readJson() };
}
function we(e, t) {
  e.writeJson(t.value);
}
function Te(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ee(e) {
  return { type: f.Number, value: e.readFloat64() };
}
function De(e, t) {
  e.writeFloat64(t.value);
}
function Oe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ke(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = C.read(e);
  }
  return { type: f.Object, value: n };
}
function Ae(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), C.write(e, r));
}
function je(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = C.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Me(e) {
  return { type: f.ResponsiveImage, value: e.readJson() };
}
function Ne(e, t) {
  e.writeJson(t.value);
}
function Pe(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Fe(e) {
  let t = e.readInt8();
  if (t === 0) return { type: f.RichText, value: e.readUint32() };
  if (t === 1) return { type: f.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
  if (v(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (_(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Le(e, t) {
  let n = e.value,
    r = t.value;
  if ((v(n) && v(r)) || (_(n) && _(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Re(e) {
  return { type: f.String, value: e.readString() };
}
function ze(e, t) {
  e.writeString(t.value);
}
function Be(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Ve(e) {
  return { type: f.VectorSetItem, value: e.readUint32() };
}
function He(e, t) {
  e.writeUint32(t.value);
}
function Ue(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function We(e) {
  let t = Math.floor(Xe * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function x(e, t) {
  let n = Ge(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await G(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Qe(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function S(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Ge(e) {
  m(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var C,
  w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  Ke,
  qe,
  R,
  z,
  B,
  V,
  H,
  Je,
  U,
  Ye,
  W,
  Xe,
  Ze,
  G,
  Qe,
  K,
  q,
  $e,
  et,
  tt = e(() => {
    (t(),
      u(),
      (w = Object.create),
      (T = Object.defineProperty),
      (E = Object.getOwnPropertyDescriptor),
      (D = Object.getOwnPropertyNames),
      (O = Object.getPrototypeOf),
      (k = Object.prototype.hasOwnProperty),
      (A = (e, t, n) =>
        t in e
          ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (j = (e, t) =>
        function () {
          return (t || (0, e[D(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (M = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of D(t))
            k.call(e, i) ||
              i === n ||
              T(e, i, { get: () => t[i], enumerable: !(r = E(t, i)) || r.enumerable });
        return e;
      }),
      (N = (e, t, n) => (
        (n = e == null ? {} : w(O(e))),
        M(!t && e && e.__esModule ? n : T(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (P = (e, t, n) => A(e, typeof t == `symbol` ? t : t + ``, n)),
      (F = N(
        j({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (I = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (L = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = I.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = I.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = I.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = I.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = I.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = I.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = I.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = I.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = I.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = I.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            P(this, `offset`, 0),
            P(this, `view`),
            P(this, `decoder`, new TextDecoder()),
            (this.view = p(this.bytes)));
        }
      }),
      c !== void 0 && c.requestIdleCallback,
      (Ke = 1024),
      (qe = 1.5),
      (R = (e) => 2 ** e - 1),
      (z = (e) => -(2 ** (e - 1))),
      (B = (e) => 2 ** (e - 1) - 1),
      (V = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: z(8),
        Int16: z(16),
        Int32: z(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (H = {
        Uint8: R(8),
        Uint16: R(16),
        Uint32: R(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: B(8),
        Int16: B(16),
        Int32: B(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (Je = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * qe) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = p(n)));
        }
        writeUint8(e) {
          g(e, V.Uint8, H.Uint8, `Uint8`);
          let t = I.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          g(e, V.Uint16, H.Uint16, `Uint16`);
          let t = I.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          g(e, V.Uint32, H.Uint32, `Uint32`);
          let t = I.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          g(e, V.Uint64, H.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          g(e, V.BigUint64, H.BigUint64, `BigUint64`);
          let t = I.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          g(e, V.Int8, H.Int8, `Int8`);
          let t = I.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          g(e, V.Int16, H.Int16, `Int16`);
          let t = I.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          g(e, V.Int32, H.Int32, `Int32`);
          let t = I.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          g(e, V.Int64, H.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          g(e, V.BigInt64, H.BigInt64, `BigInt64`);
          let t = I.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = I.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = I.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (P(this, `offset`, 0),
            P(this, `bytes`, new Uint8Array(Ke)),
            P(this, `view`, p(this.bytes)),
            P(this, `encoder`, new TextEncoder()),
            P(this, `encodedStrings`, new Map()));
        }
      }),
      (U = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            m(v(n), `Invalid chunkId`),
            m(v(r), `Invalid offset`),
            m(v(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (m(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ae(e);
            case 2:
              return ce(e);
            case 3:
              return de(e);
            case 4:
              return me(e);
            case 5:
              return _e(e);
            case 6:
              return be(e);
            case 7:
              return Ce(e);
            case 8:
              return Ee(e);
            case 9:
              return ke(e);
            case 10:
              return Me(e);
            case 11:
              return Fe(e);
            case 12:
              return Re(e);
            case 13:
              return Ve(e);
            default:
              h(t);
          }
        }),
          (e.write = function (e, t) {
            let n = b(t);
            if ((e.writeUint8(n), !y(t)))
              switch (t.type) {
                case f.Array:
                  return oe(e, t);
                case f.Boolean:
                  return le(e, t);
                case f.Color:
                  return fe(e, t);
                case f.Date:
                  return he(e, t);
                case f.Enum:
                  return ve(e, t);
                case f.File:
                  return xe(e, t);
                case f.Link:
                  return we(e, t);
                case f.Number:
                  return De(e, t);
                case f.Object:
                  return Ae(e, t);
                case f.ResponsiveImage:
                  return Ne(e, t);
                case f.RichText:
                  return Ie(e, t);
                case f.VectorSetItem:
                  return He(e, t);
                case f.String:
                  return ze(e, t);
                default:
                  h(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = b(e),
              i = b(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (y(e) || y(t)) return 0;
            switch (e.type) {
              case f.Array:
                return (m(t.type === f.Array), se(e, t, n));
              case f.Boolean:
                return (m(t.type === f.Boolean), ue(e, t));
              case f.Color:
                return (m(t.type === f.Color), pe(e, t));
              case f.Date:
                return (m(t.type === f.Date), ge(e, t));
              case f.Enum:
                return (m(t.type === f.Enum), ye(e, t));
              case f.File:
                return (m(t.type === f.File), Se(e, t));
              case f.Link:
                return (m(t.type === f.Link), Te(e, t));
              case f.Number:
                return (m(t.type === f.Number), Oe(e, t));
              case f.Object:
                return (m(t.type === f.Object), je(e, t, n));
              case f.ResponsiveImage:
                return (m(t.type === f.ResponsiveImage), Pe(e, t));
              case f.RichText:
                return (m(t.type === f.RichText), Le(e, t));
              case f.VectorSetItem:
                return (m(t.type === f.VectorSetItem), Ue(e, t));
              case f.String:
                return (m(t.type === f.String), Be(e, t, n));
              default:
                h(e);
            }
          }));
      })((C ||= {})),
      (Ye = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = C.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new L(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = C.read(n);
              e.push(t);
            }
            let t = U.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new Je();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) C.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), P(this, `entries`, []));
        }
      }),
      (W = 3),
      (Xe = 250),
      (Ze = [408, 429, 500, 502, 503, 504]),
      (G = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Ze.includes(r.status) || ++n > W) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > W) throw e;
          }
          await We(n);
        }
      }),
      (Qe = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((m(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = S(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((m(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = S(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          P(this, `chunks`, []);
        }
      }),
      (K = class {
        async loadModel() {
          let [e] = await x(this.options.url, [this.options.range]);
          return (m(e, `Failed to load model`), Ye.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          m(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      h(t);
                  }
                }),
              [t.entries]
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > C.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            C.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            P(this, `schema`),
            P(this, `fields`),
            P(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            P(this, `modelPromise`),
            P(this, `model`),
            P(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (m(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (q = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = C.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), C.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          P(this, `fields`, new Map());
        }
      }),
      ($e = class {
        scanItems() {
          return (
            (this.itemsPromise ??= G(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new L(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = q.read(n),
                  i = n.getOffset() - e,
                  a = new U(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            P(this, `itemsPromise`),
            P(
              this,
              `itemLoader`,
              new F.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = U.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await x(this.url, t)).map((t, n) => {
                    let r = new L(t),
                      i = q.read(r),
                      a = e[n];
                    return (m(a, `Missing pointer`), { pointer: a, data: i.getData() });
                  });
                },
                { maxBatchSize: 250 }
              )
            ));
        }
      }),
      (et = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = U.fromString(e),
                n = this.chunks[t.chunkId];
              return (m(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = U.fromString(e.pointer),
            r = U.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return C.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            P(this, `id`),
            P(this, `schema`),
            P(this, `indexes`),
            P(this, `resolveRichText`),
            P(this, `resolveVectorSetItem`),
            P(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new $e(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function nt(e) {
  return typeof e == `object` && !!e && !a(e) && at in e;
}
function rt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function it(e) {
  let t = new Map();
  return (a) => {
    let o = t.get(a);
    if (o) return o;
    let s = (function t(a) {
      switch (a[0]) {
        case 1: {
          let [, ...e] = a;
          return r(n, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...n] = a;
          return r(ie, e, ...n.map(t));
        }
        case 3: {
          let [, n, r, o, s] = a;
          for (let e of o) {
            let n = r[e];
            n && (r[e] = t(n));
          }
          for (let t of s) {
            let n = r[t];
            if (typeof n != `string`) continue;
            let i = e[n];
            i && (nt(i) && i.preload(), (r[t] = i));
          }
          let c = e[n];
          return (
            rt(c, `Module not found`),
            nt(c) && c.preload(),
            i(te, {
              componentIdentifier: n,
              children: (e) => i(ne, { component: c, props: { ...e, ...r } }),
            })
          );
        }
        case 4: {
          let [, e, n, ...i] = a,
            o = i.map(t);
          return r(e === `a` ? l.a : e, n, ...o);
        }
        case 5: {
          let [, e] = a;
          return e;
        }
      }
    })(JSON.parse(a));
    return (t.set(a, s), s);
  };
}
var J,
  at,
  ot,
  st = e(() => {
    (t(),
      o(),
      u(),
      s(),
      c !== void 0 && c.requestIdleCallback,
      (at = `preload`),
      (ot =
        (((J = ot || {})[(J.Fragment = 1)] = `Fragment`),
        (J[(J.Link = 2)] = `Link`),
        (J[(J.Module = 3)] = `Module`),
        (J[(J.Tag = 4)] = `Tag`),
        (J[(J.Text = 5)] = `Text`),
        J)));
  }),
  Y,
  ct,
  X,
  lt,
  ut,
  dt,
  ft,
  pt,
  Z,
  Q,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  $,
  xt = e(() => {
    (u(),
      tt(),
      st(),
      (Y = {
        createdAt: { isNullable: !0, type: f.Date },
        E7xSEjDjb: { isNullable: !0, type: f.RichText },
        EhTU7PJjM: { isNullable: !0, type: f.RichText },
        id: { isNullable: !1, type: f.String },
        lsUCe2axL: { isNullable: !0, type: f.RichText },
        nextItemId: { isNullable: !0, type: f.String },
        previousItemId: { isNullable: !0, type: f.String },
        R2OedGNgU: { isNullable: !0, type: f.String },
        rup3mi8fe: { isNullable: !0, type: f.RichText },
        TJrwA8B7y: { isNullable: !0, type: f.RichText },
        updatedAt: { isNullable: !0, type: f.Date },
      }),
      (ct = [`id`]),
      (X = { type: 1 }),
      (lt = [`previousItemId`]),
      (ut = [`nextItemId`]),
      (dt = [`id`, `R2OedGNgU`]),
      (ft = [`R2OedGNgU`, `id`]),
      (pt = [`R2OedGNgU`]),
      (Z = { type: 0 }),
      (Q = [`EhTU7PJjM`]),
      (mt = [`lsUCe2axL`]),
      (ht = [`E7xSEjDjb`]),
      (gt = [`TJrwA8B7y`]),
      (_t = [`rup3mi8fe`]),
      (vt = []),
      (yt = (e) => {
        let t = vt[e];
        if (t) return t().then((e) => e.default);
      }),
      (bt = it({})),
      new re(),
      ($ = {
        collectionByLocaleId: {
          default: new et({
            chunks: [
              new URL(
                `./U3CMYZ2DG-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `4d7b95f6-f245-43db-a258-977cd52f529edefault`,
            indexes: [
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: ct,
                range: { from: 0, to: 49 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: lt,
                range: { from: 49, to: 97 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: ut,
                range: { from: 97, to: 141 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: dt,
                range: { from: 141, to: 211 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: ft,
                range: { from: 211, to: 281 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: pt,
                range: { from: 281, to: 331 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Q,
                range: { from: 331, to: 7161 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: mt,
                range: { from: 7161, to: 13227 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: ht,
                range: { from: 13227, to: 14590 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: gt,
                range: { from: 14590, to: 15946 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: _t,
                range: { from: 15946, to: 17235 },
                url: new URL(
                  `./U3CMYZ2DG-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/WZoVNlChbKLpL794A3DS/uXO7nnyNqGDpAMT9a8Hs/U3CMYZ2DG.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: bt,
            resolveVectorSetItem: yt,
            schema: Y,
          }),
        },
        displayName: `Content`,
        id: `4d7b95f6-f245-43db-a258-977cd52f529e`,
      }),
      d($, {
        R2OedGNgU: { preventLocalization: !1, title: `Slug`, type: f.String },
        EhTU7PJjM: { defaultValue: ``, title: `Terms of Service`, type: f.RichText },
        lsUCe2axL: { defaultValue: ``, title: `Privacy Policy`, type: f.RichText },
        E7xSEjDjb: { defaultValue: ``, title: `Changelog V1.2.0`, type: f.RichText },
        TJrwA8B7y: { defaultValue: ``, title: `Changelog V1.1.0`, type: f.RichText },
        rup3mi8fe: { defaultValue: ``, title: `Changelog V1.0.0`, type: f.RichText },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/U3CMYZ2DG:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/U3CMYZ2DG:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }));
  }),
  St,
  Ct,
  wt,
  Tt = e(() => {
    (u(),
      ee.loadFonts([`Inter-Italic`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (St = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Ct = [
        `.framer-CH9Dp .framer-styles-preset-1gsxkzx:not(.rich-text-wrapper), .framer-CH9Dp .framer-styles-preset-1gsxkzx.rich-text-wrapper blockquote { --framer-blockquote-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-blockquote-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-blockquote-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-blockquote-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-blockquote-font-size: 16px; --framer-blockquote-font-style: italic; --framer-blockquote-font-style-bold: normal; --framer-blockquote-font-style-bold-italic: italic; --framer-blockquote-font-style-italic: italic; --framer-blockquote-font-variation-axes: normal; --framer-blockquote-font-weight: 400; --framer-blockquote-font-weight-bold: 700; --framer-blockquote-font-weight-bold-italic: 700; --framer-blockquote-font-weight-italic: 400; --framer-blockquote-letter-spacing: 0em; --framer-blockquote-line-height: 1.8em; --framer-blockquote-paragraph-spacing: 20px; --framer-blockquote-text-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #1a1a1a); --framer-blockquote-text-stroke-color: initial; --framer-blockquote-text-stroke-width: initial; --framer-font-open-type-features: normal; padding: 0px 0px 0px 22px; position: relative; }`,
        `.framer-CH9Dp .framer-styles-preset-1gsxkzx:not(.rich-text-wrapper)::before, .framer-CH9Dp .framer-styles-preset-1gsxkzx.rich-text-wrapper blockquote::before { background-color: #dddddd; border-radius: 1px; content: " "; display: block; height: 100%; left: 0px; position: absolute; top: 0px; width: 2px; }`,
      ]),
      (wt = `framer-CH9Dp`));
  });
export { $ as a, Tt as i, Ct as n, xt as o, St as r, wt as t };
//# sourceMappingURL=lrmGPCM1k.C6_jRiJu.mjs.map
