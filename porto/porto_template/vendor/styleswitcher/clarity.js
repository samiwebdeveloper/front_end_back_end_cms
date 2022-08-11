/* clarity-js v0.6.34: https://github.com/microsoft/clarity (License: MIT) */ !(function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get start() {
                return kn;
            },
            get stop() {
                return En;
            },
            get parse() {
                return Mn;
            },
            get getId() {
                return Nn;
            },
            get add() {
                return Sn;
            },
            get update() {
                return _n;
            },
            get sameorigin() {
                return Tn;
            },
            get iframe() {
                return xn;
            },
            get getNode() {
                return Cn;
            },
            get getValue() {
                return zn;
            },
            get get() {
                return jn;
            },
            get lookup() {
                return Ln;
            },
            get has() {
                return Rn;
            },
            get updates() {
                return An;
            },
        }),
        e = Object.freeze({
            __proto__: null,
            get track() {
                return lr;
            },
            get start() {
                return vr;
            },
            get queue() {
                return gr;
            },
            get stop() {
                return mr;
            },
        }),
        n = Object.freeze({
            __proto__: null,
            get data() {
                return Dr;
            },
            get keys() {
                return Ir;
            },
            get fragments() {
                return jr;
            },
            get start() {
                return Lr;
            },
            get clone() {
                return Rr;
            },
            get compute() {
                return Ar;
            },
            get reset() {
                return Yr;
            },
            get update() {
                return Hr;
            },
            get stop() {
                return Xr;
            },
        }),
        r = Object.freeze({
            __proto__: null,
            get data() {
                return xr;
            },
            get start() {
                return Br;
            },
            get check() {
                return Vr;
            },
            get trigger() {
                return Fr;
            },
            get compute() {
                return Jr;
            },
            get stop() {
                return Gr;
            },
        }),
        a = Object.freeze({
            __proto__: null,
            get data() {
                return Zr;
            },
            get updates() {
                return Kr;
            },
            get start() {
                return Qr;
            },
            get stop() {
                return $r;
            },
            get log() {
                return ta;
            },
            get compute() {
                return ea;
            },
            get reset() {
                return na;
            },
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return ra;
            },
            get callbacks() {
                return aa;
            },
            get start() {
                return oa;
            },
            get userAgentData() {
                return ua;
            },
            get stop() {
                return sa;
            },
            get metadata() {
                return ca;
            },
            get id() {
                return la;
            },
            get consent() {
                return da;
            },
            get clear() {
                return fa;
            },
            get save() {
                return ha;
            },
        }),
        o = Object.freeze({
            __proto__: null,
            get data() {
                return Ea;
            },
            get start() {
                return Oa;
            },
            get stop() {
                return Ma;
            },
            get envelope() {
                return Na;
            },
        }),
        u = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            mask: [],
            unmask: [],
            regions: [],
            extract: [],
            cookies: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
        };

    function s(t) {
        return window.Zone && "__symbol__" in window.Zone ?
            window.Zone.__symbol__(t) :
            t;
    }
    var c = 0;

    function l(t) {
        return (
            void 0 === t && (t = null),
            (t = t || performance.now()),
            Math.max(Math.round(t - c), 0)
        );
    }
    var d = "0.6.34";

    function f(t) {
        for (var e = 5381, n = e, r = 0; r < t.length; r += 2) {
            if (((e = ((e << 5) + e) ^ t.charCodeAt(r)), r + 1 < t.length))
                n = ((n << 5) + n) ^ t.charCodeAt(r + 1);
        }
        return Math.abs(e + 11579 * n).toString(36);
    }
    var h = null,
        p = null,
        v = !1;

    function g() {
        v &&
            (h = {
                time: l(),
                event: 4,
                data: {
                    visible: p.visible,
                    docWidth: p.docWidth,
                    docHeight: p.docHeight,
                    screenWidth: p.screenWidth,
                    screenHeight: p.screenHeight,
                    scrollX: p.scrollX,
                    scrollY: p.scrollY,
                    pointerX: p.pointerX,
                    pointerY: p.pointerY,
                    activityTime: p.activityTime,
                },
            }),
            (p = p || {
                visible: 1,
                docWidth: 0,
                docHeight: 0,
                screenWidth: 0,
                screenHeight: 0,
                scrollX: 0,
                scrollY: 0,
                pointerX: 0,
                pointerY: 0,
                activityTime: 0,
            });
    }

    function m(t, e, n) {
        switch (t) {
            case 8:
                (p.docWidth = e), (p.docHeight = n);
                break;
            case 11:
                (p.screenWidth = e), (p.screenHeight = n);
                break;
            case 10:
                (p.scrollX = e), (p.scrollY = n);
                break;
            default:
                (p.pointerX = e), (p.pointerY = n);
        }
        v = !0;
    }

    function b(t) {
        p.activityTime = t;
    }

    function y(t, e) {
        (p.visible = "visible" === e ? 1 : 0), p.visible || b(t), (v = !0);
    }

    function w() {
        v && Ur(4);
    }
    var k = Object.freeze({
            __proto__: null,
            get state() {
                return h;
            },
            start: function() {
                (v = !1), g();
            },
            reset: g,
            track: m,
            activity: b,
            visibility: y,
            compute: w,
            stop: function() {
                g();
            },
        }),
        E = null;

    function O(t, e) {
        qa() &&
            t &&
            e &&
            "string" == typeof t &&
            "string" == typeof e &&
            t.length < 255 &&
            e.length < 255 &&
            ((E = { key: t, value: e }), Ur(24));
    }
    var M,
        N = null,
        S = null;

    function _(t, e) {
        void 0 === e && (e = 1),
            t in N || (N[t] = 0),
            t in S || (S[t] = 0),
            (N[t] += e),
            (S[t] += e);
    }

    function T(t, e) {
        null !== e &&
            (t in N || (N[t] = 0), t in S || (S[t] = 0), (N[t] += e), (S[t] += e));
    }

    function x(t, e) {
        null !== e &&
            !1 === isNaN(e) &&
            (t in N || (N[t] = 0),
                (e > N[t] || 0 === N[t]) && ((S[t] = e), (N[t] = e)));
    }

    function D(t, e, n) {
        return window.setTimeout(Ta(t), e, n);
    }

    function I(t) {
        return window.clearTimeout(t);
    }
    var C = 0,
        z = 0,
        j = null;

    function L() {
        j && I(j), (j = D(R, z)), (C = l());
    }

    function R() {
        var t = l();
        (M = { gap: t - C }),
        Ur(25),
            M.gap < 3e5 ?
            (j = D(R, z)) :
            Ha &&
            (O("clarity", "suspend"),
                ni(), ["mousemove", "touchstart"].forEach(function(t) {
                    return Da(document, t, Ua);
                }), ["resize", "scroll", "pageshow"].forEach(function(t) {
                    return Da(window, t, Ua);
                }));
    }
    var A = Object.freeze({
            __proto__: null,
            get data() {
                return M;
            },
            start: function() {
                (z = 6e4), (C = 0);
            },
            reset: L,
            stop: function() {
                I(j), (C = 0), (z = 0);
            },
        }),
        Y = null;

    function H(t, e) {
        if (t in Y) {
            var n = Y[t],
                r = n[n.length - 1];
            e - r[0] > 100 ? Y[t].push([e, 0]) : (r[1] = e - r[0]);
        } else Y[t] = [
            [e, 0]
        ];
    }

    function X() {
        Ur(36);
    }

    function W() {
        Y = {};
    }
    var q = Object.freeze({
            __proto__: null,
            get data() {
                return Y;
            },
            start: function() {
                Y = {};
            },
            stop: function() {
                Y = {};
            },
            track: H,
            compute: X,
            reset: W,
        }),
        P = null;

    function U(t) {
        qa() &&
            u.lean &&
            ((u.lean = !1), (P = { key: t }), ha(), u.upgrade && u.upgrade(t), Ur(3));
    }
    var B = Object.freeze({
            __proto__: null,
            get data() {
                return P;
            },
            start: function() {
                !u.lean && u.upgrade && u.upgrade("Config"), (P = null);
            },
            upgrade: U,
            stop: function() {
                P = null;
            },
        }),
        V = null;

    function F(t, e) {
        G(t, "string" == typeof e ? [e] : e);
    }

    function J(t, e, n) {
        void 0 === e && (e = null),
            void 0 === n && (n = null),
            G("userId", [t]),
            G("sessionId", [e]),
            G("pageId", [n]);
    }

    function G(t, e) {
        if (qa() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in V) ? V[t] : [], r = 0; r < e.length; r++)
                "string" == typeof e[r] && e[r].length < 255 && n.push(e[r]);
            V[t] = n;
        }
    }

    function Z() {
        Ur(34);
    }

    function K() {
        V = {};
    }

    function Q(t, e, n, r) {
        return new(n || (n = Promise))(function(a, i) {
            function o(t) {
                try {
                    s(r.next(t));
                } catch (t) {
                    i(t);
                }
            }

            function u(t) {
                try {
                    s(r.throw(t));
                } catch (t) {
                    i(t);
                }
            }

            function s(t) {
                var e;
                t.done ?
                    a(t.value) :
                    ((e = t.value),
                        e instanceof n ?
                        e :
                        new n(function(t) {
                            t(e);
                        })).then(o, u);
            }
            s((r = r.apply(t, e || [])).next());
        });
    }

    function $(t, e) {
        var n,
            r,
            a,
            i,
            o = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
            (i[Symbol.iterator] = function() {
                return this;
            }),
            i
        );

        function u(i) {
            return function(u) {
                return (function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;)
                        try {
                            if (
                                ((n = 1),
                                    r &&
                                    (a =
                                        2 & i[0] ?
                                        r.return :
                                        i[0] ?
                                        r.throw || ((a = r.return) && a.call(r), 0) :
                                        r.next) &&
                                    !(a = a.call(r, i[1])).done)
                            )
                                return a;
                            switch (((r = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return o.label++, { value: i[1], done: !1 };
                                case 5:
                                    o.label++, (r = i[1]), (i = [0]);
                                    continue;
                                case 7:
                                    (i = o.ops.pop()), o.trys.pop();
                                    continue;
                                default:
                                    if (!((a = o.trys),
                                            (a = a.length > 0 && a[a.length - 1]) ||
                                            (6 !== i[0] && 2 !== i[0]))) {
                                        o = 0;
                                        continue;
                                    }
                                    if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                        o.label = i[1];
                                        break;
                                    }
                                    if (6 === i[0] && o.label < a[1]) {
                                        (o.label = a[1]), (a = i);
                                        break;
                                    }
                                    if (a && o.label < a[2]) {
                                        (o.label = a[2]), o.ops.push(i);
                                        break;
                                    }
                                    a[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                            }
                            i = e.call(t, o);
                        } catch (t) {
                            (i = [6, t]), (r = 0);
                        } finally {
                            n = a = 0;
                        }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, u]);
            };
        }
    }
    var tt = "CompressionStream" in window;

    function et(t) {
        return Q(this, void 0, void 0, function() {
            var e, n;
            return $(this, function(r) {
                switch (r.label) {
                    case 0:
                        return (
                            r.trys.push([0, 3, , 4]),
                            tt ?
                            ((e = new ReadableStream({
                                        start: function(e) {
                                            return Q(this, void 0, void 0, function() {
                                                return $(this, function(n) {
                                                    return e.enqueue(t), e.close(), [2];
                                                });
                                            });
                                        },
                                    })
                                    .pipeThrough(new TextEncoderStream())
                                    .pipeThrough(new window.CompressionStream("gzip"))),
                                (n = Uint8Array.bind), [4, nt(e)]) :
                            [3, 2]
                        );
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, r.sent()]))()];
                    case 2:
                        return [3, 4];
                    case 3:
                        return r.sent(), [3, 4];
                    case 4:
                        return [2, null];
                }
            });
        });
    }

    function nt(t) {
        return Q(this, void 0, void 0, function() {
            var e, n, r, a, i;
            return $(this, function(o) {
                switch (o.label) {
                    case 0:
                        (e = t.getReader()), (n = []), (r = !1), (a = []), (o.label = 1);
                    case 1:
                        return r ? [3, 3] : [4, e.read()];
                    case 2:
                        return (
                            (i = o.sent()),
                            (r = i.done),
                            (a = i.value),
                            r ? [2, n] : (n.push.apply(n, a), [3, 1])
                        );
                    case 3:
                        return [2, n];
                }
            });
        });
    }
    var rt = [
        k,
        a,
        Object.freeze({
            __proto__: null,
            get data() {
                return V;
            },
            start: function() {
                K();
            },
            set: F,
            identify: J,
            compute: Z,
            reset: K,
            stop: function() {
                K();
            },
        }),
        r,
        q,
        i,
        o,
        e,
        A,
        B,
        n,
    ];

    function at() {
        (N = {}),
        (S = {}),
        _(5),
            rt.forEach(function(t) {
                return Ta(t.start)();
            });
    }

    function it() {
        rt
            .slice()
            .reverse()
            .forEach(function(t) {
                return Ta(t.stop)();
            }),
            (N = {}),
            (S = {});
    }

    function ot() {
        Z(), w(), ea(), Ur(0), X(), Jr(), Ar();
    }

    function ut(t, e, n, r) {
        if ((void 0 === r && (r = !1), t))
            switch (n) {
                case 0:
                    return t;
                case 1:
                    switch (e) {
                        case "*T":
                        case "value":
                        case "placeholder":
                            return (function(t) {
                                for (
                                    var e = -1, n = !1, r = !1, a = !1, i = null, o = 0; o < t.length; o++
                                ) {
                                    var u = t.charCodeAt(o);
                                    (n = n || (u >= 48 && u <= 57)),
                                    (r = r || 64 === u),
                                    (a = 9 === u || 10 === u || 13 === u || 32 === u),
                                    (0 === o || o === t.length - 1 || a) &&
                                    ((n || r) &&
                                        (null === i && (i = t.split("")),
                                            lt(i, e, a ? o : o + 1)),
                                        a && ((n = !1), (r = !1), (e = o)));
                                }
                                return i ? i.join("") : t;
                            })(t);
                        case "input":
                            return ct(t);
                    }
                    return t;
                case 2:
                case 3:
                    switch (e) {
                        case "*T":
                            return r ?
                                (function(t) {
                                    var e = t.trim();
                                    if (e.length > 0) {
                                        var n = e[0],
                                            r = t.indexOf(n),
                                            a = t.substr(0, r),
                                            i = t.substr(r + e.length);
                                        return "" + a + e.length.toString(36) + i;
                                    }
                                    return t;
                                })(t) :
                                st(t);
                        case "src":
                        case "srcset":
                        case "title":
                        case "alt":
                            return 3 === n ? "" : t;
                        case "value":
                        case "click":
                        case "input":
                            return ct(t);
                        case "placeholder":
                            return st(t);
                    }
            }
        return t;
    }

    function st(t) {
        return t.replace(/\S/gi, "•");
    }

    function ct(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", r = 0; r < e; r++)
            n += r > 0 && r % 5 == 0 ? " " : "•";
        return n;
    }

    function lt(t, e, n) {
        for (var r = e + 1; r < n; r++) t[r] = "•";
    }
    var dt = ["DIV", "TR", "P", "LI", "UL", "A", "BUTTON"];

    function ft(t, e) {
        void 0 === e && (e = !1);
        var n = t.attributes,
            r = t.prefix ? t.prefix[e ? 1 : 0] : null,
            a =
            e || (n && !("class" in n)) || dt.indexOf(t.tag) >= 0 ?
            ":nth-of-type(" + t.position + ")" :
            "";
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === r) return "";
                (r += ">"),
                (t.tag =
                    0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag);
                var i = "" + r + t.tag + a,
                    o =
                    "class" in n && n.class.length > 0 ?
                    n.class.trim().split(/\s+/) :
                    null;
                if (e) {
                    var u = "id" in n && n.id.length > 0 ? n.id : null;
                    (i =
                        (o =
                            "BODY" !== t.tag && o ?
                            o.filter(function(t) {
                                return !ht(t);
                            }) :
                            []).length > 0 ?
                        "" + r + t.tag + "." + o.join(".") + a :
                        i),
                    (i =
                        u && !1 === ht(u) ?
                        (function(t) {
                            var e = t.lastIndexOf("*S"),
                                n = t.lastIndexOf("iframe:HTML"),
                                r = Math.max(e, n);
                            if (r < 0) return "";
                            var a = t.indexOf(">", r) + 1;
                            return t.substr(0, a);
                        })(r) +
                        "#" +
                        u :
                        i);
                } else i = o ? "" + r + t.tag + "." + o.join(".") + a : i;
                return i;
        }
    }

    function ht(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !0;
        }
        return !1;
    }
    var pt = {},
        vt = [],
        gt = null,
        mt = null,
        bt = null;

    function yt() {
        (pt = {}), (vt = []), (gt = null), (mt = null);
    }

    function wt(t, e) {
        return (
            void 0 === e && (e = 0),
            Q(this, void 0, void 0, function() {
                var n, r, a;
                return $(this, function(i) {
                    for (n = 0, r = vt; n < r.length; n++)
                        if (r[n].task === t) return [2];
                    return (
                        (a = new Promise(function(n) {
                            vt[1 === e ? "unshift" : "push"]({
                                task: t,
                                resolve: n,
                                id: la(),
                            });
                        })),
                        null === gt && null === mt && kt(), [2, a]
                    );
                });
            })
        );
    }

    function kt() {
        var t = vt.shift();
        t &&
            ((gt = t),
                t
                .task()
                .then(function() {
                    t.id === la() && (t.resolve(), (gt = null), kt());
                })
                .catch(function(e) {
                    t.id === la() &&
                        (e && Tr(0, 1, e.name, e.message, e.stack), (gt = null), kt());
                }));
    }

    function Et(t) {
        var e = St(t);
        return e in pt ?
            performance.now() - pt[e].start > pt[e].yield ?
            0 :
            1 :
            2;
    }

    function Ot(t) {
        pt[St(t)] = { start: performance.now(), calls: 0, yield: 30 };
    }

    function Mt(t) {
        var e = performance.now(),
            n = St(t),
            r = e - pt[n].start;
        T(t.cost, r), _(5), pt[n].calls > 0 && T(4, r);
    }

    function Nt(t) {
        return Q(this, void 0, void 0, function() {
            var e, n;
            return $(this, function(r) {
                switch (r.label) {
                    case 0:
                        return (e = St(t)) in pt ? (Mt(t), (n = pt[e]), [4, _t()]) : [3, 2];
                    case 1:
                        (n.yield = r.sent().timeRemaining()),
                        (function(t) {
                            var e = St(t);
                            if (pt && pt[e]) {
                                var n = pt[e].calls,
                                    r = pt[e].yield;
                                Ot(t), (pt[e].calls = n + 1), (pt[e].yield = r);
                            }
                        })(t),
                        (r.label = 2);
                    case 2:
                        return [2, e in pt ? 1 : 2];
                }
            });
        });
    }

    function St(t) {
        return t.id + "." + t.cost;
    }

    function _t() {
        return Q(this, void 0, void 0, function() {
            return $(this, function(t) {
                switch (t.label) {
                    case 0:
                        return mt ? [4, mt] : [3, 2];
                    case 1:
                        t.sent(), (t.label = 2);
                    case 2:
                        return [
                            2,
                            new Promise(function(t) {
                                Tt(t, { timeout: 5e3 });
                            }),
                        ];
                }
            });
        });
    }
    var Tt =
        window.requestIdleCallback ||
        function(t, e) {
            var n = performance.now(),
                r = new MessageChannel(),
                a = r.port1,
                i = r.port2;
            (a.onmessage = function(r) {
                var a = performance.now(),
                    o = a - n,
                    u = a - r.data;
                if (u > 30 && o < e.timeout)
                    requestAnimationFrame(function() {
                        i.postMessage(a);
                    });
                else {
                    var s = o > e.timeout;
                    t({
                        didTimeout: s,
                        timeRemaining: function() {
                            return s ? 30 : Math.max(0, 30 - u);
                        },
                    });
                }
            }),
            requestAnimationFrame(function() {
                i.postMessage(performance.now());
            });
        };
    var xt,
        Dt = [],
        It = !1,
        Ct = null;

    function zt(t) {
        window.requestAnimationFrame(function() {
            for (var e = 0, n = t; e < n.length; e++) {
                var r = n[e],
                    a = r.target,
                    i = a ? Nn(a) : null;
                if (i) {
                    var o = zn(i).metadata.size,
                        u = r.borderBoxSize,
                        s = null,
                        c = null;
                    if (u && u.length > 0)
                        (s = Math.floor(100 * u[0].inlineSize)),
                        (c = Math.floor(100 * u[0].blockSize));
                    else {
                        var l = a.getBoundingClientRect();
                        (s = Math.floor(100 * l.width)), (c = Math.floor(100 * l.height));
                    }
                    s !== o[0] &&
                        c !== o[1] &&
                        ((o = [s, c]), Dt.push({ id: i, width: s, height: c }));
                }
            }
            Dt.length > 0 && Rt(37);
        });
    }

    function jt() {
        Dt = [];
    }

    function Lt() {
        jt(), Ct && (Ct.disconnect(), (Ct = null)), (It = !1);
    }

    function Rt(t, e, n) {
        return (
            void 0 === e && (e = null),
            void 0 === n && (n = null),
            Q(this, void 0, void 0, function() {
                var r,
                    a,
                    i,
                    o,
                    s,
                    c,
                    d,
                    f,
                    h,
                    p,
                    v,
                    g,
                    y,
                    w,
                    k,
                    E,
                    O,
                    M,
                    N,
                    S,
                    _,
                    T,
                    x,
                    D,
                    I,
                    C;
                return $(this, function(z) {
                    switch (z.label) {
                        case 0:
                            switch (((r = n || l()), (a = [r, t]), t)) {
                                case 8:
                                    return [3, 1];
                                case 7:
                                    return [3, 2];
                                case 37:
                                    return [3, 3];
                                case 5:
                                case 6:
                                    return [3, 4];
                            }
                            return [3, 11];
                        case 1:
                            return (
                                (i = xt),
                                a.push(i.width),
                                a.push(i.height),
                                m(t, i.width, i.height),
                                gr(a), [3, 11]
                            );
                        case 2:
                            for (o = 0, s = Xn; o < s.length; o++)
                                (c = s[o]),
                                (a = [c.time, 7]).push(c.data.id),
                                a.push(c.data.interaction),
                                a.push(c.data.visibility),
                                a.push(c.data.name),
                                gr(a);
                            return Qn(), [3, 11];
                        case 3:
                            for (d = 0, f = Dt; d < f.length; d++)
                                (h = f[d]), a.push(h.id), a.push(h.width), a.push(h.height);
                            return jt(), gr(a), [3, 11];
                        case 4:
                            if (2 === Et(e)) return [3, 11];
                            if (!((p = An()).length > 0)) return [3, 10];
                            (v = 0), (g = p), (z.label = 5);
                        case 5:
                            return v < g.length ?
                                ((y = g[v]), 0 !== (w = Et(e)) ? [3, 7] : [4, Nt(e)]) :
                                [3, 9];
                        case 6:
                            (w = z.sent()), (z.label = 7);
                        case 7:
                            if (2 === w) return [3, 9];
                            for (
                                k = y.data,
                                E = y.metadata.active,
                                O = y.metadata.suspend,
                                M = y.metadata.privacy,
                                N = (function(t) {
                                    var e = t.metadata.privacy;
                                    return "*T" === t.data.tag && !(0 === e || 1 === e);
                                })(y),
                                S = E ? ["tag", "attributes", "value"] : ["tag"],
                                (function(t) {
                                    if (!1 !== It &&
                                        (Ct = null === Ct ? new ResizeObserver(zt) : Ct)
                                    ) {
                                        var e = zn(t);
                                        if (
                                            e &&
                                            null !== e.metadata.size &&
                                            0 === e.metadata.size.length
                                        ) {
                                            var n = Cn(t);
                                            if (n && n.nodeType === Node.ELEMENT_NODE) {
                                                var r = n,
                                                    a = r.getBoundingClientRect();
                                                (e.metadata.size = [
                                                    Math.floor(100 * a.width),
                                                    Math.floor(100 * a.height),
                                                ]),
                                                Ct.observe(r);
                                            }
                                        }
                                    }
                                })(y.id),
                                _ = 0,
                                T = S; _ < T.length; _++
                            )
                                if (k[(x = T[_])])
                                    switch (x) {
                                        case "tag":
                                            (D = y.metadata.size),
                                            (I = N ? -1 : 1),
                                            a.push(y.id * I),
                                                y.parent && E && a.push(y.parent),
                                                y.previous && E && a.push(y.previous),
                                                a.push(O ? "*M" : k[x]),
                                                D &&
                                                2 === D.length &&
                                                a.push("#" + At(D[0]) + "." + At(D[1]));
                                            break;
                                        case "attributes":
                                            for (C in k[x])
                                                void 0 !== k[x][C] && a.push(Yt(C, k[x][C], M));
                                            break;
                                        case "value":
                                            a.push(ut(k[x], k.tag, M, N));
                                    }
                            z.label = 8;
                        case 8:
                            return v++, [3, 5];
                        case 9:
                            6 === t && b(r),
                                gr(
                                    (function(t) {
                                        for (
                                            var e = [], n = {}, r = 0, a = null, i = 0; i < t.length; i++
                                        )
                                            if ("string" == typeof t[i]) {
                                                var o = t[i],
                                                    u = n[o] || -1;
                                                u >= 0 ?
                                                    a ?
                                                    a.push(u) :
                                                    ((a = [u]), e.push(a), r++) :
                                                    ((a = null), e.push(o), (n[o] = r++));
                                            } else(a = null), e.push(t[i]), r++;
                                        return e;
                                    })(a), !u.lean
                                ),
                                (z.label = 10);
                        case 10:
                            return [3, 11];
                        case 11:
                            return [2];
                    }
                });
            })
        );
    }

    function At(t) {
        return t.toString(36);
    }

    function Yt(t, e, n) {
        return t + "=" + ut(e, t, n);
    }

    function Ht() {
        xt = null;
    }

    function Xt() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            r = t ? t.scrollWidth : null,
            a = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            s = Math.max(n, r, a, i, o, u),
            c = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(c, l, d, f, h, p);
        (null !== xt && s === xt.width && v === xt.height) ||
        null === s ||
            null === v ||
            ((xt = { width: s, height: v }), Rt(8));
    }

    function Wt(t) {
        var e = { x: 0, y: 0 };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    r = null === n ? xn(t.ownerDocument) : null;
                (e.x += t.offsetLeft), (e.y += t.offsetTop), (t = r || n);
            } while (t);
        return e;
    }
    var qt = ["input", "textarea", "radio", "button", "canvas"],
        Pt = [];

    function Ut(t) {
        Da(t, "click", Bt.bind(this, 9, t), !0);
    }

    function Bt(t, e, n) {
        var r = xn(e),
            a = r ? r.contentDocument.documentElement : document.documentElement,
            i =
            "pageX" in n ?
            Math.round(n.pageX) :
            "clientX" in n ?
            Math.round(n.clientX + a.scrollLeft) :
            null,
            o =
            "pageY" in n ?
            Math.round(n.pageY) :
            "clientY" in n ?
            Math.round(n.clientY + a.scrollTop) :
            null;
        if (r) {
            var u = Wt(r);
            (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
        }
        var s = $n(n),
            c = (function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e;
                    }
                    t = t.parentNode;
                }
                return null;
            })(s),
            d = (function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var r = t.getBoundingClientRect();
                    r &&
                        r.width > 0 &&
                        r.height > 0 &&
                        (e = {
                            x: Math.floor(
                                r.left +
                                ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)
                            ),
                            y: Math.floor(
                                r.top +
                                ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)
                            ),
                            w: Math.floor(r.width),
                            h: Math.floor(r.height),
                        });
                }
                return e;
            })(s);
        0 === n.detail &&
            d &&
            ((i = Math.round(d.x + d.w / 2)), (o = Math.round(d.y + d.h / 2)));
        var f = d ? Math.max(Math.floor(((i - d.x) / d.w) * 32767), 0) : 0,
            h = d ? Math.max(Math.floor(((o - d.y) / d.h) * 32767), 0) : 0;
        null !== i &&
            null !== o &&
            (Pt.push({
                    time: l(),
                    event: t,
                    data: {
                        target: s,
                        x: i,
                        y: o,
                        eX: f,
                        eY: h,
                        button: n.button,
                        reaction: Ft(s),
                        context: Jt(c),
                        text: Vt(s),
                        link: c ? c.href : null,
                        hash: null,
                    },
                }),
                wt(er.bind(this, t)));
    }

    function Vt(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25));
        }
        return e;
    }

    function Ft(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (qt.indexOf(e) >= 0) return 0;
        }
        return 1;
    }

    function Jt(t) {
        if (t && t.hasAttribute("target"))
            switch (t.getAttribute("target")) {
                case "_blank":
                    return 1;
                case "_parent":
                    return 2;
                case "_top":
                    return 3;
            }
        return 0;
    }

    function Gt() {
        Pt = [];
    }
    var Zt = [];

    function Kt(t, e) {
        Zt.push({ time: l(), event: 38, data: { target: $n(e), action: t } }),
            wt(er.bind(this, 38));
    }

    function Qt() {
        Zt = [];
    }
    var $t = null,
        te = [];

    function ee(t) {
        var e = $n(t),
            n = jn(e);
        if (e && e.type && n) {
            var r = void 0;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    r = e.checked ? "true" : "false";
                    break;
                case "range":
                    r = e.value;
                    break;
                default:
                    r = ut(e.value, "input", n.metadata.privacy);
            }
            var a = { target: e, value: r };
            te.length > 0 && te[te.length - 1].data.target === a.target && te.pop(),
                te.push({ time: l(), event: 27, data: a }),
                I($t),
                ($t = D(ne, 500, 27));
        }
    }

    function ne(t) {
        wt(er.bind(this, t));
    }

    function re() {
        te = [];
    }
    var ae,
        ie = [],
        oe = null;

    function ue(t, e, n) {
        var r = xn(e),
            a = r ? r.contentDocument.documentElement : document.documentElement,
            i =
            "pageX" in n ?
            Math.round(n.pageX) :
            "clientX" in n ?
            Math.round(n.clientX + a.scrollLeft) :
            null,
            o =
            "pageY" in n ?
            Math.round(n.pageY) :
            "clientY" in n ?
            Math.round(n.clientY + a.scrollTop) :
            null;
        if (r) {
            var u = Wt(r);
            (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
        }
        null !== i &&
            null !== o &&
            ce({ time: l(), event: t, data: { target: $n(n), x: i, y: o } });
    }

    function se(t, e, n) {
        var r = xn(e),
            a = r ? r.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = l();
        if (i)
            for (var u = 0; u < i.length; u++) {
                var s = i[u],
                    c = "clientX" in s ? Math.round(s.clientX + a.scrollLeft) : null,
                    d = "clientY" in s ? Math.round(s.clientY + a.scrollTop) : null;
                (c = c && r ? c + Math.round(r.offsetLeft) : c),
                (d = d && r ? d + Math.round(r.offsetTop) : d),
                null !== c &&
                    null !== d &&
                    ce({ time: o, event: t, data: { target: $n(n), x: c, y: d } });
            }
    }

    function ce(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = ie.length,
                    n = e > 1 ? ie[e - 2] : null;
                n &&
                    (function(t, e) {
                        var n = t.data.x - e.data.x,
                            r = t.data.y - e.data.y,
                            a = Math.sqrt(n * n + r * r),
                            i = e.time - t.time,
                            o = e.data.target === t.data.target;
                        return e.event === t.event && o && a < 20 && i < 25;
                    })(n, t) &&
                    ie.pop(),
                    ie.push(t),
                    I(oe),
                    (oe = D(le, 500, t.event));
                break;
            default:
                ie.push(t), le(t.event);
        }
    }

    function le(t) {
        wt(er.bind(this, t));
    }

    function de() {
        ie = [];
    }

    function fe() {
        var t = document.documentElement;
        (ae = {
            width: t && "clientWidth" in t ?
                Math.min(t.clientWidth, window.innerWidth) :
                window.innerWidth,
            height: t && "clientHeight" in t ?
                Math.min(t.clientHeight, window.innerHeight) :
                window.innerHeight,
        }),
        er(11);
    }

    function he() {
        ae = null;
    }
    var pe = [],
        ve = null;

    function ge(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            r = t ? $n(t) : n;
        if (r && r.nodeType === Node.DOCUMENT_NODE) {
            var a = xn(r);
            (e = a ? a.contentWindow : e), (r = n = r.documentElement);
        }
        var i =
            r === n && "pageXOffset" in e ?
            Math.round(e.pageXOffset) :
            Math.round(r.scrollLeft),
            o =
            r === n && "pageYOffset" in e ?
            Math.round(e.pageYOffset) :
            Math.round(r.scrollTop),
            u = { time: l(), event: 10, data: { target: r, x: i, y: o } };
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var s = pe.length,
                c = s > 1 ? pe[s - 2] : null;
            c &&
                (function(t, e) {
                    var n = t.data.x - e.data.x,
                        r = t.data.y - e.data.y;
                    return n * n + r * r < 400 && e.time - t.time < 25;
                })(c, u) &&
                pe.pop(),
                pe.push(u),
                I(ve),
                (ve = D(me, 500, 10));
        }
    }

    function me(t) {
        wt(er.bind(this, t));
    }
    var be = null,
        ye = null,
        we = null;

    function ke(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (
            null !== e &&
            !(
                (null === e.anchorNode && null === e.focusNode) ||
                (e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)
            )
        ) {
            var n = be.start ? be.start : null;
            null !== ye && null !== be.start && n !== e.anchorNode && (I(we), Ee(21)),
                (be = {
                    start: e.anchorNode,
                    startOffset: e.anchorOffset,
                    end: e.focusNode,
                    endOffset: e.focusOffset,
                }),
                (ye = e),
                I(we),
                (we = D(Ee, 500, 21));
        }
    }

    function Ee(t) {
        wt(er.bind(this, t));
    }

    function Oe() {
        (ye = null), (be = { start: 0, startOffset: 0, end: 0, endOffset: 0 });
    }
    var Me,
        Ne,
        Se = [];

    function _e(t) {
        Se.push({ time: l(), event: 39, data: { target: $n(t) } }),
            wt(er.bind(this, 39));
    }

    function Te() {
        Se = [];
    }

    function xe(t) {
        (Me = { name: t.type }), er(26), ni();
    }

    function De() {
        Me = null;
    }

    function Ie() {
        (Ne = {
            visible: "visibilityState" in document ? document.visibilityState : "default",
        }),
        er(28);
    }

    function Ce() {
        Ne = null;
    }

    function ze(t) {
        !(function(t) {
            var e = xn(t);
            Da(e ? e.contentWindow : t === document ? window : t, "scroll", ge, !0);
        })(t),
        t.nodeType === Node.DOCUMENT_NODE &&
            (Ut(t),
                (function(t) {
                    Da(t, "cut", Kt.bind(this, 0), !0),
                        Da(t, "copy", Kt.bind(this, 1), !0),
                        Da(t, "paste", Kt.bind(this, 2), !0);
                })(t),
                (function(t) {
                    Da(t, "mousedown", ue.bind(this, 13, t), !0),
                        Da(t, "mouseup", ue.bind(this, 14, t), !0),
                        Da(t, "mousemove", ue.bind(this, 12, t), !0),
                        Da(t, "mousewheel", ue.bind(this, 15, t), !0),
                        Da(t, "dblclick", ue.bind(this, 16, t), !0),
                        Da(t, "touchstart", se.bind(this, 17, t), !0),
                        Da(t, "touchend", se.bind(this, 18, t), !0),
                        Da(t, "touchmove", se.bind(this, 19, t), !0),
                        Da(t, "touchcancel", se.bind(this, 20, t), !0);
                })(t),
                (function(t) {
                    Da(t, "input", ee, !0);
                })(t),
                (function(t) {
                    Da(t, "selectstart", ke.bind(this, t), !0),
                        Da(t, "selectionchange", ke.bind(this, t), !0);
                })(t),
                (function(t) {
                    Da(t, "submit", _e, !0);
                })(t));
    }
    var je = Object.freeze({
            __proto__: null,
            start: function() {
                (nr = []),
                ar(),
                    Gt(),
                    Qt(),
                    de(),
                    re(),
                    Da(window, "resize", fe),
                    fe(),
                    Da(document, "visibilitychange", Ie),
                    Ie(),
                    (pe = []),
                    ge(),
                    Oe(),
                    Te(),
                    Da(window, "pagehide", xe);
            },
            stop: function() {
                (nr = []),
                ar(),
                    Gt(),
                    Qt(),
                    I(oe),
                    ie.length > 0 && le(ie[ie.length - 1].event),
                    I($t),
                    re(),
                    he(),
                    Ce(),
                    I(ve),
                    (pe = []),
                    Oe(),
                    I(we),
                    Te(),
                    De();
            },
            observe: ze,
        }),
        Le = /[^0-9\.]/g;

    function Re(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var r = n[e],
                a = t[r];
            if ("@type" === r && "string" == typeof a)
                switch (
                    (a =
                        (a = a.toLowerCase()).indexOf("article") >= 0 ||
                        a.indexOf("posting") >= 0 ?
                        "article" :
                        a)
                ) {
                    case "article":
                    case "recipe":
                        ta(5, t[r]), ta(8, t.creator), ta(18, t.headline);
                        break;
                    case "product":
                        ta(5, t[r]),
                            ta(10, t.name),
                            ta(12, t.sku),
                            t.brand && ta(6, t.brand.name);
                        break;
                    case "aggregaterating":
                        t.ratingValue &&
                            (x(11, Ae(t.ratingValue, 100)),
                                x(18, Ae(t.bestRating)),
                                x(19, Ae(t.worstRating))),
                            x(12, Ae(t.ratingCount)),
                            x(17, Ae(t.reviewCount));
                        break;
                    case "person":
                        ta(8, t.name);
                        break;
                    case "offer":
                        ta(7, t.availability),
                            ta(14, t.itemCondition),
                            ta(13, t.priceCurrency),
                            ta(12, t.sku),
                            x(13, Ae(t.price));
                        break;
                    case "brand":
                        ta(6, t.name);
                }
            null !== a && "object" == typeof a && Re(a);
        }
    }

    function Ae(t, e) {
        if ((void 0 === e && (e = 1), null !== t))
            switch (typeof t) {
                case "number":
                    return Math.round(t * e);
                case "string":
                    return Math.round(parseFloat(t.replace(Le, "")) * e);
            }
        return null;
    }
    var Ye = ["title", "alt", "onload", "onfocus", "onerror"],
        He = /[\r\n]+/g;

    function Xe(e, n) {
        var r = null;
        if (2 === n && !1 === Rn(e)) return r;
        0 !== n &&
            e.nodeType === Node.TEXT_NODE &&
            e.parentElement &&
            "STYLE" === e.parentElement.tagName &&
            (e = e.parentNode);
        var a = !1 === Rn(e) ? "add" : "update",
            i = e.parentElement ? e.parentElement : null,
            o = e.ownerDocument !== document;
        switch (e.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                i = o && e.parentNode ? xn(e.parentNode) : i;
                var u = e,
                    s = {
                        tag: (o ? "iframe:" : "") + "*D",
                        attributes: {
                            name: u.name,
                            publicId: u.publicId,
                            systemId: u.systemId,
                        },
                    };
                t[a](e, i, s, n);
                break;
            case Node.DOCUMENT_NODE:
                e === document && Mn(document), We(e);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var c = e;
                if (c.host)
                    if (
                        (Mn(c),
                            "function" === typeof c.constructor &&
                            c.constructor.toString().indexOf("[native code]") >= 0)
                    ) {
                        We(c);
                        for (
                            var l = "",
                                d = 0,
                                f = ("adoptedStyleSheets" in c) ? c.adoptedStyleSheets : []; d < f.length; d++
                        ) {
                            l += Pe(f[d]);
                        }
                        var h = { tag: "*S", attributes: { style: l } };
                        t[a](e, c.host, h, n);
                    } else t[a](e, c.host, { tag: "*P", attributes: {} }, n);
                break;
            case Node.TEXT_NODE:
                if (
                    ((i = i || e.parentNode),
                        "update" === a || (i && Rn(i) && "STYLE" !== i.tagName))
                ) {
                    var p = { tag: "*T", value: e.nodeValue };
                    t[a](e, i, p, n);
                }
                break;
            case Node.ELEMENT_NODE:
                var v = e,
                    g = v.tagName,
                    m = (function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r].name;
                                Ye.indexOf(a) < 0 && (e[a] = n[r].value);
                            }
                        "INPUT" === t.tagName &&
                            !("value" in e) &&
                            t.value &&
                            (e.value = t.value);
                        return e;
                    })(v);
                switch (
                    ((i = e.parentElement ?
                            e.parentElement :
                            e.parentNode ?
                            e.parentNode :
                            null),
                        "http://www.w3.org/2000/svg" === v.namespaceURI && (g = "svg:" + g),
                        g)
                ) {
                    case "HTML":
                        i = o && i ? xn(i) : null;
                        var b = { tag: (o ? "iframe:" : "") + g, attributes: m };
                        t[a](e, i, b, n);
                        break;
                    case "SCRIPT":
                        if ("type" in m && "application/ld+json" === m.type)
                            try {
                                Re(JSON.parse(v.text.replace(He, "")));
                            } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        break;
                    case "META":
                        var y = "property" in m ? "property" : "name" in m ? "name" : null;
                        if (y && "content" in m) {
                            var w = m.content;
                            switch (m[y]) {
                                case "og:title":
                                    ta(20, w);
                                    break;
                                case "og:type":
                                    ta(19, w);
                                    break;
                                case "generator":
                                    ta(21, w);
                            }
                        }
                        break;
                    case "HEAD":
                        var k = { tag: g, attributes: m };
                        location &&
                            (k.attributes["*B"] =
                                location.protocol + "//" + location.hostname),
                            t[a](e, i, k, n);
                        break;
                    case "STYLE":
                        var E = { tag: g, attributes: m, value: qe(v) };
                        t[a](e, i, E, n);
                        break;
                    case "IFRAME":
                        var O = e,
                            M = { tag: g, attributes: m };
                        Tn(O) &&
                            (!(function(t) {
                                    !1 === Rn(t) &&
                                        Da(t, "load", on.bind(this, t, "childList"), !0);
                                })(O),
                                (M.attributes["*O"] = "true"),
                                O.contentDocument &&
                                O.contentWindow &&
                                "loading" !== O.contentDocument.readyState &&
                                (r = O.contentDocument)),
                            t[a](e, i, M, n);
                        break;
                    default:
                        var N = { tag: g, attributes: m };
                        v.shadowRoot && (r = v.shadowRoot), t[a](e, i, N, n);
                }
        }
        return r;
    }

    function We(t) {
        Rn(t) ||
            (!(function(t) {
                    try {
                        var e = s("MutationObserver"),
                            n = e in window ? new window[e](Ta(tn)) : null;
                        n &&
                            (n.observe(t, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0,
                                }),
                                Be.push(n));
                    } catch (t) {
                        Tr(2, 0, t ? t.name : null);
                    }
                })(t),
                ze(t));
    }

    function qe(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = Pe(t.sheet)), e;
    }

    function Pe(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : [];
        } catch (t) {
            if ((Tr(1, 1, t ? t.name : null), t && "SecurityError" !== t.name))
                throw t;
        }
        if (null !== n)
            for (var r = 0; r < n.length; r++) e += n[r].cssText;
        return e;
    }

    function Ue(t, e, n) {
        return Q(this, void 0, void 0, function() {
            var r, a, i, o, u;
            return $(this, function(s) {
                switch (s.label) {
                    case 0:
                        (r = [t]), (s.label = 1);
                    case 1:
                        if (!(r.length > 0)) return [3, 4];
                        for (a = r.shift(), i = a.firstChild; i;)
                            r.push(i), (i = i.nextSibling);
                        return 0 !== (o = Et(e)) ? [3, 3] : [4, Nt(e)];
                    case 2:
                        (o = s.sent()), (s.label = 3);
                    case 3:
                        return 2 === o ? [3, 4] : ((u = Xe(a, n)) && r.push(u), [3, 1]);
                    case 4:
                        return [2];
                }
            });
        });
    }
    var Be = [],
        Ve = [],
        Fe = null,
        Je = null,
        Ge = null,
        Ze = [],
        Ke = null,
        Qe = null,
        $e = {};

    function tn(t) {
        var e = l();
        H(6, e),
            Ve.push({ time: e, mutations: t }),
            wt(en, 1).then(function() {
                Ta(Xt)(), Ta(Jn)();
            });
    }

    function en() {
        return Q(this, void 0, void 0, function() {
            var t, e, n, r, a, i, o, u, s;
            return $(this, function(c) {
                switch (c.label) {
                    case 0:
                        Ot((t = { id: la(), cost: 3 })), (c.label = 1);
                    case 1:
                        if (!(Ve.length > 0)) return [3, 8];
                        (e = Ve.shift()), (n = 0), (r = e.mutations), (c.label = 2);
                    case 2:
                        return n < r.length ?
                            ((a = r[n]), 0 !== (i = Et(t)) ? [3, 4] : [4, Nt(t)]) :
                            [3, 6];
                    case 3:
                        (i = c.sent()), (c.label = 4);
                    case 4:
                        if (2 === i) return [3, 6];
                        switch (
                            ((o = a.target),
                                (u = (function(t, e) {
                                    var n = t.target ? jn(t.target.parentNode) : null;
                                    if (n && "HTML" !== n.data.tag) {
                                        var r = l() > Qe,
                                            a = jn(t.target),
                                            i = a && a.selector ? a.selector.join() : t.target.nodeName,
                                            o = [
                                                n.selector ? n.selector.join() : "",
                                                i,
                                                t.attributeName,
                                                nn(t.addedNodes),
                                                nn(t.removedNodes),
                                            ].join();
                                        $e[o] = o in $e ? $e[o] : [0];
                                        var u = $e[o];
                                        if (
                                            (!1 === r && u[0] >= 10 && rn(u[1], 2, e),
                                                (u[0] = r ? u[0] + 1 : 1),
                                                10 === u[0])
                                        )
                                            return (u[1] = t.removedNodes), "suspend";
                                        if (u[0] > 10) return "";
                                    }
                                    return t.type;
                                })(a, t)) &&
                                o &&
                                o.ownerDocument &&
                                Mn(o.ownerDocument),
                                u &&
                                o &&
                                o.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                                o.host &&
                                Mn(o),
                                u)
                        ) {
                            case "attributes":
                                Xe(o, 3);
                                break;
                            case "characterData":
                                Xe(o, 4);
                                break;
                            case "childList":
                                rn(a.addedNodes, 1, t), rn(a.removedNodes, 2, t);
                                break;
                            case "suspend":
                                (s = jn(o)) && (s.metadata.suspend = !0);
                        }
                        c.label = 5;
                    case 5:
                        return n++, [3, 2];
                    case 6:
                        return [4, Rt(6, t, e.time)];
                    case 7:
                        return c.sent(), [3, 1];
                    case 8:
                        return Mt(t), [2];
                }
            });
        });
    }

    function nn(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join();
    }

    function rn(t, e, n) {
        return Q(this, void 0, void 0, function() {
            var r, a, i;
            return $(this, function(o) {
                switch (o.label) {
                    case 0:
                        (r = t ? t.length : 0), (a = 0), (o.label = 1);
                    case 1:
                        return a < r ?
                            1 !== e ?
                            [3, 2] :
                            (Ue(t[a], n, e), [3, 5]) :
                            [3, 6];
                    case 2:
                        return 0 !== (i = Et(n)) ? [3, 4] : [4, Nt(n)];
                    case 3:
                        (i = o.sent()), (o.label = 4);
                    case 4:
                        if (2 === i) return [3, 6];
                        Xe(t[a], e), (o.label = 5);
                    case 5:
                        return a++, [3, 1];
                    case 6:
                        return [2];
                }
            });
        });
    }

    function an(t, e) {
        return (
            void 0 === e && (e = !1),
            Ze.indexOf(t) < 0 && Ze.push(t),
            Ke && I(Ke),
            (Ke = D(function() {
                !(function(t) {
                    for (var e = 0, n = Ze; e < n.length; e++) {
                        var r = n[e];
                        if (r) {
                            var a = r.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                            if (a && Rn(r)) continue;
                            on(r, a || t ? "childList" : "characterData");
                        }
                    }
                    Ze = [];
                })(e);
            }, 33)),
            t
        );
    }

    function on(t, e) {
        Ta(tn)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e,
        }, ]);
    }
    var un = 1,
        sn = ["password", "hidden", "email", "tel"],
        cn = [
            "addr",
            "cell",
            "code",
            "dob",
            "email",
            "mob",
            "name",
            "phone",
            "secret",
            "social",
            "ssn",
            "tel",
            "zip",
            "pass",
            "card",
            "account",
            "cvv",
            "ccv",
        ],
        ln = ["address", "password", "contact"],
        dn = [],
        fn = [],
        hn = [],
        pn = {},
        vn = [],
        gn = [],
        mn = {},
        bn = null,
        yn = null,
        wn = null;

    function kn() {
        On(), Mn(document, !0);
    }

    function En() {
        On();
    }

    function On() {
        (un = 1),
        (dn = []),
        (fn = []),
        (hn = []),
        (pn = {}),
        (vn = []),
        (gn = []),
        (bn = new WeakMap()),
        (yn = new WeakMap()),
        (wn = new WeakMap());
    }

    function Mn(t, e) {
        void 0 === e && (e = !1);
        try {
            e &&
                u.unmask.forEach(function(t) {
                    return t.indexOf("!") < 0 ? gn.push(t) : vn.push(t.substr(1));
                }),
                "querySelectorAll" in t &&
                (u.regions.forEach(function(e) {
                        return t.querySelectorAll(e[1]).forEach(function(t) {
                            return Vn(t, "" + e[0]);
                        });
                    }),
                    u.mask.forEach(function(e) {
                        return t.querySelectorAll(e).forEach(function(t) {
                            return wn.set(t, 3);
                        });
                    }),
                    gn.forEach(function(e) {
                        return t.querySelectorAll(e).forEach(function(t) {
                            return wn.set(t, 0);
                        });
                    }));
        } catch (t) {
            Tr(5, 1, t ? t.name : null);
        }
    }

    function Nn(t, e) {
        if ((void 0 === e && (e = !1), null === t)) return null;
        var n = bn.get(t);
        return !n && e && ((n = un++), bn.set(t, n)), n || null;
    }

    function Sn(t, e, n, r) {
        var a = Nn(t, !0),
            i = e ? Nn(e) : null,
            o = Yn(t),
            s = u.content ? 1 : 2,
            c = null,
            l = Fn(t) ? a : null,
            d = null;
        i >= 0 &&
            fn[i] &&
            ((c = fn[i]).children.push(a),
                (l = null === l ? c.region : l),
                (d = c.fragment),
                (s = c.metadata.privacy)),
            (s = (function(t, e, n, r) {
                var a = e.attributes,
                    i = e.tag.toUpperCase();
                if (wn.has(t)) return wn.get(t);
                if ("*T" === i && n && n.data) {
                    var o = n.selector ? n.selector[0] : "";
                    r = "STYLE" === n.data.tag || "TITLE" === n.data.tag ? 0 : r;
                    for (var u = 0, s = vn; u < s.length; u++) {
                        var c = s[u];
                        if (o.indexOf(c) >= 0) {
                            r = 0;
                            break;
                        }
                    }
                }
                if (null == a) return r;
                if ("class" in a && 1 === r)
                    for (var l = 0, d = ln; l < d.length; l++) {
                        var f = d[l];
                        if (a.class.indexOf(f) >= 0) {
                            r = 2;
                            break;
                        }
                    }
                if ("INPUT" === i)
                    if (0 === r) {
                        for (var h = "", p = 0, v = Object.keys(a); p < v.length; p++) {
                            h += a[v[p]].toLowerCase();
                        }
                        for (var g = 0, m = cn; g < m.length; g++) {
                            var b = m[g];
                            if (h.indexOf(b) >= 0) {
                                r = 2;
                                break;
                            }
                        }
                    } else 1 === r && (r = a && "submit" === a.type ? 0 : 2);
                    "type" in a && sn.indexOf(a.type) >= 0 && (r = 2);
                "data-clarity-mask" in a && (r = 3);
                "data-clarity-unmask" in a && (r = 0);
                return r;
            })(t, n, c, s)),
            n.attributes &&
            "data-clarity-region" in n.attributes &&
            (Vn(t, n.attributes["data-clarity-region"]), (l = a)),
            (dn[a] = t),
            (fn[a] = {
                id: a,
                parent: i,
                previous: o,
                children: [],
                data: n,
                selector: null,
                hash: null,
                region: l,
                metadata: {
                    active: !0,
                    suspend: !1,
                    privacy: s,
                    position: null,
                    size: null,
                },
                fragment: d,
            }),
            In(fn[a]),
            (function(t, e) {
                var n = t.data,
                    r = "*T" === n.tag && n.value && n.value.length > 15,
                    a = 2 === t.metadata.privacy || 3 === t.metadata.privacy;
                r && a && e && null === e.metadata.size && (e.metadata.size = []);
                "IMG" === n.tag && 3 === t.metadata.privacy && (t.metadata.size = []);
            })(fn[a], c),
            Hn(a, r, fn[a].fragment);
    }

    function _n(t, e, n, r) {
        var a = Nn(t),
            i = e ? Nn(e) : null,
            o = Yn(t),
            u = !1,
            s = !1;
        if (a in fn) {
            var c = fn[a];
            if (
                ((c.metadata.active = !0),
                    c.previous !== o && ((u = !0), (c.previous = o)),
                    c.parent !== i)
            ) {
                u = !0;
                var l = c.parent;
                if (((c.parent = i), null !== i && i >= 0)) {
                    var d = null === o ? 0 : fn[i].children.indexOf(o) + 1;
                    fn[i].children.splice(d, 0, a), (c.region = Fn(t) ? a : fn[i].region);
                } else
                    !(function(t, e) {
                        if (t in fn) {
                            var n = fn[t];
                            (n.metadata.active = !1), (n.parent = null), Hn(t, e);
                        }
                    })(a, r);
                if (null !== l && l >= 0) {
                    var f = fn[l].children.indexOf(a);
                    f >= 0 && fn[l].children.splice(f, 1);
                }
                s = !0;
            }
            for (var h in n) Dn(c.data, n, h) && ((u = !0), (c.data[h] = n[h]));
            c.fragment && mn[c.fragment] && (u = !0),
                In(c),
                Hn(a, r, fn[a].fragment, u, s);
        }
    }

    function Tn(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (yn.set(n.contentDocument, n), (e = !0));
            } catch (t) {}
        }
        return e;
    }

    function xn(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && yn.has(e) ? yn.get(e) : null;
    }

    function Dn(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var r in t[n])
                if (t[n][r] !== e[n][r]) return !0;
            for (var r in e[n])
                if (e[n][r] !== t[n][r]) return !0;
            return !1;
        }
        return t[n] !== e[n];
    }

    function In(t) {
        var e = t.parent && t.parent in fn ? fn[t.parent] : null,
            n = e ? e.selector : null,
            r = t.data,
            a = (function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var r = fn[t.children[n]];
                    if (e.data.tag === r.data.tag) {
                        e.metadata.position = r.metadata.position + 1;
                        break;
                    }
                }
                return e.metadata.position;
            })(e, t),
            i = { tag: r.tag, prefix: n, position: a, attributes: r.attributes };
        (t.selector = [ft(i), ft(i, !0)]),
        (t.hash = t.selector.map(function(t) {
            return t ? f(t) : null;
        })),
        t.hash.forEach(function(e) {
                return (pn[e] = t.id);
            }),
            t.hash.some(function(t) {
                return -1 !== jr.indexOf(t);
            }) && (t.fragment = t.id);
    }

    function Cn(t) {
        return t in dn ? dn[t] : null;
    }

    function zn(t) {
        return t in fn ? fn[t] : null;
    }

    function jn(t) {
        var e = Nn(t);
        return e in fn ? fn[e] : null;
    }

    function Ln(t) {
        return t in pn ? pn[t] : null;
    }

    function Rn(t) {
        return Nn(t) in dn;
    }

    function An() {
        for (var t = [], e = 0, n = hn; e < n.length; e++) {
            (r = n[e]) in fn && t.push(fn[r]);
        }
        for (var r in ((hn = []), mn)) Hr(mn[r], r, !0);
        return (mn = {}), t;
    }

    function Yn(t) {
        for (var e = null; null === e && t.previousSibling;)
            (e = Nn(t.previousSibling)), (t = t.previousSibling);
        return e;
    }

    function Hn(t, e, n, r, a) {
        if (
            (void 0 === n && (n = null),
                void 0 === r && (r = !0),
                void 0 === a && (a = !1),
                n && !mn[n])
        ) {
            var i = Cn(n),
                o = zn(n);
            i &&
                o &&
                (an(i, !0),
                    o.hash.forEach(function(t) {
                        -1 !== jr.indexOf(t) && (mn[n] = t);
                    }));
        }
        var u = hn.indexOf(t);
        u >= 0 && 1 === e && a ?
            (hn.splice(u, 1), hn.push(t)) :
            -1 === u && r && hn.push(t);
    }
    var Xn = [],
        Wn = null,
        qn = {},
        Pn = [],
        Un = !1,
        Bn = null;

    function Vn(t, e) {
        !1 === Wn.has(t) &&
            (Wn.set(t, e),
                (Bn =
                    null === Bn && Un ?
                    new IntersectionObserver(Gn, {
                        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    }) :
                    Bn) &&
                t &&
                t.nodeType === Node.ELEMENT_NODE &&
                Bn.observe(t));
    }

    function Fn(t) {
        return Wn && Wn.has(t);
    }

    function Jn() {
        for (var t = [], e = 0, n = Pn; e < n.length; e++) {
            var r = n[e],
                a = Nn(r.node);
            a in qn ||
                (a ?
                    ((r.data.id = a), (qn[a] = r.data), Xn.push(Kn(r.data))) :
                    t.push(r));
        }
        (Pn = t), Xn.length > 0 && Rt(7);
    }

    function Gn(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var r = n[e],
                a = r.target,
                i = r.boundingClientRect,
                o = r.intersectionRect,
                u = r.rootBounds;
            if (Wn.has(a) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var s = a ? Nn(a) : null,
                    c =
                    s in qn ?
                    qn[s] :
                    { id: s, name: Wn.get(a), interaction: 16, visibility: 0 },
                    l =
                    (o ? (o.width * o.height * 1) / (u.width * u.height) : 0) > 0.05 ||
                    r.intersectionRatio > 0.8,
                    d =
                    (l || 10 == c.visibility) && Math.abs(i.top) + u.height > i.height;
                Zn(a, c, c.interaction, d ? 13 : l ? 10 : 0),
                    c.visibility >= 13 && Bn && Bn.unobserve(a);
            }
        }
        Xn.length > 0 && Rt(7);
    }

    function Zn(t, e, n, r) {
        var a = n > e.interaction || r > e.visibility;
        (e.interaction = n > e.interaction ? n : e.interaction),
        (e.visibility = r > e.visibility ? r : e.visibility),
        e.id ?
            ((e.id in qn && a) || !(e.id in qn)) &&
            ((qn[e.id] = e), Xn.push(Kn(e))) :
            Pn.push({ node: t, data: e });
    }

    function Kn(t) {
        return {
            time: l(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name,
            },
        };
    }

    function Qn() {
        Xn = [];
    }

    function $n(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return (
            (Qe = l() + 3e3),
            n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
        );
    }

    function tr(t, e) {
        var n = { id: 0, hash: null, privacy: 2, node: t };
        if (t) {
            var r = jn(t);
            null !== r &&
                ((n.id = r.id),
                    (n.hash = r.hash),
                    (n.privacy = r.metadata.privacy),
                    r.region &&
                    (function(t, e) {
                        var n = Cn(t),
                            r =
                            t in qn ?
                            qn[t] :
                            { id: t, visibility: 0, interaction: 16, name: Wn.get(n) },
                            a = 16;
                        switch (e) {
                            case 9:
                                a = 20;
                                break;
                            case 27:
                                a = 30;
                        }
                        Zn(n, r, a, r.visibility);
                    })(r.region, e));
        }
        return n;
    }

    function er(t) {
        return Q(this, void 0, void 0, function() {
            var e,
                n,
                r,
                a,
                i,
                o,
                u,
                s,
                c,
                d,
                f,
                h,
                p,
                v,
                g,
                b,
                w,
                k,
                E,
                O,
                M,
                N,
                S,
                _,
                T,
                x,
                D,
                I,
                C;
            return $(this, function(z) {
                switch (((e = l()), (n = [e, t]), t)) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, a = ie; r < a.length; r++)
                            (I = a[r]),
                            (i = tr(I.data.target, I.event)).id > 0 &&
                            ((n = [I.time, I.event]).push(i.id),
                                n.push(I.data.x),
                                n.push(I.data.y),
                                gr(n),
                                m(I.event, I.data.x, I.data.y));
                        de();
                        break;
                    case 9:
                        for (o = 0, u = Pt; o < u.length; o++)
                            (I = u[o]),
                            (s = tr(I.data.target, I.event)),
                            (n = [I.time, I.event]),
                            (c = s.hash.join(".")),
                            n.push(s.id),
                            n.push(I.data.x),
                            n.push(I.data.y),
                            n.push(I.data.eX),
                            n.push(I.data.eY),
                            n.push(I.data.button),
                            n.push(I.data.reaction),
                            n.push(I.data.context),
                            n.push(ut(I.data.text, "click", s.privacy)),
                            n.push(I.data.link),
                            n.push(c),
                            gr(n),
                            ir(
                                I.time,
                                I.event,
                                c,
                                I.data.x,
                                I.data.y,
                                I.data.reaction,
                                I.data.context
                            );
                        Gt();
                        break;
                    case 38:
                        for (d = 0, f = Zt; d < f.length; d++)
                            (I = f[d]),
                            (n = [I.time, I.event]),
                            (T = tr(I.data.target, I.event)).id > 0 &&
                            (n.push(T.id), n.push(I.data.action), gr(n));
                        Qt();
                        break;
                    case 11:
                        (h = ae),
                        n.push(h.width),
                            n.push(h.height),
                            m(t, h.width, h.height),
                            he(),
                            gr(n);
                        break;
                    case 26:
                        (p = Me), n.push(p.name), De(), gr(n);
                        break;
                    case 27:
                        for (v = 0, g = te; v < g.length; v++)
                            (I = g[v]),
                            (b = tr(I.data.target, I.event)),
                            (n = [I.time, I.event]).push(b.id),
                            n.push(I.data.value),
                            gr(n);
                        re();
                        break;
                    case 21:
                        (w = be) &&
                        ((k = tr(w.start, t)),
                            (E = tr(w.end, t)),
                            n.push(k.id),
                            n.push(w.startOffset),
                            n.push(E.id),
                            n.push(w.endOffset),
                            Oe(),
                            gr(n));
                        break;
                    case 10:
                        for (O = 0, M = pe; O < M.length; O++)
                            (I = M[O]),
                            (N = tr(I.data.target, I.event)).id > 0 &&
                            ((n = [I.time, I.event]).push(N.id),
                                n.push(I.data.x),
                                n.push(I.data.y),
                                gr(n),
                                m(I.event, I.data.x, I.data.y));
                        pe = [];
                        break;
                    case 39:
                        for (S = 0, _ = Se; S < _.length; S++)
                            (I = _[S]),
                            (n = [I.time, I.event]),
                            (T = tr(I.data.target, I.event)).id > 0 &&
                            (n.push(T.id), gr(n));
                        Te();
                        break;
                    case 22:
                        for (x = 0, D = rr; x < D.length; x++)
                            (I = D[x]),
                            (n = [I.time, I.event]).push(I.data.type),
                            n.push(I.data.hash),
                            n.push(I.data.x),
                            n.push(I.data.y),
                            n.push(I.data.reaction),
                            n.push(I.data.context),
                            gr(n, !1);
                        ar();
                        break;
                    case 28:
                        (C = Ne), n.push(C.visible), gr(n), y(e, C.visible), Ce();
                }
                return [2];
            });
        });
    }
    var nr = [],
        rr = [];

    function ar() {
        rr = [];
    }

    function ir(t, e, n, r, a, i, o) {
        void 0 === i && (i = 1),
            void 0 === o && (o = 0),
            nr.push({
                time: t,
                event: 22,
                data: { type: e, hash: n, x: r, y: a, reaction: i, context: o },
            }),
            m(e, r, a);
    }
    var or,
        ur,
        sr,
        cr,
        lr,
        dr = 0,
        fr = 0,
        hr = null,
        pr = 0;

    function vr() {
        (cr = !0),
        (dr = 0),
        (fr = 0),
        (pr = 0),
        (or = []),
        (ur = []),
        (sr = {}),
        (lr = null);
    }

    function gr(t, e) {
        if ((void 0 === e && (e = !0), cr)) {
            var n = l(),
                r = t.length > 1 ? t[1] : null,
                a = JSON.stringify(t);
            switch (r) {
                case 5:
                    dr += a.length;
                case 37:
                case 6:
                    (fr += a.length), or.push(a);
                    break;
                default:
                    ur.push(a);
            }
            _(25);
            var i = (function() {
                var t = !1 === u.lean && dr > 0 ? 100 : Ea.sequence * u.delay;
                return "string" == typeof u.upload ?
                    Math.max(Math.min(t, 3e4), 100) :
                    u.delay;
            })();
            n - pr > 2 * i && (I(hr), (hr = null)),
                e &&
                null === hr &&
                (25 !== r && L(), (hr = D(br, i)), (pr = n), Vr(fr));
        }
    }

    function mr() {
        I(hr),
            br(!0),
            (dr = 0),
            (fr = 0),
            (pr = 0),
            (or = []),
            (ur = []),
            (sr = {}),
            (lr = null),
            (cr = !1);
    }

    function br(t) {
        return (
            void 0 === t && (t = !1),
            Q(this, void 0, void 0, function() {
                var e, n, r, a, i, o, s, c;
                return $(this, function(l) {
                    switch (l.label) {
                        case 0:
                            return (
                                (hr = null),
                                (e = !1 === u.lean &&
                                    fr > 0 &&
                                    (fr < 1048576 || Ea.sequence > 0)) && x(1, 1),
                                Jn(),
                                (function() {
                                    var t = [];
                                    rr = [];
                                    for (
                                        var e = Ea.start + Ea.duration,
                                            n = Math.max(e - 2e3, 0),
                                            r = 0,
                                            a = nr; r < a.length; r++
                                    ) {
                                        var i = a[r];
                                        i.time >= n && (i.time <= e && rr.push(i), t.push(i));
                                    }
                                    (nr = t), er(22);
                                })(),
                                ot(),
                                (n = !0 === t),
                                (r = JSON.stringify(Na(n))),
                                (a = "[" + ur.join() + "]"),
                                (i = e ? "[" + or.join() + "]" : ""),
                                (o = (function(t) {
                                    return t.p.length > 0 ?
                                        '{"e":' + t.e + ',"a":' + t.a + ',"p":' + t.p + "}" :
                                        '{"e":' + t.e + ',"a":' + t.a + "}";
                                })({ e: r, a: a, p: i })),
                                n ? ((c = null), [3, 3]) : [3, 1]
                            );
                        case 1:
                            return [4, et(o)];
                        case 2:
                            (c = l.sent()), (l.label = 3);
                        case 3:
                            return (
                                T(2, (s = c) ? s.length : o.length),
                                yr(o, s, Ea.sequence, n),
                                (ur = []),
                                e && ((or = []), (fr = 0), (dr = 0)), [2]
                            );
                    }
                });
            })
        );
    }

    function yr(t, e, n, r) {
        if ((void 0 === r && (r = !1), "string" == typeof u.upload)) {
            var a = u.upload,
                i = !1;
            if (r && "sendBeacon" in navigator)
                try {
                    (i = navigator.sendBeacon.bind(navigator)(a, t)) && kr(n);
                } catch (t) {}
            if (!1 === i) {
                n in sr ? sr[n].attempts++ : (sr[n] = { data: t, attempts: 1 });
                var o = new XMLHttpRequest();
                o.open("POST", a),
                    null !== n &&
                    (o.onreadystatechange = function() {
                        Ta(wr)(o, n);
                    }),
                    (o.withCredentials = !0),
                    e ?
                    (o.setRequestHeader("Accept", "application/x-clarity-gzip"),
                        o.send(e)) :
                    o.send(t);
            }
        } else if (u.upload) {
            (0, u.upload)(t), kr(n);
        }
    }

    function wr(t, e) {
        var n = sr[e];
        t &&
            4 === t.readyState &&
            n &&
            ((t.status < 200 || t.status > 208) && n.attempts <= 1 ?
                t.status >= 400 && t.status < 500 ?
                Fr(6) :
                (0 === t.status && (u.upload = u.fallback ? u.fallback : u.upload),
                    yr(n.data, null, e)) :
                ((lr = { sequence: e, attempts: n.attempts, status: t.status }),
                    n.attempts > 1 && Ur(2),
                    200 === t.status &&
                    t.responseText &&
                    (function(t) {
                        switch (t && t.length > 0 ? t.split(" ")[0] : "") {
                            case "END":
                                Fr(6);
                                break;
                            case "UPGRADE":
                                U("Auto");
                        }
                    })(t.responseText),
                    0 === t.status && (yr(n.data, null, e, !0), Fr(3)),
                    t.status >= 200 && t.status <= 208 && kr(e),
                    delete sr[e]));
    }

    function kr(t) {
        1 === t && ha();
    }
    var Er,
        Or = {};

    function Mr(t) {
        var e = t.error || t;
        if ((e.message in Or || (Or[e.message] = 0), Or[e.message]++ >= 5))
            return !0;
        if (e && e.message) {
            if (
                ((Er = {
                        message: e.message,
                        line: t.lineno,
                        column: t.colno,
                        stack: e.stack,
                        source: t.filename,
                    }),
                    e.message.indexOf("ResizeObserver") >= 0)
            )
                return Lt(), !1;
            Nr(31);
        }
        return !0;
    }

    function Nr(t) {
        return Q(this, void 0, void 0, function() {
            var e;
            return $(this, function(n) {
                switch (((e = [l(), t]), t)) {
                    case 31:
                        e.push(Er.message),
                            e.push(Er.line),
                            e.push(Er.column),
                            e.push(Er.stack),
                            e.push(Er.source),
                            gr(e);
                        break;
                    case 33:
                        Sr &&
                            (e.push(Sr.code),
                                e.push(Sr.name),
                                e.push(Sr.message),
                                e.push(Sr.stack),
                                e.push(Sr.severity),
                                gr(e, !1));
                }
                return [2];
            });
        });
    }
    var Sr,
        _r = {};

    function Tr(t, e, n, r, a) {
        void 0 === n && (n = null),
            void 0 === r && (r = null),
            void 0 === a && (a = null);
        var i = n ? n + "|" + r : "";
        (t in _r && _r[t].indexOf(i) >= 0) ||
        ((Sr = { code: t, name: n, message: r, stack: a, severity: e }),
            t in _r ? _r[t].push(i) : (_r[t] = [i]),
            Nr(33));
    }
    var xr,
        Dr = {},
        Ir = [],
        Cr = {},
        zr = {},
        jr = [];

    function Lr() {
        try {
            var t = u.extract;
            if (!t) return;
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e],
                    r = t[e + 1];
                switch (n) {
                    case 0:
                        var a = t[e + 2];
                        Cr[r] = Wr(a);
                        break;
                    case 1:
                        break;
                    case 2:
                        var i = t[e + 2];
                        zr[r] = i;
                        break;
                    case 3:
                        jr = t[e + 2];
                }
            }
        } catch (t) {
            Tr(8, 1, t ? t.name : null);
        }
    }

    function Rr(t) {
        return JSON.parse(JSON.stringify(t));
    }

    function Ar() {
        try {
            for (var t in Cr) {
                var e = (a = qr(Rr(Cr[t]))) ? JSON.stringify(a).substring(0, 1e4) : a;
                e && Hr(t, e);
            }
            for (var n in zr) {
                var r = document.querySelector(zr[n]);
                r && Hr(n, r.innerText);
            }
        } catch (t) {
            Tr(5, 1, t ? t.name : null);
        }
        var a;
        Ur(40);
    }

    function Yr() {
        Ir = [];
    }

    function Hr(t, e, n) {
        void 0 === n && (n = !1),
            (!(t in Dr) || (t in Dr && Dr[t] !== e) || n) &&
            ((Dr[t] = e), Ir.push(t));
    }

    function Xr() {
        (Dr = {}), (Ir = []), (Cr = {}), (zr = {});
    }

    function Wr(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var r = n.shift(),
                a = r.indexOf("["),
                i = r.indexOf("{"),
                o = r.indexOf("}");
            e.push({
                name: a > 0 ? r.substring(0, a) : i > 0 ? r.substring(0, i) : r,
                type: a > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? r.substring(i + 1, o) : null,
            });
        }
        return e;
    }

    function qr(t, e) {
        if ((void 0 === e && (e = window), 0 == t.length)) return e;
        var n,
            r = t.shift();
        if (e && e[r.name]) {
            var a = e[r.name];
            if (1 !== r.type && Pr(a, r.condition)) n = qr(t, a);
            else if (Array.isArray(a)) {
                for (var i = [], o = 0, u = a; o < u.length; o++) {
                    var s = u[o];
                    if (Pr(s, r.condition)) {
                        var c = qr(t, s);
                        c && i.push(c);
                    }
                }
                n = i;
            }
            return n;
        }
        return null;
    }

    function Pr(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]];
        }
        return !0;
    }

    function Ur(t) {
        var e = [l(), t];
        switch (t) {
            case 4:
                var n = h;
                n &&
                    ((e = [n.time, n.event]).push(n.data.visible),
                        e.push(n.data.docWidth),
                        e.push(n.data.docHeight),
                        e.push(n.data.screenWidth),
                        e.push(n.data.screenHeight),
                        e.push(n.data.scrollX),
                        e.push(n.data.scrollY),
                        e.push(n.data.pointerX),
                        e.push(n.data.pointerY),
                        e.push(n.data.activityTime),
                        gr(e, !1)),
                    g();
                break;
            case 25:
                e.push(M.gap), gr(e);
                break;
            case 35:
                e.push(xr.check), gr(e, !1);
                break;
            case 3:
                e.push(P.key), gr(e);
                break;
            case 2:
                e.push(lr.sequence), e.push(lr.attempts), e.push(lr.status), gr(e, !1);
                break;
            case 24:
                e.push(E.key), e.push(E.value), gr(e);
                break;
            case 34:
                var r = Object.keys(V);
                if (r.length > 0) {
                    for (var a = 0, i = r; a < i.length; a++) {
                        var o = i[a];
                        e.push(o), e.push(V[o]);
                    }
                    K(), gr(e, !1);
                }
                break;
            case 0:
                var u = Object.keys(S);
                if (u.length > 0) {
                    for (var s = 0, c = u; s < c.length; s++) {
                        var d = c[s],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(S[d]));
                    }
                    (S = {}), gr(e, !1);
                }
                break;
            case 1:
                var p = Object.keys(Kr);
                if (p.length > 0) {
                    for (var v = 0, m = p; v < m.length; v++) {
                        var b = m[v];
                        f = parseInt(b, 10);
                        e.push(f), e.push(Kr[b]);
                    }
                    na(), gr(e, !1);
                }
                break;
            case 36:
                var y = Object.keys(Y);
                if (y.length > 0) {
                    for (var w = 0, k = y; w < k.length; w++) {
                        var O = k[w];
                        f = parseInt(O, 10);
                        e.push(f), e.push([].concat.apply([], Y[O]));
                    }
                    W(), gr(e, !1);
                }
                break;
            case 40:
                for (var N = 0, _ = Ir; N < _.length; N++) {
                    O = _[N];
                    e.push(O), e.push(Dr[O]);
                }
                Yr(), gr(e, !1);
        }
    }

    function Br() {
        xr = { check: 0 };
    }

    function Vr(t) {
        if (0 === xr.check) {
            var e = xr.check;
            (e = Ea.sequence >= 128 ? 1 : e),
            (e = l() > 72e5 ? 2 : e),
            (e = t > 10485760 ? 2 : e) !== xr.check && Fr(e);
        }
    }

    function Fr(t) {
        (xr.check = t), fa(), ni();
    }

    function Jr() {
        0 !== xr.check && Ur(35);
    }

    function Gr() {
        xr = null;
    }
    var Zr = null,
        Kr = null;

    function Qr() {
        (Zr = {}), (Kr = {});
    }

    function $r() {
        (Zr = {}), (Kr = {});
    }

    function ta(t, e) {
        e &&
            ((e = "" + e),
                t in Zr || (Zr[t] = []),
                Zr[t].indexOf(e) < 0 &&
                (Zr[t].push(e),
                    t in Kr || (Kr[t] = []),
                    Kr[t].push(e),
                    Zr[t].length > 128 && Fr(5)));
    }

    function ea() {
        Ur(1);
    }

    function na() {
        Kr = {};
    }
    var ra = null,
        aa = [],
        ia = null;

    function oa() {
        ia = null;
        var t = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            e = document && document.title ? document.title : "",
            n = (function() {
                var t = {
                        session: ga(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: "",
                    },
                    e = ya("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 &&
                        t.ts - ma(n[1]) < 18e5 &&
                        ((t.session = n[0]),
                            (t.count = ma(n[2]) + 1),
                            (t.upgrade = ma(n[3])),
                            (t.upload =
                                n.length >= 6 ?
                                "https://" + n[5] + "/" + n[4] :
                                "https://" + n[4]));
                }
                return t;
            })(),
            r = ba();
        (ra = {
            projectId: u.projectId || f(location.host),
            userId: r.id,
            sessionId: n.session,
            pageNum: n.count,
        }),
        (u.lean = u.track && null !== n.upgrade ? 0 === n.upgrade : u.lean),
        (u.upload =
            u.track &&
            "string" == typeof u.upload &&
            n.upload &&
            n.upload.length > "https://".length ?
            n.upload :
            u.upload),
        ta(0, t),
            ta(3, e),
            ta(1, location.href),
            ta(2, document.referrer),
            ta(
                15,
                (function() {
                    var t = ga();
                    if (u.track && pa(window, "sessionStorage")) {
                        var e = sessionStorage.getItem("_cltk");
                        (t = e || t), sessionStorage.setItem("_cltk", t);
                    }
                    return t;
                })()
            ),
            ta(16, document.documentElement.lang),
            ta(17, document.dir),
            navigator &&
            (ta(9, navigator.userLanguage || navigator.language),
                x(26, navigator.webdriver ? 1 : 0),
                ua()),
            x(0, n.ts),
            x(1, 0),
            screen &&
            (x(14, Math.round(screen.width)),
                x(15, Math.round(screen.height)),
                x(16, Math.round(screen.colorDepth)));
        for (var a = 0, i = u.cookies; a < i.length; a++) {
            var o = i[a],
                s = ya(o);
            s && F(o, s);
        }
        va(r);
    }

    function ua() {
        navigator.userAgentData &&
            navigator.userAgentData.getHighEntropyValues &&
            navigator.userAgentData
            .getHighEntropyValues([
                "model",
                "platform",
                "platformVersion",
                "uaFullVersion",
            ])
            .then(function(t) {
                var e;
                ta(22, t.platform),
                    ta(23, t.platformVersion),
                    null === (e = t.brands) ||
                    void 0 === e ||
                    e.forEach(function(t) {
                        ta(24, t.name + "~" + t.version);
                    }),
                    ta(25, t.model),
                    x(27, t.mobile ? 1 : 0);
            });
    }

    function sa() {
        (ia = null), (ra = null);
    }

    function ca(t, e) {
        void 0 === e && (e = !0),
            ra && !1 === e && t(ra, !u.lean),
            aa.push({ callback: t, wait: e });
    }

    function la() {
        return ra ? [ra.userId, ra.sessionId, ra.pageNum].join(".") : "";
    }

    function da() {
        qa() && ((u.track = !0), va(ba(), 1));
    }

    function fa() {
        wa("_clsk", "", 0);
    }

    function ha() {
        var t = Math.round(Date.now()),
            e =
            u.upload && "string" == typeof u.upload ?
            u.upload.replace("https://", "") :
            "",
            n = u.lean ? 0 : 1;
        !(function(t) {
            aa.length > 0 &&
                aa.forEach(function(e) {
                    !e.callback || (e.wait && !t) || e.callback(ra, !u.lean);
                });
        })(n),
        wa("_clsk", [ra.sessionId, t, ra.pageNum, n, e].join("|"), 1);
    }

    function pa(t, e) {
        try {
            return !!t[e];
        } catch (t) {
            return !1;
        }
    }

    function va(t, e) {
        void 0 === e && (e = null), (e = null === e ? t.consent : e);
        var n = Math.ceil((Date.now() + 31536e6) / 864e5);
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) &&
        wa("_clck", [ra.userId, 1, n.toString(36), e].join("|"), 365);
    }

    function ga() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return (
            window &&
            window.crypto &&
            window.crypto.getRandomValues &&
            Uint32Array &&
            (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
            t.toString(36)
        );
    }

    function ma(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e);
    }

    function ba() {
        var t = { id: ga(), expiry: null, consent: 0 },
            e = ya("_clck");
        if (e && e.length > 0) {
            for (
                var n = e.split("|"), r = 0, a = 0, i = document.cookie.split(";"); a < i.length; a++
            ) {
                r += "_clck" === i[a].split("=")[0].trim() ? 1 : 0;
            }
            if (1 === n.length || r > 1) {
                var o = ";expires=" + new Date(0).toUTCString() + ";path=/";
                (document.cookie = "_clck=" + o), (document.cookie = "_clsk=" + o);
            }
            n.length > 2 && (t.expiry = ma(n[2], 36)),
                n.length > 3 && 1 === ma(n[3]) && (t.consent = 1),
                (u.track = u.track || 1 === t.consent),
                (t.id = u.track ? n[0] : t.id);
        }
        return t;
    }

    function ya(t) {
        if (pa(document, "cookie")) {
            var e = document.cookie.split(";");
            if (e)
                for (var n = 0; n < e.length; n++) {
                    var r = e[n].split("=");
                    if (r.length > 1 && r[0] && r[0].trim() === t) return r[1];
                }
        }
        return null;
    }

    function wa(t, e, n) {
        if (
            u.track &&
            ((navigator && navigator.cookieEnabled) || pa(document, "cookie"))
        ) {
            var r = new Date();
            r.setDate(r.getDate() + n);
            var a =
                t + "=" + e + ";" + (r ? "expires=" + r.toUTCString() : "") + ";path=/";
            try {
                if (null === ia) {
                    for (
                        var i = location.hostname ? location.hostname.split(".") : [],
                            o = i.length - 1; o >= 0; o--
                    )
                        if (
                            ((ia = "." + i[o] + (ia || "")),
                                o < i.length - 1 &&
                                ((document.cookie = a + ";domain=" + ia), ya(t) === e))
                        )
                            return;
                    ia = "";
                }
            } catch (t) {
                ia = "";
            }
            document.cookie = ia ? a + ";domain=" + ia : a;
        }
    }
    var ka,
        Ea = null;

    function Oa() {
        var t = ra;
        Ea = {
            version: d,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0,
        };
    }

    function Ma() {
        Ea = null;
    }

    function Na(t) {
        return (
            (Ea.start = Ea.start + Ea.duration),
            (Ea.duration = l() - Ea.start),
            Ea.sequence++,
            (Ea.upload = t && "sendBeacon" in navigator ? 1 : 0),
            (Ea.end = t ? 1 : 0), [
                Ea.version,
                Ea.sequence,
                Ea.start,
                Ea.duration,
                Ea.projectId,
                Ea.userId,
                Ea.sessionId,
                Ea.pageNum,
                Ea.upload,
                Ea.end,
            ]
        );
    }

    function Sa() {
        ka = [];
    }

    function _a(t) {
        if (ka && -1 === ka.indexOf(t.message)) {
            var e = u.report;
            if (e && e.length > 0) {
                var n = {
                    v: Ea.version,
                    p: Ea.projectId,
                    u: Ea.userId,
                    s: Ea.sessionId,
                    n: Ea.pageNum,
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var r = new XMLHttpRequest();
                r.open("POST", e), r.send(JSON.stringify(n)), ka.push(t.message);
            }
        }
        return t;
    }

    function Ta(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments);
            } catch (t) {
                throw _a(t);
            }
            var n = performance.now() - e;
            T(4, n), n > 30 && (_(7), x(6, n));
        };
    }
    var xa = [];

    function Da(t, e, n, r) {
        void 0 === r && (r = !1), (n = Ta(n));
        try {
            t[s("addEventListener")](e, n, r),
                xa.push({ event: e, target: t, listener: n, capture: r });
        } catch (t) {}
    }

    function Ia() {
        for (var t = 0, e = xa; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[s("removeEventListener")](n.event, n.listener, n.capture);
            } catch (t) {}
        }
        xa = [];
    }
    var Ca = null,
        za = null,
        ja = null,
        La = 0;

    function Ra() {
        return !(La++ > 20) || (Tr(4, 0), !1);
    }

    function Aa() {
        (La = 0), ja !== Ya() && (ni(), window.setTimeout(ei, 250));
    }

    function Ya() {
        return location.href ?
            location.href.replace(location.hash, "") :
            location.href;
    }
    var Ha = !1;

    function Xa() {
        (Ha = !0),
        (c = performance.now()),
        yt(),
            Ia(),
            Sa(),
            (ja = Ya()),
            (La = 0),
            Da(window, "popstate", Aa),
            null === Ca &&
            ((Ca = history.pushState),
                (history.pushState = function() {
                    Ca.apply(this, arguments), qa() && Ra() && Aa();
                })),
            null === za &&
            ((za = history.replaceState),
                (history.replaceState = function() {
                    za.apply(this, arguments), qa() && Ra() && Aa();
                }));
    }

    function Wa() {
        (ja = null), (La = 0), Sa(), Ia(), yt(), (c = 0), (Ha = !1);
    }

    function qa() {
        return Ha;
    }

    function Pa(t) {
        if (null === t || Ha) return !1;
        for (var e in t) e in u && (u[e] = t[e]);
        return !0;
    }

    function Ua() {
        ei(), O("clarity", "restart");
    }

    function Ba() {
        return Q(this, void 0, void 0, function() {
            var t, e;
            return $(this, function(n) {
                switch (n.label) {
                    case 0:
                        return (
                            (t = l()),
                            Ot((e = { id: la(), cost: 3 })), [4, Ue(document, e, 0)]
                        );
                    case 1:
                        return n.sent(), [4, Rt(5, e, t)];
                    case 2:
                        return n.sent(), Mt(e), [2];
                }
            });
        });
    }
    var Va,
        Fa = null;

    function Ja() {
        Fa = null;
    }

    function Ga(t) {
        (Fa = {
            fetchStart: Math.round(t.fetchStart),
            connectStart: Math.round(t.connectStart),
            connectEnd: Math.round(t.connectEnd),
            requestStart: Math.round(t.requestStart),
            responseStart: Math.round(t.responseStart),
            responseEnd: Math.round(t.responseEnd),
            domInteractive: Math.round(t.domInteractive),
            domComplete: Math.round(t.domComplete),
            loadEventStart: Math.round(t.loadEventStart),
            loadEventEnd: Math.round(t.loadEventEnd),
            redirectCount: Math.round(t.redirectCount),
            size: t.transferSize ? t.transferSize : 0,
            type: t.type,
            protocol: t.nextHopProtocol,
            encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
            decodedSize: t.decodedBodySize ? t.decodedBodySize : 0,
        }),
        (function(t) {
            Q(this, void 0, void 0, function() {
                var e, n;
                return $(this, function(r) {
                    switch (((e = l()), (n = [e, t]), t)) {
                        case 29:
                            n.push(Fa.fetchStart),
                                n.push(Fa.connectStart),
                                n.push(Fa.connectEnd),
                                n.push(Fa.requestStart),
                                n.push(Fa.responseStart),
                                n.push(Fa.responseEnd),
                                n.push(Fa.domInteractive),
                                n.push(Fa.domComplete),
                                n.push(Fa.loadEventStart),
                                n.push(Fa.loadEventEnd),
                                n.push(Fa.redirectCount),
                                n.push(Fa.size),
                                n.push(Fa.type),
                                n.push(Fa.protocol),
                                n.push(Fa.encodedSize),
                                n.push(Fa.decodedSize),
                                Ja(),
                                gr(n, !1);
                    }
                    return [2];
                });
            });
        })(29);
    }
    var Za = [
        "navigation",
        "resource",
        "longtask",
        "first-input",
        "layout-shift",
        "largest-contentful-paint",
    ];

    function Ka() {
        try {
            Va && Va.disconnect(), (Va = new PerformanceObserver(Ta(Qa)));
            for (var t = 0, e = Za; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 &&
                    ("layout-shift" === n && T(9, 0),
                        Va.observe({ type: n, buffered: !0 }));
            }
        } catch (t) {
            Tr(3, 1);
        }
    }

    function Qa(t) {
        !(function(t) {
            for (
                var e = !("visibilityState" in document) ||
                    "visible" === document.visibilityState,
                    n = 0; n < t.length; n++
            ) {
                var r = t[n];
                switch (r.entryType) {
                    case "navigation":
                        Ga(r);
                        break;
                    case "resource":
                        ta(4, $a(r.name));
                        break;
                    case "longtask":
                        _(7);
                        break;
                    case "first-input":
                        e && x(10, r.processingStart - r.startTime);
                        break;
                    case "layout-shift":
                        e && !r.hadRecentInput && T(9, 1e3 * r.value);
                        break;
                    case "largest-contentful-paint":
                        e && x(8, r.startTime);
                }
            }
        })(t.getEntries());
    }

    function $a(t) {
        var e = document.createElement("a");
        return (e.href = t), e.hostname;
    }
    var ti = [
        Object.freeze({
            __proto__: null,
            start: function() {
                Da(window, "error", Mr), (Or = {}), (_r = {});
            },
            stop: function() {
                _r = {};
            },
        }),
        Object.freeze({
            __proto__: null,
            start: function() {
                Ht(),
                    Xt(),
                    Qn(),
                    (Bn = null),
                    (Wn = new WeakMap()),
                    (qn = {}),
                    (Pn = []),
                    (Un = !!window.IntersectionObserver),
                    kn(),
                    (function() {
                        if (
                            ((Be = []),
                                (Ze = []),
                                (Ke = null),
                                (Qe = 0),
                                ($e = {}),
                                null === Fe &&
                                ((Fe = CSSStyleSheet.prototype.insertRule),
                                    (CSSStyleSheet.prototype.insertRule = function() {
                                        return qa() && an(this.ownerNode), Fe.apply(this, arguments);
                                    })),
                                null === Je &&
                                ((Je = CSSStyleSheet.prototype.deleteRule),
                                    (CSSStyleSheet.prototype.deleteRule = function() {
                                        return qa() && an(this.ownerNode), Je.apply(this, arguments);
                                    })),
                                null === Ge)
                        ) {
                            Ge = Element.prototype.attachShadow;
                            try {
                                Element.prototype.attachShadow = function() {
                                    return qa() ?
                                        an(Ge.apply(this, arguments)) :
                                        Ge.apply(this, arguments);
                                };
                            } catch (t) {
                                Ge = null;
                            }
                        }
                    })(),
                    wt(Ba, 1).then(function() {
                        Ta(Xt)(), Ta(Jn)();
                    }),
                    jt(),
                    (Ct = null),
                    (It = !!window.ResizeObserver);
            },
            stop: function() {
                Qn(),
                    (Wn = null),
                    (qn = {}),
                    (Pn = []),
                    Bn && (Bn.disconnect(), (Bn = null)),
                    (Un = !1),
                    En(),
                    (function() {
                        for (var t = 0, e = Be; t < e.length; t++) {
                            var n = e[t];
                            n && n.disconnect();
                        }
                        (Be = []), ($e = {}), (Ve = []), (Ze = []), (Qe = 0), (Ke = null);
                    })(),
                    Lt(),
                    Ht();
            },
        }),
        je,
        Object.freeze({
            __proto__: null,
            start: function() {
                Ja(),
                    (function() {
                        window.PerformanceObserver &&
                            PerformanceObserver.supportedEntryTypes ?
                            "complete" !== document.readyState ?
                            Da(window, "load", D.bind(this, Ka, 0)) :
                            Ka() :
                            Tr(3, 0);
                    })();
            },
            stop: function() {
                Va && Va.disconnect(), (Va = null), Ja();
            },
        }),
    ];

    function ei(t) {
        void 0 === t && (t = null),
            (function() {
                try {
                    return (!1 === Ha &&
                        "undefined" != typeof Promise &&
                        window.MutationObserver &&
                        document.createTreeWalker &&
                        "now" in Date &&
                        "now" in performance &&
                        "undefined" != typeof WeakMap
                    );
                } catch (t) {
                    return !1;
                }
            })() &&
            (Pa(t),
                Xa(),
                at(),
                ti.forEach(function(t) {
                    return Ta(t.start)();
                }));
    }

    function ni() {
        qa() &&
            (ti
                .slice()
                .reverse()
                .forEach(function(t) {
                    return Ta(t.stop)();
                }),
                it(),
                Wa());
    }
    var ri = Object.freeze({
        __proto__: null,
        version: d,
        start: ei,
        pause: function() {
            qa() &&
                (O("clarity", "pause"),
                    null === mt &&
                    (mt = new Promise(function(t) {
                        bt = t;
                    })));
        },
        resume: function() {
            qa() &&
                (mt && (bt(), (mt = null), null === gt && kt()),
                    O("clarity", "resume"));
        },
        stop: ni,
        consent: da,
        event: O,
        identify: J,
        set: F,
        upgrade: U,
        metadata: ca,
    });
    !(function() {
        if ("undefined" != typeof window) {
            var t = window,
                e = "clarity";
            if (t[e] && t[e].v)
                return console.warn("Error CL001: Multiple Clarity tags detected.");
            var n = (t[e] && t[e].q) || [];
            for (
                t[e] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                    return ri[t].apply(ri, e);
                },
                t[e].v = d; n.length > 0;

            )
                t[e].apply(t, n.shift());
        }
    })();
})();