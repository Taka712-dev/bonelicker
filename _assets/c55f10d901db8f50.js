(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [70911],
  {
    /***/ 88780: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(878415);
      __web_req__(914242);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var pg = __c.pg;
        var E = __c.E;
        var u = __c.u;
        var g$b = function (a) {
            var b = { element: void 0 };
            const c = new Map();
            for (const d in b) a[d].PY.forEach((e, f) => c.set(f, e));
            return {
              PY: c,
              apply: (d) => {
                const e = new Map(),
                  f = {},
                  g = {};
                for (const h in d) {
                  const k = a[h].apply(d[h]);
                  k.Uxa.forEach((l, m) => e.set(m, l));
                  f[h] = k.data;
                  g[h] = k.nua;
                }
                return { Uxa: e, data: f, nua: g };
              },
            };
          },
          h$b = function (a) {
            return () => a;
          },
          i$b = function (a) {
            return a();
          },
          $5 = function (a, b, c) {
            return new Z5([a], b, c);
          },
          a6 = function (a, b, c, d) {
            return new Z5([a, b], c, d);
          },
          b6 = function (a, b, c, d) {
            return new j$b(a, b, c, d);
          },
          k$b = function (a, b) {
            return b(a);
          },
          c6 = function (a, b) {
            return a === b || b.map((c) => a.tsa(l$b(c)));
          },
          n$b = function (a, b) {
            return a.qua(b).map((c) => new m$b(c, (d) => d.props[b]));
          },
          l$b = function (a) {
            u(a instanceof d6);
            return a;
          },
          f6 = function (a, b) {
            if (a === b) return !0;
            switch (typeof a) {
              case "string":
              case "number":
              case "boolean":
              case "undefined":
                return !1;
              case "object":
                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                switch (a.kind) {
                  case "array":
                    return b.kind === "array" && e6(a.items, b.items);
                  case "set":
                    var c;
                    if ((c = b.kind === "set"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : e6([...a], [...b]));
                    return c;
                  case "map":
                    if ((c = b.kind === "map"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : e6(
                                [...a.keys(), ...a.values()],
                                [...b.keys(), ...b.values()]
                              ));
                    return c;
                  case "record":
                    return b.kind === "record" && o$b(a.fields, b.fields);
                  case "instance":
                    return b.kind === "instance" && a.instance === b.instance;
                  default:
                    throw new E(a);
                }
              default:
                throw new E(a);
            }
          },
          e6 = function (a, b) {
            if (a === b) return !0;
            if (a.length !== b.length) return !1;
            for (let c = 0; c < a.length; c++) if (!f6(a[c], b[c])) return !1;
            return !0;
          },
          o$b = function (a, b) {
            if (a === b) return !0;
            const c = Object.keys(a),
              d = Object.keys(b),
              e = new Set([...c, ...d]);
            if (c.length !== e.size || d.length !== e.size) return !1;
            for (const f of e) if (!f6(a[f], b[f])) return !1;
            return !0;
          },
          g6 = function (a) {
            return typeof a === "string" ? JSON.stringify(a) : String(a);
          },
          q$b = function (a, b) {
            return a.map((c) => b.map((d) => p$b[0](c, d)));
          },
          s$b = function (a, b, c) {
            return b.map((d) => r$b[a](d, c));
          },
          t$b = function (a, b) {
            return new h6(new i6(new Map(b), a.vars), a.M_);
          },
          v$b = function (a, b, c) {
            for (const [e, f] of c.M_) {
              var d = f.nb.map(([g, h]) => [g, a.types.evaluate(h)]);
              d = u$b(b, d, (g) => j6(a, g, f.body));
              b = new h6(b.vars, b.M_.define(e, d));
            }
            return j6(a, b, c.body);
          },
          j6 = function (a, b, c) {
            switch (c.kind) {
              case 1:
                return w$b(c.value);
              case 2:
                const f = c.args.map((q) => j6(a, b, q));
                c = c.name;
                return typeof c === "string"
                  ? b.M_.resolve(c).map((q) => x$b(q, f))
                  : y$b[c].map((q) => k6(q, f));
              case 3:
                const g = c.args.map((q) =>
                  q.kind !== 13
                    ? new z$b(j6(a, b, q))
                    : new A$b(j6(a, b, q.rIb))
                );
                c = c.name;
                switch (c) {
                  case 0:
                  case 1:
                    var d = g.map((q) =>
                      q.eqa(
                        (r) => r.type,
                        (r) => r.type.rN()
                      )
                    );
                    return l6
                      .union(...d)
                      .map(B$b[c])
                      .map((q) => C$b(q, g));
                  default:
                    return D$b[c].map((q) => C$b(q, g));
                }
              case 4:
                d = c.name;
                var e = c.param;
                const h = c.body,
                  k = j6(a, b, c.y9);
                c = k.type.rN();
                const l = u$b(b, [[e, c]], (q) => j6(a, q, h));
                return s$b(d, c, l.resultType).map((q) => E$b(q, k, l));
              case 5:
                const m = c.entries.map(([q, r]) => [j6(a, b, q), j6(a, b, r)]);
                c = l6.union(...m.map(([q]) => q.type));
                d = l6.union(...m.map(([, q]) => q.type));
                if (!c6(c, l6.primitive))
                  throw Error(`key type is not a primitive: ${c}`);
                return q$b(c, d).map((q) => F$b(q, m));
              case 6:
                const n = pg(c.fields, (q) => j6(a, b, q));
                c = pg(n, (q) => q.type);
                return (0, G$b[0])(c).map((q) => H$b(q, n));
              case 7:
                d = a.types.resolve(c.name);
                if (!d)
                  throw Error(`cannot instantiate unknown type: ${c.name}`);
                const p = j6(a, b, { kind: 6, fields: c.args });
                return d.emb.map((q) => k6(q, [p], { Dq: !0 }));
              case 8:
                return (d = j6(a, b, c.base)), I$b(d, c.BMb);
              case 9:
                return J$b(b, c.name);
              case 10:
                return (
                  (d = __c.wd(c.defs, (q) => j6(a, b, q))), K$b(a, b, d, c.body)
                );
              case 11:
                return (
                  (d = j6(a, b, c.test).as(l6.Hh)),
                  (e = j6(a, b, c.WBb)),
                  (c = j6(a, b, c.alternate)),
                  L$b(d, e, c)
                );
              case 12:
                return j6(a, b, c.body).computed();
              default:
                throw new E(c);
            }
          },
          w$b = function (a) {
            switch (typeof a) {
              case "string":
                return m6(l6.string, a);
              case "number":
                return m6(l6.number, a);
              case "boolean":
                return m6(l6.Hh, a);
              case "undefined":
                return m6(l6.undefined, a);
              default:
                throw new E(a);
            }
          },
          I$b = function (a, b) {
            return a.map((c) =>
              n$b(c, b).map(({ type: d, get: e }) => k6(new Z5([c], d, e), [a]))
            );
          },
          J$b = function (a, b) {
            return a.vars.resolve(b).map((c) => n6.of(c, (d) => d.resolve(b)));
          },
          K$b = function (a, b, c, d) {
            const e = __c.wd(c, (g) => g.type),
              f = __c.wd(c, (g) => g.evaluate);
            return M$b(j6(a, t$b(b, e), d), (g) => {
              const h = __c.wd(f, (k) => k(g));
              return new i6(new Map(h), g);
            });
          },
          L$b = function (a, b, c) {
            return b.map((d, e) =>
              c.map((f, g) => {
                f = l6.union(d, f);
                return n6.of(f, (h) => {
                  const k = a(h),
                    l = e(h),
                    m = g(h);
                  return () => (k() ? l() : m());
                });
              })
            );
          },
          o6 = function (a) {
            return (b) => b(a);
          },
          x$b = function ({ afa: a, resultType: b, evaluate: c }, d) {
            if (d.length !== a.length)
              throw Error(
                `expected ${a.length} arguments, but got ${d.length}`
              );
            const e = N$b(a, (f, g) => d[g].as(f));
            return n6.of(b, (f) => {
              const g = e.map(o6(f));
              return c(f)(...g);
            });
          },
          k6 = function ({ afa: a, resultType: b, apply: c }, d, e) {
            if (d.length !== a.length)
              throw Error(
                `expected ${a.length} arguments, but got ${d.length}`
              );
            const f = N$b(a, (g, h) => d[h].as(g));
            return n6.of(b, (g) => {
              g = f.map(o6(g));
              return O$b(
                (e === null || e === void 0 ? 0 : e.Dq) ? P$b(c) : c,
                g
              );
            });
          },
          C$b = function ({ gpb: a, resultType: b, apply: c }, d) {
            let e;
            const f = d.map((g) =>
              g.gma(
                (h) => h.as(a),
                (h) => h.as(e !== null && e !== void 0 ? e : (e = l6.y9(a)))
              )
            );
            return new n6(b, (g) => {
              const h = o6(g),
                k = f.map((l) => l.gma(h, h));
              return () => {
                const l = [];
                k.forEach((m) => {
                  m.eqa(
                    (n) => l.push(n()),
                    (n) => l.push(...n())
                  );
                });
                return c(l);
              };
            });
          },
          E$b = function (
            { itemType: a, M7a: b, resultType: c, reduce: d },
            e,
            f
          ) {
            const g = f.as([a], b),
              h = e.as(l6.y9(a));
            return new n6(c, (k) => {
              const l = h(k),
                m = g(k),
                n = P$b((p) => {
                  p = p.map(h$b);
                  return [p, p.map(m)];
                });
              return () => {
                const [p, q] = n(l());
                return d(p, q);
              };
            });
          },
          F$b = function (
            { keyType: a, valueType: b, resultType: c, apply: d },
            e
          ) {
            const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
            return new n6(c, (g) => {
              const h = f.map(([k, l]) => [k(g), l(g)]);
              return () => d(h.map(([k, l]) => [k(), l()]));
            });
          },
          H$b = function ({ s7a: a, resultType: b, apply: c }, d) {
            const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
            if (e.length) throw Error(`too few arguments (missing ${e})`);
            const f = Q$b(a, (g, h) => d[h].as(g));
            return new n6(b, (g) => {
              const h = pg(f, o6(g));
              return () => {
                var k = pg(h, i$b);
                return c(k);
              };
            });
          },
          m6 = function (a, b) {
            const c = h$b(b);
            return new n6(a, () => c);
          },
          M$b = function (a, b) {
            const c = a.evaluate;
            return new n6(a.type, (d) => c(b(d)));
          },
          u$b = function (a, b, c) {
            const d = b.map((f) => f[0]),
              e = b.map((f) => f[1]);
            return k$b(e, (f) =>
              c(t$b(a, new Map(b))).map(
                (g, h) =>
                  new R$b(f, g, (k) => (...l) => {
                    const m = new Map(d.map((n, p) => [n, l[p]]));
                    return h(new i6(new Map(m), k));
                  })
              )
            );
          },
          O$b = function (a, b) {
            switch (b.length) {
              case 0:
                return a;
              case 1:
                const [c] = b;
                return () => a(c());
              case 2:
                const [d, e] = b;
                return () => a(d(), e());
              default:
                return () => {
                  var f = b.map(i$b);
                  return a(...f);
                };
            }
          },
          P$b = function (a) {
            let b;
            return (...c) => {
              if (
                b &&
                b.G2a.length === c.length &&
                b.G2a.every((e, f) => p6.gh(e, c[f]))
              )
                return b.v;
              const d = a(...c);
              b = { G2a: c, v: d };
              return d;
            };
          },
          Q$b = function (a, b) {
            return pg(a, b);
          },
          N$b = function (a, b) {
            return a.map(b);
          },
          W$b = function (a) {
            const b = a.types,
              c = a.values;
            class d {
              optional() {
                const H = this.cia,
                  J = this.Qfa,
                  K = this.PDa,
                  L = b.union(this.type, b.undefined);
                return new d(
                  L,
                  (R) => (R != null ? H(R) : void 0),
                  (R, T, V) => (V != null ? J(R, T, V) : void 0),
                  (R, T, V, ba) => (V != null ? K(R, T, V, ba) : ba.delete(T))
                );
              }
              OB() {
                return new d(this.type, this.cia, this.Qfa, (H, J) => {
                  throw H.error(J, "read-only field");
                });
              }
              F6(H) {
                return H
                  ? new d(
                      this.type,
                      this.cia,
                      (J, K, L) => {
                        L = this.Qfa(J, K, L);
                        L != null && H(J, K, L);
                        return L;
                      },
                      (J, K, L, R) => {
                        L != null && H(J, K, L);
                        this.PDa(J, K, L, R);
                      }
                    )
                  : this;
              }
              Xub(H, J) {
                const K = this.cia,
                  L = this.Qfa,
                  R = this.PDa;
                return S$b(this.type, (T) => {
                  const V = () => L(H, J, T.get(J));
                  return {
                    Rfb: () => K(V()),
                    iNa: V,
                    zsb: (ba) => R(H, J, ba, T),
                  };
                });
              }
              constructor(H, J, K, L) {
                this.type = H;
                this.cia = J;
                this.Qfa = K;
                this.PDa = L;
              }
            }
            a = new d(
              b.string,
              (H) => H,
              q6("string", (H) => H.value),
              r6("string")
            );
            const e = new d(
                b.Hh,
                (H) => H,
                q6("boolean", (H) => H.value),
                r6("boolean")
              ),
              f = new d(
                b.number,
                (H) => H,
                q6("int32", (H) => H.value),
                r6("int32")
              ).F6((H) => Number.isInteger(H)),
              g = new d(
                b.number,
                (H) => H,
                q6("double", (H) => H.value),
                r6("double")
              ).F6((H) => Number.isFinite(H)),
              h = new d(
                b.instance("Fill"),
                (H) => c.instance("Fill", H),
                q6("fill", (H) => H.value),
                r6("fill")
              ),
              k = a.optional(),
              l = e.optional(),
              m = f.optional(),
              n = g.optional(),
              p = h.optional(),
              q = a.OB(),
              r = e.OB(),
              t = f.OB(),
              v = g.OB(),
              w = h.OB(),
              x = k.OB(),
              y = l.OB(),
              A = m.OB(),
              z = n.OB(),
              C = p.OB(),
              G = {
                [0]: {
                  [0]: { string: a, boolean: e, int32: f, double: g, fill: h },
                  [1]: { string: q, boolean: r, int32: t, double: v, fill: w },
                },
                [1]: {
                  [0]: { string: k, boolean: l, int32: m, double: n, fill: p },
                  [1]: { string: x, boolean: y, int32: A, double: z, fill: C },
                },
              };
            return (H, J) => {
              const K = new T$b(H),
                L = pg(J, (T) => T.key),
                R = pg(J, (T) => {
                  var V = T.cWa;
                  const ba = T.bTa;
                  switch (T.type) {
                    case "string":
                      V = G[V][ba].string.F6(U$b(T.EJ));
                      break;
                    case "boolean":
                      V = G[V][ba]["boolean"];
                      break;
                    case "double":
                      V = G[V][ba]["double"].F6(V$b(T.range));
                      break;
                    case "int32":
                      V = G[V][ba].int32.F6(V$b(T.range));
                      break;
                    case "fill":
                      V = G[V][ba].fill;
                      break;
                    default:
                      throw new E(T);
                  }
                  return V.Xub(K, T.key);
                });
              return {
                PY: new Map(Object.entries(R).map(([T, V]) => [L[T], V.type])),
                apply: (T) => {
                  const V = pg(R, (ka) => ka.eval(T)),
                    ba = pg(V, (ka) => ({ get: ka.iNa })),
                    ea = pg(V, (ka) => ({ get: ka.iNa, set: ka.zsb }));
                  return {
                    Uxa: new Map(
                      Object.entries(V).map(([ka, oa]) => [L[ka], oa.Rfb])
                    ),
                    data: Object.create(null, ba),
                    nua: Object.create(null, ea),
                  };
                },
              };
            };
          },
          q6 = function (a, b) {
            return (c, d, e) => {
              if (e == null) throw c.error(d, "not found");
              if (e.type !== a)
                throw c.error(d, `type error: expected ${a}, was ${e.type}`);
              return b(e);
            };
          },
          r6 = function (a) {
            return (b, c, d, e) => {
              if (d == null) throw b.error(a, "value is nullish");
              if (
                (a === "string" && typeof d === "string") ||
                (a === "boolean" && typeof d === "boolean") ||
                (a === "double" && typeof d === "number") ||
                (a === "int32" && typeof d === "number")
              )
                b = { type: a, value: d };
              else {
                if (a === "fill" && typeof d === "object")
                  throw b.error(a, "Write for fill is not yet supported");
                throw b.error(
                  a,
                  `type error: expected ${a}, but received ${typeof d}`
                );
              }
              e.set(c, b);
            };
          },
          V$b = function (a) {
            if (a) {
              var b = a.min,
                c = a.max;
              u(b == null || c == null || b <= c);
              return (d, e, f) => {
                if (b != null && f < b)
                  throw d.error(e, `value below min ${b}: ${f}`);
                if (c != null && f > c)
                  throw d.error(e, `value above max ${b}: ${f}`);
              };
            }
          },
          U$b = function (a) {
            if (a)
              return (b, c, d) => {
                if (!a.test(d))
                  throw b.error(c, `value does not match regex ${a}: '${d}'`);
              };
          },
          S$b = function (a, b) {
            return { type: a, eval: b };
          },
          Y$b = function () {
            return new X$b({})
              .add((a, b) => ({
                Fill: new a("Fill", { color: b.string }, (c) =>
                  __c.LO.create({ ...__c.Ru, color: c.color })
                ),
              }))
              .add((a, b) => ({
                RectElement: new a(
                  "RectElement",
                  {
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                    rotation: b.union(b.number, b.undefined),
                    fill: b.instance("Fill"),
                    X: b.union(b.array(b.number), b.undefined),
                  },
                  (c) => {
                    var d, e, f;
                    const g = __c.Pu.create({
                      ...__c.Qu,
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation:
                        (e = c.rotation) !== null && e !== void 0
                          ? e
                          : __c.Qu.rotation,
                      fill: __c.Ru,
                      X:
                        (f =
                          (d = c.X) === null || d === void 0
                            ? void 0
                            : d.items) !== null && f !== void 0
                          ? f
                          : __c.Qu.X,
                    });
                    Object.defineProperties(g, {
                      fill: { value: c.fill.instance },
                    });
                    return g;
                  }
                ),
              }));
          },
          s6 = function () {
            throw Error("ref not found");
          },
          $$b = function (a, b) {
            return class extends Z$b {
              componentDidCatch(c) {
                a.error(c);
                this.setState({ hasError: !0 });
              }
              render() {
                return this.state.hasError
                  ? t6(__c.Gx, {
                      background: "criticalLow",
                      width: "full",
                      height: "full",
                      padding: "0.25u",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      role: "alert",
                      children: t6(__c.Dx, {
                        size: "xsmall",
                        alignment: "center",
                        children: __c.O("Q6XSow"),
                      }),
                    })
                  : t6(b, { ...this.props });
              }
              constructor(...c) {
                super(...c);
                this.state = { hasError: !1 };
              }
            };
          },
          eac = function (a, b, c) {
            const d = (f) => ({ element: f.ha.dj });
            b = g$b(b);
            switch (c.type) {
              case 0:
                c = c.xD;
                if (typeof c === "object") {
                  var e = a.B1a.types;
                  e = e.y9(e.instance("RectElement"));
                  return aac(
                    a,
                    d,
                    b,
                    e,
                    c,
                    (f) => new bac(() => f().map((g) => g.instance))
                  );
                }
                return cac(d, b, c);
              case 1:
                return dac(a, d, b, c.Component);
              default:
                throw new E(c);
            }
          },
          aac = function (a, b, c, d, e, f) {
            const g = a.Sna(a.B1a, c, d).compile(e);
            return { type: 0, xD: (h) => ({ Pa: f(g.apply(b(h))) }) };
          },
          cac = function (a, b, c) {
            return { type: 0, xD: (d) => c(b.apply(a(d)).data) };
          },
          dac = function (a, b, c, d) {
            return {
              type: 1,
              Component: $$b(
                a.F,
                fac(({ model: e }) => {
                  const [f] = gac(() => c.apply(b(e)).nua);
                  return t6(d, { data: f, Ez: a.Ez });
                })
              ),
            };
          },
          iac = function (a) {
            return { PY: a.PY, apply: hac(a.apply) };
          },
          hac = function (a) {
            const b = new WeakMap();
            return (c) => {
              let d = b.get(c);
              d || ((d = a(c)), b.set(c, d));
              return d;
            };
          },
          jac = __webpack_require__(519427),
          u6 = jac.computed,
          kac = jac.observable;
        var t6 = __webpack_require__(443763).jsx;
        var v6 = __webpack_require__(875604),
          fac = v6.memo,
          Z$b = v6.PureComponent,
          gac = v6.useState;
        var Z5 = class {
            static of(a, b, c) {
              return new Z5(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.afa = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          mac = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = lac;
              this.s7a = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          w6 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.gpb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          oac = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = nac;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          j$b = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.M7a = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var m$b = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        var pac = class {},
          z$b = class extends pac {
            gma(a) {
              return new z$b(a(this.value));
            }
            eqa(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          A$b = class extends pac {
            gma(a, b) {
              return new A$b(b(this.value));
            }
            eqa(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var d6 = class {
            map(a) {
              return a(this);
            }
          },
          x6 = class extends d6 {
            tsa(a) {
              return this === a || a.gza((b) => this.d1(b));
            }
            rN() {
              throw Error(`${this} is not iterable`);
            }
            qua(a) {
              var b;
              const c =
                (b = this.propTypes) !== null && b !== void 0
                  ? b
                  : (this.propTypes = this.fda());
              if (!c) throw Error(`${this} is not navigable"`);
              if (!c.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return c[a];
            }
            fda() {
              throw Error(`${this} is not navigable`);
            }
            nqa(a) {
              a(this);
            }
            gza(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          y6 = class extends x6 {
            d1(a) {
              return a instanceof y6 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          z6 = class extends x6 {
            d1(a) {
              return a instanceof z6 && this.zD === a.zD;
            }
            toString() {
              return this.zD.name;
            }
            constructor(a) {
              super();
              this.zD = a;
            }
          },
          A6 = class extends x6 {
            d1(a) {
              return a instanceof A6 && this.zD === a.zD && c6(this.bx, a.bx);
            }
            toString() {
              return `${this.zD}<${this.bx}>`;
            }
            constructor(a, b) {
              super();
              this.zD = a;
              this.bx = b;
            }
          },
          qac = class extends A6 {
            rN() {
              return this.bx;
            }
            fda() {
              const a = this.bx;
              return {
                size: l6.number,
                empty: l6.Hh,
                get first() {
                  return l6.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          rac = class extends A6 {
            rN() {
              return this.bx;
            }
            fda() {
              const a = this.bx;
              return {
                size: l6.number,
                empty: l6.Hh,
                get first() {
                  return l6.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          sac = class extends x6 {
            d1(a) {
              return (
                a instanceof sac &&
                c6(this.key, a.key) &&
                c6(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          tac = class extends x6 {
            d1(a) {
              return a instanceof tac
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && c6(this.fields[b], c)
                  )
                : !1;
            }
            fda() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          B6 = class extends d6 {
            tsa(a) {
              return this === a || this.Og.every((b) => b.tsa(a));
            }
            rN() {
              return l6.union(...this.Og.map((a) => a.rN()));
            }
            qua(a) {
              return l6.union(...this.Og.map((b) => b.qua(a)));
            }
            nqa(a) {
              this.Og.forEach((b) => b.nqa(a));
            }
            gza(a) {
              return this.Og.some((b) => b.gza(a));
            }
            toString() {
              return this.Og.length
                ? this.Og.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.Og = a;
              this.kind = "disjunction";
              u(a.length !== 1);
            }
          },
          C6 = new B6([]),
          uac = new y6("string"),
          vac = new y6("number"),
          wac = new y6("boolean"),
          xac = new y6("undefined"),
          yac = new B6([uac, vac, wac]),
          zac = class {
            get never() {
              return C6;
            }
            get string() {
              return uac;
            }
            get number() {
              return vac;
            }
            get Hh() {
              return wac;
            }
            get undefined() {
              return xac;
            }
            get primitive() {
              return yac;
            }
            optional(a) {
              return l6.union(a, l6.undefined);
            }
            array(a) {
              return new qac(a);
            }
            set(a) {
              return new rac(a);
            }
            y9(a) {
              return new B6([new qac(a), new rac(a)]);
            }
            map(a, b) {
              return new sac(a, b);
            }
            Nc(a) {
              return new tac({ ...a });
            }
            union(...a) {
              if (a.length === 0) return C6;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) l$b(d).nqa((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return C6;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return c6(d, e) ? e : c6(e, d) ? d : new B6(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => c6(d, e)) ||
                  (c.forEach((e) => c6(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new B6([...c]);
            }
          },
          Aac = class extends zac {
            instance(a) {
              return new z6(a);
            }
          },
          l6 = new Aac(),
          Bac = class extends zac {
            instance(a) {
              return new z6(__c.D(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var Cac,
          Dac,
          D6 = Symbol("value"),
          E6 = class {
            get props() {
              var a;
              return (a = this.H6a) !== null && a !== void 0
                ? a
                : (this.H6a = this.Jla());
            }
          },
          Eac = class {
            get size() {
              return this[D6].length;
            }
            get empty() {
              return this[D6].length === 0;
            }
            get first() {
              return this[D6][0];
            }
            constructor(a) {
              this[D6] = a;
            }
          };
        Cac = Symbol.iterator;
        var Fac = class extends E6 {
            Jla() {
              return new Eac(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [Cac]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, g6).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          Gac = class {
            get size() {
              return this[D6].size;
            }
            get empty() {
              return this[D6].size === 0;
            }
            get first() {
              return this[D6][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[D6] = a;
            }
          };
        Dac = Symbol.iterator;
        var Hac = class extends E6 {
            Jla() {
              return new Gac(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [Dac]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, g6).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          Iac = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${g6(a)}]: ${g6(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          Jac = class extends E6 {
            Jla() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${g6(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          Kac = class {
            toString() {
              return `[instance ${this.zD.name}]`;
            }
            constructor(a, b) {
              this.zD = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          Lac = class {
            array(a) {
              return new Fac(a);
            }
            arrayOf(...a) {
              return new Fac(a);
            }
            set(a) {
              return new Hac(a);
            }
            map(a) {
              return new Iac(new Map(a));
            }
            Nc(a) {
              return new Jac({ ...a });
            }
          },
          Mac = class extends Lac {
            instance(a, b) {
              return new Kac(a, b);
            }
            stringify(a) {
              return g6(a);
            }
            constructor() {
              super();
              this.gh = f6;
            }
          },
          p6 = new Mac(),
          Nac = class extends Lac {
            instance(a, b) {
              a = __c.D(this.classes[a]);
              return new Kac(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var y$b = {
            [0]: $5(l6.number, l6.number, (a) => -a),
            [1]: $5(l6.string, l6.number, (a) => a.length),
            [2]: $5(l6.Hh, l6.Hh, (a) => !a),
            [3]: a6(l6.number, l6.number, l6.number, (a, b) => a + b),
            [4]: a6(l6.number, l6.number, l6.number, (a, b) => a - b),
            [5]: a6(l6.number, l6.number, l6.number, (a, b) => a * b),
            [6]: a6(l6.number, l6.number, l6.number, (a, b) => a / b),
            [7]: a6(l6.number, l6.number, l6.number, (a, b) => a % b),
            [8]: a6(l6.string, l6.string, l6.string, (a, b) => a + b),
            [9]: a6(l6.number, l6.number, l6.Hh, (a, b) => a === b),
            [10]: a6(l6.number, l6.number, l6.Hh, (a, b) => a !== b),
            [11]: a6(l6.number, l6.number, l6.Hh, (a, b) => a < b),
            [12]: a6(l6.number, l6.number, l6.Hh, (a, b) => a <= b),
            [13]: a6(l6.number, l6.number, l6.Hh, (a, b) => a > b),
            [14]: a6(l6.number, l6.number, l6.Hh, (a, b) => a >= b),
            [15]: a6(l6.Hh, l6.Hh, l6.Hh, (a, b) => a && b),
            [16]: a6(l6.Hh, l6.Hh, l6.Hh, (a, b) => a || b),
          },
          D$b = {
            [2]: new w6(l6.number, l6.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new w6(l6.number, l6.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new w6(l6.number, l6.number, (a) => Math.max(...a)),
            [5]: new w6(l6.number, l6.number, (a) => Math.min(...a)),
            [6]: new w6(l6.string, l6.string, (a) => a.join("")),
          },
          Oac = (a) => p6.array(a),
          Pac = (a) => p6.set(a),
          B$b = {
            [0]: (a) => new w6(a, l6.array(a), Oac),
            [1]: (a) => new w6(a, l6.set(a), Pac),
          },
          nac = (a) => p6.map(a),
          p$b = { [0]: (a, b) => new oac(a, b, l6.map(a, b)) },
          lac = (a) => p6.Nc(a),
          G$b = { [0]: (a) => new mac(a, l6.Nc(a)) },
          Qac = (a, b) => p6.array(b.map((c) => c())),
          Rac = (a, b) => p6.array(b.flatMap((c) => c().items)),
          Sac = (a, b) => p6.array(a.filter((c, d) => b[d]()).map((c) => c())),
          Tac = (a, b) => b.some((c) => c()),
          Uac = (a, b) => b.every((c) => c()),
          Vac = (a, b) => {
            var c;
            return (c = a.find((d, e) => b[e]())) === null || c === void 0
              ? void 0
              : c();
          },
          r$b = {
            [0]: (a, b) => b.map((c) => b6(a, c, l6.array(c), Qac)),
            [1]: (a, b) =>
              b.rN().map((c) => b6(a, l6.array(c), l6.array(c), Rac)),
            [2]: (a) => b6(a, l6.Hh, l6.array(a), Sac),
            [3]: (a) => b6(a, l6.Hh, l6.Hh, Tac),
            [4]: (a) => b6(a, l6.Hh, l6.Hh, Uac),
            [5]: (a) => b6(a, l6.Hh, l6.optional(a), Vac),
          };
        var i6 = class {
          define(a, b) {
            return new i6(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var Xac = (a, b, c) => {
            const d = h6.create(b.PY),
              e = new Wac(a);
            return {
              compile: (f) => {
                const g = v$b(e, d, f).as(c);
                return {
                  apply: (h) => {
                    h = new i6(new Map(b.apply(h).Uxa));
                    return g(h);
                  },
                };
              },
            };
          },
          h6 = class {
            static create(a) {
              return new h6(new i6(new Map(a)), new i6(new Map()));
            }
            constructor(a = new i6(new Map()), b = new i6(new Map())) {
              this.vars = a;
              this.M_ = b;
            }
          },
          Wac = class {
            constructor(a) {
              this.types = a;
            }
          },
          n6 = class {
            static of(a, b) {
              return new n6(a, b);
            }
            as(a) {
              if (!c6(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new n6(this.type, (b) => {
                const c = u6(a(b), { equals: p6.gh });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          R$b = class {
            as(a, b) {
              const c = this.afa,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!c6(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!c6(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.afa = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var X$b = class {
            add(a) {
              a = a(Yac, this.types);
              return new X$b({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.Hh;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new E(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.ZGa));
                    case "set":
                      return b.set(this.evaluate(a.ZGa));
                    default:
                      throw new E(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.ZGa);
                      a = this.evaluate(a.wAb);
                      if (!c6(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new E(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.Nc(pg(a.args, (c) => this.evaluate(c)));
                default:
                  throw new E(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new Bac(this.classes);
              this.values = new Nac(this.classes);
            }
          },
          Yac = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.emb = new Z5([l6.Nc(b)], l6.instance(this), (d) =>
                p6.instance(this, c(d.fields))
              );
            }
          };
        var T$b = class {
          error(a, b) {
            return Error(
              `widget '${this.Zwb}': schema error on key '${a}': ${b}`
            );
          }
          constructor(a) {
            this.Zwb = a;
          }
        };
        var Zac = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          Bs() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            s6();
          },
          cc() {
            s6();
          },
          Ke() {
            s6();
          },
          VA() {
            s6();
          },
          has() {
            return !1;
          },
          Ft() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var $ac;
        $ac = Symbol.iterator;
        var bac = class {
          static A(a) {
            __c.P(a, { De: u6, Yx: u6 });
          }
          get De() {
            return this.x7a().map((a) => {
              let b = this.qOa.get(a);
              b == null && ((b = `${this.Sgb++}`), this.qOa.set(a, b));
              return { id: b, ref: a };
            });
          }
          get Yx() {
            const a = new Map();
            this.De.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          Pl(a) {
            return __c.D(this.Yx.get(a), "ref not found");
          }
          get empty() {
            return !this.De.length;
          }
          count() {
            return this.De.length;
          }
          toArray() {
            return this.De.map((a) => a.ref);
          }
          Bs() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get uaa() {
            const a = this.De[0];
            return a && a.ref;
          }
          get Pca() {
            const a = this.De[this.De.length - 1];
            return a && a.ref;
          }
          first(a) {
            if (!a) return this.uaa;
            const b = this.De.find((c) => a(c.ref));
            return b && b.ref;
          }
          last(a) {
            if (!a) return this.Pca;
            const b = this.De;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.De;
            for (a = this.Pl(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          cc(a, b) {
            const c = this.De;
            for (a = this.Pl(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          Ke(a, b) {
            a = this.Yx.get(a);
            b = this.Yx.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          VA(a) {
            return this.De[this.Pl(a)].id;
          }
          has(a) {
            return this.Yx.has(a);
          }
          Ft(a) {
            return new __c.$M(this, a);
          }
          map(a) {
            return this.De.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.De.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.De.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.De.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.De.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.De.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.De.every((b) => a(b.ref, b.id));
          }
          [$ac]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.x7a = a;
            this.Sgb = (bac.A(this), 0);
            this.qOa = new WeakMap();
          }
        };
        var abc = new Set(),
          bbc = { xD: () => ({ Pa: Zac }) },
          cbc = class {
            static A(a) {
              __c.P(a, { fga: kac.shallow });
            }
            Ohb(a, b, { element: c, exports: d }) {
              const e = __c.D(this.zrb.sga.get(a));
              u(e.element === b.element);
              u(!this.fga.has(a));
              b = { element: eac(this, b, c), exports: d };
              this.fga.set(a, b);
              abc.has(a) || (__c.NP.set(a, bbc), abc.add(a));
              return b;
            }
            Ldb(a) {
              var b;
              return (b = this.fga.get(a)) === null || b === void 0
                ? void 0
                : b.element;
            }
            constructor(a, b, c, d, e) {
              this.zrb = a;
              this.B1a = b;
              this.Sna = c;
              this.F = d;
              this.Ez = e;
              this.fga = (cbc.A(this), new Map());
            }
          };
        var dbc = class {
          static A(a) {
            __c.P(a, { sga: kac.shallow });
          }
          Phb(a, b) {
            u(!this.sga.has(a));
            b = {
              document: iac(this.NJa(a, b.document)),
              element: iac(this.NJa(a, b.element)),
            };
            this.sga.set(a, b);
            return b;
          }
          constructor(a) {
            this.NJa = a;
            this.sga = (dbc.A(this), new Map());
          }
        };
        __c.tSa = {
          Uhb: function (a) {
            var b = a.F;
            a = a.$wb;
            var c = { fo: Y$b(), Sna: Xac };
            const { fo: d, Sna: e } = c;
            c = new dbc(W$b(d));
            b = new cbc(c, d, e, b, a);
            return { IDa: c, GQb: c, W6: b, V6: b };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/c55f10d901db8f50.js.map
