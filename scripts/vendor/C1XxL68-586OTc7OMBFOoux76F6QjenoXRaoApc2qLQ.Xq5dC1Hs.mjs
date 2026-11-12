import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  j as a,
  l as o,
  s,
  u as c,
  w as l,
  y as u,
} from "./react.Dfbt0i5D.mjs";
import { a as ee, r as te, t as d, w as f } from "./motion.DA7Wf6OE.mjs";
import {
  $ as p,
  A as ne,
  At as m,
  C as h,
  D as g,
  Dt as re,
  E as ie,
  Et as _,
  G as v,
  I as y,
  M as b,
  N as x,
  O as S,
  Ot as C,
  Pt as ae,
  Tt as oe,
  a as w,
  dt as se,
  ft as ce,
  gt as T,
  ht as le,
  m as ue,
  mt as E,
  o as D,
  q as O,
  s as k,
  vt as de,
  yt as fe,
  z as A,
} from "./framer.DwK__Hy9.mjs";
import {
  C as pe,
  D as j,
  E as me,
  O as he,
  S as ge,
  T as M,
  _ as _e,
  a as ve,
  b as N,
  c as P,
  d as ye,
  f as be,
  g as xe,
  h as Se,
  i as Ce,
  l as we,
  m as Te,
  n as Ee,
  o as De,
  p as Oe,
  r as ke,
  s as Ae,
  t as je,
  u as Me,
  v as Ne,
  w as Pe,
  x as F,
  y as Fe,
} from "./shared-lib.BFsVOxQ4.mjs";
import {
  a as Ie,
  c as Le,
  d as I,
  f as Re,
  i as ze,
  l as L,
  n as Be,
  o as Ve,
  r as He,
  s as Ue,
  t as We,
  u as Ge,
} from "./Z7CzuxNJN.tjaA4hZo.mjs";
import { i as Ke, n as qe, r as Je, t as Ye } from "./xMscHFbGZ.CRJhyUtz.mjs";
import Xe, { t as Ze } from "./5PGtkbwSfvxaHjmZghKniSqrXkdfySkRIre-pxzpa3Q.awexzlME.mjs";
var Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  R,
  it = e(() => {
    (s(),
      p(),
      l(),
      (Qe = `var(--framer-icon-mask)`),
      ($e = i(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (et = f.create($e)),
      (tt = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(et, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (nt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" height="20px" id="DCz_eKU1_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="20px"/><path d="M 0 2 L 2 4 L 6 0" fill="transparent" height="4px" id="UefoekZNv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 10)" width="6px"/></svg>`),
      (rt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (R = C(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: s,
              JEeZYcamG: c,
              ...l
            } = rt(e),
            u = _(`2994208654`, nt);
          return o(tt, {
            ...l,
            className: y(`framer-E6ihB`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": s, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-E6ihB { -webkit-mask: ${Qe}; aspect-ratio: 1; display: block; mask: ${Qe}; width: 24px; }`,
        ],
        `framer-E6ihB`
      )),
      (R.displayName = `Circle Check`),
      x(R, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  z,
  dt = e(() => {
    (s(),
      p(),
      l(),
      (at = `var(--framer-icon-mask)`),
      (ot = i(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (st = f.create(ot)),
      (ct = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(st, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (lt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" height="20px" id="P5rQb0OMl" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="20px"/><path d="M 6 0 L 0 6" fill="transparent" height="6px" id="ydzJ3GOgA" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 9)" width="6px"/><path d="M 0 0 L 6 6" fill="transparent" height="6px" id="KLxNfseJy" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 9)" width="6px"/></svg>`),
      (ut = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (z = C(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: s,
              JEeZYcamG: c,
              ...l
            } = ut(e),
            u = _(`4108997760`, lt);
          return o(ct, {
            ...l,
            className: y(`framer-qGXj2`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": s, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-qGXj2 { -webkit-mask: ${at}; aspect-ratio: 1; display: block; mask: ${at}; width: 24px; }`,
        ],
        `framer-qGXj2`
      )),
      (z.displayName = `Circle X`),
      x(z, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  B,
  ft,
  pt,
  mt,
  ht,
  gt,
  V,
  _t = e(() => {
    (s(),
      p(),
      l(),
      (B = `var(--framer-icon-mask)`),
      (ft = i(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (pt = f.create(ft)),
      (mt = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(pt, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (ht = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.019 0.816 C 9.108 0.343 9.521 0 10.002 0 C 10.484 0 10.897 0.343 10.985 0.816 L 12.036 6.374 C 12.189 7.183 12.822 7.816 13.63 7.968 L 19.188 9.019 C 19.662 9.108 20.005 9.521 20.005 10.002 C 20.005 10.484 19.662 10.897 19.188 10.985 L 13.63 12.036 C 12.822 12.189 12.189 12.822 12.036 13.63 L 10.985 19.188 C 10.897 19.662 10.484 20.005 10.002 20.005 C 9.521 20.005 9.108 19.662 9.019 19.188 L 7.968 13.63 C 7.816 12.822 7.183 12.189 6.374 12.036 L 0.816 10.985 C 0.343 10.897 0 10.484 0 10.002 C 0 9.521 0.343 9.108 0.816 9.019 L 6.374 7.968 C 7.183 7.816 7.816 7.183 7.968 6.374 Z" fill="transparent" height="20.004788889056996px" id="lRa5aMIvl" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(1.998 1.998)" width="20.004788889056993px"/></svg>`),
      (gt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (V = C(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: s,
              JEeZYcamG: c,
              ...l
            } = gt(e),
            u = _(`1954469862`, ht);
          return o(mt, {
            ...l,
            className: y(`framer-0KIoe`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": s, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-0KIoe { -webkit-mask: ${B}; aspect-ratio: 1; display: block; mask: ${B}; width: 24px; }`,
        ],
        `framer-0KIoe`
      )),
      (V.displayName = `Sparkle`),
      x(V, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  H,
  vt,
  yt,
  bt,
  xt,
  St,
  U,
  Ct = e(() => {
    (s(),
      p(),
      l(),
      (H = `var(--framer-icon-mask)`),
      (vt = i(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (yt = f.create(vt)),
      (bt = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(yt, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (xt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 14 6 L 14 4 C 14 1.791 12.209 0 10 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 6" fill="transparent" height="6px" id="d7j1E4q3I" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 15)" width="14px"/><path d="M 0 0 C 1.764 0.457 2.996 2.049 2.996 3.872 C 2.996 5.695 1.764 7.287 0 7.744" fill="transparent" height="7.744px" id="KbBEY0ePJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(16 3.128)" width="2.9961992229530807px"/><path d="M 3 5.87 L 3 3.87 C 2.999 2.047 1.765 0.456 0 0" fill="transparent" height="5.870000000000001px" id="lNurVRALF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(19 15.13)" width="3px"/><path d="M 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 Z" fill="transparent" height="8px" id="c5Y0LHs80" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 3)" width="8px"/></svg>`),
      (St = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (U = C(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: s,
              JEeZYcamG: c,
              ...l
            } = St(e),
            u = _(`3846683765`, xt);
          return o(bt, {
            ...l,
            className: y(`framer-73TI9`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": s, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-73TI9 { -webkit-mask: ${H}; aspect-ratio: 1; display: block; mask: ${H}; width: 24px; }`,
        ],
        `framer-73TI9`
      )),
      (U.displayName = `Users`),
      x(U, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  W,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  G,
  kt = e(() => {
    (s(),
      p(),
      l(),
      (W = `var(--framer-icon-mask)`),
      (wt = i(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Tt = f.create(wt)),
      (Et = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(Tt, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (Dt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 0 L 5 11 L 0 6" fill="transparent" height="11px" id="RhWX5SVPv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 6)" width="16px"/></svg>`),
      (Ot = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (G = C(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: s,
              JEeZYcamG: c,
              ...l
            } = Ot(e),
            u = _(`3338047389`, Dt);
          return o(Et, {
            ...l,
            className: y(`framer-FCBgc`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": s, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-FCBgc { -webkit-mask: ${W}; aspect-ratio: 1; display: block; mask: ${W}; width: 24px; }`,
        ],
        `framer-FCBgc`
      )),
      (G.displayName = `Check`),
      x(G, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  K,
  It = e(() => {
    (s(),
      p(),
      l(),
      (At = `var(--framer-icon-mask)`),
      (jt = i(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Mt = f.create(jt)),
      (Nt = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(Mt, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (Pt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 14 6 L 14 4 C 14 1.791 12.209 0 10 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 6" fill="transparent" height="6px" id="WH9Rs4r6q" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 15)" width="14px"/><path d="M 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 Z" fill="transparent" height="8px" id="Ve73BhA02" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 3)" width="8px"/></svg>`),
      (Ft = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (K = C(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: s,
              JEeZYcamG: c,
              ...l
            } = Ft(e),
            u = _(`2752932676`, Pt);
          return o(Nt, {
            ...l,
            className: y(`framer-Ldy1h`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": s, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-Ldy1h { -webkit-mask: ${At}; aspect-ratio: 1; display: block; mask: ${At}; width: 24px; }`,
        ],
        `framer-Ldy1h`
      )),
      (K.displayName = `User`),
      x(K, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  J,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Y,
  Zt = e(() => {
    (s(),
      p(),
      d(),
      l(),
      _t(),
      Ct(),
      kt(),
      he(),
      me(),
      Pe(),
      It(),
      xe(),
      P(),
      N(),
      ze(),
      ge(),
      (Lt = v(K)),
      (Rt = v(F)),
      (zt = v(G)),
      (Bt = v(V)),
      (Vt = v(U)),
      (Ht = [`YSVBO8HhW`, `ttFDUZYx2`, `XRyXnIHM0`, `thyCOPQRE`, `N2HRaxhKF`, `tThySQrUg`]),
      (Ut = `framer-Zu0YI`),
      (Wt = {
        N2HRaxhKF: `framer-v-2odrla`,
        thyCOPQRE: `framer-v-1sjihe8`,
        ttFDUZYx2: `framer-v-1jww087`,
        tThySQrUg: `framer-v-fxto43`,
        XRyXnIHM0: `framer-v-4vrcl3`,
        YSVBO8HhW: `framer-v-1mxgeym`,
      }),
      (Gt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Kt = ({ value: e, children: n }) => {
        let r = t(ee),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(ee.Provider, { value: s, children: n });
      }),
      (qt = {
        "Desktop (Monthly)": `YSVBO8HhW`,
        "Desktop (Yearly)": `ttFDUZYx2`,
        "Mobile (Monthly)": `XRyXnIHM0`,
        "Mobile (Yearly)": `thyCOPQRE`,
        "Tablet (Monthly)": `N2HRaxhKF`,
        "Tablet (Yearly)": `tThySQrUg`,
      }),
      (Jt = f.create(r)),
      (Yt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: qt[r.variant] ?? r.variant ?? `YSVBO8HhW`,
      })),
      (Xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = C(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = u(),
            { activeLocale: l, setLocale: ee } = de(),
            d = ce(),
            { style: p, className: m, layoutId: h, variant: _, ...v } = Yt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: ae,
              gestureVariant: T,
              isLoading: le,
              setGestureState: ue,
              setVariant: E,
              variants: D,
            } = re({
              cycleOrder: Ht,
              defaultVariant: `YSVBO8HhW`,
              ref: a,
              variant: _,
              variantClassNames: Wt,
            }),
            O = Xt(e, D),
            { activeVariantCallback: k, delay: fe } = se(b),
            A = k(async (...e) => {
              E(`ttFDUZYx2`);
            }),
            me = k(async (...e) => {
              E(`YSVBO8HhW`);
            }),
            he = k(async (...e) => {
              E(`thyCOPQRE`);
            }),
            ge = k(async (...e) => {
              E(`XRyXnIHM0`);
            }),
            N = k(async (...e) => {
              E(`tThySQrUg`);
            }),
            P = k(async (...e) => {
              E(`N2HRaxhKF`);
            }),
            ye = y(Ut, _e, We, ve, Oe);
          return (
            oe(),
            o(te, {
              id: h ?? s,
              children: o(Jt, {
                animate: D,
                initial: !1,
                children: o(Kt, {
                  value: Gt,
                  children: c(f.div, {
                    ...v,
                    ...ae,
                    className: y(ye, `framer-1mxgeym`, m, x),
                    "data-framer-name": `Desktop (Monthly)`,
                    layoutDependency: O,
                    layoutId: `YSVBO8HhW`,
                    ref: a,
                    style: { ...p },
                    ...q(
                      {
                        N2HRaxhKF: { "data-framer-name": `Tablet (Monthly)` },
                        thyCOPQRE: { "data-framer-name": `Mobile (Yearly)` },
                        ttFDUZYx2: { "data-framer-name": `Desktop (Yearly)` },
                        tThySQrUg: { "data-framer-name": `Tablet (Yearly)` },
                        XRyXnIHM0: { "data-framer-name": `Mobile (Monthly)` },
                      },
                      b,
                      T
                    ),
                    children: [
                      c(f.div, {
                        className: `framer-13v8t6u`,
                        "data-framer-name": `Billing Toggle Container`,
                        layoutDependency: O,
                        layoutId: `ucyYgB7V8`,
                        children: [
                          o(g, {
                            __fromCanvasComponent: !0,
                            children: o(r, {
                              children: o(f.p, {
                                className: `framer-styles-preset-sak9x6`,
                                "data-styles-preset": `vVaZ0SXla`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243)))`,
                                },
                                children: `Monthly`,
                              }),
                            }),
                            className: `framer-3p24fl`,
                            fonts: [`Inter`],
                            layoutDependency: O,
                            layoutId: `oyTGVKXvl`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              thyCOPQRE: {
                                "--extracted-r6o4lv": `var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211))`,
                              },
                              ttFDUZYx2: {
                                "--extracted-r6o4lv": `var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211))`,
                              },
                              tThySQrUg: {
                                "--extracted-r6o4lv": `var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...q(
                              {
                                thyCOPQRE: {
                                  children: o(r, {
                                    children: o(f.p, {
                                      className: `framer-styles-preset-sak9x6`,
                                      "data-styles-preset": `vVaZ0SXla`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)))`,
                                      },
                                      children: `Monthly`,
                                    }),
                                  }),
                                },
                                ttFDUZYx2: {
                                  children: o(r, {
                                    children: o(f.p, {
                                      className: `framer-styles-preset-sak9x6`,
                                      "data-styles-preset": `vVaZ0SXla`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)))`,
                                      },
                                      children: `Monthly`,
                                    }),
                                  }),
                                },
                                tThySQrUg: {
                                  children: o(r, {
                                    children: o(f.p, {
                                      className: `framer-styles-preset-sak9x6`,
                                      "data-styles-preset": `vVaZ0SXla`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)))`,
                                      },
                                      children: `Monthly`,
                                    }),
                                  }),
                                },
                              },
                              b,
                              T
                            ),
                          }),
                          o(f.div, {
                            className: `framer-12ijboo`,
                            "data-framer-name": `Toggle`,
                            "data-highlight": !0,
                            layoutDependency: O,
                            layoutId: `wPjLujlEg`,
                            onTap: A,
                            style: {
                              backgroundColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            },
                            variants: {
                              thyCOPQRE: {
                                backgroundColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                              },
                              ttFDUZYx2: {
                                backgroundColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                              },
                              tThySQrUg: {
                                backgroundColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                              },
                            },
                            ...q(
                              {
                                N2HRaxhKF: { onTap: N },
                                thyCOPQRE: { onTap: ge },
                                ttFDUZYx2: { onTap: me },
                                tThySQrUg: { onTap: P },
                                XRyXnIHM0: { onTap: he },
                              },
                              b,
                              T
                            ),
                            children: o(f.div, {
                              className: `framer-1aao9q9`,
                              "data-framer-name": `Toggle Indicator`,
                              layoutDependency: O,
                              layoutId: `emGbeTdgf`,
                              style: {
                                backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                borderBottomLeftRadius: 7,
                                borderBottomRightRadius: 7,
                                borderTopLeftRadius: 7,
                                borderTopRightRadius: 7,
                              },
                            }),
                          }),
                          o(g, {
                            __fromCanvasComponent: !0,
                            children: o(r, {
                              children: o(f.p, {
                                className: `framer-styles-preset-sak9x6`,
                                "data-styles-preset": `vVaZ0SXla`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)))`,
                                },
                                children: `Yearly`,
                              }),
                            }),
                            className: `framer-18do121`,
                            fonts: [`Inter`],
                            layoutDependency: O,
                            layoutId: `c6zssufBi`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              thyCOPQRE: {
                                "--extracted-r6o4lv": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                              },
                              ttFDUZYx2: {
                                "--extracted-r6o4lv": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                              },
                              tThySQrUg: {
                                "--extracted-r6o4lv": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...q(
                              {
                                thyCOPQRE: {
                                  children: o(r, {
                                    children: o(f.p, {
                                      className: `framer-styles-preset-sak9x6`,
                                      "data-styles-preset": `vVaZ0SXla`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243)))`,
                                      },
                                      children: `Yearly`,
                                    }),
                                  }),
                                },
                                ttFDUZYx2: {
                                  children: o(r, {
                                    children: o(f.p, {
                                      className: `framer-styles-preset-sak9x6`,
                                      "data-styles-preset": `vVaZ0SXla`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243)))`,
                                      },
                                      children: `Yearly`,
                                    }),
                                  }),
                                },
                                tThySQrUg: {
                                  children: o(r, {
                                    children: o(f.p, {
                                      className: `framer-styles-preset-sak9x6`,
                                      "data-styles-preset": `vVaZ0SXla`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243)))`,
                                      },
                                      children: `Yearly`,
                                    }),
                                  }),
                                },
                              },
                              b,
                              T
                            ),
                          }),
                        ],
                      }),
                      c(f.div, {
                        className: `framer-bpqnxn`,
                        "data-framer-name": `Card Container`,
                        layoutDependency: O,
                        layoutId: `LiILOwfaL`,
                        children: [
                          c(f.div, {
                            className: `framer-17562pn`,
                            "data-border": !0,
                            "data-framer-name": `Card Container`,
                            layoutDependency: O,
                            layoutId: `YCUCM_LCu`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `2px 2px 2px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, rgb(172, 183, 255))`,
                            },
                            children: [
                              c(f.div, {
                                className: `framer-1ky5pn4`,
                                "data-framer-name": `Card Header Group`,
                                layoutDependency: O,
                                layoutId: `Ex79SDE_D`,
                                children: [
                                  o(K, {
                                    animated: !0,
                                    className: `framer-1vy10yj`,
                                    layoutDependency: O,
                                    layoutId: `jVLxIObmR`,
                                    style: {
                                      "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                      "--js9iwy": 2,
                                    },
                                  }),
                                  c(f.div, {
                                    className: `framer-kw8pcs`,
                                    "data-framer-name": `Tier Info Group`,
                                    layoutDependency: O,
                                    layoutId: `F0eHs8Lvg`,
                                    children: [
                                      o(g, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(f.h3, {
                                            className: `framer-styles-preset-1pj8wqs`,
                                            "data-styles-preset": `Z7CzuxNJN`,
                                            dir: `auto`,
                                            children: `Personal`,
                                          }),
                                        }),
                                        className: `framer-1qvd76t`,
                                        fonts: [`Inter`],
                                        layoutDependency: O,
                                        layoutId: `codpCqRy6`,
                                        style: {
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(g, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(f.p, {
                                            className: `framer-styles-preset-sak9x6`,
                                            "data-styles-preset": `vVaZ0SXla`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136)))`,
                                            },
                                            children: `For a single user`,
                                          }),
                                        }),
                                        className: `framer-ge0vs8`,
                                        fonts: [`Inter`],
                                        layoutDependency: O,
                                        layoutId: `wjL0BycPq`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        variants: {
                                          N2HRaxhKF: {
                                            "--extracted-2gxw0f": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                          },
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...q(
                                          {
                                            N2HRaxhKF: {
                                              children: c(r, {
                                                children: [
                                                  o(f.p, {
                                                    className: `framer-styles-preset-sak9x6`,
                                                    "data-styles-preset": `vVaZ0SXla`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136)))`,
                                                    },
                                                    children: `For a single user`,
                                                  }),
                                                  o(f.p, {
                                                    className: `framer-styles-preset-sak9x6`,
                                                    "data-styles-preset": `vVaZ0SXla`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--extracted-2gxw0f, var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136)))`,
                                                    },
                                                    children: o(f.br, {
                                                      className: `trailing-break`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            },
                                          },
                                          b,
                                          T
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(f.div, {
                                className: `framer-8ld6ni`,
                                "data-framer-name": `Price Display Group`,
                                layoutDependency: O,
                                layoutId: `R3HBIzEH3`,
                                children: [
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.h2, {
                                        className: `framer-styles-preset-d3e5g2`,
                                        "data-styles-preset": `OY7GyAvvP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                        },
                                        children: `$20`,
                                      }),
                                    }),
                                    className: `framer-1ejuzyd`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `LWXCopUBr`,
                                    style: {
                                      "--extracted-1of0zx5": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...q(
                                      {
                                        thyCOPQRE: {
                                          children: o(r, {
                                            children: o(f.h2, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                              },
                                              children: `$14`,
                                            }),
                                          }),
                                        },
                                        ttFDUZYx2: {
                                          children: o(r, {
                                            children: o(f.h2, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                              },
                                              children: `$14`,
                                            }),
                                          }),
                                        },
                                        tThySQrUg: {
                                          children: o(r, {
                                            children: o(f.h2, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                              },
                                              children: `$14`,
                                            }),
                                          }),
                                        },
                                      },
                                      b,
                                      T
                                    ),
                                  }),
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.h3, {
                                        className: `framer-styles-preset-1pj8wqs`,
                                        "data-styles-preset": `Z7CzuxNJN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136)))`,
                                        },
                                        children: `/mo`,
                                      }),
                                    }),
                                    className: `framer-veg794`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `X1UZhfRhZ`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(w, {
                                height: 44,
                                width: `300px`,
                                y:
                                  (d?.y || 0) +
                                  0 +
                                  (((d?.height || 605) - 0 - 605) / 2 + 31 + 55) +
                                  0 +
                                  25 +
                                  213.6,
                                ...q(
                                  {
                                    N2HRaxhKF: {
                                      width: `200px`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        (((d?.height || 649) - 0 - 649) / 2 + 31 + 55) +
                                        0 +
                                        25 +
                                        227,
                                    },
                                    thyCOPQRE: {
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        (((d?.height || 1673) - 0 - 1673) / 2 + 31 + 55) +
                                        0 +
                                        0 +
                                        25 +
                                        209.6,
                                    },
                                    tThySQrUg: {
                                      width: `200px`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        (((d?.height || 649) - 0 - 649) / 2 + 31 + 55) +
                                        0 +
                                        25 +
                                        227,
                                    },
                                    XRyXnIHM0: {
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        (((d?.height || 1673) - 0 - 1673) / 2 + 31 + 55) +
                                        0 +
                                        0 +
                                        25 +
                                        209.6,
                                    },
                                  },
                                  b,
                                  T
                                ),
                                children: o(ne, {
                                  className: `framer-48gyqc-container`,
                                  layoutDependency: O,
                                  layoutId: `vLnyRy3xl-container`,
                                  nodeId: `vLnyRy3xl`,
                                  rendersWithMotion: !0,
                                  scopeId: `XGeDolJD0`,
                                  children: o(F, {
                                    bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                    dMzFGkb3u: !0,
                                    dP0U8qPjN: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                    F9tZ22mws: {
                                      borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                      borderStyle: `solid`,
                                      borderWidth: 2,
                                    },
                                    height: `100%`,
                                    id: `vLnyRy3xl`,
                                    jfeAUucDj: j,
                                    layoutId: `vLnyRy3xl`,
                                    lnJBzRgIM: `Get it now`,
                                    MK840EHqT: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                    ns0eNpEfF: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255))`,
                                    SLp3DWZqR: !1,
                                    style: { height: `100%`, width: `100%` },
                                    TWaZPhsrs: `https://apps.apple.com/`,
                                    variant: J(`nhzWZDlVc`),
                                    vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                    wDmZ1dhUo: M,
                                    width: `100%`,
                                    ZEAGlJD1F: {
                                      borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                      borderStyle: `solid`,
                                      borderWidth: 2,
                                    },
                                  }),
                                }),
                              }),
                              o(f.div, {
                                className: `framer-no8p0d`,
                                "data-framer-name": `Component Group`,
                                layoutDependency: O,
                                layoutId: `u66YwPNOz`,
                                children: o(S, {
                                  className: `framer-6qlxia`,
                                  layoutDependency: O,
                                  layoutId: `SomyuFEfk`,
                                  requiresOverflowVisible: !0,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 312 1" overflow="visible"><path d="M 0 0 L 312 0" fill="transparent" stroke="var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)) /* {&quot;name&quot;:&quot;300&quot;} */" stroke-linecap="round"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      N2HRaxhKF: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 1" overflow="visible"><path d="M 0 0 L 240 0" fill="transparent" stroke="var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)) /* {&quot;name&quot;:&quot;300&quot;} */" stroke-linecap="round"></path></svg>`,
                                      },
                                      tThySQrUg: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 1" overflow="visible"><path d="M 0 0 L 240 0" fill="transparent" stroke="var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)) /* {&quot;name&quot;:&quot;300&quot;} */" stroke-linecap="round"></path></svg>`,
                                      },
                                    },
                                    b,
                                    T
                                  ),
                                }),
                              }),
                              c(f.div, {
                                className: `framer-fzjkkg`,
                                "data-framer-name": `Features List Container`,
                                layoutDependency: O,
                                layoutId: `Z2uoe9Y9t`,
                                children: [
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1y3tbh`,
                                        "data-styles-preset": `HutzmjBVA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(73, 82, 109)))`,
                                        },
                                        children: `Everything in Free, plus:`,
                                      }),
                                    }),
                                    className: `framer-1eo2xwn`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `m3liLC_9z`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(73, 82, 109))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(f.div, {
                                    className: `framer-vzl760`,
                                    "data-framer-name": `Features List Wrapper`,
                                    layoutDependency: O,
                                    layoutId: `LqQbGC4U0`,
                                    children: [
                                      c(f.div, {
                                        className: `framer-z5592b`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `gwZPJB4BF`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-irfkh1`,
                                            layoutDependency: O,
                                            layoutId: `Lf7Tyki8s`,
                                            style: {
                                              "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                                },
                                                children: `Basic Voice Capture`,
                                              }),
                                            }),
                                            className: `framer-c3nt1l`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `heQJX4mqf`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(f.div, {
                                        className: `framer-1jj7bn6`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `ih8fUfpXt`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-ih1hj0`,
                                            layoutDependency: O,
                                            layoutId: `Eu_ngcdyS`,
                                            style: {
                                              "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                                },
                                                children: `1 Calendar Sync`,
                                              }),
                                            }),
                                            className: `framer-m1yr4p`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `F2GPujQ4q`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(f.div, {
                                        className: `framer-jct1fk`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `W_n1uEfj5`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-11dg78v`,
                                            layoutDependency: O,
                                            layoutId: `xmGr0Ht4j`,
                                            style: {
                                              "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                                },
                                                children: `Standard Task Dashboard`,
                                              }),
                                            }),
                                            className: `framer-wstw3w`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `MwXNWjNbn`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(f.div, {
                                        className: `framer-g339j`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `zuCOUe1lK`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-1wmmp1b`,
                                            layoutDependency: O,
                                            layoutId: `HMJhu2gOP`,
                                            style: {
                                              "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                                },
                                                children: `Community Support`,
                                              }),
                                            }),
                                            className: `framer-dsgh4z`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `cWlAOn7xf`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(f.div, {
                                className: `framer-b8n87e`,
                                layoutDependency: O,
                                layoutId: `tYAs5FpPC`,
                                children: [
                                  o(f.div, {
                                    className: `framer-l16llx`,
                                    layoutDependency: O,
                                    layoutId: `u2YZHQ_fq`,
                                    children: o(S, {
                                      className: `framer-1wyexrk`,
                                      layoutDependency: O,
                                      layoutId: `dyv_wVBXQ`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-21xkpv`,
                                    layoutDependency: O,
                                    layoutId: `xUd3YpnGT`,
                                    style: { rotate: 180 },
                                    children: o(S, {
                                      className: `framer-1aoecjq`,
                                      layoutDependency: O,
                                      layoutId: `kkF_IuSPd`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-10hqczn`,
                                    layoutDependency: O,
                                    layoutId: `Uz9TSOEDI`,
                                    style: { rotate: 270 },
                                    children: o(S, {
                                      className: `framer-1sqi614`,
                                      layoutDependency: O,
                                      layoutId: `RXolMTHTP`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-fs77uw`,
                                    layoutDependency: O,
                                    layoutId: `LJar58t9B`,
                                    style: { rotate: 90 },
                                    children: o(S, {
                                      className: `framer-1bnmg4e`,
                                      layoutDependency: O,
                                      layoutId: `wVxjCDeXE`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c(f.div, {
                            className: `framer-bj4wlo`,
                            "data-border": !0,
                            "data-framer-name": `Card Container`,
                            layoutDependency: O,
                            layoutId: `DYb5NnHjv`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              background: `radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(0, 67, 195)) 100%)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `2px 2px 2px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, rgb(172, 183, 255))`,
                            },
                            children: [
                              c(f.div, {
                                className: `framer-15160tp`,
                                "data-framer-name": `Card Header Group`,
                                layoutDependency: O,
                                layoutId: `ao56xB0Ya`,
                                children: [
                                  o(V, {
                                    animated: !0,
                                    className: `framer-1a2s6gf`,
                                    layoutDependency: O,
                                    layoutId: `bn7glwtr5`,
                                    style: {
                                      "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                      "--js9iwy": 2,
                                    },
                                  }),
                                  c(f.div, {
                                    className: `framer-5r0mfy`,
                                    "data-framer-name": `Tier Info Group`,
                                    layoutDependency: O,
                                    layoutId: `ehQvK5_B1`,
                                    children: [
                                      o(g, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(f.h3, {
                                            className: `framer-styles-preset-1pj8wqs`,
                                            "data-styles-preset": `Z7CzuxNJN`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                            },
                                            children: `Professional`,
                                          }),
                                        }),
                                        className: `framer-17ep0h1`,
                                        fonts: [`Inter`],
                                        layoutDependency: O,
                                        layoutId: `vSkKDG184`,
                                        style: {
                                          "--extracted-a0htzi": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(g, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(f.p, {
                                            className: `framer-styles-preset-sak9x6`,
                                            "data-styles-preset": `vVaZ0SXla`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(200, 207, 255)))`,
                                            },
                                            children: `For dedicated high-performers.`,
                                          }),
                                        }),
                                        className: `framer-f9j2mr`,
                                        fonts: [`Inter`],
                                        layoutDependency: O,
                                        layoutId: `LJe7PQkYy`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(200, 207, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(f.div, {
                                className: `framer-10pzhkl`,
                                "data-framer-name": `Price Display Group`,
                                layoutDependency: O,
                                layoutId: `Nzy8Q7AAL`,
                                children: [
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.h2, {
                                        className: `framer-styles-preset-d3e5g2`,
                                        "data-styles-preset": `OY7GyAvvP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                        },
                                        children: `$39`,
                                      }),
                                    }),
                                    className: `framer-15tvtc5`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `K3rUt3tD9`,
                                    style: {
                                      "--extracted-1of0zx5": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...q(
                                      {
                                        thyCOPQRE: {
                                          children: o(r, {
                                            children: o(f.h2, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                              },
                                              children: `$20`,
                                            }),
                                          }),
                                        },
                                        ttFDUZYx2: {
                                          children: o(r, {
                                            children: o(f.h2, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                              },
                                              children: `$20`,
                                            }),
                                          }),
                                        },
                                        tThySQrUg: {
                                          children: o(r, {
                                            children: o(f.h2, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                              },
                                              children: `$20`,
                                            }),
                                          }),
                                        },
                                      },
                                      b,
                                      T
                                    ),
                                  }),
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.h3, {
                                        className: `framer-styles-preset-1pj8wqs`,
                                        "data-styles-preset": `Z7CzuxNJN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(200, 207, 255)))`,
                                        },
                                        children: `/mo`,
                                      }),
                                    }),
                                    className: `framer-1jetbh0`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `RQ5RD1QrO`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(200, 207, 255))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(w, {
                                height: 44,
                                width: `300px`,
                                y:
                                  (d?.y || 0) +
                                  0 +
                                  (((d?.height || 605) - 0 - 605) / 2 + 31 + 55) +
                                  0 +
                                  25 +
                                  213.6,
                                ...q(
                                  {
                                    N2HRaxhKF: {
                                      width: `200px`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        (((d?.height || 649) - 0 - 649) / 2 + 31 + 55) +
                                        0 +
                                        25 +
                                        280,
                                    },
                                    thyCOPQRE: {
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        (((d?.height || 1673) - 0 - 1673) / 2 + 31 + 55) +
                                        0 +
                                        534 +
                                        25 +
                                        209.6,
                                    },
                                    tThySQrUg: {
                                      width: `200px`,
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        (((d?.height || 649) - 0 - 649) / 2 + 31 + 55) +
                                        0 +
                                        25 +
                                        280,
                                    },
                                    XRyXnIHM0: {
                                      y:
                                        (d?.y || 0) +
                                        0 +
                                        (((d?.height || 1673) - 0 - 1673) / 2 + 31 + 55) +
                                        0 +
                                        534 +
                                        25 +
                                        209.6,
                                    },
                                  },
                                  b,
                                  T
                                ),
                                children: o(ne, {
                                  className: `framer-yqz55d-container`,
                                  layoutDependency: O,
                                  layoutId: `VicR7iC9j-container`,
                                  nodeId: `VicR7iC9j`,
                                  rendersWithMotion: !0,
                                  scopeId: `XGeDolJD0`,
                                  children: o(F, {
                                    bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                    dMzFGkb3u: !0,
                                    dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                    F9tZ22mws: {
                                      borderColor: `rgba(20, 23, 33, 0)`,
                                      borderStyle: `solid`,
                                      borderWidth: 0,
                                    },
                                    height: `100%`,
                                    id: `VicR7iC9j`,
                                    jfeAUucDj: j,
                                    layoutId: `VicR7iC9j`,
                                    lnJBzRgIM: `Get Pro now`,
                                    MK840EHqT: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                    ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                    SLp3DWZqR: !1,
                                    style: { height: `100%`, width: `100%` },
                                    TWaZPhsrs: `https://apps.apple.com/`,
                                    variant: J(`nhzWZDlVc`),
                                    vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                    wDmZ1dhUo: M,
                                    width: `100%`,
                                    ZEAGlJD1F: {
                                      borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                      borderStyle: `solid`,
                                      borderWidth: 2,
                                    },
                                  }),
                                }),
                              }),
                              o(f.div, {
                                className: `framer-14cqlle`,
                                "data-framer-name": `Component Group`,
                                layoutDependency: O,
                                layoutId: `y1ttU5Yt5`,
                                children: o(S, {
                                  className: `framer-jixfvu`,
                                  layoutDependency: O,
                                  layoutId: `VR8oXEDNY`,
                                  requiresOverflowVisible: !0,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 312 1" overflow="visible"><path d="M 0 0 L 312 0" fill="transparent" stroke="var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)) /* {&quot;name&quot;:&quot;300&quot;} */" stroke-linecap="round"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              c(f.div, {
                                className: `framer-175t587`,
                                "data-framer-name": `Features List Container`,
                                layoutDependency: O,
                                layoutId: `yZ1sJOxeb`,
                                children: [
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1y3tbh`,
                                        "data-styles-preset": `HutzmjBVA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(228, 231, 255)))`,
                                        },
                                        children: `Everything in Personal, plus:`,
                                      }),
                                    }),
                                    className: `framer-1yv01dl`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `ZNloXpDEc`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(228, 231, 255))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(f.div, {
                                    className: `framer-newod8`,
                                    "data-framer-name": `Component Group`,
                                    layoutDependency: O,
                                    layoutId: `ePIoYQV7B`,
                                    children: [
                                      c(f.div, {
                                        className: `framer-1q8qsrr`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `UzNYAXIs7`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-14fna2n`,
                                            layoutDependency: O,
                                            layoutId: `YJXuyM8oc`,
                                            style: {
                                              "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                                },
                                                children: `Unlimited Voice Capture`,
                                              }),
                                            }),
                                            className: `framer-1p6tkxy`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `ChwL4xo47`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(f.div, {
                                        className: `framer-1ddk7im`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `OrKK7dCMk`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-1cttgar`,
                                            layoutDependency: O,
                                            layoutId: `QTelPpeh3`,
                                            style: {
                                              "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                                },
                                                children: `Universal Calendar Sync`,
                                              }),
                                            }),
                                            className: `framer-115ukn7`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `azP7XX0QP`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(f.div, {
                                        className: `framer-1cavdws`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `Dxx8STo7r`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-132i8r6`,
                                            layoutDependency: O,
                                            layoutId: `YX7xzdAdQ`,
                                            style: {
                                              "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                                },
                                                children: `AI Priority Flagging`,
                                              }),
                                            }),
                                            className: `framer-nz8exc`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `iuH56Rcu6`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(f.div, {
                                        className: `framer-1hmpzbg`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `HLHT_uk3y`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-wakukc`,
                                            layoutDependency: O,
                                            layoutId: `NKqtwdx51`,
                                            style: {
                                              "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251)))`,
                                                },
                                                children: `Auto-Rescheduling Engine`,
                                              }),
                                            }),
                                            className: `framer-1a4parp`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `W021cAlr9`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(f.div, {
                                className: `framer-6x3c14`,
                                layoutDependency: O,
                                layoutId: `JCJ3sG2G_`,
                                children: [
                                  o(f.div, {
                                    className: `framer-xslkqt`,
                                    layoutDependency: O,
                                    layoutId: `AypNtpEII`,
                                    children: o(S, {
                                      className: `framer-pz0qqc`,
                                      layoutDependency: O,
                                      layoutId: `r9qWVYVLe`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-pv7iax`,
                                    layoutDependency: O,
                                    layoutId: `jzmVO7qa2`,
                                    style: { rotate: 180 },
                                    children: o(S, {
                                      className: `framer-epko39`,
                                      layoutDependency: O,
                                      layoutId: `velswsRWv`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-1en5hu`,
                                    layoutDependency: O,
                                    layoutId: `I5NhECtZ7`,
                                    style: { rotate: 270 },
                                    children: o(S, {
                                      className: `framer-10z4hn6`,
                                      layoutDependency: O,
                                      layoutId: `E64kuxouU`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-k0ro8y`,
                                    layoutDependency: O,
                                    layoutId: `o1dCNHw6C`,
                                    style: { rotate: 90 },
                                    children: o(S, {
                                      className: `framer-ss4k9f`,
                                      layoutDependency: O,
                                      layoutId: `j1LFTQ94W`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c(f.div, {
                            className: `framer-409tkd`,
                            "data-border": !0,
                            "data-framer-name": `Card Container`,
                            layoutDependency: O,
                            layoutId: `sSQdlEFxM`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `2px 2px 2px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, rgb(172, 183, 255))`,
                            },
                            children: [
                              c(f.div, {
                                className: `framer-8zv4xa`,
                                "data-framer-name": `Card Header Group`,
                                layoutDependency: O,
                                layoutId: `aH8nlBYfG`,
                                children: [
                                  o(U, {
                                    animated: !0,
                                    className: `framer-u5kpko`,
                                    layoutDependency: O,
                                    layoutId: `B55FIO5lC`,
                                    style: {
                                      "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                      "--js9iwy": 2,
                                    },
                                  }),
                                  c(f.div, {
                                    className: `framer-19x6e08`,
                                    "data-framer-name": `Tier Info Group`,
                                    layoutDependency: O,
                                    layoutId: `ifXA_M_ma`,
                                    children: [
                                      o(g, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(f.h3, {
                                            className: `framer-styles-preset-1pj8wqs`,
                                            "data-styles-preset": `Z7CzuxNJN`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                            },
                                            children: `Team`,
                                          }),
                                        }),
                                        className: `framer-1ey0t9k`,
                                        fonts: [`Inter`],
                                        layoutDependency: O,
                                        layoutId: `EJaaCsfK7`,
                                        style: {
                                          "--extracted-a0htzi": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(g, {
                                        __fromCanvasComponent: !0,
                                        children: o(r, {
                                          children: o(f.p, {
                                            className: `framer-styles-preset-sak9x6`,
                                            "data-styles-preset": `vVaZ0SXla`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136)))`,
                                            },
                                            children: `For teams and growing businesses.`,
                                          }),
                                        }),
                                        className: `framer-2x7t0e`,
                                        fonts: [`Inter`],
                                        layoutDependency: O,
                                        layoutId: `PIzgIVonq`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(f.div, {
                                className: `framer-6w8d2e`,
                                "data-framer-name": `Price Display Group`,
                                layoutDependency: O,
                                layoutId: `Wv8qHl7vR`,
                                children: [
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.h2, {
                                        className: `framer-styles-preset-d3e5g2`,
                                        "data-styles-preset": `OY7GyAvvP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                        },
                                        children: `$??`,
                                      }),
                                    }),
                                    className: `framer-1khe3aq`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `LLYsF7zNk`,
                                    style: {
                                      "--extracted-1of0zx5": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.h3, {
                                        className: `framer-styles-preset-1pj8wqs`,
                                        "data-styles-preset": `Z7CzuxNJN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136)))`,
                                        },
                                        children: `/mo`,
                                      }),
                                    }),
                                    className: `framer-1laer2d`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `j0Z78TExh`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(ie, {
                                links: [
                                  {
                                    href: { webPageId: `UfhygGALz` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `UfhygGALz` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `UfhygGALz` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `UfhygGALz` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `UfhygGALz` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `UfhygGALz` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  o(w, {
                                    height: 44,
                                    width: `300px`,
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      (((d?.height || 605) - 0 - 605) / 2 + 31 + 55) +
                                      0 +
                                      25 +
                                      213.6,
                                    ...q(
                                      {
                                        N2HRaxhKF: {
                                          width: `200px`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            (((d?.height || 649) - 0 - 649) / 2 + 31 + 55) +
                                            0 +
                                            25 +
                                            227,
                                        },
                                        thyCOPQRE: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            (((d?.height || 1673) - 0 - 1673) / 2 + 31 + 55) +
                                            0 +
                                            1068 +
                                            25 +
                                            209.6,
                                        },
                                        tThySQrUg: {
                                          width: `200px`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            (((d?.height || 649) - 0 - 649) / 2 + 31 + 55) +
                                            0 +
                                            25 +
                                            227,
                                        },
                                        XRyXnIHM0: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            (((d?.height || 1673) - 0 - 1673) / 2 + 31 + 55) +
                                            0 +
                                            1068 +
                                            25 +
                                            209.6,
                                        },
                                      },
                                      b,
                                      T
                                    ),
                                    children: o(ne, {
                                      className: `framer-12kf6wl-container`,
                                      layoutDependency: O,
                                      layoutId: `MstSHSM5U-container`,
                                      nodeId: `MstSHSM5U`,
                                      rendersWithMotion: !0,
                                      scopeId: `XGeDolJD0`,
                                      children: o(F, {
                                        bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                        dMzFGkb3u: !1,
                                        dP0U8qPjN: `rgba(247, 247, 250, 0)`,
                                        F9tZ22mws: {
                                          borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                          borderStyle: `solid`,
                                          borderWidth: 2,
                                        },
                                        height: `100%`,
                                        id: `MstSHSM5U`,
                                        jfeAUucDj: pe,
                                        layoutId: `MstSHSM5U`,
                                        lnJBzRgIM: `Get Inquiry`,
                                        MK840EHqT: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                        ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                        SLp3DWZqR: !0,
                                        style: { height: `100%`, width: `100%` },
                                        TWaZPhsrs: e[0],
                                        variant: J(`nhzWZDlVc`),
                                        vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                        wDmZ1dhUo: M,
                                        width: `100%`,
                                        ZEAGlJD1F: {
                                          borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                          borderStyle: `solid`,
                                          borderWidth: 2,
                                        },
                                        ...q(
                                          {
                                            N2HRaxhKF: { TWaZPhsrs: e[4] },
                                            thyCOPQRE: { TWaZPhsrs: e[3] },
                                            ttFDUZYx2: { TWaZPhsrs: e[1] },
                                            tThySQrUg: { TWaZPhsrs: e[5] },
                                            XRyXnIHM0: { TWaZPhsrs: e[2] },
                                          },
                                          b,
                                          T
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              o(f.div, {
                                className: `framer-1gyhu52`,
                                "data-framer-name": `Component Group`,
                                layoutDependency: O,
                                layoutId: `egFrw0bE9`,
                                children: o(S, {
                                  className: `framer-1fk67pn`,
                                  layoutDependency: O,
                                  layoutId: `cUuKrfoJR`,
                                  requiresOverflowVisible: !0,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 312 1" overflow="visible"><path d="M 0 0 L 312 0" fill="transparent" stroke="var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, rgb(185, 190, 211)) /* {&quot;name&quot;:&quot;300&quot;} */" stroke-linecap="round"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              c(f.div, {
                                className: `framer-11rdmlr`,
                                "data-framer-name": `Features List Container`,
                                layoutDependency: O,
                                layoutId: `bmSJ9vNKP`,
                                children: [
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(f.p, {
                                        className: `framer-styles-preset-1y3tbh`,
                                        "data-styles-preset": `HutzmjBVA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(73, 82, 109)))`,
                                        },
                                        children: `Everything in Pro, plus:`,
                                      }),
                                    }),
                                    className: `framer-1boy8n5`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `lNhSBioc5`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(73, 82, 109))`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(f.div, {
                                    className: `framer-1bhz4lt`,
                                    "data-framer-name": `Features List Wrapper`,
                                    layoutDependency: O,
                                    layoutId: `vJotqDOVV`,
                                    children: [
                                      c(f.div, {
                                        className: `framer-h6gnka`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `pPgJzB7j2`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-y14xyz`,
                                            layoutDependency: O,
                                            layoutId: `BISHBGl9d`,
                                            style: {
                                              "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                                },
                                                children: `Shared Workspace Sync`,
                                              }),
                                            }),
                                            className: `framer-6vvqve`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `X1rNRMycs`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(f.div, {
                                        className: `framer-1g6489h`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `QDFfakvjV`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-1ocmc9w`,
                                            layoutDependency: O,
                                            layoutId: `p2wS6Gpsv`,
                                            style: {
                                              "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                                },
                                                children: `Custom Team Analytics Dashboard`,
                                              }),
                                            }),
                                            className: `framer-ejesty`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `kr7eOfw7M`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(f.div, {
                                        className: `framer-1gxbs3c`,
                                        "data-framer-name": `Feature List Item`,
                                        layoutDependency: O,
                                        layoutId: `yT3QgJbWL`,
                                        children: [
                                          o(G, {
                                            animated: !0,
                                            className: `framer-n7h8mo`,
                                            layoutDependency: O,
                                            layoutId: `hqmcihxD4`,
                                            style: {
                                              "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--js9iwy": 2,
                                            },
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(f.p, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33)))`,
                                                },
                                                children: `Priority 24/7 Support`,
                                              }),
                                            }),
                                            className: `framer-1jtebcw`,
                                            fonts: [`Inter`],
                                            layoutDependency: O,
                                            layoutId: `O0_HCR5FQ`,
                                            style: {
                                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(f.div, {
                                className: `framer-3jhapj`,
                                layoutDependency: O,
                                layoutId: `kBl8yYAHl`,
                                children: [
                                  o(f.div, {
                                    className: `framer-sn0kcj`,
                                    layoutDependency: O,
                                    layoutId: `Hjd_moiDZ`,
                                    children: o(S, {
                                      className: `framer-1baiitb`,
                                      layoutDependency: O,
                                      layoutId: `ST0rHOFhA`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-1rkdz2v`,
                                    layoutDependency: O,
                                    layoutId: `It8lmAjnk`,
                                    style: { rotate: 180 },
                                    children: o(S, {
                                      className: `framer-sixzzx`,
                                      layoutDependency: O,
                                      layoutId: `iEdWY4bkX`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-z84jsl`,
                                    layoutDependency: O,
                                    layoutId: `FWuX5WNZD`,
                                    style: { rotate: 270 },
                                    children: o(S, {
                                      className: `framer-8duccn`,
                                      layoutDependency: O,
                                      layoutId: `gDYpnxJ3Y`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(f.div, {
                                    className: `framer-1s4uahi`,
                                    layoutDependency: O,
                                    layoutId: `W4yzxgSrh`,
                                    style: { rotate: 90 },
                                    children: o(S, {
                                      className: `framer-bvagtb`,
                                      layoutDependency: O,
                                      layoutId: `KgiujjI0x`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Zu0YI.framer-d2a2i3, .framer-Zu0YI .framer-d2a2i3 { display: block; }`,
          `.framer-Zu0YI.framer-1mxgeym { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 55px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Zu0YI .framer-13v8t6u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Zu0YI .framer-3p24fl, .framer-Zu0YI .framer-18do121, .framer-Zu0YI .framer-1qvd76t, .framer-Zu0YI .framer-ge0vs8, .framer-Zu0YI .framer-veg794, .framer-Zu0YI .framer-c3nt1l, .framer-Zu0YI .framer-m1yr4p, .framer-Zu0YI .framer-wstw3w, .framer-Zu0YI .framer-dsgh4z, .framer-Zu0YI .framer-17ep0h1, .framer-Zu0YI .framer-f9j2mr, .framer-Zu0YI .framer-1jetbh0, .framer-Zu0YI .framer-1p6tkxy, .framer-Zu0YI .framer-115ukn7, .framer-Zu0YI .framer-nz8exc, .framer-Zu0YI .framer-1a4parp, .framer-Zu0YI .framer-1ey0t9k, .framer-Zu0YI .framer-2x7t0e, .framer-Zu0YI .framer-1laer2d, .framer-Zu0YI .framer-6vvqve, .framer-Zu0YI .framer-ejesty, .framer-Zu0YI .framer-1jtebcw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Zu0YI .framer-12ijboo { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 31px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: 70px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Zu0YI .framer-1aao9q9 { flex: none; height: 23px; overflow: visible; position: relative; width: 23px; }`,
          `.framer-Zu0YI .framer-bpqnxn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 519px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1084px; }`,
          `.framer-Zu0YI .framer-17562pn, .framer-Zu0YI .framer-bj4wlo, .framer-Zu0YI .framer-409tkd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: 100%; justify-content: flex-start; overflow: visible; padding: 25px; position: relative; width: 350px; }`,
          `.framer-Zu0YI .framer-1ky5pn4, .framer-Zu0YI .framer-15160tp, .framer-Zu0YI .framer-8zv4xa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 158px; z-index: 2; }`,
          `.framer-Zu0YI .framer-1vy10yj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 47px); position: relative; width: 47px; }`,
          `.framer-Zu0YI .framer-kw8pcs { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Zu0YI .framer-8ld6ni, .framer-Zu0YI .framer-10pzhkl, .framer-Zu0YI .framer-6w8d2e { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-Zu0YI .framer-1ejuzyd, .framer-Zu0YI .framer-15tvtc5, .framer-Zu0YI .framer-1khe3aq { flex: none; height: 53px; position: relative; white-space: pre; width: auto; }`,
          `.framer-Zu0YI .framer-48gyqc-container, .framer-Zu0YI .framer-yqz55d-container, .framer-Zu0YI .framer-12kf6wl-container { flex: none; height: 44px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-Zu0YI .framer-no8p0d, .framer-Zu0YI .framer-14cqlle, .framer-Zu0YI .framer-1gyhu52 { flex: none; height: 1px; overflow: visible; position: relative; width: 312px; z-index: 2; }`,
          `.framer-Zu0YI .framer-6qlxia, .framer-Zu0YI .framer-jixfvu, .framer-Zu0YI .framer-1fk67pn { height: 1px; left: 0px; position: absolute; top: 0px; width: 312px; }`,
          `.framer-Zu0YI .framer-fzjkkg, .framer-Zu0YI .framer-175t587, .framer-Zu0YI .framer-11rdmlr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-Zu0YI .framer-1eo2xwn, .framer-Zu0YI .framer-1yv01dl, .framer-Zu0YI .framer-1boy8n5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Zu0YI .framer-vzl760, .framer-Zu0YI .framer-newod8, .framer-Zu0YI .framer-1bhz4lt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 310px; }`,
          `.framer-Zu0YI .framer-z5592b, .framer-Zu0YI .framer-1jj7bn6, .framer-Zu0YI .framer-jct1fk, .framer-Zu0YI .framer-g339j, .framer-Zu0YI .framer-1q8qsrr, .framer-Zu0YI .framer-1ddk7im, .framer-Zu0YI .framer-1cavdws, .framer-Zu0YI .framer-1hmpzbg, .framer-Zu0YI .framer-h6gnka, .framer-Zu0YI .framer-1g6489h, .framer-Zu0YI .framer-1gxbs3c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 20px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Zu0YI .framer-irfkh1, .framer-Zu0YI .framer-ih1hj0, .framer-Zu0YI .framer-11dg78v, .framer-Zu0YI .framer-1wmmp1b, .framer-Zu0YI .framer-14fna2n, .framer-Zu0YI .framer-1cttgar, .framer-Zu0YI .framer-132i8r6, .framer-Zu0YI .framer-wakukc, .framer-Zu0YI .framer-y14xyz, .framer-Zu0YI .framer-1ocmc9w, .framer-Zu0YI .framer-n7h8mo { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-Zu0YI .framer-b8n87e, .framer-Zu0YI .framer-6x3c14, .framer-Zu0YI .framer-3jhapj { flex: none; height: 100%; overflow: visible; position: absolute; right: 0px; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-Zu0YI .framer-l16llx, .framer-Zu0YI .framer-xslkqt, .framer-Zu0YI .framer-sn0kcj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
          `.framer-Zu0YI .framer-1wyexrk, .framer-Zu0YI .framer-1sqi614, .framer-Zu0YI .framer-1bnmg4e, .framer-Zu0YI .framer-pz0qqc, .framer-Zu0YI .framer-10z4hn6, .framer-Zu0YI .framer-ss4k9f, .framer-Zu0YI .framer-1baiitb, .framer-Zu0YI .framer-8duccn, .framer-Zu0YI .framer-bvagtb { height: 15px; position: relative; width: 15px; }`,
          `.framer-Zu0YI .framer-21xkpv, .framer-Zu0YI .framer-pv7iax, .framer-Zu0YI .framer-1rkdz2v { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 15px; min-width: 15px; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
          `.framer-Zu0YI .framer-1aoecjq, .framer-Zu0YI .framer-epko39, .framer-Zu0YI .framer-sixzzx { height: 15px; left: 0px; position: absolute; top: 1px; width: 15px; }`,
          `.framer-Zu0YI .framer-10hqczn, .framer-Zu0YI .framer-1en5hu, .framer-Zu0YI .framer-z84jsl { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
          `.framer-Zu0YI .framer-fs77uw, .framer-Zu0YI .framer-k0ro8y, .framer-Zu0YI .framer-1s4uahi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
          `.framer-Zu0YI .framer-1a2s6gf, .framer-Zu0YI .framer-u5kpko { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 47px); position: relative; width: 47px; z-index: 2; }`,
          `.framer-Zu0YI .framer-5r0mfy, .framer-Zu0YI .framer-19x6e08 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-Zu0YI.framer-v-1jww087 .framer-12ijboo, .framer-Zu0YI.framer-v-1sjihe8 .framer-12ijboo, .framer-Zu0YI.framer-v-fxto43 .framer-12ijboo { align-content: flex-end; align-items: flex-end; }`,
          `.framer-Zu0YI.framer-v-4vrcl3 .framer-bpqnxn, .framer-Zu0YI.framer-v-1sjihe8 .framer-bpqnxn { flex-direction: column; height: min-content; width: min-content; }`,
          `.framer-Zu0YI.framer-v-4vrcl3 .framer-17562pn, .framer-Zu0YI.framer-v-4vrcl3 .framer-bj4wlo, .framer-Zu0YI.framer-v-4vrcl3 .framer-409tkd, .framer-Zu0YI.framer-v-1sjihe8 .framer-17562pn, .framer-Zu0YI.framer-v-1sjihe8 .framer-bj4wlo, .framer-Zu0YI.framer-v-1sjihe8 .framer-409tkd { height: 519px; }`,
          `.framer-Zu0YI.framer-v-4vrcl3 .framer-1ejuzyd, .framer-Zu0YI.framer-v-4vrcl3 .framer-15tvtc5, .framer-Zu0YI.framer-v-4vrcl3 .framer-1khe3aq, .framer-Zu0YI.framer-v-1sjihe8 .framer-1ejuzyd, .framer-Zu0YI.framer-v-1sjihe8 .framer-15tvtc5, .framer-Zu0YI.framer-v-1sjihe8 .framer-1khe3aq, .framer-Zu0YI.framer-v-2odrla .framer-1ejuzyd, .framer-Zu0YI.framer-v-2odrla .framer-15tvtc5, .framer-Zu0YI.framer-v-2odrla .framer-1khe3aq, .framer-Zu0YI.framer-v-fxto43 .framer-1ejuzyd, .framer-Zu0YI.framer-v-fxto43 .framer-15tvtc5, .framer-Zu0YI.framer-v-fxto43 .framer-1khe3aq { height: auto; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-bpqnxn, .framer-Zu0YI.framer-v-fxto43 .framer-bpqnxn { height: 563px; width: min-content; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-17562pn, .framer-Zu0YI.framer-v-2odrla .framer-bj4wlo, .framer-Zu0YI.framer-v-2odrla .framer-409tkd, .framer-Zu0YI.framer-v-fxto43 .framer-17562pn, .framer-Zu0YI.framer-v-fxto43 .framer-bj4wlo, .framer-Zu0YI.framer-v-fxto43 .framer-409tkd { width: 250px; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-ge0vs8, .framer-Zu0YI.framer-v-fxto43 .framer-ge0vs8 { height: 35px; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-no8p0d, .framer-Zu0YI.framer-v-2odrla .framer-14cqlle, .framer-Zu0YI.framer-v-2odrla .framer-1gyhu52, .framer-Zu0YI.framer-v-fxto43 .framer-no8p0d, .framer-Zu0YI.framer-v-fxto43 .framer-14cqlle, .framer-Zu0YI.framer-v-fxto43 .framer-1gyhu52 { overflow: var(--overflow-clip-fallback, clip); width: 100%; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-6qlxia, .framer-Zu0YI.framer-v-fxto43 .framer-6qlxia { width: 240px; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-vzl760, .framer-Zu0YI.framer-v-2odrla .framer-newod8, .framer-Zu0YI.framer-v-2odrla .framer-1bhz4lt, .framer-Zu0YI.framer-v-fxto43 .framer-vzl760, .framer-Zu0YI.framer-v-fxto43 .framer-newod8, .framer-Zu0YI.framer-v-fxto43 .framer-1bhz4lt { width: 100%; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-jct1fk, .framer-Zu0YI.framer-v-2odrla .framer-1q8qsrr, .framer-Zu0YI.framer-v-2odrla .framer-1ddk7im, .framer-Zu0YI.framer-v-2odrla .framer-1cavdws, .framer-Zu0YI.framer-v-2odrla .framer-1hmpzbg, .framer-Zu0YI.framer-v-2odrla .framer-h6gnka, .framer-Zu0YI.framer-v-2odrla .framer-1g6489h, .framer-Zu0YI.framer-v-fxto43 .framer-1hmpzbg, .framer-Zu0YI.framer-v-fxto43 .framer-1g6489h { height: min-content; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-wstw3w, .framer-Zu0YI.framer-v-2odrla .framer-nz8exc, .framer-Zu0YI.framer-v-2odrla .framer-1a4parp, .framer-Zu0YI.framer-v-2odrla .framer-ejesty, .framer-Zu0YI.framer-v-fxto43 .framer-1a4parp, .framer-Zu0YI.framer-v-fxto43 .framer-ejesty { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-f9j2mr, .framer-Zu0YI.framer-v-fxto43 .framer-f9j2mr { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Zu0YI.framer-v-2odrla .framer-2x7t0e { height: 35px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Zu0YI.framer-v-fxto43 .framer-2x7t0e { height: 35px; white-space: pre-wrap; width: 158px; word-break: break-word; word-wrap: break-word; }`,
          ...Ne,
          ...Be,
          ...De,
          ...Te,
          `.framer-Zu0YI[data-border="true"]::after, .framer-Zu0YI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Zu0YI`
      )),
      (Y.displayName = `Pricing`),
      (Y.defaultProps = { height: 605, width: 1084 }),
      x(Y, {
        variant: {
          options: [`YSVBO8HhW`, `ttFDUZYx2`, `XRyXnIHM0`, `thyCOPQRE`, `N2HRaxhKF`, `tThySQrUg`],
          optionTitles: [
            `Desktop (Monthly)`,
            `Desktop (Yearly)`,
            `Mobile (Monthly)`,
            `Mobile (Yearly)`,
            `Tablet (Monthly)`,
            `Tablet (Yearly)`,
          ],
          title: `Variant`,
          type: k.Enum,
        },
      }),
      b(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Lt,
          ...Rt,
          ...zt,
          ...Bt,
          ...Vt,
          ...O(Fe),
          ...O(He),
          ...O(Ae),
          ...O(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(F, {}, t)])) }));
  }),
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  X,
  Z,
  Q,
  yn,
  bn,
  xn,
  $,
  Sn;
e(() => {
  (s(),
    p(),
    d(),
    l(),
    it(),
    dt(),
    me(),
    Pe(),
    Ce(),
    Re(),
    ge(),
    Ge(),
    Zt(),
    Ee(),
    xe(),
    be(),
    P(),
    Le(),
    N(),
    Ke(),
    ze(),
    Ze(),
    (Qt = v(ke)),
    ($t = m(D)),
    (en = v(je)),
    (tn = ae(je)),
    (nn = v(L)),
    (rn = v(Y)),
    (an = v(R)),
    (on = v(z)),
    (sn = m(f.div)),
    (cn = v(F)),
    (ln = v(I)),
    (un = {
      B2GHP02uW: `(min-width: 810px) and (max-width: 1199.98px)`,
      jRv06kEpN: `(min-width: 1200px)`,
      yMCYwv3fq: `(max-width: 809.98px)`,
    }),
    (dn = () => typeof document < `u`),
    (fn = []),
    (pn = `framer-NJkSv`),
    (mn = {
      B2GHP02uW: `framer-v-vtlg98`,
      jRv06kEpN: `framer-v-fqy3ta`,
      yMCYwv3fq: `framer-v-11b83ig`,
    }),
    (hn = (e, t, n) => (e && t ? `position` : n)),
    (gn = (e, t) => `translateX(-50%) ${t}`),
    (_n = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (vn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -75,
    }),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 60,
    }),
    (Q = { delay: 0.1, duration: 0.4, ease: [0.62, 0, 0.36, 1], type: `tween` }),
    (yn = { Desktop: `jRv06kEpN`, Phone: `yMCYwv3fq`, Tablet: `B2GHP02uW` }),
    (bn = ({ value: e }) =>
      T()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (xn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: yn[r.variant] ?? r.variant ?? `jRv06kEpN`,
    })),
    ($ = C(
      i(function (e, i) {
        let s = n(null),
          l = i ?? s,
          d = u(),
          { activeLocale: p, setLocale: ne } = de(),
          m = ce(),
          { style: re, className: _, layoutId: v, variant: b, ...x } = xn(e);
        fe(a(() => Xe({}, p), [p]));
        let [C, ae] = le(b, un, !1),
          se = y(pn, Ie, Ye, _e, ve, Oe, we, We),
          T = t(ue)?.isLayoutTemplate,
          O = !!t(ee)?.transition?.layout,
          k = hn(T, O),
          A = () => !dn() || C !== `yMCYwv3fq`,
          j = () => !dn() || C === `yMCYwv3fq`;
        return (
          oe(),
          E({}),
          o(ue.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: yn,
              primaryVariantId: `jRv06kEpN`,
              variantClassNames: mn,
            },
            children: c(te, {
              id: v ?? d,
              children: [
                o(bn, {
                  value: `html body { background: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255)); }`,
                }),
                c(f.div, {
                  ...x,
                  className: y(se, `framer-fqy3ta`, _),
                  ref: l,
                  style: { ...re },
                  children: [
                    c(f.div, {
                      className: `framer-68x88c`,
                      "data-framer-name": `Sticky Navbar`,
                      layout: k,
                      transformTemplate: gn,
                      children: [
                        A() &&
                          o(w, {
                            height: 54,
                            y: 10,
                            children: o($t, {
                              __framer__animate: { transition: _n },
                              __framer__animateOnce: !1,
                              __framer__scrollDirection: { direction: `down`, target: vn },
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-13go4xv-container hidden-11b83ig`,
                              "data-framer-name": `Sticky Navbar`,
                              name: `Sticky Navbar`,
                              nodeId: `WDrhpP3Zj`,
                              rendersWithMotion: !0,
                              scopeId: `uwEtvwUqf`,
                              children: o(h, {
                                breakpoint: C,
                                overrides: { B2GHP02uW: { variant: X(`Me_b_qMaM`) } },
                                children: o(ke, {
                                  height: `100%`,
                                  id: `WDrhpP3Zj`,
                                  layoutId: `WDrhpP3Zj`,
                                  name: `Sticky Navbar`,
                                  variant: X(`raqMsV85o`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        j() &&
                          o(h, {
                            breakpoint: C,
                            overrides: {
                              yMCYwv3fq: { height: 60, width: `max(100vw, 1px)`, y: 0 },
                            },
                            children: o(w, {
                              children: o(D, {
                                className: `framer-1fjs8r6-container hidden-fqy3ta hidden-vtlg98`,
                                nodeId: `agU8QfHY1`,
                                rendersWithMotion: !0,
                                scopeId: `uwEtvwUqf`,
                                children: o(tn, {
                                  __framer__animateOnce: !1,
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `agU8QfHY1`,
                                  layoutId: `agU8QfHY1`,
                                  style: { width: `100%` },
                                  variant: X(`oqXNvb_1y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    c(f.div, {
                      className: `framer-15gkhw3`,
                      "data-framer-name": `Main`,
                      layout: k,
                      children: [
                        c(`div`, {
                          className: `framer-1ra17f1`,
                          "data-framer-name": `Header Section`,
                          children: [
                            c(`div`, {
                              className: `framer-otqu3j`,
                              "data-border": !0,
                              "data-framer-name": `FAQ Badge Shell`,
                              children: [
                                o(w, {
                                  height: 15,
                                  y: (m?.y || 0) + 150 + 0 + 0 + 0 + 0 + 0 + 9.1,
                                  children: o(D, {
                                    className: `framer-wd7cpv-container`,
                                    nodeId: `z_Ss_za4p`,
                                    scopeId: `uwEtvwUqf`,
                                    children: o(L, {
                                      height: `100%`,
                                      id: `z_Ss_za4p`,
                                      layoutId: `z_Ss_za4p`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                o(g, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-1kyvdj7`,
                                      "data-styles-preset": `s3xaUzb1J`,
                                      dir: `auto`,
                                      children: `Pricing`,
                                    }),
                                  }),
                                  className: `framer-wgr13g`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            o(`div`, {
                              className: `framer-1sdc6iy`,
                              "data-framer-name": `Hero Content`,
                              children: c(`div`, {
                                className: `framer-1p6c5gi`,
                                "data-framer-name": `Copy`,
                                children: [
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`h1`, {
                                        className: `framer-styles-preset-11zleb5`,
                                        "data-styles-preset": `xMscHFbGZ`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                        },
                                        children: `Simple pricing. Infinite focus.`,
                                      }),
                                    }),
                                    className: `framer-1mqtxbu`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(r, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-sak9x6`,
                                        "data-styles-preset": `vVaZ0SXla`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-f48255c3-d64d-4ef7-be0f-da382213e15e, rgb(55, 63, 83))`,
                                        },
                                        children: `Start optimizing your schedule completely free. Upgrade to Pro when you are ready to unlock unlimited AI processing power.`,
                                      }),
                                    }),
                                    className: `framer-hkqxb3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        o(`div`, {
                          className: `framer-qwr1td`,
                          "data-framer-name": `Pricing Section`,
                          children: o(h, {
                            breakpoint: C,
                            overrides: {
                              B2GHP02uW: { width: void 0 },
                              yMCYwv3fq: { width: void 0 },
                            },
                            children: o(w, {
                              height: 605,
                              width: `1200px`,
                              y: (m?.y || 0) + 150 + 0 + 0 + 304 + 0 + 0,
                              children: o($t, {
                                __framer__animate: { transition: Q },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-oz0lf9-container`,
                                nodeId: `L12USjfeQ`,
                                rendersWithMotion: !0,
                                scopeId: `uwEtvwUqf`,
                                children: o(h, {
                                  breakpoint: C,
                                  overrides: {
                                    B2GHP02uW: { variant: X(`N2HRaxhKF`) },
                                    yMCYwv3fq: { variant: X(`XRyXnIHM0`) },
                                  },
                                  children: o(Y, {
                                    height: `100%`,
                                    id: `L12USjfeQ`,
                                    layoutId: `L12USjfeQ`,
                                    style: { width: `100%` },
                                    variant: X(`YSVBO8HhW`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        c(sn, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1k2fnj7`,
                          "data-framer-name": `Features Comparison Section`,
                          children: [
                            c(`div`, {
                              className: `framer-wuw1mg`,
                              "data-framer-name": `Testimonials Intro`,
                              children: [
                                c(`div`, {
                                  className: `framer-oi22sd`,
                                  "data-framer-name": `Testimonials Intro Panel`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-kbq2mw`,
                                      "data-border": !0,
                                      "data-framer-name": `Testimonials Eyebrow`,
                                      children: [
                                        o(w, {
                                          height: 15,
                                          y:
                                            (m?.y || 0) +
                                            150 +
                                            0 +
                                            0 +
                                            989 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            9.1,
                                          children: o(D, {
                                            className: `framer-pn7jed-container`,
                                            nodeId: `ZfMIVq93m`,
                                            scopeId: `uwEtvwUqf`,
                                            children: o(L, {
                                              height: `100%`,
                                              id: `ZfMIVq93m`,
                                              layoutId: `ZfMIVq93m`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        o(g, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-1kyvdj7`,
                                              "data-styles-preset": `s3xaUzb1J`,
                                              dir: `auto`,
                                              children: `Compare Plans`,
                                            }),
                                          }),
                                          className: `framer-q3l7u0`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o(g, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-d3e5g2`,
                                          "data-styles-preset": `OY7GyAvvP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                          },
                                          children: `Compare all features.`,
                                        }),
                                      }),
                                      className: `framer-5kgmoj`,
                                      "data-framer-name": `Testimonials Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                o(g, {
                                  __fromCanvasComponent: !0,
                                  children: o(r, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-1y3tbh`,
                                      "data-styles-preset": `HutzmjBVA`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                      },
                                      children: `Find the perfect plan to optimize your workflow. See exactly what it takes to put your schedule on autopilot.`,
                                    }),
                                  }),
                                  className: `framer-dbinzb`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-18hxx5n`,
                              "data-framer-name": `Table`,
                              children: [
                                c(`div`, {
                                  className: `framer-1892ufv`,
                                  "data-border": !0,
                                  "data-framer-name": `Table `,
                                  children: [
                                    c(`div`, {
                                      className: `framer-180d50v`,
                                      "data-border": !0,
                                      "data-framer-name": `Table Header Row`,
                                      children: [
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`h4`, {
                                                  className: `framer-styles-preset-1t48bm3`,
                                                  "data-styles-preset": `n6gn2zrFO`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Features`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h4`, {
                                                className: `framer-styles-preset-1t48bm3`,
                                                "data-styles-preset": `n6gn2zrFO`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Features`,
                                              }),
                                            }),
                                            className: `framer-1tbgs4r`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`h4`, {
                                                  className: `framer-styles-preset-1t48bm3`,
                                                  "data-styles-preset": `n6gn2zrFO`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Personal`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h4`, {
                                                className: `framer-styles-preset-1t48bm3`,
                                                "data-styles-preset": `n6gn2zrFO`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Personal`,
                                              }),
                                            }),
                                            className: `framer-1xx4q83`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        A() &&
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h4`, {
                                                className: `framer-styles-preset-1t48bm3`,
                                                "data-styles-preset": `n6gn2zrFO`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                                },
                                                children: `Professional`,
                                              }),
                                            }),
                                            className: `framer-1nhjv67 hidden-11b83ig`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        A() &&
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h4`, {
                                                className: `framer-styles-preset-1t48bm3`,
                                                "data-styles-preset": `n6gn2zrFO`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Team`,
                                              }),
                                            }),
                                            className: `framer-1yfo0dz hidden-11b83ig`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-kw8nla`,
                                      "data-border": !0,
                                      "data-framer-name": `Table Row`,
                                      children: [
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1y3tbh`,
                                                  "data-styles-preset": `HutzmjBVA`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Connected Calendars`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Connected Calendars`,
                                              }),
                                            }),
                                            className: `framer-90wr4d`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `1`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `1`,
                                              }),
                                            }),
                                            className: `framer-eww14u`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        A() &&
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                                },
                                                children: `Unlimited`,
                                              }),
                                            }),
                                            className: `framer-1u67wjv hidden-11b83ig`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        A() &&
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Unlimited`,
                                              }),
                                            }),
                                            className: `framer-ubvsaq hidden-11b83ig`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-1po1qdo`,
                                      "data-border": !0,
                                      "data-framer-name": `Table Row`,
                                      children: [
                                        o(g, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-1y3tbh`,
                                              "data-styles-preset": `HutzmjBVA`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              },
                                              children: `Voice Capture Limit`,
                                            }),
                                          }),
                                          className: `framer-1xfkfwu`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `30 mins / mo`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `30 mins / mo`,
                                              }),
                                            }),
                                            className: `framer-1jyq4o4`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        A() &&
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                                },
                                                children: `Unlimited`,
                                              }),
                                            }),
                                            className: `framer-7ystw2 hidden-11b83ig`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        A() &&
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Unlimited`,
                                              }),
                                            }),
                                            className: `framer-x8buvp hidden-11b83ig`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-1rpjnwx`,
                                      "data-border": !0,
                                      "data-framer-name": `Table Row`,
                                      children: [
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1y3tbh`,
                                                  "data-styles-preset": `HutzmjBVA`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Smart Task Dashboard`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Smart Task Dashboard`,
                                              }),
                                            }),
                                            className: `framer-rs3uqm`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-19bcu86`,
                                          "data-framer-name": `Status Cell`,
                                          children: o(R, {
                                            animated: !1,
                                            className: `framer-1bsgogu`,
                                            JEeZYcamG: !0,
                                            layoutId: `lhaxmUsVa`,
                                            P_DcoRcrY: !0,
                                          }),
                                        }),
                                        A() &&
                                          o(`div`, {
                                            className: `framer-wm2ih3 hidden-11b83ig`,
                                            "data-framer-name": `Status Cell`,
                                            children: o(R, {
                                              animated: !1,
                                              className: `framer-1t27qsb`,
                                              JEeZYcamG: !0,
                                              layoutId: `T0Z0Q1HoS`,
                                              P_DcoRcrY: !0,
                                            }),
                                          }),
                                        A() &&
                                          o(`div`, {
                                            className: `framer-y5kd3m hidden-11b83ig`,
                                            "data-framer-name": `Status Cell`,
                                            children: o(R, {
                                              animated: !1,
                                              className: `framer-18m9hl8`,
                                              JEeZYcamG: !0,
                                              layoutId: `hxE4dU8m0`,
                                              P_DcoRcrY: !0,
                                            }),
                                          }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-108bev4`,
                                      "data-border": !0,
                                      "data-framer-name": `Table Row`,
                                      children: [
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1y3tbh`,
                                                  "data-styles-preset": `HutzmjBVA`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `AI Priority Flagging`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `AI Priority Flagging`,
                                              }),
                                            }),
                                            className: `framer-fo7kh7`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-1heghwc`,
                                          "data-framer-name": `Status Cell`,
                                          children: o(z, {
                                            animated: !1,
                                            className: `framer-jsxpot`,
                                            JEeZYcamG: !0,
                                            layoutId: `tSkk8HLJt`,
                                            P_DcoRcrY: !0,
                                          }),
                                        }),
                                        A() &&
                                          o(`div`, {
                                            className: `framer-j9o9ma hidden-11b83ig`,
                                            "data-framer-name": `Status Cell`,
                                            children: o(R, {
                                              animated: !1,
                                              className: `framer-5gadbt`,
                                              JEeZYcamG: !0,
                                              layoutId: `TnMOrjOqx`,
                                              P_DcoRcrY: !0,
                                            }),
                                          }),
                                        A() &&
                                          o(`div`, {
                                            className: `framer-1gsw3rc hidden-11b83ig`,
                                            "data-framer-name": `Status Cell`,
                                            children: o(R, {
                                              animated: !1,
                                              className: `framer-1hk8x1x`,
                                              JEeZYcamG: !0,
                                              layoutId: `zR54l_AdN`,
                                              P_DcoRcrY: !0,
                                            }),
                                          }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-d6sia0`,
                                      "data-border": !0,
                                      "data-framer-name": `Table Row`,
                                      children: [
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1y3tbh`,
                                                  "data-styles-preset": `HutzmjBVA`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Auto-Rescheduling`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Auto-Rescheduling`,
                                              }),
                                            }),
                                            className: `framer-1sdcaly`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-uk524j`,
                                          "data-framer-name": `Status Cell`,
                                          children: o(z, {
                                            animated: !1,
                                            className: `framer-ovfxa6`,
                                            JEeZYcamG: !0,
                                            layoutId: `aXixoY_Xd`,
                                            P_DcoRcrY: !0,
                                          }),
                                        }),
                                        A() &&
                                          o(`div`, {
                                            className: `framer-1ycl8nb hidden-11b83ig`,
                                            "data-framer-name": `Status Cell`,
                                            children: o(R, {
                                              animated: !1,
                                              className: `framer-ri226y`,
                                              JEeZYcamG: !0,
                                              layoutId: `CLFIFXSxJ`,
                                              P_DcoRcrY: !0,
                                            }),
                                          }),
                                        A() &&
                                          o(`div`, {
                                            className: `framer-1d9qvy7 hidden-11b83ig`,
                                            "data-framer-name": `Status Cell`,
                                            children: o(R, {
                                              animated: !1,
                                              className: `framer-17jt2a7`,
                                              JEeZYcamG: !0,
                                              layoutId: `Bauh_VBCW`,
                                              P_DcoRcrY: !0,
                                            }),
                                          }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-2ydifc`,
                                      "data-border": !0,
                                      "data-framer-name": `Table Row`,
                                      children: [
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1y3tbh`,
                                                  "data-styles-preset": `HutzmjBVA`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Workspace Sync`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Workspace Sync`,
                                              }),
                                            }),
                                            className: `framer-1xaxut2`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-1h1sc91`,
                                          "data-framer-name": `Status Cell`,
                                          children: o(z, {
                                            animated: !1,
                                            className: `framer-3pwcmn`,
                                            JEeZYcamG: !0,
                                            layoutId: `fTm2pZbPv`,
                                            P_DcoRcrY: !0,
                                          }),
                                        }),
                                        A() &&
                                          o(`div`, {
                                            className: `framer-1xy58uc hidden-11b83ig`,
                                            "data-framer-name": `Status Cell`,
                                            children: o(z, {
                                              animated: !1,
                                              className: `framer-sth2yo`,
                                              JEeZYcamG: !0,
                                              layoutId: `g4bM95jkt`,
                                              P_DcoRcrY: !0,
                                            }),
                                          }),
                                        A() &&
                                          o(`div`, {
                                            className: `framer-a9ewyn hidden-11b83ig`,
                                            "data-framer-name": `Status Cell`,
                                            children: o(R, {
                                              animated: !1,
                                              className: `framer-10xiamb`,
                                              JEeZYcamG: !0,
                                              layoutId: `XOmJnh7JZ`,
                                              P_DcoRcrY: !0,
                                            }),
                                          }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-1gxdzu3`,
                                      "data-framer-name": `Table Row`,
                                      children: [
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1y3tbh`,
                                                  "data-styles-preset": `HutzmjBVA`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Team Analytics`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Team Analytics`,
                                              }),
                                            }),
                                            className: `framer-dbfdhe`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            yMCYwv3fq: {
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Standard`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Standard`,
                                              }),
                                            }),
                                            className: `framer-1knoxxi`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        A() &&
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                                },
                                                children: `Priority`,
                                              }),
                                            }),
                                            className: `framer-1yfx3i8 hidden-11b83ig`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        A() &&
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `24/7 Dedicated`,
                                              }),
                                            }),
                                            className: `framer-pd7obp hidden-11b83ig`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-bzcz6v`,
                                      "data-framer-name": `Content Grid`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-kghdm5`,
                                          "data-framer-name": `Icon`,
                                          children: o(S, {
                                            className: `framer-lsccko`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(f.div, {
                                          className: `framer-1u904ah`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: o(S, {
                                            className: `framer-7hgg3d`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(f.div, {
                                          className: `framer-qrh9u3`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: o(S, {
                                            className: `framer-1hc6a9n`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(f.div, {
                                          className: `framer-1bufkdi`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: o(S, {
                                            className: `framer-6r6y2l`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                j() &&
                                  c(`div`, {
                                    className: `framer-1cbx1j9 hidden-fqy3ta hidden-vtlg98`,
                                    "data-border": !0,
                                    "data-framer-name": `Table `,
                                    children: [
                                      c(`div`, {
                                        className: `framer-rrhyws`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Header Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h4`, {
                                                className: `framer-styles-preset-1t48bm3`,
                                                "data-styles-preset": `n6gn2zrFO`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Features`,
                                              }),
                                            }),
                                            className: `framer-12pvrav`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h4`, {
                                                  className: `framer-styles-preset-1t48bm3`,
                                                  "data-styles-preset": `n6gn2zrFO`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                                  },
                                                  children: `Professional`,
                                                }),
                                              }),
                                              className: `framer-6g18g2 hidden-fqy3ta`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1l86u8g`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Connected Calendars`,
                                              }),
                                            }),
                                            className: `framer-da2bxz`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                                  },
                                                  children: `Unlimited`,
                                                }),
                                              }),
                                              className: `framer-edf2ah hidden-fqy3ta`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-cl94x5`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Voice Capture Limit`,
                                              }),
                                            }),
                                            className: `framer-162kuqx`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                                  },
                                                  children: `Unlimited`,
                                                }),
                                              }),
                                              className: `framer-9d44fn hidden-fqy3ta`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-dbrt62`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Smart Task Dashboard`,
                                              }),
                                            }),
                                            className: `framer-xhgqo6`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(`div`, {
                                              className: `framer-1h52war hidden-fqy3ta`,
                                              "data-framer-name": `Status Cell`,
                                              children: o(R, {
                                                animated: !1,
                                                className: `framer-2uas6y`,
                                                JEeZYcamG: !0,
                                                layoutId: `gWQVlh0Qx`,
                                                P_DcoRcrY: !0,
                                              }),
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1874xlb`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `AI Priority Flagging`,
                                              }),
                                            }),
                                            className: `framer-m5lw1i`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(`div`, {
                                              className: `framer-nmjlea hidden-fqy3ta`,
                                              "data-framer-name": `Status Cell`,
                                              children: o(R, {
                                                animated: !1,
                                                className: `framer-1bi0r0c`,
                                                JEeZYcamG: !0,
                                                layoutId: `SCD29dOZv`,
                                                P_DcoRcrY: !0,
                                              }),
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-u6l09`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Auto-Rescheduling`,
                                              }),
                                            }),
                                            className: `framer-elzazh`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(`div`, {
                                              className: `framer-1sj12ix hidden-fqy3ta`,
                                              "data-framer-name": `Status Cell`,
                                              children: o(R, {
                                                animated: !1,
                                                className: `framer-1pbylww`,
                                                JEeZYcamG: !0,
                                                layoutId: `rATjx1tQW`,
                                                P_DcoRcrY: !0,
                                              }),
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-iulpbp`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Workspace Sync`,
                                              }),
                                            }),
                                            className: `framer-1scqxgb`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(`div`, {
                                              className: `framer-5fd09q hidden-fqy3ta`,
                                              "data-framer-name": `Status Cell`,
                                              children: o(z, {
                                                animated: !1,
                                                className: `framer-1a8yr28`,
                                                JEeZYcamG: !0,
                                                layoutId: `WMGpDGjJm`,
                                                P_DcoRcrY: !0,
                                              }),
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-61t0ot`,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Team Analytics`,
                                              }),
                                            }),
                                            className: `framer-avd8p9`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                                  },
                                                  children: `Priority`,
                                                }),
                                              }),
                                              className: `framer-1n4dqrt hidden-fqy3ta`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-j48tb2`,
                                        "data-framer-name": `Content Grid`,
                                        children: [
                                          o(`div`, {
                                            className: `framer-16dmsln`,
                                            "data-framer-name": `Icon`,
                                            children: o(S, {
                                              className: `framer-2oy7r9`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(f.div, {
                                            className: `framer-1om4p63`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 180 },
                                            children: o(S, {
                                              className: `framer-qycd07`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(f.div, {
                                            className: `framer-11jec6m`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 270 },
                                            children: o(S, {
                                              className: `framer-1bxg54s`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(f.div, {
                                            className: `framer-d1n7ju`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 90 },
                                            children: o(S, {
                                              className: `framer-1qnwxus`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                j() &&
                                  c(`div`, {
                                    className: `framer-1a1is16 hidden-fqy3ta hidden-vtlg98`,
                                    "data-border": !0,
                                    "data-framer-name": `Table `,
                                    children: [
                                      c(`div`, {
                                        className: `framer-12iy48x`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Header Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`h4`, {
                                                className: `framer-styles-preset-1t48bm3`,
                                                "data-styles-preset": `n6gn2zrFO`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Features`,
                                              }),
                                            }),
                                            className: `framer-12bj7z0`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`h4`, {
                                                  className: `framer-styles-preset-1t48bm3`,
                                                  "data-styles-preset": `n6gn2zrFO`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Team`,
                                                }),
                                              }),
                                              className: `framer-1j30sai hidden-fqy3ta`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1sw9ht5`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Connected Calendars`,
                                              }),
                                            }),
                                            className: `framer-1o8hldm`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Unlimited`,
                                                }),
                                              }),
                                              className: `framer-tnaqrd hidden-fqy3ta`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1xb10pc`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Voice Capture Limit`,
                                              }),
                                            }),
                                            className: `framer-1w4bwuo`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `Unlimited`,
                                                }),
                                              }),
                                              className: `framer-1h3058n hidden-fqy3ta`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1odlqn`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Smart Task Dashboard`,
                                              }),
                                            }),
                                            className: `framer-bpc1zo`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(`div`, {
                                              className: `framer-1h1zfwe hidden-fqy3ta`,
                                              "data-framer-name": `Status Cell`,
                                              children: o(R, {
                                                animated: !1,
                                                className: `framer-w8qnp`,
                                                JEeZYcamG: !0,
                                                layoutId: `D41dLg8fn`,
                                                P_DcoRcrY: !0,
                                              }),
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1frshjm`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `AI Priority Flagging`,
                                              }),
                                            }),
                                            className: `framer-3s5u6g`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(`div`, {
                                              className: `framer-sujey4 hidden-fqy3ta`,
                                              "data-framer-name": `Status Cell`,
                                              children: o(R, {
                                                animated: !1,
                                                className: `framer-2z8qac`,
                                                JEeZYcamG: !0,
                                                layoutId: `QMK6MdTVe`,
                                                P_DcoRcrY: !0,
                                              }),
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1uw0rbh`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Auto-Rescheduling`,
                                              }),
                                            }),
                                            className: `framer-1b0wy9y`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(`div`, {
                                              className: `framer-8vf1j7 hidden-fqy3ta`,
                                              "data-framer-name": `Status Cell`,
                                              children: o(R, {
                                                animated: !1,
                                                className: `framer-9l44vh`,
                                                JEeZYcamG: !0,
                                                layoutId: `kVd6RA9cY`,
                                                P_DcoRcrY: !0,
                                              }),
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1fo2zwv`,
                                        "data-border": !0,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Workspace Sync`,
                                              }),
                                            }),
                                            className: `framer-9j4pht`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(`div`, {
                                              className: `framer-lgyie hidden-fqy3ta`,
                                              "data-framer-name": `Status Cell`,
                                              children: o(R, {
                                                animated: !1,
                                                className: `framer-8psxcv`,
                                                JEeZYcamG: !0,
                                                layoutId: `CjcABxNcm`,
                                                P_DcoRcrY: !0,
                                              }),
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1je3lqf`,
                                        "data-framer-name": `Table Row`,
                                        children: [
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(r, {
                                              children: o(`p`, {
                                                className: `framer-styles-preset-1y3tbh`,
                                                "data-styles-preset": `HutzmjBVA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                },
                                                children: `Team Analytics`,
                                              }),
                                            }),
                                            className: `framer-l05lz4`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          j() &&
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-sak9x6`,
                                                  "data-styles-preset": `vVaZ0SXla`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  },
                                                  children: `24/7 Dedicated`,
                                                }),
                                              }),
                                              className: `framer-13j7q84 hidden-fqy3ta`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1e7mdmu`,
                                        "data-framer-name": `Content Grid`,
                                        children: [
                                          o(`div`, {
                                            className: `framer-5mgjul`,
                                            "data-framer-name": `Icon`,
                                            children: o(S, {
                                              className: `framer-uqwajx`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(f.div, {
                                            className: `framer-20l7wf`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 180 },
                                            children: o(S, {
                                              className: `framer-16dgc6l`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(f.div, {
                                            className: `framer-6qcruy`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 270 },
                                            children: o(S, {
                                              className: `framer-4vdrfr`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          o(f.div, {
                                            className: `framer-1r776fo`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 90 },
                                            children: o(S, {
                                              className: `framer-10jrwmr`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        c(sn, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1t4kyt4`,
                          "data-framer-name": `FAQ Section`,
                          children: [
                            c(`div`, {
                              className: `framer-82c1ra`,
                              "data-framer-name": `FAQ Intro`,
                              children: [
                                c(`div`, {
                                  className: `framer-1pgl7qu`,
                                  "data-framer-name": `FAQ Heading`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-2qvtsv`,
                                      "data-framer-name": `FAQ Badge`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-1t594jd`,
                                          "data-border": !0,
                                          "data-framer-name": `FAQ Badge Shell`,
                                          children: [
                                            o(h, {
                                              breakpoint: C,
                                              overrides: {
                                                B2GHP02uW: {
                                                  y:
                                                    (m?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    1738 +
                                                    40 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    9.1,
                                                },
                                                yMCYwv3fq: {
                                                  y:
                                                    (m?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    2901.2 +
                                                    40 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    9.1,
                                                },
                                              },
                                              children: o(w, {
                                                height: 15,
                                                y:
                                                  (m?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  1735 +
                                                  75 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  9.1,
                                                children: o(D, {
                                                  className: `framer-1pxyogv-container`,
                                                  nodeId: `qEzqg9WfV`,
                                                  scopeId: `uwEtvwUqf`,
                                                  children: o(L, {
                                                    height: `100%`,
                                                    id: `qEzqg9WfV`,
                                                    layoutId: `qEzqg9WfV`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(r, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-1kyvdj7`,
                                                  "data-styles-preset": `s3xaUzb1J`,
                                                  dir: `auto`,
                                                  children: `FAQs`,
                                                }),
                                              }),
                                              className: `framer-1mj855t`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        o(g, {
                                          __fromCanvasComponent: !0,
                                          children: o(r, {
                                            children: o(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                              },
                                              children: `Got questions? We have answers.`,
                                            }),
                                          }),
                                          className: `framer-11ainsu`,
                                          "data-framer-name": `FAQ Badge Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o(g, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-1y3tbh`,
                                          "data-styles-preset": `HutzmjBVA`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                          },
                                          children: `Everything you need to know about how Sortia automates your schedule.`,
                                        }),
                                      }),
                                      className: `framer-1tmezu0`,
                                      "data-framer-name": `FAQ Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-x79et0`,
                                  "data-framer-name": `FAQ Support CTA`,
                                  children: [
                                    o(g, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`h3`, {
                                          className: `framer-styles-preset-1pj8wqs`,
                                          "data-styles-preset": `Z7CzuxNJN`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                          },
                                          children: `Still have more questions?`,
                                        }),
                                      }),
                                      className: `framer-19tx6ea`,
                                      "data-framer-name": `Support CTA Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(g, {
                                      __fromCanvasComponent: !0,
                                      children: o(r, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-1y3tbh`,
                                          "data-styles-preset": `HutzmjBVA`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(228, 231, 255))`,
                                          },
                                          children: `Can’t find the answer you’re looking for? Chat with our support team or drop us a line anytime.`,
                                        }),
                                      }),
                                      className: `framer-1e3pu53`,
                                      "data-framer-name": `Support CTA Copy`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(ie, {
                                      links: [
                                        {
                                          href: { webPageId: `UfhygGALz` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `UfhygGALz` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `UfhygGALz` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        o(h, {
                                          breakpoint: C,
                                          overrides: {
                                            B2GHP02uW: {
                                              y:
                                                (m?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                1738 +
                                                40 +
                                                0 +
                                                0 +
                                                252.2 +
                                                55 +
                                                113,
                                            },
                                            yMCYwv3fq: {
                                              y:
                                                (m?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                2901.2 +
                                                40 +
                                                0 +
                                                0 +
                                                272.2 +
                                                40 +
                                                170,
                                            },
                                          },
                                          children: o(w, {
                                            height: 44,
                                            width: `188px`,
                                            y:
                                              (m?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              1735 +
                                              75 +
                                              0 +
                                              273 +
                                              55 +
                                              113,
                                            children: o(D, {
                                              className: `framer-v2f49a-container`,
                                              "data-framer-name": `CTA Button`,
                                              name: `CTA Button`,
                                              nodeId: `Gs5uYbI5J`,
                                              scopeId: `uwEtvwUqf`,
                                              children: o(h, {
                                                breakpoint: C,
                                                overrides: {
                                                  B2GHP02uW: { TWaZPhsrs: e[1] },
                                                  yMCYwv3fq: { TWaZPhsrs: e[2] },
                                                },
                                                children: o(F, {
                                                  bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(46, 52, 71))`,
                                                  dMzFGkb3u: !1,
                                                  dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                                  F9tZ22mws: {
                                                    borderColor: `rgba(20, 23, 33, 0)`,
                                                    borderStyle: `solid`,
                                                    borderWidth: 2,
                                                  },
                                                  height: `100%`,
                                                  id: `Gs5uYbI5J`,
                                                  jfeAUucDj: pe,
                                                  layoutId: `Gs5uYbI5J`,
                                                  lnJBzRgIM: `Get in Touch`,
                                                  MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255))`,
                                                  name: `CTA Button`,
                                                  ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  SLp3DWZqR: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  TWaZPhsrs: e[0],
                                                  variant: X(`nhzWZDlVc`),
                                                  vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  wDmZ1dhUo: M,
                                                  width: `100%`,
                                                  ZEAGlJD1F: {
                                                    borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                    borderStyle: `solid`,
                                                    borderWidth: 2,
                                                  },
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    c(`div`, {
                                      className: `framer-3sknjb`,
                                      "data-framer-name": `FAQ Item Details`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-1nt7mdb`,
                                          "data-framer-name": `Icon`,
                                          children: o(S, {
                                            className: `framer-q1ceay`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(f.div, {
                                          className: `framer-1jsievf`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: o(S, {
                                            className: `framer-1tbbhaf`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(f.div, {
                                          className: `framer-6gifo9`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: o(S, {
                                            className: `framer-1xh527q`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        o(f.div, {
                                          className: `framer-675dqy`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: o(S, {
                                            className: `framer-7shfin`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1bwjfmq`,
                              "data-framer-name": `FAQ Items Grid`,
                              children: [
                                o(h, {
                                  breakpoint: C,
                                  overrides: {
                                    B2GHP02uW: {
                                      width: `746px`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 1738 + 40 + 502.2 + 0 + 0,
                                    },
                                    yMCYwv3fq: {
                                      width: `358px`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 2901.2 + 40 + 598.2 + 0 + 0,
                                    },
                                  },
                                  children: o(w, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 1735 + 40 + 0 + 0,
                                    children: o(D, {
                                      className: `framer-1o0d0ii-container`,
                                      "data-framer-name": `Auto Reschedule FAQ`,
                                      name: `Auto Reschedule FAQ`,
                                      nodeId: `kew3U_Hsy`,
                                      scopeId: `uwEtvwUqf`,
                                      children: o(I, {
                                        CYcMeDYwX: `If a calendar event runs late, Sortia's predictive engine instantly shifts your remaining tasks to the next available slot automatically.`,
                                        height: `100%`,
                                        id: `kew3U_Hsy`,
                                        layoutId: `kew3U_Hsy`,
                                        name: `Auto Reschedule FAQ`,
                                        style: { width: `100%` },
                                        variant: X(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `How does the AI auto-reschedule my day?`,
                                      }),
                                    }),
                                  }),
                                }),
                                o(h, {
                                  breakpoint: C,
                                  overrides: {
                                    B2GHP02uW: {
                                      width: `746px`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 1738 + 40 + 502.2 + 0 + 141,
                                    },
                                    yMCYwv3fq: {
                                      width: `358px`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 2901.2 + 40 + 598.2 + 0 + 141,
                                    },
                                  },
                                  children: o(w, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 1735 + 40 + 0 + 141,
                                    children: o(D, {
                                      className: `framer-1rscfm8-container`,
                                      "data-framer-name": `Calendar Sync FAQ`,
                                      name: `Calendar Sync FAQ`,
                                      nodeId: `N5DwQNgcn`,
                                      scopeId: `uwEtvwUqf`,
                                      children: o(I, {
                                        CYcMeDYwX: `We feature full, real-time two-way synchronization with Google Calendar, Apple Calendar, and Outlook to completely prevent double-booking.`,
                                        height: `100%`,
                                        id: `N5DwQNgcn`,
                                        layoutId: `N5DwQNgcn`,
                                        name: `Calendar Sync FAQ`,
                                        style: { width: `100%` },
                                        variant: X(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Which calendars does Sortia sync with?`,
                                      }),
                                    }),
                                  }),
                                }),
                                o(h, {
                                  breakpoint: C,
                                  overrides: {
                                    B2GHP02uW: {
                                      width: `746px`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 1738 + 40 + 502.2 + 0 + 282,
                                    },
                                    yMCYwv3fq: {
                                      width: `358px`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 2901.2 + 40 + 598.2 + 0 + 282,
                                    },
                                  },
                                  children: o(w, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 1735 + 40 + 0 + 282,
                                    children: o(D, {
                                      className: `framer-3hl9o9-container`,
                                      "data-framer-name": `Voice Notes FAQ`,
                                      name: `Voice Notes FAQ`,
                                      nodeId: `bW26nbQvg`,
                                      scopeId: `uwEtvwUqf`,
                                      children: o(I, {
                                        CYcMeDYwX: `Not at all. Speak entirely naturally into the capture bar; our advanced NLP automatically extracts deadlines, context, and action items.`,
                                        height: `100%`,
                                        id: `bW26nbQvg`,
                                        layoutId: `bW26nbQvg`,
                                        name: `Voice Notes FAQ`,
                                        style: { width: `100%` },
                                        variant: X(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Do I have to format my voice notes?`,
                                      }),
                                    }),
                                  }),
                                }),
                                o(h, {
                                  breakpoint: C,
                                  overrides: {
                                    B2GHP02uW: {
                                      width: `746px`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 1738 + 40 + 502.2 + 0 + 423,
                                    },
                                    yMCYwv3fq: {
                                      width: `358px`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 2901.2 + 40 + 598.2 + 0 + 423,
                                    },
                                  },
                                  children: o(w, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 1735 + 40 + 0 + 423,
                                    children: o(D, {
                                      className: `framer-npaxw3-container`,
                                      "data-framer-name": `Data Safety FAQ`,
                                      name: `Data Safety FAQ`,
                                      nodeId: `uTcBsVt26`,
                                      scopeId: `uwEtvwUqf`,
                                      children: o(I, {
                                        CYcMeDYwX: `Absolutely. We use industry-standard, end-to-end encryption to read your schedule, and your personal data is never sold or shared.`,
                                        height: `100%`,
                                        id: `uTcBsVt26`,
                                        layoutId: `uTcBsVt26`,
                                        name: `Data Safety FAQ`,
                                        style: { width: `100%` },
                                        variant: X(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Is my calendar data safe?`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-NJkSv.framer-107nrcp, .framer-NJkSv .framer-107nrcp { display: block; }`,
        `.framer-NJkSv.framer-fqy3ta { align-content: center; align-items: center; background-color: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, #f2f3ff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 150px 0px 0px 0px; position: relative; width: 1200px; }`,
        `.framer-NJkSv .framer-68x88c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 10px 200px 10px 200px; position: fixed; top: 0px; transform: translateX(-50%); width: 1200px; z-index: 7; }`,
        `.framer-NJkSv .framer-13go4xv-container, .framer-NJkSv .framer-wd7cpv-container, .framer-NJkSv .framer-pn7jed-container, .framer-NJkSv .framer-1pxyogv-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-NJkSv .framer-1fjs8r6-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-NJkSv .framer-15gkhw3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; z-index: 6; }`,
        `.framer-NJkSv .framer-1ra17f1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NJkSv .framer-otqu3j, .framer-NJkSv .framer-kbq2mw, .framer-NJkSv .framer-1t594jd { --border-bottom-width: 1px; --border-color: var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, #cfd4e2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, #e4e7ff); border-bottom-left-radius: 45px; border-bottom-right-radius: 45px; border-top-left-radius: 45px; border-top-right-radius: 45px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 9px 5px 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NJkSv .framer-wgr13g, .framer-NJkSv .framer-q3l7u0, .framer-NJkSv .framer-1mj855t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-NJkSv .framer-1sdc6iy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 922px; }`,
        `.framer-NJkSv .framer-1p6c5gi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NJkSv .framer-1mqtxbu, .framer-NJkSv .framer-5kgmoj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NJkSv .framer-hkqxb3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 799px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NJkSv .framer-qwr1td { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NJkSv .framer-oz0lf9-container, .framer-NJkSv .framer-1o0d0ii-container, .framer-NJkSv .framer-1rscfm8-container, .framer-NJkSv .framer-3hl9o9-container, .framer-NJkSv .framer-npaxw3-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-NJkSv .framer-1k2fnj7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NJkSv .framer-wuw1mg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-NJkSv .framer-oi22sd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-NJkSv .framer-dbinzb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-NJkSv .framer-18hxx5n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 477px; justify-content: center; overflow: visible; padding: 0px 80px 0px 80px; position: relative; width: 1200px; }`,
        `.framer-NJkSv .framer-1892ufv { --border-bottom-width: 1px; --border-color: var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, #b9bed3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f9f9fb); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 2px 2px 2px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, #acb7ff); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 477px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-NJkSv .framer-180d50v, .framer-NJkSv .framer-kw8nla, .framer-NJkSv .framer-1po1qdo, .framer-NJkSv .framer-1rpjnwx, .framer-NJkSv .framer-108bev4, .framer-NJkSv .framer-d6sia0, .framer-NJkSv .framer-2ydifc { --border-bottom-width: 1px; --border-color: var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, #b9bed3); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 90px; height: 60px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NJkSv .framer-1tbgs4r, .framer-NJkSv .framer-1xx4q83, .framer-NJkSv .framer-1nhjv67, .framer-NJkSv .framer-1yfo0dz, .framer-NJkSv .framer-90wr4d, .framer-NJkSv .framer-eww14u, .framer-NJkSv .framer-1u67wjv, .framer-NJkSv .framer-ubvsaq, .framer-NJkSv .framer-1xfkfwu, .framer-NJkSv .framer-1jyq4o4, .framer-NJkSv .framer-7ystw2, .framer-NJkSv .framer-x8buvp, .framer-NJkSv .framer-rs3uqm, .framer-NJkSv .framer-fo7kh7, .framer-NJkSv .framer-1sdcaly, .framer-NJkSv .framer-1xaxut2, .framer-NJkSv .framer-dbfdhe, .framer-NJkSv .framer-1knoxxi, .framer-NJkSv .framer-1yfx3i8, .framer-NJkSv .framer-pd7obp, .framer-NJkSv .framer-12pvrav, .framer-NJkSv .framer-6g18g2, .framer-NJkSv .framer-da2bxz, .framer-NJkSv .framer-edf2ah, .framer-NJkSv .framer-162kuqx, .framer-NJkSv .framer-9d44fn, .framer-NJkSv .framer-xhgqo6, .framer-NJkSv .framer-m5lw1i, .framer-NJkSv .framer-elzazh, .framer-NJkSv .framer-1scqxgb, .framer-NJkSv .framer-avd8p9, .framer-NJkSv .framer-1n4dqrt, .framer-NJkSv .framer-12bj7z0, .framer-NJkSv .framer-1j30sai, .framer-NJkSv .framer-1o8hldm, .framer-NJkSv .framer-tnaqrd, .framer-NJkSv .framer-1w4bwuo, .framer-NJkSv .framer-1h3058n, .framer-NJkSv .framer-bpc1zo, .framer-NJkSv .framer-3s5u6g, .framer-NJkSv .framer-1b0wy9y, .framer-NJkSv .framer-9j4pht, .framer-NJkSv .framer-l05lz4, .framer-NJkSv .framer-13j7q84 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NJkSv .framer-19bcu86, .framer-NJkSv .framer-wm2ih3, .framer-NJkSv .framer-y5kd3m, .framer-NJkSv .framer-1heghwc, .framer-NJkSv .framer-j9o9ma, .framer-NJkSv .framer-1gsw3rc, .framer-NJkSv .framer-uk524j, .framer-NJkSv .framer-1ycl8nb, .framer-NJkSv .framer-1d9qvy7, .framer-NJkSv .framer-1h1sc91, .framer-NJkSv .framer-1xy58uc, .framer-NJkSv .framer-a9ewyn { flex: 1 0 0px; height: 24px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-NJkSv .framer-1bsgogu, .framer-NJkSv .framer-18m9hl8, .framer-NJkSv .framer-jsxpot, .framer-NJkSv .framer-1hk8x1x, .framer-NJkSv .framer-ovfxa6, .framer-NJkSv .framer-17jt2a7, .framer-NJkSv .framer-3pwcmn, .framer-NJkSv .framer-10xiamb { --1m973uw: #000000; --js9iwy: 1.5; bottom: var(--framer-aspect-ratio-supported, -1px); flex: none; height: 25px; left: 0px; position: absolute; right: 157px; top: 0px; width: calc(100% - 157px); }`,
        `.framer-NJkSv .framer-1t27qsb, .framer-NJkSv .framer-5gadbt, .framer-NJkSv .framer-ri226y, .framer-NJkSv .framer-sth2yo { --1m973uw: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #0056f3); --js9iwy: 1.5; bottom: var(--framer-aspect-ratio-supported, -1px); flex: none; height: 25px; left: 0px; position: absolute; right: 158px; top: 0px; width: calc(100% - 157.6323940979901px); }`,
        `.framer-NJkSv .framer-1gxdzu3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 90px; height: 60px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NJkSv .framer-bzcz6v, .framer-NJkSv .framer-j48tb2, .framer-NJkSv .framer-1e7mdmu, .framer-NJkSv .framer-3sknjb { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-NJkSv .framer-kghdm5, .framer-NJkSv .framer-16dmsln, .framer-NJkSv .framer-5mgjul, .framer-NJkSv .framer-1nt7mdb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-NJkSv .framer-lsccko, .framer-NJkSv .framer-1hc6a9n, .framer-NJkSv .framer-6r6y2l, .framer-NJkSv .framer-2oy7r9, .framer-NJkSv .framer-1bxg54s, .framer-NJkSv .framer-1qnwxus, .framer-NJkSv .framer-uqwajx, .framer-NJkSv .framer-4vdrfr, .framer-NJkSv .framer-10jrwmr, .framer-NJkSv .framer-q1ceay, .framer-NJkSv .framer-1xh527q, .framer-NJkSv .framer-7shfin { height: 15px; position: relative; width: 15px; }`,
        `.framer-NJkSv .framer-1u904ah, .framer-NJkSv .framer-1om4p63, .framer-NJkSv .framer-20l7wf, .framer-NJkSv .framer-1jsievf { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 15px; min-width: 15px; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
        `.framer-NJkSv .framer-7hgg3d, .framer-NJkSv .framer-qycd07, .framer-NJkSv .framer-16dgc6l, .framer-NJkSv .framer-1tbbhaf { height: 15px; left: 0px; position: absolute; top: 1px; width: 15px; }`,
        `.framer-NJkSv .framer-qrh9u3, .framer-NJkSv .framer-11jec6m, .framer-NJkSv .framer-6qcruy, .framer-NJkSv .framer-6gifo9 { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
        `.framer-NJkSv .framer-1bufkdi, .framer-NJkSv .framer-d1n7ju, .framer-NJkSv .framer-1r776fo, .framer-NJkSv .framer-675dqy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-NJkSv .framer-1cbx1j9, .framer-NJkSv .framer-1a1is16 { --border-bottom-width: 1px; --border-color: var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, #b9bed3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f9f9fb); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 2px 2px 2px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, #acb7ff); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-NJkSv .framer-rrhyws, .framer-NJkSv .framer-1l86u8g, .framer-NJkSv .framer-cl94x5, .framer-NJkSv .framer-dbrt62, .framer-NJkSv .framer-1874xlb, .framer-NJkSv .framer-u6l09, .framer-NJkSv .framer-iulpbp, .framer-NJkSv .framer-12iy48x, .framer-NJkSv .framer-1sw9ht5, .framer-NJkSv .framer-1xb10pc, .framer-NJkSv .framer-1odlqn, .framer-NJkSv .framer-1frshjm, .framer-NJkSv .framer-1uw0rbh, .framer-NJkSv .framer-1fo2zwv { --border-bottom-width: 1px; --border-color: var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, #b9bed3); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 60px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 12px 0px 12px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NJkSv .framer-1h52war, .framer-NJkSv .framer-nmjlea, .framer-NJkSv .framer-1sj12ix, .framer-NJkSv .framer-5fd09q, .framer-NJkSv .framer-1h1zfwe, .framer-NJkSv .framer-sujey4, .framer-NJkSv .framer-8vf1j7, .framer-NJkSv .framer-lgyie { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-NJkSv .framer-2uas6y, .framer-NJkSv .framer-1bi0r0c, .framer-NJkSv .framer-1pbylww, .framer-NJkSv .framer-1a8yr28 { --1m973uw: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #0056f3); --js9iwy: 1.5; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
        `.framer-NJkSv .framer-61t0ot, .framer-NJkSv .framer-1je3lqf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 60px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 12px 0px 12px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-NJkSv .framer-w8qnp, .framer-NJkSv .framer-2z8qac, .framer-NJkSv .framer-9l44vh, .framer-NJkSv .framer-8psxcv { --1m973uw: #000000; --js9iwy: 1.5; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
        `.framer-NJkSv .framer-1t4kyt4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1200px; }`,
        `.framer-NJkSv .framer-82c1ra { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 483px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-NJkSv .framer-1pgl7qu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 521px; }`,
        `.framer-NJkSv .framer-2qvtsv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NJkSv .framer-11ainsu { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 412px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NJkSv .framer-1tmezu0 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 398px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NJkSv .framer-x79et0 { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #426dff) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(0, 67, 195)) 100%); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 1px 1px 6px 0px var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, #8f9fff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 210px; justify-content: center; overflow: visible; padding: 55px; position: relative; width: 100%; }`,
        `.framer-NJkSv .framer-19tx6ea, .framer-NJkSv .framer-1e3pu53 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-NJkSv .framer-v2f49a-container { flex: none; height: 44px; position: relative; width: 188px; z-index: 2; }`,
        `.framer-NJkSv .framer-1bwjfmq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        ...Ve,
        ...qe,
        ...Ne,
        ...De,
        ...Te,
        ...Me,
        ...Be,
        `.framer-NJkSv[data-border="true"]::after, .framer-NJkSv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-NJkSv.framer-fqy3ta, .framer-NJkSv .framer-15gkhw3 { width: 810px; } .framer-NJkSv .framer-68x88c { padding: 10px 32px 10px 32px; width: 810px; } .framer-NJkSv .framer-1sdc6iy { max-width: 700px; width: 100%; } .framer-NJkSv .framer-1p6c5gi { overflow: visible; } .framer-NJkSv .framer-hkqxb3, .framer-NJkSv .framer-1pgl7qu { max-width: 600px; width: 100%; } .framer-NJkSv .framer-oz0lf9-container { width: auto; } .framer-NJkSv .framer-oi22sd { width: 100%; } .framer-NJkSv .framer-18hxx5n { height: min-content; padding: 0px 32px 0px 32px; width: 810px; } .framer-NJkSv .framer-1892ufv { height: min-content; } .framer-NJkSv .framer-180d50v, .framer-NJkSv .framer-kw8nla, .framer-NJkSv .framer-1po1qdo, .framer-NJkSv .framer-1rpjnwx, .framer-NJkSv .framer-108bev4, .framer-NJkSv .framer-d6sia0, .framer-NJkSv .framer-2ydifc, .framer-NJkSv .framer-1gxdzu3 { gap: 40px; } .framer-NJkSv .framer-19bcu86, .framer-NJkSv .framer-wm2ih3, .framer-NJkSv .framer-y5kd3m, .framer-NJkSv .framer-1heghwc, .framer-NJkSv .framer-j9o9ma, .framer-NJkSv .framer-1gsw3rc, .framer-NJkSv .framer-uk524j, .framer-NJkSv .framer-1ycl8nb, .framer-NJkSv .framer-1d9qvy7, .framer-NJkSv .framer-1h1sc91, .framer-NJkSv .framer-1xy58uc, .framer-NJkSv .framer-a9ewyn { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; } .framer-NJkSv .framer-1bsgogu { bottom: unset; height: var(--framer-aspect-ratio-supported, 25px); left: unset; position: relative; right: unset; top: unset; width: 25px; } .framer-NJkSv .framer-1t27qsb, .framer-NJkSv .framer-18m9hl8, .framer-NJkSv .framer-jsxpot, .framer-NJkSv .framer-5gadbt, .framer-NJkSv .framer-1hk8x1x, .framer-NJkSv .framer-ovfxa6, .framer-NJkSv .framer-ri226y, .framer-NJkSv .framer-17jt2a7, .framer-NJkSv .framer-3pwcmn, .framer-NJkSv .framer-sth2yo, .framer-NJkSv .framer-10xiamb { aspect-ratio: 1 / 1; bottom: unset; height: var(--framer-aspect-ratio-supported, 25px); left: unset; position: relative; right: unset; top: unset; width: 25px; } .framer-NJkSv .framer-1t4kyt4 { flex-direction: column; gap: 40px; padding: 40px 32px 40px 32px; width: 100%; } .framer-NJkSv .framer-82c1ra { flex: none; gap: 40px; height: min-content; justify-content: flex-start; width: 100%; } .framer-NJkSv .framer-11ainsu { max-width: 500px; width: 100%; } .framer-NJkSv .framer-1tmezu0 { max-width: 480px; width: 100%; } .framer-NJkSv .framer-1bwjfmq { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-NJkSv.framer-fqy3ta, .framer-NJkSv .framer-15gkhw3 { width: 390px; } .framer-NJkSv .framer-68x88c { overflow: visible; padding: 0px; width: 100%; } .framer-NJkSv .framer-1sdc6iy, .framer-NJkSv .framer-1pgl7qu { max-width: 340px; width: 100%; } .framer-NJkSv .framer-1p6c5gi { overflow: visible; } .framer-NJkSv .framer-hkqxb3, .framer-NJkSv .framer-11ainsu, .framer-NJkSv .framer-1tmezu0 { max-width: 320px; width: 100%; } .framer-NJkSv .framer-qwr1td { overflow: var(--overflow-clip-fallback, clip); } .framer-NJkSv .framer-oz0lf9-container { width: auto; } .framer-NJkSv .framer-oi22sd { width: 100%; } .framer-NJkSv .framer-dbinzb { max-width: 340px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-NJkSv .framer-18hxx5n { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 60px; height: min-content; justify-content: flex-start; padding: 0px 20px 0px 20px; width: 100%; } .framer-NJkSv .framer-1892ufv { flex: none; height: min-content; width: 100%; } .framer-NJkSv .framer-180d50v, .framer-NJkSv .framer-kw8nla, .framer-NJkSv .framer-1po1qdo, .framer-NJkSv .framer-1rpjnwx, .framer-NJkSv .framer-108bev4, .framer-NJkSv .framer-d6sia0, .framer-NJkSv .framer-2ydifc, .framer-NJkSv .framer-1gxdzu3 { gap: 16px; padding: 0px 12px 0px 12px; } .framer-NJkSv .framer-19bcu86, .framer-NJkSv .framer-1heghwc, .framer-NJkSv .framer-uk524j, .framer-NJkSv .framer-1h1sc91 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; } .framer-NJkSv .framer-1bsgogu, .framer-NJkSv .framer-jsxpot, .framer-NJkSv .framer-ovfxa6, .framer-NJkSv .framer-3pwcmn { aspect-ratio: 1 / 1; bottom: unset; height: var(--framer-aspect-ratio-supported, 20px); left: unset; position: relative; right: unset; top: unset; width: 20px; } .framer-NJkSv .framer-1cbx1j9, .framer-NJkSv .framer-1a1is16, .framer-NJkSv .framer-1bwjfmq { flex: none; width: 100%; } .framer-NJkSv .framer-1t4kyt4 { flex-direction: column; gap: 32px; padding: 40px 16px 40px 16px; width: 100%; } .framer-NJkSv .framer-82c1ra { flex: none; gap: 60px; height: min-content; justify-content: flex-start; width: 100%; } .framer-NJkSv .framer-x79et0 { height: min-content; padding: 40px; }}`,
      ],
      `framer-NJkSv`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 3782, width: 1200 }),
    b(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Qt,
        ...en,
        ...nn,
        ...rn,
        ...an,
        ...on,
        ...cn,
        ...ln,
        ...O(Ue),
        ...O(Je),
        ...O(Fe),
        ...O(Ae),
        ...O(Se),
        ...O(ye),
        ...O(He),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          A(ke, {}, t),
          A(je, {}, t),
          A(L, {}, t),
          A(Y, {}, t),
          A(F, {}, t),
          A(I, {}, t),
        ])
      ),
    }),
    (Sn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameruwEtvwUqf`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `3782`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"B2GHP02uW":{"layout":["fixed","auto"]},"yMCYwv3fq":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Sn as __FramerMetadata__, $ as default, fn as queryParamNames };
//# sourceMappingURL=C1XxL68-586OTc7OMBFOoux76F6QjenoXRaoApc2qLQ.Xq5dC1Hs.mjs.map
