(function (e) {
    function t(t) {
        for (var a, s, c = t[0], i = t[1], u = t[2], p = 0, d = []; p < c.length; p++) s = c[p], Object.prototype.hasOwnProperty.call(r, s) && r[s] && d.push(r[s][0]), r[s] = 0;
        for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
        l && l(t);
        while (d.length) d.shift()();
        return o.push.apply(o, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], a = !0, c = 1; c < n.length; c++) {
                var i = n[c];
                0 !== r[i] && (a = !1)
            }
            a && (o.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }

    var a = {}, r = {app: 0}, o = [];

    function s(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.m = e, s.c = a, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], i = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var u = 0; u < c.length; u++) t(c[u]);
    var l = i;
    o.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "034f": function (e, t, n) {
        "use strict";
        n("85ec")
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var a = n("2b0e"), r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {attrs: {id: "app"}}, [n("HelloWorld", {attrs: {msg: "Vue School Chat"}})], 1)
        }, o = [], s = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "container"}, [n("h1", [e._v("Vue School Chat Room")]), e._l(e.messages, (function (t) {
                return n("div", {
                    key: t.id,
                    staticClass: "card"
                }, [n("div", {staticClass: "card-body"}, [n("h6", {staticClass: "card-subtitle mb-2 text-muted"}, [e._v(e._s(t.nickname))]), n("p", {staticClass: "card-text"}, [e._v(e._s(t.text))]), n("a", {
                    staticClass: "card-link",
                    attrs: {href: "#"},
                    on: {
                        click: function (n) {
                            return n.preventDefault(), e.deleteMessage(t)
                        }
                    }
                }, [e._v("delete")])])])
            })), n("hr"), n("form", {
                on: {
                    submit: function (t) {
                        return t.preventDefault(), e.storeMessage.apply(null, arguments)
                    }
                }
            }, [n("div", {staticClass: "form-group"}, [n("label", [e._v("Message:")]), n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.messageText,
                    expression: "messageText"
                }], staticClass: "form-control", domProps: {value: e.messageText}, on: {
                    input: function (t) {
                        t.target.composing || (e.messageText = t.target.value)
                    }
                }
            })]), n("div", {staticClass: "form-group"}, [n("label", [e._v("Nickname:")]), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.nickname,
                    expression: "nickname"
                }], staticClass: "form-control", domProps: {value: e.nickname}, on: {
                    input: function (t) {
                        t.target.composing || (e.nickname = t.target.value)
                    }
                }
            })]), n("button", {staticClass: "btn btn-primary"}, [e._v("Send")])])], 2)
        }, c = [], i = n("5530"), u = (n("7db0"), n("a434"), n("260b")), l = n("66ce"), p = {
            apiKey: "AIzaSyD7E2P-fB8XsPgbog48SGWBen01Wknm6A4",
            authDomain: "vue-school-chat-room-1e335.firebaseapp.com",
            databaseURL: "https://vue-school-chat-room-1e335-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "vue-school-chat-room-1e335",
            storageBucket: "vue-school-chat-room-1e335.appspot.com",
            messagingSenderId: "986188631810",
            appId: "1:986188631810:web:c8b6822dd8878d6e51fc1b"
        }, d = Object(u["a"])(p), f = Object(l["a"])(d), m = Object(l["e"])(f, "messages");
        Object(l["b"])(m, (function (e) {
            console.log(e.val())
        }));
        var b = {
                name: "HelloWorld", props: {msg: String}, data: function () {
                    return {messages: [], messageText: "", nickname: "hootlex"}
                }, methods: {
                    storeMessage: function () {
                        Object(l["d"])(m, {text: this.messageText, nickname: this.nickname}), this.messageText = ""
                    }, deleteMessage: function (e) {
                        var t = Object(l["e"])(f, "messages/" + e.id);
                        Object(l["f"])(t)
                    }
                }, created: function () {
                    var e = this;
                    Object(l["b"])(m, (function (t) {
                        return e.messages.push(Object(i["a"])(Object(i["a"])({}, t.val()), {}, {id: t.key}))
                    })), Object(l["c"])(m, (function (t) {
                        var n = e.messages.find((function (e) {
                            return e.id === t.key
                        })), a = e.messages.indexOf(n);
                        e.messages.splice(a, 1)
                    }))
                }
            }, v = b, g = (n("ae6a"), n("2877")), h = Object(g["a"])(v, s, c, !1, null, "32f38602", null), y = h.exports,
            O = {name: "App", components: {HelloWorld: y}}, x = O,
            j = (n("034f"), Object(g["a"])(x, r, o, !1, null, null, null)), _ = j.exports;
        a["a"].config.productionTip = !1, new a["a"]({
            render: function (e) {
                return e(_)
            }
        }).$mount("#app")
    }, "85ec": function (e, t, n) {
    }, ae6a: function (e, t, n) {
        "use strict";
        n("ddeb")
    }, ddeb: function (e, t, n) {
    }
});
//# sourceMappingURL=app.61d8a19f.js.map