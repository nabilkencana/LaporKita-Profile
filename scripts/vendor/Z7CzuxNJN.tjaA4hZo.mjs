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
  Dt as ee,
  Et as te,
  G as v,
  I as y,
  M as b,
  N as x,
  O as S,
  Ot as C,
  R as w,
  dt as ne,
  ft as re,
  q as T,
  s as E,
  vt as D,
} from "./framer.DwK__Hy9.mjs";
import {
  _ as O,
  b as k,
  d as ie,
  f as A,
  g as j,
  h as M,
  l as ae,
  m as N,
  p as oe,
  u as P,
  v as se,
  y as F,
} from "./shared-lib.BFsVOxQ4.mjs";
var I,
  L,
  R,
  z,
  B,
  V,
  H,
  ce = e(() => {
    (s(),
      h(),
      l(),
      (I = `var(--framer-icon-mask)`),
      (L = i(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (R = m.create(L)),
      (z = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(R, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (B = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 Z" fill="transparent" height="18px" id="f4ZjIZppl" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 3)" width="18px"/><path d="M 0 0 L 0 8" fill="transparent" height="8px" id="rIdzUPPxE" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 8)" width="1px"/><path d="M 0 0 L 4 4 L 8 0" fill="transparent" height="4px" id="flMCXDe5L" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 12)" width="8px"/></svg>`),
      (V = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (H = C(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: s,
              JEeZYcamG: c,
              ...l
            } = V(e),
            u = te(`3089928481`, B);
          return o(z, {
            ...l,
            className: y(`framer-dyjdN`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": s, "--js9iwy": c, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-dyjdN { -webkit-mask: ${I}; aspect-ratio: 1; display: block; mask: ${I}; width: 24px; }`,
        ],
        `framer-dyjdN`
      )),
      (H.displayName = `Square Arrow Down`),
      x(H, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: E.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: E.Number,
        },
      }));
  });
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var W,
  G,
  K,
  q,
  J,
  Y,
  le,
  ue,
  de,
  fe,
  pe,
  X,
  me = e(() => {
    (s(),
      h(),
      p(),
      l(),
      ce(),
      j(),
      A(),
      k(),
      (W = v(H)),
      (G = [`BJlTLC2oV`, `NoEyYlNDR`, `vLnvMTLhP`]),
      (K = `framer-b7Y8j`),
      (q = {
        BJlTLC2oV: `framer-v-1sf1th7`,
        NoEyYlNDR: `framer-v-kmd574`,
        vLnvMTLhP: `framer-v-1654bkp`,
      }),
      (J = { bounce: 0, delay: 0, duration: 0.3, type: `spring` }),
      (Y = (e, t) => `translateX(-50%) ${t}`),
      (le = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(d.Provider, { value: s, children: n });
      }),
      (ue = { "Collapsed Compact": `vLnvMTLhP`, Collapsed: `BJlTLC2oV`, Expanded: `NoEyYlNDR` }),
      (de = m.create(r)),
      (fe = ({ desc: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        CYcMeDYwX: e ?? a.CYcMeDYwX ?? `Cukup 3 sentuhan lewat kamera Citizen Vision untuk foto, deteksi AI, dan kirim laporan.`,
        variant: ue[a.variant] ?? a.variant ?? `BJlTLC2oV`,
        xE_nimxGQ: r ?? a.xE_nimxGQ ?? `Bagaimana cara melapor di LaporKita?`,
      })),
      (pe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = C(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = u(),
            { activeLocale: l, setLocale: d } = D();
          re();
          let {
              style: p,
              className: h,
              layoutId: g,
              variant: te,
              xE_nimxGQ: v,
              CYcMeDYwX: b,
              ...x
            } = fe(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: k,
              isLoading: ie,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = ee({
              cycleOrder: G,
              defaultVariant: `BJlTLC2oV`,
              ref: a,
              variant: te,
              variantClassNames: q,
            }),
            N = pe(e, M),
            { activeVariantCallback: P, delay: se } = ne(C),
            F = P(async (...e) => {
              (A({ isPressed: !1 }), j(`NoEyYlNDR`));
            }),
            I = P(async (...e) => {
              (A({ isPressed: !1 }), j(`BJlTLC2oV`));
            }),
            L = y(K, ae, oe, O);
          return o(f, {
            id: g ?? s,
            children: o(de, {
              animate: M,
              initial: !1,
              children: o(le, {
                value: J,
                children: c(m.div, {
                  ...x,
                  ...E,
                  className: y(L, `framer-1sf1th7`, h, w),
                  "data-border": !0,
                  "data-framer-name": `Collapsed`,
                  "data-highlight": !0,
                  layoutDependency: N,
                  layoutId: `BJlTLC2oV`,
                  onTap: F,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-ea843f5c-0baa-43e5-aac8-44fa5dda7fbd, rgb(174, 184, 178))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.25)`,
                    ...p,
                  },
                  ...U(
                    {
                      NoEyYlNDR: { "data-framer-name": `Expanded`, onTap: I },
                      vLnvMTLhP: { "data-framer-name": `Collapsed Compact` },
                    },
                    C,
                    k
                  ),
                  children: [
                    c(m.div, {
                      className: `framer-1s68acc`,
                      "data-framer-name": `FAQ Content Stack`,
                      layoutDependency: N,
                      layoutId: `RjhQ0QNT1`,
                      children: [
                        c(m.div, {
                          className: `framer-12zqnkt`,
                          "data-framer-name": `FAQ Header Row`,
                          layoutDependency: N,
                          layoutId: `HOa8k8Y57`,
                          children: [
                            o(_, {
                              __fromCanvasComponent: !0,
                              children: o(r, {
                                children: o(m.h4, {
                                  className: `framer-styles-preset-1t48bm3`,
                                  "data-styles-preset": `n6gn2zrFO`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                  },
                                  children: `Bagaimana cara melapor di LaporKita?`,
                                }),
                              }),
                              className: `framer-tvfroa`,
                              "data-framer-name": `FAQ Question`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `R3uhX9jh4`,
                              style: {
                                "--extracted-1eung3n": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                              },
                              text: v,
                              variants: {
                                vLnvMTLhP: {
                                  "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...U(
                                {
                                  vLnvMTLhP: {
                                    children: o(r, {
                                      children: o(m.p, {
                                        className: `framer-styles-preset-1y3tbh`,
                                        "data-styles-preset": `HutzmjBVA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                        },
                                        children: `Bagaimana cara melapor di LaporKita?`,
                                      }),
                                    }),
                                  },
                                },
                                C,
                                k
                              ),
                            }),
                            o(m.div, {
                              className: `framer-dm8jeb`,
                              layoutDependency: N,
                              layoutId: `k4uE2TLs2`,
                              style: {
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                              },
                              children: o(H, {
                                animated: !0,
                                className: `framer-wqbcrr`,
                                layoutDependency: N,
                                layoutId: `OGa9hOfal`,
                                style: { "--1m973uw": `rgb(0, 0, 0)`, "--js9iwy": 1, rotate: 0 },
                                variants: {
                                  NoEyYlNDR: {
                                    "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                    rotate: 180,
                                  },
                                  vLnvMTLhP: { rotate: 0 },
                                },
                              }),
                            }),
                          ],
                        }),
                        o(m.div, {
                          className: `framer-1676fxm`,
                          "data-framer-name": `FAQ Answer Stack`,
                          layoutDependency: N,
                          layoutId: `TLf50hvsL`,
                          style: { opacity: 0 },
                          transformTemplate: Y,
                          variants: { NoEyYlNDR: { opacity: 1 } },
                          ...U({ NoEyYlNDR: { transformTemplate: void 0 } }, C, k),
                          children: o(_, {
                            __fromCanvasComponent: !0,
                            children: o(r, {
                              children: o(m.p, {
                                className: `framer-styles-preset-sak9x6`,
                                "data-styles-preset": `vVaZ0SXla`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81)))`,
                                },
                                children: `No, we dont…`,
                              }),
                            }),
                            className: `framer-dit3q3`,
                            "data-framer-name": `FAQ Answer`,
                            fonts: [`Inter`],
                            layoutDependency: N,
                            layoutId: `d1Y7RI1RR`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                            },
                            text: b,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    c(m.div, {
                      className: `framer-1itmu48`,
                      "data-framer-name": `Corners`,
                      layoutDependency: N,
                      layoutId: `zY7n0WzOy`,
                      children: [
                        o(m.div, {
                          className: `framer-14p5h6j`,
                          "data-framer-name": `Corner 4`,
                          layoutDependency: N,
                          layoutId: `DQVmj9lE9`,
                          children: o(S, {
                            className: `framer-ea8gcf`,
                            layoutDependency: N,
                            layoutId: `tLUczu5us`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-ea843f5c-0baa-43e5-aac8-44fa5dda7fbd, rgb(174, 184, 178)) /* {&quot;name&quot;:&quot;400&quot;} */"></path></svg>`,
                            withExternalLayout: !0,
                            ...U(
                              {
                                NoEyYlNDR: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                              },
                              C,
                              k
                            ),
                          }),
                        }),
                        o(m.div, {
                          className: `framer-1r9rejo`,
                          "data-framer-name": `Corner 3`,
                          layoutDependency: N,
                          layoutId: `AhEb3RZuO`,
                          style: { rotate: 180 },
                          children: o(S, {
                            className: `framer-woakm9`,
                            layoutDependency: N,
                            layoutId: `L8WmFhEOf`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-ea843f5c-0baa-43e5-aac8-44fa5dda7fbd, rgb(174, 184, 178)) /* {&quot;name&quot;:&quot;400&quot;} */"></path></svg>`,
                            withExternalLayout: !0,
                            ...U(
                              {
                                NoEyYlNDR: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                              },
                              C,
                              k
                            ),
                          }),
                        }),
                        o(m.div, {
                          className: `framer-14wivae`,
                          "data-framer-name": `Corner 2`,
                          layoutDependency: N,
                          layoutId: `UGN9BEVFp`,
                          style: { rotate: 270 },
                          children: o(S, {
                            className: `framer-19gawpt`,
                            layoutDependency: N,
                            layoutId: `TgXEtmgQk`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-ea843f5c-0baa-43e5-aac8-44fa5dda7fbd, rgb(174, 184, 178)) /* {&quot;name&quot;:&quot;400&quot;} */"></path></svg>`,
                            withExternalLayout: !0,
                            ...U(
                              {
                                NoEyYlNDR: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                              },
                              C,
                              k
                            ),
                          }),
                        }),
                        o(m.div, {
                          className: `framer-1cgr6op`,
                          "data-framer-name": `Corner 1`,
                          layoutDependency: N,
                          layoutId: `CODocb07O`,
                          style: { rotate: 90 },
                          children: o(S, {
                            className: `framer-13kck9y`,
                            layoutDependency: N,
                            layoutId: `M2NXexe2s`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-ea843f5c-0baa-43e5-aac8-44fa5dda7fbd, rgb(174, 184, 178)) /* {&quot;name&quot;:&quot;400&quot;} */"></path></svg>`,
                            withExternalLayout: !0,
                            ...U(
                              {
                                NoEyYlNDR: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                              },
                              C,
                              k
                            ),
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
          `.framer-b7Y8j.framer-1gpddg, .framer-b7Y8j .framer-1gpddg { display: block; }`,
          `.framer-b7Y8j.framer-1sf1th7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 35px 35px 35px 0px; position: relative; width: 442px; }`,
          `.framer-b7Y8j .framer-1s68acc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
          `.framer-b7Y8j .framer-12zqnkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 20px; position: relative; width: 100%; }`,
          `.framer-b7Y8j .framer-tvfroa { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-b7Y8j .framer-dm8jeb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-b7Y8j .framer-wqbcrr { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 37px); position: relative; width: 37px; }`,
          `.framer-b7Y8j .framer-1676fxm { align-content: flex-end; align-items: flex-end; bottom: -68px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; left: 50%; overflow: visible; padding: 0px 0px 0px 60px; position: absolute; width: 422px; z-index: 1; }`,
          `.framer-b7Y8j .framer-dit3q3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-b7Y8j .framer-1itmu48 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
          `.framer-b7Y8j .framer-14p5h6j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
          `.framer-b7Y8j .framer-ea8gcf, .framer-b7Y8j .framer-woakm9, .framer-b7Y8j .framer-19gawpt, .framer-b7Y8j .framer-13kck9y { height: 15px; position: relative; width: 15px; }`,
          `.framer-b7Y8j .framer-1r9rejo { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
          `.framer-b7Y8j .framer-14wivae { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
          `.framer-b7Y8j .framer-1cgr6op { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
          `.framer-b7Y8j.framer-v-kmd574.framer-1sf1th7 { gap: 20px; padding: 0px 35px 0px 0px; }`,
          `.framer-b7Y8j.framer-v-kmd574 .framer-1s68acc { gap: 25px; justify-content: flex-start; padding: 20px 0px 20px 0px; }`,
          `.framer-b7Y8j.framer-v-kmd574 .framer-1676fxm { bottom: unset; left: unset; padding: 0px 0px 0px 20px; position: relative; width: 100%; }`,
          `.framer-b7Y8j.framer-v-1654bkp.framer-1sf1th7 { padding: 11px 35px 11px 0px; }`,
          ...P,
          ...N,
          ...se,
          `.framer-b7Y8j[data-border="true"]::after, .framer-b7Y8j [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-b7Y8j`
      )),
      (X.displayName = `FAQ Item`),
      (X.defaultProps = { height: 130, width: 442 }),
      x(X, {
        variant: {
          options: [`BJlTLC2oV`, `NoEyYlNDR`, `vLnvMTLhP`],
          optionTitles: [`Collapsed`, `Expanded`, `Collapsed Compact`],
          title: `Variant`,
          type: E.Enum,
        },
        xE_nimxGQ: {
          defaultValue: `Bagaimana cara melapor di LaporKita?`,
          displayTextArea: !1,
          title: `Title`,
          type: E.String,
        },
        onxE_nimxGQChange: { changes: `xE_nimxGQ`, type: E.ChangeHandler },
        CYcMeDYwX: {
          defaultValue: `Cukup 3 sentuhan lewat kamera Citizen Vision untuk foto, deteksi AI, dan kirim laporan.`,
          description: ``,
          displayTextArea: !1,
          title: `desc`,
          type: E.String,
        },
        onCYcMeDYwXChange: { changes: `CYcMeDYwX`, type: E.ChangeHandler },
      }),
      b(
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
          ...W,
          ...T(ie),
          ...T(M),
          ...T(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  he,
  ge,
  _e,
  ve,
  Z,
  ye,
  be,
  xe,
  Se,
  Ce,
  Q,
  we = e(() => {
    (s(),
      h(),
      p(),
      l(),
      (he = g(m.div)),
      (ge = `framer-63FZW`),
      (_e = { f7G01r1ft: `framer-v-1qs0ahp` }),
      (ve = { delay: 0, duration: 3, ease: [0, 0, 1, 1], type: `tween` }),
      (Z = { delay: 0.5, duration: 2, ease: [0, 0, 1, 1], type: `tween` }),
      (ye = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 2,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (be = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(d.Provider, { value: s, children: n });
      }),
      (xe = m.create(r)),
      (Se = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = C(
        i(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = u(),
            { activeLocale: s, setLocale: l } = D();
          re();
          let { style: d, className: p, layoutId: h, variant: g, ..._ } = Se(e),
            {
              baseVariant: te,
              classNames: v,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: ne,
              variants: T,
            } = ee({ defaultVariant: `f7G01r1ft`, ref: i, variant: g, variantClassNames: _e }),
            E = Ce(e, T),
            O = y(ge);
          return o(f, {
            id: h ?? a,
            children: o(xe, {
              animate: T,
              initial: !1,
              children: o(be, {
                value: ve,
                children: c(m.div, {
                  ..._,
                  ...x,
                  className: y(O, `framer-1qs0ahp`, p, v),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: E,
                  layoutId: `f7G01r1ft`,
                  ref: i,
                  style: { ...d },
                  children: [
                    o(he, {
                      __framer__loop: ye,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0.5,
                      __framer__loopRepeatType: `loop`,
                      __framer__loopTransition: Z,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-j3rfpv`,
                      "data-framer-name": `Circle Pulsating`,
                      layoutDependency: E,
                      layoutId: `ns2PvKaqd`,
                      style: {
                        backgroundColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                        borderBottomLeftRadius: 256,
                        borderBottomRightRadius: 256,
                        borderTopLeftRadius: 256,
                        borderTopRightRadius: 256,
                      },
                    }),
                    o(m.div, {
                      className: `framer-7d1m87`,
                      "data-framer-name": `Circle Normal`,
                      layoutDependency: E,
                      layoutId: `sd6uO7feB`,
                      style: {
                        backgroundColor: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                        borderBottomLeftRadius: 256,
                        borderBottomRightRadius: 256,
                        borderTopLeftRadius: 256,
                        borderTopRightRadius: 256,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-63FZW.framer-1793yg5, .framer-63FZW .framer-1793yg5 { display: block; }`,
          `.framer-63FZW.framer-1qs0ahp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 15px; justify-content: center; padding: 0px; position: relative; width: 15px; }`,
          `.framer-63FZW .framer-j3rfpv { flex: none; height: 8px; left: calc(50.00000000000002% - 8px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 8px / 2); width: 8px; z-index: 1; }`,
          `.framer-63FZW .framer-7d1m87 { flex: none; height: 8px; overflow: visible; position: relative; width: 8px; }`,
        ],
        `framer-63FZW`
      )),
      (Q.displayName = `Pulsing CIrcle`),
      (Q.defaultProps = { height: 15, width: 15 }),
      b(Q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Te,
  Ee,
  De,
  Oe = e(() => {
    (h(),
      w.loadFonts([
        `GF;Geist Mono-500`,
        `GF;Geist Mono-700`,
        `GF;Geist Mono-700italic`,
        `GF;Geist Mono-500italic`,
      ]),
      (Te = [
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
              url: `https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a0QQ5Cl4PuCSdNg.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Ee = [
        `.framer-kxSN3 .framer-styles-preset-1kyvdj7:not(.rich-text-wrapper), .framer-kxSN3 .framer-styles-preset-1kyvdj7.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Inter", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Inter", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Inter", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Inter", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 0.97); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, #1d9c51); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (De = `framer-kxSN3`));
  }),
  ke,
  Ae,
  $,
  je = e(() => {
    (h(),
      w.loadFonts([
        `FS;Plus Jakarta Sans-medium`,
        `FS;Plus Jakarta Sans-bold`,
        `FS;Plus Jakarta Sans-bold italic`,
        `FS;Plus Jakarta Sans-medium italic`,
      ]),
      (ke = [
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
      (Ae = [
        `.framer-Oj1gc .framer-styles-preset-1pj8wqs:not(.rich-text-wrapper), .framer-Oj1gc .framer-styles-preset-1pj8wqs.rich-text-wrapper h3 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 1.85); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.06em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 0px) { .framer-Oj1gc .framer-styles-preset-1pj8wqs:not(.rich-text-wrapper), .framer-Oj1gc .framer-styles-preset-1pj8wqs.rich-text-wrapper h3 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 1.48); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.06em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      ($ = `framer-Oj1gc`));
  });
export {
  De as a,
  Oe as c,
  X as d,
  me as f,
  je as i,
  Q as l,
  Ae as n,
  Ee as o,
  ke as r,
  Te as s,
  $ as t,
  we as u,
};
//# sourceMappingURL=Z7CzuxNJN.tjaA4hZo.mjs.map
