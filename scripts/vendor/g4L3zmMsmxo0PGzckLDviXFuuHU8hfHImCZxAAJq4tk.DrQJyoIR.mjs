import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  j as ee,
  l as a,
  s as o,
  u as s,
  w as c,
  y as te,
} from "./react.Dfbt0i5D.mjs";
import { a as ne, r as re, t as l, w as u } from "./motion.DA7Wf6OE.mjs";
import {
  $ as d,
  At as ie,
  C as f,
  D as p,
  E as ae,
  G as m,
  I as h,
  M as g,
  Ot as _,
  Pt as v,
  Tt as oe,
  a as y,
  ft as se,
  gt as b,
  ht as ce,
  m as x,
  mt as le,
  o as S,
  q as C,
  vt as ue,
  yt as de,
  z as w,
} from "./framer.DwK__Hy9.mjs";
import {
  C as fe,
  E as pe,
  S as T,
  T as me,
  a as he,
  c as E,
  d as D,
  f as O,
  i as k,
  l as ge,
  n as A,
  o as _e,
  r as j,
  s as ve,
  t as M,
  u as ye,
  w as N,
  x as P,
} from "./shared-lib.BFsVOxQ4.mjs";
import be, { t as xe } from "./4S3XOgLCLK0xLuAx6uiT_YJTVwjFb1scchsjXb7nFm0.ByjcY5vS.mjs";
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (o(),
    d(),
    l(),
    c(),
    pe(),
    N(),
    k(),
    T(),
    A(),
    O(),
    E(),
    xe(),
    (F = m(j)),
    (I = ie(S)),
    (L = m(M)),
    (R = v(M)),
    (z = m(P)),
    (B = {
      qM_CZXH3w: `(min-width: 1200px)`,
      R4qhA7Vvz: `(min-width: 810px) and (max-width: 1199.98px)`,
      y2TjyZVW8: `(max-width: 809.98px)`,
    }),
    (V = () => typeof document < `u`),
    (H = []),
    (U = `framer-GJdcd`),
    (W = {
      qM_CZXH3w: `framer-v-zxotbn`,
      R4qhA7Vvz: `framer-v-1s5uw7u`,
      y2TjyZVW8: `framer-v-1dztjqv`,
    }),
    (G = (e, t, n) => (e && t ? `position` : n)),
    (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (q = {
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
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `qM_CZXH3w`, Phone: `y2TjyZVW8`, Tablet: `R4qhA7Vvz` }),
    (X = ({ value: e }) =>
      b()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `qM_CZXH3w`,
    })),
    (Q = _(
      i(function (e, i) {
        let o = n(null),
          c = i ?? o,
          l = te(),
          { activeLocale: d, setLocale: ie } = ue(),
          m = se(),
          { style: g, className: _, layoutId: v, variant: b, ...C } = Z(e);
        de(ee(() => be({}, d), [d]));
        let [w, pe] = ce(b, B, !1),
          T = h(U, he, ge),
          E = t(x)?.isLayoutTemplate,
          D = !!t(ne)?.transition?.layout,
          O = G(E, D),
          k = () => !V() || w !== `y2TjyZVW8`,
          A = () => !V() || w === `y2TjyZVW8`;
        return (
          oe(),
          le({}),
          a(x.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Y,
              primaryVariantId: `qM_CZXH3w`,
              variantClassNames: W,
            },
            children: s(re, {
              id: v ?? l,
              children: [
                a(X, {
                  value: `html body { background: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255)); }`,
                }),
                s(u.div, {
                  ...C,
                  className: h(T, `framer-zxotbn`, _),
                  ref: c,
                  style: { ...g },
                  children: [
                    s(u.div, {
                      className: `framer-2nary4`,
                      "data-framer-name": `Sticky Navbar`,
                      layout: O,
                      children: [
                        k() &&
                          a(y, {
                            height: 54,
                            y: 10,
                            children: a(I, {
                              __framer__animate: { transition: K },
                              __framer__animateOnce: !1,
                              __framer__scrollDirection: { direction: `down`, target: q },
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-10zly9k-container hidden-1dztjqv`,
                              "data-framer-name": `Sticky Navbar`,
                              name: `Sticky Navbar`,
                              nodeId: `aB3MDOdHF`,
                              rendersWithMotion: !0,
                              scopeId: `xztNglnPV`,
                              children: a(f, {
                                breakpoint: w,
                                overrides: { R4qhA7Vvz: { variant: J(`Me_b_qMaM`) } },
                                children: a(j, {
                                  height: `100%`,
                                  id: `aB3MDOdHF`,
                                  layoutId: `aB3MDOdHF`,
                                  name: `Sticky Navbar`,
                                  variant: J(`raqMsV85o`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        A() &&
                          a(f, {
                            breakpoint: w,
                            overrides: { y2TjyZVW8: { height: 60, width: `100vw`, y: 0 } },
                            children: a(y, {
                              children: a(S, {
                                className: `framer-5l1uer-container hidden-zxotbn hidden-1s5uw7u`,
                                nodeId: `qHUguuARF`,
                                rendersWithMotion: !0,
                                scopeId: `xztNglnPV`,
                                children: a(R, {
                                  __framer__animateOnce: !1,
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `qHUguuARF`,
                                  layoutId: `qHUguuARF`,
                                  style: { width: `100%` },
                                  variant: J(`oqXNvb_1y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    s(u.div, {
                      className: `framer-1bwdgru`,
                      "data-framer-name": `Main`,
                      layout: O,
                      children: [
                        a(f, {
                          breakpoint: w,
                          overrides: {
                            y2TjyZVW8: {
                              children: a(r, {
                                children: a(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                    "--framer-font-family": `"Geist Mono", monospace`,
                                    "--framer-font-size": `179px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                  },
                                  children: a(`span`, {
                                    "data-text-fill": `true`,
                                    style: {
                                      backgroundImage: `linear-gradient(180deg, var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243)) 0%, var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255)) 100%)`,
                                    },
                                    children: `404`,
                                  }),
                                }),
                              }),
                            },
                          },
                          children: a(p, {
                            __fromCanvasComponent: !0,
                            children: a(r, {
                              children: a(`p`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                  "--framer-font-family": `"Geist Mono", monospace`,
                                  "--framer-font-size": `340px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                },
                                children: a(`span`, {
                                  "data-text-fill": `true`,
                                  style: {
                                    backgroundImage: `linear-gradient(180deg, var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243)) 0%, var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255)) 100%)`,
                                  },
                                  children: `404`,
                                }),
                              }),
                            }),
                            className: `framer-ot1hdt`,
                            fonts: [`GF;Geist Mono-500`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        s(`div`, {
                          className: `framer-44qe58`,
                          "data-framer-name": `Page Section`,
                          children: [
                            s(`div`, {
                              className: `framer-ov1lsa`,
                              "data-framer-name": `Text Block`,
                              children: [
                                a(f, {
                                  breakpoint: w,
                                  overrides: {
                                    y2TjyZVW8: {
                                      children: a(r, {
                                        children: a(`h2`, {
                                          className: `framer-styles-preset-d3e5g2`,
                                          "data-styles-preset": `OY7GyAvvP`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `Oops, page not found.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: a(p, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h2`, {
                                        className: `framer-styles-preset-d3e5g2`,
                                        "data-styles-preset": `OY7GyAvvP`,
                                        dir: `auto`,
                                        children: `Oops, page not found.`,
                                      }),
                                    }),
                                    className: `framer-1ggcvy4`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                a(f, {
                                  breakpoint: w,
                                  overrides: {
                                    y2TjyZVW8: {
                                      children: a(r, {
                                        children: a(`h4`, {
                                          className: `framer-styles-preset-1t48bm3`,
                                          "data-styles-preset": `n6gn2zrFO`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(73, 82, 109))`,
                                          },
                                          children: `We probably forgot to put a redirect here.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: a(p, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h4`, {
                                        className: `framer-styles-preset-1t48bm3`,
                                        "data-styles-preset": `n6gn2zrFO`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(73, 82, 109))`,
                                        },
                                        children: `We probably forgot to put a redirect here.`,
                                      }),
                                    }),
                                    className: `framer-d5svhf`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            a(ae, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                a(f, {
                                  breakpoint: w,
                                  overrides: {
                                    y2TjyZVW8: { y: (m?.y || 0) + 150 + 0 + 0 + 169 + 0 + 107 },
                                  },
                                  children: a(y, {
                                    height: 44,
                                    width: `188px`,
                                    y: (m?.y || 0) + 150 + 0 + 0 + 322 + 0 + 107,
                                    children: a(S, {
                                      className: `framer-ljqvc1-container`,
                                      nodeId: `cEpjxZVCs`,
                                      scopeId: `xztNglnPV`,
                                      children: a(f, {
                                        breakpoint: w,
                                        overrides: {
                                          R4qhA7Vvz: { TWaZPhsrs: e[1] },
                                          y2TjyZVW8: { TWaZPhsrs: e[2] },
                                        },
                                        children: a(P, {
                                          bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(46, 52, 71))`,
                                          dMzFGkb3u: !1,
                                          dP0U8qPjN: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(0, 86, 243))`,
                                          F9tZ22mws: {
                                            borderColor: `rgba(20, 23, 33, 0)`,
                                            borderStyle: `solid`,
                                            borderWidth: 2,
                                          },
                                          height: `100%`,
                                          id: `cEpjxZVCs`,
                                          jfeAUucDj: fe,
                                          layoutId: `cEpjxZVCs`,
                                          lnJBzRgIM: `Go Back Home`,
                                          MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 243, 255))`,
                                          ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(249, 249, 251))`,
                                          SLp3DWZqR: !0,
                                          style: { height: `100%`, width: `100%` },
                                          TWaZPhsrs: e[0],
                                          variant: J(`nhzWZDlVc`),
                                          vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(20, 23, 33))`,
                                          wDmZ1dhUo: me,
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
        `.framer-GJdcd.framer-17v2v6y, .framer-GJdcd .framer-17v2v6y { display: block; }`,
        `.framer-GJdcd.framer-zxotbn { align-content: center; align-items: center; background-color: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, #f2f3ff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 150px 0px 0px 0px; position: relative; width: 1200px; }`,
        `.framer-GJdcd .framer-2nary4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 10px 200px 10px 200px; position: fixed; right: 0px; top: 0px; z-index: 7; }`,
        `.framer-GJdcd .framer-10zly9k-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-GJdcd .framer-5l1uer-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-GJdcd .framer-1bwdgru { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 120px 0px; position: relative; width: 100%; z-index: 6; }`,
        `.framer-GJdcd .framer-ot1hdt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 312px; opacity: 0.32; position: relative; white-space: pre; width: auto; }`,
        `.framer-GJdcd .framer-44qe58 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-GJdcd .framer-ov1lsa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 482px; }`,
        `.framer-GJdcd .framer-1ggcvy4, .framer-GJdcd .framer-d5svhf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-GJdcd .framer-ljqvc1-container { flex: none; height: 44px; position: relative; width: 188px; }`,
        ..._e,
        ...ye,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-GJdcd.framer-zxotbn { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-GJdcd.framer-zxotbn { width: 390px; } .framer-GJdcd .framer-2nary4 { flex-direction: column; overflow: visible; padding: 0px; right: unset; width: 100%; } .framer-GJdcd .framer-5l1uer-container { flex: none; width: 100%; } .framer-GJdcd .framer-ot1hdt { height: 159px; } .framer-GJdcd .framer-44qe58 { padding: 0px 28px 0px 28px; width: 100%; } .framer-GJdcd .framer-ov1lsa { width: 100%; } .framer-GJdcd .framer-1ggcvy4, .framer-GJdcd .framer-d5svhf { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }}`,
      ],
      `framer-GJdcd`
    )),
    (Q.displayName = `404`),
    (Q.defaultProps = { height: 2131, width: 1200 }),
    g(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Geist Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist Mono`,
              url: `https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeEPKJ5W7ihaO_CS.woff2`,
              weight: `500`,
            },
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
        ...F,
        ...L,
        ...z,
        ...C(ve),
        ...C(D),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([w(j, {}, t), w(M, {}, t), w(P, {}, t)])),
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerxztNglnPV`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `2131`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"R4qhA7Vvz":{"layout":["fixed","auto"]},"y2TjyZVW8":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, H as queryParamNames };
//# sourceMappingURL=g4L3zmMsmxo0PGzckLDviXFuuHU8hfHImCZxAAJq4tk.DrQJyoIR.mjs.map
