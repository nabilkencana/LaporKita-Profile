import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  N as r,
  O as i,
  P as a,
  _ as o,
  c as s,
  j as c,
  l,
  s as u,
  u as d,
  w as f,
  x as ee,
  y as te,
} from "./react.Dfbt0i5D.mjs";
import { a as ne, r as re, t as p, w as m } from "./motion.DA7Wf6OE.mjs";
import {
  $ as h,
  At as g,
  C as _,
  D as v,
  E as y,
  G as b,
  I as x,
  J as S,
  M as C,
  N as ie,
  O as w,
  Ot as T,
  Pt as E,
  Tt as ae,
  a as D,
  d as oe,
  f as se,
  ft as ce,
  g as O,
  gt as le,
  ht as ue,
  k as de,
  m as fe,
  mt as pe,
  o as k,
  q as A,
  s as j,
  vt as me,
  wt as M,
  yt as he,
  z as N,
} from "./framer.DwK__Hy9.mjs";
import {
  C as ge,
  E as P,
  S as F,
  T as _e,
  _ as ve,
  a as ye,
  b as I,
  c as L,
  g as R,
  h as z,
  i as be,
  m as xe,
  n as Se,
  o as Ce,
  p as we,
  r as B,
  s as Te,
  t as V,
  v as Ee,
  w as De,
  x as H,
  y as Oe,
} from "./shared-lib.BFsVOxQ4.mjs";
import { n as ke, t as U } from "./DispersionBands.Ba7W0ZOn.mjs";
import { n as Ae, t as W } from "./R32mQWWE9.DxSftEoD.mjs";
import {
  a as je,
  c as Me,
  d as G,
  f as Ne,
  i as Pe,
  l as K,
  n as Fe,
  o as Ie,
  r as Le,
  s as Re,
  t as ze,
  u as Be,
} from "./Z7CzuxNJN.tjaA4hZo.mjs";
import Ve, { t as He } from "./Z1GFE4KFr1tc2OzyjQZtvF3i-IWLICnyz-YnuPfZx7Q.DTLIaRWz.mjs";
function q({
  numberFontSize: e = 48,
  numberFontFamily: t = `Inter`,
  numberFontColor: a = `#FFFFFF`,
  numberFontWeight: o = `bold`,
  labelFontSize: s = 14,
  labelFontFamily: c = `Inter`,
  labelFontColor: u = `#FFFFFF`,
  labelFontWeight: f = `normal`,
  endDate: te = `2027-12-03`,
  endTime: ne = `00:00:00`,
  endMessage: re = `Time's up!`,
  boxColor: p = `rgba(255, 255, 255, 0.1)`,
  padding: m = `0px`,
  showBars: h = !0,
  barColor: g = `rgba(255, 255, 255, 0.3)`,
  barWidth: _ = 2,
  barHeight: v = 40,
}) {
  let [y, b] = n(S()),
    x = i(y);
  r(() => {
    let e = setInterval(() => {
      ((x.current = y), b(S()));
    }, 1e3);
    return () => clearInterval(e);
  }, [y]);
  function S() {
    let e = new Date(`${te}T${ne}`),
      t = e - new Date();
    return isNaN(e.getTime())
      ? (console.error(`Invalid date or time format`), null)
      : t > 0
        ? {
            days: Math.floor(t / (1e3 * 60 * 60 * 24)),
            hours: Math.floor((t / (1e3 * 60 * 60)) % 24),
            minutes: Math.floor((t / 1e3 / 60) % 60),
            seconds: Math.floor((t / 1e3) % 60),
          }
        : null;
  }
  function C(n, r) {
    let i = r !== n;
    return d(`div`, {
      style: {
        position: `relative`,
        height: `${e * 1.2}px`,
        overflow: `hidden`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      },
      children: [
        i &&
          l(`div`, {
            style: {
              position: `absolute`,
              fontSize: `${e}px`,
              fontFamily: t,
              color: a,
              fontWeight: o,
              animation: `slide-out 0.5s forwards`,
            },
            children: String(r).padStart(2, `0`),
          }),
        l(`div`, {
          style: {
            position: `absolute`,
            fontSize: `${e}px`,
            fontFamily: t,
            color: a,
            fontWeight: o,
            transform: i ? `translateY(100%)` : `translateY(0%)`,
            animation: i ? `slide-in 0.5s forwards` : `none`,
          },
          children: String(n).padStart(2, `0`),
        }),
        l(`style`, {
          children: `
                        @keyframes slide-in {
                            0% { transform: translateY(100%); }
                            100% { transform: translateY(0%); }
                        }
                        @keyframes slide-out {
                            0% { transform: translateY(0%); }
                            100% { transform: translateY(-100%); }
                        }
                    `,
        }),
      ],
    });
  }
  return l(`div`, {
    style: {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      alignItems: `center`,
      gap: `1rem`,
      flexWrap: `wrap`,
      padding: m,
    },
    children: y
      ? Object.entries(y).map(([e, t], n, r) =>
          d(
            ee.Fragment,
            {
              children: [
                d(`div`, {
                  style: {
                    textAlign: `center`,
                    padding: `0.5rem`,
                    backgroundColor: p,
                    borderRadius: `8px`,
                    minWidth: `60px`,
                    position: `relative`,
                    flex: `1 1 80px`,
                  },
                  children: [
                    C(t, x.current ? x.current[e] : t),
                    l(`div`, {
                      style: {
                        fontSize: `${s}px`,
                        fontFamily: c,
                        color: u,
                        fontWeight: f,
                        textTransform: `uppercase`,
                        marginTop: `0.5rem`,
                      },
                      children: e,
                    }),
                  ],
                }),
                h &&
                  n < r.length - 1 &&
                  l(`div`, {
                    style: {
                      width: `${_}px`,
                      height: `${v}px`,
                      backgroundColor: g,
                      borderRadius: `2px`,
                    },
                  }),
              ],
            },
            e
          )
        )
      : l(`span`, {
          style: { fontSize: `${e}px`, fontFamily: t, color: a, fontWeight: o },
          children: re,
        }),
  });
}
var Ue = e(() => {
    (u(),
      f(),
      h(),
      ie(q, {
        numberFontSize: { type: j.Number, title: `Number Size`, unit: `px`, defaultValue: 48 },
        numberFontFamily: { type: j.String, title: `Number Font`, defaultValue: `Inter` },
        numberFontColor: { type: j.Color, title: `Number Color`, defaultValue: `#FFFFFF` },
        numberFontWeight: {
          type: j.Enum,
          title: `Number Weight`,
          defaultValue: `bold`,
          options: [
            `normal`,
            `bold`,
            `bolder`,
            `lighter`,
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900,
          ],
        },
        labelFontSize: { type: j.Number, title: `Label Size`, unit: `px`, defaultValue: 14 },
        labelFontFamily: { type: j.String, title: `Label Font`, defaultValue: `Inter` },
        labelFontColor: { type: j.Color, title: `Label Color`, defaultValue: `#FFFFFF` },
        labelFontWeight: {
          type: j.Enum,
          title: `Label Weight`,
          defaultValue: `normal`,
          options: [
            `normal`,
            `bold`,
            `bolder`,
            `lighter`,
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900,
          ],
        },
        showBars: { type: j.Boolean, title: `Show Bars`, defaultValue: !0 },
        barColor: {
          type: j.Color,
          title: `Bar Color`,
          defaultValue: `rgba(255, 255, 255, 0.3)`,
          hidden(e) {
            return !e.showBars;
          },
        },
        barWidth: {
          type: j.Number,
          title: `Bar Width`,
          unit: `px`,
          defaultValue: 2,
          hidden(e) {
            return !e.showBars;
          },
        },
        barHeight: {
          type: j.Number,
          title: `Bar Height`,
          unit: `px`,
          defaultValue: 40,
          hidden(e) {
            return !e.showBars;
          },
        },
        endDate: {
          type: j.String,
          title: `End Date`,
          defaultValue: `2027-12-03`,
          description: `YYYY-MM-DD format`,
        },
        endTime: {
          type: j.String,
          title: `End Time`,
          defaultValue: `00:00:00`,
          description: `HH:MM:SS format`,
        },
        endMessage: { type: j.String, title: `End Message`, defaultValue: `Time's up!` },
        boxColor: { type: j.Color, title: `Box Color`, defaultValue: `rgba(255, 255, 255, 0.1)` },
        padding: {
          type: j.String,
          title: `Padding`,
          defaultValue: `0px`,
          description: `Padding for the parent container`,
        },
      }));
  }),
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  J,
  nt,
  rt,
  it,
  at,
  Y,
  ot,
  X,
  st,
  ct,
  lt,
  Z,
  ut,
  dt,
  Q,
  $;
e(() => {
  (u(),
    h(),
    p(),
    f(),
    ke(),
    P(),
    De(),
    be(),
    Ne(),
    F(),
    Ae(),
    Be(),
    Se(),
    Ue(),
    R(),
    L(),
    Me(),
    I(),
    Pe(),
    He(),
    (We = b(B)),
    (Ge = E(B)),
    (Ke = g(k)),
    (qe = b(V)),
    (Je = E(V)),
    (Ye = b(K)),
    (Xe = b(W)),
    (Ze = b(q)),
    (Qe = b(H)),
    ($e = b(G)),
    (et = g(m.div)),
    (tt = {
      pN1ZXCGQY: `(max-width: 809.98px)`,
      QRCgBiynH: `(min-width: 1200px)`,
      sl5XwBmNM: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (J = () => typeof document < `u`),
    (nt = []),
    (rt = `framer-Q9pgh`),
    (it = {
      pN1ZXCGQY: `framer-v-mht8lg`,
      QRCgBiynH: `framer-v-xwz70z`,
      sl5XwBmNM: `framer-v-nmfaby`,
    }),
    (at = (e, t, n) => (e && t ? `position` : n)),
    (Y = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (ot = {
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
    (st = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (ct = {
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
    (lt = { delay: 0.1, duration: 0.4, ease: [0.62, 0, 0.36, 1], type: `tween` }),
    (Z = { Desktop: `QRCgBiynH`, Phone: `pN1ZXCGQY`, Tablet: `sl5XwBmNM` }),
    (ut = ({ value: e }) =>
      le()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (dt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `QRCgBiynH`,
    })),
    (Q = T(
      o(function (e, n) {
        let r = i(null),
          o = n ?? r,
          u = te(),
          { activeLocale: f, setLocale: ee } = me(),
          p = ce(),
          { style: h, className: g, layoutId: b, variant: C, ...ie } = dt(e);
        he(c(() => Ve({}, f), [f]));
        let [T, E] = ue(C, tt, !1),
          le = x(rt, je, ye, ve, we, ze),
          A = t(fe)?.isLayoutTemplate,
          j = !!t(ne)?.transition?.layout,
          N = at(A, j),
          P = () => !J() || T !== `pN1ZXCGQY`,
          F = i(null),
          I = i(null),
          L = i(null),
          R = () => !J() || T === `pN1ZXCGQY`;
        ae();
        let z = M(`tgtCBX0g2`),
          be = M(`MPzo_IWmD`),
          xe = M(`tLb8GGAa6`);
        return (
          pe({}),
          l(fe.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Z,
              primaryVariantId: `QRCgBiynH`,
              variantClassNames: it,
            },
            children: d(re, {
              id: b ?? u,
              children: [
                l(ut, {
                  value: `html body { background: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255)); }`,
                }),
                d(m.div, {
                  ...ie,
                  className: x(le, `framer-xwz70z`, g),
                  ref: o,
                  style: { ...h },
                  children: [
                    d(m.div, {
                      className: `framer-mtjvm`,
                      "data-framer-name": `Sticky Navbar`,
                      layout: N,
                      children: [
                        P() &&
                          l(D, {
                            height: 54,
                            y: 10,
                            children: l(Ke, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !1,
                              __framer__scrollDirection: { direction: `down`, target: ot },
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-i12wn7-container hidden-mht8lg`,
                              "data-framer-name": `Sticky Navbar`,
                              name: `Sticky Navbar`,
                              nodeId: `vVVhKKffo`,
                              rendersWithMotion: !0,
                              scopeId: `rBIK102DM`,
                              children: l(_, {
                                breakpoint: T,
                                overrides: { sl5XwBmNM: { variant: X(`s2C12m7th`) } },
                                children: l(Ge, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [
                                    { ref: F, target: `rW9FSF2qY` },
                                    { ref: I, target: `raqMsV85o` },
                                    { ref: L, target: `rW9FSF2qY` },
                                  ],
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `vVVhKKffo`,
                                  layoutId: `vVVhKKffo`,
                                  name: `Sticky Navbar`,
                                  variant: X(`HMXabXHGE`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        R() &&
                          l(_, {
                            breakpoint: T,
                            overrides: { pN1ZXCGQY: { height: 60, width: `100vw`, y: 0 } },
                            children: l(D, {
                              children: l(k, {
                                className: `framer-1osg0kc-container hidden-xwz70z hidden-nmfaby`,
                                nodeId: `mA5DB0yVn`,
                                rendersWithMotion: !0,
                                scopeId: `rBIK102DM`,
                                children: l(Je, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [{ ref: F, target: `oqXNvb_1y` }],
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `mA5DB0yVn`,
                                  layoutId: `mA5DB0yVn`,
                                  style: { width: `100%` },
                                  variant: X(`LKPxHVCpA`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    d(m.div, {
                      className: `framer-1z1032q`,
                      "data-framer-name": `Main`,
                      layout: N,
                      children: [
                        d(`div`, {
                          className: `framer-16k4cxb`,
                          "data-framer-name": `Header Section`,
                          children: [
                            d(`div`, {
                              className: `framer-yof1ud`,
                              "data-framer-name": `Header Content`,
                              children: [
                                d(`div`, {
                                  className: `framer-hkjqnm`,
                                  "data-framer-name": `Header Copy`,
                                  children: [
                                    d(`div`, {
                                      className: `framer-2zvt89`,
                                      "data-border": !0,
                                      "data-framer-name": `Shell`,
                                      children: [
                                        l(_, {
                                          breakpoint: T,
                                          overrides: {
                                            pN1ZXCGQY: {
                                              y:
                                                (p?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                118.9 +
                                                30 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                          },
                                          children: l(D, {
                                            height: 15,
                                            y:
                                              (p?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              185.9 +
                                              25 +
                                              0 +
                                              0 +
                                              0 +
                                              9.1,
                                            children: l(k, {
                                              className: `framer-1acw0w1-container`,
                                              nodeId: `Y_o480K4w`,
                                              scopeId: `rBIK102DM`,
                                              children: l(K, {
                                                height: `100%`,
                                                id: `Y_o480K4w`,
                                                layoutId: `Y_o480K4w`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-1kyvdj7`,
                                              "data-styles-preset": `s3xaUzb1J`,
                                              dir: `auto`,
                                              children: `Launching Soon`,
                                            }),
                                          }),
                                          className: `framer-1og3vnf`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(`div`, {
                                      className: `framer-1p29ik2`,
                                      "data-framer-name": `Copy`,
                                      children: [
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `Get Sortia Early Now`,
                                            }),
                                          }),
                                          className: `framer-1bpypcl`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                              },
                                              children: `Be the first to experience the engine that actively protects your deep work.`,
                                            }),
                                          }),
                                          className: `framer-1k21rsk`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d(`div`, {
                                  className: `framer-74xd57`,
                                  "data-framer-name": `Main Content`,
                                  children: [
                                    l(oe, {
                                      className: `framer-15mcx4o`,
                                      "data-framer-name": `Waitlist Form`,
                                      nodeId: `qO6knETTH`,
                                      children: (e) =>
                                        d(s, {
                                          children: [
                                            l(`label`, {
                                              className: `framer-tc9gu8`,
                                              "data-framer-name": `Input Field`,
                                              children: l(se, {
                                                className: `framer-xysur0`,
                                                inputName: `Email`,
                                                placeholder: `markbrandon@example.com`,
                                                required: !0,
                                                type: `email`,
                                              }),
                                            }),
                                            l(_, {
                                              breakpoint: T,
                                              overrides: {
                                                pN1ZXCGQY: {
                                                  width: `280px`,
                                                  y:
                                                    (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    118.9 +
                                                    30 +
                                                    243.2 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    45,
                                                },
                                              },
                                              children: l(D, {
                                                height: 40,
                                                width: `136px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  185.9 +
                                                  25 +
                                                  243.2 +
                                                  0 +
                                                  0 +
                                                  0,
                                                children: l(k, {
                                                  className: `framer-w5ux7-container`,
                                                  nodeId: `ENWyuZTnM`,
                                                  scopeId: `rBIK102DM`,
                                                  children: l(W, {
                                                    H7xPVCt1U: `Get Access`,
                                                    height: `100%`,
                                                    id: `ENWyuZTnM`,
                                                    layoutId: `ENWyuZTnM`,
                                                    style: { height: `100%`, width: `100%` },
                                                    type: `submit`,
                                                    variant: st(
                                                      e,
                                                      {
                                                        pending: `YyUwlm2us`,
                                                        success: `EfoUBBrZj`,
                                                      },
                                                      X(`ypR4EPow5`)
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    }),
                                    d(`div`, {
                                      className: `framer-1en8jle`,
                                      "data-framer-name": `Social Proof`,
                                      children: [
                                        d(`div`, {
                                          className: `framer-14tv1f1`,
                                          "data-framer-name": `Avatar`,
                                          children: [
                                            l(_, {
                                              breakpoint: T,
                                              overrides: {
                                                pN1ZXCGQY: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 3840,
                                                    intrinsicWidth: 5760,
                                                    loading: S(
                                                      (p?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        118.9 +
                                                        30 +
                                                        243.2 +
                                                        0 +
                                                        115 +
                                                        34 +
                                                        0
                                                    ),
                                                    pixelHeight: 3840,
                                                    pixelWidth: 5760,
                                                    sizes: `36px`,
                                                    src: `../../assets/images/uTp6unitriVR2TOodHezRxHkAk-093158.jpg`,
                                                    srcSet: `../../assets/images/uTp6unitriVR2TOodHezRxHkAk.jpg 512w,../../assets/images/uTp6unitriVR2TOodHezRxHkAk-c688e1.jpg 1024w,../../assets/images/uTp6unitriVR2TOodHezRxHkAk-af2bbd.jpg 2048w,../../assets/images/uTp6unitriVR2TOodHezRxHkAk-6bf6db.jpg 4096w,../../assets/images/uTp6unitriVR2TOodHezRxHkAk-093158.jpg 5760w`,
                                                  },
                                                },
                                              },
                                              children: l(O, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 3840,
                                                  intrinsicWidth: 5760,
                                                  loading: S(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      185.9 +
                                                      25 +
                                                      243.2 +
                                                      0 +
                                                      70 +
                                                      -5.5 +
                                                      0
                                                  ),
                                                  pixelHeight: 3840,
                                                  pixelWidth: 5760,
                                                  sizes: `36px`,
                                                  src: `../../assets/images/uTp6unitriVR2TOodHezRxHkAk-093158.jpg`,
                                                  srcSet: `../../assets/images/uTp6unitriVR2TOodHezRxHkAk.jpg 512w,../../assets/images/uTp6unitriVR2TOodHezRxHkAk-c688e1.jpg 1024w,../../assets/images/uTp6unitriVR2TOodHezRxHkAk-af2bbd.jpg 2048w,../../assets/images/uTp6unitriVR2TOodHezRxHkAk-6bf6db.jpg 4096w,../../assets/images/uTp6unitriVR2TOodHezRxHkAk-093158.jpg 5760w`,
                                                },
                                                className: `framer-1bg7xtg`,
                                                "data-border": !0,
                                                "data-framer-name": `Avatar Item`,
                                              }),
                                            }),
                                            l(_, {
                                              breakpoint: T,
                                              overrides: {
                                                pN1ZXCGQY: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 4e3,
                                                    intrinsicWidth: 6e3,
                                                    loading: S(
                                                      (p?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        118.9 +
                                                        30 +
                                                        243.2 +
                                                        0 +
                                                        115 +
                                                        34 +
                                                        0
                                                    ),
                                                    pixelHeight: 4e3,
                                                    pixelWidth: 6e3,
                                                    sizes: `36px`,
                                                    src: `../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-57c410.jpg`,
                                                    srcSet: `../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY.jpg 512w,../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-f9d66f.jpg 1024w,../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-7cde66.jpg 2048w,../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-93bb29.jpg 4096w,../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-57c410.jpg 6000w`,
                                                  },
                                                },
                                              },
                                              children: l(O, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 4e3,
                                                  intrinsicWidth: 6e3,
                                                  loading: S(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      185.9 +
                                                      25 +
                                                      243.2 +
                                                      0 +
                                                      70 +
                                                      -5.5 +
                                                      0
                                                  ),
                                                  pixelHeight: 4e3,
                                                  pixelWidth: 6e3,
                                                  sizes: `36px`,
                                                  src: `../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-57c410.jpg`,
                                                  srcSet: `../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY.jpg 512w,../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-f9d66f.jpg 1024w,../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-7cde66.jpg 2048w,../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-93bb29.jpg 4096w,../../assets/images/5sIE4KIxao3uNj2hJUwMgEi1dY-57c410.jpg 6000w`,
                                                },
                                                className: `framer-7p7nce`,
                                                "data-border": !0,
                                                "data-framer-name": `Avatar Item`,
                                              }),
                                            }),
                                            l(_, {
                                              breakpoint: T,
                                              overrides: {
                                                pN1ZXCGQY: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 4160,
                                                    intrinsicWidth: 6240,
                                                    loading: S(
                                                      (p?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        118.9 +
                                                        30 +
                                                        243.2 +
                                                        0 +
                                                        115 +
                                                        34 +
                                                        0
                                                    ),
                                                    pixelHeight: 4160,
                                                    pixelWidth: 6240,
                                                    sizes: `36px`,
                                                    src: `../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-46c734.jpg`,
                                                    srcSet: `../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk.jpg 512w,../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-1d72a5.jpg 1024w,../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-a2c31a.jpg 2048w,../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-a5037f.jpg 4096w,../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-46c734.jpg 6240w`,
                                                  },
                                                },
                                              },
                                              children: l(O, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 4160,
                                                  intrinsicWidth: 6240,
                                                  loading: S(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      185.9 +
                                                      25 +
                                                      243.2 +
                                                      0 +
                                                      70 +
                                                      -5.5 +
                                                      0
                                                  ),
                                                  pixelHeight: 4160,
                                                  pixelWidth: 6240,
                                                  sizes: `36px`,
                                                  src: `../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-46c734.jpg`,
                                                  srcSet: `../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk.jpg 512w,../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-1d72a5.jpg 1024w,../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-a2c31a.jpg 2048w,../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-a5037f.jpg 4096w,../../assets/images/kIztWbYrpelGWHEY4fKu3vUENFk-46c734.jpg 6240w`,
                                                },
                                                className: `framer-me6gf2`,
                                                "data-border": !0,
                                                "data-framer-name": `Avatar Item`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-1y3tbh`,
                                              "data-styles-preset": `HutzmjBVA`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(92, 103, 136))`,
                                              },
                                              children: `Join 2,500+ high-performers already on the list.`,
                                            }),
                                          }),
                                          className: `framer-tnd9yu`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(D, {
                                  children: l(_, {
                                    breakpoint: T,
                                    overrides: { pN1ZXCGQY: { style: { scale: 0.7 } } },
                                    children: l(k, {
                                      className: `framer-pc3a8a-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `hwA3PhzyV`,
                                      rendersWithMotion: !0,
                                      scopeId: `rBIK102DM`,
                                      children: l(_, {
                                        breakpoint: T,
                                        overrides: {
                                          pN1ZXCGQY: { labelFontSize: 14, numberFontSize: 32 },
                                        },
                                        children: l(q, {
                                          barColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                          barHeight: 58,
                                          barWidth: 1,
                                          boxColor: `rgba(242, 243, 255, 0)`,
                                          endDate: `2027-08-12`,
                                          endMessage: `Time's up!`,
                                          endTime: `00:00:00`,
                                          height: `100%`,
                                          id: `hwA3PhzyV`,
                                          labelFontColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                          labelFontFamily: `Plus Jakarta Sans `,
                                          labelFontSize: 16,
                                          labelFontWeight: 500,
                                          layoutId: `hwA3PhzyV`,
                                          numberFontColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                          numberFontFamily: `Geist Mono`,
                                          numberFontSize: 38,
                                          numberFontWeight: 400,
                                          padding: `3px`,
                                          showBars: !0,
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            l(k, {
                              className: `framer-9yjnfu-container`,
                              style: { rotate: 180 },
                              children: l(_, {
                                breakpoint: T,
                                overrides: {
                                  pN1ZXCGQY: {
                                    fallbackImage: `https://framerusercontent.com/images/HU8SGMRwKbm3UaCFl3GNubQT5Bo.png?scale-down-to=800&width=400&height=1600`,
                                  },
                                  sl5XwBmNM: {
                                    fallbackImage: `https://framerusercontent.com/images/XJ6tcx3XIc9AjQJnO8UkFusWfc.png?scale-down-to=1080&width=1620&height=2160`,
                                  },
                                },
                                children: l(de, {
                                  __fromCanvasComponent: !0,
                                  animated: U.animated,
                                  buffers: U.buffers,
                                  fallbackImage: `https://framerusercontent.com/images/b227D6oHcbIjcKMEt1I7zLmYhvc.png?scale-down-to=1200&width=2400&height=1600`,
                                  fragmentShader: U.fragment,
                                  height: `100%`,
                                  heightmapSource: U.heightmapSource,
                                  mode: `progressive`,
                                  mouse: U.mouse && { enabled: U.mouse === `enabledByDefault` },
                                  resolutionScale: U.resolutionScale,
                                  skipInitialFallback: !0,
                                  uniforms: {
                                    u_colors: {
                                      type: `array`,
                                      value: [
                                        `var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(0, 67, 195))`,
                                        `var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(66, 109, 255))`,
                                        `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                      ],
                                    },
                                    u_dispersionStrength: { type: `number`, value: 0.02 },
                                    u_edgeDisp: { type: `number`, value: 5 },
                                    u_ephemeralAmp: { type: `number`, value: 0 },
                                    u_lensRadius: { type: `number`, value: 0.54 },
                                    u_lensScale: { type: `number`, value: 3.4 },
                                    u_lensSpacingX: { type: `number`, value: 0.79 },
                                    u_lensSpacingY: { type: `number`, value: 0.01 },
                                    u_seed: { type: `number`, value: 178 },
                                    u_speed: { type: `number`, value: 0.27 },
                                  },
                                  vertexShader: U.vertex,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        d(et, {
                          __framer__animate: { transition: lt },
                          __framer__animateOnce: !0,
                          __framer__enter: ct,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1fq0oul`,
                          "data-framer-name": `FAQ Section`,
                          children: [
                            d(`div`, {
                              className: `framer-1lsbqok`,
                              "data-framer-name": `FAQ Intro`,
                              children: [
                                d(`div`, {
                                  className: `framer-1y0d82m`,
                                  "data-framer-name": `FAQ Heading`,
                                  children: [
                                    d(`div`, {
                                      className: `framer-mhz301`,
                                      "data-framer-name": `FAQ Badge`,
                                      children: [
                                        d(`div`, {
                                          className: `framer-12szm7x`,
                                          "data-border": !0,
                                          "data-framer-name": `FAQ Badge Shell`,
                                          children: [
                                            l(_, {
                                              breakpoint: T,
                                              overrides: {
                                                pN1ZXCGQY: {
                                                  y:
                                                    (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1080 +
                                                    20 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    9.1,
                                                },
                                                sl5XwBmNM: {
                                                  y:
                                                    (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1080 +
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
                                              children: l(D, {
                                                height: 15,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1080 +
                                                  74.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  9.1,
                                                children: l(k, {
                                                  className: `framer-17sb3u9-container`,
                                                  nodeId: `WvAkg9Ex1`,
                                                  scopeId: `rBIK102DM`,
                                                  children: l(K, {
                                                    height: `100%`,
                                                    id: `WvAkg9Ex1`,
                                                    layoutId: `WvAkg9Ex1`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(v, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-1kyvdj7`,
                                                  "data-styles-preset": `s3xaUzb1J`,
                                                  dir: `auto`,
                                                  children: `FAQs`,
                                                }),
                                              }),
                                              className: `framer-1pxxv2c`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`h2`, {
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
                                          className: `framer-uq7d10`,
                                          "data-framer-name": `FAQ Badge Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(a, {
                                        children: l(`p`, {
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
                                      className: `framer-1bdv0wn`,
                                      "data-framer-name": `FAQ Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                d(`div`, {
                                  className: `framer-lhnppw`,
                                  "data-framer-name": `FAQ Support CTA`,
                                  children: [
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(a, {
                                        children: l(`h3`, {
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
                                      className: `framer-2fr4f`,
                                      "data-framer-name": `Support CTA Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(a, {
                                        children: l(`p`, {
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
                                      className: `framer-hhlan3`,
                                      "data-framer-name": `Support CTA Copy`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(y, {
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
                                        l(_, {
                                          breakpoint: T,
                                          overrides: {
                                            pN1ZXCGQY: {
                                              y:
                                                (p?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1080 +
                                                20 +
                                                0 +
                                                0 +
                                                272.2 +
                                                40 +
                                                170,
                                            },
                                            sl5XwBmNM: {
                                              y:
                                                (p?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1080 +
                                                40 +
                                                0 +
                                                0 +
                                                252.2 +
                                                55 +
                                                113,
                                            },
                                          },
                                          children: l(D, {
                                            height: 44,
                                            width: `188px`,
                                            y:
                                              (p?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1080 +
                                              74.5 +
                                              0 +
                                              274 +
                                              55 +
                                              113,
                                            children: l(k, {
                                              className: `framer-1jq0qo5-container`,
                                              "data-framer-name": `CTA Button`,
                                              name: `CTA Button`,
                                              nodeId: `utFGUuXC8`,
                                              scopeId: `rBIK102DM`,
                                              children: l(_, {
                                                breakpoint: T,
                                                overrides: {
                                                  pN1ZXCGQY: { TWaZPhsrs: e[2] },
                                                  sl5XwBmNM: { TWaZPhsrs: e[1] },
                                                },
                                                children: l(H, {
                                                  bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(46, 52, 71))`,
                                                  dMzFGkb3u: !1,
                                                  dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                                  F9tZ22mws: {
                                                    borderColor: `rgba(20, 23, 33, 0)`,
                                                    borderStyle: `solid`,
                                                    borderWidth: 2,
                                                  },
                                                  height: `100%`,
                                                  id: `utFGUuXC8`,
                                                  jfeAUucDj: ge,
                                                  layoutId: `utFGUuXC8`,
                                                  lnJBzRgIM: `Get in Touch`,
                                                  MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255))`,
                                                  name: `CTA Button`,
                                                  ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  SLp3DWZqR: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  TWaZPhsrs: e[0],
                                                  variant: X(`nhzWZDlVc`),
                                                  vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                                  wDmZ1dhUo: _e,
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
                                    d(`div`, {
                                      className: `framer-630pph`,
                                      "data-framer-name": `FAQ Item Details`,
                                      children: [
                                        l(`div`, {
                                          className: `framer-c8canu`,
                                          "data-framer-name": `Icon`,
                                          children: l(w, {
                                            className: `framer-1d1yyvk`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(m.div, {
                                          className: `framer-2pwt1s`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: l(w, {
                                            className: `framer-1ecp1zk`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(m.div, {
                                          className: `framer-1foow3y`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: l(w, {
                                            className: `framer-zbcrg7`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(0, 49, 150)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(m.div, {
                                          className: `framer-10f047a`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: l(w, {
                                            className: `framer-1ja6n3g`,
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
                            d(`div`, {
                              className: `framer-m3d3d3`,
                              "data-framer-name": `FAQ Items Grid`,
                              children: [
                                l(_, {
                                  breakpoint: T,
                                  overrides: {
                                    pN1ZXCGQY: {
                                      width: `calc(${p?.width || `100vw`} - 40px)`,
                                      y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 20 + 601.2 + 0 + 0,
                                    },
                                    sl5XwBmNM: {
                                      width: `calc(${p?.width || `100vw`} - 80px)`,
                                      y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 40 + 497.2 + 0 + 0,
                                    },
                                  },
                                  children: l(D, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 40 + 0 + 0,
                                    children: l(k, {
                                      className: `framer-1q2u1nb-container`,
                                      "data-framer-name": `Auto Reschedule FAQ`,
                                      name: `Auto Reschedule FAQ`,
                                      nodeId: `Y2oS8q69o`,
                                      scopeId: `rBIK102DM`,
                                      children: l(G, {
                                        CYcMeDYwX: `If a calendar event runs late, Sortia's predictive engine instantly shifts your remaining tasks to the next available slot automatically.`,
                                        height: `100%`,
                                        id: `Y2oS8q69o`,
                                        layoutId: `Y2oS8q69o`,
                                        name: `Auto Reschedule FAQ`,
                                        style: { width: `100%` },
                                        variant: X(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `How does the AI auto-reschedule my day?`,
                                      }),
                                    }),
                                  }),
                                }),
                                l(_, {
                                  breakpoint: T,
                                  overrides: {
                                    pN1ZXCGQY: {
                                      width: `calc(${p?.width || `100vw`} - 40px)`,
                                      y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 20 + 601.2 + 0 + 141,
                                    },
                                    sl5XwBmNM: {
                                      width: `calc(${p?.width || `100vw`} - 80px)`,
                                      y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 40 + 497.2 + 0 + 141,
                                    },
                                  },
                                  children: l(D, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 40 + 0 + 141,
                                    children: l(k, {
                                      className: `framer-khrym-container`,
                                      "data-framer-name": `Calendar Sync FAQ`,
                                      name: `Calendar Sync FAQ`,
                                      nodeId: `mKb2qOnr6`,
                                      scopeId: `rBIK102DM`,
                                      children: l(G, {
                                        CYcMeDYwX: `We feature full, real-time two-way synchronization with Google Calendar, Apple Calendar, and Outlook to completely prevent double-booking.`,
                                        height: `100%`,
                                        id: `mKb2qOnr6`,
                                        layoutId: `mKb2qOnr6`,
                                        name: `Calendar Sync FAQ`,
                                        style: { width: `100%` },
                                        variant: X(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Which calendars does Sortia sync with?`,
                                      }),
                                    }),
                                  }),
                                }),
                                l(_, {
                                  breakpoint: T,
                                  overrides: {
                                    pN1ZXCGQY: {
                                      width: `calc(${p?.width || `100vw`} - 40px)`,
                                      y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 20 + 601.2 + 0 + 282,
                                    },
                                    sl5XwBmNM: {
                                      width: `calc(${p?.width || `100vw`} - 80px)`,
                                      y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 40 + 497.2 + 0 + 282,
                                    },
                                  },
                                  children: l(D, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 40 + 0 + 282,
                                    children: l(k, {
                                      className: `framer-gk47d5-container`,
                                      "data-framer-name": `Voice Notes FAQ`,
                                      name: `Voice Notes FAQ`,
                                      nodeId: `vESg645lg`,
                                      scopeId: `rBIK102DM`,
                                      children: l(G, {
                                        CYcMeDYwX: `Not at all. Speak entirely naturally into the capture bar; our advanced NLP automatically extracts deadlines, context, and action items.`,
                                        height: `100%`,
                                        id: `vESg645lg`,
                                        layoutId: `vESg645lg`,
                                        name: `Voice Notes FAQ`,
                                        style: { width: `100%` },
                                        variant: X(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Do I have to format my voice notes?`,
                                      }),
                                    }),
                                  }),
                                }),
                                l(_, {
                                  breakpoint: T,
                                  overrides: {
                                    pN1ZXCGQY: {
                                      width: `calc(${p?.width || `100vw`} - 40px)`,
                                      y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 20 + 601.2 + 0 + 423,
                                    },
                                    sl5XwBmNM: {
                                      width: `calc(${p?.width || `100vw`} - 80px)`,
                                      y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 40 + 497.2 + 0 + 423,
                                    },
                                  },
                                  children: l(D, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (p?.y || 0) + 0 + 0 + 0 + 1080 + 40 + 0 + 423,
                                    children: l(k, {
                                      className: `framer-17225kz-container`,
                                      "data-framer-name": `Data Safety FAQ`,
                                      name: `Data Safety FAQ`,
                                      nodeId: `Y2dubOa7T`,
                                      scopeId: `rBIK102DM`,
                                      children: l(G, {
                                        CYcMeDYwX: `Absolutely. We use industry-standard, end-to-end encryption to read your schedule, and your personal data is never sold or shared.`,
                                        height: `100%`,
                                        id: `Y2dubOa7T`,
                                        layoutId: `Y2dubOa7T`,
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
                        l(`div`, {
                          className: `framer-l51uwy`,
                          "data-framer-name": `Top Trigger`,
                          id: z,
                          ref: F,
                        }),
                        l(`div`, {
                          className: `framer-ja0gie`,
                          "data-framer-name": `Second Trigger`,
                          id: be,
                          ref: I,
                        }),
                        l(`div`, {
                          className: `framer-is5j25`,
                          "data-framer-name": `Third Trigger`,
                          id: xe,
                          ref: L,
                        }),
                      ],
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Q9pgh.framer-qzw0ve, .framer-Q9pgh .framer-qzw0ve { display: block; }`,
        `.framer-Q9pgh.framer-xwz70z { align-content: center; align-items: center; background-color: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, #f2f3ff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Q9pgh .framer-mtjvm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 10px 200px 10px 200px; position: fixed; right: 0px; top: 0px; z-index: 7; }`,
        `.framer-Q9pgh .framer-i12wn7-container, .framer-Q9pgh .framer-1acw0w1-container, .framer-Q9pgh .framer-17sb3u9-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Q9pgh .framer-1osg0kc-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-Q9pgh .framer-1z1032q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 6; }`,
        `.framer-Q9pgh .framer-16k4cxb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; min-height: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-Q9pgh .framer-yof1ud { align-content: center; align-items: center; background-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f9f9fb); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 3px 3px 14px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 25px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-Q9pgh .framer-hkjqnm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 463px; z-index: 2; }`,
        `.framer-Q9pgh .framer-2zvt89, .framer-Q9pgh .framer-12szm7x { --border-bottom-width: 1px; --border-color: var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, #cfd4e2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, #e4e7ff); border-bottom-left-radius: 45px; border-bottom-right-radius: 45px; border-top-left-radius: 45px; border-top-right-radius: 45px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 9px 5px 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Q9pgh .framer-1og3vnf, .framer-Q9pgh .framer-tnd9yu, .framer-Q9pgh .framer-1pxxv2c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Q9pgh .framer-1p29ik2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Q9pgh .framer-1bpypcl, .framer-Q9pgh .framer-1k21rsk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Q9pgh .framer-74xd57 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 463px; z-index: 2; }`,
        `.framer-Q9pgh .framer-15mcx4o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Q9pgh .framer-tc9gu8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Q9pgh .framer-xysur0 { --framer-input-background: var(--token-00365915-f0f3-4877-af77-8ffc5575a330, #eceef2); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, #b9bed3); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #141721); --framer-input-font-family: "Geist Mono"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-ea843f5c-0baa-43e5-aac8-44fa5dda7fbd, #a1a8c3); flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-Q9pgh .framer-w5ux7-container { flex: none; height: 40px; position: relative; width: 136px; }`,
        `.framer-Q9pgh .framer-1en8jle { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 25px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Q9pgh .framer-14tv1f1 { flex: none; height: 36px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 60px; }`,
        `.framer-Q9pgh .framer-1bg7xtg { --border-bottom-width: 3px; --border-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f9f9fb); --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: none; height: 36px; left: 24px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Q9pgh .framer-7p7nce { --border-bottom-width: 3px; --border-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f9f9fb); --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: none; height: 36px; left: 13px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Q9pgh .framer-me6gf2 { --border-bottom-width: 3px; --border-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f9f9fb); --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: none; height: 36px; left: calc(36.666666666666686% - 36px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Q9pgh .framer-pc3a8a-container { flex: none; height: auto; position: relative; width: 480px; z-index: 2; }`,
        `.framer-Q9pgh .framer-9yjnfu-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-Q9pgh .framer-1fq0oul { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1200px; }`,
        `.framer-Q9pgh .framer-1lsbqok { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 484px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-Q9pgh .framer-1y0d82m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 521px; }`,
        `.framer-Q9pgh .framer-mhz301 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Q9pgh .framer-uq7d10 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 412px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Q9pgh .framer-1bdv0wn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 398px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Q9pgh .framer-lhnppw { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #426dff) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(0, 67, 195)) 100%); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 1px 1px 6px 0px var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, #8f9fff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 210px; justify-content: center; overflow: visible; padding: 55px; position: relative; width: 100%; }`,
        `.framer-Q9pgh .framer-2fr4f, .framer-Q9pgh .framer-hhlan3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-Q9pgh .framer-1jq0qo5-container { flex: none; height: 44px; position: relative; width: 188px; z-index: 2; }`,
        `.framer-Q9pgh .framer-630pph { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-Q9pgh .framer-c8canu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-Q9pgh .framer-1d1yyvk, .framer-Q9pgh .framer-zbcrg7, .framer-Q9pgh .framer-1ja6n3g { height: 15px; position: relative; width: 15px; }`,
        `.framer-Q9pgh .framer-2pwt1s { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 15px; min-width: 15px; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
        `.framer-Q9pgh .framer-1ecp1zk { height: 15px; left: 0px; position: absolute; top: 1px; width: 15px; }`,
        `.framer-Q9pgh .framer-1foow3y { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
        `.framer-Q9pgh .framer-10f047a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-Q9pgh .framer-m3d3d3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Q9pgh .framer-1q2u1nb-container, .framer-Q9pgh .framer-khrym-container, .framer-Q9pgh .framer-gk47d5-container, .framer-Q9pgh .framer-17225kz-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Q9pgh .framer-l51uwy { bottom: 1276px; flex: none; height: 1px; left: calc(50.00000000000002% - 1200px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1200px; z-index: 1; }`,
        `.framer-Q9pgh .framer-ja0gie { bottom: 634px; flex: none; height: 1px; left: calc(50.00000000000002% - 1200px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1200px; z-index: 1; }`,
        `.framer-Q9pgh .framer-is5j25 { bottom: -85px; flex: none; height: 1px; left: calc(50.00000000000002% - 1200px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1200px; z-index: 1; }`,
        ...Ie,
        ...Ce,
        ...Ee,
        ...xe,
        ...Fe,
        `.framer-Q9pgh[data-border="true"]::after, .framer-Q9pgh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Q9pgh.framer-xwz70z { width: 810px; } .framer-Q9pgh .framer-1fq0oul { flex-direction: column; width: 100%; } .framer-Q9pgh .framer-1lsbqok { flex: none; gap: 40px; height: min-content; justify-content: center; width: 100%; } .framer-Q9pgh .framer-m3d3d3 { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-Q9pgh.framer-xwz70z { width: 390px; } .framer-Q9pgh .framer-mtjvm { flex-direction: column; overflow: visible; padding: 0px; right: unset; width: 100%; } .framer-Q9pgh .framer-1osg0kc-container, .framer-Q9pgh .framer-tc9gu8, .framer-Q9pgh .framer-m3d3d3 { flex: none; width: 100%; } .framer-Q9pgh .framer-yof1ud { padding: 30px; width: 340px; } .framer-Q9pgh .framer-hkjqnm, .framer-Q9pgh .framer-74xd57, .framer-Q9pgh .framer-w5ux7-container, .framer-Q9pgh .framer-1y0d82m, .framer-Q9pgh .framer-uq7d10, .framer-Q9pgh .framer-1bdv0wn { width: 100%; } .framer-Q9pgh .framer-15mcx4o { flex-direction: column; } .framer-Q9pgh .framer-1en8jle { height: min-content; } .framer-Q9pgh .framer-tnd9yu { white-space: pre-wrap; width: 235px; word-break: break-word; word-wrap: break-word; } .framer-Q9pgh .framer-pc3a8a-container { width: 426px; } .framer-Q9pgh .framer-1fq0oul { flex-direction: column; padding: 20px; width: 100%; } .framer-Q9pgh .framer-1lsbqok { flex: none; gap: 60px; height: min-content; justify-content: center; width: 100%; } .framer-Q9pgh .framer-lhnppw { height: min-content; padding: 40px; } .framer-Q9pgh .framer-l51uwy { bottom: 1861px; }}`,
      ],
      `framer-Q9pgh`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 2832, width: 1200 }),
    C(
      Q,
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
            {
              cssFamilyName: `Geist Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist Mono`,
              url: `https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,
              weight: `400`,
            },
          ],
        },
        ...We,
        ...qe,
        ...Ye,
        ...Xe,
        ...Ze,
        ...Qe,
        ...$e,
        ...A(Re),
        ...A(Te),
        ...A(Oe),
        ...A(z),
        ...A(Le),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          N(B, {}, t),
          N(V, {}, t),
          N(K, {}, t),
          N(W, {}, t),
          N(H, {}, t),
          N(G, {}, t),
        ])
      ),
    }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerrBIK102DM`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `{"tgtCBX0g2":{"pattern":":tgtCBX0g2","name":"top-trigger"},"MPzo_IWmD":{"pattern":":MPzo_IWmD","name":"second-trigger"},"tLb8GGAa6":{"pattern":":tLb8GGAa6","name":"third-trigger"}}`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"sl5XwBmNM":{"layout":["fixed","auto"]},"pN1ZXCGQY":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `2832`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, nt as queryParamNames };
//# sourceMappingURL=1mJSh6rBJ9R7llF1p_Cpe-inL0RNTyS3TBKyB2YECCw.DhxAgPwQ.mjs.map
