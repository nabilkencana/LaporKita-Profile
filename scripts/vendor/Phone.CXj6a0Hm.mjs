import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  N as i,
  O as a,
  P as o,
  R as s,
  _ as c,
  j as l,
  l as u,
  s as d,
  u as f,
  w as p,
  y as m,
  z as h,
} from "./react.Dfbt0i5D.mjs";
import {
  $ as g,
  B as _,
  Q as v,
  W as y,
  a as b,
  f as x,
  r as S,
  t as C,
  w,
} from "./motion.DA7Wf6OE.mjs";
import {
  $ as T,
  D as E,
  Dt as D,
  Et as O,
  G as k,
  I as A,
  J as j,
  M,
  N,
  O as P,
  Ot as F,
  _t as I,
  bt as L,
  c as R,
  dt as ee,
  ft as z,
  g as B,
  q as V,
  s as H,
  vt as te,
  xt as U,
} from "./framer.DwK__Hy9.mjs";
import {
  _ as ne,
  b as re,
  d as ie,
  f as ae,
  g as oe,
  h as W,
  l as se,
  m as ce,
  p as le,
  u as ue,
  v as de,
  y as fe,
} from "./shared-lib.BFsVOxQ4.mjs";
var G,
  K,
  pe,
  me,
  q,
  J,
  he,
  ge = e(() => {
    (d(),
      T(),
      p(),
      (G = `var(--framer-icon-mask)`),
      (K = c(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (pe = w.create(K)),
      (me = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(pe, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (q = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 4 0 L 4 4" fill="transparent" height="4px" id="AYu3ULFlE" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(17 3)" width="4px"/><path d="M 4.575 0 C 5.999 2.785 6.371 5.99 5.623 9.027 C 5.526 9.426 5.227 9.744 4.835 9.867 C 4.443 9.989 4.016 9.897 3.709 9.624 L 0 5.918" fill="transparent" height="9.919603542906351px" id="zLNRJVvs7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(14 11.082)" width="6.000225501653752px"/><path d="M 4.002 5.997 L 0.292 2.287 C 0.021 1.98 -0.069 1.554 0.054 1.163 C 0.177 0.772 0.494 0.474 0.892 0.377 C 3.93 -0.371 7.137 0.002 9.922 1.427" fill="transparent" height="5.997074281036638px" id="ssxj1q_Zz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2.998 4.003)" width="9.92215881717858px"/><path d="M 4 0 C 3.547 -0.001 3.113 0.179 2.793 0.5 L 0.147 3.146 C 0.004 3.289 -0.039 3.504 0.038 3.691 C 0.115 3.878 0.298 4 0.5 4 L 2 4 C 2.552 4 3 4.448 3 5 L 3 6.5 C 3 6.703 3.121 6.885 3.308 6.963 C 3.496 7.04 3.711 6.997 3.854 6.854 L 6.5 4.207 C 6.821 3.887 7.001 3.453 7 3 L 7 1 C 7 0.448 6.552 0 6 0 Z" fill="transparent" height="7.000911715985151px" id="WZbr3He1V" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 14)" width="6.999910922883965px"/><path d="M 0 11.293 L 11.293 0" fill="transparent" height="11.293px" id="UTABYIotu" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9.707 3)" width="11.293px"/></svg>`),
      (J = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (he = F(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = J(e),
            l = O(`2443618505`, q);
          return u(me, {
            ...c,
            className: A(`framer-3Xx3W`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-3Xx3W { -webkit-mask: ${G}; aspect-ratio: 1; display: block; mask: ${G}; width: 24px; }`,
        ],
        `framer-3Xx3W`
      )),
      (he.displayName = `Bow Arrow`),
      N(he, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: H.Number,
        },
      }));
  }),
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we = e(() => {
    (d(),
      T(),
      p(),
      (_e = `var(--framer-icon-mask)`),
      (ve = c(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ye = w.create(ve)),
      (be = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(ye, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (xe = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 Z" fill="transparent" height="18px" id="f4kITuw53" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 3)" width="18px"/><path d="M 0 6 L 4 6 C 5.105 6 6 5.105 6 4 L 6 0" fill="transparent" height="6px" id="CL6m0lOjU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(11 3)" width="6px"/><path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="dbKMEkToT" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7 7)" width="4px"/><path d="M 0 6 L 0 2 C 0 0.895 0.895 0 2 0 L 6 0" fill="transparent" height="6px" id="Cnr6JhFvd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7 15)" width="6px"/><path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="yKG9xzq3z" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(13 13)" width="4px"/></svg>`),
      (Se = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Ce = F(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Se(e),
            l = O(`81540456`, xe);
          return u(be, {
            ...c,
            className: A(`framer-OupQM`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-OupQM { -webkit-mask: ${_e}; aspect-ratio: 1; display: block; mask: ${_e}; width: 24px; }`,
        ],
        `framer-OupQM`
      )),
      (Ce.displayName = `Circuit Board`),
      N(Ce, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: H.Number,
        },
      }));
  }),
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me = e(() => {
    (d(),
      T(),
      p(),
      (Te = `var(--framer-icon-mask)`),
      (Ee = c(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (De = w.create(Ee)),
      (Oe = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(De, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (ke = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>`),
      (Ae = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (je = F(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              fICyAUQY1: o,
              lKf_CQTz5: s,
              BKVe8Pgvw: c,
              ...l
            } = Ae(e),
            d = O(`1173457374`, ke);
          return u(Oe, {
            ...l,
            className: A(`framer-EcgqK`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: d }),
          });
        }),
        [
          `.framer-EcgqK { -webkit-mask: ${Te}; aspect-ratio: 1; display: block; mask: ${Te}; width: 24px; }`,
        ],
        `framer-EcgqK`
      )),
      (je.displayName = `Arrow Right`),
      N(je, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: H.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: H.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: H.Number,
        },
      }));
  }),
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be = e(() => {
    (d(),
      T(),
      p(),
      (Ne = `var(--framer-icon-mask)`),
      (Pe = c(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Fe = w.create(Pe)),
      (Ie = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(Fe, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (Le = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 4 4 L 4 0 L 0 0" fill="transparent" height="4px" id="P9oyzwdb4" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 4)" width="4px"/><path d="M 2 12 C 0.895 12 0 11.105 0 10 L 0 2 C 0 0.895 0.895 0 2 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 10 C 16 11.105 15.105 12 14 12 Z" fill="transparent" height="12px" id="ZCQgSqFf0" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 8)" width="16px"/><path d="M 0 0 L 2 0" fill="transparent" height="1px" id="kk0tGFEqS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 14)" width="2px"/><path d="M 0 0 L 2 0" fill="transparent" height="1px" id="pqXS2Balu" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(20 14)" width="2px"/><path d="M 0 0 L 0 2" fill="transparent" height="2px" id="QJjkiol5X" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(15 13)" width="1px"/><path d="M 0 0 L 0 2" fill="transparent" height="2px" id="CJpG6MevD" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 13)" width="1px"/></svg>`),
      (Re = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (ze = F(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Re(e),
            l = O(`2780554075`, Le);
          return u(Ie, {
            ...c,
            className: A(`framer-joHGo`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-joHGo { -webkit-mask: ${Ne}; aspect-ratio: 1; display: block; mask: ${Ne}; width: 24px; }`,
        ],
        `framer-joHGo`
      )),
      (ze.displayName = `Bot`),
      N(ze, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: H.Number,
        },
      }));
  }),
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je = e(() => {
    (d(),
      T(),
      p(),
      (Ve = `var(--framer-icon-mask)`),
      (He = c(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ue = w.create(He)),
      (We = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(Ue, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (Ge = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 13 L 0 0" fill="transparent" height="13px" id="soePBiCqm" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 5)" width="1px"/><path d="M 6 4 C 4.223 3.481 3.001 1.851 3 0 C 2.999 1.851 1.777 3.481 0 4" fill="transparent" height="4px" id="g3z_K009m" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 9)" width="6px"/><path d="M 11.598 4.5 C 12.229 3.408 12.109 2.038 11.298 1.072 C 10.488 0.106 9.159 -0.25 7.974 0.181 C 6.789 0.612 6 1.739 6 3 C 6 1.739 5.211 0.612 4.026 0.181 C 2.841 -0.25 1.513 0.106 0.702 1.072 C -0.109 2.038 -0.229 3.408 0.402 4.5" fill="transparent" height="4.500283270099576px" id="dt3y9bF6n" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 2)" width="12.000049131583959px"/><path d="M 0 0 C 1.191 0.306 2.175 1.143 2.668 2.27 C 3.161 3.396 3.109 4.687 2.526 5.77" fill="transparent" height="5.77px" id="dJ7UXLFXh" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(17.997 5.125)" width="3.0039082915657254px"/><path d="M 0 7.464 C 1.81 7.464 3.395 6.248 3.864 4.499 C 4.332 2.751 3.568 0.905 2 0" fill="transparent" height="7.464px" id="udRnn_4uS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(18 10.536)" width="4.000185577272699px"/><path d="M 15.967 0 C 16.158 1.478 15.512 2.939 14.29 3.792 C 13.069 4.645 11.474 4.749 10.153 4.061 C 8.831 3.373 8.002 2.007 8 0.517 C 7.998 2.007 7.169 3.373 5.847 4.061 C 4.526 4.749 2.931 4.645 1.71 3.792 C 0.488 2.939 -0.158 1.478 0.033 0" fill="transparent" height="4.512742367620977px" id="iFPxDs4YB" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 17.483)" width="16.000157970756632px"/><path d="M 4 7.464 C 2.19 7.464 0.605 6.248 0.137 4.499 C -0.332 2.751 0.432 0.905 2 0" fill="transparent" height="7.464px" id="Lubb1O1AI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 10.536)" width="4.000185577272697px"/><path d="M 3.004 0 C 1.813 0.306 0.829 1.143 0.336 2.27 C -0.157 3.396 -0.105 4.687 0.478 5.77" fill="transparent" height="5.77px" id="iddM66qAg" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2.999 5.125)" width="3.003908291565727px"/></svg>`),
      (Ke = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (qe = F(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Ke(e),
            l = O(`425173927`, Ge);
          return u(We, {
            ...c,
            className: A(`framer-gtpAO`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-gtpAO { -webkit-mask: ${Ve}; aspect-ratio: 1; display: block; mask: ${Ve}; width: 24px; }`,
        ],
        `framer-gtpAO`
      )),
      (qe.displayName = `Brain`),
      N(qe, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: H.Number,
        },
      }));
  });
function Ye(e) {
  let t = a(null),
    r = a([]),
    o = a([]),
    s = a(!1),
    c = a(0),
    d = a(!1),
    [f, p] = n(null),
    m = I(),
    g = e.preset === `Custom` ? null : Ze[e.preset],
    {
      text: _,
      font: v,
      colorHidden: y,
      colorRevealed: b,
      htmlTag: x,
      trigger: S,
      onLoadDuration: C,
      offsetStart: w,
      offsetEnd: T,
      style: E,
    } = e,
    D = g?.splitMode ?? e.splitMode,
    O = g?.revealDirection ?? e.revealDirection,
    k = g?.stagger ?? e.stagger,
    A = g?.xOffset ?? e.xOffset,
    j = g?.yOffset ?? e.yOffset,
    M = g?.blur ?? e.blur,
    N = g?.rotateX ?? e.rotateX,
    P = g?.perspective ?? e.perspective,
    F = g?.scale ?? e.scale,
    L = D === `Lines`,
    {
      allSpans: R,
      unitCount: ee,
      wordGroups: z,
    } = l(() => {
      let e = String(_).split(/(\s+)/),
        t = [],
        n = 0;
      e.forEach((e) => {
        let r = /^\s+$/.test(e),
          i = Array.from(e);
        if (r) i.forEach((e) => t.push({ char: e, unit: -1, isSpace: !0 }));
        else if (D === `Words` || D === `Lines`) {
          let e = n++;
          i.forEach((n) => t.push({ char: n, unit: e, isSpace: !1 }));
        } else i.forEach((e) => t.push({ char: e, unit: n++, isSpace: !1 }));
      });
      let r = [],
        i = null;
      if (
        (t.forEach((e, t) => {
          e.isSpace
            ? ((i &&= (r.push(i), null)), r.push({ type: `space`, spans: [{ ...e, idx: t }] }))
            : ((i ||= { type: `word`, spans: [] }), i.spans.push({ ...e, idx: t }));
        }),
        i && r.push(i),
        O === `Right to Left` && !L)
      ) {
        let e = n - 1;
        t.forEach((t) => {
          t.isSpace || (t.unit = e - t.unit);
        });
      }
      return { allSpans: t, unitCount: n, wordGroups: r };
    }, [_, D, O, L]);
  (i(() => {
    if (!L || m) {
      f !== null && p(null);
      return;
    }
    let e = () => {
      let e = t.current;
      if (!e) return;
      let n = e.querySelectorAll(`[data-wg]`);
      if (n.length === 0) return;
      let r = [];
      n.forEach((e) => {
        r.push({ gi: parseInt(e.dataset.wg), top: Math.round(e.getBoundingClientRect().top) });
      });
      let i = [],
        a = [],
        o = -1 / 0;
      (r.forEach(({ gi: e, top: t }) => {
        (a.length > 0 && Math.abs(t - o) > 3 && (i.push([...a]), (a = [])), a.push(e), (o = t));
      }),
        a.length > 0 && i.push([...a]));
      let s = i.map((e, t) => {
        let n = e[0],
          r = t < i.length - 1 ? i[t + 1][0] : z.length;
        return Array.from({ length: r - n }, (e, t) => n + t);
      });
      (O === `Right to Left` && s.reverse(), p(s));
    };
    requestAnimationFrame(() => requestAnimationFrame(e));
  }, [_, D, O, v, L, z.length]),
    i(() => {
      let e = t.current;
      if (!e || (L && !f)) return;
      let n = L ? f.length : ee;
      if (n === 0) return;
      L || (r.current = r.current.slice(0, R.length));
      let i = 0.7,
        a = i + (n - 1) * k,
        l = (e) => {
          let t = e * a;
          L
            ? o.current.forEach((r, a) => {
                if (!r) return;
                let o = n <= 1 ? e : Math.max(0, Math.min(1, (t - a * k) / i)),
                  s = `translateY(${((1 - o) * 100).toFixed(1)}%)`;
                (N !== 0 &&
                  (s = `perspective(${P}px) rotateX(${(N * (1 - o)).toFixed(1)}deg) ${s}`),
                  F < 1 && (s += ` scale(${(F + (1 - F) * o).toFixed(3)})`),
                  (r.style.transform = s),
                  (r.style.opacity = `${0.3 + o * 0.7}`),
                  (r.style.filter = M > 0 ? `blur(${(M * (1 - o)).toFixed(1)}px)` : ``));
                let c = Math.round(o * 100);
                r.style.color = `color-mix(in srgb, ${b} ${c}%, ${y})`;
              })
            : r.current.forEach((r, a) => {
                if (!r) return;
                let o = R[a];
                if (!o || o.isSpace) return;
                let s = n <= 1 ? e : Math.max(0, Math.min(1, (t - o.unit * k) / i));
                r.style.opacity = `${0.3 + s * 0.7}`;
                let c = (-A + A * s).toFixed(1),
                  l = (j * (1 - s)).toFixed(1),
                  u = ``;
                (N !== 0 && (u = `perspective(${P}px) rotateX(${(N * (1 - s)).toFixed(1)}deg) `),
                  (u += `translateX(${c}px) translateY(${l}px)`),
                  F < 1 && (u += ` scale(${(F + (1 - F) * s).toFixed(3)})`),
                  (r.style.transform = u),
                  (r.style.filter = M > 0 ? `blur(${(M * (1 - s)).toFixed(1)}px)` : ``));
                let d = Math.round(s * 100);
                r.style.color = `color-mix(in srgb, ${b} ${d}%, ${y})`;
              });
        };
      if (m) {
        l(1);
        return;
      }
      if (S === `On Load`) {
        let t = !1;
        l(0);
        let n = () => {
            if (t) return;
            t = !0;
            let e = performance.now(),
              n = (t) => {
                let r = (t - e) / 1e3,
                  i = Math.min(1, r / C);
                (l(1 - (1 - i) ** 3), i < 1 && (c.current = requestAnimationFrame(n)));
              };
            c.current = requestAnimationFrame(n);
          },
          r = new IntersectionObserver(
            ([e]) => {
              e.isIntersecting && (r.disconnect(), n());
            },
            { threshold: 0.1 }
          );
        return (
          r.observe(e),
          () => {
            (r.disconnect(), cancelAnimationFrame(c.current));
          }
        );
      }
      let u = w / 100,
        p = T / 100,
        g = () => {
          let t = h.innerHeight,
            n = e.getBoundingClientRect(),
            r = (u - p) * t,
            i;
          if (L)
            ((i = 1),
              r > 0 &&
                ((i = Math.max(0, Math.min(1, (u * t - n.top) / r))),
                i === 0 && n.top < t && n.bottom > 0 && (i = 1)));
          else {
            if (r <= 0) return;
            i = Math.max(0, Math.min(1, (u * t - n.top) / r));
          }
          l(i);
        },
        _ = new IntersectionObserver(
          ([e]) => {
            ((s.current = e.isIntersecting), e.isIntersecting && g());
          },
          { rootMargin: `200px` }
        );
      _.observe(e);
      let v = () => {
        !s.current ||
          d.current ||
          ((d.current = !0),
          (c.current = requestAnimationFrame(() => {
            (g(), (d.current = !1));
          })));
      };
      return (
        h.addEventListener(`scroll`, v, { passive: !0 }),
        h.addEventListener(`resize`, v),
        g(),
        () => {
          (_.disconnect(),
            cancelAnimationFrame(c.current),
            h.removeEventListener(`scroll`, v),
            h.removeEventListener(`resize`, v));
        }
      );
    }, [R, ee, f, L, m, k, A, j, M, N, P, F, S, C, w, T, y, b]));
  let B = x || `div`,
    V = { display: `inline-block`, ...v, ...E },
    H = (e, t) =>
      e.type === `word`
        ? u(
            `span`,
            {
              "data-wg": t,
              style: { whiteSpace: `nowrap`, display: `inline` },
              children: e.spans.map(({ char: e, idx: t }) =>
                u(
                  `span`,
                  {
                    ref: (e) => {
                      r.current[t] = e;
                    },
                    style: {
                      display: `inline-block`,
                      willChange: L ? void 0 : `transform, opacity, color, filter`,
                    },
                    children: e,
                  },
                  t
                )
              ),
            },
            `w-${t}`
          )
        : e.spans.map(({ char: e, idx: t }) =>
            u(`span`, { style: { display: `inline-block` }, children: e === ` ` ? `\xA0` : e }, t)
          );
  return L && f
    ? u(B, {
        ref: t,
        style: V,
        children: f.map((e, t) =>
          u(
            `div`,
            {
              style: { overflow: `hidden`, display: `block` },
              children: u(`div`, {
                ref: (e) => {
                  o.current[t] = e;
                },
                style: { display: `block`, willChange: `transform, opacity, filter` },
                children: e.map((e) => H(z[e], e)),
              }),
            },
            t
          )
        ),
      })
    : u(B, { ref: t, style: V, children: z.map((e, t) => H(e, t)) });
}
var Xe,
  Ze,
  Y,
  Qe = e(() => {
    (r(),
      d(),
      p(),
      T(),
      (Xe = `Scroll down and watch each character come alive with smooth, staggered animation.`),
      (Ze = {
        Default: {
          splitMode: `Characters`,
          revealDirection: `Left to Right`,
          stagger: 0.2,
          xOffset: 7,
          yOffset: 0,
          blur: 0,
          rotateX: 0,
          perspective: 800,
          scale: 1,
        },
        "Fade In Up": {
          splitMode: `Characters`,
          revealDirection: `Left to Right`,
          stagger: 0.15,
          xOffset: 0,
          yOffset: 25,
          blur: 0,
          rotateX: 0,
          perspective: 800,
          scale: 1,
        },
        "Blur Reveal": {
          splitMode: `Characters`,
          revealDirection: `Left to Right`,
          stagger: 0.2,
          xOffset: 0,
          yOffset: 0,
          blur: 8,
          rotateX: 0,
          perspective: 800,
          scale: 1,
        },
        Cinematic: {
          splitMode: `Characters`,
          revealDirection: `Left to Right`,
          stagger: 0.12,
          xOffset: 10,
          yOffset: 20,
          blur: 4,
          rotateX: 0,
          perspective: 800,
          scale: 1,
        },
        "3D Flip": {
          splitMode: `Characters`,
          revealDirection: `Left to Right`,
          stagger: 0.15,
          xOffset: 0,
          yOffset: 0,
          blur: 2,
          rotateX: 45,
          perspective: 800,
          scale: 1,
        },
        "Wave RTL": {
          splitMode: `Characters`,
          revealDirection: `Right to Left`,
          stagger: 0.1,
          xOffset: 5,
          yOffset: 15,
          blur: 0,
          rotateX: 0,
          perspective: 800,
          scale: 1,
        },
        Typewriter: {
          splitMode: `Characters`,
          revealDirection: `Left to Right`,
          stagger: 0.4,
          xOffset: 0,
          yOffset: 0,
          blur: 0,
          rotateX: 0,
          perspective: 800,
          scale: 1,
        },
        "Glitch Rise": {
          splitMode: `Characters`,
          revealDirection: `Left to Right`,
          stagger: 0.08,
          xOffset: 15,
          yOffset: 40,
          blur: 10,
          rotateX: 30,
          perspective: 600,
          scale: 1,
        },
        "Soft Words": {
          splitMode: `Words`,
          revealDirection: `Left to Right`,
          stagger: 0.3,
          xOffset: 0,
          yOffset: 12,
          blur: 3,
          rotateX: 0,
          perspective: 800,
          scale: 1,
        },
        "Cascade Down": {
          splitMode: `Characters`,
          revealDirection: `Right to Left`,
          stagger: 0.12,
          xOffset: 0,
          yOffset: -30,
          blur: 5,
          rotateX: -20,
          perspective: 900,
          scale: 1,
        },
        "Masked Lines": {
          splitMode: `Lines`,
          revealDirection: `Left to Right`,
          stagger: 0.15,
          xOffset: 0,
          yOffset: 0,
          blur: 0,
          rotateX: 0,
          perspective: 800,
          scale: 1,
        },
        "Scale Pop": {
          splitMode: `Characters`,
          revealDirection: `Left to Right`,
          stagger: 0.1,
          xOffset: 0,
          yOffset: 15,
          blur: 2,
          rotateX: 0,
          perspective: 800,
          scale: 0.5,
        },
      }),
      (Ye.defaultProps = {
        preset: `Default`,
        text: Xe,
        font: {
          fontFamily: `Inter`,
          fontWeight: 600,
          fontSize: 62,
          lineHeight: `1.4em`,
          letterSpacing: `-0.02em`,
        },
        colorHidden: `#9ca3af`,
        colorRevealed: `#111827`,
        htmlTag: `div`,
        trigger: `Scroll`,
        onLoadDuration: 1.5,
        splitMode: `Characters`,
        revealDirection: `Left to Right`,
        stagger: 0.2,
        xOffset: 7,
        yOffset: 0,
        blur: 0,
        rotateX: 0,
        perspective: 800,
        scale: 1,
        offsetStart: 80,
        offsetEnd: 20,
      }),
      (Y = (e) => e.preset === `Custom`),
      N(Ye, {
        preset: {
          type: H.Enum,
          title: `Preset`,
          defaultValue: `Default`,
          options: [
            `Default`,
            `Fade In Up`,
            `Blur Reveal`,
            `Cinematic`,
            `3D Flip`,
            `Wave RTL`,
            `Typewriter`,
            `Glitch Rise`,
            `Soft Words`,
            `Cascade Down`,
            `Masked Lines`,
            `Scale Pop`,
            `Custom`,
          ],
        },
        text: { type: H.String, title: `Content`, defaultValue: Xe, displayTextArea: !0 },
        font: {
          type: H.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `62px`,
            fontWeight: 600,
            letterSpacing: `-0.02em`,
            lineHeight: `1.4em`,
          },
        },
        htmlTag: {
          type: H.Enum,
          title: `HTML Tag`,
          defaultValue: `div`,
          options: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `div`, `span`],
          optionTitles: [`H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `DIV`, `SPAN`],
        },
        colorRevealed: { type: H.Color, title: `Color`, defaultValue: `#111827` },
        colorHidden: { type: H.Color, title: `Hidden Color`, defaultValue: `#9ca3af` },
        trigger: {
          type: H.Enum,
          title: `Trigger`,
          defaultValue: `Scroll`,
          options: [`Scroll`, `On Load`],
          displaySegmentedControl: !0,
        },
        onLoadDuration: {
          type: H.Number,
          title: `Duration`,
          defaultValue: 1.5,
          min: 0.3,
          max: 5,
          step: 0.1,
          unit: `s`,
          hidden: (e) => e.trigger !== `On Load`,
        },
        splitMode: {
          type: H.Enum,
          title: `Split`,
          options: [`Characters`, `Words`, `Lines`],
          defaultValue: `Characters`,
          hidden: (e) => !Y(e),
        },
        revealDirection: {
          type: H.Enum,
          title: `Direction`,
          options: [`Left to Right`, `Right to Left`],
          defaultValue: `Left to Right`,
          displaySegmentedControl: !0,
          hidden: (e) => !Y(e),
        },
        stagger: {
          type: H.Number,
          title: `Stagger`,
          defaultValue: 0.2,
          min: 0,
          max: 1,
          step: 0.05,
          hidden: (e) => !Y(e),
        },
        xOffset: {
          type: H.Number,
          title: `X Offset`,
          defaultValue: 7,
          min: 0,
          max: 30,
          step: 1,
          hidden: (e) => !Y(e),
        },
        yOffset: {
          type: H.Number,
          title: `Y Offset`,
          defaultValue: 0,
          min: -50,
          max: 50,
          step: 1,
          description: `Positive = fade in up, negative = fade in down`,
          hidden: (e) => !Y(e),
        },
        scale: {
          type: H.Number,
          title: `Scale`,
          defaultValue: 1,
          min: 0,
          max: 1,
          step: 0.05,
          description: `Starting scale (1 = no scale animation)`,
          hidden: (e) => !Y(e),
        },
        blur: {
          type: H.Number,
          title: `Blur`,
          defaultValue: 0,
          min: 0,
          max: 20,
          step: 0.5,
          description: `Blur on hidden text (0 = off)`,
          hidden: (e) => !Y(e),
        },
        rotateX: {
          type: H.Number,
          title: `3D Rotate X`,
          defaultValue: 0,
          min: -90,
          max: 90,
          step: 5,
          description: `3D tilt angle (0 = off)`,
          hidden: (e) => !Y(e),
        },
        perspective: {
          type: H.Number,
          title: `Perspective`,
          defaultValue: 800,
          min: 200,
          max: 2e3,
          step: 50,
          hidden: (e) => !Y(e) || e.rotateX === 0,
        },
        offsetStart: {
          type: H.Number,
          title: `Start %`,
          defaultValue: 80,
          min: 0,
          max: 100,
          unit: `%`,
          description: `Viewport position where reveal begins`,
          hidden: (e) => e.trigger !== `Scroll`,
        },
        offsetEnd: {
          type: H.Number,
          title: `End %`,
          defaultValue: 20,
          min: 0,
          max: 100,
          unit: `%`,
          description: `Viewport position where reveal completes`,
          hidden: (e) => e.trigger !== `Scroll`,
        },
      }));
  }),
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot = e(() => {
    (d(),
      T(),
      p(),
      ($e = `var(--framer-icon-mask)`),
      (et = c(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (tt = w.create(et)),
      (nt = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(tt, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (rt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12 6 C 12 2.686 9.314 0 6 0 C 2.686 0 0 2.686 0 6" fill="transparent" height="6px" id="QS9HErSOk" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 14)" width="12px"/><path d="M 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 Z" fill="transparent" height="8px" id="VFEkBVZ4I" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 6)" width="8px"/><path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" height="20px" id="Ihqi2W5ow" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="20px"/></svg>`),
      (it = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (at = F(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = it(e),
            l = O(`2511577395`, rt);
          return u(nt, {
            ...c,
            className: A(`framer-971zr`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-971zr { -webkit-mask: ${$e}; aspect-ratio: 1; display: block; mask: ${$e}; width: 24px; }`,
        ],
        `framer-971zr`
      )),
      (at.displayName = `Circle User Round`),
      N(at, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: H.Number,
        },
      }));
  }),
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt = e(() => {
    (d(),
      T(),
      p(),
      (st = `var(--framer-icon-mask)`),
      (ct = c(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (lt = w.create(ct)),
      (ut = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(lt, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (dt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 3 0 L 3 1.626 C 2.992 2.323 2.623 2.965 2.024 3.322 C 0.757 4.26 0.007 5.741 0 7.318" fill="transparent" height="7.318000000000001px" id="gNVbtCbso" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7 14.66)" width="3px"/><path d="M 0 0 L 0 1.626 C 0.008 2.323 0.377 2.965 0.976 3.322 C 2.243 4.26 2.993 5.741 3 7.318" fill="transparent" height="7.318000000000001px" id="uK_wN9rir" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(14 14.66)" width="3px"/><path d="M 0 5 L 1.5 5 C 2.881 5 4 3.881 4 2.5 C 4 1.119 2.881 0 1.5 0 L 0 0" fill="transparent" height="5px" id="lBrxlwKby" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(18 4)" width="4px"/><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="AQl5WA2jd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 22)" width="16px"/><path d="M 0 7 C 0 10.314 2.686 13 6 13 C 9.314 13 12 10.314 12 7 L 12 1 C 12 0.448 11.552 0 11 0 L 1 0 C 0.448 0 0 0.448 0 1 Z" fill="transparent" height="13px" id="zyJY6X5nL" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 2)" width="12px"/><path d="M 4 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 C 0 1.119 1.119 0 2.5 0 L 4 0" fill="transparent" height="5px" id="S2UtESAgC" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 4)" width="4px"/></svg>`),
      (ft = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (pt = F(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = ft(e),
            l = O(`3932649364`, dt);
          return u(ut, {
            ...c,
            className: A(`framer-Hh3YM`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-Hh3YM { -webkit-mask: ${st}; aspect-ratio: 1; display: block; mask: ${st}; width: 24px; }`,
        ],
        `framer-Hh3YM`
      )),
      (pt.displayName = `Trophy`),
      N(pt, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: H.Number,
        },
      }));
  }),
  ht,
  gt,
  _t,
  vt,
  yt = e(() => {
    (d(),
      T(),
      p(),
      (ht = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6 0 L 6 20 M 10 3 L 4 3 C 2.067 3 0.5 4.567 0.5 6.5 C 0.5 8.433 2.067 10 4 10 L 8.5 10 C 10.433 10 12 11.567 12 13.5 C 12 15.433 10.433 17 8.5 17 L 0 17" fill="transparent" height="20px" id="HR3dswvmd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(6 2)" width="12px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (gt = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? u(w.div, { ...a, layoutId: r, ref: t }) : u(`div`, { ...a, ref: t });
      })),
      (_t = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (vt = F(
        c(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = _t(e);
          return u(gt, {
            ...s,
            className: A(`framer-vZM8J`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-vZM8J { -webkit-mask: ${ht}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${ht}; width: 24px; }`,
        ],
        `framer-vZM8J`
      )),
      (vt.displayName = `Dollar`),
      N(vt, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: H.Color },
      }));
  }),
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  X,
  Et = e(() => {
    (d(),
      T(),
      p(),
      (bt = `var(--framer-icon-mask)`),
      (xt = c(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (St = w.create(xt)),
      (Ct = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(St, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (wt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.527 0.295 C 9.616 0.114 9.8 0 10.002 0 C 10.203 0 10.387 0.114 10.477 0.295 L 12.787 4.974 C 13.096 5.599 13.692 6.033 14.382 6.134 L 19.548 6.89 C 19.747 6.919 19.913 7.059 19.976 7.251 C 20.038 7.442 19.986 7.653 19.842 7.794 L 16.106 11.432 C 15.606 11.919 15.377 12.622 15.495 13.31 L 16.377 18.45 C 16.412 18.65 16.33 18.852 16.166 18.971 C 16.002 19.09 15.785 19.105 15.606 19.01 L 10.988 16.582 C 10.37 16.258 9.632 16.258 9.015 16.582 L 4.398 19.01 C 4.219 19.105 4.002 19.089 3.838 18.97 C 3.674 18.851 3.593 18.649 3.628 18.45 L 4.509 13.311 C 4.627 12.622 4.398 11.919 3.898 11.432 L 0.162 7.795 C 0.016 7.654 -0.037 7.443 0.026 7.25 C 0.088 7.057 0.255 6.917 0.456 6.889 L 5.621 6.134 C 6.312 6.033 6.909 5.6 7.218 4.974 Z" fill="transparent" height="19.072069999784322px" id="OelI3erXH" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(1.998 2)" width="20.001834564852647px"/></svg>`),
      (Tt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (X = F(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Tt(e),
            l = O(`4261812911`, wt);
          return u(Ct, {
            ...c,
            className: A(`framer-n8s1h`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-n8s1h { -webkit-mask: ${bt}; aspect-ratio: 1; display: block; mask: ${bt}; width: 24px; }`,
        ],
        `framer-n8s1h`
      )),
      (X.displayName = `Star`),
      N(X, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: H.Number,
        },
      }));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Q,
  Rt = e(() => {
    (d(),
      T(),
      C(),
      p(),
      Et(),
      oe(),
      ae(),
      re(),
      (Dt = k(X)),
      (Ot = [`v_XjDvmsr`, `YrTxz6aew`, `urJeDfyCA`, `qGZiozZQq`]),
      (kt = `framer-8kjyU`),
      (At = {
        qGZiozZQq: `framer-v-152thoi`,
        urJeDfyCA: `framer-v-fww0g1`,
        v_XjDvmsr: `framer-v-10cp8u0`,
        YrTxz6aew: `framer-v-12xivpj`,
      }),
      (jt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Mt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Nt = ({ value: e, children: n }) => {
        let r = t(b),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(b.Provider, { value: a, children: n });
      }),
      (Pt = {
        "Variant 1": `v_XjDvmsr`,
        "Variant 2": `YrTxz6aew`,
        "Variant 3": `urJeDfyCA`,
        "Variant 4": `qGZiozZQq`,
      }),
      (Ft = w.create(o)),
      (It = ({ height: e, id: t, image: n, name1: r, text: i, width: a, ...o }) => ({
        ...o,
        KNcKrFM4V:
          i ??
          o.KNcKrFM4V ??
          `"Lapor jalan berlubang di Sawojajar cuma butuh 15 detik, langsung dapat nomor tiket dan pantau progresnya."`,
        mNG1qi3vv: r ?? o.mNG1qi3vv ?? `Kalandra R. · Warga Klojen`,
        variant: Pt[o.variant] ?? o.variant ?? `v_XjDvmsr`,
        ZuRhdY3pj: n ??
          o.ZuRhdY3pj ?? {
            alt: ``,
            pixelHeight: 4e3,
            pixelWidth: 6e3,
            src: `../../assets/images/MmGrf8ysKLgt7WYL0OdoM7ZbOQ.jpg`,
            srcSet: `../../assets/images/MmGrf8ysKLgt7WYL0OdoM7ZbOQ-536ca5.jpg 512w,../../assets/images/MmGrf8ysKLgt7WYL0OdoM7ZbOQ-847311.jpg 1024w,../../assets/images/MmGrf8ysKLgt7WYL0OdoM7ZbOQ-808c2c.jpg 2048w,../../assets/images/MmGrf8ysKLgt7WYL0OdoM7ZbOQ-ff619e.jpg 4096w,../../assets/images/MmGrf8ysKLgt7WYL0OdoM7ZbOQ.jpg 6000w`,
          },
      })),
      (Lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = F(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = m(),
            { activeLocale: s, setLocale: c } = te(),
            l = z(),
            {
              style: d,
              className: p,
              layoutId: h,
              variant: g,
              KNcKrFM4V: _,
              mNG1qi3vv: v,
              ZuRhdY3pj: y,
              ...b
            } = It(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: M,
              setGestureState: N,
              setVariant: F,
              variants: I,
            } = D({
              cycleOrder: Ot,
              defaultVariant: `v_XjDvmsr`,
              ref: r,
              variant: g,
              variantClassNames: At,
            }),
            L = Lt(e, I),
            R = A(kt, le, ne, se);
          return u(S, {
            id: h ?? i,
            children: u(Ft, {
              animate: I,
              initial: !1,
              children: u(Nt, {
                value: jt,
                children: f(w.div, {
                  ...b,
                  ...O,
                  className: A(R, `framer-10cp8u0`, p, C),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: L,
                  layoutId: `v_XjDvmsr`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    background: `radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87)) 100%)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    boxShadow: `1px 1px 6px 0px var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, rgb(106, 198, 143))`,
                    ...d,
                  },
                  variants: {
                    qGZiozZQq: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, rgb(185, 209, 158))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      background: `radial-gradient(50% 50% at 50% 50%, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) 0%, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) 100%)`,
                      backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                    },
                    urJeDfyCA: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                    YrTxz6aew: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-672a63cc-de99-4785-b3b9-f9e2325995d1, rgb(185, 209, 158))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      background: `radial-gradient(50% 50% at 50% 50%, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) 0%, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)) 100%)`,
                      backgroundColor: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                    },
                  },
                  ...Z(
                    {
                      qGZiozZQq: { "data-border": !0, "data-framer-name": `Variant 4` },
                      urJeDfyCA: { "data-framer-name": `Variant 3` },
                      YrTxz6aew: { "data-border": !0, "data-framer-name": `Variant 2` },
                    },
                    x,
                    k
                  ),
                  children: [
                    f(w.div, {
                      className: `framer-97fpas`,
                      "data-framer-name": `Testimonial Card Body`,
                      layoutDependency: L,
                      layoutId: `Vx1Rq0vuv`,
                      children: [
                        f(w.div, {
                          className: `framer-ijn6g3`,
                          "data-framer-name": `Testimonial Header Row`,
                          layoutDependency: L,
                          layoutId: `hx6qziPnN`,
                          children: [
                            u(B, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 4e3,
                                intrinsicWidth: 6e3,
                                loading: j(
                                  (l?.y || 0) +
                                    25 +
                                    (0 + (((l?.height || 223) - 50 - 84) / 1) * 0) +
                                    0 +
                                    0
                                ),
                                pixelHeight: 4e3,
                                pixelWidth: 6e3,
                                sizes: `54px`,
                                ...Mt(y),
                              },
                              className: `framer-16kafvi`,
                              "data-framer-name": `Testimonial Avatar`,
                              layoutDependency: L,
                              layoutId: `RnKZ9gwSa`,
                              style: {
                                borderBottomLeftRadius: 7,
                                borderBottomRightRadius: 7,
                                borderTopLeftRadius: 7,
                                borderTopRightRadius: 7,
                                boxShadow: `2px 2px 2px 0px rgba(0, 0, 0, 0.25)`,
                              },
                              ...Z(
                                {
                                  qGZiozZQq: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 4e3,
                                      intrinsicWidth: 6e3,
                                      loading: j(
                                        (l?.y || 0) +
                                          25 +
                                          (0 + (((l?.height || 335) - 50 - 133) / 1) * 0) +
                                          0 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 4e3,
                                      pixelWidth: 6e3,
                                      sizes: `54px`,
                                      ...Mt(y),
                                    },
                                  },
                                  urJeDfyCA: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 4e3,
                                      intrinsicWidth: 6e3,
                                      loading: j(
                                        (l?.y || 0) +
                                          25 +
                                          (0 + (((l?.height || 335) - 50 - 133) / 1) * 0) +
                                          0 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 4e3,
                                      pixelWidth: 6e3,
                                      sizes: `54px`,
                                      ...Mt(y),
                                    },
                                  },
                                },
                                x,
                                k
                              ),
                            }),
                            f(w.div, {
                              className: `framer-1q9mbsv`,
                              "data-framer-name": `Testimonial Attribution`,
                              layoutDependency: L,
                              layoutId: `lXHEXd9hA`,
                              children: [
                                u(E, {
                                  __fromCanvasComponent: !0,
                                  children: u(o, {
                                    children: u(w.p, {
                                      className: `framer-styles-preset-1y3tbh`,
                                      "data-styles-preset": `HutzmjBVA`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)))`,
                                      },
                                      children: `Kalandra R. · Warga Klojen`,
                                    }),
                                  }),
                                  className: `framer-18fvqsc`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `byKWNabBb`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                    "--framer-link-text-color": `rgb(29, 156, 81)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: v,
                                  variants: {
                                    qGZiozZQq: {
                                      "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                    },
                                    YrTxz6aew: {
                                      "--extracted-r6o4lv": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      qGZiozZQq: {
                                        children: u(o, {
                                          children: u(w.p, {
                                            className: `framer-styles-preset-1y3tbh`,
                                            "data-styles-preset": `HutzmjBVA`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                            },
                                            children: `Kalandra R. · Warga Klojen`,
                                          }),
                                        }),
                                      },
                                      YrTxz6aew: {
                                        children: u(o, {
                                          children: u(w.p, {
                                            className: `framer-styles-preset-1y3tbh`,
                                            "data-styles-preset": `HutzmjBVA`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                            },
                                            children: `Kalandra R. · Warga Klojen`,
                                          }),
                                        }),
                                      },
                                    },
                                    x,
                                    k
                                  ),
                                }),
                                u(E, {
                                  __fromCanvasComponent: !0,
                                  children: u(o, {
                                    children: u(w.p, {
                                      className: `framer-styles-preset-sak9x6`,
                                      "data-styles-preset": `vVaZ0SXla`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237)))`,
                                      },
                                      children: `Pengguna & Mitra LaporKita`,
                                    }),
                                  }),
                                  className: `framer-1k9v2tc`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `SHNHNWBWp`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                    "--framer-link-text-color": `rgb(29, 156, 81)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  variants: {
                                    qGZiozZQq: {
                                      "--extracted-r6o4lv": `var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(62, 74, 68))`,
                                    },
                                    YrTxz6aew: {
                                      "--extracted-r6o4lv": `var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(62, 74, 68))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      qGZiozZQq: {
                                        children: u(o, {
                                          children: u(w.p, {
                                            className: `framer-styles-preset-sak9x6`,
                                            "data-styles-preset": `vVaZ0SXla`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(62, 74, 68)))`,
                                            },
                                            children: `Pengguna & Mitra LaporKita`,
                                          }),
                                        }),
                                      },
                                      YrTxz6aew: {
                                        children: u(o, {
                                          children: u(w.p, {
                                            className: `framer-styles-preset-sak9x6`,
                                            "data-styles-preset": `vVaZ0SXla`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb45b186-5b86-43ee-bc99-db8d872fd668, rgb(62, 74, 68)))`,
                                            },
                                            children: `Pengguna & Mitra LaporKita`,
                                          }),
                                        }),
                                      },
                                    },
                                    x,
                                    k
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(w.div, {
                          className: `framer-vsp2o8`,
                          "data-framer-name": `Testimonial Rating Row`,
                          layoutDependency: L,
                          layoutId: `ZiZbrNnkI`,
                          children: [
                            u(X, {
                              animated: !0,
                              className: `framer-4fe39e`,
                              layoutDependency: L,
                              layoutId: `y2VflfpC5`,
                              style: {
                                "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                "--js9iwy": 2,
                              },
                              variants: {
                                qGZiozZQq: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                                YrTxz6aew: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                              },
                            }),
                            u(X, {
                              animated: !0,
                              className: `framer-8qo89p`,
                              layoutDependency: L,
                              layoutId: `sv4F1mRIi`,
                              style: {
                                "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                "--js9iwy": 2,
                              },
                              variants: {
                                qGZiozZQq: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                                YrTxz6aew: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                              },
                            }),
                            u(X, {
                              animated: !0,
                              className: `framer-15876y9`,
                              layoutDependency: L,
                              layoutId: `n2STjsZSJ`,
                              style: {
                                "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                "--js9iwy": 2,
                              },
                              variants: {
                                qGZiozZQq: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                                YrTxz6aew: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                              },
                            }),
                            u(X, {
                              animated: !0,
                              className: `framer-1i2jq3b`,
                              layoutDependency: L,
                              layoutId: `ZxvzEy8Sc`,
                              style: {
                                "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                "--js9iwy": 2,
                              },
                              variants: {
                                qGZiozZQq: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                                YrTxz6aew: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                              },
                            }),
                            u(X, {
                              animated: !0,
                              className: `framer-1nu9lwo`,
                              layoutDependency: L,
                              layoutId: `hRJmgLO8U`,
                              style: {
                                "--1m973uw": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                "--js9iwy": 2,
                              },
                              variants: {
                                qGZiozZQq: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                                YrTxz6aew: {
                                  "--1m973uw": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                },
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    u(E, {
                      __fromCanvasComponent: !0,
                      children: u(o, {
                        children: u(w.h4, {
                          className: `framer-styles-preset-1t48bm3`,
                          "data-styles-preset": `n6gn2zrFO`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-1eung3n, var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249)))`,
                          },
                          children: `"Lapor jalan berlubang di Sawojajar cuma butuh 15 detik, langsung dapat nomor tiket dan pantau progresnya."`,
                        }),
                      }),
                      className: `framer-18vjr18`,
                      fonts: [`Inter`],
                      layoutDependency: L,
                      layoutId: `vdq0WNG42`,
                      style: {
                        "--extracted-1eung3n": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                      },
                      text: _,
                      variants: {
                        qGZiozZQq: {
                          "--extracted-1eung3n": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                        },
                        YrTxz6aew: {
                          "--extracted-1eung3n": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Z(
                        {
                          qGZiozZQq: {
                            children: u(o, {
                              children: u(w.h4, {
                                className: `framer-styles-preset-1t48bm3`,
                                "data-styles-preset": `n6gn2zrFO`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                },
                                children: `"Lapor jalan berlubang di Sawojajar cuma butuh 15 detik, langsung dapat nomor tiket dan pantau progresnya."`,
                              }),
                            }),
                          },
                          YrTxz6aew: {
                            children: u(o, {
                              children: u(w.h4, {
                                className: `framer-styles-preset-1t48bm3`,
                                "data-styles-preset": `n6gn2zrFO`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26)))`,
                                },
                                children: `"Lapor jalan berlubang di Sawojajar cuma butuh 15 detik, langsung dapat nomor tiket dan pantau progresnya."`,
                              }),
                            }),
                          },
                        },
                        x,
                        k
                      ),
                    }),
                    f(w.div, {
                      className: `framer-4ab376`,
                      layoutDependency: L,
                      layoutId: `Lia79GgHP`,
                      children: [
                        u(w.div, {
                          className: `framer-gzebbt`,
                          layoutDependency: L,
                          layoutId: `lMyDX0oq6`,
                          children: u(P, {
                            className: `framer-f8wuuo`,
                            layoutDependency: L,
                            layoutId: `MLCDE9DIF`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                            withExternalLayout: !0,
                            ...Z(
                              {
                                qGZiozZQq: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                                YrTxz6aew: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                              },
                              x,
                              k
                            ),
                          }),
                        }),
                        u(w.div, {
                          className: `framer-1t7yu6o`,
                          layoutDependency: L,
                          layoutId: `v0ovkZUIa`,
                          style: { rotate: 180 },
                          children: u(P, {
                            className: `framer-1nhbfhs`,
                            layoutDependency: L,
                            layoutId: `W0fNB9HvY`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                            withExternalLayout: !0,
                            ...Z(
                              {
                                qGZiozZQq: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                                YrTxz6aew: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                              },
                              x,
                              k
                            ),
                          }),
                        }),
                        u(w.div, {
                          className: `framer-b12kye`,
                          layoutDependency: L,
                          layoutId: `Mt4nm6ZPv`,
                          style: { rotate: 270 },
                          children: u(P, {
                            className: `framer-n4iebr`,
                            layoutDependency: L,
                            layoutId: `JRsxh89eD`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                            withExternalLayout: !0,
                            ...Z(
                              {
                                qGZiozZQq: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                                YrTxz6aew: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                              },
                              x,
                              k
                            ),
                          }),
                        }),
                        u(w.div, {
                          className: `framer-1k64xm5`,
                          layoutDependency: L,
                          layoutId: `KlDzjTLmf`,
                          style: { rotate: 90 },
                          children: u(P, {
                            className: `framer-147lwf5`,
                            layoutDependency: L,
                            layoutId: `lRZez25fu`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14" overflow="visible"><path d="M 0 14 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                            withExternalLayout: !0,
                            ...Z(
                              {
                                qGZiozZQq: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14" overflow="visible"><path d="M 0 14 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                                YrTxz6aew: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 14" overflow="visible"><path d="M 0 14 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) /* {&quot;name&quot;:&quot;600&quot;} */"></path></svg>`,
                                },
                              },
                              x,
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
          `.framer-8kjyU.framer-1bl0z4g, .framer-8kjyU .framer-1bl0z4g { display: block; }`,
          `.framer-8kjyU.framer-10cp8u0 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 223px; justify-content: space-between; overflow: visible; padding: 25px; position: relative; width: 471px; }`,
          `.framer-8kjyU .framer-97fpas { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8kjyU .framer-ijn6g3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-8kjyU .framer-16kafvi { flex: none; height: 54px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 54px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-8kjyU .framer-1q9mbsv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 49px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-8kjyU .framer-18fvqsc, .framer-8kjyU .framer-1k9v2tc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8kjyU .framer-vsp2o8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-8kjyU .framer-4fe39e, .framer-8kjyU .framer-8qo89p, .framer-8kjyU .framer-15876y9, .framer-8kjyU .framer-1i2jq3b, .framer-8kjyU .framer-1nu9lwo { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); position: relative; width: 21px; }`,
          `.framer-8kjyU .framer-18vjr18 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-8kjyU .framer-4ab376 { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-8kjyU .framer-gzebbt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
          `.framer-8kjyU .framer-f8wuuo, .framer-8kjyU .framer-1nhbfhs, .framer-8kjyU .framer-n4iebr { height: 15px; position: relative; width: 15px; }`,
          `.framer-8kjyU .framer-1t7yu6o { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
          `.framer-8kjyU .framer-b12kye { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
          `.framer-8kjyU .framer-1k64xm5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
          `.framer-8kjyU .framer-147lwf5 { height: 14px; position: relative; width: 15px; }`,
          `.framer-8kjyU.framer-v-fww0g1.framer-10cp8u0, .framer-8kjyU.framer-v-152thoi.framer-10cp8u0 { height: 335px; width: 288px; }`,
          `.framer-8kjyU.framer-v-fww0g1 .framer-97fpas, .framer-8kjyU.framer-v-152thoi .framer-97fpas { flex-direction: column; gap: 28px; justify-content: center; order: 0; }`,
          `.framer-8kjyU.framer-v-fww0g1 .framer-ijn6g3 { order: 0; }`,
          `.framer-8kjyU.framer-v-fww0g1 .framer-vsp2o8 { order: 1; width: 100%; }`,
          `.framer-8kjyU.framer-v-fww0g1 .framer-18vjr18, .framer-8kjyU.framer-v-152thoi .framer-18vjr18 { order: 1; }`,
          `.framer-8kjyU.framer-v-fww0g1 .framer-4ab376, .framer-8kjyU.framer-v-152thoi .framer-4ab376 { order: 2; }`,
          `.framer-8kjyU.framer-v-152thoi .framer-vsp2o8 { width: 100%; }`,
          ...ce,
          ...de,
          ...ue,
          `.framer-8kjyU[data-border="true"]::after, .framer-8kjyU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-8kjyU`
      )),
      (Q.displayName = `Testimonial`),
      (Q.defaultProps = { height: 223, width: 471 }),
      N(Q, {
        variant: {
          options: [`v_XjDvmsr`, `YrTxz6aew`, `urJeDfyCA`, `qGZiozZQq`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: H.Enum,
        },
        KNcKrFM4V: {
          defaultValue: `"Lapor jalan berlubang di Sawojajar cuma butuh 15 detik, langsung dapat nomor tiket dan pantau progresnya."`,
          displayTextArea: !1,
          title: `Text`,
          type: H.String,
        },
        onKNcKrFM4VChange: { changes: `KNcKrFM4V`, type: H.ChangeHandler },
        mNG1qi3vv: {
          defaultValue: `Kalandra R. · Warga Klojen`,
          displayTextArea: !1,
          title: `Name`,
          type: H.String,
        },
        onmNG1qi3vvChange: { changes: `mNG1qi3vv`, type: H.ChangeHandler },
        ZuRhdY3pj: {
          __defaultAssetReference: `data:framer/asset-reference,MmGrf8ysKLgt7WYL0OdoM7ZbOQ.jpg?originalFilename=jeffrey-keenan-pUhxoSapPFA-unsplash.jpg&width=6000&height=4000`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,MmGrf8ysKLgt7WYL0OdoM7ZbOQ.jpg?originalFilename=jeffrey-keenan-pUhxoSapPFA-unsplash.jpg&width=6000&height=4000`,
          },
          title: `Image`,
          type: H.ResponsiveImage,
        },
      }),
      M(
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
          ...Dt,
          ...V(W),
          ...V(fe),
          ...V(ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  $,
  Yt = e(() => {
    (d(),
      T(),
      C(),
      p(),
      (Bt = [`gQCLk3gFF`, `QW43EMVfQ`]),
      (Vt = `framer-mHSZv`),
      (Ht = { gQCLk3gFF: `framer-v-9fwmvu`, QW43EMVfQ: `framer-v-2yd46n` }),
      (Ut = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Wt = ({ value: e, children: n }) => {
        let r = t(b),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(b.Provider, { value: a, children: n });
      }),
      (Gt = { "Bottom Aligned": `QW43EMVfQ`, "Top Aligned": `gQCLk3gFF` }),
      (Kt = w.create(o)),
      (qt = ({ height: e, id: t, logo1: n, logo2: r, transition: i, width: a, ...o }) => ({
        ...o,
        hL0Snwv45: r ??
          o.hL0Snwv45 ?? {
            alt: ``,
            pixelHeight: 66,
            pixelWidth: 400,
            src: `../../assets/images/CWIDTXd51zGUetAwpfPdHmdwCQg.png`,
          },
        oNi8MxjOe: i ?? o.oNi8MxjOe ?? { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
        variant: Gt[o.variant] ?? o.variant ?? `gQCLk3gFF`,
        wU8QRB33c: n ??
          o.wU8QRB33c ?? {
            alt: ``,
            pixelHeight: 73,
            pixelWidth: 400,
            src: `../../assets/images/kXNgUEs5n0eBWK7nSalBFMAfvjQ.png`,
          },
      })),
      (Jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = F(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = m(),
            { activeLocale: o, setLocale: s } = te(),
            c = z(),
            {
              style: l,
              className: d,
              layoutId: p,
              variant: h,
              wU8QRB33c: g,
              hL0Snwv45: _,
              oNi8MxjOe: v,
              ...y
            } = qt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: O,
              setGestureState: k,
              setVariant: M,
              variants: N,
            } = D({
              cycleOrder: Bt,
              defaultVariant: `gQCLk3gFF`,
              ref: r,
              variant: h,
              variantClassNames: Ht,
            }),
            P = Jt(e, N),
            { activeVariantCallback: F, delay: I } = ee(b);
          U(b, {
            default: F(async (...e) => {
              await I(() => M(`QW43EMVfQ`), 2500);
            }),
            QW43EMVfQ: F(async (...e) => {
              await I(() => M(`gQCLk3gFF`), 2500);
            }),
          });
          let L = A(Vt);
          return u(S, {
            id: p ?? i,
            children: u(Kt, {
              animate: N,
              initial: !1,
              children: u(Wt, {
                value: v,
                children: u(w.div, {
                  ...y,
                  ...T,
                  className: A(L, `framer-9fwmvu`, d, x),
                  "data-framer-name": `Top Aligned`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `gQCLk3gFF`,
                  ref: r,
                  style: {
                    mask: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 11.49426164298222%, rgba(0, 0, 0, 0.94828) 88.2183995740167%, rgba(0, 0, 0, 0) 100%) add`,
                    WebkitMask: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 11.49426164298222%, rgba(0, 0, 0, 0.94828) 88.2183995740167%, rgba(0, 0, 0, 0) 100%) add`,
                    ...l,
                  },
                  ...zt({ QW43EMVfQ: { "data-framer-name": `Bottom Aligned` } }, b, E),
                  children: f(w.div, {
                    className: `framer-877x8v`,
                    "data-framer-name": `Brand Logo Pair`,
                    layoutDependency: P,
                    layoutId: `UPiVrkqVj`,
                    children: [
                      u(B, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 48.666666666666664,
                          intrinsicWidth: 266.6666666666667,
                          loading: j((c?.y || 0) + 0 + 0 + 17 + 0),
                          pixelHeight: 73,
                          pixelWidth: 400,
                          sizes: `200.8241px`,
                          ...Ut(g),
                        },
                        className: `framer-x2sfo`,
                        "data-framer-name": `Logoipsum-426`,
                        fitImageDimension: `width`,
                        layoutDependency: P,
                        layoutId: `VkLRefgLg`,
                        ...zt(
                          {
                            QW43EMVfQ: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 48.666666666666664,
                                intrinsicWidth: 266.6666666666667,
                                loading: j(
                                  (c?.y || 0) +
                                    0 +
                                    ((c?.height || 68) - 0 - 133.6504 + 0 + 0) +
                                    17 +
                                    0
                                ),
                                pixelHeight: 73,
                                pixelWidth: 400,
                                sizes: `200.8241px`,
                                ...Ut(g),
                              },
                            },
                          },
                          b,
                          E
                        ),
                      }),
                      u(B, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 66,
                          intrinsicWidth: 400,
                          loading: j((c?.y || 0) + 0 + 0 + 17 + 66.6504),
                          pixelHeight: 66,
                          pixelWidth: 400,
                          sizes: `199.5056px`,
                          ...Ut(_),
                        },
                        className: `framer-1smdyg6`,
                        "data-framer-name": `Logoipsum-426`,
                        fitImageDimension: `height`,
                        layoutDependency: P,
                        layoutId: `yzZPNmUUS`,
                        ...zt(
                          {
                            QW43EMVfQ: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 66,
                                intrinsicWidth: 400,
                                loading: j(
                                  (c?.y || 0) +
                                    0 +
                                    ((c?.height || 68) - 0 - 133.6504 + 0 + 0) +
                                    17 +
                                    66.6504
                                ),
                                pixelHeight: 66,
                                pixelWidth: 400,
                                sizes: `199.5056px`,
                                ...Ut(_),
                              },
                            },
                          },
                          b,
                          E
                        ),
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
          `.framer-mHSZv.framer-10ai1fh, .framer-mHSZv .framer-10ai1fh { display: block; }`,
          `.framer-mHSZv.framer-9fwmvu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 68px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 233px; }`,
          `.framer-mHSZv .framer-877x8v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 17px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-mHSZv .framer-x2sfo { flex: none; height: 37px; overflow: visible; position: relative; width: auto; }`,
          `.framer-mHSZv .framer-1smdyg6 { flex: none; height: auto; overflow: visible; position: relative; width: 200px; }`,
          `.framer-mHSZv.framer-v-2yd46n.framer-9fwmvu { justify-content: flex-end; }`,
          `.framer-mHSZv.framer-v-2yd46n .framer-877x8v { justify-content: center; }`,
        ],
        `framer-mHSZv`
      )),
      ($.displayName = `Company Testimonial`),
      ($.defaultProps = { height: 68, width: 233 }),
      N($, {
        variant: {
          options: [`gQCLk3gFF`, `QW43EMVfQ`],
          optionTitles: [`Top Aligned`, `Bottom Aligned`],
          title: `Variant`,
          type: H.Enum,
        },
        wU8QRB33c: {
          __defaultAssetReference: `data:framer/asset-reference,kXNgUEs5n0eBWK7nSalBFMAfvjQ.png?originalFilename=logoipsum-426.png&width=400&height=73`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,kXNgUEs5n0eBWK7nSalBFMAfvjQ.png?originalFilename=logoipsum-426.png&width=400&height=73`,
          },
          title: `Logo 1`,
          type: H.ResponsiveImage,
        },
        hL0Snwv45: {
          __defaultAssetReference: `data:framer/asset-reference,CWIDTXd51zGUetAwpfPdHmdwCQg.png?originalFilename=logoipsum-364.png&width=400&height=66`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,CWIDTXd51zGUetAwpfPdHmdwCQg.png?originalFilename=logoipsum-364.png&width=400&height=66`,
          },
          title: `Logo 2`,
          type: H.ResponsiveImage,
        },
        oNi8MxjOe: {
          defaultValue: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
          title: `Transition`,
          type: H.Transition,
        },
      }),
      M($, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Xt(e) {
  let {
      color1: t,
      color2: n,
      dashLength: r,
      thickness: i,
      speed: a,
      direction: o,
      isVertical: s,
    } = e,
    c = o === `forward` ? -(r * 2) : r * 2,
    l = 100 / a;
  return u(`div`, {
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      overflow: `hidden`,
      position: `relative`,
    },
    children: f(`svg`, {
      width: `100%`,
      height: `100%`,
      preserveAspectRatio: `none`,
      style: { position: `absolute`, top: 0, left: 0 },
      children: [
        u(`line`, {
          x1: s ? `50%` : `0%`,
          y1: s ? `0%` : `50%`,
          x2: s ? `50%` : `100%`,
          y2: s ? `100%` : `50%`,
          stroke: t,
          strokeWidth: i,
        }),
        u(w.line, {
          x1: s ? `50%` : `0%`,
          y1: s ? `0%` : `50%`,
          x2: s ? `50%` : `100%`,
          y2: s ? `100%` : `50%`,
          stroke: n,
          strokeWidth: i,
          strokeDasharray: `${r} ${r}`,
          initial: { strokeDashoffset: 0 },
          animate: { strokeDashoffset: c },
          transition: { repeat: 1 / 0, ease: `linear`, duration: l },
        }),
      ],
    }),
  });
}
var Zt = e(() => {
  (d(),
    C(),
    T(),
    (Xt.defaultProps = {
      color1: `#E5E5E5`,
      color2: `#1d9c51`,
      dashLength: 20,
      thickness: 4,
      speed: 50,
      direction: `forward`,
      isVertical: !1,
    }),
    N(Xt, {
      color1: { type: H.Color, title: `Color 1` },
      color2: { type: H.Color, title: `Color 2` },
      dashLength: { type: H.Number, title: `Dash Length`, min: 1, max: 200, step: 1 },
      thickness: { type: H.Number, title: `Thickness`, min: 1, max: 50, step: 1 },
      speed: { type: H.Number, title: `Speed`, min: 1, max: 500, step: 1 },
      direction: {
        type: H.Enum,
        title: `Direction`,
        options: [`forward`, `backward`],
        optionTitles: [`Forward`, `Backward`],
      },
      isVertical: { type: H.Boolean, title: `Vertical`, enabledTitle: `Yes`, disabledTitle: `No` },
    }));
});
function Qt(e) {
  let t = R({ state: Object.freeze({ ...e }) }),
    r = (e) => {
      (typeof e == `function` && (e = e(t.state)), (t.state = Object.freeze({ ...t.state, ...e })));
    },
    a = typeof e == `object` ? Object.freeze({ ...e }) : e,
    o = new Set(),
    s = (e) => {
      (typeof e == `function` && (e = e(a)),
        (a = typeof e == `object` ? Object.freeze({ ...a, ...e }) : e),
        o.forEach((e) => e(a)));
    };
  function c() {
    let [e, c] = n(a);
    return (i(() => (o.add(c), () => o.delete(c)), []), L() === !0 ? (L(), [t.state, r]) : [e, s]);
  }
  return c;
}
var $t = e(() => {
    (p(), T());
  }),
  en = e(() => {
    $t();
  }),
  tn,
  nn = e(() => {
    ((tn = { display: `flex`, justifyContent: `center`, alignItems: `center` }), { ...tn });
  }),
  rn = e(() => {
    nn();
  });
function an(e) {
  return (t) =>
    u(e, {
      ...t,
      style: { ...t.style, transformStyle: `preserve-3d`, WebkitTransformStyle: `preserve-3d` },
    });
}
var on = e(() => {
  (r(), d(), p(), en(), rn(), Qt({ background: `#1d9c51` }));
});
function sn(e) {
  let {
      startValue: t,
      endValue: n,
      duration: r,
      easing: o,
      decimals: s,
      prefix: c,
      suffix: l,
      font: d,
      color: f,
      style: p,
    } = e,
    m = a(null),
    h = _(m, { once: !0, margin: `0px` }),
    v = y(t),
    b = g(
      g(v, (e) => e.toFixed(s)),
      (e) => `${c}${e}${l}`
    );
  i(() => {
    if (h) {
      let e = x(v, n, { duration: r, ease: o });
      return () => e.stop();
    }
  }, [t, n, r, o, h, v]);
  let S = cn(d);
  return u(w.span, {
    ref: m,
    style: { ...p, ...S, color: f, display: `inline-block`, whiteSpace: `pre`, margin: 0 },
    children: b,
  });
}
var cn,
  ln = e(() => {
    (d(),
      p(),
      C(),
      T(),
      (cn = (e) =>
        e
          ? {
              ...e,
              fontSize: e.fontSize == null ? e.size : e.fontSize,
              lineHeight: typeof e.lineHeight == `number` ? `${e.lineHeight}px` : e.lineHeight,
              fontVariantNumeric: `tabular-nums`,
            }
          : {}),
      (sn.defaultProps = {
        startValue: 0,
        endValue: 1250.5,
        duration: 2,
        easing: `easeOut`,
        decimals: 2,
        prefix: `$`,
        suffix: ``,
        color: `#000000`,
      }),
      N(sn, {
        startValue: { type: H.Number, title: `Start At`, step: 0.01 },
        endValue: { type: H.Number, title: `End At`, step: 0.01 },
        decimals: {
          type: H.Number,
          title: `Decimals`,
          min: 0,
          max: 5,
          step: 1,
          displayStepper: !0,
        },
        duration: {
          type: H.Number,
          title: `Duration (s)`,
          min: 0.1,
          max: 10,
          step: 0.1,
          displayStepper: !0,
        },
        easing: {
          type: H.Enum,
          title: `Easing`,
          options: [`linear`, `easeIn`, `easeOut`, `easeInOut`],
          optionTitles: [`Linear`, `Ease In`, `Ease Out`, `Ease In Out`],
        },
        prefix: { type: H.String, title: `Prefix` },
        suffix: { type: H.String, title: `Suffix` },
        font: {
          type: H.Font,
          title: `Typography`,
          controls: `extended`,
          displayFontSize: !0,
          defaultValue: { fontFamily: `Inter`, fontSize: 48, fontWeight: 700 },
        },
        color: { type: H.Color, title: `Color` },
      }));
  });
function un(e) {
  let {
      screenImage: t,
      screenVideo: r,
      videoAutoplay: o,
      videoLoop: c,
      videoMuted: l,
      frameColor: d,
      mouseSensitivity: p,
      scrollRotation: m,
      scrollLift: _,
      cornerRadius: b,
      disableMouseOnTouch: x,
      rotateX: S,
      rotateY: C,
      rotateZ: T,
      shadowType: E,
      shadowColor: D,
      shadowX: O,
      shadowY: k,
      shadowBlur: A,
      shadowSpread: j,
      showGlow: M,
      glowColor: N,
      glowBlur: P,
      glowOpacity: F,
      shineIntensity: I,
      dynamicShine: L,
      screenBrightness: R,
      perspectiveDistance: ee,
    } = e,
    z = a(null),
    B = a(null),
    [V, H] = n(!1);
  function te(e) {
    if (!e) return null;
    let t = e.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (t)
      return {
        type: `youtube`,
        embedUrl: `https://www.youtube.com/embed/${t[1]}?autoplay=1&mute=1&loop=1&playlist=${t[1]}&controls=0&playsinline=1&rel=0`,
      };
    let n = e.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (n)
      return {
        type: `vimeo`,
        embedUrl: `https://player.vimeo.com/video/${n[1]}?autoplay=1&muted=1&loop=1&controls=0&playsinline=1`,
      };
    let r = e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    return r
      ? { type: `gdrive`, embedUrl: `https://drive.google.com/file/d/${r[1]}/preview` }
      : (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(e), { type: `direct`, embedUrl: e });
  }
  (i(() => {
    let e = h !== void 0 && (`ontouchstart` in h || s.maxTouchPoints > 0);
    H(e);
  }, []),
    i(() => {
      let e = B.current;
      e && (o ? e.play().catch(() => {}) : e.pause());
    }, [o]));
  let U = y(0),
    ne = y(0);
  i(() => {
    if (x && V) return;
    function e(e) {
      let t = z.current;
      if (!t) return;
      let n = t.getBoundingClientRect(),
        r = n.left + n.width / 2,
        i = n.top + n.height / 2,
        a = (e.clientX - r) / (h.innerWidth / 2),
        o = (e.clientY - i) / (h.innerHeight / 2);
      (U.set(Math.max(-1, Math.min(1, a))), ne.set(Math.max(-1, Math.min(1, o))));
    }
    return (h.addEventListener(`mousemove`, e), () => h.removeEventListener(`mousemove`, e));
  }, [V, x, U, ne]);
  let re = { stiffness: 80, damping: 18, mass: 0.6 },
    ie = v(g(U, [-1, 1], [-p, p]), re),
    ae = v(g(ne, [-1, 1], [p, -p]), re),
    oe = v(g(U, [-1, 1], [-p * 0.6, p * 0.6]), re),
    W = y(0.5);
  i(() => {
    let e;
    function t() {
      let n = z.current;
      if (n) {
        let e = n.getBoundingClientRect(),
          t = h.innerHeight,
          r = 1 - (e.top + e.height / 2) / t;
        W.set(Math.max(0, Math.min(1, r)));
      }
      e = requestAnimationFrame(t);
    }
    return ((e = requestAnimationFrame(t)), () => cancelAnimationFrame(e));
  }, [W]);
  let se = g(W, [0, 0.5, 1], [m, 0, -m]),
    ce = g(W, [0, 0.5, 1], [_, 0, -_]),
    le = g([ae, se], ([e, t]) => e + t + S),
    ue = g(ie, (e) => e + C),
    de = g(g(ue, [-25, 0, 25], [0.82, 1, 1.28]), (e) => (L ? `brightness(${e})` : `brightness(1)`)),
    fe = g(U, [-1, 1], [20, 80]),
    G = {
      "Space Black": {
        body: `#1c1c1e`,
        edge: `#2c2c2e`,
        button: `#0c0c0d`,
        back: `#151516`,
        highlight: `#f4f4f7`,
      },
      Silver: {
        body: `#e3e3e6`,
        edge: `#d1d1d6`,
        button: `#c7c7cc`,
        back: `#f5f5f7`,
        highlight: `#ffffff`,
      },
      Gold: {
        body: `#f0e2cf`,
        edge: `#e0cda5`,
        button: `#d8c4a2`,
        back: `#fbf3e7`,
        highlight: `#fffaf0`,
      },
      "Deep Blue": {
        body: `#1d2b3a`,
        edge: `#243647`,
        button: `#0f1924`,
        back: `#172330`,
        highlight: `#e2edf8`,
      },
    },
    K = G[d] || G[`Space Black`];
  function pe(e) {
    let t = e.replace(`#`, ``),
      n = parseInt(t, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function me(e, t, n) {
    let r = pe(e),
      i = pe(t);
    return `rgb(${Math.round(r[0] + (i[0] - r[0]) * n)}, ${Math.round(r[1] + (i[1] - r[1]) * n)}, ${Math.round(r[2] + (i[2] - r[2]) * n)})`;
  }
  let q = `none`;
  if (E !== `None`) {
    let e = `${O}px ${k}px ${A}px ${j}px ${D}`;
    E === `Drop Shadow`
      ? (q = e)
      : E === `Inner Shadow`
        ? (q = `inset ${e}`)
        : E === `Realistic Multi` &&
          (q = `${`${O * 0.3}px ${k * 0.3}px ${A * 0.3}px ${j * 0.5}px rgba(0,0,0,0.3)`}, ${e}`);
  }
  let J = b + 18,
    he = (e) => {
      let t = e / 32;
      return Math.sin(t * Math.PI) ** 2;
    },
    ge = t ? (typeof t == `string` ? t : t.src) : null,
    _e = !!r,
    ve = !!ge;
  return u(`div`, {
    ref: z,
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    },
    children: f(w.div, {
      style: {
        width: 280,
        height: 580,
        position: `relative`,
        transformPerspective: ee,
        rotateX: le,
        rotateY: ue,
        rotateZ: T,
        x: oe,
        y: ce,
        transformStyle: `preserve-3d`,
      },
      children: [
        u(w.div, {
          style: { position: `absolute`, inset: 0, transformStyle: `preserve-3d`, filter: de },
          children: Array.from({ length: 33 }).map((e, t) => {
            let n = t - 16.5,
              r = he(t) * (I / 100),
              i = me(K.edge, K.highlight, r);
            return u(
              `div`,
              {
                style: {
                  position: `absolute`,
                  inset: 0,
                  borderRadius: J,
                  background: i,
                  transform: `translateZ(${n}px)`,
                  boxShadow: t === 0 ? q : void 0,
                },
              },
              t
            );
          }),
        }),
        f(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            transform: `translateZ(0px)`,
            transformStyle: `preserve-3d`,
            pointerEvents: `none`,
          },
          children: [
            u(`div`, {
              style: {
                position: `absolute`,
                left: -4,
                top: 110,
                width: 4,
                height: 28,
                borderRadius: 2,
                background: K.button,
              },
            }),
            u(`div`, {
              style: {
                position: `absolute`,
                left: -4,
                top: 150,
                width: 4,
                height: 50,
                borderRadius: 2,
                background: K.button,
              },
            }),
            u(`div`, {
              style: {
                position: `absolute`,
                left: -4,
                top: 210,
                width: 4,
                height: 50,
                borderRadius: 2,
                background: K.button,
              },
            }),
            u(`div`, {
              style: {
                position: `absolute`,
                right: -4,
                top: 160,
                width: 4,
                height: 70,
                borderRadius: 2,
                background: K.button,
              },
            }),
          ],
        }),
        f(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            borderRadius: J,
            transform: `translateZ(17px)`,
            background: K.body,
            boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.15), inset 0 1px 1px rgba(255,255,255,0.25)`,
            transformStyle: `preserve-3d`,
            backfaceVisibility: `hidden`,
          },
          children: [
            M &&
              u(`div`, {
                style: {
                  position: `absolute`,
                  inset: -10,
                  background: N,
                  filter: `blur(${P}px)`,
                  opacity: F / 100,
                  borderRadius: J,
                  transform: `translateZ(-1px)`,
                  pointerEvents: `none`,
                },
              }),
            f(`div`, {
              style: {
                position: `absolute`,
                inset: 10,
                borderRadius: b + 8,
                overflow: `hidden`,
                background: _e || ve ? void 0 : `linear-gradient(160deg, #2a2a2e, #141416)`,
                transform: `translateZ(0.01px)`,
                backfaceVisibility: `hidden`,
                WebkitFontSmoothing: `antialiased`,
                isolation: `isolate`,
              },
              children: [
                (() => {
                  let e = { filter: `brightness(${R}%)` };
                  if (_e) {
                    let t = te(r);
                    return t && (t.type === `youtube` || t.type === `vimeo` || t.type === `gdrive`)
                      ? u(`div`, {
                          style: {
                            width: `100%`,
                            height: `100%`,
                            position: `relative`,
                            ...e,
                            transform: `translateZ(0)`,
                            WebkitTransform: `translateZ(0)`,
                          },
                          children: u(`iframe`, {
                            src: t.embedUrl,
                            allow: `autoplay; fullscreen; picture-in-picture`,
                            allowFullScreen: !0,
                            style: {
                              position: `absolute`,
                              top: `-5%`,
                              left: `-5%`,
                              width: `110%`,
                              height: `110%`,
                              border: `none`,
                              pointerEvents: `none`,
                            },
                          }),
                        })
                      : u(`video`, {
                          ref: B,
                          src: t?.embedUrl || r,
                          autoPlay: o,
                          loop: c,
                          muted: l,
                          playsInline: !0,
                          style: {
                            width: `100%`,
                            height: `100%`,
                            objectFit: `cover`,
                            objectPosition: `top center`,
                            display: `block`,
                            ...e,
                          },
                        });
                  }
                  return ve
                    ? u(`img`, {
                        src: ge,
                        alt: `Screen content`,
                        style: {
                          width: `100%`,
                          height: `100%`,
                          objectFit: `cover`,
                          objectPosition: `top center`,
                          display: `block`,
                          ...e,
                        },
                      })
                    : u(`div`, {
                        style: {
                          position: `absolute`,
                          inset: 0,
                          display: `flex`,
                          alignItems: `center`,
                          justifyContent: `center`,
                          color: `rgba(255,255,255,0.35)`,
                          fontSize: 13,
                          fontFamily: `-apple-system, BlinkMacSystemFont, sans-serif`,
                          textAlign: `center`,
                          padding: 24,
                          ...e,
                        },
                        children: `Upload a screen image or add a video URL in properties`,
                      });
                })(),
                u(`div`, {
                  style: {
                    position: `absolute`,
                    top: 0,
                    left: `50%`,
                    transform: `translateX(-50%)`,
                    width: 100,
                    height: 26,
                    background: `#000`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    zIndex: 2,
                  },
                }),
                u(w.div, {
                  style: {
                    position: `absolute`,
                    inset: 0,
                    background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%)`,
                    backgroundPosition: g(fe, (e) => `${e}% 0%`),
                    pointerEvents: `none`,
                    zIndex: 3,
                  },
                }),
              ],
            }),
          ],
        }),
        u(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            borderRadius: J,
            transform: `translateZ(-17px) rotateY(180deg)`,
            background: K.back,
            boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.08)`,
            transformStyle: `preserve-3d`,
            backfaceVisibility: `hidden`,
          },
          children: u(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              borderRadius: J,
              background: `linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent 50%)`,
              pointerEvents: `none`,
            },
          }),
        }),
      ],
    }),
  });
}
var dn = e(() => {
  (r(),
    d(),
    p(),
    C(),
    T(),
    (un.displayName = `Phone3D`),
    N(un, {
      screenImage: { type: H.Image, title: `Screen Image` },
      screenVideo: {
        type: H.String,
        title: `Video URL`,
        placeholder: `YouTube, Vimeo, or direct .mp4 URL`,
        description: `Supports YouTube, Vimeo, Google Drive, or direct .mp4/.webm links. Video takes priority over image.`,
      },
      videoAutoplay: {
        type: H.Boolean,
        title: `Autoplay`,
        defaultValue: !0,
        hidden: (e) =>
          !e.screenVideo || /youtube\.|youtu\.be|vimeo\.com|drive\.google\.com/.test(e.screenVideo),
      },
      videoLoop: {
        type: H.Boolean,
        title: `Loop`,
        defaultValue: !0,
        hidden: (e) =>
          !e.screenVideo || /youtube\.|youtu\.be|vimeo\.com|drive\.google\.com/.test(e.screenVideo),
      },
      videoMuted: {
        type: H.Boolean,
        title: `Muted`,
        defaultValue: !0,
        description: `Must be muted for autoplay to work in most browsers.`,
        hidden: (e) =>
          !e.screenVideo || /youtube\.|youtu\.be|vimeo\.com|drive\.google\.com/.test(e.screenVideo),
      },
      screenBrightness: {
        type: H.Number,
        title: `Brightness`,
        min: 0,
        max: 200,
        step: 1,
        defaultValue: 100,
        displayStepper: !0,
      },
      frameColor: {
        type: H.Enum,
        title: `Frame Color`,
        options: [`Space Black`, `Silver`, `Gold`, `Deep Blue`],
        defaultValue: `Space Black`,
      },
      shineIntensity: {
        type: H.Number,
        title: `Shine Intensity`,
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 65,
        description: `How bright the polished highlight running down the middle of the frame's edge is.`,
      },
      dynamicShine: {
        type: H.Boolean,
        title: `Dynamic Shine`,
        defaultValue: !0,
        description: `Lets the edge brighten and dim slightly as the phone tilts, like light sweeping across metal.`,
      },
      showGlow: { type: H.Boolean, title: `Screen Glow`, defaultValue: !1 },
      glowColor: {
        type: H.Color,
        title: `Glow Color`,
        defaultValue: `rgba(0, 160, 255, 1)`,
        hidden: (e) => !e.showGlow,
      },
      glowBlur: {
        type: H.Number,
        title: `Glow Blur`,
        min: 10,
        max: 200,
        defaultValue: 60,
        hidden: (e) => !e.showGlow,
      },
      glowOpacity: {
        type: H.Number,
        title: `Glow Opacity`,
        min: 0,
        max: 100,
        defaultValue: 60,
        hidden: (e) => !e.showGlow,
      },
      rotateX: { type: H.Number, title: `Rotate X`, min: -360, max: 360, step: 1, defaultValue: 0 },
      rotateY: { type: H.Number, title: `Rotate Y`, min: -360, max: 360, step: 1, defaultValue: 0 },
      rotateZ: { type: H.Number, title: `Rotate Z`, min: -360, max: 360, step: 1, defaultValue: 0 },
      shadowType: {
        type: H.Enum,
        title: `Shadow Type`,
        options: [`Realistic Multi`, `Drop Shadow`, `Inner Shadow`, `None`],
        defaultValue: `Realistic Multi`,
      },
      shadowColor: {
        type: H.Color,
        title: `Color`,
        defaultValue: `rgba(0,0,0,0.45)`,
        hidden: (e) => e.shadowType === `None`,
      },
      shadowX: {
        type: H.Number,
        title: `Offset X`,
        min: -100,
        max: 100,
        defaultValue: 0,
        hidden: (e) => e.shadowType === `None`,
      },
      shadowY: {
        type: H.Number,
        title: `Offset Y`,
        min: -100,
        max: 100,
        defaultValue: 30,
        hidden: (e) => e.shadowType === `None`,
      },
      shadowBlur: {
        type: H.Number,
        title: `Blur`,
        min: 0,
        max: 200,
        defaultValue: 60,
        hidden: (e) => e.shadowType === `None`,
      },
      shadowSpread: {
        type: H.Number,
        title: `Spread`,
        min: -100,
        max: 100,
        defaultValue: -15,
        hidden: (e) => e.shadowType === `None`,
      },
      perspectiveDistance: {
        type: H.Number,
        title: `Perspective`,
        min: 200,
        max: 2e3,
        step: 50,
        defaultValue: 800,
        displayStepper: !0,
        description: `Camera distance in px. Lower = more dramatic 3D. Higher = flatter/orthographic look.`,
      },
      mouseSensitivity: {
        type: H.Number,
        title: `Mouse Tilt`,
        min: 0,
        max: 25,
        step: 1,
        defaultValue: 10,
      },
      scrollRotation: {
        type: H.Number,
        title: `Scroll Tilt`,
        min: 0,
        max: 40,
        step: 1,
        defaultValue: 15,
      },
      scrollLift: {
        type: H.Number,
        title: `Scroll Lift`,
        min: 0,
        max: 200,
        step: 5,
        defaultValue: 60,
      },
      cornerRadius: {
        type: H.Number,
        title: `Screen Radius`,
        min: 0,
        max: 40,
        step: 1,
        defaultValue: 24,
      },
      disableMouseOnTouch: { type: H.Boolean, title: `No Mouse on Touch`, defaultValue: !0 },
    }));
});
export {
  we as A,
  qe as C,
  je as D,
  Be as E,
  ge as M,
  Me as O,
  Qe as S,
  ze as T,
  pt as _,
  an as a,
  ot as b,
  Zt as c,
  Q as d,
  Rt as f,
  yt as g,
  vt as h,
  ln as i,
  he as j,
  Ce as k,
  $ as l,
  Et as m,
  dn as n,
  on as o,
  X as p,
  sn as r,
  Xt as s,
  un as t,
  Yt as u,
  mt as v,
  Je as w,
  Ye as x,
  at as y,
};
//# sourceMappingURL=Phone.CXj6a0Hm.mjs.map
