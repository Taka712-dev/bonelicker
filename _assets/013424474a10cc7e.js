(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [20382],
  {
    /***/ 796735: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var O = __c.O;
        var I6 = function (a) {
            __c.u(
              a.every((e, f) => (f === 0 ? !0 : e.x > a[f - 1].x)),
              "Points must be ordered strictly monotonically increasing in x"
            );
            var b = a.length;
            const c = new Float64Array(b),
              d = new Float64Array(b);
            for (let e = 1; e < b - 1; e++) {
              const f = a[e - 1],
                g = a[e],
                h = a[e + 1],
                k = h.x - f.x,
                l = (g.x - f.x) / k,
                m = l * d[e - 1] + 2;
              c[e] =
                ((6 * ((h.y - g.y) / (h.x - g.x) - (g.y - f.y) / (g.x - f.x))) /
                  k -
                  l * c[e - 1]) /
                m;
              d[e] = (l - 1) / m;
            }
            for (b -= 2; b >= 0; --b) d[b] = d[b] * d[b + 1] + c[b];
            return new sbc(a, d);
          },
          J6 = function (a) {
            const b = I6(a.r),
              c = I6(a.g);
            a = I6(a.b);
            const d = new Uint8Array(768);
            for (let e = 0; e < 256; e++)
              (d[e * 3] = Math.max(0, Math.min(255, b.dB(e)))),
                (d[e * 3 + 1] = Math.max(0, Math.min(255, c.dB(e)))),
                (d[e * 3 + 2] = Math.max(0, Math.min(255, a.dB(e))));
            return new tbc({ width: 256, height: 1, source: d });
          },
          vbc = function ({ filter: a, width: b, height: c, SG: d }) {
            const {
              r: e,
              g: f,
              b: g,
            } = a.Hw !== 0
              ? ubc({
                  h: (((a.Hw / 200 + 0.5 - 1 / 7) % 1) + 1) % 1,
                  s: 1,
                  ma: 0.5,
                })
              : { r: 0, g: 0, b: 0 };
            return {
              D: a.brightness / 200,
              E: (a.contrast / 100) * 0.6,
              F: a.saturation / 100 + 1,
              G: [e, f, g],
              s: ((a.blur >= 0 ? a.blur : 3) * Math.max(b, c)) / 2e3,
              H: Math.min(Math.max(-a.blur, 0), 100),
              J: a.sG / 100,
              I: (a.mG / 100) * 0.1,
              N: a.eG / 100,
              v: a.oD / 100,
              L: a.highlights / 100,
              M: a.ww / 100,
              K: a.VD / 100,
              O: (a.Qw / 100) * 0.7,
              d: d ? 1 : 0,
            };
          },
          ubc = function ({ h: a, s: b, ma: c }) {
            if (b === 0) return { r: a, g: a, b: a };
            b = c < 0.5 ? c * (1 + b) : c + b - c * b;
            c = 2 * c - b;
            return {
              r: K6(c, b, a + 1 / 3),
              g: K6(c, b, a),
              b: K6(c, b, a - 1 / 3),
            };
          },
          K6 = function (a, b, c) {
            c < 0 && (c += 1);
            c > 1 && --c;
            return c < 1 / 6
              ? a + (b - a) * 6 * c
              : c < 0.5
              ? b
              : c < 2 / 3
              ? a + (b - a) * (2 / 3 - c) * 6
              : a;
          },
          wbc = function (a, b) {
            if (
              (a.width === 0 && a.height === 0) ||
              (b.width === 0 && b.height === 0)
            )
              return !0;
            if (a.width === b.width && a.height === b.height) return !1;
            const c = Math.trunc(a.width / a.height),
              d = Math.trunc(b.width / b.height);
            if (!((c >= 1 && d >= 1) || (c < 1 && d < 1))) return !0;
            a = a.width * a.height;
            b = b.width * b.height;
            return b <= a ? !1 : b / a > 2;
          },
          Abc = async function (a) {
            if (!a.store.Ora || !a.store.Wha) {
              var [b, c] = await Promise.all([__c.vS(xbc.url), __c.vS(ybc)]);
              zbc(() => {
                a.store.Ora = b;
                a.store.Wha = c;
              });
            }
          },
          Bbc = async function (a, b) {
            if (a.V0) return a.V0;
            a.V0 = a.initialize(b);
            return a.V0;
          },
          Dbc = function (a) {
            if (a.length)
              for (const b of a) if (b.type === "lut") return Cbc(b.FN.id);
          },
          Gbc = function ({ jf: a, height: b, width: c, SG: d, mN: e }) {
            const f = {
              brightness: 0,
              saturation: 0,
              vibrance: 0,
              tint: 0,
              temperature: 0,
              blacks: 0,
              whites: 0,
              shadows: 0,
              highlights: 0,
              contrast: 0,
              lut: 0,
            };
            a.forEach((g) => {
              var h = g.Cu.get(0);
              h &&
                ((h = h.value), (f[g.type] = g.type === "lut" ? h : h * 2 - 1));
            });
            return {
              V: f.brightness,
              X: f.saturation,
              W: f.vibrance,
              ca: f.tint,
              da: f.temperature,
              Y: f.blacks,
              Z: f.whites,
              _: f.shadows,
              aa: f.highlights,
              ba: f.contrast,
              E: 0,
              D: 0,
              ra: 0,
              t: f.lut,
              m: Ebc[e ? "preview" : "original"],
              o: Fbc[e ? "preview" : "original"],
              d: d ? 1 : 0,
              B: [c, b],
            };
          },
          Hbc = function () {
            return (
              !!window.createImageBitmap &&
              typeof ImageBitmapRenderingContext !== "undefined"
            );
          },
          Ibc = async function (a, b, c) {
            var d = c.browserWindow;
            const e = c.xtb,
              f = c.context;
            c = c.q1a;
            Hbc() && f instanceof d.ImageBitmapRenderingContext
              ? ((d = await d.createImageBitmap(c, 0, 0, c.width, c.height, {
                  resizeWidth: a,
                  resizeHeight: b,
                })),
                (e.width = a),
                (e.height = b),
                f.transferFromImageBitmap(d))
              : f instanceof d.CanvasRenderingContext2D &&
                ((e.width = a),
                (e.height = b),
                f.clearRect(0, 0, a, b),
                f.drawImage(c, 0, 0, a, b));
          },
          Jbc = function (a, b) {
            return b.includes(1) && (a.type === "video" || a.type === "canvas");
          },
          Mbc = async function ({ mN: a, Dob: b, vu: c, f4: d, x8: e }) {
            const f = b.width,
              g = b.height;
            if (f !== 0 && g !== 0) {
              var h = d.source;
              b = d.filter;
              var k = d.jf;
              e = { width: f, height: g, x8: e };
              d = { source: h, SG: Jbc(h, d.modifiers) };
              a =
                (k === null || k === void 0 ? 0 : k.length) && !b
                  ? await Kbc.render({ ...e, f4: { ...d, jf: k, mN: a } })
                  : await Lbc.render({ ...e, f4: { ...d, filter: b } });
              c === null || c === void 0 || c(a);
            }
          },
          Nbc = function (a) {
            return a
              ? a.map((b) => {
                  var c, d;
                  return {
                    type: b.type,
                    value:
                      (d =
                        (c = b.Cu.get(0)) === null || c === void 0
                          ? void 0
                          : c.value) !== null && d !== void 0
                        ? d
                        : 0,
                  };
                })
              : [];
          },
          L6 = function (a, b) {
            cancelAnimationFrame(a);
            return requestAnimationFrame(b);
          },
          M6 = __webpack_require__(315944),
          tbc = M6.BinaryTexture,
          Obc = M6.createWebGlRenderer,
          Pbc = M6.Effect,
          N6 = M6.ImageTexture,
          Qbc = M6.Renderer;
        var O6 = __webpack_require__(519427),
          Rbc = O6.comparer,
          Sbc = O6.computed,
          Tbc = O6.observable,
          Ubc = O6.reaction,
          zbc = O6.runInAction;
        var Vbc = __webpack_require__(443763).jsx;
        var Wbc = __webpack_require__,
          Xbc = Wbc(993864),
          Ybc = Wbc.n_x(Xbc)();
        var Zbc = __webpack_require__(446474).Pi;
        var $bc = __webpack_require__(875604),
          acc = $bc.useEffect,
          bcc = $bc.useRef;
        var sbc = class {
          dB(a) {
            var b = this.V3;
            const c = this.TDa;
            let d = 0,
              e = this.V3.length - 1;
            for (; e - d > 1; ) {
              var f = (e + d) >> 1;
              b[f].x > a ? (e = f) : (d = f);
            }
            f = b[e];
            b = b[d];
            const g = f.x - b.x,
              h = (f.x - a) / g;
            a = (a - b.x) / g;
            return (
              h * b.y +
              a * f.y +
              ((c[d] * (h ** 3 - h) + c[e] * (a ** 3 - a)) * g ** 2) / 6
            );
          }
          constructor(a, b) {
            this.V3 = a;
            this.TDa = b;
          }
        };
        var ccc = [
            "precision mediump float;uniform sampler2D a;varying highp vec2 vTexCoord;uniform int d;void main(){if(d==0){gl_FragColor=texture2D(a,vTexCoord);return;}vec2 b=vec2(vTexCoord.x,vTexCoord.y/2.-1e-3);vec4 e=texture2D(a,b);vec2 c=vec2(vTexCoord.x,vTexCoord.y/2.+.499);vec4 f=texture2D(a,c);gl_FragColor=vec4(f.rgb,e.r);}",
            "precision mediump float;uniform float D,E,F;uniform vec3 G;uniform sampler2D uPrevResult;varying vec2 vTexCoord;vec4 V(vec4 a,float b){return vec4(a.rgb+b,a.a);}vec4 W(vec4 b,float a){float c=a>0.?1./(1.-a):1.+a;return vec4((b.rgb-.5)*c+.5,b.a);}vec4 X(vec4 c,float a){vec3 d=vec3(.3086,.6094,.082),b=vec3(1.-a)*d;mat3 e=mat3(vec3(b.x)+vec3(a,0,0),vec3(b.y)+vec3(0,a,0),vec3(b.z)+vec3(0,0,a));return vec4(max(vec3(0),e*c.rgb),c.a);}vec4 Y(vec4 a,vec3 b){return vec4(a.rgb-(a.rgb-b)*.1,a.a);}void main(){gl_FragColor=texture2D(uPrevResult,vTexCoord);if(D!=0.)gl_FragColor=clamp(V(gl_FragColor,D),0.,1.);if(E!=0.)gl_FragColor=clamp(W(gl_FragColor,E),0.,1.);if(F!=1.)gl_FragColor=clamp(X(gl_FragColor,F),0.,1.);if(G!=vec3(0.,0.,0.))gl_FragColor=Y(gl_FragColor,G);}",
            {
              fragment:
                "precision mediump float;uniform float s;uniform vec2 uResolution;uniform sampler2D uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(s==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(uPrevResult,vTexCoord,vec2(1.,0.),s);}",
              output: "C",
            },
            {
              fragment:
                "precision mediump float;uniform float s;uniform vec2 uResolution;uniform sampler2D C,uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(s==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(C,vTexCoord,vec2(0.,1.),s);}",
              inputs: ["C"],
              output: "x",
            },
            {
              fragment:
                "precision mediump float;uniform float s,H,I,J;uniform sampler2D x,uPrevResult,z,A;varying vec2 vTexCoord;vec4 Z(vec4 a,vec4 c,float b){return b<=0.?a:mix(c,a,1.+b/20.);}vec4 _(vec4 a,float b){a.rgb=b>0.?mix(a.rgb,vec3(texture2D(A,vec2(a.r,.5)).r,texture2D(A,vec2(a.g,.5)).g,texture2D(A,vec2(a.b,.5)).b),b):mix(a.rgb,vec3(texture2D(z,vec2(a.r,.5)).r,texture2D(z,vec2(a.g,.5)).g,texture2D(z,vec2(a.b,.5)).b),-b);return a;}vec4 aa(vec4 a,float b){return vec4(a.r+b,a.g,a.b-b,a.a);}void main(){gl_FragColor=s==0.?texture2D(uPrevResult,vTexCoord):texture2D(x,vTexCoord);if(H!=0.){vec4 a=texture2D(uPrevResult,vTexCoord);gl_FragColor=clamp(Z(a,gl_FragColor,H),0.,1.);}if(J!=0.)gl_FragColor=clamp(_(gl_FragColor,J),0.,1.);if(I!=0.)gl_FragColor=aa(gl_FragColor,I);}",
              inputs: ["x"],
            },
            {
              fragment:
                "precision mediump float;uniform float v;uniform vec2 uResolution;uniform sampler2D uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(v==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(uPrevResult,vTexCoord,vec2(1.,0.),15.);}",
              output: "C",
            },
            {
              fragment:
                "precision mediump float;uniform float v;uniform vec2 uResolution;uniform sampler2D C,uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(v==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(C,vTexCoord,vec2(0.,1.),15.);}",
              inputs: ["C"],
              output: "x",
            },
            {
              fragment:
                "precision mediump float;uniform float v,K,L,M,N,O;uniform vec2 uResolution;uniform sampler2D B,x,uPrevResult;varying vec2 vTexCoord;const mat4 y=mat4(.255,.341,.105,0.,.652,-.465,.319,0.,.093,.125,-.424,0.,0.,.5,.5,1.),P=mat4(1.,1.,1.,0.,1.944,-.748,-.08,0.,.793,0.,-2.161,0.,-1.368,.374,1.121,1.);float Q(vec3 a){vec3 b=vec3(.2125,.7154,.0721);return dot(a,b);}float R(in vec2 a){a=a*2.-1.,a.y*=1.25-.5*step(0.,a.y),a.xy*=a.xy,a.xy=clamp(a.xy,0.,1.),a*=255.,a=floor(a);return sqrt(clamp(a.x+a.y,0.,255.)/255.);}vec4 S(vec4 c,float a){vec3 d=vec3(.2125,.7154,.0721),b=vec3(1.-a)*d;mat3 e=mat3(vec3(b.x)+vec3(a,0,0),vec3(b.y)+vec3(0,a,0),vec3(b.z)+vec3(0,0,a));return vec4(clamp(e*c.rgb,0.,1.),c.a);}float T(in float a){return pow(1.-a,3.);}vec4 ba(vec4 a,float c){const mat3 d=mat3(.334,0,-.5,.333,.434,.25,.333,-.433,.251);vec3 b=d*a.rgb;b.gb+=.5;float e=R(b.gb),f=T(clamp(e,0.,1.));vec4 g=f*a,i=S(g,1.+c);return a.a*i+(1.-i.a)*a;}float w(float c,float a,float d,float b,float e){return b+(e-b)*(c-a)/(d-a);}float U(float a){float c=1.-step(.1429,a),d=step(.1429,a)-step(.2857,a),e=step(.2857,a)-step(.7143,a),f=step(.7143,a)-step(.8571,a),g=step(.8571,a),b=w(a,0.,.1429,0.,.75)*c;b+=w(a,.1429,.2857,.75,1.)*d,b+=w(a,.2857,.7143,1.,1.)*e,b+=w(a,.7143,.8571,1.,.75)*f,b+=w(a,.8571,1.,.75,0.)*g;return b;}vec4 ca(vec4 a,vec2 e,float f){float g=Q(a.rgb);vec4 b=vec4(a.rgb,a.a*U(g)),d=texture2D(x,e);b.rgb*=b.a,a.rgb*=a.a,d.a=1.;vec4 c=mix(d,b,1.+f);c=clamp(c,0.,1.),a=a.a*c+(1.-c.a)*a,a.rgb/=a.a;return a;}vec4 da(vec4 b,float c){vec4 a=y*b;float d=.8*step(0.,c)+.2,e=pow(a.r,3.),f=clamp(a.r*(1.+c*d),0.,1.);a.r=mix(a.r,f,e),b=P*a,b.r=clamp(b.r,0.,1.);return b;}vec4 ea(vec4 b,float c){vec4 a=y*b;float d=pow(1.-a.r,3.),e=clamp(a.r*(1.+c),0.,1.);a.r=mix(a.r,e,d),b=P*a,b.r=clamp(b.r,0.,1.);return b;}vec4 fa(vec4 a,float b){return vec4(mix(a.rgb,vec3(texture2D(B,vec2(a.r,.5)).r,texture2D(B,vec2(a.g,.5)).g,texture2D(B,vec2(a.b,.5)).b),b),a.a);}vec4 ga(vec4 b,vec2 d,vec2 a,float f){b.rgb*=b.a;float c=min(a.x,a.y);vec2 e=(d*2.-1.)/vec2(a.y/c,a.x/c);float g=clamp((length(e)-.7)/.6,0.,1.);b=mix(b,vec4(0.,0.,0.,1.),g*f),b.rgb/=b.a;return b;}void main(){gl_FragColor=texture2D(uPrevResult,vTexCoord);if(v!=0.)gl_FragColor=clamp(ca(gl_FragColor,vTexCoord,v),0.,1.);if(N!=0.)gl_FragColor=clamp(ba(gl_FragColor,N),0.,1.);if(L!=0.)gl_FragColor=clamp(da(gl_FragColor,L),0.,1.);if(M!=0.)gl_FragColor=clamp(ea(gl_FragColor,M),0.,1.);if(O!=0.)gl_FragColor=clamp(ga(gl_FragColor,vTexCoord,uResolution,O),0.,1.);if(K!=0.)gl_FragColor=fa(gl_FragColor,K);}",
              inputs: ["x"],
            },
          ],
          fcc = class {
            initialize(a) {
              a = new N6({ source: a.element });
              var b = {
                a,
                A: J6(dcc),
                z: J6(ecc),
                B: J6({ r: P6, g: P6, b: P6 }),
              };
              b = new Pbc({
                passes: ccc,
                textures: b,
                uniforms: vbc({ filter: __c.CQ, width: 0, height: 0, SG: !1 }),
              });
              const c = document.createElement("div"),
                d = new Qbc(() => Obc(c, { env: { devicePixelRatio: 1 } }));
              d.onContextLost = () => {
                d.restore();
              };
              d.load([a]);
              d.load(b);
              this.Wt.width &&
                this.Wt.height &&
                d.resize(this.Wt.width, this.Wt.height);
              this.renderer = d;
              this.effect = b;
              this.GF = a;
              this.$ra = !0;
              this.Md = setTimeout(() => this.dispose(), 16e3);
            }
            yxa({ image: a, bn: b, width: c, height: d }) {
              var e;
              this.HF.width = c;
              this.HF.height = d;
              const f = b.top,
                g = b.left,
                h = b.width;
              b = b.height;
              (e = this.lza) === null ||
                e === void 0 ||
                e.drawImage(a, g, f, h, b, 0, 0, c, d);
            }
            async render({ width: a, height: b, f4: c, x8: d }) {
              var e = c.source;
              const f = c.filter;
              c = c.SG;
              this.$ra || this.initialize(e);
              if (!this.renderer || !this.effect || !this.GF)
                throw Error("Renderer is not initialized");
              this.Md && clearTimeout(this.Md);
              this.Md = setTimeout(() => this.dispose(), 16e3);
              wbc(this.Wt, { width: a, height: b }) &&
                (this.renderer.resize(a, b),
                (this.Wt = { width: a, height: b }));
              this.hta !== e &&
                (e.type === "sprite"
                  ? (this.yxa({
                      image: e.element,
                      bn: e.bn,
                      width: a,
                      height: b,
                    }),
                    (this.GF.source = this.HF))
                  : (this.GF.source = e.element),
                (this.hta = e));
              this.renderer.update([this.GF]);
              this.effect.update({
                textures: { a: this.GF },
                uniforms: vbc({
                  filter: f !== null && f !== void 0 ? f : __c.CQ,
                  width: a,
                  height: b,
                  SG: c,
                }),
              });
              this.renderer.render(this.effect);
              e = this.renderer.canvas;
              await Ibc(a, b, { ...d, q1a: e });
              return e;
            }
            dispose() {
              var a;
              this.Md && clearTimeout(this.Md);
              (a = this.renderer) === null || a === void 0 || a.dispose();
              this.Md = this.effect = this.renderer = void 0;
              this.$ra = !1;
            }
            constructor() {
              this.$ra = !1;
              this.HF = document.createElement("canvas");
              this.lza = this.HF.getContext("2d");
              this.Wt = { width: 0, height: 0 };
            }
          },
          P6 = [
            { x: 0, y: 69 },
            { x: 79, y: 96 },
            { x: 127, y: 127 },
            { x: 255, y: 225 },
          ],
          dcc = {
            r: [
              { x: 0, y: 0 },
              { x: 77, y: 26 },
              { x: 179, y: 204 },
              { x: 255, y: 255 },
            ],
            g: [
              { x: 0, y: 0 },
              { x: 64, y: 38 },
              { x: 191, y: 217 },
              { x: 255, y: 255 },
            ],
            b: [
              { x: 0, y: 0 },
              { x: 85, y: 102 },
              { x: 170, y: 153 },
              { x: 255, y: 204 },
            ],
          },
          ecc = {
            r: [
              { x: 0, y: 0 },
              { x: 77, y: 26 },
              { x: 179, y: 51 },
              { x: 242, y: 255 },
            ],
            g: [
              { x: 0, y: 0 },
              { x: 64, y: 102 },
              { x: 153, y: 153 },
              { x: 255, y: 255 },
            ],
            b: [
              { x: 0, y: 0 },
              { x: 77, y: 79 },
              { x: 153, y: 153 },
              { x: 255, y: 255 },
            ],
          };
        var Ebc = { preview: 16, original: 64 },
          Fbc = { preview: [1, 16], original: [8, 8] };
        var gcc =
          __webpack_require__.p + "images/e694828c7d3a97c0dee391820fc30545.png";
        var hcc =
          __webpack_require__.p + "images/07878611c78aaa9c0e2eda483fe08332.png";
        var xbc = {
          id: "Identity.png",
          label: O("fLe00A"),
          kind: "customizable",
          kc: "nature",
          Zc: hcc,
          url: gcc,
        };
        var icc =
          __webpack_require__.p + "images/d9358a9e6dde836ced3b0922e479007e.png";
        var jcc =
          __webpack_require__.p + "images/da90523e2246079accbae25d3ffa0710.png";
        var kcc =
          __webpack_require__.p + "images/149b5e9fca7030eecac822a32a48b7b5.png";
        var lcc =
          __webpack_require__.p + "images/9546c040656f15b809f2d443ae8508af.png";
        var mcc =
          __webpack_require__.p + "images/da4b76c4a7e0de1e09159c19c0481cab.png";
        var ncc =
          __webpack_require__.p + "images/13132f0ad8c75823c5667b07fbee6aae.png";
        var occ =
          __webpack_require__.p + "images/07d2a32c3572173ee22f52429ce98d7f.png";
        var pcc =
          __webpack_require__.p + "images/1991ce17aee2d7e7294f730ab4d66115.png";
        var qcc =
          __webpack_require__.p + "images/5c55e0abf24e77b3ba835e5c95286ab2.png";
        var rcc =
          __webpack_require__.p + "images/59efc279840511b0830c97157e0c6500.png";
        var scc =
          __webpack_require__.p + "images/a5b0cbd58a540c1197cb7ef446636cb4.png";
        var tcc =
          __webpack_require__.p + "images/dd857b0989249f984aac1780e8855625.png";
        var ucc =
          __webpack_require__.p + "images/3dfdd87cc7077ae42ee5cd3b26177e81.png";
        var vcc =
          __webpack_require__.p + "images/f10f97041192805c1a343672f4d4338b.png";
        var wcc =
          __webpack_require__.p + "images/4b7b8649538c239046836bd73c59a94b.png";
        var xcc =
          __webpack_require__.p + "images/efbf7cdd0e2507f1f7b11c5813cf60b7.png";
        var ycc =
          __webpack_require__.p + "images/ea8a6982837c870f83b7b895be689964.png";
        var zcc =
          __webpack_require__.p + "images/d2148c0d28cc82c62d4edf1b667c456d.png";
        var Acc =
          __webpack_require__.p + "images/b44766e2ca38d7756a3b2ff1b60567bc.png";
        var Bcc =
          __webpack_require__.p + "images/2030b1590cdc40eaf4c6f4a18f45663c.png";
        var Ccc =
          __webpack_require__.p + "images/f6113e37b9c9e7a8940e057675428b49.png";
        var Dcc =
          __webpack_require__.p + "images/1b2bc3cb29aa4484d35e7e62e6a33962.png";
        var Ecc =
          __webpack_require__.p + "images/4465609fa80f43a97621522b6e535472.png";
        var Fcc =
          __webpack_require__.p + "images/754e070ddb12019e7f15edaa9e3f9071.png";
        var Gcc =
          __webpack_require__.p + "images/cb3a94549ced7d3fa4e80e90e95156ca.png";
        var Hcc =
          __webpack_require__.p + "images/6d9b801ba36b9f31a5d45387ed16c353.png";
        var Icc =
          __webpack_require__.p + "images/210b25e6e300f0938fd3a2e86b9f97b6.png";
        var Jcc =
          __webpack_require__.p + "images/7ab23b0ce88d93302738391e27e40dc6.png";
        var Kcc =
          __webpack_require__.p + "images/078dd8dbeb1817da9af998f01b8c2139.png";
        var Lcc =
          __webpack_require__.p + "images/e5e4829283ec91873b5054669558366c.png";
        var Mcc =
          __webpack_require__.p + "images/af53d6cd310b6897f41d23d1f1a7720f.png";
        var Ncc =
          __webpack_require__.p + "images/9e6b8ec788580b410dd14d4067ca194f.png";
        var Occ =
          __webpack_require__.p + "images/414ab0a0f0233baa9e6b60f34d622827.png";
        var Pcc =
          __webpack_require__.p + "images/076227a2465da7ca54cb2ec6a3bfdc9f.png";
        var Qcc =
          __webpack_require__.p + "images/1666a747d5de66894adb8fe79a6db6bd.png";
        var Rcc =
          __webpack_require__.p + "images/4178ab2ee83d41d38c4b073c407506fc.png";
        var Scc =
          __webpack_require__.p + "images/1ca85563dfd639f9ba308539ef5bf5e4.png";
        var Tcc =
          __webpack_require__.p + "images/a9580853f3faffc605bc67a9c9fbae6f.png";
        var Ucc =
          __webpack_require__.p + "images/4101b6ef4260d077d23ebcda9be39670.png";
        var Vcc =
          __webpack_require__.p + "images/900d35ab6699a610ffe54dacf8857a73.png";
        var Wcc =
          __webpack_require__.p + "images/b07d8b23f48115cdf65a62208a182b67.png";
        var Xcc =
          __webpack_require__.p + "images/2572a5728c85065afd77303d7f0621a9.png";
        var Ycc =
          __webpack_require__.p + "images/1ba96d2bc62a7b7c17710d8c0f05d8d1.png";
        var Zcc =
          __webpack_require__.p + "images/9a8bcd5cbe986c7acdae01b3d501c473.png";
        var $cc =
          __webpack_require__.p + "images/e77194160d4e990f934fd090dfaa63f8.png";
        var adc =
          __webpack_require__.p + "images/b01c2b889e09e7e38181d2bcc4a64c92.png";
        var bdc =
          __webpack_require__.p + "images/11d6435305e032af3b54e69b52cc6a01.png";
        var cdc =
          __webpack_require__.p + "images/ceef521be0c3c253e41feb566fffe89b.png";
        var ddc =
          __webpack_require__.p + "images/6c27e2bd85ef911432c28953295a8434.png";
        var edc =
          __webpack_require__.p + "images/8960ab97f7fae540daed9e4a5f764d77.png";
        var fdc =
          __webpack_require__.p + "images/80f4d13411753c6f5114b5a344e112d4.png";
        var gdc =
          __webpack_require__.p + "images/c126186de607ab11467a0ae2a9d0d105.png";
        var hdc =
          __webpack_require__.p + "images/8a48dcaf27cd64cbe456dcc69440209c.png";
        var idc =
          __webpack_require__.p + "images/50ca98d78af1c06005a77d481e255690.png";
        var jdc =
          __webpack_require__.p + "images/abe5000aa4b60bbe62b3fb4fee2fcee3.png";
        var kdc =
          __webpack_require__.p + "images/545a538523c57c272a470374539ce38c.png";
        var ldc =
          __webpack_require__.p + "images/989fd53124028c2417bcd4194a211375.png";
        var mdc =
          __webpack_require__.p + "images/62f4bb2f70ee8c045027dd06d398ba52.png";
        var ndc =
          __webpack_require__.p + "images/d78ca451636460b12918994de70a7f66.png";
        var odc =
          __webpack_require__.p + "images/1cdf3dc944eb3a6d2e0c7acfff9f5bce.png";
        var pdc =
          __webpack_require__.p + "images/51be7ac6bea359529a8d0028a04ab1f3.png";
        var qdc =
          __webpack_require__.p + "images/6ef6d7a39a1b29fe250a7dedb5f630ec.png";
        var rdc =
          __webpack_require__.p + "images/b7556845ac7534c727252494294e83e8.png";
        var sdc =
          __webpack_require__.p + "images/245b4738ac610108221595592b9da03a.png";
        var tdc =
          __webpack_require__.p + "images/512215da844293c53da8c8d2fec46e63.png";
        var udc =
          __webpack_require__.p + "images/152c343b600cd0eea7b454bef0aaa5c0.png";
        var vdc =
          __webpack_require__.p + "images/59fbf238cba695b04b5452b9e5fe31da.png";
        var wdc =
          __webpack_require__.p + "images/5b3206c52b32e989b31719f4ab457553.png";
        var xdc =
          __webpack_require__.p + "images/9d16aa93501d35eac5ca6178f99abc86.png";
        var ydc =
          __webpack_require__.p + "images/43d25e0ae34f51baace7f750e42ef95d.png";
        var zdc =
          __webpack_require__.p + "images/efc85a5cac4852a51a75ba4dbed1d6a0.png";
        var Adc =
          __webpack_require__.p + "images/27b9060ee36c85a8c9b3a963e4de4b2f.png";
        var Bdc =
          __webpack_require__.p + "images/f841787161d32dd967cdc5f5de2049e9.png";
        var Cdc =
          __webpack_require__.p + "images/58a18616b2555416c4377a48848467c7.png";
        var Ddc =
          __webpack_require__.p + "images/a56c0ee3b8a2ff064f3abfcbc4c75ba7.png";
        var Edc =
          __webpack_require__.p + "images/f05eaca7fc51283c8fd01c80ee4e5fa4.png";
        var Fdc =
          __webpack_require__.p + "images/a626c549013c96e354e6a658ebfb7ce3.png";
        var Gdc =
          __webpack_require__.p + "images/ce21ae1750832f407264faf69880a539.png";
        var Hdc =
          __webpack_require__.p + "images/c7593c863309e2b56e7196c9f9b67ce3.png";
        var Idc =
          __webpack_require__.p + "images/7ddbccf54d461ad84107f4e3b7ca6427.png";
        var Jdc =
          __webpack_require__.p + "images/7e792d8c53e3a3dff6363865d7ab1a33.png";
        var Kdc =
          __webpack_require__.p + "images/cf0c16e5aaf7a0b5938e5a942ac5ae5f.png";
        var Ldc =
          __webpack_require__.p + "images/853704c1a25e6bba68ceb5045abe0f10.png";
        var Mdc =
          __webpack_require__.p + "images/732ff254a367f61bfd40b977f3adf2a4.png";
        var Ndc =
          __webpack_require__.p + "images/651fe2e84b34ac0f9f9beb4b61c96351.png";
        var Odc =
          __webpack_require__.p + "images/b124943edf93ad14fd395d37e1534046.png";
        var Pdc =
          __webpack_require__.p + "images/09c249cd5bbb7f14ee99474adae984b1.png";
        var Qdc =
          __webpack_require__.p + "images/f3f66f3682a78f41e001f53efa276a03.png";
        var Rdc =
          __webpack_require__.p + "images/b4146929cef4dd1293a25653090dc0bb.png";
        var Sdc =
          __webpack_require__.p + "images/25da2ebb3be5f7e46eab66f07b6c4153.png";
        var Tdc =
          __webpack_require__.p + "images/2b136f904760ca4a73eb2d33a7c76f59.png";
        var Udc =
          __webpack_require__.p + "images/07fd201b61c5f2ad1acfc0a2949a376d.png";
        var Vdc =
          __webpack_require__.p + "images/abd6c9281a0f9460a54c7802fc79b991.png";
        var Wdc =
          __webpack_require__.p + "images/d5971b885d5817ed837c4d5579c4a2d9.png";
        var Xdc =
          __webpack_require__.p + "images/c938bae1469a4c853f9b75125ec30bbf.png";
        var Ydc =
          __webpack_require__.p + "images/5ad4cc7995eb8f5583172381614022b2.png";
        var Zdc =
          __webpack_require__.p + "images/06d7bab44eec7297cbae1abae2bdff06.png";
        var $dc =
          __webpack_require__.p + "images/cef897966fc9b03e862e38086d6f823b.png";
        var aec =
          __webpack_require__.p + "images/4a9dd22aa119fe9f7f64e1a5cd6c57a3.png";
        var bec =
          __webpack_require__.p + "images/d4efb11fd86636ba400555e936856494.png";
        var cec = [
          {
            id: "Beachy_7.png",
            label: O("HDFThQ"),
            kind: "customizable",
            kc: "nature",
            Zc: ldc,
            url: occ,
          },
          {
            id: "Natural_2.png",
            label: O("YAPf/w"),
            kind: "customizable",
            kc: "nature",
            Zc: Edc,
            url: Hcc,
          },
          {
            id: "Natural_3.png",
            label: O("c6WUDA"),
            kind: "customizable",
            kc: "nature",
            Zc: Fdc,
            url: Icc,
          },
          {
            id: "Natural_6.png",
            label: O("MpdCSQ"),
            kind: "customizable",
            kc: "nature",
            Zc: Hdc,
            url: Kcc,
          },
          {
            id: "Pastel_4.png",
            label: O("6fEl8w"),
            kind: "customizable",
            kc: "nature",
            Zc: Pdc,
            url: Scc,
          },
          {
            id: "Natural_4.png",
            label: O("lBQzew"),
            kind: "customizable",
            kc: "nature",
            Zc: Gdc,
            url: Jcc,
          },
          {
            id: "Nordic_6.png",
            label: O("kfbqGw"),
            kind: "customizable",
            kc: "warm",
            Zc: Mdc,
            url: Pcc,
          },
          {
            id: "Vivid_2.png",
            label: O("P+NxQg"),
            kind: "customizable",
            kc: "warm",
            Zc: Ydc,
            url: adc,
          },
          {
            id: "Vintage_6.png",
            label: O("kFc7YQ"),
            kind: "customizable",
            kc: "warm",
            Zc: Wdc,
            url: Zcc,
          },
          {
            id: "Natural_8.png",
            label: O("o30VFg"),
            kind: "customizable",
            kc: "warm",
            Zc: Idc,
            url: Lcc,
          },
          {
            id: "Intensify_3.png",
            label: O("Pv95HQ"),
            kind: "customizable",
            kc: "warm",
            Zc: Cdc,
            url: Fcc,
          },
          {
            id: "Cinematic_4.png",
            label: O("U25i1A"),
            kind: "customizable",
            kc: "warm",
            Zc: udc,
            url: xcc,
          },
          {
            id: "Cinematic_8.png",
            label: O("TFR/QA"),
            kind: "customizable",
            kc: "cool",
            Zc: wdc,
            url: zcc,
          },
          {
            id: "Pastel_6.png",
            label: O("r3j+DA"),
            kind: "customizable",
            kc: "cool",
            Zc: Rdc,
            url: Ucc,
          },
          {
            id: "Nordic_2.png",
            label: O("b1vgNg"),
            kind: "customizable",
            kc: "cool",
            Zc: Jdc,
            url: Mcc,
          },
          {
            id: "Beachy_3.png",
            label: O("0apdAw"),
            kind: "customizable",
            kc: "cool",
            Zc: kdc,
            url: ncc,
          },
          {
            id: "Beachy_2.png",
            label: O("zBQSeQ"),
            kind: "customizable",
            kc: "cool",
            Zc: jdc,
            url: mcc,
          },
          {
            id: "Nordic_7.png",
            label: O("985BiQ"),
            kind: "customizable",
            kc: "cool",
            Zc: Ndc,
            url: Qcc,
          },
          {
            id: "Intensify_7.png",
            label: O("XexS2w"),
            kind: "customizable",
            kc: "vivid",
            Zc: Ddc,
            url: Gcc,
          },
          {
            id: "Vivid_4.png",
            label: O("Yc4EHg"),
            kind: "customizable",
            kc: "vivid",
            Zc: $dc,
            url: cdc,
          },
          {
            id: "Vintage_3.png",
            label: O("Ul3/3g"),
            kind: "customizable",
            kc: "vivid",
            Zc: Udc,
            url: Xcc,
          },
          {
            id: "Cinematic_7.png",
            label: O("NhUn/w"),
            kind: "customizable",
            kc: "vivid",
            Zc: vdc,
            url: ycc,
          },
          {
            id: "Intensify_2.png",
            label: O("uJAWlA"),
            kind: "customizable",
            kc: "vivid",
            Zc: Bdc,
            url: Ecc,
          },
          {
            id: "Vivid_3.png",
            label: O("A9XZbA"),
            kind: "customizable",
            kc: "vivid",
            Zc: Zdc,
            url: bdc,
          },
          {
            id: "Nordic_5.png",
            label: O("kvyA3w"),
            kind: "customizable",
            kc: "soft",
            Zc: Ldc,
            url: Occ,
          },
          {
            id: "Pastel_7.png",
            label: O("aiwaSg"),
            kind: "customizable",
            kc: "soft",
            Zc: Sdc,
            url: Vcc,
          },
          {
            id: "Faded_8.png",
            label: O("obD0Ug"),
            kind: "customizable",
            kc: "soft",
            Zc: Adc,
            url: Dcc,
          },
          {
            id: "Pastel_5.png",
            label: O("CVlIoA"),
            kind: "customizable",
            kc: "soft",
            Zc: Qdc,
            url: Tcc,
          },
          {
            id: "Soft_6.png",
            label: O("F9BgQg"),
            kind: "customizable",
            kc: "soft",
            Zc: Tdc,
            url: Wcc,
          },
          {
            id: "Clean_8.png",
            label: O("AYm7pQ"),
            kind: "customizable",
            kc: "soft",
            Zc: xdc,
            url: Acc,
          },
          {
            id: "Vintage_8.png",
            label: O("/nucvw"),
            kind: "customizable",
            kc: "vintage",
            Zc: Xdc,
            url: $cc,
          },
          {
            id: "Nordic_4.png",
            label: O("1YyMlw"),
            kind: "customizable",
            kc: "vintage",
            Zc: Kdc,
            url: Ncc,
          },
          {
            id: "Vintage_4.png",
            label: O("cv++cA"),
            kind: "customizable",
            kc: "vintage",
            Zc: Vdc,
            url: Ycc,
          },
          {
            id: "Bright_1.png",
            label: O("K+2BEQ"),
            kind: "customizable",
            kc: "vintage",
            Zc: pdc,
            url: scc,
          },
          {
            id: "Bright_6.png",
            label: O("K5piuQ"),
            kind: "customizable",
            kc: "vintage",
            Zc: qdc,
            url: tcc,
          },
          {
            id: "Pastel_2.png",
            label: O("TcYqAw"),
            kind: "customizable",
            kc: "vintage",
            Zc: Odc,
            url: Rcc,
          },
          {
            id: "Black_and_white_8.png",
            label: O("vOtf6w"),
            kind: "customizable",
            kc: "mono",
            Zc: odc,
            url: rcc,
          },
          {
            id: "Black_and_white_4.png",
            label: O("8qC8JQ"),
            kind: "customizable",
            kc: "mono",
            Zc: mdc,
            url: pcc,
          },
          {
            id: "BW_3.png",
            label: O("0o863w"),
            kind: "customizable",
            kc: "mono",
            Zc: sdc,
            url: vcc,
          },
          {
            id: "Black_and_white_5.png",
            label: O("iNecng"),
            kind: "customizable",
            kc: "mono",
            Zc: ndc,
            url: qcc,
          },
          {
            id: "BW_6.png",
            label: O("/pTlCw"),
            kind: "customizable",
            kc: "mono",
            Zc: tdc,
            url: wcc,
          },
          {
            id: "BW_2.png",
            label: O("WxK/vg"),
            kind: "customizable",
            kc: "mono",
            Zc: rdc,
            url: ucc,
          },
          {
            id: "Colorful_4.png",
            label: O("w1ImvA"),
            kind: "customizable",
            kc: "colorpop",
            Zc: ydc,
            url: Bcc,
          },
          {
            id: "Colorful_7.png",
            label: O("dAzTAg"),
            kind: "customizable",
            kc: "colorpop",
            Zc: zdc,
            url: Ccc,
          },
          {
            id: "Artsy_5.png",
            label: O("2nL4TQ"),
            kind: "customizable",
            kc: "colorpop",
            Zc: gdc,
            url: jcc,
          },
          {
            id: "Artsy_7.png",
            label: O("GqgURQ"),
            kind: "customizable",
            kc: "colorpop",
            Zc: hdc,
            url: kcc,
          },
          {
            id: "Artsy_1.png",
            label: O("JCswog"),
            kind: "customizable",
            kc: "colorpop",
            Zc: fdc,
            url: icc,
          },
          {
            id: "Artsy_8.png",
            label: O("A1VPvQ"),
            kind: "customizable",
            kc: "colorpop",
            Zc: idc,
            url: lcc,
          },
          {
            id: "xpro_negative.png",
            label: O("blxDyQ"),
            kind: "customizable",
            kc: "colorpop",
            Zc: aec,
            url: ddc,
          },
          {
            id: "xpro_positive.png",
            label: O("zl3u7Q"),
            kind: "customizable",
            kc: "colorpop",
            Zc: bec,
            url: edc,
          },
        ];
        var ybc =
          __webpack_require__.p + "images/60e13142604d9410c31e118ca9ecba71.png";
        var dec = [
            "precision mediump float;uniform sampler2D a;varying highp vec2 vTexCoord;uniform int d;void main(){if(d==0){gl_FragColor=texture2D(a,vTexCoord);return;}vec2 b=vec2(vTexCoord.x,vTexCoord.y/2.-1e-3);vec4 e=texture2D(a,b);vec2 c=vec2(vTexCoord.x,vTexCoord.y/2.+.499);vec4 f=texture2D(a,c);gl_FragColor=vec4(f.rgb,e.r);}",
            "precision mediump float;uniform sampler2D uPrevResult,h;uniform float t,m;uniform vec2 o;varying mediump vec2 vTexCoord;const vec3 A=vec3(.4545),n=vec3(2.2);vec2 i(vec3 d,vec3 e,vec2 f,vec2 g,vec2 a,float j){vec3 b=d+e;vec2 k=mix(f,g,b.rg*j)*a;float c=b.b*a.x;vec2 l=vec2(fract(c),floor(c)*a.y);return k+l;}void main(){vec4 l=texture2D(uPrevResult,vTexCoord);vec2 b=vec2(.5/m),c=vec2((m-.5)/m),d=vec2(1./o.y,1./o.x);float p=m-1.,e=1./p;if(t==0.){gl_FragColor=l;return;}vec3 q=l.rgb*p,f=floor(q),g=fract(q);vec4 r=texture2D(h,i(f,vec3(0.,0.,0.),b,c,d,e)),j=vec4(0.),k=vec4(0.),s=texture2D(h,i(f,vec3(1.,1.,1.),b,c,d,e));vec3 a=vec3(0.);if(g.r>g.g)if(g.g>g.b)j=texture2D(h,i(f,vec3(1.,0.,0.),b,c,d,e)),k=texture2D(h,i(f,vec3(1.,1.,0.),b,c,d,e)),a=g.rgb;else if(g.b>g.r)j=texture2D(h,i(f,vec3(0.,0.,1.),b,c,d,e)),k=texture2D(h,i(f,vec3(1.,0.,1.),b,c,d,e)),a=g.brg;else j=texture2D(h,i(f,vec3(1.,0.,0.),b,c,d,e)),k=texture2D(h,i(f,vec3(1.,0.,1.),b,c,d,e)),a=g.rbg;else if(g.r>g.b)j=texture2D(h,i(f,vec3(0.,1.,0.),b,c,d,e)),k=texture2D(h,i(f,vec3(1.,1.,0.),b,c,d,e)),a=g.grb;else if(g.b>g.g)j=texture2D(h,i(f,vec3(0.,0.,1.),b,c,d,e)),k=texture2D(h,i(f,vec3(0.,1.,1.),b,c,d,e)),a=g.bgr;else j=texture2D(h,i(f,vec3(0.,1.,0.),b,c,d,e)),k=texture2D(h,i(f,vec3(0.,1.,1.),b,c,d,e)),a=g.gbr;float v=1.-a.r,w=a.r-a.g,x=a.g-a.b,y=a.b;l.rgb=pow(l.rgb,n),r.rgb=pow(r.rgb,n),j.rgb=pow(j.rgb,n),k.rgb=pow(k.rgb,n),s.rgb=pow(s.rgb,n);vec3 z=v*r.rgb+w*j.rgb+x*k.rgb+y*s.rgb,u=mix(l.rgb,z,t);u=pow(u,A),gl_FragColor=vec4(u,l.a);}",
            "#version 100\nprecision mediump float;varying vec2 vTexCoord;uniform float V,W,X,Y,Z,_,aa,ba,ca,da;uniform sampler2D uPrevResult,ta;vec4 F=vec4(.55,.24,1.,1.);float t(vec4 a){return dot(a.rgb,vec3(.2126,.7152,.0722));}const mat3 ea=mat3(.412456,.357576,.180438,.212673,.715152,.072175,.019334,.119192,.950304),fa=mat3(3.240454,-1.537138,-.498531,-.969266,1.876011,.041556,.055643,-.204026,1.057225),ua=mat3(.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296),va=mat3(.986993,-.147054,.159963,.432305,.51836,.049291,-.008529,.040043,.968487),wa=mat3(2.326495,-.79599,-.381285,-.969244,1.875968,.041555,.055631,-.203978,1.056972);vec3 v(vec3 a){return pow(a,vec3(.454545));}vec3 l(vec3 a){return pow(a,vec3(2.2));}vec3 C(vec3 a){return a*fa;}vec3 xa(vec3 a){return a*ea;}vec3 p(vec3 a){float e=.412221*a.r+.536333*a.g+.051446*a.b,f=.211903*a.r+.6807*a.g+.107397*a.b,g=.088302*a.r+.281719*a.g+.629979*a.b,b=pow(e,.333333),c=pow(f,.333333),d=pow(g,.333333);return vec3(.210454*b+.793618*c-.004072*d,1.977998*b-2.428592*c+.450594*d,.025904*b+.782772*c-.808676*d);}vec3 A(vec3 a){float b=a.r+.396338*a.g+.215804*a.b,c=a.r-.105561*a.g-.063854*a.b,d=a.r-.089484*a.g-1.291486*a.b,e=b*b*b,f=c*c*c,g=d*d*d;return vec3(4.076742*e-3.307712*f+.23097*g,-1.268438*e+2.609757*f-.341319*g,-.004196*e-.703419*f+1.707615*g);}vec3 ga(vec3 a){vec3 b=A(a);return xa(b);}vec3 K(vec3 a){return a*ea*ua;}vec3 ha(vec3 a){return a*va*fa;}vec3 O(vec3 a){return a*wa;}vec3 ya(vec3 b){if(all(greaterThanEqual(b,vec3(0.))))return b;vec3 c=p(b),h=c,a;float d=0.,e=1.;for(int i=0;i<8;i++){float f=(d+e)*.5;h.yz=c.yz*f,a=ga(h);vec3 j=O(a),k=C(a);if(all(greaterThanEqual(j,vec3(0.))))d=f;else e=f;}vec3 g=C(a);g=max(g,vec3(0.));return g;}vec3 ia(vec3 b){if(all(greaterThanEqual(b,vec3(0.)))&&all(lessThanEqual(b,vec3(1.))))return b;vec3 c=p(b),h=c,a;float d=0.,e=1.;for(int i=0;i<8;i++){float f=(d+e)*.5;h.yz=c.yz*f,a=ga(h);vec3 j=O(a),k=C(a);if(all(greaterThanEqual(j,vec3(0.)))&&all(lessThanEqual(k,vec3(1.))))d=f;else e=f;}vec3 g=C(a);g=clamp(g,vec3(0.),vec3(1.));return g;}vec4 ja(vec4 a){float b=max(max(a.r,a.g),a.b);if(b>1.000001)a.rgb/=b;return a;}vec4 za(vec4 a){if(all(lessThanEqual(a.rgb,vec3(1.)))&&all(greaterThanEqual(a.rgb,vec3(0.))))return a;a=any(lessThan(a.rgb,vec3(0.)))?vec4(ya(a.rgb),a.a):a;vec4 f=vec4(ia(a.rgb),a.a),g=ja(a);vec3 b=p(a.rgb),c=p(f.rgb),d=p(g.rgb);float h=abs(b.r-d.r)*4.;vec2 i=vec2(b.g-c.g,b.b-c.b);float e=length(i)*1.,j=h+e,k=e/j,m=clamp(k,0.,1.);vec3 n=mix(c,d,m);return vec4(A(n),a.a);}float u(float c,float a,float d,float b,float e){return (c-a)*(e-b)/(d-a)+b;}vec4 Aa(vec4 a,float b){vec3 c=a.rgb;float d=pow(2.,b);c*=d;return vec4(c,a.a);}vec4 ka(vec4 b,float c){float a=t(b);if(a<1e-6)return b;a=clamp(a,0.,1.);float d=pow(2.,c),e=1.-pow(1.-a,d),f=e/a;b.rgb*=f;return b;}vec4 Ba(vec4 a,float b){b*=2.5;if(b<0.){float c=max(b,-1.333);a=ka(a,c),a=b<-1.333?Aa(a,b+1.333):a;}else a=ka(a,b);return a;}vec3 P(vec3 a,float b){a.g*=b,a.b*=b;return a;}vec4 la(vec4 a,float b){vec3 c=p(a.rgb);float d=u(b,-1.,1.,0.,2.);vec3 e=P(c,d);return vec4(A(e),a.a);}vec4 Ca(vec4 c,float d){d=u(d,-1.,1.,0.,2.);vec3 a=p(c.rgb);float b=a.x<1e-6?0.:distance(vec2(0.),vec2(a.y,a.z)/a.x)*3.;b=pow(b,.75),b=clamp(b,0.,1.);if(b==0.)return c;float e=1.-b;vec3 f=P(a,d),g=mix(a,f,e);return vec4(A(g),c.a);}float ma(float a,float b){a=clamp(a,0.,1.);return pow(a,b);}float na(float a,float b){float c=pow(2.,b*2.);return a<.5?ma(a*2.,c)/2.:1.-ma(2.-2.*a,c)/2.;}vec4 Da(vec4 a,float c){float b=t(a);if(b<=0.)return a;b=pow(b,.5);float d=na(b,c),e=d/max(b,1e-4);a.rgb*=e,a=la(a,c/6.),a.rgb=clamp(a.rgb,0.,1.);return a;}vec4 Ea(vec4 a,float d){float b=t(a),e=sign(d),f=.1*pow(d,2.)*e,c=u(b,0.,1.,-f,1.);if(c<=0.)return vec4(0.,0.,0.,a.a);if(b<=0.)return vec4(vec3(c),a.a);float g=c/max(b,1e-4);a.rgb*=g,a.rgb=clamp(a.rgb,0.,1.),a.rgb=mix(vec3(c),a.rgb,clamp(1./g,0.,1.));return a;}vec4 Fa(vec4 a,float b){float c=t(a),d=pow(2.,b),e=.999999/c,f=min(d,e);a.rgb*=f;return a;}float oa(float a,float c){float b=pow(1.-a,3.),d=b*(a*c)+(1.-b)*a;return d;}vec4 Ga(vec4 a,float c){float b=t(a),d=pow(b,.4545),e=oa(d,c+1.),f=pow(e,2.20022),g=f/max(b,1e-4);a.rgb*=g,a.rgb=clamp(a.rgb,0.,1.);return a;}float pa(float a,float c){float b=pow(a,3.),d=b*1.+(1.-b)*a;return mix(a,d,c);}vec4 Ha(vec4 a,float c){float b=t(a),d=pow(b,.4545),e=pa(d,c),f=pow(e,2.20022),g=f/max(b,1e-4);a.rgb*=g,a.rgb=clamp(a.rgb,0.,1.);return a;}vec4 Ia(vec4 c,vec3 d,vec3 e){vec3 a=l(e),b=l(d);float k=t(vec4(b,1.)),m=t(vec4(a,1.));b/=k,a/=m;vec3 f=K(c.rgb),g=K(b),h=K(a),i=h/g,j=f*i,n=ha(j);return vec4(n,c.a);}vec3 qa(float a,float b){float c=u(b,-1.,1.,0.,1.),d=u(a,-1.,1.,0.,1.);return texture2D(ta,vec2(c,d)).rgb;}void main(){vec2 b=vTexCoord;vec4 a=texture2D(uPrevResult,b);a.rgb=l(a.rgb);vec3 c=qa(ca,da);a=c!=vec3(1.,1.,1)?Ia(a,vec3(1,1,1),c):a,a=Y!=0.?Ea(a,Y):a,a=Z!=0.?Fa(a,Z):a,a=V!=0.?Ba(a,V):a,a=_!=0.?Ga(a,_):a,a=aa!=0.?Ha(a,aa):a,a=ba!=0.?Da(a,ba):a,a=W!=0.?Ca(a,W):a,a=X!=0.?la(a,X):a,a=za(a),a=vec4(v(a.rgb),a.a),gl_FragColor=a;}",
          ],
          fec = class {
            async initialize(a) {
              try {
                const b = new N6({ source: a.element });
                await Abc(this);
                const c = new Pbc({
                    passes: dec,
                    textures: { a: b, ta: this.store.B0a, h: this.store.Nra },
                    uniforms: Gbc({
                      jf: [],
                      width: 0,
                      height: 0,
                      SG: !1,
                      mN: !1,
                    }),
                  }),
                  d = document.createElement("div"),
                  e = new Qbc(() => Obc(d, { env: { devicePixelRatio: 1 } }));
                e.onContextLost = () => {
                  e.restore();
                };
                e.load([b]);
                e.load(c);
                this.Wt.width &&
                  this.Wt.height &&
                  e.resize(this.Wt.width, this.Wt.height);
                this.renderer = e;
                this.SZ = c;
                this.GF = b;
                this.Sca = xbc;
                this.Rca = this.store.Nra;
                this.Qca = "original";
                this.Md = setTimeout(() => this.dispose(), 16e3);
              } catch (b) {
                throw (this.dispose(), b);
              }
            }
            yxa({ image: a, bn: b, width: c, height: d }) {
              var e;
              this.HF.width = c;
              this.HF.height = d;
              const f = b.top,
                g = b.left,
                h = b.width;
              b = b.height;
              (e = this.lza) === null ||
                e === void 0 ||
                e.drawImage(a, g, f, h, b, 0, 0, c, d);
            }
            async render({ width: a, height: b, f4: c, x8: d }) {
              var e = c.source,
                f = c.jf;
              const g = c.SG;
              c = c.mN;
              await Bbc(this, e);
              if (
                !(
                  this.renderer &&
                  this.SZ &&
                  this.GF &&
                  this.Rca &&
                  this.Qca &&
                  this.Sca
                )
              )
                throw Error("Renderer is not initialized");
              this.Md && clearTimeout(this.Md);
              this.Md = setTimeout(() => this.dispose(), 16e3);
              wbc(this.Wt, { width: a, height: b }) &&
                (this.renderer.resize(a, b),
                (this.Wt = { width: a, height: b }));
              let h = this.GF;
              this.hta !== e &&
                (this.renderer.release([h]),
                e.type === "sprite"
                  ? (this.yxa({
                      image: e.element,
                      bn: e.bn,
                      width: a,
                      height: b,
                    }),
                    (h = new N6({ source: this.HF })))
                  : (h = new N6({ source: e.element })),
                this.renderer.load([h]),
                (this.GF = h),
                (this.hta = e));
              this.renderer.update([h]);
              e = Dbc(f);
              const k = c ? "preview" : "original";
              if (e && (this.Sca.id !== e.id || this.Qca !== k)) {
                var l = await __c.vS(c ? e.Zc : e.url);
                l = new N6({ source: l });
                this.renderer.load([l]);
                this.Sca = e;
                this.Rca = l;
                this.Qca = k;
              }
              this.SZ.update({
                textures: { a: h, h: this.Rca },
                uniforms: Gbc({ jf: f, width: a, height: b, SG: g, mN: c }),
              });
              this.renderer.load(this.SZ);
              this.renderer.render(this.SZ);
              f = this.renderer.canvas;
              await Ibc(a, b, { ...d, q1a: f });
              return f;
            }
            dispose() {
              var a;
              this.Md && clearTimeout(this.Md);
              (a = this.renderer) === null || a === void 0 || a.dispose();
              this.Qca =
                this.Rca =
                this.Sca =
                this.V0 =
                this.Md =
                this.SZ =
                this.renderer =
                  void 0;
            }
            constructor() {
              this.store = eec;
              this.V0 = void 0;
              this.HF = document.createElement("canvas");
              this.lza = this.HF.getContext("2d");
              this.Wt = { width: 0, height: 0 };
            }
          },
          Cbc = (a) => cec.find((b) => b.id === a);
        var gec = class {
          static A(a) {
            __c.P(a, { Wha: Tbc.ref, Ora: Tbc.ref, B0a: Sbc, Nra: Sbc });
          }
          get B0a() {
            var a;
            return new N6({
              source:
                (a = this.Wha) !== null && a !== void 0
                  ? a
                  : new ImageData(1, 1),
            });
          }
          get Nra() {
            var a;
            return new N6({
              source:
                (a = this.Ora) !== null && a !== void 0
                  ? a
                  : new ImageData(1, 1),
            });
          }
          constructor() {
            this.Wha = (gec.A(this), void 0);
          }
        };
        var { jpa: Lbc } = { jpa: new fcc() },
          hec,
          eec = new gec(),
          Kbc;
        hec = { jpa: new fec() };
        ({ jpa: Kbc } = hec);
        __c.PEb = {
          Q4a: Zbc(
            ({
              source: a,
              filter: b,
              modifiers: c,
              jf: d,
              P: e,
              paused: f,
              mN: g,
              objectFit: h,
              vu: k,
            }) => {
              var l;
              const m = bcc(null),
                n =
                  ((l = m.current) === null || l === void 0
                    ? void 0
                    : l.ownerDocument.defaultView) || window;
              acc(() => {
                if (m.current) {
                  var p = m.current,
                    q = Hbc()
                      ? p.getContext("bitmaprenderer")
                      : p.getContext("2d");
                  if (q) {
                    var r = 0,
                      t = async () => {
                        let y = 0,
                          A = 0;
                        if (e) (y = e.width), (A = e.height);
                        else
                          switch (a.type) {
                            case "video":
                              y = a.element.videoWidth;
                              A = a.element.videoHeight;
                              break;
                            case "sprite":
                              y = a.bn.width;
                              A = a.bn.height;
                              break;
                            case "image":
                            case "canvas":
                              (y = a.element.width), (A = a.element.height);
                          }
                        A = Jbc(a, c) ? A / 2 : A;
                        var z, C;
                        /iphone|android/i.test(
                          (C = window) === null || C === void 0
                            ? void 0
                            : (z = C.navigator) === null || z === void 0
                            ? void 0
                            : z.userAgent
                        ) &&
                          ((z = y / A),
                          (C = z > 1),
                          (y = Math.round(Math.min(y, C ? z * 720 : 720))),
                          (A = Math.round(Math.min(A, C ? 720 : 720 / z))));
                        await Mbc({
                          mN: !!g,
                          Dob: { width: y, height: A },
                          vu: k,
                          f4: { source: a, modifiers: c, filter: b, jf: d },
                          x8: { browserWindow: n, xtb: p, context: q },
                        });
                      },
                      v = async () => {
                        a: switch (a.type) {
                          case "image":
                          case "sprite":
                            var y = a.element.complete;
                            break a;
                          case "video":
                            y =
                              a.element.readyState >=
                              HTMLMediaElement.HAVE_CURRENT_DATA;
                            break a;
                          case "canvas":
                            y = !0;
                            break a;
                          default:
                            throw new __c.E(a);
                        }
                        y ? t() : (r = L6(r, v));
                      },
                      w = async () => {
                        t();
                        r = L6(r, w);
                      },
                      x = (d === null || d === void 0 ? 0 : d.length)
                        ? Ubc(
                            () => Nbc(d),
                            () => {
                              r =
                                a.type === "image" || a.type === "sprite" || f
                                  ? L6(r, v)
                                  : L6(r, w);
                            },
                            { equals: Rbc.structural, delay: 25 }
                          )
                        : void 0;
                    if (a.type === "image" || a.type === "sprite" || f)
                      return (
                        (r = L6(r, v)),
                        () => {
                          cancelAnimationFrame(r);
                          x === null || x === void 0 || x();
                        }
                      );
                    r = L6(r, w);
                    return () => {
                      cancelAnimationFrame(r);
                      x === null || x === void 0 || x();
                    };
                  }
                }
              }, [
                n,
                a,
                b,
                c,
                e,
                f,
                d,
                g,
                b === null || b === void 0 ? void 0 : b.brightness,
                b === null || b === void 0 ? void 0 : b.contrast,
                b === null || b === void 0 ? void 0 : b.saturation,
                b === null || b === void 0 ? void 0 : b.Hw,
                b === null || b === void 0 ? void 0 : b.blur,
                b === null || b === void 0 ? void 0 : b.sG,
                b === null || b === void 0 ? void 0 : b.mG,
                b === null || b === void 0 ? void 0 : b.oD,
                b === null || b === void 0 ? void 0 : b.eG,
                b === null || b === void 0 ? void 0 : b.highlights,
                b === null || b === void 0 ? void 0 : b.ww,
                b === null || b === void 0 ? void 0 : b.Qw,
                b === null || b === void 0 ? void 0 : b.VD,
                k,
              ]);
              acc(() => {
                const p = m.current;
                return () => {
                  p && __c.hkb.rcb && ((p.width = 0), (p.height = 0));
                };
              }, [m]);
              return Vbc("canvas", {
                ref: m,
                className: Ybc("w_xYrQ", {
                  _0frnRw: g,
                  BhGlcg: h === "fill",
                  shq_KQ: h === "cover",
                  NepMWw: h === "contain",
                }),
              });
            }
          ),
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/013424474a10cc7e.js.map
