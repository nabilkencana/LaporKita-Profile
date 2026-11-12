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
import { a as d, r as f, t as p, w as m } from "./motion.DA7Wf6OE.mjs";
import {
  $ as h,
  At as g,
  D as _,
  Dt as v,
  I as y,
  M as b,
  N as x,
  Ot as S,
  ft as C,
  q as w,
  s as T,
  vt as E,
} from "./framer.DwK__Hy9.mjs";
import { _ as D, b as O, v as k, y as A } from "./shared-lib.BFsVOxQ4.mjs";
function j(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (s(),
      h(),
      p(),
      l(),
      O(),
      (M = g(m.div)),
      (N = { ypR4EPow5: { hover: !0, pressed: !0 } }),
      (P = [`ypR4EPow5`, `YyUwlm2us`, `Nal9XIe6d`, `EfoUBBrZj`, `Bg5kxSiMk`]),
      (F = `framer-DVS48`),
      (I = {
        Bg5kxSiMk: `framer-v-344fc9`,
        EfoUBBrZj: `framer-v-c3yan2`,
        Nal9XIe6d: `framer-v-li493d`,
        ypR4EPow5: `framer-v-3xpxf8`,
        YyUwlm2us: `framer-v-d1tdgv`,
      }),
      (L = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (R = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (z = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (B = (e, t) => `translateX(-50%) ${t}`),
      (V = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(d.Provider, { value: s, children: n });
      }),
      (H = {
        Default: `ypR4EPow5`,
        Disabled: `Nal9XIe6d`,
        Error: `Bg5kxSiMk`,
        Loading: `YyUwlm2us`,
        Success: `EfoUBBrZj`,
      }),
      (U = m.create(r)),
      (W = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        H7xPVCt1U: n ?? i.H7xPVCt1U ?? `Submit`,
        variant: H[i.variant] ?? i.variant ?? `ypR4EPow5`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = S(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = u(),
            { activeLocale: l, setLocale: d } = E();
          C();
          let { style: p, className: h, layoutId: g, variant: b, H7xPVCt1U: x, ...S } = W(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: H,
              setGestureState: K,
              setVariant: q,
              variants: J,
            } = v({
              cycleOrder: P,
              defaultVariant: `ypR4EPow5`,
              enabledGestures: N,
              ref: a,
              variant: b,
              variantClassNames: I,
            }),
            Y = G(e, J),
            X = y(F, D),
            Z = () => w !== `YyUwlm2us`,
            Q = () => w === `YyUwlm2us`;
          return o(f, {
            id: g ?? s,
            children: o(U, {
              animate: J,
              initial: !1,
              children: o(V, {
                value: L,
                children: c(m.button, {
                  ...S,
                  ...k,
                  className: y(X, `framer-3xpxf8`, h, T),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: Y,
                  layoutId: `ypR4EPow5`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    opacity: 1,
                    ...p,
                  },
                  variants: {
                    "ypR4EPow5-hover": {
                      backgroundColor: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                      opacity: 1,
                    },
                    "ypR4EPow5-pressed": { backgroundColor: `rgb(51, 51, 51)`, opacity: 1 },
                    Bg5kxSiMk: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                    EfoUBBrZj: { opacity: 1 },
                    Nal9XIe6d: { opacity: 0.5 },
                  },
                  ...j(
                    {
                      "ypR4EPow5-hover": { "data-framer-name": void 0 },
                      "ypR4EPow5-pressed": { "data-framer-name": void 0 },
                      Bg5kxSiMk: { "data-framer-name": `Error` },
                      EfoUBBrZj: { "data-framer-name": `Success` },
                      Nal9XIe6d: { "data-framer-name": `Disabled` },
                      YyUwlm2us: { "data-framer-name": `Loading` },
                    },
                    w,
                    A
                  ),
                  children: [
                    Z() &&
                      o(_, {
                        __fromCanvasComponent: !0,
                        children: o(r, {
                          children: o(m.p, {
                            className: `framer-styles-preset-sak9x6`,
                            "data-styles-preset": `vVaZ0SXla`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)))`,
                            },
                            children: `Submit`,
                          }),
                        }),
                        className: `framer-htj26i`,
                        fonts: [`Inter`],
                        layoutDependency: Y,
                        layoutId: `kpbZH8blM`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                          "--framer-link-text-color": `rgb(29, 156, 81)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: x,
                        variants: { Bg5kxSiMk: { "--extracted-r6o4lv": `rgb(255, 0, 0)` } },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...j(
                          {
                            Bg5kxSiMk: {
                              children: o(r, {
                                children: o(m.p, {
                                  className: `framer-styles-preset-sak9x6`,
                                  "data-styles-preset": `vVaZ0SXla`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 0, 0))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                              text: void 0,
                            },
                            EfoUBBrZj: {
                              children: o(r, {
                                children: o(m.p, {
                                  className: `framer-styles-preset-sak9x6`,
                                  "data-styles-preset": `vVaZ0SXla`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                              text: void 0,
                            },
                          },
                          w,
                          A
                        ),
                      }),
                    Q() &&
                      o(m.div, {
                        className: `framer-1vu6msu`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: Y,
                        layoutId: `I4dRFqrXb`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: o(M, {
                          __framer__loop: z,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopPauseOffscreen: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: R,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-6siqa5`,
                          "data-framer-name": `Conic`,
                          layoutDependency: Y,
                          layoutId: `OD0gyj3yo`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(29, 156, 81) 0deg, rgb(29, 156, 81) 360deg)`,
                            backgroundColor: `rgb(29, 156, 81)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            YyUwlm2us: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: o(m.div, {
                            className: `framer-1we6bhv`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: Y,
                            layoutId: `zj69v072v`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: B,
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
          `.framer-DVS48.framer-54959d, .framer-DVS48 .framer-54959d { display: block; }`,
          `.framer-DVS48.framer-3xpxf8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }`,
          `.framer-DVS48 .framer-htj26i { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-DVS48 .framer-1vu6msu { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-DVS48 .framer-6siqa5 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-DVS48 .framer-1we6bhv { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-DVS48.framer-v-d1tdgv.framer-3xpxf8, .framer-DVS48.framer-v-li493d.framer-3xpxf8, .framer-DVS48.framer-v-c3yan2.framer-3xpxf8, .framer-DVS48.framer-v-344fc9.framer-3xpxf8 { cursor: unset; }`,
          `.framer-DVS48.framer-v-d1tdgv .framer-6siqa5 { overflow: hidden; }`,
          ...k,
        ],
        `framer-DVS48`
      )),
      (K.displayName = `Form Button`),
      (K.defaultProps = { height: 40, width: 240 }),
      x(K, {
        variant: {
          options: [`ypR4EPow5`, `YyUwlm2us`, `Nal9XIe6d`, `EfoUBBrZj`, `Bg5kxSiMk`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: T.Enum,
        },
        H7xPVCt1U: { defaultValue: `Submit`, displayTextArea: !1, title: `Title`, type: T.String },
        onH7xPVCt1UChange: { changes: `H7xPVCt1U`, type: T.ChangeHandler },
      }),
      b(
        K,
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
          ...w(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { q as n, K as t };
//# sourceMappingURL=R32mQWWE9.DxSftEoD.mjs.map
