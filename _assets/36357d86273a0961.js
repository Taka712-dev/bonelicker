(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [35024],
  {
    /***/ 738083: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var TG = __c.TG;
        var Sc = __c.Sc;
        var P = __c.P;
        var Qt = __c.Qt;
        var O = __c.O;
        var Ew = __c.Ew;
        var st = __c.st;
        var D = __c.D;
        var E = __c.E;
        var K4 = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.MR(b.reference.di);
                a = a.sV(b.reference.ri);
                return c != null && a != null;
              case 1:
                return a.MR(b.reference.di) != null;
              case 2:
                return a.sV(b.reference.ri) != null;
              case 3:
                return !1;
              default:
                throw new E(b.reference);
            }
          },
          J5b = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.ba.length > 0) return !1;
                a = a.fF(c.zY.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.dD(new __c.gD(), a.nH).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return K4(b, d);
                        case 1:
                          return K4(b, d.start) && K4(b, d.end);
                        default:
                          throw new E(d);
                      }
                    }).length > 0;
              default:
                throw new E(c);
            }
          },
          K5b = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.na;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.Tb === c : g.span.Xc === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      k.boundary === "start"
                        ? c === null || c === void 0
                          ? void 0
                          : c.pa
                        : c === null || c === void 0
                        ? void 0
                        : c.Fa))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: D(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.Cpa),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.SXa),
                      (h = h.na === k.na && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.mc === c.mc &&
                    g.mc === 0
                      ? (g.Cpa = f)
                      : e.push({
                          SXa: k,
                          Etb: l,
                          Cpa: f,
                          color: c.color,
                          weight: c.weight,
                          mc: c.mc,
                        });
                  }
              }
            return e;
          },
          L5b = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.na,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.Nb === h : d.span.Hc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      l.boundary === "start"
                        ? d === null || d === void 0
                          ? void 0
                          : d.ra
                        : d === null || d === void 0
                        ? void 0
                        : d.La) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { na: g, boundary: "start" }
                      : { na: D(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.IIa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.Gpa),
                      (k = k.na === m.na && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.mc === d.mc &&
                    h.mc === 0
                      ? (h.Gpa = g)
                      : f.push({
                          IIa: l,
                          Ptb: m,
                          Gpa: g,
                          color: d.color,
                          weight: d.weight,
                          mc: d.mc,
                        });
                  }
              }
            return f;
          },
          M5b = function (a, b, c, d, e) {
            const f = a.KZa.z$a(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                v = f.get(r) || 0;
              return t <= v ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.cc(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.cc(d[0].na)) &&
              e.push({ na: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].na)) &&
              e.push({ na: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.cc(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.na : void 0;
                k = l ? b.layout.rows.cc(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  q.boundary === "end"
                    ? l === null || l === void 0
                      ? void 0
                      : l.La
                    : m === null || m === void 0
                    ? void 0
                    : m.ra;
                m =
                  r.boundary === "end"
                    ? n === null || n === void 0
                      ? void 0
                      : n.Fa
                    : m === null || m === void 0
                    ? void 0
                    : m.pa;
                n =
                  q.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.La
                    : n === null || n === void 0
                    ? void 0
                    : n.ra;
                l =
                  r.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Fa
                    : l === null || l === void 0
                    ? void 0
                    : l.pa;
                p = __c.DFa({ pa: n, Fa: k, ra: l, La: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: v, width: w } =
                  (t === null || t === void 0 ? void 0 : t.mc) === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (l === null || l === void 0 ? void 0 : l.weight) || 0,
                          (m === null || m === void 0 ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (n === null || n === void 0 ? void 0 : n.weight) || 0,
                          (k === null || k === void 0 ? void 0 : k.weight) || 0
                        ),
                      };
                g.set(L4(q, r), __c.GD(p, v / 2, w / 2));
              }
            }
            return g;
          },
          N5b = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = K5b(b, c, d, e);
            f = L5b(b, c, d, e, f);
            const h = M5b(a, b, c, d, e),
              k = a.Hfb(b),
              l = a.$eb(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.Etb,
                  t = n.Cpa,
                  v = n.SXa;
                const w = n.color,
                  x = n.weight;
                n = n.mc;
                const y = m ? -1 : 1,
                  A =
                    (p = h.get(L4(r, v))) === null || p === void 0
                      ? void 0
                      : p.La;
                p =
                  (q = h.get(L4(t, v))) === null || q === void 0
                    ? void 0
                    : q.ra;
                if (A != null && p != null) {
                  q = D(k.get(v.na));
                  var z = D(l.get(r.column));
                  r = D(l.get(t.column));
                  v = v.boundary === "start" ? q.start : q.end;
                  q = z.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: w,
                    weight: x,
                    mc: n,
                    p1: new st(q + A * y, v),
                    p2: new st(t + p * y, v),
                    ...__c.LD((t - q) * y, n * x, A),
                  };
                }
              })
              .filter(__c.Gb);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.IIa,
                    t = n.Ptb,
                    v = n.Gpa;
                  const w = n.color,
                    x = n.weight;
                  n = n.mc;
                  const y =
                    (p = h.get(L4(r, t))) === null || p === void 0
                      ? void 0
                      : p.Fa;
                  p =
                    (q = h.get(L4(r, v))) === null || q === void 0
                      ? void 0
                      : q.pa;
                  if (y != null && p != null) {
                    q = D(l.get(r.column));
                    var A = D(k.get(t.na));
                    t = D(k.get(v.na));
                    r = r.boundary === "start" ? q.start : q.end;
                    q = A.start;
                    v = v.boundary === "start" ? t.start : t.end;
                    return {
                      color: w,
                      weight: x,
                      mc: n,
                      p1: new st(r, q + y),
                      p2: new st(r, v + p),
                      ...__c.LD(v - q, n * x, y),
                    };
                  }
                })
                .filter(__c.Gb),
              ...a,
            ];
          },
          O5b = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.xd(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.xd(d, (e) => `${e.jk}_${e.kk}`);
              for (const [, e] of a) {
                const { kk: f, jk: g } = e[0];
                a = __c.xd(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, jk: g, kk: f });
              }
            }
            return b;
          },
          P5b = function (a, b, c, d) {
            var e = __c.zyb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { na: k, boundary: "start" },
                      { na: k, boundary: "end" },
                    ]
                  : [{ na: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.KZa.crb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = N5b(e, a, h, f, g, d);
            return O5b(c);
          },
          M4 = function () {
            const [a] = (0, __c.yb)(() => Ew());
            return a;
          },
          Q5b = function (a) {
            switch (a) {
              case 2:
                return O("ibdecg");
              case 7:
                return O("446quA");
              case 5:
                return O("j1fbqg");
              case 1:
                return O("O5i4AQ");
              case 6:
                return O("C0VHsg");
              case 4:
                return O("9ND0kg");
              case -1:
                return O("RWqnLA");
              case 9:
                return O("nQR/7w");
              case -2:
                return O("P23rtA");
              case 3:
                return O("+IXmVg");
              default:
                throw new E(a);
            }
          },
          R5b = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          S5b = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.Cyb)(a) / 2
                  : -(0, __c.Ayb)(a) / 2,
              c = -(0, __c.Byb)(a) / 2,
              d = a.width + (0, __c.Ayb)(a) / 2 + (0, __c.Cyb)(a) / 2;
            a = a.height + (0, __c.Byb)(a) / 2 + (0, __c.Dyb)(a) / 2;
            return Qt({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          T5b = function (a) {
            return (b) => ({ type: "react", node: (0, __c.N)(a, { ...b }) });
          },
          V5b = function (a) {
            var b;
            const c = a.dz;
            var d = a.content;
            const e = a.context;
            a = a.lp;
            __c.B(
              (d === null || d === void 0
                ? void 0
                : (b = d.fg) === null || b === void 0
                ? void 0
                : b.type) === "formula"
            );
            b = d.pk;
            const f = { type: "dom", render: (h) => (h.innerText = "") };
            switch (b.type) {
              case 9:
                d = f;
                break;
              case 6:
                var g;
                d =
                  (g = c.vka) === null || g === void 0
                    ? void 0
                    : g.call(c, {
                        content: __c.Ke(__c.Nab, {
                          ...__c.Ghb,
                          value: b.value,
                        }),
                        context: e,
                        lp: a,
                      });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                d = U5b(c, e, d.Wz, d.pk.type);
                break;
              case 0:
                d = {
                  type: "react",
                  node: N4(__c.BR, {
                    label: Q5b(b.error),
                    children: N4(__c.Gx, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: N4(__c.GIb, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new E(b);
            }
            return d !== null && d !== void 0 ? d : f;
          },
          U5b = function (a, b, c, d) {
            var e;
            return (e = a.yka) === null || e === void 0
              ? void 0
              : e.call(a, { context: b, value: c, valueType: d });
          },
          Y5b = function (a) {
            const b = a.dz,
              c = a.kf,
              d = a.Bub,
              e = a.Qa;
            b.yka = (f) => __c.NMa({ ...f, Qa: e });
            b.vFa = (f) => V5b({ ...f, dz: b });
            b.vka = T5b(W5b({ kf: c, BQ: void 0 }));
            b.xFa = X5b(d, e);
            b.yFa = T5b((f) => N4(O4, { ...f, Qa: e }));
          },
          Z5b = function ({
            label: a,
            Ua: b,
            width: c,
            height: d,
            scale: e,
            RIa: f,
          }) {
            return N4("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: P4(__c.Dx, {
                className: Q4("ivlMMQ", R4(f)),
                size: "small",
                alignment: "center",
                children: [b && N4(b, { size: "small" }), a],
              }),
            });
          },
          R4 = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          a6b = function ({ xd: a, gOa: b, scale: c, Uo: d, Vo: e, u3a: f }) {
            const g = S4(() => {
                const m = d === null || d === void 0 ? void 0 : d.get();
                if (m != null && m.length !== 0) return new __c.vD(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return N4(__c.Ex, {
              cq: "light",
              light: "light",
              et: "light",
              dark: "light",
              children: (m) =>
                N4("div", {
                  className: Q4("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: N4("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: Q4("N7J3UA", l),
                    ref: g === null || g === void 0 ? void 0 : g.dm,
                    children: N4(__c.FR, {
                      className: Q4("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: O("ruWN9A"),
                      children: N4($5b, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          c6b = function () {
            const a = new b6b(),
              b = new __c.gS(),
              c = T4((f) => {
                const {
                    scale: g = 1,
                    bOa: h,
                    size: k = "small",
                    u3a: l = !0,
                  } = f,
                  m = U4((n) => a.Vo({ scale: n, size: k, bua: h }), [k, h]);
                return N4(a6b, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  xd: f.sheet.direction === "rtl",
                  gOa: f.selection != null && a.Yib(f.sheet, f.selection),
                  Vo: m,
                  u3a: l,
                });
              }),
              d = T4((f) => {
                const {
                    scale: g = 1,
                    bOa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Irb: n,
                  } = f,
                  p = U4((w) => a.Vo({ scale: w, size: k, bua: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = U4((w) => m != null && a.hya(m).has(w), [m]),
                  t = U4((w) => m != null && a.Igb(l, m).has(w), [l, m]),
                  v = U4(
                    (w) => {
                      const x =
                        n != null &&
                        l.layout.cols.Ke(w, n.Nb) >= 0 &&
                        l.layout.cols.Ke(w, n.Hc) <= 0;
                      return r(w)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(w)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return N4(V4, { ...f, ld: g, Bd: q, Vo: p, eE: v, RE: b });
              }),
              e = T4((f) => {
                const {
                    scale: g = 1,
                    bOa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Irb: n,
                  } = f,
                  p = U4((w) => a.Vo({ scale: w, size: k, bua: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = U4((w) => m != null && a.jya(m).has(w), [m]),
                  t = U4((w) => m != null && a.Jgb(l, m).has(w), [l, m]),
                  v = U4(
                    (w) => {
                      const x =
                        n != null &&
                        l.layout.rows.Ke(w, n.Tb) >= 0 &&
                        l.layout.rows.Ke(w, n.Xc) <= 0;
                      return r(w)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(w)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return N4(W4, { ...f, ld: q, Bd: g, Vo: p, eE: v, RE: b });
              });
            return { Y3a: c, X3a: d, Z3a: e };
          },
          d6b = function (a) {
            const b = a.Op,
              c = () => null;
            return __c.Ow((d) => N4(X4, { ...d, Op: b, Eh: c }));
          },
          e6b = function ({ sheet: a, Y: b, range: c, Gd: d }) {
            Y4(
              () =>
                Z4(() => {
                  if (d.current != null) {
                    var e,
                      f =
                        (e = b === null || b === void 0 ? void 0 : b.get()) !==
                          null && e !== void 0
                          ? e
                          : 1;
                    e = a.direction === "rtl";
                    e = c ? a.ra(c.Nb) * f * (e ? 1 : -1) : 0;
                    var g = c ? -a.pa(c.Tb) * f : 0;
                    d.current.style.transform = `translate(${e}px, ${g}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          h6b = function ({ onScroll: a }) {
            const b = new f6b(a);
            return {
              XB: b,
              bka: T4((c) =>
                N4(g6b, { sheet: c.sheet, XB: b, children: c.children })
              ),
            };
          },
          k6b = function (a) {
            const b = a.Op,
              c = a.pe,
              d = a.MZa,
              e = ({ children: k }) => k,
              { XB: f, bka: g } = h6b({ onScroll: a.onScroll });
            class h extends i6b {
              get UK() {
                const k = this.props.fa.uv;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new E(k);
                }
              }
              componentDidMount() {
                d.uZa(this.props.item, {
                  wb: this.props.wb,
                  fa: this.props.fa,
                });
              }
              componentWillUnmount() {
                d.n9a(this.props.item, {
                  wb: this.props.wb,
                  fa: this.props.fa,
                });
              }
              render() {
                d.uZa(this.props.item, {
                  wb: this.props.wb,
                  fa: this.props.fa,
                });
                return N4(j6b, {
                  ...this.props,
                  Y: this.Y,
                  Op: b,
                  UK: this.UK,
                  Eh: this.Eh,
                  MZa: d,
                  XB: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.Y = $4(() => {
                  const l = this.props.item;
                  var m = this.props.fa,
                    n = m.uv;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return m;
                    case "print":
                      n = d.Lfb(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.VD(l, n.wb, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new E(n);
                  }
                });
                this.Eh = T4((l) =>
                  N4("div", {
                    className: "wKvivQ",
                    children: N4(__c.VMa, { ...this.props, ...l, pe: c }),
                  })
                );
              }
            }
            return { hka: h, XB: f };
          },
          l6b = function (a, b) {
            if (
              b != null &&
              b.Nb != null &&
              b.Tb != null &&
              b.Hc != null &&
              b.Xc != null
            ) {
              var c = a.ra(b.Nb),
                d = a.pa(b.Tb),
                e = a.ra(b.Hc) + b.Hc.width - c;
              a = a.pa(b.Xc) + b.Xc.height - d;
              return Qt({ top: d, left: c, width: e, height: a });
            }
          },
          n6b = function (a) {
            const b = a.Op,
              c = () => null;
            return (d) => N4(m6b, { ...d, Op: b, Eh: c });
          },
          r6b = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { fIa: b, lv: b, Ja: {}, wn: {} },
              d = a5(
                () => a.lz.style || c,
                (h) => {
                  var k;
                  Object.assign(a.a9.style, h.fIa);
                  Object.assign(a.qL.style, h.lv);
                  Object.assign(a.mD.style, h.Ja);
                  Object.assign(a.sD.style, h.wn);
                  h =
                    h === null || h === void 0
                      ? void 0
                      : (k = h.Ja) === null || k === void 0
                      ? void 0
                      : k.textDecoration;
                  a.mD.classList.toggle("OQx3PQ", h === "underline");
                  a.mD.classList.toggle("_99ezUA", h === "line-through");
                  a.mD.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: o6b }
              ),
              e = a5(
                () => a.Vsa,
                (h) => {
                  a.mD.classList.toggle("_84KvRA", !h);
                  a.a9.classList.toggle("_84KvRA", !h);
                  a.qL.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = a5(
                () => a.renderer,
                (h) => {
                  a.N9 &&
                  (h === null || h === void 0 ? void 0 : h.type) !== "react"
                    ? ((a.N9 = void 0), a.L3.remove())
                    : (a.sD.innerHTML = "");
                  switch (h === null || h === void 0 ? void 0 : h.type) {
                    case "react":
                      a.N9 = p6b(h.node, a.L3);
                      a.sD.appendChild(a.L3);
                      break;
                    case "dom":
                      h.render(a.sD);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(h);
                  }
                  a.Xua();
                },
                { fireImmediately: !0 }
              ),
              g = q6b
                ? a5(
                    () => a.tra,
                    (h) => {
                      a.mD.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g === null || g === void 0 || g();
            };
          },
          o6b = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          t6b = function (a) {
            const b = a.ez,
              c = a.dC,
              d = a.DC,
              e = a.Q2a,
              f = a.Tx,
              g = new s6b(c),
              h = (k, l) => (f ? J5b(f, k, l) : !1);
            return (k) =>
              N4(b5, {
                ...k,
                jN: h,
                DC: d,
                dC: c,
                ez: b,
                qsa: g,
                Q2a: e === null || e === void 0 ? void 0 : e.get(),
              });
          },
          L4 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
          W5b =
            ({ kf: a, BQ: b }) =>
            (c) =>
              (0, __c.N)(__c.Fyb, { ...c, kf: a, BQ: b }),
          c5 = __webpack_require__(443763),
          u6b = c5.Fragment,
          N4 = c5.jsx,
          P4 = c5.jsxs;
        var v6b = __webpack_require__,
          w6b = v6b(993864),
          Q4 = v6b.n_x(w6b)();
        var T4 = __webpack_require__(446474).Pi;
        var d5 = __webpack_require__(875604),
          e5 = d5.Component,
          i6b = d5.PureComponent,
          U4 = d5.useCallback,
          Y4 = d5.useEffect,
          x6b = d5.useLayoutEffect,
          S4 = d5.useMemo,
          f5 = d5.useRef;
        var g5 = __webpack_require__(519427),
          h5 = g5.action,
          Z4 = g5.autorun,
          i5 = g5.comparer,
          $4 = g5.computed,
          y6b = g5.createAtom,
          j5 = g5.observable,
          a5 = g5.reaction,
          z6b = g5.untracked;
        var k5 = __webpack_require__(635872),
          l5 = k5.Om,
          A6b = k5.kq,
          B6b = k5.YN;
        var m5 = __webpack_require__(937763)._;
        var n5 = __webpack_require__(161563)._;
        var C6b = __webpack_require__(358579).Z;
        var p6b = __webpack_require__(36281).createPortal;
        var D6b = class {
            static A(a) {
              P(a, { viewBox: j5.ref });
            }
            constructor() {
              this.viewBox =
                (D6b.A(this), Qt({ top: 0, left: 0, height: 0, width: 0 }));
              this.Nsb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          E6b = T4((a) => {
            var b,
              c,
              d = a.sheet.direction === "rtl";
            d = { H2wykw: !d, UweldA: d };
            const e = f5(new D6b()),
              f = h5(() => {
                if (a.Ria) {
                  var h = a.Ria.current;
                  h &&
                    e.current.Nsb(
                      Qt({
                        top: h.scrollTop,
                        left: h.scrollLeft,
                        height: h.clientHeight,
                        width: h.clientWidth,
                      })
                    );
                }
              });
            Y4(() => {
              var h, k;
              f();
              (h = a.Ria.current) === null ||
                h === void 0 ||
                h.addEventListener("scroll", f);
              (k = window) === null ||
                k === void 0 ||
                k.addEventListener("resize", f);
              return () => {
                var l, m;
                (l = a.Ria.current) === null ||
                  l === void 0 ||
                  l.removeEventListener("scroll", f);
                (m = window) === null ||
                  m === void 0 ||
                  m.removeEventListener("resize", f);
              };
            }, [a.Ria, f]);
            const g = S4(() => ({ get: () => e.current.viewBox }), []);
            return P4("div", {
              className: Q4("nMvVqA", d),
              children: [
                P4("div", {
                  ref: a.Gd,
                  className: "_0YOFPg",
                  children: [
                    N4(a.Op, { ...a, viewport: g }),
                    N4("div", {
                      className: Q4("Gdl7fQ", d),
                      children:
                        (c = a.PEa) === null || c === void 0
                          ? void 0
                          : (b = c.get()) === null || b === void 0
                          ? void 0
                          : b.map((h, k) => N4(h, {}, k)),
                    }),
                  ],
                }),
                a.yHb === "visible" &&
                  P4(u6b, {
                    children: [
                      N4("div", {
                        className: Q4("_32sKQw", d),
                        children: N4(a.U5a, { ...a }),
                      }),
                      N4("div", {
                        className: Q4("xdIsTQ", d),
                        children: N4(a.X5a, { ...a }),
                      }),
                      N4("div", {
                        className: Q4("rsTRSA", d),
                        children: N4(a.W5a, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          F6b = T4((a) => {
            a = a.content;
            __c.u(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.aa;
              case "text3":
                return __c.kq.ja(a.value).cells.aa();
              default:
                throw new E(a);
            }
          });
        var X5b = (a, b) =>
            __c.zMa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Qg: c } = __c.Xg(__c.Hh, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    ob: void 0,
                    writingMode: 1,
                    vd: "start",
                    Ef: G6b(e, c),
                    Qa: b,
                  });
            }),
          G6b = l5(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.aa.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: i5.structural }
          );
        var H6b, I6b, J6b, O4;
        new ((H6b = class extends m5 {
          constructor() {
            super(O4);
            I6b();
          }
        }),
        (() => {
          class a extends (J6b = e5) {
            static A(b) {
              P(b, { Qg: $4 });
            }
            get Qg() {
              return __c.Xg(__c.Hh, this.props.context.attrs).Qg;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = N4(this.props.Eh, {
                content: b,
                na: c.container.na,
                col: c.container.column,
                Qg: this.Qg,
              });
              return this.Qg === "wrap"
                ? N4("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.A(this);
            }
          }
          ({
            c: [O4, I6b],
          } = n5(a, [], [Sc], J6b));
        })(),
        H6b)();
        var b6b = class {
          Vo({ size: a, scale: b, bua: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.DV * b : __c.wHb * b;
          }
          constructor() {
            this.Yib = l5((a, b) => {
              var c, d;
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() ===
                  (((c = b.rows) === null || c === void 0 ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  (((d = b.columns) === null || d === void 0
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.hya = A6b(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.Sq }
            );
            this.jya = A6b(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0 ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.Sq }
            );
            this.Igb = l5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.jya(b).size > 0) return new Set(a.layout.cols);
                b = this.hya(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.na, e.column);
                  for (const f of R5b(
                    c ? c.span.Nb : e.column,
                    c ? c.span.Hc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Sq }
            );
            this.Jgb = l5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.hya(b).size > 0) return new Set(a.layout.rows);
                b = this.jya(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.na, e.column);
                  for (const f of R5b(
                    c ? c.span.Tb : e.na,
                    c ? c.span.Xc : e.na,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Sq }
            );
          }
        };
        var K6b,
          L6b,
          M6b,
          N6b,
          O6b,
          P6b,
          Q6b = parseInt("4px", 10) || 4,
          R6b = parseInt("0.5px", 10) || 0.5,
          S6b = parseInt("1px", 10) || 1,
          T6b = parseInt("0.5px", 10) || 0.5,
          U6b = parseInt("0.5px", 10) || 0.5,
          V6b = parseInt("1px", 10) || 1,
          W6b = parseInt("0.5px", 10) || 0.5,
          V4;
        new ((K6b = class extends m5 {
          constructor() {
            super(V4);
            M6b();
          }
        }),
        (() => {
          class a extends (N6b = e5) {
            static A(b) {
              P(b, { xd: $4, qq: $4, n5: $4 });
            }
            get xd() {
              return this.props.sheet.direction === "rtl";
            }
            get qq() {
              var b;
              const c =
                (b = this.props.Uo) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.vD(c);
            }
            get n5() {
              var b, c, d;
              return (c = (d = this.props).Qqa) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return N4(__c.Ex, {
                cq: "light",
                light: "light",
                et: "light",
                dark: "light",
                children: this.E9a,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (V4.A(this),
                h5((c) => {
                  const { onMouseMove: d, sheet: e, ld: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "column", f);
                }));
              this.onMouseLeave = h5((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.kXa = (c, d, e) => {
                const {
                    sheet: f,
                    Vo: g,
                    eE: h,
                    IHb: k,
                    ld: l = 1,
                    Bd: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.xd, gtA7Dw: this.xd },
                  p = (e === null || e === void 0 ? 0 : e.sticky)
                    ? this.xd
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var q;
                const r = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (q = this.n5) !== null && q !== void 0
                    ? q
                    : p
                  : void 0;
                let t = -1;
                return P4("div", {
                  style: r,
                  className: Q4("Vt2_4w", n, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.layout.cols.map((v) => {
                      var w;
                      t++;
                      if (
                        !(
                          (c && f.layout.cols.Ke(v, c) < 0) ||
                          (d && f.layout.cols.Ke(v, d) > 0)
                        )
                      )
                        return N4(
                          X6b,
                          {
                            col: v,
                            label: __c.Vz(t),
                            Ua:
                              k === null || k === void 0
                                ? void 0
                                : (w = k.get()) === null || w === void 0
                                ? void 0
                                : w.get(v),
                            Vo: g,
                            eE: h,
                            ld: l,
                            Bd: m,
                          },
                          v.id
                        );
                    }),
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      N4("div", {
                        style: { width: Q6b * l },
                        className: Q4("HBvlug", "ru3tFQ", n),
                      }),
                  ],
                });
              };
              this.E9a = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.aH
                    ? e.layout.Pd.get(e.view.freeze.aH)
                    : void 0,
                  g = { jNbTIg: !this.xd, gtA7Dw: this.xd };
                return P4("div", {
                  ref: (d = this.qq) === null || d === void 0 ? void 0 : d.dm,
                  className: Q4("xhBZaw", g, c.className),
                  children: [
                    f && this.kXa(void 0, f, { sticky: !0 }),
                    this.kXa(f ? e.cols.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [V4, M6b],
          } = n5(a, [], [Sc], N6b));
        })(),
        K6b)();
        var W4;
        new ((L6b = class extends m5 {
          constructor() {
            super(W4);
            O6b();
          }
        }),
        (() => {
          class a extends (P6b = e5) {
            static A(b) {
              P(b, { xd: $4, qq: $4, n5: $4 });
            }
            get xd() {
              return this.props.sheet.direction === "rtl";
            }
            get qq() {
              var b;
              const c =
                (b = this.props.Uo) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.vD(c);
            }
            get n5() {
              var b, c, d;
              return (c = (d = this.props).Qqa) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return N4(__c.Ex, {
                cq: "light",
                light: "light",
                et: "light",
                dark: "light",
                children: this.srb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (W4.A(this),
                h5((c) => {
                  const { onMouseMove: d, sheet: e, Bd: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "row", f);
                }));
              this.onMouseLeave = h5((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.qXa = (c, d, e) => {
                const {
                    sheet: f,
                    Vo: g,
                    eE: h,
                    ld: k = 1,
                    Bd: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.xd, gtA7Dw: this.xd };
                var n = (e === null || e === void 0 ? 0 : e.sticky)
                    ? { top: 0 }
                    : void 0,
                  p;
                const q = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (p = this.n5) !== null && p !== void 0
                    ? p
                    : n
                  : void 0;
                let r = -1,
                  t = 0;
                n = f.rows.map((v) => {
                  r++;
                  if (
                    !((c && f.rows.Ke(v, c) < 0) || (d && f.rows.Ke(v, d) > 0))
                  )
                    return (
                      (t += v.height),
                      N4(
                        Y6b,
                        {
                          na: v,
                          label: `${r + 1}`,
                          eE: h,
                          Vo: g,
                          ld: k,
                          Bd: l,
                          start: f.pa(v),
                        },
                        v.id
                      )
                    );
                });
                return P4("div", {
                  style: { height: t * l, width: g(k), ...q },
                  className: Q4("_93roJg", m, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    n,
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      N4("div", {
                        style: { height: Q6b * l },
                        className: Q4("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.srb = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.tV
                    ? e.layout.de.get(e.view.freeze.tV)
                    : void 0,
                  g = { jNbTIg: !this.xd, gtA7Dw: this.xd };
                return P4("div", {
                  ref: (d = this.qq) === null || d === void 0 ? void 0 : d.dm,
                  className: Q4("An9VeA", g, c.className),
                  children: [
                    f && this.qXa(void 0, f, { sticky: !0 }),
                    this.qXa(f ? e.rows.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [W4, O6b],
          } = n5(a, [], [Sc], P6b));
        })(),
        L6b)();
        var X6b = T4((a) => {
            const b = a.label,
              c = a.Ua,
              d = a.col,
              e = a.eE,
              f = a.Vo,
              g = a.ld;
            a = f(a.Bd);
            const h = B6b(() => e(d));
            return N4("div", {
              className: Q4("_83Rssw", "d2uLIA", R4(h)),
              style: {
                width: d.width * g,
                height: a,
                borderInlineWidth: `${R6b * g}px`,
                borderBlockStartWidth: `${S6b * g}px`,
                borderBlockEndWidth: `${T6b * g}px`,
              },
              children: N4(Z5b, {
                label: b,
                Ua: c,
                width: d.width,
                height: f(1),
                scale: g,
                RIa: h,
              }),
            });
          }),
          Y6b = T4((a) => {
            const b = a.label,
              c = a.na,
              d = a.Vo,
              e = a.eE,
              f = a.Bd,
              g = d(a.ld),
              h = B6b(() => e(c));
            return N4("div", {
              className: Q4("_83Rssw", "JhBzyw", R4(h)),
              style: {
                width: g,
                height: c.height * f,
                borderBlockWidth: `${U6b * f}px`,
                borderInlineStartWidth: `${V6b * f}px`,
                borderInlineEndWidth: `${W6b * f}px`,
                transform: `translateY(${a.start * f}px)`,
              },
              children: N4(Z5b, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                RIa: h,
              }),
            });
          });
        var Z6b =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var $6b =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var $5b = __c.uR({ oo: Z6b, medium: $6b });
        var a7b, b7b, c7b, X4;
        new ((a7b = class extends m5 {
          constructor() {
            super(X4);
            b7b();
          }
        }),
        (() => {
          class a extends (c7b = e5) {
            static A(b) {
              P(b, { qe: $4.struct });
            }
            render() {
              const b = this.props.element;
              return N4(this.props.Op, {
                sheet: b.ha.config,
                container: b,
                E8: "visible",
                Uo: this.props.Uo,
                Gt: this.props.Gt,
                Kt: this.props.Kt,
                Y: this.props.Y,
                qe: this.qe,
                Eh: this.props.Eh,
                yG: void 0,
              });
            }
            get qe() {
              return __c.cA(this.props.element.ha.Na, this.props.Ie);
            }
            constructor(...b) {
              super(...b);
              a.A(this);
            }
          }
          ({
            c: [X4, b7b],
          } = n5(a, [], [Sc], c7b));
        })(),
        a7b)();
        var d7b = class {
          constructor() {
            this.Tga = new WeakMap();
            this.Lfb = (a) => this.Tga.get(a);
            this.uZa = (a, b) => {
              this.Tga.set(a, b);
            };
            this.n9a = (a, b) => {
              const c = this.Tga.get(a);
              c && c.fa === b.fa && c.wb === b.wb && this.Tga.delete(a);
            };
          }
        };
        var o5 = parseInt("4px", 10) || 4,
          e7b = T4(({ sheet: a, Y: b, range: c, Av: d, Bv: e }) => {
            if (c != null && (d || e)) {
              var f;
              b =
                (f = b === null || b === void 0 ? void 0 : b.get()) !== null &&
                f !== void 0
                  ? f
                  : 1;
              f = a.direction === "rtl";
              var g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.pa(c.Xc) + c.Xc.height),
                  (a = a.ra(c.Hc) + c.Hc.width),
                  N4("div", {
                    style: { top: d * b, width: a * b, height: o5 * b },
                    className: Q4("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.ra(c.Hc) + c.Hc.width),
                  N4("div", {
                    style: {
                      width: o5 * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: Q4("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.pa(c.Xc) + c.Xc.height),
                  N4("div", {
                    style: { top: c * b, width: a.width * b, height: o5 * b },
                    className: Q4("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var p5 = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = M4();
            e6b({ sheet: a, Y: c, range: b, Gd: e });
            return N4("div", {
              ref: e,
              className: Q4(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          f7b = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = M4();
            e6b({ sheet: a, Y: c, range: b, Gd: e });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return N4("div", {
              className: Q4("nstn2A", a, "_9sodyg"),
              children: N4("div", {
                ref: e,
                className: Q4("nstn2A", a),
                children: d,
              }),
            });
          };
        var g6b = T4(({ sheet: a, children: b, XB: c }) => {
            const d = U4(
                (f) => {
                  c.Gya(a, f);
                },
                [c, a]
              ),
              e = U4(
                (f) => {
                  f != null ? c.YB.set(a, f) : c.YB.delete(a);
                },
                [c, a]
              );
            return N4(__c.pCb, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              tu: e,
              children: b,
            });
          }),
          f6b = class {
            Gya(a, b) {
              this.onScroll && this.onScroll(a);
              this.v4.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.YB = new WeakMap();
              this.v4 = j5.map(new Map(), { deep: !1 });
              this.scrollTo = h5((b, c) => {
                b = this.YB.get(b);
                b === null ||
                  b === void 0 ||
                  b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var j6b = T4((a) => {
          const b = a.item,
            c = a.Uo,
            d = a.Mf,
            e = a.measureRef,
            f = a.Y,
            g = a.fPa,
            h = a.wb,
            k = a.Gt,
            l = a.Kt,
            m = a.Op,
            n = a.UK,
            p = a.Eh,
            q = a.Ie,
            r = a.XB;
          a = S4(() => __c.cA(b.Na, q), [b, q]);
          const t = S4(
              () =>
                T4(({ sheet: y, range: A, Av: z, Bv: C }) =>
                  N4(p5, {
                    sheet: y,
                    range: A,
                    Y: f,
                    children: N4(e7b, {
                      sheet: y,
                      Y: f,
                      range: A,
                      Av: z,
                      Bv: C,
                    }),
                  })
                ),
              [f]
            ),
            v = S5b(b.config),
            w = f.get(),
            x = Math.min(v.width * w, h.width);
          Y4(
            () =>
              Z4(() => {
                var y = b.config.view.freeze.aH
                  ? b.config.layout.Pd.get(b.config.view.freeze.aH)
                  : void 0;
                if (y != null)
                  if (b.config.ra(y) + y.width > x) {
                    if ((y = r.YB.get(b))) y.style.overflowX = "hidden";
                  } else if ((y = r.YB.get(b))) y.style.overflowX = "scroll";
              }),
            [b, h.width, r, w, x]
          );
          return N4("div", {
            ref: e,
            className: "E8r86A",
            style: { width: x },
            children: N4(n, {
              sheet: b,
              children: N4("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: v.width * w, height: v.height * w },
                children: N4("div", {
                  className: "W1ir5A",
                  children: N4(m, {
                    container: d.Ij(b),
                    sheet: b.config,
                    E8: "visible",
                    Uo: c,
                    Y: f,
                    Gt: k,
                    Kt: l,
                    qe: a,
                    Eh: p,
                    yG: t,
                  }),
                }),
              }),
            }),
          });
        });
        var g7b = T4(({ page: a, range: b, QB: c }) => {
          const d = l6b(a.sheet, b);
          return N4("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.Ot(Qt(e)).Zo(d) && c(e, f)
            ),
          });
        });
        var h7b = new __c.gS(),
          q5 = (a) => __c.DV * a,
          i7b = () => "primary-default",
          m6b = T4(
            ({
              container: a,
              Uo: b,
              Gt: c,
              Kt: d,
              a0: e,
              Y: f,
              viewport: g,
              gtb: h,
              Op: k,
              Eh: l,
              QB: m,
              dga: n,
              Czb: p,
              nyb: q,
              myb: r,
            }) => {
              const t = a.page,
                v = S4(
                  () =>
                    T4(({ sheet: w, range: x, Av: y, Bv: A }) =>
                      P4(u6b, {
                        children: [
                          N4(p5, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: N4(e7b, {
                              sheet: w,
                              Y: f,
                              range: x,
                              Av: y,
                              Bv: A,
                            }),
                          }),
                          P4(f7b, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: [
                              p && N4(p, {}),
                              m && N4(g7b, { page: t, QB: m, range: x }),
                              r && N4(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            N4(p5, {
                              sheet: t.sheet,
                              range: x,
                              Y: f,
                              children: N4(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? N4(j7b, {
                    container: a,
                    viewport: g,
                    Y: f,
                    Uo: b,
                    Gt: c,
                    Kt: d,
                    Op: k,
                    Eh: l,
                    yG: v,
                  })
                : N4(k, {
                    sheet: t.sheet,
                    container: a,
                    E8: "hidden",
                    Uo: b,
                    Gt: c,
                    Kt: d,
                    a0: e,
                    Y: f,
                    viewport: g,
                    Eh: l,
                    yG: v,
                  });
            }
          ),
          j7b = T4((a) => {
            const b = a.container,
              c = a.Y,
              d = a.viewport,
              e = a.Uo,
              f = a.Gt,
              g = a.Kt,
              h = a.Op,
              k = a.Eh;
            a = a.yG;
            const l = b.page,
              m = l.sheet.direction === "rtl",
              n = f5(null),
              p = f5(null),
              q = f5(null);
            Y4(() => {
              const y = r5({
                sheet: l.sheet,
                vha: !0,
                wha: !0,
                Y: c,
                viewport: d,
              });
              return a5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = n.current;
                  if (A && z) {
                    var C = l.sheet.direction === "rtl",
                      G;
                    z.style.position =
                      (G = A.position) !== null && G !== void 0 ? G : "sticky";
                    var H;
                    z.style.top =
                      (H = A.top) !== null && H !== void 0 ? H : "0px";
                    var J, K;
                    C
                      ? (z.style.right =
                          (J = A.right) !== null && J !== void 0 ? J : "0px")
                      : (z.style.left =
                          (K = A.left) !== null && K !== void 0 ? K : "0px");
                    var L;
                    z.style.transform =
                      (L = A.transform) !== null && L !== void 0 ? L : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            Y4(() => {
              const y = r5({
                sheet: l.sheet,
                vha: !1,
                wha: !0,
                Y: c,
                viewport: d,
              });
              return a5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = q.current;
                  if (A && z) {
                    var C;
                    z.style.position =
                      (C = A.position) !== null && C !== void 0 ? C : "sticky";
                    var G;
                    z.style.top =
                      (G = A.top) !== null && G !== void 0 ? G : "0px";
                    var H;
                    z.style.transform =
                      (H = A.transform) !== null && H !== void 0 ? H : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            Y4(() => {
              const y = r5({
                sheet: l.sheet,
                vha: !0,
                wha: !1,
                Y: c,
                viewport: d,
              });
              return a5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = p.current;
                  if (A && z) {
                    var C = l.sheet.direction === "rtl",
                      G;
                    z.style.position =
                      (G = A.position) !== null && G !== void 0 ? G : "sticky";
                    var H, J;
                    C
                      ? (z.style.right =
                          (H = A.right) !== null && H !== void 0 ? H : "0px")
                      : (z.style.left =
                          (J = A.left) !== null && J !== void 0 ? J : "0px");
                    var K;
                    z.style.transform =
                      (K = A.transform) !== null && K !== void 0 ? K : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = U4(
                (y, A, z) =>
                  r5({ sheet: y, vha: A, wha: z, Y: c, viewport: d }),
                [c, d]
              ),
              t = S4(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              v = S4(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var w;
            const x =
              (w = c === null || c === void 0 ? void 0 : c.get()) !== null &&
              w !== void 0
                ? w
                : 1;
            return P4("div", {
              className: Q4("OsKKIQ", "cbOp6Q"),
              children: [
                N4("div", {
                  className: "VDFv_A",
                  children: N4(h, {
                    sheet: l.sheet,
                    container: b,
                    E8: "hidden",
                    Uo: e,
                    Gt: f,
                    Kt: g,
                    a0: r,
                    Y: c,
                    viewport: d,
                    Eh: k,
                    yG: a,
                  }),
                }),
                N4("div", {
                  ref: n,
                  className: "_688KWg",
                  children: N4(a6b, { xd: m, gOa: !1, Vo: q5, scale: x }),
                }),
                N4("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: N4(V4, {
                    sheet: l.sheet,
                    ld: x,
                    Bd: x,
                    Vo: q5,
                    eE: i7b,
                    RE: h7b,
                    Qqa: t,
                  }),
                }),
                N4("div", {
                  ref: p,
                  className: "zm537g",
                  children: N4(W4, {
                    sheet: l.sheet,
                    ld: x,
                    Bd: x,
                    Vo: q5,
                    eE: i7b,
                    RE: h7b,
                    Qqa: v,
                  }),
                }),
              ],
            });
          }),
          r5 = ({ sheet: a, vha: b, wha: c, Y: d, viewport: e }) =>
            $4(() => {
              var f = e === null || e === void 0 ? void 0 : __c.Yt(e.get()),
                g;
              const h =
                (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                g !== void 0
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new st(f.left, f.top);
              const k = a.direction === "rtl";
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var s6b = class {
          constructor(a) {
            this.dC = a;
            this.Z8a = __c.VT;
            this.pfb = l5((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let t = 0; t < d.length; t++) {
                var g = d[t],
                  h = this.jfb(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[t + 1];
                      if (k == null || !TG(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[t + 1];
                      if (k == null || !TG(b, c, k)) continue;
                      k = d[t - 1];
                      if (k == null || !TG(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[t - 1];
                      if (k == null || !TG(b, c, k)) continue;
                      break;
                    default:
                      throw new E(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + (h === "center" ? 0 : this.Z8a);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.ra(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.ra(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.ra(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new E(h);
                      }
                      for (l = d.indexOf(g); l >= 0; l--) {
                        var m = d[l],
                          n = l - 1 < 0 || TG(b, c, d[l - 1]),
                          p;
                        if ((p = m === g || TG(b, c, m))) {
                          p = h;
                          var q = k,
                            r = b.ra(m);
                          p = p < r && r < q;
                        }
                        if (p && n) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = TG(b, c, l)))
                          (m = h), (n = k), (p = b.ra(l)), (m = m < p && p < n);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.jfb = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Aa.ref) &&
                g.span.Tb === g.span.Xc &&
                g.span.Nb === g.span.Hc
              ) {
                var h = this.dC.Cv(b, c, d);
                b = this.dC.Jqa(
                  b,
                  c,
                  d,
                  __c.Ih({ Qg: void 0, textAlign: void 0 })
                );
                var { Qg: k, textAlign: l } = __c.Xg(__c.Hh, b);
                if (k === "overflow")
                  return __c.AMa(
                    l,
                    (e = g.ref.content.ref) === null || e === void 0
                      ? void 0
                      : e.type,
                    (f = g.ref.Aa.ref) === null || f === void 0
                      ? void 0
                      : f.type,
                    h ? () => h.pk.type : void 0
                  );
              }
            };
          }
        };
        var k7b = T4(function (a) {
          const b = a.sheet;
          var c = a.eh;
          const d = a.Kwb,
            e = a.Y,
            f = a.qsa,
            g = a.Yeb;
          a = a.overflow;
          const h = M4();
          x6b(
            () =>
              Z4(() => {
                const p = D(h.current);
                var q;
                const r =
                  (q = e === null || e === void 0 ? void 0 : e.get()) !==
                    null && q !== void 0
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = U4((p) => f.pfb(b, p, d, g), [f, b, d, g]);
          var l = U4(
            (p, q) => {
              var r, t;
              return (t =
                (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !==
                null && t !== void 0
                ? t
                : 0;
            },
            [k]
          );
          c = P5b(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return N4("svg", {
            ref: h,
            role: "presentation",
            className: Q4("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, jk: t, kk: v }) =>
              N4(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: w, p2: x }) => `M ${w.x} ${w.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var l7b;
        l7b = Symbol.iterator;
        var m7b = class {
          get size() {
            return this.eha;
          }
          get([a, b]) {
            return (a = this.DE.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.DE.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.DE.get(a);
            d == null && ((d = new Map()), this.DE.set(a, d));
            d.set(b, c);
            this.eha++;
            return this;
          }
          clear() {
            this.DE.clear();
            this.eha = 0;
          }
          delete([a, b]) {
            const c = this.DE.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.eha--;
            c.size === 0 && this.DE.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.DE) for (const [d, e] of c) a([b, d], e);
          }
          *[l7b]() {
            for (const [a, b] of this.DE)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.eha = 0;
            this.DE = new Map();
          }
        };
        var n7b,
          o7b,
          p7b,
          q7b,
          r7b,
          s7b,
          t7b,
          q6b = __c.Zv("285688d5", !1),
          u7b,
          v7b = class extends e5 {
            render() {
              const { Saa: a, ...b } = this.props,
                c = this.props.sheet;
              return P4("div", {
                ref: this.OZa,
                className: Q4(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  (a === null || a === void 0 ? void 0 : a.vHa) &&
                    N4(s5, {
                      ...b,
                      sheet: c,
                      range: a.vHa.range,
                      Av: !0,
                      Bv: !0,
                      className: "_0C8M3w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.$2a) &&
                    N4(s5, {
                      ...b,
                      sheet: c,
                      range: a.$2a.range,
                      Av: !1,
                      Bv: !0,
                      className: "_7n44yg",
                    }),
                  (a === null || a === void 0 ? void 0 : a.jOa) &&
                    N4(s5, {
                      ...b,
                      sheet: c,
                      range: a.jOa.range,
                      Av: !0,
                      Bv: !1,
                      className: "fF5r6w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.L1a) &&
                    N4(s5, {
                      ...b,
                      sheet: c,
                      range: a.L1a.range,
                      Av: !1,
                      Bv: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = Z4(() => {
                var b = this.props,
                  c = b.Y;
                b = b.sheet;
                const d = this.OZa.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.Dc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.OZa = Ew();
            }
          };
        ({
          c: [u7b, p7b],
        } = n5(v7b, [], [Sc], e5));
        p7b();
        var s5;
        new ((n7b = class extends m5 {
          constructor() {
            super(s5);
            q7b();
          }
        }),
        (() => {
          class a extends (r7b = e5) {
            static A(b) {
              P(b, { Uya: $4, bounds: $4 });
            }
            get Uya() {
              const b = this.props.viewport,
                c = this.props.Av,
                d = this.props.Bv;
              return b == null || (!c && !d)
                ? b
                : $4(() => {
                    const e = __c.Yt(b.get());
                    return Qt({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.jN,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.yG,
                g = this.props.Av,
                h = this.props.Bv;
              return P4("div", {
                ref: this.hwa,
                className: Q4("i0YQww", this.props.className),
                children: [
                  N4("div", {
                    ref: this.rVa,
                    className: "vUKoKg",
                    children: N4("div", {
                      ref: this.sVa,
                      children: N4(t5, {
                        jN: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        Uo: this.props.Uo,
                        DC: this.props.DC,
                        Eh: this.props.Eh,
                        hZ: this.props.hZ,
                        Y: this.props.Y,
                        eh: this.eh,
                        R6: this.R6,
                        XR: this.XR,
                      }),
                    }),
                  }),
                  N4(this.fka, {}),
                  f && N4(f, { sheet: c, range: e, Av: g, Bv: h }),
                ],
              });
            }
            componentDidMount() {
              const b = Z4(() => {
                  var h = this.props,
                    k = h.Y,
                    l = h.sheet;
                  const m = h.range;
                  var n = this.hwa.current;
                  const p = this.rVa.current;
                  h = this.sVa.current;
                  k = k ? k.get() : 1;
                  const q = m ? l.ra(m.Hc) + m.Hc.width - l.ra(m.Nb) : l.width,
                    r = m ? l.pa(m.Xc) + m.Xc.height - l.pa(m.Tb) : l.height;
                  n &&
                    ((n.style.width = `${q * k}px`),
                    (n.style.height = `${r * k}px`));
                  p &&
                    ((p.style.width = `${q * k}px`),
                    (p.style.height = `${r * k}px`));
                  n = l.direction === "rtl";
                  n = m ? l.ra(m.Nb) * k * (n ? 1 : -1) : 0;
                  l = m ? -l.pa(m.Tb) * k : 0;
                  h && (h.style.transform = `translate(${n}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.a0;
              const e = this.props.Av,
                f = this.props.Bv,
                g =
                  e || f
                    ? d === null || d === void 0
                      ? void 0
                      : d(c, e, f)
                    : void 0;
              d = Z4(() => {
                const h = this.hwa.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const x = g.get();
                    var q;
                    h.style.position =
                      (q = x.position) !== null && q !== void 0 ? q : k;
                    var r;
                    h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                    var t;
                    h.style.left = p
                      ? "unset"
                      : (t = x.left) !== null && t !== void 0
                      ? t
                      : m;
                    var v;
                    h.style.right = p
                      ? (v = x.right) !== null && v !== void 0
                        ? v
                        : n
                      : "unset";
                    var w;
                    h.style.transform =
                      (w = x.transform) !== null && w !== void 0 ? w : "unset";
                  }
                }
              });
              __c.Dc(this, [b, d]);
            }
            get bounds() {
              const b = this.props.sheet,
                c = this.props.range;
              if (b.layout.cols.empty || b.layout.rows.empty)
                return { Nb: void 0, Hc: void 0, Tb: void 0, Xc: void 0 };
              var d, e, f, g;
              return {
                Nb:
                  (d = c === null || c === void 0 ? void 0 : c.Nb) !== null &&
                  d !== void 0
                    ? d
                    : b.layout.cols.first(),
                Hc:
                  (e = c === null || c === void 0 ? void 0 : c.Hc) !== null &&
                  e !== void 0
                    ? e
                    : b.layout.cols.last(),
                Tb:
                  (f = c === null || c === void 0 ? void 0 : c.Tb) !== null &&
                  f !== void 0
                    ? f
                    : b.layout.rows.first(),
                Xc:
                  (g = c === null || c === void 0 ? void 0 : c.Xc) !== null &&
                  g !== void 0
                    ? g
                    : b.layout.rows.last(),
              };
            }
            constructor(...b) {
              super(...b);
              this.hwa = (s5.A(this), Ew());
              this.rVa = Ew();
              this.sVa = Ew();
              this.XR = new w7b();
              this.Lwb = $4(
                () =>
                  [...this.eh.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.rows.Ke(c, d)
                  ),
                { equals: __c.Tq() }
              );
              this.Jwb = $4(
                () =>
                  [...this.R6.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.cols.Ke(c, d)
                  ),
                { equals: __c.Tq() }
              );
              this.fka = T4(() =>
                N4(this.props.T5a, {
                  eh: this.Lwb,
                  Kwb: this.Jwb,
                  Yeb: this.XR.gfb,
                  range: this.props.range,
                })
              );
              this.eh = $4(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.Y,
                    f =
                      (c = this.Uya) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.la.y - g : c.Tb ? d.pa(c.Tb) : 0;
                  f = f ? f.br.y + g : c.Xc ? d.pa(c.Xc) + c.Xc.height : 0;
                  g = new Map();
                  for (
                    let k = c.Tb;
                    k != null && c.Xc != null && d.layout.rows.Ke(k, c.Xc) <= 0;
                    k = d.layout.rows.next(k)
                  ) {
                    const l = d.pa(k);
                    if (!(l + k.height < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: i5.shallow }
              );
              this.R6 = $4(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.Y,
                    f =
                      (c = this.Uya) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.la.x - g : c.Nb ? d.ra(c.Nb) : 0;
                  f = f ? f.br.x + g : c.Hc ? d.ra(c.Hc) + c.Hc.width : 0;
                  g = new Map();
                  for (
                    let k = c.Nb;
                    k != null && c.Hc != null && d.layout.cols.Ke(k, c.Hc) <= 0;
                    k = d.layout.cols.next(k)
                  ) {
                    const l = d.ra(k);
                    if (!(l + k.width < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: i5.shallow }
              );
            }
          }
          ({
            c: [s5, q7b],
          } = n5(a, [], [Sc], r7b));
        })(),
        n7b)();
        var w7b = class {
            constructor() {
              this.cells = new m7b();
              this.pxa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = j5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.gfb = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = j5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return (c = d.get()) === null || c === void 0 ? void 0 : c.qJa;
              };
            }
          },
          t5;
        new ((o7b = class extends m5 {
          constructor() {
            super(t5);
            s7b();
          }
        }),
        (() => {
          class a extends (t7b = e5) {
            static A(b) {
              P(b, { FK: j5.shallow, qq: $4, $Ga: h5, Y9: h5.bound });
            }
            get qq() {
              var b;
              const c =
                (b = this.props.Uo) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.vD(c);
            }
            render() {
              var b;
              return P4("div", {
                ref: C6b(
                  this.Gd,
                  (b = this.qq) === null || b === void 0 ? void 0 : b.dm
                ),
                children: [
                  N4("div", { ref: this.Tma, className: "_5YlOqQ" }),
                  N4("div", { ref: this.Vma, className: "_XCmKw" }),
                  this.FK.map((c) => c.Bpb),
                ],
              });
            }
            componentDidMount() {
              const b = a5(
                  () => [
                    this.props.sheet,
                    this.props.R6.get(),
                    this.props.eh.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.o9a();
                    this.$Ga(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = Z4(() => {
                  var e = this.props,
                    f = e.Y;
                  e = e.sheet;
                  const g = this.Gd.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.FK.map((e) => r6b(e));
              __c.Dc(this, [c, b, ...d]);
            }
            o9a() {
              const b = D(this.Tma.current),
                c = D(this.Vma.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.qDa.length = 0;
              this.FK.length = 0;
            }
            $Ga(b, c) {
              const d = D(this.Tma.current),
                e = D(this.Vma.current),
                f = [],
                g = new Map();
              for (const h of this.qDa)
                c.has(h.na) ? g.set(h.na, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new x7b(this.Y9, h)),
                    d.appendChild(c.b9),
                    e.appendChild(c.d9),
                    this.qDa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            Y9(b, c) {
              const d = this.props.hZ,
                e = this.props.sheet,
                f = this.props.container,
                g = this.props.XR;
              b = new y7b(
                this.props.jN,
                this.props.DC,
                this.props.Eh,
                d(b, c),
                e,
                b,
                c,
                f,
                g.pxa,
                this.iba,
                this.hba
              );
              __c.Dc(this, r6b(b));
              this.FK.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.Gd = (t5.A(this), Ew());
              this.Tma = Ew();
              this.Vma = Ew();
              this.qDa = [];
              this.FK = [];
              this.iba = l5((c) => {
                const d = this.props.eh.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.hba = l5((c) => {
                const d = this.props.R6.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [t5, s7b],
          } = n5(a, [], [Sc], t7b));
        })(),
        o7b)();
        var x7b = class {
            static A(a) {
              P(a, { update: h5 });
            }
            update(a, b, c) {
              [this.b9, this.d9].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.na = b;
              for (const [d] of c)
                (c = this.FK.get(d)),
                  c ||
                    ((c = this.Y9(d, b)),
                    this.FK.set(d, c),
                    this.b9.appendChild(c.a9),
                    this.d9.appendChild(c.qL)),
                  c.update(b);
            }
            hide() {
              [this.b9, this.d9].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.Y9 = a;
              this.na = b;
              this.b9 = (x7b.A(this), document.createElement("div"));
              this.d9 = document.createElement("div");
              this.FK = new Map();
            }
          },
          y7b = class {
            static A(a) {
              P(a, {
                N9: j5.ref,
                na: j5.ref,
                tra: $4,
                update: h5,
                bt: $4,
                attrs: $4.struct,
                Vsa: $4,
                lv: $4,
                renderer: $4,
                qJa: $4.struct,
              });
            }
            get tra() {
              if (!q6b) return !1;
              const a = this.bt;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.jN(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.na &&
                ((this.na = a),
                (this.lz.na = a),
                this.Poa && this.Poa(),
                (this.Poa = this.pxa(this.na, this.col, this)));
            }
            get Bpb() {
              return this.N9;
            }
            get bt() {
              const a = this.sheet.layout.cells.get(this.na, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.lz.attrs;
              return {
                Qg: a === null || a === void 0 ? void 0 : a.Qg,
                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                direction: a === null || a === void 0 ? void 0 : a.direction,
                link: a === null || a === void 0 ? void 0 : a.link,
              };
            }
            get Vsa() {
              var a = this.lz.span;
              if (!a) return !1;
              if (a.Tb === a.Xc && a.Nb === a.Hc) return !0;
              var b = this.iba("first");
              const c = this.iba("last"),
                d = this.hba("first"),
                e = this.hba("last");
              if (!(b && c && d && e)) return !1;
              b =
                this.sheet.layout.rows.Ke(a.Tb, b) >= 0 &&
                this.sheet.layout.rows.Ke(a.Tb, c) <= 0
                  ? a.Tb
                  : b;
              a =
                this.sheet.layout.cols.Ke(a.Nb, d) >= 0 &&
                this.sheet.layout.cols.Ke(a.Nb, e) <= 0
                  ? a.Nb
                  : d;
              return b === this.na && a === this.col;
            }
            get lv() {
              const a = this.sheet,
                b = this.na,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, na: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.Pob.Id(c, b);
                case "sheet-item":
                  return this.container.Tya.Id(c, b);
                case "sheet-element":
                  return this.container.Wsb.Id(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              const a = this.bt;
              if (a && this.Vsa && (a.content.ref || a.Aa.ref))
                return this.DC({
                  context: { container: this.lv, attrs: this.attrs },
                  lp: this.Xua,
                  Eh: this.Eh,
                });
            }
            get qJa() {
              this.rJa.reportObserved();
              var a = z6b(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.L3 : this.sD),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              var n, p, q, r, t, v;
              this.jN = a;
              this.DC = b;
              this.lz = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.pxa = k;
              this.iba = l;
              this.hba = m;
              this.a9 = (y7b.A(this), document.createElement("div"));
              this.qL = document.createElement("div");
              this.mD = document.createElement("div");
              this.sD = document.createElement("div");
              this.L3 = document.createElement("div");
              this.rJa = y6b("content size atom");
              this.Xua = h5(() => this.rJa.reportChanged());
              this.na = g;
              this.a9.className = "_2JFriw";
              this.qL.className = "imy9ug";
              this.mD.className = Q4("pDMp7w", {
                _0yZ6Qg:
                  ((p = this.bt) === null || p === void 0
                    ? void 0
                    : (n = p.content.ref) === null || n === void 0
                    ? void 0
                    : n.type) !== "text3",
                qhF5uA:
                  ((r = this.bt) === null || r === void 0
                    ? void 0
                    : (q = r.content.ref) === null || q === void 0
                    ? void 0
                    : q.type) !== "text3" &&
                  ((v = this.bt) === null || v === void 0
                    ? void 0
                    : (t = v.content.ref) === null || t === void 0
                    ? void 0
                    : t.type) !== "text2",
                qxD1GA: this.tra,
              });
              this.sD.className = "_30B9pw";
              this.mD.appendChild(this.sD);
              this.qL.appendChild(this.mD);
              this.L3.className = "G7zH2w";
              this.Poa = k(this.na, this.col, this);
              this.Eh = (w) => N4(c, { ...w, lp: this.Xua });
            }
          };
        var z7b, A7b, B7b, b5;
        new ((z7b = class extends m5 {
          constructor() {
            super(b5);
            A7b();
          }
        }),
        (() => {
          class a extends (B7b = e5) {
            static A(b) {
              P(b, { Saa: $4 });
            }
            render() {
              const {
                jN: b,
                sheet: c,
                container: d,
                Uo: e,
                a0: f,
                DC: g,
                qe: h,
                Eh: k,
                viewport: l,
                yG: m,
                Q2a: n = !1,
              } = this.props;
              if (!c.layout.cols.empty && !c.layout.rows.empty)
                return N4("div", {
                  className: Q4(
                    "SNkrHw",
                    c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                    { RaA0Nw: n }
                  ),
                  ...h,
                  children: N4(u7b, {
                    jN: b,
                    DC: g,
                    Eh: k,
                    T5a: this.fka,
                    hZ: this.hZ,
                    sheet: c,
                    container: d,
                    Uo: e,
                    a0: f,
                    Y: this.Y,
                    viewport: l,
                    yG: m,
                    Saa: this.Saa,
                  }),
                });
            }
            get Saa() {
              var b = this.props.sheet;
              const c = {},
                d = b.view.freeze.tV
                  ? b.layout.de.get(b.view.freeze.tV)
                  : void 0,
                e = b.view.freeze.aH
                  ? b.layout.Pd.get(b.view.freeze.aH)
                  : void 0,
                f = b.layout.rows.first(),
                g = b.layout.rows.last(),
                h = b.layout.cols.first(),
                k = b.layout.cols.last();
              if (f != null && g != null && h != null && k != null) {
                var l = e ? b.layout.cols.next(e) : h;
                b = d ? b.layout.rows.next(d) : f;
                d && e && (c.vHa = { range: { Nb: h, Tb: f, Hc: e, Xc: d } });
                d && l && (c.$2a = { range: { Nb: l, Tb: f, Hc: k, Xc: d } });
                e && b && (c.jOa = { range: { Nb: h, Tb: b, Hc: e, Xc: g } });
                b && l && (c.L1a = { range: { Nb: l, Tb: b, Hc: k, Xc: g } });
                return c;
              }
            }
            get Y() {
              return this.props.Y ? this.props.Y : $4(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.fka =
                (b5.A(this),
                T4((c) => {
                  const {
                    sheet: d,
                    qsa: e,
                    Y: f,
                    E8: g = "hidden",
                  } = this.props;
                  return N4(p5, {
                    sheet: d,
                    range: c.range,
                    Y: f,
                    children: N4(k7b, {
                      ...c,
                      sheet: d,
                      Y: this.Y,
                      qsa: e,
                      overflow: g,
                    }),
                  });
                }));
              this.hZ = (c, d) =>
                new __c.TMa(
                  this.props.dC,
                  this.props.ez,
                  this.props.sheet,
                  c,
                  d,
                  this.Y,
                  this.Gt,
                  this.Kt
                );
              this.Gt = (c, d) => {
                var e, f;
                return (e = (f = this.props).Gt) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
              this.Kt = (c, d) => {
                var e, f;
                return (e = (f = this.props).Kt) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
            }
          }
          ({
            c: [b5, A7b],
          } = n5(a, [], [Sc], B7b));
        })(),
        z7b)();
        __c.$Ma = {
          Qhb: function (a) {
            const b = a.Gn,
              c = a.Hd,
              d = a.hd,
              e = a.Zl,
              f = a.dC,
              g = a.ez,
              h = a.hX;
            Y5b({ dz: a.dz, kf: a.kf, Bub: a.PO, Qa: a.Qa });
            const k = t6b({ DC: h, dC: f, ez: g, Tx: void 0 });
            b.Cka = n6b({ Op: k });
            c.gka = d6b({ Op: k });
            ({ hka: a } = k6b({ Op: k, pe: e(), MZa: new d7b() }));
            d.Vp.Bka = a;
            const { Y3a: l, Z3a: m, X3a: n } = c6b();
            return {
              iFa: T4((p) =>
                N4(E6b, {
                  ...p,
                  container: void 0,
                  Op: k,
                  W5a: l,
                  X5a: m,
                  U5a: n,
                  Eh: F6b,
                })
              ),
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/36357d86273a0961.js.map
