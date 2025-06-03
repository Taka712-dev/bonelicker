(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4143],
  {
    /***/ 994944: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(564722);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var E = __c.E;
        var P = __c.P;
        var g4b = function (a, b = "medium") {
            if (a !== null && a !== void 0 && a.length) {
              var c = window.devicePixelRatio || 1,
                d = (typeof b === "number" ? b : f4b(b)) * c;
              return [...a].sort((e, f) => {
                e = e.width;
                f = f.width;
                return e > d && f < d
                  ? -1
                  : e < d && f > d
                  ? 1
                  : Math.abs(e - d) - Math.abs(f - d);
              })[0].url;
            }
          },
          m4b = function (a, b) {
            class c {
              static A(d) {
                P(d, { Ge: v4, kla: v4 });
              }
              get Ge() {
                switch (this.kla) {
                  case "date":
                    return new h4b(this.wn, b.language || "en-AU");
                  case "select":
                    return new i4b(this.wn);
                  case "mention":
                    return new j4b(this.wn);
                  case "embed":
                    return new k4b(this.wn);
                  case "plain_number":
                  case "currency":
                  case "percentage":
                  case void 0:
                    break;
                  default:
                    throw new E(this.kla);
                }
              }
              get kla() {
                var d;
                return (d = this.wn.Po) === null || d === void 0
                  ? void 0
                  : d.type;
              }
              constructor(d) {
                this.context = d;
                this.wn = (c.A(this), void 0);
                this.wn = __c.D(a.Cv(d.sheet, d.na, d.column));
              }
            }
            return l4b((d) => new c(d).Ge);
          },
          o4b = function () {
            const a = w4(() => new Map(), []);
            return {
              Efb: (b) => {
                if (a.has(b)) return __c.D(a.get(b));
                const c = n4b();
                a.set(b, c);
                return c;
              },
            };
          },
          p4b = function (a, b) {
            return w4(() => {
              const c = new Map();
              return (d) => {
                if (c.has(d)) return __c.D(c.get(d));
                const e = a(d);
                c.set(d, e);
                return e;
              };
            }, b);
          },
          w4b = function ({
            children: a,
            keyFrame: b,
            q_a: c,
            ariaLive: d,
            dQa: e = !1,
            j7a: f,
            Gna: g,
            Zbb: h,
            XDb: k,
            iJa: l,
            kLa: m,
            VDb: n,
            uvb: p,
          }) {
            const { Efb: q } = o4b(),
              { Eeb: r, Dqb: t } = q4b(b, a),
              v = p4b(
                (w) => () => {
                  (e === !1 || (typeof e === "function" && !e(w))) && t(w);
                },
                [t, e]
              );
            return x4("div", {
              className: y4(g, "_9GxJfQ", {
                KwB0XQ: l === "hidden",
                WV1Mmw: c === "fill-height",
                _2uSJxw: c === "flex-grow",
              }),
              children: x4("div", {
                className: y4("m2VaAA", h),
                "aria-live": d,
                style: k,
                role: "region",
                children: [
                  ...r.map(({ key: w, element: x }) =>
                    x4(
                      r4b,
                      {
                        in: w === b,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(w),
                        onExited: v(w),
                        children: (y) =>
                          x4(s4b.Provider, {
                            value: y,
                            children: x4("div", {
                              className: y4("KxXR9g", n, {
                                KwB0XQ: m === "hidden",
                              }),
                              ref: q(w),
                              "aria-hidden":
                                y === t4b || y === u4b || y === v4b,
                              children: w === b ? a : x,
                            }),
                          }),
                      },
                      w
                    )
                  ),
                  r.every((w) => w.key !== b) &&
                    x4(
                      r4b,
                      {
                        in: !1,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(b),
                        onExited: e ? void 0 : v(b),
                        children: (w) =>
                          x4(s4b.Provider, {
                            value: w,
                            children: x4("div", {
                              className: y4("KxXR9g", n),
                              ref: q(b),
                              "aria-hidden":
                                w === t4b || w === u4b || w === v4b,
                              children: a,
                            }),
                          }),
                      },
                      b
                    ),
                ],
              }),
            });
          },
          q4b = function (a, b) {
            const [c, d] = x4b(() => [{ key: a, element: b }]);
            y4b(() => {
              d((f) =>
                f.every((g) => g.key !== a)
                  ? f.concat({ key: a, element: b })
                  : f.map((g) => (g.key === a ? { key: a, element: b } : g))
              );
            }, [a, b]);
            const e = z4((f) => {
              d((g) => g.filter((h) => h.key !== f));
            }, []);
            return { Eeb: c, Dqb: e };
          },
          z4b = function (a) {
            switch (a.type) {
              case "mention":
                return "bCAtqw";
              case "embed":
                return "BTcT3w";
              case "date":
                return "McKQgg";
              case "select":
                return "V2E5nQ";
              default:
                throw new E(a);
            }
          },
          D4b = function (a, b) {
            switch (a.type) {
              case "mention":
                return x4(A4b, {
                  Jq: a.user ? b.Q_(a.user) : void 0,
                  text: a.text,
                  backgroundColor: a.user ? b.Ueb(a.user).background : void 0,
                });
              case "embed":
                const c = !a.url;
                a = b.oLa.XZ.get(a.url);
                return x4(B4b, { icon: a, Qib: c });
              case "date":
                return a.text ? void 0 : x4(C4b, {});
              case "select":
                break;
              default:
                throw new E(a);
            }
          },
          F4b = function (a, b) {
            switch (a.type) {
              case "mention":
              case "embed":
              case "date":
                break;
              case "select":
                return x4(E4b, { selected: !!b.PXa });
              default:
                throw new E(a);
            }
          },
          A4 = function (a) {
            return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey)
              ? !0
              : a instanceof KeyboardEvent
              ? a.key === "Meta" || ["91", "224"].includes(a.code)
              : !1;
          },
          G4b = function (a) {
            __c.u(!0, "chunkLength must be positive");
            const b = [];
            for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
            return b;
          },
          H4b = function (a, b, c) {
            if (c) {
              var d = g4b(c.images, "medium"),
                e = g4b(c.images, "xxxlarge");
              if (d && e) {
                c = new Image();
                c.src = d;
                var f = new Image();
                f.src = e;
                f.onload = B4(() => a.D6.set(b, e));
                f.onerror = B4(() => a.D6.set(b, void 0));
                !f.complete && c.complete ? a.D6.set(b, d) : (c.src = "");
              }
            } else a.D6.set(b, void 0);
          },
          J4b = function (a, { url: b, id: c, extension: d }) {
            if (!a.promises.has(b)) {
              const e = new Promise((f) => {
                a.Dg
                  ? a.Dg.VGb(new I4b({ id: c, extension: d }))
                      .then(({ document: g }) => {
                        const h = g.yf.content.title;
                        h
                          ? (C4(() => a.E0a.set(b, { status: 1, title: h })),
                            f(h))
                          : f(void 0);
                      })
                      .catch(() => {
                        C4(() => a.E0a.set(b, { status: 2 }));
                        f(void 0);
                      })
                  : f(void 0);
              });
              a.promises.set(b, e);
            }
            return a.promises.get(b);
          },
          f4b = (a) =>
            a.endsWith("rem") ? parseFloat(a) * 10 : __c.Hx * __c.mPb[a],
          D4 = __webpack_require__(519427),
          B4 = D4.action,
          K4b = D4.comparer,
          v4 = D4.computed,
          L4b = D4.observable,
          E4 = D4.ObservableMap,
          C4 = D4.runInAction;
        var l4b = __webpack_require__(635872).Om;
        var F4 = __webpack_require__(875604),
          M4b = F4.createContext,
          n4b = F4.createRef,
          N4b = F4.lazy,
          G4 = F4.memo,
          z4 = F4.useCallback,
          y4b = F4.useEffect,
          O4b = F4.useLayoutEffect,
          w4 = F4.useMemo,
          x4b = F4.useState;
        var P4b = __webpack_require__(443763),
          x4 = P4b.jsx,
          Q4b = P4b.jsxs;
        var R4b = __webpack_require__,
          S4b = R4b(993864),
          y4 = R4b.n_x(S4b)();
        var r4b = __webpack_require__(460876).Z;
        var H4 = __webpack_require__(223826),
          v4b = H4.Wj,
          t4b = H4.Ix,
          u4b = H4.$r;
        var I4 = __webpack_require__(446474).Pi;
        var T4b = class {
            static A(a) {
              P(a, { text: v4, user: v4, brand: v4 });
            }
            get text() {
              return this.Ge.text;
            }
            get user() {
              return this.Ge.user;
            }
            get brand() {
              return this.Ge.brand;
            }
            constructor(a) {
              this.Ge = a;
              this.type = (T4b.A(this), "mention");
            }
          },
          U4b = class {
            static A(a) {
              P(a, { text: v4, url: v4 });
            }
            get text() {
              return this.Ge.text;
            }
            get url() {
              return this.Ge.url;
            }
            constructor(a) {
              this.Ge = a;
              this.type = (U4b.A(this), "embed");
            }
          },
          V4b = class {
            static A(a) {
              P(a, { text: v4, language: v4, style: v4, date: v4 });
            }
            get text() {
              return this.Ge.text;
            }
            get language() {
              return this.Ge.language;
            }
            get style() {
              return this.Ge.style;
            }
            get date() {
              return this.Ge.date;
            }
            constructor(a) {
              this.Ge = a;
              this.type = (V4b.A(this), "date");
            }
          },
          W4b = class {
            static A(a) {
              P(a, { text: v4, options: v4, hf: v4, OR: v4 });
            }
            get text() {
              return this.Ge.text;
            }
            get options() {
              return this.Ge.options.map((a) => a);
            }
            get hf() {
              return this.Ge.hf;
            }
            get OR() {
              var a;
              return (a = this.Ge.options.first((b) => b.id === this.Ge.hf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            constructor(a) {
              this.Ge = a;
              this.type = (W4b.A(this), "select");
            }
          },
          X4b = l4b((a) => {
            switch (a.type) {
              case "mention":
                return new T4b(a);
              case "embed":
                return new U4b(a);
              case "date":
                return new V4b(a);
              case "select":
                return new W4b(a);
              default:
                throw new E(a);
            }
          });
        var h4b = class {
            static A(a) {
              P(a, { style: v4, date: v4, text: v4 });
            }
            get style() {
              return 2;
            }
            get date() {
              var a;
              (a = this.uo.pk.type === 2 ? this.uo.pk.date : void 0) ||
                ((a = new Date()),
                (a = __c.Yy(a)),
                (a = {
                  year: a.getFullYear(),
                  month: a.getMonth() + 1,
                  day: a.getDate(),
                  Mgb: a.getHours(),
                  Llb: a.getMinutes(),
                }));
              return a;
            }
            get text() {
              return this.uo.Wz;
            }
            constructor(a, b) {
              this.uo = a;
              this.language = b;
              this.type = (h4b.A(this), "date");
            }
          },
          Y4b = class {
            get label() {
              return this.option.label;
            }
            get fill() {
              return this.option.fill;
            }
            constructor(a, b) {
              this.option = a;
              this.id = b;
            }
          },
          i4b = class {
            static A(a) {
              P(a, {
                options: v4,
                hf: v4,
                OR: v4,
                text: v4,
                MMa: v4({ equals: K4b.shallow }),
              });
            }
            get options() {
              return this.MMa.map((a, b) => new Y4b(a, b));
            }
            get hf() {
              var a;
              return (a = this.options.find((b) => b.label === this.text)) ===
                null || a === void 0
                ? void 0
                : a.id;
            }
            get OR() {
              var a;
              return (a = this.options.find((b) => b.id === this.hf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            get text() {
              return this.uo.Wz;
            }
            get MMa() {
              var a, b;
              __c.B(
                ((a = this.uo.Po) === null || a === void 0
                  ? void 0
                  : a.type) === "select"
              );
              return (b = this.uo.Po) === null || b === void 0
                ? void 0
                : b.options;
            }
            constructor(a) {
              this.uo = a;
              this.type = (i4b.A(this), "select");
            }
          },
          j4b = class {
            static A(a) {
              P(a, { rM: v4 });
            }
            get text() {
              return this.rM ? this.rM.text : "";
            }
            get user() {
              return this.rM ? this.rM.user : "";
            }
            get brand() {
              return this.rM ? this.rM.brand : "";
            }
            get rM() {
              if (this.uo.pk.type !== 9)
                return (
                  __c.B(this.uo.pk.type === 7),
                  this.uo.pk ? this.uo.pk.value[0] : void 0
                );
            }
            constructor(a) {
              this.uo = a;
              this.type = (j4b.A(this), "mention");
            }
          },
          k4b = class {
            static A(a) {
              P(a, { u_: v4 });
            }
            get text() {
              return this.u_ ? this.u_.embed.text : "";
            }
            get url() {
              return this.u_ ? this.u_.embed.url : "";
            }
            get u_() {
              if (this.uo.pk.type !== 9)
                return (
                  __c.B(this.uo.pk.type === 8),
                  this.uo.pk ? this.uo.pk.value[0] : void 0
                );
            }
            constructor(a) {
              this.uo = a;
              this.type = (k4b.A(this), "embed");
            }
          };
        var Z4b = class {
          Upa(a) {
            this.Yla.Upa(a);
          }
          J4(a, b) {
            this.Yla.J4(a, b);
          }
          Q_(a) {
            return this.Yla.Q_(a);
          }
          Rpa(a) {
            this.oLa.Rpa(a);
          }
          constructor(a, b, c, d) {
            this.Yla = a;
            this.oLa = b;
            this.Qa = c;
            this.zt = d;
            this.$Ca = new __c.WAb();
            this.Ueb = (e) => __c.TLa(this.$Ca, e);
          }
        };
        var s4b = M4b(void 0);
        var $4b = Number.parseInt("300ms", 10),
          a5b = {
            enter: "_QukmA",
            enterActive: "_5_06KQ",
            enterDone: void 0,
            exitActive: "a952jg",
            exitDone: "orZOEA",
          },
          b5b = G4(function ({
            Dr: a = !1,
            children: b,
            keyFrame: c,
            q_a: d,
            iJa: e = "hidden",
            kLa: f = "hidden",
            ariaLive: g,
            dQa: h,
            zHb: k = "none",
          }) {
            a = __c.Db() && !a;
            return w4b({
              children: b,
              keyFrame: c,
              q_a: d,
              ariaLive: g,
              iJa: e,
              kLa: f,
              dQa: h,
              j7a: a ? $4b : 0,
              Zbb: y4({
                _1niDPQ: a,
                Q6kGbg: k === "none",
                _9j7ODw: k === "layout",
              }),
              uvb: a5b,
            });
          });
        var c5b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
        var d5b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
        var e5b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
        var f5b =
          '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
        var g5b = G4((a) => {
            const b = a.link,
              c = a.className,
              d = a.ariaLabel,
              e = a.OR,
              f = a.gbb,
              g = a.D5a,
              h = a.d6a,
              k = a.measureRef,
              l = a.onPointerDown,
              m = a.onMouseEnter,
              n = a.onMouseLeave,
              p = y4({ EdewNw: !!g, _6ZpPrw: !!h, pzXyUA: a.text.length > 0 });
            a = a.text.length > 0 ? a.text : "\ufeff";
            return Q4b("span", {
              className: y4(c, "FedJ0Q"),
              "aria-label": d || a,
              children: [
                x4("span", {
                  className: y4("_2Lr6pQ", p),
                  children: x4("span", { className: "Z_WvzQ", children: a }),
                }),
                Q4b("span", {
                  className: y4("XemTdQ", p),
                  ref: k,
                  style: e ? { color: e } : void 0,
                  onPointerDown: l,
                  onMouseEnter: m,
                  onMouseLeave: n,
                  children: [
                    g,
                    x4("span", {
                      className: y4("U_QH_A", { C9XL8g: !f }),
                      children: b
                        ? x4("a", { className: "vgTP5Q", ...b, children: a })
                        : a,
                    }),
                    h,
                  ],
                }),
              ],
            });
          }),
          A4b = G4((a) => {
            const b = a.backgroundColor,
              c = a.Jq;
            a = a.text;
            const d = { width: "0.9em", height: "0.9em" };
            return x4(b5b, {
              keyFrame: c ? "show" : "hide",
              children: a
                ? x4(__c.qPb, {
                    name: a,
                    style: d,
                    backgroundColor: b,
                    Jq: c,
                    borderColor: c ? void 0 : b,
                  })
                : x4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: f5b },
                  }),
            });
          }),
          B4b = G4((a) => {
            const b = a.icon;
            a = a.Qib;
            return x4(b5b, {
              keyFrame: b ? "favicon" : "placeholder",
              children: b
                ? x4("span", {
                    className: "_tFJqA",
                    children: x4("img", { src: b, className: "qpbYdw" }),
                  })
                : x4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: a ? e5b : d5b },
                  }),
            });
          }),
          C4b = G4(() =>
            x4("span", {
              "aria-hidden": "true",
              className: "_tFJqA",
              dangerouslySetInnerHTML: { __html: c5b },
            })
          ),
          E4b = G4(({ selected: a }) =>
            x4("div", {
              className: y4("whph4A", { zgzjww: a }),
              children: x4(__c.NK, {
                size: "medium",
                style: { width: "0.9em", height: "0.9em" },
                className: "_tFJqA",
              }),
            })
          ),
          h5b = I4((a) => {
            const {
              Ge: b,
              PXa: c,
              vwa: d,
              mode: e = "viewable",
              measureRef: f,
              lp: g,
              onPointerDown: h,
            } = a;
            a = b.text || "\u00a0".repeat(16);
            const k = b.type === "embed" ? d.Qa(b.url) : void 0,
              [l, m] = x4b(!1),
              n = z4((t) => m(A4(t)), [m]),
              p = z4((t) => m(!A4(t)), [m]),
              q = z4(
                (t) => {
                  m(A4(t.nativeEvent));
                  document.addEventListener("keydown", n);
                  document.addEventListener("keyup", p);
                },
                [m, n, p]
              ),
              r = z4(() => {
                m(!1);
                document.removeEventListener("keydown", n);
                document.removeEventListener("keyup", p);
              }, [m, n, p]);
            y4b(() => {
              C4(() => {
                switch (b.type) {
                  case "mention":
                    b.user && d.Upa(b.user);
                    break;
                  case "embed":
                    d.Rpa(b.url);
                }
              });
            }, [b, d]);
            O4b(() => {
              g === null || g === void 0 || g();
            }, [b.type, a, g]);
            return x4(g5b, {
              text: a,
              link: e === "viewable" || l ? k : void 0,
              gbb: b.text.length === 0,
              ariaLabel: b.text || "",
              className: z4b(b),
              OR: b.OR,
              D5a: D4b(b, d),
              d6a: F4b(b, { PXa: c }),
              measureRef: f,
              onPointerDown: h,
              onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
              onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0,
            });
          });
        var i5b = __c.M(() => ({
          fIb: __c.XL(11),
          mode: __c.F("A?", 1, "BY_USER_IDS"),
          owb: __c.WL(1),
        }));
        var j5b = class {
            static A(a) {
              P(a, { TP: L4b.shallow, bMa: B4 });
            }
            Q_(a) {
              return this.nHa.Q_(a);
            }
            Upa(a) {
              this.ZCa.has(a) || this.TP.has(a) || (this.TP.add(a), this.Iab());
            }
            J4(a, b) {
              this.ZCa.has(a) ||
                (this.ZCa.set(a, b), this.TP.delete(a), H4b(this.nHa, a, b));
            }
            async bMa() {
              if (this.TP.size !== 0) {
                var a = [...this.TP.values()];
                this.TP.clear();
                if (this.oHa) {
                  var b = await this.oHa;
                  await Promise.all(
                    G4b(a).map(async (c) => {
                      const d = new i5b({ owb: c }),
                        { UAb: e } = await b.vGb(d);
                      C4(() => c.forEach((f) => this.J4(f, e.get(f))));
                    })
                  );
                } else a.forEach((c) => this.J4(c));
              }
            }
            constructor(a, b) {
              this.oHa = a;
              this.ZCa = (j5b.A(this), new E4());
              this.TP = new Set();
              this.nHa = new k5b();
              this.Iab = __c.Xc(() => this.bMa(), 200);
              C4(() => {
                b === null ||
                  b === void 0 ||
                  b.forEach((c, d) => this.J4(d, c));
              });
            }
          },
          k5b = class {
            Q_(a) {
              return this.D6.get(a);
            }
            constructor() {
              this.D6 = new E4();
            }
          };
        var I4b = __c.M(() => ({
          id: __c.X("id", 1),
          extension: __c.Y("extension", 3),
          IXa: __c.SL("revision", 5),
          version: __c.SL("version", 2),
          OHb: __c.SL("imagesetsLimit", 6),
        }));
        var l5b = class {
          static A(a) {
            P(a, { Cdb: B4 });
          }
          async Cdb(a) {
            if (this.Dg) {
              var b = new URL(a).pathname;
              {
                const c =
                  /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                c == null || c.length < 2
                  ? (b = void 0)
                  : ((b = c[2]),
                    new Set(["edit", "remix", "view", "watch"]).has(c[2]) &&
                      (b = void 0),
                    (b = { id: c[1], extension: b }));
              }
              if (b) return await J4b(this, { url: a, ...b });
            }
          }
          constructor(a) {
            this.Dg = a;
            this.E0a = (l5b.A(this), new E4());
            this.promises = new Map();
          }
        };
        var m5b = class {
          static A(a) {
            P(a, { XZ: L4b.shallow });
          }
          async Rpa(a) {
            const b = new Image();
            let c;
            try {
              var d;
              const e = await ((d = this.zt) === null || d === void 0
                ? void 0
                : d.a8(a));
              c = e === null || e === void 0 ? void 0 : e.Bdb;
            } catch (e) {}
            c
              ? ((b.src = c),
                (b.onload = B4(() => this.XZ.set(a, c))),
                (b.onerror = B4(() => this.XZ.set(a, void 0))))
              : C4(() => this.XZ.set(a, void 0));
          }
          constructor(a) {
            this.zt = a;
            this.XZ = (m5b.A(this), new Map());
          }
        };
        __c.CIa = {
          Mhb: function (a) {
            const b = a.document,
              c = a.Dg,
              d = a.Qa,
              e = a.zt;
            var f = a.t8;
            const g = a.hd,
              h = a.zf,
              k = a.dz,
              l = a.MW;
            a = a.ZHb;
            f = new j5b(a === null || a === void 0 ? void 0 : a(), f);
            a = new m5b(e);
            new l5b(c);
            const m = new Z4b(f, a, d, e),
              n = m4b(l, b);
            g.Vp.xka = I4(({ item: q, measureRef: r }) => {
              const t = w4(() => X4b(q.Ge), [q.Ge]);
              return x4(h5b, { Ge: t, vwa: m, measureRef: r });
            });
            const p = I4(({ context: q, lp: r }) => {
              const t = w4(() => __c.D(n(q.container)), [q]);
              O4b(r, [r, q.container.column.width]);
              return x4(h5b, { Ge: t, vwa: m, lp: r });
            });
            k.wFa = ({ context: q, lp: r }) => ({
              type: "react",
              node: x4(p, { context: q, lp: r }),
            });
            h &&
              (h.Wja = N4b(() =>
                __webpack_require__
                  .me(365475)
                  .then(() => __c.e4b)
                  .then(({ M$a: q }) => ({ default: q() }))
              ));
            return { vwa: m };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/2632f494ae3f1e00.js.map
