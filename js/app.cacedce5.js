(function (t) {
    function a(a) {
        for (var s, n, o = a[0], r = a[1], l = a[2], p = 0, d = []; p < o.length; p++) n = o[p], Object.prototype.hasOwnProperty.call(i, n) && i[n] && d.push(i[n][0]), i[n] = 0;
        for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        v && v(a);
        while (d.length) d.shift()();
        return c.push.apply(c, l || []), e()
    }

    function e() {
        for (var t, a = 0; a < c.length; a++) {
            for (var e = c[a], s = !0, o = 1; o < e.length; o++) {
                var r = e[o];
                0 !== i[r] && (s = !1)
            }
            s && (c.splice(a--, 1), t = n(n.s = e[0]))
        }
        return t
    }

    var s = {}, i = {app: 0}, c = [];

    function n(a) {
        if (s[a]) return s[a].exports;
        var e = s[a] = {i: a, l: !1, exports: {}};
        return t[a].call(e.exports, e, e.exports, n), e.l = !0, e.exports
    }

    n.m = t, n.c = s, n.d = function (t, a, e) {
        n.o(t, a) || Object.defineProperty(t, a, {enumerable: !0, get: e})
    }, n.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, a) {
        if (1 & a && (t = n(t)), 8 & a) return t;
        if (4 & a && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (n.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }), 2 & a && "string" != typeof t) for (var s in t) n.d(e, s, function (a) {
            return t[a]
        }.bind(null, s));
        return e
    }, n.n = function (t) {
        var a = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return n.d(a, "a", a), a
    }, n.o = function (t, a) {
        return Object.prototype.hasOwnProperty.call(t, a)
    }, n.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [], r = o.push.bind(o);
    o.push = a, o = o.slice();
    for (var l = 0; l < o.length; l++) a(o[l]);
    var v = r;
    c.push([0, "chunk-vendors"]), e()
})({
    0: function (t, a, e) {
        t.exports = e("56d7")
    }, "034f": function (t, a, e) {
        "use strict";
        e("85ec")
    }, "56d7": function (t, a, e) {
        "use strict";
        e.r(a);
        e("e260"), e("e6cf"), e("cca6"), e("a79d");
        var s = e("2b0e"), i = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {attrs: {id: "app"}}, [e("div", {staticClass: "wrapper"}, [e("div", {staticClass: "green"}), e("div", {staticClass: "grey"}), e("div", {staticClass: "col webapp"}, [e("div", {staticClass: "container"}, [t._m(0), e("div", {staticClass: "col right"}, [t._m(1), e("div", {staticClass: "col main-chat"}, t._l(t.messages, (function (a) {
                return e("div", {
                    key: a.id,
                    staticClass: "single-chat active"
                }, [t.compareKey(a.key) ? e("div", {staticClass: "messaggio greeny"}, [e("p", {staticClass: "greeny"}, [t._v(t._s(a.text)), e("span", [t._v(t._s(a.nickname))]), e("i", {staticClass: "fas fa-angle-down"})]), e("ul", {staticClass: "dropdown"}, [e("li", {
                    staticClass: "cancella",
                    attrs: {href: "#"},
                    on: {
                        click: function (e) {
                            return e.preventDefault(), t.deleteMessage(a)
                        }
                    }
                }, [t._v("Cancella")])])]) : e("div", {staticClass: "messaggio white"}, [e("p", {staticClass: "white"}, [t._v(t._s(a.text)), e("span", [t._v(t._s(a.nickname))]), e("i", {staticClass: "fas fa-angle-down"})]), t._m(2, !0)])])
            })), 0), e("div", {staticClass: "write-chat"}, [e("div", {staticClass: "inviotesto"}, [e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.nickname,
                    expression: "nickname"
                }],
                attrs: {type: "text", name: "", placeholder: "Nickname"},
                domProps: {value: t.nickname},
                on: {
                    input: function (a) {
                        a.target.composing || (t.nickname = a.target.value)
                    }
                }
            })]), e("div", {staticClass: "inviotesto"}, [e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.messageText,
                    expression: "messageText"
                }],
                attrs: {type: "text", name: "", placeholder: "Scrivi..."},
                domProps: {value: t.messageText},
                on: {
                    keyup: function (a) {
                        return a.type.indexOf("key") || 13 === a.keyCode ? t.storeMessage.apply(null, arguments) : null
                    }, input: function (a) {
                        a.target.composing || (t.messageText = a.target.value)
                    }
                }
            })]), e("div", {staticClass: "send"}, [e("em", {
                staticClass: "fas fa-paper-plane",
                on: {click: t.storeMessage}
            })])])])])])]), t._m(3)])
        }, c = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "col left"}, [e("div", {staticClass: "profilo"}, [e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "img/avatar_1.jpg",
                    alt: ""
                }
            })]), e("div", {staticClass: "right-nav"}, [e("ul", [e("li", [e("a", {attrs: {href: "#"}}, [e("em", {staticClass: "fas fa-circle-notch"})])]), e("li", [e("a", {attrs: {href: "#"}}, [e("em", {staticClass: "fas fa-comment-alt"})])]), e("li", [e("a", {attrs: {href: "#"}}, [e("em", {staticClass: "fas fa-ellipsis-v"})])])])])]), e("div", {staticClass: "col notifiche"}, [e("div", {staticClass: "col bell"}, [e("em", {staticClass: "fas fa-bell-slash"})]), e("div", {staticClass: "col notifiche-text"}, [e("h4", [t._v("Ricevi notifiche di nuovi messaggi")]), e("a", {attrs: {href: "#"}}, [t._v("Attiva notifiche desktop")])])]), e("div", {staticClass: "find"}, [e("div", {staticClass: "find-wrapper"}, [e("label", [e("em", {staticClass: "fas fa-search"})]), e("input", {
                attrs: {
                    type: "text",
                    placeholder: "Cerca o inizia una nuova chat"
                }
            })])]), e("div", {staticClass: "col contatti"}, [e("div", {
                staticClass: "col singolo-contatto",
                attrs: {"data-contact": "0"}
            }, [e("div", {staticClass: "col avatar"}, [e("img", {
                attrs: {
                    src: "img/avatar_2.jpg",
                    alt: ""
                }
            })]), e("div", {staticClass: "col contatto-nome"}, [e("h4", [t._v("Chat 1")]), e("p", [t._v("Description for Chat 1")]), e("span", [t._v("17.45")])])]), e("div", {
                staticClass: "col singolo-contatto",
                attrs: {"data-contact": "1"}
            }, [e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "img/avatar_3.jpg",
                    alt: ""
                }
            })]), e("div", {staticClass: "contatto-nome"}, [e("h4", [t._v("Chat 2")]), e("p", [t._v("Description for Chat 2")]), e("span", [t._v("17.45")])])]), e("div", {
                staticClass: "col singolo-contatto",
                attrs: {"data-contact": "2"}
            }, [e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "img/avatar_4.jpg",
                    alt: ""
                }
            })]), e("div", {staticClass: "contatto-nome"}, [e("h4", [t._v("Chat 3")]), e("p", [t._v("Description for Chat 3")]), e("span", [t._v("17.45")])])]), e("div", {
                staticClass: "col singolo-contatto",
                attrs: {"data-contact": "3"}
            }, [e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "img/avatar_5.jpg",
                    alt: ""
                }
            })]), e("div", {staticClass: "contatto-nome"}, [e("h4", [t._v("Chat 4")]), e("p", [t._v("Description for Chat 4")]), e("span", [t._v("17.45")])])])])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "header-chat"}, [e("div", {staticClass: "col singolo-contatto attuale"}, [e("div", {staticClass: "col avatar "}, [e("img", {
                attrs: {
                    src: "img/avatar_2.jpg",
                    alt: ""
                }
            })]), e("div", {staticClass: "col contatto-nome-header"}, [e("h4", [t._v("Chat 1")]), e("p", {staticClass: "col"}, [t._v("Ultimo accesso alle 17.30")])])]), e("div", {staticClass: "col right-nav"}, [e("ul", [e("li", [e("a", {attrs: {href: "#"}}, [e("em", {staticClass: "fas fa-search"})])]), e("li", [e("a", {attrs: {href: "#"}}, [e("em", {staticClass: "fas fa-paperclip"})])]), e("li", [e("a", {attrs: {href: "#"}}, [e("em", {staticClass: "fas fa-ellipsis-v"})])])])])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("ul", {staticClass: "dropdown"}, [e("li", {staticClass: "cancella"}, [t._v("Cancella messaggio")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "tonotshow"}, [e("div", {staticClass: "messaggio"}, [e("p", [e("span"), e("em", {staticClass: "fas fa-angle-down"})]), e("ul", {staticClass: "dropdown"}, [e("li", {staticClass: "cancella"}, [t._v("Cancella messaggio")])])])])
        }], n = e("5530"), o = (e("7db0"), e("a434"), e("260b")), r = e("66ce"), l = {
            apiKey: "AIzaSyD7E2P-fB8XsPgbog48SGWBen01Wknm6A4",
            authDomain: "vue-school-chat-room-1e335.firebaseapp.com",
            databaseURL: "https://vue-school-chat-room-1e335-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "vue-school-chat-room-1e335",
            storageBucket: "vue-school-chat-room-1e335.appspot.com",
            messagingSenderId: "986188631810",
            appId: "1:986188631810:web:c8b6822dd8878d6e51fc1b"
        }, v = Object(o["a"])(l), p = Object(r["a"])(v), d = Object(r["e"])(p, "messages"), u = {
            name: "App", props: {msg: String}, data: function () {
                return {messages: [], messageText: "", nickname: "", key: localStorage.getItem("myPairKey")}
            }, methods: {
                storeMessage: function () {
                    Object(r["d"])(d, {
                        text: this.messageText,
                        nickname: this.nickname,
                        key: this.key
                    }), this.messageText = ""
                }, deleteMessage: function (t) {
                    var a = Object(r["e"])(p, "messages/" + t.id);
                    Object(r["f"])(a)
                }, compareKey: function (t) {
                    return t === this.key
                }
            }, created: function () {
                var t = this;
                Object(r["b"])(d, (function (a) {
                    return t.messages.push(Object(n["a"])(Object(n["a"])({}, a.val()), {}, {id: a.key}))
                })), Object(r["c"])(d, (function (a) {
                    var e = t.messages.find((function (t) {
                        return t.id === a.key
                    })), s = t.messages.indexOf(e);
                    t.messages.splice(s, 1)
                }))
            }, mounted: function () {
                function t(t) {
                    for (var a = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = e.length, i = 0; i < t; i++) a += e.charAt(Math.floor(Math.random() * s));
                    return a
                }

                var a = t(5);
                localStorage.getItem("myPairKey") || localStorage.setItem("myPairKey", a)
            }
        }, f = u, m = (e("034f"), e("2877")), g = Object(m["a"])(f, i, c, !1, null, null, null), h = g.exports;
        s["a"].config.productionTip = !1, new s["a"]({
            render: function (t) {
                return t(h)
            }
        }).$mount("#app")
    }, "85ec": function (t, a, e) {
    }
});
//# sourceMappingURL=app.cacedce5.js.map