/* Partytown 0.11.0 - MIT QwikDev */
((e) => {
  const t = () => {},
    r = (e) => e.length,
    n = (e) => {
      var t, r, n;
      try {
        const r =
          null === (t = null == e ? void 0 : e.constructor) || void 0 === t
            ? void 0
            : t.name;
        if (r) return r;
      } catch (e) {}
      try {
        const t =
          null ===
            (n =
              null ===
                (r = null == e ? void 0 : e.__zone_symbol__originalInstance) ||
              void 0 === r
                ? void 0
                : r.constructor) || void 0 === n
            ? void 0
            : n.name;
        if (t) return t;
      } catch (e) {}
      return "";
    },
    i = (e, t) => e.startsWith(t),
    o = (e) =>
      !(
        i(e, "webkit") ||
        i(e, "toJSON") ||
        i(e, "constructor") ||
        i(e, "toString") ||
        i(e, "_")
      ),
    s = (e) => (11 === e.nodeType && e.host ? "#s" : e.nodeName),
    a = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(36),
    c = {
      Anchor: "a",
      DList: "dl",
      Image: "img",
      OList: "ol",
      Paragraph: "p",
      Quote: "q",
      TableCaption: "caption",
      TableCell: "td",
      TableCol: "colgroup",
      TableRow: "tr",
      TableSection: "tbody",
      UList: "ul",
    },
    l = { Graphics: "g", SVG: "svg" },
    u = { preserveBehavior: !1 },
    d = Object.freeze(
      ((e) => {
        const t = new Set();
        let r = [];
        do {
          Object.getOwnPropertyNames(r).forEach((e) => {
            "function" == typeof r[e] && t.add(e);
          });
        } while ((r = Object.getPrototypeOf(r)) !== Object.prototype);
        return Array.from(t);
      })(),
    ),
    p = Symbol(),
    m = Symbol(),
    h = new Map(),
    g = new Map(),
    f = {},
    y = new WeakMap();
  var v, S, w, b, I, $, N, E, T;
  !(function (e) {
    (e[(e.MainDataRequestFromWorker = 0)] = "MainDataRequestFromWorker"),
      (e[(e.MainDataResponseToWorker = 1)] = "MainDataResponseToWorker"),
      (e[(e.MainInterfacesRequestFromWorker = 2)] =
        "MainInterfacesRequestFromWorker"),
      (e[(e.MainInterfacesResponseToWorker = 3)] =
        "MainInterfacesResponseToWorker"),
      (e[(e.InitializedWebWorker = 4)] = "InitializedWebWorker"),
      (e[(e.InitializeEnvironment = 5)] = "InitializeEnvironment"),
      (e[(e.InitializedEnvironmentScript = 6)] =
        "InitializedEnvironmentScript"),
      (e[(e.InitializeNextScript = 7)] = "InitializeNextScript"),
      (e[(e.InitializedScripts = 8)] = "InitializedScripts"),
      (e[(e.RefHandlerCallback = 9)] = "RefHandlerCallback"),
      (e[(e.ForwardMainTrigger = 10)] = "ForwardMainTrigger"),
      (e[(e.ForwardWorkerAccessRequest = 11)] = "ForwardWorkerAccessRequest"),
      (e[(e.AsyncAccessRequest = 12)] = "AsyncAccessRequest"),
      (e[(e.LocationUpdate = 13)] = "LocationUpdate"),
      (e[(e.DocumentVisibilityState = 14)] = "DocumentVisibilityState"),
      (e[(e.CustomElementCallback = 15)] = "CustomElementCallback");
  })(v || (v = {})),
    (function (e) {
      (e[(e.PushState = 0)] = "PushState"),
        (e[(e.ReplaceState = 1)] = "ReplaceState"),
        (e[(e.PopState = 2)] = "PopState"),
        (e[(e.HashChange = 3)] = "HashChange");
    })(S || (S = {})),
    (function (e) {
      (e[(e.Window = 0)] = "Window"),
        (e[(e.Element = 1)] = "Element"),
        (e[(e.AttributeNode = 2)] = "AttributeNode"),
        (e[(e.TextNode = 3)] = "TextNode"),
        (e[(e.CDataSectionNode = 4)] = "CDataSectionNode"),
        (e[(e.Function = 5)] = "Function"),
        (e[(e.Property = 6)] = "Property"),
        (e[(e.ProcessingInstructionNode = 7)] = "ProcessingInstructionNode"),
        (e[(e.CommentNode = 8)] = "CommentNode"),
        (e[(e.Document = 9)] = "Document"),
        (e[(e.DocumentTypeNode = 10)] = "DocumentTypeNode"),
        (e[(e.DocumentFragmentNode = 11)] = "DocumentFragmentNode"),
        (e[(e.EnvGlobalConstructor = 12)] = "EnvGlobalConstructor");
    })(w || (w = {})),
    (function (e) {
      (e.document = "d"),
        (e.documentElement = "e"),
        (e.head = "h"),
        (e.body = "b");
    })(b || (b = {})),
    (function (e) {
      (e[(e.SetValue = 0)] = "SetValue"),
        (e[(e.GlobalConstructor = 1)] = "GlobalConstructor");
    })(I || (I = {})),
    (function (e) {
      (e[(e.Primitive = 0)] = "Primitive"),
        (e[(e.Array = 1)] = "Array"),
        (e[(e.Object = 2)] = "Object"),
        (e[(e.Instance = 3)] = "Instance"),
        (e[(e.Ref = 4)] = "Ref"),
        (e[(e.Event = 5)] = "Event"),
        (e[(e.Function = 6)] = "Function"),
        (e[(e.NodeList = 7)] = "NodeList"),
        (e[(e.ArrayBuffer = 8)] = "ArrayBuffer"),
        (e[(e.ArrayBufferView = 9)] = "ArrayBufferView"),
        (e[(e.Attr = 10)] = "Attr"),
        (e[(e.CSSRule = 11)] = "CSSRule"),
        (e[(e.CSSRuleList = 12)] = "CSSRuleList"),
        (e[(e.CSSStyleDeclaration = 13)] = "CSSStyleDeclaration"),
        (e[(e.Error = 14)] = "Error");
    })($ || ($ = {})),
    (function (e) {
      (e.Body = "BODY"),
        (e.Comment = "#comment"),
        (e.Document = "#document"),
        (e.DocumentElement = "HTML"),
        (e.DocumentTypeNode = "html"),
        (e.DocumentFragment = "#document-fragment"),
        (e.IFrame = "IFRAME"),
        (e.Head = "HEAD"),
        (e.Script = "SCRIPT"),
        (e.Text = "#text");
    })(N || (N = {})),
    (function (e) {
      (e.errorHandlers = "error"),
        (e.loadHandlers = "load"),
        (e[(e.src = 0)] = "src"),
        (e[(e.loadErrorStatus = 1)] = "loadErrorStatus"),
        (e[(e.cssRules = 2)] = "cssRules"),
        (e[(e.innerHTML = 3)] = "innerHTML"),
        (e[(e.url = 4)] = "url"),
        (e[(e.type = 5)] = "type");
    })(E || (E = {})),
    (function (e) {
      (e[(e.Blocking = 1)] = "Blocking"),
        (e[(e.NonBlocking = 2)] = "NonBlocking"),
        (e[(e.NonBlockingNoSideEffect = 3)] = "NonBlockingNoSideEffect");
    })(T || (T = {}));
  const C = (e, t) => {
      if (e) return (t = y.get(e)) || (t = e[p]) || L(e, (t = a())), t;
    },
    R = (e, t, r, n, i) => {
      if ((r = f[e]) && r.U) {
        if (e === t) return r.U;
        if (((n = r.U.document), (i = t.split(".").pop()) === b.document))
          return n;
        if (i === b.documentElement) return n.documentElement;
        if (i === b.head) return n.head;
        if (i === b.body) return n.body;
      }
      return h.get(t);
    },
    L = (e, t, r) => {
      e &&
        (h.set(t, e),
        (e[p] = t),
        (e[m] = r = Date.now()),
        r > k + 5e3 &&
          (h.forEach((e, t) => {
            e[m] < k && e.nodeType && !e.isConnected && h.delete(t);
          }),
          (k = r)));
    };
  let k = 0;
  const A = e.parent,
    M = document.implementation.createHTMLDocument(),
    x = A.partytown || {},
    P = (x.lib || "/~partytown/") + "",
    H = (e, t, r) => {
      const n = ((e, t) => {
        return (
          (r = e),
          (n = { value: t }),
          Object.defineProperty(r, "name", { ...n, configurable: !0 })
        );
        var r, n;
      })(class extends f[e].U.HTMLElement {}, r[0]);
      return (
        "connectedCallback,disconnectedCallback,attributeChangedCallback,adoptedCallback"
          .split(",")
          .map(
            (r) =>
              (n.prototype[r] = function (...n) {
                t.postMessage([v.CustomElementCallback, e, C(this), r, n]);
              }),
          ),
        (n.observedAttributes = r[1]),
        n
      );
    },
    B = (e, t, r, o, a, c) =>
      void 0 !== t && (o = typeof t)
        ? "string" === o || "number" === o || "boolean" === o || null == t
          ? [$.Primitive, t]
          : "function" === o
            ? [$.Function]
            : (r = r || new Set()) && Array.isArray(t)
              ? r.has(t)
                ? [$.Array, []]
                : r.add(t) && [$.Array, t.map((t) => B(e, t, r))]
              : "object" === o
                ? j(t)
                  ? [
                      $.Error,
                      { name: t.name, message: t.message, stack: t.stack },
                    ]
                  : "" === (a = n(t))
                    ? [$.Object, {}]
                    : "Window" === a
                      ? [$.Instance, [e, e]]
                      : "HTMLCollection" === a || "NodeList" === a
                        ? [$.NodeList, Array.from(t).map((t) => B(e, t, r)[1])]
                        : a.endsWith("Event")
                          ? [$.Event, D(e, t, r)]
                          : "CSSRuleList" === a
                            ? [$.CSSRuleList, Array.from(t).map(W)]
                            : i(a, "CSS") && a.endsWith("Rule")
                              ? [$.CSSRule, W(t)]
                              : "CSSStyleDeclaration" === a
                                ? [$.CSSStyleDeclaration, D(e, t, r)]
                                : "Attr" === a
                                  ? [$.Attr, [t.name, t.value]]
                                  : t.nodeType
                                    ? [$.Instance, [e, C(t), s(t), c]]
                                    : [$.Object, D(e, t, r, !0, !0)]
                : void 0
        : t,
    D = (e, t, r, i, s, a, c, l) => {
      if (((a = {}), !r.has(t)))
        for (c in (r.add(t), t))
          o(c) &&
            ((l =
              "path" === c && n(t).endsWith("Event") ? t.composedPath() : t[c]),
            (i || "function" != typeof l) &&
              (s || "" !== l) &&
              (a[c] = B(e, l, r)));
      return a;
    },
    W = (e) => {
      let t,
        r = {};
      for (t in e) q.includes(t) && (r[t] = String(e[t]));
      return r;
    };
  let O = null;
  const j = (t) => {
      var r;
      return (
        (O = (null === (r = e.top) || void 0 === r ? void 0 : r.Error) || O),
        t instanceof O
      );
    },
    U = (t, r, n, i) =>
      r
        ? ((n = r[0]),
          (i = r[1]),
          n === $.Primitive
            ? i
            : n === $.Ref
              ? F(t, i)
              : n === $.Array
                ? i.map((e) => U(t, e))
                : n === $.Instance
                  ? R(i[0], i[1])
                  : n === $.Event
                    ? V(z(t, i))
                    : n === $.Object
                      ? z(t, i)
                      : n === $.ArrayBuffer
                        ? i
                        : n === $.ArrayBufferView
                          ? new e[r[2]](i)
                          : void 0)
        : void 0,
    F = (e, { V: t, w: r, L: n }, i) => (
      (i = g.get(n)) ||
        ((i = function (...i) {
          e.postMessage([
            v.RefHandlerCallback,
            { V: t, w: r, L: n, R: B(t, this), b: B(t, i) },
          ]);
        }),
        g.set(n, i)),
      i
    ),
    V = (e) => new ("detail" in e ? CustomEvent : Event)(e.type, e),
    z = (e, t, r, n) => {
      for (n in ((r = {}), t)) r[n] = U(e, t[n]);
      return r;
    },
    q =
      "cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText".split(
        ",",
      ),
    _ = async (e, t) => {
      let n,
        i,
        o,
        s,
        a,
        c,
        l = { F: t.F },
        u = r(t.Q),
        d = 0;
      for (; d < u; d++)
        try {
          (c = d === u - 1),
            (n = t.Q[d]),
            (i = n.V),
            (o = n.a),
            !f[i] &&
              i.startsWith("f_") &&
              (await new Promise((e) => {
                let t = 0,
                  r = () => {
                    f[i] || t++ > 1e3 ? e() : requestAnimationFrame(r);
                  };
                r();
              })),
            o[0] === I.GlobalConstructor && o[1] in f[i].U
              ? L(new f[i].U[o[1]](...U(e, o[2])), n.w)
              : ((s = R(i, n.w)),
                s
                  ? ((a = J(e, i, s, o, c, n.r)),
                    n.d &&
                      ("string" == typeof n.d
                        ? L(a, n.d)
                        : (f[n.d.V] = { V: n.d.V, U: { document: a } })),
                    "object" == typeof (p = a) &&
                      p &&
                      p.then &&
                      ((a = await a), c && (l.z = !0)),
                    c && (l.M = B(i, a, void 0, void 0, void 0, n.w)))
                  : (l.p = n.w + " not found"));
        } catch (e) {
          c ? (l.p = String(e.stack || e)) : console.error(e);
        }
      var p;
      return l;
    },
    J = (e, t, i, o, s, a) => {
      let c,
        l,
        u,
        d,
        p,
        m = 0,
        h = r(o);
      for (; m < h; m++) {
        (l = o[m]), (c = o[m + 1]), (u = o[m - 1]);
        try {
          if (!Array.isArray(c))
            if ("string" == typeof l || "number" == typeof l) {
              if (m + 1 === h && a)
                return (p = {}), a.map((e) => (p[e] = i[e])), p;
              i = i[l];
            } else {
              if (c === I.SetValue) return void (i[u] = U(e, l));
              if (
                "function" == typeof i[u] &&
                ((d = U(e, l)),
                "define" === u &&
                  "CustomElementRegistry" === n(i) &&
                  (d[1] = H(t, e, d[1])),
                "insertRule" === u &&
                  d[1] > r(i.cssRules) &&
                  (d[1] = r(i.cssRules)),
                (i = i[u].apply(i, d)),
                "play" === u)
              )
                return Promise.resolve();
            }
        } catch (e) {
          if (s) throw e;
          console.debug(e);
        }
      }
      return i;
    },
    G = (e, t) => {
      let n,
        i,
        o,
        s = t.V,
        a = t.U,
        c = a.document,
        l =
          'script[type="text/partytown"]:not([data-ptid]):not([data-pterror])',
        p = l + ":not([async]):not([defer])";
      c && c.body
        ? ((n = c.querySelector(p)),
          n || (n = c.querySelector(l)),
          n
            ? ((n.dataset.ptid = i = C(n, s)),
              (o = { V: s, w: i }),
              n.src
                ? ((o.S = n.src), (o.H = n.dataset.ptsrc || n.src))
                : (o.j = n.innerHTML),
              e.postMessage([v.InitializeNextScript, o]))
            : (t.x ||
                ((t.x = 1),
                ((e, t, n) => {
                  let i,
                    o,
                    s = n._ptf,
                    a = (n.partytown || {}).forward || [],
                    c = (r, n) =>
                      e.postMessage([
                        v.ForwardMainTrigger,
                        { V: t, q: r, b: B(t, Array.from(n)) },
                      ]);
                  if (
                    ((n._ptf = void 0),
                    a.map((e) => {
                      const [t, { preserveBehavior: i }] = ((e) => {
                        if ("string" == typeof e) return [e, u];
                        const [t, r = u] = e;
                        return [t, { ...u, ...r }];
                      })(e);
                      (o = n),
                        t.split(".").map((e, t, s) => {
                          var a;
                          o = o[s[t]] =
                            t + 1 < r(s)
                              ? o[s[t]] ||
                                ((a = s[t + 1]), d.includes(a) ? [] : {})
                              : (() => {
                                  let e = null;
                                  if (i) {
                                    const {
                                      methodOrProperty: t,
                                      thisObject: r,
                                    } = ((e, t) => {
                                      let r = e;
                                      for (let e = 0; e < t.length - 1; e += 1)
                                        r = r[t[e]];
                                      return {
                                        thisObject: r,
                                        methodOrProperty:
                                          t.length > 0
                                            ? r[t[t.length - 1]]
                                            : void 0,
                                      };
                                    })(n, s);
                                    "function" == typeof t &&
                                      (e = (...e) => t.apply(r, ...e));
                                  }
                                  return (...t) => {
                                    let r;
                                    return e && (r = e(t)), c(s, t), r;
                                  };
                                })();
                        });
                    }),
                    s)
                  )
                    for (i = 0; i < r(s); i += 2) c(s[i], s[i + 1]);
                })(e, s, a),
                c.dispatchEvent(new CustomEvent("pt0"))),
              e.postMessage([v.InitializedScripts, s])))
        : requestAnimationFrame(() => G(e, t));
    },
    K = (e, t, r) => {
      if (!y.has(r)) {
        y.set(r, t);
        const n = r.document,
          i = r.history,
          o = y.get(r.parent);
        let s = !1;
        const a = [],
          c = (e) => {
            s ? e() : a.push(e);
          },
          l = () => {
            e.postMessage([
              v.InitializeEnvironment,
              { V: t, J: o, S: n.baseURI, T: n.visibilityState },
            ]),
              setTimeout(() => {
                (s = !0),
                  a.forEach((e) => {
                    e();
                  });
              });
          },
          u = i.pushState.bind(i),
          d = i.replaceState.bind(i),
          p = (r, i, o, s) => () => {
            e.postMessage([
              v.LocationUpdate,
              { V: t, type: r, state: i, url: n.baseURI, newUrl: o, oldUrl: s },
            ]);
          };
        (i.pushState = (e, t, r) => {
          u(e, t, r), c(p(S.PushState, e, null == r ? void 0 : r.toString()));
        }),
          (i.replaceState = (e, t, r) => {
            d(e, t, r),
              c(p(S.ReplaceState, e, null == r ? void 0 : r.toString()));
          }),
          r.addEventListener("popstate", (e) => {
            c(p(S.PopState, e.state));
          }),
          r.addEventListener("hashchange", (e) => {
            c(p(S.HashChange, {}, e.newURL, e.oldURL));
          }),
          r.addEventListener("ptupdate", () => {
            G(e, f[t]);
          }),
          n.addEventListener("visibilitychange", () =>
            e.postMessage([v.DocumentVisibilityState, t, n.visibilityState]),
          ),
          (f[t] = { V: t, U: r }),
          "complete" === n.readyState ? l() : r.addEventListener("load", l);
      }
    },
    Y = () => {
      const e = Object.getOwnPropertyNames(A)
        .map((e) =>
          ((e, t, r, n) => {
            if ((r = t.match(/^(HTML|SVG)(.+)Element$/)))
              return (
                (n = r[2]),
                "S" == t[0]
                  ? e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l[n] || n.slice(0, 2).toLowerCase() + n.slice(2),
                    )
                  : e.createElement(c[n] || n)
              );
          })(M, e),
        )
        .filter(
          (e) =>
            !(
              !e ||
              ("HTMLUnknownElement" === n(e) &&
                "UNKNOWN" !== e.nodeName.toUpperCase())
            ),
        )
        .map((e) => [e]);
      return X(e, []);
    },
    X = (e, t) => {
      const r = new Set(["Object"]);
      return (
        e
          .filter((e) => e[0])
          .map((e) => {
            const t = e[0],
              r = e[1],
              i = n(t);
            return [i, A[i].prototype, t, r];
          })
          .map(([e, n, i, o]) => Q(r, t, e, n, i, o)),
        t
      );
    },
    Z = (e, t, r) => {
      let n = [],
        i = [e, "Object", n];
      for (r in t) ee(n, t, r);
      return i;
    },
    Q = (e, t, r, i, o, a) => {
      if (!e.has(r)) {
        e.add(r);
        const c = Object.getPrototypeOf(i),
          l = n(c),
          u = [],
          d = Object.getOwnPropertyDescriptors(i);
        Q(e, t, l, c, o, a);
        for (const e in d) ee(u, o, e);
        t.push([r, l, u, a, s(o)]);
      }
    },
    ee = (e, t, r, i, s, a) => {
      try {
        o(r) &&
          isNaN(r[0]) &&
          "all" !== r &&
          ("function" == (s = typeof (i = t[r]))
            ? (String(i).includes("[native") || Object.getPrototypeOf(t)[r]) &&
              e.push([r, w.Function])
            : "object" === s && null != i
              ? "Object" !== (a = n(i)) &&
                "Function" !== a &&
                self[a] &&
                e.push([r, i.nodeType || a])
              : "symbol" !== s &&
                (r.toUpperCase() === r
                  ? e.push([r, w.Property, i])
                  : e.push([r, w.Property])));
      } catch (e) {
        console.warn(e);
      }
    },
    te = (e, r) => (void 0 !== e[r] ? new e[r](t) : 0);
  let re;
  (async (e) => {
    const t = new SharedArrayBuffer(1073741824),
      r = new Int32Array(t);
    return (n, i) => {
      const o = i[0],
        s = i[1];
      if (o === v.MainDataRequestFromWorker) {
        const e = (() => {
          const e = M.createElement("i"),
            t = M.createTextNode(""),
            r = M.createComment(""),
            n = M.createDocumentFragment(),
            i = M.createElement("p").attachShadow({ mode: "open" }),
            o = te(A, "IntersectionObserver"),
            s = te(A, "MutationObserver"),
            a = te(A, "ResizeObserver"),
            c = A.performance,
            l = A.screen,
            u = [
              [A.history],
              [c],
              [c.navigation],
              [c.timing],
              [l],
              [l.orientation],
              [A.visualViewport],
              [o, w.EnvGlobalConstructor],
              [s, w.EnvGlobalConstructor],
              [a, w.EnvGlobalConstructor],
              [t],
              [r],
              [n],
              [i],
              [e],
              [e.attributes],
              [e.classList],
              [e.dataset],
              [e.style],
              [M],
              [M.doctype],
            ],
            d = [Z("Window", A), Z("Node", t)],
            p = (function (e) {
              return JSON.stringify(
                e,
                (e, t) => (
                  "function" == typeof t &&
                    (t = String(t)).startsWith(e + "(") &&
                    (t = "function " + t),
                  "loadScriptsOnMainThread" === e &&
                    (t = t.map((e) =>
                      Array.isArray(e)
                        ? e
                        : [
                            "string" == typeof e ? "string" : "regexp",
                            "string" == typeof e ? e : e.source,
                          ],
                    )),
                  t
                ),
              );
            })(x),
            m = {
              i: p,
              v: X(u, d),
              C: new URL(P, A.location) + "",
              I: origin,
              $tabId$: A._pttab,
            };
          return (
            ((e, t, r) => {
              void 0 !== t[r] &&
                e.push([
                  r,
                  "Object",
                  Object.keys(t[r].prototype).map((e) => [e, w.Property]),
                  w.EnvGlobalConstructor,
                ]);
            })(m.v, A, "IntersectionObserverEntry"),
            m
          );
        })();
        (e.P = t), n.postMessage([v.MainDataResponseToWorker, e]);
      } else
        i[0] === v.MainInterfacesRequestFromWorker
          ? n.postMessage([v.MainInterfacesResponseToWorker, Y()])
          : o === v.ForwardWorkerAccessRequest
            ? e(s, (e) => {
                const t = JSON.stringify(e),
                  n = t.length;
                for (let e = 0; e < n; e++) r[e + 1] = t.charCodeAt(e);
                (r[0] = n), Atomics.notify(r, 0);
              })
            : ((e, t, r) => {
                t[0] === v.InitializedWebWorker
                  ? K(e, a(), A)
                  : (r = f[t[1]]) &&
                    (t[0] === v.InitializeNextScript
                      ? requestAnimationFrame(() => G(e, r))
                      : t[0] === v.InitializedEnvironmentScript &&
                        ((e, t, r, n, i) => {
                          (i = t.U.document.querySelector(
                            `[data-ptid="${r}"]`,
                          )) &&
                            (n ? (i.dataset.pterror = n) : (i.type += "-x"),
                            delete i.dataset.ptid),
                            G(e, t);
                        })(e, r, t[2], t[3]));
              })(n, i);
    };
  })((e, t) => _(re, e).then(t)).then((e) => {
    e &&
      ((re = new Worker(
        URL.createObjectURL(
          new Blob(
            [
              '/* Partytown 0.11.0 - MIT QwikDev */\n(e=>{var t,r,n,i,o,s,a,c,l;!function(e){e[e.MainDataRequestFromWorker=0]="MainDataRequestFromWorker",e[e.MainDataResponseToWorker=1]="MainDataResponseToWorker",e[e.MainInterfacesRequestFromWorker=2]="MainInterfacesRequestFromWorker",e[e.MainInterfacesResponseToWorker=3]="MainInterfacesResponseToWorker",e[e.InitializedWebWorker=4]="InitializedWebWorker",e[e.InitializeEnvironment=5]="InitializeEnvironment",e[e.InitializedEnvironmentScript=6]="InitializedEnvironmentScript",e[e.InitializeNextScript=7]="InitializeNextScript",e[e.InitializedScripts=8]="InitializedScripts",e[e.RefHandlerCallback=9]="RefHandlerCallback",e[e.ForwardMainTrigger=10]="ForwardMainTrigger",e[e.ForwardWorkerAccessRequest=11]="ForwardWorkerAccessRequest",e[e.AsyncAccessRequest=12]="AsyncAccessRequest",e[e.LocationUpdate=13]="LocationUpdate",e[e.DocumentVisibilityState=14]="DocumentVisibilityState",e[e.CustomElementCallback=15]="CustomElementCallback"}(t||(t={})),function(e){e[e.PushState=0]="PushState",e[e.ReplaceState=1]="ReplaceState",e[e.PopState=2]="PopState",e[e.HashChange=3]="HashChange"}(r||(r={})),function(e){e[e.Window=0]="Window",e[e.Element=1]="Element",e[e.AttributeNode=2]="AttributeNode",e[e.TextNode=3]="TextNode",e[e.CDataSectionNode=4]="CDataSectionNode",e[e.Function=5]="Function",e[e.Property=6]="Property",e[e.ProcessingInstructionNode=7]="ProcessingInstructionNode",e[e.CommentNode=8]="CommentNode",e[e.Document=9]="Document",e[e.DocumentTypeNode=10]="DocumentTypeNode",e[e.DocumentFragmentNode=11]="DocumentFragmentNode",e[e.EnvGlobalConstructor=12]="EnvGlobalConstructor"}(n||(n={})),function(e){e.document="d",e.documentElement="e",e.head="h",e.body="b"}(i||(i={})),function(e){e[e.SetValue=0]="SetValue",e[e.GlobalConstructor=1]="GlobalConstructor"}(o||(o={})),function(e){e[e.Primitive=0]="Primitive",e[e.Array=1]="Array",e[e.Object=2]="Object",e[e.Instance=3]="Instance",e[e.Ref=4]="Ref",e[e.Event=5]="Event",e[e.Function=6]="Function",e[e.NodeList=7]="NodeList",e[e.ArrayBuffer=8]="ArrayBuffer",e[e.ArrayBufferView=9]="ArrayBufferView",e[e.Attr=10]="Attr",e[e.CSSRule=11]="CSSRule",e[e.CSSRuleList=12]="CSSRuleList",e[e.CSSStyleDeclaration=13]="CSSStyleDeclaration",e[e.Error=14]="Error"}(s||(s={})),function(e){e.Body="BODY",e.Comment="#comment",e.Document="#document",e.DocumentElement="HTML",e.DocumentTypeNode="html",e.DocumentFragment="#document-fragment",e.IFrame="IFRAME",e.Head="HEAD",e.Script="SCRIPT",e.Text="#text"}(a||(a={})),function(e){e.errorHandlers="error",e.loadHandlers="load",e[e.src=0]="src",e[e.loadErrorStatus=1]="loadErrorStatus",e[e.cssRules=2]="cssRules",e[e.innerHTML=3]="innerHTML",e[e.url=4]="url",e[e.type=5]="type"}(c||(c={})),function(e){e[e.Blocking=1]="Blocking",e[e.NonBlocking=2]="NonBlocking",e[e.NonBlockingNoSideEffect=3]="NonBlockingNoSideEffect"}(l||(l={}));const u=Symbol(),d=Symbol(),$=Symbol(),p=Symbol(),h=Symbol(),g=Symbol(),m=Symbol(),f=Symbol(),y=new Map,w={},S=new WeakMap,v=[],I={},b={},N=new Map,E=new Map,M="about:blank",T=e=>e.split(","),k=e=>{if(e=I.C+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},R=T("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),C=T("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),x=T("insertBefore,remove,removeChild,replaceChild"),L=T("className,width,height,hidden,innerHTML,innerText,textContent,text"),A=T("setAttribute,setAttributeNS,setProperty"),B=T("addEventListener,dispatchEvent,removeEventListener"),H=B.concat(A,T("add,observe,remove,unobserve")),W=/^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,P=()=>{},D=e=>e.length,O=e=>{var t,r,n;try{const r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(r)return r}catch(e){}try{const t=null===(n=null===(r=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;if(t)return t}catch(e){}return""},F=[],j=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),z="text/partytown",U=(e,t,r)=>Object.defineProperty(e,t,{...r,configurable:!0}),_=(e,t)=>U(e,"name",{value:t}),q=(e,t,r)=>U(e.prototype,t,r),V=(e,t)=>Object.defineProperties(e.prototype,t),G=(e,t,r)=>q(e,t,{value:r,writable:!0});function X(e,t){var r,n;return null!==(n=null===(r=e.loadScriptsOnMainThread)||void 0===r?void 0:r.map((([e,t])=>new RegExp("string"===e?t.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&"):t))).some((e=>e.test(t))))&&void 0!==n&&n}Object.freeze((e=>{const t=new Set;let r=[];do{Object.getOwnPropertyNames(r).forEach((e=>{"function"==typeof r[e]&&t.add(e)}))}while((r=Object.getPrototypeOf(r))!==Object.prototype);return Array.from(t)})());const Z=(e,t)=>t in e[g],J=(e,t)=>e[g][t],Y=(e,t,r)=>e[g][t]=r,K=(e,t,r,n,i,o)=>{if(!(i=y.get(t))&&r&&b[e]){const s=y.get(o||"");i=b[e].k(r,t,n,s),y.set(t,i)}return i},Q=(e,t)=>G(e,"nodeType",t),ee=(e,t)=>t.map((t=>q(e,t,{get(){let e=te(this,t),r=E.get(e);return r||(r=we(this,[t]),E.set(e,r)),r}}))),te=(e,t,r)=>[e[u],e[d],t,...(r||F).map((e=>String(e&&e[u]?e[d]:e)))].join("."),re=(e,t)=>T(t).map((t=>q(e,t,{get(){return Z(this,t)||Y(this,t,we(this,[t])),J(this,t)},set(e){J(this,t)!==e&&Se(this,[t],e),Y(this,t,e)}}))),ne=e=>R.map((t=>q(e,t,{get(){const e=N.get(te(this,t));if("number"==typeof e)return e;const r=we(this,[t],R);return r&&"object"==typeof r?(Object.entries(r).map((([e,t])=>N.set(te(this,e),t))),r[t]):r}}))),ie=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let r=te(this,t,e),n=N.get(r);return n||(n=ve(this,[t],e),N.set(r,n)),n}})),oe=(e,t,r,n,i)=>{return void 0!==r&&(i=typeof r)?"string"===i||"boolean"===i||"number"===i||null==r?[s.Primitive,r]:"function"===i?[s.Ref,{V:e,w:t,L:(o=r,(a=S.get(o))||(S.set(o,a=j()),w[a]=o),a)}]:(n=n||new Set)&&Array.isArray(r)?n.has(r)?[s.Array,[]]:n.add(r)&&[s.Array,r.map((r=>oe(e,t,r,n)))]:"object"===i?r[d]?[s.Instance,[r[u],r[d]]]:r instanceof Event?[s.Event,ae(e,t,r,!1,n)]:se&&r instanceof TrustedHTML?[s.Primitive,r.toString()]:r instanceof ArrayBuffer?[s.ArrayBuffer,r]:ArrayBuffer.isView(r)?[s.ArrayBufferView,r.buffer,O(r)]:[s.Object,ae(e,t,r,!0,n)]:void 0:r;var o,a},se="undefined"!=typeof TrustedHTML,ae=(e,t,r,n,i,o,s,a)=>{if(o={},!i.has(r))for(s in i.add(r),r)a=r[s],(n||"function"!=typeof a)&&(o[s]=oe(e,t,a,i));return o},ce=(e,t)=>e?oe(e[u],e[d],t):[s.Primitive,t],le=(e,t,r,n,i,o,a,c)=>{if(n){if(i=n[0],o=n[1],i===s.Primitive||i===s.CSSRule||i===s.CSSRuleList)return o;if(i===s.Ref)return de(r,o);if(i===s.Function)return e&&r.length>0?(...t)=>ve(b[e].U,r,t,l.Blocking):P;if(i===s.Instance)return ue(o);if(i===s.NodeList)return new pe(o.map(ue));if(i===s.Attr)return new he(o);if(i===s.Array)return o.map((n=>le(e,t,r,n)));if(i===s.Error)return new $e(o);for(c in a={},o)a[c]=le(e,t,[...r,c],o[c]);if(i===s.CSSStyleDeclaration)return new b[e].U.CSSStyleDeclaration(e,t,r,a);if(i===s.Event){if("message"===a.type&&a.origin){let e,t=JSON.stringify(a.data),r=v.find((e=>e.m===t));r&&(e=b[r.V],e&&(a.source=e.U,a.origin=e.E.origin))}return new Proxy(new Event(a.type,a),{get:(e,t)=>t in a?a[t]:"function"==typeof e[String(t)]?P:e[String(t)]})}if(i===s.Object)return a}},ue=([e,t,r,n])=>t===e&&b[e]?b[e].U:K(e,t,r,void 0,void 0,n),de=(e,{V:t,w:r,G:n,L:i})=>(w[i]||S.set(w[i]=function(...i){const o=K(t,r,n);return ve(o,e,i)},i),w[i]);class $e extends Error{constructor(e){super(e.message),this.name=e.name,this.message=e.message,this.stack=e.stack}}class pe{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return D(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const he=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},ge=(e,t,r)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+r.E),me=[],fe=(e,r,n,i,o,s)=>{if(e[h]){if(me.push({V:e[u],w:e[d],a:[...e[h],...r],d:i,r:o}),n===l.NonBlockingNoSideEffect)I.K([t.AsyncAccessRequest,{F:j(),Q:[...me]}],s?[s instanceof ArrayBuffer?s:s.buffer]:void 0),me.length=0;else if(n===l.Blocking)return ye(!0);I.c=setTimeout(ye,20)}},ye=e=>{if(clearTimeout(I.c),D(me)){const r=me[D(me)-1],n={F:`${j()}.${I.$tabId$}`,Q:[...me]};if(me.length=0,e){const e=((e,r)=>{const n=e.P,i=new Int32Array(n);Atomics.store(i,0,0),e.K([t.ForwardWorkerAccessRequest,r]),Atomics.wait(i,0,0);let o=Atomics.load(i,0),s="",a=0;for(;a<o;a++)s+=String.fromCharCode(i[a+1]);return JSON.parse(s)})(I,n),i=e.z,o=le(r.V,r.w,r.a,e.M);if(e.p){if(i)return Promise.reject(e.p);throw new Error(e.p)}return i?Promise.resolve(o):o}I.K([t.AsyncAccessRequest,n])}},we=(e,t,r,n)=>I.i.get&&(n=I.i.get(be(e,t)))!==m?n:n=fe(e,t,l.Blocking,void 0,r),Se=(e,t,r,n)=>{if(I.i.set){if((n=I.i.set({value:r,prevent:f,...be(e,t)}))===f)return;n!==m&&(r=n)}L.some((e=>t.includes(e)))&&(N.clear(),t[t.length-1]),t=[...t,ce(e,r),o.SetValue],fe(e,t,l.NonBlocking)},ve=(e,t,r,n,i,o,s,a)=>I.i.apply&&(s=I.i.apply({args:r,...be(e,t)}))!==m?s:(a=t[D(t)-1],t=[...t,ce(e,r)],n=n||(H.includes(a)?l.NonBlocking:l.Blocking),"setAttribute"===a&&Z(e,r[0])?Y(e,r[0],r[1]):x.includes(a)?(N.clear(),E.clear()):A.includes(a)&&(n=l.NonBlocking,N.clear()),s=fe(e,t,n,i,void 0,o)),Ie=(e,t,r)=>{fe(e,[o.GlobalConstructor,t,ce(e,r)],l.Blocking)},be=(e,t)=>({name:t.join("."),continue:m,nodeName:e[$],constructor:O(e),instance:e,window:b[e[u]].U}),Ne=(e,t,r)=>{let n={getItem(n){if(r.A)return ve(e,[t,"getItem"],[n],l.Blocking);ge("get",t,r)},setItem(n,i){r.A?ve(e,[t,"setItem"],[n,i],l.Blocking):ge("set",t,r)},removeItem(n){r.A?ve(e,[t,"removeItem"],[n],l.Blocking):ge("remove",t,r)},key(n){if(r.A)return ve(e,[t,"key"],[n],l.Blocking);ge("key",t,r)},clear(){r.A?ve(e,[t,"clear"],F,l.Blocking):ge("clear",t,r)},get length(){if(r.A)return we(e,[t,"length"]);ge("length",t,r)}};e[t]=new Proxy(n,{get:(e,t)=>Reflect.has(e,t)?Reflect.get(e,t):e.getItem(t),set:(e,t,r)=>(e.setItem(t,r),!0),has:(e,t)=>!!Reflect.has(e,t)||"string"==typeof t&&null!==e.getItem(t),deleteProperty:(e,t)=>(e.removeItem(t),!0)})},Ee=(e,t,r)=>{e[r]=_(class extends t{constructor(e,t,r,n){return super(e,t,r,n||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[$][t]||(e[$][t]=we(e,[t])),e[$][t]),set:(e,t,r)=>(e[$][t]=r,Se(e,[t],r),N.clear(),!0)})}setProperty(...e){this[$][e[0]]=e[1],ve(this,["setProperty"],e,l.NonBlocking),e[0],N.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[$][e];return ve(this,["removeProperty"],[e],l.NonBlocking),N.clear(),this[$][e]=void 0,t}},r)},Me=(e,t)=>{e[t]=_(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,r){const n=String(r);return"item"===n?t=>ke(e,t):"length"===n?Te(e).length:isNaN(n)?t[r]:ke(e,n)}})}insertRule(e,t){const r=Te(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=r.length&&(ve(this.ownerNode,["sheet","insertRule"],[e,t],l.NonBlocking),r.splice(t,0,0)),this.ownerNode,N.clear(),t}deleteRule(e){ve(this.ownerNode,["sheet","deleteRule"],[e],l.NonBlocking),Te(this.ownerNode).splice(e,1),this.ownerNode,N.clear()}get type(){return"text/css"}},t);const r={sheet:{get(){return new e[t](this)}}};V(e.HTMLStyleElement,r)},Te=(e,t)=>((t=J(e,c.cssRules))||(t=we(e,["sheet","cssRules"]),Y(e,c.cssRules,t)),t),ke=(e,t,r)=>(0===(r=Te(e))[t]&&(r[t]=we(e,["sheet","cssRules",parseInt(t,10)])),r[t]),Re="0.11.0",Ce=(e,t,r,n,i)=>{try{e.l=t,xe(e,r)}catch(e){console.error(r,e),i=String(e.stack||e)}return e.l="",i},xe=(e,t,r)=>{e.N=1;let n=((e,t)=>e.replace(/([a-zA-Z0-9_$\\.\\\'\\"\\`])?(\\.\\.\\.)?this(?![a-zA-Z0-9_$:])/g,((e,t,r)=>{const n=(t||"")+(r||"");return null!=t?n+"this":n+"(thi$(this)?window:this)"})))(t);t=`with(this){${n.replace(/\\/\\/# so/g,"//Xso")}\\n;function thi$(t){return t===this}};${(I.i.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}==\'function\'&&(this.${e}=${e}))`)).join(";")};`+(r?"\\n//# sourceURL="+r:""),e.A||(t=t.replace(/.postMessage\\(/g,`.postMessage(\'${e.V}\',`)),new Function(t).call(e.U),e.N=0},Le=(e,t,r)=>{(r=J(e,t))&&setTimeout((()=>r.map((e=>e({type:t})))))},Ae=(e,t)=>{for(t=e.E;!t.host&&(t=(e=b[e.J]).E,e.V!==e.J););return t},Be=(e,t,r,n,i,o)=>(n=Ae(e,n),i=new URL(t||"",n),r&&I.i.resolveUrl&&(o=I.i.resolveUrl(i,n,r))?o:i),He=(e,t,r)=>Be(e,t,r)+"",We=(e,t)=>{const r=Ae(e),n=new URL(t||"",r);if(I.i.resolveSendBeaconRequestParameters){const e=I.i.resolveSendBeaconRequestParameters(n,r);if(e)return e}return{}},Pe=()=>`<script src="${k("partytown.js?v="+Re)}"><\\/script>`,De=e=>class{constructor(){this.s="",this.l=[],this.e=[],this.style={}}get src(){return this.s}set src(t){this.s=t,fetch(He(e,t,"image"),{mode:"no-cors",credentials:"include",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}removeEventListener(e,t){"load"===e&&(this.l=this.l.filter((e=>e!==t))),"error"===e&&(this.e=this.e.filter((e=>e!==t)))}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},Oe={addEventListener:{value(...e){const t=e[0],r=J(this,t)||[];r.push(e[1]),Y(this,t,r)}},async:{get:P,set:P},defer:{get:P,set:P},onload:{get(){let e=J(this,c.loadHandlers);return e&&e[0]||null},set(e){Y(this,c.loadHandlers,e?[e]:null)}},onerror:{get(){let e=J(this,c.errorHandlers);return e&&e[0]||null},set(e){Y(this,c.errorHandlers,e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:ve(this,["getAttribute"],[e])}},setAttribute:{value(e,t){Fe.includes(e)?this[e]=t:ve(this,["setAttribute"],[e,t])}}},Fe=T("src,type"),je=(e,t)=>{const r={innerHTML:ze,innerText:ze,src:{get(){return J(this,c.url)||""},set(e){const r=He(t,e,null),n=I.i;e=He(t,e,"script"),Y(this,c.url,e),Se(this,["src"],e),r!==e&&Se(this,["dataset","ptsrc"],r),this.type&&X(n,e)&&Se(this,["type"],"text/javascript")}},text:ze,textContent:ze,type:{get(){return we(this,["type"])},set(e){Ue(e)||(Y(this,c.type,e),Se(this,["type"],e))}},...Oe};V(e,r)},ze={get(){const e=we(this,["type"]);if(Ue(e)){const e=J(this,c.innerHTML);if(e)return e}return we(this,["innerHTML"])||""},set(e){Y(this,c.innerHTML,e)}},Ue=e=>!e||"text/javascript"===e,_e=(e,r,n)=>{const i=I.i,o=_(class extends n{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,n){const o=e[u]=this[u],s=e[d],p=e[$],h=p===a.Script,g=p===a.IFrame;if(h){const t=J(e,c.innerHTML),n=J(e,c.type);if(t){if(Ue(n)){const n=e.id;if(n&&X(i,n))Se(e,["type"],"text/javascript");else{const n=Ce(r,s,t,0,""),i=n?"pterror":"ptid",o=n||s;Se(e,["type"],z+"-x"),Se(e,["dataset",i],o)}}Se(e,["innerHTML"],t)}}if(ve(this,["insertBefore"],[e,n],l.NonBlocking),g){const t=J(e,c.src);if(t&&t.startsWith("javascript:")){const e=t.split("javascript:")[1];Ce(r,s,e,0,"")}((e,t)=>{let r,n,i=0,o=()=>{b[e]&&b[e].x&&!b[e].y?(r=J(t,c.loadErrorStatus)?c.errorHandlers:c.loadHandlers,n=J(t,r),n&&n.map((e=>e({type:r})))):i++>2e3?(n=J(t,c.errorHandlers),n&&n.map((e=>e({type:c.errorHandlers})))):setTimeout(o,9)};o()})(s,e)}return h&&(ye(!0),I.K([t.InitializeNextScript,o])),e}get nodeName(){return"#s"===this[$]?"#document-fragment":this[$]}get nodeType(){return 3}get ownerDocument(){return r.n}},"Node");ee(o,T("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=o},qe=T("AUDIO,CANVAS,VIDEO"),Ve=T("Audio,MediaSource"),Ge=(e,t,r)=>{V(e,{body:{get:()=>t.e},cookie:{get(){return t.A?we(this,["cookie"]):(ge("get","cookie",t),"")},set(e){t.A&&Se(this,["cookie"],e)}},createElement:{value(e){if(e=e.toUpperCase(),!W.test(e))throw e+" not valid";const t=e===a.IFrame,r=this[u],n=(t?"f_":"")+j();ve(this,["createElement"],[e],l.NonBlocking,n);const i=K(r,n,e);if(t)ct({V:n,J:r,S:M},!0).U.fetch=fetch,Se(i,["srcdoc"],Pe());else if(e===a.Script){const e=J(i,c.type);Ue(e)&&Se(i,["type"],z)}return i}},createElementNS:{value(e,t){const r=j(),n=K(this[u],r,t,e);return ve(this,["createElementNS"],[e,t],l.NonBlocking,r),n}},createTextNode:{value(e){const t=this[u],r=j(),n=K(t,r,a.Text);return ve(this,["createTextNode"],[e],l.NonBlocking,r),n}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return t.l?K(this[u],t.l,a.Script):null}},defaultView:{get:()=>r?null:t.U},documentElement:{get:()=>t.o},getElementsByTagName:{value(e){return(e=e.toUpperCase())===a.Body?[t.e]:e===a.Head?[t.s]:ve(this,["getElementsByTagName"],[e])}},head:{get:()=>t.s},images:{get(){return we(this,["images"])}},scripts:{get(){return we(this,["scripts"])}},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const r=j();return ve(this,["implementation","createHTMLDocument"],[e],l.Blocking,{V:r}),ct({V:r,J:r,S:t.E+"",T:"hidden"},!0,!0).n}}}},location:{get:()=>t.E,set(e){t.E.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>t.T||"visible"}}),re(e,"compatMode,referrer,forms")},Xe=(e,t)=>{V(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.o}})},Ze=(e,t)=>{V(e,{localName:{get(){return this[$].toLowerCase()}},namespaceURI:{get(){return this[p]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[$]}}}),ee(e,C),re(e,"id"),ne(t),ie(t,T("getClientRects,getBoundingClientRect"))},Je=(e,t)=>{const r={};T("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{r[e]={get(){let r,n=J(this,c.url);if("string"!=typeof n){if(r=we(this,["href"]),""===r)return"protocol"===e?":":"";Y(this,c.url,r),n=new URL(r)[e]}return Be(t,n,null)[e]},set(r){let n;if("href"===e)if((e=>{try{return new URL(e),!0}catch(e){return!1}})(r))n=new URL(r);else{const e=t.E.href;n=Be(t,e,null),n.href=new URL(r+"",n.href)}else n=Be(t,this.href,null),n[e]=r;Y(this,c.url,n.href),Se(this,["href"],n.href)}}})),V(e,r)},Ye=(e,r)=>{const n={contentDocument:{get(){return tt(this).n}},contentWindow:{get(){return tt(this).U}},src:{get(){let e=J(this,c.src);return e&&e.startsWith("javascript:")?e:(e=tt(this).E.href,e.startsWith("about:")?"":e)},set(e){if(e)if(e.startsWith("javascript:"))Y(this,c.src,e);else if(!e.startsWith("about:")){let r,n=new XMLHttpRequest,i=tt(this);i.E.href=e=He(i,e,"iframe"),i.y=1,i.A=I.I===i.E.origin,Y(this,c.loadErrorStatus,void 0),n.open("GET",e,!1),n.send(),r=n.status,r>199&&r<300?(Se(this,["srcdoc"],`<base href="${e}">`+n.responseText.replace(Qe,((e,t)=>{const r=[];let n,i=!1;for(;n=et.exec(t);){let[e]=n;e.startsWith("type=")&&(i=!0,e=e.replace(/(application|text)\\/javascript/,z)),r.push(e)}return i||r.push(\'type="\'+z+\'"\'),`<script ${r.join(" ")}>`}))+Pe()),ye(!0),I.K([t.InitializeNextScript,i.V])):(Y(this,c.loadErrorStatus,r),i.y=0)}}},...Oe};V(e,n)},Ke="((?:\\\\w|-)+(?:=(?:(?:\\\\w|-)+|\'[^\']*\'|\\"[^\\"]*\\")?)?)",Qe=new RegExp(`<script\\\\s*((${Ke}\\\\s*)*)>`,"mg"),et=new RegExp(Ke,"mg"),tt=e=>{const t=e[d];return b[t]||ct({V:t,J:e[u],S:we(e,["src"])||M},!0),b[t]},rt=e=>{const t=(e,t)=>{const{a:r,b:n,c:i,d:o,e:s,f:a}=ve(e,[t],F);return new DOMMatrixReadOnly([r,n,i,o,s,a])},r={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};V(e,r)},nt=(e,t)=>{e.NamedNodeMap=_(class extends t{constructor(e,t,r){return super(e,t,r),new Proxy(this,{get(e,t){const r=ot[t];return r?r.bind(e,[t]):we(e,[t])},set(e,t,r){if(ot[t])throw new Error("Can\'t set read-only property: "+String(t));return Se(e,[t],r),!0}})}},"NamedNodeMap")};function it(e,...t){return ve(this,e,t,l.Blocking)}const ot={getNamedItem:it,getNamedItemNS:it,item:it,removeNamedItem:it,removeNamedItemNS:it,setNamedItem:it,setNamedItemNS:it},st=(t,r,o,s,c,m)=>{let f,y,w,S;const N=class{constructor(e,r,n,i,o){this[u]=e||t,this[d]=r||f||j(),this[h]=n||[],this[$]=i||y,this[p]=o||w,this[g]=S&&S[g]||{},f=y=w=void 0}},E=new(_(class extends URL{assign(){}reload(){}replace(){}},"Location"))(o),R=E.origin===I.I||E.origin===M,x=r===t,L={},A=()=>{let e,r,n=[];for(e in b)r=b[e],r.J!==t||r.B||n.push(r);return n},H=_(class extends N{constructor(){super(t,t),this.addEventListener=(...e)=>{"load"===e[0]?L.N&&setTimeout((()=>e[1]({type:"load"}))):ve(this,["addEventListener"],e,l.NonBlocking)};let o,$,p=this,g=0,v=()=>{g||((I.u||(e.g=[we,Se,ve,Ie,V,j,u,d,h],I.t(k("partytown-media.js?v="+Re)),I.u=e.f,delete e.f),I.u)(N,P,L,p,Ve),g=1)},b={},M=(e,t,r,n)=>{qe.includes(e)&&v();const i=b[e]?b[e]:e.includes("-")?b.UNKNOWN:b.I;return f=t,y=e,w=r,S=n,new i};var B,D;if(p.Window=H,p.name=name+t,_e(p,L,N),(e=>{e.NodeList=_(pe,"NodeList")})(p),nt(p,N),Ee(p,N,"CSSStyleDeclaration"),((e,t,r)=>{e[r]=_(class extends t{now(){return performance.now()}},r)})(p,N,"Performance"),((e,t)=>{const r="customElements",n=new Map;e[r]={define(i,o,s){n.set(i,o),t[i.toUpperCase()]=o;const a=[o.name,o.observedAttributes];ve(e,[r,"define"],[i,a,s])},get:t=>n.get(t)||ve(e,[r,"get"],[t]),whenDefined:t=>n.has(t)?Promise.resolve():ve(e,[r,"whenDefined"],[t]),upgrade:t=>ve(e,[r,"upgrade"],[t])}})(p,b),I.v.map((([e,r,i,o,s])=>{const a=at[e]?W:"EventTarget"===r?P:"Object"===r?N:p[r],c=p[e]=_(o===n.EnvGlobalConstructor?class extends N{constructor(...t){super(),Ie(this,e,t)}}:p[e]||class extends a{},e);s&&(b[s]=c),i.map((([e,r,i])=>{e in c.prototype||e in a.prototype||("string"==typeof r?q(c,e,{get(){if(!Z(this,e)){const n=this[d],i=[...this[h],e],o=p[r];o&&Y(this,e,new o(t,n,i))}return J(this,e)},set(t){Y(this,e,t)}}):r===n.Function?G(c,e,(function(...t){return ve(this,[e],t)})):r>0&&(void 0!==i?G(c,e,i):q(c,e,{get(){return we(this,[e])},set(t){return Se(this,[e],t)}})))}))})),T("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete H.prototype[t],t in p||(o=e[t],null!=o&&(p[t]="function"!=typeof o||o.toString().startsWith("class")?o:o.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in p||(p[t]=e[t])})),Ve.map((e=>U(p,e,{get:()=>(v(),p[e])}))),"trustedTypes"in e&&(p.trustedTypes=e.trustedTypes),Ze(p.Element,p.HTMLElement),Ge(p.Document,L,m),B=p.DocumentFragment,Q(B,11),ee(B,C),Je(p.HTMLAnchorElement,L),D=p.HTMLFormElement,V(D,{}),re(D,"elements"),Ye(p.HTMLIFrameElement),je(p.HTMLScriptElement,L),rt(p.SVGGraphicsElement),Xe(p.HTMLHeadElement,L),Xe(p.HTMLBodyElement,L),((e,t)=>{V(e,{parentElement:{value:null},parentNode:{get:()=>t.n}})})(p.HTMLHtmlElement,L),Me(p,"CSSStyleSheet"),Me(p,"CSSMediaRule"),Q(p.Comment,8),Q(p.DocumentType,10),Object.assign(L,{V:t,J:r,U:new Proxy(p,{get:(e,t)=>{var r;if("string"!=typeof t||isNaN(t))return(null===(r=I.i.mainWindowAccessors)||void 0===r?void 0:r.includes(t))?we(this,[t]):e[t];{let e=A()[t];return e?e.U:void 0}},has:()=>!0}),n:M(a.Document,t+"."+i.document),o:M(a.DocumentElement,t+"."+i.documentElement),s:M(a.Head,t+"."+i.head),e:M(a.Body,t+"."+i.body),E:E,T:s,A:R,B:x,k:M}),p.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),p.cancelAnimationFrame=e=>clearTimeout(e),p.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),p.cancelIdleCallback=e=>clearTimeout(e),Ne(p,"localStorage",L),Ne(p,"sessionStorage",L),R||(p.indexeddb=void 0),c)$={},p.history={pushState(e){$=e},replaceState(e){$=e},get state(){return $},length:0},p.indexeddb=void 0;else{const e=p.history.pushState.bind(p.history),t=p.history.replaceState.bind(p.history);p.history.pushState=(t,r,n)=>{!1!==L.$propagateHistoryChange$&&e(t,r,n)},p.history.replaceState=(e,r,n)=>{!1!==L.$propagateHistoryChange$&&t(e,r,n)}}p.Worker=void 0}get body(){return L.e}get document(){return L.n}get documentElement(){return L.o}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(He(L,e,"fetch"),t)}get frames(){return L.U}get frameElement(){return x?null:K(r,t,a.IFrame)}get globalThis(){return L.U}get head(){return L.s}get length(){return A().length}get location(){return E}set location(e){E.href=e+""}get Image(){return De(L)}get navigator(){return(e=>{const t={sendBeacon:(t,r)=>{try{return fetch(He(e,t,null),{method:"POST",body:r,mode:"no-cors",keepalive:!0,...We(e,t)}),!0}catch(e){return console.error(e),!1}}};for(let e in navigator)t[e]=navigator[e];return new Proxy(t,{set:(e,t,r)=>(navigator[t]=r,!0),get:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)?t[r]:we(e.U,["navigator",r])})})(L)}get origin(){return E.origin}set origin(e){}get parent(){for(let e in b)if(b[e].V===r)return b[e].U;return L.U}postMessage(...e){b[e[0]]&&(D(v)>50&&v.splice(0,5),v.push({V:e[0],m:JSON.stringify(e[1])}),e=e.slice(1)),ve(this,["postMessage"],e,l.NonBlockingNoSideEffect)}get self(){return L.U}get top(){for(let e in b)if(b[e].B)return b[e].U;return L.U}get window(){return L.U}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),r=_(class extends e{open(...e){e[1]=He(L,e[1],"xhr"),super.open(...e)}set withCredentials(e){I.i.allowXhrCredentials&&(super.withCredentials=e)}toString(){return t}},O(e));return r.prototype.constructor.toString=()=>t,r}},"Window"),W=class extends N{constructor(e,t,r,n){return super(e,t,r,n),new Proxy(this,{get:(e,t)=>we(e,[t]),set:(e,t,r)=>(Se(e,[t],r),!0)})}},P=class extends N{};return B.map((e=>P.prototype[e]=function(...t){return ve(this,[e],t,l.NonBlocking)})),re(H,"devicePixelRatio"),ne(H),ie(H,["getComputedStyle"]),new H,L},at={DOMStringMap:1,NamedNodeMap:1},ct=({V:e,J:r,S:n,T:i},o,s)=>(b[e]||(b[e]=st(e,r,n,i,o,s)),I.K([t.InitializeNextScript,e]),b[e]),lt=[],ut=n=>{const i=n.data,o=i[0],s=i[1];if(I.x)if(o===t.InitializeNextScript)(async e=>{let r,n=e.V,i=e.w,o=K(n,i,a.Script),s=e.j,l=e.S,u=e.H,d="",$=b[n],p=["text/jscript","text/javascript","text/x-javascript","application/javascript","application/x-javascript","text/ecmascript","text/x-ecmascript","application/ecmascript"];if(l)try{if(l=Be($,l,"script")+"",Y(o,c.url,l),r=await fetch(l),r.ok){let e=r.headers.get("content-type");p.some((t=>{var r,n,i;return null===(i=null===(r=null==e?void 0:e.toLowerCase)||void 0===r?void 0:(n=r.call(e)).includes)||void 0===i?void 0:i.call(n,t)}))&&(s=await r.text(),$.l=i,xe($,s,u||l)),Le(o,c.loadHandlers)}else d=r.statusText,Le(o,c.errorHandlers)}catch(e){console.error(e),d=String(e.stack||e),Le(o,c.errorHandlers)}else s&&(d=Ce($,i,s,0,d));$.l="",I.K([t.InitializedEnvironmentScript,n,i,d])})(s);else if(o===t.RefHandlerCallback)(({V:e,w:t,L:r,R:n,b:i})=>{if(w[r])try{w[r].apply(le(e,t,[],n),le(e,t,[],i))}catch(e){console.error(e)}})(s);else if(o===t.ForwardMainTrigger)(({V:e,q:t,b:r})=>{try{let n=b[e].U,i=0,o=D(t);for(;i<o;i++)i+1<o?n=n[t[i]]:n[t[i]].apply(n,le(null,e,[],r))}catch(e){console.error(e)}})(s);else if(o===t.InitializeEnvironment)ct(s);else if(o===t.InitializedScripts)b[s].x=1,b[s].y=0;else if(o===t.DocumentVisibilityState)b[s].T=i[2];else if(o===t.LocationUpdate){const e=s.V,t=b[e];t.E.href=s.url,function(e,t,n){const i=t.U.history;switch(n.type){case r.PushState:t.$propagateHistoryChange$=!1;try{i.pushState(n.state,"",n.newUrl)}catch(e){}t.$propagateHistoryChange$=!0;break;case r.ReplaceState:t.$propagateHistoryChange$=!1;try{i.replaceState(n.state,"",n.newUrl)}catch(e){}t.$propagateHistoryChange$=!0}}(s.V,t,s)}else o===t.CustomElementCallback&&((e,t,r,n,i)=>{const o=K(t,r);o&&"function"==typeof o[n]&&o[n].apply(o,i)})(...i);else o===t.MainDataResponseToWorker?((t=>{const r=I.i=JSON.parse(t.i),n=t.I;I.t=importScripts.bind(e),I.v=t.v,I.C=t.C,I.I=n,I.K=postMessage.bind(e),I.P=t.P,I.$tabId$=t.$tabId$,e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,T("resolveUrl,resolveSendBeaconRequestParameters,get,set,apply").map((e=>{r[e]&&(r[e]=new Function("return "+r[e])())}))})(s),I.K([t.MainInterfacesRequestFromWorker])):o===t.MainInterfacesResponseToWorker?(I.v=[...I.v,...s],I.x=1,I.K([t.InitializedWebWorker]),[...lt].map(ut),lt.length=0):lt.push(n)};e.onmessage=ut,postMessage([t.MainDataRequestFromWorker])})(self);\n',
            ],
            { type: "text/javascript" },
          ),
        ),
        { name: "Partytown 🎉" },
      )),
      (re.onmessage = (t) => {
        const r = t.data;
        r[0] === v.AsyncAccessRequest ? _(re, r[1]) : e(re, r);
      }),
      A.addEventListener("pt1", (e) =>
        K(re, C(e.detail.frameElement), e.detail),
      ));
  });
})(window);
