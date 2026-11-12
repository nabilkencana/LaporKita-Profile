import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as ee,
  j as te,
  l as i,
  s as a,
  u as o,
  w as ne,
  y as re,
} from "./react.Dfbt0i5D.mjs";
import { a as ie, r as ae, t as s, w as c } from "./motion.DA7Wf6OE.mjs";
import {
  $ as l,
  At as u,
  C as d,
  D as f,
  E as oe,
  G as p,
  I as m,
  J as h,
  L as g,
  M as _,
  O as v,
  Ot as y,
  Pt as b,
  Tt as se,
  a as x,
  ft as ce,
  g as S,
  gt as le,
  ht as ue,
  k as C,
  m as de,
  mt as fe,
  o as w,
  q as T,
  s as E,
  vt as pe,
  yt as me,
  z as D,
} from "./framer.DwK__Hy9.mjs";
import {
  C as he,
  D as O,
  E as k,
  O as A,
  S as j,
  T as M,
  _ as ge,
  a as _e,
  b as N,
  c as P,
  g as ve,
  h as ye,
  i as be,
  m as xe,
  n as Se,
  o as Ce,
  p as we,
  r as F,
  s as Te,
  t as I,
  v as Ee,
  w as De,
  x as L,
  y as Oe,
} from "./shared-lib.BFsVOxQ4.mjs";
import {
  a as ke,
  c as Ae,
  d as R,
  f as je,
  i as Me,
  l as z,
  n as Ne,
  o as Pe,
  r as Fe,
  s as Ie,
  t as Le,
  u as Re,
} from "./Z7CzuxNJN.tjaA4hZo.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./xMscHFbGZ.CRJhyUtz.mjs";
import Ue, { t as We } from "./39Lumn6OkFJs5jsFbaWqb9z38A9XoL45IuZScBSCb78.Ca74budt.mjs";
var B,
  Ge = e(() => {
    (l(),
      (B = g({
        title: `Rings`,
        fragment: `
const int SAMPLES = 8;
const float EPHEMERAL_DRIP = 1.0;

// === PCG hash - https://www.jcgt.org/published/0009/03/02/
uvec3 hash3(uvec3 v) {
    v = v * 1664525u + 1013904223u;
    v.x += v.y * v.z;
    v.y += v.z * v.x;
    v.z += v.x * v.y;
    v ^= v >> 16u;
    v.x += v.y * v.z;
    v.y += v.z * v.x;
    v.z += v.x * v.y;
    return v;
}

uvec3 seed;
vec3 random3f() {
    seed = hash3(seed);
    return vec3(seed) / float(-1u);
}

vec3 seedRandom(float seedVal) {
    uvec3 s = uvec3(
        floatBitsToUint(seedVal),
        floatBitsToUint(seedVal * 1.5 + 7.31),
        floatBitsToUint(seedVal * 2.7 + 13.37)
    );
    s = hash3(s);
    return vec3(s) / float(0xFFFFFFFFu);
}

// === PALETTE SAMPLING ===
vec3 getColor(int idx) {
    if (u_colors_length < 1) return vec3(0.0);
    int safeIdx = clamp(idx, 0, u_colors_length - 1);
    return u_colors[safeIdx].rgb;
}

vec3 paletteN(float t, int count) {
    if (count < 1) return vec3(0.0);
    if (count < 2) return getColor(0);
    t = clamp(t, 0.0, 1.0) * float(count - 1);
    int idx = min(int(floor(t)), count - 2);
    float localT = fract(t);
    localT = localT * localT * (3.0 - 2.0 * localT);
    return mix(getColor(idx), getColor(idx + 1), localT);
}

// === Gradient Flow ===
float getGradientT(vec2 uv, float t, vec2 dir1, vec2 dir2, vec3 freqs, vec2 dir3) {
    vec2 suv = uv * 1.;
    
    float flow = dot(suv, dir1) + sin(dot(suv, dir2) * freqs.x + t) * 0.3 + t * 0.2;
    float flow2 = dot(suv, dir2.yx) + cos(dot(suv, dir1.yx) * freqs.y - t * 0.8) * 0.25;
    
    float gradT = sin(flow * 1.5) * 0.5 + 0.5;
    gradT += cos(flow2 * 1.2) * 1.3;
    gradT += sin(dot(suv, dir3) * freqs.z + t * 3.5) * 1.2;
    
    return smoothstep(0.0, 4.12, gradT);
}

// === RING LENS ===
void applyRingLens(vec2 pp, vec2 fragCoord, vec2 r, float iorOffset, out vec2 warpedUV, out float edgeFactor) {
    float radiusSq = u_ringRadius * u_ringRadius;
    
    vec2 lensUV = (fragCoord - vec2(r.x * 0.5, 0.0)) / r.y * u_lensScale;
    float dist = length(lensUV);
    
    float fw = fwidth(dist / u_ringSpacing) * u_ringSpacing;
    
    float ringDist = mod(dist, u_ringSpacing) / u_ringSpacing;
    float ringShifted = ringDist - 0.5;
    float localR = ringShifted * 2.0;
    
    float sp = radiusSq - localR * localR;
    
    float edgeSdf = abs(localR) - u_ringRadius;
    float edgeAA = smoothstep(fw, -fw, edgeSdf);
    
    float lensAmount = smoothstep(0., 0.3, sp);
    edgeFactor = (1.0 - smoothstep(0.0, radiusSq, sp)) * lensAmount * edgeAA;
    
    vec2 dir = lensUV / max(dist, 0.001);
    
    warpedUV = pp;
    if (sp > 0.0) {
        float lens = sqrt(sp) / max(u_ringRadius, 0.001);
        float baseWarp = mix(1.0, u_ringWarpStrength, lens);
        float warpAmount = baseWarp * (1.0 + iorOffset);
        float ringCenter = (floor(dist / u_ringSpacing) + 0.5) * u_ringSpacing;
        vec2 offset = pp - dir * ringCenter;
        warpedUV = dir * ringCenter + offset * warpAmount;
    }
}

void main() {
    vec2 fragCoord = v_uv * u_resolution;
    seed = uvec3(uvec2(fragCoord), uint(fract(u_time) * 1000.0));
    
    vec2 r = u_resolution;
    vec2 p = (fragCoord * 2.0 - r) / r.y;
    float t = u_time * u_speed;
    
    int colorCount = u_colors_length;
    
    // Early out: no colors -> black
    if (colorCount < 1) {
        fragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }
    
    // Seed-based flow directions (precomputed once)
    vec3 seedOff1 = seedRandom(u_seed);
    vec3 seedOff2 = seedRandom(u_seed + 100.0);
    
    float angle1 = seedOff1.x * 6.28;
    float angle2 = seedOff1.y * 6.28;
    vec2 dir1 = vec2(cos(angle1), sin(angle1));
    vec2 dir2 = vec2(cos(angle2), sin(angle2));
    vec2 dir3 = dir1 + dir2;
    vec3 freqs = vec3(
        1.0 + seedOff1.z * 2.0,
        1.0 + seedOff2.x * 1.5,
        1.5 + seedOff2.y * 2.0
    );
    
    float dice = random3f().x;
    
    vec3 ringIorOffsets = vec3(-1.0, 0.0, 1.0) * u_ringDispersion;
    
    vec3 col = vec3(0.0);
    
    for (int i = 0; i < SAMPLES; i++) {
        float ephemeral = (float(i) + dice) / float(SAMPLES);
        float sqEph = ephemeral * ephemeral;
        
        vec2 pt = p;
        pt.x += u_ephemeralAmp * sqEph * sin(p.y * 2.0 + t);
        pt.y += u_ephemeralAmp * sqEph * cos(p.x * 1.5 - t) * 0.5;
        pt.y -= (1.0 - exp(-EPHEMERAL_DRIP * sqEph)) * abs(pt.y) * sign(pt.y) * 0.3;
        
        vec3 tint = smoothstep(1.0, 0.0, abs(3.0 * ephemeral - vec3(1.0, 1.5, 2.0)));
        
        vec3 gradTs = vec3(0.0);
        vec3 edgeFactors = vec3(0.0);
        
        for (int c = 0; c < 3; c++) {
            vec2 pp = pt * u_lensScale;
            vec2 warpedUV;
            float edgeFactor;
            applyRingLens(pp, fragCoord, r, ringIorOffsets[c], warpedUV, edgeFactor);
            
            vec2 gradUV = warpedUV / u_lensScale;
            gradTs[c] = getGradientT(gradUV, t * 0.8, dir1, dir2, freqs, dir3);
            edgeFactors[c] = edgeFactor;
        }
        
        vec3 convergentColor = paletteN(gradTs.g, colorCount);
        float edgeMix = max(max(edgeFactors.r, edgeFactors.g), edgeFactors.b);
        
        vec3 dispersedColor = vec3(
            paletteN(gradTs.r, colorCount).r,
            convergentColor.g,
            paletteN(gradTs.b, colorCount).b
        );
        
        vec3 finalColor = mix(convergentColor, dispersedColor, edgeMix * 2.0);
        
        vec3 rainbow = (gradTs - gradTs.g) * 3.0;
        finalColor += rainbow * edgeMix * u_edgeDisp;
        
        col += tint * finalColor * (3.0 / float(SAMPLES));
    }
    
    fragColor = vec4(col, 1.0);
}
`,
        propertyControls: {
          colors: {
            type: E.Array,
            title: `Colors`,
            control: { type: E.Color },
            maxCount: 8,
            defaultValue: [`#1D9C51`, `#24B45E`, `#3EB36D`],
          },
          seed: { type: E.Number, title: `Seed`, defaultValue: 47, min: 0, max: 1e3, step: 1 },
          speed: { type: E.Number, title: `Speed`, defaultValue: 0.5, min: 0, max: 2, step: 0.01 },
          ephemeralAmp: {
            type: E.Number,
            title: `Ephemeral`,
            defaultValue: 0.12,
            min: 0,
            max: 0.5,
            step: 0.01,
          },
          lensScale: {
            type: E.Number,
            title: `Scale`,
            defaultValue: 10,
            min: 0.1,
            max: 10,
            step: 0.1,
          },
          ringSpacing: {
            type: E.Number,
            title: `Spacing`,
            defaultValue: 1.5,
            min: 0.1,
            max: 5,
            step: 0.1,
          },
          ringRadius: {
            type: E.Number,
            title: `Radius`,
            defaultValue: 1,
            min: 0.1,
            max: 2,
            step: 0.01,
          },
          ringWarpStrength: {
            type: E.Number,
            title: `Warp`,
            defaultValue: 4,
            min: 0,
            max: 5,
            step: 0.1,
          },
          ringDispersion: {
            type: E.Number,
            title: `Dispersion`,
            defaultValue: 0.4,
            min: 0,
            max: 1,
            step: 0.01,
          },
          edgeDisp: {
            type: E.Number,
            title: `Edges`,
            defaultValue: 1.3,
            min: 0,
            max: 5,
            step: 0.1,
          },
        },
      })));
  }),
  V,
  H,
  U,
  Ke,
  qe,
  Je,
  W,
  G,
  Ye,
  Xe,
  K,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  q,
  J,
  Y,
  X,
  Z,
  rt,
  Q,
  it,
  at,
  $,
  ot;
e(() => {
  (a(),
    l(),
    s(),
    ne(),
    A(),
    k(),
    De(),
    Ge(),
    be(),
    je(),
    j(),
    Re(),
    Se(),
    ve(),
    P(),
    Ae(),
    N(),
    ze(),
    Me(),
    We(),
    (V = p(F)),
    (H = u(w)),
    (U = p(I)),
    (Ke = b(I)),
    (qe = p(z)),
    (Je = p(L)),
    (W = u(S)),
    (G = u(c.div)),
    (Ye = p(R)),
    (Xe = {
      FNPzO60Va: `(max-width: 809.98px)`,
      iNJDNLCJg: `(min-width: 810px) and (max-width: 1199.98px)`,
      RG7oK56KT: `(min-width: 1200px)`,
    }),
    (K = () => typeof document < `u`),
    (Ze = []),
    (Qe = `framer-jZ4I2`),
    ($e = {
      FNPzO60Va: `framer-v-xugqfy`,
      iNJDNLCJg: `framer-v-14ycr47`,
      RG7oK56KT: `framer-v-xepiyd`,
    }),
    (et = (e, t, n) => (e && t ? `position` : n)),
    (tt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (nt = {
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
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (J = {
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
    (Y = { delay: 0.1, duration: 0.4, ease: [0.62, 0, 0.36, 1], type: `tween` }),
    (X = (e, t) => `translateX(-50%) ${t}`),
    (Z = (e, t) => `translateY(-50%) ${t}`),
    (rt = (e, t) => `translate(-50%, -50%) ${t}`),
    (Q = { Desktop: `RG7oK56KT`, Phone: `FNPzO60Va`, Tablet: `iNJDNLCJg` }),
    (it = ({ value: e }) =>
      le()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (at = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `RG7oK56KT`,
    })),
    ($ = y(
      ee(function (e, ee) {
        let a = n(null),
          ne = ee ?? a,
          s = re(),
          { activeLocale: l, setLocale: u } = pe(),
          p = ce(),
          { style: g, className: _, layoutId: y, variant: b, ...le } = at(e);
        me(te(() => Ue({}, l), [l]));
        let [T, E] = ue(b, Xe, !1),
          D = m(Qe, ke, He, ge, _e, we, Le),
          k = t(de)?.isLayoutTemplate,
          A = !!t(ie)?.transition?.layout,
          j = et(k, A),
          N = () => !K() || T !== `FNPzO60Va`,
          P = () => !K() || T === `FNPzO60Va`;
        return (
          se(),
          fe({}),
          i(de.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Q,
              primaryVariantId: `RG7oK56KT`,
              variantClassNames: $e,
            },
            children: o(ae, {
              id: y ?? s,
              children: [
                i(it, {
                  value: `html body { background: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244)); }`,
                }),
                o(c.div, {
                  ...le,
                  className: m(D, `framer-xepiyd`, _),
                  ref: ne,
                  style: { ...g },
                  children: [
                    o(c.div, {
                      className: `framer-itkyqd`,
                      "data-framer-name": `Sticky Navbar`,
                      layout: j,
                      children: [
                        N() &&
                          i(x, {
                            height: 54,
                            y: 10,
                            children: i(H, {
                              __framer__animate: { transition: tt },
                              __framer__animateOnce: !1,
                              __framer__scrollDirection: { direction: `down`, target: nt },
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-fmnwrt-container hidden-xugqfy`,
                              "data-framer-name": `Sticky Navbar`,
                              name: `Sticky Navbar`,
                              nodeId: `lH_wDtHcA`,
                              rendersWithMotion: !0,
                              scopeId: `OqsiEhdfU`,
                              children: i(d, {
                                breakpoint: T,
                                overrides: { iNJDNLCJg: { variant: q(`Me_b_qMaM`) } },
                                children: i(F, {
                                  height: `100%`,
                                  id: `lH_wDtHcA`,
                                  layoutId: `lH_wDtHcA`,
                                  name: `Sticky Navbar`,
                                  variant: q(`raqMsV85o`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        P() &&
                          i(d, {
                            breakpoint: T,
                            overrides: {
                              FNPzO60Va: {
                                height: 60,
                                width: `max(${p?.width || `100vw`}, 1px)`,
                                y: 0,
                              },
                            },
                            children: i(x, {
                              children: i(w, {
                                className: `framer-ruf6kx-container hidden-xepiyd hidden-14ycr47`,
                                nodeId: `jGI6Uy5Mm`,
                                rendersWithMotion: !0,
                                scopeId: `OqsiEhdfU`,
                                children: i(Ke, {
                                  __framer__animateOnce: !1,
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `jGI6Uy5Mm`,
                                  layoutId: `jGI6Uy5Mm`,
                                  style: { width: `100%` },
                                  variant: q(`oqXNvb_1y`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    o(c.div, {
                      className: `framer-97m2qc`,
                      "data-framer-name": `Main`,
                      layout: j,
                      children: [
                        o(`div`, {
                          className: `framer-1xir254`,
                          "data-framer-name": `Header Section`,
                          children: [
                            o(`div`, {
                              className: `framer-rhfln5`,
                              "data-border": !0,
                              "data-framer-name": `Shell`,
                              children: [
                                i(d, {
                                  breakpoint: T,
                                  overrides: {
                                    FNPzO60Va: { y: (p?.y || 0) + 150 + 0 + 20 + 0 + 0 + 0 + 9.1 },
                                  },
                                  children: i(x, {
                                    height: 15,
                                    y: (p?.y || 0) + 150 + 0 + 0 + 0 + 0 + 0 + 9.1,
                                    children: i(w, {
                                      className: `framer-1tvjju9-container`,
                                      nodeId: `bXORFiemd`,
                                      scopeId: `OqsiEhdfU`,
                                      children: i(z, {
                                        height: `100%`,
                                        id: `bXORFiemd`,
                                        layoutId: `bXORFiemd`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                i(f, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: i(`p`, {
                                      className: `framer-styles-preset-1kyvdj7`,
                                      "data-styles-preset": `s3xaUzb1J`,
                                      dir: `auto`,
                                      children: `Fitur Platform`,
                                    }),
                                  }),
                                  className: `framer-18oglyo`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            i(`div`, {
                              className: `framer-1ywugk2`,
                              "data-framer-name": `Header Content`,
                              children: o(`div`, {
                                className: `framer-10axkxl`,
                                "data-framer-name": `Header Copy`,
                                children: [
                                  i(f, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
                                      children: i(`h1`, {
                                        className: `framer-styles-preset-11zleb5`,
                                        "data-styles-preset": `xMscHFbGZ`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                        },
                                        children: `Fitur Cerdas. Tanpa Hambatan.`,
                                      }),
                                    }),
                                    className: `framer-1a1muw2`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  i(f, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
                                      children: i(`p`, {
                                        className: `framer-styles-preset-sak9x6`,
                                        "data-styles-preset": `vVaZ0SXla`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-f48255c3-d64d-4ef7-be0f-da382213e15e, rgb(43, 53, 48))`,
                                        },
                                        children: `Kombinasi Citizen Vision Mobile App, AI Microservice (YOLOv11, XGBoost, Gemini 2.5 Flash), dan Command Center Pemerintah Kota Malang.`,
                                      }),
                                    }),
                                    className: `framer-9o12gx`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        i(`div`, {
                          className: `framer-12we0dq`,
                          "data-framer-name": `Page Section`,
                          children: o(`div`, {
                            className: `framer-8s769w`,
                            "data-framer-name": `Content Grid`,
                            children: [
                              o(G, {
                                __framer__animate: { transition: Y },
                                __framer__animateOnce: !0,
                                __framer__enter: J,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-kpo33k`,
                                "data-framer-name": `Content`,
                                children: [
                                  i(`div`, {
                                    className: `framer-1c4si0r`,
                                    "data-framer-name": `Content`,
                                    children: o(`div`, {
                                      className: `framer-1eeym47`,
                                      "data-framer-name": `Text Block`,
                                      children: [
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                              },
                                              children: `01`,
                                            }),
                                          }),
                                          className: `framer-1nqyn2a`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                              },
                                              children: `Klasifikasi kerusakan jalan otomatis dalam 2.1 ms.`,
                                            }),
                                          }),
                                          className: `framer-ykg33d`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                              },
                                              children: `Warga memotret kerusakan dalam 3 sentuhan; YOLOv11-cls mengidentifikasi 5 kategori infrastruktur dengan akurasi 99.49% dan mengunci koordinat GPS PostGIS Kota Malang.`,
                                            }),
                                          }),
                                          className: `framer-q6gs5l`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                15 +
                                                0 +
                                                0 +
                                                246,
                                            },
                                            iNJDNLCJg: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                15 +
                                                0 +
                                                0 +
                                                246,
                                            },
                                          },
                                          children: i(x, {
                                            height: 44,
                                            width: `188px`,
                                            y:
                                              (p?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              304 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              15 +
                                              0 +
                                              0 +
                                              287,
                                            children: i(w, {
                                              className: `framer-1rw1foq-container`,
                                              nodeId: `vGNH7nw4O`,
                                              scopeId: `OqsiEhdfU`,
                                              children: i(L, {
                                                bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                dMzFGkb3u: !0,
                                                dP0U8qPjN: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                                F9tZ22mws: {
                                                  borderColor: `rgba(26, 26, 26, 0)`,
                                                  borderStyle: `solid`,
                                                  borderWidth: 2,
                                                },
                                                height: `100%`,
                                                id: `vGNH7nw4O`,
                                                jfeAUucDj: O,
                                                layoutId: `vGNH7nw4O`,
                                                lnJBzRgIM: `Unduh APK`,
                                                MK840EHqT: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                SLp3DWZqR: !0,
                                                style: { height: `100%`, width: `100%` },
                                                TWaZPhsrs: `https://drive.google.com/file/d/18-EopaSbXF9kvxjN0Yzfv0k1HGmBTbhp/view?usp=drive_link`,
                                                variant: q(`nhzWZDlVc`),
                                                vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                wDmZ1dhUo: M,
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
                                  }),
                                  o(`div`, {
                                    className: `framer-9j2reg`,
                                    "data-framer-name": `Content Grid`,
                                    children: [
                                      i(d, {
                                        breakpoint: T,
                                        overrides: {
                                          FNPzO60Va: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 526,
                                              intrinsicWidth: 1051,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  20 +
                                                  304 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  380 +
                                                  39
                                              ),
                                              pixelHeight: 526,
                                              pixelWidth: 1051,
                                              sizes: `291px`,
                                              src: `../../assets/images/2hKJu4iKTArdZ5YSaQmnoGE7SU.png`,
                                            },
                                          },
                                          iNJDNLCJg: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 526,
                                              intrinsicWidth: 1051,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  304 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  380 +
                                                  72
                                              ),
                                              pixelHeight: 526,
                                              pixelWidth: 1051,
                                              sizes: `328px`,
                                              src: `../../assets/images/2hKJu4iKTArdZ5YSaQmnoGE7SU.png`,
                                            },
                                          },
                                        },
                                        children: i(W, {
                                          __framer__adjustPosition: !1,
                                          __framer__offset: 0,
                                          __framer__parallaxTransformEnabled: !0,
                                          __framer__speed: 105,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 526,
                                            intrinsicWidth: 1051,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                72
                                            ),
                                            pixelHeight: 526,
                                            pixelWidth: 1051,
                                            sizes: `328px`,
                                            src: `../../assets/images/2hKJu4iKTArdZ5YSaQmnoGE7SU.png`,
                                          },
                                          className: `framer-1e1n9zk`,
                                          "data-framer-name": `Content`,
                                          transformTemplate: X,
                                        }),
                                      }),
                                      o(c.div, {
                                        className: `framer-1fhxthl`,
                                        "data-framer-name": `Content`,
                                        style: { scale: 1.1 },
                                        transformTemplate: X,
                                        children: [
                                          i(d, {
                                            breakpoint: T,
                                            overrides: {
                                              FNPzO60Va: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      20 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      380 +
                                                      445 -
                                                      108 +
                                                      -261
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                              },
                                              iNJDNLCJg: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      0 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      380 +
                                                      380 -
                                                      108 +
                                                      -261
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                              },
                                            },
                                            children: i(S, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1165.3333333333333,
                                                intrinsicWidth: 576,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    304 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    402 -
                                                    108 +
                                                    -261
                                                ),
                                                pixelHeight: 1748,
                                                pixelWidth: 864,
                                                sizes: `258px`,
                                                src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                              },
                                              className: `framer-122y0gy`,
                                              "data-framer-name": `Midnight`,
                                              transformTemplate: Z,
                                            }),
                                          }),
                                          i(d, {
                                            breakpoint: T,
                                            overrides: {
                                              FNPzO60Va: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1688,
                                                  intrinsicWidth: 780,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      20 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      380 +
                                                      445 -
                                                      108 +
                                                      11
                                                  ),
                                                  pixelHeight: 1688,
                                                  pixelWidth: 780,
                                                  sizes: `231px`,
                                                  src: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png`,
                                                  srcSet: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png 780w`,
                                                },
                                              },
                                              iNJDNLCJg: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1688,
                                                  intrinsicWidth: 780,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      0 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      380 +
                                                      380 -
                                                      108 +
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
                                            children: i(S, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1688,
                                                intrinsicWidth: 780,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    304 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    402 -
                                                    108 +
                                                    11
                                                ),
                                                pixelHeight: 1688,
                                                pixelWidth: 780,
                                                sizes: `231px`,
                                                src: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png`,
                                                srcSet: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png 780w`,
                                              },
                                              className: `framer-1ehbpw3`,
                                              "data-framer-name": `Content`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i(w, {
                                        className: `framer-9bdq3o-container`,
                                        children: i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              fallbackImage: `../../assets/images/sjAZhDlayRE0CCl9ZFfgSMmk2oA.png`,
                                              skipInitialFallback: !0,
                                            },
                                            iNJDNLCJg: {
                                              fallbackImage: `../../assets/images/sjAZhDlayRE0CCl9ZFfgSMmk2oA.png`,
                                              skipInitialFallback: !0,
                                            },
                                          },
                                          children: i(C, {
                                            __fromCanvasComponent: !0,
                                            animated: B.animated,
                                            buffers: B.buffers,
                                            fallbackImage: `../../assets/images/sjAZhDlayRE0CCl9ZFfgSMmk2oA.png`,
                                            fragmentShader: B.fragment,
                                            height: `100%`,
                                            heightmapSource: B.heightmapSource,
                                            mode: `progressive`,
                                            mouse: B.mouse && {
                                              enabled: B.mouse === `enabledByDefault`,
                                            },
                                            resolutionScale: B.resolutionScale,
                                            skipInitialFallback: !1,
                                            uniforms: {
                                              u_colors: {
                                                type: `array`,
                                                value: [
                                                  `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                                  `var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94))`,
                                                  `var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, rgb(62, 179, 109))`,
                                                ],
                                              },
                                              u_edgeDisp: { type: `number`, value: 0 },
                                              u_ephemeralAmp: { type: `number`, value: 0.09 },
                                              u_lensScale: { type: `number`, value: 10 },
                                              u_ringDispersion: { type: `number`, value: 0.05 },
                                              u_ringRadius: { type: `number`, value: 1.3 },
                                              u_ringSpacing: { type: `number`, value: 0.9 },
                                              u_ringWarpStrength: { type: `number`, value: 4 },
                                              u_seed: { type: `number`, value: 47 },
                                              u_speed: { type: `number`, value: 0.5 },
                                            },
                                            vertexShader: B.vertex,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      o(`div`, {
                                        className: `framer-r9vkky`,
                                        "data-framer-name": `Corner Accents`,
                                        children: [
                                          i(`div`, {
                                            className: `framer-gyuo0r`,
                                            "data-framer-name": `Icon`,
                                            children: i(v, {
                                              className: `framer-bz37f3`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-2o0w2o`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 180 },
                                            children: i(v, {
                                              className: `framer-113u0bm`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-1b3thol`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 270 },
                                            children: i(v, {
                                              className: `framer-3ttc4e`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-15ig1hi`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 90 },
                                            children: i(v, {
                                              className: `framer-thxq7r`,
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
                              o(G, {
                                __framer__animate: { transition: Y },
                                __framer__animateOnce: !0,
                                __framer__enter: J,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-risf0v`,
                                "data-framer-name": `Content`,
                                children: [
                                  o(`div`, {
                                    className: `framer-1nlu3pf`,
                                    "data-framer-name": `Content Grid`,
                                    children: [
                                      o(c.div, {
                                        className: `framer-1x7xn2l`,
                                        "data-framer-name": `Content`,
                                        style: { scale: 1.1 },
                                        transformTemplate: X,
                                        children: [
                                          i(d, {
                                            breakpoint: T,
                                            overrides: {
                                              FNPzO60Va: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      20 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      905 +
                                                      0 +
                                                      380 +
                                                      445 -
                                                      -158 +
                                                      -261
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                              },
                                              iNJDNLCJg: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      0 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      840 +
                                                      0 +
                                                      380 +
                                                      380 -
                                                      -205 +
                                                      -261
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                              },
                                            },
                                            children: i(S, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1165.3333333333333,
                                                intrinsicWidth: 576,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    304 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    482 +
                                                    0 +
                                                    402 -
                                                    -168 +
                                                    -261
                                                ),
                                                pixelHeight: 1748,
                                                pixelWidth: 864,
                                                sizes: `258px`,
                                                src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                              },
                                              className: `framer-1qpo9xz`,
                                              "data-framer-name": `Midnight`,
                                              transformTemplate: Z,
                                            }),
                                          }),
                                          i(d, {
                                            breakpoint: T,
                                            overrides: {
                                              FNPzO60Va: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1688,
                                                  intrinsicWidth: 780,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      20 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      905 +
                                                      0 +
                                                      380 +
                                                      445 -
                                                      -158 +
                                                      11
                                                  ),
                                                  pixelHeight: 1688,
                                                  pixelWidth: 780,
                                                  sizes: `234px`,
                                                  src: `../../assets/images/YZrdDwajWH3S4QWqfYJqoS2B2c.png`,
                                                  srcSet: `../../assets/images/YZrdDwajWH3S4QWqfYJqoS2B2c.png 780w`,
                                                },
                                              },
                                              iNJDNLCJg: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1688,
                                                  intrinsicWidth: 780,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      0 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      840 +
                                                      0 +
                                                      380 +
                                                      380 -
                                                      -205 +
                                                      11
                                                  ),
                                                  pixelHeight: 1688,
                                                  pixelWidth: 780,
                                                  sizes: `234px`,
                                                  src: `../../assets/images/YZrdDwajWH3S4QWqfYJqoS2B2c.png`,
                                                  srcSet: `../../assets/images/YZrdDwajWH3S4QWqfYJqoS2B2c.png 780w`,
                                                },
                                              },
                                            },
                                            children: i(S, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1688,
                                                intrinsicWidth: 780,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    304 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    482 +
                                                    0 +
                                                    402 -
                                                    -168 +
                                                    11
                                                ),
                                                pixelHeight: 1688,
                                                pixelWidth: 780,
                                                sizes: `234px`,
                                                src: `../../assets/images/YZrdDwajWH3S4QWqfYJqoS2B2c.png`,
                                                srcSet: `../../assets/images/YZrdDwajWH3S4QWqfYJqoS2B2c.png 780w`,
                                              },
                                              className: `framer-oq18gm`,
                                              "data-framer-name": `Content`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i(d, {
                                        breakpoint: T,
                                        overrides: {
                                          FNPzO60Va: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 909,
                                              intrinsicWidth: 1055,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  20 +
                                                  304 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  905 +
                                                  0 +
                                                  380 +
                                                  445 -
                                                  264
                                              ),
                                              pixelHeight: 909,
                                              pixelWidth: 1055,
                                              sizes: `289px`,
                                              src: `../../assets/images/idrrtdkVd6YlFKpzyU5SjGSbdM.png`,
                                            },
                                          },
                                          iNJDNLCJg: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 909,
                                              intrinsicWidth: 1055,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  304 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  840 +
                                                  0 +
                                                  380 +
                                                  380 -
                                                  264
                                              ),
                                              pixelHeight: 909,
                                              pixelWidth: 1055,
                                              sizes: `289px`,
                                              src: `../../assets/images/idrrtdkVd6YlFKpzyU5SjGSbdM.png`,
                                            },
                                          },
                                        },
                                        children: i(W, {
                                          __framer__adjustPosition: !1,
                                          __framer__offset: 0,
                                          __framer__parallaxTransformEnabled: !0,
                                          __framer__speed: 103,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 909,
                                            intrinsicWidth: 1055,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                482 +
                                                0 +
                                                402 -
                                                264
                                            ),
                                            pixelHeight: 909,
                                            pixelWidth: 1055,
                                            sizes: `289px`,
                                            src: `../../assets/images/idrrtdkVd6YlFKpzyU5SjGSbdM.png`,
                                          },
                                          className: `framer-d6eoah`,
                                          "data-framer-name": `Content`,
                                          transformTemplate: X,
                                        }),
                                      }),
                                      i(w, {
                                        className: `framer-16b088k-container`,
                                        children: i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              fallbackImage: `../../assets/images/2H984a30cmbYnVIV9CPOWg5WNR8.png`,
                                              skipInitialFallback: !0,
                                            },
                                            iNJDNLCJg: {
                                              fallbackImage: `../../assets/images/2H984a30cmbYnVIV9CPOWg5WNR8.png`,
                                              skipInitialFallback: !0,
                                            },
                                          },
                                          children: i(C, {
                                            __fromCanvasComponent: !0,
                                            animated: B.animated,
                                            buffers: B.buffers,
                                            fallbackImage: `../../assets/images/2H984a30cmbYnVIV9CPOWg5WNR8.png`,
                                            fragmentShader: B.fragment,
                                            height: `100%`,
                                            heightmapSource: B.heightmapSource,
                                            mode: `progressive`,
                                            mouse: B.mouse && {
                                              enabled: B.mouse === `enabledByDefault`,
                                            },
                                            resolutionScale: B.resolutionScale,
                                            skipInitialFallback: !1,
                                            uniforms: {
                                              u_colors: {
                                                type: `array`,
                                                value: [
                                                  `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                                  `var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94))`,
                                                  `var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, rgb(62, 179, 109))`,
                                                ],
                                              },
                                              u_edgeDisp: { type: `number`, value: 0 },
                                              u_ephemeralAmp: { type: `number`, value: 0.09 },
                                              u_lensScale: { type: `number`, value: 10 },
                                              u_ringDispersion: { type: `number`, value: 0.05 },
                                              u_ringRadius: { type: `number`, value: 1.3 },
                                              u_ringSpacing: { type: `number`, value: 0.9 },
                                              u_ringWarpStrength: { type: `number`, value: 4 },
                                              u_seed: { type: `number`, value: 49 },
                                              u_speed: { type: `number`, value: 0.5 },
                                            },
                                            vertexShader: B.vertex,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      o(`div`, {
                                        className: `framer-1evm4rq`,
                                        "data-framer-name": `Corner Accents`,
                                        children: [
                                          i(`div`, {
                                            className: `framer-1nidl5w`,
                                            "data-framer-name": `Icon`,
                                            children: i(v, {
                                              className: `framer-1emzpdh`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-16mufcs`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 180 },
                                            children: i(v, {
                                              className: `framer-1tp7768`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-10myp0e`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 270 },
                                            children: i(v, {
                                              className: `framer-1daow5y`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-11avi7w`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 90 },
                                            children: i(v, {
                                              className: `framer-1lwxbud`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i(`div`, {
                                    className: `framer-1ntu1m9`,
                                    "data-framer-name": `Content`,
                                    children: o(`div`, {
                                      className: `framer-9mosy2`,
                                      "data-framer-name": `Text Block`,
                                      children: [
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                              },
                                              children: `02`,
                                            }),
                                          }),
                                          className: `framer-13od7d2`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                              },
                                              children: `Peta interaktif & prediksi risiko banjir real-time.`,
                                            }),
                                          }),
                                          className: `framer-1osthq0`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                              },
                                              children: `XGBoost Regressor memprediksi tingkat stres wilayah serta risiko banjir (R² = 0.9635) dari curah hujan dan densitas drainase, dipadukan peta OpenStreetMap interaktif.`,
                                            }),
                                          }),
                                          className: `framer-1sj87i3`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                905 +
                                                0 +
                                                0 +
                                                15 +
                                                0 +
                                                0 +
                                                246,
                                            },
                                            iNJDNLCJg: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                840 +
                                                0 +
                                                0 +
                                                15 +
                                                0 +
                                                0 +
                                                246,
                                            },
                                          },
                                          children: i(x, {
                                            height: 44,
                                            width: `188px`,
                                            y:
                                              (p?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              304 +
                                              0 +
                                              0 +
                                              0 +
                                              482 +
                                              0 +
                                              15 +
                                              0 +
                                              0 +
                                              287,
                                            children: i(w, {
                                              className: `framer-2w1kpl-container`,
                                              nodeId: `ZLuSRFAA3`,
                                              scopeId: `OqsiEhdfU`,
                                              children: i(L, {
                                                bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                dMzFGkb3u: !0,
                                                dP0U8qPjN: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                                F9tZ22mws: {
                                                  borderColor: `rgba(26, 26, 26, 0)`,
                                                  borderStyle: `solid`,
                                                  borderWidth: 2,
                                                },
                                                height: `100%`,
                                                id: `ZLuSRFAA3`,
                                                jfeAUucDj: O,
                                                layoutId: `ZLuSRFAA3`,
                                                lnJBzRgIM: `Unduh APK`,
                                                MK840EHqT: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                SLp3DWZqR: !0,
                                                style: { height: `100%`, width: `100%` },
                                                TWaZPhsrs: `https://drive.google.com/file/d/18-EopaSbXF9kvxjN0Yzfv0k1HGmBTbhp/view?usp=drive_link`,
                                                variant: q(`nhzWZDlVc`),
                                                vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                wDmZ1dhUo: M,
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
                                  }),
                                ],
                              }),
                              o(G, {
                                __framer__animate: { transition: Y },
                                __framer__animateOnce: !0,
                                __framer__enter: J,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-gdjst7`,
                                "data-framer-name": `Content`,
                                children: [
                                  i(`div`, {
                                    className: `framer-1pk9ob8`,
                                    "data-framer-name": `Content`,
                                    children: o(`div`, {
                                      className: `framer-n9q30k`,
                                      "data-framer-name": `Text Block`,
                                      children: [
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                              },
                                              children: `03`,
                                            }),
                                          }),
                                          className: `framer-1w6pnst`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                              },
                                              children: `Command Center OPD & simulator kebijakan Gemini AI.`,
                                            }),
                                          }),
                                          className: `framer-qgspso`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                              },
                                              children: `Dinas DPUPR, Dishub, dan DLH dapat memverifikasi laporan, mengunggah foto sebelum-sesudah perbaikan, serta mensimulasikan dampak anggaran dengan Google Gemini 2.5 Flash.`,
                                            }),
                                          }),
                                          className: `framer-e6tc6m`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                1810 +
                                                0 +
                                                0 +
                                                15 +
                                                0 +
                                                0 +
                                                246,
                                            },
                                            iNJDNLCJg: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                1680 +
                                                0 +
                                                0 +
                                                15 +
                                                0 +
                                                0 +
                                                246,
                                            },
                                          },
                                          children: i(x, {
                                            height: 44,
                                            width: `188px`,
                                            y:
                                              (p?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              304 +
                                              0 +
                                              0 +
                                              0 +
                                              964 +
                                              0 +
                                              15 +
                                              0 +
                                              0 +
                                              287,
                                            children: i(w, {
                                              className: `framer-5jbnn-container`,
                                              nodeId: `tUq3MAbdZ`,
                                              scopeId: `OqsiEhdfU`,
                                              children: i(L, {
                                                bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                dMzFGkb3u: !0,
                                                dP0U8qPjN: `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                                F9tZ22mws: {
                                                  borderColor: `rgba(26, 26, 26, 0)`,
                                                  borderStyle: `solid`,
                                                  borderWidth: 2,
                                                },
                                                height: `100%`,
                                                id: `tUq3MAbdZ`,
                                                jfeAUucDj: O,
                                                layoutId: `tUq3MAbdZ`,
                                                lnJBzRgIM: `Unduh APK`,
                                                MK840EHqT: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                ns0eNpEfF: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                SLp3DWZqR: !0,
                                                style: { height: `100%`, width: `100%` },
                                                TWaZPhsrs: `https://drive.google.com/file/d/18-EopaSbXF9kvxjN0Yzfv0k1HGmBTbhp/view?usp=drive_link`,
                                                variant: q(`nhzWZDlVc`),
                                                vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                wDmZ1dhUo: M,
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
                                  }),
                                  o(`div`, {
                                    className: `framer-1ikwl2r`,
                                    "data-framer-name": `Content Grid`,
                                    children: [
                                      o(c.div, {
                                        className: `framer-jusy5t`,
                                        "data-framer-name": `Content`,
                                        style: { scale: 1.2 },
                                        transformTemplate: X,
                                        children: [
                                          i(d, {
                                            breakpoint: T,
                                            overrides: {
                                              FNPzO60Va: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      20 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      1810 +
                                                      0 +
                                                      380 +
                                                      445 -
                                                      -248 +
                                                      -261
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                              },
                                              iNJDNLCJg: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1165.3333333333333,
                                                  intrinsicWidth: 576,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      0 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      1680 +
                                                      0 +
                                                      380 +
                                                      380 -
                                                      -248 +
                                                      -261
                                                  ),
                                                  pixelHeight: 1748,
                                                  pixelWidth: 864,
                                                  sizes: `258px`,
                                                  src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                  srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                                },
                                              },
                                            },
                                            children: i(S, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1165.3333333333333,
                                                intrinsicWidth: 576,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    304 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    964 +
                                                    0 +
                                                    402 -
                                                    -248 +
                                                    -261
                                                ),
                                                pixelHeight: 1748,
                                                pixelWidth: 864,
                                                sizes: `258px`,
                                                src: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png`,
                                                srcSet: `../../assets/images/tlL7D4apLq6QtVqF6j2naFdPIdw.png 864w`,
                                              },
                                              className: `framer-1ben46q`,
                                              "data-framer-name": `Midnight`,
                                              transformTemplate: Z,
                                            }),
                                          }),
                                          i(d, {
                                            breakpoint: T,
                                            overrides: {
                                              FNPzO60Va: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1688,
                                                  intrinsicWidth: 780,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      20 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      1810 +
                                                      0 +
                                                      380 +
                                                      445 -
                                                      -248 +
                                                      11
                                                  ),
                                                  pixelHeight: 1688,
                                                  pixelWidth: 780,
                                                  sizes: `231px`,
                                                  src: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png`,
                                                  srcSet: `../../assets/images/dlbzqGIJQy6o9NRFT7w941iSJE.png 780w`,
                                                },
                                              },
                                              iNJDNLCJg: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1688,
                                                  intrinsicWidth: 780,
                                                  loading: h(
                                                    (p?.y || 0) +
                                                      150 +
                                                      0 +
                                                      0 +
                                                      304 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      1680 +
                                                      0 +
                                                      380 +
                                                      380 -
                                                      -248 +
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
                                            children: i(S, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1688,
                                                intrinsicWidth: 780,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    304 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    964 +
                                                    0 +
                                                    402 -
                                                    -248 +
                                                    11
                                                ),
                                                pixelHeight: 1688,
                                                pixelWidth: 780,
                                                sizes: `231px`,
                                                src: `../../assets/images/1LiAF0Cwilxerk9zLmc6QBIB2o8.png`,
                                                srcSet: `../../assets/images/1LiAF0Cwilxerk9zLmc6QBIB2o8.png 780w`,
                                              },
                                              className: `framer-1dhoua6`,
                                              "data-framer-name": `Content`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i(w, {
                                        className: `framer-zj4jhu-container`,
                                        children: i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              fallbackImage: `../../assets/images/K3rC9FQwycq2waKHYBTzdNwo4.png`,
                                              skipInitialFallback: !0,
                                            },
                                            iNJDNLCJg: {
                                              fallbackImage: `../../assets/images/K3rC9FQwycq2waKHYBTzdNwo4.png`,
                                              skipInitialFallback: !0,
                                            },
                                          },
                                          children: i(C, {
                                            __fromCanvasComponent: !0,
                                            animated: B.animated,
                                            buffers: B.buffers,
                                            fallbackImage: `../../assets/images/K3rC9FQwycq2waKHYBTzdNwo4.png`,
                                            fragmentShader: B.fragment,
                                            height: `100%`,
                                            heightmapSource: B.heightmapSource,
                                            mode: `progressive`,
                                            mouse: B.mouse && {
                                              enabled: B.mouse === `enabledByDefault`,
                                            },
                                            resolutionScale: B.resolutionScale,
                                            skipInitialFallback: !1,
                                            uniforms: {
                                              u_colors: {
                                                type: `array`,
                                                value: [
                                                  `var(--token-9205bb18-fdc3-4407-b2c4-e2aa5f1f45f4, rgb(29, 156, 81))`,
                                                  `var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94))`,
                                                  `var(--token-9d171ae7-505a-464b-9207-ab684808eaf8, rgb(62, 179, 109))`,
                                                ],
                                              },
                                              u_edgeDisp: { type: `number`, value: 0 },
                                              u_ephemeralAmp: { type: `number`, value: 0.09 },
                                              u_lensScale: { type: `number`, value: 10 },
                                              u_ringDispersion: { type: `number`, value: 0.05 },
                                              u_ringRadius: { type: `number`, value: 1.3 },
                                              u_ringSpacing: { type: `number`, value: 0.9 },
                                              u_ringWarpStrength: { type: `number`, value: 4 },
                                              u_seed: { type: `number`, value: 68 },
                                              u_speed: { type: `number`, value: 0.5 },
                                            },
                                            vertexShader: B.vertex,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      o(`div`, {
                                        className: `framer-sno6d1`,
                                        "data-framer-name": `Corner Accents`,
                                        children: [
                                          i(`div`, {
                                            className: `framer-wc2xqf`,
                                            "data-framer-name": `Icon`,
                                            children: i(v, {
                                              className: `framer-69s0xs`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-1bc7lq0`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 180 },
                                            children: i(v, {
                                              className: `framer-4aieez`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-1kqv7ab`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 270 },
                                            children: i(v, {
                                              className: `framer-1xzt6rz`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          i(c.div, {
                                            className: `framer-bka7w8`,
                                            "data-framer-name": `Icon`,
                                            style: { rotate: 90 },
                                            children: i(v, {
                                              className: `framer-1c2vjfx`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 11 C 0 4.925 4.925 0 11 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i(d, {
                                        breakpoint: T,
                                        overrides: {
                                          FNPzO60Va: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 454,
                                              intrinsicWidth: 1054,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  20 +
                                                  304 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1810 +
                                                  0 +
                                                  380 +
                                                  445 -
                                                  161
                                              ),
                                              pixelHeight: 454,
                                              pixelWidth: 1054,
                                              sizes: `312px`,
                                              src: `../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-c18830.png`,
                                              srcSet: `../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI.png 512w,../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-183bd4.png 1024w,../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-c18830.png 1054w`,
                                            },
                                          },
                                          iNJDNLCJg: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 454,
                                              intrinsicWidth: 1054,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  304 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1680 +
                                                  0 +
                                                  380 +
                                                  380 -
                                                  161
                                              ),
                                              pixelHeight: 454,
                                              pixelWidth: 1054,
                                              sizes: `312px`,
                                              src: `../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-c18830.png`,
                                              srcSet: `../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI.png 512w,../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-183bd4.png 1024w,../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-c18830.png 1054w`,
                                            },
                                          },
                                        },
                                        children: i(W, {
                                          __framer__adjustPosition: !1,
                                          __framer__offset: 0,
                                          __framer__parallaxTransformEnabled: !0,
                                          __framer__speed: 105,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 454,
                                            intrinsicWidth: 1054,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                304 +
                                                0 +
                                                0 +
                                                0 +
                                                964 +
                                                0 +
                                                402 -
                                                161
                                            ),
                                            pixelHeight: 454,
                                            pixelWidth: 1054,
                                            sizes: `312px`,
                                            src: `../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-c18830.png`,
                                            srcSet: `../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI.png 512w,../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-183bd4.png 1024w,../../assets/images/OBm89tvbyS1ZZsEG0dxOb3QVGI-c18830.png 1054w`,
                                          },
                                          className: `framer-erpluc`,
                                          "data-framer-name": `Content`,
                                          transformTemplate: X,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        o(G, {
                          __framer__animate: { transition: Y },
                          __framer__animateOnce: !0,
                          __framer__enter: J,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-r5mavk`,
                          "data-framer-name": `Page Section`,
                          children: [
                            o(`div`, {
                              className: `framer-1h4jblr`,
                              "data-framer-name": `Capabilities Section Title`,
                              children: [
                                o(`div`, {
                                  className: `framer-1l0duos`,
                                  "data-framer-name": `Capabilities Intro Panel`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-1aqv04k`,
                                      "data-border": !0,
                                      "data-framer-name": `Capabilities Eyebrow`,
                                      children: [
                                        i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                3019 +
                                                40 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                            iNJDNLCJg: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                2824 +
                                                40 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                9.1,
                                            },
                                          },
                                          children: i(x, {
                                            height: 15,
                                            y:
                                              (p?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              1750 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              9.1,
                                            children: i(w, {
                                              className: `framer-1lg1koo-container`,
                                              nodeId: `NAR4kNfW9`,
                                              scopeId: `OqsiEhdfU`,
                                              children: i(z, {
                                                height: `100%`,
                                                id: `NAR4kNfW9`,
                                                layoutId: `NAR4kNfW9`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-1kyvdj7`,
                                              "data-styles-preset": `s3xaUzb1J`,
                                              dir: `auto`,
                                              children: `Kapabilitas Inti`,
                                            }),
                                          }),
                                          className: `framer-p6yfpy`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    i(f, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`h2`, {
                                          className: `framer-styles-preset-d3e5g2`,
                                          "data-styles-preset": `OY7GyAvvP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                          },
                                          children: `Detail kecil. Dampak kota besar.`,
                                        }),
                                      }),
                                      className: `framer-itqxqi`,
                                      "data-framer-name": `Capabilities Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                i(f, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: i(`p`, {
                                      className: `framer-styles-preset-1y3tbh`,
                                      "data-styles-preset": `HutzmjBVA`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                      },
                                      children: `Arsitektur microservice modular (Flutter, NestJS 11, FastAPI, PostgreSQL PostGIS) yang siap dioperasikan secara nyata.`,
                                    }),
                                  }),
                                  className: `framer-n8lsy7`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            o(`div`, {
                              className: `framer-60xnrw`,
                              "data-framer-name": `Content Grid`,
                              children: [
                                o(`div`, {
                                  className: `framer-13jyj62`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-111gnc`,
                                      "data-framer-name": `Text Block`,
                                      children: [
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h3`, {
                                              className: `framer-styles-preset-1pj8wqs`,
                                              "data-styles-preset": `Z7CzuxNJN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `Ekosistem Terintegrasi`,
                                            }),
                                          }),
                                          className: `framer-ryk1zi`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(203, 234, 215))`,
                                              },
                                              children: `Sinkronisasi real-time antara Citizen App, Backend Gateway NestJS, AI Service, dan Command Center Dinas.`,
                                            }),
                                          }),
                                          className: `framer-1wc94d`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    i(d, {
                                      breakpoint: T,
                                      overrides: {
                                        FNPzO60Va: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 190,
                                            intrinsicWidth: 383,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                3019 +
                                                40 +
                                                272.2 +
                                                0 +
                                                0 +
                                                290.5 -
                                                144
                                            ),
                                            pixelHeight: 190,
                                            pixelWidth: 383,
                                            sizes: `292.2895px`,
                                            src: `../../assets/images/HR0Fxx6aNE92mndBQdLoLcYlWI.png`,
                                          },
                                        },
                                        iNJDNLCJg: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 190,
                                            intrinsicWidth: 383,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                2824 +
                                                40 +
                                                272.2 +
                                                0 +
                                                0 +
                                                284.6667 -
                                                144
                                            ),
                                            pixelHeight: 190,
                                            pixelWidth: 383,
                                            sizes: `292.2895px`,
                                            src: `../../assets/images/HR0Fxx6aNE92mndBQdLoLcYlWI.png`,
                                          },
                                        },
                                      },
                                      children: i(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 190,
                                          intrinsicWidth: 383,
                                          loading: h(
                                            (p?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              1750 +
                                              60 +
                                              272.2 +
                                              0 +
                                              0 +
                                              295.5 -
                                              144
                                          ),
                                          pixelHeight: 190,
                                          pixelWidth: 383,
                                          sizes: `292.2895px`,
                                          src: `../../assets/images/HR0Fxx6aNE92mndBQdLoLcYlWI.png`,
                                        },
                                        className: `framer-g26o6h`,
                                        "data-framer-name": `Content`,
                                        fitImageDimension: `width`,
                                        transformTemplate: X,
                                      }),
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-1bl7p8k`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-1jcf0n9`,
                                      "data-framer-name": `Text Block`,
                                      children: [
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h3`, {
                                              className: `framer-styles-preset-1pj8wqs`,
                                              "data-styles-preset": `Z7CzuxNJN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `Prioritas & Penugasan Dinas`,
                                            }),
                                          }),
                                          className: `framer-aajle8`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(203, 234, 215))`,
                                              },
                                              children: `Urban Health Score dan penugasan OPD otomatis menyorot prioritas laporan warga.`,
                                            }),
                                          }),
                                          className: `framer-1nhmubr`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-xwf057`,
                                      "data-framer-name": `Content Grid`,
                                      children: [
                                        i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 526,
                                                intrinsicWidth: 1051,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    20 +
                                                    3019 +
                                                    40 +
                                                    272.2 +
                                                    0 +
                                                    300.5 +
                                                    290.5 -
                                                    123 +
                                                    0
                                                ),
                                                pixelHeight: 526,
                                                pixelWidth: 1051,
                                                sizes: `225px`,
                                                src: `../../assets/images/rbcrMlBRhmo4dcniCHgGQRAUAo.png`,
                                              },
                                            },
                                            iNJDNLCJg: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 526,
                                                intrinsicWidth: 1051,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    2824 +
                                                    40 +
                                                    272.2 +
                                                    0 +
                                                    294.6667 +
                                                    284.6667 -
                                                    123 +
                                                    0
                                                ),
                                                pixelHeight: 526,
                                                pixelWidth: 1051,
                                                sizes: `225px`,
                                                src: `../../assets/images/rbcrMlBRhmo4dcniCHgGQRAUAo.png`,
                                              },
                                            },
                                          },
                                          children: i(S, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 526,
                                              intrinsicWidth: 1051,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  1750 +
                                                  60 +
                                                  272.2 +
                                                  0 +
                                                  0 +
                                                  295.5 -
                                                  123 +
                                                  0
                                              ),
                                              pixelHeight: 526,
                                              pixelWidth: 1051,
                                              sizes: `225px`,
                                              src: `../../assets/images/rbcrMlBRhmo4dcniCHgGQRAUAo.png`,
                                            },
                                            className: `framer-s67rav`,
                                            "data-framer-name": `Content`,
                                            transformTemplate: X,
                                          }),
                                        }),
                                        i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 525,
                                                intrinsicWidth: 1053,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    20 +
                                                    3019 +
                                                    40 +
                                                    272.2 +
                                                    0 +
                                                    300.5 +
                                                    290.5 -
                                                    123 +
                                                    27
                                                ),
                                                pixelHeight: 525,
                                                pixelWidth: 1053,
                                                sizes: `233px`,
                                                src: `../../assets/images/kw1OGsl69P0V84GueiyLiotHYPw.png`,
                                              },
                                            },
                                            iNJDNLCJg: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 525,
                                                intrinsicWidth: 1053,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    2824 +
                                                    40 +
                                                    272.2 +
                                                    0 +
                                                    294.6667 +
                                                    284.6667 -
                                                    123 +
                                                    27
                                                ),
                                                pixelHeight: 525,
                                                pixelWidth: 1053,
                                                sizes: `233px`,
                                                src: `../../assets/images/kw1OGsl69P0V84GueiyLiotHYPw.png`,
                                              },
                                            },
                                          },
                                          children: i(S, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 525,
                                              intrinsicWidth: 1053,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  1750 +
                                                  60 +
                                                  272.2 +
                                                  0 +
                                                  0 +
                                                  295.5 -
                                                  123 +
                                                  27
                                              ),
                                              pixelHeight: 525,
                                              pixelWidth: 1053,
                                              sizes: `233px`,
                                              src: `../../assets/images/kw1OGsl69P0V84GueiyLiotHYPw.png`,
                                            },
                                            className: `framer-11ak57a`,
                                            "data-framer-name": `Content`,
                                            transformTemplate: rt,
                                          }),
                                        }),
                                        i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 526,
                                                intrinsicWidth: 1051,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    20 +
                                                    3019 +
                                                    40 +
                                                    272.2 +
                                                    0 +
                                                    300.5 +
                                                    290.5 -
                                                    123 +
                                                    175 -
                                                    123
                                                ),
                                                pixelHeight: 526,
                                                pixelWidth: 1051,
                                                sizes: `242px`,
                                                src: `../../assets/images/2hKJu4iKTArdZ5YSaQmnoGE7SU.png`,
                                              },
                                            },
                                            iNJDNLCJg: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 526,
                                                intrinsicWidth: 1051,
                                                loading: h(
                                                  (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    2824 +
                                                    40 +
                                                    272.2 +
                                                    0 +
                                                    294.6667 +
                                                    284.6667 -
                                                    123 +
                                                    175 -
                                                    123
                                                ),
                                                pixelHeight: 526,
                                                pixelWidth: 1051,
                                                sizes: `242px`,
                                                src: `../../assets/images/2hKJu4iKTArdZ5YSaQmnoGE7SU.png`,
                                              },
                                            },
                                          },
                                          children: i(S, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 526,
                                              intrinsicWidth: 1051,
                                              loading: h(
                                                (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  1750 +
                                                  60 +
                                                  272.2 +
                                                  0 +
                                                  0 +
                                                  295.5 -
                                                  123 +
                                                  175 -
                                                  123
                                              ),
                                              pixelHeight: 526,
                                              pixelWidth: 1051,
                                              sizes: `242px`,
                                              src: `../../assets/images/2hKJu4iKTArdZ5YSaQmnoGE7SU.png`,
                                            },
                                            className: `framer-x2jjng`,
                                            "data-framer-name": `Content`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-80gui4`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-6jy6hf`,
                                      "data-framer-name": `Text Block`,
                                      children: [
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h3`, {
                                              className: `framer-styles-preset-1pj8wqs`,
                                              "data-styles-preset": `Z7CzuxNJN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `Notifikasi Cerdas`,
                                            }),
                                          }),
                                          className: `framer-1x2ojxd`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(203, 234, 215))`,
                                              },
                                              children: `Peringatan langsung ke layar warga saat mendekati titik jalan berlubang atau update status dinas.`,
                                            }),
                                          }),
                                          className: `framer-1bsko7o`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    i(d, {
                                      breakpoint: T,
                                      overrides: {
                                        FNPzO60Va: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 437.3333333333333,
                                            intrinsicWidth: 216.66666666666666,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                3019 +
                                                40 +
                                                272.2 +
                                                0 +
                                                601 +
                                                290.5 -
                                                121
                                            ),
                                            pixelHeight: 656,
                                            pixelWidth: 325,
                                            sizes: `239px`,
                                            src: `../../assets/images/lOxmwjSxf39wP79opKPSNxExGbk.png`,
                                            srcSet: `../../assets/images/lOxmwjSxf39wP79opKPSNxExGbk.png 325w`,
                                          },
                                        },
                                        iNJDNLCJg: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 437.3333333333333,
                                            intrinsicWidth: 216.66666666666666,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                2824 +
                                                40 +
                                                272.2 +
                                                0 +
                                                294.6667 +
                                                284.6667 -
                                                121
                                            ),
                                            pixelHeight: 656,
                                            pixelWidth: 325,
                                            sizes: `239px`,
                                            src: `../../assets/images/lOxmwjSxf39wP79opKPSNxExGbk.png`,
                                            srcSet: `../../assets/images/lOxmwjSxf39wP79opKPSNxExGbk.png 325w`,
                                          },
                                        },
                                      },
                                      children: i(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 437.3333333333333,
                                          intrinsicWidth: 216.66666666666666,
                                          loading: h(
                                            (p?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              1750 +
                                              60 +
                                              272.2 +
                                              0 +
                                              305.5 +
                                              295.5 -
                                              121
                                          ),
                                          pixelHeight: 656,
                                          pixelWidth: 325,
                                          sizes: `239px`,
                                          src: `../../assets/images/lOxmwjSxf39wP79opKPSNxExGbk.png`,
                                          srcSet: `../../assets/images/lOxmwjSxf39wP79opKPSNxExGbk.png 325w`,
                                        },
                                        className: `framer-wn3neh`,
                                        "data-framer-name": `Notification Badge`,
                                      }),
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-1o1emu8`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-nx6haa`,
                                      "data-framer-name": `Text Block`,
                                      children: [
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h3`, {
                                              className: `framer-styles-preset-1pj8wqs`,
                                              "data-styles-preset": `Z7CzuxNJN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                              },
                                              children: `Panduan Suara TTS`,
                                            }),
                                          }),
                                          className: `framer-nx5z1f`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`p`, {
                                              className: `framer-styles-preset-sak9x6`,
                                              "data-styles-preset": `vVaZ0SXla`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-847b4aa6-e76a-4763-ba5a-1cc298e37c48, rgb(203, 234, 215))`,
                                              },
                                              children: `Kalkulasi rute OSRM dilengkapi panduan suara Bahasa Indonesia otomatis dalam radius 50 meter.`,
                                            }),
                                          }),
                                          className: `framer-9ere89`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    i(d, {
                                      breakpoint: T,
                                      overrides: {
                                        FNPzO60Va: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 44.666666666666664,
                                            intrinsicWidth: 253.33333333333334,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                3019 +
                                                40 +
                                                272.2 +
                                                0 +
                                                901.5 +
                                                290.5 -
                                                129
                                            ),
                                            pixelHeight: 67,
                                            pixelWidth: 380,
                                            sizes: `308px`,
                                            src: `../../assets/images/lvUkRFTPGZ32yFuOptu0UjASlgA.png`,
                                          },
                                        },
                                        iNJDNLCJg: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 44.666666666666664,
                                            intrinsicWidth: 253.33333333333334,
                                            loading: h(
                                              (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                2824 +
                                                40 +
                                                272.2 +
                                                0 +
                                                589.3334 +
                                                284.6667 -
                                                136
                                            ),
                                            pixelHeight: 67,
                                            pixelWidth: 380,
                                            sizes: `377px`,
                                            src: `../../assets/images/lvUkRFTPGZ32yFuOptu0UjASlgA.png`,
                                          },
                                        },
                                      },
                                      children: i(S, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 44.666666666666664,
                                          intrinsicWidth: 253.33333333333334,
                                          loading: h(
                                            (p?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              1750 +
                                              60 +
                                              272.2 +
                                              0 +
                                              305.5 +
                                              295.5 -
                                              136
                                          ),
                                          pixelHeight: 67,
                                          pixelWidth: 380,
                                          sizes: `377px`,
                                          src: `../../assets/images/lvUkRFTPGZ32yFuOptu0UjASlgA.png`,
                                        },
                                        className: `framer-1opq28l`,
                                        "data-framer-name": `Content`,
                                        transformTemplate: X,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        o(G, {
                          __framer__animate: { transition: Y },
                          __framer__animateOnce: !0,
                          __framer__enter: J,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-g49tic`,
                          "data-framer-name": `FAQ Section`,
                          children: [
                            o(`div`, {
                              className: `framer-1lsatft`,
                              "data-framer-name": `FAQ Intro`,
                              children: [
                                o(`div`, {
                                  className: `framer-moud7e`,
                                  "data-framer-name": `FAQ Heading`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-d9j1s0`,
                                      "data-framer-name": `FAQ Badge`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-1p1lvy1`,
                                          "data-border": !0,
                                          "data-framer-name": `FAQ Badge Shell`,
                                          children: [
                                            i(d, {
                                              breakpoint: T,
                                              overrides: {
                                                FNPzO60Va: {
                                                  y:
                                                    (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    20 +
                                                    4643.2 +
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
                                                iNJDNLCJg: {
                                                  y:
                                                    (p?.y || 0) +
                                                    150 +
                                                    0 +
                                                    0 +
                                                    4130.2 +
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
                                              children: i(x, {
                                                height: 15,
                                                y:
                                                  (p?.y || 0) +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  2823.2 +
                                                  75 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  9.1,
                                                children: i(w, {
                                                  className: `framer-1av99s3-container`,
                                                  nodeId: `i4oLd5nyy`,
                                                  scopeId: `OqsiEhdfU`,
                                                  children: i(z, {
                                                    height: `100%`,
                                                    id: `i4oLd5nyy`,
                                                    layoutId: `i4oLd5nyy`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            i(f, {
                                              __fromCanvasComponent: !0,
                                              children: i(r, {
                                                children: i(`p`, {
                                                  className: `framer-styles-preset-1kyvdj7`,
                                                  "data-styles-preset": `s3xaUzb1J`,
                                                  dir: `auto`,
                                                  children: `FAQ`,
                                                }),
                                              }),
                                              className: `framer-1oiohh3`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        i(f, {
                                          __fromCanvasComponent: !0,
                                          children: i(r, {
                                            children: i(`h2`, {
                                              className: `framer-styles-preset-d3e5g2`,
                                              "data-styles-preset": `OY7GyAvvP`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                              },
                                              children: `Ada pertanyaan? Kami siap menjawab.`,
                                            }),
                                          }),
                                          className: `framer-3qg77l`,
                                          "data-framer-name": `FAQ Badge Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    i(f, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-1y3tbh`,
                                          "data-styles-preset": `HutzmjBVA`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-7351e27c-afcb-464f-9579-ba0ea4a4c2b3, rgb(86, 86, 87))`,
                                          },
                                          children: `Informasi lengkap mengenai cara kerja LaporKita, model AI, dan implementasinya di Kota Malang.`,
                                        }),
                                      }),
                                      className: `framer-d93i7f`,
                                      "data-framer-name": `FAQ Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-16gs5d8`,
                                  "data-framer-name": `FAQ Support CTA`,
                                  children: [
                                    i(f, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`h3`, {
                                          className: `framer-styles-preset-1pj8wqs`,
                                          "data-styles-preset": `Z7CzuxNJN`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                          },
                                          children: `Masih ada pertanyaan lain?`,
                                        }),
                                      }),
                                      className: `framer-1cdmkpk`,
                                      "data-framer-name": `Support CTA Heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    i(f, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-1y3tbh`,
                                          "data-styles-preset": `HutzmjBVA`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, rgb(230, 247, 237))`,
                                          },
                                          children: `Butuh penjelasan teknis atau demo langsung untuk penjurian MAGEITS 2026? Hubungi tim kami kapan saja.`,
                                        }),
                                      }),
                                      className: `framer-181r4bs`,
                                      "data-framer-name": `Support CTA Copy`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    i(oe, {
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
                                        i(d, {
                                          breakpoint: T,
                                          overrides: {
                                            FNPzO60Va: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                20 +
                                                4643.2 +
                                                20 +
                                                0 +
                                                0 +
                                                272.2 +
                                                40 +
                                                170,
                                            },
                                            iNJDNLCJg: {
                                              y:
                                                (p?.y || 0) +
                                                150 +
                                                0 +
                                                0 +
                                                4130.2 +
                                                40 +
                                                0 +
                                                0 +
                                                242.2 +
                                                35 +
                                                133,
                                            },
                                          },
                                          children: i(x, {
                                            height: 44,
                                            width: `188px`,
                                            y:
                                              (p?.y || 0) +
                                              150 +
                                              0 +
                                              0 +
                                              2823.2 +
                                              75 +
                                              0 +
                                              273 +
                                              55 +
                                              113,
                                            children: i(w, {
                                              className: `framer-cpcxil-container`,
                                              "data-framer-name": `CTA Button`,
                                              name: `CTA Button`,
                                              nodeId: `lGX6JBw35`,
                                              scopeId: `OqsiEhdfU`,
                                              children: i(d, {
                                                breakpoint: T,
                                                overrides: {
                                                  FNPzO60Va: { TWaZPhsrs: e[2] },
                                                  iNJDNLCJg: { TWaZPhsrs: e[1] },
                                                },
                                                children: i(L, {
                                                  bSgywnMQ9: `5px 5px 0px 0px var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(32, 48, 39))`,
                                                  dMzFGkb3u: !1,
                                                  dP0U8qPjN: `var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, rgb(248, 250, 249))`,
                                                  F9tZ22mws: {
                                                    borderColor: `rgba(26, 26, 26, 0)`,
                                                    borderStyle: `solid`,
                                                    borderWidth: 2,
                                                  },
                                                  height: `100%`,
                                                  id: `lGX6JBw35`,
                                                  jfeAUucDj: he,
                                                  layoutId: `lGX6JBw35`,
                                                  lnJBzRgIM: `Hubungi Tim`,
                                                  MK840EHqT: `var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, rgb(242, 247, 244))`,
                                                  name: `CTA Button`,
                                                  ns0eNpEfF: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                  SLp3DWZqR: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  TWaZPhsrs: e[0],
                                                  variant: q(`nhzWZDlVc`),
                                                  vlr7eN_dQ: `var(--token-9053fb43-387f-4a9f-af40-da9c9c94ead4, rgb(26, 26, 26))`,
                                                  wDmZ1dhUo: M,
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
                                    o(`div`, {
                                      className: `framer-vflfs0`,
                                      "data-framer-name": `Corner Accents`,
                                      children: [
                                        i(`div`, {
                                          className: `framer-14oa2in`,
                                          "data-framer-name": `Icon`,
                                          children: i(v, {
                                            className: `framer-j50g1c`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 8 C 0 3.582 3.582 0 8 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        i(c.div, {
                                          className: `framer-1icotlu`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 180 },
                                          children: i(v, {
                                            className: `framer-134tf25`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        i(c.div, {
                                          className: `framer-zt4jtd`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 270 },
                                          children: i(v, {
                                            className: `framer-1icb6u7`,
                                            requiresOverflowVisible: !0,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 15 L 0 7 C 0 3.134 3.134 0 7 0 L 15 0" fill="transparent" stroke-width="2" stroke="var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) /* {&quot;name&quot;:&quot;900&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        i(c.div, {
                                          className: `framer-shcghf`,
                                          "data-framer-name": `Icon`,
                                          style: { rotate: 90 },
                                          children: i(v, {
                                            className: `framer-1jbw9t`,
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
                            o(`div`, {
                              className: `framer-sjstw5`,
                              "data-framer-name": `FAQ Items Grid`,
                              children: [
                                i(d, {
                                  breakpoint: T,
                                  overrides: {
                                    FNPzO60Va: {
                                      width: `calc(${p?.width || `100vw`} - 80px)`,
                                      y: (p?.y || 0) + 150 + 0 + 20 + 4643.2 + 20 + 601.2 + 0 + 0,
                                    },
                                    iNJDNLCJg: {
                                      width: `calc(${p?.width || `100vw`} - 48px)`,
                                      y: (p?.y || 0) + 150 + 0 + 0 + 4130.2 + 40 + 482.2 + 0 + 0,
                                    },
                                  },
                                  children: i(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (p?.y || 0) + 150 + 0 + 0 + 2823.2 + 40 + 0 + 0,
                                    children: i(w, {
                                      className: `framer-1eq5p99-container`,
                                      "data-framer-name": `Auto Reschedule FAQ`,
                                      name: `Auto Reschedule FAQ`,
                                      nodeId: `i7pwQM8HC`,
                                      scopeId: `OqsiEhdfU`,
                                      children: i(R, {
                                        CYcMeDYwX: `Warga cukup membuka kamera Citizen Vision dalam 3 sentuhan (3-Tap Rule): potret kerusakan, AI YOLOv11 otomatis mengklasifikasi & mengunci koordinat GPS PostGIS, lalu laporan langsung masuk dalam ~15 detik.`,
                                        height: `100%`,
                                        id: `i7pwQM8HC`,
                                        layoutId: `i7pwQM8HC`,
                                        name: `Auto Reschedule FAQ`,
                                        style: { width: `100%` },
                                        variant: q(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Bagaimana cara melapor kerusakan lewat LaporKita?`,
                                      }),
                                    }),
                                  }),
                                }),
                                i(d, {
                                  breakpoint: T,
                                  overrides: {
                                    FNPzO60Va: {
                                      width: `calc(${p?.width || `100vw`} - 80px)`,
                                      y: (p?.y || 0) + 150 + 0 + 20 + 4643.2 + 20 + 601.2 + 0 + 141,
                                    },
                                    iNJDNLCJg: {
                                      width: `calc(${p?.width || `100vw`} - 48px)`,
                                      y: (p?.y || 0) + 150 + 0 + 0 + 4130.2 + 40 + 482.2 + 0 + 141,
                                    },
                                  },
                                  children: i(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (p?.y || 0) + 150 + 0 + 0 + 2823.2 + 40 + 0 + 141,
                                    children: i(w, {
                                      className: `framer-1o5s644-container`,
                                      "data-framer-name": `Calendar Sync FAQ`,
                                      name: `Calendar Sync FAQ`,
                                      nodeId: `Tl11KRmhF`,
                                      scopeId: `OqsiEhdfU`,
                                      children: i(R, {
                                        CYcMeDYwX: `Model Computer Vision YOLOv11-cls mencapai akurasi uji 99.49% (2.1 ms/gambar) untuk 5 kelas fasilitas, sementara XGBoost Regressor mencapai R² = 0.9635 untuk prediksi risiko banjir berbasis curah hujan dan drainase.`,
                                        height: `100%`,
                                        id: `Tl11KRmhF`,
                                        layoutId: `Tl11KRmhF`,
                                        name: `Calendar Sync FAQ`,
                                        style: { width: `100%` },
                                        variant: q(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Seberapa akurat model AI YOLOv11 dan prediksi banjir XGBoost?`,
                                      }),
                                    }),
                                  }),
                                }),
                                i(d, {
                                  breakpoint: T,
                                  overrides: {
                                    FNPzO60Va: {
                                      width: `calc(${p?.width || `100vw`} - 80px)`,
                                      y: (p?.y || 0) + 150 + 0 + 20 + 4643.2 + 20 + 601.2 + 0 + 282,
                                    },
                                    iNJDNLCJg: {
                                      width: `calc(${p?.width || `100vw`} - 48px)`,
                                      y: (p?.y || 0) + 150 + 0 + 0 + 4130.2 + 40 + 482.2 + 0 + 282,
                                    },
                                  },
                                  children: i(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (p?.y || 0) + 150 + 0 + 0 + 2823.2 + 40 + 0 + 282,
                                    children: i(w, {
                                      className: `framer-1bi59jk-container`,
                                      "data-framer-name": `Voice Notes FAQ`,
                                      name: `Voice Notes FAQ`,
                                      nodeId: `vjQxKMksD`,
                                      scopeId: `OqsiEhdfU`,
                                      children: i(R, {
                                        CYcMeDYwX: `Pelapor dapat memantau timeline progres lengkap dengan foto sebelum-sesudah perbaikan dari dinas (DPUPR/Dishub/DLH), melakukan validasi warga, serta memakai navigasi OSRM dengan peringatan suara TTS radius 50m.`,
                                        height: `100%`,
                                        id: `vjQxKMksD`,
                                        layoutId: `vjQxKMksD`,
                                        name: `Voice Notes FAQ`,
                                        style: { width: `100%` },
                                        variant: q(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Bagaimana transparansi penanganan & fitur navigasi rute aman?`,
                                      }),
                                    }),
                                  }),
                                }),
                                i(d, {
                                  breakpoint: T,
                                  overrides: {
                                    FNPzO60Va: {
                                      width: `calc(${p?.width || `100vw`} - 80px)`,
                                      y: (p?.y || 0) + 150 + 0 + 20 + 4643.2 + 20 + 601.2 + 0 + 423,
                                    },
                                    iNJDNLCJg: {
                                      width: `calc(${p?.width || `100vw`} - 48px)`,
                                      y: (p?.y || 0) + 150 + 0 + 0 + 4130.2 + 40 + 482.2 + 0 + 423,
                                    },
                                  },
                                  children: i(x, {
                                    height: 130,
                                    width: `542.5px`,
                                    y: (p?.y || 0) + 150 + 0 + 0 + 2823.2 + 40 + 0 + 423,
                                    children: i(w, {
                                      className: `framer-yoh68r-container`,
                                      "data-framer-name": `Data Safety FAQ`,
                                      name: `Data Safety FAQ`,
                                      nodeId: `o9YpG5XTS`,
                                      scopeId: `OqsiEhdfU`,
                                      children: i(R, {
                                        CYcMeDYwX: `LaporKita menargetkan 5 kecamatan pilot Kota Malang (Klojen, Lowokwaru, Blimbing, Sukun, Kedungkandang) dengan arsitektur produksi aktif, dikembangkan oleh Tim Saya Akan Lawan (SMK Telkom Malang) untuk MAGEITS 2026.`,
                                        height: `100%`,
                                        id: `o9YpG5XTS`,
                                        layoutId: `o9YpG5XTS`,
                                        name: `Data Safety FAQ`,
                                        style: { width: `100%` },
                                        variant: q(`BJlTLC2oV`),
                                        width: `100%`,
                                        xE_nimxGQ: `Di mana LaporKita diimplementasikan dan siapa pengembangnya?`,
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
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-jZ4I2.framer-1yqlm5t, .framer-jZ4I2 .framer-1yqlm5t { display: block; }`,
        `.framer-jZ4I2.framer-xepiyd { align-content: center; align-items: center; background-color: var(--token-274b0eb9-edcf-48d5-a549-af787a94d070, #f2f7f4); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 150px 0px 0px 0px; position: relative; width: 1200px; }`,
        `.framer-jZ4I2 .framer-itkyqd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 10px 200px 10px 200px; position: fixed; right: 0px; top: 0px; z-index: 7; }`,
        `.framer-jZ4I2 .framer-fmnwrt-container, .framer-jZ4I2 .framer-1tvjju9-container, .framer-jZ4I2 .framer-1lg1koo-container, .framer-jZ4I2 .framer-1av99s3-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-jZ4I2 .framer-ruf6kx-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-jZ4I2 .framer-97m2qc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }`,
        `.framer-jZ4I2 .framer-1xir254 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-rhfln5, .framer-jZ4I2 .framer-1aqv04k, .framer-jZ4I2 .framer-1p1lvy1 { --border-bottom-width: 1px; --border-color: var(--token-d76921fb-0ea2-43cf-8aa5-9df326a74d4c, #d8e2dc); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-ae88c484-3971-43f7-841e-60f0b832bbc1, #e6f7ed); border-bottom-left-radius: 45px; border-bottom-right-radius: 45px; border-top-left-radius: 45px; border-top-right-radius: 45px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 9px 5px 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jZ4I2 .framer-18oglyo, .framer-jZ4I2 .framer-1nqyn2a, .framer-jZ4I2 .framer-13od7d2, .framer-jZ4I2 .framer-1w6pnst, .framer-jZ4I2 .framer-p6yfpy, .framer-jZ4I2 .framer-1oiohh3 { --framer-link-text-color: #1d9c51; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-jZ4I2 .framer-1ywugk2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1030px; }`,
        `.framer-jZ4I2 .framer-10axkxl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-1a1muw2, .framer-jZ4I2 .framer-ykg33d, .framer-jZ4I2 .framer-q6gs5l, .framer-jZ4I2 .framer-1osthq0, .framer-jZ4I2 .framer-1sj87i3, .framer-jZ4I2 .framer-qgspso, .framer-jZ4I2 .framer-e6tc6m, .framer-jZ4I2 .framer-itqxqi, .framer-jZ4I2 .framer-1wc94d, .framer-jZ4I2 .framer-aajle8, .framer-jZ4I2 .framer-1nhmubr, .framer-jZ4I2 .framer-1bsko7o, .framer-jZ4I2 .framer-9ere89 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-jZ4I2 .framer-9o12gx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 799px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-jZ4I2 .framer-12we0dq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 80px 0px 80px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-8s769w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1040px; }`,
        `.framer-jZ4I2 .framer-kpo33k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: 402px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-1c4si0r, .framer-jZ4I2 .framer-1ntu1m9, .framer-jZ4I2 .framer-1pk9ob8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 1px; }`,
        `.framer-jZ4I2 .framer-1eeym47, .framer-jZ4I2 .framer-9mosy2, .framer-jZ4I2 .framer-n9q30k { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-1rw1foq-container, .framer-jZ4I2 .framer-2w1kpl-container, .framer-jZ4I2 .framer-5jbnn-container { flex: none; height: 44px; position: relative; width: 188px; }`,
        `.framer-jZ4I2 .framer-9j2reg { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 425px; }`,
        `.framer-jZ4I2 .framer-1e1n9zk { aspect-ratio: 1.967032967032967 / 1; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 166px); left: 50%; overflow: visible; position: absolute; top: 72px; transform: translateX(-50%); width: 328px; z-index: 3; }`,
        `.framer-jZ4I2 .framer-1fhxthl { align-content: center; align-items: center; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: 108px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; min-height: 520px; min-width: 258px; overflow: visible; padding: 0px; position: absolute; transform: translateX(-50%); width: min-content; z-index: 2; }`,
        `.framer-jZ4I2 .framer-122y0gy, .framer-jZ4I2 .framer-1qpo9xz, .framer-jZ4I2 .framer-1ben46q { aspect-ratio: 0.494279176201373 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 522px); left: 0px; overflow: visible; position: absolute; top: 50%; transform: translateY(-50%); width: 258px; z-index: 2; }`,
        `.framer-jZ4I2 .framer-1ehbpw3, .framer-jZ4I2 .framer-1dhoua6 { border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; box-shadow: 11px -16px 41px 0px rgba(0, 0, 0, 0.25); flex: none; height: 501px; left: calc(50.00000000000002% - 231px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 11px; width: 231px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-jZ4I2 .framer-9bdq3o-container { border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; bottom: 0px; flex: none; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-jZ4I2 .framer-r9vkky, .framer-jZ4I2 .framer-1evm4rq, .framer-jZ4I2 .framer-sno6d1 { flex: none; height: 100%; overflow: visible; position: absolute; right: 0px; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-jZ4I2 .framer-gyuo0r, .framer-jZ4I2 .framer-1nidl5w, .framer-jZ4I2 .framer-wc2xqf, .framer-jZ4I2 .framer-14oa2in { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-jZ4I2 .framer-bz37f3, .framer-jZ4I2 .framer-113u0bm, .framer-jZ4I2 .framer-3ttc4e, .framer-jZ4I2 .framer-thxq7r, .framer-jZ4I2 .framer-1emzpdh, .framer-jZ4I2 .framer-1tp7768, .framer-jZ4I2 .framer-1daow5y, .framer-jZ4I2 .framer-1lwxbud, .framer-jZ4I2 .framer-69s0xs, .framer-jZ4I2 .framer-4aieez, .framer-jZ4I2 .framer-1xzt6rz, .framer-jZ4I2 .framer-1c2vjfx, .framer-jZ4I2 .framer-j50g1c, .framer-jZ4I2 .framer-1icb6u7, .framer-jZ4I2 .framer-1jbw9t { height: 15px; position: relative; width: 15px; }`,
        `.framer-jZ4I2 .framer-2o0w2o, .framer-jZ4I2 .framer-16mufcs, .framer-jZ4I2 .framer-1bc7lq0 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
        `.framer-jZ4I2 .framer-1b3thol, .framer-jZ4I2 .framer-10myp0e, .framer-jZ4I2 .framer-1kqv7ab, .framer-jZ4I2 .framer-zt4jtd { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
        `.framer-jZ4I2 .framer-15ig1hi, .framer-jZ4I2 .framer-11avi7w, .framer-jZ4I2 .framer-bka7w8, .framer-jZ4I2 .framer-shcghf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; width: min-content; z-index: 1; }`,
        `.framer-jZ4I2 .framer-risf0v, .framer-jZ4I2 .framer-gdjst7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: 402px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-1nlu3pf, .framer-jZ4I2 .framer-1ikwl2r { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 425px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jZ4I2 .framer-1x7xn2l { align-content: center; align-items: center; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: -168px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; min-height: 520px; min-width: 258px; overflow: visible; padding: 0px; position: absolute; transform: translateX(-50%); width: min-content; z-index: 2; }`,
        `.framer-jZ4I2 .framer-oq18gm { border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; box-shadow: 11px -16px 41px 0px rgba(0, 0, 0, 0.25); flex: none; height: 506px; left: calc(50.00000000000002% - 234px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 11px; width: 234px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-jZ4I2 .framer-d6eoah { aspect-ratio: 1.1623376623376622 / 1; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; bottom: 15px; box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 249px); left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: 289px; z-index: 2; }`,
        `.framer-jZ4I2 .framer-16b088k-container { flex: none; height: 402px; position: absolute; right: 0px; top: calc(50.00000000000002% - 402px / 2); width: 425px; z-index: 1; }`,
        `.framer-jZ4I2 .framer-jusy5t { align-content: center; align-items: center; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: -248px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; min-height: 520px; min-width: 258px; overflow: visible; padding: 0px; position: absolute; transform: translateX(-50%); width: min-content; z-index: 2; }`,
        `.framer-jZ4I2 .framer-zj4jhu-container { bottom: 0px; flex: none; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-jZ4I2 .framer-erpluc { aspect-ratio: 2.2658227848101267 / 1; border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; bottom: 23px; box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 138px); left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: 312px; z-index: 2; }`,
        `.framer-jZ4I2 .framer-r5mavk { align-content: center; align-items: center; background-color: var(--token-33c3cab0-0d6f-4078-b970-7f1ebd521cc7, #f8faf9); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-1h4jblr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-1l0duos { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-jZ4I2 .framer-n8lsy7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 899px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-jZ4I2 .framer-60xnrw { display: grid; flex: none; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: 601px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 903px; }`,
        `.framer-jZ4I2 .framer-13jyj62, .framer-jZ4I2 .framer-1o1emu8 { align-content: center; align-items: center; align-self: start; background: linear-gradient(180deg, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, #206c57) 0%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jZ4I2 .framer-111gnc, .framer-jZ4I2 .framer-6jy6hf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-ryk1zi, .framer-jZ4I2 .framer-1x2ojxd, .framer-jZ4I2 .framer-nx5z1f { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-jZ4I2 .framer-g26o6h { bottom: -1px; flex: none; height: 145px; left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-jZ4I2 .framer-1bl7p8k { align-content: center; align-items: center; align-self: start; background: linear-gradient(132deg, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, #206c57) 0%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, rgb(36, 180, 94)) 100%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jZ4I2 .framer-1jcf0n9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 250px; }`,
        `.framer-jZ4I2 .framer-xwf057 { bottom: -52px; flex: none; height: 175px; left: calc(49.8305084745763% - 242px / 2); overflow: visible; position: absolute; width: 242px; z-index: 1; }`,
        `.framer-jZ4I2 .framer-s67rav { aspect-ratio: 1.967032967032967 / 1; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; box-shadow: 0px -3px 12px 0px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 115px); left: 50%; overflow: visible; position: absolute; top: 0px; transform: translateX(-50%); width: 225px; z-index: 3; }`,
        `.framer-jZ4I2 .framer-11ak57a { aspect-ratio: 1.967032967032967 / 1; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; box-shadow: 0px -3px 12px 0px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 119px); left: 50%; overflow: visible; position: absolute; top: 49%; transform: translate(-50%, -50%); width: 233px; z-index: 3; }`,
        `.framer-jZ4I2 .framer-x2jjng { aspect-ratio: 1.967032967032967 / 1; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; bottom: 0px; box-shadow: 0px -3px 12px 0px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 123px); left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 3; }`,
        `.framer-jZ4I2 .framer-80gui4 { align-content: center; align-items: center; align-self: start; background: linear-gradient(217deg, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e) 0%, var(--token-645f8a7d-497b-43bd-9ebe-717da79646a9, rgb(22, 82, 66)) 96.83908922918911%); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jZ4I2 .framer-wn3neh { bottom: -361px; flex: none; height: 482px; left: calc(49.65986394557825% - 239px / 2); overflow: visible; position: absolute; width: 239px; z-index: 1; }`,
        `.framer-jZ4I2 .framer-nx6haa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 538px; }`,
        `.framer-jZ4I2 .framer-1opq28l { aspect-ratio: 5.6716417910447765 / 1; bottom: 69px; flex: none; height: var(--framer-aspect-ratio-supported, 67px); left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: 377px; z-index: 1; }`,
        `.framer-jZ4I2 .framer-g49tic { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1200px; }`,
        `.framer-jZ4I2 .framer-1lsatft { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 483px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-jZ4I2 .framer-moud7e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 521px; }`,
        `.framer-jZ4I2 .framer-d9j1s0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-3qg77l { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 412px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-jZ4I2 .framer-d93i7f { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 398px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-jZ4I2 .framer-16gs5d8 { align-content: center; align-items: center; background: radial-gradient(108% 150% at -4.6% -23.400000000000002%, var(--token-40d88130-1e11-49ef-8b48-1bf540f9e2b2, #24b45e) 0%, var(--token-d4ce402d-84ab-4e68-843b-97176892cc88, rgb(32, 108, 87)) 100%); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 1px 1px 6px 0px var(--token-8f371399-8b5e-4697-97aa-74d9364e6e43, #6ac68f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 210px; justify-content: center; overflow: visible; padding: 55px; position: relative; width: 100%; }`,
        `.framer-jZ4I2 .framer-1cdmkpk, .framer-jZ4I2 .framer-181r4bs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-jZ4I2 .framer-cpcxil-container { flex: none; height: 44px; position: relative; width: 188px; z-index: 2; }`,
        `.framer-jZ4I2 .framer-vflfs0 { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-jZ4I2 .framer-1icotlu { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 15px; min-width: 15px; overflow: visible; padding: 0px; position: absolute; right: 0px; width: min-content; z-index: 1; }`,
        `.framer-jZ4I2 .framer-134tf25 { height: 15px; left: 0px; position: absolute; top: 1px; width: 15px; }`,
        `.framer-jZ4I2 .framer-sjstw5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-jZ4I2 .framer-1eq5p99-container, .framer-jZ4I2 .framer-1o5s644-container, .framer-jZ4I2 .framer-1bi59jk-container, .framer-jZ4I2 .framer-yoh68r-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Pe,
        ...Be,
        ...Ee,
        ...Ce,
        ...xe,
        ...Ne,
        `.framer-jZ4I2[data-border="true"]::after, .framer-jZ4I2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-jZ4I2.framer-xepiyd { width: 810px; } .framer-jZ4I2 .framer-itkyqd { padding: 10px 24px 10px 24px; } .framer-jZ4I2 .framer-1ywugk2, .framer-jZ4I2 .framer-9o12gx, .framer-jZ4I2 .framer-8s769w, .framer-jZ4I2 .framer-1l0duos, .framer-jZ4I2 .framer-n8lsy7, .framer-jZ4I2 .framer-1jcf0n9, .framer-jZ4I2 .framer-nx6haa { width: 100%; } .framer-jZ4I2 .framer-12we0dq { padding: 0px 40px 0px 40px; } .framer-jZ4I2 .framer-kpo33k, .framer-jZ4I2 .framer-risf0v, .framer-jZ4I2 .framer-gdjst7 { flex-direction: column; height: min-content; } .framer-jZ4I2 .framer-1c4si0r, .framer-jZ4I2 .framer-1pk9ob8 { flex: none; height: min-content; width: 100%; } .framer-jZ4I2 .framer-1eeym47, .framer-jZ4I2 .framer-9mosy2, .framer-jZ4I2 .framer-n9q30k { flex: none; height: min-content; } .framer-jZ4I2 .framer-9j2reg { height: 380px; overflow: var(--overflow-clip-fallback, clip); width: 100%; will-change: var(--framer-will-change-override, transform); } .framer-jZ4I2 .framer-1e1n9zk { height: var(--framer-aspect-ratio-supported, 167px); } .framer-jZ4I2 .framer-r9vkky, .framer-jZ4I2 .framer-1evm4rq, .framer-jZ4I2 .framer-sno6d1 { left: 0px; right: unset; } .framer-jZ4I2 .framer-1nlu3pf { height: 380px; order: 1; width: 100%; } .framer-jZ4I2 .framer-1x7xn2l { bottom: -205px; left: 50%; } .framer-jZ4I2 .framer-16b088k-container { height: 106%; top: calc(50.00000000000002% - 105.78947368421052% / 2); width: 100%; } .framer-jZ4I2 .framer-1ntu1m9 { flex: none; height: min-content; order: 0; width: 100%; } .framer-jZ4I2 .framer-1ikwl2r { height: 380px; width: 100%; } .framer-jZ4I2 .framer-r5mavk { padding: 40px 20px 40px 20px; } .framer-jZ4I2 .framer-60xnrw { grid-template-columns: repeat(2, minmax(50px, 1fr)); height: 874px; width: 100%; } .framer-jZ4I2 .framer-1opq28l { height: var(--framer-aspect-ratio-supported, 66px); } .framer-jZ4I2 .framer-g49tic { flex-direction: column; gap: 30px; padding: 40px 24px 40px 24px; width: 100%; } .framer-jZ4I2 .framer-1lsatft { flex: none; gap: 30px; height: min-content; justify-content: flex-start; width: 100%; } .framer-jZ4I2 .framer-16gs5d8 { padding: 35px; } .framer-jZ4I2 .framer-sjstw5 { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-jZ4I2.framer-xepiyd { width: 390px; } .framer-jZ4I2 .framer-itkyqd { overflow: visible; padding: 0px; } .framer-jZ4I2 .framer-97m2qc { padding: 20px; } .framer-jZ4I2 .framer-1ywugk2, .framer-jZ4I2 .framer-9o12gx, .framer-jZ4I2 .framer-8s769w, .framer-jZ4I2 .framer-1l0duos, .framer-jZ4I2 .framer-n8lsy7, .framer-jZ4I2 .framer-nx6haa, .framer-jZ4I2 .framer-moud7e, .framer-jZ4I2 .framer-3qg77l, .framer-jZ4I2 .framer-d93i7f { width: 100%; } .framer-jZ4I2 .framer-12we0dq { padding: 0px; } .framer-jZ4I2 .framer-kpo33k, .framer-jZ4I2 .framer-risf0v, .framer-jZ4I2 .framer-gdjst7 { flex-direction: column; height: min-content; } .framer-jZ4I2 .framer-1c4si0r, .framer-jZ4I2 .framer-1pk9ob8 { flex: none; height: min-content; width: 100%; } .framer-jZ4I2 .framer-1eeym47, .framer-jZ4I2 .framer-9mosy2, .framer-jZ4I2 .framer-n9q30k { flex: none; height: min-content; } .framer-jZ4I2 .framer-9j2reg { height: 445px; overflow: var(--overflow-clip-fallback, clip); width: 100%; will-change: var(--framer-will-change-override, transform); } .framer-jZ4I2 .framer-1e1n9zk { height: var(--framer-aspect-ratio-supported, 148px); left: 50%; top: 39px; width: 291px; } .framer-jZ4I2 .framer-9bdq3o-container, .framer-jZ4I2 .framer-zj4jhu-container { bottom: unset; height: 100%; left: calc(50.00000000000002% - 100% / 2); top: calc(49.88764044943822% - 100% / 2); } .framer-jZ4I2 .framer-1nlu3pf { height: 445px; order: 1; width: 100%; } .framer-jZ4I2 .framer-1x7xn2l { bottom: -158px; left: 50%; } .framer-jZ4I2 .framer-d6eoah { height: var(--framer-aspect-ratio-supported, 248px); } .framer-jZ4I2 .framer-16b088k-container { height: 100%; left: calc(50.00000000000002% - 100% / 2); right: unset; top: calc(50.11235955056183% - 100% / 2); width: 100%; } .framer-jZ4I2 .framer-1ntu1m9 { flex: none; height: min-content; order: 0; width: 100%; } .framer-jZ4I2 .framer-1ikwl2r { height: 445px; width: 100%; } .framer-jZ4I2 .framer-r5mavk { padding: 40px 0px 40px 0px; } .framer-jZ4I2 .framer-60xnrw { grid-template-columns: repeat(1, minmax(50px, 1fr)); height: 1192px; width: 100%; } .framer-jZ4I2 .framer-13jyj62, .framer-jZ4I2 .framer-1o1emu8 { grid-column: unset; } .framer-jZ4I2 .framer-s67rav { height: var(--framer-aspect-ratio-supported, 114px); } .framer-jZ4I2 .framer-1opq28l { bottom: 75px; height: var(--framer-aspect-ratio-supported, 54px); left: 50%; width: 308px; } .framer-jZ4I2 .framer-g49tic { flex-direction: column; padding: 20px; width: 100%; } .framer-jZ4I2 .framer-1lsatft { flex: none; gap: 60px; height: min-content; justify-content: center; width: 100%; } .framer-jZ4I2 .framer-16gs5d8 { height: min-content; padding: 40px; } .framer-jZ4I2 .framer-sjstw5 { flex: none; width: 100%; }}`,
      ],
      `framer-jZ4I2`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 4787, width: 1200 }),
    _(
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
        ...V,
        ...U,
        ...qe,
        ...Je,
        ...Ye,
        ...T(Ie),
        ...T(Ve),
        ...T(Oe),
        ...T(Te),
        ...T(ye),
        ...T(Fe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([D(F, {}, t), D(I, {}, t), D(z, {}, t), D(L, {}, t), D(R, {}, t)])
      ),
    }),
    (ot = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerOqsiEhdfU`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"iNJDNLCJg":{"layout":["fixed","auto"]},"FNPzO60Va":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `4787`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ot as __FramerMetadata__, $ as default, Ze as queryParamNames };
//# sourceMappingURL=F_0OGIB9r8tPPXVrQujWnjomDGkqMt00aI7sezxKe78.Df49q0Ym.mjs.map
