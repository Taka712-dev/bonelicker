(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [86783],
  {
    /***/ 910906: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var fbc = function (a) {
            return ebc(function (b) {
              return F6("div", {
                className: "gcYy_A",
                children: F6(__c.CH, {
                  k_: "both",
                  children: ({ width: c, height: d }) =>
                    F6(a.ai, {
                      fill: b.fill,
                      Ab: c,
                      Vb: d,
                      Le: void 0,
                      animation: void 0,
                      eC: !1,
                      Y: void 0,
                      fa: void 0,
                    }),
                }),
              });
            });
          },
          gbc = function (a) {
            a.WK && (a.WK(), (a.WK = null));
            const b = a.props.Ebb;
            b.forEach((c) => {
              window.addEventListener(c, a.MFa);
            });
            a.WK = () => {
              b.forEach((c) => {
                window.removeEventListener(c, a.MFa);
              });
            };
          },
          mbc = function (a) {
            return hbc(function (b) {
              const [{ store: c, ya: d }] = ibc(() => {
                const e = new jbc(),
                  f = new kbc(e);
                return { store: e, ya: f };
              });
              return F6(lbc, {
                W2: d.reset,
                children: F6(__c.bub, {
                  Whb: d,
                  Xhb: c,
                  LPa: a.yv.contains(b.url),
                  children: ({ Ao: e }) =>
                    F6(__c.pB, {
                      url: b.url,
                      store: a.yv,
                      fo: a.zt,
                      Nx: a.Nx,
                      Ym: a.Ym,
                      Ao: e,
                      yB: b.yB,
                      yU: b.yU,
                    }),
                }),
              });
            });
          },
          nbc = function (a) {
            return ebc(function (b) {
              return F6("div", {
                className: "oUJNhQ",
                children: F6(a.pe, {
                  text: b.text,
                  animation: void 0,
                  vd: void 0,
                  ob: void 0,
                  Qa: void 0,
                  Ef: [],
                  writingMode: 1,
                }),
              });
            });
          },
          F6 = __webpack_require__(443763).jsx;
        var G6 = __webpack_require__(875604),
          obc = G6.Component,
          ebc = G6.memo,
          ibc = G6.useState;
        var pbc = __webpack_require__(519427),
          H6 = pbc.action,
          qbc = pbc.observable;
        var hbc = __webpack_require__(446474).Pi;
        var rbc = class extends obc {
          render() {
            const {
              children: a,
              component: b = "div",
              jqb: c,
              mea: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.y6a;
                return f;
              }, {}));
            return F6(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.mea && gbc(this);
          }
          componentDidUpdate() {
            this.props.mea && gbc(this);
          }
          componentWillUnmount() {
            this.WK && (this.WK(), (this.WK = null));
          }
          constructor(...a) {
            super(...a);
            this.Rka = this.WK = null;
            this.y6a = (b) => {
              this.Rka = b.nativeEvent;
            };
            this.MFa = (b) => {
              const c = this.props.mea,
                d = this.Rka === b;
              c && !d && c(b);
              this.Rka = null;
            };
          }
        };
        var lbc = (a) =>
          F6(rbc, {
            jqb: ["onMouseDown", "onTouchStart"],
            Ebb: ["mousedown", "touchstart"],
            mea: a.W2,
            children: a.children,
          });
        var jbc = class {
            static A(a) {
              __c.P(a, { Ao: qbc.ref });
            }
            constructor() {
              this.Ao = (jbc.A(this), !0);
            }
          },
          kbc = class {
            static A(a) {
              __c.P(a, {
                onDoubleClick: H6.bound,
                onTouchEnd: H6.bound,
                reset: H6.bound,
              });
            }
            onDoubleClick() {
              this.store.Ao = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.xP
                  ? (window.clearTimeout(this.xP),
                    (this.xP = void 0),
                    (this.store.Ao = !1))
                  : (this.xP = window.setTimeout(
                      () => (this.xP = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Ao = !0;
            }
            HR() {
              this.xP && window.clearTimeout(this.xP);
            }
            constructor(a) {
              this.store = a;
              this.xP = (kbc.A(this), void 0);
            }
          };
        __c.sSa = {
          Thb: function (a) {
            const b = mbc({
                Nx: (e, f) =>
                  a.F.error(e, {
                    te: "widget: ",
                    extra: new Map(Object.entries(f)),
                  }),
                Ym: a.Ym,
                yv: a.yv,
                zt: a.zt,
              }),
              c = nbc({ pe: a.pe }),
              d = fbc({ ai: a.kf });
            return { a5a: b, fFa: c, bX: d };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/9a093a20b5a599d4.js.map
