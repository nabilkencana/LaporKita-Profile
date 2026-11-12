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
import { a as re, r as l, t as u, w as d } from "./motion.DA7Wf6OE.mjs";
import {
  $ as f,
  At as p,
  C as m,
  Ct as h,
  D as g,
  E as ie,
  G as _,
  I as v,
  M as y,
  O as b,
  Ot as ae,
  Pt as oe,
  S as se,
  Tt as ce,
  a as x,
  ft as le,
  gt as S,
  ht as ue,
  i as de,
  m as C,
  mt as fe,
  n as pe,
  o as w,
  ot as T,
  q as E,
  vt as me,
  yt as he,
  z as D,
} from "./framer.DwK__Hy9.mjs";
import {
  C as ge,
  E as O,
  S as k,
  T as _e,
  _ as ve,
  a as ye,
  b as A,
  c as j,
  d as M,
  f as be,
  g as xe,
  h as Se,
  i as Ce,
  l as we,
  m as Te,
  n as Ee,
  o as De,
  p as Oe,
  r as N,
  s as ke,
  t as P,
  u as Ae,
  v as je,
  w as Me,
  x as F,
  y as Ne,
} from "./shared-lib.BFsVOxQ4.mjs";
import {
  a as Pe,
  c as Fe,
  d as I,
  f as Ie,
  i as Le,
  l as L,
  n as Re,
  o as ze,
  r as Be,
  s as Ve,
  t as He,
  u as Ue,
} from "./Z7CzuxNJN.tjaA4hZo.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./xMscHFbGZ.CRJhyUtz.mjs";
import { a as Je, i as Ye, n as Xe, o as Ze, r as Qe, t as $e } from "./lrmGPCM1k.C6_jRiJu.mjs";
import et, { t as tt } from "./L7gksA8wBhum2A4852xUf11FBxZPDcBFuJMxKu54-ig.BcjWBWYA.mjs";
var R, z, nt, B, V, H, U, W, G, K, q, rt, it, at, ot, J, st, Y, X, ct, lt, ut, Z, dt, ft, Q, $;
e(() => {
  (o(),
    f(),
    u(),
    c(),
    O(),
    Me(),
    Ce(),
    Ie(),
    k(),
    Ue(),
    Ee(),
    Ze(),
    xe(),
    Ye(),
    be(),
    j(),
    Fe(),
    A(),
    We(),
    Le(),
    tt(),
    (R = _(N)),
    (z = p(w)),
    (nt = _(P)),
    (B = oe(P)),
    (V = _(L)),
    (H = _(F)),
    (U = _(I)),
    (W = p(d.div)),
    (G = {
      B3HCa5r9e: `(min-width: 810px) and (max-width: 1199.98px)`,
      BnOXZ13MB: `(max-width: 809.98px)`,
      Zvk_yylRl: `(min-width: 1200px)`,
    }),
    (K = () => typeof document < `u`),
    (q = []),
    (rt = `framer-eCJlx`),
    (it = {
      B3HCa5r9e: `framer-v-1fjufoo`,
      BnOXZ13MB: `framer-v-10td55s`,
      Zvk_yylRl: `framer-v-14v01kq`,
    }),
    (at = (e, t, n) => (e && t ? `position` : n)),
    (ot = (e, t) => `translateX(-50%) ${t}`),
    (J = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (st = {
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
      from: { alias: `UQBf2D5O8`, data: Je, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `UQBf2D5O8`, name: `EhTU7PJjM`, type: `Identifier` },
        { collection: `UQBf2D5O8`, name: `R2OedGNgU`, type: `Identifier` },
        { collection: `UQBf2D5O8`, name: `id`, type: `Identifier` },
      ],
    })),
    (ct = ({ query: e, pageSize: t, children: n }) => n(h(e))),
    (lt = {
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
    (ut = { delay: 0.1, duration: 0.4, ease: [0.62, 0, 0.36, 1], type: `tween` }),
    (Z = { Desktop: `Zvk_yylRl`, Phone: `BnOXZ13MB`, Tablet: `B3HCa5r9e` }),
    (dt = ({ value: e }) =>
      S()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ft = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `Zvk_yylRl`,
    })),
    (Q = ae(
      i(function (e, i) {
        let o = n(null),
          c = i ?? o,
          u = ne(),
          { activeLocale: f, setLocale: p } = me(),
          h = le(),
          { style: _, className: y, layoutId: ae, variant: oe, ...S } = ft(e);
        he(te(() => et({}, f), [f]));
        let [T, E] = ue(oe, G, !1),
          D = v(rt, Pe, qe, ve, ye, He, we, Oe, $e),
          O = t(C)?.isLayoutTemplate,
          k = !!t(re)?.transition?.layout,
          A = at(O, k),
          j = () => !K() || T !== `BnOXZ13MB`,
          M = () => !K() || T === `BnOXZ13MB`;
        return (
          ce(),
          fe({}),
          a(C.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Z,
              primaryVariantId: `Zvk_yylRl`,
              variantClassNames: it,
            },
            children: s(l, {
              id: ae ?? u,
              children: [
                a(dt, {
                  value: `html body { background: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)); }`,
                }),
                s(d.div, {
                  ...S,
                  className: v(D, `framer-14v01kq`, y),
                  ref: c,
                  style: { ..._ },
                  children: [
                    s(d.div, {
                      className: `framer-1odqvi`,
                      "data-framer-name": `Sticky Navbar`,
                      layout: A,
                      transformTemplate: ot,
                      children: [
                        j() &&
                          a(x, {
                            height: 54,
                            y: 10,
                            children: a(z, {
                              __framer__animate: { transition: J },
                              __framer__animateOnce: !1,
                              __framer__scrollDirection: { direction: `down`, target: st },
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-ofof5m-container hidden-10td55s`,
                              "data-framer-name": `Sticky Navbar`,
                              name: `Sticky Navbar`,
                              nodeId: `o8FeVdJsz`,
                              rendersWithMotion: !0,
                              scopeId: `cUB6kKpVd`,
                              children: a(m, {
                                breakpoint: T,
                                overrides: { B3HCa5r9e: { variant: Y(`Me_b_qMaM`) } },
                                children: a(N, {
                                  height: `100%`,
                                  id: `o8FeVdJsz`,
                                  layoutId: `o8FeVdJsz`,
                                  name: `Sticky Navbar`,
                                  variant: Y(`raqMsV85o`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        M() &&
                          a(m, {
                            breakpoint: T,
                            overrides: { BnOXZ13MB: { height: 60, width: `100vw`, y: 0 } },
                            children: a(x, {
                              children: a(w, {
                                className: `framer-1o83val-container hidden-14v01kq hidden-1fjufoo`,
                                nodeId: `HLngUHlWj`,
                                rendersWithMotion: !0,
                                scopeId: `cUB6kKpVd`,
                                children: a(B, {
                                  __framer__animateOnce: !1,
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `HLngUHlWj`,
                                  layoutId: `HLngUHlWj`,
                                  style: { width: `100%` },
                                  variant: Y(`oqXNvb_1y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    s(d.div, {
                      className: `framer-1awvxla`,
                      "data-framer-name": `Main`,
                      layout: A,
                      children: [
                        s(`div`, {
                          className: `framer-gb0b53`,
                          "data-framer-name": `Header Section`,
                          children: [
                            s(`div`, {
                              className: `framer-1hkxc4x`,
                              "data-border": !0,
                              "data-framer-name": `FAQ Badge Shell`,
                              children: [
                                a(x, {
                                  height: 15,
                                  y: (h?.y || 0) + 150 + 0 + 0 + 0 + 0 + 0 + 9.1,
                                  children: a(w, {
                                    className: `framer-rgw3wz-container`,
                                    nodeId: `x2KVSLX7g`,
                                    scopeId: `cUB6kKpVd`,
                                    children: a(L, {
                                      height: `100%`,
                                      id: `x2KVSLX7g`,
                                      layoutId: `x2KVSLX7g`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                a(g, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`p`, {
                                      className: `framer-styles-preset-1kyvdj7`,
                                      "data-styles-preset": `s3xaUzb1J`,
                                      dir: `auto`,
                                      children: `Terms of Services`,
                                    }),
                                  }),
                                  className: `framer-gv9brd`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-1ds3j8z`,
                              "data-framer-name": `Header Content`,
                              children: s(`div`, {
                                className: `framer-thoc09`,
                                "data-framer-name": `Header Copy`,
                                children: [
                                  a(g, {
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
                                        children: `Legal & Terms.`,
                                      }),
                                    }),
                                    className: `framer-1vz50mk`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(g, {
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
                                        children: `The legal framework that outlines our commitment to you, and your rights as a Sortia user. No confusing jargon, just the important details.`,
                                      }),
                                    }),
                                    className: `framer-ez5fyo`,
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
                          className: `framer-1ang4mt`,
                          "data-framer-name": `Content Section`,
                          children: a(`div`, {
                            className: `framer-ehoqv8`,
                            "data-framer-name": `Content Layout`,
                            children: a(pe, {
                              children: a(ct, {
                                query: X(),
                                children: (e, t, n) =>
                                  a(ee, {
                                    children: e?.map(
                                      ({ EhTU7PJjM: e, id: t, R2OedGNgU: n }, r) => (
                                        (e ??= ``),
                                        (n ??= ``),
                                        a(
                                          l,
                                          {
                                            id: `UQBf2D5O8-${t}`,
                                            children: a(se.Provider, {
                                              value: { R2OedGNgU: n },
                                              children: s(`div`, {
                                                className: `framer-ykgern`,
                                                "data-border": !0,
                                                "data-framer-name": `Content Box`,
                                                children: [
                                                  a(de, {
                                                    presets: {},
                                                    children: a(g, {
                                                      __fromCanvasComponent: !0,
                                                      children: e,
                                                      className: `framer-1h4vadi`,
                                                      fonts: [`Inter`],
                                                      stylesPresetsClassNames: {
                                                        blockquote: `framer-styles-preset-1gsxkzx`,
                                                        h1: `framer-styles-preset-11zleb5`,
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
                                                    className: `framer-up1yjs`,
                                                    "data-framer-name": `Content Grid`,
                                                    children: [
                                                      a(`div`, {
                                                        className: `framer-18sxqmz`,
                                                        "data-framer-name": `Icon`,
                                                        children: a(b, {
                                                          className: `framer-13lzci`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                      a(d.div, {
                                                        className: `framer-f1mn2o`,
                                                        "data-framer-name": `Icon`,
                                                        style: { rotate: 180 },
                                                        children: a(b, {
                                                          className: `framer-8akwim`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                      a(d.div, {
                                                        className: `framer-1yt0gl6`,
                                                        "data-framer-name": `Icon`,
                                                        style: { rotate: 270 },
                                                        children: a(b, {
                                                          className: `framer-1ca80ro`,
                                                          requiresOverflowVisible: !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                      a(d.div, {
                                                        className: `framer-1v1vi0j`,
                                                        "data-framer-name": `Icon`,
                                                        style: { rotate: 90 },
                                                        children: a(b, {
                                                          className: `framer-11xl6q`,
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
                                          },
                                          t
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        }),
                        s(W, {
                          __framer__animate: { transition: ut },
                          __framer__animateOnce: !0,
                          __framer__enter: lt,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-q7duz3`,
                          "data-framer-name": `FAQ Section`,
                          children: [
                            s(`div`, {
                              className: `framer-1drv6hm`,
                              "data-framer-name": `FAQ Intro`,
                              children: [
                                s(`div`, {
                                  className: `framer-1o7fvio`,
                                  "data-framer-name": `FAQ Heading`,
                                  children: [
                                    s(`div`, {
                                      className: `framer-1m384il`,
                                      "data-framer-name": `FAQ Badge`,
                                      children: [
                                        s(`div`, {
                                          className: `framer-fbugv`,
                                          "data-border": !0,
                                          "data-framer-name": `FAQ Badge Shell`,
                                          children: [
                                            a(m, {
                                              breakpoint: T,
                                              overrides: {
                                                B3HCa5r9e: {
                                                  y:
                                                    (h?.y || 0) +
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
                                                BnOXZ13MB: {
                                                  y:
                                                    (h?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    540 +
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
                                              },
                                              children: a(x, {
                                                height: 15,
                                                y:
                                                  (h?.y || 0) +
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
                                                  className: `framer-e1gmkh-container`,
                                                  nodeId: `Oe0jxcXPP`,
                                                  scopeId: `cUB6kKpVd`,
                                                  children: a(L, {
                                                    height: `100%`,
                                                    id: `Oe0jxcXPP`,
                                                    layoutId: `Oe0jxcXPP`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            a(g, {
                                              __fromCanvasComponent: !0,
                                              children: a(r, {
                                                children: a(`p`, {
                                                  className: `framer-styles-preset-1kyvdj7`,
                                                  "data-styles-preset": `s3xaUzb1J`,
                                                  dir: `auto`,
                                                  children: `FAQs`,
                                                }),
                                              }),
                                              className: `framer-6kz6i9`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        a(g, {
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
                                          className: `framer-1y3mqkr`,
                                          "data-framer-name": `FAQ Badge Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    a(g, {
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
                                      className: `framer-yua7dr`,
                                      "data-framer-name": `FAQ Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-1ah5djw`,
                                  "data-framer-name": `FAQ Support CTA`,
                                  children: [
                                    a(g, {
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
                                      className: `framer-1syxxet`,
                                      "data-framer-name": `Support CTA Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(g, {
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
                                      className: `framer-8v31us`,
                                      "data-framer-name": `Support CTA Copy`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(ie, {
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
                                        a(m, {
                                          breakpoint: T,
                                          overrides: {
                                            B3HCa5r9e: {
                                              y:
                                                (h?.y || 0) +
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
                                            BnOXZ13MB: {
                                              y:
                                                (h?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                540 +
                                                20 +
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
                                              (h?.y || 0) +
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
                                              className: `framer-54lspy-container`,
                                              "data-framer-name": `CTA Button`,
                                              name: `CTA Button`,
                                              nodeId: `Ia2ULRjkR`,
                                              scopeId: `cUB6kKpVd`,
                                              children: a(m, {
                                                breakpoint: T,
                                                overrides: {
                                                  B3HCa5r9e: { TWaZPhsrs: e[1] },
                                                  BnOXZ13MB: { TWaZPhsrs: e[2] },
                                                },
                                                children: a(F, {
                                                  bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                  dMzFGkb3u: !1,
                                                  dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                  F9tZ22mws: {
                                                    borderColor: `rgba(26, 26, 26, 0)`,
                                                    borderStyle: `solid`,
                                                    borderWidth: 2,
                                                  },
                                                  height: `100%`,
                                                  id: `Ia2ULRjkR`,
                                                  jfeAUucDj: ge,
                                                  layoutId: `Ia2ULRjkR`,
                                                  lnJBzRgIM: `Get in Touch`,
                                                  MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                  name: `CTA Button`,
                                                  ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                  SLp3DWZqR: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  TWaZPhsrs: e[0],
                                                  variant: Y(`nhzWZDlVc`),
                                                  vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                  wDmZ1dhUo: _e,
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
                                      className: `framer-nl83yy`,
                                      "data-framer-name": `FAQ Item Details`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-e314dt`,
                                          "data-framer-name": `Icon`,
                                          children: a(b, {
                                            className: `framer-139agt2`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(d.div, {
                                          className: `framer-agsrtv`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: a(b, {
                                            className: `framer-1lv5041`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(d.div, {
                                          className: `framer-p1ep7a`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: a(b, {
                                            className: `framer-478zo8`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(d.div, {
                                          className: `framer-lj6ncj`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: a(b, {
                                            className: `framer-wd0aa0`,
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
                              className: `framer-rsdntq`,
                              "data-framer-name": `FAQ Items Grid`,
                              children: [
                                a(m, {
                                  breakpoint: T,
                                  overrides: {
                                    B3HCa5r9e: {
                                      width: `calc(${h?.width || `100vw`} - 80px)`,
                                      y: (h?.y || 0) + 150 + 0 + 0 + 540 + 40 + 497.2 + 0 + 0,
                                    },
                                    BnOXZ13MB: {
                                      width: `calc(${h?.width || `100vw`} - 80px)`,
                                      y: (h?.y || 0) + 150 + 0 + 0 + 540 + 20 + 601.2 + 0 + 0,
                                    },
                                  },
                                  children: a(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (h?.y || 0) + 150 + 0 + 0 + 540 + 40 + 0 + 0,
                                    children: a(w, {
                                      className: `framer-10ehiin-container`,
                                      "data-framer-name": `Auto Reschedule FAQ`,
                                      name: `Auto Reschedule FAQ`,
                                      nodeId: `ZU8mBHnq5`,
                                      scopeId: `cUB6kKpVd`,
                                      children: a(I, {
                                        CYcMeDYwX: `If a calendar event runs late, Sortia's predictive engine instantly shifts your remaining tasks to the next available slot automatically.`,
                                        height: `100%`,
                                        id: `ZU8mBHnq5`,
                                        layoutId: `ZU8mBHnq5`,
                                        name: `Auto Reschedule FAQ`,
                                        style: { width: `100%` },
                                        variant: Y(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `How does the AI auto-reschedule my day?`,
                                      }),
                                    }),
                                  }),
                                }),
                                a(m, {
                                  breakpoint: T,
                                  overrides: {
                                    B3HCa5r9e: {
                                      width: `calc(${h?.width || `100vw`} - 80px)`,
                                      y: (h?.y || 0) + 150 + 0 + 0 + 540 + 40 + 497.2 + 0 + 141,
                                    },
                                    BnOXZ13MB: {
                                      width: `calc(${h?.width || `100vw`} - 80px)`,
                                      y: (h?.y || 0) + 150 + 0 + 0 + 540 + 20 + 601.2 + 0 + 141,
                                    },
                                  },
                                  children: a(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (h?.y || 0) + 150 + 0 + 0 + 540 + 40 + 0 + 141,
                                    children: a(w, {
                                      className: `framer-1hoh1yz-container`,
                                      "data-framer-name": `Calendar Sync FAQ`,
                                      name: `Calendar Sync FAQ`,
                                      nodeId: `nK_pdkIWs`,
                                      scopeId: `cUB6kKpVd`,
                                      children: a(I, {
                                        CYcMeDYwX: `We feature full, real-time two-way synchronization with Google Calendar, Apple Calendar, and Outlook to completely prevent double-booking.`,
                                        height: `100%`,
                                        id: `nK_pdkIWs`,
                                        layoutId: `nK_pdkIWs`,
                                        name: `Calendar Sync FAQ`,
                                        style: { width: `100%` },
                                        variant: Y(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Which calendars does Sortia sync with?`,
                                      }),
                                    }),
                                  }),
                                }),
                                a(m, {
                                  breakpoint: T,
                                  overrides: {
                                    B3HCa5r9e: {
                                      width: `calc(${h?.width || `100vw`} - 80px)`,
                                      y: (h?.y || 0) + 150 + 0 + 0 + 540 + 40 + 497.2 + 0 + 282,
                                    },
                                    BnOXZ13MB: {
                                      width: `calc(${h?.width || `100vw`} - 80px)`,
                                      y: (h?.y || 0) + 150 + 0 + 0 + 540 + 20 + 601.2 + 0 + 282,
                                    },
                                  },
                                  children: a(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (h?.y || 0) + 150 + 0 + 0 + 540 + 40 + 0 + 282,
                                    children: a(w, {
                                      className: `framer-vsljj0-container`,
                                      "data-framer-name": `Voice Notes FAQ`,
                                      name: `Voice Notes FAQ`,
                                      nodeId: `XJFisJhOD`,
                                      scopeId: `cUB6kKpVd`,
                                      children: a(I, {
                                        CYcMeDYwX: `Not at all. Speak entirely naturally into the capture bar; our advanced NLP automatically extracts deadlines, context, and action items.`,
                                        height: `100%`,
                                        id: `XJFisJhOD`,
                                        layoutId: `XJFisJhOD`,
                                        name: `Voice Notes FAQ`,
                                        style: { width: `100%` },
                                        variant: Y(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Do I have to format my voice notes?`,
                                      }),
                                    }),
                                  }),
                                }),
                                a(m, {
                                  breakpoint: T,
                                  overrides: {
                                    B3HCa5r9e: {
                                      width: `calc(${h?.width || `100vw`} - 80px)`,
                                      y: (h?.y || 0) + 150 + 0 + 0 + 540 + 40 + 497.2 + 0 + 423,
                                    },
                                    BnOXZ13MB: {
                                      width: `calc(${h?.width || `100vw`} - 80px)`,
                                      y: (h?.y || 0) + 150 + 0 + 0 + 540 + 20 + 601.2 + 0 + 423,
                                    },
                                  },
                                  children: a(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (h?.y || 0) + 150 + 0 + 0 + 540 + 40 + 0 + 423,
                                    children: a(w, {
                                      className: `framer-ewotou-container`,
                                      "data-framer-name": `Data Safety FAQ`,
                                      name: `Data Safety FAQ`,
                                      nodeId: `uT_fgsQ4S`,
                                      scopeId: `cUB6kKpVd`,
                                      children: a(I, {
                                        CYcMeDYwX: `Absolutely. We use industry-standard, end-to-end encryption to read your schedule, and your personal data is never sold or shared.`,
                                        height: `100%`,
                                        id: `uT_fgsQ4S`,
                                        layoutId: `uT_fgsQ4S`,
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
        `.framer-eCJlx.framer-6cma6i, .framer-eCJlx .framer-6cma6i { display: block; }`,
        `.framer-eCJlx.framer-14v01kq { align-content: center; align-items: center; background-color: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, #f2f7f4); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 150px 0px 0px 0px; position: relative; width: 1200px; }`,
        `.framer-eCJlx .framer-1odqvi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 10px 200px 10px 200px; position: fixed; top: 0px; transform: translateX(-50%); width: 1200px; z-index: 7; }`,
        `.framer-eCJlx .framer-ofof5m-container, .framer-eCJlx .framer-rgw3wz-container, .framer-eCJlx .framer-e1gmkh-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-eCJlx .framer-1o83val-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-eCJlx .framer-1awvxla { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; z-index: 6; }`,
        `.framer-eCJlx .framer-gb0b53 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCJlx .framer-1hkxc4x, .framer-eCJlx .framer-fbugv { --border-bottom-width: 1px; --border-color: var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, #d8e2dc); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, #e6f7ed); border-bottom-left-radius: 45px; border-bottom-right-radius: 45px; border-top-left-radius: 45px; border-top-right-radius: 45px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 9px 5px 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-eCJlx .framer-gv9brd, .framer-eCJlx .framer-6kz6i9 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-eCJlx .framer-1ds3j8z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 922px; }`,
        `.framer-eCJlx .framer-thoc09 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCJlx .framer-1vz50mk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eCJlx .framer-ez5fyo { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 799px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eCJlx .framer-1ang4mt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-eCJlx .framer-ehoqv8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCJlx .framer-ykgern { --border-bottom-width: 1px; --border-color: var(--token-99be598a-080f-41fe-a8a5-6f54ed447eb3, #c8d3cd); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 2px 2px 2px 0px var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, #b9d19e); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 30px; position: relative; width: 100%; }`,
        `.framer-eCJlx .framer-1h4vadi { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-eCJlx .framer-up1yjs, .framer-eCJlx .framer-nl83yy { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-eCJlx .framer-18sxqmz, .framer-eCJlx .framer-e314dt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-eCJlx .framer-13lzci, .framer-eCJlx .framer-1ca80ro, .framer-eCJlx .framer-11xl6q, .framer-eCJlx .framer-139agt2, .framer-eCJlx .framer-478zo8, .framer-eCJlx .framer-wd0aa0 { height: 15px; position: relative; width: 15px; }`,
        `.framer-eCJlx .framer-f1mn2o, .framer-eCJlx .framer-agsrtv { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 15px; min-width: 15px; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
        `.framer-eCJlx .framer-8akwim, .framer-eCJlx .framer-1lv5041 { height: 15px; left: 0px; position: absolute; top: 1px; width: 15px; }`,
        `.framer-eCJlx .framer-1yt0gl6, .framer-eCJlx .framer-p1ep7a { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
        `.framer-eCJlx .framer-1v1vi0j, .framer-eCJlx .framer-lj6ncj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-eCJlx .framer-q7duz3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1200px; }`,
        `.framer-eCJlx .framer-1drv6hm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 483px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-eCJlx .framer-1o7fvio { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 521px; }`,
        `.framer-eCJlx .framer-1m384il { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-eCJlx .framer-1y3mqkr { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 412px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eCJlx .framer-yua7dr { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 398px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-eCJlx .framer-1ah5djw { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87)) 100%); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 1px 1px 6px 0px var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, #6ac68f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 210px; justify-content: center; overflow: visible; padding: 55px; position: relative; width: 100%; }`,
        `.framer-eCJlx .framer-1syxxet, .framer-eCJlx .framer-8v31us { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-eCJlx .framer-54lspy-container { flex: none; height: 44px; position: relative; width: 188px; z-index: 2; }`,
        `.framer-eCJlx .framer-rsdntq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-eCJlx .framer-10ehiin-container, .framer-eCJlx .framer-1hoh1yz-container, .framer-eCJlx .framer-vsljj0-container, .framer-eCJlx .framer-ewotou-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...ze,
        ...Ge,
        ...je,
        ...De,
        ...Re,
        ...Ae,
        ...Te,
        ...Xe,
        `.framer-eCJlx[data-border="true"]::after, .framer-eCJlx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-eCJlx.framer-14v01kq { width: 810px; } .framer-eCJlx .framer-1odqvi, .framer-eCJlx .framer-1awvxla, .framer-eCJlx .framer-1ds3j8z { width: 100%; } .framer-eCJlx .framer-q7duz3 { flex-direction: column; width: 100%; } .framer-eCJlx .framer-1drv6hm { flex: none; gap: 40px; height: min-content; justify-content: center; width: 100%; } .framer-eCJlx .framer-rsdntq { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-eCJlx.framer-14v01kq { width: 390px; } .framer-eCJlx .framer-1odqvi { flex-direction: column; overflow: visible; padding: 0px; width: 100%; } .framer-eCJlx .framer-1o83val-container { flex: none; order: 0; width: 100%; } .framer-eCJlx .framer-1awvxla { padding: 0px 20px 0px 20px; width: 100%; } .framer-eCJlx .framer-1ds3j8z, .framer-eCJlx .framer-ez5fyo, .framer-eCJlx .framer-1o7fvio, .framer-eCJlx .framer-1y3mqkr { width: 100%; } .framer-eCJlx .framer-1ang4mt { padding: 0px; } .framer-eCJlx .framer-q7duz3 { flex-direction: column; padding: 20px; width: 100%; } .framer-eCJlx .framer-1drv6hm { flex: none; gap: 60px; height: min-content; justify-content: center; width: 100%; } .framer-eCJlx .framer-1ah5djw { height: min-content; padding: 40px; } .framer-eCJlx .framer-rsdntq { flex: none; width: 100%; }}`,
      ],
      `framer-eCJlx`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 4603, width: 1200 }),
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
        ...R,
        ...nt,
        ...V,
        ...H,
        ...U,
        ...E(Ve),
        ...E(Ke),
        ...E(Ne),
        ...E(ke),
        ...E(Be),
        ...E(M),
        ...E(Se),
        ...E(Qe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = T.get(X(), n);
        return Promise.allSettled([
          r.preload(),
          D(N, {}, t),
          D(P, {}, t),
          D(L, {}, t),
          D(F, {}, t),
          D(I, {}, t),
        ]);
      },
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramercUB6kKpVd`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"B3HCa5r9e":{"layout":["fixed","auto"]},"BnOXZ13MB":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `4603`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, q as queryParamNames };
//# sourceMappingURL=xsY_A8XslPrPlsUpn366SyM8HuhivMtkzFUDTgkMiQU.DywL6cir.mjs.map
