import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as a,
  j as o,
  l as s,
  s as c,
  u as l,
  w as u,
  y as d,
} from "./react.Dfbt0i5D.mjs";
import { a as f, n as p, r as ee, t as m, w as h } from "./motion.DA7Wf6OE.mjs";
import {
  $ as g,
  A as te,
  At as _,
  D as v,
  Dt as ne,
  Et as y,
  G as b,
  I as x,
  M as S,
  N as C,
  O as w,
  Ot as T,
  R as E,
  St as re,
  _ as D,
  a as O,
  dt as ie,
  ft as ae,
  q as k,
  s as A,
  u as j,
  vt as oe,
  y as M,
  z as N,
} from "./framer.DwK__Hy9.mjs";
var P,
  F,
  I,
  L,
  se = e(() => {
    (c(),
      g(),
      u(),
      (P = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 Z" fill="transparent" height="22px" id="nDYPLHbds" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(1 1)" width="22px"/><path d="M 0 8.5 L 7 8.5 M 7.8 0 L 3.1 8.5 M 1.5 11.5 L 1.8 11 M 8 5.1 L 11.5 11.5 M 9.9 8.5 L 13 8.5 M 5.2 0 L 6.5 2.3" fill="transparent" height="11.5px" id="WnO_6u6Zt" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(5.5 5.5)" width="12.999999618530273px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (F = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? s(h.div, { ...a, layoutId: r, ref: t }) : s(`div`, { ...a, ref: t });
      })),
      (I = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (L = T(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...c } = I(e);
          return s(F, {
            ...c,
            className: x(`framer-S1Gat`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-S1Gat { -webkit-mask: ${P}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${P}; width: 24px; }`,
        ],
        `framer-S1Gat`
      )),
      (L.displayName = `App Store`),
      C(L, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: A.Color },
      }));
  }),
  R,
  z,
  B,
  V,
  H,
  ce,
  U,
  W = e(() => {
    (c(),
      g(),
      u(),
      (R = `var(--framer-icon-mask)`),
      (z = i(function (e, t) {
        return s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (B = h.create(z)),
      (V = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? s(B, { ...a, layoutId: r, ref: t, children: i })
          : s(`svg`, { ...a, ref: t, children: i });
      })),
      (H = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 8.5 8.5 L 8.5 0 L 0 0" fill="transparent" height="8.5px" id="HD3EjFRmq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(8.75 6.75)" width="8.5px"/><path d="M 10.25 0 L 0 10.25" fill="transparent" height="10.25px" id="I0i29aTCw" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 7)" width="10.25px"/></svg>`),
      (ce = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (U = T(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              fICyAUQY1: o,
              lKf_CQTz5: c,
              BKVe8Pgvw: l,
              ...u
            } = ce(e),
            d = y(`2430009286`, H);
          return s(V, {
            ...u,
            className: x(`framer-VdeRv`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": c, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: s(`use`, { href: d }),
          });
        }),
        [
          `.framer-VdeRv { -webkit-mask: ${R}; aspect-ratio: 1; display: block; mask: ${R}; width: 24px; }`,
        ],
        `framer-VdeRv`
      )),
      (U.displayName = `Arrow Up Right`),
      C(U, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: A.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: A.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: A.Number,
        },
      }));
  }),
  G,
  le,
  ue,
  K,
  de = e(() => {
    (c(),
      g(),
      u(),
      (G = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 3.8 0.367 C 3.049 -0.092 2.111 -0.122 1.332 0.288 C 0.553 0.698 0.047 1.488 0 2.367 L 0 17.967 C 0.047 18.846 0.553 19.636 1.332 20.046 C 2.111 20.456 3.049 20.426 3.8 19.967 L 18 11.867 C 18.588 11.502 18.946 10.859 18.946 10.167 C 18.946 9.474 18.588 8.831 18 8.467 Z M 0.2 1.667 L 13 14.667 M 0.2 18.667 L 13 5.667" fill="transparent" height="20.333506365690294px" id="yhtxPg8L_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(3 1.833)" width="18.946434624714726px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (le = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? s(h.div, { ...a, layoutId: r, ref: t }) : s(`div`, { ...a, ref: t });
      })),
      (ue = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (K = T(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...c } = ue(e);
          return s(le, {
            ...c,
            className: x(`framer-EBirA`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-EBirA { -webkit-mask: ${G}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${G}; width: 24px; }`,
        ],
        `framer-EBirA`
      )),
      (K.displayName = `Google Play`),
      C(K, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: A.Color },
      }));
  });
function fe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  q,
  Se = e(() => {
    (c(),
      g(),
      m(),
      u(),
      W(),
      de(),
      (pe = [`nhzWZDlVc`, `I5fEtVxub`, `MAMH3I2Oe`, `FevE5AjnL`]),
      (me = `framer-iqrON`),
      (he = {
        FevE5AjnL: `framer-v-y2dst8`,
        I5fEtVxub: `framer-v-1jysfas`,
        MAMH3I2Oe: `framer-v-keez9n`,
        nhzWZDlVc: `framer-v-qxq7qf`,
      }),
      (ge = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_e = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: a, children: n });
      }),
      (ve = {
        "Light Default": `nhzWZDlVc`,
        "Light Hover": `I5fEtVxub`,
        "Small Hover": `FevE5AjnL`,
        Small: `MAMH3I2Oe`,
      }),
      (ye = h.create(r)),
      (be = ({
        afterContentColor: e,
        afterFill: t,
        beforeContentColor: n,
        beforeFill: r,
        border: i,
        height: a,
        id: o,
        leftIcon: s,
        leftIconVisibility: c,
        link: l,
        rightIcon: u,
        rightIconVisibility: d,
        shadow: f,
        startBorder: p,
        title: ee,
        width: m,
        ...h
      }) => ({
        ...h,
        bSgywnMQ9:
          f ??
          h.bSgywnMQ9 ??
          `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
        dMzFGkb3u: c ?? h.dMzFGkb3u ?? !0,
        dP0U8qPjN:
          r ??
          h.dP0U8qPjN ??
          `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
        F9tZ22mws: p ??
          h.F9tZ22mws ?? {
            borderColor: `rgba(26, 26, 26, 0)`,
            borderStyle: `solid`,
            borderWidth: 2,
          },
        jfeAUucDj: s ?? h.jfeAUucDj ?? K,
        lnJBzRgIM: ee ?? h.lnJBzRgIM ?? `Start Today`,
        MK840EHqT:
          t ??
          h.MK840EHqT ??
          `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
        ns0eNpEfF:
          n ?? h.ns0eNpEfF ?? `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
        SLp3DWZqR: d ?? h.SLp3DWZqR ?? !0,
        TWaZPhsrs: l ?? h.TWaZPhsrs,
        variant: ve[h.variant] ?? h.variant ?? `nhzWZDlVc`,
        vlr7eN_dQ:
          e ?? h.vlr7eN_dQ ?? `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
        wDmZ1dhUo: u ?? h.wDmZ1dhUo ?? U,
        ZEAGlJD1F: i ??
          h.ZEAGlJD1F ?? {
            borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)) /* {"name":"950"} */`,
            borderStyle: `solid`,
            borderWidth: 2,
          },
      })),
      (xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = T(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            o = d(),
            { activeLocale: c, setLocale: u } = oe();
          ae();
          let {
              style: f,
              className: p,
              layoutId: m,
              variant: g,
              lnJBzRgIM: te,
              wDmZ1dhUo: _,
              SLp3DWZqR: y,
              jfeAUucDj: b,
              dMzFGkb3u: S,
              bSgywnMQ9: C,
              dP0U8qPjN: w,
              ns0eNpEfF: T,
              vlr7eN_dQ: E,
              MK840EHqT: re,
              ZEAGlJD1F: O,
              F9tZ22mws: k,
              TWaZPhsrs: A,
              ...j
            } = be(e),
            {
              baseVariant: N,
              classNames: P,
              clearLoadingGesture: F,
              gestureHandlers: I,
              gestureVariant: L,
              isLoading: se,
              setGestureState: R,
              setVariant: z,
              variants: B,
            } = ne({
              cycleOrder: pe,
              defaultVariant: `nhzWZDlVc`,
              ref: a,
              variant: g,
              variantClassNames: he,
            }),
            V = xe(e, B),
            { activeVariantCallback: H, delay: ce } = ie(N),
            U = H(async (...e) => {
              (R({ isHovered: !0 }), z(`I5fEtVxub`));
            }),
            W = H(async (...e) => {
              (R({ isHovered: !1 }), z(`nhzWZDlVc`));
            }),
            G = H(async (...e) => {
              (R({ isHovered: !0 }), z(`FevE5AjnL`));
            }),
            le = H(async (...e) => {
              (R({ isHovered: !1 }), z(`MAMH3I2Oe`));
            }),
            ue = x(me);
          return s(ee, {
            id: m ?? o,
            children: s(ye, {
              animate: B,
              initial: !1,
              children: s(_e, {
                value: ge,
                children: s(M, {
                  href: A,
                  motionChild: !0,
                  nodeId: `nhzWZDlVc`,
                  openInNewTab: typeof A == `string` && A.startsWith(`http`),
                  scopeId: `PDIJtz4P_`,
                  smoothScroll: !0,
                  children: l(h.a, {
                    ...j,
                    ...I,
                    className: `${x(ue, `framer-qxq7qf`, p, P)} framer-cufviq`,
                    "data-border": !0,
                    "data-framer-name": `Light Default`,
                    "data-highlight": !0,
                    layoutDependency: V,
                    layoutId: `nhzWZDlVc`,
                    onMouseEnter: U,
                    ref: a,
                    style: {
                      "--1hjrn": C,
                      "--border-bottom-width": (k?.borderBottomWidth ?? k?.borderWidth) + `px`,
                      "--border-color": k?.borderColor,
                      "--border-left-width": (k?.borderLeftWidth ?? k?.borderWidth) + `px`,
                      "--border-right-width": (k?.borderRightWidth ?? k?.borderWidth) + `px`,
                      "--border-style": k?.borderStyle,
                      "--border-top-width": (k?.borderTopWidth ?? k?.borderWidth) + `px`,
                      backgroundColor: w,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      boxShadow: `none`,
                      ...f,
                    },
                    variants: {
                      FevE5AjnL: {
                        "--border-bottom-width": (O?.borderBottomWidth ?? O?.borderWidth) + `px`,
                        "--border-color": O?.borderColor,
                        "--border-left-width": (O?.borderLeftWidth ?? O?.borderWidth) + `px`,
                        "--border-right-width": (O?.borderRightWidth ?? O?.borderWidth) + `px`,
                        "--border-style": O?.borderStyle,
                        "--border-top-width": (O?.borderTopWidth ?? O?.borderWidth) + `px`,
                        backgroundColor: re,
                        boxShadow: `var(--1hjrn)`,
                      },
                      I5fEtVxub: {
                        "--border-bottom-width": (O?.borderBottomWidth ?? O?.borderWidth) + `px`,
                        "--border-color": O?.borderColor,
                        "--border-left-width": (O?.borderLeftWidth ?? O?.borderWidth) + `px`,
                        "--border-right-width": (O?.borderRightWidth ?? O?.borderWidth) + `px`,
                        "--border-style": O?.borderStyle,
                        "--border-top-width": (O?.borderTopWidth ?? O?.borderWidth) + `px`,
                        backgroundColor: re,
                        boxShadow: `var(--1hjrn)`,
                      },
                      MAMH3I2Oe: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        boxShadow: `none`,
                      },
                    },
                    ...fe(
                      {
                        FevE5AjnL: {
                          "data-framer-name": `Small Hover`,
                          onMouseEnter: void 0,
                          onMouseLeave: le,
                        },
                        I5fEtVxub: { "data-framer-name": `Light Hover`, onMouseLeave: W },
                        MAMH3I2Oe: { "data-framer-name": `Small`, onMouseEnter: G },
                      },
                      N,
                      L
                    ),
                    children: [
                      S !== !1 &&
                        s(D, {
                          animated: !0,
                          className: `framer-evrhlk`,
                          Component: b,
                          "data-framer-name": `Leading Icon`,
                          layoutDependency: V,
                          layoutId: `q9M6Bu5sI`,
                          style: { "--1df8v9o": T },
                          variants: {
                            FevE5AjnL: { "--1df8v9o": E },
                            I5fEtVxub: { "--1df8v9o": E },
                          },
                        }),
                      s(v, {
                        __fromCanvasComponent: !0,
                        children: s(r, {
                          children: s(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                              "--framer-font-family": `"Plus Jakarta Sans", "Inter", sans-serif`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-ns0eNpEfF-PDIJtz4P_))`,
                            },
                            children: `Unduh APK`,
                          }),
                        }),
                        className: `framer-1gn6mwn`,
                        "data-framer-name": `Button Label`,
                        fonts: [`GF;Geist Mono-500`],
                        layoutDependency: V,
                        layoutId: `YPzx3Jc43`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-ns0eNpEfF-PDIJtz4P_)`,
                          "--framer-link-text-color": `rgb(29, 156, 81)`,
                          "--framer-link-text-decoration": `underline`,
                          "--variable-reference-ns0eNpEfF-PDIJtz4P_": T,
                          "--variable-reference-vlr7eN_dQ-PDIJtz4P_": E,
                        },
                        text: te,
                        variants: {
                          FevE5AjnL: {
                            "--extracted-r6o4lv": `var(--variable-reference-vlr7eN_dQ-PDIJtz4P_)`,
                            "--variable-reference-vlr7eN_dQ-PDIJtz4P_": E,
                          },
                          I5fEtVxub: {
                            "--extracted-r6o4lv": `var(--variable-reference-vlr7eN_dQ-PDIJtz4P_)`,
                            "--variable-reference-vlr7eN_dQ-PDIJtz4P_": E,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...fe(
                          {
                            FevE5AjnL: {
                              children: s(r, {
                                children: s(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                    "--framer-font-family": `"Plus Jakarta Sans", "Inter", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-vlr7eN_dQ-PDIJtz4P_))`,
                                  },
                                  children: `Unduh APK`,
                                }),
                              }),
                            },
                            I5fEtVxub: {
                              children: s(r, {
                                children: s(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                    "--framer-font-family": `"Plus Jakarta Sans", "Inter", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-vlr7eN_dQ-PDIJtz4P_))`,
                                  },
                                  children: `Unduh APK`,
                                }),
                              }),
                            },
                            MAMH3I2Oe: {
                              children: s(r, {
                                children: s(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QgTW9uby01MDA=`,
                                    "--framer-font-family": `"Plus Jakarta Sans", "Inter", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-ns0eNpEfF-PDIJtz4P_))`,
                                  },
                                  children: `Unduh APK`,
                                }),
                              }),
                            },
                          },
                          N,
                          L
                        ),
                      }),
                      y !== !1 &&
                        s(D, {
                          animated: !0,
                          className: `framer-1689gdz`,
                          Component: _,
                          "data-framer-name": `Trailing Icon`,
                          layoutDependency: V,
                          layoutId: `zfuiH03lI`,
                          style: { "--1335ju": 1.5, "--18mrqx2": T, "--3it368": 1, rotate: 81 },
                          variants: {
                            FevE5AjnL: { "--18mrqx2": E, rotate: 0 },
                            I5fEtVxub: { "--18mrqx2": E, rotate: 0 },
                          },
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-iqrON.framer-cufviq, .framer-iqrON .framer-cufviq { display: block; }`,
          `.framer-iqrON.framer-qxq7qf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: 44px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px 25px 10px 25px; position: relative; text-decoration: none; width: 188px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-iqrON .framer-evrhlk { aspect-ratio: 1 / 1; bottom: -24px; flex: none; height: var(--framer-aspect-ratio-supported, 21px); left: 27px; position: absolute; width: 21px; z-index: 1; }`,
          `.framer-iqrON .framer-1gn6mwn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-iqrON .framer-1689gdz { aspect-ratio: 1 / 1; bottom: -33px; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: absolute; right: 25px; width: 24px; z-index: 1; }`,
          `.framer-iqrON.framer-v-1jysfas.framer-qxq7qf { cursor: pointer; }`,
          `.framer-iqrON.framer-v-1jysfas .framer-evrhlk { bottom: unset; left: unset; position: relative; }`,
          `.framer-iqrON.framer-v-1jysfas .framer-1gn6mwn, .framer-iqrON.framer-v-y2dst8 .framer-1gn6mwn { z-index: 1; }`,
          `.framer-iqrON.framer-v-1jysfas .framer-1689gdz { bottom: unset; position: relative; right: unset; }`,
          `.framer-iqrON.framer-v-keez9n.framer-qxq7qf { height: min-content; width: min-content; }`,
          `.framer-iqrON.framer-v-y2dst8.framer-qxq7qf { cursor: pointer; height: 34px; width: min-content; }`,
          `.framer-iqrON.framer-v-y2dst8 .framer-evrhlk { bottom: unset; height: var(--framer-aspect-ratio-supported, 20px); left: unset; position: relative; width: 20px; }`,
          `.framer-iqrON.framer-v-y2dst8 .framer-1689gdz { bottom: unset; height: var(--framer-aspect-ratio-supported, 21px); position: relative; right: unset; width: 21px; }`,
          `.framer-iqrON[data-border="true"]::after, .framer-iqrON [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-iqrON`
      )),
      (q.displayName = `Button`),
      (q.defaultProps = { height: 44, width: 188 }),
      C(q, {
        variant: {
          options: [`nhzWZDlVc`, `I5fEtVxub`, `MAMH3I2Oe`, `FevE5AjnL`],
          optionTitles: [`Light Default`, `Light Hover`, `Small`, `Small Hover`],
          title: `Variant`,
          type: A.Enum,
        },
        lnJBzRgIM: {
          defaultValue: `Unduh APK`,
          displayTextArea: !1,
          title: `Title`,
          type: A.String,
        },
        onlnJBzRgIMChange: { changes: `lnJBzRgIM`, type: A.ChangeHandler },
        wDmZ1dhUo: {
          defaultValue: {
            identifier: `module:qOK5zl6pwYXZaG7C1gDI/OAx4rcAP6xx63CQh4Xps/SrcV65t7V.js:default`,
            moduleId: `qOK5zl6pwYXZaG7C1gDI`,
          },
          setModuleId: `EqX8thWQjdZcOB1c6p5N`,
          title: `Right Icon`,
          type: A.VectorSetItem,
        },
        SLp3DWZqR: { defaultValue: !0, title: `Right Icon Visibility`, type: A.Boolean },
        onSLp3DWZqRChange: { changes: `SLp3DWZqR`, type: A.ChangeHandler },
        jfeAUucDj: {
          defaultValue: {
            identifier: `module:s5nN9pcyWQ02E8X7aKbA/M5LpVNHTZAZ9jQJAZDLP/fWCPeBmjX.js:default`,
            moduleId: `s5nN9pcyWQ02E8X7aKbA`,
          },
          setModuleId: `eO37kitVCMcNEgHMGd3K`,
          title: `Left Icon`,
          type: A.VectorSetItem,
        },
        dMzFGkb3u: { defaultValue: !0, title: `Left Icon Visibility`, type: A.Boolean },
        ondMzFGkb3uChange: { changes: `dMzFGkb3u`, type: A.ChangeHandler },
        bSgywnMQ9: {
          defaultValue: [
            {
              blur: 0,
              color: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39)) /* {"name":"950"} */`,
              diffusion: 0.5,
              focus: 0.5,
              inset: !1,
              spread: 0,
              type: `box`,
              x: 5,
              y: 5,
            },
          ],
          title: `Shadow`,
          type: A.BoxShadow,
        },
        dP0U8qPjN: {
          defaultValue: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {"name":"50"} */`,
          title: `Before Fill`,
          type: A.Color,
        },
        ns0eNpEfF: {
          defaultValue: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
          title: `Before Content Color`,
          type: A.Color,
        },
        vlr7eN_dQ: {
          defaultValue: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
          title: `After Content Color`,
          type: A.Color,
        },
        MK840EHqT: {
          defaultValue: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)) /* {"name":"50"} */`,
          title: `After Fill`,
          type: A.Color,
        },
        ZEAGlJD1F: {
          defaultValue: {
            borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)) /* {"name":"950"} */`,
            borderStyle: `solid`,
            borderWidth: 2,
          },
          title: `Border`,
          type: A.Border,
        },
        F9tZ22mws: {
          defaultValue: {
            borderColor: `rgba(26, 26, 26, 0)`,
            borderStyle: `solid`,
            borderWidth: 2,
          },
          title: `Start Border`,
          type: A.Border,
        },
        TWaZPhsrs: { title: `Link`, type: A.Link },
      }),
      S(
        q,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ce,
  we,
  Te,
  Ee = e(() => {
    (g(),
      E.loadFonts([
        `GF;Geist Mono-regular`,
        `GF;Geist Mono-700`,
        `GF;Geist Mono-700italic`,
        `GF;Geist Mono-italic`,
      ]),
      (Ce = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Geist Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist Mono`,
              url: `https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Geist Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist Mono`,
              url: `https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Geist Mono`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Geist Mono`,
              url: `https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Geist Mono`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Geist Mono`,
              url: `https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (we = [
        `.framer-7xZ9n .framer-styles-preset-sak9x6:not(.rich-text-wrapper), .framer-7xZ9n .framer-styles-preset-sak9x6.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Inter", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Inter", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Inter", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 1); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, #e6f7ed); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Te = `framer-7xZ9n`));
  }),
  De,
  Oe,
  ke,
  Ae = e(() => {
    (g(),
      E.loadFonts([
        `FS;Plus Jakarta Sans-medium`,
        `FS;Plus Jakarta Sans-bold`,
        `FS;Plus Jakarta Sans-bold italic`,
        `FS;Plus Jakarta Sans-medium italic`,
      ]),
      (De = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/FVNNCZHGTHUOM3RCJDOO45QMBIJISVEG.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/OWABOLGBAKFVLPZ756IYS6EKYKU54K3I.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/GV5XODI2YD2DJA5RVTMJOSDHYESL7IYT.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/QDINYT7WQXBD2IDFQGGJ74DWIUFHOOZD.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Oe = [
        `.framer-L5Fqj .framer-styles-preset-1y3tbh:not(.rich-text-wrapper), .framer-L5Fqj .framer-styles-preset-1y3tbh.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 1); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ke = `framer-L5Fqj`));
  }),
  je,
  Me,
  Ne,
  Pe = e(() => {
    (g(),
      E.loadFonts([
        `FS;Plus Jakarta Sans-medium`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (je = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/FVNNCZHGTHUOM3RCJDOO45QMBIJISVEG.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
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
      (Me = [
        `.framer-lLpzk .framer-styles-preset-1t48bm3:not(.rich-text-wrapper), .framer-lLpzk .framer-styles-preset-1t48bm3.rich-text-wrapper h4 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 1.55); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.06em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 0px) { .framer-lLpzk .framer-styles-preset-1t48bm3:not(.rich-text-wrapper), .framer-lLpzk .framer-styles-preset-1t48bm3.rich-text-wrapper h4 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 1.34); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.06em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ne = `framer-lLpzk`));
  }),
  Fe,
  Ie,
  Le,
  Re = e(() => {
    (g(),
      E.loadFonts([
        `FS;Plus Jakarta Sans-semibold`,
        `FS;Plus Jakarta Sans-bold`,
        `FS;Plus Jakarta Sans-bold italic`,
        `FS;Plus Jakarta Sans-semibold italic`,
      ]),
      (Fe = [
        {
          explicitInter: !0,
          fonts: [
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
              url: `../../assets/misc/OWABOLGBAKFVLPZ756IYS6EKYKU54K3I.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/GV5XODI2YD2DJA5RVTMJOSDHYESL7IYT.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/XMNYCZFXUH3EYMLHCQEDXUTZTCNGZHL5.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (Ie = [
        `.framer-rA0Ct .framer-styles-preset-d3e5g2:not(.rich-text-wrapper), .framer-rA0Ct .framer-styles-preset-d3e5g2.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 3.05); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.05em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 0px) { .framer-rA0Ct .framer-styles-preset-d3e5g2:not(.rich-text-wrapper), .framer-rA0Ct .framer-styles-preset-d3e5g2.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 2.44); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.05em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Le = `framer-rA0Ct`));
  }),
  ze,
  Be,
  Ve,
  He = e(() => {
    (g(),
      E.loadFonts([
        `FS;Plus Jakarta Sans-medium`,
        `FS;Plus Jakarta Sans-bold`,
        `FS;Plus Jakarta Sans-bold italic`,
        `FS;Plus Jakarta Sans-medium italic`,
      ]),
      (ze = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/FVNNCZHGTHUOM3RCJDOO45QMBIJISVEG.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/OWABOLGBAKFVLPZ756IYS6EKYKU54K3I.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/GV5XODI2YD2DJA5RVTMJOSDHYESL7IYT.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/QDINYT7WQXBD2IDFQGGJ74DWIUFHOOZD.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Be = [
        `.framer-W2dax .framer-styles-preset-k3kfom:not(.rich-text-wrapper), .framer-W2dax .framer-styles-preset-k3kfom.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 0.8); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.03em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ve = `framer-W2dax`));
  }),
  Ue,
  We,
  Ge,
  Ke = e(() => {
    (g(),
      E.loadFonts([]),
      (Ue = [{ explicitInter: !0, fonts: [] }]),
      (We = [
        `.framer-8Kkvg .framer-styles-preset-133ksub:not(.rich-text-wrapper), .framer-8Kkvg .framer-styles-preset-133ksub.rich-text-wrapper a { --framer-link-hover-text-color: #bfbfbf; }`,
      ]),
      (Ge = `framer-8Kkvg`));
  }),
  qe,
  Je,
  Ye,
  Xe = e(() => {
    (g(),
      E.loadFonts([
        `FS;Plus Jakarta Sans-semibold`,
        `FS;Plus Jakarta Sans-bold`,
        `FS;Plus Jakarta Sans-bold italic`,
        `FS;Plus Jakarta Sans-semibold italic`,
      ]),
      (qe = [
        {
          explicitInter: !0,
          fonts: [
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
              url: `../../assets/misc/OWABOLGBAKFVLPZ756IYS6EKYKU54K3I.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/GV5XODI2YD2DJA5RVTMJOSDHYESL7IYT.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Plus Jakarta Sans`,
              source: `fontshare`,
              style: `italic`,
              uiFamilyName: `Plus Jakarta Sans`,
              url: `../../assets/misc/XMNYCZFXUH3EYMLHCQEDXUTZTCNGZHL5.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (Je = [
        `.framer-XjPIN .framer-styles-preset-1097248:not(.rich-text-wrapper), .framer-XjPIN .framer-styles-preset-1097248.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 1.2); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.03em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ye = `framer-XjPIN`));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ze,
  Qe,
  $e,
  et,
  tt,
  Y,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  X,
  pt = e(() => {
    (c(),
      g(),
      m(),
      u(),
      se(),
      W(),
      He(),
      Ke(),
      Xe(),
      Se(),
      (Ze = _(h.div)),
      (Qe = b(q)),
      ($e = [`HMXabXHGE`, `rW9FSF2qY`, `raqMsV85o`, `s2C12m7th`, `UPV_bV1mg`, `Me_b_qMaM`]),
      (et = `framer-X7Ryp`),
      (tt = {
        HMXabXHGE: `framer-v-3i6hz5`,
        Me_b_qMaM: `framer-v-j5rlnv`,
        raqMsV85o: `framer-v-fioahf`,
        rW9FSF2qY: `framer-v-17no3ef`,
        s2C12m7th: `framer-v-1qu0coa`,
        UPV_bV1mg: `framer-v-ll9ouo`,
      }),
      (Y = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (nt = (e, t) => `translateY(-50%) ${t}`),
      (rt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 0,
      }),
      (it = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 0,
      }),
      (at = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (ot = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = re({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (st = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ct = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: a, children: n });
      }),
      (lt = {
        "Scrolled Dark": `raqMsV85o`,
        "Scrolled Light": `rW9FSF2qY`,
        "Tablet (Dark)": `Me_b_qMaM`,
        "Tablet (Light)": `UPV_bV1mg`,
        Frosted: `HMXabXHGE`,
        Tablet: `s2C12m7th`,
      }),
      (ut = h.create(r)),
      (dt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: lt[r.variant] ?? r.variant ?? `HMXabXHGE`,
      })),
      (ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = T(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = d(),
            { activeLocale: u, setLocale: f } = oe(),
            m = ae(),
            { style: g, className: _, layoutId: y, variant: b, ...S } = dt(e),
            {
              baseVariant: C,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: re,
              gestureVariant: D,
              isLoading: k,
              setGestureState: A,
              setVariant: N,
              variants: P,
            } = ne({
              cycleOrder: $e,
              defaultVariant: `HMXabXHGE`,
              ref: o,
              variant: b,
              variantClassNames: tt,
            }),
            F = ft(e, P),
            { activeVariantCallback: I, delay: se } = ie(C),
            R = ({ overlay: e }) =>
              I(async (...t) => {
                e.show();
              }),
            z = x(et, Ye, Ve, Ge),
            B = n(null),
            V = n(null),
            H = () => C === `raqMsV85o`;
          return s(ee, {
            id: y ?? c,
            children: s(ut, {
              animate: P,
              initial: !1,
              children: s(ct, {
                value: Y,
                children: l(h.div, {
                  ...S,
                  ...re,
                  className: x(z, `framer-3i6hz5`, _, T),
                  "data-framer-name": `Frosted`,
                  layoutDependency: F,
                  layoutId: `HMXabXHGE`,
                  ref: o,
                  style: {
                    backgroundColor: `var(--token-2325a4ff-598d-4d79-964f-2d11380cfd4f, rgba(242, 247, 244, 0.07))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    boxShadow: `none`,
                    ...g,
                  },
                  variants: {
                    Me_b_qMaM: {
                      backgroundColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                      boxShadow: `none`,
                    },
                    raqMsV85o: {
                      backgroundColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                      boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.25)`,
                    },
                    rW9FSF2qY: {
                      backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                      boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.25)`,
                    },
                    s2C12m7th: { boxShadow: `none` },
                    UPV_bV1mg: {
                      backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                      boxShadow: `none`,
                    },
                  },
                  ...J(
                    {
                      Me_b_qMaM: { "data-framer-name": `Tablet (Dark)` },
                      raqMsV85o: { "data-framer-name": `Scrolled Dark` },
                      rW9FSF2qY: { "data-framer-name": `Scrolled Light` },
                      s2C12m7th: { "data-framer-name": `Tablet` },
                      UPV_bV1mg: { "data-framer-name": `Tablet (Light)` },
                    },
                    C,
                    D
                  ),
                  children: [
                    s(h.div, {
                      className: `framer-y94w6i`,
                      "data-framer-name": `Navbar Left Links`,
                      layoutDependency: F,
                      layoutId: `mw_O1QtMh`,
                      children: s(M, {
                        href: { webPageId: `augiA20Il` },
                        motionChild: !0,
                        nodeId: `YroRn9Zxu`,
                        openInNewTab: !1,
                        scopeId: `CmIyj7yo6`,
                        children: l(h.a, {
                          className: `framer-k0unqs framer-64otsq`,
                          "data-framer-name": `Logo`,
                          layoutDependency: F,
                          layoutId: `YroRn9Zxu`,
                          children: [
                            l(w, {
                              className: `framer-16hy1vz`,
                              "data-framer-name": `Brand Mark`,
                              layoutDependency: F,
                              layoutId: `lhET0qffi`,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 257 260" overflow="visible"><g><path d="M 22 18 C 22 8.059 30.059 0 40 0 L 54 0 C 63.941 0 72 8.059 72 18 L 72 176 L 104 176 C 113.941 176 122 184.059 122 194 L 122 208 C 122 217.941 113.941 226 104 226 L 58 226 C 38.118 226 22 209.882 22 190 Z" fill="var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {&quot;name&quot;:&quot;50&quot;} */"></path><path d="M 198.4 39.2 C 206.4 30.8 219.8 30.5 228.2 38.5 C 236.6 46.5 236.9 59.9 228.9 68.3 L 168.4 131.6 L 229.8 193.2 C 237.9 201.4 237.8 214.7 229.6 222.8 C 221.4 230.9 208.1 230.8 200 222.6 L 121.6 143.9 C 113.7 136 113.6 123.3 121.3 115.2 Z" fill="var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {&quot;name&quot;:&quot;50&quot;} */"></path></g></svg>`,
                              withExternalLayout: !0,
                              ...J(
                                {
                                  rW9FSF2qY: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 257 260" overflow="visible"><g><path d="M 22 18 C 22 8.059 30.059 0 40 0 L 54 0 C 63.941 0 72 8.059 72 18 L 72 176 L 104 176 C 113.941 176 122 184.059 122 194 L 122 208 C 122 217.941 113.941 226 104 226 L 58 226 C 38.118 226 22 209.882 22 190 Z" fill="rgb(0, 0, 0)"></path><path d="M 198.4 39.2 C 206.4 30.8 219.8 30.5 228.2 38.5 C 236.6 46.5 236.9 59.9 228.9 68.3 L 168.4 131.6 L 229.8 193.2 C 237.9 201.4 237.8 214.7 229.6 222.8 C 221.4 230.9 208.1 230.8 200 222.6 L 121.6 143.9 C 113.7 136 113.6 123.3 121.3 115.2 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                  },
                                  UPV_bV1mg: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 257 260" overflow="visible"><g><path d="M 22 18 C 22 8.059 30.059 0 40 0 L 54 0 C 63.941 0 72 8.059 72 18 L 72 176 L 104 176 C 113.941 176 122 184.059 122 194 L 122 208 C 122 217.941 113.941 226 104 226 L 58 226 C 38.118 226 22 209.882 22 190 Z" fill="var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)) /* {&quot;name&quot;:&quot;950&quot;} */"></path><path d="M 198.4 39.2 C 206.4 30.8 219.8 30.5 228.2 38.5 C 236.6 46.5 236.9 59.9 228.9 68.3 L 168.4 131.6 L 229.8 193.2 C 237.9 201.4 237.8 214.7 229.6 222.8 C 221.4 230.9 208.1 230.8 200 222.6 L 121.6 143.9 C 113.7 136 113.6 123.3 121.3 115.2 Z" fill="var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)) /* {&quot;name&quot;:&quot;950&quot;} */"></path></g></svg>`,
                                  },
                                },
                                C,
                                D
                              ),
                              children: [
                                s(w, {
                                  className: `framer-93wu88`,
                                  layoutDependency: F,
                                  layoutId: `tnUDmrMIZ`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.471 12.146" overflow="visible"><path d="M 0 7.664 L 14.666 0.417 C 16.658 -0.567 19.07 0.25 20.054 2.241 C 21.038 4.233 20.222 6.645 18.23 7.629 L 10.776 11.313 C 8.863 12.258 6.653 12.405 4.632 11.72 C 2.611 11.036 0.945 9.576 0 7.663 Z" fill="var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {&quot;name&quot;:&quot;50&quot;} */"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...J(
                                    {
                                      rW9FSF2qY: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.471 12.146" overflow="visible"><path d="M 0 7.664 L 14.666 0.417 C 16.658 -0.567 19.07 0.25 20.054 2.241 C 21.038 4.233 20.222 6.645 18.23 7.629 L 10.776 11.313 C 8.863 12.258 6.653 12.405 4.632 11.72 C 2.611 11.036 0.945 9.576 0 7.663 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      },
                                      UPV_bV1mg: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.471 12.146" overflow="visible"><path d="M 0 7.664 L 14.666 0.417 C 16.658 -0.567 19.07 0.25 20.054 2.241 C 21.038 4.233 20.222 6.645 18.23 7.629 L 10.776 11.313 C 8.863 12.258 6.653 12.405 4.632 11.72 C 2.611 11.036 0.945 9.576 0 7.663 Z" fill="var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)) /* {&quot;name&quot;:&quot;950&quot;} */"></path></svg>`,
                                      },
                                    },
                                    C,
                                    D
                                  ),
                                }),
                                s(w, {
                                  className: `framer-fwhvf6`,
                                  layoutDependency: F,
                                  layoutId: `xYJUzTgB4`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.472 12.144" overflow="visible"><path d="M 0.416 9.903 C -0.057 8.947 -0.13 7.842 0.213 6.831 C 0.555 5.821 1.285 4.988 2.242 4.515 L 9.696 0.832 C 11.609 -0.113 13.819 -0.259 15.84 0.425 C 17.861 1.11 19.527 2.569 20.472 4.482 L 5.804 11.727 C 4.848 12.2 3.742 12.273 2.732 11.931 C 1.721 11.589 0.888 10.859 0.416 9.902 Z" fill="var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {&quot;name&quot;:&quot;50&quot;} */"></path></svg>`,
                                  withExternalLayout: !0,
                                  ...J(
                                    {
                                      rW9FSF2qY: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.472 12.144" overflow="visible"><path d="M 0.416 9.903 C -0.057 8.947 -0.13 7.842 0.213 6.831 C 0.555 5.821 1.285 4.988 2.242 4.515 L 9.696 0.832 C 11.609 -0.113 13.819 -0.259 15.84 0.425 C 17.861 1.11 19.527 2.569 20.472 4.482 L 5.804 11.727 C 4.848 12.2 3.742 12.273 2.732 11.931 C 1.721 11.589 0.888 10.859 0.416 9.902 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      },
                                      UPV_bV1mg: {
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.472 12.144" overflow="visible"><path d="M 0.416 9.903 C -0.057 8.947 -0.13 7.842 0.213 6.831 C 0.555 5.821 1.285 4.988 2.242 4.515 L 9.696 0.832 C 11.609 -0.113 13.819 -0.259 15.84 0.425 C 17.861 1.11 19.527 2.569 20.472 4.482 L 5.804 11.727 C 4.848 12.2 3.742 12.273 2.732 11.931 C 1.721 11.589 0.888 10.859 0.416 9.902 Z" fill="var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)) /* {&quot;name&quot;:&quot;950&quot;} */"></path></svg>`,
                                      },
                                    },
                                    C,
                                    D
                                  ),
                                }),
                              ],
                            }),
                            s(v, {
                              __fromCanvasComponent: !0,
                              children: s(r, {
                                children: s(h.p, {
                                  className: `framer-styles-preset-1097248`,
                                  "data-styles-preset": `zowUIN61A`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)))`,
                                  },
                                  children: `LaporKita`,
                                }),
                              }),
                              className: `framer-16i0kxv`,
                              "data-framer-name": `Brand Label`,
                              fonts: [`Inter`],
                              layoutDependency: F,
                              layoutId: `fX3toGl5b`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                "--framer-link-text-color": `rgb(29, 156, 81)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              transformTemplate: nt,
                              variants: {
                                rW9FSF2qY: {
                                  "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                },
                                UPV_bV1mg: {
                                  "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...J(
                                {
                                  rW9FSF2qY: {
                                    children: s(r, {
                                      children: s(h.p, {
                                        className: `framer-styles-preset-1097248`,
                                        "data-styles-preset": `zowUIN61A`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                        },
                                        children: `LaporKita`,
                                      }),
                                    }),
                                  },
                                  UPV_bV1mg: {
                                    children: s(r, {
                                      children: s(h.p, {
                                        className: `framer-styles-preset-1097248`,
                                        "data-styles-preset": `zowUIN61A`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                        },
                                        children: `LaporKita`,
                                      }),
                                    }),
                                  },
                                },
                                C,
                                D
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(h.div, {
                      className: `framer-1exk79x`,
                      "data-framer-name": `Navbar Center Links`,
                      layoutDependency: F,
                      layoutId: `JB2TbdiCu`,
                      children: [
                        s(v, {
                          __fromCanvasComponent: !0,
                          children: s(r, {
                            children: s(h.p, {
                              className: `framer-styles-preset-k3kfom`,
                              "data-styles-preset": `gfMTc4H7D`,
                              dir: `auto`,
                              children: s(M, {
                                href: { hash: `:R_3D_xZZz`, webPageId: `augiA20Il` },
                                motionChild: !0,
                                nodeId: `ma0Z9o97Z`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `CmIyj7yo6`,
                                smoothScroll: !1,
                                children: s(h.a, {
                                  className: `framer-styles-preset-133ksub`,
                                  "data-styles-preset": `PNc4tBrUv`,
                                  children: `Cara Kerja`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-17qe27h`,
                          "data-framer-name": `Nav Link 1`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `ma0Z9o97Z`,
                          variants: {
                            rW9FSF2qY: {
                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                            },
                            UPV_bV1mg: {
                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...J(
                            {
                              rW9FSF2qY: {
                                children: s(r, {
                                  children: s(h.p, {
                                    className: `framer-styles-preset-k3kfom`,
                                    "data-styles-preset": `gfMTc4H7D`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                    },
                                    children: s(M, {
                                      href: { hash: `:R_3D_xZZz`, webPageId: `augiA20Il` },
                                      motionChild: !0,
                                      nodeId: `ma0Z9o97Z`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CmIyj7yo6`,
                                      smoothScroll: !1,
                                      children: s(h.a, {
                                        className: `framer-styles-preset-133ksub`,
                                        "data-styles-preset": `PNc4tBrUv`,
                                        children: `Cara Kerja`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              UPV_bV1mg: {
                                children: s(r, {
                                  children: s(h.p, {
                                    className: `framer-styles-preset-k3kfom`,
                                    "data-styles-preset": `gfMTc4H7D`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                    },
                                    children: s(M, {
                                      href: { hash: `:R_3D_xZZz`, webPageId: `augiA20Il` },
                                      motionChild: !0,
                                      nodeId: `ma0Z9o97Z`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CmIyj7yo6`,
                                      smoothScroll: !1,
                                      children: s(h.a, {
                                        className: `framer-styles-preset-133ksub`,
                                        "data-styles-preset": `PNc4tBrUv`,
                                        children: `Cara Kerja`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            C,
                            D
                          ),
                        }),
                        s(v, {
                          __fromCanvasComponent: !0,
                          children: s(r, {
                            children: s(h.p, {
                              className: `framer-styles-preset-k3kfom`,
                              "data-styles-preset": `gfMTc4H7D`,
                              dir: `auto`,
                              children: s(M, {
                                href: { webPageId: `OqsiEhdfU` },
                                motionChild: !0,
                                nodeId: `h1n8Cb9wM`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `CmIyj7yo6`,
                                smoothScroll: !1,
                                children: s(h.a, {
                                  className: `framer-styles-preset-133ksub`,
                                  "data-styles-preset": `PNc4tBrUv`,
                                  children: `Fitur`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-11gigzo`,
                          "data-framer-name": `Nav Link 2`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `h1n8Cb9wM`,
                          variants: {
                            rW9FSF2qY: {
                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                            },
                            UPV_bV1mg: {
                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...J(
                            {
                              rW9FSF2qY: {
                                children: s(r, {
                                  children: s(h.p, {
                                    className: `framer-styles-preset-k3kfom`,
                                    "data-styles-preset": `gfMTc4H7D`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                    },
                                    children: s(M, {
                                      href: { webPageId: `OqsiEhdfU` },
                                      motionChild: !0,
                                      nodeId: `h1n8Cb9wM`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CmIyj7yo6`,
                                      smoothScroll: !1,
                                      children: s(h.a, {
                                        className: `framer-styles-preset-133ksub`,
                                        "data-styles-preset": `PNc4tBrUv`,
                                        children: `Fitur`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              UPV_bV1mg: {
                                children: s(r, {
                                  children: s(h.p, {
                                    className: `framer-styles-preset-k3kfom`,
                                    "data-styles-preset": `gfMTc4H7D`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                    },
                                    children: s(M, {
                                      href: { webPageId: `OqsiEhdfU` },
                                      motionChild: !0,
                                      nodeId: `h1n8Cb9wM`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CmIyj7yo6`,
                                      smoothScroll: !1,
                                      children: s(h.a, {
                                        className: `framer-styles-preset-133ksub`,
                                        "data-styles-preset": `PNc4tBrUv`,
                                        children: `Fitur`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            C,
                            D
                          ),
                        }),
                        s(v, {
                          __fromCanvasComponent: !0,
                          children: s(r, {
                            children: s(h.p, {
                              className: `framer-styles-preset-k3kfom`,
                              "data-styles-preset": `gfMTc4H7D`,
                              dir: `auto`,
                              children: s(M, {
                                href: { webPageId: `UfhygGALz` },
                                motionChild: !0,
                                nodeId: `jjNwl197X`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `CmIyj7yo6`,
                                smoothScroll: !1,
                                children: s(h.a, {
                                  className: `framer-styles-preset-133ksub`,
                                  "data-styles-preset": `PNc4tBrUv`,
                                  children: `Kontak`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-1u2sf0o`,
                          "data-framer-name": `Nav Link 3`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `jjNwl197X`,
                          variants: {
                            rW9FSF2qY: {
                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                            },
                            UPV_bV1mg: {
                              "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...J(
                            {
                              rW9FSF2qY: {
                                children: s(r, {
                                  children: s(h.p, {
                                    className: `framer-styles-preset-k3kfom`,
                                    "data-styles-preset": `gfMTc4H7D`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                    },
                                    children: s(M, {
                                      href: { webPageId: `UfhygGALz` },
                                      motionChild: !0,
                                      nodeId: `jjNwl197X`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CmIyj7yo6`,
                                      smoothScroll: !1,
                                      children: s(h.a, {
                                        className: `framer-styles-preset-133ksub`,
                                        "data-styles-preset": `PNc4tBrUv`,
                                        children: `Kontak`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              UPV_bV1mg: {
                                children: s(r, {
                                  children: s(h.p, {
                                    className: `framer-styles-preset-k3kfom`,
                                    "data-styles-preset": `gfMTc4H7D`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                    },
                                    children: s(M, {
                                      href: { webPageId: `UfhygGALz` },
                                      motionChild: !0,
                                      nodeId: `jjNwl197X`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CmIyj7yo6`,
                                      smoothScroll: !1,
                                      children: s(h.a, {
                                        className: `framer-styles-preset-133ksub`,
                                        "data-styles-preset": `PNc4tBrUv`,
                                        children: `Kontak`,
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            C,
                            D
                          ),
                        }),
                                              ],
                    }),
                    s(h.div, {
                      className: `framer-dfzfxt`,
                      "data-framer-name": `Navbar Right Actions`,
                      layoutDependency: F,
                      layoutId: `snG6XraQo`,
                      children: s(O, {
                        height: 44,
                        y: (m?.y || 0) + (10 + ((m?.height || 54) - 20 - 44) / 2) + 0,
                        ...J(
                          {
                            Me_b_qMaM: {
                              y: (m?.y || 0) + (10 + ((m?.height || 200) - 20 - 44) / 2) + 0,
                            },
                            raqMsV85o: {
                              y: (m?.y || 0) + (10 + ((m?.height || 200) - 20 - 44) / 2) + 0,
                            },
                            s2C12m7th: {
                              y: (m?.y || 0) + (10 + ((m?.height || 200) - 20 - 44) / 2) + 0,
                            },
                            UPV_bV1mg: {
                              y: (m?.y || 0) + (10 + ((m?.height || 200) - 20 - 44) / 2) + 0,
                            },
                          },
                          C,
                          D
                        ),
                        children: s(te, {
                          className: `framer-172a7uj-container`,
                          "data-framer-name": `Navbar CTA Button`,
                          layoutDependency: F,
                          layoutId: `RXSEDOQV7-container`,
                          name: `Navbar CTA Button`,
                          nodeId: `RXSEDOQV7`,
                          rendersWithMotion: !0,
                          scopeId: `CmIyj7yo6`,
                          children: s(q, {
                            bSgywnMQ9: `3px 3px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                            dMzFGkb3u: !1,
                            dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                            F9tZ22mws: {
                              borderColor: `rgba(26, 26, 26, 0)`,
                              borderStyle: `solid`,
                              borderWidth: 2,
                            },
                            height: `100%`,
                            id: `RXSEDOQV7`,
                            jfeAUucDj: L,
                            layoutId: `RXSEDOQV7`,
                            lnJBzRgIM: `Unduh APK`,
                            MK840EHqT: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                            name: `Navbar CTA Button`,
                            ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                            SLp3DWZqR: !1,
                            TWaZPhsrs: `https://drive.google.com/file/d/18-EopaSbXF9kvxjN0Yzfv0k1HGmBTbhp/view?usp=drive_link`,
                            variant: st(`MAMH3I2Oe`),
                            vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                            wDmZ1dhUo: U,
                            width: `100%`,
                            ZEAGlJD1F: {
                              borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                              borderStyle: `solid`,
                              borderWidth: 2,
                            },
                            ...J(
                              {
                                raqMsV85o: {
                                  bSgywnMQ9: `3px 3px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                },
                                rW9FSF2qY: {
                                  dP0U8qPjN: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                  ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                },
                                UPV_bV1mg: {
                                  dP0U8qPjN: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                  ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                },
                              },
                              C,
                              D
                            ),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-X7Ryp.framer-64otsq, .framer-X7Ryp .framer-64otsq { display: block; }`,
          `.framer-X7Ryp.framer-3i6hz5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px 20px 10px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-X7Ryp .framer-y94w6i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 235px; }`,
          `.framer-X7Ryp .framer-k0unqs { flex: none; height: 24px; overflow: visible; position: relative; text-decoration: none; width: 116px; }`,
          `.framer-X7Ryp .framer-16hy1vz { height: 20px; left: 0px; position: absolute; top: 2px; width: 23px; }`,
          `.framer-X7Ryp .framer-93wu88 { height: 12px; left: 0px; position: absolute; top: 8px; width: 21px; }`,
          `.framer-X7Ryp .framer-fwhvf6 { height: 12px; left: 3px; position: absolute; top: 0px; width: 21px; }`,
          `.framer-X7Ryp .framer-16i0kxv { flex: none; height: auto; position: absolute; right: 0px; top: 50%; white-space: pre; width: auto; }`,
          `.framer-X7Ryp .framer-1exk79x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-X7Ryp .framer-17qe27h, .framer-X7Ryp .framer-11gigzo, .framer-X7Ryp .framer-1u2sf0o, .framer-X7Ryp .framer-8iicqg, .framer-X7Ryp .framer-6c8wml, .framer-X7Ryp .framer-1frnryy, .framer-X7Ryp .framer-1n01mle, .framer-X7Ryp .framer-1o95pdm, .framer-X7Ryp .framer-iupeo7, .framer-X7Ryp .framer-j6tng, .framer-X7Ryp .framer-1vrl9z5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-X7Ryp .framer-dtpbt1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 31px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-X7Ryp .framer-48iqvn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 4px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 8px; }`,
          `.framer-X7Ryp .framer-br1phg { height: 4px; position: relative; width: 8px; }`,
          `.framer-X7Ryp .framer-fd17tl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 10px; position: relative; width: min-content; }`,
          `.framer-X7Ryp .framer-fabhxg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 15px; position: relative; width: min-content; }`,
          `.framer-X7Ryp .framer-dfzfxt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 235px; }`,
          `.framer-X7Ryp .framer-172a7uj-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-X7Ryp.framer-v-1qu0coa.framer-3i6hz5, .framer-X7Ryp.framer-v-ll9ouo.framer-3i6hz5, .framer-X7Ryp.framer-v-j5rlnv.framer-3i6hz5 { width: 729px; }`,
          `.framer-X7Ryp.framer-v-1qu0coa .framer-y94w6i, .framer-X7Ryp.framer-v-1qu0coa .framer-dfzfxt, .framer-X7Ryp.framer-v-ll9ouo .framer-y94w6i, .framer-X7Ryp.framer-v-ll9ouo .framer-dfzfxt, .framer-X7Ryp.framer-v-j5rlnv .framer-y94w6i, .framer-X7Ryp.framer-v-j5rlnv .framer-dfzfxt { flex: 1 0 0px; width: 1px; }`,
          `.framer-X7Ryp.framer-v-1qu0coa .framer-1exk79x, .framer-X7Ryp.framer-v-ll9ouo .framer-1exk79x, .framer-X7Ryp.framer-v-j5rlnv .framer-1exk79x { gap: 34px; }`,
          ...Je,
          ...Be,
          ...We,
          `.framer-X7Ryp[data-border="true"]::after, .framer-X7Ryp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-X7Ryp`
      )),
      (X.displayName = `Navbar`),
      (X.defaultProps = { height: 54, width: 881 }),
      C(X, {
        variant: {
          options: [`HMXabXHGE`, `rW9FSF2qY`, `raqMsV85o`, `s2C12m7th`, `UPV_bV1mg`, `Me_b_qMaM`],
          optionTitles: [
            `Frosted`,
            `Scrolled Light`,
            `Scrolled Dark`,
            `Tablet`,
            `Tablet (Light)`,
            `Tablet (Dark)`,
          ],
          title: `Variant`,
          type: A.Enum,
        },
      }),
      S(
        X,
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
          ...Qe,
          ...k(qe),
          ...k(ze),
          ...k(Ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([N(q, {}, t)])) }));
  }),
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt = e(() => {
    (c(),
      g(),
      u(),
      (mt = `var(--framer-icon-mask)`),
      (ht = i(function (e, t) {
        return s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (gt = h.create(ht)),
      (_t = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? s(gt, { ...a, layoutId: r, ref: t, children: i })
          : s(`svg`, { ...a, ref: t, children: i });
      })),
      (vt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="YnobPTYMb" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 5)" width="16px"/><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="Cb0Gao21R" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 12)" width="16px"/><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="oPtuyu4df" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 19)" width="16px"/></svg>`),
      (yt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (bt = T(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: c,
              ...l
            } = yt(e),
            u = y(`3467097230`, vt);
          return s(_t, {
            ...l,
            className: x(`framer-grV1P`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: s(`use`, { href: u }),
          });
        }),
        [
          `.framer-grV1P { -webkit-mask: ${mt}; aspect-ratio: 1; display: block; mask: ${mt}; width: 24px; }`,
        ],
        `framer-grV1P`
      )),
      (bt.displayName = `Menu`),
      C(bt, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: A.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: A.Number,
        },
      }));
  }),
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Z,
  Ot = e(() => {
    (c(),
      g(),
      u(),
      (St = `var(--framer-icon-mask)`),
      (Ct = i(function (e, t) {
        return s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (wt = h.create(Ct)),
      (Tt = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? s(wt, { ...a, layoutId: r, ref: t, children: i })
          : s(`svg`, { ...a, ref: t, children: i });
      })),
      (Et = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12 0 L 0 12" fill="transparent" height="12px" id="qMvRy61Gj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 6)" width="12px"/><path d="M 0 0 L 12 12" fill="transparent" height="12px" id="YX0AMSC6b" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 6)" width="12px"/></svg>`),
      (Dt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Z = T(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: c,
              ...l
            } = Dt(e),
            u = y(`2710857035`, Et);
          return s(Tt, {
            ...l,
            className: x(`framer-RiU4T`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: s(`use`, { href: u }),
          });
        }),
        [
          `.framer-RiU4T { -webkit-mask: ${St}; aspect-ratio: 1; display: block; mask: ${St}; width: 24px; }`,
        ],
        `framer-RiU4T`
      )),
      (Z.displayName = `X`),
      C(Z, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: A.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: A.Number,
        },
      }));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  $,
  Vt = e(() => {
    (c(),
      g(),
      m(),
      u(),
      se(),
      xt(),
      W(),
      de(),
      Ot(),
      He(),
      Ae(),
      Ke(),
      Xe(),
      Se(),
      (kt = b(q)),
      (At = [`oqXNvb_1y`, `TmOul1fvR`, `LKPxHVCpA`, `yXT8qY5k7`]),
      (jt = `framer-hLgpO`),
      (Mt = {
        LKPxHVCpA: `framer-v-1jfgnhj`,
        oqXNvb_1y: `framer-v-wt5ang`,
        TmOul1fvR: `framer-v-u77v1x`,
        yXT8qY5k7: `framer-v-xrt2ad`,
      }),
      (Nt = { delay: 0, duration: 0.4, ease: [0.65, 0, 0.31, 1], type: `tween` }),
      (Pt = (e, t) => `translateY(-50%) ${t}`),
      (Ft = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (It = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: a, children: n });
      }),
      (Lt = {
        "Open (White)": `TmOul1fvR`,
        "Variant 3": `LKPxHVCpA`,
        "Variant 4": `yXT8qY5k7`,
        Closed: `oqXNvb_1y`,
      }),
      (Rt = h.create(r)),
      (zt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Lt[r.variant] ?? r.variant ?? `oqXNvb_1y`,
      })),
      (Bt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = T(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            o = d(),
            { activeLocale: c, setLocale: u } = oe(),
            f = ae(),
            { style: p, className: m, layoutId: g, variant: _, ...y } = zt(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: re,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = ne({
              cycleOrder: At,
              defaultVariant: `oqXNvb_1y`,
              ref: a,
              variant: _,
              variantClassNames: Mt,
            }),
            N = Bt(e, j),
            { activeVariantCallback: P, delay: F } = ie(b),
            I = P(async (...e) => {
              A(`TmOul1fvR`);
            }),
            se = P(async (...e) => {
              A(`oqXNvb_1y`);
            }),
            R = P(async (...e) => {
              A(`yXT8qY5k7`);
            }),
            z = P(async (...e) => {
              A(`LKPxHVCpA`);
            }),
            B = x(jt, Ye, Ve, Ge, ke);
          return s(ee, {
            id: g ?? o,
            children: s(Rt, {
              animate: j,
              initial: !1,
              children: s(It, {
                value: Nt,
                children: l(h.nav, {
                  ...y,
                  ...T,
                  className: x(B, `framer-wt5ang`, m, S),
                  "data-framer-name": `Closed`,
                  layoutDependency: N,
                  layoutId: `oqXNvb_1y`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                    boxShadow: `0px 2px 2px 0px rgba(0, 0, 0, 0.25)`,
                    ...p,
                  },
                  variants: {
                    LKPxHVCpA: {
                      backgroundColor: `var(--token-2325a4ff-598d-4d79-964f-2d11380cfd4f, rgba(242, 247, 244, 0.07))`,
                      boxShadow: `none`,
                    },
                  },
                  ...Q(
                    {
                      LKPxHVCpA: { "data-framer-name": `Variant 3` },
                      TmOul1fvR: { "data-framer-name": `Open (White)` },
                      yXT8qY5k7: { "data-framer-name": `Variant 4` },
                    },
                    b,
                    E
                  ),
                  children: [
                    l(h.div, {
                      className: `framer-10zj3sy`,
                      "data-framer-name": `Top Row`,
                      layoutDependency: N,
                      layoutId: `XT_YqIhRU`,
                      children: [
                        s(M, {
                          href: { webPageId: `augiA20Il` },
                          motionChild: !0,
                          nodeId: `v7jHOw8Io`,
                          openInNewTab: !1,
                          scopeId: `xI7ubulvj`,
                          children: l(h.a, {
                            className: `framer-12124s9 framer-3tv280`,
                            "data-framer-name": `Logo`,
                            layoutDependency: N,
                            layoutId: `v7jHOw8Io`,
                            children: [
                              l(w, {
                                className: `framer-nbimfj`,
                                "data-framer-name": `Brand Mark`,
                                layoutDependency: N,
                                layoutId: `QXV1QJ_le`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 257 260" overflow="visible"><g><path d="M 22 18 C 22 8.059 30.059 0 40 0 L 54 0 C 63.941 0 72 8.059 72 18 L 72 176 L 104 176 C 113.941 176 122 184.059 122 194 L 122 208 C 122 217.941 113.941 226 104 226 L 58 226 C 38.118 226 22 209.882 22 190 Z" fill="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */"></path><path d="M 198.4 39.2 C 206.4 30.8 219.8 30.5 228.2 38.5 C 236.6 46.5 236.9 59.9 228.9 68.3 L 168.4 131.6 L 229.8 193.2 C 237.9 201.4 237.8 214.7 229.6 222.8 C 221.4 230.9 208.1 230.8 200 222.6 L 121.6 143.9 C 113.7 136 113.6 123.3 121.3 115.2 Z" fill="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */"></path></g></svg>`,
                                withExternalLayout: !0,
                                ...Q(
                                  {
                                    LKPxHVCpA: {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 257 260" overflow="visible"><g><path d="M 22 18 C 22 8.059 30.059 0 40 0 L 54 0 C 63.941 0 72 8.059 72 18 L 72 176 L 104 176 C 113.941 176 122 184.059 122 194 L 122 208 C 122 217.941 113.941 226 104 226 L 58 226 C 38.118 226 22 209.882 22 190 Z" fill="var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {&quot;name&quot;:&quot;50&quot;} */"></path><path d="M 198.4 39.2 C 206.4 30.8 219.8 30.5 228.2 38.5 C 236.6 46.5 236.9 59.9 228.9 68.3 L 168.4 131.6 L 229.8 193.2 C 237.9 201.4 237.8 214.7 229.6 222.8 C 221.4 230.9 208.1 230.8 200 222.6 L 121.6 143.9 C 113.7 136 113.6 123.3 121.3 115.2 Z" fill="var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {&quot;name&quot;:&quot;50&quot;} */"></path></g></svg>`,
                                    },
                                  },
                                  b,
                                  E
                                ),
                                children: [
                                  s(w, {
                                    className: `framer-mms6ac`,
                                    layoutDependency: N,
                                    layoutId: `t4hzXPMyn`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.471 12.146" overflow="visible"><path d="M 0 7.664 L 14.666 0.417 C 16.658 -0.567 19.07 0.25 20.054 2.241 C 21.038 4.233 20.222 6.645 18.23 7.629 L 10.776 11.313 C 8.863 12.258 6.653 12.405 4.632 11.72 C 2.611 11.036 0.945 9.576 0 7.663 Z" fill="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */"></path></svg>`,
                                    withExternalLayout: !0,
                                    ...Q(
                                      {
                                        LKPxHVCpA: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.471 12.146" overflow="visible"><path d="M 0 7.664 L 14.666 0.417 C 16.658 -0.567 19.07 0.25 20.054 2.241 C 21.038 4.233 20.222 6.645 18.23 7.629 L 10.776 11.313 C 8.863 12.258 6.653 12.405 4.632 11.72 C 2.611 11.036 0.945 9.576 0 7.663 Z" fill="var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {&quot;name&quot;:&quot;50&quot;} */"></path></svg>`,
                                        },
                                      },
                                      b,
                                      E
                                    ),
                                  }),
                                  s(w, {
                                    className: `framer-a840od`,
                                    layoutDependency: N,
                                    layoutId: `qd9LTtAEZ`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.472 12.144" overflow="visible"><path d="M 0.416 9.903 C -0.057 8.947 -0.13 7.842 0.213 6.831 C 0.555 5.821 1.285 4.988 2.242 4.515 L 9.696 0.832 C 11.609 -0.113 13.819 -0.259 15.84 0.425 C 17.861 1.11 19.527 2.569 20.472 4.482 L 5.804 11.727 C 4.848 12.2 3.742 12.273 2.732 11.931 C 1.721 11.589 0.888 10.859 0.416 9.902 Z" fill="var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)) /* {&quot;name&quot;:&quot;700&quot;} */"></path></svg>`,
                                    withExternalLayout: !0,
                                    ...Q(
                                      {
                                        LKPxHVCpA: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.472 12.144" overflow="visible"><path d="M 0.416 9.903 C -0.057 8.947 -0.13 7.842 0.213 6.831 C 0.555 5.821 1.285 4.988 2.242 4.515 L 9.696 0.832 C 11.609 -0.113 13.819 -0.259 15.84 0.425 C 17.861 1.11 19.527 2.569 20.472 4.482 L 5.804 11.727 C 4.848 12.2 3.742 12.273 2.732 11.931 C 1.721 11.589 0.888 10.859 0.416 9.902 Z" fill="var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) /* {&quot;name&quot;:&quot;50&quot;} */"></path></svg>`,
                                        },
                                      },
                                      b,
                                      E
                                    ),
                                  }),
                                ],
                              }),
                              s(v, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(h.p, {
                                    className: `framer-styles-preset-1097248`,
                                    "data-styles-preset": `zowUIN61A`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)))`,
                                    },
                                    children: `LaporKita`,
                                  }),
                                }),
                                className: `framer-1co6fl2`,
                                "data-framer-name": `Brand Label`,
                                fonts: [`Inter`],
                                layoutDependency: N,
                                layoutId: `YpUKGfX6H`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                  "--framer-link-text-color": `rgb(29, 156, 81)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                transformTemplate: Pt,
                                variants: {
                                  LKPxHVCpA: {
                                    "--extracted-r6o4lv": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Q(
                                  {
                                    LKPxHVCpA: {
                                      children: s(r, {
                                        children: s(h.p, {
                                          className: `framer-styles-preset-1097248`,
                                          "data-styles-preset": `zowUIN61A`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)))`,
                                          },
                                          children: `LaporKita`,
                                        }),
                                      }),
                                    },
                                  },
                                  b,
                                  E
                                ),
                              }),
                            ],
                          }),
                        }),
                        s(h.div, {
                          className: `framer-56c99c`,
                          "data-framer-name": `Menu Toggle`,
                          "data-highlight": !0,
                          layoutDependency: N,
                          layoutId: `iKCKUpErt`,
                          onTap: I,
                          style: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                          ...Q(
                            {
                              LKPxHVCpA: { onTap: R },
                              TmOul1fvR: { onTap: se },
                              yXT8qY5k7: { onTap: z },
                            },
                            b,
                            E
                          ),
                          children: s(D, {
                            animated: !0,
                            className: `framer-1s5qh4d`,
                            Component: bt,
                            "data-framer-name": `Menu Icon`,
                            layoutDependency: N,
                            layoutId: `bkDzBEmGh`,
                            style: {
                              "--1m973uw": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4)`,
                              "--js9iwy": 2,
                            },
                            variants: {
                              LKPxHVCpA: {
                                "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                              },
                            },
                            ...Q(
                              { TmOul1fvR: { Component: Z }, yXT8qY5k7: { Component: Z } },
                              b,
                              E
                            ),
                          }),
                        }),
                      ],
                    }),
                    l(h.div, {
                      className: `framer-al2jbj`,
                      "data-framer-name": `Drawer`,
                      layoutDependency: N,
                      layoutId: `n69JfVLyC`,
                      children: [
                        s(v, {
                          __fromCanvasComponent: !0,
                          children: s(r, {
                            children: s(h.p, {
                              className: `framer-styles-preset-k3kfom`,
                              "data-styles-preset": `gfMTc4H7D`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4))`,
                              },
                              children: s(M, {
                                href: { hash: `:R_3D_xZZz`, webPageId: `augiA20Il` },
                                motionChild: !0,
                                nodeId: `anQHCIBeT`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `xI7ubulvj`,
                                smoothScroll: !1,
                                children: s(h.a, {
                                  className: `framer-styles-preset-133ksub`,
                                  "data-styles-preset": `PNc4tBrUv`,
                                  children: `Cara Kerja`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-frj08x`,
                          "data-framer-name": `Nav Link 1`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `anQHCIBeT`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4)`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(v, {
                          __fromCanvasComponent: !0,
                          children: s(r, {
                            children: s(h.p, {
                              className: `framer-styles-preset-k3kfom`,
                              "data-styles-preset": `gfMTc4H7D`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4))`,
                              },
                              children: s(M, {
                                href: { webPageId: `OqsiEhdfU` },
                                motionChild: !0,
                                nodeId: `ZbbGqNefx`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `xI7ubulvj`,
                                smoothScroll: !1,
                                children: s(h.a, {
                                  className: `framer-styles-preset-133ksub`,
                                  "data-styles-preset": `PNc4tBrUv`,
                                  children: `Fitur`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-1ktffjo`,
                          "data-framer-name": `Nav Link 2`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `ZbbGqNefx`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4)`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(v, {
                          __fromCanvasComponent: !0,
                          children: s(r, {
                            children: s(h.p, {
                              className: `framer-styles-preset-k3kfom`,
                              "data-styles-preset": `gfMTc4H7D`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4))`,
                              },
                              children: s(M, {
                                href: { webPageId: `UfhygGALz` },
                                motionChild: !0,
                                nodeId: `bi57XnPbb`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `xI7ubulvj`,
                                smoothScroll: !1,
                                children: s(h.a, {
                                  className: `framer-styles-preset-133ksub`,
                                  "data-styles-preset": `PNc4tBrUv`,
                                  children: `Kontak`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-1rndl58`,
                          "data-framer-name": `Nav Link 3`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `bi57XnPbb`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4)`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                                                s(O, {
                          height: 44,
                          width: `calc(${f?.width || `100vw`} - 40px)`,
                          y: (f?.y || 0) + 0 + 60 + 8 + 336.2,
                          children: s(te, {
                            className: `framer-yc6a6v-container`,
                            "data-framer-name": `Navbar CTA Button`,
                            layoutDependency: N,
                            layoutId: `HLYkznXeZ-container`,
                            name: `Navbar CTA Button`,
                            nodeId: `HLYkznXeZ`,
                            rendersWithMotion: !0,
                            scopeId: `xI7ubulvj`,
                            children: s(q, {
                              bSgywnMQ9: ``,
                              dMzFGkb3u: !1,
                              dP0U8qPjN: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                              F9tZ22mws: {
                                borderColor: `rgba(26, 26, 26, 0)`,
                                borderStyle: `solid`,
                                borderWidth: 2,
                              },
                              height: `100%`,
                              id: `HLYkznXeZ`,
                              jfeAUucDj: K,
                              TWaZPhsrs: `https://drive.google.com/file/d/18-EopaSbXF9kvxjN0Yzfv0k1HGmBTbhp/view?usp=drive_link`,
                              layoutId: `HLYkznXeZ`,
                              lnJBzRgIM: `Unduh APK`,
                              MK840EHqT: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                              name: `Navbar CTA Button`,
                              ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                              SLp3DWZqR: !0,
                              style: { width: `100%` },
                              variant: Ft(`MAMH3I2Oe`),
                              vlr7eN_dQ: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                              wDmZ1dhUo: U,
                              width: `100%`,
                              ZEAGlJD1F: {
                                borderColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4)`,
                                borderStyle: `solid`,
                                borderWidth: 0,
                              },
                              ...Q(
                                {
                                  TmOul1fvR: {
                                    dMzFGkb3u: !0,
                                    jfeAUucDj: L,
                                    SLp3DWZqR: !1,
                                    TWaZPhsrs: `https://drive.google.com/file/d/18-EopaSbXF9kvxjN0Yzfv0k1HGmBTbhp/view?usp=drive_link`,
                                  },
                                  yXT8qY5k7: { dMzFGkb3u: !0, jfeAUucDj: L, SLp3DWZqR: !1 },
                                },
                                b,
                                E
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-hLgpO.framer-3tv280, .framer-hLgpO .framer-3tv280 { display: block; }`,
          `.framer-hLgpO.framer-wt5ang { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 60px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 390px; }`,
          `.framer-hLgpO .framer-10zj3sy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 60px; justify-content: space-between; min-height: 60px; padding: 16px 20px 16px 20px; position: relative; width: 100%; }`,
          `.framer-hLgpO .framer-12124s9 { flex: none; height: 24px; overflow: visible; position: relative; text-decoration: none; width: 116px; }`,
          `.framer-hLgpO .framer-nbimfj { height: 20px; left: 0px; position: absolute; top: 2px; width: 23px; }`,
          `.framer-hLgpO .framer-mms6ac { height: 12px; left: 0px; position: absolute; top: 8px; width: 21px; }`,
          `.framer-hLgpO .framer-a840od { height: 12px; left: 3px; position: absolute; top: 0px; width: 21px; }`,
          `.framer-hLgpO .framer-1co6fl2 { flex: none; height: auto; position: absolute; right: 0px; top: 50%; white-space: pre; width: auto; }`,
          `.framer-hLgpO .framer-56c99c { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: center; padding: 0px; position: relative; width: 36px; }`,
          `.framer-hLgpO .framer-1s5qh4d { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          `.framer-hLgpO .framer-al2jbj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 8px 20px 24px 20px; position: relative; width: 100%; }`,
          `.framer-hLgpO .framer-frj08x, .framer-hLgpO .framer-1ktffjo, .framer-hLgpO .framer-1rndl58, .framer-hLgpO .framer-6b6910, .framer-hLgpO .framer-187cujn, .framer-hLgpO .framer-1t0qfk, .framer-hLgpO .framer-iixjrb, .framer-hLgpO .framer-kfty34, .framer-hLgpO .framer-11qkjfm, .framer-hLgpO .framer-1xexuqc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-hLgpO .framer-8sc17h { flex: none; height: 1px; position: relative; width: 100%; }`,
          `.framer-hLgpO .framer-yjve9c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-hLgpO .framer-yc6a6v-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-hLgpO.framer-v-u77v1x.framer-wt5ang, .framer-hLgpO.framer-v-xrt2ad.framer-wt5ang { height: min-content; }`,
          ...Je,
          ...Be,
          ...We,
          ...Oe,
        ],
        `framer-hLgpO`
      )),
      ($.displayName = `Mobile Navbar`),
      ($.defaultProps = { height: 60, width: 390 }),
      C($, {
        variant: {
          options: [`oqXNvb_1y`, `TmOul1fvR`, `LKPxHVCpA`, `yXT8qY5k7`],
          optionTitles: [`Closed`, `Open (White)`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: A.Enum,
        },
      }),
      S(
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
          ...kt,
          ...k(qe),
          ...k(ze),
          ...k(Ue),
          ...k(De),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([N(q, {}, t)])) }));
  });
export {
  K as C,
  L as D,
  W as E,
  se as O,
  Se as S,
  U as T,
  Te as _,
  Le as a,
  Ee as b,
  Re as c,
  je as d,
  Pe as f,
  Ae as g,
  De as h,
  pt as i,
  Ne as l,
  Oe as m,
  Vt as n,
  Ie as o,
  ke as p,
  X as r,
  Fe as s,
  $ as t,
  Me as u,
  we as v,
  de as w,
  q as x,
  Ce as y,
};
//# sourceMappingURL=shared-lib.BFsVOxQ4.mjs.map
