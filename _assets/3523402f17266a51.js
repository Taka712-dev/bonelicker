(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [49222],
  {
    /***/ 78999: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(841629);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var E = __c.E;
        var B = __c.B;
        var I7b = function (a, b, c, d) {
            c = new H7b(c, d);
            B(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            B(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${
                a === null || a === void 0 ? void 0 : a.type
              }`
            );
            c.Wia(a, b);
          },
          K7b = function (a) {
            return {
              ...__c.Thb,
              ...u5,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.Qia.width,
                height: a.Qia.height,
              },
              lb: a.lb.map(J7b),
            };
          },
          L7b = function (a) {
            switch (a.oC) {
              case 0:
                var b = __c.pl
                  .sc()
                  .attrs({
                    "font-size": a.fontSize,
                    leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                    "text-align": a.textAlign || "start",
                    "font-weight": a.fontWeight,
                    "font-family": a.fontFamily,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on",
                    direction: a.direction,
                  });
                a.color && b.eg("color", a.color);
                b = b
                  .Qb(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.bK,
                  ...v5,
                  ...u5,
                  Ha: (c = a.Ha) !== null && c !== void 0 ? c : 0,
                  text: b,
                  Mg: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.bK, ...v5, ...u5, text: b, Mg: 2 }
                );
              default:
                throw new E(a);
            }
          },
          z5 = function ({ content: a, fill: b, border: c, X: d }) {
            b = { ...__c.Ehb, fill: w5(b), border: x5(c), X: y5(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: K7b(a) };
              case "text":
                return { ...b, element: L7b(a) };
              case "layout":
                return { ...b, element: M7b(a) };
              default:
                throw new E(a);
            }
          },
          M7b = function ({
            cells: a,
            border: b,
            fill: c,
            X: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.Fhb,
              ...v5,
              ...u5,
              J: v5.width,
              W: v5.height,
              fill: w5(c),
              border: x5(b),
              direction: 1,
              X: y5(d),
              cells: new Map(a.map((k) => [k.id, z5(k)])),
              behavior: {
                rules: [
                  {
                    Ng: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g !== null && g !== void 0 ? g : 0,
                      rowGap: h !== null && h !== void 0 ? h : 0,
                      hh: N7b(a),
                    },
                  },
                ],
              },
              Ve: void 0,
            };
          },
          N7b = function (a) {
            return new Map(a.map((b) => [b.id, O7b(b)]));
          },
          O7b = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.uEa,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.OQ,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          x5 = function (a) {
            var b;
            const c =
              (b = a === null || a === void 0 ? void 0 : a.color) !== null &&
              b !== void 0
                ? b
                : "#000000";
            var d;
            return {
              ...__c.nD,
              all: a
                ? {
                    ...__c.DQ,
                    weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                    color: c,
                    Jf: !0,
                  }
                : void 0,
            };
          },
          y5 = function (a) {
            return {
              ...__c.NQ,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          J7b = function (a) {
            return {
              ...__c.Uhb,
              ...a,
              fill: w5(a.fill),
              stroke: P7b(a.stroke),
            };
          },
          P7b = function (a) {
            return a ? { ...__c.DQ, color: a.color, weight: a.weight } : void 0;
          },
          w5 = function (a) {
            var b;
            const c = {
              ...__c.Ru,
              Ha:
                (b = a === null || a === void 0 ? void 0 : a.Ha) !== null &&
                b !== void 0
                  ? b
                  : 0,
            };
            switch (a === null || a === void 0 ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, ab: a.ab };
              case void 0:
                return c;
              default:
                throw new E(a);
            }
          },
          V7b = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            Q7b(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                R7b(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, z5(f));
                  g = !0;
                });
                g ||
                  (A5(e.fill, f.fill), S7b(e.border, f.border), T7b(e.X, f.X));
              },
              (e) => z5(e)
            );
            U7b(a.behavior, b, c);
            A5(a.fill, b.fill);
            T7b(a.X, b.X);
            S7b(a.border, b.border);
            var d;
            a.Ha = (d = b.Ha) !== null && d !== void 0 ? d : 0;
          },
          U7b = function (a, b, c) {
            B5(
              a.rules,
              [b],
              (d) => {
                W7b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                W7b(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                var f;
                d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                Q7b(
                  d.grid.hh,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    typeof k === "number" && g.padding.all !== k
                      ? (g.padding.all = k)
                      : typeof k !== "number" &&
                        ((g.padding.pa =
                          k === null || k === void 0 ? void 0 : k.pa),
                        (g.padding.Fa =
                          k === null || k === void 0 ? void 0 : k.Fa),
                        (g.padding.ra =
                          k === null || k === void 0 ? void 0 : k.ra),
                        (g.padding.La =
                          k === null || k === void 0 ? void 0 : k.La));
                    g.alignSelf = p;
                  },
                  (g) => O7b(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  Ng: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                    hh: N7b(d.cells),
                  },
                };
              }
            );
          },
          X7b = function (a, b) {
            B5(
              a.lb,
              b.lb,
              (e, f) => {
                e.d = f.d;
                A5(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(P7b(f.stroke));
              },
              (e) => J7b(e)
            );
            const { viewBox: c, width: d } = K7b(b);
            a.width = d;
            __c.Qt(a.viewBox).equals(__c.Qt(c)) || (a.viewBox = c);
          },
          R7b = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? X7b(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.pl.domain.Ob(__c.pl.ja(a.text), L7b(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? V7b(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          Q7b = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          B5 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          A5 = function (a, b) {
            switch (b === null || b === void 0 ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.ab.set(void 0);
                var c;
                a.Ha = (c = b.Ha) !== null && c !== void 0 ? c : 0;
                break;
              case "gradient":
                if (a.ab.ref && __c.l8a.domain.Ob(a.ab.ref, b.ab)) break;
                a.color = void 0;
                a.ab.set(b.ab);
                var d;
                a.Ha = (d = b.Ha) !== null && d !== void 0 ? d : 0;
                break;
              default:
                (a.color = void 0), a.ab.set(void 0);
            }
          },
          T7b = function (a, b) {
            b = y5(b);
            a.all = b.all;
            a.fD = b.fD;
            a.dD = b.dD;
            a.eD = b.eD;
            a.cD = b.cD;
          },
          S7b = function (a, b) {
            b = x5(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b ? __c.oD.domain.Ob(__c.oD.ja(c), b) : !c && !b));
            c && a.all.set(b);
          },
          W7b = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          Z7b = function (a, b, c, d) {
            let e = a.mXa.get(b);
            if (e) return e;
            e = {
              Ax: new Y7b(c.pw, b, d, c.Xra),
              SGa: void 0,
              TQa: void 0,
              TSa: __c.xV.mode,
            };
            a.mXa.set(b, e);
            return e;
          },
          a8b = function (a, b, c, d, e) {
            var f, g;
            e = Z7b(a, c, b, e);
            const h = e.Ax,
              k = e.TQa,
              l = e.SGa,
              m = e.TSa;
            c = __c.MP.ja(c);
            const n =
              ((f = (g = a.Gz).hra) === null || f === void 0
                ? void 0
                : f.call(g, d)) || __c.xV;
            (h.Oj === k && $7b.structural(c, l) && n.mode === m) ||
              ((e.SGa = c),
              (e.TQa = h.Oj),
              (e.TSa = n.mode),
              (b = b.render(h, n)),
              a.Plb.update(d, b),
              I7b(
                d,
                b,
                (p, q) => a.YP.nsa.set(p, q),
                (p, q, r) => a.YP.refs.set(p, { ref: q, key: r })
              ));
          },
          d8b = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.Cmb());
            c.push(
              b8b(
                () => {
                  a: {
                    var e = new c8b();
                    for (const f of b)
                      if ((e.cQ(f), e.bqa)) {
                        e = e.bqa;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.Zb.isLoaded(e) || a.jta.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) B(f.type === "layout"), a.Ek.Tfa(f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          e8b = function (a, b) {
            return {
              xD: ({ dj: c }) => {
                var d;
                const { Ax: e } = Z7b(a.renderer, c, b, a.d2),
                  f = __c.OP.create([]),
                  g = [];
                g.push(d8b(a.heb, f));
                g.push(
                  b8b(
                    () => {
                      var k, l;
                      return [
                        (k = (l = a.Gz).hra) === null || k === void 0
                          ? void 0
                          : k.call(l, f),
                        __c.MP.ja(c),
                        e.Oj,
                      ];
                    },
                    () => {
                      a8b(a.renderer, b, c, f, a.d2);
                    },
                    { fireImmediately: !0, equals: $7b.structural }
                  )
                );
                const h =
                  (d = b.Pua) === null || d === void 0
                    ? void 0
                    : d.call(b, { Ax: e });
                h && g.push(h);
                return {
                  Pa: f,
                  eu: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          C5 = __webpack_require__(519427),
          $7b = C5.comparer,
          f8b = C5.computed,
          D5 = C5.observable,
          b8b = C5.reaction,
          g8b = C5.runInAction;
        var h8b = class {
          static A(a) {
            __c.P(a, { pob: D5.ref, wfb: D5.ref });
          }
          constructor() {
            this.hra = (h8b.A(this), void 0);
          }
        };
        var i8b = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          Y7b = class {
            static A(a) {
              __c.P(a, { Je: f8b });
            }
            get UQa() {
              var a = this.d2,
                b = this.dj,
                c = this.Xra;
              let d = a.sources.get(b);
              d || ((d = D5.box(c)), a.sources.set(b, d));
              return d;
            }
            get Oj() {
              return this.UQa.get();
            }
            get Je() {
              return this.pw.Ju({ type: "dict", value: this.dj });
            }
            $l(a) {
              this.UQa.set(
                a instanceof Function
                  ? { ...this.Oj, ...a() }
                  : { ...this.Oj, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.pw = a;
              this.dj = b;
              this.d2 = c;
              this.Xra = d;
              Y7b.A(this);
            }
          };
        var H7b = class {
          T6(a, b) {
            this.aXa(a, b);
            b.ref && this.qxa(a, b.ref, b.key);
          }
          fQ(a, b) {
            b.ref && this.qxa(a.text, b.ref, b.key);
          }
          CDa(a, b) {
            switch (b.content.type) {
              case "shape":
                B(a.element.type === "shape");
                this.T6(a.element, b.content);
                break;
              case "text":
                B(a.element.type === "text");
                this.fQ(a.element, b.content);
                break;
              case "layout":
                B(a.element.type === "layout");
                this.Wia(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          Wia(a, b) {
            this.aXa(a, b);
            b.ref && this.qxa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                B(!!d && !!a),
                this.CDa(d, a);
          }
          constructor(a, b) {
            this.aXa = a;
            this.qxa = b;
          }
        };
        var u5 = { locked: !0, $j: { aZ: !1, dW: !1 }, Rh: !0 },
          v5 = { top: 0, left: 0, width: 1, height: 1 };
        var j8b = class {
          constructor(a) {
            this.Ek = a;
            this.update = (b, c) => {
              B5(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      V7b(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...M7b(d),
                        ...u5,
                        width: d.minWidth,
                        height: d.minHeight,
                        J: d.minWidth,
                        W: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                B(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.J = c.minWidth),
                  (d.W = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  this.Ek.Tfa(d);
            };
          }
        };
        var k8b = class {
          constructor(a, b, c) {
            this.Plb = a;
            this.YP = b;
            this.Gz = c;
            this.mXa = new WeakMap();
          }
        };
        var l8b = class {
            static A(a) {
              __c.P(a, { jta: D5.shallow });
            }
            constructor(a, b) {
              this.Zb = a;
              this.Ek = b;
              this.jta = (l8b.A(this), new Set());
              this.mqa = new Set();
              this.Cmb = () => {
                this.Iaa ||
                  (this.Iaa = __c.Nia(this.Zb).subscribe((d) => {
                    g8b(() => {
                      this.jta.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.mqa.add(c);
                return () => {
                  this.mqa.delete(c);
                  this.mqa.size <= 0 &&
                    this.Iaa &&
                    (this.Iaa.unsubscribe(), (this.Iaa = void 0));
                };
              };
            }
          },
          c8b = class extends __c.MB {
            cQ(a, b) {
              this.bqa || super.cQ(a, b);
            }
            fQ(a) {
              this.bqa =
                (a = a.text
                  .Ux("font-family")
                  ["font-family"].values()
                  .next().value) && __c.mr(a).id;
            }
          };
        var m8b = !1,
          n8b = class {
            register(a, b) {
              this.rD.has(a) ||
                (this.rD.set(a, b),
                m8b || (__c.NP.set(a, e8b(this, b)), (m8b = !0)));
            }
            get(a) {
              return this.rD.get(a);
            }
            constructor(a, b, c, d, e) {
              this.renderer = a;
              this.d2 = b;
              this.Gz = c;
              this.Zb = d;
              this.Ek = e;
              this.rD = new Map();
              this.heb = new l8b(this.Zb, this.Ek);
            }
          };
        var o8b = class {
            constructor() {
              this.nsa = new __c.jF();
              this.refs = new __c.jF();
            }
          },
          p8b = class {
            getContext(a) {
              return this.YP.refs.get(a);
            }
            CM(a) {
              return this.YP.nsa.get(a);
            }
            constructor(a, b, c) {
              this.YP = a;
              this.d2 = b;
              this.renderer = c;
            }
          };
        __c.pSa = {
          Vhb: function (a) {
            const b = new h8b(),
              c = new o8b(),
              d = new k8b(new j8b(a.Ek), c, b),
              e = new i8b();
            a = new n8b(d, e, b, a.Zb, a.Ek);
            return { Gz: b, FQb: new p8b(c, e, d), W6: a, YP: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/3523402f17266a51.js.map
