(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [26489],
  {
    /***/ 564722: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var aPb = function (a) {
            var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
            try {
              const c = __c.us(a),
                d = c instanceof __c.vs ? c.Jp() : c;
              return __c.ir(b, (e) => {
                e = __c.us(e);
                e = e instanceof __c.vs ? __c.PG(e, d) : e;
                return Math.abs(__c.Ks(e, d));
              });
            } catch (c) {
              if (
                c instanceof Error &&
                c.message === `unrecognized color: ${b[0]}`
              )
                return b[0];
              throw c;
            }
          },
          bPb = function (a) {
            return a
              .trim()
              .split(/\s+/, 2)
              .map((b) => __c.Nr(b)[0])
              .join("");
          },
          ePb = function (a = "") {
            a = cPb(a);
            a = Math.floor(a() * dPb.length);
            return dPb[a];
          },
          fPb = __webpack_require__(875604),
          gPb = fPb.memo,
          hPb = fPb.useId;
        var cPb = __webpack_require__(503216);
        var iPb = __webpack_require__(443763),
          tZ = iPb.jsx,
          jPb = iPb.jsxs;
        var kPb = __webpack_require__,
          lPb = kPb(993864),
          uZ = kPb.n_x(lPb)();
        __c.mPb = {
          xxsmall: 2,
          xsmall: 3,
          small: 4,
          medium: 5,
          large: 6,
          xlarge: 8,
          xxlarge: 10,
          xxxlarge: 20,
        };
        var dPb = [
          "rgb(0, 126, 182)",
          "rgb(248, 72, 86)",
          "rgb(251, 190, 40)",
          "rgb(68, 133, 25)",
          "rgb(125, 42, 232)",
        ].map((a) => {
          try {
            return __c.ws(__c.ps(a));
          } catch (b) {
            return "#8e8e8e";
          }
        });
        var nPb = gPb((a) => {
          const {
            name: b,
            borderColor: c,
            backgroundColor: d,
            pR: e,
            role: f,
            ariaLabel: g,
            className: h,
            style: k,
            shape: l = "circle",
            ...m
          } = a;
          if (d) {
            a = __c.us(d);
            var n = a instanceof __c.vs ? __c.xs(a) : __c.ws(a);
          } else n = e ? ePb(e) : "#8e8e8e";
          var p = hPb();
          switch (l) {
            case "circle":
              a = tZ("defs", {
                children: tZ("clipPath", {
                  id: p,
                  children: tZ("circle", {
                    id: `${p}-path`,
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                  }),
                }),
              });
              break;
            case "square":
              a = tZ("defs", {
                children: tZ("clipPath", {
                  id: p,
                  children: tZ("rect", {
                    id: `${p}-path`,
                    width: "100%",
                    height: "100%",
                  }),
                }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          switch (l) {
            case "circle":
              p = tZ("circle", {
                cx: "50%",
                cy: "50%",
                fill: n,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${p})`,
                stroke: c,
                className: uZ("yCT70Q", { _2LVP_g: c }),
              });
              break;
            case "square":
              p = tZ("rect", {
                width: "100%",
                height: "100%",
                fill: n,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${p})`,
                stroke: c,
                className: uZ("cUFFRA", { _2LVP_g: c }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          n = aPb(n);
          return tZ("span", {
            role: f,
            "aria-label": g,
            className: uZ("VaW8_A", { cUFFRA: l === "square" }),
            style: { "--pDK9Gw": n },
            ...m,
            children: jPb("svg", {
              className: h,
              style: k,
              children: [
                a,
                p,
                tZ("text", {
                  x: "50%",
                  y: "50%",
                  "aria-hidden": "true",
                  textAnchor: "middle",
                  fill: n,
                  fontWeight: "500",
                  fontSize: "50%",
                  dominantBaseline: "central",
                  letterSpacing: "0.01rem",
                  dy: "-0.04em",
                  children: bPb(b).toUpperCase(),
                }),
              ],
            }),
          });
        });
        var oPb =
          __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
        var pPb = ({
          borderColor: a,
          OVa: b,
          ariaLabel: c,
          className: d,
          style: e,
          role: f,
          ...g
        }) =>
          tZ("span", {
            className: uZ(d, { JwH6AA: a, QJpRHw: !a }),
            style: {
              backgroundImage: `url(${b})`,
              borderColor: a && `${a}`,
              ...e,
            },
            role: f,
            "aria-label": f === "img" ? c : void 0,
            ...g,
          });
        __c.qPb = ({
          name: a,
          u7a: b,
          ariaLabel: c,
          pR: d,
          backgroundColor: e,
          borderColor: f,
          Jq: g,
          className: h,
          style: k,
          shape: l = "circle",
          ...m
        }) => {
          h = uZ("n8XGZg", "f4qJng fs-hide", h, { P3N3Pw: l === "square" });
          b = b || "presentation";
          return g
            ? tZ(pPb, {
                className: h,
                style: k,
                borderColor: f,
                OVa: g,
                ariaLabel: c,
                role: b,
                ...m,
              })
            : a
            ? tZ(nPb, {
                className: h,
                style: k,
                borderColor: f,
                name: a,
                shape: l,
                pR: d,
                backgroundColor: e,
                role: b,
                ariaLabel: c,
                ...m,
              })
            : tZ(pPb, {
                className: h,
                style: k,
                borderColor: f,
                OVa: oPb,
                ariaLabel: c,
                role: b,
                ...m,
              });
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/d6c2f63b2b379c00.js.map
