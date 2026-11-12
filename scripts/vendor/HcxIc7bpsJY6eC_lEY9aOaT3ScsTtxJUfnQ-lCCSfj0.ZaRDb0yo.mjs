import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  N as i,
  O as a,
  P as o,
  R as ee,
  _ as s,
  j as te,
  l as c,
  s as ne,
  u as l,
  w as u,
  y as re,
  z as d,
} from "./react.Dfbt0i5D.mjs";
import { $ as f, Q as ie, W as ae, a as oe, r as p, t as m, w as h } from "./motion.DA7Wf6OE.mjs";
import {
  $ as g,
  At as _,
  C as v,
  D as y,
  E as b,
  G as x,
  I as se,
  J as S,
  M as ce,
  N as le,
  Nt as ue,
  O as C,
  Ot as de,
  Pt as fe,
  Tt as pe,
  a as w,
  ft as me,
  g as T,
  gt as E,
  ht as he,
  j as D,
  k as ge,
  kt as _e,
  m as ve,
  mt as ye,
  o as O,
  q as k,
  s as A,
  vt as be,
  wt as j,
  yt as xe,
  z as M,
} from "./framer.DwK__Hy9.mjs";
import {
  C as N,
  D as Se,
  E as Ce,
  O as we,
  S as Te,
  T as Ee,
  _ as De,
  a as Oe,
  b as ke,
  c as Ae,
  d as je,
  f as Me,
  g as Ne,
  h as Pe,
  i as Fe,
  l as Ie,
  m as Le,
  n as Re,
  o as ze,
  p as Be,
  r as Ve,
  s as He,
  t as Ue,
  u as We,
  v as Ge,
  w as Ke,
  x as P,
  y as qe,
} from "./shared-lib.BFsVOxQ4.mjs";
import { n as Je, t as F } from "./DispersionBands.Ba7W0ZOn.mjs";
import {
  A as Ye,
  C as Xe,
  D as I,
  E as Ze,
  M as Qe,
  O as $e,
  S as et,
  T as tt,
  _ as nt,
  a as rt,
  b as it,
  c as at,
  d as L,
  f as ot,
  g as st,
  h as ct,
  i as lt,
  j as ut,
  k as dt,
  l as R,
  m as ft,
  n as pt,
  o as mt,
  p as z,
  r as B,
  s as V,
  t as H,
  u as ht,
  v as gt,
  w as _t,
  x as vt,
  y as yt,
} from "./Phone.CXj6a0Hm.mjs";
import {
  a as bt,
  c as xt,
  d as U,
  f as St,
  i as Ct,
  l as W,
  n as wt,
  o as Tt,
  r as Et,
  s as Dt,
  t as Ot,
  u as kt,
} from "./Z7CzuxNJN.tjaA4hZo.mjs";
import { i as At, n as jt, r as Mt, t as Nt } from "./xMscHFbGZ.CRJhyUtz.mjs";
import Pt, { t as Ft } from "./S3nwtpgFlbgQicNtd0XPL8Fy7NkihjQ5TDj8mOGi52g.C5luoMVe.mjs";
function G(e) {
  let {
      children: t,
      mouseSensitivity: r,
      perspective: o,
      reverseTilt: s,
      stiffness: te,
      damping: ne,
      disableMouseOnTouch: l,
    } = e,
    u = a(null),
    [re, oe] = n(!1);
  i(() => {
    let e = d !== void 0 && (`ontouchstart` in d || ee.maxTouchPoints > 0);
    oe(e);
  }, []);
  let p = ae(0),
    m = ae(0);
  i(() => {
    if (l && re) return;
    function e(e) {
      let t = u.current;
      if (!t) return;
      let n = t.getBoundingClientRect(),
        r = n.left + n.width / 2,
        i = n.top + n.height / 2,
        a = (e.clientX - r) / (n.width / 2),
        o = (e.clientY - i) / (n.height / 2);
      (p.set(Math.max(-1, Math.min(1, a))), m.set(Math.max(-1, Math.min(1, o))));
    }
    return (d.addEventListener(`mousemove`, e), () => d.removeEventListener(`mousemove`, e));
  }, [re, l, p, m]);
  let g = { stiffness: te, damping: ne, mass: 0.6 },
    _ = s ? -1 : 1,
    v = ie(f(p, [-1, 1], [-r * _, r * _]), g),
    y = ie(f(m, [-1, 1], [r * _, -r * _]), g);
  return c(`div`, {
    ref: u,
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      perspective: `${o}px`,
    },
    children: c(h.div, {
      style: {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        rotateX: y,
        rotateY: v,
        transformStyle: `preserve-3d`,
      },
      children: t,
    }),
  });
}
var It = e(() => {
    (r(),
      ne(),
      u(),
      m(),
      g(),
      (G.displayName = `TiltContainer`),
      le(G, {
        children: { type: A.Array, control: { type: A.ComponentInstance }, title: `Content` },
        mouseSensitivity: {
          type: A.Number,
          title: `Sensitivity`,
          min: 0,
          max: 50,
          step: 1,
          defaultValue: 15,
        },
        perspective: {
          type: A.Number,
          title: `Perspective`,
          min: 200,
          max: 3e3,
          step: 50,
          defaultValue: 1e3,
        },
        reverseTilt: { type: A.Boolean, title: `Reverse Tilt`, defaultValue: !1 },
        stiffness: {
          type: A.Number,
          title: `Stiffness`,
          min: 10,
          max: 300,
          step: 5,
          defaultValue: 80,
        },
        damping: { type: A.Number, title: `Damping`, min: 5, max: 100, step: 1, defaultValue: 20 },
        disableMouseOnTouch: { type: A.Boolean, title: `Disable on Touch`, defaultValue: !0 },
      }));
  }),
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  K,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  q,
  Yt,
  Xt,
  Zt,
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
  J,
  pn,
  Y,
  X,
  Z,
  Q,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  $,
  Sn;
e(() => {
  (ne(),
    g(),
    m(),
    u(),
    Qe(),
    Ye(),
    $e(),
    Ze(),
    _t(),
    we(),
    et(),
    Je(),
    it(),
    Ce(),
    Ke(),
    gt(),
    st(),
    ft(),
    Fe(),
    St(),
    ot(),
    Te(),
    kt(),
    ht(),
    Re(),
    at(),
    mt(),
    lt(),
    pt(),
    It(),
    Ne(),
    Me(),
    Ae(),
    xt(),
    ke(),
    At(),
    Ct(),
    Ft(),
    (Lt = x(P)),
    (Rt = x(H)),
    (zt = x(G)),
    (Bt = _e(h.div, { nodeId: `MV51Tq5xD`, override: rt, scopeId: `RBHgPWYM6` })),
    (Vt = x(R)),
    (Ht = x(yt)),
    (Ut = x(B)),
    (K = _(h.div)),
    (Wt = x(dt)),
    (Gt = x(nt)),
    (Kt = x(z)),
    (qt = x(W)),
    (Jt = x(vt)),
    (q = _(O)),
    (Yt = x(Xe)),
    (Xt = x(tt)),
    (Zt = x(ut)),
    (Qt = x(V)),
    ($t = x(L)),
    (en = ue(_(h.div))),
    (tn = x(U)),
    (nn = x(Ve)),
    (rn = fe(Ve)),
    (an = x(Ue)),
    (on = fe(Ue)),
    (sn = {
      DdetQ92tH: `(max-width: 809.98px)`,
      ZRCGSeloK: `(min-width: 810px) and (max-width: 1199.98px)`,
      zuPdvW9ej: `(min-width: 1200px)`,
    }),
    (cn = () => typeof document < `u`),
    (ln = []),
    (un = `framer-l35Bd`),
    (dn = {
      DdetQ92tH: `framer-v-cjwnsp`,
      ZRCGSeloK: `framer-v-11li0ga`,
      zuPdvW9ej: `framer-v-1mz1wdt`,
    }),
    (fn = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (pn = (e, t) => `translateY(-50%) ${t}`),
    (Y = (e, t) => `translateX(-50%) ${t}`),
    (X = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
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
    (mn = { delay: 0.2, duration: 0.4, ease: [0.62, 0, 0.36, 1], type: `tween` }),
    (hn = { delay: 0.3, duration: 0.4, ease: [0.62, 0, 0.36, 1], type: `tween` }),
    (gn = { delay: 0.4, duration: 0.4, ease: [0.62, 0, 0.36, 1], type: `tween` }),
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
    (yn = { Desktop: `zuPdvW9ej`, Phone: `DdetQ92tH`, Tablet: `ZRCGSeloK` }),
    (bn = ({ value: e }) =>
      E()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (xn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: yn[r.variant] ?? r.variant ?? `zuPdvW9ej`,
    })),
    ($ = de(
      s(function (e, n) {
        let r = a(null),
          i = n ?? r,
          ee = re(),
          { activeLocale: s, setLocale: ne } = be(),
          u = me(),
          { style: d, className: f, layoutId: ie, variant: ae, ...m } = xn(e);
        xe(te(() => Pt({}, s), [s]));
        let [g, _] = he(ae, sn, !1),
          x = se(un, Nt, De, Ot, bt, Oe, Be, Ie),
          ce = t(ve)?.isLayoutTemplate,
          le = !!t(oe)?.transition?.layout,
          ue = fn(ce, le),
          de = j(`CTN_w1lGq`),
          fe = a(null);
        pe();
        let E = () => !cn() || g !== `DdetQ92tH`,
          _e = j(`V_J8mQT6f`),
          k = a(null),
          A = j(`bN_URotj6`),
          M = a(null),
          Ce = j(`v6qgtHSRG`),
          we = a(null),
          Te = a(null),
          ke = a(null),
          Ae = j(`JQYSrqQic`),
          je = j(`kQmuAIZiR`),
          Me = j(`M5jyd41KP`),
          Ne = a(null),
          Pe = j(`nLJBzFQg2`),
          Fe = a(null),
          Le = j(`CM3lLdwrc`),
          Re = a(null),
          ze = () => !cn() || g === `DdetQ92tH`;
        return (
          ye({}),
          c(ve.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: yn,
              primaryVariantId: `zuPdvW9ej`,
              variantClassNames: dn,
            },
            children: l(p, {
              id: ie ?? ee,
              children: [
                c(bn, {
                  value: `html body { background: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)); }`,
                }),
                l(h.div, {
                  ...m,
                  className: se(x, `framer-1mz1wdt`, f),
                  ref: i,
                  style: { ...d },
                  children: [
                    l(h.div, {
                      className: `framer-s6ehxc`,
                      "data-framer-name": `Main`,
                      layout: ue,
                      children: [
                        c(O, {
                          className: `framer-zbbipb-container`,
                          children: c(v, {
                            breakpoint: g,
                            overrides: {
                              DdetQ92tH: {
                                fallbackImage: `../../assets/images/PIht0ca47ANBraiGo3xZZxhgCoo.png`,
                              },
                              ZRCGSeloK: {
                                fallbackImage: `../../assets/images/PIht0ca47ANBraiGo3xZZxhgCoo.png`,
                              },
                            },
                            children: c(ge, {
                              __fromCanvasComponent: !0,
                              animated: F.animated,
                              buffers: F.buffers,
                              fallbackImage: `../../assets/images/PIht0ca47ANBraiGo3xZZxhgCoo.png`,
                              fragmentShader: F.fragment,
                              height: `100%`,
                              heightmapSource: F.heightmapSource,
                              mode: `progressive`,
                              mouse: F.mouse && { enabled: F.mouse === `enabledByDefault` },
                              resolutionScale: F.resolutionScale,
                              skipInitialFallback: !0,
                              uniforms: {
                                u_colors: {
                                  type: `array`,
                                  value: [
                                    `var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87))`,
                                    `var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94))`,
                                    `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                  ],
                                },
                                u_dispersionStrength: { type: `number`, value: 0.02 },
                                u_edgeDisp: { type: `number`, value: 5 },
                                u_ephemeralAmp: { type: `number`, value: 0 },
                                u_lensRadius: { type: `number`, value: 0.84 },
                                u_lensScale: { type: `number`, value: 3.7 },
                                u_lensSpacingX: { type: `number`, value: 0.69 },
                                u_lensSpacingY: { type: `number`, value: 0.01 },
                                u_seed: { type: `number`, value: 178 },
                                u_speed: { type: `number`, value: 0.27 },
                              },
                              vertexShader: F.vertex,
                              width: `100%`,
                            }),
                          }),
                        }),
                        c(`div`, {
                          className: `framer-19uxjoz`,
                          "data-framer-name": `Hero Section`,
                          children: l(`div`, {
                            className: `framer-1nw1yru`,
                            "data-framer-name": `Hero Split Layout`,
                            id: de,
                            ref: fe,
                            children: [
                              l(`div`, {
                                className: `framer-1ybgvit`,
                                "data-framer-name": `Hero Content`,
                                children: [
                                  l(`div`, {
                                    className: `framer-1o7utja`,
                                    "data-framer-name": `Hero Copy`,
                                    children: [
                                      c(v, {
                                        breakpoint: g,
                                        overrides: {
                                          DdetQ92tH: {
                                            children: c(o, {
                                              children: c(`h1`, {
                                                className: `framer-styles-preset-11zleb5`,
                                                "data-styles-preset": `xMscHFbGZ`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `Never miss a deadline again.`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`h1`, {
                                              className: `framer-styles-preset-11zleb5`,
                                              "data-styles-preset": `xMscHFbGZ`,
                                              dir: `auto`,
                                              children: `Never miss a deadline again.`,
                                            }),
                                          }),
                                          className: `framer-1d30u86`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      c(v, {
                                        breakpoint: g,
                                        overrides: {
                                          DdetQ92tH: {
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-sak9x6`,
                                                "data-styles-preset": `vVaZ0SXla`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `Speak your tasks into existence and let our intelligent engine build your perfect daily schedule instantly.`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              children: `Speak your tasks into existence and let our intelligent engine build your perfect daily schedule instantly.`,
                                            }),
                                          }),
                                          className: `framer-19hl06m`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  l(`div`, {
                                    className: `framer-143h0xv`,
                                    "data-framer-name": `Hero CTA Row`,
                                    children: [
                                      c(b, {
                                        links: [
                                          {
                                            href: { hash: `:wGI5vP82a`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:wGI5vP82a`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:wGI5vP82a`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          c(v, {
                                            breakpoint: g,
                                            overrides: {
                                              DdetQ92tH: {
                                                width: `330px`,
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  496 +
                                                  15 +
                                                  196.8 +
                                                  0 +
                                                  0,
                                              },
                                              ZRCGSeloK: { width: `183px` },
                                            },
                                            children: c(w, {
                                              height: 44,
                                              width: `252px`,
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                0 +
                                                10.5 +
                                                159.6 +
                                                0 +
                                                217.8 +
                                                0,
                                              children: c(O, {
                                                className: `framer-3jl5ff-container`,
                                                "data-framer-name": `Features Button`,
                                                name: `Features Button`,
                                                nodeId: `XmDD2OE01`,
                                                scopeId: `RBHgPWYM6`,
                                                children: c(v, {
                                                  breakpoint: g,
                                                  overrides: {
                                                    DdetQ92tH: { TWaZPhsrs: e[1] },
                                                    ZRCGSeloK: { TWaZPhsrs: e[2] },
                                                  },
                                                  children: c(P, {
                                                    bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                    dMzFGkb3u: !1,
                                                    dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                    F9tZ22mws: {
                                                      borderColor: `rgba(26, 26, 26, 0)`,
                                                      borderStyle: `solid`,
                                                      borderWidth: 2,
                                                    },
                                                    height: `100%`,
                                                    id: `XmDD2OE01`,
                                                    jfeAUucDj: N,
                                                    layoutId: `XmDD2OE01`,
                                                    lnJBzRgIM: `See Features`,
                                                    MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                    name: `Features Button`,
                                                    ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                    SLp3DWZqR: !0,
                                                    style: { width: `100%` },
                                                    TWaZPhsrs: e[0],
                                                    variant: J(`nhzWZDlVc`),
                                                    vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                    wDmZ1dhUo: I,
                                                    width: `100%`,
                                                    ZEAGlJD1F: {
                                                      borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                      borderStyle: `solid`,
                                                      borderWidth: 2,
                                                    },
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                      c(v, {
                                        breakpoint: g,
                                        overrides: {
                                          DdetQ92tH: {
                                            width: `330px`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              496 +
                                              15 +
                                              196.8 +
                                              0 +
                                              56,
                                          },
                                          ZRCGSeloK: { width: `183px` },
                                        },
                                        children: c(w, {
                                          height: 44,
                                          width: `252px`,
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            0 +
                                            60 +
                                            0 +
                                            10.5 +
                                            159.6 +
                                            0 +
                                            217.8 +
                                            0,
                                          children: c(O, {
                                            className: `framer-1vtodb8-container`,
                                            "data-framer-name": `Download App Button`,
                                            name: `Download App Button`,
                                            nodeId: `tlcN_MIiq`,
                                            scopeId: `RBHgPWYM6`,
                                            children: c(P, {
                                              bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                              dMzFGkb3u: !0,
                                              dP0U8qPjN: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                              F9tZ22mws: {
                                                borderColor: `rgba(26, 26, 26, 0)`,
                                                borderStyle: `solid`,
                                                borderWidth: 2,
                                              },
                                              height: `100%`,
                                              id: `tlcN_MIiq`,
                                              jfeAUucDj: Se,
                                              layoutId: `tlcN_MIiq`,
                                              lnJBzRgIM: `Download App`,
                                              MK840EHqT: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              name: `Download App Button`,
                                              ns0eNpEfF: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                              SLp3DWZqR: !1,
                                              style: { width: `100%` },
                                              TWaZPhsrs: `https://apps.apple.com/`,
                                              variant: J(`nhzWZDlVc`),
                                              vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                              wDmZ1dhUo: Ee,
                                              width: `100%`,
                                              ZEAGlJD1F: {
                                                borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                borderStyle: `solid`,
                                                borderWidth: 2,
                                              },
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(v, {
                                breakpoint: g,
                                overrides: { ZRCGSeloK: { style: { scale: 0.7 } } },
                                children: l(Bt, {
                                  className: `framer-hafah`,
                                  "data-framer-name": `Hero Visual Panel`,
                                  children: [
                                    c(w, {
                                      children: c(v, {
                                        breakpoint: g,
                                        overrides: {
                                          DdetQ92tH: {
                                            style: { scale: 0.7 },
                                            transformTemplate: void 0,
                                          },
                                          ZRCGSeloK: { transformTemplate: void 0 },
                                        },
                                        children: c(O, {
                                          className: `framer-1qer9d1-container`,
                                          "data-framer-name": `Hero Device Mockup`,
                                          isAuthoredByUser: !0,
                                          name: `Hero Device Mockup`,
                                          nodeId: `Qm_vL1MKH`,
                                          rendersWithMotion: !0,
                                          scopeId: `RBHgPWYM6`,
                                          style: { scale: 0.9 },
                                          transformTemplate: pn,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: {
                                              DdetQ92tH: {
                                                rotateX: 8,
                                                rotateY: -14,
                                                rotateZ: 14,
                                                style: { height: `100%`, width: `100%` },
                                              },
                                            },
                                            children: c(H, {
                                              cornerRadius: 30,
                                              disableMouseOnTouch: !0,
                                              dynamicShine: !0,
                                              frameColor: `Space Black`,
                                              glowBlur: 47,
                                              glowColor: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                              glowOpacity: 25,
                                              height: `100%`,
                                              id: `Qm_vL1MKH`,
                                              layoutId: `Qm_vL1MKH`,
                                              mouseSensitivity: 5,
                                              name: `Hero Device Mockup`,
                                              perspectiveDistance: 850,
                                              rotateX: 22,
                                              rotateY: -23,
                                              rotateZ: 21,
                                              screenBrightness: 100,
                                              screenImage: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png`,
                                              screenVideo: `../../assets/videos/phone_background_2_jiljit.mp4`,
                                              scrollLift: 0,
                                              scrollRotation: 0,
                                              shadowBlur: 21,
                                              shadowColor: `rgba(0, 0, 0, 0.35)`,
                                              shadowSpread: 0,
                                              shadowType: `Drop Shadow`,
                                              shadowX: 5,
                                              shadowY: 8,
                                              shineIntensity: 65,
                                              showGlow: !0,
                                              videoAutoplay: !0,
                                              videoLoop: !0,
                                              videoMuted: !0,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    E() &&
                                      c(w, {
                                        children: c(v, {
                                          breakpoint: g,
                                          overrides: { ZRCGSeloK: { transformTemplate: void 0 } },
                                          children: c(O, {
                                            className: `framer-34cog8-container hidden-cjwnsp`,
                                            "data-framer-name": `Hero Visual Tilt`,
                                            isAuthoredByUser: !0,
                                            name: `Hero Visual Tilt`,
                                            nodeId: `K_hXyidy1`,
                                            rendersWithMotion: !0,
                                            scopeId: `RBHgPWYM6`,
                                            transformTemplate: pn,
                                            children: c(G, {
                                              damping: 20,
                                              disableMouseOnTouch: !0,
                                              height: `100%`,
                                              id: `K_hXyidy1`,
                                              layoutId: `K_hXyidy1`,
                                              mouseSensitivity: 3,
                                              name: `Hero Visual Tilt`,
                                              perspective: 2e3,
                                              reverseTilt: !1,
                                              stiffness: 80,
                                              width: `100%`,
                                              children: l(h.div, {
                                                className: `framer-1t7z1df`,
                                                "data-framer-name": `Floating Metrics Card`,
                                                children: [
                                                  l(h.div, {
                                                    className: `framer-1xhdtnu`,
                                                    "data-framer-name": `Floating Metrics Card Shell`,
                                                    style: { rotate: -17 },
                                                    children: [
                                                      c(h.div, {
                                                        className: `framer-tmhbkf`,
                                                        "data-framer-name": `Card Bottom Glow`,
                                                        style: { rotate: 180 },
                                                      }),
                                                      l(h.div, {
                                                        className: `framer-8g9lsx`,
                                                        "data-framer-name": `Card Header Row`,
                                                        style: { rotate: 180 },
                                                        children: [
                                                          c(y, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(o, {
                                                              children: c(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `RlM7UGx1cyBKYWthcnRhIFNhbnMtc2VtaWJvbGQ=`,
                                                                  "--framer-font-family": `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                                  "--framer-font-size": `14px`,
                                                                  "--framer-font-weight": `600`,
                                                                  "--framer-letter-spacing": `-0.02em`,
                                                                  "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                                },
                                                                children: `Day Optimized`,
                                                              }),
                                                            }),
                                                            className: `framer-1b38kt2`,
                                                            fonts: [
                                                              `FS;Plus Jakarta Sans-semibold`,
                                                            ],
                                                            style: { rotate: -180 },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          c(T, {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              intrinsicHeight: 146.66666666666666,
                                                              intrinsicWidth: 146.66666666666666,
                                                              pixelHeight: 220,
                                                              pixelWidth: 220,
                                                              sizes: `21px`,
                                                              src: `../../assets/images/yewDL8XRhzHJknRBEF3b9kh7SI.png`,
                                                            },
                                                            className: `framer-u0hey8`,
                                                            "data-framer-name": `Card Icon`,
                                                            style: { rotate: -180 },
                                                          }),
                                                        ],
                                                      }),
                                                      l(h.div, {
                                                        className: `framer-r1yd2t`,
                                                        "data-framer-name": `Card Metrics Row`,
                                                        children: [
                                                          c(y, {
                                                            __fromCanvasComponent: !0,
                                                            children: l(o, {
                                                              children: [
                                                                l(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--font-selector": `RlM7UGx1cyBKYWthcnRhIFNhbnMtc2VtaWJvbGQ=`,
                                                                    "--framer-font-family": `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                                    "--framer-font-size": `14px`,
                                                                    "--framer-font-weight": `600`,
                                                                    "--framer-letter-spacing": `-0.02em`,
                                                                    "--framer-line-height": `1.1em`,
                                                                    "--framer-text-alignment": `center`,
                                                                    "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                                  },
                                                                  children: [
                                                                    c(`span`, {
                                                                      style: {
                                                                        "--framer-font-size": `29px`,
                                                                      },
                                                                      children: `6`,
                                                                    }),
                                                                    ` `,
                                                                  ],
                                                                }),
                                                                c(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--font-selector": `RlM7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==`,
                                                                    "--framer-font-family": `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                                    "--framer-font-size": `12px`,
                                                                    "--framer-letter-spacing": `-0.02em`,
                                                                    "--framer-line-height": `1.1em`,
                                                                    "--framer-text-alignment": `center`,
                                                                    "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                                  },
                                                                  children: `Tasks`,
                                                                }),
                                                              ],
                                                            }),
                                                            className: `framer-1pgw2rw`,
                                                            fonts: [
                                                              `FS;Plus Jakarta Sans-semibold`,
                                                              `FS;Plus Jakarta Sans-regular`,
                                                            ],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          l(h.div, {
                                                            className: `framer-3av0b8`,
                                                            "data-framer-name": `Tasks Column`,
                                                            children: [
                                                              c(h.div, {
                                                                className: `framer-56xhjb`,
                                                                "data-framer-name": `Tasks Progress Track`,
                                                                children: c(h.div, {
                                                                  className: `framer-55j0kn`,
                                                                  "data-framer-name": `Progress Fill`,
                                                                }),
                                                              }),
                                                              c(y, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(o, {
                                                                  children: c(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `RlM7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==`,
                                                                      "--framer-font-family": `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                                      "--framer-font-size": `9px`,
                                                                      "--framer-letter-spacing": `-0.02em`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                                    },
                                                                    children: `2 remaining`,
                                                                  }),
                                                                }),
                                                                className: `framer-7xh3s`,
                                                                fonts: [
                                                                  `FS;Plus Jakarta Sans-regular`,
                                                                ],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  l(h.div, {
                                                    className: `framer-73xhf7`,
                                                    "data-framer-name": `Saved Time Badge`,
                                                    style: { rotate: 32 },
                                                    children: [
                                                      c(h.div, {
                                                        className: `framer-1lj72my`,
                                                        "data-framer-name": `Badge Icon Cluster`,
                                                      }),
                                                      l(h.div, {
                                                        className: `framer-utr9yb`,
                                                        "data-framer-name": `Hours Saved Column`,
                                                        children: [
                                                          c(h.div, {
                                                            className: `framer-1w0vh5h`,
                                                            "data-framer-name": `Hours Saved Icon`,
                                                            children: l(C, {
                                                              className: `framer-wh5afw`,
                                                              requiresOverflowVisible: !1,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 65 64.999" overflow="visible"><g><defs><radialGradient id="idse7Z_uh8Nn_1g-1977167257" cy="0.136" cx="0.077" r="1.5" gradientTransform="translate(0.077, 0.136) scale(1 0.6666666666666666) translate(-0.077, -0.136)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 65 32.499 C 65 50.449 50.449 64.999 32.5 64.999 C 14.606 64.999 0.09 50.539 0 32.666 L 0.004 32.666 C 0.001 32.611 0 32.556 0 32.5 C 0 31.119 0.895 30 2 30 C 3.105 30 4 31.119 4 32.5 C 4 32.556 3.999 32.611 3.996 32.666 L 4 32.666 C 4.057 48.391 16.822 61.12 32.56 61.12 C 48.334 61.12 61.121 48.333 61.121 32.56 C 61.121 16.827 48.4 4.065 32.682 3.999 L 32.682 3.995 C 32.622 3.998 32.561 4 32.5 4 C 31.119 4 30 3.105 30 2 C 30 0.895 31.119 0 32.5 0 C 32.561 0 32.622 0.002 32.682 0.005 L 32.682 0 C 50.548 0.098 65 14.611 65 32.499 Z" fill="url(#idse7Z_uh8Nn_1g-1977167257)"></path></g></svg>`,
                                                              withExternalLayout: !0,
                                                              children: [
                                                                l(C, {
                                                                  className: `framer-10vypm8`,
                                                                  requiresOverflowVisible: !1,
                                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 65 64.999" overflow="visible"><g><defs><radialGradient id="idskPqO9P0WE_1g-1977167257" cy="0.136" cx="0.077" r="0.84" gradientTransform="translate(0.077, 0.136) scale(1 0.5952380952380952) translate(-0.077, -0.136)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 65 32.499 C 65 50.449 50.449 64.999 32.5 64.999 C 14.606 64.999 0.09 50.539 0 32.666 L 0.004 32.666 C 0.001 32.611 0 32.556 0 32.5 C 0 31.119 0.895 30 2 30 C 3.105 30 4 31.119 4 32.5 C 4 32.556 3.999 32.611 3.996 32.666 L 4 32.666 C 4.057 48.391 16.822 61.12 32.56 61.12 C 48.334 61.12 61.121 48.333 61.121 32.56 C 61.121 16.827 48.4 4.065 32.682 3.999 L 32.682 0 C 50.548 0.098 65 14.611 65 32.499 Z" fill="url(#idskPqO9P0WE_1g-1977167257)"></path></g></svg>`,
                                                                  withExternalLayout: !0,
                                                                  children: [
                                                                    l(C, {
                                                                      className: `framer-1c02q8g`,
                                                                      requiresOverflowVisible: !1,
                                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 65 64.999" overflow="visible"><g><defs><radialGradient id="idsXjzc1y7NX_1g-1977167257" cy="0.136" cx="0.077" r="0.84" gradientTransform="translate(0.077, 0.136) scale(1 0.5952380952380952) translate(-0.077, -0.136)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 65 32.499 C 65 50.449 50.449 64.999 32.5 64.999 C 14.606 64.999 0.09 50.539 0 32.666 L 4 32.666 C 4.057 48.391 16.822 61.12 32.56 61.12 C 48.334 61.12 61.121 48.333 61.121 32.56 C 61.121 16.827 48.4 4.065 32.682 3.999 L 32.682 0 C 50.548 0.098 65 14.611 65 32.499 Z" fill="url(#idsXjzc1y7NX_1g-1977167257)"></path></g></svg>`,
                                                                      withExternalLayout: !0,
                                                                      children: [
                                                                        l(C, {
                                                                          className: `framer-blqn5w`,
                                                                          requiresOverflowVisible:
                                                                            !1,
                                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 65 65" overflow="visible"><g><defs><radialGradient id="idsXCRUBqINV_1g-1977167257" cy="0.136" cx="0.077" r="0.84" gradientTransform="translate(0.077, 0.136) scale(1 0.5952380952380952) translate(-0.077, -0.136)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 32.5 0 C 50.45 0 65 14.551 65 32.5 C 65 50.449 50.45 65 32.5 65 C 14.551 65 0 50.449 0 32.5 C 0 14.551 14.551 0 32.5 0 Z M 4 32.56 C 4 48.334 16.787 61.121 32.561 61.121 C 48.334 61.121 61.122 48.334 61.122 32.56 C 61.122 16.787 48.334 3.999 32.561 3.999 C 16.787 3.999 4 16.787 4 32.56 Z" fill="url(#idsXCRUBqINV_1g-1977167257)"></path></g></svg>`,
                                                                          withExternalLayout: !0,
                                                                          children: [
                                                                            c(C, {
                                                                              className: `framer-5xrv5`,
                                                                              requiresOverflowVisible:
                                                                                !1,
                                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 65 65" overflow="visible"><g><defs><radialGradient id="idsFtzC9K3fN_1g-1977167257" cy="0.8934431172064005" cx="0.9532306636450757" r="1.4332757921437194" gradientTransform="translate(0.9532306636450757, 0.8934431172064005) scale(1 1) translate(-0.9532306636450757, -0.8934431172064005)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 32.5 0 C 50.45 0 65 14.551 65 32.5 C 65 50.449 50.45 65 32.5 65 C 14.551 65 0 50.449 0 32.5 C 0 14.551 14.551 0 32.5 0 Z" fill="url(#idsFtzC9K3fN_1g-1977167257)"></path></g></svg>`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            c(C, {
                                                                              className: `framer-1iqr2py`,
                                                                              requiresOverflowVisible:
                                                                                !1,
                                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 57.122 57.121" overflow="visible"><g><defs><radialGradient id="idshKVCxjeiC_1g-1977167257" cy="0.8934431172064005" cx="0.9532306636450757" r="1.4332757921437194" gradientTransform="translate(0.9532306636450757, 0.8934431172064005) scale(1 1) translate(-0.9532306636450757, -0.8934431172064005)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 28.561 0 C 44.334 0 57.122 12.787 57.122 28.561 C 57.122 44.334 44.334 57.121 28.561 57.121 C 12.787 57.121 0 44.334 0 28.561 C 0 12.787 12.787 0 28.561 0 Z" fill="url(#idshKVCxjeiC_1g-1977167257)"></path></g></svg>`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(C, {
                                                                          className: `framer-1idkui3`,
                                                                          radius: 0,
                                                                          requiresOverflowVisible:
                                                                            !1,
                                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.182 54.167" overflow="visible"><g><defs><radialGradient id="idsGIkGTygbv_1g-1977167257" cy="0.136" cx="0.077" r="0.84" gradientTransform="translate(0.077, 0.136) scale(1 0.5952380952380952) translate(-0.077, -0.136)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 0 0 L 53.182 0 L 53.182 54.167 L 0 54.167 Z" fill="url(#idsGIkGTygbv_1g-1977167257)"></path></g></svg>`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    c(C, {
                                                                      className: `framer-xoid1z`,
                                                                      requiresOverflowVisible: !1,
                                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 5" overflow="visible"><g><defs><radialGradient id="idsn_Lq0SWVz_1g-1977167257" cy="0.136" cx="0.077" r="0.84" gradientTransform="translate(0.077, 0.136) scale(1 0.5952380952380952) translate(-0.077, -0.136)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 2 0 C 3.105 0 4 1.119 4 2.5 C 4 3.881 3.105 5 2 5 C 0.895 5 0 3.881 0 2.5 C 0 1.119 0.895 0 2 0 Z" fill="url(#idsn_Lq0SWVz_1g-1977167257)"></path></g></svg>`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                  ],
                                                                }),
                                                                c(C, {
                                                                  className: `framer-rxse16`,
                                                                  requiresOverflowVisible: !1,
                                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 4" overflow="visible"><g><defs><radialGradient id="idsOWZZtuHUF_1g-1977167257" cy="0.136" cx="0.077" r="0.84" gradientTransform="translate(0.077, 0.136) scale(1 0.5952380952380952) translate(-0.077, -0.136)"><stop offset="0.01436785993904903" stop-color="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 2.5 0 C 3.881 0 5 0.895 5 2 C 5 3.105 3.881 4 2.5 4 C 1.119 4 0 3.105 0 2 C 0 0.895 1.119 0 2.5 0 Z" fill="url(#idsOWZZtuHUF_1g-1977167257)"></path></g></svg>`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                          l(C, {
                                                            className: `framer-14x7g3s`,
                                                            requiresOverflowVisible: !1,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 66" overflow="visible"><g><defs><radialGradient id="idsXSsXhSL9O_1g-586928179" cy="0.136" cx="0.077" r="0.84" gradientTransform="translate(0.077, 0.136) scale(1 0.5952380952380952) translate(-0.077, -0.136)"><stop offset="0" stop-color="var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)) /* {&quot;name&quot;:&quot;50&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, rgb(185, 209, 158)) /* {&quot;name&quot;:&quot;300&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 33 0 C 51.225 0 66 14.775 66 33 C 66 51.225 51.225 66 33 66 C 14.775 66 0 51.225 0 33 C 0 14.775 14.775 0 33 0 Z M 4 33 C 4 49.016 16.984 62 33 62 C 49.016 62 62 49.016 62 33 C 62 16.984 49.016 4 33 4 C 16.984 4 4 16.984 4 33 Z" fill="url(#idsXSsXhSL9O_1g-586928179)"></path></g></svg>`,
                                                            withExternalLayout: !0,
                                                            children: [
                                                              c(C, {
                                                                className: `framer-rcbkoz`,
                                                                requiresOverflowVisible: !1,
                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 66" overflow="visible"><g><defs><radialGradient id="idsJYgvzPHKp_1g-265260622" cy="0.8934431172064005" cx="0.9532306636450757" r="1.4332757921437194" gradientTransform="translate(0.9532306636450757, 0.8934431172064005) scale(1 1) translate(-0.9532306636450757, -0.8934431172064005)"><stop offset="0" stop-color="var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, rgb(106, 198, 143)) /* {&quot;name&quot;:&quot;400&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(203, 234, 215)) /* {&quot;name&quot;:&quot;200&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 33 0 C 51.225 0 66 14.775 66 33 C 66 51.225 51.225 66 33 66 C 14.775 66 0 51.225 0 33 C 0 14.775 14.775 0 33 0 Z" fill="url(#idsJYgvzPHKp_1g-265260622)"></path></g></svg>`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              c(C, {
                                                                className: `framer-9t8ux5`,
                                                                requiresOverflowVisible: !1,
                                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 58" overflow="visible"><g><defs><radialGradient id="idswqBw9yn42_1g-265260622" cy="0.8934431172064005" cx="0.9532306636450757" r="1.4332757921437194" gradientTransform="translate(0.9532306636450757, 0.8934431172064005) scale(1 1) translate(-0.9532306636450757, -0.8934431172064005)"><stop offset="0" stop-color="var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, rgb(106, 198, 143)) /* {&quot;name&quot;:&quot;400&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(203, 234, 215)) /* {&quot;name&quot;:&quot;200&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 29 0 C 45.016 0 58 12.984 58 29 C 58 45.016 45.016 58 29 58 C 12.984 58 0 45.016 0 29 C 0 12.984 12.984 0 29 0 Z" fill="url(#idswqBw9yn42_1g-265260622)"></path></g></svg>`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                          c(y, {
                                                            __fromCanvasComponent: !0,
                                                            children: l(o, {
                                                              children: [
                                                                c(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--font-selector": `RlM7UGx1cyBKYWthcnRhIFNhbnMtc2VtaWJvbGQ=`,
                                                                    "--framer-font-family": `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                                    "--framer-font-size": `14px`,
                                                                    "--framer-font-weight": `600`,
                                                                    "--framer-letter-spacing": `-0.02em`,
                                                                    "--framer-line-height": `1em`,
                                                                    "--framer-text-alignment": `center`,
                                                                    "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                                  },
                                                                  children: l(`span`, {
                                                                    "data-text-fill": `true`,
                                                                    style: {
                                                                      backgroundImage: `linear-gradient(320deg, var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)) 0%, var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) 100%)`,
                                                                    },
                                                                    children: [
                                                                      c(`span`, {
                                                                        style: {
                                                                          "--framer-font-size": `31px`,
                                                                        },
                                                                        children: `4`,
                                                                      }),
                                                                      ` `,
                                                                    ],
                                                                  }),
                                                                }),
                                                                c(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--font-selector": `RlM7UGx1cyBKYWthcnRhIFNhbnMtc2VtaWJvbGQ=`,
                                                                    "--framer-font-family": `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                                    "--framer-font-size": `11px`,
                                                                    "--framer-font-weight": `600`,
                                                                    "--framer-letter-spacing": `-0.02em`,
                                                                    "--framer-line-height": `1em`,
                                                                    "--framer-text-alignment": `center`,
                                                                    "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                                  },
                                                                  children: c(`span`, {
                                                                    "data-text-fill": `true`,
                                                                    style: {
                                                                      backgroundImage: `linear-gradient(320deg, var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)) 0%, var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) 100%)`,
                                                                    },
                                                                    children: `hours`,
                                                                  }),
                                                                }),
                                                              ],
                                                            }),
                                                            className: `framer-yxmbd1`,
                                                            fonts: [
                                                              `FS;Plus Jakarta Sans-semibold`,
                                                            ],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          c(y, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(o, {
                                                              children: c(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--font-selector": `RlM7UGx1cyBKYWthcnRhIFNhbnMtc2VtaWJvbGQ=`,
                                                                  "--framer-font-family": `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                                  "--framer-font-size": `11px`,
                                                                  "--framer-font-weight": `600`,
                                                                  "--framer-letter-spacing": `-0.02em`,
                                                                  "--framer-line-height": `1em`,
                                                                  "--framer-text-alignment": `center`,
                                                                  "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                                },
                                                                children: c(`span`, {
                                                                  "data-text-fill": `true`,
                                                                  style: {
                                                                    backgroundImage: `linear-gradient(320deg, var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)) 0%, var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) 100%)`,
                                                                  },
                                                                  children: `saved this week`,
                                                                }),
                                                              }),
                                                            }),
                                                            className: `framer-18j3pi8`,
                                                            fonts: [
                                                              `FS;Plus Jakarta Sans-semibold`,
                                                            ],
                                                            transformTemplate: Y,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        c(`div`, {
                          className: `framer-181oz1r`,
                          "data-framer-name": `Top Trigger`,
                          id: _e,
                          ref: k,
                        }),
                        c(`div`, {
                          className: `framer-1lowgd4`,
                          "data-framer-name": `Second Trigger`,
                          id: A,
                          ref: M,
                        }),
                        l(`div`, {
                          className: `framer-1d8u8o`,
                          "data-framer-name": `Testimonials Section`,
                          children: [
                            l(`div`, {
                              className: `framer-1ai4ho8`,
                              "data-framer-name": `Social Proof Section`,
                              children: [
                                c(y, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`h3`, {
                                      className: `framer-styles-preset-1pj8wqs`,
                                      "data-styles-preset": `Z7CzuxNJN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                      },
                                      children: `Loved by the employees at`,
                                    }),
                                  }),
                                  className: `framer-qqc9e0`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(`div`, {
                                  className: `framer-ibozq`,
                                  "data-framer-name": `Testimonials Row`,
                                  children: [
                                    c(v, {
                                      breakpoint: g,
                                      overrides: {
                                        DdetQ92tH: {
                                          y:
                                            (u?.y || 0) + 0 + 0 + 60 + 943 + 0 + 0 + 0 + 76 + 0 + 0,
                                        },
                                      },
                                      children: c(w, {
                                        height: 68,
                                        y: (u?.y || 0) + 0 + 0 + 60 + 763 + 0 + 0 + 0 + 51 + 0,
                                        children: c(O, {
                                          className: `framer-1ydv62g-container`,
                                          "data-framer-name": `Testimonial Card Three`,
                                          name: `Testimonial Card Three`,
                                          nodeId: `MWEqDy3Y4`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(R, {
                                            height: `100%`,
                                            id: `MWEqDy3Y4`,
                                            layoutId: `MWEqDy3Y4`,
                                            name: `Testimonial Card Three`,
                                            oNi8MxjOe: {
                                              bounce: 0.2,
                                              delay: 0,
                                              duration: 0.4,
                                              type: `spring`,
                                            },
                                            variant: J(`gQCLk3gFF`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(v, {
                                      breakpoint: g,
                                      overrides: {
                                        DdetQ92tH: {
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            0 +
                                            60 +
                                            943 +
                                            0 +
                                            0 +
                                            0 +
                                            76 +
                                            0 +
                                            108,
                                        },
                                      },
                                      children: c(w, {
                                        height: 68,
                                        y: (u?.y || 0) + 0 + 0 + 60 + 763 + 0 + 0 + 0 + 51 + 0,
                                        children: c(O, {
                                          className: `framer-1mojhhm-container`,
                                          "data-framer-name": `Testimonial Card Two`,
                                          name: `Testimonial Card Two`,
                                          nodeId: `qSj8cp8LI`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(R, {
                                            height: `100%`,
                                            hL0Snwv45: X(
                                              {
                                                pixelHeight: 66,
                                                pixelWidth: 400,
                                                src: `../../assets/images/kcz6eXHl6xM3ZZmnak5eU9Tf9lk.png`,
                                              },
                                              ``
                                            ),
                                            id: `qSj8cp8LI`,
                                            layoutId: `qSj8cp8LI`,
                                            name: `Testimonial Card Two`,
                                            oNi8MxjOe: {
                                              bounce: 0.2,
                                              delay: 0.2,
                                              duration: 0.4,
                                              type: `spring`,
                                            },
                                            variant: J(`gQCLk3gFF`),
                                            width: `100%`,
                                            wU8QRB33c: X(
                                              {
                                                pixelHeight: 68,
                                                pixelWidth: 400,
                                                src: `../../assets/images/85CBHDqQOdDsXTQ3scnd7fRBRJs.png`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(v, {
                                      breakpoint: g,
                                      overrides: {
                                        DdetQ92tH: {
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            0 +
                                            60 +
                                            943 +
                                            0 +
                                            0 +
                                            0 +
                                            76 +
                                            0 +
                                            216,
                                        },
                                      },
                                      children: c(w, {
                                        height: 68,
                                        y: (u?.y || 0) + 0 + 0 + 60 + 763 + 0 + 0 + 0 + 51 + 0,
                                        children: c(O, {
                                          className: `framer-12wdnyk-container`,
                                          "data-framer-name": `Testimonial Card One`,
                                          name: `Testimonial Card One`,
                                          nodeId: `iaiJtex0H`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(R, {
                                            height: `100%`,
                                            hL0Snwv45: X(
                                              {
                                                pixelHeight: 53,
                                                pixelWidth: 400,
                                                src: `../../assets/images/W9IQvxxQNYix4ihtgCvCKZEoA.png`,
                                              },
                                              ``
                                            ),
                                            id: `iaiJtex0H`,
                                            layoutId: `iaiJtex0H`,
                                            name: `Testimonial Card One`,
                                            oNi8MxjOe: {
                                              bounce: 0.2,
                                              delay: 0.4,
                                              duration: 0.4,
                                              type: `spring`,
                                            },
                                            variant: J(`gQCLk3gFF`),
                                            width: `100%`,
                                            wU8QRB33c: X(
                                              {
                                                pixelHeight: 71,
                                                pixelWidth: 400,
                                                src: `../../assets/images/fTY77qAOCUq8g9NjSwL4AGRk.png`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-1rl23vj`,
                              "data-framer-name": `Metrics Grid`,
                              children: [
                                l(K, {
                                  __framer__animate: { transition: Q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-2rqdmo`,
                                  "data-border": !0,
                                  "data-framer-name": `Metric Card`,
                                  children: [
                                    c(yt, {
                                      animated: !1,
                                      className: `framer-vuxacy`,
                                      JEeZYcamG: !0,
                                      layoutId: `aOLwH8MyW`,
                                      P_DcoRcrY: !0,
                                    }),
                                    c(`div`, {
                                      className: `framer-1dmilzr`,
                                      "data-framer-name": `Metric Value`,
                                      children: c(w, {
                                        children: c(O, {
                                          className: `framer-agwarx-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `KOO0kQ_VX`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: {
                                              DdetQ92tH: {
                                                font: {
                                                  fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                  fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.44)`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                              ZRCGSeloK: {
                                                font: {
                                                  fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                  fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.44)`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                            },
                                            children: c(B, {
                                              color: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                              decimals: 1,
                                              duration: 2,
                                              easing: `easeOut`,
                                              endValue: 3.5,
                                              font: {
                                                fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                fontSize: `calc(var(--framer-root-font-size, 1rem) * 3.05)`,
                                                fontStyle: `normal`,
                                                fontWeight: 600,
                                                letterSpacing: `-0.04em`,
                                                lineHeight: `1em`,
                                              },
                                              height: `100%`,
                                              id: `KOO0kQ_VX`,
                                              layoutId: `KOO0kQ_VX`,
                                              prefix: ``,
                                              startValue: 0,
                                              suffix: `+ hrs`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-sak9x6`,
                                          "data-styles-preset": `vVaZ0SXla`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `Weekly time saved per active user.`,
                                        }),
                                      }),
                                      className: `framer-1v17iab`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(`div`, {
                                      className: `framer-1cxv3sl`,
                                      "data-framer-name": `Metric Detail`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-133ffo6`,
                                          "data-framer-name": `Icon`,
                                          children: c(C, {
                                            className: `framer-1fbvuf1`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-gltzz0`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: c(C, {
                                            className: `framer-1nbvlgl`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-1lue6bw`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: c(C, {
                                            className: `framer-f30tez`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-1vobvex`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: c(C, {
                                            className: `framer-1l0h14k`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(K, {
                                  __framer__animate: { transition: mn },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1dng6tl`,
                                  "data-border": !0,
                                  "data-framer-name": `Metric Card`,
                                  children: [
                                    c(dt, {
                                      animated: !1,
                                      className: `framer-1i8r40`,
                                      JEeZYcamG: !0,
                                      layoutId: `xjvGxBO5g`,
                                      P_DcoRcrY: !0,
                                    }),
                                    c(`div`, {
                                      className: `framer-qzjhji`,
                                      "data-framer-name": `Metric Value`,
                                      children: c(w, {
                                        children: c(O, {
                                          className: `framer-cqihn1-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `RMEASwSbh`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: {
                                              DdetQ92tH: {
                                                font: {
                                                  fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                  fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.44)`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                              ZRCGSeloK: {
                                                font: {
                                                  fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                  fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.44)`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                            },
                                            children: c(B, {
                                              color: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                              decimals: 0,
                                              duration: 2,
                                              easing: `easeInOut`,
                                              endValue: 10,
                                              font: {
                                                fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                fontSize: `calc(var(--framer-root-font-size, 1rem) * 3.05)`,
                                                fontStyle: `normal`,
                                                fontWeight: 600,
                                                letterSpacing: `-0.04em`,
                                                lineHeight: `1em`,
                                              },
                                              height: `100%`,
                                              id: `RMEASwSbh`,
                                              layoutId: `RMEASwSbh`,
                                              prefix: ``,
                                              startValue: 0,
                                              suffix: `M+`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-sak9x6`,
                                          "data-styles-preset": `vVaZ0SXla`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `Daily tasks processed by our AI.`,
                                        }),
                                      }),
                                      className: `framer-17zefm3`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(`div`, {
                                      className: `framer-1k62bul`,
                                      "data-framer-name": `Metric Detail`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-1osaxtj`,
                                          "data-framer-name": `Icon`,
                                          children: c(C, {
                                            className: `framer-onk5nu`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-qh9yas`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: c(C, {
                                            className: `framer-zi1rqs`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-w7tc3n`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: c(C, {
                                            className: `framer-kxobci`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-4f0vou`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: c(C, {
                                            className: `framer-1k4uy25`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(K, {
                                  __framer__animate: { transition: hn },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-f3lkxs`,
                                  "data-border": !0,
                                  "data-framer-name": `Metric Card`,
                                  children: [
                                    c(nt, {
                                      animated: !1,
                                      className: `framer-17t31mj`,
                                      JEeZYcamG: !0,
                                      layoutId: `m4KRwEtqJ`,
                                      P_DcoRcrY: !0,
                                    }),
                                    c(`div`, {
                                      className: `framer-15qbfc2`,
                                      "data-framer-name": `Metric Value`,
                                      children: c(w, {
                                        children: c(O, {
                                          className: `framer-1h7mk0w-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `Oe9_jVJo7`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: {
                                              DdetQ92tH: {
                                                font: {
                                                  fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                  fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.44)`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                              ZRCGSeloK: {
                                                font: {
                                                  fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                  fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.44)`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                            },
                                            children: c(B, {
                                              color: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                              decimals: 0,
                                              duration: 2,
                                              easing: `easeOut`,
                                              endValue: 250,
                                              font: {
                                                fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                fontSize: `calc(var(--framer-root-font-size, 1rem) * 3.05)`,
                                                fontStyle: `normal`,
                                                fontWeight: 600,
                                                letterSpacing: `-0.04em`,
                                                lineHeight: `1em`,
                                              },
                                              height: `100%`,
                                              id: `Oe9_jVJo7`,
                                              layoutId: `Oe9_jVJo7`,
                                              prefix: ``,
                                              startValue: 0,
                                              suffix: `K+`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-sak9x6`,
                                          "data-styles-preset": `vVaZ0SXla`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `High-performers optimizing their daily routines.`,
                                        }),
                                      }),
                                      className: `framer-ncg7ad`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(`div`, {
                                      className: `framer-1fkwvkc`,
                                      "data-framer-name": `Metric Detail`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-1jgsm64`,
                                          "data-framer-name": `Icon`,
                                          children: c(C, {
                                            className: `framer-182jmxc`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-1k0nef5`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: c(C, {
                                            className: `framer-v9u6pk`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-h9kz5n`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: c(C, {
                                            className: `framer-1casb6o`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-112vrvg`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: c(C, {
                                            className: `framer-1st0y4z`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(K, {
                                  __framer__animate: { transition: gn },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1ehl40p`,
                                  "data-border": !0,
                                  "data-framer-name": `Metric Card`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-1gy826k`,
                                      "data-framer-name": `Rating Stars`,
                                      children: [
                                        c(z, {
                                          animated: !1,
                                          className: `framer-1mxo5dj`,
                                          JEeZYcamG: !0,
                                          layoutId: `f4zETFU9O`,
                                          P_DcoRcrY: !0,
                                        }),
                                        c(z, {
                                          animated: !1,
                                          className: `framer-10cm613`,
                                          JEeZYcamG: !0,
                                          layoutId: `WxptOf1Sn`,
                                          P_DcoRcrY: !0,
                                        }),
                                        c(z, {
                                          animated: !1,
                                          className: `framer-1yakfrv`,
                                          JEeZYcamG: !0,
                                          layoutId: `vqTCBU3D6`,
                                          P_DcoRcrY: !0,
                                        }),
                                        c(z, {
                                          animated: !1,
                                          className: `framer-rwqxqq`,
                                          JEeZYcamG: !0,
                                          layoutId: `SSPYRHpVo`,
                                          P_DcoRcrY: !0,
                                        }),
                                        c(z, {
                                          animated: !1,
                                          className: `framer-j25bw8`,
                                          JEeZYcamG: !0,
                                          layoutId: `HP7F7gPxK`,
                                          P_DcoRcrY: !0,
                                        }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-wahe9u`,
                                      "data-framer-name": `Metric Value`,
                                      children: c(w, {
                                        children: c(O, {
                                          className: `framer-i9v5de-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `p3ZfYRINv`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: {
                                              DdetQ92tH: {
                                                font: {
                                                  fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                  fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.44)`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                              ZRCGSeloK: {
                                                font: {
                                                  fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                  fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.44)`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 600,
                                                  letterSpacing: `-0.04em`,
                                                  lineHeight: `1em`,
                                                },
                                              },
                                            },
                                            children: c(B, {
                                              color: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                              decimals: 1,
                                              duration: 2,
                                              easing: `easeOut`,
                                              endValue: 4.9,
                                              font: {
                                                fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                                fontSize: `calc(var(--framer-root-font-size, 1rem) * 3.05)`,
                                                fontStyle: `normal`,
                                                fontWeight: 600,
                                                letterSpacing: `-0.04em`,
                                                lineHeight: `1em`,
                                              },
                                              height: `100%`,
                                              id: `p3ZfYRINv`,
                                              layoutId: `p3ZfYRINv`,
                                              prefix: ``,
                                              startValue: 0,
                                              suffix: `+`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-sak9x6`,
                                          "data-styles-preset": `vVaZ0SXla`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `App Store rating across thousands reviews.`,
                                        }),
                                      }),
                                      className: `framer-2lc56y`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(`div`, {
                                      className: `framer-jy6jwo`,
                                      "data-framer-name": `Metric Detail`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-h9uw5r`,
                                          "data-framer-name": `Icon`,
                                          children: c(C, {
                                            className: `framer-11qtuhq`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-n8pz39`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: c(C, {
                                            className: `framer-u8hkdg`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-qkpqcj`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: c(C, {
                                            className: `framer-v8hsd1`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-l5v0h6`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: c(C, {
                                            className: `framer-15e86sv`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
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
                        l(`div`, {
                          className: `framer-1ypsjoz`,
                          "data-framer-name": `Mission Section`,
                          children: [
                            l(`div`, {
                              className: `framer-1ee3fpw`,
                              "data-framer-name": `Mission Content`,
                              children: [
                                l(`div`, {
                                  className: `framer-lh9grj`,
                                  "data-framer-name": `Mission Badge `,
                                  children: [
                                    l(`div`, {
                                      className: `framer-uvu8mk`,
                                      "data-border": !0,
                                      "data-framer-name": `Mission Badge Shell`,
                                      children: [
                                        c(v, {
                                          breakpoint: g,
                                          overrides: {
                                            DdetQ92tH: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                2257 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                            ZRCGSeloK: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                1265 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                          },
                                          children: c(w, {
                                            height: 15,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              60 +
                                              1265 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              9.1,
                                            children: c(O, {
                                              className: `framer-1tk281k-container`,
                                              nodeId: `FTP3TgVc_`,
                                              scopeId: `RBHgPWYM6`,
                                              children: c(W, {
                                                height: `100%`,
                                                id: `FTP3TgVc_`,
                                                layoutId: `FTP3TgVc_`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-1kyvdj7`,
                                              "data-styles-preset": `s3xaUzb1J`,
                                              dir: `auto`,
                                              children: `Our Mission`,
                                            }),
                                          }),
                                          className: `framer-1nwlgn3`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`h2`, {
                                          className: `framer-styles-preset-d3e5g2`,
                                          "data-styles-preset": `OY7GyAvvP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `What's our mission?`,
                                        }),
                                      }),
                                      className: `framer-1k9pa7k`,
                                      "data-framer-name": `Mission Badge Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(y, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1y3tbh`,
                                      "data-styles-preset": `HutzmjBVA`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                      },
                                      children: `To defend your most valuable asset from the chaos of the modern workday.`,
                                    }),
                                  }),
                                  className: `framer-24hry1`,
                                  "data-framer-name": `Mission Badge Heading`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            c(w, {
                              children: c(O, {
                                className: `framer-1ybxegj-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `Lhp5QbSUh`,
                                scopeId: `RBHgPWYM6`,
                                children: c(vt, {
                                  blur: 0,
                                  colorHidden: `var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, rgb(106, 198, 143))`,
                                  colorRevealed: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                  font: {
                                    fontFamily: `"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif`,
                                    fontSize: `calc(var(--framer-root-font-size, 1rem) * 2.3)`,
                                    fontStyle: `normal`,
                                    fontWeight: 500,
                                    letterSpacing: `-0.04em`,
                                    lineHeight: `1.2em`,
                                    textAlign: `left`,
                                  },
                                  height: `100%`,
                                  htmlTag: `div`,
                                  id: `Lhp5QbSUh`,
                                  layoutId: `Lhp5QbSUh`,
                                  offsetEnd: 20,
                                  offsetStart: 80,
                                  onLoadDuration: 1.5,
                                  perspective: 800,
                                  preset: `Default`,
                                  revealDirection: `Left to Right`,
                                  rotateX: 0,
                                  scale: 1,
                                  splitMode: `Characters`,
                                  stagger: 0.2,
                                  style: { width: `100%` },
                                  text: `"Stop losing time to manual scheduling. Sortia is your ruthless gatekeeper, automatically prioritizing your top tasks and protecting your deep work to keep your focus unbroken."`,
                                  trigger: `Scroll`,
                                  width: `100%`,
                                  xOffset: 7,
                                  yOffset: 0,
                                }),
                              }),
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-cx404s`,
                          "data-framer-name": `Features Section`,
                          id: Ce,
                          ref: we,
                          children: [
                            l(K, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-gr4yvw`,
                              "data-framer-name": `Features Intro`,
                              children: [
                                l(`div`, {
                                  className: `framer-rpt1j0`,
                                  "data-framer-name": `Features Intro Panel`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-fe9ck2`,
                                      "data-border": !0,
                                      "data-framer-name": `Features Heading`,
                                      children: [
                                        c(v, {
                                          breakpoint: g,
                                          overrides: {
                                            DdetQ92tH: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                2805.2 +
                                                40 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                            ZRCGSeloK: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                1817.2 +
                                                40 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                          },
                                          children: c(w, {
                                            height: 15,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              60 +
                                              1557.2 +
                                              40 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              9.1,
                                            children: c(O, {
                                              className: `framer-1ynin75-container`,
                                              nodeId: `MRLpMx8Fi`,
                                              scopeId: `RBHgPWYM6`,
                                              children: c(W, {
                                                height: `100%`,
                                                id: `MRLpMx8Fi`,
                                                layoutId: `MRLpMx8Fi`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-1kyvdj7`,
                                              "data-styles-preset": `s3xaUzb1J`,
                                              dir: `auto`,
                                              children: `Features`,
                                            }),
                                          }),
                                          className: `framer-7hhlu`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`h2`, {
                                          className: `framer-styles-preset-d3e5g2`,
                                          "data-styles-preset": `OY7GyAvvP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `Stop planning. Start executing.`,
                                        }),
                                      }),
                                      className: `framer-1j255y8`,
                                      "data-framer-name": `Features Subtitle`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(y, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1y3tbh`,
                                      "data-styles-preset": `HutzmjBVA`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                      },
                                      children: `Sortia replaces chaotic to-do lists and manual calendar blocking with an intelligent engine that does the heavy lifting for you.`,
                                    }),
                                  }),
                                  className: `framer-1xvz9ld`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-3se3v6`,
                              "data-framer-name": `Scroll Path`,
                              children: [
                                c(v, {
                                  breakpoint: g,
                                  overrides: {
                                    DdetQ92tH: { __framer__styleTransformEffectEnabled: void 0 },
                                    ZRCGSeloK: { __framer__styleTransformEffectEnabled: void 0 },
                                  },
                                  children: c(K, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: Te,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0.2,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-ffj2ct`,
                                    "data-framer-name": `Feature Story Section One`,
                                    children: l(`div`, {
                                      className: `framer-eef5zi`,
                                      "data-framer-name": `Feature Story Panel One`,
                                      children: [
                                        l(`div`, {
                                          className: `framer-1wjrgjl`,
                                          "data-framer-name": `Feature Story Content Column One`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-xdv1j8`,
                                              "data-framer-name": `Feature Story Callout Row One`,
                                              children: c(v, {
                                                breakpoint: g,
                                                overrides: {
                                                  DdetQ92tH: {
                                                    children: c(o, {
                                                      children: c(`h2`, {
                                                        className: `framer-styles-preset-d3e5g2`,
                                                        "data-styles-preset": `OY7GyAvvP`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                        },
                                                        children: `Smart Task Dashboard`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: c(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(o, {
                                                    children: c(`h2`, {
                                                      className: `framer-styles-preset-d3e5g2`,
                                                      "data-styles-preset": `OY7GyAvvP`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                      },
                                                      children: `Smart Task Dashboard`,
                                                    }),
                                                  }),
                                                  className: `framer-10t2zc8`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                            l(`div`, {
                                              className: `framer-r6itf`,
                                              "data-framer-name": `Feature Story Hero Column One`,
                                              children: [
                                                c(v, {
                                                  breakpoint: g,
                                                  overrides: {
                                                    DdetQ92tH: {
                                                      children: c(o, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-1y3tbh`,
                                                          "data-styles-preset": `HutzmjBVA`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                          },
                                                          children: `Get a crystal-clear, bird’s-eye view of your entire day. This dynamic interface seamlessly blends your auto-prioritized tasks with your existing calendar events to create a perfectly structured timeline.`,
                                                        }),
                                                      }),
                                                    },
                                                  },
                                                  children: c(y, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(o, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-1y3tbh`,
                                                        "data-styles-preset": `HutzmjBVA`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                        },
                                                        children: `Get a crystal-clear, bird’s-eye view of your entire day. This dynamic interface seamlessly blends your auto-prioritized tasks with your existing calendar events to create a perfectly structured timeline.`,
                                                      }),
                                                    }),
                                                    className: `framer-yrwifk`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                l(`div`, {
                                                  className: `framer-tgnt0j`,
                                                  "data-framer-name": `Feature Story Metrics One`,
                                                  children: [
                                                    l(`div`, {
                                                      className: `framer-1sliz4x`,
                                                      "data-framer-name": `Feature Metric Row One`,
                                                      children: [
                                                        l(C, {
                                                          className: `framer-lzm1oq`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                          withExternalLayout: !0,
                                                          children: [
                                                            c(C, {
                                                              className: `framer-1r9wyf9`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                            c(C, {
                                                              className: `framer-o8so2k`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          ],
                                                        }),
                                                        c(y, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(o, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-sak9x6`,
                                                              "data-styles-preset": `vVaZ0SXla`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                              },
                                                              children: `Auto-prioritized schedule`,
                                                            }),
                                                          }),
                                                          className: `framer-4d5lu6`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                    l(`div`, {
                                                      className: `framer-vlhh6r`,
                                                      "data-framer-name": `Feature Metric Row Two`,
                                                      children: [
                                                        l(C, {
                                                          className: `framer-whjeoa`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                          withExternalLayout: !0,
                                                          children: [
                                                            c(C, {
                                                              className: `framer-1esxjfs`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                            c(C, {
                                                              className: `framer-ojiexm`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          ],
                                                        }),
                                                        c(y, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(o, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-sak9x6`,
                                                              "data-styles-preset": `vVaZ0SXla`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                              },
                                                              children: `Calendar sync`,
                                                            }),
                                                          }),
                                                          className: `framer-yg4ret`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                    l(`div`, {
                                                      className: `framer-uok3gj`,
                                                      "data-framer-name": `Feature Metric Row Three`,
                                                      children: [
                                                        l(C, {
                                                          className: `framer-c08tjk`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                          withExternalLayout: !0,
                                                          children: [
                                                            c(C, {
                                                              className: `framer-1xai9cp`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                            c(C, {
                                                              className: `framer-zfvr6f`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          ],
                                                        }),
                                                        c(y, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(o, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-sak9x6`,
                                                              "data-styles-preset": `vVaZ0SXla`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                              },
                                                              children: `Smart replanning`,
                                                            }),
                                                          }),
                                                          className: `framer-19ou0j`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            l(`div`, {
                                              className: `framer-1ga8490`,
                                              "data-framer-name": `Feature Story Actions Row One`,
                                              children: [
                                                E() &&
                                                  c(b, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `OqsiEhdfU` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `OqsiEhdfU` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      c(v, {
                                                        breakpoint: g,
                                                        overrides: {
                                                          ZRCGSeloK: {
                                                            y:
                                                              (u?.y || 0) +
                                                              0 +
                                                              0 +
                                                              60 +
                                                              1817.2 +
                                                              40 +
                                                              272.2 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              446.25 +
                                                              0,
                                                          },
                                                        },
                                                        children: c(w, {
                                                          height: 44,
                                                          y:
                                                            (u?.y || 0) +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            1557.2 +
                                                            40 +
                                                            212.2 +
                                                            0 +
                                                            0 +
                                                            110 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            425.25 +
                                                            0,
                                                          children: c(O, {
                                                            className: `framer-1wxmlts-container hidden-cjwnsp`,
                                                            "data-framer-name": `Feature Story Primary CTA`,
                                                            name: `Feature Story Primary CTA`,
                                                            nodeId: `JiqzjQzqZ`,
                                                            scopeId: `RBHgPWYM6`,
                                                            children: c(v, {
                                                              breakpoint: g,
                                                              overrides: {
                                                                ZRCGSeloK: { TWaZPhsrs: e[1] },
                                                              },
                                                              children: c(P, {
                                                                bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                                dMzFGkb3u: !1,
                                                                dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                                F9tZ22mws: {
                                                                  borderColor: `rgba(26, 26, 26, 0)`,
                                                                  borderStyle: `solid`,
                                                                  borderWidth: 2,
                                                                },
                                                                height: `100%`,
                                                                id: `JiqzjQzqZ`,
                                                                jfeAUucDj: N,
                                                                layoutId: `JiqzjQzqZ`,
                                                                lnJBzRgIM: `Learn More`,
                                                                MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                                name: `Feature Story Primary CTA`,
                                                                ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                                SLp3DWZqR: !0,
                                                                TWaZPhsrs: e[0],
                                                                variant: J(`nhzWZDlVc`),
                                                                vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                                wDmZ1dhUo: I,
                                                                width: `100%`,
                                                                ZEAGlJD1F: {
                                                                  borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                                  borderStyle: `solid`,
                                                                  borderWidth: 2,
                                                                },
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                c(b, {
                                                  links: [
                                                    {
                                                      href: { webPageId: `uwEtvwUqf` },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: { webPageId: `uwEtvwUqf` },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: { webPageId: `uwEtvwUqf` },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    c(v, {
                                                      breakpoint: g,
                                                      overrides: {
                                                        DdetQ92tH: {
                                                          y:
                                                            (u?.y || 0) +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            2805.2 +
                                                            40 +
                                                            271.2 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            28 +
                                                            0 +
                                                            0 +
                                                            557 +
                                                            0 +
                                                            0,
                                                        },
                                                        ZRCGSeloK: {
                                                          y:
                                                            (u?.y || 0) +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            1817.2 +
                                                            40 +
                                                            272.2 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            446.25 +
                                                            0,
                                                        },
                                                      },
                                                      children: c(w, {
                                                        height: 44,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          0 +
                                                          60 +
                                                          1557.2 +
                                                          40 +
                                                          212.2 +
                                                          0 +
                                                          0 +
                                                          110 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          425.25 +
                                                          0,
                                                        children: c(O, {
                                                          className: `framer-1l1dz2n-container`,
                                                          "data-framer-name": `Feature Story Secondary CTA`,
                                                          name: `Feature Story Secondary CTA`,
                                                          nodeId: `fTL6iP55a`,
                                                          scopeId: `RBHgPWYM6`,
                                                          children: c(v, {
                                                            breakpoint: g,
                                                            overrides: {
                                                              DdetQ92tH: { TWaZPhsrs: e[1] },
                                                              ZRCGSeloK: { TWaZPhsrs: e[2] },
                                                            },
                                                            children: c(P, {
                                                              bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                              dMzFGkb3u: !0,
                                                              dP0U8qPjN: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                              F9tZ22mws: {
                                                                borderColor: `rgba(26, 26, 26, 0)`,
                                                                borderStyle: `solid`,
                                                                borderWidth: 2,
                                                              },
                                                              height: `100%`,
                                                              id: `fTL6iP55a`,
                                                              jfeAUucDj: ct,
                                                              layoutId: `fTL6iP55a`,
                                                              lnJBzRgIM: `View Pricing`,
                                                              MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                              name: `Feature Story Secondary CTA`,
                                                              ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                              SLp3DWZqR: !1,
                                                              TWaZPhsrs: e[0],
                                                              variant: J(`nhzWZDlVc`),
                                                              vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                              wDmZ1dhUo: I,
                                                              width: `100%`,
                                                              ZEAGlJD1F: {
                                                                borderColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                                borderStyle: `solid`,
                                                                borderWidth: 2,
                                                              },
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        c(w, {
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: {
                                              DdetQ92tH: {
                                                __framer__styleTransformEffectEnabled: void 0,
                                                style: { scale: 0.7 },
                                                transformTemplate: Y,
                                              },
                                              ZRCGSeloK: {
                                                __framer__styleTransformEffectEnabled: void 0,
                                                style: { scale: 0.7 },
                                              },
                                            },
                                            children: c(q, {
                                              __framer__spring: {
                                                damping: 99,
                                                delay: 0,
                                                duration: 0.3,
                                                ease: [0.44, 0, 0.56, 1],
                                                mass: 1,
                                                stagger: 0,
                                                stiffness: 500,
                                                type: `spring`,
                                              },
                                              __framer__styleTransformEffectEnabled: !0,
                                              __framer__transformTargets: [
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 277,
                                                  },
                                                },
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                              ],
                                              __framer__transformTrigger: `onInView`,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-r6aaen-container`,
                                              "data-framer-name": `Hero Device Mockup`,
                                              isAuthoredByUser: !0,
                                              name: `Hero Device Mockup`,
                                              nodeId: `tizadHg9J`,
                                              rendersWithMotion: !0,
                                              scopeId: `RBHgPWYM6`,
                                              children: c(v, {
                                                breakpoint: g,
                                                overrides: {
                                                  DdetQ92tH: {
                                                    mouseSensitivity: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    rotateZ: 0,
                                                  },
                                                  ZRCGSeloK: {
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    rotateZ: 0,
                                                    style: { height: `100%`, width: `100%` },
                                                  },
                                                },
                                                children: c(H, {
                                                  cornerRadius: 24,
                                                  disableMouseOnTouch: !0,
                                                  dynamicShine: !0,
                                                  frameColor: `Space Black`,
                                                  glowBlur: 138,
                                                  glowColor: `rgb(255, 255, 255)`,
                                                  glowOpacity: 29,
                                                  height: `100%`,
                                                  id: `tizadHg9J`,
                                                  layoutId: `tizadHg9J`,
                                                  mouseSensitivity: 3,
                                                  name: `Hero Device Mockup`,
                                                  perspectiveDistance: 800,
                                                  rotateX: 10,
                                                  rotateY: -17,
                                                  rotateZ: 9,
                                                  screenBrightness: 100,
                                                  screenImage: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png`,
                                                  screenVideo: ``,
                                                  scrollLift: 0,
                                                  scrollRotation: 0,
                                                  shadowBlur: 60,
                                                  shadowColor: `rgba(0, 0, 0, 0.45)`,
                                                  shadowSpread: -40,
                                                  shadowType: `Realistic Multi`,
                                                  shadowX: 53,
                                                  shadowY: 52,
                                                  shineIntensity: 65,
                                                  showGlow: !1,
                                                  videoAutoplay: !0,
                                                  videoLoop: !0,
                                                  videoMuted: !0,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        l(`div`, {
                                          className: `framer-smemu2`,
                                          "data-framer-name": `Content Grid`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-98og3t`,
                                              "data-framer-name": `Icon`,
                                              children: c(C, {
                                                className: `framer-cmudqh`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.71 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 14.71 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1ka3yed`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 180 },
                                              children: c(C, {
                                                className: `framer-1ceto08`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.71 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 14.71 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1y6m1zq`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 270 },
                                              children: c(C, {
                                                className: `framer-ha9526`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14.71" overflow="visible"><path d="M 0 14.71 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-15gg6j6`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 90 },
                                              children: c(C, {
                                                className: `framer-qbisvm`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14.71" overflow="visible"><path d="M 0 14.71 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                c(v, {
                                  breakpoint: g,
                                  overrides: {
                                    DdetQ92tH: { __framer__styleTransformEffectEnabled: void 0 },
                                    ZRCGSeloK: { __framer__styleTransformEffectEnabled: void 0 },
                                  },
                                  children: c(K, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: ke,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0.4,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-3g8xna`,
                                    "data-framer-name": `Feature Story Section Two`,
                                    id: Ae,
                                    ref: Te,
                                    children: l(`div`, {
                                      className: `framer-zj5rjv`,
                                      "data-framer-name": `Feature Story Panel Two`,
                                      children: [
                                        c(w, {
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: {
                                              DdetQ92tH: {
                                                __framer__styleTransformEffectEnabled: void 0,
                                                style: { scale: 0.7 },
                                                transformTemplate: Y,
                                              },
                                              ZRCGSeloK: {
                                                __framer__styleTransformEffectEnabled: void 0,
                                                style: { scale: 0.7 },
                                              },
                                            },
                                            children: c(q, {
                                              __framer__spring: {
                                                damping: 99,
                                                delay: 0,
                                                duration: 0.3,
                                                ease: [0.44, 0, 0.56, 1],
                                                mass: 1,
                                                stagger: 0,
                                                stiffness: 500,
                                                type: `spring`,
                                              },
                                              __framer__styleTransformEffectEnabled: !0,
                                              __framer__transformTargets: [
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 277,
                                                  },
                                                },
                                                {
                                                  target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0,
                                                  },
                                                },
                                              ],
                                              __framer__transformTrigger: `onInView`,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1c9egj9-container`,
                                              "data-framer-name": `Feature Story Device Mockup Two`,
                                              isAuthoredByUser: !0,
                                              name: `Feature Story Device Mockup Two`,
                                              nodeId: `mbQdIngAn`,
                                              rendersWithMotion: !0,
                                              scopeId: `RBHgPWYM6`,
                                              children: c(v, {
                                                breakpoint: g,
                                                overrides: {
                                                  DdetQ92tH: {
                                                    mouseSensitivity: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    rotateZ: 0,
                                                  },
                                                  ZRCGSeloK: {
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    rotateZ: 0,
                                                    style: { height: `100%`, width: `100%` },
                                                  },
                                                },
                                                children: c(H, {
                                                  cornerRadius: 24,
                                                  disableMouseOnTouch: !0,
                                                  dynamicShine: !0,
                                                  frameColor: `Space Black`,
                                                  glowBlur: 138,
                                                  glowColor: `rgb(255, 255, 255)`,
                                                  glowOpacity: 29,
                                                  height: `100%`,
                                                  id: `mbQdIngAn`,
                                                  layoutId: `mbQdIngAn`,
                                                  mouseSensitivity: 3,
                                                  name: `Feature Story Device Mockup Two`,
                                                  perspectiveDistance: 800,
                                                  rotateX: 10,
                                                  rotateY: 17,
                                                  rotateZ: -9,
                                                  screenBrightness: 100,
                                                  screenImage: `../../assets/images/1LiAF0Cwilxerk9zLmc6QBIB2o8.png`,
                                                  screenVideo: ``,
                                                  scrollLift: 0,
                                                  scrollRotation: 0,
                                                  shadowBlur: 60,
                                                  shadowColor: `rgba(0, 0, 0, 0.45)`,
                                                  shadowSpread: -40,
                                                  shadowType: `Realistic Multi`,
                                                  shadowX: 53,
                                                  shadowY: 52,
                                                  shineIntensity: 65,
                                                  showGlow: !1,
                                                  videoAutoplay: !0,
                                                  videoLoop: !0,
                                                  videoMuted: !0,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        l(`div`, {
                                          className: `framer-17gnysd`,
                                          "data-framer-name": `Feature Story Content Column Two`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-1sb1kvk`,
                                              "data-framer-name": `Feature Story Hero Column Two`,
                                              children: c(v, {
                                                breakpoint: g,
                                                overrides: {
                                                  DdetQ92tH: {
                                                    children: c(o, {
                                                      children: c(`h2`, {
                                                        className: `framer-styles-preset-d3e5g2`,
                                                        "data-styles-preset": `OY7GyAvvP`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                        },
                                                        children: `AI Executive Assistant`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: c(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(o, {
                                                    children: c(`h2`, {
                                                      className: `framer-styles-preset-d3e5g2`,
                                                      "data-styles-preset": `OY7GyAvvP`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                      },
                                                      children: `AI Executive Assistant`,
                                                    }),
                                                  }),
                                                  className: `framer-10wsdxo`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                            l(`div`, {
                                              className: `framer-1m4lkk`,
                                              "data-framer-name": `Feature Story Metrics Two`,
                                              children: [
                                                c(v, {
                                                  breakpoint: g,
                                                  overrides: {
                                                    DdetQ92tH: {
                                                      children: c(o, {
                                                        children: c(`p`, {
                                                          className: `framer-styles-preset-1y3tbh`,
                                                          "data-styles-preset": `HutzmjBVA`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                          },
                                                          children: `Meet the intelligent engine that runs behind the scenes. It continuously analyzes your workload, learns your pacing, and ruthlessly flags your top three “must-do” priorities to cut out busywork.`,
                                                        }),
                                                      }),
                                                    },
                                                  },
                                                  children: c(y, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(o, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-1y3tbh`,
                                                        "data-styles-preset": `HutzmjBVA`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                        },
                                                        children: `Meet the intelligent engine that runs behind the scenes. It continuously analyzes your workload, learns your pacing, and ruthlessly flags your top three "must-do" priorities to cut out busywork.`,
                                                      }),
                                                    }),
                                                    className: `framer-1bz5p76`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                l(`div`, {
                                                  className: `framer-1tk9cof`,
                                                  "data-framer-name": `Feature Story Details Two`,
                                                  children: [
                                                    l(`div`, {
                                                      className: `framer-sr8hc1`,
                                                      "data-framer-name": `Feature Metric Row One Two`,
                                                      children: [
                                                        l(C, {
                                                          className: `framer-196ovn2`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                          withExternalLayout: !0,
                                                          children: [
                                                            c(C, {
                                                              className: `framer-1b37l6d`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                            c(C, {
                                                              className: `framer-1nxrjkg`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          ],
                                                        }),
                                                        c(y, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(o, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-sak9x6`,
                                                              "data-styles-preset": `vVaZ0SXla`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                              },
                                                              children: `Smart Priority Flagging`,
                                                            }),
                                                          }),
                                                          className: `framer-1kl8l5s`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                    l(`div`, {
                                                      className: `framer-13ws70z`,
                                                      "data-framer-name": `Feature Metric Row Two Two`,
                                                      children: [
                                                        l(C, {
                                                          className: `framer-169g6hy`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                          withExternalLayout: !0,
                                                          children: [
                                                            c(C, {
                                                              className: `framer-g2gacm`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                            c(C, {
                                                              className: `framer-1q0kcae`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          ],
                                                        }),
                                                        c(y, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(o, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-sak9x6`,
                                                              "data-styles-preset": `vVaZ0SXla`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                              },
                                                              children: `Burnout-Free Scheduling`,
                                                            }),
                                                          }),
                                                          className: `framer-medqym`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                    l(`div`, {
                                                      className: `framer-1jgo9gk`,
                                                      "data-framer-name": `Feature Metric Row Three Two`,
                                                      children: [
                                                        l(C, {
                                                          className: `framer-1tv77so`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                          withExternalLayout: !0,
                                                          children: [
                                                            c(C, {
                                                              className: `framer-ev6alq`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                            c(C, {
                                                              className: `framer-opyb71`,
                                                              requiresOverflowVisible: !0,
                                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          ],
                                                        }),
                                                        c(y, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(o, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-sak9x6`,
                                                              "data-styles-preset": `vVaZ0SXla`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                              },
                                                              children: `Instant Auto-Rescheduling`,
                                                            }),
                                                          }),
                                                          className: `framer-1xk4kpc`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            l(`div`, {
                                              className: `framer-3up1ye`,
                                              "data-framer-name": `Feature Story Actions Row Two`,
                                              children: [
                                                E() &&
                                                  c(b, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `OqsiEhdfU` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `OqsiEhdfU` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      c(v, {
                                                        breakpoint: g,
                                                        overrides: {
                                                          ZRCGSeloK: {
                                                            y:
                                                              (u?.y || 0) +
                                                              0 +
                                                              0 +
                                                              60 +
                                                              1817.2 +
                                                              40 +
                                                              272.2 +
                                                              0 +
                                                              530 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              446.25 +
                                                              0,
                                                          },
                                                        },
                                                        children: c(w, {
                                                          height: 44,
                                                          y:
                                                            (u?.y || 0) +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            1557.2 +
                                                            40 +
                                                            212.2 +
                                                            0 +
                                                            612 +
                                                            110 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            425.25 +
                                                            0,
                                                          children: c(O, {
                                                            className: `framer-1e8xmdg-container hidden-cjwnsp`,
                                                            "data-framer-name": `Learn More Button`,
                                                            name: `Learn More Button`,
                                                            nodeId: `b6aF8Xq6n`,
                                                            scopeId: `RBHgPWYM6`,
                                                            children: c(v, {
                                                              breakpoint: g,
                                                              overrides: {
                                                                ZRCGSeloK: { TWaZPhsrs: e[1] },
                                                              },
                                                              children: c(P, {
                                                                bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                                dMzFGkb3u: !1,
                                                                dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                                F9tZ22mws: {
                                                                  borderColor: `rgba(26, 26, 26, 0)`,
                                                                  borderStyle: `solid`,
                                                                  borderWidth: 2,
                                                                },
                                                                height: `100%`,
                                                                id: `b6aF8Xq6n`,
                                                                jfeAUucDj: N,
                                                                layoutId: `b6aF8Xq6n`,
                                                                lnJBzRgIM: `Learn More`,
                                                                MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                                name: `Learn More Button`,
                                                                ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                                SLp3DWZqR: !0,
                                                                TWaZPhsrs: e[0],
                                                                variant: J(`nhzWZDlVc`),
                                                                vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                                wDmZ1dhUo: I,
                                                                width: `100%`,
                                                                ZEAGlJD1F: {
                                                                  borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                                  borderStyle: `solid`,
                                                                  borderWidth: 2,
                                                                },
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                c(b, {
                                                  links: [
                                                    {
                                                      href: { webPageId: `uwEtvwUqf` },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: { webPageId: `uwEtvwUqf` },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: { webPageId: `uwEtvwUqf` },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    c(v, {
                                                      breakpoint: g,
                                                      overrides: {
                                                        DdetQ92tH: {
                                                          y:
                                                            (u?.y || 0) +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            2805.2 +
                                                            40 +
                                                            271.2 +
                                                            0 +
                                                            890 +
                                                            0 +
                                                            0 +
                                                            28 +
                                                            0 +
                                                            0 +
                                                            557 +
                                                            0 +
                                                            0,
                                                        },
                                                        ZRCGSeloK: {
                                                          y:
                                                            (u?.y || 0) +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            1817.2 +
                                                            40 +
                                                            272.2 +
                                                            0 +
                                                            530 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            446.25 +
                                                            0,
                                                        },
                                                      },
                                                      children: c(w, {
                                                        height: 44,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          0 +
                                                          60 +
                                                          1557.2 +
                                                          40 +
                                                          212.2 +
                                                          0 +
                                                          612 +
                                                          110 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          425.25 +
                                                          0,
                                                        children: c(O, {
                                                          className: `framer-1jul1sn-container`,
                                                          "data-framer-name": `View Pricing Button`,
                                                          name: `View Pricing Button`,
                                                          nodeId: `S3oGQrg4I`,
                                                          scopeId: `RBHgPWYM6`,
                                                          children: c(v, {
                                                            breakpoint: g,
                                                            overrides: {
                                                              DdetQ92tH: { TWaZPhsrs: e[1] },
                                                              ZRCGSeloK: { TWaZPhsrs: e[2] },
                                                            },
                                                            children: c(P, {
                                                              bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                              dMzFGkb3u: !0,
                                                              dP0U8qPjN: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                              F9tZ22mws: {
                                                                borderColor: `rgba(26, 26, 26, 0)`,
                                                                borderStyle: `solid`,
                                                                borderWidth: 2,
                                                              },
                                                              height: `100%`,
                                                              id: `S3oGQrg4I`,
                                                              jfeAUucDj: ct,
                                                              layoutId: `S3oGQrg4I`,
                                                              lnJBzRgIM: `View Pricing`,
                                                              MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                              name: `View Pricing Button`,
                                                              ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                              SLp3DWZqR: !1,
                                                              TWaZPhsrs: e[0],
                                                              variant: J(`nhzWZDlVc`),
                                                              vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                              wDmZ1dhUo: I,
                                                              width: `100%`,
                                                              ZEAGlJD1F: {
                                                                borderColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                                borderStyle: `solid`,
                                                                borderWidth: 2,
                                                              },
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        l(`div`, {
                                          className: `framer-1vlq0tq`,
                                          "data-framer-name": `Content Grid`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-i7p1us`,
                                              "data-framer-name": `Icon`,
                                              children: c(C, {
                                                className: `framer-1etvnfy`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.71 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 14.71 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-9utdx3`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 180 },
                                              children: c(C, {
                                                className: `framer-4k5c4h`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.71 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 14.71 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-3ga64o`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 270 },
                                              children: c(C, {
                                                className: `framer-xpxnh1`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14.71" overflow="visible"><path d="M 0 14.71 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-2zxgpn`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 90 },
                                              children: c(C, {
                                                className: `framer-14yztxj`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14.71" overflow="visible"><path d="M 0 14.71 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                c(K, {
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-frloeq`,
                                  "data-framer-name": `Feature Story Section Three`,
                                  id: je,
                                  ref: ke,
                                  children: l(`div`, {
                                    className: `framer-iaqv3h`,
                                    "data-framer-name": `Feature Story Panel Three`,
                                    children: [
                                      l(`div`, {
                                        className: `framer-1q95gn5`,
                                        "data-framer-name": `Feature Story Content Column Three`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-1rvs0an`,
                                            "data-framer-name": `Feature Story Hero Column Three`,
                                            children: c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                DdetQ92tH: {
                                                  children: c(o, {
                                                    children: c(`h2`, {
                                                      className: `framer-styles-preset-d3e5g2`,
                                                      "data-styles-preset": `OY7GyAvvP`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                      },
                                                      children: `Universal Calendar Sync`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: c(y, {
                                                __fromCanvasComponent: !0,
                                                children: c(o, {
                                                  children: c(`h2`, {
                                                    className: `framer-styles-preset-d3e5g2`,
                                                    "data-styles-preset": `OY7GyAvvP`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                    },
                                                    children: `Universal Calendar Sync`,
                                                  }),
                                                }),
                                                className: `framer-1wl7vef`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          l(`div`, {
                                            className: `framer-1asa3oo`,
                                            "data-framer-name": `Feature Story Details Three`,
                                            children: [
                                              c(v, {
                                                breakpoint: g,
                                                overrides: {
                                                  DdetQ92tH: {
                                                    children: c(o, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-1y3tbh`,
                                                        "data-styles-preset": `HutzmjBVA`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                        },
                                                        children: `Two-way synchronization with Google, Apple, and Outlook guarantees you never double-book deep work over a Zoom call.`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                children: c(y, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(o, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-1y3tbh`,
                                                      "data-styles-preset": `HutzmjBVA`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                      },
                                                      children: `Two-way synchronization with Google, Apple, and Outlook guarantees you never double-book deep work over a Zoom call.`,
                                                    }),
                                                  }),
                                                  className: `framer-170mce4`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              l(`div`, {
                                                className: `framer-fo6ums`,
                                                "data-framer-name": `Feature Story Bullet List Three`,
                                                children: [
                                                  l(`div`, {
                                                    className: `framer-1w9tlqj`,
                                                    "data-framer-name": `Feature Bullet Row One`,
                                                    children: [
                                                      l(C, {
                                                        className: `framer-abi4d`,
                                                        requiresOverflowVisible: !0,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                        withExternalLayout: !0,
                                                        children: [
                                                          c(C, {
                                                            className: `framer-11esfni`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          c(C, {
                                                            className: `framer-656fad`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                      c(y, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(o, {
                                                          children: c(`p`, {
                                                            className: `framer-styles-preset-sak9x6`,
                                                            "data-styles-preset": `vVaZ0SXla`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                            },
                                                            children: `Two-Way Calendar Sync`,
                                                          }),
                                                        }),
                                                        className: `framer-1deo2u3`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                  l(`div`, {
                                                    className: `framer-1cgvqwi`,
                                                    "data-framer-name": `Feature Bullet Row Two`,
                                                    children: [
                                                      l(C, {
                                                        className: `framer-44mkt1`,
                                                        requiresOverflowVisible: !0,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                        withExternalLayout: !0,
                                                        children: [
                                                          c(C, {
                                                            className: `framer-10e4ve6`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          c(C, {
                                                            className: `framer-d8j70q`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                      c(y, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(o, {
                                                          children: c(`p`, {
                                                            className: `framer-styles-preset-sak9x6`,
                                                            "data-styles-preset": `vVaZ0SXla`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                            },
                                                            children: `Real-Time Conflict Blocking`,
                                                          }),
                                                        }),
                                                        className: `framer-188fjts`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                  l(`div`, {
                                                    className: `framer-1o2krda`,
                                                    "data-framer-name": `Feature Bullet Row Three`,
                                                    children: [
                                                      l(C, {
                                                        className: `framer-hszfym`,
                                                        requiresOverflowVisible: !0,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><g><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.923 9.58 L 8.974 11.597 L 13.077 7.563" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                        withExternalLayout: !0,
                                                        children: [
                                                          c(C, {
                                                            className: `framer-1jz9od`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.513 20.168" overflow="visible"><path d="M 0 10.084 C 0 4.515 4.592 0 10.256 0 C 15.921 0 20.513 4.515 20.513 10.084 C 20.513 15.653 15.921 20.168 10.256 20.168 C 4.592 20.168 0 15.653 0 10.084 Z" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          c(C, {
                                                            className: `framer-f1zbzp`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.154 4.034" overflow="visible"><path d="M 0 2.017 L 2.051 4.034 L 6.154 0" fill="transparent" stroke-width="2" stroke="var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) /* {&quot;name&quot;:&quot;100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                      c(y, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(o, {
                                                          children: c(`p`, {
                                                            className: `framer-styles-preset-sak9x6`,
                                                            "data-styles-preset": `vVaZ0SXla`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                                            },
                                                            children: `Deep-Work Protection`,
                                                          }),
                                                        }),
                                                        className: `framer-6rmxp`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          l(`div`, {
                                            className: `framer-6jvm3i`,
                                            "data-framer-name": `Feature Story Actions Row Three`,
                                            children: [
                                              E() &&
                                                c(b, {
                                                  links: [
                                                    {
                                                      href: { webPageId: `OqsiEhdfU` },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: { webPageId: `OqsiEhdfU` },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    c(v, {
                                                      breakpoint: g,
                                                      overrides: {
                                                        ZRCGSeloK: {
                                                          y:
                                                            (u?.y || 0) +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            1817.2 +
                                                            40 +
                                                            272.2 +
                                                            0 +
                                                            1060 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            446.25 +
                                                            0,
                                                        },
                                                      },
                                                      children: c(w, {
                                                        height: 44,
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          0 +
                                                          60 +
                                                          1557.2 +
                                                          40 +
                                                          212.2 +
                                                          0 +
                                                          1224 +
                                                          110 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          425.25 +
                                                          0,
                                                        children: c(O, {
                                                          className: `framer-1vukgy-container hidden-cjwnsp`,
                                                          "data-framer-name": `Learn More Button`,
                                                          name: `Learn More Button`,
                                                          nodeId: `xiVZGZ7Pw`,
                                                          scopeId: `RBHgPWYM6`,
                                                          children: c(v, {
                                                            breakpoint: g,
                                                            overrides: {
                                                              ZRCGSeloK: { TWaZPhsrs: e[1] },
                                                            },
                                                            children: c(P, {
                                                              bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                              dMzFGkb3u: !1,
                                                              dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                              F9tZ22mws: {
                                                                borderColor: `rgba(26, 26, 26, 0)`,
                                                                borderStyle: `solid`,
                                                                borderWidth: 2,
                                                              },
                                                              height: `100%`,
                                                              id: `xiVZGZ7Pw`,
                                                              jfeAUucDj: N,
                                                              layoutId: `xiVZGZ7Pw`,
                                                              lnJBzRgIM: `Learn More`,
                                                              MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                              name: `Learn More Button`,
                                                              ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                              SLp3DWZqR: !0,
                                                              TWaZPhsrs: e[0],
                                                              variant: J(`nhzWZDlVc`),
                                                              vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                              wDmZ1dhUo: I,
                                                              width: `100%`,
                                                              ZEAGlJD1F: {
                                                                borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                                borderStyle: `solid`,
                                                                borderWidth: 2,
                                                              },
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              c(b, {
                                                links: [
                                                  {
                                                    href: { webPageId: `uwEtvwUqf` },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: { webPageId: `uwEtvwUqf` },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: { webPageId: `uwEtvwUqf` },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (e) =>
                                                  c(v, {
                                                    breakpoint: g,
                                                    overrides: {
                                                      DdetQ92tH: {
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          0 +
                                                          60 +
                                                          2805.2 +
                                                          40 +
                                                          271.2 +
                                                          0 +
                                                          1780 +
                                                          0 +
                                                          0 +
                                                          28 +
                                                          0 +
                                                          0 +
                                                          557 +
                                                          0 +
                                                          0,
                                                      },
                                                      ZRCGSeloK: {
                                                        y:
                                                          (u?.y || 0) +
                                                          0 +
                                                          0 +
                                                          60 +
                                                          1817.2 +
                                                          40 +
                                                          272.2 +
                                                          0 +
                                                          1060 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          446.25 +
                                                          0,
                                                      },
                                                    },
                                                    children: c(w, {
                                                      height: 44,
                                                      y:
                                                        (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        60 +
                                                        1557.2 +
                                                        40 +
                                                        212.2 +
                                                        0 +
                                                        1224 +
                                                        110 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        425.25 +
                                                        0,
                                                      children: c(O, {
                                                        className: `framer-yj3tmx-container`,
                                                        "data-framer-name": `View Pricing Button`,
                                                        name: `View Pricing Button`,
                                                        nodeId: `HAY6oFJ6w`,
                                                        scopeId: `RBHgPWYM6`,
                                                        children: c(v, {
                                                          breakpoint: g,
                                                          overrides: {
                                                            DdetQ92tH: { TWaZPhsrs: e[1] },
                                                            ZRCGSeloK: { TWaZPhsrs: e[2] },
                                                          },
                                                          children: c(P, {
                                                            bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                            dMzFGkb3u: !0,
                                                            dP0U8qPjN: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                            F9tZ22mws: {
                                                              borderColor: `rgba(26, 26, 26, 0)`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 2,
                                                            },
                                                            height: `100%`,
                                                            id: `HAY6oFJ6w`,
                                                            jfeAUucDj: ct,
                                                            layoutId: `HAY6oFJ6w`,
                                                            lnJBzRgIM: `View Pricing`,
                                                            MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                            name: `View Pricing Button`,
                                                            ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                            SLp3DWZqR: !1,
                                                            TWaZPhsrs: e[0],
                                                            variant: J(`nhzWZDlVc`),
                                                            vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                            wDmZ1dhUo: I,
                                                            width: `100%`,
                                                            ZEAGlJD1F: {
                                                              borderColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                              borderStyle: `solid`,
                                                              borderWidth: 2,
                                                            },
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c(w, {
                                        children: c(v, {
                                          breakpoint: g,
                                          overrides: {
                                            DdetQ92tH: {
                                              __framer__styleTransformEffectEnabled: void 0,
                                              style: { scale: 0.7 },
                                              transformTemplate: Y,
                                            },
                                            ZRCGSeloK: {
                                              __framer__styleTransformEffectEnabled: void 0,
                                              style: { scale: 0.7 },
                                            },
                                          },
                                          children: c(q, {
                                            __framer__spring: {
                                              damping: 99,
                                              delay: 0,
                                              duration: 0.3,
                                              ease: [0.44, 0, 0.56, 1],
                                              mass: 1,
                                              stagger: 0,
                                              stiffness: 500,
                                              type: `spring`,
                                            },
                                            __framer__styleTransformEffectEnabled: !0,
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 277,
                                                },
                                              },
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                            __framer__transformTrigger: `onInView`,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-14ppte1-container`,
                                            "data-framer-name": `Feature Story Device Mockup Three`,
                                            isAuthoredByUser: !0,
                                            name: `Feature Story Device Mockup Three`,
                                            nodeId: `Xf05id8GY`,
                                            rendersWithMotion: !0,
                                            scopeId: `RBHgPWYM6`,
                                            children: c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                DdetQ92tH: {
                                                  mouseSensitivity: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  rotateZ: 0,
                                                },
                                                ZRCGSeloK: {
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  rotateZ: 0,
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                              },
                                              children: c(H, {
                                                cornerRadius: 24,
                                                disableMouseOnTouch: !0,
                                                dynamicShine: !0,
                                                frameColor: `Space Black`,
                                                glowBlur: 138,
                                                glowColor: `rgb(255, 255, 255)`,
                                                glowOpacity: 29,
                                                height: `100%`,
                                                id: `Xf05id8GY`,
                                                layoutId: `Xf05id8GY`,
                                                mouseSensitivity: 3,
                                                name: `Feature Story Device Mockup Three`,
                                                perspectiveDistance: 800,
                                                rotateX: 10,
                                                rotateY: -17,
                                                rotateZ: 9,
                                                screenBrightness: 100,
                                                screenImage: `../../assets/images/YZrdDwajWH3S4QWqfYJqoS2B2c.png`,
                                                screenVideo: ``,
                                                scrollLift: 0,
                                                scrollRotation: 0,
                                                shadowBlur: 60,
                                                shadowColor: `rgba(0, 0, 0, 0.45)`,
                                                shadowSpread: -40,
                                                shadowType: `Realistic Multi`,
                                                shadowX: 53,
                                                shadowY: 52,
                                                shineIntensity: 65,
                                                showGlow: !1,
                                                videoAutoplay: !0,
                                                videoLoop: !0,
                                                videoMuted: !0,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-11gmnev`,
                                        "data-framer-name": `Content Grid`,
                                        children: [
                                          c(`div`, {
                                            className: `framer-2ww7zv`,
                                            "data-framer-name": `Icon`,
                                            children: c(C, {
                                              className: `framer-14w031s`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.71 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 14.71 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          c(h.div, {
                                            className: `framer-1da9kk5`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 180 },
                                            children: c(C, {
                                              className: `framer-1u2fxsj`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.71 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 14.71 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          c(h.div, {
                                            className: `framer-1ojfs0y`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 270 },
                                            children: c(C, {
                                              className: `framer-1ebb2tp`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14.71" overflow="visible"><path d="M 0 14.71 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          c(h.div, {
                                            className: `framer-5589gw`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 90 },
                                            children: c(C, {
                                              className: `framer-n3x8h1`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14.71" overflow="visible"><path d="M 0 14.71 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-1xaimnt`,
                          "data-framer-name": `Productivity Section`,
                          id: Me,
                          ref: Ne,
                          children: [
                            l(K, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1siz68h`,
                              "data-framer-name": `Productivity Intro`,
                              children: [
                                l(`div`, {
                                  className: `framer-56xjol`,
                                  "data-framer-name": `Walkthrough Intro Panel`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-3r7qa8`,
                                      "data-border": !0,
                                      "data-framer-name": `Walkthrough Eyebrow`,
                                      children: [
                                        c(v, {
                                          breakpoint: g,
                                          overrides: {
                                            DdetQ92tH: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                5796.4 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                            ZRCGSeloK: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                3789.4 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                          },
                                          children: c(w, {
                                            height: 15,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              60 +
                                              3715.4 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              9.1,
                                            children: c(O, {
                                              className: `framer-1x0gn93-container`,
                                              nodeId: `NBcRDcdI_`,
                                              scopeId: `RBHgPWYM6`,
                                              children: c(W, {
                                                height: `100%`,
                                                id: `NBcRDcdI_`,
                                                layoutId: `NBcRDcdI_`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-1kyvdj7`,
                                              "data-styles-preset": `s3xaUzb1J`,
                                              dir: `auto`,
                                              children: `Walkthrough`,
                                            }),
                                          }),
                                          className: `framer-wjhtuj`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`h2`, {
                                          className: `framer-styles-preset-d3e5g2`,
                                          "data-styles-preset": `OY7GyAvvP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `How Sortia works.`,
                                        }),
                                      }),
                                      className: `framer-1rhcmrd`,
                                      "data-framer-name": `Walkthrough Subtitle`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(y, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1y3tbh`,
                                      "data-styles-preset": `HutzmjBVA`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                      },
                                      children: `Three simple steps to transform your chaotic daily routine into an automated, high-efficiency workflow.`,
                                    }),
                                  }),
                                  className: `framer-1f4xygz`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(K, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1q9o6of`,
                              "data-framer-name": `Productivity Feature Grid`,
                              children: [
                                l(`div`, {
                                  className: `framer-swbgnl`,
                                  "data-framer-name": `How It Works Steps`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-1m6bxc2`,
                                      "data-framer-name": `Workflow Step Card`,
                                      children: [
                                        c(Xe, {
                                          animated: !1,
                                          className: `framer-1ju2rwz`,
                                          JEeZYcamG: !0,
                                          layoutId: `FLGpd3HQO`,
                                          P_DcoRcrY: !0,
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`h3`, {
                                              className: `framer-styles-preset-1pj8wqs`,
                                              "data-styles-preset": `Z7CzuxNJN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `Speak your mind`,
                                            }),
                                          }),
                                          className: `framer-g75d9y`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                              },
                                              children: `Drop a chaotic voice memo or text stream into the capture bar. No formatting required.`,
                                            }),
                                          }),
                                          className: `framer-1ost5aj`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(`div`, {
                                          className: `framer-141q4lg`,
                                          "data-framer-name": `Content Grid`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-9avtbp`,
                                              "data-framer-name": `Icon`,
                                              children: c(C, {
                                                className: `framer-10q8rb4`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1ys16aw`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 180 },
                                              children: c(C, {
                                                className: `framer-vwfkf`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-7vrzxv`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 270 },
                                              children: c(C, {
                                                className: `framer-6gtr2j`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1imkh5s`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 90 },
                                              children: c(C, {
                                                className: `framer-1rgy8ka`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    l(`div`, {
                                      className: `framer-1bnpnbp`,
                                      "data-framer-name": `Workflow Step Card`,
                                      children: [
                                        c(tt, {
                                          animated: !1,
                                          className: `framer-1x07d13`,
                                          JEeZYcamG: !0,
                                          layoutId: `YS5OesDmm`,
                                          P_DcoRcrY: !0,
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`h3`, {
                                              className: `framer-styles-preset-1pj8wqs`,
                                              "data-styles-preset": `Z7CzuxNJN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `Let the AI build it`,
                                            }),
                                          }),
                                          className: `framer-53wten`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                              },
                                              children: `The intelligent engine instantly extracts deadlines, context behind the scenes.`,
                                            }),
                                          }),
                                          className: `framer-10yup9r`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(`div`, {
                                          className: `framer-86af65`,
                                          "data-framer-name": `Content Grid`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-oaw2vx`,
                                              "data-framer-name": `Icon`,
                                              children: c(C, {
                                                className: `framer-1c2kqp3`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.152 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15.152 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1ea9764`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 180 },
                                              children: c(C, {
                                                className: `framer-shkgm8`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.152 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15.152 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-qaa302`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 270 },
                                              children: c(C, {
                                                className: `framer-1kycd56`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15.152" overflow="visible"><path d="M 0 15.152 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1etvvis`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 90 },
                                              children: c(C, {
                                                className: `framer-1tk24tm`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15.152" overflow="visible"><path d="M 0 15.152 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    l(`div`, {
                                      className: `framer-193s4fs`,
                                      "data-framer-name": `Workflow Step Card`,
                                      children: [
                                        c(ut, {
                                          animated: !1,
                                          className: `framer-k7thr6`,
                                          JEeZYcamG: !0,
                                          layoutId: `VHB9XYk6q`,
                                          P_DcoRcrY: !0,
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`h3`, {
                                              className: `framer-styles-preset-1pj8wqs`,
                                              "data-styles-preset": `Z7CzuxNJN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `Focus and execute`,
                                            }),
                                          }),
                                          className: `framer-13r0kw4`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                              },
                                              children: `Your daily calendar blocks instantly adjust, giving you a stress-free timeline.`,
                                            }),
                                          }),
                                          className: `framer-1pjxlp3`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(`div`, {
                                          className: `framer-1fk3yg7`,
                                          "data-framer-name": `Content Grid`,
                                          children: [
                                            c(`div`, {
                                              className: `framer-1afq3vh`,
                                              "data-framer-name": `Icon`,
                                              children: c(C, {
                                                className: `framer-hqe3b7`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1rpoahb`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 180 },
                                              children: c(C, {
                                                className: `framer-1o2et3u`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1woj8lf`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 270 },
                                              children: c(C, {
                                                className: `framer-1pb8r4q`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            c(h.div, {
                                              className: `framer-1fzwzf5`,
                                              "data-framer-name": `Icon`,
                                              style: { rotate: 90 },
                                              children: c(C, {
                                                className: `framer-ahqav8`,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                E() &&
                                  l(`div`, {
                                    className: `framer-15mcsmk hidden-cjwnsp`,
                                    "data-framer-name": `Diagram Connector Cluster`,
                                    children: [
                                      l(`div`, {
                                        className: `framer-avpvb0`,
                                        "data-framer-name": `Diagram Connector Path`,
                                        children: [
                                          c(w, {
                                            children: c(O, {
                                              className: `framer-1lf2dpq-container`,
                                              isAuthoredByUser: !0,
                                              nodeId: `Bm2L4E7pI`,
                                              scopeId: `RBHgPWYM6`,
                                              children: c(V, {
                                                color1: `var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, rgb(62, 179, 109))`,
                                                color2: `var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, rgb(216, 226, 220))`,
                                                dashLength: 20,
                                                direction: `forward`,
                                                height: `100%`,
                                                id: `Bm2L4E7pI`,
                                                isVertical: !1,
                                                layoutId: `Bm2L4E7pI`,
                                                speed: 50,
                                                style: { height: `100%`, width: `100%` },
                                                thickness: 3,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          c(w, {
                                            children: c(O, {
                                              className: `framer-zr9yvw-container`,
                                              isAuthoredByUser: !0,
                                              nodeId: `QVXDUuOgt`,
                                              rendersWithMotion: !0,
                                              scopeId: `RBHgPWYM6`,
                                              style: { rotate: -90 },
                                              children: c(V, {
                                                color1: `var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, rgb(62, 179, 109))`,
                                                color2: `var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, rgb(216, 226, 220))`,
                                                dashLength: 20,
                                                direction: `backward`,
                                                height: `100%`,
                                                id: `QVXDUuOgt`,
                                                isVertical: !1,
                                                layoutId: `QVXDUuOgt`,
                                                speed: 50,
                                                style: { height: `100%`, width: `100%` },
                                                thickness: 3,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          c(w, {
                                            children: c(O, {
                                              className: `framer-16rt68d-container`,
                                              isAuthoredByUser: !0,
                                              nodeId: `zA2qJ7u7v`,
                                              rendersWithMotion: !0,
                                              scopeId: `RBHgPWYM6`,
                                              style: { rotate: -90 },
                                              children: c(V, {
                                                color1: `var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, rgb(62, 179, 109))`,
                                                color2: `var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, rgb(216, 226, 220))`,
                                                dashLength: 20,
                                                direction: `backward`,
                                                height: `100%`,
                                                id: `zA2qJ7u7v`,
                                                isVertical: !1,
                                                layoutId: `zA2qJ7u7v`,
                                                speed: 50,
                                                style: { height: `100%`, width: `100%` },
                                                thickness: 3,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          c(w, {
                                            children: c(O, {
                                              className: `framer-117s03n-container`,
                                              isAuthoredByUser: !0,
                                              nodeId: `A8osh80A5`,
                                              rendersWithMotion: !0,
                                              scopeId: `RBHgPWYM6`,
                                              style: { rotate: -90 },
                                              children: c(V, {
                                                color1: `var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, rgb(62, 179, 109))`,
                                                color2: `var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, rgb(216, 226, 220))`,
                                                dashLength: 20,
                                                direction: `backward`,
                                                height: `100%`,
                                                id: `A8osh80A5`,
                                                isVertical: !1,
                                                layoutId: `A8osh80A5`,
                                                speed: 50,
                                                style: { height: `100%`, width: `100%` },
                                                thickness: 3,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      c(`div`, {
                                        className: `framer-1gexq2b`,
                                        "data-framer-name": `Diagram Connector Node B`,
                                        children: c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`h4`, {
                                              className: `framer-styles-preset-1t48bm3`,
                                              "data-styles-preset": `n6gn2zrFO`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `1`,
                                            }),
                                          }),
                                          className: `framer-t16t6p`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      c(`div`, {
                                        className: `framer-1yotpiu`,
                                        "data-framer-name": `Diagram Connector Node B`,
                                        children: c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`h4`, {
                                              className: `framer-styles-preset-1t48bm3`,
                                              "data-styles-preset": `n6gn2zrFO`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `3`,
                                            }),
                                          }),
                                          className: `framer-zsi603`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      c(`div`, {
                                        className: `framer-p0r0nw`,
                                        "data-framer-name": `Diagram Connector Node B`,
                                        children: c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`h4`, {
                                              className: `framer-styles-preset-1t48bm3`,
                                              "data-styles-preset": `n6gn2zrFO`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `2`,
                                            }),
                                          }),
                                          className: `framer-1xyqrg8`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                E() &&
                                  l(`div`, {
                                    className: `framer-1ea69mr hidden-cjwnsp`,
                                    "data-framer-name": `Diagram Marker Cluster`,
                                    children: [
                                      c(v, {
                                        breakpoint: g,
                                        overrides: { ZRCGSeloK: { style: { scale: 0.9 } } },
                                        children: l(h.div, {
                                          className: `framer-o5vnzg`,
                                          "data-framer-name": `Diagram Marker Item`,
                                          children: [
                                            c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                ZRCGSeloK: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1165.3333333333333,
                                                    intrinsicWidth: 576,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        60 +
                                                        3789.4 +
                                                        0 +
                                                        272.2 +
                                                        0 +
                                                        348 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 1748,
                                                    pixelWidth: 864,
                                                    sizes: `258px`,
                                                    src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                    srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                  },
                                                },
                                              },
                                              children: c(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      3715.4 +
                                                      0 +
                                                      272.2 +
                                                      0 +
                                                      348 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                                className: `framer-uvkjho`,
                                                "data-framer-name": `Midnight`,
                                              }),
                                            }),
                                            c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                ZRCGSeloK: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1125.3333333333333,
                                                    intrinsicWidth: 520,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        60 +
                                                        3789.4 +
                                                        0 +
                                                        272.2 +
                                                        0 +
                                                        348 +
                                                        0 +
                                                        11
                                                    ),
                                                    pixelHeight: 1688,
                                                    pixelWidth: 780,
                                                    sizes: `231px`,
                                                    src: `../../assets/images/1LiAF0Cwilxerk9zLmc6QBIB2o8.png`,
                                                    srcSet: `../../assets/images/1LiAF0Cwilxerk9zLmc6QBIB2o8.png 780w`,
                                                  },
                                                },
                                              },
                                              children: c(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1125.3333333333333,
                                                  intrinsicWidth: 520,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      3715.4 +
                                                      0 +
                                                      272.2 +
                                                      0 +
                                                      348 +
                                                      0 +
                                                      11
                                                  ),
                                                  pixelHeight: 1688,
                                                  pixelWidth: 780,
                                                  sizes: `231px`,
                                                  src: `../../assets/images/1LiAF0Cwilxerk9zLmc6QBIB2o8.png`,
                                                  srcSet: `../../assets/images/1LiAF0Cwilxerk9zLmc6QBIB2o8.png 780w`,
                                                },
                                                className: `framer-y2lsj8`,
                                                "data-framer-name": `Phone background 00402`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      c(v, {
                                        breakpoint: g,
                                        overrides: { ZRCGSeloK: { style: { scale: 0.9 } } },
                                        children: l(h.div, {
                                          className: `framer-c9lg5p`,
                                          "data-framer-name": `Diagram Marker Item`,
                                          children: [
                                            c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                ZRCGSeloK: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1165.3333333333333,
                                                    intrinsicWidth: 576,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        60 +
                                                        3789.4 +
                                                        0 +
                                                        272.2 +
                                                        0 +
                                                        348 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 1748,
                                                    pixelWidth: 864,
                                                    sizes: `258px`,
                                                    src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                    srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                  },
                                                },
                                              },
                                              children: c(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      3715.4 +
                                                      0 +
                                                      272.2 +
                                                      0 +
                                                      348 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                                className: `framer-zoix30`,
                                                "data-framer-name": `Midnight`,
                                              }),
                                            }),
                                            c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                ZRCGSeloK: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1119.3333333333333,
                                                    intrinsicWidth: 520,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        60 +
                                                        3789.4 +
                                                        0 +
                                                        272.2 +
                                                        0 +
                                                        348 +
                                                        0 +
                                                        11
                                                    ),
                                                    pixelHeight: 1679,
                                                    pixelWidth: 780,
                                                    sizes: `232px`,
                                                    src: `../../assets/images/Z5cDZlyRaOfWcd92jlYfPHKGGo-25b1c1.png`,
                                                  },
                                                },
                                              },
                                              children: c(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1119.3333333333333,
                                                  intrinsicWidth: 520,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      3715.4 +
                                                      0 +
                                                      272.2 +
                                                      0 +
                                                      348 +
                                                      0 +
                                                      11
                                                  ),
                                                  pixelHeight: 1679,
                                                  pixelWidth: 780,
                                                  sizes: `232px`,
                                                  src: `../../assets/images/Z5cDZlyRaOfWcd92jlYfPHKGGo-25b1c1.png`,
                                                },
                                                className: `framer-1mam6ax`,
                                                "data-framer-name": `Calendar`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      c(v, {
                                        breakpoint: g,
                                        overrides: { ZRCGSeloK: { style: { scale: 0.9 } } },
                                        children: l(h.div, {
                                          className: `framer-1rhapku`,
                                          "data-framer-name": `Diagram Marker Item`,
                                          children: [
                                            c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                ZRCGSeloK: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1165.3333333333333,
                                                    intrinsicWidth: 576,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        60 +
                                                        3789.4 +
                                                        0 +
                                                        272.2 +
                                                        0 +
                                                        348 +
                                                        0 +
                                                        0
                                                    ),
                                                    pixelHeight: 1748,
                                                    pixelWidth: 864,
                                                    sizes: `258px`,
                                                    src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                    srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                  },
                                                },
                                              },
                                              children: c(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      3715.4 +
                                                      0 +
                                                      272.2 +
                                                      0 +
                                                      348 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                                className: `framer-lge2qs`,
                                                "data-framer-name": `Midnight`,
                                              }),
                                            }),
                                            c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                ZRCGSeloK: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    intrinsicHeight: 1125.3333333333333,
                                                    intrinsicWidth: 520,
                                                    loading: S(
                                                      (u?.y || 0) +
                                                        0 +
                                                        0 +
                                                        60 +
                                                        3789.4 +
                                                        0 +
                                                        272.2 +
                                                        0 +
                                                        348 +
                                                        0 +
                                                        11
                                                    ),
                                                    pixelHeight: 1688,
                                                    pixelWidth: 780,
                                                    sizes: `231px`,
                                                    src: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png`,
                                                    srcSet: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png 780w`,
                                                  },
                                                },
                                              },
                                              children: c(T, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1125.3333333333333,
                                                  intrinsicWidth: 520,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      0 +
                                                      60 +
                                                      3715.4 +
                                                      0 +
                                                      272.2 +
                                                      0 +
                                                      348 +
                                                      0 +
                                                      11
                                                  ),
                                                  pixelHeight: 1688,
                                                  pixelWidth: 780,
                                                  sizes: `231px`,
                                                  src: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png`,
                                                  srcSet: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png 780w`,
                                                },
                                                className: `framer-3ki63b`,
                                                "data-framer-name": `14`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-3p5ib`,
                          "data-framer-name": `Testimonials Section`,
                          id: Pe,
                          ref: Fe,
                          children: [
                            l(K, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-oooi8y`,
                              "data-framer-name": `Testimonials Intro`,
                              children: [
                                l(`div`, {
                                  className: `framer-1b8di3k`,
                                  "data-framer-name": `Testimonials Intro Panel`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-1gp3pbk`,
                                      "data-border": !0,
                                      "data-framer-name": `Testimonials Eyebrow`,
                                      children: [
                                        c(v, {
                                          breakpoint: g,
                                          overrides: {
                                            DdetQ92tH: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                6768.6 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                            ZRCGSeloK: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                5011.6 +
                                                40 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                          },
                                          children: c(w, {
                                            height: 15,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              60 +
                                              4937.6 +
                                              40 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              9.1,
                                            children: c(O, {
                                              className: `framer-xhh49g-container`,
                                              nodeId: `h9uHOJbcJ`,
                                              scopeId: `RBHgPWYM6`,
                                              children: c(W, {
                                                height: `100%`,
                                                id: `h9uHOJbcJ`,
                                                layoutId: `h9uHOJbcJ`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-1kyvdj7`,
                                              "data-styles-preset": `s3xaUzb1J`,
                                              dir: `auto`,
                                              children: `Testimonials`,
                                            }),
                                          }),
                                          className: `framer-1ce9cct`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`h2`, {
                                          className: `framer-styles-preset-d3e5g2`,
                                          "data-styles-preset": `OY7GyAvvP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `What our users are saying.`,
                                        }),
                                      }),
                                      className: `framer-7szz7j`,
                                      "data-framer-name": `Testimonials Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(y, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1y3tbh`,
                                      "data-styles-preset": `HutzmjBVA`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                      },
                                      children: `Join thousands of professionals, founders, and creators who traded calendar anxiety for structured, effortless productivity.`,
                                    }),
                                  }),
                                  className: `framer-3x91pv`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            c(v, {
                              breakpoint: g,
                              overrides: { DdetQ92tH: { tickerEffectGap: `16px` } },
                              children: l(en, {
                                __framer__animate: { transition: Q },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-d9o5nf`,
                                "data-framer-name": `Testimonials Cards Track`,
                                tickerEffectAlign: `center`,
                                tickerEffectDirectionModifier: `default`,
                                tickerEffectDraggable: !0,
                                tickerEffectEnabled: !0,
                                tickerEffectGap: `20px`,
                                tickerEffectHoverModifier: 100,
                                tickerEffectOverflow: `visible`,
                                tickerEffectPosition: `relative`,
                                tickerEffectStackDirection: `row`,
                                tickerEffectVelocity: 50,
                                children: [
                                  c(D, {
                                    children: c(v, {
                                      breakpoint: g,
                                      overrides: {
                                        DdetQ92tH: {
                                          y: (u?.y || 0) + 0 + 0 + 60 + 6768.6 + 0 + 244.2 + 0,
                                        },
                                        ZRCGSeloK: {
                                          y: (u?.y || 0) + 0 + 0 + 60 + 5011.6 + 40 + 272.2 + 13,
                                        },
                                      },
                                      children: c(w, {
                                        height: 223,
                                        y: (u?.y || 0) + 0 + 0 + 60 + 4937.6 + 40 + 272.2 + 13,
                                        children: c(O, {
                                          className: `framer-8m0f1t-container`,
                                          nodeId: `sRYS4OfCN`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: { DdetQ92tH: { variant: J(`urJeDfyCA`) } },
                                            children: c(L, {
                                              height: `100%`,
                                              id: `sRYS4OfCN`,
                                              KNcKrFM4V: `"The ultimate antidote to calendar anxiety. It completely automates my chaotic morning routine."`,
                                              layoutId: `sRYS4OfCN`,
                                              mNG1qi3vv: `Robert M.`,
                                              variant: J(`v_XjDvmsr`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(D, {
                                    children: c(v, {
                                      breakpoint: g,
                                      overrides: {
                                        DdetQ92tH: {
                                          y: (u?.y || 0) + 0 + 0 + 60 + 6768.6 + 0 + 244.2 + 0,
                                        },
                                        ZRCGSeloK: {
                                          y: (u?.y || 0) + 0 + 0 + 60 + 5011.6 + 40 + 272.2 + 13,
                                        },
                                      },
                                      children: c(w, {
                                        height: 223,
                                        y: (u?.y || 0) + 0 + 0 + 60 + 4937.6 + 40 + 272.2 + 13,
                                        children: c(O, {
                                          className: `framer-4uiomu-container`,
                                          nodeId: `LumHRs5Fm`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: { DdetQ92tH: { variant: J(`qGZiozZQq`) } },
                                            children: c(L, {
                                              height: `100%`,
                                              id: `LumHRs5Fm`,
                                              KNcKrFM4V: `"When meetings run late, the auto-rescheduling engine smoothly shifts my entire afternoon."`,
                                              layoutId: `LumHRs5Fm`,
                                              mNG1qi3vv: `Oscar T.`,
                                              variant: J(`YrTxz6aew`),
                                              width: `100%`,
                                              ZuRhdY3pj: X(
                                                {
                                                  pixelHeight: 3178,
                                                  pixelWidth: 3178,
                                                  src: `../../assets/images/2jfGwg9j23wnTy8hryN5C9OGR84-f75290.jpg`,
                                                  srcSet: `../../assets/images/2jfGwg9j23wnTy8hryN5C9OGR84.jpg 512w,../../assets/images/2jfGwg9j23wnTy8hryN5C9OGR84-61cb68.jpg 1024w,../../assets/images/2jfGwg9j23wnTy8hryN5C9OGR84-0ef9d2.jpg 2048w,../../assets/images/2jfGwg9j23wnTy8hryN5C9OGR84-f75290.jpg 3178w`,
                                                },
                                                ``
                                              ),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(D, {
                                    children: c(v, {
                                      breakpoint: g,
                                      overrides: {
                                        DdetQ92tH: {
                                          y: (u?.y || 0) + 0 + 0 + 60 + 6768.6 + 0 + 244.2 + 0,
                                        },
                                        ZRCGSeloK: {
                                          y: (u?.y || 0) + 0 + 0 + 60 + 5011.6 + 40 + 272.2 + 13,
                                        },
                                      },
                                      children: c(w, {
                                        height: 223,
                                        y: (u?.y || 0) + 0 + 0 + 60 + 4937.6 + 40 + 272.2 + 13,
                                        children: c(O, {
                                          className: `framer-2hlb4e-container`,
                                          nodeId: `MyIm9yPjf`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: { DdetQ92tH: { variant: J(`urJeDfyCA`) } },
                                            children: c(L, {
                                              height: `100%`,
                                              id: `MyIm9yPjf`,
                                              KNcKrFM4V: `"It actively protects my deep work blocks and stops people from double-booking my time."`,
                                              layoutId: `MyIm9yPjf`,
                                              mNG1qi3vv: `David L.`,
                                              variant: J(`v_XjDvmsr`),
                                              width: `100%`,
                                              ZuRhdY3pj: X(
                                                {
                                                  pixelHeight: 4783,
                                                  pixelWidth: 3189,
                                                  src: `../../assets/images/yoFnAzXvR44SJlnm63I1X7baKeg-6fe796.jpg`,
                                                  srcSet: `../../assets/images/yoFnAzXvR44SJlnm63I1X7baKeg.jpg 682w,../../assets/images/yoFnAzXvR44SJlnm63I1X7baKeg-65b0f2.jpg 1365w,../../assets/images/yoFnAzXvR44SJlnm63I1X7baKeg-776a98.jpg 2730w,../../assets/images/yoFnAzXvR44SJlnm63I1X7baKeg-6fe796.jpg 3189w`,
                                                },
                                                ``
                                              ),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(D, {
                                    children: c(v, {
                                      breakpoint: g,
                                      overrides: {
                                        DdetQ92tH: {
                                          y: (u?.y || 0) + 0 + 0 + 60 + 6768.6 + 0 + 244.2 + 0,
                                        },
                                        ZRCGSeloK: {
                                          y: (u?.y || 0) + 0 + 0 + 60 + 5011.6 + 40 + 272.2 + 13,
                                        },
                                      },
                                      children: c(w, {
                                        height: 223,
                                        y: (u?.y || 0) + 0 + 0 + 60 + 4937.6 + 40 + 272.2 + 13,
                                        children: c(O, {
                                          className: `framer-1tjteyb-container`,
                                          nodeId: `S81J5QB7c`,
                                          scopeId: `RBHgPWYM6`,
                                          children: c(v, {
                                            breakpoint: g,
                                            overrides: { DdetQ92tH: { variant: J(`qGZiozZQq`) } },
                                            children: c(L, {
                                              height: `100%`,
                                              id: `S81J5QB7c`,
                                              KNcKrFM4V: `"Cuts through the noise and flags my top three high-impact tasks instantly."`,
                                              layoutId: `S81J5QB7c`,
                                              mNG1qi3vv: `Brandon J.`,
                                              variant: J(`YrTxz6aew`),
                                              width: `100%`,
                                              ZuRhdY3pj: X(
                                                {
                                                  pixelHeight: 2912,
                                                  pixelWidth: 5168,
                                                  src: `../../assets/images/FDzmYdbDjyfVxTSj3JIbvdyJ4-37c427.jpg`,
                                                  srcSet: `../../assets/images/FDzmYdbDjyfVxTSj3JIbvdyJ4.jpg 512w,../../assets/images/FDzmYdbDjyfVxTSj3JIbvdyJ4-1b2d4f.jpg 1024w,../../assets/images/FDzmYdbDjyfVxTSj3JIbvdyJ4-83786f.jpg 2048w,../../assets/images/FDzmYdbDjyfVxTSj3JIbvdyJ4-295e99.jpg 4096w,../../assets/images/FDzmYdbDjyfVxTSj3JIbvdyJ4-37c427.jpg 5168w`,
                                                },
                                                ``
                                              ),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        l(K, {
                          __framer__animate: { transition: Q },
                          __framer__animateOnce: !0,
                          __framer__enter: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-114b0gb`,
                          "data-framer-name": `FAQ Section`,
                          children: [
                            l(`div`, {
                              className: `framer-buwnbm`,
                              "data-framer-name": `FAQ Intro`,
                              children: [
                                l(`div`, {
                                  className: `framer-1u1moqh`,
                                  "data-framer-name": `FAQ Heading`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-11213kv`,
                                      "data-framer-name": `FAQ Badge`,
                                      children: [
                                        l(`div`, {
                                          className: `framer-1v87rlb`,
                                          "data-border": !0,
                                          "data-framer-name": `FAQ Badge Shell`,
                                          children: [
                                            c(v, {
                                              breakpoint: g,
                                              overrides: {
                                                DdetQ92tH: {
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    60 +
                                                    7315.8 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    9.1,
                                                },
                                                ZRCGSeloK: {
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    60 +
                                                    5692.8 +
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
                                              children: c(w, {
                                                height: 15,
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  60 +
                                                  5618.8 +
                                                  74.5 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  9.1,
                                                children: c(O, {
                                                  className: `framer-1nu8k08-container`,
                                                  nodeId: `DnFzjotli`,
                                                  scopeId: `RBHgPWYM6`,
                                                  children: c(W, {
                                                    height: `100%`,
                                                    id: `DnFzjotli`,
                                                    layoutId: `DnFzjotli`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            c(y, {
                                              __fromCanvasComponent: !0,
                                              children: c(o, {
                                                children: c(`p`, {
                                                  className: `framer-styles-preset-1kyvdj7`,
                                                  "data-styles-preset": `s3xaUzb1J`,
                                                  dir: `auto`,
                                                  children: `FAQs`,
                                                }),
                                              }),
                                              className: `framer-b4c19o`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        c(y, {
                                          __fromCanvasComponent: !0,
                                          children: c(o, {
                                            children: c(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                              },
                                              children: `Got questions? We have answers.`,
                                            }),
                                          }),
                                          className: `framer-pqigu2`,
                                          "data-framer-name": `FAQ Badge Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-1y3tbh`,
                                          "data-styles-preset": `HutzmjBVA`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                          },
                                          children: `Everything you need to know about how Sortia automates your schedule.`,
                                        }),
                                      }),
                                      className: `framer-zlubjn`,
                                      "data-framer-name": `FAQ Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                l(`div`, {
                                  className: `framer-1clgtgq`,
                                  "data-framer-name": `FAQ Support CTA`,
                                  children: [
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`h3`, {
                                          className: `framer-styles-preset-1pj8wqs`,
                                          "data-styles-preset": `Z7CzuxNJN`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                          },
                                          children: `Still have more questions?`,
                                        }),
                                      }),
                                      className: `framer-yqhx9d`,
                                      "data-framer-name": `Support CTA Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    c(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-1y3tbh`,
                                          "data-styles-preset": `HutzmjBVA`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                          },
                                          children: `Can’t find the answer you’re looking for? Chat with our support team or drop us a line anytime.`,
                                        }),
                                      }),
                                      className: `framer-t8zx78`,
                                      "data-framer-name": `Support CTA Copy`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    c(b, {
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
                                        c(v, {
                                          breakpoint: g,
                                          overrides: {
                                            DdetQ92tH: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                7315.8 +
                                                0 +
                                                0 +
                                                0 +
                                                214 +
                                                28 +
                                                170,
                                            },
                                            ZRCGSeloK: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                60 +
                                                5692.8 +
                                                40 +
                                                0 +
                                                0 +
                                                173 +
                                                55 +
                                                115.5,
                                            },
                                          },
                                          children: c(w, {
                                            height: 44,
                                            width: `188px`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              60 +
                                              5618.8 +
                                              74.5 +
                                              0 +
                                              274 +
                                              55 +
                                              113,
                                            children: c(O, {
                                              className: `framer-tyqydi-container`,
                                              "data-framer-name": `CTA Button`,
                                              name: `CTA Button`,
                                              nodeId: `WWxMn38vc`,
                                              scopeId: `RBHgPWYM6`,
                                              children: c(v, {
                                                breakpoint: g,
                                                overrides: {
                                                  DdetQ92tH: { TWaZPhsrs: e[1] },
                                                  ZRCGSeloK: { TWaZPhsrs: e[2] },
                                                },
                                                children: c(P, {
                                                  bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                  dMzFGkb3u: !1,
                                                  dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                  F9tZ22mws: {
                                                    borderColor: `rgba(26, 26, 26, 0)`,
                                                    borderStyle: `solid`,
                                                    borderWidth: 2,
                                                  },
                                                  height: `100%`,
                                                  id: `WWxMn38vc`,
                                                  jfeAUucDj: N,
                                                  layoutId: `WWxMn38vc`,
                                                  lnJBzRgIM: `Get in Touch`,
                                                  MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                  name: `CTA Button`,
                                                  ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                  SLp3DWZqR: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  TWaZPhsrs: e[0],
                                                  variant: J(`nhzWZDlVc`),
                                                  vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                  wDmZ1dhUo: Ee,
                                                  width: `100%`,
                                                  ZEAGlJD1F: {
                                                    borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                    borderStyle: `solid`,
                                                    borderWidth: 2,
                                                  },
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    l(`div`, {
                                      className: `framer-9dvc9h`,
                                      "data-framer-name": `FAQ Item Details`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-1jt484m`,
                                          "data-framer-name": `Icon`,
                                          children: c(C, {
                                            className: `framer-gm3kcu`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-1cejzki`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: c(C, {
                                            className: `framer-8en50q`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-wsgn6x`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: c(C, {
                                            className: `framer-rkmejy`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        c(h.div, {
                                          className: `framer-1syo8cl`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: c(C, {
                                            className: `framer-u2417p`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-eauyxq`,
                              "data-framer-name": `FAQ Items Grid`,
                              children: [
                                c(v, {
                                  breakpoint: g,
                                  overrides: {
                                    DdetQ92tH: {
                                      width: `calc(${u?.width || `100vw`} - 30px)`,
                                      y: (u?.y || 0) + 0 + 0 + 60 + 7315.8 + 0 + 512 + 6 + 0,
                                    },
                                    ZRCGSeloK: {
                                      width: `calc(${u?.width || `100vw`} - 80px)`,
                                      y: (u?.y || 0) + 0 + 0 + 60 + 5692.8 + 40 + 423 + 0 + 0,
                                    },
                                  },
                                  children: c(w, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (u?.y || 0) + 0 + 0 + 60 + 5618.8 + 40 + 0 + 0,
                                    children: c(O, {
                                      className: `framer-wldzt1-container`,
                                      "data-framer-name": `Auto Reschedule FAQ`,
                                      name: `Auto Reschedule FAQ`,
                                      nodeId: `lV0ePFUqP`,
                                      scopeId: `RBHgPWYM6`,
                                      children: c(U, {
                                        CYcMeDYwX: `If a calendar event runs late, Sortia's predictive engine instantly shifts your remaining tasks to the next available slot automatically.`,
                                        height: `100%`,
                                        id: `lV0ePFUqP`,
                                        layoutId: `lV0ePFUqP`,
                                        name: `Auto Reschedule FAQ`,
                                        style: { width: `100%` },
                                        variant: J(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `How does the AI auto-reschedule my day?`,
                                      }),
                                    }),
                                  }),
                                }),
                                c(v, {
                                  breakpoint: g,
                                  overrides: {
                                    DdetQ92tH: {
                                      width: `calc(${u?.width || `100vw`} - 30px)`,
                                      y: (u?.y || 0) + 0 + 0 + 60 + 7315.8 + 0 + 512 + 6 + 141,
                                    },
                                    ZRCGSeloK: {
                                      width: `calc(${u?.width || `100vw`} - 80px)`,
                                      y: (u?.y || 0) + 0 + 0 + 60 + 5692.8 + 40 + 423 + 0 + 141,
                                    },
                                  },
                                  children: c(w, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (u?.y || 0) + 0 + 0 + 60 + 5618.8 + 40 + 0 + 141,
                                    children: c(O, {
                                      className: `framer-nep09j-container`,
                                      "data-framer-name": `Calendar Sync FAQ`,
                                      name: `Calendar Sync FAQ`,
                                      nodeId: `wDaTQdXUm`,
                                      scopeId: `RBHgPWYM6`,
                                      children: c(U, {
                                        CYcMeDYwX: `We feature full, real-time two-way synchronization with Google Calendar, Apple Calendar, and Outlook to completely prevent double-booking.`,
                                        height: `100%`,
                                        id: `wDaTQdXUm`,
                                        layoutId: `wDaTQdXUm`,
                                        name: `Calendar Sync FAQ`,
                                        style: { width: `100%` },
                                        variant: J(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Which calendars does Sortia sync with?`,
                                      }),
                                    }),
                                  }),
                                }),
                                c(v, {
                                  breakpoint: g,
                                  overrides: {
                                    DdetQ92tH: {
                                      width: `calc(${u?.width || `100vw`} - 30px)`,
                                      y: (u?.y || 0) + 0 + 0 + 60 + 7315.8 + 0 + 512 + 6 + 282,
                                    },
                                    ZRCGSeloK: {
                                      width: `calc(${u?.width || `100vw`} - 80px)`,
                                      y: (u?.y || 0) + 0 + 0 + 60 + 5692.8 + 40 + 423 + 0 + 282,
                                    },
                                  },
                                  children: c(w, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (u?.y || 0) + 0 + 0 + 60 + 5618.8 + 40 + 0 + 282,
                                    children: c(O, {
                                      className: `framer-z25urn-container`,
                                      "data-framer-name": `Voice Notes FAQ`,
                                      name: `Voice Notes FAQ`,
                                      nodeId: `QrmCQ05yb`,
                                      scopeId: `RBHgPWYM6`,
                                      children: c(U, {
                                        CYcMeDYwX: `Not at all. Speak entirely naturally into the capture bar; our advanced NLP automatically extracts deadlines, context, and action items.`,
                                        height: `100%`,
                                        id: `QrmCQ05yb`,
                                        layoutId: `QrmCQ05yb`,
                                        name: `Voice Notes FAQ`,
                                        style: { width: `100%` },
                                        variant: J(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Do I have to format my voice notes?`,
                                      }),
                                    }),
                                  }),
                                }),
                                c(v, {
                                  breakpoint: g,
                                  overrides: {
                                    DdetQ92tH: {
                                      width: `calc(${u?.width || `100vw`} - 30px)`,
                                      y: (u?.y || 0) + 0 + 0 + 60 + 7315.8 + 0 + 512 + 6 + 423,
                                    },
                                    ZRCGSeloK: {
                                      width: `calc(${u?.width || `100vw`} - 80px)`,
                                      y: (u?.y || 0) + 0 + 0 + 60 + 5692.8 + 40 + 423 + 0 + 423,
                                    },
                                  },
                                  children: c(w, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (u?.y || 0) + 0 + 0 + 60 + 5618.8 + 40 + 0 + 423,
                                    children: c(O, {
                                      className: `framer-n8zx04-container`,
                                      "data-framer-name": `Data Safety FAQ`,
                                      name: `Data Safety FAQ`,
                                      nodeId: `GVD8m2js6`,
                                      scopeId: `RBHgPWYM6`,
                                      children: c(U, {
                                        CYcMeDYwX: `Absolutely. We use industry-standard, end-to-end encryption to read your schedule, and your personal data is never sold or shared.`,
                                        height: `100%`,
                                        id: `GVD8m2js6`,
                                        layoutId: `GVD8m2js6`,
                                        name: `Data Safety FAQ`,
                                        style: { width: `100%` },
                                        variant: J(`BJlTLC2oV`),
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
                        c(`div`, {
                          className: `framer-g7vr8d`,
                          "data-framer-name": `Third Trigger`,
                          id: Le,
                          ref: Re,
                        }),
                      ],
                    }),
                    l(h.div, {
                      className: `framer-ko90f9`,
                      "data-framer-name": `Sticky Navbar`,
                      layout: ue,
                      transformTemplate: Y,
                      children: [
                        E() &&
                          c(w, {
                            height: 54,
                            y: 10,
                            children: c(q, {
                              __framer__animate: { transition: _n },
                              __framer__animateOnce: !1,
                              __framer__scrollDirection: { direction: `down`, target: vn },
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-bts1jd-container hidden-cjwnsp`,
                              "data-framer-name": `Sticky Navbar`,
                              name: `Sticky Navbar`,
                              nodeId: `nIdxQiInw`,
                              rendersWithMotion: !0,
                              scopeId: `RBHgPWYM6`,
                              children: c(v, {
                                breakpoint: g,
                                overrides: {
                                  ZRCGSeloK: {
                                    __framer__targets: [
                                      { ref: k, target: `UPV_bV1mg` },
                                      { ref: M, target: `Me_b_qMaM` },
                                    ],
                                    variant: J(`s2C12m7th`),
                                  },
                                },
                                children: c(rn, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [
                                    { ref: k, target: `rW9FSF2qY` },
                                    { ref: M, target: `raqMsV85o` },
                                    { ref: Re, target: `rW9FSF2qY` },
                                  ],
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `nIdxQiInw`,
                                  layoutId: `nIdxQiInw`,
                                  name: `Sticky Navbar`,
                                  variant: J(`HMXabXHGE`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ze() &&
                          c(v, {
                            breakpoint: g,
                            overrides: {
                              DdetQ92tH: { height: 60, width: `max(100vw, 1px)`, y: 0 },
                            },
                            children: c(w, {
                              children: c(O, {
                                className: `framer-1hnwi91-container hidden-1mz1wdt hidden-11li0ga`,
                                nodeId: `mVSM9qHcX`,
                                rendersWithMotion: !0,
                                scopeId: `RBHgPWYM6`,
                                children: c(on, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [{ ref: k, target: `oqXNvb_1y` }],
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `mVSM9qHcX`,
                                  layoutId: `mVSM9qHcX`,
                                  style: { width: `100%` },
                                  variant: J(`LKPxHVCpA`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-l35Bd.framer-bkwo62, .framer-l35Bd .framer-bkwo62 { display: block; }`,
        `.framer-l35Bd.framer-1mz1wdt { align-content: center; align-items: center; background-color: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, #f2f7f4); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-s6ehxc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px 0px 0px 0px; position: relative; width: 100%; z-index: 6; }`,
        `.framer-l35Bd .framer-zbbipb-container { flex: none; height: 735px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-l35Bd .framer-19uxjoz { flex: none; height: 683px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-1nw1yru { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 661px; justify-content: flex-start; left: calc(50.00000000000002% - 1200px / 2); overflow: visible; padding: 0px 0px 80px 80px; position: absolute; top: calc(49.92679355783311% - 661px / 2); width: 1200px; }`,
        `.framer-l35Bd .framer-1ybgvit { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 514px; }`,
        `.framer-l35Bd .framer-1o7utja { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 514px; }`,
        `.framer-l35Bd .framer-1d30u86, .framer-l35Bd .framer-19hl06m { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-143h0xv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-3jl5ff-container, .framer-l35Bd .framer-1vtodb8-container, .framer-l35Bd .framer-1hnwi91-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-l35Bd .framer-hafah { border-bottom-left-radius: 37px; border-bottom-right-radius: 37px; border-top-left-radius: 37px; border-top-right-radius: 37px; flex: 1 0 0px; height: 508px; image-rendering: pixelated; overflow: visible; position: relative; width: 1px; z-index: 1; }`,
        `.framer-l35Bd .framer-1qer9d1-container { flex: none; height: auto; position: absolute; right: 151px; top: 53%; transform: translateY(-50%); width: auto; }`,
        `.framer-l35Bd .framer-34cog8-container { flex: none; height: auto; position: absolute; right: 15px; top: 50%; transform: translateY(-50%); width: auto; }`,
        `.framer-l35Bd .framer-1t7z1df { height: 538px; overflow: visible; position: relative; width: 566px; }`,
        `.framer-l35Bd .framer-1xhdtnu { -webkit-backdrop-filter: blur(5px); align-content: center; align-items: center; backdrop-filter: blur(5px); bottom: 359px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: flex-start; left: 9px; overflow: visible; padding: 12px; position: absolute; top: 88px; width: 161px; }`,
        `.framer-l35Bd .framer-tmhbkf { align-content: center; align-items: center; background: radial-gradient(143.32757921437192% 143.32757921437192% at 95.32306636450757% 89.34431172064005%, var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, #3eb36d) 0%, var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; bottom: -10px; box-shadow: inset 3px 3px 8px 0px rgba(255, 255, 255, 0.71), inset -1px -1px 8px 0px rgba(0, 0, 0, 0.25), 9px 8px 7px 0px rgba(0, 0, 0, 0.14); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 102px; justify-content: center; opacity: 0.55; overflow: visible; padding: 0px; position: absolute; right: -1px; width: 100%; z-index: 0; }`,
        `.framer-l35Bd .framer-8g9lsx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-l35Bd .framer-1b38kt2, .framer-l35Bd .framer-7xh3s, .framer-l35Bd .framer-qqc9e0, .framer-l35Bd .framer-1nwlgn3, .framer-l35Bd .framer-7hhlu, .framer-l35Bd .framer-wjhtuj, .framer-l35Bd .framer-1ce9cct, .framer-l35Bd .framer-b4c19o { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-l35Bd .framer-u0hey8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); overflow: visible; position: relative; width: 21px; }`,
        `.framer-l35Bd .framer-r1yd2t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 21px; height: 50px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 130px; }`,
        `.framer-l35Bd .framer-1pgw2rw { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: 53px; position: relative; white-space: pre-wrap; width: 31px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-3av0b8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 62px; }`,
        `.framer-l35Bd .framer-56xhjb { align-content: center; align-items: center; background-color: var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e); border-bottom-left-radius: 136px; border-bottom-right-radius: 136px; border-top-left-radius: 136px; border-top-right-radius: 136px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 8px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 62px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-l35Bd .framer-55j0kn { background-color: var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, #b9d19e); border-bottom-left-radius: 104px; border-bottom-right-radius: 104px; border-top-left-radius: 104px; border-top-right-radius: 104px; flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 46px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-l35Bd .framer-73xhf7 { flex: none; height: 160px; left: calc(81.09540636042405% - 26.148409893992934% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 405px; width: 26%; }`,
        `.framer-l35Bd .framer-1lj72my { align-content: center; align-items: center; background: radial-gradient(143.32757921437192% 143.32757921437192% at 95.32306636450757% 89.34431172064005%, var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, #3eb36d) 0%, var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: inset 3px 3px 8px 0px rgba(255, 255, 255, 0.71), inset -1px -1px 8px 0px rgba(0, 0, 0, 0.25), 8px 8px 7px 0px rgba(0, 0, 0, 0.05); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 81%; justify-content: center; left: calc(50.00000000000002% - 62.16216216216216% / 2); opacity: 0.55; overflow: visible; padding: 0px; position: absolute; top: calc(50.00000000000002% - 81.25% / 2); width: 62%; z-index: 0; }`,
        `.framer-l35Bd .framer-utr9yb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 105px; justify-content: center; left: calc(50.00000000000002% - 67px / 2); overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: calc(50.00000000000002% - 105px / 2); width: 67px; z-index: 1; }`,
        `.framer-l35Bd .framer-1w0vh5h { flex: none; height: 65px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 1px; z-index: 1; }`,
        `.framer-l35Bd .framer-wh5afw { height: 65px; left: 2px; position: absolute; top: 1px; width: 65px; }`,
        `.framer-l35Bd .framer-10vypm8, .framer-l35Bd .framer-1c02q8g, .framer-l35Bd .framer-blqn5w, .framer-l35Bd .framer-5xrv5 { height: 65px; left: 0px; position: absolute; top: 0px; width: 65px; }`,
        `.framer-l35Bd .framer-1iqr2py { height: 57px; left: 4px; position: absolute; top: 4px; width: 57px; }`,
        `.framer-l35Bd .framer-1idkui3 { height: 54px; left: -20px; position: absolute; top: -21px; width: 53px; }`,
        `.framer-l35Bd .framer-xoid1z { height: 5px; left: 0px; position: absolute; top: 30px; width: 4px; }`,
        `.framer-l35Bd .framer-rxse16 { height: 4px; left: 30px; position: absolute; top: 0px; width: 5px; }`,
        `.framer-l35Bd .framer-14x7g3s { height: 66px; left: 1px; position: absolute; top: 1px; width: 66px; }`,
        `.framer-l35Bd .framer-rcbkoz { height: 66px; left: 0px; position: absolute; top: 0px; width: 66px; }`,
        `.framer-l35Bd .framer-9t8ux5 { height: 58px; left: 4px; position: absolute; top: 4px; width: 58px; }`,
        `.framer-l35Bd .framer-yxmbd1 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: auto; left: 19px; position: absolute; top: 9px; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-l35Bd .framer-18j3pi8 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; bottom: 7px; flex: none; height: auto; left: 51%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 52px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-l35Bd .framer-181oz1r { flex: none; height: 1px; left: calc(50.00000000000002% - 1200px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 141px; width: 1200px; z-index: 1; }`,
        `.framer-l35Bd .framer-1lowgd4 { flex: none; height: 1px; left: calc(50.00000000000002% - 1200px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 732px; width: 1200px; z-index: 1; }`,
        `.framer-l35Bd .framer-1d8u8o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-1ai4ho8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 879px; }`,
        `.framer-l35Bd .framer-ibozq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 90px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-l35Bd .framer-1ydv62g-container, .framer-l35Bd .framer-1mojhhm-container, .framer-l35Bd .framer-12wdnyk-container, .framer-l35Bd .framer-1tk281k-container, .framer-l35Bd .framer-1ynin75-container, .framer-l35Bd .framer-1wxmlts-container, .framer-l35Bd .framer-1l1dz2n-container, .framer-l35Bd .framer-1e8xmdg-container, .framer-l35Bd .framer-1jul1sn-container, .framer-l35Bd .framer-1vukgy-container, .framer-l35Bd .framer-yj3tmx-container, .framer-l35Bd .framer-1x0gn93-container, .framer-l35Bd .framer-xhh49g-container, .framer-l35Bd .framer-8m0f1t-container, .framer-l35Bd .framer-4uiomu-container, .framer-l35Bd .framer-2hlb4e-container, .framer-l35Bd .framer-1tjteyb-container, .framer-l35Bd .framer-1nu8k08-container, .framer-l35Bd .framer-bts1jd-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-l35Bd .framer-1rl23vj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 223px; justify-content: center; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-2rqdmo, .framer-l35Bd .framer-1dng6tl, .framer-l35Bd .framer-f3lkxs, .framer-l35Bd .framer-1ehl40p { --border-bottom-width: 1px; --border-color: var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, #b9d19e); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 2px 2px 5px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, #b9d19e); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-end; overflow: visible; padding: 20px; position: relative; width: 283px; }`,
        `.framer-l35Bd .framer-vuxacy, .framer-l35Bd .framer-1i8r40, .framer-l35Bd .framer-17t31mj { --1m973uw: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #1d9c51); --js9iwy: 2; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; z-index: 2; }`,
        `.framer-l35Bd .framer-1dmilzr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-l35Bd .framer-agwarx-container, .framer-l35Bd .framer-cqihn1-container, .framer-l35Bd .framer-1h7mk0w-container, .framer-l35Bd .framer-i9v5de-container, .framer-l35Bd .framer-r6aaen-container, .framer-l35Bd .framer-1c9egj9-container, .framer-l35Bd .framer-14ppte1-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }`,
        `.framer-l35Bd .framer-1v17iab, .framer-l35Bd .framer-17zefm3, .framer-l35Bd .framer-ncg7ad, .framer-l35Bd .framer-2lc56y, .framer-l35Bd .framer-1ost5aj, .framer-l35Bd .framer-10yup9r, .framer-l35Bd .framer-1pjxlp3 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-l35Bd .framer-1cxv3sl, .framer-l35Bd .framer-1k62bul, .framer-l35Bd .framer-1fkwvkc, .framer-l35Bd .framer-jy6jwo, .framer-l35Bd .framer-86af65 { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-l35Bd .framer-133ffo6, .framer-l35Bd .framer-1osaxtj, .framer-l35Bd .framer-1jgsm64, .framer-l35Bd .framer-h9uw5r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 1px; width: min-content; z-index: 1; }`,
        `.framer-l35Bd .framer-1fbvuf1, .framer-l35Bd .framer-1nbvlgl, .framer-l35Bd .framer-f30tez, .framer-l35Bd .framer-1l0h14k, .framer-l35Bd .framer-onk5nu, .framer-l35Bd .framer-zi1rqs, .framer-l35Bd .framer-kxobci, .framer-l35Bd .framer-1k4uy25, .framer-l35Bd .framer-182jmxc, .framer-l35Bd .framer-v9u6pk, .framer-l35Bd .framer-1casb6o, .framer-l35Bd .framer-1st0y4z, .framer-l35Bd .framer-11qtuhq, .framer-l35Bd .framer-u8hkdg, .framer-l35Bd .framer-v8hsd1, .framer-l35Bd .framer-15e86sv, .framer-l35Bd .framer-cmudqh, .framer-l35Bd .framer-1ceto08, .framer-l35Bd .framer-ha9526, .framer-l35Bd .framer-qbisvm, .framer-l35Bd .framer-1etvnfy, .framer-l35Bd .framer-4k5c4h, .framer-l35Bd .framer-xpxnh1, .framer-l35Bd .framer-14yztxj, .framer-l35Bd .framer-14w031s, .framer-l35Bd .framer-1u2fxsj, .framer-l35Bd .framer-1ebb2tp, .framer-l35Bd .framer-n3x8h1, .framer-l35Bd .framer-10q8rb4, .framer-l35Bd .framer-vwfkf, .framer-l35Bd .framer-6gtr2j, .framer-l35Bd .framer-1rgy8ka, .framer-l35Bd .framer-1c2kqp3, .framer-l35Bd .framer-shkgm8, .framer-l35Bd .framer-1kycd56, .framer-l35Bd .framer-1tk24tm, .framer-l35Bd .framer-hqe3b7, .framer-l35Bd .framer-1o2et3u, .framer-l35Bd .framer-1pb8r4q, .framer-l35Bd .framer-ahqav8, .framer-l35Bd .framer-gm3kcu, .framer-l35Bd .framer-8en50q, .framer-l35Bd .framer-rkmejy, .framer-l35Bd .framer-u2417p { height: 15px; position: relative; width: 15px; }`,
        `.framer-l35Bd .framer-gltzz0, .framer-l35Bd .framer-qh9yas, .framer-l35Bd .framer-1k0nef5, .framer-l35Bd .framer-n8pz39, .framer-l35Bd .framer-1ka3yed, .framer-l35Bd .framer-9utdx3, .framer-l35Bd .framer-1da9kk5, .framer-l35Bd .framer-1ys16aw, .framer-l35Bd .framer-1ea9764, .framer-l35Bd .framer-1rpoahb, .framer-l35Bd .framer-1cejzki { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
        `.framer-l35Bd .framer-1lue6bw, .framer-l35Bd .framer-w7tc3n, .framer-l35Bd .framer-h9kz5n, .framer-l35Bd .framer-qkpqcj, .framer-l35Bd .framer-1y6m1zq, .framer-l35Bd .framer-3ga64o, .framer-l35Bd .framer-1ojfs0y, .framer-l35Bd .framer-7vrzxv, .framer-l35Bd .framer-qaa302, .framer-l35Bd .framer-1woj8lf, .framer-l35Bd .framer-wsgn6x { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
        `.framer-l35Bd .framer-1vobvex, .framer-l35Bd .framer-4f0vou, .framer-l35Bd .framer-112vrvg, .framer-l35Bd .framer-l5v0h6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 1px; width: min-content; z-index: 1; }`,
        `.framer-l35Bd .framer-qzjhji, .framer-l35Bd .framer-15qbfc2, .framer-l35Bd .framer-wahe9u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-l35Bd .framer-1gy826k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 40px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-l35Bd .framer-1mxo5dj, .framer-l35Bd .framer-1yakfrv, .framer-l35Bd .framer-rwqxqq, .framer-l35Bd .framer-j25bw8 { --1m973uw: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #1d9c51); --js9iwy: 2; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); position: relative; width: 33px; }`,
        `.framer-l35Bd .framer-10cm613 { --1m973uw: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #1d9c51); --js9iwy: 2; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); position: relative; width: 33px; z-index: 2; }`,
        `.framer-l35Bd .framer-1ypsjoz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-1ee3fpw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 399px; }`,
        `.framer-l35Bd .framer-lh9grj, .framer-l35Bd .framer-11213kv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-uvu8mk, .framer-l35Bd .framer-fe9ck2, .framer-l35Bd .framer-3r7qa8, .framer-l35Bd .framer-1gp3pbk, .framer-l35Bd .framer-1v87rlb { --border-bottom-width: 1px; --border-color: var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, #d8e2dc); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, #e6f7ed); border-bottom-left-radius: 45px; border-bottom-right-radius: 45px; border-top-left-radius: 45px; border-top-right-radius: 45px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 9px 5px 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-l35Bd .framer-1k9pa7k, .framer-l35Bd .framer-pqigu2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 412px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-24hry1 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 307px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-1ybxegj-container { flex: none; height: auto; position: relative; width: 661px; }`,
        `.framer-l35Bd .framer-cx404s { align-content: center; align-items: center; background-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-gr4yvw, .framer-l35Bd .framer-1siz68h, .framer-l35Bd .framer-oooi8y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-rpt1j0, .framer-l35Bd .framer-56xjol, .framer-l35Bd .framer-1b8di3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-1j255y8, .framer-l35Bd .framer-1xvz9ld, .framer-l35Bd .framer-yrwifk, .framer-l35Bd .framer-1bz5p76, .framer-l35Bd .framer-170mce4, .framer-l35Bd .framer-1rhcmrd, .framer-l35Bd .framer-1f4xygz, .framer-l35Bd .framer-7szz7j { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-3se3v6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-ffj2ct { align-content: center; align-items: center; border-bottom-left-radius: 28px; border-bottom-right-radius: 28px; border-top-left-radius: 28px; border-top-right-radius: 28px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 562px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 110px 0px 0px 0px; position: sticky; top: 0px; width: 1200px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-l35Bd .framer-eef5zi, .framer-l35Bd .framer-iaqv3h { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87)) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 66px; height: 1px; justify-content: center; max-height: 700px; min-height: 450px; overflow: visible; padding: 0px; position: relative; width: 1085px; }`,
        `.framer-l35Bd .framer-1wjrgjl, .framer-l35Bd .framer-17gnysd, .framer-l35Bd .framer-1q95gn5 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-evenly; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-l35Bd .framer-xdv1j8, .framer-l35Bd .framer-1sb1kvk, .framer-l35Bd .framer-1rvs0an { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 629px; }`,
        `.framer-l35Bd .framer-10t2zc8, .framer-l35Bd .framer-4d5lu6, .framer-l35Bd .framer-yg4ret, .framer-l35Bd .framer-19ou0j, .framer-l35Bd .framer-10wsdxo, .framer-l35Bd .framer-1kl8l5s, .framer-l35Bd .framer-medqym, .framer-l35Bd .framer-1xk4kpc, .framer-l35Bd .framer-1wl7vef, .framer-l35Bd .framer-1deo2u3, .framer-l35Bd .framer-188fjts, .framer-l35Bd .framer-6rmxp { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-r6itf, .framer-l35Bd .framer-1m4lkk, .framer-l35Bd .framer-1asa3oo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 629px; }`,
        `.framer-l35Bd .framer-tgnt0j, .framer-l35Bd .framer-1tk9cof, .framer-l35Bd .framer-fo6ums { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-1sliz4x, .framer-l35Bd .framer-vlhh6r, .framer-l35Bd .framer-uok3gj, .framer-l35Bd .framer-sr8hc1, .framer-l35Bd .framer-13ws70z, .framer-l35Bd .framer-1jgo9gk, .framer-l35Bd .framer-1w9tlqj, .framer-l35Bd .framer-1cgvqwi, .framer-l35Bd .framer-1o2krda { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-lzm1oq, .framer-l35Bd .framer-whjeoa, .framer-l35Bd .framer-c08tjk, .framer-l35Bd .framer-196ovn2, .framer-l35Bd .framer-169g6hy, .framer-l35Bd .framer-1tv77so, .framer-l35Bd .framer-abi4d, .framer-l35Bd .framer-44mkt1, .framer-l35Bd .framer-hszfym { height: 20px; position: relative; width: 21px; }`,
        `.framer-l35Bd .framer-1r9wyf9, .framer-l35Bd .framer-1esxjfs, .framer-l35Bd .framer-1xai9cp, .framer-l35Bd .framer-1b37l6d, .framer-l35Bd .framer-g2gacm, .framer-l35Bd .framer-ev6alq, .framer-l35Bd .framer-11esfni, .framer-l35Bd .framer-10e4ve6, .framer-l35Bd .framer-1jz9od { height: 20px; left: 0px; position: absolute; top: 0px; width: 21px; }`,
        `.framer-l35Bd .framer-o8so2k, .framer-l35Bd .framer-ojiexm, .framer-l35Bd .framer-zfvr6f, .framer-l35Bd .framer-1nxrjkg, .framer-l35Bd .framer-1q0kcae, .framer-l35Bd .framer-opyb71, .framer-l35Bd .framer-656fad, .framer-l35Bd .framer-d8j70q, .framer-l35Bd .framer-f1zbzp { height: 4px; left: 7px; position: absolute; top: 8px; width: 6px; }`,
        `.framer-l35Bd .framer-1ga8490, .framer-l35Bd .framer-3up1ye, .framer-l35Bd .framer-6jvm3i { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: auto; }`,
        `.framer-l35Bd .framer-smemu2, .framer-l35Bd .framer-11gmnev { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: calc(49.77876106194692% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-l35Bd .framer-98og3t, .framer-l35Bd .framer-i7p1us, .framer-l35Bd .framer-2ww7zv, .framer-l35Bd .framer-9avtbp, .framer-l35Bd .framer-oaw2vx, .framer-l35Bd .framer-1afq3vh, .framer-l35Bd .framer-1jt484m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-l35Bd .framer-15gg6j6, .framer-l35Bd .framer-2zxgpn, .framer-l35Bd .framer-5589gw, .framer-l35Bd .framer-1imkh5s, .framer-l35Bd .framer-1etvvis, .framer-l35Bd .framer-1fzwzf5, .framer-l35Bd .framer-1syo8cl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-l35Bd .framer-3g8xna, .framer-l35Bd .framer-frloeq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 562px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 110px 0px 0px 0px; position: sticky; top: 0px; width: 1200px; z-index: 1; }`,
        `.framer-l35Bd .framer-zj5rjv { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87)) 100%); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 66px; height: 1px; justify-content: center; max-height: 700px; min-height: 450px; overflow: visible; padding: 0px; position: relative; width: 1085px; }`,
        `.framer-l35Bd .framer-1vlq0tq { flex: none; height: 100%; overflow: visible; position: absolute; right: 0px; top: calc(49.77876106194692% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-l35Bd .framer-1xaimnt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-1q9o6of { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-swbgnl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 98px; height: 250px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-1m6bxc2, .framer-l35Bd .framer-1bnpnbp, .framer-l35Bd .framer-193s4fs { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87)) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 4px 4px 4px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, #b9d19e); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: visible; padding: 30px; position: relative; width: 300px; }`,
        `.framer-l35Bd .framer-1ju2rwz { --1m973uw: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); --js9iwy: 2; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 37px); position: relative; width: 37px; z-index: 2; }`,
        `.framer-l35Bd .framer-g75d9y, .framer-l35Bd .framer-53wten, .framer-l35Bd .framer-13r0kw4 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
        `.framer-l35Bd .framer-141q4lg { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-l35Bd .framer-1x07d13, .framer-l35Bd .framer-k7thr6 { --1m973uw: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); --js9iwy: 2; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 49px); position: relative; width: 49px; z-index: 2; }`,
        `.framer-l35Bd .framer-1fk3yg7 { bottom: 0px; flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-l35Bd .framer-15mcsmk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-avpvb0 { bottom: -78px; flex: none; gap: 10px; height: 187px; left: calc(49.75000000000002% - 1006px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1006px; }`,
        `.framer-l35Bd .framer-1lf2dpq-container { flex: none; height: 3px; position: absolute; right: 104px; top: 93px; width: 793px; z-index: 1; }`,
        `.framer-l35Bd .framer-zr9yvw-container { flex: none; height: 3px; left: 55px; position: absolute; top: 93px; width: 98px; z-index: 1; }`,
        `.framer-l35Bd .framer-16rt68d-container { flex: none; height: 3px; left: 859px; position: absolute; top: calc(50.26737967914441% - 3px / 2); width: 98px; z-index: 1; }`,
        `.framer-l35Bd .framer-117s03n-container { flex: none; height: 3px; left: 458px; position: absolute; top: calc(50.26737967914441% - 3px / 2); width: 98px; z-index: 1; }`,
        `.framer-l35Bd .framer-1gexq2b { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #1d9c51); border-bottom-left-radius: 79px; border-bottom-right-radius: 79px; border-top-left-radius: 79px; border-top-right-radius: 79px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 48px); justify-content: center; left: 174px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 50%; transform: translateY(-50%); width: 48px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-l35Bd .framer-t16t6p { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: 32px; position: relative; white-space: pre; width: auto; }`,
        `.framer-l35Bd .framer-1yotpiu { align-content: center; align-items: center; background-color: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #1d9c51); border-bottom-left-radius: 79px; border-bottom-right-radius: 79px; border-top-left-radius: 79px; border-top-right-radius: 79px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; left: calc(83.50000000000001% - 48px / 2); overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: calc(50.00000000000002% - 48px / 2); width: 48px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-l35Bd .framer-zsi603 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: 33px; position: relative; white-space: pre; width: auto; }`,
        `.framer-l35Bd .framer-p0r0nw { align-content: center; align-items: center; background-color: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #1d9c51); border-bottom-left-radius: 79px; border-bottom-right-radius: 79px; border-top-left-radius: 79px; border-top-right-radius: 79px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; left: calc(50.16666666666669% - 48px / 2); overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: calc(50.00000000000002% - 48px / 2); width: 48px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-l35Bd .framer-1xyqrg8 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: 33px; position: relative; white-space: pre-wrap; width: 15px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-1ea69mr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 139px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-o5vnzg, .framer-l35Bd .framer-c9lg5p, .framer-l35Bd .framer-1rhapku { align-content: center; align-items: center; aspect-ratio: 0.494279176201373 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 522px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 258px; }`,
        `.framer-l35Bd .framer-uvkjho, .framer-l35Bd .framer-zoix30, .framer-l35Bd .framer-lge2qs { aspect-ratio: 0.494279176201373 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 522px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
        `.framer-l35Bd .framer-y2lsj8, .framer-l35Bd .framer-3ki63b { aspect-ratio: 0.4620853080568721 / 1; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; box-shadow: 18px 11px 33px 0px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 500px); overflow: visible; position: relative; width: 231px; }`,
        `.framer-l35Bd .framer-1mam6ax { aspect-ratio: 0.4645622394282311 / 1; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; box-shadow: 18px 11px 33px 0px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 499px); overflow: visible; position: relative; width: 232px; }`,
        `.framer-l35Bd .framer-3p5ib { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-3x91pv { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 899px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-d9o5nf { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 249px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-l35Bd .framer-114b0gb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1200px; }`,
        `.framer-l35Bd .framer-buwnbm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 484px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-l35Bd .framer-1u1moqh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 521px; }`,
        `.framer-l35Bd .framer-zlubjn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 398px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l35Bd .framer-1clgtgq { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87)) 100%); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 1px 1px 6px 0px var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, #6ac68f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 210px; justify-content: center; overflow: visible; padding: 55px; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-yqhx9d, .framer-l35Bd .framer-t8zx78 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-l35Bd .framer-tyqydi-container { flex: none; height: 44px; position: relative; width: 188px; z-index: 2; }`,
        `.framer-l35Bd .framer-9dvc9h { flex: none; height: 100%; overflow: visible; position: absolute; right: 0px; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-l35Bd .framer-eauyxq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-l35Bd .framer-wldzt1-container, .framer-l35Bd .framer-nep09j-container, .framer-l35Bd .framer-z25urn-container, .framer-l35Bd .framer-n8zx04-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-l35Bd .framer-g7vr8d { bottom: -101px; flex: none; height: 1px; left: calc(50.00000000000002% - 1200px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1200px; z-index: 1; }`,
        `.framer-l35Bd .framer-ko90f9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 10px 200px 10px 200px; position: fixed; top: 0px; transform: translateX(-50%); width: 1200px; z-index: 7; }`,
        ...jt,
        ...Ge,
        ...wt,
        ...Tt,
        ...ze,
        ...Le,
        ...We,
        `.framer-l35Bd[data-border="true"]::after, .framer-l35Bd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (max-width: 809.98px) { .framer-l35Bd.framer-1mz1wdt { width: 390px; } .framer-l35Bd .framer-zbbipb-container { height: 962px; } .framer-l35Bd .framer-19uxjoz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 863px; justify-content: flex-start; overflow: visible; padding: 0px 15px 0px 15px; width: 100%; } .framer-l35Bd .framer-1nw1yru { flex-direction: column; gap: 28px; height: min-content; left: unset; padding: 0px; position: relative; top: unset; width: 100%; } .framer-l35Bd .framer-1ybgvit { gap: 24px; order: 1; padding: 15px; width: 100%; } .framer-l35Bd .framer-1o7utja { gap: 20px; width: 100%; } .framer-l35Bd .framer-143h0xv { flex-direction: column; gap: 12px; width: 330px; } .framer-l35Bd .framer-3jl5ff-container, .framer-l35Bd .framer-1vtodb8-container, .framer-l35Bd .framer-buwnbm { flex: none; width: 100%; } .framer-l35Bd .framer-hafah { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 468px; justify-content: center; order: 0; padding: 0px; width: 360px; } .framer-l35Bd .framer-1qer9d1-container { height: 320px; position: relative; right: unset; top: unset; transform: unset; width: 300px; } .framer-l35Bd .framer-181oz1r, .framer-l35Bd .framer-1lowgd4 { left: calc(50.00000000000002% - 390px / 2); width: 390px; } .framer-l35Bd .framer-1d8u8o { gap: 70px; padding: 0px 15px 0px 15px; } .framer-l35Bd .framer-1ai4ho8 { gap: 40px; width: 100%; } .framer-l35Bd .framer-ibozq { flex-direction: column; gap: 40px; width: 100%; } .framer-l35Bd .framer-1rl23vj { flex-direction: column; gap: 14px; height: 804px; padding: 0px; width: 360px; } .framer-l35Bd .framer-2rqdmo, .framer-l35Bd .framer-1dng6tl, .framer-l35Bd .framer-f3lkxs, .framer-l35Bd .framer-1ehl40p { flex: 1 0 0px; height: 1px; padding: 18px; width: 100%; } .framer-l35Bd .framer-1ypsjoz { flex-direction: column; width: 100%; } .framer-l35Bd .framer-1ee3fpw, .framer-l35Bd .framer-1u1moqh { gap: 16px; width: 100%; } .framer-l35Bd .framer-1k9pa7k, .framer-l35Bd .framer-24hry1, .framer-l35Bd .framer-1ybxegj-container, .framer-l35Bd .framer-rpt1j0, .framer-l35Bd .framer-xdv1j8, .framer-l35Bd .framer-r6itf, .framer-l35Bd .framer-1sb1kvk, .framer-l35Bd .framer-1m4lkk, .framer-l35Bd .framer-1rvs0an, .framer-l35Bd .framer-1asa3oo, .framer-l35Bd .framer-56xjol, .framer-l35Bd .framer-1b8di3k, .framer-l35Bd .framer-3x91pv, .framer-l35Bd .framer-pqigu2, .framer-l35Bd .framer-zlubjn { width: 100%; } .framer-l35Bd .framer-cx404s { gap: 61px; padding: 40px 15px 40px 15px; } .framer-l35Bd .framer-gr4yvw, .framer-l35Bd .framer-1siz68h, .framer-l35Bd .framer-oooi8y { gap: 18px; } .framer-l35Bd .framer-3se3v6 { gap: 60px; width: 100%; } .framer-l35Bd .framer-ffj2ct { height: min-content; overflow: visible; padding: 0px; position: relative; top: unset; width: 100%; will-change: unset; } .framer-l35Bd .framer-eef5zi { flex: none; flex-direction: column; gap: 65px; height: 830px; justify-content: flex-start; max-height: unset; overflow: var(--overflow-clip-fallback, clip); padding: 28px 18px 28px 18px; width: 100%; will-change: var(--framer-will-change-override, transform); } .framer-l35Bd .framer-1wjrgjl, .framer-l35Bd .framer-1q95gn5 { gap: 40px; height: min-content; justify-content: center; width: 100%; } .framer-l35Bd .framer-1ga8490, .framer-l35Bd .framer-3up1ye, .framer-l35Bd .framer-6jvm3i { align-self: unset; flex-direction: column; gap: 12px; width: 100%; } .framer-l35Bd .framer-r6aaen-container { bottom: -178px; left: 50%; position: absolute; transform: translateX(-50%); } .framer-l35Bd .framer-3g8xna, .framer-l35Bd .framer-frloeq { height: min-content; overflow: visible; padding: 0px; position: relative; top: unset; width: 100%; } .framer-l35Bd .framer-zj5rjv { flex: none; flex-direction: column; gap: 28px; height: 830px; justify-content: flex-start; max-height: unset; overflow: var(--overflow-clip-fallback, clip); padding: 28px 18px 28px 18px; width: 100%; will-change: var(--framer-will-change-override, transform); } .framer-l35Bd .framer-1c9egj9-container { bottom: -173px; left: 50%; order: 1; position: absolute; transform: translateX(-50%); } .framer-l35Bd .framer-17gnysd { gap: 40px; height: min-content; justify-content: center; order: 0; width: 100%; } .framer-l35Bd .framer-1vlq0tq { order: 2; } .framer-l35Bd .framer-iaqv3h { flex: none; flex-direction: column; gap: 28px; height: 780px; justify-content: flex-start; max-height: unset; min-height: unset; overflow: var(--overflow-clip-fallback, clip); padding: 28px 18px 28px 18px; width: 100%; will-change: var(--framer-will-change-override, transform); } .framer-l35Bd .framer-14ppte1-container { bottom: -203px; left: 50%; position: absolute; transform: translateX(-50%); } .framer-l35Bd .framer-1xaimnt { gap: 36px; padding: 0px 15px 0px 15px; } .framer-l35Bd .framer-1q9o6of { gap: 22px; width: 360px; } .framer-l35Bd .framer-swbgnl { flex-direction: column; gap: 14px; height: 646px; } .framer-l35Bd .framer-1m6bxc2, .framer-l35Bd .framer-1bnpnbp, .framer-l35Bd .framer-193s4fs { flex: 1 0 0px; height: 1px; padding: 20px; width: 100%; } .framer-l35Bd .framer-3p5ib { gap: 34px; overflow: visible; padding: 0px 15px 0px 25px; } .framer-l35Bd .framer-d9o5nf { gap: 16px; height: min-content; } .framer-l35Bd .framer-114b0gb { flex-direction: column; gap: 28px; padding: 0px 15px 0px 15px; width: 100%; } .framer-l35Bd .framer-1clgtgq { height: min-content; padding: 28px 18px 28px 18px; } .framer-l35Bd .framer-eauyxq { flex: none; padding: 6px 0px 6px 0px; width: 100%; } .framer-l35Bd .framer-ko90f9 { overflow: visible; padding: 0px; width: 100%; }}`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-l35Bd.framer-1mz1wdt, .framer-l35Bd .framer-19uxjoz, .framer-l35Bd .framer-15mcsmk { width: 810px; } .framer-l35Bd .framer-1nw1yru { justify-content: center; left: calc(50.00000000000002% - 100% / 2); padding: 0px 0px 80px 40px; width: 100%; } .framer-l35Bd .framer-1ybgvit { width: 376px; } .framer-l35Bd .framer-1o7utja, .framer-l35Bd .framer-1ai4ho8, .framer-l35Bd .framer-1rl23vj, .framer-l35Bd .framer-1ee3fpw, .framer-l35Bd .framer-1k9pa7k, .framer-l35Bd .framer-rpt1j0, .framer-l35Bd .framer-3se3v6, .framer-l35Bd .framer-eef5zi, .framer-l35Bd .framer-xdv1j8, .framer-l35Bd .framer-r6itf, .framer-l35Bd .framer-1sb1kvk, .framer-l35Bd .framer-1m4lkk, .framer-l35Bd .framer-1rvs0an, .framer-l35Bd .framer-1asa3oo, .framer-l35Bd .framer-56xjol, .framer-l35Bd .framer-1q9o6of, .framer-l35Bd .framer-1b8di3k, .framer-l35Bd .framer-3x91pv, .framer-l35Bd .framer-1u1moqh, .framer-l35Bd .framer-pqigu2, .framer-l35Bd .framer-ko90f9 { width: 100%; } .framer-l35Bd .framer-1qer9d1-container { bottom: -49px; left: 55px; right: unset; top: unset; transform: unset; } .framer-l35Bd .framer-34cog8-container { bottom: -15px; left: -84px; right: unset; top: unset; transform: unset; } .framer-l35Bd .framer-ibozq { gap: 31px; } .framer-l35Bd .framer-2rqdmo, .framer-l35Bd .framer-1dng6tl, .framer-l35Bd .framer-f3lkxs, .framer-l35Bd .framer-1ehl40p { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; } .framer-l35Bd .framer-1mxo5dj, .framer-l35Bd .framer-10cm613, .framer-l35Bd .framer-1yakfrv, .framer-l35Bd .framer-rwqxqq, .framer-l35Bd .framer-j25bw8 { height: var(--framer-aspect-ratio-supported, 25px); width: 25px; } .framer-l35Bd .framer-1ypsjoz, .framer-l35Bd .framer-114b0gb { flex-direction: column; width: 100%; } .framer-l35Bd .framer-cx404s { gap: 60px; padding: 40px 20px 40px 20px; } .framer-l35Bd .framer-ffj2ct, .framer-l35Bd .framer-3g8xna, .framer-l35Bd .framer-frloeq { height: 480px; padding: 0px; position: relative; top: unset; width: 100%; } .framer-l35Bd .framer-1wjrgjl { flex: 1 0 0px; padding: 0px 0px 0px 40px; width: 1px; } .framer-l35Bd .framer-1ga8490, .framer-l35Bd .framer-3up1ye, .framer-l35Bd .framer-6jvm3i { align-self: unset; width: 100%; } .framer-l35Bd .framer-r6aaen-container, .framer-l35Bd .framer-1c9egj9-container, .framer-l35Bd .framer-14ppte1-container { height: 580px; width: 280px; } .framer-l35Bd .framer-zj5rjv { padding: 0px 40px 0px 0px; width: 100%; } .framer-l35Bd .framer-17gnysd, .framer-l35Bd .framer-1q95gn5 { flex: 1 0 0px; width: 1px; } .framer-l35Bd .framer-iaqv3h { padding: 0px 0px 0px 40px; width: 100%; } .framer-l35Bd .framer-1xaimnt { padding: 0px 20px 0px 20px; width: 810px; } .framer-l35Bd .framer-swbgnl { gap: 15px; } .framer-l35Bd .framer-1m6bxc2, .framer-l35Bd .framer-1bnpnbp, .framer-l35Bd .framer-193s4fs { width: 250px; } .framer-l35Bd .framer-avpvb0 { bottom: -60px; height: 169px; left: calc(49.7530864197531% - 725px / 2); width: 725px; } .framer-l35Bd .framer-1lf2dpq-container { left: 85px; width: unset; } .framer-l35Bd .framer-zr9yvw-container { left: 13px; top: 108px; width: 129px; } .framer-l35Bd .framer-16rt68d-container { left: 553px; top: 108px; width: 129px; } .framer-l35Bd .framer-117s03n-container { left: 281px; top: 107px; width: 129px; } .framer-l35Bd .framer-1gexq2b { left: 94px; } .framer-l35Bd .framer-t16t6p { height: 28px; } .framer-l35Bd .framer-1yotpiu { left: 634px; } .framer-l35Bd .framer-zsi603 { height: 30px; } .framer-l35Bd .framer-p0r0nw { left: 361px; } .framer-l35Bd .framer-1xyqrg8 { height: 30px; width: 12px; } .framer-l35Bd .framer-1ea69mr { gap: 10px; height: 522px; } .framer-l35Bd .framer-1mam6ax { height: var(--framer-aspect-ratio-supported, 500px); } .framer-l35Bd .framer-3p5ib { padding: 40px 20px 40px 20px; } .framer-l35Bd .framer-buwnbm { flex: none; height: 388px; width: 100%; } .framer-l35Bd .framer-1clgtgq { height: 215px; } .framer-l35Bd .framer-9dvc9h { left: 0px; right: unset; } .framer-l35Bd .framer-eauyxq { flex: none; width: 100%; }}`,
      ],
      `framer-l35Bd`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 7387, width: 1200 }),
    ce(
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
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/JZ35FM4UJSKC7X2PM65RH75Q5KLE552S.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/OUUAK2X2MEGEKC6ULA4CFSBY4PE5EGPV.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/FVNNCZHGTHUOM3RCJDOO45QMBIJISVEG.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Lt,
        ...Rt,
        ...zt,
        ...Vt,
        ...Ht,
        ...Ut,
        ...Wt,
        ...Gt,
        ...Kt,
        ...qt,
        ...Jt,
        ...Yt,
        ...Xt,
        ...Zt,
        ...Qt,
        ...$t,
        ...tn,
        ...nn,
        ...an,
        ...k(Mt),
        ...k(qe),
        ...k(Et),
        ...k(Dt),
        ...k(He),
        ...k(Pe),
        ...k(je),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          M(P, {}, t),
          M(R, {}, t),
          M(W, {}, t),
          M(L, {}, t),
          M(U, {}, t),
          M(Ve, {}, t),
          M(Ue, {}, t),
        ])
      ),
    }),
    (Sn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerRBHgPWYM6`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `7387`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"CTN_w1lGq":{"pattern":":CTN_w1lGq","name":"hero"},"V_J8mQT6f":{"pattern":":V_J8mQT6f","name":"top-trigger"},"bN_URotj6":{"pattern":":bN_URotj6","name":"second-trigger"},"v6qgtHSRG":{"pattern":":v6qgtHSRG","name":"features"},"JQYSrqQic":{"pattern":":JQYSrqQic","name":"feature-2"},"kQmuAIZiR":{"pattern":":kQmuAIZiR","name":"feature-3"},"M5jyd41KP":{"pattern":":M5jyd41KP","name":"how-it-works"},"nLJBzFQg2":{"pattern":":nLJBzFQg2","name":"testimonials"},"CM3lLdwrc":{"pattern":":CM3lLdwrc","name":"third-trigger"}}`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DdetQ92tH":{"layout":["fixed","auto"]},"ZRCGSeloK":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Sn as __FramerMetadata__, $ as default, ln as queryParamNames };
//# sourceMappingURL=HcxIc7bpsJY6eC_lEY9aOaT3ScsTtxJUfnQ-lCCSfj0.ZaRDb0yo.mjs.map
