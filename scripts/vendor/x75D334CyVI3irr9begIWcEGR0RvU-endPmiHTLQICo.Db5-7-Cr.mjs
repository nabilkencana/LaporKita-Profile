import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as ee,
  j as te,
  l as a,
  s as o,
  u as s,
  w as c,
  y as ne,
} from "./react.Dfbt0i5D.mjs";
import { a as re, r as ie, t as l, w as u } from "./motion.DA7Wf6OE.mjs";
import {
  $ as d,
  At as f,
  C as p,
  Ct as m,
  D as h,
  E as ae,
  G as g,
  I as _,
  K as v,
  M as y,
  O as b,
  Ot as oe,
  Pt as se,
  S as ce,
  Tt as le,
  a as x,
  ft as ue,
  gt as S,
  ht as de,
  i as fe,
  m as C,
  mt as pe,
  n as me,
  o as w,
  ot as he,
  q as T,
  vt as ge,
  yt as _e,
  z as E,
} from "./framer.DwK__Hy9.mjs";
import {
  C as ve,
  E as D,
  S as O,
  T as ye,
  _ as be,
  a as xe,
  b as k,
  c as A,
  d as Se,
  f as Ce,
  g as we,
  h as Te,
  i as Ee,
  l as De,
  m as Oe,
  n as ke,
  o as Ae,
  p as je,
  r as j,
  s as Me,
  t as M,
  u as Ne,
  v as Pe,
  w as Fe,
  x as N,
  y as Ie,
} from "./shared-lib.BFsVOxQ4.mjs";
import { i as Le, n as Re, r as ze, t as Be } from "./MT8PGdP9G.C-9PYv7x.mjs";
import {
  a as Ve,
  c as He,
  d as P,
  f as Ue,
  i as We,
  l as F,
  n as Ge,
  o as Ke,
  r as qe,
  s as Je,
  t as Ye,
  u as Xe,
} from "./Z7CzuxNJN.tjaA4hZo.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./xMscHFbGZ.CRJhyUtz.mjs";
import { a as tt, i as nt, n as rt, o as it, r as at, t as ot } from "./lrmGPCM1k.C6_jRiJu.mjs";
import {
  a as I,
  i as st,
  n as ct,
  o as lt,
  r as ut,
  s as dt,
  t as ft,
} from "./Mg6YhzQwk.BPe3qntN.mjs";
import pt, { t as mt } from "./fBzIriNuFlxE23nJl_90OX3u5hehKivOTjqG4IuHuQs.D3UYJ-9i.mjs";
var L, R, z, B, ht, V, H, U, W, G, K, q, J, gt, _t, vt, Y, X, yt, bt, xt, Z, St, Ct, Q, $;
e(() => {
  (o(),
    d(),
    l(),
    c(),
    D(),
    Fe(),
    Ee(),
    Ue(),
    O(),
    Xe(),
    ke(),
    it(),
    lt(),
    we(),
    nt(),
    st(),
    Le(),
    Ce(),
    A(),
    He(),
    k(),
    Ze(),
    We(),
    mt(),
    (L = g(j)),
    (R = f(w)),
    (z = g(M)),
    (B = se(M)),
    (ht = g(F)),
    (V = g(N)),
    (H = g(P)),
    (U = f(u.div)),
    (W = {
      GGU8Oypi7: `(min-width: 810px) and (max-width: 1199.98px)`,
      pHBNDNej7: `(max-width: 809.98px)`,
      vRAAqvCBR: `(min-width: 1200px)`,
    }),
    (G = () => typeof document < `u`),
    (K = []),
    (q = `framer-r29S7`),
    (J = {
      GGU8Oypi7: `framer-v-8j85iz`,
      pHBNDNej7: `framer-v-18wjliw`,
      vRAAqvCBR: `framer-v-1g6tktw`,
    }),
    (gt = (e, t, n) => (e && t ? `position` : n)),
    (_t = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (vt = {
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
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (X = () => ({
      from: { alias: `A6gitEKNn`, data: tt, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `A6gitEKNn`, name: `lsUCe2axL`, type: `Identifier` },
        { collection: `A6gitEKNn`, name: `R2OedGNgU`, type: `Identifier` },
        { collection: `A6gitEKNn`, name: `id`, type: `Identifier` },
      ],
    })),
    (yt = ({ query: e, pageSize: t, children: n }) => n(m(e))),
    (bt = {
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
    (xt = { delay: 0.1, duration: 0.4, ease: [0.62, 0, 0.36, 1], type: `tween` }),
    (Z = { Desktop: `vRAAqvCBR`, Phone: `pHBNDNej7`, Tablet: `GGU8Oypi7` }),
    (St = ({ value: e }) =>
      S()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ct = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `vRAAqvCBR`,
    })),
    (Q = oe(
      i(function (e, i) {
        let o = n(null),
          c = i ?? o,
          l = ne(),
          { activeLocale: d, setLocale: f } = ge(),
          m = ue(),
          { style: g, className: v, layoutId: y, variant: oe, ...se } = Ct(e);
        _e(te(() => pt({}, d), [d]));
        let [S, he] = de(oe, W, !1),
          T = _(q, Ve, et, be, xe, Ye, De, je, Be, ot, ft),
          E = t(C)?.isLayoutTemplate,
          D = !!t(re)?.transition?.layout,
          O = gt(E, D),
          k = () => !G() || S !== `pHBNDNej7`,
          A = () => !G() || S === `pHBNDNej7`;
        return (
          le(),
          pe({}),
          a(C.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `vRAAqvCBR`,
              variantClassNames: J,
            },
            children: s(ie, {
              id: y ?? l,
              children: [
                a(St, {
                  value: `html body { background: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)); }`,
                }),
                s(u.div, {
                  ...se,
                  className: _(T, `framer-1g6tktw`, v),
                  ref: c,
                  style: { ...g },
                  children: [
                    s(u.div, {
                      className: `framer-1ylhc97`,
                      "data-framer-name": `Sticky Navbar`,
                      layout: O,
                      children: [
                        k() &&
                          a(x, {
                            height: 54,
                            y: 10,
                            children: a(R, {
                              __framer__animate: { transition: _t },
                              __framer__animateOnce: !1,
                              __framer__scrollDirection: { direction: `down`, target: vt },
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-s9ol4n-container hidden-18wjliw`,
                              "data-framer-name": `Sticky Navbar`,
                              name: `Sticky Navbar`,
                              nodeId: `MbWozBomt`,
                              rendersWithMotion: !0,
                              scopeId: `VBGcZL3Ns`,
                              children: a(p, {
                                breakpoint: S,
                                overrides: { GGU8Oypi7: { variant: Y(`Me_b_qMaM`) } },
                                children: a(j, {
                                  height: `100%`,
                                  id: `MbWozBomt`,
                                  layoutId: `MbWozBomt`,
                                  name: `Sticky Navbar`,
                                  variant: Y(`raqMsV85o`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        A() &&
                          a(p, {
                            breakpoint: S,
                            overrides: { pHBNDNej7: { height: 60, width: `100vw`, y: 0 } },
                            children: a(x, {
                              children: a(w, {
                                className: `framer-ihtv5v-container hidden-1g6tktw hidden-8j85iz`,
                                nodeId: `ZZG4zdnGe`,
                                rendersWithMotion: !0,
                                scopeId: `VBGcZL3Ns`,
                                children: a(B, {
                                  __framer__animateOnce: !1,
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `ZZG4zdnGe`,
                                  layoutId: `ZZG4zdnGe`,
                                  style: { width: `100%` },
                                  variant: Y(`oqXNvb_1y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    s(u.div, {
                      className: `framer-la4r6f`,
                      "data-framer-name": `Content Grid`,
                      layout: O,
                      children: [
                        s(`div`, {
                          className: `framer-lpsiyp`,
                          "data-framer-name": `Header Section`,
                          children: [
                            s(`div`, {
                              className: `framer-1yh6d79`,
                              "data-border": !0,
                              "data-framer-name": `Privacy Badge Shell`,
                              children: [
                                a(p, {
                                  breakpoint: S,
                                  overrides: {
                                    pHBNDNej7: { y: (m?.y || 0) + 150 + 0 + 20 + 0 + 0 + 0 + 9.1 },
                                  },
                                  children: a(x, {
                                    height: 15,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 0 + 0 + 0 + 9.1,
                                    children: a(w, {
                                      className: `framer-a57uw6-container`,
                                      nodeId: `RXnFgqtws`,
                                      scopeId: `VBGcZL3Ns`,
                                      children: a(F, {
                                        height: `100%`,
                                        id: `RXnFgqtws`,
                                        layoutId: `RXnFgqtws`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                a(h, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`p`, {
                                      className: `framer-styles-preset-1kyvdj7`,
                                      "data-styles-preset": `s3xaUzb1J`,
                                      dir: `auto`,
                                      children: `Privacy Policy`,
                                    }),
                                  }),
                                  className: `framer-12cyv1a`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1qnnoid`,
                              "data-framer-name": `Header Content`,
                              children: s(`div`, {
                                className: `framer-q3qefp`,
                                "data-framer-name": `Header Copy`,
                                children: [
                                  a(h, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h1`, {
                                        className: `framer-styles-preset-11zleb5`,
                                        "data-styles-preset": `xMscHFbGZ`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                        },
                                        children: `Your privacy, protected.`,
                                      }),
                                    }),
                                    className: `framer-wymiue`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(h, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-sak9x6`,
                                        "data-styles-preset": `vVaZ0SXla`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-f48255c3-d64d-4ef7-be0f-da382213e15e, rgb(43, 53, 48))`,
                                        },
                                        children: `We believe in absolute transparency. Here is exactly how Sortia handles, secures, and respects your personal data.`,
                                      }),
                                    }),
                                    className: `framer-1leym01`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        a(`div`, {
                          className: `framer-2tk4fb`,
                          "data-framer-name": `Content Section`,
                          children: a(`div`, {
                            className: `framer-1yqqyfc`,
                            "data-framer-name": `Content Layout`,
                            children: a(me, {
                              children: a(yt, {
                                query: X(),
                                children: (e, t, n) =>
                                  a(ee, {
                                    children: e?.map(
                                      ({ id: e, lsUCe2axL: t, R2OedGNgU: n }, r) => (
                                        (t ??= ``),
                                        (n ??= ``),
                                        a(
                                          ie,
                                          {
                                            id: `A6gitEKNn-${e}`,
                                            children: a(ce.Provider, {
                                              value: { R2OedGNgU: n },
                                              children: a(`div`, {
                                                className: `framer-1319yw4`,
                                                "data-border": !0,
                                                "data-framer-name": `Content Box`,
                                                children: s(`div`, {
                                                  className: `framer-t5xkoc`,
                                                  "data-framer-name": `Content Text`,
                                                  children: [
                                                    a(fe, {
                                                      presets: {
                                                        "module:pVk4QsoHxASnVtUBp6jr/7eCYIL3dnkBSjjSduYQU/CodeBlock.js:default":
                                                          dt.AKLL0GSUg,
                                                      },
                                                      children: a(h, {
                                                        __fromCanvasComponent: !0,
                                                        children: t,
                                                        className: `framer-8k9dt0`,
                                                        fonts: [`Inter`],
                                                        stylesPresetsClassNames: {
                                                          a: `framer-styles-preset-1hhf0i6`,
                                                          blockquote: `framer-styles-preset-1gsxkzx`,
                                                          code: `framer-styles-preset-15zedwu`,
                                                          h2: `framer-styles-preset-d3e5g2`,
                                                          h3: `framer-styles-preset-1pj8wqs`,
                                                          h4: `framer-styles-preset-1t48bm3`,
                                                          p: `framer-styles-preset-1y3tbh`,
                                                        },
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    s(`div`, {
                                                      className: `framer-kypnka`,
                                                      "data-framer-name": `Content Grid`,
                                                      children: [
                                                        a(`div`, {
                                                          className: `framer-15mswgs`,
                                                          "data-framer-name": `Icon`,
                                                          children: a(b, {
                                                            className: `framer-cqkuk4`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        a(u.div, {
                                                          className: `framer-15ditcd`,
                                                          "data-framer-name": `Icon`,
                                                          style: { rotate: 180 },
                                                          children: a(b, {
                                                            className: `framer-1ijt4dr`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        a(u.div, {
                                                          className: `framer-1lqxa2t`,
                                                          "data-framer-name": `Icon`,
                                                          style: { rotate: 270 },
                                                          children: a(b, {
                                                            className: `framer-1d98e2n`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                        a(u.div, {
                                                          className: `framer-1va3r8q`,
                                                          "data-framer-name": `Icon`,
                                                          style: { rotate: 90 },
                                                          children: a(b, {
                                                            className: `framer-1jnbvix`,
                                                            requiresOverflowVisible: !0,
                                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          },
                                          e
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        }),
                        s(U, {
                          __framer__animate: { transition: xt },
                          __framer__animateOnce: !0,
                          __framer__enter: bt,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-z4y6hr`,
                          "data-framer-name": `FAQ Section`,
                          children: [
                            s(`div`, {
                              className: `framer-ni5pxk`,
                              "data-framer-name": `FAQ Intro`,
                              children: [
                                s(`div`, {
                                  className: `framer-1701qbk`,
                                  "data-framer-name": `FAQ Heading`,
                                  children: [
                                    s(`div`, {
                                      className: `framer-48rmyn`,
                                      "data-framer-name": `FAQ Badge`,
                                      children: [
                                        s(`div`, {
                                          className: `framer-agra43`,
                                          "data-border": !0,
                                          "data-framer-name": `FAQ Badge Shell`,
                                          children: [
                                            a(p, {
                                              breakpoint: S,
                                              overrides: {
                                                GGU8Oypi7: {
                                                  y:
                                                    (m?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    540 +
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
                                                pHBNDNej7: {
                                                  y:
                                                    (m?.y || 0) +
                                                    150 +
                                                    0 +
                                                    20 +
                                                    540 +
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
                                              },
                                              children: a(x, {
                                                height: 15,
                                                y:
                                                  (m?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  540 +
                                                  75 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  9.1,
                                                children: a(w, {
                                                  className: `framer-1dv3ngy-container`,
                                                  nodeId: `msxFl787a`,
                                                  scopeId: `VBGcZL3Ns`,
                                                  children: a(F, {
                                                    height: `100%`,
                                                    id: `msxFl787a`,
                                                    layoutId: `msxFl787a`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            a(h, {
                                              __fromCanvasComponent: !0,
                                              children: a(r, {
                                                children: a(`p`, {
                                                  className: `framer-styles-preset-1kyvdj7`,
                                                  "data-styles-preset": `s3xaUzb1J`,
                                                  dir: `auto`,
                                                  children: `FAQs`,
                                                }),
                                              }),
                                              className: `framer-12zumkg`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        a(h, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`h2`, {
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
                                          className: `framer-1ro6nsp`,
                                          "data-framer-name": `FAQ Badge Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    a(h, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`p`, {
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
                                      className: `framer-1wf428z`,
                                      "data-framer-name": `FAQ Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-uoesbr`,
                                  "data-framer-name": `FAQ Support CTA`,
                                  children: [
                                    a(h, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`h3`, {
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
                                      className: `framer-fl071n`,
                                      "data-framer-name": `Support CTA Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(h, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`p`, {
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
                                      className: `framer-rn40oi`,
                                      "data-framer-name": `Support CTA Copy`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(ae, {
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
                                        a(p, {
                                          breakpoint: S,
                                          overrides: {
                                            GGU8Oypi7: {
                                              y:
                                                (m?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                540 +
                                                40 +
                                                0 +
                                                0 +
                                                252.2 +
                                                55 +
                                                113,
                                            },
                                            pHBNDNej7: {
                                              y:
                                                (m?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                540 +
                                                0 +
                                                0 +
                                                0 +
                                                272.2 +
                                                40 +
                                                170,
                                            },
                                          },
                                          children: a(x, {
                                            height: 44,
                                            width: `188px`,
                                            y:
                                              (m?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              540 +
                                              75 +
                                              0 +
                                              273 +
                                              55 +
                                              113,
                                            children: a(w, {
                                              className: `framer-23yusu-container`,
                                              "data-framer-name": `CTA Button`,
                                              name: `CTA Button`,
                                              nodeId: `Tzga3Q37W`,
                                              scopeId: `VBGcZL3Ns`,
                                              children: a(p, {
                                                breakpoint: S,
                                                overrides: {
                                                  GGU8Oypi7: { TWaZPhsrs: e[1] },
                                                  pHBNDNej7: { TWaZPhsrs: e[2] },
                                                },
                                                children: a(N, {
                                                  bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                  dMzFGkb3u: !1,
                                                  dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                  F9tZ22mws: {
                                                    borderColor: `rgba(26, 26, 26, 0)`,
                                                    borderStyle: `solid`,
                                                    borderWidth: 2,
                                                  },
                                                  height: `100%`,
                                                  id: `Tzga3Q37W`,
                                                  jfeAUucDj: ve,
                                                  layoutId: `Tzga3Q37W`,
                                                  lnJBzRgIM: `Get in Touch`,
                                                  MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                  name: `CTA Button`,
                                                  ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                  SLp3DWZqR: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  TWaZPhsrs: e[0],
                                                  variant: Y(`nhzWZDlVc`),
                                                  vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                  wDmZ1dhUo: ye,
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
                                    s(`div`, {
                                      className: `framer-jn2f1h`,
                                      "data-framer-name": `FAQ Item Details`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-17kjd5u`,
                                          "data-framer-name": `Icon`,
                                          children: a(b, {
                                            className: `framer-1n5t0l4`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(u.div, {
                                          className: `framer-13ij9xq`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: a(b, {
                                            className: `framer-ll33`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(u.div, {
                                          className: `framer-1w2xu8g`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: a(b, {
                                            className: `framer-vu4svm`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(u.div, {
                                          className: `framer-2urvk6`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: a(b, {
                                            className: `framer-153w4rh`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-uv8cr4`,
                              "data-framer-name": `FAQ Items Grid`,
                              children: [
                                a(p, {
                                  breakpoint: S,
                                  overrides: {
                                    GGU8Oypi7: {
                                      width: `calc(${m?.width || `100vw`} - 80px)`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 540 + 40 + 497.2 + 0 + 0,
                                    },
                                    pHBNDNej7: {
                                      width: `calc(${m?.width || `100vw`} - 40px)`,
                                      y: (m?.y || 0) + 150 + 0 + 20 + 540 + 0 + 601.2 + 0 + 0,
                                    },
                                  },
                                  children: a(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 540 + 40 + 0 + 0,
                                    children: a(w, {
                                      className: `framer-1qigg0x-container`,
                                      "data-framer-name": `Auto Reschedule FAQ`,
                                      name: `Auto Reschedule FAQ`,
                                      nodeId: `JHAVyExxv`,
                                      scopeId: `VBGcZL3Ns`,
                                      children: a(P, {
                                        CYcMeDYwX: `If a calendar event runs late, Sortia's predictive engine instantly shifts your remaining tasks to the next available slot automatically.`,
                                        height: `100%`,
                                        id: `JHAVyExxv`,
                                        layoutId: `JHAVyExxv`,
                                        name: `Auto Reschedule FAQ`,
                                        style: { width: `100%` },
                                        variant: Y(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `How does the AI auto-reschedule my day?`,
                                      }),
                                    }),
                                  }),
                                }),
                                a(p, {
                                  breakpoint: S,
                                  overrides: {
                                    GGU8Oypi7: {
                                      width: `calc(${m?.width || `100vw`} - 80px)`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 540 + 40 + 497.2 + 0 + 141,
                                    },
                                    pHBNDNej7: {
                                      width: `calc(${m?.width || `100vw`} - 40px)`,
                                      y: (m?.y || 0) + 150 + 0 + 20 + 540 + 0 + 601.2 + 0 + 141,
                                    },
                                  },
                                  children: a(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 540 + 40 + 0 + 141,
                                    children: a(w, {
                                      className: `framer-2ekovk-container`,
                                      "data-framer-name": `Calendar Sync FAQ`,
                                      name: `Calendar Sync FAQ`,
                                      nodeId: `ZfPQlboP4`,
                                      scopeId: `VBGcZL3Ns`,
                                      children: a(P, {
                                        CYcMeDYwX: `We feature full, real-time two-way synchronization with Google Calendar, Apple Calendar, and Outlook to completely prevent double-booking.`,
                                        height: `100%`,
                                        id: `ZfPQlboP4`,
                                        layoutId: `ZfPQlboP4`,
                                        name: `Calendar Sync FAQ`,
                                        style: { width: `100%` },
                                        variant: Y(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Which calendars does Sortia sync with?`,
                                      }),
                                    }),
                                  }),
                                }),
                                a(p, {
                                  breakpoint: S,
                                  overrides: {
                                    GGU8Oypi7: {
                                      width: `calc(${m?.width || `100vw`} - 80px)`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 540 + 40 + 497.2 + 0 + 282,
                                    },
                                    pHBNDNej7: {
                                      width: `calc(${m?.width || `100vw`} - 40px)`,
                                      y: (m?.y || 0) + 150 + 0 + 20 + 540 + 0 + 601.2 + 0 + 282,
                                    },
                                  },
                                  children: a(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 540 + 40 + 0 + 282,
                                    children: a(w, {
                                      className: `framer-ryrel9-container`,
                                      "data-framer-name": `Voice Notes FAQ`,
                                      name: `Voice Notes FAQ`,
                                      nodeId: `o9fGHaA6Y`,
                                      scopeId: `VBGcZL3Ns`,
                                      children: a(P, {
                                        CYcMeDYwX: `Not at all. Speak entirely naturally into the capture bar; our advanced NLP automatically extracts deadlines, context, and action items.`,
                                        height: `100%`,
                                        id: `o9fGHaA6Y`,
                                        layoutId: `o9fGHaA6Y`,
                                        name: `Voice Notes FAQ`,
                                        style: { width: `100%` },
                                        variant: Y(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Do I have to format my voice notes?`,
                                      }),
                                    }),
                                  }),
                                }),
                                a(p, {
                                  breakpoint: S,
                                  overrides: {
                                    GGU8Oypi7: {
                                      width: `calc(${m?.width || `100vw`} - 80px)`,
                                      y: (m?.y || 0) + 150 + 0 + 0 + 540 + 40 + 497.2 + 0 + 423,
                                    },
                                    pHBNDNej7: {
                                      width: `calc(${m?.width || `100vw`} - 40px)`,
                                      y: (m?.y || 0) + 150 + 0 + 20 + 540 + 0 + 601.2 + 0 + 423,
                                    },
                                  },
                                  children: a(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 540 + 40 + 0 + 423,
                                    children: a(w, {
                                      className: `framer-16uz44j-container`,
                                      "data-framer-name": `Data Safety FAQ`,
                                      name: `Data Safety FAQ`,
                                      nodeId: `DD9JrnOdz`,
                                      scopeId: `VBGcZL3Ns`,
                                      children: a(P, {
                                        CYcMeDYwX: `Absolutely. We use industry-standard, end-to-end encryption to read your schedule, and your personal data is never sold or shared.`,
                                        height: `100%`,
                                        id: `DD9JrnOdz`,
                                        layoutId: `DD9JrnOdz`,
                                        name: `Data Safety FAQ`,
                                        style: { width: `100%` },
                                        variant: Y(`BJlTLC2oV`),
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
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-r29S7.framer-14ecahs, .framer-r29S7 .framer-14ecahs { display: block; }`,
        `.framer-r29S7.framer-1g6tktw { align-content: center; align-items: center; background-color: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, #f2f7f4); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 150px 0px 0px 0px; position: relative; width: 1200px; }`,
        `.framer-r29S7 .framer-1ylhc97 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 10px 200px 10px 200px; position: fixed; right: 0px; top: 0px; z-index: 7; }`,
        `.framer-r29S7 .framer-s9ol4n-container, .framer-r29S7 .framer-a57uw6-container, .framer-r29S7 .framer-1dv3ngy-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-r29S7 .framer-ihtv5v-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-r29S7 .framer-la4r6f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 6; }`,
        `.framer-r29S7 .framer-lpsiyp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-r29S7 .framer-1yh6d79, .framer-r29S7 .framer-agra43 { --border-bottom-width: 1px; --border-color: var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, #d8e2dc); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, #e6f7ed); border-bottom-left-radius: 45px; border-bottom-right-radius: 45px; border-top-left-radius: 45px; border-top-right-radius: 45px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 9px 5px 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-r29S7 .framer-12cyv1a, .framer-r29S7 .framer-12zumkg { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-r29S7 .framer-1qnnoid { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 922px; }`,
        `.framer-r29S7 .framer-q3qefp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-r29S7 .framer-wymiue { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-r29S7 .framer-1leym01 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 799px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-r29S7 .framer-2tk4fb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-r29S7 .framer-1yqqyfc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1120px; }`,
        `.framer-r29S7 .framer-1319yw4 { --border-bottom-width: 1px; --border-color: var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, #c8d3cd); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 2px 2px 2px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, #b9d19e); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-r29S7 .framer-t5xkoc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 1px; }`,
        `.framer-r29S7 .framer-8k9dt0 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-r29S7 .framer-kypnka, .framer-r29S7 .framer-jn2f1h { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-r29S7 .framer-15mswgs, .framer-r29S7 .framer-17kjd5u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-r29S7 .framer-cqkuk4, .framer-r29S7 .framer-1d98e2n, .framer-r29S7 .framer-1jnbvix, .framer-r29S7 .framer-1n5t0l4, .framer-r29S7 .framer-vu4svm, .framer-r29S7 .framer-153w4rh { height: 15px; position: relative; width: 15px; }`,
        `.framer-r29S7 .framer-15ditcd, .framer-r29S7 .framer-13ij9xq { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 15px; min-width: 15px; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
        `.framer-r29S7 .framer-1ijt4dr, .framer-r29S7 .framer-ll33 { height: 15px; left: 0px; position: absolute; top: 1px; width: 15px; }`,
        `.framer-r29S7 .framer-1lqxa2t, .framer-r29S7 .framer-1w2xu8g { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
        `.framer-r29S7 .framer-1va3r8q, .framer-r29S7 .framer-2urvk6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-r29S7 .framer-z4y6hr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1200px; }`,
        `.framer-r29S7 .framer-ni5pxk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 483px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-r29S7 .framer-1701qbk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 521px; }`,
        `.framer-r29S7 .framer-48rmyn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-r29S7 .framer-1ro6nsp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 412px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-r29S7 .framer-1wf428z { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 398px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-r29S7 .framer-uoesbr { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87)) 100%); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 1px 1px 6px 0px var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, #6ac68f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 210px; justify-content: center; overflow: visible; padding: 55px; position: relative; width: 100%; }`,
        `.framer-r29S7 .framer-fl071n, .framer-r29S7 .framer-rn40oi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-r29S7 .framer-23yusu-container { flex: none; height: 44px; position: relative; width: 188px; z-index: 2; }`,
        `.framer-r29S7 .framer-uv8cr4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-r29S7 .framer-1qigg0x-container, .framer-r29S7 .framer-2ekovk-container, .framer-r29S7 .framer-ryrel9-container, .framer-r29S7 .framer-16uz44j-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Ke,
        ...Qe,
        ...Pe,
        ...Ae,
        ...Ge,
        ...Ne,
        ...Oe,
        ...Re,
        ...rt,
        ...ct,
        `.framer-r29S7[data-border="true"]::after, .framer-r29S7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-r29S7.framer-1g6tktw { width: 810px; } .framer-r29S7 .framer-1qnnoid, .framer-r29S7 .framer-1yqqyfc { width: 100%; } .framer-r29S7 .framer-z4y6hr { flex-direction: column; width: 100%; } .framer-r29S7 .framer-ni5pxk { flex: none; gap: 40px; height: min-content; justify-content: center; width: 100%; } .framer-r29S7 .framer-uv8cr4 { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-r29S7.framer-1g6tktw { width: 390px; } .framer-r29S7 .framer-1ylhc97 { flex-direction: column; overflow: visible; padding: 0px; right: unset; width: 100%; } .framer-r29S7 .framer-ihtv5v-container, .framer-r29S7 .framer-uv8cr4 { flex: none; width: 100%; } .framer-r29S7 .framer-la4r6f { padding: 20px; } .framer-r29S7 .framer-1qnnoid, .framer-r29S7 .framer-1leym01, .framer-r29S7 .framer-1yqqyfc, .framer-r29S7 .framer-1701qbk, .framer-r29S7 .framer-1ro6nsp { width: 100%; } .framer-r29S7 .framer-2tk4fb { padding: 0px; } .framer-r29S7 .framer-z4y6hr { flex-direction: column; padding: 0px; width: 100%; } .framer-r29S7 .framer-ni5pxk { flex: none; gap: 60px; height: min-content; justify-content: center; width: 100%; } .framer-r29S7 .framer-uoesbr { height: min-content; padding: 40px; }}`,
      ],
      `framer-r29S7`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 4230, width: 1200 }),
    y(
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
          ],
        },
        ...L,
        ...z,
        ...ht,
        ...V,
        ...H,
        ...T(Je),
        ...T($e),
        ...T(Ie),
        ...T(Me),
        ...T(qe),
        ...T(Se),
        ...T(Te),
        ...T(ze),
        ...T(at),
        ...T(ut),
        ...(I?.AKLL0GSUg ? v(I?.AKLL0GSUg) : []),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = he.get(X(), n);
        return Promise.allSettled([
          r.preload(),
          E(j, {}, t),
          E(M, {}, t),
          E(F, {}, t),
          E(N, {}, t),
          E(P, {}, t),
        ]);
      },
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerVBGcZL3Ns`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"GGU8Oypi7":{"layout":["fixed","auto"]},"pHBNDNej7":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `4230`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, K as queryParamNames };
//# sourceMappingURL=x75D334CyVI3irr9begIWcEGR0RvU-endPmiHTLQICo.Db5-7-Cr.mjs.map
