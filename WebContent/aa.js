/*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */ ! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) {
                for (d in e) {
                    a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c))
                }
            }
        }
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            if (!l.ownFirst) {
                for (b in a) {
                    return k.call(a, b)
                }
            }
            for (b in a) {}
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) {
                        break
                    }
                }
            } else {
                for (d in a) {
                    if (b.call(a[d], d, a[d]) === !1) {
                        break
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) {
                    return h.call(b, a, c)
                }
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) {
                a[e++] = b[d++]
            }
            if (c !== c) {
                while (void 0 !== b[d]) {
                    a[e++] = b[d++]
                }
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a)) {
                for (d = a.length; d > g; g++) {
                    e = b(a[g], g, c), null != e && h.push(e)
                }
            } else {
                for (g in a) {
                    e = b(a[g], g, c), null != e && h.push(e)
                }
            }
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    if (a[c] === b) {
                        return c
                    }
                }
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) {
                return d
            }
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) {
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) {
                                return d
                            }
                            if (j.id === f) {
                                return d.push(j), d
                            }
                        } else {
                            if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) {
                                return d.push(j), d
                            }
                        }
                    } else {
                        if (o[2]) {
                            return H.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            return H.apply(d, b.getElementsByClassName(f)), d
                        }
                    }
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) {
                        w = b, s = a
                    } else {
                        if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) {
                                r[h] = l + " " + qa(r[h])
                            }
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                    }
                    if (s) {
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) {
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
                }
                if (e === f) {
                    return ka(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    g.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                while (g[d] === h[d]) {
                    d++
                }
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                                }
                            } else {
                                if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) {
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
            d.pseudos[b] = la(b)
        }
        for (b in {
                submit: !0,
                reset: !0
            }) {
            d.pseudos[b] = ma(b)
        }

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return k[2] = h[2]
                            }
                            if (i[d] = k, k[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                fa(a, b[d], c)
            }
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                }
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [ra(sa(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || 0.1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++]) {
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) {
                            q(t, u, g, h)
                        }
                        if (f) {
                            if (r > 0) {
                                while (s--) {
                                    t[s] || u[s] || (u[s] = F.call(i))
                                }
                            }
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = wa(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) {
                            return H.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) {
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) {
                        break
                    }
                    d.push(a)
                }
            }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return n.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (y.test(b)) {
                return n.filter(b, a, c)
            }
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) {
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++) {
                        if (n.contains(d[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; e > b; b++) {
                n.find(a, d[b], c)
            }
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) {
                return this
            }
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) {
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
                }
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) {
                        for (e in b) {
                            n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e])
                        }
                    }
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) {
                        return A.find(a)
                    }
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) {
                    if (n.contains(this, c[b])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) {
                        f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) {
                            f.splice(c, 1), h >= c && h--
                        }
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1) {
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I) {
            if (I = n.Deferred(), "complete" === d.readyState) {
                a.setTimeout(n.ready)
            } else {
                if (d.addEventListener) {
                    d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K)
                } else {
                    d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                    var c = !1;
                    try {
                        c = null == a.frameElement && d.documentElement
                    } catch (e) {}
                    c && c.doScroll && ! function f() {
                        if (!n.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (b) {
                                return a.setTimeout(f, 50)
                            }
                            J(), n.ready()
                        }
                    }()
                }
            }
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) {
        break
    }
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a) {
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) {
                return !1
            }
        }
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
            }
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) {
                        delete d[b[e]]
                    }
                    if (c ? !Q(d) : !n.isEmptyObject(d)) {
                        return
                    }
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) {
                            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])))
                        }
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) {
                    c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
                }
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) {
                    return a
                }
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) {
                    Y(a, b, h, c[h], !0, f, g)
                }
            } else {
                if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b)) {
                    for (; i > h; h++) {
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                    }
                }
            }
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f) {
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b))
            }
        }
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
        }
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
            if (g = a[r], g || 0 === g) {
                if ("object" === n.type(g)) {
                    n.merge(q, g.nodeType ? [g] : g)
                } else {
                    if (ga.test(g)) {
                        i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                        while (f--) {
                            i = i.lastChild
                        }
                        if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                            g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                            while (f--) {
                                n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                            }
                        }
                        n.merge(q, i.childNodes), i.textContent = "";
                        while (i.firstChild) {
                            i.removeChild(i.firstChild)
                        }
                        i = p.lastChild
                    } else {
                        q.push(b.createTextNode(g))
                    }
                }
            }
        }
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++]) {
            if (d && n.inArray(g, d) > -1) {
                e && e.push(g)
            } else {
                if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                    f = 0;
                    while (g = i[f++]) {
                        _.test(g.type || "") && c.push(g)
                    }
                }
            }
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1)
        }
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) {
                sa(a, h, c, d, b[h], f)
            }
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) {
            e = qa
        } else {
            if (!e) {
                return a
            }
        }
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) {
                    f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0)
                }
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--) {
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) {
                            g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g))
                        }
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else {
                        for (o in k) {
                            n.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
                        p.push(i), m = i
                    }
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) {
                    b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault())
                }
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                        (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) {
                for (; i != this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) {
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f)
                        }
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) {
                return a
            }
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) {
                c = e[b], a[c] = g[c]
            }
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (a) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        n.event.add(b, c, h[c][d])
                    }
                }
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) {
                    n.removeEvent(b, d, e.handle)
                }
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) {
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            })
        }
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
                g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m)
            }
            if (h) {
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
                    g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")))
                }
            }
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d))
        }
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) {
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
                    d[g] && Ga(e, d[g])
                }
            }
            if (b) {
                if (c) {
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
                        Fa(e, d[g])
                    }
                } else {
                    Fa(a, f)
                }
            }
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) {
                        for (e in g.events) {
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle)
                        }
                    }
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
            }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) {
                    return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0
                }
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get())
            }
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) {
                g[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.apply(a, d || []);
            for (f in b) {
                a.style[f] = g[f]
            }
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) {
            return a
        }
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--) {
            if (a = _a[c] + b, a in ab) {
                return a
            }
        }
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)))
        }
        return g
    }

    function fb(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ra(b),
            i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) {
                return g
            }
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) {
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
                }
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
                    try {
                        i[b] = c
                    } catch (j) {}
                }
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) {
                        f[b[g]] = n.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            c = V[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) {
                        continue
                    }
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else {
                j = void 0
            }
        }
        if (n.isEmptyObject(o)) {
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j)
        } else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) {
                    n.style(a, b, o[b])
                }
            });
            for (d in o) {
                g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) {
                    return !1
                }
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++) {
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) {
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d
            }
        }
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) {
                    c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
                }
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) {
                        g[e] && g[e].stop && d(g[e])
                    } else {
                        for (e in g) {
                            g[e] && g[e].stop && kb.test(e) && d(g[e])
                        }
                    }
                    for (e = f.length; e--;) {
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                    }(b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                    }
                    for (b = 0; g > b; b++) {
                        d[b] && d[b].finish && d[b].finish.call(this)
                    }
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) {
                a = b[c], a() || b[c] !== a || b.splice(c--, 1)
            }
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) {
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) {
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        } else {
                            d.selected = !1
                        }
                    }
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb, tb, ub = n.expr.attrHandle,
        vb = /^(?:checked|selected)$/i,
        wb = l.getSetAttribute,
        xb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d)
                }
            }
        }
    }), tb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ub[b] || n.find.attr;
        xb && wb || !vb.test(b) ? ub[b] = function(a, b, d) {
            var e, f;
            return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e
        } : ub[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), xb && wb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : sb && sb.set(a, b, c)
        }
    }), wb || (sb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ub.id = ub.name = ub.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: sb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            sb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var yb = /^(?:input|select|textarea|button|object)$/i,
        zb = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Ab = /[\t\r\n\f]/g;

    function Bb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Bb(this)))
                })
            }
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ")
                        }
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Bb(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ")
                            }
                        }
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Bb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (void 0 === a || "boolean" === c) && (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
                }
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) {
                if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Cb = a.location,
        Db = n.now(),
        Eb = /\?/,
        Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b + "")
        }
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Fb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nb = {},
        Ob = {},
        Pb = "*/".concat("*"),
        Qb = Cb.href,
        Rb = Mb.exec(Qb.toLowerCase()) || [];

    function Sb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function Tb(a, b, c, d) {
        var e = {},
            f = a === Ob;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ub(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
        }
        return c && n.extend(!0, a, c), a
    }

    function Vb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Wb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Qb,
            type: "GET",
            isLocal: Jb.test(Rb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a)
        },
        ajaxPrefilter: Sb(Nb),
        ajaxTransport: Sb(Ob),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Ib.exec(g)) {
                                    k[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > u) {
                                for (b in a) {
                                    r[b] = [r[b], a[b]]
                                }
                            } else {
                                w.always(a[w.status])
                            }
                        }
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) {
                return w
            }
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) {
                w.setRequestHeader(e, l.headers[e])
            }
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) {
                return w.abort()
            }
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                w[e](l[e])
            }
            if (j = Tb(Ob, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) {
                    return w
                }
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) {
                        throw x
                    }
                    y(-1, x)
                }
            } else {
                y(-1, "No Transport")
            }

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Xb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Yb(a) {
        while (a && 1 === a.nodeType) {
            if ("none" === Xb(a) || "hidden" === a.type) {
                return !0
            }
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;

    function cc(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function(b, e) {
                c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== n.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    cc(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                cc(c, a[c], b, e)
            }
        }
        return d.join("&").replace(Zb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(_b, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(_b, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc()
    } : gc;
    var dc = 0,
        ec = {},
        fc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in ec) {
            ec[a](void 0, !0)
        }
    }), l.cors = !!fc && "withCredentials" in fc, fc = l.ajax = !!fc, fc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++dc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) {
                        for (f in b.xhrFields) {
                            g[f] = b.xhrFields[f]
                        }
                    }
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) {
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "")
                    }
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState)) {
                            if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) {
                                4 !== g.readyState && g.abort()
                            } else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function gc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function hc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ic = [],
        jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ic.pop() || n.expando + "_" + Db++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : b.jsonp !== !1 && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), l.createHTMLDocument = function() {
        if (!d.implementation.createHTMLDocument) {
            return !1
        }
        var a = d.implementation.createHTMLDocument("");
        return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length
    }(), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var kc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && kc) {
            return kc.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function lc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) {
                return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = lc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var mc = a.jQuery,
        nc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
    }, b || (a.jQuery = a.$ = n), n
});
if (typeof window != "undefined" && typeof window.nhn == "undefined") {
    window.nhn = {}
}
if (typeof window != "undefined") {
    if (typeof window.jindo == "undefined") {
        window.jindo = {}
    }
} else {
    if (!jindo) {
        jindo = {}
    }
}
jindo.$Jindo = function() {
    var a = arguments.callee;
    var b = a._cached;
    if (b) {
        return b
    }
    if (!(this instanceof a)) {
        return new a()
    }
    if (!b) {
        a._cached = this
    }
    this.version = "1.5.3"
};
jindo.$ = function(l) {
    var h = [],
        o = arguments,
        n = o.length,
        g = o[n - 1],
        m = document,
        c = null;
    var d = /^<([a-z]+|h[1-5])>$/i;
    var e = /^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
    if (n > 1 && typeof g != "string" && g.body) {
        o = Array.prototype.slice.apply(o, [0, n - 1]);
        m = g
    }
    for (var f = 0; f < n; f++) {
        c = o[f];
        if (typeof c == "string") {
            c = c.replace(/^\s+|\s+$/g, "");
            if (c.indexOf("<") > -1) {
                if (d.test(c)) {
                    c = m.createElement(RegExp.$1)
                } else {
                    if (e.test(c)) {
                        var b = {
                            thead: "table",
                            tbody: "table",
                            tr: "tbody",
                            td: "tr",
                            dt: "dl",
                            dd: "dl",
                            li: "ul",
                            legend: "fieldset",
                            option: "select"
                        };
                        var r = RegExp.$1.toLowerCase();
                        var q = jindo._createEle(b[r], c, m);
                        for (var f = 0, a = q.length; f < a; f++) {
                            h.push(q[f])
                        }
                        c = null
                    }
                }
            } else {
                c = m.getElementById(c)
            }
        }
        if (c) {
            h[h.length] = c
        }
    }
    return h.length > 1 ? h : (h[0] || null)
};
jindo._createEle = function(g, f, a, e) {
    var c = "R" + new Date().getTime() + parseInt(Math.random() * 100000, 10);
    var d = a.createElement("div");
    switch (g) {
        case "select":
        case "table":
        case "dl":
        case "ul":
        case "fieldset":
            d.innerHTML = "<" + g + ' class="' + c + '">' + f + "</" + g + ">";
            break;
        case "thead":
        case "tbody":
        case "col":
            d.innerHTML = "<table><" + g + ' class="' + c + '">' + f + "</" + g + "></table>";
            break;
        case "tr":
            d.innerHTML = '<table><tbody><tr class="' + c + '">' + f + "</tr></tbody></table>";
            break;
        default:
            d.innerHTML = '<div class="' + c + '">' + f + "</div>";
            break
    }
    var b;
    for (b = d.firstChild; b; b = b.firstChild) {
        if (b.className == c) {
            break
        }
    }
    return e ? b : b.childNodes
};
jindo.$Class = function(oDef) {
    function typeClass() {
        var t = this;
        var a = [];
        var superFunc = function(m, superClass, func) {
            if (m != "constructor" && func.toString().indexOf("$super") > -1) {
                var funcArg = func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g, "$1").split(",");
                var funcStr = func.toString().replace(/function[^{]*{/, "").replace(/(\w|\.?)(this\.\$super|this)/g, function(m, m2, m3) {
                    if (!m2) {
                        return m3 + ".$super"
                    }
                    return m
                });
                funcStr = funcStr.substr(0, funcStr.length - 1);
                func = superClass[m] = eval("false||function(" + funcArg.join(",") + "){" + funcStr + "}")
            }
            return function() {
                var f = this.$this[m];
                var t = this.$this;
                var r = (t[m] = func).apply(t, arguments);
                t[m] = f;
                return r
            }
        };
        while (typeof t._$superClass != "undefined") {
            t.$super = new Object;
            t.$super.$this = this;
            for (var x in t._$superClass.prototype) {
                if (t._$superClass.prototype.hasOwnProperty(x)) {
                    if (typeof this[x] == "undefined" && x != "$init") {
                        this[x] = t._$superClass.prototype[x]
                    }
                    if (x != "constructor" && x != "_$superClass" && typeof t._$superClass.prototype[x] == "function") {
                        t.$super[x] = superFunc(x, t._$superClass, t._$superClass.prototype[x])
                    } else {
                        t.$super[x] = t._$superClass.prototype[x]
                    }
                }
            }
            if (typeof t.$super.$init == "function") {
                a[a.length] = t
            }
            t = t.$super
        }
        for (var i = a.length - 1; i > -1; i--) {
            a[i].$super.$init.apply(a[i].$super, arguments)
        }
        if (typeof this.$init == "function") {
            this.$init.apply(this, arguments)
        }
    }
    if (typeof oDef.$static != "undefined") {
        var i = 0,
            x;
        for (x in oDef) {
            if (oDef.hasOwnProperty(x)) {
                x == "$static" || i++
            }
        }
        for (x in oDef.$static) {
            if (oDef.$static.hasOwnProperty(x)) {
                typeClass[x] = oDef.$static[x]
            }
        }
        if (!i) {
            return oDef.$static
        }
        delete oDef.$static
    }
    typeClass.prototype = oDef;
    typeClass.prototype.constructor = typeClass;
    typeClass.extend = jindo.$Class.extend;
    return typeClass
};
jindo.$Class.extend = function(b) {
    if (typeof b == "undefined" || b === null || !b.extend) {
        throw new Error("extend시 슈퍼 클래스는 Class여야 합니다.")
    }
    this.prototype._$superClass = b;
    for (var a in b) {
        if (b.hasOwnProperty(a)) {
            if (a == "prototype") {
                continue
            }
            this[a] = b[a]
        }
    }
    return this
};
jindo.$$ = jindo.cssquery = (function() {
    var sVersion = "3.0";
    var debugOption = {
        repeat: 1
    };
    var UID = 1;
    var cost = 0;
    var validUID = {};
    var bSupportByClassName = document.getElementsByClassName ? true : false;
    var safeHTML = false;
    var getUID4HTML = function(oEl) {
        var nUID = safeHTML ? (oEl._cssquery_UID && oEl._cssquery_UID[0]) : oEl._cssquery_UID;
        if (nUID && validUID[nUID] == oEl) {
            return nUID
        }
        nUID = UID++;
        oEl._cssquery_UID = safeHTML ? [nUID] : nUID;
        validUID[nUID] = oEl;
        return nUID
    };
    var getUID4XML = function(oEl) {
        var oAttr = oEl.getAttribute("_cssquery_UID");
        var nUID = safeHTML ? (oAttr && oAttr[0]) : oAttr;
        if (!nUID) {
            nUID = UID++;
            oEl.setAttribute("_cssquery_UID", safeHTML ? [nUID] : nUID)
        }
        return nUID
    };
    var getUID = getUID4HTML;
    var uniqid = function(sPrefix) {
        return (sPrefix || "") + new Date().getTime() + parseInt(Math.random() * 100000000, 10)
    };

    function getElementsByClass(searchClass, node, tag) {
        var classElements = new Array();
        if (node == null) {
            node = document
        }
        if (tag == null) {
            tag = "*"
        }
        var els = node.getElementsByTagName(tag);
        var elsLen = els.length;
        var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
        for (i = 0, j = 0; i < elsLen; i++) {
            if (pattern.test(els[i].className)) {
                classElements[j] = els[i];
                j++
            }
        }
        return classElements
    }
    var getChilds_dontShrink = function(oEl, sTagName, sClassName) {
        if (bSupportByClassName && sClassName) {
            if (oEl.getElementsByClassName) {
                return oEl.getElementsByClassName(sClassName)
            }
            if (oEl.querySelectorAll) {
                return oEl.querySelectorAll(sClassName)
            }
            return getElementsByClass(sClassName, oEl, sTagName)
        } else {
            if (sTagName == "*") {
                return oEl.all || oEl.getElementsByTagName(sTagName)
            }
        }
        return oEl.getElementsByTagName(sTagName)
    };
    var clearKeys = function() {
        backupKeys._keys = {}
    };
    var oDocument_dontShrink = document;
    var bXMLDocument = false;
    var backupKeys = function(sQuery) {
        var oKeys = backupKeys._keys;
        sQuery = sQuery.replace(/'(\\'|[^'])*'/g, function(sAll) {
            var uid = uniqid("QUOT");
            oKeys[uid] = sAll;
            return uid
        });
        sQuery = sQuery.replace(/"(\\"|[^"])*"/g, function(sAll) {
            var uid = uniqid("QUOT");
            oKeys[uid] = sAll;
            return uid
        });
        sQuery = sQuery.replace(/\[(.*?)\]/g, function(sAll, sBody) {
            if (sBody.indexOf("ATTR") == 0) {
                return sAll
            }
            var uid = "[" + uniqid("ATTR") + "]";
            oKeys[uid] = sAll;
            return uid
        });
        var bChanged;
        do {
            bChanged = false;
            sQuery = sQuery.replace(/\(((\\\)|[^)|^(])*)\)/g, function(sAll, sBody) {
                if (sBody.indexOf("BRCE") == 0) {
                    return sAll
                }
                var uid = "_" + uniqid("BRCE");
                oKeys[uid] = sAll;
                bChanged = true;
                return uid
            })
        } while (bChanged);
        return sQuery
    };
    var restoreKeys = function(sQuery, bOnlyAttrBrace) {
        var oKeys = backupKeys._keys;
        var bChanged;
        var rRegex = bOnlyAttrBrace ? /(\[ATTR[0-9]+\])/g : /(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
        do {
            bChanged = false;
            sQuery = sQuery.replace(rRegex, function(sKey) {
                if (oKeys[sKey]) {
                    bChanged = true;
                    return oKeys[sKey]
                }
                return sKey
            })
        } while (bChanged);
        sQuery = sQuery.replace(/_BRCE[0-9]+/g, function(sKey) {
            return oKeys[sKey] ? oKeys[sKey] : sKey
        });
        return sQuery
    };
    var restoreString = function(sKey) {
        var oKeys = backupKeys._keys;
        var sOrg = oKeys[sKey];
        if (!sOrg) {
            return sKey
        }
        return eval(sOrg)
    };
    var wrapQuot = function(sStr) {
        return '"' + sStr.replace(/"/g, '\\"') + '"'
    };
    var getStyleKey = function(sKey) {
        if (/^@/.test(sKey)) {
            return sKey.substr(1)
        }
        return null
    };
    var getCSS = function(oEl, sKey) {
        if (oEl.currentStyle) {
            if (sKey == "float") {
                sKey = "styleFloat"
            }
            return oEl.currentStyle[sKey] || oEl.style[sKey]
        } else {
            if (window.getComputedStyle) {
                return oDocument_dontShrink.defaultView.getComputedStyle(oEl, null).getPropertyValue(sKey.replace(/([A-Z])/g, "-$1").toLowerCase()) || oEl.style[sKey]
            }
        }
        if (sKey == "float" && /MSIE/.test(window.navigator.userAgent)) {
            sKey = "styleFloat"
        }
        return oEl.style[sKey]
    };
    var oCamels = {
        accesskey: "accessKey",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        "class": "className",
        colspan: "colSpan",
        "for": "htmlFor",
        maxlength: "maxLength",
        readonly: "readOnly",
        rowspan: "rowSpan",
        tabindex: "tabIndex",
        valign: "vAlign"
    };
    var getDefineCode = function(sKey) {
        var sVal;
        var sStyleKey;
        if (bXMLDocument) {
            sVal = 'oEl.getAttribute("' + sKey + '",2)'
        } else {
            if (sStyleKey = getStyleKey(sKey)) {
                sKey = "$$" + sStyleKey;
                sVal = 'getCSS(oEl, "' + sStyleKey + '")'
            } else {
                switch (sKey) {
                    case "checked":
                        sVal = 'oEl.checked + ""';
                        break;
                    case "disabled":
                        sVal = 'oEl.disabled + ""';
                        break;
                    case "enabled":
                        sVal = '!oEl.disabled + ""';
                        break;
                    case "readonly":
                        sVal = 'oEl.readOnly + ""';
                        break;
                    case "selected":
                        sVal = 'oEl.selected + ""';
                        break;
                    default:
                        if (oCamels[sKey]) {
                            sVal = "oEl." + oCamels[sKey]
                        } else {
                            sVal = 'oEl.getAttribute("' + sKey + '",2)'
                        }
                }
            }
        }
        return "_" + sKey + " = " + sVal
    };
    var getReturnCode = function(oExpr) {
        var sStyleKey = getStyleKey(oExpr.key);
        var sVar = "_" + (sStyleKey ? "$$" + sStyleKey : oExpr.key);
        var sVal = oExpr.val ? wrapQuot(oExpr.val) : "";
        switch (oExpr.op) {
            case "~=":
                return "(" + sVar + ' && (" " + ' + sVar + ' + " ").indexOf(" " + ' + sVal + ' + " ") > -1)';
            case "^=":
                return "(" + sVar + " && " + sVar + ".indexOf(" + sVal + ") == 0)";
            case "$=":
                return "(" + sVar + " && " + sVar + ".substr(" + sVar + ".length - " + oExpr.val.length + ") == " + sVal + ")";
            case "*=":
                return "(" + sVar + " && " + sVar + ".indexOf(" + sVal + ") > -1)";
            case "!=":
                return "(" + sVar + " != " + sVal + ")";
            case "=":
                return "(" + sVar + " == " + sVal + ")"
        }
        return "(" + sVar + ")"
    };
    var getNodeIndex = function(oEl) {
        var nUID = getUID(oEl);
        var nIndex = oNodeIndexes[nUID] || 0;
        if (nIndex == 0) {
            for (var oSib = (oEl.parentNode || oEl._IE5_parentNode).firstChild; oSib; oSib = oSib.nextSibling) {
                if (oSib.nodeType != 1) {
                    continue
                }
                nIndex++;
                setNodeIndex(oSib, nIndex)
            }
            nIndex = oNodeIndexes[nUID]
        }
        return nIndex
    };
    var oNodeIndexes = {};
    var setNodeIndex = function(oEl, nIndex) {
        var nUID = getUID(oEl);
        oNodeIndexes[nUID] = nIndex
    };
    var unsetNodeIndexes = function() {
        setTimeout(function() {
            oNodeIndexes = {}
        }, 0)
    };
    var oPseudoes_dontShrink = {
        contains: function(oEl, sOption) {
            return (oEl.innerText || oEl.textContent || "").indexOf(sOption) > -1
        },
        "last-child": function(oEl, sOption) {
            for (oEl = oEl.nextSibling; oEl; oEl = oEl.nextSibling) {
                if (oEl.nodeType == 1) {
                    return false
                }
            }
            return true
        },
        "first-child": function(oEl, sOption) {
            for (oEl = oEl.previousSibling; oEl; oEl = oEl.previousSibling) {
                if (oEl.nodeType == 1) {
                    return false
                }
            }
            return true
        },
        "only-child": function(oEl, sOption) {
            var nChild = 0;
            for (var oChild = (oEl.parentNode || oEl._IE5_parentNode).firstChild; oChild; oChild = oChild.nextSibling) {
                if (oChild.nodeType == 1) {
                    nChild++
                }
                if (nChild > 1) {
                    return false
                }
            }
            return nChild ? true : false
        },
        empty: function(oEl, _) {
            return oEl.firstChild ? false : true
        },
        "nth-child": function(oEl, nMul, nAdd) {
            var nIndex = getNodeIndex(oEl);
            return nIndex % nMul == nAdd
        },
        "nth-last-child": function(oEl, nMul, nAdd) {
            var oLast = (oEl.parentNode || oEl._IE5_parentNode).lastChild;
            for (; oLast; oLast = oLast.previousSibling) {
                if (oLast.nodeType == 1) {
                    break
                }
            }
            var nTotal = getNodeIndex(oLast);
            var nIndex = getNodeIndex(oEl);
            var nLastIndex = nTotal - nIndex + 1;
            return nLastIndex % nMul == nAdd
        },
        checked: function(oEl) {
            return !!oEl.checked
        },
        selected: function(oEl) {
            return !!oEl.selected
        },
        enabled: function(oEl) {
            return !oEl.disabled
        },
        disabled: function(oEl) {
            return !!oEl.disabled
        }
    };
    var getExpression = function(sBody) {
        var oRet = {
            defines: "",
            returns: "true"
        };
        var sBody = restoreKeys(sBody, true);
        var aExprs = [];
        var aDefineCode = [],
            aReturnCode = [];
        var sId, sTagName;
        var sBody = sBody.replace(/:([\w-]+)(\(([^)]*)\))?/g, function(_1, sType, _2, sOption) {
            switch (sType) {
                case "not":
                    var oInner = getExpression(sOption);
                    var sFuncDefines = oInner.defines;
                    var sFuncReturns = oInner.returnsID + oInner.returnsTAG + oInner.returns;
                    aReturnCode.push("!(function() { " + sFuncDefines + " return " + sFuncReturns + " })()");
                    break;
                case "nth-child":
                case "nth-last-child":
                    sOption = restoreString(sOption);
                    if (sOption == "even") {
                        sOption = "2n"
                    } else {
                        if (sOption == "odd") {
                            sOption = "2n+1"
                        }
                    }
                    var nMul, nAdd;
                    var matchstr = sOption.match(/([0-9]*)n([+-][0-9]+)*/);
                    if (matchstr) {
                        nMul = matchstr[1] || 1;
                        nAdd = matchstr[2] || 0
                    } else {
                        nMul = Infinity;
                        nAdd = parseInt(sOption, 10)
                    }
                    aReturnCode.push("oPseudoes_dontShrink[" + wrapQuot(sType) + "](oEl, " + nMul + ", " + nAdd + ")");
                    break;
                case "first-of-type":
                case "last-of-type":
                    sType = (sType == "first-of-type" ? "nth-of-type" : "nth-last-of-type");
                    sOption = 1;
                case "nth-of-type":
                case "nth-last-of-type":
                    sOption = restoreString(sOption);
                    if (sOption == "even") {
                        sOption = "2n"
                    } else {
                        if (sOption == "odd") {
                            sOption = "2n+1"
                        }
                    }
                    var nMul, nAdd;
                    if (/([0-9]*)n([+-][0-9]+)*/.test(sOption)) {
                        nMul = parseInt(RegExp.$1, 10) || 1;
                        nAdd = parseInt(RegExp.$2, 20) || 0
                    } else {
                        nMul = Infinity;
                        nAdd = parseInt(sOption, 10)
                    }
                    oRet.nth = [nMul, nAdd, sType];
                    break;
                default:
                    sOption = sOption ? restoreString(sOption) : "";
                    aReturnCode.push("oPseudoes_dontShrink[" + wrapQuot(sType) + "](oEl, " + wrapQuot(sOption) + ")");
                    break
            }
            return ""
        });
        var sBody = sBody.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g, function(_1, sKey, _2, sOp, sVal) {
            sKey = restoreString(sKey);
            sVal = restoreString(sVal);
            if (sKey == "checked" || sKey == "disabled" || sKey == "enabled" || sKey == "readonly" || sKey == "selected") {
                if (!sVal) {
                    sOp = "=";
                    sVal = "true"
                }
            }
            aExprs.push({
                key: sKey,
                op: sOp,
                val: sVal
            });
            return ""
        });
        var sClassName = null;
        var sBody = sBody.replace(/\.([\w-]+)/g, function(_, sClass) {
            aExprs.push({
                key: "class",
                op: "~=",
                val: sClass
            });
            if (!sClassName) {
                sClassName = sClass
            }
            return ""
        });
        var sBody = sBody.replace(/#([\w-]+)/g, function(_, sIdValue) {
            if (bXMLDocument) {
                aExprs.push({
                    key: "id",
                    op: "=",
                    val: sIdValue
                })
            } else {
                sId = sIdValue
            }
            return ""
        });
        sTagName = sBody == "*" ? "" : sBody;
        var oVars = {};
        for (var i = 0, oExpr; oExpr = aExprs[i]; i++) {
            var sKey = oExpr.key;
            if (!oVars[sKey]) {
                aDefineCode.push(getDefineCode(sKey))
            }
            aReturnCode.unshift(getReturnCode(oExpr));
            oVars[sKey] = true
        }
        if (aDefineCode.length) {
            oRet.defines = "var " + aDefineCode.join(",") + ";"
        }
        if (aReturnCode.length) {
            oRet.returns = aReturnCode.join("&&")
        }
        oRet.quotID = sId ? wrapQuot(sId) : "";
        oRet.quotTAG = sTagName ? wrapQuot(bXMLDocument ? sTagName : sTagName.toUpperCase()) : "";
        if (bSupportByClassName) {
            oRet.quotCLASS = sClassName ? wrapQuot(sClassName) : ""
        }
        oRet.returnsID = sId ? "oEl.id == " + oRet.quotID + " && " : "";
        oRet.returnsTAG = sTagName && sTagName != "*" ? "oEl.tagName == " + oRet.quotTAG + " && " : "";
        return oRet
    };
    var splitToParts = function(sQuery) {
        var aParts = [];
        var sRel = " ";
        var sBody = sQuery.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g, function(_, sBody, sRelative) {
            if (sBody) {
                aParts.push({
                    rel: sRel,
                    body: sBody
                })
            }
            sRel = sRelative.replace(/\s+$/g, "") || " ";
            return ""
        });
        if (sBody) {
            aParts.push({
                rel: sRel,
                body: sBody
            })
        }
        return aParts
    };
    var isNth_dontShrink = function(oEl, sTagName, nMul, nAdd, sDirection) {
        var nIndex = 0;
        for (var oSib = oEl; oSib; oSib = oSib[sDirection]) {
            if (oSib.nodeType == 1 && (!sTagName || sTagName == oSib.tagName)) {
                nIndex++
            }
        }
        return nIndex % nMul == nAdd
    };
    var compileParts = function(aParts) {
        var aPartExprs = [];
        for (var i = 0, oPart; oPart = aParts[i]; i++) {
            aPartExprs.push(getExpression(oPart.body))
        }
        var sFunc = "";
        var sPushCode = "aRet.push(oEl); if (oOptions.single) { bStop = true; }";
        for (var i = aParts.length - 1, oPart; oPart = aParts[i]; i--) {
            var oExpr = aPartExprs[i];
            var sPush = (debugOption.callback ? "cost++;" : "") + oExpr.defines;
            var sReturn = "if (bStop) {" + (i == 0 ? "return aRet;" : "return;") + "}";
            if (oExpr.returns == "true") {
                sPush += (sFunc ? sFunc + "(oEl);" : sPushCode) + sReturn
            } else {
                sPush += "if (" + oExpr.returns + ") {" + (sFunc ? sFunc + "(oEl);" : sPushCode) + sReturn + "}"
            }
            var sCheckTag = "oEl.nodeType != 1";
            if (oExpr.quotTAG) {
                sCheckTag = "oEl.tagName != " + oExpr.quotTAG
            }
            var sTmpFunc = "(function(oBase" + (i == 0 ? ", oOptions) { var bStop = false; var aRet = [];" : ") {");
            if (oExpr.nth) {
                sPush = "if (isNth_dontShrink(oEl, " + (oExpr.quotTAG ? oExpr.quotTAG : "false") + "," + oExpr.nth[0] + "," + oExpr.nth[1] + ',"' + (oExpr.nth[2] == "nth-of-type" ? "previousSibling" : "nextSibling") + '")) {' + sPush + "}"
            }
            switch (oPart.rel) {
                case " ":
                    if (oExpr.quotID) {
                        sTmpFunc += "var oEl = oDocument_dontShrink.getElementById(" + oExpr.quotID + ");var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || " + sCheckTag + ") return aRet;" + sPush
                    } else {
                        sTmpFunc += "var aCandi = getChilds_dontShrink(oBase, " + (oExpr.quotTAG || '"*"') + ", " + (oExpr.quotCLASS || "null") + ");for (var i = 0, oEl; oEl = aCandi[i]; i++) {" + (oExpr.quotCLASS ? "if (" + sCheckTag + ") continue;" : "") + sPush + "}"
                    }
                    break;
                case ">":
                    if (oExpr.quotID) {
                        sTmpFunc += "var oEl = oDocument_dontShrink.getElementById(" + oExpr.quotID + ");if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || " + sCheckTag + ") return aRet;" + sPush
                    } else {
                        sTmpFunc += "for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if (" + sCheckTag + ") { continue; }" + sPush + "}"
                    }
                    break;
                case "+":
                    if (oExpr.quotID) {
                        sTmpFunc += "var oEl = oDocument_dontShrink.getElementById(" + oExpr.quotID + ");var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || " + sCheckTag + ") return aRet;" + sPush
                    } else {
                        sTmpFunc += "for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || " + sCheckTag + ") { return aRet; }" + sPush
                    }
                    break;
                case "~":
                    if (oExpr.quotID) {
                        sTmpFunc += "var oEl = oDocument_dontShrink.getElementById(" + oExpr.quotID + ");var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || " + sCheckTag + ") return aRet;" + sPush
                    } else {
                        sTmpFunc += "for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if (" + sCheckTag + ") { continue; }if (!markElement_dontShrink(oEl, " + i + ")) { break; }" + sPush + "}"
                    }
                    break;
                case "!":
                    if (oExpr.quotID) {
                        sTmpFunc += "var oEl = oDocument_dontShrink.getElementById(" + oExpr.quotID + ");for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || " + sCheckTag + ") return aRet;" + sPush
                    } else {
                        sTmpFunc += "for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if (" + sCheckTag + ") { continue; }" + sPush + "}"
                    }
                    break;
                case "!>":
                    if (oExpr.quotID) {
                        sTmpFunc += "var oEl = oDocument_dontShrink.getElementById(" + oExpr.quotID + ");var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || (" + sCheckTag + ")) return aRet;" + sPush
                    } else {
                        sTmpFunc += "var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || " + sCheckTag + ") { return aRet; }" + sPush
                    }
                    break;
                case "!+":
                    if (oExpr.quotID) {
                        sTmpFunc += "var oEl = oDocument_dontShrink.getElementById(" + oExpr.quotID + ");var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || (" + sCheckTag + ")) return aRet;" + sPush
                    } else {
                        sTmpFunc += "for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || " + sCheckTag + ") { return aRet; }" + sPush
                    }
                    break;
                case "!~":
                    if (oExpr.quotID) {
                        sTmpFunc += "var oEl = oDocument_dontShrink.getElementById(" + oExpr.quotID + ");var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || (" + sCheckTag + ")) return aRet;" + sPush
                    } else {
                        sTmpFunc += "for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if (" + sCheckTag + ") { continue; }if (!markElement_dontShrink(oEl, " + i + ")) { break; }" + sPush + "}"
                    }
                    break
            }
            sTmpFunc += (i == 0 ? "return aRet;" : "") + "})";
            sFunc = sTmpFunc
        }
        eval("var fpCompiled = " + sFunc + ";");
        return fpCompiled
    };
    var parseQuery = function(sQuery) {
        var sCacheKey = sQuery;
        var fpSelf = arguments.callee;
        var fpFunction = fpSelf._cache[sCacheKey];
        if (!fpFunction) {
            sQuery = backupKeys(sQuery);
            var aParts = splitToParts(sQuery);
            fpFunction = fpSelf._cache[sCacheKey] = compileParts(aParts);
            fpFunction.depth = aParts.length
        }
        return fpFunction
    };
    parseQuery._cache = {};
    var parseTestQuery = function(sQuery) {
        var fpSelf = arguments.callee;
        var aSplitQuery = backupKeys(sQuery).split(/\s*,\s*/);
        var aResult = [];
        var nLen = aSplitQuery.length;
        var aFunc = [];
        for (var i = 0; i < nLen; i++) {
            aFunc.push((function(sQuery) {
                var sCacheKey = sQuery;
                var fpFunction = fpSelf._cache[sCacheKey];
                if (!fpFunction) {
                    sQuery = backupKeys(sQuery);
                    var oExpr = getExpression(sQuery);
                    eval("fpFunction = function(oEl) { " + oExpr.defines + "return (" + oExpr.returnsID + oExpr.returnsTAG + oExpr.returns + "); };")
                }
                return fpFunction
            })(restoreKeys(aSplitQuery[i])))
        }
        return aFunc
    };
    parseTestQuery._cache = {};
    var distinct = function(aList) {
        var aDistinct = [];
        var oDummy = {};
        for (var i = 0, oEl; oEl = aList[i]; i++) {
            var nUID = getUID(oEl);
            if (oDummy[nUID]) {
                continue
            }
            aDistinct.push(oEl);
            oDummy[nUID] = true
        }
        return aDistinct
    };
    var markElement_dontShrink = function(oEl, nDepth) {
        var nUID = getUID(oEl);
        if (cssquery._marked[nDepth][nUID]) {
            return false
        }
        cssquery._marked[nDepth][nUID] = true;
        return true
    };
    var oResultCache = null;
    var bUseResultCache = false;
    var bExtremeMode = false;
    var old_cssquery = function(sQuery, oParent, oOptions) {
        if (typeof sQuery == "object") {
            var oResult = {};
            for (var k in sQuery) {
                if (sQuery.hasOwnProperty(k)) {
                    oResult[k] = arguments.callee(sQuery[k], oParent, oOptions)
                }
            }
            return oResult
        }
        cost = 0;
        var executeTime = new Date().getTime();
        var aRet;
        for (var r = 0, rp = debugOption.repeat; r < rp; r++) {
            aRet = (function(sQuery, oParent, oOptions) {
                if (oOptions) {
                    if (!oOptions.oneTimeOffCache) {
                        oOptions.oneTimeOffCache = false
                    }
                } else {
                    oOptions = {
                        oneTimeOffCache: false
                    }
                }
                cssquery.safeHTML(oOptions.oneTimeOffCache);
                if (!oParent) {
                    oParent = document
                }
                oDocument_dontShrink = oParent.ownerDocument || oParent.document || oParent;
                if (/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(navigator.userAgent) && parseFloat(RegExp.$1) < 6) {
                    try {
                        oDocument_dontShrink.location
                    } catch (e) {
                        oDocument_dontShrink = document
                    }
                    oDocument_dontShrink.firstChild = oDocument_dontShrink.getElementsByTagName("html")[0];
                    oDocument_dontShrink.firstChild._IE5_parentNode = oDocument_dontShrink
                }
                bXMLDocument = (typeof XMLDocument != "undefined") ? (oDocument_dontShrink.constructor === XMLDocument) : (!oDocument_dontShrink.location);
                getUID = bXMLDocument ? getUID4XML : getUID4HTML;
                clearKeys();
                var aSplitQuery = backupKeys(sQuery).split(/\s*,\s*/);
                var aResult = [];
                var nLen = aSplitQuery.length;
                for (var i = 0; i < nLen; i++) {
                    aSplitQuery[i] = restoreKeys(aSplitQuery[i])
                }
                for (var i = 0; i < nLen; i++) {
                    var sSingleQuery = aSplitQuery[i];
                    var aSingleQueryResult = null;
                    var sResultCacheKey = sSingleQuery + (oOptions.single ? "_single" : "");
                    var aCache = bUseResultCache ? oResultCache[sResultCacheKey] : null;
                    if (aCache) {
                        for (var j = 0, oCache; oCache = aCache[j]; j++) {
                            if (oCache.parent == oParent) {
                                aSingleQueryResult = oCache.result;
                                break
                            }
                        }
                    }
                    if (!aSingleQueryResult) {
                        var fpFunction = parseQuery(sSingleQuery);
                        cssquery._marked = [];
                        for (var j = 0, nDepth = fpFunction.depth; j < nDepth; j++) {
                            cssquery._marked.push({})
                        }
                        aSingleQueryResult = distinct(fpFunction(oParent, oOptions));
                        if (bUseResultCache && !oOptions.oneTimeOffCache) {
                            if (!(oResultCache[sResultCacheKey] instanceof Array)) {
                                oResultCache[sResultCacheKey] = []
                            }
                            oResultCache[sResultCacheKey].push({
                                parent: oParent,
                                result: aSingleQueryResult
                            })
                        }
                    }
                    aResult = aResult.concat(aSingleQueryResult)
                }
                unsetNodeIndexes();
                return aResult
            })(sQuery, oParent, oOptions)
        }
        executeTime = new Date().getTime() - executeTime;
        if (debugOption.callback) {
            debugOption.callback(sQuery, cost, executeTime)
        }
        return aRet
    };
    var cssquery;
    if (document.querySelectorAll) {
        function _isNonStandardQueryButNotException(sQuery) {
            return /\[\s*(?:checked|selected|disabled)/.test(sQuery)
        }

        function _commaRevise(sQuery, sChange) {
            return sQuery.replace(/\,/gi, sChange)
        }
        var protoSlice = Array.prototype.slice;
        var _toArray = function(aArray) {
            return protoSlice.apply(aArray)
        };
        try {
            protoSlice.apply(document.documentElement.childNodes)
        } catch (e) {
            _toArray = function(aArray) {
                var returnArray = [];
                var leng = aArray.length;
                for (var i = 0; i < leng; i++) {
                    returnArray.push(aArray[i])
                }
                return returnArray
            }
        }
        cssquery = function(sQuery, oParent, oOptions) {
            oParent = oParent || document;
            try {
                if (_isNonStandardQueryButNotException(sQuery)) {
                    throw Error("None Standard Query")
                } else {
                    var sReviseQuery = sQuery;
                    var oReviseParent = oParent;
                    if (oParent.nodeType != 9) {
                        if (bExtremeMode) {
                            if (!oParent.id) {
                                oParent.id = "p" + new Date().getTime() + parseInt(Math.random() * 100000000, 10)
                            }
                        } else {
                            throw Error("Parent Element has not ID.or It is not document.or None Extreme Mode.")
                        }
                        sReviseQuery = _commaRevise("#" + oParent.id + " " + sQuery, ", #" + oParent.id);
                        oReviseParent = oParent.ownerDocument || oParent.document || document
                    }
                    if (oOptions && oOptions.single) {
                        return [oReviseParent.querySelector(sReviseQuery)]
                    } else {
                        return _toArray(oReviseParent.querySelectorAll(sReviseQuery))
                    }
                }
            } catch (e) {
                return old_cssquery(sQuery, oParent, oOptions)
            }
        }
    } else {
        cssquery = old_cssquery
    }
    cssquery.test = function(oEl, sQuery) {
        clearKeys();
        var aFunc = parseTestQuery(sQuery);
        for (var i = 0, nLen = aFunc.length; i < nLen; i++) {
            if (aFunc[i](oEl)) {
                return true
            }
        }
        return false
    };
    cssquery.useCache = function(bFlag) {
        if (typeof bFlag != "undefined") {
            bUseResultCache = bFlag;
            cssquery.clearCache()
        }
        return bUseResultCache
    };
    cssquery.clearCache = function() {
        oResultCache = {}
    };
    cssquery.getSingle = function(sQuery, oParent, oOptions) {
        return cssquery(sQuery, oParent, {
            single: true,
            oneTimeOffCache: oOptions ? (!!oOptions.oneTimeOffCache) : false
        })[0] || null
    };
    cssquery.xpath = function(sXPath, oParent) {
        var sXPath = sXPath.replace(/\/(\w+)(\[([0-9]+)\])?/g, function(_1, sTag, _2, sTh) {
            sTh = sTh || "1";
            return ">" + sTag + ":nth-of-type(" + sTh + ")"
        });
        return old_cssquery(sXPath, oParent)
    };
    cssquery.debug = function(fpCallback, nRepeat) {
        debugOption.callback = fpCallback;
        debugOption.repeat = nRepeat || 1
    };
    cssquery.safeHTML = function(bFlag) {
        var bIE = /MSIE/.test(window.navigator.userAgent);
        if (arguments.length > 0) {
            safeHTML = bFlag && bIE
        }
        return safeHTML || !bIE
    };
    cssquery.version = sVersion;
    cssquery.release = function() {
        if (/MSIE/.test(window.navigator.userAgent)) {
            delete validUID;
            validUID = {};
            if (bUseResultCache) {
                cssquery.clearCache()
            }
        }
    };
    cssquery._getCacheInfo = function() {
        return {
            uidCache: validUID,
            eleCache: oResultCache
        }
    };
    cssquery._resetUID = function() {
        UID = 0
    };
    cssquery.extreme = function(bExtreme) {
        if (arguments.length == 0) {
            bExtreme = true
        }
        bExtremeMode = bExtreme
    };
    return cssquery
})();
jindo.$Agent = function() {
    var a = arguments.callee;
    var b = a._cached;
    if (b) {
        return b
    }
    if (!(this instanceof a)) {
        return new a
    }
    if (!b) {
        a._cached = this
    }
    this._navigator = navigator
};
jindo.$Agent.prototype.navigator = function() {
    var l = new Object;
    var a = -1;
    var d = -1;
    var c = this._navigator.userAgent;
    var b = this._navigator.vendor || "";

    function g(f, e) {
        return ((e || "").indexOf(f) > -1)
    }
    l.getName = function() {
        var e = "";
        for (x in l) {
            if (typeof l[x] == "boolean" && l[x] && l.hasOwnProperty(x)) {
                e = x
            }
        }
        return e
    };
    l.webkit = g("WebKit", c);
    l.opera = (typeof window.opera != "undefined") || g("Opera", c);
    l.ie = !l.opera && g("MSIE", c);
    l.chrome = l.webkit && g("Chrome", c);
    l.safari = l.webkit && !l.chrome && g("Apple", b);
    l.firefox = g("Firefox", c);
    l.mozilla = g("Gecko", c) && !l.safari && !l.chrome && !l.firefox;
    l.camino = g("Camino", b);
    l.netscape = g("Netscape", c);
    l.omniweb = g("OmniWeb", c);
    l.icab = g("iCab", b);
    l.konqueror = g("KDE", b);
    l.mobile = (g("Mobile", c) || g("Android", c) || g("Nokia", c) || g("webOS", c) || g("Opera Mini", c) || g("BlackBerry", c) || (g("Windows", c) && g("PPC", c)) || g("Smartphone", c) || g("IEMobile", c)) && !g("iPad", c);
    l.msafari = (!g("IEMobile", c) && g("Mobile", c)) || (g("iPad", c) && g("Safari", c));
    l.mopera = g("Opera Mini", c);
    l.mie = g("PPC", c) || g("Smartphone", c) || g("IEMobile", c);
    try {
        if (l.ie) {
            a = c.match(/(?:MSIE) ([0-9.]+)/)[1];
            if (c.match(/(?:Trident)\/([0-9.]+)/)) {
                var m = parseInt(RegExp.$1, 10);
                if (m > 3) {
                    d = m + 4
                }
            }
        } else {
            if (l.safari || l.msafari) {
                a = parseFloat(c.match(/Safari\/([0-9.]+)/)[1]);
                if (a == 100) {
                    a = 1.1
                } else {
                    if (c.match(/Version\/([0-9.]+)/)) {
                        a = RegExp.$1
                    } else {
                        a = [1, 1.2, -1, 1.3, 2, 3][Math.floor(a / 100)]
                    }
                }
            } else {
                if (l.mopera) {
                    a = c.match(/(?:Opera\sMini)\/([0-9.]+)/)[1]
                } else {
                    if (l.firefox || l.opera || l.omniweb) {
                        a = c.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1]
                    } else {
                        if (l.mozilla) {
                            a = c.match(/rv:([0-9.]+)/)[1]
                        } else {
                            if (l.icab) {
                                a = c.match(/iCab[ \/]([0-9.]+)/)[1]
                            } else {
                                if (l.chrome) {
                                    a = c.match(/Chrome[ \/]([0-9.]+)/)[1]
                                }
                            }
                        }
                    }
                }
            }
        }
        l.version = parseFloat(a);
        l.nativeVersion = parseFloat(d);
        if (isNaN(l.version)) {
            l.version = -1
        }
    } catch (h) {
        l.version = -1
    }
    this.navigator = function() {
        return l
    };
    return l
};
jindo.$Agent.prototype.os = function() {
    var d = new Object;
    var a = this._navigator.userAgent;
    var c = this._navigator.platform;
    var b = function(f, e) {
        return (e.indexOf(f) > -1)
    };
    d.getName = function() {
        var e = "";
        for (x in d) {
            if (typeof d[x] == "boolean" && d[x] && d.hasOwnProperty(x)) {
                e = x
            }
        }
        return e
    };
    d.win = b("Win", c);
    d.mac = b("Mac", c);
    d.linux = b("Linux", c);
    d.win2000 = d.win && (b("NT 5.0", a) || b("2000", a));
    d.winxp = d.win && b("NT 5.1", a);
    d.xpsp2 = d.winxp && b("SV1", a);
    d.vista = d.win && b("NT 6.0", a);
    d.win7 = d.win && b("NT 6.1", a);
    d.ipad = b("iPad", a);
    d.iphone = b("iPhone", a) && !d.ipad;
    d.android = b("Android", a);
    d.nokia = b("Nokia", a);
    d.webos = b("webOS", a);
    d.blackberry = b("BlackBerry", a);
    d.mwin = b("PPC", a) || b("Smartphone", a) || b("IEMobile", a);
    this.os = function() {
        return d
    };
    return d
};
jindo.$Agent.prototype.flash = function() {
    var h = new Object;
    var g = this._navigator.plugins;
    var a = this._navigator.mimeTypes;
    var c = null;
    h.installed = false;
    h.version = -1;
    if (typeof g != "undefined" && g.length) {
        c = g["Shockwave Flash"];
        if (c) {
            h.installed = true;
            if (c.description) {
                h.version = parseFloat(c.description.match(/[0-9.]+/)[0])
            }
        }
        if (g["Shockwave Flash 2.0"]) {
            h.installed = true;
            h.version = 2
        }
    } else {
        if (typeof a != "undefined" && a.length) {
            c = a["application/x-shockwave-flash"];
            h.installed = (c && c.enabledPlugin)
        } else {
            for (var b = 10; b > 1; b--) {
                try {
                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + b);
                    h.installed = true;
                    h.version = b;
                    break
                } catch (d) {}
            }
        }
    }
    this.flash = function() {
        return h
    };
    this.info = this.flash;
    return h
};
jindo.$Agent.prototype.silverlight = function() {
    var d = new Object;
    var c = this._navigator.plugins;
    var a = null;
    d.installed = false;
    d.version = -1;
    if (typeof c != "undefined" && c.length) {
        a = c["Silverlight Plug-In"];
        if (a) {
            d.installed = true;
            d.version = parseInt(a.description.split(".")[0], 10);
            if (a.description == "1.0.30226.2") {
                d.version = 2
            }
        }
    } else {
        try {
            a = new ActiveXObject("AgControl.AgControl");
            d.installed = true;
            if (a.isVersionSupported("3.0")) {
                d.version = 3
            } else {
                if (a.isVersionSupported("2.0")) {
                    d.version = 2
                } else {
                    if (a.isVersionSupported("1.0")) {
                        d.version = 1
                    }
                }
            }
        } catch (b) {}
    }
    this.silverlight = function() {
        return d
    };
    return d
};
jindo.$A = function(c) {
    var a = arguments.callee;
    if (typeof c == "undefined" || c == null) {
        c = []
    }
    if (c instanceof a) {
        return c
    }
    if (!(this instanceof a)) {
        return new a(c)
    }
    this._array = [];
    if (c.constructor != String) {
        this._array = [];
        for (var b = 0; b < c.length; b++) {
            this._array[this._array.length] = c[b]
        }
    }
};
jindo.$A.prototype.toString = function() {
    return this._array.toString()
};
jindo.$A.prototype.get = function(a) {
    return this._array[a]
};
jindo.$A.prototype.length = function(d, b) {
    if (typeof d == "number") {
        var a = this._array.length;
        this._array.length = d;
        if (typeof b != "undefined") {
            for (var c = a; c < d; c++) {
                this._array[c] = b
            }
        }
        return this
    } else {
        return this._array.length
    }
};
jindo.$A.prototype.has = function(a) {
    return (this.indexOf(a) > -1)
};
jindo.$A.prototype.indexOf = function(a) {
    if (typeof this._array.indexOf != "undefined") {
        jindo.$A.prototype.indexOf = function(b) {
            return this._array.indexOf(b)
        }
    } else {
        jindo.$A.prototype.indexOf = function(b) {
            for (var c = 0; c < this._array.length; c++) {
                if (this._array[c] == b) {
                    return c
                }
            }
            return -1
        }
    }
    return this.indexOf(a)
};
jindo.$A.prototype.$value = function() {
    return this._array
};
jindo.$A.prototype.push = function(a) {
    return this._array.push.apply(this._array, Array.prototype.slice.apply(arguments))
};
jindo.$A.prototype.pop = function() {
    return this._array.pop()
};
jindo.$A.prototype.shift = function() {
    return this._array.shift()
};
jindo.$A.prototype.unshift = function(a) {
    this._array.unshift.apply(this._array, Array.prototype.slice.apply(arguments));
    return this._array.length
};
jindo.$A.prototype.forEach = function(b, a) {
    if (typeof this._array.forEach == "function") {
        jindo.$A.prototype.forEach = function(m, d) {
            var c = this._array;
            var h = this.constructor.Break;
            var n = this.constructor.Continue;

            function g(o, p, f) {
                try {
                    m.call(d, o, p, f)
                } catch (q) {
                    if (!(q instanceof n)) {
                        throw q
                    }
                }
            }
            try {
                this._array.forEach(g)
            } catch (l) {
                if (!(l instanceof h)) {
                    throw l
                }
            }
            return this
        }
    } else {
        jindo.$A.prototype.forEach = function(n, g) {
            var c = this._array;
            var l = this.constructor.Break;
            var o = this.constructor.Continue;

            function h(p, q, f) {
                try {
                    n.call(g, p, q, f)
                } catch (r) {
                    if (!(r instanceof o)) {
                        throw r
                    }
                }
            }
            for (var d = 0; d < c.length; d++) {
                try {
                    h(c[d], d, c)
                } catch (m) {
                    if (m instanceof l) {
                        break
                    }
                    throw m
                }
            }
            return this
        }
    }
    return this.forEach(b, a)
};
jindo.$A.prototype.slice = function(c, d) {
    var b = this._array.slice.call(this._array, c, d);
    return jindo.$A(b)
};
jindo.$A.prototype.splice = function(b, d) {
    var c = this._array.splice.apply(this._array, Array.prototype.slice.apply(arguments));
    return jindo.$A(c)
};
jindo.$A.prototype.shuffle = function() {
    this._array.sort(function(d, c) {
        return Math.random() > Math.random() ? 1 : -1
    });
    return this
};
jindo.$A.prototype.reverse = function() {
    this._array.reverse();
    return this
};
jindo.$A.prototype.empty = function() {
    return this.length(0)
};
jindo.$A.Break = function() {
    if (!(this instanceof arguments.callee)) {
        throw new arguments.callee
    }
};
jindo.$A.Continue = function() {
    if (!(this instanceof arguments.callee)) {
        throw new arguments.callee
    }
};
jindo.$A.prototype.map = function(b, a) {
    if (typeof this._array.map == "function") {
        jindo.$A.prototype.map = function(m, d) {
            var c = this._array;
            var h = this.constructor.Break;
            var n = this.constructor.Continue;

            function g(o, p, f) {
                try {
                    return m.call(d, o, p, f)
                } catch (q) {
                    if (q instanceof n) {
                        return o
                    } else {
                        throw q
                    }
                }
            }
            try {
                this._array = this._array.map(g)
            } catch (l) {
                if (!(l instanceof h)) {
                    throw l
                }
            }
            return this
        }
    } else {
        jindo.$A.prototype.map = function(p, g) {
            var d = this._array;
            var o = [];
            var m = this.constructor.Break;
            var n = this.constructor.Continue;

            function h(q, r, f) {
                try {
                    return p.call(g, q, r, f)
                } catch (s) {
                    if (s instanceof n) {
                        return q
                    } else {
                        throw s
                    }
                }
            }
            for (var c = 0; c < this._array.length; c++) {
                try {
                    o[c] = h(d[c], c, d)
                } catch (l) {
                    if (l instanceof m) {
                        return this
                    } else {
                        throw l
                    }
                }
            }
            this._array = o;
            return this
        }
    }
    return this.map(b, a)
};
jindo.$A.prototype.filter = function(b, a) {
    if (typeof this._array.filter != "undefined") {
        jindo.$A.prototype.filter = function(d, c) {
            return jindo.$A(this._array.filter(d, c))
        }
    } else {
        jindo.$A.prototype.filter = function(e, d) {
            var c = [];
            this.forEach(function(g, h, f) {
                if (e.call(d, g, h, f) === true) {
                    c[c.length] = g
                }
            });
            return jindo.$A(c)
        }
    }
    return this.filter(b, a)
};
jindo.$A.prototype.every = function(b, a) {
    if (typeof this._array.every != "undefined") {
        jindo.$A.prototype.every = function(d, c) {
            return this._array.every(d, c)
        }
    } else {
        jindo.$A.prototype.every = function(e, d) {
            var c = true;
            this.forEach(function(g, h, f) {
                if (e.call(d, g, h, f) === false) {
                    c = false;
                    jindo.$A.Break()
                }
            });
            return c
        }
    }
    return this.every(b, a)
};
jindo.$A.prototype.some = function(b, a) {
    if (typeof this._array.some != "undefined") {
        jindo.$A.prototype.some = function(d, c) {
            return this._array.some(d, c)
        }
    } else {
        jindo.$A.prototype.some = function(e, d) {
            var c = false;
            this.forEach(function(g, h, f) {
                if (e.call(d, g, h, f) === true) {
                    c = true;
                    jindo.$A.Break()
                }
            });
            return c
        }
    }
    return this.some(b, a)
};
jindo.$A.prototype.refuse = function(c) {
    var b = jindo.$A(Array.prototype.slice.apply(arguments));
    return this.filter(function(a, d) {
        return !b.has(a)
    })
};
jindo.$A.prototype.unique = function() {
    var e = this._array,
        c = [],
        d = e.length;
    var g, f;
    for (g = 0; g < d; g++) {
        for (f = 0; f < c.length; f++) {
            if (e[g] == c[f]) {
                break
            }
        }
        if (f >= c.length) {
            c[f] = e[g]
        }
    }
    this._array = c;
    return this
};
jindo.$Ajax = function(c, f) {
    var a = arguments.callee;
    if (!(this instanceof a)) {
        return new a(c, f)
    }

    function b() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest()
        } else {
            if (ActiveXObject) {
                try {
                    return new ActiveXObject("MSXML2.XMLHTTP")
                } catch (m) {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }
                return null
            }
        }
    }
    var l = location.toString();
    var g = "";
    try {
        g = l.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
    } catch (h) {}
    this._status = 0;
    this._url = c;
    this._options = new Object;
    this._headers = new Object;
    this._options = {
        type: "xhr",
        method: "post",
        proxy: "",
        timeout: 0,
        onload: function(e) {},
        onerror: null,
        ontimeout: function(e) {},
        jsonp_charset: "utf-8",
        callbackid: "",
        callbackname: "",
        sendheader: true,
        async: true,
        decode: true,
        postBody: false
    };
    this.option(f);
    if (jindo.$Ajax.CONFIG) {
        this.option(jindo.$Ajax.CONFIG)
    }
    var d = this._options;
    d.type = d.type.toLowerCase();
    d.method = d.method.toLowerCase();
    if (typeof window.__jindo2_callback == "undefined") {
        window.__jindo2_callback = new Array()
    }
    switch (d.type) {
        case "put":
        case "delete":
        case "get":
        case "post":
            d.method = d.type;
            d.type = "xhr";
        case "xhr":
            this._request = b();
            break;
        case "flash":
            if (!jindo.$Ajax.SWFRequest) {
                throw Error("Require jindo.$Ajax.SWFRequest")
            }
            this._request = new jindo.$Ajax.SWFRequest(jindo.$Fn(this.option, this).bind());
            break;
        case "jsonp":
            if (!jindo.$Ajax.JSONPRequest) {
                throw Error("Require jindo.$Ajax.JSONPRequest")
            }
            d.method = "get";
            this._request = new jindo.$Ajax.JSONPRequest(jindo.$Fn(this.option, this).bind());
            break;
        case "iframe":
            if (!jindo.$Ajax.FrameRequest) {
                throw Error("Require jindo.$Ajax.FrameRequest")
            }
            this._request = new jindo.$Ajax.FrameRequest(jindo.$Fn(this.option, this).bind());
            break
    }
};
jindo.$Ajax.prototype._onload = (function(a) {
    if (a) {
        return function() {
            var b = this._request.readyState == 4 && this._request.status == 200;
            var c;
            if (this._request.readyState == 4) {
                try {
                    if (this._request.status != 200 && typeof this._options.onerror == "function") {
                        if (!this._request.status == 0) {
                            this._options.onerror(jindo.$Ajax.Response(this._request))
                        }
                    } else {
                        if (!this._is_abort) {
                            c = this._options.onload(jindo.$Ajax.Response(this._request))
                        }
                    }
                } finally {
                    if (typeof this._oncompleted == "function") {
                        this._oncompleted(b, c)
                    }
                    if (this._options.type == "xhr") {
                        this.abort();
                        try {
                            delete this._request.onload
                        } catch (d) {
                            this._request.onload = undefined
                        }
                    }
                    delete this._request.onreadystatechange
                }
            }
        }
    } else {
        return function() {
            var b = this._request.readyState == 4 && this._request.status == 200;
            var c;
            if (this._request.readyState == 4) {
                try {
                    if (this._request.status != 200 && typeof this._options.onerror == "function") {
                        this._options.onerror(jindo.$Ajax.Response(this._request))
                    } else {
                        c = this._options.onload(jindo.$Ajax.Response(this._request))
                    }
                } finally {
                    this._status--;
                    if (typeof this._oncompleted == "function") {
                        this._oncompleted(b, c)
                    }
                }
            }
        }
    }
})(/MSIE/.test(window.navigator.userAgent));
jindo.$Ajax.prototype.request = function(c) {
    this._status++;
    var r = this;
    var l = this._request;
    var d = this._options;
    var h, q, o = [],
        h = "";
    var f = null;
    var b = this._url;
    this._is_abort = false;
    if (d.postBody && d.type.toUpperCase() == "XHR" && d.method.toUpperCase() != "GET") {
        if (typeof c == "string") {
            h = c
        } else {
            h = jindo.$Json(c).toString()
        }
    } else {
        if (typeof c == "undefined" || !c) {
            h = null
        } else {
            for (var g in c) {
                if (c.hasOwnProperty(g)) {
                    q = c[g];
                    if (typeof q == "function") {
                        q = q()
                    }
                    if (q instanceof Array || q instanceof jindo.$A) {
                        jindo.$A(q).forEach(function(s, a, t) {
                            o[o.length] = g + "=" + encodeURIComponent(s)
                        })
                    } else {
                        o[o.length] = g + "=" + encodeURIComponent(q)
                    }
                }
            }
            h = o.join("&")
        }
    }
    if (h && d.type.toUpperCase() == "XHR" && d.method.toUpperCase() == "GET") {
        if (b.indexOf("?") == -1) {
            b += "?"
        } else {
            b += "&"
        }
        b += h;
        h = null
    }
    l.open(d.method.toUpperCase(), b, d.async);

    function e() {
        var s = navigator.userAgent;
        var a = false;
        if ((s.indexOf("iPad") > -1) || (s.indexOf("iPhone") > -1) || (s.indexOf("iPod") > -1)) {
            if (s.match(/Version\/([0-9.]+)/)) {
                if (parseFloat(RegExp.$1, 10) >= 6) {
                    a = true
                }
            }
        }
        return a
    }
    if ((d.type.toUpperCase() == "XHR" && d.method.toUpperCase() == "GET" && /MSIE/.test(window.navigator.userAgent)) || e()) {
        l.setRequestHeader("If-Modified-Since", "Thu, 1 Jan 1970 00:00:00 GMT")
    }
    if (d.sendheader) {
        if (!this._headers["Content-Type"]) {
            l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8")
        }
        l.setRequestHeader("charset", "utf-8");
        for (var n in this._headers) {
            if (this._headers.hasOwnProperty(n)) {
                if (typeof this._headers[n] == "function") {
                    continue
                }
                l.setRequestHeader(n, String(this._headers[n]))
            }
        }
    }
    var m = navigator.userAgent;
    if (l.addEventListener && !(m.indexOf("Opera") > -1) && !(m.indexOf("MSIE") > -1)) {
        if (this._loadFunc) {
            l.removeEventListener("load", this._loadFunc, false)
        }
        this._loadFunc = function(a) {
            clearTimeout(f);
            f = undefined;
            r._onload(a)
        };
        l.addEventListener("load", this._loadFunc, false)
    } else {
        if (typeof l.onload != "undefined") {
            l.onload = function(a) {
                if (l.readyState == 4 && !r._is_abort) {
                    clearTimeout(f);
                    f = undefined;
                    r._onload(a)
                }
            }
        } else {
            if (window.navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1] == 6 && d.async) {
                var p = function(a) {
                    if (l.readyState == 4 && !r._is_abort) {
                        if (f) {
                            clearTimeout(f);
                            f = undefined
                        }
                        r._onload(a);
                        clearInterval(r._interval);
                        r._interval = undefined
                    }
                };
                this._interval = setInterval(p, 300)
            } else {
                l.onreadystatechange = function(a) {
                    if (l.readyState == 4) {
                        clearTimeout(f);
                        f = undefined;
                        r._onload(a)
                    }
                }
            }
        }
    }
    if (d.timeout > 0) {
        if (this._timer) {
            clearTimeout(this._timer)
        }
        f = setTimeout(function() {
            r._is_abort = true;
            if (r._interval) {
                clearInterval(r._interval);
                r._interval = undefined
            }
            try {
                l.abort()
            } catch (a) {}
            d.ontimeout(l);
            if (typeof r._oncompleted == "function") {
                r._oncompleted(false)
            }
        }, d.timeout * 1000);
        this._timer = f
    }
    this._test_url = b;
    l.send(h);
    return this
};
jindo.$Ajax.prototype.isIdle = function() {
    return this._status == 0
};
jindo.$Ajax.prototype.abort = function() {
    try {
        if (this._interval) {
            clearInterval(this._interval)
        }
        if (this._timer) {
            clearTimeout(this._timer)
        }
        this._interval = undefined;
        this._timer = undefined;
        this._is_abort = true;
        this._request.abort()
    } finally {
        this._status--
    }
    return this
};
jindo.$Ajax.prototype.option = function(b, c) {
    if (typeof b == "undefined") {
        return ""
    }
    if (typeof b == "string") {
        if (typeof c == "undefined") {
            return this._options[b]
        }
        this._options[b] = c;
        return this
    }
    try {
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                this._options[a] = b[a]
            }
        }
    } catch (d) {}
    return this
};
jindo.$Ajax.prototype.header = function(b, c) {
    if (typeof b == "undefined") {
        return ""
    }
    if (typeof b == "string") {
        if (typeof c == "undefined") {
            return this._headers[b]
        }
        this._headers[b] = c;
        return this
    }
    try {
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                this._headers[a] = b[a]
            }
        }
    } catch (d) {}
    return this
};
jindo.$Ajax.Response = function(a) {
    if (this === jindo.$Ajax) {
        return new jindo.$Ajax.Response(a)
    }
    this._response = a
};
jindo.$Ajax.Response.prototype.xml = function() {
    return this._response.responseXML
};
jindo.$Ajax.Response.prototype.text = function() {
    return this._response.responseText
};
jindo.$Ajax.Response.prototype.status = function() {
    return this._response.status
};
jindo.$Ajax.Response.prototype.readyState = function() {
    return this._response.readyState
};
jindo.$Ajax.Response.prototype.json = function() {
    if (this._response.responseJSON) {
        return this._response.responseJSON
    } else {
        if (this._response.responseText) {
            try {
                return eval("(" + this._response.responseText + ")")
            } catch (e) {
                return {}
            }
        }
    }
    return {}
};
jindo.$Ajax.Response.prototype.header = function(a) {
    if (typeof a == "string") {
        return this._response.getResponseHeader(a)
    }
    return this._response.getAllResponseHeaders()
};
jindo.$Ajax.RequestBase = jindo.$Class({
    _respHeaderString: "",
    callbackid: "",
    callbackname: "",
    responseXML: null,
    responseJSON: null,
    responseText: "",
    status: 404,
    readyState: 0,
    $init: function(a) {},
    onload: function() {},
    abort: function() {},
    open: function() {},
    send: function() {},
    setRequestHeader: function(a, b) {
        this._headers[a] = b
    },
    getResponseHeader: function(a) {
        return this._respHeaders[a] || ""
    },
    getAllResponseHeaders: function() {
        return this._respHeaderString
    },
    _getCallbackInfo: function() {
        var b = "";
        if (this.option("callbackid") != "") {
            var a = 0;
            do {
                b = "_" + this.option("callbackid") + "_" + a;
                a++
            } while (window.__jindo2_callback[b])
        } else {
            do {
                b = "_" + Math.floor(Math.random() * 10000)
            } while (window.__jindo2_callback[b])
        }
        if (this.option("callbackname") == "") {
            this.option("callbackname", "_callback")
        }
        return {
            callbackname: this.option("callbackname"),
            id: b,
            name: "window.__jindo2_callback." + b
        }
    }
});
jindo.$Ajax.JSONPRequest = jindo.$Class({
    _headers: {},
    _respHeaders: {},
    _script: null,
    _onerror: null,
    $init: function(a) {
        this.option = a
    },
    _callback: function(b) {
        if (this._onerror) {
            clearTimeout(this._onerror);
            this._onerror = null
        }
        var a = this;
        this.responseJSON = b;
        this.onload(this);
        setTimeout(function() {
            a.abort()
        }, 10)
    },
    abort: function() {
        if (this._script) {
            try {
                this._script.parentNode.removeChild(this._script)
            } catch (a) {}
        }
    },
    open: function(b, a) {
        this.responseJSON = null;
        this._url = a
    },
    send: function(e) {
        var c = this;
        var f = this._getCallbackInfo();
        var b = document.getElementsByTagName("head")[0];
        this._script = jindo.$("<script>");
        this._script.type = "text/javascript";
        this._script.charset = this.option("jsonp_charset");
        if (b) {
            b.appendChild(this._script)
        } else {
            if (document.body) {
                document.body.appendChild(this._script)
            }
        }
        window.__jindo2_callback[f.id] = function(g) {
            try {
                c.readyState = 4;
                c.status = 200;
                c._callback(g)
            } finally {
                delete window.__jindo2_callback[f.id]
            }
        };
        var d = jindo.$Agent(navigator);
        if (d.navigator().ie || d.navigator().opera) {
            this._script.onreadystatechange = function() {
                if (this.readyState == "loaded") {
                    if (!c.responseJSON) {
                        c.readyState = 4;
                        c.status = 500;
                        c._onerror = setTimeout(function() {
                            c._callback(null)
                        }, 200)
                    }
                    this.onreadystatechange = null
                }
            }
        } else {
            this._script.onload = function() {
                if (!c.responseJSON) {
                    c.readyState = 4;
                    c.status = 500;
                    c._onerror = setTimeout(function() {
                        c._callback(null)
                    }, 200)
                }
                this.onload = null;
                this.onerror = null
            };
            this._script.onerror = function() {
                if (!c.responseJSON) {
                    c.readyState = 4;
                    c.status = 404;
                    c._onerror = setTimeout(function() {
                        c._callback(null)
                    }, 200)
                }
                this.onerror = null;
                this.onload = null
            }
        }
        var a = "&";
        if (this._url.indexOf("?") == -1) {
            a = "?"
        }
        if (e) {
            e = "&" + e
        } else {
            e = ""
        }
        this._test_url = this._url + a + f.callbackname + "=" + f.name + e;
        this._script.src = this._url + a + f.callbackname + "=" + f.name + e
    }
}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest = jindo.$Class({
    $init: function(a) {
        this.option = a
    },
    _headers: {},
    _respHeaders: {},
    _getFlashObj: function() {
        var a = jindo.$Agent(window.navigator).navigator();
        var b;
        if (a.ie && a.version == 9) {
            b = document.getElementById(jindo.$Ajax.SWFRequest._tmpId)
        } else {
            b = window.document[jindo.$Ajax.SWFRequest._tmpId]
        }
        return (this._getFlashObj = function() {
            return b
        })()
    },
    _callback: function(a, b, d) {
        this.readyState = 4;
        if ((typeof a).toLowerCase() == "number") {
            this.status = a
        } else {
            if (a == true) {
                this.status = 200
            }
        }
        if (this.status == 200) {
            if (typeof b == "string") {
                try {
                    this.responseText = this.option("decode") ? decodeURIComponent(b) : b;
                    if (!this.responseText || this.responseText == "") {
                        this.responseText = b
                    }
                } catch (c) {
                    if (c.name == "URIError") {
                        this.responseText = b;
                        if (!this.responseText || this.responseText == "") {
                            this.responseText = b
                        }
                    }
                }
            }
            if (typeof d == "object") {
                this._respHeaders = d
            }
        }
        this.onload(this)
    },
    open: function(c, a) {
        var b = /https?:\/\/([a-z0-9_\-\.]+)/i;
        this._url = a;
        this._method = c
    },
    send: function(g) {
        this.responseXML = false;
        this.responseText = "";
        var b = this;
        var e = {};
        var h = this._getCallbackInfo();
        var c = this._getFlashObj();

        function d(n) {
            switch (typeof n) {
                case "string":
                    return '"' + n.replace(/\"/g, '\\"') + '"';
                    break;
                case "number":
                    return n;
                    break;
                case "object":
                    var o = "",
                        m = [];
                    if (n instanceof Array) {
                        for (var p = 0; p < n.length; p++) {
                            m[p] = d(n[p])
                        }
                        o = "[" + m.join(",") + "]"
                    } else {
                        for (var f in n) {
                            if (n.hasOwnProperty(f)) {
                                m[m.length] = d(f) + ":" + d(n[f])
                            }
                        }
                        o = "{" + m.join(",") + "}"
                    }
                    return o;
                default:
                    return '""'
            }
        }
        g = (g || "").split("&");
        for (var a = 0; a < g.length; a++) {
            pos = g[a].indexOf("=");
            key = g[a].substring(0, pos);
            val = g[a].substring(pos + 1);
            e[key] = decodeURIComponent(val)
        }
        this._current_callback_id = h.id;
        window.__jindo2_callback[h.id] = function(m, f) {
            try {
                b._callback(m, f)
            } finally {
                delete window.__jindo2_callback[h.id]
            }
        };
        var l = {
            url: this._url,
            type: this._method,
            data: e,
            charset: "UTF-8",
            callback: h.name,
            header_json: this._headers
        };
        c.requestViaFlash(d(l))
    },
    abort: function() {
        if (this._current_callback_id) {
            window.__jindo2_callback[this._current_callback_id] = function() {
                delete window.__jindo2_callback[info.id]
            }
        }
    }
}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest.write = function(a) {
    if (typeof a == "undefined") {
        a = "./ajax.swf"
    }
    jindo.$Ajax.SWFRequest._tmpId = "tmpSwf" + (new Date()).getMilliseconds() + Math.floor(Math.random() * 100000);
    var b = "jindo.$Ajax.SWFRequest.loaded";
    jindo.$Ajax._checkFlashLoad();
    document.write('<div style="position:absolute;top:-1000px;left:-1000px"><object id="' + jindo.$Ajax.SWFRequest._tmpId + '" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="' + a + '"><param name = "FlashVars" value = "activeCallback=' + b + '" /><param name = "allowScriptAccess" value = "always" /><embed name="' + jindo.$Ajax.SWFRequest._tmpId + '" src="' + a + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback=' + b + '"></embed></object></div>')
};
jindo.$Ajax._checkFlashLoad = function() {
    jindo.$Ajax._checkFlashKey = setTimeout(function() {}, 5000);
    jindo.$Ajax._checkFlashLoad = function() {}
};
jindo.$Ajax.SWFRequest.activeFlash = false;
jindo.$Ajax.SWFRequest.loaded = function() {
    clearTimeout(jindo.$Ajax._checkFlashKey);
    jindo.$Ajax.SWFRequest.activeFlash = true
};
jindo.$Ajax.FrameRequest = jindo.$Class({
    _headers: {},
    _respHeaders: {},
    _frame: null,
    _domain: "",
    $init: function(a) {
        this.option = a
    },
    _callback: function(d, b, c) {
        var a = this;
        this.readyState = 4;
        this.status = 200;
        this.responseText = b;
        this._respHeaderString = c;
        c.replace(/^([\w\-]+)\s*:\s*(.+)$/m, function(f, e, g) {
            a._respHeaders[e] = g
        });
        this.onload(this);
        setTimeout(function() {
            a.abort()
        }, 10)
    },
    abort: function() {
        if (this._frame) {
            try {
                this._frame.parentNode.removeChild(this._frame)
            } catch (a) {}
        }
    },
    open: function(d, a) {
        var b = /https?:\/\/([a-z0-9_\-\.]+)/i;
        var c = document.location.toString().match(b);
        this._method = d;
        this._url = a;
        this._remote = String(a).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0];
        this._frame = null;
        this._domain = (c[1] != document.domain) ? document.domain : ""
    },
    send: function(d) {
        this.responseXML = "";
        this.responseText = "";
        var m = this;
        var l = /https?:\/\/([a-z0-9_\-\.]+)/i;
        var c = this._getCallbackInfo();
        var a;
        var b = [];
        b.push(this._remote + "/ajax_remote_callback.html?method=" + this._method);
        var e = new Array;
        window.__jindo2_callback[c.id] = function(p, n, o) {
            try {
                m._callback(p, n, o)
            } finally {
                delete window.__jindo2_callback[c.id]
            }
        };
        for (var h in this._headers) {
            if (this._headers.hasOwnProperty(h)) {
                e[e.length] = "'" + h + "':'" + this._headers[h] + "'"
            }
        }
        e = "{" + e.join(",") + "}";
        b.push("&id=" + c.id);
        b.push("&header=" + encodeURIComponent(e));
        b.push("&proxy=" + encodeURIComponent(this.option("proxy")));
        b.push("&domain=" + this._domain);
        b.push("&url=" + encodeURIComponent(this._url.replace(l, "")));
        b.push("#" + encodeURIComponent(d));
        var g = this._frame = jindo.$("<iframe>");
        g.style.position = "absolute";
        g.style.visibility = "hidden";
        g.style.width = "1px";
        g.style.height = "1px";
        var f = document.body || document.documentElement;
        if (f.firstChild) {
            f.insertBefore(g, f.firstChild)
        } else {
            f.appendChild(g)
        }
        g.src = b.join("")
    }
}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.Queue = function(b) {
    var a = arguments.callee;
    if (!(this instanceof a)) {
        return new a(b)
    }
    this._options = {
        async: false,
        useResultAsParam: false,
        stopOnFailure: false
    };
    this.option(b);
    this._queue = []
};
jindo.$Ajax.Queue.prototype.option = function(b, c) {
    if (typeof b == "undefined") {
        return ""
    }
    if (typeof b == "string") {
        if (typeof c == "undefined") {
            return this._options[b]
        }
        this._options[b] = c;
        return this
    }
    try {
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                this._options[a] = b[a]
            }
        }
    } catch (d) {}
    return this
};
jindo.$Ajax.Queue.prototype.add = function(b, a) {
    this._queue.push({
        obj: b,
        param: a
    })
};
jindo.$Ajax.Queue.prototype.request = function() {
    if (this.option("async")) {
        this._requestAsync()
    } else {
        this._requestSync(0)
    }
};
jindo.$Ajax.Queue.prototype._requestSync = function(d, c) {
    var b = this;
    if (this._queue.length > d + 1) {
        this._queue[d].obj._oncompleted = function(e, h) {
            if (!b.option("stopOnFailure") || e) {
                b._requestSync(d + 1, h)
            }
        }
    }
    var g = this._queue[d].param || {};
    if (this.option("useResultAsParam") && c) {
        try {
            for (var a in c) {
                if (typeof g[a] == "undefined" && c.hasOwnProperty(a)) {
                    g[a] = c[a]
                }
            }
        } catch (f) {}
    }
    this._queue[d].obj.request(g)
};
jindo.$Ajax.Queue.prototype._requestAsync = function() {
    for (var a = 0; a < this._queue.length; a++) {
        this._queue[a].obj.request(this._queue[a].param)
    }
};
jindo.$H = function(c) {
    var a = arguments.callee;
    if (typeof c == "undefined") {
        c = new Object
    }
    if (c instanceof a) {
        return c
    }
    if (!(this instanceof a)) {
        return new a(c)
    }
    this._table = {};
    for (var b in c) {
        if (c.hasOwnProperty(b)) {
            this._table[b] = c[b]
        }
    }
};
jindo.$H.prototype.$value = function() {
    return this._table
};
jindo.$H.prototype.$ = function(a, b) {
    if (typeof b == "undefined") {
        return this._table[a]
    }
    this._table[a] = b;
    return this
};
jindo.$H.prototype.length = function() {
    var b = 0;
    for (var a in this._table) {
        if (this._table.hasOwnProperty(a)) {
            if (typeof Object.prototype[a] != "undeifned" && Object.prototype[a] === this._table[a]) {
                continue
            }
            b++
        }
    }
    return b
};
jindo.$H.prototype.forEach = function(g, b) {
    var c = this._table;
    var d = this.constructor;
    for (var a in c) {
        if (c.hasOwnProperty(a)) {
            if (!c.propertyIsEnumerable(a)) {
                continue
            }
            try {
                g.call(b, c[a], a, c)
            } catch (f) {
                if (f instanceof d.Break) {
                    break
                }
                if (f instanceof d.Continue) {
                    continue
                }
                throw f
            }
        }
    }
    return this
};
jindo.$H.prototype.filter = function(c, a) {
    var b = jindo.$H();
    this.forEach(function(e, d, f) {
        if (c.call(a, e, d, f) === true) {
            b.add(d, e)
        }
    });
    return b
};
jindo.$H.prototype.map = function(c, a) {
    var b = this._table;
    this.forEach(function(e, d, f) {
        b[d] = c.call(a, e, d, f)
    });
    return this
};
jindo.$H.prototype.add = function(a, b) {
    this._table[a] = b;
    return this
};
jindo.$H.prototype.remove = function(a) {
    if (typeof this._table[a] == "undefined") {
        return null
    }
    var b = this._table[a];
    delete this._table[a];
    return b
};
jindo.$H.prototype.search = function(b) {
    var a = false;
    this.forEach(function(d, c, e) {
        if (d === b) {
            a = c;
            jindo.$H.Break()
        }
    });
    return a
};
jindo.$H.prototype.hasKey = function(b) {
    var a = false;
    return (typeof this._table[b] != "undefined")
};
jindo.$H.prototype.hasValue = function(a) {
    return (this.search(a) !== false)
};
jindo.$H.prototype.sort = function() {
    var e = new Object;
    var b = this.values();
    var c = false;
    b.sort();
    for (var d = 0; d < b.length; d++) {
        c = this.search(b[d]);
        e[c] = b[d];
        delete this._table[c]
    }
    this._table = e;
    return this
};
jindo.$H.prototype.ksort = function() {
    var d = new Object;
    var b = this.keys();
    b.sort();
    for (var c = 0; c < b.length; c++) {
        d[b[c]] = this._table[b[c]]
    }
    this._table = d;
    return this
};
jindo.$H.prototype.keys = function() {
    var b = new Array;
    for (var a in this._table) {
        if (this._table.hasOwnProperty(a)) {
            b.push(a)
        }
    }
    return b
};
jindo.$H.prototype.values = function() {
    var b = [];
    for (var a in this._table) {
        if (this._table.hasOwnProperty(a)) {
            b[b.length] = this._table[a]
        }
    }
    return b
};
jindo.$H.prototype.toQueryString = function() {
    var c = [],
        d = null,
        a = 0;
    for (var b in this._table) {
        if (this._table.hasOwnProperty(b)) {
            if (typeof(d = this._table[b]) == "object" && d.constructor == Array) {
                for (i = 0; i < d.length; i++) {
                    c[c.length] = encodeURIComponent(b) + "[]=" + encodeURIComponent(d[i] + "")
                }
            } else {
                c[c.length] = encodeURIComponent(b) + "=" + encodeURIComponent(this._table[b] + "")
            }
        }
    }
    return c.join("&")
};
jindo.$H.prototype.empty = function() {
    var b = this.keys();
    for (var a = 0; a < b.length; a++) {
        delete this._table[b[a]]
    }
    return this
};
jindo.$H.Break = function() {
    if (!(this instanceof arguments.callee)) {
        throw new arguments.callee
    }
};
jindo.$H.Continue = function() {
    if (!(this instanceof arguments.callee)) {
        throw new arguments.callee
    }
};
jindo.$Json = function(b) {
    var a = arguments.callee;
    if (typeof b == "undefined") {
        b = {}
    }
    if (b instanceof a) {
        return b
    }
    if (!(this instanceof a)) {
        return new a(b)
    }
    if (typeof b == "string") {
        this._object = jindo.$Json._oldMakeJSON(b)
    } else {
        this._object = b
    }
};
jindo.$Json._oldMakeJSON = function(sObject) {
    try {
        if (/^(?:\s*)[\{\[]/.test(sObject)) {
            sObject = eval("(" + sObject + ")")
        } else {
            sObject = sObject
        }
    } catch (e) {
        sObject = {}
    }
    return sObject
};
jindo.$Json.fromXML = function(a) {
    var d = {};
    var m = /\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig;
    var g = /^[0-9]+(?:\.[0-9]+)?$/;
    var h = {
        "&amp;": "&",
        "&nbsp;": " ",
        "&quot;": '"',
        "&lt;": "<",
        "&gt;": ">"
    };
    var b = {
        tags: ["/"],
        stack: [d]
    };
    var l = function(n) {
        if (typeof n == "undefined") {
            return ""
        }
        return n.replace(/&[a-z]+;/g, function(o) {
            return (typeof h[o] == "string") ? h[o] : o
        })
    };
    var e = function(n, o) {
        n.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g, function(q, p, s, r) {
            o[p] = l((s ? s.replace(/\\"/g, '"') : undefined) || (r ? r.replace(/\\'/g, "'") : undefined))
        })
    };
    var c = function(p) {
        for (var n in p) {
            if (p.hasOwnProperty(n)) {
                if (Object.prototype[n]) {
                    continue
                }
                return false
            }
        }
        return true
    };
    var f = function(v, u, s, r, q, p) {
        var D, C = "";
        var B = b.stack.length - 1;
        if (typeof u == "string" && u) {
            if (u.substr(0, 1) != "/") {
                var A = (typeof s == "string" && s);
                var y = (typeof r == "string" && r);
                var t = (!A && y) ? "" : {};
                D = b.stack[B];
                if (typeof D[u] == "undefined") {
                    D[u] = t;
                    D = b.stack[B + 1] = D[u]
                } else {
                    if (D[u] instanceof Array) {
                        var w = D[u].length;
                        D[u][w] = t;
                        D = b.stack[B + 1] = D[u][w]
                    } else {
                        D[u] = [D[u], t];
                        D = b.stack[B + 1] = D[u][1]
                    }
                }
                if (A) {
                    e(s, D)
                }
                b.tags[B + 1] = u;
                if (y) {
                    b.tags.length--;
                    b.stack.length--
                }
            } else {
                b.tags.length--;
                b.stack.length--
            }
        } else {
            if (typeof q == "string" && q) {
                C = q
            } else {
                if (typeof p == "string" && p) {
                    C = l(p)
                }
            }
        }
        if (C.replace(/^\s+/g, "").length > 0) {
            var z = b.stack[B - 1];
            var E = b.tags[B];
            if (g.test(C)) {
                C = parseFloat(C)
            } else {
                if (C == "true") {
                    C = true
                } else {
                    if (C == "false") {
                        C = false
                    }
                }
            }
            if (typeof z == "undefined") {
                return
            }
            if (z[E] instanceof Array) {
                var n = z[E];
                if (typeof n[n.length - 1] == "object" && !c(n[n.length - 1])) {
                    n[n.length - 1].$cdata = C;
                    n[n.length - 1].toString = function() {
                        return C
                    }
                } else {
                    n[n.length - 1] = C
                }
            } else {
                if (typeof z[E] == "object" && !c(z[E])) {
                    z[E].$cdata = C;
                    z[E].toString = function() {
                        return C
                    }
                } else {
                    z[E] = C
                }
            }
        }
    };
    a = a.replace(/<(\?|\!-)[^>]*>/g, "");
    a.replace(m, f);
    return jindo.$Json(d)
};
jindo.$Json.prototype.get = function(f) {
    var c = this._object;
    var a = f.split("/");
    var s = /^([\w:\-]+)\[([0-9]+)\]$/;
    var n = [
            [c]
        ],
        r = n[0];
    var l = a.length,
        d, q, b, g, m;
    for (var h = 0; h < l; h++) {
        if (a[h] == "." || a[h] == "") {
            continue
        }
        if (a[h] == "..") {
            n.length--
        } else {
            b = [];
            q = -1;
            d = r.length;
            if (d == 0) {
                return []
            }
            if (s.test(a[h])) {
                q = +RegExp.$2
            }
            for (g = 0; g < d; g++) {
                m = r[g][a[h]];
                if (typeof m == "undefined") {
                    continue
                }
                if (m instanceof Array) {
                    if (q > -1) {
                        if (q < m.length) {
                            b[b.length] = m[q]
                        }
                    } else {
                        b = b.concat(m)
                    }
                } else {
                    if (q == -1) {
                        b[b.length] = m
                    }
                }
            }
            n[n.length] = b
        }
        r = n[n.length - 1]
    }
    return r
};
jindo.$Json.prototype.toString = function() {
    if (window.JSON && window.JSON.stringify) {
        jindo.$Json.prototype.toString = function() {
            try {
                return window.JSON.stringify(this._object)
            } catch (a) {
                return jindo.$Json._oldToString(this._object)
            }
        }
    } else {
        jindo.$Json.prototype.toString = function() {
            return jindo.$Json._oldToString(this._object)
        }
    }
    return this.toString()
};
jindo.$Json._oldToString = function(a) {
    var b = {
        $: function(c) {
            if (typeof c == "object" && c == null) {
                return "null"
            }
            if (typeof c == "undefined") {
                return '""'
            }
            if (typeof c == "boolean") {
                return c ? "true" : "false"
            }
            if (typeof c == "string") {
                return this.s(c)
            }
            if (typeof c == "number") {
                return c
            }
            if (c instanceof Array) {
                return this.a(c)
            }
            if (c instanceof Object) {
                return this.o(c)
            }
        },
        s: function(d) {
            var f = {
                '"': '\\"',
                "\\": "\\\\",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t"
            };
            var g = function(c) {
                return (typeof f[c] != "undefined") ? f[c] : c
            };
            return '"' + d.replace(/[\\"'\n\r\t]/g, g) + '"'
        },
        a: function(d) {
            var f = "[",
                h = "",
                g = d.length;
            for (var e = 0; e < g; e++) {
                if (typeof d[e] == "function") {
                    continue
                }
                f += h + this.$(d[e]);
                if (!h) {
                    h = ","
                }
            }
            return f + "]"
        },
        o: function(f) {
            f = jindo.$H(f).ksort().$value();
            var e = "{",
                g = "";
            for (var d in f) {
                if (f.hasOwnProperty(d)) {
                    if (typeof f[d] == "function") {
                        continue
                    }
                    e += g + this.s(d) + ":" + this.$(f[d]);
                    if (!g) {
                        g = ","
                    }
                }
            }
            return e + "}"
        }
    };
    return b.$(a)
};
jindo.$Json.prototype.toXML = function() {
    var a = function(l, e) {
        var h = function(n, m) {
            return "<" + e + (m || "") + ">" + n + "</" + e + ">"
        };
        switch (typeof l) {
            case "undefined":
            case "null":
                return h("");
            case "number":
                return h(l);
            case "string":
                if (l.indexOf("<") < 0) {
                    return h(l.replace(/&/g, "&amp;"))
                } else {
                    return h("<![CDATA[" + l + "]]>")
                }
                case "boolean":
                    return h(String(l));
                case "object":
                    var f = "";
                    if (l instanceof Array) {
                        var d = l.length;
                        for (var g = 0; g < d; g++) {
                            f += a(l[g], e)
                        }
                    } else {
                        var c = "";
                        for (var b in l) {
                            if (l.hasOwnProperty(b)) {
                                if (b == "$cdata" || typeof l[b] == "function") {
                                    continue
                                }
                                f += a(l[b], b)
                            }
                        }
                        if (e) {
                            f = h(f, c)
                        }
                    }
                    return f
        }
    };
    return a(this._object, "")
};
jindo.$Json.prototype.toObject = function() {
    return this._object
};
jindo.$Json.prototype.compare = function(a) {
    return jindo.$Json._oldToString(this._object).toString() == jindo.$Json._oldToString(jindo.$Json(a).$value()).toString()
};
jindo.$Json.prototype.$value = jindo.$Json.prototype.toObject;
jindo.$Cookie = function() {
    var a = arguments.callee;
    var b = a._cached;
    if (a._cached) {
        return a._cached
    }
    if (!(this instanceof a)) {
        return new a
    }
    if (typeof a._cached == "undefined") {
        a._cached = this
    }
};
jindo.$Cookie.prototype.keys = function() {
    var c = document.cookie.split(";");
    var e = /^\s+|\s+$/g;
    var b = new Array;
    for (var d = 0; d < c.length; d++) {
        b[b.length] = c[d].substr(0, c[d].indexOf("=")).replace(e, "")
    }
    return b
};
jindo.$Cookie.prototype.get = function(d) {
    var a = document.cookie.split(/\s*;\s*/);
    var c = new RegExp("^(\\s*" + d + "\\s*=)");
    for (var b = 0; b < a.length; b++) {
        if (c.test(a[b])) {
            return unescape(a[b].substr(RegExp.$1.length))
        }
    }
    return null
};
jindo.$Cookie.prototype.set = function(e, f, d, a, b) {
    var c = "";
    if (typeof d == "number") {
        c = ";expires=" + (new Date((new Date()).getTime() + d * 1000 * 60 * 60 * 24)).toGMTString()
    }
    if (typeof a == "undefined") {
        a = ""
    }
    if (typeof b == "undefined") {
        b = "/"
    }
    document.cookie = e + "=" + escape(f) + c + "; path=" + b + (a ? "; domain=" + a : "");
    return this
};
jindo.$Cookie.prototype.remove = function(c, a, b) {
    if (this.get(c) != null) {
        this.set(c, "", -1, a, b)
    }
    return this
};
jindo.$Element = function(c) {
    var b = arguments.callee;
    if (c && c instanceof b) {
        return c
    }
    if (c === null || typeof c == "undefined") {
        return null
    } else {
        c = jindo.$(c);
        if (c === null) {
            return null
        }
    }
    if (!(this instanceof b)) {
        return new b(c)
    }
    this._element = (typeof c == "string") ? jindo.$(c) : c;
    var a = this._element.tagName;
    this.tag = (typeof a != "undefined") ? a.toLowerCase() : ""
};
var _j_ag = navigator.userAgent;
var IS_IE = _j_ag.indexOf("MSIE") > -1;
var IS_FF = _j_ag.indexOf("Firefox") > -1;
var IS_OP = _j_ag.indexOf("Opera") > -1;
var IS_SF = _j_ag.indexOf("Apple") > -1;
var IS_CH = _j_ag.indexOf("Chrome") > -1;
jindo.$Element.prototype.$value = function() {
    return this._element
};
jindo.$Element.prototype.visible = function(a, b) {
    if (typeof a != "undefined") {
        this[a ? "show" : "hide"](b);
        return this
    }
    return (this.css("display") != "none")
};
jindo.$Element.prototype.show = function(g) {
    var f = this._element.style;
    var a = "block";
    var l = {
        p: a,
        div: a,
        form: a,
        h1: a,
        h2: a,
        h3: a,
        h4: a,
        ol: a,
        ul: a,
        fieldset: a,
        td: "table-cell",
        th: "table-cell",
        li: "list-item",
        table: "table",
        thead: "table-header-group",
        tbody: "table-row-group",
        tfoot: "table-footer-group",
        tr: "table-row",
        col: "table-column",
        colgroup: "table-column-group",
        caption: "table-caption",
        dl: a,
        dt: a,
        dd: a
    };
    try {
        if (g) {
            f.display = g
        } else {
            var d = l[this.tag];
            f.display = d || "inline"
        }
    } catch (h) {
        f.display = "block"
    }
    return this
};
jindo.$Element.prototype.hide = function() {
    this._element.style.display = "none";
    return this
};
jindo.$Element.prototype.toggle = function(a) {
    this[this.visible() ? "hide" : "show"](a);
    return this
};
jindo.$Element.prototype.opacity = function(d) {
    var c, f = this._element,
        a = (this._getCss(f, "display") != "none");
    d = parseFloat(d);
    f.style.zoom = 1;
    if (!isNaN(d)) {
        d = Math.max(Math.min(d, 1), 0);
        if (typeof f.filters != "undefined") {
            d = Math.ceil(d * 100);
            if (typeof f.filters != "unknown" && typeof f.filters.alpha != "undefined") {
                f.filters.alpha.opacity = d
            } else {
                f.style.filter = (f.style.filter + " alpha(opacity=" + d + ")")
            }
        } else {
            f.style.opacity = d
        }
        return d
    }
    if (typeof f.filters != "undefined") {
        c = (typeof f.filters.alpha == "undefined") ? (a ? 100 : 0) : f.filters.alpha.opacity;
        c = c / 100
    } else {
        c = parseFloat(f.style.opacity);
        if (isNaN(c)) {
            c = a ? 1 : 0
        }
    }
    return c
};
jindo.$Element.prototype.css = function(f, u) {
    var n = this._element;
    var m = (typeof u);
    if (f == "opacity") {
        return m == "undefined" ? this.opacity() : this.opacity(u)
    }
    var w = (typeof f);
    if (w == "string") {
        var r;
        if (m == "string" || m == "number") {
            var g = {};
            g[f] = u;
            f = g
        } else {
            var o = this._getCss;
            if ((IS_FF || IS_OP) && (f == "backgroundPositionX" || f == "backgroundPositionY")) {
                var b = o(n, "backgroundPosition").split(/\s+/);
                return (f == "backgroundPositionX") ? b[0] : b[1]
            }
            if (IS_IE && f == "backgroundPosition") {
                return o(n, "backgroundPositionX") + " " + o(n, "backgroundPositionY")
            }
            if ((IS_FF || IS_SF || IS_CH) && (f == "padding" || f == "margin")) {
                var q = o(n, f + "Top");
                var t = o(n, f + "Right");
                var a = o(n, f + "Bottom");
                var c = o(n, f + "Left");
                if ((q == t) && (a == c)) {
                    return q
                } else {
                    if (q == a) {
                        if (t == c) {
                            return q + " " + t
                        } else {
                            return q + " " + t + " " + a + " " + c
                        }
                    } else {
                        return q + " " + t + " " + a + " " + c
                    }
                }
            }
            return o(n, f)
        }
    }
    var l = jindo.$H;
    if (typeof l != "undefined" && f instanceof l) {
        f = f._table
    }
    if (typeof f == "object") {
        var s, p;
        for (var d in f) {
            if (f.hasOwnProperty(d)) {
                s = f[d];
                p = (typeof s);
                if (p != "string" && p != "number") {
                    continue
                }
                if (d == "opacity") {
                    p == "undefined" ? this.opacity() : this.opacity(s);
                    continue
                }
                if (d == "cssFloat" && IS_IE) {
                    d = "styleFloat"
                }
                if ((IS_FF || IS_OP) && (d == "backgroundPositionX" || d == "backgroundPositionY")) {
                    var b = this.css("backgroundPosition").split(/\s+/);
                    s = d == "backgroundPositionX" ? s + " " + b[1] : b[0] + " " + s;
                    this._setCss(n, "backgroundPosition", s)
                } else {
                    this._setCss(n, d, s)
                }
            }
        }
    }
    return this
};
jindo.$Element.prototype._getCss = function(c, b) {
    var a;
    if (c.currentStyle) {
        a = function(l, h) {
            try {
                if (h == "cssFloat") {
                    h = "styleFloat"
                }
                var g = l.style[h];
                if (g) {
                    return g
                } else {
                    var d = l.currentStyle;
                    if (d) {
                        return d[h]
                    }
                }
                return g
            } catch (f) {
                throw new Error((l.tagName || "document") + "는 css를 사용 할수 없습니다.")
            }
        }
    } else {
        if (window.getComputedStyle) {
            a = function(l, h) {
                try {
                    if (h == "cssFloat") {
                        h = "float"
                    }
                    var m = l.ownerDocument || l.document || document;
                    var f = (l.style[h] || m.defaultView.getComputedStyle(l, null).getPropertyValue(h.replace(/([A-Z])/g, "-$1").toLowerCase()));
                    if (h == "textDecoration") {
                        f = f.replace(",", "")
                    }
                    return f
                } catch (g) {
                    throw new Error((l.tagName || "document") + "는 css를 사용 할수 없습니다.")
                }
            }
        } else {
            a = function(g, f) {
                try {
                    if (f == "cssFloat" && IS_IE) {
                        f = "styleFloat"
                    }
                    return g.style[f]
                } catch (d) {
                    throw new Error((g.tagName || "document") + "는 css를 사용 할수 없습니다.")
                }
            }
        }
    }
    jindo.$Element.prototype._getCss = a;
    return a(c, b)
};
jindo.$Element.prototype._setCss = function(c, b, a) {
    if (("#top#left#right#bottom#").indexOf(b + "#") > 0 && (typeof a == "number" || (/\d$/.test(a)))) {
        c.style[b] = parseInt(a, 10) + "px"
    } else {
        c.style[b] = a
    }
};
jindo.$Element.prototype.attr = function(d, f) {
    var c = this._element;
    if (typeof d == "string") {
        if (typeof f != "undefined") {
            var b = {};
            b[d] = f;
            d = b
        } else {
            if (d == "class" || d == "className") {
                return c.className
            } else {
                if (d == "style") {
                    return c.style.cssText
                } else {
                    if (d == "checked" || d == "disabled") {
                        return !!c[d]
                    } else {
                        if (d == "value") {
                            return c.value
                        } else {
                            if (d == "href") {
                                return c.getAttribute(d, 2)
                            }
                        }
                    }
                }
            }
            return c.getAttribute(d)
        }
    }
    if (typeof jindo.$H != "undefined" && d instanceof jindo.$H) {
        d = d.$value()
    }
    if (typeof d == "object") {
        for (var a in d) {
            if (d.hasOwnProperty(a)) {
                if (typeof(f) != "undefined" && f === null) {
                    c.removeAttribute(a)
                } else {
                    if (a == "class" || a == "className") {
                        c.className = d[a]
                    } else {
                        if (a == "style") {
                            c.style.cssText = d[a]
                        } else {
                            if (a == "checked" || a == "disabled") {
                                c[a] = d[a]
                            } else {
                                if (a == "value") {
                                    c.value = d[a]
                                } else {
                                    c.setAttribute(a, d[a])
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return this
};
jindo.$Element.prototype.width = function(b) {
    if (typeof b == "number") {
        var c = this._element;
        c.style.width = b + "px";
        var d = c.offsetWidth;
        if (d != b && d !== 0) {
            var a = (b * 2 - d);
            if (a > 0) {
                c.style.width = a + "px"
            }
        }
        return this
    }
    return this._element.offsetWidth
};
jindo.$Element.prototype.height = function(a) {
    if (typeof a == "number") {
        var b = this._element;
        b.style.height = a + "px";
        var c = b.offsetHeight;
        if (c != a && c !== 0) {
            var a = (a * 2 - c);
            if (a > 0) {
                b.style.height = a + "px"
            }
        }
        return this
    }
    return this._element.offsetHeight
};
jindo.$Element.prototype.className = function(b) {
    var a = this._element;
    if (typeof b == "undefined") {
        return a.className
    }
    a.className = b;
    return this
};
jindo.$Element.prototype.hasClass = function(a) {
    if (this._element.classList) {
        jindo.$Element.prototype.hasClass = function(b) {
            return this._element.classList.contains(b)
        }
    } else {
        jindo.$Element.prototype.hasClass = function(b) {
            return (" " + this._element.className + " ").indexOf(" " + b + " ") > -1
        }
    }
    return this.hasClass(a)
};
jindo.$Element.prototype.addClass = function(a) {
    if (this._element.classList) {
        jindo.$Element.prototype.addClass = function(e) {
            var d = e.split(/\s+/);
            var b = this._element.classList;
            for (var c = d.length; c--;) {
                b.add(d[c])
            }
            return this
        }
    } else {
        jindo.$Element.prototype.addClass = function(g) {
            var d = this._element;
            var c = g.split(/\s+/);
            var f;
            for (var b = c.length - 1; b >= 0; b--) {
                f = c[b];
                if (!this.hasClass(f)) {
                    d.className = (d.className + " " + f).replace(/^\s+/, "")
                }
            }
            return this
        }
    }
    return this.addClass(a)
};
jindo.$Element.prototype.removeClass = function(a) {
    if (this._element.classList) {
        jindo.$Element.prototype.removeClass = function(e) {
            var b = this._element.classList;
            var d = e.split(" ");
            for (var c = d.length; c--;) {
                b.remove(d[c])
            }
            return this
        }
    } else {
        jindo.$Element.prototype.removeClass = function(g) {
            var d = this._element;
            var c = g.split(/\s+/);
            var f;
            for (var b = c.length - 1; b >= 0; b--) {
                f = c[b];
                if (this.hasClass(f)) {
                    d.className = (" " + d.className.replace(/\s+$/, "").replace(/^\s+/, "") + " ").replace(" " + f + " ", " ").replace(/\s+$/, "").replace(/^\s+/, "")
                }
            }
            return this
        }
    }
    return this.removeClass(a)
};
jindo.$Element.prototype.toggleClass = function(b, a) {
    if (this._element.classList) {
        jindo.$Element.prototype.toggleClass = function(d, c) {
            if (typeof c == "undefined") {
                this._element.classList.toggle(d)
            } else {
                if (this.hasClass(d)) {
                    this.removeClass(d);
                    this.addClass(c)
                } else {
                    this.addClass(d);
                    this.removeClass(c)
                }
            }
            return this
        }
    } else {
        jindo.$Element.prototype.toggleClass = function(d, c) {
            c = c || "";
            if (this.hasClass(d)) {
                this.removeClass(d);
                if (c) {
                    this.addClass(c)
                }
            } else {
                this.addClass(d);
                if (c) {
                    this.removeClass(c)
                }
            }
            return this
        }
    }
    return this.toggleClass(b, a)
};
jindo.$Element.prototype.text = function(b) {
    var d = this._element;
    var a = this.tag;
    var g = (typeof d.innerText != "undefined") ? "innerText" : "textContent";
    if (a == "textarea" || a == "input") {
        g = "value"
    }
    var c = (typeof b);
    if (c != "undefined" && (c == "string" || c == "number" || c == "boolean")) {
        b += "";
        try {
            if (g != "value") {
                g = (typeof d.textContent != "undefined") ? "textContent" : "innerText"
            }
            d[g] = b
        } catch (f) {
            return this.html(b.replace(/&/g, "&amp;").replace(/</g, "&lt;"))
        }
        return this
    }
    return d[g]
};
jindo.$Element.prototype.html = function(b) {
    var a = IS_IE;
    var c = IS_FF;
    if (a) {
        jindo.$Element.prototype.html = function(h) {
            if (typeof h != "undefined" && arguments.length) {
                h += "";
                jindo.$$.release();
                var l = this._element;
                while (l.firstChild) {
                    l.removeChild(l.firstChild)
                }
                var g = "R" + new Date().getTime() + parseInt(Math.random() * 100000, 10);
                var o = l.ownerDocument || l.document || document;
                var e;
                var d = l.tagName.toLowerCase();
                switch (d) {
                    case "select":
                    case "table":
                        e = o.createElement("div");
                        e.innerHTML = "<" + d + ' class="' + g + '">' + h + "</" + d + ">";
                        break;
                    case "tr":
                    case "thead":
                    case "tbody":
                    case "colgroup":
                        e = o.createElement("div");
                        e.innerHTML = "<table><" + d + ' class="' + g + '">' + h + "</" + d + "></table>";
                        break;
                    default:
                        l.innerHTML = h;
                        break
                }
                if (e) {
                    var n;
                    for (n = e.firstChild; n; n = n.firstChild) {
                        if (n.className == g) {
                            break
                        }
                    }
                    if (n) {
                        var m = true;
                        for (var p; p = l.firstChild;) {
                            p.removeNode(true)
                        }
                        for (var p = n.firstChild; p; p = n.firstChild) {
                            if (d == "select") {
                                var f = p.cloneNode(true);
                                if (p.selected && m) {
                                    m = false;
                                    f.selected = true
                                }
                                l.appendChild(f);
                                p.removeNode(true)
                            } else {
                                l.appendChild(p)
                            }
                        }
                        e.removeNode && e.removeNode(true)
                    }
                    e = null
                }
                return this
            }
            return this._element.innerHTML
        }
    } else {
        if (c) {
            jindo.$Element.prototype.html = function(n) {
                if (typeof n != "undefined" && arguments.length) {
                    n += "";
                    var h = this._element;
                    if (!h.parentNode) {
                        var g = "R" + new Date().getTime() + parseInt(Math.random() * 100000, 10);
                        var d = h.ownerDocument || h.document || document;
                        var l;
                        var f = h.tagName.toLowerCase();
                        switch (f) {
                            case "select":
                            case "table":
                                l = d.createElement("div");
                                l.innerHTML = "<" + f + ' class="' + g + '">' + n + "</" + f + ">";
                                break;
                            case "tr":
                            case "thead":
                            case "tbody":
                            case "colgroup":
                                l = d.createElement("div");
                                l.innerHTML = "<table><" + f + ' class="' + g + '">' + n + "</" + f + "></table>";
                                break;
                            default:
                                h.innerHTML = n;
                                break
                        }
                        if (l) {
                            var e;
                            for (e = l.firstChild; e; e = e.firstChild) {
                                if (e.className == g) {
                                    break
                                }
                            }
                            if (e) {
                                for (var m; m = h.firstChild;) {
                                    m.removeNode(true)
                                }
                                for (var m = e.firstChild; m; m = e.firstChild) {
                                    h.appendChild(m)
                                }
                                l.removeNode && l.removeNode(true)
                            }
                            l = null
                        }
                    } else {
                        h.innerHTML = n
                    }
                    return this
                }
                return this._element.innerHTML
            }
        } else {
            jindo.$Element.prototype.html = function(e) {
                if (typeof e != "undefined" && arguments.length) {
                    e += "";
                    var d = this._element;
                    d.innerHTML = e;
                    return this
                }
                return this._element.innerHTML
            }
        }
    }
    return this.html(b)
};
jindo.$Element.prototype.outerHTML = function() {
    var d = this._element;
    if (typeof d.outerHTML != "undefined") {
        return d.outerHTML
    }
    var a = d.ownerDocument || d.document || document;
    var f = a.createElement("div");
    var c = d.parentNode;
    if (!c) {
        return d.innerHTML
    }
    c.insertBefore(f, d);
    f.style.display = "none";
    f.appendChild(d);
    var b = f.innerHTML;
    c.insertBefore(d, f);
    c.removeChild(f);
    return b
};
jindo.$Element.prototype.toString = jindo.$Element.prototype.outerHTML;
jindo.$Element._getTransition = function() {
    var a = false,
        b = "";
    if (typeof document.body.style.trasition != "undefined") {
        a = true;
        b = "trasition"
    } else {
        if (typeof document.body.style.webkitTransition !== "undefined") {
            a = true;
            b = "webkitTransition"
        } else {
            if (typeof document.body.style.OTransition !== "undefined") {
                a = true;
                b = "OTransition"
            }
        }
    }
    return (jindo.$Element._getTransition = function() {
        return {
            hasTransition: a,
            name: b
        }
    })()
};
jindo.$Element.prototype.appear = function(b, c) {
    var a = jindo.$Element._getTransition();
    if (a.hasTransition) {
        jindo.$Element.prototype.appear = function(g, h) {
            g = g || 0.3;
            h = h || function() {};
            var f = function() {
                h();
                this.show();
                this.removeEventListener(a.name + "End", arguments.callee, false)
            };
            var e = this._element;
            var d = this;
            if (!this.visible()) {
                e.style.opacity = e.style.opacity || 0;
                d.show()
            }
            e.addEventListener(a.name + "End", f, false);
            e.style[a.name + "Property"] = "opacity";
            e.style[a.name + "Duration"] = g + "s";
            e.style[a.name + "TimingFunction"] = "linear";
            setTimeout(function() {
                e.style.opacity = "1"
            }, 1);
            return this
        }
    } else {
        jindo.$Element.prototype.appear = function(l, n) {
            var d = this;
            var m = this.opacity();
            if (!this.visible()) {
                m = 0
            }
            if (m == 1) {
                return this
            }
            try {
                clearTimeout(this._fade_timer)
            } catch (h) {}
            n = n || function() {};
            var g = (1 - m) / ((l || 0.3) * 100);
            var f = function() {
                m += g;
                d.opacity(m);
                if (m >= 1) {
                    n(d)
                } else {
                    d._fade_timer = setTimeout(f, 10)
                }
            };
            this.show();
            f();
            return this
        }
    }
    return this.appear(b, c)
};
jindo.$Element.prototype.disappear = function(b, c) {
    var a = jindo.$Element._getTransition();
    if (a.hasTransition) {
        jindo.$Element.prototype.disappear = function(g, h) {
            g = g || 0.3;
            var d = this;
            h = h || function() {};
            var f = function() {
                h();
                this.removeEventListener(a.name + "End", arguments.callee, false);
                d.hide()
            };
            var e = this._element;
            e.addEventListener(a.name + "End", f, false);
            e.style[a.name + "Property"] = "opacity";
            e.style[a.name + "Duration"] = g + "s";
            e.style[a.name + "TimingFunction"] = "linear";
            setTimeout(function() {
                e.style.opacity = "0"
            }, 1);
            return this
        }
    } else {
        jindo.$Element.prototype.disappear = function(l, n) {
            var d = this;
            var m = this.opacity();
            if (m == 0) {
                return this
            }
            try {
                clearTimeout(this._fade_timer)
            } catch (h) {}
            n = n || function() {};
            var g = m / ((l || 0.3) * 100);
            var f = function() {
                m -= g;
                d.opacity(m);
                if (m <= 0) {
                    d.hide();
                    d.opacity(1);
                    n(d)
                } else {
                    d._fade_timer = setTimeout(f, 10)
                }
            };
            f();
            return this
        }
    }
    return this.disappear(b, c)
};
jindo.$Element.prototype.offset = function(b, a) {
    var e = this._element;
    var c = null;
    if (typeof b == "number" && typeof a == "number") {
        if (isNaN(parseInt(this.css("top"), 10))) {
            this.css("top", 0)
        }
        if (isNaN(parseInt(this.css("left"), 10))) {
            this.css("left", 0)
        }
        var h = this.offset();
        var l = {
            top: b - h.top,
            left: a - h.left
        };
        e.style.top = parseInt(this.css("top"), 10) + l.top + "px";
        e.style.left = parseInt(this.css("left"), 10) + l.left + "px";
        return this
    }
    var d = /Safari/.test(navigator.userAgent);
    var n = /MSIE/.test(navigator.userAgent);
    var m = n ? navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1] : 0;
    var f = function(p) {
        var o = {
            left: 0,
            top: 0
        };
        for (var r = p, q = r.offsetParent; r = r.parentNode;) {
            if (r.offsetParent) {
                o.left -= r.scrollLeft;
                o.top -= r.scrollTop
            }
            if (r == q) {
                o.left += p.offsetLeft + r.clientLeft;
                o.top += p.offsetTop + r.clientTop;
                if (!r.offsetParent) {
                    o.left += r.offsetLeft;
                    o.top += r.offsetTop
                }
                q = r.offsetParent;
                p = r
            }
        }
        return o
    };
    var g = function(t) {
        var y = {
            left: 0,
            top: 0
        };
        var z = t.ownerDocument || t.document || document;
        var r = z.documentElement;
        var s = z.body;
        if (t.getBoundingClientRect) {
            if (!c) {
                var w = (window == top);
                if (!w) {
                    try {
                        w = (window.frameElement && window.frameElement.frameBorder == 1)
                    } catch (v) {}
                }
                if ((n && m < 8 && window.external) && w) {
                    c = {
                        left: 2,
                        top: 2
                    };
                    oBase = null
                } else {
                    c = {
                        left: 0,
                        top: 0
                    }
                }
            }
            var u = t.getBoundingClientRect();
            if (t !== r && t !== s) {
                y.left = u.left - c.left;
                y.top = u.top - c.top;
                y.left += r.scrollLeft || s.scrollLeft;
                y.top += r.scrollTop || s.scrollTop
            }
        } else {
            if (z.getBoxObjectFor) {
                var u = z.getBoxObjectFor(t);
                var p = z.getBoxObjectFor(r || s);
                y.left = u.screenX - p.screenX;
                y.top = u.screenY - p.screenY
            } else {
                for (var q = t; q; q = q.offsetParent) {
                    y.left += q.offsetLeft;
                    y.top += q.offsetTop
                }
                for (var q = t.parentNode; q; q = q.parentNode) {
                    if (q.tagName == "BODY") {
                        break
                    }
                    if (q.tagName == "TR") {
                        y.top += 2
                    }
                    y.left -= q.scrollLeft;
                    y.top -= q.scrollTop
                }
            }
        }
        return y
    };
    return (d ? f : g)(e)
};
jindo.$Element.prototype.evalScripts = function(sHTML) {
    var aJS = [];
    sHTML = sHTML.replace(new RegExp("<script(\\s[^>]+)*>(.*?)<\/script>", "gi"), function(_1, _2, sPart) {
        aJS.push(sPart);
        return ""
    });
    eval(aJS.join("\n"));
    return this
};
jindo.$Element._append = function(b, a) {
    if (typeof a == "string") {
        a = jindo.$(a)
    } else {
        if (a instanceof jindo.$Element) {
            a = a.$value()
        }
    }
    b._element.appendChild(a);
    return b
};
jindo.$Element._prepend = function(c, b) {
    if (typeof c == "string") {
        c = jindo.$(c)
    } else {
        if (c instanceof jindo.$Element) {
            c = c.$value()
        }
    }
    var a = c.childNodes;
    if (a.length > 0) {
        c.insertBefore(b._element, a[0])
    } else {
        c.appendChild(b._element)
    }
    return b
};
jindo.$Element.prototype.append = function(a) {
    return jindo.$Element._append(this, a)
};
jindo.$Element.prototype.prepend = function(a) {
    return jindo.$Element._prepend(this._element, jindo.$Element(a))
};
jindo.$Element.prototype.replace = function(b) {
    jindo.$$.release();
    var c = this._element;
    var a = c.parentNode;
    var d = jindo.$Element(b);
    if (a && a.replaceChild) {
        a.replaceChild(d.$value(), c);
        return d
    }
    var d = d.$value();
    a.insertBefore(d, c);
    a.removeChild(c);
    return d
};
jindo.$Element.prototype.appendTo = function(a) {
    var b = jindo.$Element(a);
    jindo.$Element._append(b, this._element);
    return b
};
jindo.$Element.prototype.prependTo = function(a) {
    jindo.$Element._prepend(a, this);
    return jindo.$Element(a)
};
jindo.$Element.prototype.before = function(a) {
    var b = jindo.$Element(a);
    var c = b.$value();
    this._element.parentNode.insertBefore(c, this._element);
    return b
};
jindo.$Element.prototype.after = function(a) {
    var b = this.before(a);
    b.before(this);
    return b
};
jindo.$Element.prototype.parent = function(d, c) {
    var g = this._element;
    var b = [],
        f = null;
    if (typeof d == "undefined") {
        return jindo.$Element(g.parentNode)
    }
    if (typeof c == "undefined" || c == 0) {
        c = -1
    }
    while (g.parentNode && c-- != 0) {
        f = jindo.$Element(g.parentNode);
        if (g.parentNode == document.documentElement) {
            break
        }
        if (!d || (d && d(f))) {
            b[b.length] = f
        }
        g = g.parentNode
    }
    return b
};
jindo.$Element.prototype.child = function(g, d) {
    var l = this._element;
    var b = [],
        m = null,
        h = null;
    if (typeof g == "undefined") {
        return jindo.$A(l.childNodes).filter(function(a) {
            return a.nodeType == 1
        }).map(function(a) {
            return jindo.$Element(a)
        }).$value()
    }
    if (typeof d == "undefined" || d == 0) {
        d = -1
    }(h = function(e, n) {
        var c = null,
            f = null;
        for (var a = 0; a < e.childNodes.length; a++) {
            c = e.childNodes[a];
            if (c.nodeType != 1) {
                continue
            }
            f = jindo.$Element(e.childNodes[a]);
            if (!g || (g && g(f))) {
                b[b.length] = f
            }
            if (n != 0) {
                h(e.childNodes[a], n - 1)
            }
        }
    })(l, d - 1);
    return b
};
jindo.$Element.prototype.prev = function(f) {
    var g = this._element;
    var d = [];
    var c = (typeof f == "undefined");
    if (!g) {
        return c ? jindo.$Element(null) : d
    }
    do {
        g = g.previousSibling;
        if (!g || g.nodeType != 1) {
            continue
        }
        if (c) {
            return jindo.$Element(g)
        }
        if (!f || f(g)) {
            d[d.length] = jindo.$Element(g)
        }
    } while (g);
    return c ? jindo.$Element(g) : d
};
jindo.$Element.prototype.next = function(f) {
    var g = this._element;
    var d = [];
    var c = (typeof f == "undefined");
    if (!g) {
        return c ? jindo.$Element(null) : d
    }
    do {
        g = g.nextSibling;
        if (!g || g.nodeType != 1) {
            continue
        }
        if (c) {
            return jindo.$Element(g)
        }
        if (!f || f(g)) {
            d[d.length] = jindo.$Element(g)
        }
    } while (g);
    return c ? jindo.$Element(g) : d
};
jindo.$Element.prototype.first = function() {
    var a = this._element.firstElementChild || this._element.firstChild;
    if (!a) {
        return null
    }
    while (a && a.nodeType != 1) {
        a = a.nextSibling
    }
    return a ? jindo.$Element(a) : null
};
jindo.$Element.prototype.last = function() {
    var a = this._element.lastElementChild || this._element.lastChild;
    if (!a) {
        return null
    }
    while (a && a.nodeType != 1) {
        a = a.previousSibling
    }
    return a ? jindo.$Element(a) : null
};
jindo.$Element.prototype.isChildOf = function(a) {
    return jindo.$Element._contain(jindo.$Element(a).$value(), this._element)
};
jindo.$Element.prototype.isParentOf = function(a) {
    return jindo.$Element._contain(this._element, jindo.$Element(a).$value())
};
jindo.$Element._contain = function(a, b) {
    if (document.compareDocumentPosition) {
        jindo.$Element._contain = function(c, d) {
            return !!(c.compareDocumentPosition(d) & 16)
        }
    } else {
        if (document.body.contains) {
            jindo.$Element._contain = function(c, d) {
                return (c !== d) && (c.contains ? c.contains(d) : true)
            }
        } else {
            jindo.$Element._contain = function(c, f) {
                var g = c;
                var d = f;
                while (g && g.parentNode) {
                    g = g.parentNode;
                    if (g == d) {
                        return true
                    }
                }
                return false
            }
        }
    }
    return jindo.$Element._contain(a, b)
};
jindo.$Element.prototype.isEqual = function(a) {
    try {
        return (this._element === jindo.$Element(a).$value())
    } catch (b) {
        return false
    }
};
jindo.$Element.prototype.fireEvent = function(c, b) {
    function d(g, e) {
        g = (g + "").toLowerCase();
        var f = document.createEventObject();
        if (e) {
            for (k in e) {
                if (e.hasOwnProperty(k)) {
                    f[k] = e[k]
                }
            }
            f.button = (e.left ? 1 : 0) + (e.middle ? 4 : 0) + (e.right ? 2 : 0);
            f.relatedTarget = e.relatedElement || null
        }
        this._element.fireEvent("on" + g, f);
        return this
    }

    function a(l, g) {
        var m = "HTMLEvents";
        l = (l + "").toLowerCase();
        if (l == "click" || l.indexOf("mouse") == 0) {
            m = "MouseEvent";
            if (l == "mousewheel") {
                l = "dommousescroll"
            }
        } else {
            if (l.indexOf("key") == 0) {
                m = "KeyboardEvent"
            }
        }
        var f;
        if (g) {
            g.button = 0 + (g.middle ? 1 : 0) + (g.right ? 2 : 0);
            g.ctrl = g.ctrl || false;
            g.alt = g.alt || false;
            g.shift = g.shift || false;
            g.meta = g.meta || false;
            switch (m) {
                case "MouseEvent":
                    f = document.createEvent(m);
                    f.initMouseEvent(l, true, true, null, g.detail || 0, g.screenX || 0, g.screenY || 0, g.clientX || 0, g.clientY || 0, g.ctrl, g.alt, g.shift, g.meta, g.button, g.relatedElement || null);
                    break;
                case "KeyboardEvent":
                    if (window.KeyEvent) {
                        f = document.createEvent("KeyEvents");
                        f.initKeyEvent(l, true, true, window, g.ctrl, g.alt, g.shift, g.meta, g.keyCode, g.keyCode)
                    } else {
                        try {
                            f = document.createEvent("Events")
                        } catch (h) {
                            f = document.createEvent("UIEvents")
                        } finally {
                            f.initEvent(l, true, true);
                            f.ctrlKey = g.ctrl;
                            f.altKey = g.alt;
                            f.shiftKey = g.shift;
                            f.metaKey = g.meta;
                            f.keyCode = g.keyCode;
                            f.which = g.keyCode
                        }
                    }
                    break;
                default:
                    f = document.createEvent(m);
                    f.initEvent(l, true, true)
            }
        } else {
            f = document.createEvent(m);
            f.initEvent(l, true, true)
        }
        this._element.dispatchEvent(f);
        return this
    }
    jindo.$Element.prototype.fireEvent = (typeof this._element.dispatchEvent != "undefined") ? a : d;
    return this.fireEvent(c, b)
};
jindo.$Element.prototype.empty = function() {
    jindo.$$.release();
    this.html("");
    return this
};
jindo.$Element.prototype.remove = function(a) {
    jindo.$$.release();
    jindo.$Element(a).leave();
    return this
};
jindo.$Element.prototype.leave = function() {
    var a = this._element;
    if (a.parentNode) {
        jindo.$$.release();
        a.parentNode.removeChild(a)
    }
    jindo.$Fn.freeElement(this._element);
    return this
};
jindo.$Element.prototype.wrap = function(b) {
    var a = this._element;
    b = jindo.$Element(b).$value();
    if (a.parentNode) {
        a.parentNode.insertBefore(b, a)
    }
    b.appendChild(a);
    return this
};
jindo.$Element.prototype.ellipsis = function(g) {
    g = g || "...";
    var b = this.text();
    var a = b.length;
    var f = parseInt(this.css("paddingTop"), 10) + parseInt(this.css("paddingBottom"), 10);
    var d = this.height() - f;
    var c = 0;
    var e = this.text("A").height() - f;
    if (d < e * 1.5) {
        return this.text(b)
    }
    d = e;
    while (d < e * 1.5) {
        c += Math.max(Math.ceil((a - c) / 2), 1);
        d = this.text(b.substring(0, c) + g).height() - f
    }
    while (d > e * 1.5) {
        c--;
        d = this.text(b.substring(0, c) + g).height() - f
    }
};
jindo.$Element.prototype.indexOf = function(d) {
    try {
        var f = jindo.$Element(d).$value();
        var h = this._element.childNodes;
        var g = 0;
        var a = h.length;
        for (var b = 0; b < a; b++) {
            if (h[b].nodeType != 1) {
                continue
            }
            if (h[b] === f) {
                return g
            }
            g++
        }
    } catch (f) {}
    return -1
};
jindo.$Element.prototype.queryAll = function(a) {
    return jindo.$$(a, this._element)
};
jindo.$Element.prototype.query = function(a) {
    return jindo.$$.getSingle(a, this._element)
};
jindo.$Element.prototype.test = function(a) {
    return jindo.$$.test(this._element, a)
};
jindo.$Element.prototype.xpathAll = function(a) {
    return jindo.$$.xpath(a, this._element)
};
jindo.$Element.insertAdjacentHTML = function(n, m, t, p, q) {
    var d = n._element;
    if (d.insertAdjacentHTML && !(/^<(option|tr|td|th|col)(?:.*?)>/.test(m.replace(/^(\s|　)+|(\s|　)+$/g, "").toLowerCase()))) {
        d.insertAdjacentHTML(t, m)
    } else {
        var u = d.ownerDocument || d.document || document;
        var o = u.createDocumentFragment();
        var s;
        var b = m.replace(/^(\s|　)+|(\s|　)+$/g, "");
        var r = {
            option: "select",
            tr: "tbody",
            thead: "table",
            tbody: "table",
            col: "table",
            td: "tr",
            th: "tr",
            div: "div"
        };
        var a = /^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(b);
        var c = a === null ? "div" : a[1].toLowerCase();
        var g = r[c];
        s = jindo._createEle(g, b, u, true);
        var f = s.getElementsByTagName("script");
        for (var h = 0, e = f.length; h < e; h++) {
            f[h].parentNode.removeChild(f[h])
        }
        while (s[p]) {
            o.appendChild(s[p])
        }
        q(o.cloneNode(true))
    }
    return n
};
jindo.$Element.prototype.appendHTML = function(a) {
    return jindo.$Element.insertAdjacentHTML(this, a, "beforeEnd", "firstChild", jindo.$Fn(function(b) {
        this.append(b)
    }, this).bind())
};
jindo.$Element.prototype.prependHTML = function(a) {
    return jindo.$Element.insertAdjacentHTML(this, a, "afterBegin", "lastChild", jindo.$Fn(function(b) {
        this.prepend(b)
    }, this).bind())
};
jindo.$Element.prototype.beforeHTML = function(a) {
    return jindo.$Element.insertAdjacentHTML(this, a, "beforeBegin", "firstChild", jindo.$Fn(function(b) {
        this.before(b)
    }, this).bind())
};
jindo.$Element.prototype.afterHTML = function(a) {
    return jindo.$Element.insertAdjacentHTML(this, a, "afterEnd", "lastChild", jindo.$Fn(function(b) {
        this._element.parentNode.insertBefore(b, this._element.nextSibling)
    }, this).bind())
};
jindo.$Element.prototype.delegate = function(e, b, c) {
    if (!this._element["_delegate_" + e]) {
        this._element["_delegate_" + e] = {};
        var d = jindo.$Fn(function(m, p) {
            p = p || window.event;
            if (typeof p.currentTarget == "undefined") {
                p.currentTarget = this._element
            }
            var h = p.target || p.srcElement;
            var q = this._element["_delegate_" + m];
            var t, n, g, f;
            for (var s in q) {
                t = q[s];
                f = t.checker(h);
                if (f[0]) {
                    n = t.func;
                    g = jindo.$Event(p);
                    g.element = f[1];
                    for (var r = 0, o = n.length; r < o; r++) {
                        n[r](g)
                    }
                }
            }
        }, this).bind(e);
        jindo.$Element._eventBind(this._element, e, d);
        var a = this._element;
        a["_delegate_" + e + "_func"] = d;
        if (this._element._delegate_events) {
            this._element._delegate_events.push(e)
        } else {
            this._element._delegate_events = [e]
        }
        a = null
    }
    this._bind(e, b, c);
    return this
};
jindo.$Element._eventBind = function(a, c, b) {
    if (a.addEventListener) {
        jindo.$Element._eventBind = function(d, f, e) {
            d.addEventListener(f, e, false)
        }
    } else {
        jindo.$Element._eventBind = function(d, f, e) {
            d.attachEvent("on" + f, e)
        }
    }
    jindo.$Element._eventBind(a, c, b)
};
jindo.$Element.prototype.undelegate = function(c, a, b) {
    this._unbind(c, a, b);
    return this
};
jindo.$Element.prototype._bind = function(e, b, c) {
    var a = this._element["_delegate_" + e];
    if (a) {
        var d;
        if (typeof b == "string") {
            d = jindo.$Fn(function(n, f) {
                var h = f;
                var o = jindo.$$.test(f, n);
                if (!o) {
                    var g = this._getParent(f);
                    for (var m = 0, l = g.length; m < l; m++) {
                        h = g[m];
                        if (jindo.$$.test(h, n)) {
                            o = true;
                            break
                        }
                    }
                }
                return [o, h]
            }, this).bind(b)
        } else {
            if (typeof b == "function") {
                d = jindo.$Fn(function(n, f) {
                    var h = f;
                    var o = n(this._element, f);
                    if (!o) {
                        var g = this._getParent(f);
                        for (var m = 0, l = g.length; m < l; m++) {
                            h = g[m];
                            if (n(this._element, h)) {
                                o = true;
                                break
                            }
                        }
                    }
                    return [o, h]
                }, this).bind(b)
            }
        }
        this._element["_delegate_" + e] = jindo.$Element._addBind(a, b, c, d)
    } else {
        alert("check your delegate event.")
    }
};
jindo.$Element.prototype._getParent = function(b) {
    var f = this._element;
    var c = [],
        d = null;
    while (b.parentNode && d != f) {
        d = b.parentNode;
        if (d == document.documentElement) {
            break
        }
        c[c.length] = d;
        b = d
    }
    return c
};
jindo.$Element._addBind = function(f, b, c, d) {
    var a = f[b];
    if (a) {
        var e = a.func;
        e.push(c);
        a.func = e
    } else {
        a = {
            checker: d,
            func: [c]
        }
    }
    f[b] = a;
    return f
};
jindo.$Element.prototype._unbind = function(b, f, c) {
    var a = this._element;
    if (b && f && c) {
        var e = a["_delegate_" + b];
        if (e && e[f]) {
            var m = e[f].func;
            m = e[f].func = jindo.$A(m).refuse(c).$value();
            if (!m.length) {
                jindo.$Element._deleteFilter(a, b, f)
            }
        }
    } else {
        if (b && f) {
            jindo.$Element._deleteFilter(a, b, f)
        } else {
            if (b) {
                jindo.$Element._deleteEvent(a, b, f)
            } else {
                var n = a._delegate_events;
                var d;
                for (var h = 0, g = n.length; h < g; h++) {
                    d = n[h];
                    jindo.$Element._unEventBind(a, d, a["_delegate_" + d + "_func"]);
                    jindo.$Element._delDelegateInfo(a, "_delegate_" + d);
                    jindo.$Element._delDelegateInfo(a, "_delegate_" + d + "_func")
                }
                jindo.$Element._delDelegateInfo(a, "_delegate_events")
            }
        }
    }
    return this
};
jindo.$Element._delDelegateInfo = function(a, c) {
    try {
        a[c] = null;
        delete a[c]
    } catch (b) {}
    return a
};
jindo.$Element._deleteFilter = function(a, d, b) {
    var c = a["_delegate_" + d];
    if (c && c[b]) {
        if (jindo.$H(c).keys().length == 1) {
            jindo.$Element._deleteEvent(a, d, b)
        } else {
            jindo.$Element._delDelegateInfo(c, b)
        }
    }
};
jindo.$Element._deleteEvent = function(a, d, c) {
    var b = a._delegate_events;
    jindo.$Element._unEventBind(a, d, a["_delegate_" + d + "_func"]);
    jindo.$Element._delDelegateInfo(a, "_delegate_" + d);
    jindo.$Element._delDelegateInfo(a, "_delegate_" + d + "_func");
    b = jindo.$A(b).refuse(d).$value();
    if (!b.length) {
        jindo.$Element._delDelegateInfo(a, "_delegate_events")
    } else {
        a._delegate_events = jindo.$A(b).refuse(d).$value()
    }
};
jindo.$Element._unEventBind = function(a, c, b) {
    if (a.removeEventListener) {
        jindo.$Element._unEventBind = function(d, f, e) {
            d.removeEventListener(f, e, false)
        }
    } else {
        jindo.$Element._unEventBind = function(d, f, e) {
            d.detachEvent("on" + f, e)
        }
    }
    jindo.$Element._unEventBind(a, c, b)
};
jindo.$Fn = function(func, thisObject) {
    var cl = arguments.callee;
    if (func instanceof cl) {
        return func
    }
    if (!(this instanceof cl)) {
        return new cl(func, thisObject)
    }
    this._events = [];
    this._tmpElm = null;
    this._key = null;
    if (typeof func == "function") {
        this._func = func;
        this._this = thisObject
    } else {
        if (typeof func == "string" && typeof thisObject == "string") {
            this._func = eval("false||function(" + func + "){" + thisObject + "}")
        }
    }
};
var _ua = navigator.userAgent;
jindo.$Fn.prototype.$value = function() {
    return this._func
};
jindo.$Fn.prototype.bind = function() {
    var d = jindo.$A(arguments).$value();
    var g = this._func;
    var e = this._this;
    var c = function() {
        var a = jindo.$A(arguments).$value();
        if (d.length) {
            a = d.concat(a)
        }
        return g.apply(e, a)
    };
    return c
};
jindo.$Fn.prototype.bindForEvent = function() {
    var e = arguments;
    var h = this._func;
    var g = this._this;
    var d = this._tmpElm || null;
    var c = function(l) {
        var b = Array.prototype.slice.apply(e);
        if (typeof l == "undefined") {
            l = window.event
        }
        if (typeof l.currentTarget == "undefined") {
            l.currentTarget = d
        }
        var a = jindo.$Event(l);
        b.unshift(a);
        if (h == undefined) {
            return
        }
        var f = h.apply(g, b);
        if (typeof f != "undefined" && a.type == "beforeunload") {
            l.returnValue = f
        }
        return f
    };
    return c
};
jindo.$Fn.prototype.attach = function(f, d, h) {
    var o = null,
        g, n = d,
        e = f,
        c = _ua;
    if (typeof h == "undefined") {
        h = false
    }
    this._bUseCapture = h;
    if ((e instanceof Array) || (jindo.$A && (e instanceof jindo.$A) && (e = e.$value()))) {
        for (var m = 0; m < e.length; m++) {
            this.attach(e[m], n, h)
        }
        return this
    }
    if (!e || !n) {
        return this
    }
    if (typeof e.$value == "function") {
        e = e.$value()
    }
    e = jindo.$(e);
    n = n.toLowerCase();
    this._tmpElm = e;
    o = this.bindForEvent();
    this._tmpElm = null;
    var b = c.indexOf("MSIE") > -1;
    if (typeof e.addEventListener != "undefined") {
        if (n == "domready") {
            n = "DOMContentLoaded"
        } else {
            if (n == "mousewheel" && c.indexOf("WebKit") < 0 && !/Opera/.test(c) && !b) {
                n = "DOMMouseScroll"
            } else {
                if (n == "mouseenter" && !b) {
                    n = "mouseover";
                    o = jindo.$Fn._fireWhenElementBoundary(e, o)
                } else {
                    if (n == "mouseleave" && !b) {
                        n = "mouseout";
                        o = jindo.$Fn._fireWhenElementBoundary(e, o)
                    } else {
                        if (n == "transitionend" || n == "transitionstart") {
                            var a, p = n.replace("transition", "");
                            p = p.substr(0, 1).toUpperCase() + p.substr(1);
                            if (typeof document.body.style.WebkitTransition !== "undefined") {
                                a = "webkit"
                            } else {
                                if (typeof document.body.style.OTransition !== "undefined") {
                                    a = "o"
                                } else {
                                    if (typeof document.body.style.MsTransition !== "undefined") {
                                        a = "ms"
                                    }
                                }
                            }
                            n = (a ? a + "Transition" : "transition") + p;
                            this._for_test_attach = n;
                            this._for_test_detach = ""
                        } else {
                            if (n == "animationstart" || n == "animationend" || n == "animationiteration") {
                                var a, p = n.replace("animation", "");
                                p = p.substr(0, 1).toUpperCase() + p.substr(1);
                                if (typeof document.body.style.WebkitAnimationName !== "undefined") {
                                    a = "webkit"
                                } else {
                                    if (typeof document.body.style.OAnimationName !== "undefined") {
                                        a = "o"
                                    } else {
                                        if (typeof document.body.style.MsTransitionName !== "undefined") {
                                            a = "ms"
                                        }
                                    }
                                }
                                n = (a ? a + "Animation" : "animation") + p;
                                this._for_test_attach = n;
                                this._for_test_detach = ""
                            }
                        }
                    }
                }
            }
        }
        e.addEventListener(n, o, h)
    } else {
        if (typeof e.attachEvent != "undefined") {
            if (n == "domready") {
                if (window.top != window) {
                    throw new Error("Domready Event doesn't work in the iframe.")
                }
                jindo.$Fn._domready(e, o);
                return this
            } else {
                e.attachEvent("on" + n, o)
            }
        }
    }
    if (!this._key) {
        this._key = "$" + jindo.$Fn.gc.count++;
        jindo.$Fn.gc.pool[this._key] = this
    }
    this._events[this._events.length] = {
        element: e,
        event: d.toLowerCase(),
        func: o
    };
    return this
};
jindo.$Fn.prototype.detach = function(f, c) {
    var o = null,
        g, d = f,
        n = c,
        b = _ua;
    if ((d instanceof Array) || (jindo.$A && (d instanceof jindo.$A) && (d = d.$value()))) {
        for (var h = 0; h < d.length; h++) {
            this.detach(d[h], n)
        }
        return this
    }
    if (!d || !n) {
        return this
    }
    if (jindo.$Element && d instanceof jindo.$Element) {
        d = d.$value()
    }
    d = jindo.$(d);
    n = n.toLowerCase();
    var m = this._events;
    for (var h = 0; h < m.length; h++) {
        if (m[h].element !== d || m[h].event !== n) {
            continue
        }
        o = m[h].func;
        this._events = jindo.$A(this._events).refuse(m[h]).$value();
        break
    }
    if (typeof d.removeEventListener != "undefined") {
        if (n == "domready") {
            n = "DOMContentLoaded"
        } else {
            if (n == "mousewheel" && b.indexOf("WebKit") < 0) {
                n = "DOMMouseScroll"
            } else {
                if (n == "mouseenter") {
                    n = "mouseover"
                } else {
                    if (n == "mouseleave") {
                        n = "mouseout"
                    } else {
                        if (n == "transitionend" || n == "transitionstart") {
                            var a, p = n.replace("transition", "");
                            p = p.substr(0, 1).toUpperCase() + p.substr(1);
                            if (typeof document.body.style.WebkitTransition !== "undefined") {
                                a = "webkit"
                            } else {
                                if (typeof document.body.style.OTransition !== "undefined") {
                                    a = "o"
                                } else {
                                    if (typeof document.body.style.MsTransition !== "undefined") {
                                        a = "ms"
                                    }
                                }
                            }
                            n = (a ? a + "Transition" : "transition") + p;
                            this._for_test_detach = n;
                            this._for_test_attach = ""
                        } else {
                            if (n == "animationstart" || n == "animationend" || n == "animationiteration") {
                                var a, p = n.replace("animation", "");
                                p = p.substr(0, 1).toUpperCase() + p.substr(1);
                                if (typeof document.body.style.WebkitAnimationName !== "undefined") {
                                    a = "webkit"
                                } else {
                                    if (typeof document.body.style.OAnimationName !== "undefined") {
                                        a = "o"
                                    } else {
                                        if (typeof document.body.style.MsTransitionName !== "undefined") {
                                            a = "ms"
                                        }
                                    }
                                }
                                n = (a ? a + "Animation" : "animation") + p;
                                this._for_test_detach = n;
                                this._for_test_attach = ""
                            }
                        }
                    }
                }
            }
        }
        if (o) {
            d.removeEventListener(n, o, false)
        }
    } else {
        if (typeof d.detachEvent != "undefined") {
            if (n == "domready") {
                jindo.$Fn._domready.list = jindo.$Fn._domready.list.refuse(o);
                return this
            } else {
                d.detachEvent("on" + n, o)
            }
        }
    }
    return this
};
jindo.$Fn.prototype.delay = function(a, b) {
    if (typeof b == "undefined") {
        b = []
    }
    this._delayKey = setTimeout(this.bind.apply(this, b), a * 1000);
    return this
};
jindo.$Fn.prototype.setInterval = function(a, b) {
    if (typeof b == "undefined") {
        b = []
    }
    this._repeatKey = setInterval(this.bind.apply(this, b), a * 1000);
    return this._repeatKey
};
jindo.$Fn.prototype.repeat = jindo.$Fn.prototype.setInterval;
jindo.$Fn.prototype.stopDelay = function() {
    if (typeof this._delayKey != "undefined") {
        window.clearTimeout(this._delayKey);
        delete this._delayKey
    }
    return this
};
jindo.$Fn.prototype.stopRepeat = function() {
    if (typeof this._repeatKey != "undefined") {
        window.clearInterval(this._repeatKey);
        delete this._repeatKey
    }
    return this
};
jindo.$Fn.prototype.free = function(c) {
    var a = this._events.length;
    while (a > 0) {
        var f = this._events[--a].element;
        var h = this._events[a].event;
        var d = this._events[a].func;
        if (c && f !== c) {
            continue
        }
        this.detach(f, h);
        var b = !c;
        if (b && window === f && h == "unload" && _ua.indexOf("MSIE") < 1) {
            this._func.call(this._this)
        }
        delete this._events[a]
    }
    if (this._events.length == 0) {
        try {
            delete jindo.$Fn.gc.pool[this._key]
        } catch (g) {}
    }
};
jindo.$Fn._domready = function(g, d) {
    if (typeof jindo.$Fn._domready.list == "undefined") {
        var e = null,
            b = jindo.$Fn._domready.list = jindo.$A([d]);
        var a = false,
            c = function() {
                if (!a) {
                    a = true;
                    var f = {
                        type: "domready",
                        target: g,
                        currentTarget: g
                    };
                    while (e = b.shift()) {
                        e(f)
                    }
                }
            };
        (function() {
            try {
                g.documentElement.doScroll("left")
            } catch (f) {
                setTimeout(arguments.callee, 50);
                return
            }
            c()
        })();
        g.onreadystatechange = function() {
            if (g.readyState == "complete") {
                g.onreadystatechange = null;
                c()
            }
        }
    } else {
        jindo.$Fn._domready.list.push(d)
    }
};
jindo.$Fn._fireWhenElementBoundary = function(b, a) {
    return function(c) {
        var d = jindo.$Event(c);
        var e = jindo.$Element(d.relatedElement);
        if (e && (e.isEqual(this) || e.isChildOf(this))) {
            return
        }
        a.call(this, c)
    }
};
jindo.$Fn.gc = function() {
    var c = jindo.$Fn.gc.pool;
    for (var a in c) {
        if (c.hasOwnProperty(a)) {
            try {
                c[a].free()
            } catch (b) {}
        }
    }
    jindo.$Fn.gc.pool = c = {}
};
jindo.$Fn.freeElement = function(b) {
    var d = jindo.$Fn.gc.pool;
    for (var a in d) {
        if (d.hasOwnProperty(a)) {
            try {
                d[a].free(b)
            } catch (c) {}
        }
    }
};
jindo.$Fn.gc.count = 0;
jindo.$Fn.gc.pool = {};
var _ua = navigator.userAgent;
if (typeof window != "undefined" && !(_ua.indexOf("IEMobile") == -1 && _ua.indexOf("Mobile") > -1 && _ua.indexOf("Safari") > -1)) {
    jindo.$Fn(jindo.$Fn.gc).attach(window, "unload")
}
jindo.$Event = function(b) {
    var a = arguments.callee;
    if (b instanceof a) {
        return b
    }
    if (!(this instanceof a)) {
        return new a(b)
    }
    if (typeof b == "undefined") {
        b = window.event
    }
    if (b === window.event && document.createEventObject) {
        b = document.createEventObject(b)
    }
    this._event = b;
    this._globalEvent = window.event;
    this.type = b.type.toLowerCase();
    if (this.type == "dommousescroll") {
        this.type = "mousewheel"
    } else {
        if (this.type == "domcontentloaded") {
            this.type = "domready"
        }
    }
    this.canceled = false;
    this.element = b.target || b.srcElement;
    this.currentElement = b.currentTarget;
    this.relatedElement = null;
    if (typeof b.relatedTarget != "undefined") {
        this.relatedElement = b.relatedTarget
    } else {
        if (b.fromElement && b.toElement) {
            this.relatedElement = b[(this.type == "mouseout") ? "toElement" : "fromElement"]
        }
    }
};
jindo.$Event.prototype.mouse = function() {
    var f = this._event;
    var g = 0;
    var d = false,
        b = false,
        c = false;
    var d = f.which ? f.button == 0 : !!(f.button & 1);
    var b = f.which ? f.button == 1 : !!(f.button & 4);
    var c = f.which ? f.button == 2 : !!(f.button & 2);
    var a = {};
    if (f.wheelDelta) {
        g = f.wheelDelta / 120
    } else {
        if (f.detail) {
            g = -f.detail / 3
        }
    }
    a = {
        delta: g,
        left: d,
        middle: b,
        right: c
    };
    this.mouse = function() {
        return a
    };
    return a
};
jindo.$Event.prototype.key = function() {
    var c = this._event;
    var a = c.keyCode || c.charCode;
    var b = {
        keyCode: a,
        alt: c.altKey,
        ctrl: c.ctrlKey,
        meta: c.metaKey,
        shift: c.shiftKey,
        up: (a == 38),
        down: (a == 40),
        left: (a == 37),
        right: (a == 39),
        enter: (a == 13),
        esc: (a == 27)
    };
    this.key = function() {
        return b
    };
    return b
};
jindo.$Event.prototype.pos = function(l) {
    var d = this._event;
    var a = (this.element.ownerDocument || document).body;
    var h = (this.element.ownerDocument || document).documentElement;
    var g = [a.scrollLeft || h.scrollLeft, a.scrollTop || h.scrollTop];
    var c = {
        clientX: d.clientX,
        clientY: d.clientY,
        pageX: "pageX" in d ? d.pageX : d.clientX + g[0] - a.clientLeft,
        pageY: "pageY" in d ? d.pageY : d.clientY + g[1] - a.clientTop,
        layerX: "offsetX" in d ? d.offsetX : d.layerX - 1,
        layerY: "offsetY" in d ? d.offsetY : d.layerY - 1
    };
    if (l && jindo.$Element) {
        var f = jindo.$Element(this.element).offset();
        c.offsetX = c.pageX - f.left;
        c.offsetY = c.pageY - f.top
    }
    return c
};
jindo.$Event.prototype.stop = function(c) {
    c = c || jindo.$Event.CANCEL_ALL;
    var f = (window.event && window.event == this._globalEvent) ? this._globalEvent : this._event;
    var a = !!(c & jindo.$Event.CANCEL_BUBBLE);
    var g = !!(c & jindo.$Event.CANCEL_DEFAULT);
    this.canceled = true;
    if (typeof f.preventDefault != "undefined" && g) {
        f.preventDefault()
    }
    if (typeof f.stopPropagation != "undefined" && a) {
        f.stopPropagation()
    }
    if (g) {
        f.returnValue = false
    }
    if (a) {
        f.cancelBubble = true
    }
    return this
};
jindo.$Event.prototype.stopDefault = function() {
    return this.stop(jindo.$Event.CANCEL_DEFAULT)
};
jindo.$Event.prototype.stopBubble = function() {
    return this.stop(jindo.$Event.CANCEL_BUBBLE)
};
jindo.$Event.prototype.$value = function() {
    return this._event
};
jindo.$Event.CANCEL_BUBBLE = 1;
jindo.$Event.CANCEL_DEFAULT = 2;
jindo.$Event.CANCEL_ALL = 3;
jindo.$ElementList = function(b) {
    var a = arguments.callee;
    if (b instanceof a) {
        return b
    }
    if (!(this instanceof a)) {
        return new a(b)
    }
    if (b instanceof Array) {
        b = jindo.$A(b)
    } else {
        if (jindo.$A && b instanceof jindo.$A) {
            b = jindo.$A(b.$value())
        } else {
            if (typeof b == "string" && jindo.cssquery) {
                b = jindo.$A(jindo.cssquery(b))
            } else {
                b = jindo.$A()
            }
        }
    }
    this._elements = b.map(function(d, e, c) {
        return jindo.$Element(d)
    })
};
jindo.$ElementList.prototype.get = function(a) {
    return this._elements.$value()[a]
};
jindo.$ElementList.prototype.getFirst = function() {
    return this.get(0)
};
jindo.$ElementList.prototype.length = function(b, a) {
    return this._elements.length(b, a)
};
jindo.$ElementList.prototype.getLast = function() {
    return this.get(Math.max(this._elements.length() - 1, 0))
};
jindo.$ElementList.prototype.$value = function() {
    return this._elements.$value()
};
(function(b) {
    var a = ["show", "hide", "toggle", "addClass", "removeClass", "toggleClass", "fireEvent", "leave", "empty", "appear", "disappear", "className", "width", "height", "text", "html", "css", "attr"];
    jindo.$A(a).forEach(function(c) {
        b[c] = function() {
            var d = jindo.$A(arguments).$value();
            this._elements.forEach(function(e) {
                e[c].apply(e, d)
            });
            return this
        }
    });
    jindo.$A(["appear", "disappear"]).forEach(function(c) {
        b[c] = function(f, g) {
            var d = this._elements.length;
            var e = this;
            this._elements.forEach(function(l, h) {
                if (h == d - 1) {
                    l[c](f, function() {
                        g(e)
                    })
                } else {
                    l[c](f)
                }
            });
            return this
        }
    })
})(jindo.$ElementList.prototype);
jindo.$S = function(b) {
    var a = arguments.callee;
    if (typeof b == "undefined") {
        b = ""
    }
    if (b instanceof a) {
        return b
    }
    if (!(this instanceof a)) {
        return new a(b)
    }
    this._str = b + ""
};
jindo.$S.prototype.$value = function() {
    return this._str
};
jindo.$S.prototype.toString = jindo.$S.prototype.$value;
jindo.$S.prototype.trim = function() {
    if ("".trim) {
        jindo.$S.prototype.trim = function() {
            return jindo.$S(this._str.trim())
        }
    } else {
        jindo.$S.prototype.trim = function() {
            return jindo.$S(this._str.replace(/^(\s|　)+/g, "").replace(/(\s|　)+$/g, ""))
        }
    }
    return jindo.$S(this.trim())
};
jindo.$S.prototype.escapeHTML = function() {
    var b = {
        '"': "quot",
        "&": "amp",
        "<": "lt",
        ">": "gt",
        "'": "#39"
    };
    var a = this._str.replace(/[<>&"']/g, function(c) {
        return b[c] ? "&" + b[c] + ";" : c
    });
    return jindo.$S(a)
};
jindo.$S.prototype.stripTags = function() {
    return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig, ""))
};
jindo.$S.prototype.times = function(c) {
    var a = [];
    for (var b = 0; b < c; b++) {
        a[a.length] = this._str
    }
    return jindo.$S(a.join(""))
};
jindo.$S.prototype.unescapeHTML = function() {
    var b = {
        quot: '"',
        amp: "&",
        lt: "<",
        gt: ">",
        "#39": "'"
    };
    var a = this._str.replace(/&([a-z]+|#[0-9]+);/g, function(d, c) {
        return b[c] ? b[c] : d
    });
    return jindo.$S(a)
};
jindo.$S.prototype.escape = function() {
    var a = this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g, function(d, c, b) {
        if (c) {
            return escape(c).replace(/%/g, "\\")
        }
        return (b = {
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t"
        })[d] ? b[d] : "\\" + d
    });
    return jindo.$S(a)
};
jindo.$S.prototype.bytes = function(d) {
    var e = 0,
        b = 0,
        c = 0,
        a = this._str.length;
    var h = ((document.charset || document.characterSet || document.defaultCharset) + "");
    var f, g;
    if (typeof d == "undefined") {
        f = false
    } else {
        if (d.constructor == Number) {
            f = true;
            g = d
        } else {
            if (d.constructor == Object) {
                h = d.charset || h;
                g = d.size || false;
                f = !!g
            } else {
                f = false
            }
        }
    }
    if (h.toLowerCase() == "utf-8") {
        for (c = 0; c < a; c++) {
            e = this._str.charCodeAt(c);
            if (e < 128) {
                b += 1
            } else {
                if (e < 2048) {
                    b += 2
                } else {
                    if (e < 65536) {
                        b += 3
                    } else {
                        b += 4
                    }
                }
            }
            if (f && b > g) {
                this._str = this._str.substr(0, c);
                break
            }
        }
    } else {
        for (c = 0; c < a; c++) {
            b += (this._str.charCodeAt(c) > 128) ? 2 : 1;
            if (f && b > g) {
                this._str = this._str.substr(0, c);
                break
            }
        }
    }
    return f ? this : b
};
jindo.$S.prototype.parseString = function() {
    if (this._str == "") {
        return {}
    }
    var h = this._str.split(/&/g),
        l, c, g, a = {},
        d = false;
    for (var b = 0; b < h.length; b++) {
        c = h[b].substring(0, l = h[b].indexOf("=")), d = false;
        try {
            g = decodeURIComponent(h[b].substring(l + 1))
        } catch (f) {
            d = true;
            g = decodeURIComponent(unescape(h[b].substring(l + 1)))
        }
        if (c.substr(c.length - 2, 2) == "[]") {
            c = c.substring(0, c.length - 2);
            if (typeof a[c] == "undefined") {
                a[c] = []
            }
            a[c][a[c].length] = d ? escape(g) : g
        } else {
            a[c] = d ? escape(g) : g
        }
    }
    return a
};
jindo.$S.prototype.escapeRegex = function() {
    var a = this._str;
    var b = /([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
    return jindo.$S(a.replace(b, "\\$1"))
};
jindo.$S.prototype.format = function() {
    var b = arguments;
    var a = 0;
    var c = this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g, function(m, l, g, f, d) {
        var e = b[a++];
        var h = "",
            n = "";
        f = f ? +f : 0;
        if (d == "s") {
            h = e + ""
        } else {
            if (" bcdoxX".indexOf(d) > 0) {
                if (typeof e != "number") {
                    return ""
                }
                h = (d == "c") ? String.fromCharCode(e) : e.toString(({
                    b: 2,
                    d: 10,
                    o: 8,
                    x: 16,
                    X: 16
                })[d]);
                if (" X".indexOf(d) > 0) {
                    h = h.toUpperCase()
                }
            }
        }
        if (h.length < f) {
            n = jindo.$S(l || " ").times(f - h.length).toString()
        }(g == "-") ? (h += n) : (h = n + h);
        return h
    });
    return jindo.$S(c)
};
jindo.$Document = function(b) {
    var a = arguments.callee;
    if (b instanceof a) {
        return b
    }
    if (!(this instanceof a)) {
        return new a(b)
    }
    this._doc = b || document;
    this._docKey = this.renderingMode() == "Standards" ? "documentElement" : "body"
};
jindo.$Document.prototype.$value = function() {
    return this._doc
};
jindo.$Document.prototype.scrollSize = function() {
    var a = navigator.userAgent.indexOf("WebKit") > -1;
    var b = this._doc[a ? "body" : this._docKey];
    return {
        width: Math.max(b.scrollWidth, b.clientWidth),
        height: Math.max(b.scrollHeight, b.clientHeight)
    }
};
jindo.$Document.prototype.scrollPosition = function() {
    var a = navigator.userAgent.indexOf("WebKit") > -1;
    var b = this._doc[a ? "body" : this._docKey];
    return {
        left: b.scrollLeft || window.pageXOffset || window.scrollX || 0,
        top: b.scrollTop || window.pageYOffset || window.scrollY || 0
    }
};
jindo.$Document.prototype.clientSize = function() {
    var c = navigator.userAgent;
    var a = this._doc[this._docKey];
    var b = c.indexOf("WebKit") > -1 && c.indexOf("Chrome") == -1;
    return (b) ? {
        width: window.innerWidth,
        height: window.innerHeight
    } : {
        width: a.clientWidth,
        height: a.clientHeight
    }
};
jindo.$Document.prototype.renderingMode = function() {
    var b = navigator.userAgent;
    var d = (typeof window.opera == "undefined" && b.indexOf("MSIE") > -1);
    var a = (b.indexOf("WebKit") > -1 && b.indexOf("Chrome") < 0 && navigator.vendor.indexOf("Apple") > -1);
    var c;
    if ("compatMode" in this._doc) {
        c = this._doc.compatMode == "CSS1Compat" ? "Standards" : (d ? "Quirks" : "Almost")
    } else {
        c = a ? "Standards" : "Quirks"
    }
    return c
};
jindo.$Document.prototype.queryAll = function(a) {
    return jindo.$$(a, this._doc)
};
jindo.$Document.prototype.query = function(a) {
    return jindo.$$.getSingle(a, this._doc)
};
jindo.$Document.prototype.xpathAll = function(a) {
    return jindo.$$.xpath(a, this._doc)
};
jindo.$Form = function(b) {
    var a = arguments.callee;
    if (b instanceof a) {
        return b
    }
    if (!(this instanceof a)) {
        return new a(b)
    }
    b = jindo.$(b);
    if (!b.tagName || b.tagName.toUpperCase() != "FORM") {
        throw new Error("The element should be a FORM element")
    }
    this._form = b
};
jindo.$Form.prototype.$value = function() {
    return this._form
};
jindo.$Form.prototype.serialize = function() {
    var a = this;
    var d = {};
    var c = arguments.length;
    var e = function(g) {
        var f = a.value(g);
        if (typeof f != "undefined") {
            d[g] = f
        }
    };
    if (c == 0) {
        jindo.$A(this.element()).forEach(function(f) {
            if (f.name) {
                e(f.name)
            }
        })
    } else {
        for (var b = 0; b < c; b++) {
            e(arguments[b])
        }
    }
    return jindo.$H(d).toQueryString()
};
jindo.$Form.prototype.element = function(a) {
    if (arguments.length > 0) {
        return this._form[a]
    }
    return this._form.elements
};
jindo.$Form.prototype.enable = function() {
    var e = arguments[0];
    if (typeof e == "object") {
        var a = this;
        jindo.$H(e).forEach(function(f, g) {
            a.enable(g, f)
        });
        return this
    }
    var c = this.element(e);
    if (!c) {
        return this
    }
    c = c.nodeType == 1 ? [c] : c;
    if (arguments.length < 2) {
        var d = true;
        jindo.$A(c).forEach(function(f) {
            if (f.disabled) {
                d = false;
                jindo.$A.Break()
            }
        });
        return d
    } else {
        var b = arguments[1];
        jindo.$A(c).forEach(function(f) {
            f.disabled = !b
        });
        return this
    }
};
jindo.$Form.prototype.value = function(e) {
    if (typeof e == "object") {
        var b = this;
        jindo.$H(e).forEach(function(f, g) {
            b.value(g, f)
        });
        return this
    }
    var d = this.element(e);
    if (!d) {
        throw new Error("엘리먼트는 존재하지 않습니다.")
    }
    d = d.nodeType == 1 ? [d] : d;
    if (arguments.length > 1) {
        var a = arguments[1];
        jindo.$A(d).forEach(function(l) {
            switch (l.type) {
                case "radio":
                    l.checked = (l.value == a);
                    break;
                case "checkbox":
                    if (a.constructor == Array) {
                        l.checked = jindo.$A(a).has(l.value)
                    } else {
                        l.checked = (l.value == a)
                    }
                    break;
                case "select-one":
                    var g = -1;
                    for (var h = 0, f = l.options.length; h < f; h++) {
                        if (l.options[h].value == a) {
                            g = h
                        }
                    }
                    l.selectedIndex = g;
                    break;
                case "select-multiple":
                    var g = -1;
                    if (a.constructor == Array) {
                        var m = jindo.$A(a);
                        for (var h = 0, f = l.options.length; h < f; h++) {
                            l.options[h].selected = m.has(l.options[h].value)
                        }
                    } else {
                        for (var h = 0, f = l.options.length; h < f; h++) {
                            if (l.options[h].value == a) {
                                g = h
                            }
                        }
                        l.selectedIndex = g
                    }
                    break;
                default:
                    l.value = a;
                    break
            }
        });
        return this
    }
    var c = [];
    jindo.$A(d).forEach(function(h) {
        switch (h.type) {
            case "radio":
            case "checkbox":
                if (h.checked) {
                    c.push(h.value)
                }
                break;
            case "select-one":
                if (h.selectedIndex != -1) {
                    c.push(h.options[h.selectedIndex].value)
                }
                break;
            case "select-multiple":
                if (h.selectedIndex != -1) {
                    for (var g = 0, f = h.options.length; g < f; g++) {
                        if (h.options[g].selected) {
                            c.push(h.options[g].value)
                        }
                    }
                }
                break;
            default:
                c.push(h.value);
                break
        }
    });
    return c.length > 1 ? c : c[0]
};
jindo.$Form.prototype.submit = function(b, a) {
    var c = null;
    if (typeof b == "string") {
        c = this._form.target;
        this._form.target = b
    }
    if (typeof b == "function") {
        a = b
    }
    if (typeof a != "undefined") {
        if (!a(this._form)) {
            return this
        }
    }
    this._form.submit();
    if (c !== null) {
        this._form.target = c
    }
    return this
};
jindo.$Form.prototype.reset = function(a) {
    if (typeof a != "undefined") {
        if (!a(this._form)) {
            return this
        }
    }
    this._form.reset();
    return this
};
jindo.$Template = function(d) {
    var c = null,
        a = "";
    var b = arguments.callee;
    if (d instanceof b) {
        return d
    }
    if (!(this instanceof b)) {
        return new b(d)
    }
    if (typeof d == "undefined") {
        d = ""
    } else {
        if ((c = document.getElementById(d) || d) && c.tagName && (a = c.tagName.toUpperCase()) && (a == "TEXTAREA" || (a == "SCRIPT" && c.getAttribute("type") == "text/template"))) {
            d = (c.value || c.innerHTML).replace(/^\s+|\s+$/g, "")
        }
    }
    this._str = d + ""
};
jindo.$Template.splitter = /(?!\\)[\{\}]/g;
jindo.$Template.pattern = /^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+))$/;
jindo.$Template.prototype.process = function(data) {
    var key = "\x01";
    var leftBrace = "\x02";
    var rightBrace = "\x03";
    var tpl = (" " + this._str + " ").replace(/\\{/g, leftBrace).replace(/\\}/g, rightBrace).replace(/(?!\\)\}\{/g, "}" + key + "{").split(jindo.$Template.splitter),
        i = tpl.length;
    var map = {
        '"': '\\"',
        "\\": "\\\\",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\f": "\\f"
    };
    var reg = [/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_][\w\.]*)/g, /[\n\r\t\f"\\]/g, /^\s+/, /\s+$/, /#/g];
    var cb = [function(m) {
        return (m.substring(0, 1) == '"' || m.substring(0, 1) == "'" || m == "null") ? m : "d." + m
    }, function(m) {
        return map[m] || m
    }, "", ""];
    var stm = [];
    var lev = 0;
    tpl[0] = tpl[0].substr(1);
    tpl[i - 1] = tpl[i - 1].substr(0, tpl[i - 1].length - 1);
    if (i < 2) {
        return tpl[0]
    }
    tpl = jindo.$A(tpl).reverse().$value();
    var delete_info;
    while (i--) {
        if (i % 2) {
            tpl[i] = tpl[i].replace(jindo.$Template.pattern, function() {
                var m = arguments;
                if (m[10]) {
                    return m[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g, function() {
                        var mm = arguments;
                        var str = "d." + mm[1] + "=";
                        if (mm[2]) {
                            str += "d." + mm[2]
                        } else {
                            str += mm[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g, function(m) {
                                return (m.substring(0, 1) == "=") ? "d." + m.replace("=", "") : m
                            })
                        }
                        return str
                    }) + ";"
                }
                if (m[9]) {
                    return "s[i++]=" + m[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g, function(m) {
                        return (m.substring(0, 1) == "=") ? "d." + m.replace("=", "") : m
                    }) + ";"
                }
                if (m[8]) {
                    return "s[i++]= d." + m[8] + ";"
                }
                if (m[1]) {
                    return "if(" + m[1].replace(reg[0], cb[0]).replace(/d\.(typeof) /, "$1 ").replace(/ d\.(instanceof) d\./, " $1 ") + "){"
                }
                if (m[2]) {
                    return "}else if(" + m[2].replace(reg[0], cb[0]).replace(/d\.(typeof) /, "$1 ").replace(/ d\.(instanceof) d\./, " $1 ") + "){"
                }
                if (m[5]) {
                    delete_info = m[4];
                    var _aStr = [];
                    _aStr.push("var t#=d." + m[5] + "||{},p#=isArray(t#),i#=0;");
                    _aStr.push("for(var x# in t#){");
                    _aStr.push("if(!t#.hasOwnProperty(x#)){continue;}");
                    _aStr.push("	if( (p# && isNaN(i#=parseInt(x#,10))) || (!p# && !t#.propertyIsEnumerable(x#)) ) continue;");
                    _aStr.push("	d." + m[4] + "=t#[x#];");
                    _aStr.push(m[3] ? "d." + m[3] + "=p#?i#:x#;" : "");
                    return _aStr.join("").replace(reg[4], lev++)
                }
                if (m[6]) {
                    return "}else{"
                }
                if (m[7]) {
                    if (m[7] == "for") {
                        return "delete d." + delete_info + "; };"
                    } else {
                        return "};"
                    }
                }
                return m[0]
            })
        } else {
            if (tpl[i] == key) {
                tpl[i] = ""
            } else {
                if (tpl[i]) {
                    tpl[i] = 's[i++]="' + tpl[i].replace(reg[1], cb[1]) + '";'
                }
            }
        }
    }
    tpl = jindo.$A(tpl).reverse().$value().join("").replace(new RegExp(leftBrace, "g"), "{").replace(new RegExp(rightBrace, "g"), "}");
    var _aStr = [];
    _aStr.push("var s=[],i=0;");
    _aStr.push('function isArray(o){ return Object.prototype.toString.call(o) == "[object Array]" };');
    _aStr.push(tpl);
    _aStr.push('return s.join("");');
    tpl = eval("false||function(d){" + _aStr.join("") + "}");
    tpl = tpl(data);
    return tpl
};
jindo.$Date = function(h) {
    var c = arguments,
        f = "";
    var b = arguments.callee;
    if (h && h instanceof b) {
        return h
    }
    if (!(this instanceof b)) {
        return new b(c[0], c[1], c[2], c[3], c[4], c[5], c[6])
    }
    if ((f = typeof h) == "string") {
        if (/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(h)) {
            try {
                this._date = new Date(h);
                if (!this._date.toISOString) {
                    this._date = jindo.$Date.makeISO(h)
                } else {
                    if (this._date.toISOString() == "Invalid Date") {
                        this._date = jindo.$Date.makeISO(h)
                    }
                }
            } catch (g) {
                this._date = jindo.$Date.makeISO(h)
            }
        } else {
            this._date = b.parse(h)
        }
    } else {
        if (f == "number") {
            if (typeof c[1] == "undefined") {
                this._date = new Date(h)
            } else {
                for (var d = 0; d < 7; d++) {
                    if (typeof c[d] != "number") {
                        c[d] = 1
                    }
                }
                this._date = new Date(c[0], c[1], c[2], c[3], c[4], c[5], c[6])
            }
        } else {
            if (f == "object" && h.constructor == Date) {
                (this._date = new Date).setTime(h.getTime());
                this._date.setMilliseconds(h.getMilliseconds())
            } else {
                this._date = new Date
            }
        }
    }
    this._names = {};
    for (var d in jindo.$Date.names) {
        if (jindo.$Date.names.hasOwnProperty(d)) {
            this._names[d] = jindo.$Date.names[d]
        }
    }
};
jindo.$Date.makeISO = function(d) {
    var b = d.match(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/);
    var a = parseInt(b[4] || 0, 10);
    var c = parseInt(b[5] || 0, 10);
    if (b[8] == "Z") {
        a += jindo.$Date.utc
    } else {
        if (b[9] == "+" || b[9] == "-") {
            a += (jindo.$Date.utc - parseInt(b[9] + b[10], 10));
            c += parseInt(b[9] + b[11], 10)
        }
    }
    return new Date(b[1] || 0, parseInt(b[2] || 0, 10) - 1, b[3] || 0, a, c, b[6] || 0, b[7] || 0)
};
jindo.$Date.names = {
    month: ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"],
    s_month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    s_day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    ampm: ["AM", "PM"]
};
jindo.$Date.utc = 9;
jindo.$Date.now = function() {
    return Date.now()
};
jindo.$Date.prototype.name = function(b) {
    if (arguments.length) {
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                this._names[a] = b[a]
            }
        }
    } else {
        return this._names
    }
};
jindo.$Date.parse = function(a) {
    return new Date(Date.parse(a))
};
jindo.$Date.prototype.$value = function() {
    return this._date
};
jindo.$Date.prototype.format = function(c) {
    var f = {};
    var e = this._date;
    var b = this.name();
    var a = this;
    return (c || "").replace(/[a-z]/ig, function g(d) {
        if (typeof f[d] != "undefined") {
            return f[d]
        }
        switch (d) {
            case "d":
            case "j":
                f.j = e.getDate();
                f.d = (f.j > 9 ? "" : "0") + f.j;
                return f[d];
            case "l":
            case "D":
            case "w":
            case "N":
                f.w = e.getDay();
                f.N = f.w ? f.w : 7;
                f.D = b.s_day[f.w];
                f.l = b.day[f.w];
                return f[d];
            case "S":
                return (!!(f.S = ["st", "nd", "rd"][e.getDate()])) ? f.S : (f.S = "th");
            case "z":
                f.z = Math.floor((e.getTime() - (new Date(e.getFullYear(), 0, 1)).getTime()) / (3600 * 24 * 1000));
                return f.z;
            case "m":
            case "n":
                f.n = e.getMonth() + 1;
                f.m = (f.n > 9 ? "" : "0") + f.n;
                return f[d];
            case "L":
                f.L = a.isLeapYear();
                return f.L;
            case "o":
            case "Y":
            case "y":
                f.o = f.Y = e.getFullYear();
                f.y = (f.o + "").substr(2);
                return f[d];
            case "a":
            case "A":
            case "g":
            case "G":
            case "h":
            case "H":
                f.G = e.getHours();
                f.g = (f.g = f.G % 12) ? f.g : 12;
                f.A = f.G < 12 ? b.ampm[0] : b.ampm[1];
                f.a = f.A.toLowerCase();
                f.H = (f.G > 9 ? "" : "0") + f.G;
                f.h = (f.g > 9 ? "" : "0") + f.g;
                return f[d];
            case "i":
                f.i = (((f.i = e.getMinutes()) > 9) ? "" : "0") + f.i;
                return f.i;
            case "s":
                f.s = (((f.s = e.getSeconds()) > 9) ? "" : "0") + f.s;
                return f.s;
            case "u":
                f.u = e.getMilliseconds();
                return f.u;
            case "U":
                f.U = a.time();
                return f.U;
            default:
                return d
        }
    })
};
jindo.$Date.prototype.time = function(a) {
    if (typeof a == "number") {
        this._date.setTime(a);
        return this
    }
    return this._date.getTime()
};
jindo.$Date.prototype.year = function(a) {
    if (typeof a == "number") {
        this._date.setFullYear(a);
        return this
    }
    return this._date.getFullYear()
};
jindo.$Date.prototype.month = function(a) {
    if (typeof a == "number") {
        this._date.setMonth(a);
        return this
    }
    return this._date.getMonth()
};
jindo.$Date.prototype.date = function(a) {
    if (typeof a == "number") {
        this._date.setDate(a);
        return this
    }
    return this._date.getDate()
};
jindo.$Date.prototype.day = function() {
    return this._date.getDay()
};
jindo.$Date.prototype.hours = function(a) {
    if (typeof a == "number") {
        this._date.setHours(a);
        return this
    }
    return this._date.getHours()
};
jindo.$Date.prototype.minutes = function(a) {
    if (typeof a == "number") {
        this._date.setMinutes(a);
        return this
    }
    return this._date.getMinutes()
};
jindo.$Date.prototype.seconds = function(a) {
    if (typeof a == "number") {
        this._date.setSeconds(a);
        return this
    }
    return this._date.getSeconds()
};
jindo.$Date.prototype.isLeapYear = function() {
    var a = this._date.getFullYear();
    return !(a % 4) && !!(a % 100) || !(a % 400)
};
jindo.$Window = function(b) {
    var a = arguments.callee;
    if (b instanceof a) {
        return b
    }
    if (!(this instanceof a)) {
        return new a(b)
    }
    this._win = b || window
};
jindo.$Window.prototype.$value = function() {
    return this._win
};
jindo.$Window.prototype.resizeTo = function(b, a) {
    this._win.resizeTo(b, a);
    return this
};
jindo.$Window.prototype.resizeBy = function(b, a) {
    this._win.resizeBy(b, a);
    return this
};
jindo.$Window.prototype.moveTo = function(b, a) {
    this._win.moveTo(b, a);
    return this
};
jindo.$Window.prototype.moveBy = function(b, a) {
    this._win.moveBy(b, a);
    return this
};
jindo.$Window.prototype.sizeToContent = function(g, h) {
    if (typeof this._win.sizeToContent == "function") {
        this._win.sizeToContent()
    } else {
        if (arguments.length != 2) {
            var f, d;
            var m = this._win;
            var l = this._win.document;
            if (m.innerHeight) {
                f = m.innerWidth;
                d = m.innerHeight
            } else {
                if (l.documentElement && l.documentElement.clientHeight) {
                    f = l.documentElement.clientWidth;
                    d = l.documentElement.clientHeight
                } else {
                    if (l.body) {
                        f = l.body.clientWidth;
                        d = l.body.clientHeight
                    }
                }
            }
            var e, c;
            var b = l.body.scrollHeight;
            var a = l.body.offsetHeight;
            if (b > a) {
                e = l.body.scrollWidth;
                c = l.body.scrollHeight
            } else {
                e = l.body.offsetWidth;
                c = l.body.offsetHeight
            }
            g = e - f;
            h = c - d
        }
        this.resizeBy(g, h)
    }
    return this
};
if (typeof window != "undefined") {
    for (prop in jindo) {
        if (jindo.hasOwnProperty(prop)) {
            window[prop] = jindo[prop]
        }
    }
}
var Music = $Class({
    $init: function() {
        this.flashNotiUI = new Music.bgmFlashNotiUI(this);
        try {
            if (!isParentHiddenFrame()) {
                if ($("blog-music")) {
                    this.widgetUI = new Music.bgmJsUI(this);
                    this.widgetUI.displayMusicPlayer();
                    this.widgetUI.disable()
                }
                return
            }
            var b = parent.hiddenFrame.flashMusicPlayer;
            if (!b) {
                return
            }
            var a = b.getPlayListContainer;
            if (a && typeof a == "function") {
                this.playListContainer = a()
            } else {
                return
            }
            var c = b.initMusicPlayer;
            var f = this;
            if (c && typeof c == "function") {
                setTimeout(function() {
                    try {
                        c(function(e) {
                            f._init(e)
                        }, function() {
                            f.postStop();
                            f.stop()
                        })
                    } catch (g) {
                        utility.nvl_error(g, blogURL + "/music.js/FlashMusic/$init", g.lineNumber)
                    }
                }, 100)
            }
        } catch (d) {
            utility.nvl_error(d, blogURL + "/music.js/FlashMusic/$init", d.lineNumber)
        }
    },
    _init: function(a) {
        if (!a) {
            return
        }
        this.playingMusicIndex = 0;
        this.widgetPlayList = null;
        this.postPlayList = null;
        this.widgetNextPlayCallback = $Fn(this.nextPlay, this).bind();
        this.postNextPlayCallback = $Fn(this.postNextPlay, this).bind();
        this.isPlayPost = false;
        if ($("blog-music")) {
            this.widgetUI = new Music.bgmJsUI(this)
        }
        this.postUI = new Music.JsUI(this);
        this.widgetPlayList = this.playListContainer.getWidgetPlayList();
        this.player = a;
        this.setEvent();
        if (!this.widgetUI || !this.widgetPlayList || this.widgetPlayList.size() <= 0) {
            return
        }
        if (this.player.onPause()) {
            this.widgetUI.displayMusicPlayer();
            return
        }
        this.widgetUI.displayMusicPlayer();
        var b = this.player.getVolume() ? this.player.getVolume() : 80;
        this.player.setPlayNextCallback(this.widgetNextPlayCallback);
        this.widgetUI.setVolume(b);
        if (typeof isAutoPlayYN != "undefined" && isAutoPlayYN && this.hasPlayingObject()) {
            return
        }
        if (this.player.onPlay()) {
            song = this.widgetPlayList.getCurrent();
            this.widgetUI.playWithTitle(this._makeTitle(song))
        }
        if (blogId == userId) {
            this.play()
        }
    },
    setEvent: function() {
        $Fn(this._onKeyDown, this).attach(document, "keydown");
        $Fn(this._onPageUnload, this).attach(window, "unload")
    },
    _onKeyDown: function(a) {
        if (typeof a == "undefined") {
            return
        }
        if (a.key().keyCode == 27) {
            this.postStop();
            this.stop()
        }
    },
    _onPageUnload: function(a) {
        this.postStop()
    },
    play: function(b, d) {
        if (typeof d != "object") {
            d = null
        }
        var a = this.player;
        var c = this.widgetUI;
        this.postStop();
        if (d == null) {
            d = this.widgetPlayList.getCurrent()
        }
        if (d.trackId == a.getCurrentTrackId()) {
            if (a.onPause()) {
                a.resume()
            }
            c.playWithTitle(this._makeTitle(d));
            return
        }
        this.isPlayPost = false;
        a.pause();
        a.play(d.trackId);
        c.playWithTitle(this._makeTitle(d));
        this.player.setPlayNextCallback(this.widgetNextPlayCallback);
        if (d.trackId != this.widgetPlayList.getCurrent().trackId) {
            this.widgetPlayList.setCurrent(d.trackId)
        }
    },
    stop: function() {
        var a = this.player;
        if (!a) {
            return
        }
        if (!this.isPlayPost && a.onPlay()) {
            a.pause();
            if (this.widgetUI) {
                this.widgetUI.stop()
            }
        }
    },
    pause: function() {
        this.stop()
    },
    nextPlay: function() {
        this.play(null, this.widgetPlayList.getNext())
    },
    prevPlay: function() {
        this.play(null, this.widgetPlayList.getPrev())
    },
    setVolume: function(a) {
        if (!a) {
            return
        }
        this.player.volume(a);
        this.widgetUI.setVolume(a)
    },
    setBlogMusicList: function() {
        parent.document.location.href = adminURL + "/AdminMain.nhn?blogId=" + blogId + "&Redirect=ItembagMu"
    },
    popBlogMusicList: function() {
        window.open(mylogURL + "/blogMusicBGMPlayList.nhn?blogId=" + blogId, "playlist", "scrollbars=yes,status=yes,width=334,height=309")
    },
    getWidgetPlayList: function() {
        return this.widgetPlayList
    },
    _makeTitle: function(b) {
        try {
            var c = artist = null;
            if (b) {
                c = (typeof b.itemName != "undefined") ? b.itemName : ""
            }
            if (b) {
                artist = (typeof b.artistName != "undefined") ? b.artistName : ""
            }
            if (b && b.artistId != "0") {
                c += " - " + artist
            }
            return c
        } catch (a) {
            utility.nvl_error(a, blogURL + "/music.js/Music/makeTitle", a.lineNumber);
            throw a
        }
    },
    postPlay: function(c, b, e) {
        var a = (b + "").split("|");
        var d = this;
        this.playListContainer.populatePostPlayList(a, function() {
            d._doPostPlay(c, e, a)
        })
    },
    _doPostPlay: function(b, c, a) {
        this.postStop();
        this.stop();
        this.postPlayList = this.playListContainer.getPostPlayList();
        if (this.postPlayList.size() == 0) {
            return
        }
        this.postUI.setId(c);
        this.postPlayList.setCurrent(a[b - 1]);
        this.postPlayReal(this.postPlayList.getCurrent());
        this.player.setPlayNextCallback(this.postNextPlayCallback)
    },
    postPlayReal: function(a) {
        if (!a) {
            return
        }
        this.isPlayPost = true;
        this.player.play(a.trackId);
        this.postUI.playWithTitle(this._makeTitle(a))
    },
    postStop: function(a) {
        if (this.isPlayPost && this.player.onPlay()) {
            this.player.pause();
            this.postUI.stop();
            this.postPlayList = null
        }
    },
    postNextPlay: function() {
        if (this.postPlayList == null) {
            return
        }
        this.postPlayReal(this.postPlayList.getNext())
    },
    postPrevPlay: function() {
        if (this.postPlayList == null) {
            return
        }
        this.postPlayReal(this.postPlayList.getPrev())
    },
    hasPlayingObject: function() {
        var c = document.getElementsByTagName("EMBED");
        var a = document.getElementsByTagName("OBJECT");
        for (var b = 0; b < c.length; b++) {
            if (c[b].PlayState == 2 || c[b].PlayState == 3) {
                return true
            }
        }
        for (var b = 0; b < a.length; b++) {
            if (a[b].PlayState == 2 || a[b].PlayState == 3) {
                return true
            }
        }
        return false
    },
    playBlogMusic: function(a) {},
    resetMusic: function(a) {}
});
var MusicFlashNoti = {
    showFlashNoti: function() {
        var a = $Element("blog-music-flash-noti");
        if (a != null) {
            a.show()
        }
    },
    hideFlashNoti: function() {
        var a = $Element("blog-music-flash-noti");
        if (a != null) {
            a.hide()
        }
    }
};
Music.bgmFlashNotiUI = $Class({
    $init: function() {
        this._setEvents()
    },
    _setEvents: function() {
        $Fn(this._onClick, this).attach($("blog-music-flash-noti"), "click")
    },
    _onClick: function(b) {
        var a = $Element(b.element);
        if (a.hasClass("_notiClose")) {
            $Element("blog-music-flash-noti").hide()
        }
    }
});
Music.bgmJsUI = $Class({
    $init: function(a) {
        this._title = "";
        this._bActivation = true;
        this._setEvents()
    },
    _setEvents: function() {
        $Fn(this._onClick, this).attach($("blog-music"), "click");
        $Fn(this._onVolumeControl, this).attach($$("#blog-music ._volumeControl"), "mousedown")
    },
    _onClick: function(b) {
        var a = $Element(b.element);
        var c = b.element;
        if (!this._bActivation) {
            return
        }
        if (a.hasClass("_playBtn")) {
            clickcr(c, "muw.play", "", "", b.$value());
            music.play()
        } else {
            if (a.hasClass("_pauseBtn")) {
                clickcr(c, "muw.pause", "", "", b.$value());
                music.pause()
            } else {
                if (a.hasClass("_prevBtn")) {
                    clickcr(c, "muw.prev", "", "", b.$value());
                    music.prevPlay()
                } else {
                    if (a.hasClass("_nextBtn")) {
                        clickcr(c, "muw.next", "", "", b.$value());
                        music.nextPlay()
                    } else {
                        if (a.hasClass("_setBtn")) {
                            clickcr(c, "muw.setting", "", "", b.$value());
                            music.setBlogMusicList()
                        } else {
                            if (a.hasClass("_listBtn")) {
                                clickcr(c, "muw.list", "", "", b.$value());
                                music.popBlogMusicList()
                            }
                        }
                    }
                }
            }
        }
        b.stop()
    },
    _onVolumeControl: function(b) {
        if (!this._bActivation) {
            return
        }
        var d = $Element($$.getSingle("#blog-music ._volumeBar"));
        var f = d.width();
        var e = d.offset().left;
        var c = $Fn(function(g) {
            var l = g.pos().pageX - e;
            var h = l * 100 / f;
            if (h > 100) {
                h = 100
            } else {
                if (h < 0) {
                    h = 0
                }
            }
            this.setVolume(h);
            music.setVolume(h);
            g.stop()
        }, this);
        var a = $Fn(function(g) {
            c.detach(document, "mousemove");
            a.detach(document, "mouseup");
            g.stop()
        }, this);
        c.attach(document, "mousemove");
        a.attach(document, "mouseup");
        b.stop()
    },
    displayMusicPlayer: function() {
        $Element("blog-music").show();
        return true
    },
    disable: function() {
        this._bActivation = false
    },
    setTitle: function(a) {
        this._title = a;
        $ElementList("#blog-music ._songTitle").html(a)
    },
    play: function() {
        if ($$("#blog-music ._titlePlaying").length <= 0) {
            $Element($$.getSingle("#blog-music ._titleStopped")).afterHTML("<marquee class='_songTitle _titlePlaying' scrollamount='1' scrolldelay='90' scrollleft='100' direction='left'>" + this._title + "</marquee>")
        } else {
            $ElementList("#blog-music ._titlePlaying").show("block")
        }
        $ElementList("#blog-music ._titleStopped").hide();
        $ElementList("#blog-music ._playBtn").hide();
        $ElementList("#blog-music ._pauseBtn").show()
    },
    playWithTitle: function(a) {
        this.setTitle(a);
        this.play()
    },
    stop: function() {
        $ElementList("#blog-music ._titlePlaying").hide();
        $ElementList("#blog-music ._titleStopped").show();
        $ElementList("#blog-music ._playBtn").show();
        $ElementList("#blog-music ._pauseBtn").hide()
    },
    setVolume: function(a) {
        $ElementList("#blog-music ._volumeControl").css("left", a + "%");
        $ElementList("#blog-music ._volumeBarMeter").css("width", a + "%")
    }
});
Music.JsUI = $Class({
    $init: function(a) {
        this._upObj = a;
        this.title = null;
        this.id = null;
        this.status = false
    },
    setId: function(a) {
        this.id = a
    },
    getId: function() {
        return this.id
    },
    play: function(a) {
        if (typeof a != "undefined") {
            this.setId(a)
        }
        this.realPlay()
    },
    realPlay: function() {
        try {
            var c = this.getId();
            var b = $("bgmname" + c);
            if ($("playimg1" + c)) {
                $("playimg1" + c).style.display = "none"
            }
            if ($("playimg2" + c)) {
                $("playimg2" + c).style.display = "inline"
            }
            if (b) {
                this.toggleTitle("play")
            }
            this.status = true
        } catch (a) {
            utility.nvl_error(a, blogURL + "/music.js/Music.JsUI/realPlay", a.lineNumber);
            throw a
        }
    },
    stop: function() {
        var b = this.getId();
        if (b != null) {
            var a = $("bgmname" + b);
            if (a) {
                if ($("playimg1" + b)) {
                    $("playimg1" + b).style.display = "inline"
                }
                if ($("playimg2" + b)) {
                    $("playimg2" + b).style.display = "none"
                }
                this.toggleTitle("stop")
            }
            this.status = false
        }
    },
    toggleTitle: function(b) {
        try {
            var d = $("bgmname" + this.getId());
            var c = d.className == "mp01b" ? true : false;
            var f = "";
            var l = function(p, n, o) {
                var e = 0;
                for (var m = 0; m < p.length; m++) {
                    e += (p.charCodeAt(m) > 128) ? 2 : 1;
                    if (e > n) {
                        return p.substring(0, m) + o
                    }
                }
                return p
            };
            var h = "";
            if (b == "play") {
                if (c) {
                    h = "white-space: nowrap; word-wrap: normal; height: 13px;margin:0; padding:0; font-family:'돋움'; font-size:12px; color:#000000; line-height:16px;"
                } else {
                    h = "white-space: nowrap; word-wrap: normal; height: 13px;margin:0; padding:0; font-family:'돋움'; font-size:12px; color:#ffffff; line-height:15px;"
                }
                d.innerHTML = "<marquee scrollAmount=1 scrollDelay=90 scrollLeft=100 direction=left height='13' style=\"" + h + '">' + this.title + "</marquee>"
            } else {
                var a = c ? 10 : 24;
                var f = l(this.title, a, "..");
                if (c) {
                    h = "margin:0; padding:0; font-family:'돋움'; font-size:12px; color:#000000; line-height:16px;"
                } else {
                    h = "margin:0; padding:0; font-family:'돋움'; font-size:12px; color:#ffffff; line-height:15px;"
                }
                d.innerHTML = '<p style="' + h + '">' + f + "</p>"
            }
        } catch (g) {
            utility.nvl_error(g, blogURL + "/music.js/Music.JsUI/toggleTitle", g.lineNumber);
            throw g
        }
    },
    setTitle: function(a) {
        this.title = a
    },
    playWithTitle: function(a, b) {
        this.setTitle(a);
        this.play(b)
    }
});

function isParentHiddenFrame() {
    try {
        if (!parent || !parent.hiddenFrame || !parent.hiddenFrame.document || typeof parent == "undefined" || typeof parent.hiddenFrame == "undefined") {
            return false
        }
    } catch (a) {
        return false
    }
    return true
}
var MusicIframe = function() {
    this.PlayPost1 = function(b, a, c) {
        music.postPlay(b, a, c)
    }, this.PlayPost = function(b, a, c) {
        if (music) {
            music.postPlay(b, a, c)
        }
    }, this.StopPost = function() {
        if (music) {
            music.postStop()
        }
    }, this.PrevPost = function() {
        if (music) {
            music.postPrevPlay()
        }
    }, this.NextPost = function() {
        if (music) {
            music.postNextPlay()
        }
    }
};
var musiciframe = new MusicIframe();
(function(F) {
    var z = {
        nnb: true
    };
    var A = "v0.6.0";
    var l = {};
    var g = {};
    var I = {};
    var s = 0;

    function o(J) {
        if (typeof J === "undefined") {
            return J
        }
        if (window.location.protocol === "https:") {
            return J.replace(/^https:\/\/(prologue|photolog|videolog|lifelog|memolog).blog.naver.com\//, "https://blog.naver.com/")
        }
        return J.replace(/^http:\/\/(prologue|photolog|videolog|lifelog|memolog).blog.naver.com\//, "http://blog.naver.com/")
    }

    function y(M, S, O) {
        if (!window.lcs_SerName) {
            window.lcs_SerName = "lcs.naver.com"
        } else {
            window.lcs_SerName = window.lcs_SerName.replace(/^https?:\/\//, "")
        }
        var N = "";
        var T;
        var R;
        var W = document;
        var L = window.location;
        var X;
        try {
            X = (L.protocol ? L.protocol : "http:") + "//" + window.lcs_SerName + "/m?"
        } catch (U) {
            return
        }
        var V = "";
        var Q = "";
        try {
            if (O !== "" && O !== null && typeof O !== "undefined") {
                Q = L.protocol + "//" + O + ".blog.me"
            } else {
                Q = L.protocol + "//www.blog.me"
            }
            if (S) {
                V = Q
            } else {
                V = o(L.href)
            }
            N = X + "u=" + encodeURIComponent(V) + "&e=" + (W.referrer ? encodeURIComponent(W.referrer) : "")
        } catch (U) {}
        try {
            if (typeof l.i == "undefined") {
                l.i = ""
            }
            if (s < 1) {
                B();
                if (z.nnb) {
                    v()
                }
                l.ct = D();
                n();
                b();
                r()
            }
            for (T in g) {
                if (typeof g[T] !== "function") {
                    N += "&" + T + "=" + encodeURIComponent(g[T])
                }
            }
            for (T in l) {
                R = l[T];
                if (R !== undefined && typeof R !== "function") {
                    N += "&" + T + "=" + encodeURIComponent(R)
                }
            }
            if (s < 1) {
                for (T in I) {
                    R = I[T];
                    if (R) {
                        N += "&" + T + "=" + encodeURIComponent(R)
                    }
                }
            }
            for (T in M) {
                if ((T.length >= 3 && typeof M[T] !== "function") || T === "qy") {
                    N += "&" + T + "=" + encodeURIComponent(M[T])
                }
            }
            if (!!M === false || !!M.pid === false) {
                var K;
                if (window.g_pid) {
                    K = g_pid
                } else {
                    K = m()
                }
                N += "&pid=" + encodeURIComponent(K)
            }
            var J = new Date().getTime();
            N += "&ts=" + J;
            N += "&EOU";
            var P = document.createElement("img");
            P.src = N;
            P.onload = function() {
                P.onload = null;
                return
            };
            s++
        } catch (U) {
            return
        }
    }

    function a(K, J, N, L) {
        try {
            if (K) {
                l.i = K;
                y(J, N, L)
            }
        } catch (M) {}
    }

    function v() {
        try {
            var K = localStorage;
            if (K) {
                if (K.ls) {
                    var L = K.ls;
                    if (L.length == 13) {
                        l.ls = L;
                        return
                    }
                }
                var J = f();
                if (J != null && J != "") {
                    K.ls = J;
                    l.ls = J
                }
            }
        } catch (M) {}
    }

    function B() {
        g.os = p();
        g.ln = H();
        g.sr = d();
        g.pr = window.devicePixelRatio || 1;
        var J = t();
        g.bw = J.bw;
        g.bh = J.bh;
        g.c = G();
        g.j = c();
        g.k = E()
    }

    function p() {
        var J = "";
        try {
            navigator.platform ? (J = navigator.platform) : ""
        } catch (K) {}
        return J
    }

    function H() {
        var J = "";
        try {
            navigator.userLanguage ? (J = navigator.userLanguage) : navigator.language ? (J = navigator.language) : ""
        } catch (K) {}
        return J
    }

    function d() {
        var L = "";
        try {
            if (window.screen && screen.width && screen.height) {
                L = screen.width + "x" + screen.height
            } else {
                if (window.java || self.java) {
                    var J = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                    L = J.width + "x" + J.height
                }
            }
        } catch (K) {
            L = ""
        }
        return L
    }

    function t() {
        var L = document;
        var J = {
            bw: "",
            bh: ""
        };
        try {
            J.bw = L.documentElement.clientWidth ? L.documentElement.clientWidth : L.body.clientWidth;
            J.bh = L.documentElement.clientHeight ? L.documentElement.clientHeight : L.body.clientHeight
        } catch (K) {}
        return J
    }

    function G() {
        var J = "";
        try {
            if (window.screen) {
                J = screen.colorDepth ? screen.colorDepth : screen.pixelDepth
            } else {
                if (window.java || self.java) {
                    var L = java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
                    J = L
                }
            }
        } catch (K) {
            J = ""
        }
        return J
    }

    function c() {
        var J = "";
        try {
            J = navigator.javaEnabled() ? "Y" : "N"
        } catch (K) {}
        return J
    }

    function E() {
        var J = "";
        try {
            J = navigator.cookieEnabled ? "Y" : "N"
        } catch (K) {}
        return J
    }

    function f() {
        try {
            var M = document.cookie;
            var L, K, N, J = M.split(";");
            for (N = 0; N < J.length; N++) {
                L = J[N].substr(0, J[N].indexOf("="));
                K = J[N].substr(J[N].indexOf("=") + 1);
                L = L.replace(/^\s+|\s+$/g, "");
                if (L == "NNB") {
                    return unescape(K)
                }
            }
        } catch (O) {}
    }

    function D() {
        var O = "";
        try {
            var M = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (M && typeof M.type != "undefined") {
                switch (M.type) {
                    case M.CELL_2G:
                        O = "2g";
                        break;
                    case M.CELL_3G:
                        O = "3g";
                        break;
                    case M.CELL_4G:
                        O = "4g";
                        break;
                    case M.WIFI:
                        O = "wifi";
                        break;
                    case M.ETHERNET:
                        O = "eth";
                        break;
                    case M.UNKNOWN:
                        O = "unknown";
                        break;
                    case M.NONE:
                        O = "none";
                        break;
                    default:
                        O = ""
                }
            } else {
                if (typeof blackberry != "undefined" && typeof blackberry.network != "undefined") {
                    var L = blackberry.network;
                    if (L == "Wi-Fi") {
                        O = "wifi"
                    } else {
                        if (L == "3G") {
                            O = "3g"
                        } else {
                            O = L
                        }
                    }
                } else {
                    var K = navigator.appName == "Microsoft Internet Explorer";
                    var J = navigator.userAgent.indexOf("MAC") >= 0;
                    if (K && !J && P && P.addBehavior) {
                        var P = document.body;
                        var R = "";
                        var N = P.addBehavior("#default#clientCaps");
                        O = P.connectionType;
                        P.removeBehavior(N)
                    }
                }
            }
        } catch (Q) {
            console.warn(Q)
        }
        return O
    }

    function n() {
        var M = window.performance || {};
        if (M.timing) {
            var L = M.timing;
            for (var J in L) {
                var K = L[J];
                if (typeof K === "number") {
                    I[J] = K
                }
            }
        }
    }

    function b() {
        var L = window.performance || {};
        try {
            if (L.getEntriesByType) {
                var K = L.getEntriesByType("paint");
                K.forEach(function(O, P, M) {
                    var N = O.name;
                    switch (N) {
                        case "first-paint":
                        case "first-contentful-paint":
                            I[N] = O.startTime;
                            break;
                        default:
                            break
                    }
                })
            } else {}
        } catch (J) {
            console.warn(J)
        }
    }

    function r() {
        var J = C();
        if (J !== undefined) {
            I.ngt = J
        }
    }

    function C() {
        var J = window.performance || {};
        if (J.navigation) {
            return J.navigation.type
        }
        return
    }
    var w = null;

    function e() {
        var N;
        var J = localStorage.ls;
        if (J) {
            N = J
        } else {
            var K;
            K = navigator.userAgent + Math.random();
            N = K
        }
        var O = window.performance || {};
        var M = location.href;
        var L;
        if (O.now) {
            L = O.now()
        } else {
            L = new Date().getTime()
        }
        w = q.md5(N + M + L);
        return w
    }

    function m() {
        if (w === null) {
            w = e()
        }
        return w
    }

    function u() {
        w = e();
        return w
    }
    var q = {};
    (function(Y) {
        function X(ad, ag) {
            var af = (ad & 65535) + (ag & 65535);
            var ae = (ad >> 16) + (ag >> 16) + (af >> 16);
            return (ae << 16) | (af & 65535)
        }

        function W(ad, ae) {
            return (ad << ae) | (ad >>> (32 - ae))
        }

        function R(ai, af, ae, ad, ah, ag) {
            return X(W(X(X(af, ai), X(ad, ag)), ah), ae)
        }

        function J(af, ae, aj, ai, ad, ah, ag) {
            return R((ae & aj) | (~ae & ai), af, ae, ad, ah, ag)
        }

        function O(af, ae, aj, ai, ad, ah, ag) {
            return R((ae & ai) | (aj & ~ai), af, ae, ad, ah, ag)
        }

        function U(af, ae, aj, ai, ad, ah, ag) {
            return R(ae ^ aj ^ ai, af, ae, ad, ah, ag)
        }

        function ab(af, ae, aj, ai, ad, ah, ag) {
            return R(aj ^ (ae | ~ai), af, ae, ad, ah, ag)
        }

        function L(an, ai) {
            an[ai >> 5] |= 128 << ai % 32;
            an[(((ai + 64) >>> 9) << 4) + 14] = ai;
            var af;
            var ah;
            var ag;
            var ae;
            var ad;
            var am = 1732584193;
            var al = -271733879;
            var ak = -1732584194;
            var aj = 271733878;
            for (af = 0; af < an.length; af += 16) {
                ah = am;
                ag = al;
                ae = ak;
                ad = aj;
                am = J(am, al, ak, aj, an[af], 7, -680876936);
                aj = J(aj, am, al, ak, an[af + 1], 12, -389564586);
                ak = J(ak, aj, am, al, an[af + 2], 17, 606105819);
                al = J(al, ak, aj, am, an[af + 3], 22, -1044525330);
                am = J(am, al, ak, aj, an[af + 4], 7, -176418897);
                aj = J(aj, am, al, ak, an[af + 5], 12, 1200080426);
                ak = J(ak, aj, am, al, an[af + 6], 17, -1473231341);
                al = J(al, ak, aj, am, an[af + 7], 22, -45705983);
                am = J(am, al, ak, aj, an[af + 8], 7, 1770035416);
                aj = J(aj, am, al, ak, an[af + 9], 12, -1958414417);
                ak = J(ak, aj, am, al, an[af + 10], 17, -42063);
                al = J(al, ak, aj, am, an[af + 11], 22, -1990404162);
                am = J(am, al, ak, aj, an[af + 12], 7, 1804603682);
                aj = J(aj, am, al, ak, an[af + 13], 12, -40341101);
                ak = J(ak, aj, am, al, an[af + 14], 17, -1502002290);
                al = J(al, ak, aj, am, an[af + 15], 22, 1236535329);
                am = O(am, al, ak, aj, an[af + 1], 5, -165796510);
                aj = O(aj, am, al, ak, an[af + 6], 9, -1069501632);
                ak = O(ak, aj, am, al, an[af + 11], 14, 643717713);
                al = O(al, ak, aj, am, an[af], 20, -373897302);
                am = O(am, al, ak, aj, an[af + 5], 5, -701558691);
                aj = O(aj, am, al, ak, an[af + 10], 9, 38016083);
                ak = O(ak, aj, am, al, an[af + 15], 14, -660478335);
                al = O(al, ak, aj, am, an[af + 4], 20, -405537848);
                am = O(am, al, ak, aj, an[af + 9], 5, 568446438);
                aj = O(aj, am, al, ak, an[af + 14], 9, -1019803690);
                ak = O(ak, aj, am, al, an[af + 3], 14, -187363961);
                al = O(al, ak, aj, am, an[af + 8], 20, 1163531501);
                am = O(am, al, ak, aj, an[af + 13], 5, -1444681467);
                aj = O(aj, am, al, ak, an[af + 2], 9, -51403784);
                ak = O(ak, aj, am, al, an[af + 7], 14, 1735328473);
                al = O(al, ak, aj, am, an[af + 12], 20, -1926607734);
                am = U(am, al, ak, aj, an[af + 5], 4, -378558);
                aj = U(aj, am, al, ak, an[af + 8], 11, -2022574463);
                ak = U(ak, aj, am, al, an[af + 11], 16, 1839030562);
                al = U(al, ak, aj, am, an[af + 14], 23, -35309556);
                am = U(am, al, ak, aj, an[af + 1], 4, -1530992060);
                aj = U(aj, am, al, ak, an[af + 4], 11, 1272893353);
                ak = U(ak, aj, am, al, an[af + 7], 16, -155497632);
                al = U(al, ak, aj, am, an[af + 10], 23, -1094730640);
                am = U(am, al, ak, aj, an[af + 13], 4, 681279174);
                aj = U(aj, am, al, ak, an[af], 11, -358537222);
                ak = U(ak, aj, am, al, an[af + 3], 16, -722521979);
                al = U(al, ak, aj, am, an[af + 6], 23, 76029189);
                am = U(am, al, ak, aj, an[af + 9], 4, -640364487);
                aj = U(aj, am, al, ak, an[af + 12], 11, -421815835);
                ak = U(ak, aj, am, al, an[af + 15], 16, 530742520);
                al = U(al, ak, aj, am, an[af + 2], 23, -995338651);
                am = ab(am, al, ak, aj, an[af], 6, -198630844);
                aj = ab(aj, am, al, ak, an[af + 7], 10, 1126891415);
                ak = ab(ak, aj, am, al, an[af + 14], 15, -1416354905);
                al = ab(al, ak, aj, am, an[af + 5], 21, -57434055);
                am = ab(am, al, ak, aj, an[af + 12], 6, 1700485571);
                aj = ab(aj, am, al, ak, an[af + 3], 10, -1894986606);
                ak = ab(ak, aj, am, al, an[af + 10], 15, -1051523);
                al = ab(al, ak, aj, am, an[af + 1], 21, -2054922799);
                am = ab(am, al, ak, aj, an[af + 8], 6, 1873313359);
                aj = ab(aj, am, al, ak, an[af + 15], 10, -30611744);
                ak = ab(ak, aj, am, al, an[af + 6], 15, -1560198380);
                al = ab(al, ak, aj, am, an[af + 13], 21, 1309151649);
                am = ab(am, al, ak, aj, an[af + 4], 6, -145523070);
                aj = ab(aj, am, al, ak, an[af + 11], 10, -1120210379);
                ak = ab(ak, aj, am, al, an[af + 2], 15, 718787259);
                al = ab(al, ak, aj, am, an[af + 9], 21, -343485551);
                am = X(am, ah);
                al = X(al, ag);
                ak = X(ak, ae);
                aj = X(aj, ad)
            }
            return [am, al, ak, aj]
        }

        function V(ae) {
            var af;
            var ad = "";
            var ag = ae.length * 32;
            for (af = 0; af < ag; af += 8) {
                ad += String.fromCharCode((ae[af >> 5] >>> af % 32) & 255)
            }
            return ad
        }

        function Q(ae) {
            var ag;
            var ad = [];
            ad[(ae.length >> 2) - 1] = undefined;
            for (ag = 0; ag < ad.length; ag += 1) {
                ad[ag] = 0
            }
            var af = ae.length * 8;
            for (ag = 0; ag < af; ag += 8) {
                ad[ag >> 5] |= (ae.charCodeAt(ag / 8) & 255) << ag % 32
            }
            return ad
        }

        function P(ad) {
            return V(L(Q(ad), ad.length * 8))
        }

        function ac(af, ai) {
            var ae;
            var ah = Q(af);
            var ad = [];
            var ag = [];
            var aj;
            ad[15] = ag[15] = undefined;
            if (ah.length > 16) {
                ah = L(ah, af.length * 8)
            }
            for (ae = 0; ae < 16; ae += 1) {
                ad[ae] = ah[ae] ^ 909522486;
                ag[ae] = ah[ae] ^ 1549556828
            }
            aj = L(ad.concat(Q(ai)), 512 + ai.length * 8);
            return V(L(ag.concat(aj), 512 + 128))
        }

        function aa(ag) {
            var af = "0123456789abcdef";
            var ae = "";
            var ad;
            var ah;
            for (ah = 0; ah < ag.length; ah += 1) {
                ad = ag.charCodeAt(ah);
                ae += af.charAt((ad >>> 4) & 15) + af.charAt(ad & 15)
            }
            return ae
        }

        function S(ad) {
            return unescape(encodeURIComponent(ad))
        }

        function M(ad) {
            return P(S(ad))
        }

        function T(ad) {
            return aa(M(ad))
        }

        function K(ad, ae) {
            return ac(S(ad), S(ae))
        }

        function Z(ad, ae) {
            return aa(K(ad, ae))
        }

        function N(ae, af, ad) {
            if (!af) {
                if (!ad) {
                    return T(ae)
                }
                return M(ae)
            }
            if (!ad) {
                return Z(af, ae)
            }
            return K(af, ae)
        }
        Y.md5 = N
    })(q);

    function h(K, L) {
        if (document.readyState === "complete") {
            setTimeout(L, 0)
        } else {
            var J = "onpageshow" in K ? "pageshow" : "load";
            K.addEventListener(J, function() {
                setTimeout(L, 0)
            })
        }
    }
    F.lcs_do = function(J, L, K) {
        h(F, function() {
            y(J, L, K)
        })
    };
    F.lcs_do_gdid = function(K, J, M, L) {
        h(F, function() {
            a(K, J, M, L)
        })
    };
    F.lcs_get_lpid = m;
    F.lcs_update_lpid = u;
    F.lcs_version = A
})(window);
if (typeof nclk == "undefined") {
    nclk = {}
}
if (!g_pid) {
    var g_pid = ""
}
if (!g_sid) {
    var g_sid = ""
}
if (!ccsrv) {
    var ccsrv = "cc.naver.com"
}
if (!nsc) {
    var nsc = "decide.me"
}
if (!g_nclk_proxy) {
    var g_nclk_proxy = ""
}
nclk.vs = "0.3.2";
nclk.md = "cc";
nclk.pt = (window.location.protocol == "https:") ? "https:" : "http:";
nclk.ct = 0;
nclk.ec = encodeURIComponent;
nclk.st = 1;

function nclk_proxy(h, b, d, f, c, e) {
    if (g_nclk_proxy && h.href) {
        h.href = g_nclk_proxy + nclk.ec(h.href)
    }
    return nclk(h, b, d, f, c, e)
}

function nclk(s, u, n, b, c, q, p) {
    var f, h, w, t;
    var v = s;
    var d = s;
    if ("nodeType" in s && s.nodeType >= 1) {
        v = window.event || s
    } else {
        d = s.srcElement || s.currentTarget || s.target
    }
    if (!q) {
        q = ""
    }
    t = nclk.gcp(d, v);
    w = nclk.gl(u, n, b, t, "", 0, nclk.st, q, p);
    h = nclk.l(d, w);
    nclk.sd(h);
    return true
}

function nclk_v2(q, t, h, b, p, n) {
    var d, f, v, s;
    var u = q;
    var c = q;
    if ("nodeType" in q && q.nodeType >= 1) {
        u = window.event || q
    } else {
        c = q.srcElement || q.currentTarget || q.target
    }
    if (!p) {
        p = ""
    }
    s = nclk.gcp(c, u);
    v = nclk.gl(t, h, b, s, "", 0, nclk.st, p, n);
    f = nclk.l(c, v);
    nclk.sd(f);
    return true
}
nclk.l = function(d, b) {
    var a, e, c;
    if (d && d.href) {
        e = d.tagName.toLowerCase();
        c = d.href.toLowerCase();
        if (c && c.indexOf(nclk.pt + "//" + ccsrv) == 0) {
            a = d.href
        } else {
            if (c && c.indexOf(nclk.pt + "//" + ccsrv) != 0 && e && e != "img") {
                a = b + "&u=" + nclk.ec(d.href)
            }
        }
        return a
    }
    return b + "&u=about%3Ablank"
};
nclk.sd = function(a, c) {
    var d = 0;
    var g;
    if (nclk.ct > 0) {
        var b = new Date().getTime();
        a += "&nt=" + b
    }
    if (typeof c == "function") {
        d = 1
    }
    var e = new Image();
    e.src = a;
    e.onload = function() {
        if (g) {
            clearTimeout(g)
        }
        if (d) {
            c()
        }
        e.onload = null;
        return
    };
    e.onerror = function() {
        if (g) {
            clearTimeout(g)
        }
        if (d) {
            c()
        }
        e.onerror = null;
        return
    };
    if (d) {
        g = setTimeout(function() {
            c()
        }, 5000)
    }
    nclk.ct++
};
nclk.gl = function(p, e, b, o, q, c, t, h, f) {
    var n = window;
    if (c == undefined) {
        c = 1
    }
    if (t == undefined) {
        t = 1
    }
    var d = nclk.pt + "//" + ccsrv + "/" + nclk.md + "?a=" + p + "&r=" + b + "&i=" + e + "&m=" + c;
    if (t == 1) {
        if (n.g_ssc) {
            d += "&ssc=" + g_ssc
        }
        if (n.g_query) {
            d += "&q=" + nclk.ec(g_query)
        }
        if (n.g_sid) {
            d += "&s=" + g_sid
        }
        if (f) {
            d += "&p=" + f
        } else {
            if (n.g_pid) {
                d += "&p=" + g_pid
            } else {
                if (n.lcs_get_lpid) {
                    d += "&p=" + lcs_get_lpid()
                } else {
                    console.warn("'g_pid / lcs_get_lpid' is not exist.")
                }
            }
        }
    } else {
        d += "&nsc=" + nsc;
        console.warn("[DEPRECATED] NSC mode")
    }
    if (h) {
        d += "&g=" + h
    }
    if (q) {
        d += "&u=" + nclk.ec(q)
    }
    if (o) {
        d += o
    }
    return d
};
nclk.al = function(c, b) {
    var a = window;
    if (a.addEventListener) {
        a.addEventListener(c, b, false)
    } else {
        if (a.attachEvent) {
            a.attachEvent("on" + c, b)
        }
    }
};
nclk.oo = "";
nclk.of = "";
if ("onpageshow" in window) {
    nclk.al("pageshow", function() {
        nclk.oo.onclick = nclk.of
    })
}
nclk.go = function(c) {
    var b;
    var a = c.onclick;
    c.onclick = "";
    nclk.oo = c;
    nclk.of = a;
    if (document.createEvent) {
        b = document.createEvent("MouseEvents");
        b.initMouseEvent("click", false, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        c.dispatchEvent(b)
    } else {
        if (document.createEventObject) {
            c.fireEvent("onclick")
        } else {
            if (MouseEvent) {
                b = new MouseEvent("click", {
                    bubbles: false,
                    cancelable: false,
                    view: window
                });
                c.dispatchEvent(b)
            }
        }
    }
    c.onclick = a
};
nclk.gsbw = function() {
    var c = document.createElement("p");
    c.style.width = "200px";
    c.style.height = "200px";
    var d = document.createElement("div");
    d.style.position = "absolute";
    d.style.top = "0px";
    d.style.left = "0px";
    d.style.visibility = "hidden";
    d.style.width = "200px";
    d.style.height = "150px";
    d.style.overflow = "hidden";
    d.appendChild(c);
    document.body.appendChild(d);
    var b = c.offsetWidth;
    d.style.overflow = "scroll";
    var a = c.offsetWidth;
    if (b == a) {
        a = d.clientWidth
    }
    document.body.removeChild(d);
    return (b - a)
};
nclk.fp = function(b) {
    var c = curtop = 0;
    try {
        if (b.offsetParent) {
            do {
                c += b.offsetLeft;
                curtop += b.offsetTop
            } while (b = b.offsetParent)
        } else {
            if (b.x || b.y) {
                if (b.x) {
                    c += b.x
                }
                if (b.y) {
                    curtop += b.y
                }
            }
        }
    } catch (a) {}
    return [c, curtop]
};
nclk.ws = function(c) {
    if (!c) {
        c = window
    }
    var a = 0;
    if (c.innerWidth) {
        a = c.innerWidth;
        if (typeof(c.innerWidth) == "number") {
            var b = nclk.gsbw();
            a = c.innerWidth - b
        }
    } else {
        if (document.documentElement && document.documentElement.clientWidth) {
            a = document.documentElement.clientWidth
        } else {
            if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                a = document.body.clientWidth
            }
        }
    }
    return a
};
nclk.ci = function(h) {
    var d = document.URL;
    var g = h.parentNode;
    var a;
    var c;
    var b;
    if (g == null || g == undefined) {
        return false
    }
    while (1) {
        if (g.nodeName.toLowerCase() == "#document") {
            if (g.parentWindow) {
                a = g.parentWindow
            } else {
                a = g.defaultView
            }
            try {
                if (a.frameElement != null && a.frameElement != undefined) {
                    if (a.frameElement.nodeName.toLowerCase() == "iframe") {
                        c = a.frameElement.id;
                        if (!c) {
                            return false
                        }
                        return c
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            } catch (f) {
                return false
            }
        } else {
            g = g.parentNode;
            if (g == null || g == undefined) {
                return false
            }
        }
    }
};
nclk.gcp = function(g, m) {
    var o = -1;
    var n = -1;
    var q = -1;
    var p = -1;
    var b, a, d;
    var c = "";
    var f = window.event ? window.event : g;
    if (m) {
        f = m || window.event
    }
    try {
        bw = nclk.ws(window);
        d = nclk.ci(g);
        if (d) {
            var h = nclk.fp(document.getElementById(d));
            if (f.clientX && f.clientX != undefined) {
                b = document.body;
                if (b.clientLeft && b.clientTop) {
                    ifrSx = f.clientX - b.clientLeft;
                    ifrSy = f.clientY - b.clientTop
                } else {
                    ifrSx = f.clientX;
                    ifrSy = f.clientY
                }
            }
            q = h[0] + ifrSx;
            p = h[1] + ifrSy;
            if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
                b = document.body;
                o = q - b.scrollLeft;
                n = p - b.scrollTop
            } else {
                if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
                    a = document.documentElement;
                    o = q - a.scrollLeft;
                    n = p - a.scrollTop
                } else {
                    o = q;
                    n = p
                }
            }
        } else {
            if (f.clientX && f.clientX != undefined) {
                b = document.body;
                if (b.clientLeft && b.clientTop) {
                    o = f.clientX - b.clientLeft;
                    n = f.clientY - b.clientTop
                } else {
                    o = f.clientX;
                    n = f.clientY
                }
            }
            if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
                q = document.body.scrollLeft + (o < 0 ? 0 : o);
                p = document.body.scrollTop + (n < 0 ? 0 : n)
            } else {
                if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
                    a = document.documentElement;
                    if (a.scrollLeft != undefined) {
                        q = a.scrollLeft + (o < 0 ? 0 : o)
                    }
                    if (a.scrollTop != undefined) {
                        p = a.scrollTop + (n < 0 ? 0 : n)
                    }
                } else {
                    q = (o < 0 ? 0 : o);
                    p = (n < 0 ? 0 : n)
                }
            }
            if (f.pageX) {
                q = f.pageX
            }
            if (f.pageY) {
                p = f.pageY
            }
        }
    } catch (m) {}
    if ((q != -1) && (p != -1)) {
        c += "&px=" + q + "&py=" + p
    }
    if ((o != -1) && (n != -1)) {
        c += "&sx=" + o + "&sy=" + n
    }
    return c
};

function nclkR(b, d, f, c, e) {
    window.location.href = nclk.gl(b, d, f, c, 1, nclk.st, e)
}

function nclkF(c, e, m, n, h, d) {
    var d = d || "about:blank";
    var b = nclk.gl(c, e, m, d, 0, nclk.st, h);
    nclk.sd(b, n)
}
if (typeof(window.defineNHNJS) == "undefined") {
    window.defineNHNJS = {}
}
window.defineNHNJS["RabbitPostWriteForm-394041202_js"] = true;