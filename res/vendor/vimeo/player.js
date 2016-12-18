/* VimeoPlayer - v2.45.1 - 2016-12-15 - https://player.vimeo.com/NOTICE.txt */
var VimeoPlayer = function() {
    "use strict";

    function e(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e }

    function t(e, t) {
        return t = { exports: {} }, e(t, t.exports), t.exports }

    function n(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.styleSheets[0];
        try { n.insertRule ? n.insertRule(e + "{" + t + "}", (n.cssRules || n.rules).length) : n.addRule(e, t) } catch (e) {} }

    function i(e) {
        if (e && e.detail > 0) try { document.activeElement.blur() } catch (e) {} }

    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.activeElement,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        try { e.blur() } catch (e) { t && t(e) } }

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.activeElement,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        try { e.focus() } catch (e) { t && t(e) } }

    function a(e) {
        var t = e.getBoundingClientRect();
        return document.msFullscreenElement && window.parent !== window && (t = { bottom: 100 * t.bottom, left: 100 * t.left, top: 100 * t.top, right: 100 * t.right, width: 100 * t.width, height: 100 * t.height }), t }

    function s(e) {
        try {
            return new URL(e).origin } catch (e) {}
        var t = document.createElement("a");
        return t.href = e, t.origin ? t.origin : t.protocol.replace(":", "") + "://" + t.host }

    function c(e) {
        var t = e.width,
            n = e.height,
            i = e.elementWidth,
            r = e.elementHeight,
            o = e.threshold,
            a = void 0 === o ? 10 : o,
            s = 1,
            c = t / n,
            u = i - r * c,
            l = r - i / c;
        if (u > 0 && u < a || l > 0 && l < a) {
            var d = i / (i - u),
                f = r / (r - l);
            s = Math.max(d, f) }
        return { extraWidth: u, extraHeight: l, scaleFactor: s } }

    function u(e, t, n) {
        return e > n ? n : t > e ? t : e }

    function l(e) {
        if (e === !0) return Ve.resolve(null);
        var t = !1;
        return new Ve(function(n, i) {
            var r = function() { t || ! function() { t = !0;
                    var i = (new Date).getTime() - e.startTime;
                    setTimeout(function() {
                        return n(i) }, 100) }() };
            e.link.addEventListener("load", r, !1) }) }

    function d(e, t, n) {
        var i = n.width,
            r = n.height,
            o = n.scrollbars,
            a = void 0 === o ? "yes" : o,
            s = n.resizable,
            c = void 0 === s ? "yes" : s,
            u = n.toolbar,
            l = void 0 === u ? "no" : u,
            d = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - r / 2,
            f = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - i / 2;
        window.chrome && window.navigator.userAgent.toLowerCase().indexOf("mac os x") !== -1 && (r += 27), window.safari && (r += 47);
        var h = "scrollbars=" + a + ",resizable=" + c + ",toolbar=" + l;
        return window.open(e, t, "width=" + i + ",height=" + r + ",left=" + f + ",top=" + d + "," + h) }

    function f(e) {
        var t = e.match(/\ba?t=([0-9hms:]+)/);
        null !== t && (e = t[1]);
        var n = !1,
            i = 0,
            r = 0,
            o = 0;
        if (t = e.match(/^([0-9]+)$/), t && t.length && (n = !0, o = t[1]), n === !1 && (t = e.match(/^(?:([0-9]+)h)?(?:([0-9]+)m)?(?:([0-9]+)s)?/), null !== t && "" !== t[0])) { n = !0;
            var a = t,
                s = Ze(a, 4),
                c = s[1];
            i = void 0 === c ? 0 : c;
            var u = s[2];
            r = void 0 === u ? 0 : u;
            var l = s[3];
            o = void 0 === l ? 0 : l }
        if (n === !1 && (t = e.match(/^([0-9:]+)/), null !== t)) { n = !0;
            var d = e.split(":").reverse(),
                f = Ze(d, 3);
            o = f[0];
            var h = f[1];
            r = void 0 === h ? 0 : h;
            var p = f[2];
            i = void 0 === p ? 0 : p }
        return n ? 60 * parseInt(i, 10) * 60 + 60 * parseInt(r, 10) + parseInt(o, 10) : null }

    function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.method,
            i = void 0 === n ? "GET" : n,
            r = t.withCredentials,
            o = void 0 === r || r,
            a = t.allowErrorStatuses,
            s = void 0 !== a && a;
        return new Ve(function(t, n) {
            var r = new XMLHttpRequest;
            r.open(i, e, !0), o && (r.withCredentials = !0), r.onload = function() {
                return r.status >= 400 && !s ? void n(r.status) : void t(r.responseText) }, r.onerror = function() {
                return n(new Error("The request failed.")) }, r.send() }) }

    function p(e) {
        for (var t, n, i = (e || document).querySelectorAll("[tabindex]"), r = [], o = 0, a = 0, s = i.length; a < s; a++) t = i[a], n = window.getComputedStyle(t, ""), t.tabIndex > 0 && "none" !== n.display && n.opacity > 0 && "hidden" !== n.visibility && (r[o++] = t);
        var c = r.shift();
        c && (c.focus(), c.blur()) }

    function v(e, t) {
        if (e = parseFloat(e), isNaN(e)) return 0;
        var n = Math.pow(10, t || 3);
        return Math.round(e * n) / n }

    function m(e, t) {
        var n, i, r, o, a = 0,
            s = function() { a = new Date, r = null, o = e.apply(n, i) };
        return function() {
            var c = new Date,
                u = t - (c - a);
            return n = this, i = arguments, u <= 0 ? (clearTimeout(r), r = null, a = c, o = e.apply(n, i)) : r || (r = setTimeout(s, u)), o } }

    function g() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
            return (e ^ 16 * Math.random() >> e / 4).toString(16) }) }

    function _(e, t, n, i) {
        var r = i[t];
        return r = w(e, r), r = y(r, n, i.prices), i.expires_in_duration_str && (r = r.replace("{TIME}", i.expires_in_duration_str)), i.available_on_formatted && (r = r.replace("{DATE}", i.available_on_formatted)), r }

    function y(e, t, n) {
        var i = n.USD;
        return t in n && (i = n[t]), e.indexOf("${price}") !== -1 ? e.replace("${price}", i) : e.indexOf("{PRICE}") !== -1 ? e.replace("{PRICE}", i) : e }

    function b(e, t) {
        return !e || 0 === e.length || e.indexOf(t) !== -1 }

    function w(e, t) {
        return "undefined" != typeof e && "undefined" != typeof e[t] ? e[t] : t }

    function k(e, t, n, i) {
        return !i.relatedTarget || (!n || e === t) && (t !== i.relatedTarget && !t.contains(i.relatedTarget)) }

    function x(e, t, n, i) {
        var r = !1;
        i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n, t = "function" == typeof t ? null : t;
        var o = function(e) {
                var t = !0;
                if (e.changedTouches) {
                    var o = e.changedTouches[0].pageX - window.pageXOffset,
                        a = e.changedTouches[0].pageY - window.pageYOffset,
                        s = document.elementFromPoint(o, a);
                    null !== s && this.contains(s) && (t = n.call(this, e)) }
                return "function" == typeof i && i.call(this, e), r = !0, t },
            a = function(e) {
                return r ? void(r = !1) : n.call(this, e) };
        return t ? void nt(e).on("click", t, a).on("touchend", t, o) : void nt(e).on("click", a).on("touchend", o) }

    function S(e) {
        return new RegExp(e.toLowerCase()).test(pt) }

    function T(e) {
        var t = document.createElement("div"),
            n = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
        for (var r in i) {
            var o = i[r];
            if (void 0 !== t.style[o]) return o }
        return e }

    function E() {
        var e = navigator,
            t = !1,
            n = [0, 0, 0],
            i = null,
            r = "Shockwave Flash",
            o = "application/x-shockwave-flash",
            a = "ShockwaveFlash.ShockwaveFlash";
        if ("undefined" != typeof e.plugins && "object" === Ye(e.plugins[r])) i = e.plugins[r].description, !i || "undefined" != typeof e.mimeTypes && e.mimeTypes[o] && !e.mimeTypes[o].enabledPlugin || (t = !0, i = i.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), n[0] = parseInt(i.replace(/^(.*)\..*$/, "$1"), 10), n[1] = parseInt(i.replace(/^.*\.(.*)\s.*$/, "$1"), 10), n[2] = /[a-zA-Z]/.test(i) ? parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if ("undefined" != typeof window.ActiveXObject) try {
            var s = new ActiveXObject(a);
            s && (i = s.GetVariable("$version"), i && (t = !0, i = i.split(" ")[1].split(","), n = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)])) } catch (e) {}
        return { installed: t, version: n.join("."), major: n[0], minor: n[1], revision: n[2] } }

    function P(e, t) {
        var n = e,
            i = t;
        return n % 320 !== 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), { width: n, height: i } }

    function L(e) {
        var t = e.width,
            n = e.height,
            i = e.baseUrl,
            r = e.webpSupport,
            o = void 0 !== r && r,
            a = i + (o ? ".webp" : ".jpg");
        return a += "?mw=" + t, 0 !== n && (a += "&mh=" + n), wt.devicePixelRatio > 1 && (a += "&q=70"), a }

    function C(e) {
        return new Ve(function(t, n) {
            var i = new Image;
            i.src = e, i.onload = function() {
                return t(i) }, i.onerror = function() {
                return n(new Error("Failed to load image.")) } }) }

    function O(e) {
        function t() {
            var t = e.request.sentry ? e.request.sentry.player_js_url : null;
            if (t) {
                var n = { logger: o, release: e.request.build.js, serverName: window.location.hostname || "", tags: { git_commit: e.request.build.player }, ignoreErrors: ["Permission denied to access property 'toString'", 'Permission denied to access property "toString"', "The play() request was interrupted by a call to pause()."], includePaths: [/https?:\/\/.*vimeo\.com/] };
                try { Ut.config(t, n).install() } catch (e) {}
                a = Ut.isSetup() } }

        function n() { window.addEventListener("unhandledrejection", function(e) { i(e.reason) }) }

        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (a) { "string" == typeof e && (e = new Error(e)), Ut.captureException(e, t);
                var n = Ut.lastEventId();
                return n }
            return null }

        function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (a) { Error.prototype.isPrototypeOf(e) && (e = e.message), Ut.captureMessage(e, t);
                var n = Ut.lastEventId();
                return n }
            return null }
        var o = "player-raven",
            a = !1;
        t(), n();
        var s = {get isSetUp() {
                return a }, reportException: function(e, t) {
                return i(e, t) }, reportMessage: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return r(e, t) } };
        return s }

    function A(e) { e = e || {};
        var t = {};
        return e.on = function(n, i) { n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a) throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []), t[a].push(i) }
            return e }, e.once = function(t, n) {
            function i() { n.apply(e.off(t, i), arguments) }
            return i.handler = n, e.on(t, i) }, e.off = function(n, i) { n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a) throw new Error("Tried to remove an undefined event.");
                if (a in t) {
                    var s = t[a].indexOf(i);
                    if (s === -1) {
                        for (var c = 0, u = t[a].length; c < u; c++)
                            if (t[a][c].handler === i) { s = r;
                                break }
                        if (s === -1) return e }
                    t[a].splice(s, 1) } }
            return e }, e.fire = function(n) {
            if (!n) throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var i = t[n].slice(0), r = 0, o = i.length; r < o; r++) i[r].apply(e, i.slice.call(arguments, 1));
            return e }, e }

    function I() {
        return hn = vn, pn = new Un, Xn(), pn.init(), Kn(), pn }

    function M(e) {
        return wt.iOS && "onpagehide" in window ? void window.addEventListener("pagehide", e, !1) : void window.addEventListener("beforeunload", e, !1) }

    function F(e) {
        function t() {
            var t = e.telecine && e.telecine.currentScanner;
            switch (t) {
                case "HTMLScanner":
                    return "HTML5";
                case "SWFScanner":
                    return "Flideo";
                case "moogaloop":
                    return "Moogaloop";
                default:
                    return "Player" } }

        function n(t, n) { window._gaq && window._gaq.push(["player._trackSocial", t, n, e.config.video.share_url]) }

        function i(e, n, i) {
            var r = (new Date).getTime() - n;
            window._gaq && window._gaq.push(["player._trackTiming", t(), e, r, i]) }

        function r() { e.config.request.flags.dnt || (e.events.on(Ke.facebookButtonPressed, function() { n("Facebook", "share") }), e.events.on(Ke.twitterButtonPressed, function() { n("Twitter", "tweet") }), e.events.on(Ke.tumblrButtonPressed, function() { n("Tumblr", "share") }), e.events.on(Ke.emailButtonPressed, function() { n("Email", "email") })) }

        function o() {
            var t;
            e.events.on([Ke.bufferStarted, Ke.scrubbingStarted], function(e) { t || (t = e || (new Date).getTime()) }), e.events.on(Ke.bufferEnded, function() {
                if (t > 0) {
                    var n = e.telecine.currentFile.metadata.quality,
                        r = "Buffer Time";
                    d && (d = !1, r = "Start Time"), i(r, t, n), t = null } }) }

        function a() {
            function t() { o = document.createElement("script"), o.id = "player-comscore", o.async = !0, o.src = e.config.request.urls.comscore_js;
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(o, t) }

            function n() {
                try { r = new ns_.StreamingTag({ customerC2: e.config.request.comscore_id }), a && (i(), a = !1) } catch (e) {} }

            function i() {
                try { r.playContentPart({ ns_st_ci: e.config.video.id }) } catch (e) {} }
            if (!e.config.request.flags.dnt && e.config.request.flags.plays) {
                var r, o = document.getElementById("player-comscore"),
                    a = !1;
                e.events.on(Ke.played, function() {
                    if (!r) {
                        if ("undefined" == typeof ns_) return o || t(), o.addEventListener("load", n, !1), void(a = !0);
                        n() }
                    i() }), e.events.on(Ke.paused, function() {
                    try { r && r.stop() } catch (e) {} }) } }

        function s() { "tracking_pixel" in e.config.video && (e.config.request.flags.dnt || e.config.request.flags.plays && e.events.on(Ke.playInitiated, function() {
                try {
                    (new Image).src = e.config.video.tracking_pixel } catch (e) {} })) }

        function c() { e.events.on(Ke.configChanged, function() { l !== e.config.request.session && (window._gaq && window._gaq.push(["player._trackPageview", "/video/" + e.config.video.id]), d = !0) }) }

        function u() {
            if (e.config.request.flags.mixpanel && e.config.request.flags.plays && !e.config.request.flags.dnt) { new Zn(e) } }
        var l = e.config.request.session,
            d = !0;
        return r(), o(), a(), s(), c(), u(), e.events.fire(Ke.analyticsModuleReady), {} }

    function q(e) {
        return e = e.replace("#", ""), "string" == typeof e && (3 === e.length || 6 === e.length) && !isNaN(parseInt(e, 16)) }

    function R(e) {
        var t = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d\.]+))?\)/.exec(e);
        if (!t) throw new Error("Invalid rgb value");
        return { red: parseInt(t[1], 10), green: parseInt(t[2], 10), blue: parseInt(t[3], 10), alpha: parseFloat(t[5]) || 1 } }

    function B() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (1 === t.length && t[0] instanceof B) {
            var i = t[0];
            return this.red = i.red, this.green = i.green, this.blue = i.blue, this.alpha = i.alpha, this.hue = i.hue, this.saturation = i.saturation, this.lightness = i.lightness, this }
        if (1 === t.length) {
            if ("string" == typeof t[0] && t[0].indexOf("rgb") >= 0) return this.rgba = R(t[0]), this;
            if (!q("" + t[0])) throw new Error("Invalid hex value");
            return this.hex = t[0], this }
        if (3 === t.length || 4 === t.length) {
            for (var r = 0; r < 3; r++)
                if (isNaN(parseInt(t[r], 10)) || parseInt(t[r], 10) < 0 || parseInt(t[r], 10) > 255) throw new Error("Invalid rgb value");
            if (t[3] && parseFloat(t[3]) < 0 || parseFloat(t[3]) > 1) throw new Error("Invalid alpha value");
            return this.rgba = { red: t[0], green: t[1], blue: t[2], alpha: parseFloat(t[3]) || 1 }, this }
        throw new Error("Invalid color") }

    function D(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!e || "null" === e || 0 === t.length) return { track: null };
        var n = e.split("."),
            i = Ze(n, 2),
            r = i[0],
            o = i[1],
            a = r.substr(0, 2),
            s = r !== a,
            c = t.filter(function(e) {
                return s ? e.language === r || e.language === a : e.language === a }).sort(function(e, t) {
                var n = 2 * (e.language === a && e.kind === o) + 2 * (e.language === r) + 1 * (e.kind === o),
                    i = 2 * (t.language === a && t.kind === o) + 2 * (t.language === r) + 1 * (t.kind === o);
                return i - n });
        return c.length > 0 ? { track: c[0], exactMatch: c[0].language === r && c[0].kind === o } : { track: null } }

    function N(e) {
        function t(e, t, n) { this.message = e, this.name = t, this.source = n }

        function n(n) {
            switch (e.config.view) {
                case Ue.privateLocked:
                    throw new t("The video is private.", "PrivacyError", n);
                case Ue.privatePassword:
                    throw new t("The video is password-protected. The viewer must enter the password first.", "PasswordError", n);
                case Ue.error:
                    throw new t(e.config.message, "NotFoundError", n) } }

        function i() {
            var e = [];
            for (var t in H)
                if (H.hasOwnProperty(t) && 0 !== t.indexOf("_")) {
                    if ("function" == typeof H[t]) { e.push(t);
                        continue } "function" == typeof H[t].get && e.push("get" + t.charAt(0).toUpperCase() + t.slice(1)), "function" == typeof H[t].set && e.push("set" + t.charAt(0).toUpperCase() + t.slice(1)) }
            return e.sort() }

        function r() { I || (l({ event: "loaded", data: { id: e.config.video.id } }), I = !0) }

        function o(e) {
            if (!e || "" === e) return {};
            if ("object" === ("undefined" == typeof e ? "undefined" : Ye(e))) return e;
            try {
                return E = 2, JSON.parse(e) } catch (n) {
                var t = {};
                return e.split("&").forEach(function(e) {
                    try {
                        var n = e.split("="),
                            i = decodeURIComponent(n[0]),
                            r = decodeURIComponent(n[1]);
                        if ("id" === i) return; "params" === i && (i = "value"), r = r.split(",")[0], t[i] = r } catch (e) {} }), E = 1, t } }

        function a(e) {
            if (!e || "_" === e.substr(0, 1)) return null;
            switch (1 === E && (e = e.replace("api_", "")), e) {
                case "changeColor":
                    return H.color.set;
                case "paused":
                    return H.paused.get;
                case "seekTo":
                    return H.currentTime.set }
            if ("function" == typeof H[e]) return H[e];
            var t = e.substr(0, 3),
                n = e.substr(3, 1).toLowerCase() + e.substr(4);
            return H[n] && H[n][t] ? H[n][t] : null }

        function s(e) {
            if (e.source === window.parent) {
                var n = o(e.data),
                    r = n.method,
                    s = n.value;
                if (void 0 !== r) try {
                    var c = a(r);
                    if (!c) throw new t("“" + r + "” is not a valid method. Valid methods are: " + i().join(", ") + ".", "TypeError", r);
                    var u = [s];
                    c === H.addCuePoint && "object" === ("undefined" == typeof s ? "undefined" : Ye(s)) ? u = [s.time, s.data] : c === H.enableTextTrack && "object" === ("undefined" == typeof s ? "undefined" : Ye(s)) && (u = [s.language, s.kind]);
                    var f = c.apply(e, u),
                        h = 0 !== r.indexOf("get") && "paused" !== r;
                    if (f === b || h && E < 3) return;
                    l({ method: r, value: void 0 !== f && "" !== f ? f : s }) } catch (e) { d(e) } } }

        function c(e) {
            var t = e.event;
            if (1 === E)
                for (var n in R)
                    if (R[n] === e.event) { t = n;
                        break }
            switch (t) {
                case "onSeek":
                case "onProgress":
                    delete e.data.percent, delete e.data.duration;
                    break;
                case "onLoading":
                    delete e.data.seconds, delete e.data.duration }
            var i = "method=" + encodeURIComponent(t || e.method);
            i += "&params=";
            var r = [];
            if (void 0 !== e.value) r.push(encodeURIComponent(e.value));
            else if ("object" === Ye(e.data))
                for (var o in e.data) r.push(encodeURIComponent(e.data[o]));
            else void 0 !== e.data && r.push(encodeURIComponent(e.data));
            return e.player_id && r.push(e.player_id), i += r.join(",") }

        function u(e) {
            if (e.event) {
                for (var t in N)
                    if (N[t] === e.event) { e.event = t;
                        break }
                    "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues) }
            return JSON.stringify(e) }

        function l(t) {
            if ((!t.event || (k.fire(t.event, t.data), w[t.event])) && x) { e.config.embed && e.config.embed.player_id && (t.player_id = e.config.embed.player_id);
                try { 1 === E ? t = c(t) : 2 === E && (t = u(t)), "object" !== ("undefined" == typeof t ? "undefined" : Ye(t)) || "ready" !== t.event && S || (t = JSON.stringify(t)) } catch (e) {}
                if (window.parent != window) try { window.parent.postMessage(t, _ && "null" !== _ ? _ : "*") } catch (e) {} } }

        function d(e) {
            var n = { event: "error", data: { message: "An error occurred.", name: "Error", method: e.source } };
            e instanceof t && (n = { event: "error", data: { message: e.message, name: e.name, method: e.source } }), l(n) }

        function f() {
            if (P && C) {
                try {
                    switch (C) {
                        case "not-supported":
                            throw new t("This video is not supported in this browser.", "NotSupportedError");
                        case "no-files":
                            throw new t("There was an error loading the files for this video.", "FileError");
                        default:
                            throw new t("An error occurred during playback.", "PlaybackError") } } catch (e) { d(e) }
                C = null } }

        function h() { "embed" in e.config && e.config.embed.on_site || (window.addEventListener ? window.addEventListener("message", s, !1) : window.attachEvent("onmessage", s)) }

        function p() { e.events.on(Ke.played, function(t) { L || (L = !0, l({ event: "play", data: { seconds: v(t), percent: v(t / e.config.video.duration), duration: v(e.config.video.duration) } })) }), e.events.on(Ke.paused, function(t) { L = !1, l({ event: "pause", data: { seconds: v(t), percent: v(t / e.config.video.duration), duration: v(e.config.video.duration) } }) }), e.events.on(Ke.ended, function() { L = !1, l({ event: "ended", data: { seconds: v(e.config.video.duration), percent: 1, duration: v(e.config.video.duration) } }) }), e.events.on(Ke.playProgress, function(e, t, n) { l({ event: "timeupdate", data: { seconds: v(e), percent: v(n), duration: v(t) } }) }), e.events.on(Ke.loadProgress, function(e, t, n) {
                var i = { event: "progress", data: { percent: v(n), duration: v(t), seconds: v(e) } };
                E < 3 && (i.data.bytesLoaded = -1, i.data.bytesTotal = -1), l(i) }), e.events.on(Ke.seeked, function(e, t, n) { l({ event: "seeked", data: { seconds: v(e), percent: v(n), duration: v(t) } }) }), e.events.on(Ke.volumeChanged, function(e) { l({ event: "volumechange", data: { volume: v(e) } }) }), e.events.on(Ke.error, function(e) { C = e, f() }), e.events.on(Ke.apiError, function(e) { d(new t(e.message, e.name, e.method)) }), e.events.on(Ke.cueChanged, function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = e || {},
                    i = n.language,
                    r = void 0 === i ? null : i,
                    o = n.label,
                    a = void 0 === o ? null : o,
                    s = n.kind,
                    c = void 0 === s ? null : s;
                l({ event: "cuechange", data: { label: a, language: r, kind: c, cues: t } }) }), e.events.on(Ke.captionsChanged, function(e) { M = e;
                var t = e || {},
                    n = t.language,
                    i = void 0 === n ? null : n,
                    r = t.label,
                    o = void 0 === r ? null : r,
                    a = t.kind,
                    s = void 0 === a ? null : a;
                l({ event: "texttrackchange", data: { label: o, language: i, kind: s } }) }), e.config.request.flags.dnt || e.events.on(Ke.emailCaptureSuccess, function() { l({ event: "emailcapture" }) }), e.events.on(Ke.cuepoint, function(e) { l({ event: "cuepoint", data: { time: e.time, data: e.data, id: e.id } }) }) }

        function m() { e.events.on(Xe.reset, function() { C = null, O = !1, I = !1 }) }

        function g() { e.events.on(Ke.configChanged, function(t) { T && setTimeout(function() {
                    var t = !0;
                    e.events.fire(Xe.changeVolume, T, t) }, 0), t && r() }) }
        var _ = document.referrer || e.config.request.referrer;
        try { _ = decodeURIComponent(_) } catch (e) { _ = unescape(_) }
        var y, b = "_ASYNC_",
            w = { ready: !0 },
            k = A(),
            x = !(!window.postMessage || !window.parent.postMessage),
            S = !(wt.browser.ie >= 8 && wt.browser.ie < 10),
            T = null,
            E = e.config.embed.api,
            P = !1,
            L = !1,
            C = null,
            O = !1,
            I = !1,
            M = null,
            F = ["play", "pause", "ended", "timeupdate", "progress", "seeked", "error", "texttrackchange", "cuechange", "volumechange", "loaded", "emailcapture", "cuepoint"],
            q = F.filter(function(e) {
                return "emailcapture" !== e }),
            R = { onFinish: "ended", onLoading: "progress", onLoad: "ready", onProgress: "timeupdate", onPlay: "play", onPause: "pause", onSeek: "seeked" },
            N = { playProgress: "timeupdate", loadProgress: "progress", finish: "ended", seek: "seeked" };
        t.prototype = new Error;
        var H = { _setEmbedSetting: function(t, n) { e.config.embed.on_site && (n = "object" === ("undefined" == typeof n ? "undefined" : Ye(n)) ? n : Number(n), "badge" === t && (n ? n = y : y = e.config.embed.settings.badge), e.config.embed.settings[t] = n, e.events.fire(Ke.embedSettingChanged, t, n), e.events.fire(Ke.configChanged, e.config)) }, _showOverlay: function(t, n) { e.events.fire(Xe.showOverlay, t, n) }, _toggleDebugHud: function() { e.events.fire(Ke.debugButtonPressed) }, addEventListener: function(n, i) {
                if (n in R && (n = R[n]), n in N && (n = N[n]), F.indexOf(n) < 0) throw new t("“" + n + "” is not a valid event. Valid events are: " + q.join(", ") + ".", "TypeError", "addEventListener");
                i ? k.on(n, i) : w[n] = !0, ("loaded" === n && e.config.view === Ue.main || e.config.view === Ue.privateUnlocked) && r() }, removeEventListener: function(e, t) { t ? k.off(e, t) : w[e] = !1 }, play: function() { n("play");
                var i = "[object MessageEvent]" === Object.prototype.toString.call(this);
                if (i && "undefined" != typeof wt && (wt.iPhone || wt.iPad || wt.iPod) && !O) throw new t("The viewer must initiate playback first.", "Error", "play");
                e.events.fire(Ke.playButtonPressed) }, pause: function() { n("pause"), e.events.fire(Ke.pauseButtonPressed) }, loadVideo: function(i) {
                if (isNaN(Number(i)) && i.match(null === new RegExp("^https?://" + e.config.player_url + "/video/([0-9]+)/config"))) throw new t("The config url must be a valid Vimeo url.", "TypeError", "loadVideo");
                return e.loadVideo(i).then(function() {
                    return E > 2 && l({ method: "loadVideo", value: i }), i }).catch(function() {
                    try { n("loadVideo") } catch (e) {
                        if (e instanceof t) return void d(e);
                        d(new t("An error occurred loading the video.", "Error", "loadVideo")) } }), b }, unload: function() { e.config.view !== Ue.main && e.config.view !== Ue.privateUnlocked || e.events.fire(Xe.reset) }, enableTextTrack: function(n) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map(function(e) {
                        return e.language = e.lang, e }),
                    o = r.some(function(e) {
                        return e.language.toLowerCase() === n.toLowerCase() });
                if (!o) throw new t("There are no tracks for “" + n.toUpperCase() + "”.", "InvalidTrackLanguageError", "enableTextTrack");
                var a = i ? n + "." + i : n,
                    s = D(a, r),
                    c = s.track;
                if (!c || i && c.kind !== i) throw new t("There are no " + i + " tracks for “" + n.toUpperCase() + "”.", "InvalidTrackError", "enableTextTrack");
                return e.events.fire(Xe.turnCaptionsOn, c.id, !0), E > 2 && e.events.once(Ke.captionsChanged, function(e, t) { l({ method: "enableTextTrack", value: { label: e.label, language: e.language, kind: e.kind } }) }), b }, disableTextTrack: function() { e.events.fire(Xe.turnCaptionsOff) }, ping: function() {
                return e.config.video.id }, addCuePoint: function(n, i) {
                if (e.telecine && "moogaloop" === e.telecine.currentScanner) throw new t("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new t("Cue point time must be positive number less than the duration of the video (" + v(e.config.video.duration) + ").", "RangeError", "addCuePoint");
                var r = e.telecine.addCuePoint(n, i);
                return setTimeout(function() { e.events.fire(Ke.cuePointAdded, r) }, 0), r.id }, removeCuePoint: function(n) {
                if (e.telecine && "moogaloop" === e.telecine.currentScanner) throw new t("Cue points are not supported in the current player.", "UnsupportedError", "removeCuePoint");
                var i = e.telecine.cuePoints.filter(function(e) {
                    return e.id === n })[0];
                if (!i) throw new t("Cue point “" + n + "” was not found.", "InvalidCuePoint", "removeCuePoint");
                e.telecine.removeCuePoint(i), setTimeout(function() { e.events.fire(Ke.cuePointRemoved, i) }, 0) }, autopause: { get: function() {
                    if (e.telecine && "moogaloop" === e.telecine.currentScanner) throw new t("Autopause is not supported in the current player.", "UnsupportedError", "getAutopause");
                    return !!e.config.embed.autopause }, set: function(n) {
                    if (e.telecine && "moogaloop" === e.telecine.currentScanner) throw new t("Autopause is not supported in the current player.", "UnsupportedError", "setAutopause");
                    e.config.embed.autopause = !!n } }, color: { get: function() {
                    return e.config.embed.color.replace("#", "") }, set: function(n) {
                    if ("moogaloop" === e.telecine.currentScanner) return void e.events.fire(Xe.changeColor, n);
                    if (e.config.embed.settings.color && !e.config.embed.on_site) throw new t("The creator of the video has chosen to always use " + new B(e.config.embed.color).hex + ".", "EmbedSettingsError", "setColor");
                    try {
                        var i = new B(n);
                        e.events.fire(Xe.changeColor, i.hex) } catch (e) {
                        throw new t("The color should be 3- or 6-digit hex value.", "TypeError", "setColor") }
                    var r = new B(23, 35, 34, .75),
                        o = r.contrast(i).ratio;
                    if (o < 3) {
                        var a = i.clone().lighten(5, 3, r);
                        throw new t(i.hex + " does not meet minimum contrast ratio. We recommend using brighter colors. (You could try " + a.hex + " instead.) See WCAG 2.0 guidelines: http://www.w3.org/TR/WCAG/#visual-audio-contrast", "ContrastError", "setColor") } } }, cuePoints: { get: function() {
                    if (e.telecine && "moogaloop" === e.telecine.currentScanner) throw new t("Cue points are not supported in the current player.", "UnsupportedError", "getCuePoints");
                    return e.telecine.cuePoints.map(function(e) {
                        return { time: e.time, data: e.data, id: e.id } }) } }, currentTime: { get: function() {
                    return e.telecine && e.telecine.currentTime > .1 ? v(e.telecine.currentTime) : 0 }, set: function(n) {
                    if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new t("Seconds must be a positive number less than the duration of the video (" + v(e.config.video.duration) + ").", "RangeError", "setCurrentTime");
                    var i = "[object MessageEvent]" === Object.prototype.toString.call(this);
                    if (i && "undefined" != typeof wt && (wt.iPhone || wt.iPad || wt.iPod) && !O) throw new t("The viewer must initiate playback first.", "Error", "setCurrentTime");
                    return e.events.fire(Xe.seek, null, n), e.events.fire(Ke.mousedOver), E > 2 && e.events.once(Ke.seeked, function(e, t, n) { l({ method: "setCurrentTime", value: e }) }), b } }, duration: { get: function() {
                    return v(e.config.video.duration) } }, ended: { get: function() {
                    return !!e.telecine.ended } }, loop: { get: function() {
                    return !!e.config.embed.loop }, set: function(t) { e.events.fire(Xe.changeLoop, t) } }, paused: { get: function() {
                    return !(e.telecine && "paused" in e.telecine) || !!e.telecine.paused } }, textTracks: { get: function() {
                    var t = e.telecine ? e.telecine.video.textTracks : [];
                    return t.map(function(e) {
                        return { label: e.label, language: e.language, kind: e.kind, mode: e === M ? "showing" : "disabled" } }) } }, videoEmbedCode: { get: function() {
                    return e.config.video.embed_code } }, videoHeight: { get: function() {
                    return e.telecine.videoHeight || e.config.video.height } }, videoId: { get: function() {
                    return e.config.video.id } }, videoTitle: { get: function() {
                    return e.config.video.title } }, videoWidth: { get: function() {
                    return e.telecine.videoWidth || e.config.video.width } }, videoUrl: { get: function() {
                    if (!e.config.video.url) throw new t("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
                    return e.config.video.url } }, volume: { get: function() {
                    var t = v(e.config.request.cookie.volume);
                    return 1 === E ? Math.round(100 * t) : t }, set: function(n) {
                    if (n = parseFloat(n), 1 === E && (n /= 100), isNaN(n) || n < 0 || n > 1) throw new t("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
                    T = n;
                    var i = !0;
                    e.events.fire(Xe.changeVolume, n, i) } }, _like: { get: function() {
                    return !!e.config.user.liked }, set: function(t) {
                    if (e.config.embed.on_site) {
                        if (e.config.user.liked === t) return;
                        e.events.fire(Ke.likeButtonPressed, t) } } }, _watchLater: { get: function() {
                    return !!e.config.user.watch_later }, set: function(t) {
                    if (e.config.embed.on_site) {
                        if (e.config.user.watch_later === t) return;
                        e.events.fire(Ke.watchLaterButtonPressed, t) } } } };
        return e.events.on(Ke.playInitiated, function() { O = !0 }), p(), m(), g(), e.events.fire(Ke.apiModuleReady), e.events.once(Ke.ready, function() { P = !0, h(), l({ event: "ready" }), f() }), H }

    function H(e, t) {
        function n() {
            return Math.max(10, Math.round(.045 * e.element.clientHeight)) + "px" }

        function i() { t.style.fontSize = n() }

        function r() { t.classList.add("hidden"), t.setAttribute("hidden", "") }

        function o() { "picture-in-picture" !== e.telecine.presentationMode && (t.classList.remove("hidden"), t.removeAttribute("hidden")) }

        function a(e) {
            var t = e.text.replace("\n", "<br>").split(/<br ?\/?>/),
                n = t.reduce(function(e, t) {
                    return Math.max(e, t.replace(/<\/?\w>/g, "").length) }, 0),
                i = "+" + Array(n + 3).join("-") + "+";
            return t = t.map(function(e) {
                var t = n - e.replace(/<\/?\w>/g, "").length,
                    i = Math.floor(t / 2),
                    r = Math.ceil(t / 2);
                return '<span class="bar">|</span>&nbsp;' + Array(i + 1).join("&nbsp;") + e + Array(r + 1).join("&nbsp;") + '&nbsp;<span class="bar">|</span>' }), i + "<br>" + t.join("<br>") + "<br>" + i }

        function s() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; t.firstChild;) t.removeChild(t.firstChild);
            if (e.length) {
                var n = document.createDocumentFragment();
                e.forEach(function(e) {
                    var t = document.createElement("span"),
                        i = e.html;
                    v && (i = a(e)), t.innerHTML = i, n.appendChild(t) }), t.appendChild(n) } }

        function c() { e.events.on(Ke.cueChanged, function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return m = t, s(t), t.length ? h ? void o() : void(p = !0) : void r() }).on(Ke.captionsChanged, function(e) {
                return e ? (t.setAttribute("lang", e.language), void t.setAttribute("dir", e.rtl ? "rtl" : "ltr")) : (t.removeAttribute("dir"), void t.removeAttribute("lang")) }).on(Ke.playInitiated, function() { h = !0, p && (p = !1, o()) }).on(Ke.pictureInPictureActivated, function() { r() }).on(Ke.pictureInPictureDeactivated, function() { o() }).on(Xe.reset, function() { h = !1, r() }).on(Xe.setEffect, function(e) { v = "ascii" === e, s(m) }) }

        function u() { i(), window.addEventListener("resize", i, !1), e.events.on([Ke.didEnterFullscreen, Ke.didExitFullscreen, Ke.enteredTinyMode, Ke.enteredMiniMode, Ke.enteredNormalMode], i) }

        function l() { e.events.on(Ke.controlBarVisibilityChanged, function(e) {
                return e ? void t.classList.add("with-controls") : void t.classList.remove("with-controls") }) }

        function d() { e.events.on(Ke.overlayOpened, function() { t.classList.add("invisible") }).on(Ke.overlayClosed, function() { t.classList.remove("invisible") }) }

        function f() { e.events.on(Ke.ended, function() { "nothing" !== e.config.embed.outro && t.classList.add("invisible") }).on([Ke.played, Ke.scrubbingStarted], function() { t.classList.remove("invisible") }) }
        var h = !1,
            p = !1,
            v = !1,
            m = [];
        return c(), u(), l(), d(), f(), {} }

    function j(e) {
        function t() {
            return s && s - ei <= (new Date).getTime() }

        function n(e) {
            var t = (new Date).getTime() + 1e3 * e,
                n = 1e3 * e - ei - 5e3;
            return l = setTimeout(function() { "onLine" in navigator && !navigator.onLine || (u = r(a.video.id)) }, n), t }

        function i(e) { clearTimeout(l);
            var t = a;
            if (isNaN(e) && "string" != typeof e) return a = e, s = n(a.request.expires), Ve.resolve({ old: t, loaded: a });
            var i = (new Date).getTime(),
                r = a && a.video && a.video.id,
                o = a && a.request && a.request.session,
                c = a && a.request && a.request.referrer,
                u = a && a.embed && a.embed.on_site,
                d = a && a.embed && a.embed.context,
                f = e;
            if (!isNaN(e)) {
                var p = a && a.player_url ? "https://" + a.player_url : "";
                f = p + "/video/" + e + "/config" + window.location.search }
            return c && (f += (f.indexOf("?") === -1 ? "?" : "&") + "referrer=" + encodeURIComponent(c)), h(f, { allowErrorStatuses: !0 }).then(function(e) { a = JSON.parse(e), a.view !== Ue.error && (s = n(a.request.expires), o && a.video.id === r && (a.request.session = o), c && (a.request.referrer = c), u && (a.embed.on_site = 1, a.embed.context = d));
                (new Date).getTime() - i;
                return { old: t, loaded: a } }) }

        function r() { clearTimeout(l);
            var e = (new Date).getTime(),
                t = a && a.request.referrer,
                i = a.request,
                r = i.signature,
                c = i.session,
                d = i.timestamp,
                f = i.expires,
                p = "https://" + a.player_url + "/video/" + a.video.id + "/config/request?session=" + c + "&signature=" + r + "&time=" + d + "&expires=" + f;
            return h(p).then(function(i) { a.request = JSON.parse(i), t && (a.request.referrer = t), s = n(a.request.expires);
                (new Date).getTime() - e;
                return u = null, o.fire(Ke.requestConfigReloaded), a.request }) }
        var o = e.events,
            a = null,
            s = null,
            c = null,
            u = null,
            l = null;
        return window.addEventListener("online", function() { t() && (u = r(a.video.id)) }), {get isExpired() {
                return t() }, load: function(e) {
                return i(e) }, reload: function() {
                return a && a.video.id ? i(a.video.id) : Ve.reject(new Error("No config loaded.")) }, toJSON: function() {
                return a }, get config() {
                return a }, set config(e) { a = e }, verify: function() {
                return t() ? (u || (u = r()), u) : Ve.resolve(a.request) }, get _video() {
                return c }, set _video(e) { c = e } } }

    function V(e) {
        return function(t) {
            return We[t.mime] === e } }

    function U(e) {
        var t = e.fps;
        return "metadata" in e && (t = e.metadata.fps), t > 30 }

    function z(e) {
        return e.quality || e.metadata.quality }

    function W(e) {
        return "string" != typeof e && (e = z(e)), parseInt(e, 10) }

    function $(e) {
        return W(e) >= 720 }

    function G(e) {
        var t = ii(e).filter(U).map(z);
        return function(e) {
            return !(t.indexOf(z(e)) !== -1 && !U(e)) } }

    function X(e) {
        return "fps" in e ? e.fps : "metadata" in e && "fps" in e.metadata ? e.metadata.fps : 0 }

    function K() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "desc";
        return function(t, n) {
            var i = W(t),
                r = X(t),
                o = W(n),
                a = X(n);
            return "asc" === e ? i - o || r - a : o - i || a - r } }

    function Y(e, t) {
        var n = z(e);
        return n = n.replace("1440p", "2K").replace("2160p", "4K"), $(e) && t && (n += t), n }

    function Q(e) {
        var t = e.files,
            n = void 0 === t ? [] : t,
            i = e.preference,
            r = void 0 === i ? "360p" : i,
            o = e.priorityOffset,
            a = void 0 === o ? 0 : o;
        n = ii(n), n.sort(K());
        var s = n.map(z);
        if (r) { s.indexOf(r) === -1 && (s.push(r), s.sort(function(e, t) {
                return W(t) - W(e) }));
            var c = s.indexOf(r),
                u = s.splice(0, c);
            u.reverse(), s.push.apply(s, u) }
        return n.map(function(e) {
            return { id: e.id, src: e.url, mime: e.mime, priority: s.indexOf(e.quality) + 1 + a, metadata: { profile: e.profile, cdn: e.cdn, origin: e.origin, quality: e.quality, fps: e.fps } } })
    }

    function J(e) {
        function t() { C = !1, O = !1, I = !1, F = !1, q = !1, R = !1, V = null, U = null, B = null, z = null, W = !1, $ = 0, G = 0, X = e.config.embed.autoplay, j = u(), T = n(), E = e.config.request.urls.blurr, N = "auto" }

        function n() {
            return parseInt(Date.now() / 1e3, 10) }

        function i() {
            return Date.now ? Date.now() : (new Date).getTime() }

        function r(e) {
            return i() - e }

        function o(e) {
            return n() - e }

        function a() {
            var t = document.createElement("a");
            return t.href = e.config.request.referrer, t.origin || t.protocol.replace(":", "") + "://" + t.host }

        function s() { L = !0, setTimeout(c, P) }

        function c(t) {
            var n = !0;
            if (t) {
                if (n = !1, _ && O && d("video-buffered", { time: r(b) / 1e3, video_time: k }), y && (O && !R && d("video-stopped-during-playback", { time: r(w) / 1e3, video_time: x }), A += r(w) / 1e3), C && !O) {
                    var i = r(g);
                    i >= 1e3 && !e.telecine.paused && d("video-exit-before-start", { time: i / 1e3 }) }
                O && !e.config.embed.loop && d("video-playback-session", v(j)) }
            var o = S;
            if (S = [], 0 === o.length) return void s();
            var a = JSON.stringify(o);
            if (navigator.sendBeacon && navigator.sendBeacon(E, a)) return void s();
            var c = new XMLHttpRequest;
            c.open("POST", E, n), c.setRequestHeader("Content-Type", "text/plain"), c.onload = function() {}, c.send(a), s() }

        function u() {
            return { session_id: e.config.request.session, account_type: e.config.video.owner ? e.config.video.owner.account_type : null, referrer: e.config.request.referrer, video_duration: e.config.video.duration, device_pixel_ratio: window.devicePixelRatio || 1, startup_time: 0, video_start_position: 0, video_end_position: 0, starting_profile: 0, abandoned_during_buffer: 0, forced_embed_quality: "none", _fullscreen: [], number_of_down_switches: 0, number_of_up_switches: 0, number_of_buffers: 0, stayed_on_auto: 1, alert_displayed: 0, telecine_file_switched: 0, telecine_scanner_switched: 0, alert_dismissed: "none", _speeds: [], _playedProfiles: {}, _targetProfiles: {}, _embed_size: {}, _target_profile_id: {}, _profiles: {}, session_playback_duration: 0 } }

        function l() {
            var t = e.telecine.video.currentFile || {},
                n = t.id,
                i = void 0 === n ? 0 : n,
                r = t.mime,
                o = void 0 === r ? $e.h264 : r,
                a = t.metadata;
            a = void 0 === a ? {} : a;
            var s = a.profile,
                c = void 0 === s ? -1 : s,
                u = !1,
                l = !1;
            switch (o) {
                case $e.dash:
                    0 === t.restrictedStreamIndexes.length && (u = !0), e.config.request.files.dash.separate_av && (l = !0);
                    var d = H,
                        f = d.id;
                    i = void 0 === f ? 0 : f;
                    var h = d.profile;
                    c = void 0 === h ? -1 : h;
                    break;
                case $e.hls:
                    u = !0 }
            var p = { clip_id: e.config.video.id, video_file_id: Number.isInteger(Number(i)) ? parseInt(i, 10) : 0, delivery: We[o], profile_id: c, auto: Number(u), player_type: "html", version: e.config.request.build.js, autoplay: X, cdn: t.metadata.cdn || "akamai", origin: t.metadata.origin, secure: t.src && 0 === t.src.indexOf("https"), vod: e.config.video.vod ? 1 : 0, embed: !e.config.embed.on_site, context: e.config.embed.context, separate_av: l ? 1 : 0, video_shape: wt.threeSixtyVideo && e.config.video.is_panorama ? "spatial_mono" : "flat_mono", drm: e.config.request.drm ? 1 : 0 };
            if (e.config.request.ab_tests)
                for (var v in e.config.request.ab_tests) p[v + "_test"] = 1, p[v + "_group"] = e.config.request.ab_tests[v].group;
            return p }

        function d(t, n) {
            var i = l();
            for (var r in n) n.hasOwnProperty(r) && (i[r] = n[r]);
            i.name = t, i.event_time = e.config.request.timestamp + o(T), S.push(i), L || s() }

        function f() {
            var t = e.config.video.duration;
            e.config.request.flags.blurr && E && (e.events.on(Ke.playInitiated, function() { C || e.performDelegateAction(ze.playLog, function(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X = r.continuous ? 2 : e.config.embed.autoplay, d("video-start-attempt"), C = !0, g = i();
                    var o = e.config.user.progress,
                        a = e.config.video.duration;!o || e.config.embed.autoplay || e.config.embed.time || setTimeout(function() {
                        var e = o / a * 100,
                            n = t < o ? "seeked_back" : "resume";
                        n = 0 === t ? "beginning" : n, d("video-start-attempt-from-resume", { state: n, duration: a, percent: e, playback_time: t, resume_time: o }) }, 1e4) }) }), e.events.on(Ke.playProgress, function(e) {
                if (t = Math.min(e, t), !O) { O = !0;
                    var n = r(g) / 1e3;
                    d("video-start-time", { time: n }), j.startup_time = n, j.video_start_position = e } }), e.events.on(Ke.bufferStarted, function() { b || (k = e.telecine.currentTime, b = i()), _ = !0 }), e.events.on(Ke.bufferEnded, function() {
                return _ = !1, O ? (d("video-buffered", { time: r(b) / 1e3, video_time: k }), void(b = null)) : void(b = null) }), e.events.on(Ke.ranIntoBuffer, function(t) { w || (x = e.telecine.currentTime, w = i()), y = !0, t && (D = !0) }), e.events.on(Ke.playbackResumed, function() {
                return !O || R ? void(w = null) : (A += r(w) / 1e3, R = !0, d("video-stopped-during-playback", { time: r(w) / 1e3, video_time: x }), w = null, void(y = !1)) }), e.events.on(Ke.error, function(e) { arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { final: !0 };
                return "scanner-error" === e ? void(j.telecine_scanner_switched = 1) : "telecine-file-error" === e ? void(j.telecine_file_switched = 1) : void 0 }), e.events.on(Ke.error, function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { final: !0 };
                if (n.final !== !1) {
                    var i = ["not-supported", "decode", "network", "unknown", "drm-failure"],
                        r = i.indexOf(t) !== -1;
                    return O ? void(r && d("video-playback-error", { type: t, video_time: e.telecine.currentTime })) : C ? void(r && d("video-start-failure", { type: t })) : void(r && d("video-load-failure", { type: t })) } }), e.events.on(Ke.didEnterFullscreen, function(e, t) { I || (d("video-enter-fullscreen", { fullPlayer: e, requested: t, referrer: a() }), I = !0) }), M(c)) }

        function h() { e.events.on(Xe.changeQuality, function(t) { e.telecine.video.currentFile.mime === $e.dash && ("auto" === t || F ? "auto" === t && F && !q && (d("video-switch-back-to-auto", { quality: N, auto: 1 }), q = !0) : (d("video-switch-from-auto", { quality: t, auto: 0 }), F = !0), N = t) }), e.events.on(Ke.streamChanged, function(e) { H = e }) }

        function p() {
            function t(e, t) {
                return e + ":" + t }

            function n(e) { j._embed_size[e] = j._embed_size[e] || 0, z = e }
            e.events.on(Ke.playInitiated, function() { z = t(e.config.video.video_width, e.config.video.video_height), n(z) }), e.events.on(Ke.playProgress, function(e) { j._embed_size[z] += 1, W || (W = !0, $ = e), G = e, j.video_end_position = e }), e.events.on(Xe.seek, function() { W = !1, j.session_playback_duration += G - $ }), e.events.on(Ke.seeked, function(e) { $ = e }), e.events.on(Ke.ended, function() { W && (W = !1), j.session_playback_duration += e.config.video.duration - $, j.video_end_position = e.config.video.duration }), e.events.on(Ke.didEnterFullscreen, function(e, t) { j._fullscreen.push({ start: i() }) }), e.events.on(Ke.didExitFullscreen, function(e, t) {
                var n = j._fullscreen.length - 1;
                j._fullscreen[n].end = i() }), e.events.on(Ke.adaptiveBandwidth, function(e) {
                var t = e.speed;
                j._speeds.push(t) }), e.events.on(Ke.streamChanged, function(e, t, n) {
                var r = e.profile,
                    o = i(),
                    a = n[t].bitrate;
                if (j._profiles[r] = j._profiles[r] || [], j.starting_profile || (j.starting_profile = r), V) {
                    var s = j._profiles[V].length - 1;
                    j._profiles[V][s] && (j._profiles[V][s].end = o) }
                B && (a > B ? j.number_of_up_switches += 1 : j.number_of_down_switches += 1), j._profiles[r].push({ start: o }), j._playedProfiles[r] = { bitrate: a, width: n[t].width, height: n[t].height }, V = r, B = a }), e.events.on(Ke.ranIntoBuffer, function(e) { j.number_of_buffers += 1, j.abandoned_during_buffer = 1 }), e.events.on(Xe.changeQuality, function(e) { "auto" !== e && (j.stayed_on_auto = 0) }), e.events.on(Ke.playbackResumed, function() { j.abandoned_during_buffer = 0 }), e.events.on(Ke.resize, function(e) {
                var i = e.width,
                    r = e.height;
                if (i && r) {
                    var o = t(i, r);
                    n(o) } }), e.events.on(Ke.streamTargetChange, function(e, t, n) {
                var r = e.profile,
                    o = n[t].bitrate,
                    a = i();
                if (j._target_profile_id[r] = j._target_profile_id[r] || [], U) {
                    var s = j._target_profile_id[U].length - 1;
                    j._target_profile_id[U][s] && (j._target_profile_id[U][s].end = a) }
                j._target_profile_id[r].push({ start: a }), j._targetProfiles[r] = { bitrate: o, width: n[t].width, height: n[t].height }, U = r }), e.events.on(Ke.forcedQuality, function(e) { j.forced_embed_quality = e }), e.events.on(Ke.alertVisibilityChanged, function(e, t) {
                return e ? void(j.alert_displayed = 1) : void(j.alert_dismissed = t) }) }

        function v(t) {
            var n = {},
                r = i(),
                o = K("asc"),
                a = "MediaSourceScanner" === e.telecine.currentScanner,
                s = "HTMLScanner" === e.telecine.currentScanner,
                c = [];
            s && (c = e.config.request.files.progressive), a && (c = e.config.request.files.dash.streams);
            var u = ii(c).sort(o).map(function(e) {
                return e.profile });
            for (var l in t) t.hasOwnProperty(l) && (n[l] = t[l]);
            n.seconds_in_fullscreen = n._fullscreen.reduce(function(e, t) {
                var n = t.end || r;
                return (n - t.start) / 1e3 + e }, 0), n.session_playback_duration += G - $;
            var d = null;
            if (Object.keys(n._embed_size).forEach(function(e) {
                    var t = n._embed_size[e];
                    t > d && (d = e) }), d) {
                var f = d.split(":"),
                    h = Ze(f, 2),
                    p = h[0],
                    v = h[1];
                n.embed_width = parseInt(p, 10), n.embed_height = parseInt(v, 10) }
            var m = -1,
                g = 0,
                _ = null;
            if (Object.keys(n._profiles).forEach(function(e) {
                    var t = u.indexOf(parseInt(e, 10));
                    t > m && (m = t);
                    var i = n._profiles[e].reduce(function(e, t) {
                        var n = t.end || r;
                        return (n - t.start) / 1e3 + e }, 0);
                    i > g && (g = i, _ = e) }), n.highest_profile = u[m], n.highest_available_profile = u[u.length - 1], n.most_used_profile = parseInt(_, 10), n.percent_watched = n.session_playback_duration / e.config.video.duration, a && ! function() { n.max_speed = Math.round(Math.max.apply(Math, n._speeds)) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, n._speeds)) / 1e3;
                    var e = n._speeds.reduce(function(e, t) {
                        return e + t }, 0);
                    n.average_speed = Math.round(e / n._speeds.length) / 1e3;
                    var t = 0,
                        i = null;
                    Object.keys(n._target_profile_id).forEach(function(e) {
                        var o = n._target_profile_id[e].reduce(function(e, t) {
                            var n = t.end || r;
                            return (n - t.start) / 1e3 + e }, 0);
                        o > t && (t = o, i = e) }), n.target_profile = parseInt(i, 10);
                    var o = [];
                    Object.keys(n._playedProfiles).forEach(function(e) {
                        var t = n._playedProfiles[e],
                            i = t.width,
                            r = t.height,
                            a = parseInt(i, 10) * parseInt(r, 10);
                        o.push(a) });
                    var a = o.reduce(function(e, t) {
                            return e + t }, 0) / o.length,
                        s = [];
                    Object.keys(n._targetProfiles).forEach(function(e) { s.push(n._targetProfiles[e].bitrate) });
                    var c = s.reduce(function(e, t) {
                            return e / 1e3 + t / 1e3 }, 0) / s.length,
                        u = [];
                    Object.keys(n._targetProfiles).forEach(function(e) {
                        var t = n._targetProfiles[e],
                            i = t.width * t.height;
                        u.push(i) });
                    var l = u.reduce(function(e, t) {
                            return e + t }, 0) / u.length,
                        d = n._playedProfiles[n.most_used_profile],
                        f = d.width,
                        h = d.height,
                        p = f * h,
                        v = Math.min(p, l),
                        m = a * c / (v * Math.min(n.average_speed, c));
                    n.appdex = m, n.rPlayed = a, n.bMax = c, n.rMax = v, n.bufferedWithLowerProfileAvailable = D, n.number_of_switches = n.number_of_up_switches + n.number_of_down_switches }(), "undefined" != typeof window.performance && "function" == typeof window.performance.getEntriesByType) {
                var y = performance.getEntriesByType("resource").filter(function(e) {
                    return ".m4s" === e.name.split("?")[0].substr(-4) });
                n.ttfb = y.map(function(e) {
                    return e.responseStart - e.connectStart }).reduce(function(e, t) {
                    return e + t }, 0) / (y.length || 1) }
            return n.buffer_duration = A, n.buffer_ratio = A / (A + n.session_playback_duration) * 100, Object.keys(n).forEach(function(e) { "_" === e.charAt(0) && delete n[e] }), n }

        function m() { e.events.on(Ke.configChanged, function() { t() }) }
        var g, _, y, b, w, k, x, S = [],
            T = n(),
            E = e.config.request.urls.blurr,
            P = 3e4,
            L = !1,
            C = !1,
            O = !1,
            A = 0,
            I = !1,
            F = !1,
            q = !1,
            R = !1,
            B = null,
            D = !1,
            N = "auto",
            H = {},
            j = u(),
            V = null,
            U = null,
            z = null,
            W = !1,
            $ = 0,
            G = 0,
            X = e.config.embed.autoplay;
        return f(), h(), p(), m(), {} }

    function Z(e) {
        function t() {
            return Date.now ? Date.now() : (new Date).getTime() }

        function n() { f = !1, h = e.telecine ? e.telecine.currentTime : 0, p = 0, m = 0, g = 0, _ = !1 }

        function i(t, n, r, o) { e.verifyConfig().then(function() {
                var a = n;
                a.signature = e.config.request.signature, a.session = e.config.request.session, a.time = e.config.request.timestamp, a.expires = e.config.request.expires;
                var s = JSON.stringify(a),
                    c = "https://" + e.config.player_url + t;
                if (navigator.sendBeacon && navigator.sendBeacon(c, s)) return !0;
                var u = new XMLHttpRequest;
                return u.open("POST", c, !r), u.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), u.withCredentials = !0, u.onload = function() { 200 !== u.status && o < 2 && setTimeout(function() { i(t, n, r, o + 1) }, 1e3) }, u.send(s), u }).catch(function(e) {}) }

        function r(t, n, r) {
            var o = e.telecine.currentFile || {},
                a = o.id,
                s = void 0 === a ? 0 : a,
                c = o.mime,
                u = void 0 === c ? $e.h264 : c,
                l = o.metadata;
            l = void 0 === l ? {} : l;
            var d = l.profile,
                f = void 0 === d ? -1 : d;
            if (u === $e.dash) {
                var h = k,
                    m = h.id;
                s = void 0 === m ? 0 : m;
                var g = h.profile;
                f = void 0 === g ? -1 : g }
            e.performDelegateAction(ze.playLog, function(a) {
                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(t, { referrer: e.config.request.referrer, embed: !e.config.embed.on_site, context: e.config.embed.context, autoplay: c.continuous ? 2 : e.config.embed.autoplay, loop: e.config.embed.loop ? 1 : 0, id: e.config.video.id, vodId: e.config.video.vod && e.config.video.vod.id ? e.config.video.vod.id : null, vodSaleId: e.config.video.vod && e.config.video.vod.sale_id ? e.config.video.vod.sale_id : null, sessionTime: v(p), videoShape: wt.threeSixtyVideo && e.config.video.is_panorama ? "spatial_mono" : "flat_mono", userId: e.config.user.id, userAccountType: e.config.user.account_type, userIsMod: e.config.user.mod ? 1 : 0, ownerId: e.config.video.owner.id, ownerAccountType: e.config.video.owner.account_type, privacy: e.config.video.privacy, rating: e.config.video.rating ? e.config.video.rating.id : null, type: Ge[e.telecine.currentScanner], videoFileId: Number.isInteger(Number(s)) ? s : 0, delivery: We[u], profileId: f, quality: o.metadata.quality, duration: v(e.config.video.duration), seconds: v(n) }, r) }) }

        function o() {!_ && e.config.request.flags.plays && (_ = !0, r("/log/play", 0)) }

        function a() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (e.config.request.flags.plays) {
                var a = t();
                o && m + w > a || (m = a, o && !e.config.request.flags.partials || f || r("/log/partial", n, i)) } }

        function s(t, n) {
            if (!e.config.request.flags.dnt) { n = n || {};
                var r = { referrer: e.config.request.referrer, embed: !e.config.embed.on_site, context: e.config.embed.context, id: e.config.video.id, vodId: e.config.video.vod && e.config.video.vod.id ? e.config.video.vod.id : null, vodSaleId: e.config.video.vod && e.config.video.vod.sale_id ? e.config.video.vod.sale_id : null, userId: e.config.user.id, userAccountType: e.config.user.account_type, ownerId: e.config.video.owner ? e.config.video.owner.id : 0, duration: v(e.config.video.duration), seconds: v(e.telecine.currentTime) };
                for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
                i("/log/" + t, r) } }

        function c() { e.events.on(Ke.playProgress, function(e, n, i) {
                var r = Math.floor(e);!f && g + w < t() && (e > h && (p += e - h), h = e), r % y === 0 && a(e) }), e.events.on(Ke.playInitiated, function() { o() }), e.events.on(Ke.paused, function(t) { e.telecine.ended || a(t) }), e.events.on(Ke.seeked, function(e, t, n) { b = e, f || a(b) }), e.events.on(Ke.scrubbingStarted, function() { g = t(), f = !0 }), e.events.on(Ke.scrubbingEnded, function() { h = e.telecine.currentTime, f = !1, a(b) }), e.events.on(Ke.hdButtonPressed, function() { a(e.telecine.currentTime) }), e.events.on(Ke.ended, function() { p += e.config.video.duration - h;
                var t = !1,
                    n = !1;
                a(e.config.video.duration, t, n) }), e.events.on(Ke.streamChanged, function(e) { k = e }), M(function() {
                if (e.telecine && e.telecine.currentTime > 0) {
                    var t = !0,
                        n = !1;
                    a(e.telecine.currentTime, t, n) } }) }

        function u() {
            function t(e) {
                return function() { s(e) } }
            if (!e.config.request.flags.dnt) {
                var n = [{ type: "share_press", event: Ke.shareButtonPressed }, { type: "facebook_press", event: Ke.facebookButtonPressed }, { type: "twitter_press", event: Ke.twitterButtonPressed }, { type: "tumblr_press", event: Ke.tumblrButtonPressed }, { type: "email_press", event: Ke.emailButtonPressed }, { type: "embed_press", event: Ke.embedButtonPressed }, { type: "login_success", event: Ke.userLoggedIn }, { type: "airplay", event: Ke.airPlayActivated }, { type: "vod_press", event: Ke.vodButtonPressed }, { type: "collection_press", event: Ke.collectionsButtonPressed }, { type: "email_capture_submitted", event: Ke.emailCaptureSubmitted }];
                n.forEach(function(n) { e.events.on(n.event, t(n.type)) }), e.events.on(Ke.outroDisplayed, function(t) {
                    var n = { outroType: e.config.embed.outro, ownerAccountType: e.config.video.owner.account_type };
                    t.length && (n.outroVideos = t.join(",")), s("outro_displayed", n) }).on(Ke.outroVideoPressed, function(t) { s("outro_video_press", { ownerAccountType: e.config.video.owner.account_type, videoId: t }) }).on(Ke.likeButtonPressed, function() { s("like_press", { add: !e.config.user.liked }) }).on(Ke.watchLaterButtonPressed, function() { s("watch_later_press", { add: !e.config.user.watch_later }) }).on(Ke.popupOpened, function(e) { 0 === e.indexOf("login-") && s("login_attempt") }).on(Ke.captionsChanged, function(e, t) {
                    if (!t) return e ? void s("text_track_change", { textTrackLanguage: e.language, textTrackKind: e.kind }) : void s("text_track_change") }).on(Ke.badgePressed, function(e) { 1 !== e && 12 !== e || s("badge_press", { badgeId: e }) }).on(Ke.overlayOpened, function(e) { "email-capture" === e && s("email_capture_displayed") }).on(Ke.overlayClosed, function(e) { "email-capture" === e && s("email_capture_dismissed") }) } }

        function l() { e.events.on(Ke.configChanged, function(e) { e && n() }) }

        function d() {
            var t = ["not-supported", "decode", "network", "aborted", "unknown"];
            e.events.on(Ke.error, function(n, r) { t.indexOf(n) >= 0 && i("/log/" + n.replace("-", "") + "_error", { id: e.config.video.id, context: e.config.embed.context }) }) }
        var f, h, p, m, g, _, y = 30,
            b = 0,
            w = 1e3,
            k = {};
        return n(), c(), u(), l(), d(), e.events.fire(Ke.statsModuleReady), {} }

    function ee(e) {
        return e === !0 || e === !1 ? Number(e) : "null" === e ? null : e }

    function te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.cookie;
        try {
            if (t && "" !== t) return t.split(";").reduce(function(t, n) {
                return n = n.trim(), 0 === n.indexOf(e + "=") ? decodeURIComponent(n.substr(e.length + 1)) : t }, null) } catch (e) {}
        return null }

    function ne(e, t, n) {
        var i = new Date;
        i.setFullYear(i.getFullYear() + 1), i = i.toGMTString(), t = ee(t);
        var r = e + "=" + t + ";";
        r += "expires=" + i + ";", r += "path=/;", r += "domain=" + n + ";";
        try {
            return document.cookie = r, !0 } catch (e) {
            return !1 } }

    function ie(e) {
        function t(t) {
            return new Ve(function(n, i) {
                var r = document.createElement("a");
                r.href = e.config.request.urls.proxy;
                var o = document.createElement("iframe");
                o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                    var n = s(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({ method: "ping" }, n) }, o.onerror = function(e) { i(e) };
                var a = setTimeout(function() { i() }, 1e4),
                    c = function e(i) { 0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(a), n(o)) };
                window.addEventListener("message", c, !1), document.body.appendChild(o) }) }

        function n() { y && !oi && (oi = t(e.config.request.urls.proxy)) }

        function i(t) {
            return oi.then(function(n) {
                var i = s(e.config.request.urls.proxy);
                return n.contentWindow.postMessage(t, i), n }).catch(function(t) { e.reportException(t) }) }

        function r(t) { e.config.embed.on_site && window.postMessage(t, window.location.origin) }

        function o(t, n) {
            if (oi) {
                var o = { method: "set", key: "sync_" + t, val: n, session: e.config.request.session };
                return i(o), void r(o) }
            try { window.localStorage.setItem("sync_" + t, JSON.stringify(n)) } catch (e) {} }

        function a(t, n) { ri.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            var i = [];
            ri.indexOf(t) >= 0 && null !== n && i.push(t + "=" + n);
            var r = c(ri);
            for (var o in r) o in r && null !== r[o] && o !== t && i.push(o + "=" + r[o]);
            ne("player", '"' + i.join("&") + '"', e.config.request.cookie_domain) }

        function c(e) {
            var t = null;
            try { t = te("player") } catch (e) {}
            if (!t) return null;
            t = t.substring(1, t.length - 1);
            var n = {};
            t.split("&").forEach(function(e) { e = e.split("="), n[e[0]] = ee(decodeURIComponent(e[1] || "")) });
            var i = [].concat(e),
                r = i.reduce(function(e, t) {
                    if (t in n) {
                        var i = parseFloat(n[t]);
                        return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e }
                    return e[t] = null, e }, {});
            return 1 === i.length ? r[e] : r }

        function u(e, t) { t = ee(t), o(e, t), a(e, t) }

        function l(t, n) {
            var i = !0;
            switch (t) {
                case "sync_quality":
                    e.events.fire(Xe.changeQuality, n, i);
                    break;
                case "sync_volume":
                    e.events.fire(Xe.changeVolume, n, i);
                    break;
                case "sync_captions":
                    if (null === n) { e.events.fire(Xe.turnCaptionsOff, i);
                        break }
                    e.events.fire(Xe.turnCaptionsOn, n, i);
                    break;
                case "sync_login":
                    d(n);
                    break;
                case "sync_active":
                    null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(Ke.becameInactive) } }

        function d(t) { b > 4 || (b++, t && !e.config.user.logged_in ? e.events.fire(Ke.userLogIn) : !t && e.config.user.logged_in && e.events.fire(Ke.userLoggedOut)) }

        function f() { u("login", !!e.config.user.logged_in) }

        function h() { e.events.on(Ke.qualityChanged, function(e, t) { t || u("quality", e) }) }

        function p() { e.events.on(Ke.volumeChanged, function(t, n) { e.config.request.cookie.volume = ee(t), n || u("volume", t) }) }

        function v() { e.events.on(Ke.captionsChanged, function(t, n) {
                if (t) {
                    var i = t.language + "." + t.kind;
                    return e.config.request.cookie.captions = ee(i), void(n || u("captions", i)) }
                e.config.request.cookie.captions = null, n || u("captions", null) }) }

        function m() { e.events.on(Ke.playButtonPressed, function() { e.config.embed.settings.background || (u("active", e.config.request.session), e.events.fire(Ke.becameActive)) }), e.events.on([Ke.pauseButtonPressed, Ke.ended], function() { c("active") === e.config.request.session && u("active", null) }) }

        function g() { e.events.on(Ke.userLoggedIn, function() { u("login", !0) }) }

        function _() {
            return y ? void window.addEventListener("message", function(t) {
                var n = s(e.config.request.urls.proxy);
                t.origin === n && "object" === Ye(t.data) && "key" in t.data && "newValue" in t.data ? l(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && l(t.data.key, t.data.val) }, !1) : void window.addEventListener("storage", function(t) {
                if (0 === t.key.indexOf("sync_") && t.oldValue !== t.newValue && window.localStorage.getItem(t.key) === t.newValue) try { l(t.key, JSON.parse(t.newValue)) } catch (t) { e.reportException(t) } }, !1) }
        var y = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin),
            b = 0;
        return h(), p(), v(), m(), g(), n(), _(), { reset: f } }

    function re(e) { e = e || {};
        var t = {};
        return e.on = function(n, i) { n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a) throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []), t[a].push(i) }
            return e }, e.once = function(t, n) {
            function i() { n.apply(e.off(t, i), arguments) }
            return i.handler = n, e.on(t, i) }, e.off = function(n, i) { n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a) throw new Error("Tried to remove an undefined event.");
                if (a in t) {
                    var s = t[a].indexOf(i);
                    if (s === -1) {
                        for (var c = 0, u = t[a].length; c < u; c++)
                            if (t[a][c].handler === i) { s = r;
                                break }
                        if (s === -1) return e }
                    t[a].splice(s, 1) } }
            return e }, e.fire = function(n) {
            if (!n) throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var i = t[n].slice(0), r = 0, o = i.length; r < o; r++) i[r].apply(e, i.slice.call(arguments, 1));
            return e }, e }

    function oe(e, t, n) {
        var i = void 0;
        try { document.removeChild({}) } catch (r) { i = Object.create(Object.getPrototypeOf(r), { name: { value: t, configurable: !0, writable: !0 }, code: { value: e, configurable: !0, writable: !0 }, message: { value: n, configurable: !0, writable: !0 }, toString: { value: function() {
                        return t + ": DOM Exception " + e }, configurable: !0, writable: !0 } }) }
        return Object.freeze(i) }

    function ae(e, t) {
        var n, i = 0;
        return n = {}, dr(n, ar.iterator, function() {
            return this }), dr(n, "next", function() {
            if (i < e.length) {
                var n = t ? [e[i], t[i++]] : e[i++];
                return { done: !1, value: n } }
            return { done: !0 } }), n }

    function se() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.getFileById = Sr, e }

    function ce() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.item = function(e) {
            return this[e] }, e.getTrackById = Sr, e }

    function ue(e, t) {
        for (var n = e, i = Array.isArray(n), r = 0, n = i ? n : n[ar.iterator]();;) {
            var o;
            if (i) {
                if (r >= n.length) break;
                o = n[r++] } else {
                if (r = n.next(), r.done) break;
                o = r.value }
            var a = o,
                s = mr(a, 2),
                c = s[0],
                u = s[1];
            if (c <= t && u >= t) return [c, u] }
        return [] }

    function le() {
        return "undefined" != typeof window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now() }

    function de() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
            return (e ^ 16 * Math.random() >> e / 4).toString(16) }) }

    function fe(e) {
        for (var t = window.atob(e), n = t.length, i = new Uint8Array(n), r = 0; r < n; r++) i[r] = t.charCodeAt(r);
        return i }

    function he(e) {
        return fe(e).buffer }

    function pe(e) {
        for (var t = new ArrayBuffer(2 * e.length), n = new Uint16Array(t), i = 0, r = e.length; i < r; i++) n[i] = e.charCodeAt(i);
        return n }

    function ve(e) {
        return setTimeout(e, 0) }

    function me(e, t, n, i) {
        var r = 0,
            o = 0,
            a = 0,
            s = 0,
            c = e,
            u = t,
            l = n / i,
            d = c / u;
        return d >= l ? (o = u, r = (l * u).toFixed(2)) : (r = c, o = (c / l).toFixed(2)), a = Math.max((c - r) / 2, 0), s = Math.max((u - o) / 2, 0), { width: r, height: o, left: a, top: s } }

    function ge() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return Object.freeze(dr({get length() {
                return e.length }, start: function(t) {
                return Tr(e, t) }, end: function(e) {
                return Tr(t, e) } }, ar.iterator, function() {
            return ae(e, t) })) }

    function _e(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
        if (0 === e.length) return 0;
        for (var n = 0, i = 0, r = 0; r < e.length; r++) {
            var o = t[r] || 1;
            i += o, n += e[r] * o }
        return n / i }

    function ye(e, t) {
        if (e.sort(), 0 === e.length) return 0;
        if (t <= 0) return e[0];
        if (t >= 1) return e[e.length - 1];
        var n = e.length * t,
            i = Math.floor(n),
            r = i + 1,
            o = n % 1;
        return r >= e.length ? e[i] : e[i] * (1 - o) + e[r] * o }

    function be(e) { e.sort(function(e, t) {
            return e - t });
        var t = Math.floor(e.length / 2);
        return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2 }

    function we(e) { e = e || {};
        var t = {};
        return e.on = function(n, i) { n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a) throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []), t[a].push(i) }
            return e }, e.once = function(t, n) {
            function i() { n.apply(e.off(t, i), arguments) }
            return i.handler = n, e.on(t, i) }, e.off = function(n, i) { n = [].concat(n);
            for (var r = 0, o = n.length; r < o; r++) {
                var a = n[r];
                if (!a) throw new Error("Tried to remove an undefined event.");
                if (a in t) {
                    var s = t[a].indexOf(i);
                    if (s === -1) {
                        for (var c = 0, u = t[a].length; c < u; c++)
                            if (t[a][c].handler === i) { s = r;
                                break }
                        if (s === -1) return e }
                    t[a].splice(s, 1) } }
            return e }, e.fire = function(n) {
            if (!n) throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var i = t[n].slice(0), r = 0, o = i.length; r < o; r++) i[r].apply(e, i.slice.call(arguments, 1));
            return e }, e }

    function ke(e, t) {
        function n() { e.events.fire(Ke.bufferStarted, { initial: !0 }), ye = !0, _e = !0 }

        function i() { _e && (e.events.fire(Ke.bufferEnded), ye = !1, _e = !1) }

        function r() {
            return ie.classList.remove("invisible"), Ee ? (e.events.fire(Ke.error, Ee), void c()) : (pe || (e.events.fire(Ke.playInitiated), n(), pe = !0, re.play(), !e.config.user.progress || ce || !e.config.embed.settings.playbar || e.config.embed.autoplay || e.config.embed.time || (re.currentTime = e.config.user.progress, e.config.user.progress = 0)), de = !0, fe = !0, "android_inline" in e.config.request.flags && wt.mobileAndroid && (ue = !e.config.request.flags.android_inline), ue && (Le = !0, e.events.fire(Xe.forceFullscreen)), void(Se && o())) }

        function o() { ke || Pe || (ye = !1, xe = !1, fe && re.paused && (te && (re.currentTime = te, te = null), re.play())) }

        function a(e, t) {
            var n = e.length - 1;
            if (e.length > 1)
                for (var i = 0, r = e.length; i < r; i++)
                    if (e.start(i) <= t && e.end(i) >= t) { n = i;
                        break }
            return n }

        function s(t) {
            if (!Te && re.buffered && re.buffered.length > 0) { t = t || re.currentTime;
                var n = a(re.buffered, t),
                    i = re.buffered.end(n),
                    r = i / re.duration;
                if (e.events.fire(Ke.loadProgress, i, re.duration, r), _e && fe && i === re.duration) return void o() } }

        function c() { ne.style.backgroundImage = "url(" + ne.getAttribute("data-thumb") + ")" }

        function l(t) {
            for (var n = t.target, i = n.activeCues, r = [], o = void 0, a = 0, s = i.length; a < s; a++) "" !== i[a].text.replace(/^\s+|\s+$/gm, "") && (o = document.createElement("span"), o.appendChild(i[a].getCueAsHTML()), r.push({ html: o.innerHTML.replace("\n", "<br>"), text: i[a].text }));
            e.events.fire(Ke.cueChanged, n, r) }

        function d() {
            var t = void 0;
            e.config.request.ab_tests && e.config.request.ab_tests.preload_segment && (t = e.config.request.ab_tests.preload_segment.data.max_preload_stream_index);
            var n = [fo, zr, vo];
            re = new To(ie, n, { externalDisplays: [AirPlayExternalDisplay], swfScanner: { swfUrl: e.config.request.urls.flideo }, mediaSourceScanner: { maxPreloadStreamIndex: t }, tests: e.config.request.ab_tests }), re.on("scannerchange", function() { f(), setTimeout(function() { e.events.fire(re.supportsSettingVolume ? Xe.enableVolume : Xe.disableVolume), e.events.fire(re.supportsTextTracks ? Xe.enableCaptions : Xe.disableCaptions) }, 0) }), re.on("currentfilechange", function(t) { t.mime === $e.hls && e.events.fire(Xe.disableHd);
                var n = t.metadata.quality;
                if (t.mime === $e.dash) {
                    var i = e.config.request.files.dash.streams.map(function(e) {
                        return e.quality });
                    n = P(e.config.embed.quality, i) || "auto", L(n) }
                e.events.fire(Ke.qualityChanged, n, !0) }), re.on("streamchange", function(t) {
                var n = t.index,
                    i = t.streams,
                    r = e.config.request.files.dash.streams[n];
                e.events.fire(Ke.streamChanged, r, n, i) }), re.on("streambufferstart", function(t) {
                var n = t.hasLowerStreamIndex;
                e.events.fire(Ke.ranIntoBuffer, n) }), re.on("streambufferend", function() { e.events.fire(Ke.playbackResumed) }), re.on("bandwidth", function(t) { e.events.fire(Ke.adaptiveBandwidth, t) }), re.on("alert", function(e) {
                var t = void 0;
                switch (e) {
                    case "streamstudder":
                        if (Ae) return;
                        t = dt.render("stream_studder") }
                ae.message = t, ae.show() }), re.on("cuepoint", function(t) { e.events.fire(Ke.cuepoint, t) }) }

        function f() {
            var t = "none";
            ("metadata" === e.config.request.flags.preload_video || ue || wt.iOS >= 8) && (t = "metadata"), "auto" === e.config.request.flags.preload_video && (t = "metadata", "MediaSourceScanner" === re.currentScanner && (t = "auto")), re.preload = t, e.events.on(Ke.mousedOver, function() { "metadata_on_hover" !== e.config.request.flags.preload_video || pe || e.verifyConfig().then(function() {
                    return re.preload = "metadata", !0 }).catch(function(e) {}) }) }

        function h() { re.on("loadedmetadata", function(t) { Se = !0;
                var n = re.duration;
                isFinite(n) && n > 0 && (e.config.video.duration = n), e.config.video.video_width = re.videoWidth, e.config.video.video_height = re.videoHeight }), re.on("loadeddata", function() { 0 === re.currentTime && re.paused && i() }), re.on("durationchange", function(t) {
                var n = re.duration;
                isFinite(n) && (e.config.video.duration > 0 && (n < e.config.video.duration - 1 || n > e.config.video.duration + 1) || (e.config.video.duration = n)) }), re.on("waiting", function() { we || n() }), re.on("canplay", function() { me = !0, i(), (e.config.embed.autoplay || fe || de && !pe && ve) && o() }), re.on("canplaythrough", function() { ge = !0, i(), !de || pe || ve || o(), (ye || fe && re.paused) && o() }), re.on("progress", function(e) { s() }) }

        function p() { e.events.on(Ke.playInitiated, function() { t.classList.remove("invisible") }).on(Ke.playButtonPressed, r).on(Ke.pauseButtonPressed, function() { fe = !1, re.pause() }).on(Ke.becameInactive, function() { window.location.search.indexOf("autopause=0") < 0 && !re.paused && !e.config.embed.settings.background && (fe = !1, e.events.fire(Ke.pauseButtonPressed)) }), re.on("play", function(t) {
                return Te = !1, pe || (!ve || me) && (ve || ge) ? (ie.classList.remove("invisible"), void e.events.fire(Ke.played, re.currentTime)) : (e.events.fire(Ke.playInitiated), pe = !0, de = !0, void(fe = !0)) }), re.on("pause", function(t) {!pe || ye || ke || xe || e.events.fire(Ke.paused, re.currentTime, re.ended) }), re.on("playing", function(t) { pe || (e.events.fire(Ke.playInitiated), pe = !0), s(), be = !0 }), re.on("timeupdate", function(t) {
                var r = re.currentTime;
                if (be && _e && r > 0 && (be = !1, i()), re.buffered.length > 0 && !_e) {
                    var o = a(re.buffered, r),
                        s = re.buffered.end(o);
                    if (!Le && r > 0 && r < re.duration && s === r) return void n() }
                if (!Te) {
                    var c = re.duration,
                        u = r / c;
                    e.events.fire(Ke.playProgress, r, c, u), te && r > te && (te = null) }
                oe && (oe.classList.add("hidden"), oe = null) }), re.on("ended", function(t) { ke || (e.config.embed.loop ? re.play() : (Le && e.events.fire(Ke.fullscreenButtonPressed), e.events.fire(Ke.ended), fe = !1, de = !1)) }), re.on("drmauthsuccess", function(e) { he = !0 }) }

        function v() { ae = new ai(t.parentElement), ae.on("show", function(t) { e.events.fire(Ke.alertVisibilityChanged, !0, t) }), ae.on("hide", function(t) {
                var n = t.target,
                    i = n && "function" == typeof n.getAttribute;
                if (i) switch (n.getAttribute("data-context")) {
                    case "suggestion":
                        e.events.fire(Xe.changeQuality, "auto"), t = "suggestion";
                        break;
                    default:
                        t = "close" }(i || "qualitymenuauto" === t) && (Ae = !0), e.events.fire(Ke.alertVisibilityChanged, !1, t) }) }

        function m() {
            var t = !1;
            M(function() { t = !0 }), re.on("error", function(n) {
                if (!t) switch (n.name) {
                    case "BrowserNotSupported":
                        e.events.fire(Ke.error, "not-supported"), Ee = "not-supported";
                        break;
                    case "DRMFailure":
                        e.events.fire(Ke.error, "drm-failure", function(t) {
                            var n = "Unable to play video.",
                                i = "Please try again.",
                                r = e.config.request.dynamic_drm_translation_map,
                                o = t.message.code;
                            return r && o && r[o] && (n = r[o].title, i = r[o].msg), { title: n, message: i } }(n));
                        break;
                    case "FilesNotPlayable":
                        e.events.fire(Ke.error, "not-supported"), Ee = "not-supported";
                        break;
                    case "TextTracksNotSupported":
                        e.events.fire(Xe.disableCaptions);
                        break;
                    case "HTMLSourceNotSupported":
                        e.events.fire(Ke.error, "not-supported", { final: !1 });
                        break;
                    case "HTMLDecode":
                        e.events.fire(Ke.error, "decode", { final: !1 });
                        break;
                    case "HTMLNetwork":
                        e.events.fire(Ke.error, "network");
                        break;
                    case "HTMLUnknown":
                        e.events.fire(Ke.error, "unknown");
                        break;
                    case "FileError":
                        e.events.fire(Ke.error, "telecine-file-error");
                        break;
                    case "ScannerError":
                        e.events.fire(Ke.error, "scanner-error") } }) }

        function g() {
            e.events.on(Xe.changeLoop, function(t) {
                e.config.embed.loop = !!t, re.loop = !!t
            }), e.events.fire(Xe.changeLoop, e.config.embed.loop)
        }

        function _() { e.events.on(Ke.scrubbingStarted, function() { n(), fe = !re.paused, ke = !0, re.pause() }), e.events.on(Ke.scrubbingEnded, function(e) { ke = !1, e || o() }), e.events.on(Xe.seek, function(t, n) { n || (n = (re.duration || e.config.video.duration) * u(t, 0, 1)), n = u(n, 0, re.duration || e.config.video.duration), pe || (e.events.fire(Ke.playButtonPressed), pe = !0, de = !0, fe = !0), re.currentTime = n }), re.on("seeking", function() { we = !0 }, !1), re.on("seeked", function() { s();
                var t = re.currentTime,
                    n = re.duration;
                e.events.fire(Ke.seeked, t, n, t / n), we = !1 }, !1) }

        function y() { e.events.on(Xe.changeVolume, function(t, n, i) { i && (t += re.volume), re.volume = u(t, 0, 1), e.events.fire(Ke.volumeChanged, u(t, 0, 1), n) });
            var t = e.config.request.cookie.volume;
            e.config.embed.mute && (t = 0), e.events.fire(Xe.changeVolume, t, !0) }

        function b() { e.events.on(Xe.changeQuality, function(t, n) {
                if (re.video.currentFile.mime === $e.dash) n = !0, L(t);
                else {
                    var i = ii(e.telecine.video.files).filter(function(e) {
                        return parseInt(e.metadata.quality, 10) <= parseInt(t, 10) });
                    i.sort(K()), i.length > 0 && (Te = !0, re.video.currentFile = i[0]) } "auto" === t && ae.hide("qualitymenuauto"), e.events.fire(Ke.qualityChanged, t, n) }) }

        function w() { e.events.on(Ke.overlayOpened, function() { Pe = !0, pe && !Ce && (fe = !re.paused, re.pause()) }), e.events.on(Ke.overlayClosed, function() { Pe = !1, !fe || Ce || ue || o() }) }

        function k() { e.events.on(Ke.popupOpened, function(e) { pe && !Ce && (fe = !re.paused, re.pause()) }), e.events.on(Ke.popupClosed, function(e) { Ce || o() }) }

        function x() { e.events.on(Ke.didEnterFullscreen, function(t, n) { ie.classList.remove("hide-webkit-controls"), t || (pe || wt.browser.safari || (re.poster = ne.getAttribute("data-thumb")), Le = !0, setTimeout(function() { re.video.textTracks.forEach(function(e) { "hidden" === e.mode && (e.mode = "showing") }) }, 500)), n || !wt.windowsPhone || wt.browser.edge || e.events.fire(Xe.toggleNativeControls, !0) }), e.events.on(Ke.didExitFullscreen, function(e) { re.poster = "", e || re.pause(), pe || ie.classList.add("invisible"), Le = !1, le && ie.classList.add("hide-webkit-controls"), re.video.textTracks.forEach(function(e) { "showing" === e.mode && (e.mode = "hidden") }) }), e.events.on(Ke.playInitiated, function() { re.poster = "" }) }

        function S() { e.events.on(Xe.toggleNativeControls, function(e) {
                return e ? (re.controls = !0, void t.classList.add("native-controls")) : (re.controls = !1, void t.classList.remove("native-controls")) }) }

        function T() { e.events.on(Ke.signatureExpired, function() { te = re.currentTime }), e.events.on(Ke.requestConfigReloaded, function(e) { I() }), e.events.on(Ke.configChanged, function(e) { I(), H() }) }

        function E() { nt(ie).on("transitionend", function(e) { "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && ie.classList.remove("transition") }, !1), e.events.on(Xe.reset, function(t) { Te = !0, re.paused || (re.pause(), e.events.fire(Ke.paused, re.currentTime)), c(), ie.classList.add("transition"), ie.classList.add("invisible"), t && (Se = !1), pe = !1, fe = !1, Ee = null, setTimeout(function() { re.currentTime = 0 }, 300) }) }

        function P(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return e.config.embed.on_site || wt.android || wt.iOS || wt.windowsPhone || e.config.video.vod || !t ? null : n.length && n.indexOf(t) === -1 ? null : (e.events.fire(Ke.forcedQuality, t), t) }

        function L(t) {
            if ("auto" === t) return re.video.currentFile.restrictedStreamIndexes = [], void(Ie = !1);
            var n = e.config.request.files.dash.streams.map(function(e) {
                return e.quality }).indexOf(t);
            n !== -1 && (re.video.currentFile.restrictedStreamIndexes = [n], Ie = n) }

        function C() {
            var t = e.config.request.files,
                n = ii(t.progressive).filter(G(t.progressive)),
                i = n.some($);
            wt.mobileAndroid && (i = !1);
            var r = "720p";
            if (i) {
                var o = ii(n).map(z);
                o.indexOf("1080p") !== -1 && o.indexOf("720p") === -1 && (r = "1080p") }
            var a = e.config.request.cookie.hd || e.config.video.default_to_hd ? r : "360p",
                s = n.map(function(e) {
                    return e.quality }),
                c = P(e.config.embed.quality, s),
                u = e.config.request.cookie.quality || c || a,
                l = Q({ files: t.progressive, preference: u, priorityOffset: 2 }),
                d = e.config.request.drm && wt.browser.safari;
            if (t.hls && (wt.iPhone || wt.iPad) || d) {
                var f = t.hls.default_cdn,
                    h = t.hls.cdns[f].url;
                l.push({ id: "hls-" + f + "-" + e.config.video.id, src: h, mime: $e.hls, priority: 2, metadata: { cdn: f, origin: t.hls.cdns[f].origin, quality: "sd" } }) }
            var p = !1;
            if (t.dash && !d) {
                for (var v in t.dash.cdns) l.push({ id: "dash-" + v + "-" + e.config.video.id, src: t.dash.cdns[v].url, mime: $e.dash, priority: v === t.dash.default_cdn ? 1 : 2, metadata: { cdn: v, origin: t.dash.cdns[v].origin, quality: "sd" } });
                p = t.dash.streams.some($) }
            return i || p || e.events.fire(Xe.disableHd), l }

        function O() {
            return "text_tracks" in e.config.request ? e.config.request.text_tracks.map(function(e) {
                return { id: e.id, src: e.url, kind: e.kind, label: e.label, language: e.lang } }) : [] }

        function A() {
            var t = e.config.request.files,
                n = t.hls.default_cdn;
            if (t.hls) {
                var i = t.hls.cdns[n].url;
                return t.hls.cdns[n].captions && (i = t.hls.cdns[n].captions), { src: i, mime: $e.hls, metadata: { cdn: e.config.request.files.hls.cdn, origin: e.config.request.files.hls.origin, quality: "sd" } } }
            return null }

        function I() {
            var t = C(),
                n = O();
            if (re.video && re.video.id === "" + e.config.video.id) return t.forEach(function(e) {
                var t = re.video.files.getFileById(e.id);
                t && (t.src = e.src) }), void n.forEach(function(e) {
                var t = re.video.textTracks.getTrackById(e.id);
                t && (t.src = e.src) });
            if (re.video = { id: e.config.video.id, title: e.config.video.title, subtitle: "from " + e.config.video.owner.name, files: t, textTracks: n, externalDisplayFiles: { AirPlay: A() }, metadata: { thumbnail: e.config.video.thumbs[640], useHls: e.config.request.drm && wt.browser.safari, drm: e.config.request.drm } }, 0 === n.length) {
                var i = !0;
                return void e.events.fire(Xe.turnCaptionsOff, i) }
            if (re.video.textTracks.forEach(function(t) { t.on("cuechange", l), t.on("modechange", function(n) { Le && "showing" === t.mode && e.events.fire(Ke.captionsChanged, t) }) }), null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions) return void e.events.fire(Xe.turnCaptionsOff);
            var r = !0;
            e.events.fire(Xe.turnCaptionsOn, e.config.request.cookie.captions, r) }

        function F(e, t, n, i) {
            if (he) {
                var r = new XMLHttpRequest;
                r.open("DELETE", e + "/plays/" + t + "/" + n + "?token=" + i, !1), r.send(), he = !1 } }

        function q() { e.config.embed.time > 0 && (re.currentTime = e.config.embed.time, e.config.embed.time = 0) }

        function R() { e.events.on(Xe.turnCaptionsOn, function(t, n) {
                if (!Oe || Oe.id !== t) {
                    var i = re.video.textTracks.getTrackById(t),
                        r = !0;
                    if (!i) {
                        var o = D(t, re.video.textTracks);
                        i = o.track, r = o.exactMatch }
                    i !== Oe && setTimeout(function() { re.video.textTracks.forEach(function(e) { e.mode = e === i ? "hidden" : "disabled" }), e.events.fire(Ke.captionsChanged, i, n || !r), Oe = i }, 0) } }).on(Xe.turnCaptionsOff, function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                setTimeout(function() { re.video.textTracks.forEach(function(e) { e.mode = "disabled" }), e.events.fire(Ke.cueChanged), Oe && (Oe = null, e.events.fire(Ke.captionsChanged, null, t)) }, 0) }) }

        function B() { re.on("externaldisplayavailable", function(t) {
                var n = t.type;
                if (!e.config.request.drm) switch (n) {
                    case "AirPlay":
                        e.events.fire(Ke.airPlayAvailable) } }), re.on("externaldisplayunavailable", function(t) {
                var n = t.type;
                if (!e.config.request.drm) switch (n) {
                    case "AirPlay":
                        e.events.fire(Ke.airPlayNotAvailable) } }), re.on("externaldisplayactivated", function(t) {
                var n = t.type;
                switch (Ce = !0, n) {
                    case "AirPlay":
                        e.events.fire(Ke.airPlayActivated) } }), re.on("externaldisplaydeactivated", function(t) {
                var n = t.type;
                switch (Ce = !1, n) {
                    case "AirPlay":
                        e.events.fire(Ke.airPlayDeactivated) } }), e.events.on(Ke.airPlayButtonPressed, function() { re.showExternalDisplayPicker("AirPlay") }) }

        function N() {
            var t = re.presentationMode;
            re.on("play", function() {
                return re.supportsPresentationMode("picture-in-picture") ? void e.events.fire(Ke.pictureInPictureAvailable) : void e.events.fire(Ke.pictureInPictureNotAvailable) }), re.on("presentationmodechange", function(n) { "inline" === t && "picture-in-picture" === n && e.events.fire(Ke.pictureInPictureActivated), "picture-in-picture" === t && "inline" === n && e.events.fire(Ke.pictureInPictureDeactivated), t = n, re.video.textTracks.forEach(function(e) { "picture-in-picture" === n && "hidden" === e.mode && (e.mode = "showing"), "inline" === n && "showing" === e.mode && (e.mode = "hidden") }) }), e.events.on(Xe.activatePictureInPicture, function() { re.supportsPresentationMode("picture-in-picture") && (re.presentationMode = "picture-in-picture") }), e.events.on(Xe.deactivatePictureInPicture, function() { re.supportsPresentationMode("picture-in-picture") && (re.presentationMode = "inline") }) }

        function H() { e.config.embed.autoplay && (de = !0, e.events.fire(Ke.playButtonPressed)) }

        function j() { e.events.on(Ke.enteredTinyMode, function() { ce = !0 }).on([Ke.enteredMiniMode, Ke.enteredNormalMode], function() { ce = !1 }) }

        function V() {
            var t = 0,
                n = null,
                i = function() { n || (n = e.config.embed.color), e.events.fire(Xe.changeColor, "#46d439") },
                r = function() { n && (e.events.fire(Xe.changeColor, n), n = null) };
            e.events.on(Xe.setEffect, function(n) {
                if (re.deactivateEffects(), "ascii" === n || "ascii-color" === n) {
                    if (re.supportsEffect(ho)) { re.activateEffect(ho, { color: "ascii-color" === n, fps: t || re.video.currentFile.metadata.fps });
                        try {
                            var o = e.config.request.files.dash.streams;
                            o.sort(K("asc"));
                            var a = e.config.request.files.dash.streams.indexOf(o[0]);
                            re.video.currentFile.restrictedStreamIndexes = [a] } catch (e) {}
                        return e.element.setAttribute("data-filter", n), "ascii" === n ? void i() : void r() }
                    return void e.events.fire(Xe.setEffect, "none") }
                if ("ascii" !== n && "ascii-color" !== n) {
                    var s = [];
                    Ie !== !1 && s.push(Ie), re.video.currentFile.restrictedStreamIndexes = s }
                r(), e.element.setAttribute("data-filter", n) }).on(Ke.streamChanged, function(e, n, i) { t = e.fps }) }

        function U() { M(function() {
                var t = e.config.request.drm;
                t && F(t.hoover_url, t.user, t.asset, t.hoover_token) }), e.events.on(Ke.loadVideo, function() {
                var t = e.config.request.drm;
                t && F(t.hoover_url, t.user, t.asset, t.hoover_token) }) }

        function W() {
            function t() { window.addEventListener("resize", d, !1), window.addEventListener("orientationchange", d, !1), e.events.on(Ke.didEnterFullscreen, d), wt.android && window.addEventListener("deviceorientation", _, !1), wt.pointerEvents ? nt(u).on("pointerdown", f).on("pointermove", h).on("pointerup", p).on("pointerleave", y) : nt(u).on("touchstart", v).on("touchend", g).on("touchmove", m).on("mousedown", f).on("mousemove", h).on("mouseup", p).on("mouseleave", y) }
            var n = this;
            if (!wt.threeSixtyVideo) return void e.events.on(Ke.playInitiated, function() { e.config.video.is_panorama && (ae.message = dt.render("threesixty_support_alert", { faqLink: "https://vimeo.com/faq" }), ae.show()) });
            var i = "v1" === e.config.video.design_version_360,
                r = "v2" === e.config.video.design_version_360,
                o = null,
                a = function() { ne.classList.remove("threesixty-video"), e.element.classList.remove("threesixty-grabbable"), e.element.classList.remove("threesixty-grabbing"), se && se.hide() },
                s = function() { Fe = !1, a(), o && (re.deactivateEffect(Io), o = null), e.config.video.is_panorama && re.supportsEffect(Io) && (o = re.activateEffect(Io, { threeUrl: e.config.request.urls.three_js, fps: e.config.video.fps, isMobile: wt.android, dimensions: e.config.embed.on_site ? { width: 1080, height: 540 } : { width: 640, height: 360 }, transparentCanvasWrap: i || r }), Fe = !0) };
            s(), e.events.on(Ke.configChanged, s);
            var c = function(e) {
                return function() {
                    for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                    Fe && e.apply(n, i) } };
            re.on("seeked", c(function() { e.element.classList.add("threesixty-grabbable"), se && !se.visible && se.reveal() })), re.on("play", c(function(t) { e.element.classList.add("threesixty-grabbable"), se && !se.visible && se.reveal() })), re.on("ended", c(function(e) { a() })), re.on("cameraupdate", function(e) { se && se.setAngle(e.lat, e.lon) });
            var u = e.element.querySelector(".target"),
                l = !1,
                d = c(function() { o.adjustRenderSize(), l = !1 }),
                f = c(function(t) { l || (l = !0, t.preventDefault(), e.element.classList.add("threesixty-grabbing"), o.makeContact({ x: t.clientX, y: t.clientY })) }),
                h = c(function(e) { l && (qe && clearTimeout(qe), o.move({ x: e.clientX, y: e.clientY })) }),
                p = c(function(t) { e.element.classList.remove("threesixty-grabbing"), o.releaseContact(), l = !1 }),
                v = c(function(e) { l || (l = !0, o.makeContact({ x: e.touches[0].clientX, y: e.touches[0].clientY })) }),
                m = c(function(e) { l && (e.preventDefault(), qe && clearTimeout(qe), o.move({ x: e.touches[0].clientX, y: e.touches[0].clientY })) }),
                g = c(function(e) { re.fire("360releasecontact"), l = !1 }),
                _ = c(function(e) { l || (qe && clearTimeout(qe), o.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)) }),
                y = c(function(t) { l = !1, e.element.classList.remove("threesixty-grabbing"), o.abandonMotion() }),
                b = !1;
            e.events.on(Ke.playInitiated, function() { b || (t(), b = !0), e.config.video.is_panorama && (ne.classList.add("threesixty-video"), ie.classList.add("telecine--fade"), i ? X() : r ? Y() : o.showRenderer()) }) }

        function X() {
            var t = new Date,
                n = re.getEffectByName("ThreeSixtyEffect");
            se = new si(e.element.querySelector(".controls-wrapper"), function() { n.snapToCenter() }, 1), se.reveal(), re.once("timeupdate", function() { n.showRenderer(), ie.classList.remove("telecine--fade"), ie.classList.add("telecine--blackout"), setTimeout(function() { window.requestAnimationFrame(function() { ee() }) }, Math.min(new Date - t, 4500)) }), Z(!0), Me.querySelector(".intro-wrap").classList.add("pre-play") }

        function Y() {
            var t = re.getEffectByName("ThreeSixtyEffect");
            se = new si(e.element.querySelector(".controls-wrapper"), function() { t.snapToCenter() }, 2), se.reveal(), re.once("timeupdate", function() { t.showRenderer(), ie.classList.remove("telecine--fade"), ie.classList.add("telecine--blackout"), Me && ! function() {
                    var e = Me.querySelector(".intro-wrap");
                    e.classList.remove("pre-play"), window.requestAnimationFrame(function() { e.classList.add("instruct-reveal"), setTimeout(function() { window.requestAnimationFrame(function() { e.classList.add("fadeto--phase-b") }) }, 1500), setTimeout(function() { window.requestAnimationFrame(function() { ee() }) }, 4e3) }) }() }), Z(!1), Me.querySelector(".intro-wrap").classList.add("pre-play") }

        function J(e) {
            var n = t.parentElement;
            if (!Me) {
                var i = Me = document.createElement("div");
                i.classList.add("player-alert-round"), e ? i.classList.add("player-alert-round--top") : i.classList.add("player-alert-round--mid"), i.classList.add("cloaked");
                var r = document.createElement("div");
                r.innerHTML = dt.render("threesixty_instruct", { textOnly: e }), i.appendChild(r), n.appendChild(i) } }

        function Z(e) { Me || J(e), Me.classList.remove("cloaked"), window.requestAnimationFrame(function() { Me.classList.add("in") }) }

        function ee() { Me.classList.add("leaving"), window.requestAnimationFrame(function() { nt(Me).on("transitionend", function e(t) { "opacity" === t.propertyName && (Me.classList.remove("in"), Me.classList.remove("leaving"), Me.classList.add("cloaked"), nt(Me).off("transitionend", e)) }) }) }
        var te, ne = t.querySelector(".video"),
            ie = t.querySelector(".telecine"),
            re = null,
            oe = null,
            ae = null,
            se = null,
            ce = !1,
            ue = wt.android && !wt.browser.chrome && !wt.browser.firefox && !wt.browser.opera || wt.windowsPhone || wt.iOS >= 8 && !wt.iPad,
            le = wt.iOS >= 8 && !wt.iPad,
            de = !1,
            fe = !1,
            he = !1,
            pe = !1,
            ve = !0,
            me = !1,
            ge = !1,
            _e = !1,
            ye = !1,
            be = !1,
            we = !1,
            ke = !1,
            xe = !1,
            Se = !1,
            Te = !0,
            Ee = null,
            Pe = !1,
            Le = !1,
            Ce = !1,
            Oe = null,
            Ae = !1,
            Ie = !1;
        ie.classList.add("invisible"), le && ie.classList.add("hide-webkit-controls");
        var Me = null,
            Fe = !1,
            qe = null;
        return d(), f(), h(), p(), v(), m(), g(), _(), y(), b(), w(), k(), x(), S(), T(), E(), R(), q(), B(), N(), j(), V(), I(), W(), U(), e.ready().then(function() {
            return setTimeout(function() {
                return H() }, 0), null }).catch(function(e) {}), e.events.fire(Ke.videoModuleReady), { telecine: re }
    }

    function xe(e) {
        function t() {
            var e = P(m.clientWidth * wt.devicePixelRatio, m.clientHeight * wt.devicePixelRatio),
                t = e.width,
                n = e.height,
                i = T.getAttribute("data-thumb-width");
            if (t <= parseInt(i, 10) || 0 === t) return Ve.resolve();
            var r = L({ width: t, height: n, baseUrl: x.config.video.thumbs.base, webpSupport: x.config.request.flags.webp });
            if (T.setAttribute("data-thumb", r), T.setAttribute("data-thumb-width", t), x.config.embed.autoplay && "beginning" !== x.config.embed.outro) return Ve.resolve();
            var o = C(r).then(function(e) { "none" !== T.style.backgroundImage && (T.style.backgroundImage = "url(" + e.src + ")");
                var t = x.config.video.width / x.config.video.height,
                    n = e.width / e.height;
                return (n <= .95 * t || n >= 1.05 * t) && T.classList.remove("cover"), e }).catch(function(e) { a(e, { extra: { thumbnailUrl: r } }) });
            return Ve.race([o, new Ve(function(e) {
                return setTimeout(e, 2e3) })]) }

        function n() {
            var e = c({ width: x.config.video.width, height: x.config.video.height, elementWidth: m.clientWidth, elementHeight: m.clientHeight }),
                t = (e.extraWidth, e.extraHeight, e.scaleFactor);
            t > 1 ? (T.classList.add("cover"), E.style.webkitTransform = "scale(" + t + ")", E.style.transform = "scale(" + t + ")") : (T.classList.remove("cover"), E.style.webkitTransform = "", E.style.transform = "") }

        function i(e) {
            var t = e.old,
                n = e.loaded;
            if (!t);
            if (window.parent !== window) {
                var i = "Private Video on Vimeo";
                n.view !== Ue.main && n.view !== Ue.privateUnlocked || (i = n.video.title + " from " + n.video.owner.name + " on Vimeo"), document.title = i, history && history.replaceState && n.video && t && history.replaceState({ id: n.video.id }, "", "/video/" + n.video.id) }
            if (n.view !== Ue.main && n.view !== Ue.privateUnlocked) throw new Error("Config not authorized: " + n.view);
            t && t.embed && t.embed.color !== n.embed.color && k.fire(Xe.changeColor, n.embed.color), W && W.reset(), (wt.mobileAndroid || wt.iPhone || wt.windowsPhone || wt.browser.bb10 || wt.iPad || wt.android) && (n.embed.autoplay = 0);
            var r = !t || !t.video || t.video.id !== n.video.id;
            return r && T.removeAttribute("data-thumb-width"), R = null, k.fire(Xe.reset), k.fire(Ke.configChanged, r), e }

        function r() { window.requestAnimationFrame(function() { m.classList.remove("loading"), $() }) }

        function o(e) {
            return w.then(function() {
                if (p(e), T.setAttribute("data-thumb", ""), T.setAttribute("data-thumb-width", ""), T.style.backgroundImage = "", "function" != typeof U.authorizationHandler) throw new Error("Config was not authorized.");
                return U.authorizationHandler(r) }).then(function(e) { x.config = e;
                var t = !0;
                return R = null, k.fire(Xe.reset), k.fire(Ke.configChanged, t), e }) }

        function a(e, t) { q && q.reportException(e, t) }

        function s() {
            var e = document.location.hash,
                t = f(e);
            null !== t && (x.config.embed.time = u(t, 0, x.config.video.duration), wt.touch || (x.config.embed.autoplay = 1), e.indexOf("at=") !== -1 && history && history.replaceState && history.replaceState("", "", window.location.pathname + window.location.search)) }

        function l() { k.on(Ke.userLogIn, function(e) { x.reload().then(function(t) {
                    if (!x.config.user.logged_in) return k.fire(Ke.loginFailure), t;
                    switch (k.fire(Ke.userLoggedIn, e), e) {
                        case "like":
                            x.config.user.liked && k.fire(Ke.liked);
                            break;
                        case "watch-later":
                            x.config.user.watch_later && k.fire(Ke.addedToWatchLater);
                            break;
                        case "private":
                            k.fire(Ke.privateUnlocked) }
                    return t }).catch(function(e) { a(e) }) }), k.on(Ke.userLoggedOut, function() { x.reload().catch(function(e) { a(e) }) }) }

        function d() { D = t(), k.on([Ke.playInitiated, Ke.playButtonPressed], function() {
                var e = wt.threeSixtyVideo && x.config.video.is_panorama;
                e || (T.style.backgroundImage = "none") }), k.on(Ke.didEnterFullscreen, function() { "none" === T.style.backgroundImage && "beginning" !== x.config.embed.outro || (D = t()) });
            var e = null;
            window.addEventListener("resize", function() { clearTimeout(e), e = setTimeout(function() { D = D.then(function() {
                        return t() }).catch(function(e) {}) }, 250), n() }, !1) }

        function h(e) { n(), s(), l(), d(), v(e) }

        function p(e) { z || (z = new N(e), Object.keys(z).forEach(function(e) {
                if ("function" == typeof z[e]) return void Object.defineProperty(X, e, { enumerable: !0, value: z[e] });
                var t = { enumerable: !0, get: z[e].get };
                z[e].set && (t.set = z[e].set), Object.defineProperty(X, e, t) })) }

        function v(e) {
            var t = x.config.embed.settings.background && (wt.iOS || wt.android);
            if (!t) {
                var n = new ke(e, m.querySelector(".video-wrapper"));
                M = n.telecine }
            void new F(e), void new H(e, m.querySelector(".captions")), void new J(e), void new Z(e), W = new ie(e), p(e) }
        var m = e.element,
            _ = e.delegate,
            y = void 0 === _ ? {} : _,
            b = e.cssLoadedPromise,
            w = void 0 === b ? Ve.resolve(null) : b,
            k = (e.name, A()),
            x = new j({ events: k }),
            S = g();
        m.classList.add("player-" + S), m.classList.add("loading"), m.id || (m.id = "player" + S), m.innerHTML = dt.render("outer", { strings: { back: "Back", close: "Close overlay" } });
        var T = m.querySelector(".video"),
            E = m.querySelector(".telecine");
        if (wt.iOS) {
            var I = document.createElement("video");
            E.appendChild(I);
            try { I.play(), I.pause() } catch (e) { a(e) } }
        var M = null,
            q = null,
            R = null,
            B = null,
            D = null,
            V = null,
            U = {},
            z = null,
            W = null,
            $ = void 0,
            G = new Ve(function(e, t) { $ = e }).then(function() {
                return k.fire(Ke.ready), null }),
            X = {get config() {
                    return x.config }, set config(e) { x.config = e }, get delegate() {
                    return y }, set delegate(e) { y = e }, ready: function(e) {
                    return e ? void G.then(function() {
                        return e() }).catch(function(e) { a(e) }) : G }, get sessionId() {
                    return x.config.request.session } },
            K = {get config() {
                    return x.config }, get raven() {
                    return q }, get element() {
                    return m }, get events() {
                    return k }, get uuid() {
                    return S }, get externalApi() {
                    return X }, get telecine() {
                    return M }, init: function(e, t) {
                    return B ? B : (U = t, B = x.load(e).then(i).catch(function(e) {
                        return o(K) }).then(function() {
                        try { q = new O(x.config) } catch (e) {}
                        return null }).then(function() {
                        return "function" == typeof U.initializationHandler ? Ve.resolve(t.initializationHandler()) : null }).then(function() {
                        return h(K), "function" == typeof U.postInitializationHandler ? Ve.resolve(t.postInitializationHandler()) : null }).then(function() {
                        return Ve.all([D, w]) }).then(r).catch(function(e) { a(e) })) }, loadVideo: function(e) {
                    return V === e && R ? R : (k.fire(Ke.loadVideo), V = e, m.classList.add("loading"), R = x.load(e).then(i).catch(function(e) {
                        return a(e), o(K) }).then(function(e) {
                        return D = t(), Ve.resolve(D) }).then(r)) }, performDelegateAction: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        i = void 0;
                    if (y && y[e.will]) {
                        var r;
                        if (i = (r = y)[e.will].apply(r, [x.config.video.id].concat(n)), i === !1) return }
                    t.apply(void 0, [x.config.video.id].concat(n, [i])), y && y[e.did] && y[e.did]() }, ready: function() {
                    return G }, verifyConfig: function() {
                    return x.verify() }, reportException: function(e, t) { a(e, t) } };
        return K }

    function Se(e, t, i, r) {
        function o() { k.style.left = "-999999px";
            var e = a(t),
                r = a(i),
                o = a(k),
                s = e.left + e.width / 2 - o.width / 2 - r.left,
                c = r.height,
                u = r.left + s + o.width,
                l = i.classList.contains("play-bar") ? r.right : r.width - parseInt(window.getComputedStyle(i).paddingRight, 10);
            if (u > l) {
                var d = u - l;
                s -= d;
                var f = e.left - (r.left + s) + e.width / 2;
                f !== b && (n(".player .menu::after", "left:" + f + "px", document.styleSheets[document.styleSheets.length - 1]), b = f) }
            k.style.left = s + "px", k.style.bottom = c + "px" }

        function s() { k.style.height = "auto";
            var e = a(r.element),
                t = a(k),
                n = e.bottom - t.bottom,
                i = 0,
                o = r.element.querySelector(".title");
            if (o) {
                var s = a(o);
                i = Math.max(10, s.height) }
            var c = e.height - n - i,
                u = e.height / 2,
                l = Math.max(c, u),
                d = k.querySelector(".scrollable-items"),
                f = d.children,
                h = 0;
            if (f && f.length) {
                var p = f[0],
                    v = getComputedStyle(p),
                    m = p.clientHeight + parseInt(v.marginTop, 10) + parseInt(v.marginBottom, 10);
                h = m / 2 }
            t.height > l && (k.style.height = Math.min(l - h, t.height) + "px") }

        function c(e) {
            var t = document.createElement("ul");
            t.classList.add("menu"), t.classList.add("rounded-box"), t.classList.add("hidden"), t.classList.add("invisible"), t.setAttribute("hidden", ""), t.setAttribute("id", E), t.setAttribute("role", "menu"), O = document.createElement("div"), O.classList.add("item-container");
            var n = document.createDocumentFragment();
            e.forEach(function(e) {
                var t = document.createElement("li");
                t.setAttribute("tabindex", "0"), t.setAttribute("role", "menuitemradio"), t.setAttribute("aria-checked", "false"), t.setAttribute("data-id", e.id), t.innerHTML = "<span>" + e.label + "</span>", e.active && (t.classList.add("active"), t.setAttribute("aria-checked", "true"), S = t), n.appendChild(t) }), C = document.createElement("div"), C.classList.add("scrollable-items");
            var i = document.createElement("div");
            i.classList.add("sticky-items"), i.appendChild(n.lastChild), C.appendChild(n);
            var a = document.createElement("div");
            return a.classList.add("top-shadow"), O.appendChild(C), O.appendChild(i), O.appendChild(a), t.appendChild(O), I = C.firstChild, M = C.lastChild, C.addEventListener("mousewheel", u), C.addEventListener("scroll", u), C.addEventListener("focusin", l), r.events.on(Ke.menuVisibilityChanged, function(e) { setTimeout(u, 10) }), r.events.on([Ke.enteredTinyMode, Ke.enteredMiniMode, Ke.enteredNormalMode], function(e) { u(), o(), T && r.events.fire(Ke.menuVisibilityChanged, T, y) }), t }

        function u(e) {
            var t = C,
                n = t.scrollHeight,
                i = t.scrollTop,
                r = t.clientHeight,
                o = n - r,
                a = e || {},
                s = a.deltaY,
                c = void 0 === s ? 0 : s;
            return O.classList.remove("scroll-off"), n - r <= 1 ? void O.classList.add("scroll-off") : (i >= o ? (P = !0, O.classList.add("scroll-end")) : P && (P = !1, O.classList.remove("scroll-end")), i <= 0 ? (L = !0, O.classList.add("scroll-start")) : L && (L = !1, O.classList.remove("scroll-start")), void((P && c > 0 || L && c < 0) && e.preventDefault())) }

        function l(e) {
            var t = e.target,
                n = I.contains(t),
                i = M.contains(t);
            n ? C.scrollTop = 0 : i && (C.scrollTop = C.scrollHeight) }

        function d(e) { T || (e = e || t.contains(document.activeElement), k.classList.remove("hidden"), k.removeAttribute("hidden"), o(), o(), s(), t.setAttribute("aria-expanded", "true"), T = !0, r.events.fire(Ke.menuVisibilityChanged, T, y), window.requestAnimationFrame(function() { k.classList.remove("invisible"), k.classList.add("open"), u(), e && (S || m()[0]).focus() })) }

        function f() { T && (t.setAttribute("aria-expanded", "false"), T = !1, r.events.fire(Ke.menuVisibilityChanged, T, y), k.classList.add("invisible")) }

        function h(e) {
            return T ? (f(), !1) : (d(e), !0) }

        function p(e) { S && (S.classList.remove("active"), S.setAttribute("aria-checked", "false"));
            var t = k.querySelector('[data-id="' + e + '"]');
            t && (S = t, S.classList.add("active"), S.setAttribute("aria-checked", "true")) }

        function v() { k.parentElement.removeChild(k) }

        function m() {
            var e = ii(k.querySelectorAll('[tabindex="0"]'));
            return e }

        function g() { k = c(e), t.setAttribute("aria-controls", E), t.setAttribute("aria-expanded", "false"), t.setAttribute("aria-haspopup", "true"), x(k, ["li", "span"], function() {
                var e = "SPAN" === this.tagName ? this.parentElement : this;
                w.fire("selected", e.getAttribute("data-id")) }), x(t, function() { h() }), nt(window).on("focus", function(e) {
                var n = document.activeElement,
                    i = k.contains(n),
                    r = t.contains(n);
                i || r || f() });
            var n = function(e) {
                if (("keypress" === e.type && 13 === e.which || "keydown" === e.type && 32 === e.which) && k.contains(document.activeElement)) return w.fire("selected", document.activeElement.getAttribute("data-id")), f(), !1 };
            nt(k).on("keydown", n), nt(k).on("keypress", n), window.addEventListener("resize", o), i.insertBefore(k, t.nextSibling) }

        function _() { nt(document).on("click", function(e) { T && !t.contains(e.target) && f() }), nt(k).on("transitionend", function(e) { this === k && "opacity" === e.propertyName && k.classList.contains("invisible") && (k.classList.add("hidden"), k.setAttribute("hidden", ""), k.classList.remove("open")) }), window.addEventListener("blur", f, !1), r.events.on(Ke.didExitFullscreen, f).on(Ke.controlBarVisibilityChanged, function(e) { e || f() }) }
        var y, b, w = A(),
            k = null,
            S = null,
            T = !1,
            E = "menu-" + Math.round(1e3 * Math.random() + (new Date).getTime()),
            P = !1,
            L = !1,
            C = void 0,
            O = void 0,
            I = void 0,
            M = void 0;
        return g(), _(), y = { show: d, hide: f, toggle: h, setActiveItem: p, on: w.on, off: w.off, destroy: v, button: t, element: k, get focusableItems() {
                return m() } } }

    function Te(e, t, n) {
        return e = String(e), new Array(t - e.length + 1).join(n || "0") + e }

    function Ee(e, t) {
        var n = Math.floor(e / 3600 % 60),
            i = Math.floor(e / 60 % 60);
        if (e = Math.floor(e % 60), t) {
            var r = e + " second" + (1 === e ? "" : "s");
            return i > 0 && (r = i + " minute" + (1 === i ? "" : "s") + ", " + r), n > 0 && (r = n + " hour" + (1 === n ? "" : "s") + ", " + r), r }
        return (n > 0 ? n + ":" : "") + Te(i, 2) + ":" + Te(e, 2) }

    function Pe(e, t) {
        function n() { De = null, Ne = null }

        function i() {
            if (!Ne) {
                var e = ie.getBoundingClientRect().left;
                ie.offsetWidth < ie.clientWidth && (e *= 100);
                var t = parseInt(window.getComputedStyle(ie, "").borderLeftWidth, 10);
                Ne = e + t }
            return Ne }

        function r() {
            if (!De) {
                var e = ie.getBoundingClientRect().right;
                ie.offsetWidth < ie.clientWidth && (e *= 100);
                var t = parseInt(window.getComputedStyle(ie, "").borderRightWidth, 10);
                De = e - t }
            return De }

        function o(t) {
            var n = i(),
                o = r(),
                a = o - n,
                s = t - n;
            if (e.config.user.progress && s <= 10 && !xe) return 0;
            var c = s / a;
            return u(c, 0, 1) }

        function a(t) {
            for (var n = He, i = Array.isArray(n), r = 0, n = i ? n : n[Symbol.iterator]();;) {
                var a;
                if (i) {
                    if (r >= n.length) break;
                    a = n[r++] } else {
                    if (r = n.next(), r.done) break;
                    a = r.value }
                var s = a,
                    c = s.getBoundingClientRect(),
                    u = c.left,
                    l = c.right;
                if (t >= u && t <= l) {
                    var d = parseFloat(s.getAttribute("data-time"));
                    return d / e.config.video.duration } }
            return o(t) }

        function s(t, n) { xe && !Fe && (n = n || e.config.video.duration * t || 0, window.requestAnimationFrame(function() { c(t, n), l(t, n) })) }

        function c(e, t) { ce.style.left = Math.min(v(100 * e), 100) + "%", ue.innerHTML = Ee(t) }

        function l(e, t) {
            var n = Math.min(v(100 * e), 100);
            ae.style.width = n + "%", ae.setAttribute("aria-valuenow", v(t)), ae.setAttribute("aria-valuetext", Ee(Math.round(t), !0) + " played"), te.setAttribute("width", n + "%") }

        function d(e, t) {
            var n = Math.min(v(100 * e), 100);
            oe.style.width = n + "%", oe.setAttribute("aria-valuenow", v(t)), oe.setAttribute("aria-valuetext", Ee(t, !0) + " loaded"), ee.setAttribute("width", n + "%") }

        function f() {
            return xe = !0, Be && (qe = !1, t.classList.add("invisible"), S(), g()), J.classList.contains("state-playing") ? (e.events.fire(Ke.pauseButtonPressed), h()) : (e.events.fire(Ke.playButtonPressed), p()), !wt.android }

        function h() { Re = !1, J.classList.remove("state-playing"), J.classList.add("state-paused");
            var e = J.getAttribute("data-title-play");
            J.setAttribute("title", e), J.setAttribute("aria-label", e) }

        function p() { Re = !0, Be && S(), J.classList.add("state-playing"), J.classList.remove("state-paused");
            var e = J.getAttribute("data-title-pause");
            J.setAttribute("title", e), J.setAttribute("aria-label", e) }

        function m() { qe && (ke || (xe && Me || Pe || Je) && (Te || (!Ye && !Qe || Pe) && (Pe && e.config.view === Ue.privateUnlocked || Oe || Le || (qe = !1, e.events.fire(Ke.controlBarVisibilityChanged, qe), t.classList.add("invisible"))))) }

        function g() { qe || Pe || (t.classList.remove("hidden"), t.removeAttribute("hidden"), setTimeout(function() { qe = !0, e.events.fire(Ke.controlBarVisibilityChanged, qe), t.classList.remove("invisible") }, 0)) }

        function _(t, n) {
            var i = []; "text_tracks" in e.config.request && (e.config.request.text_tracks.forEach(function(e) {
                var t = "CC" === e.label.substring(e.label.length - 2),
                    n = "captions" !== e.kind || t ? "" : " CC";
                i.push({ label: e.label + n, id: e.id, active: ze === "" + e.id }) }), i.push({ label: "None", id: "off", active: null === ze }));
            var r = new Se(i, t, n, e);
            return r.on("selected", function(t) {
                return "off" === t ? void e.events.fire(Xe.turnCaptionsOff) : void e.events.fire(Xe.turnCaptionsOn, t) }), r }

        function y() { window.requestAnimationFrame(function() { c(0, e.config.video.duration), l(0, 0), d(0, 0) }) }

        function b() { xe = !1, Te = !1, Le = !1, Ae = !1, Fe = !1, ke = !1, Me = !1, Ve = !0, _e && (_e.destroy(), _e = null), je && (je.destroy(), je = null) }

        function w() {
            if (!e.config.embed.settings.custom_logo) return null;
            var t = e.config.embed.settings.custom_logo,
                n = t.img;
            return wt.devicePixelRatio >= 2 && (n = n.replace(/(mw|mh)=(\d+)/g, function(e, t, n) {
                return t + "=" + 2 * parseInt(n, 10) })), { showLink: null !== t.url, url: t.url, img: n, sticky: t.sticky, width: t.width, height: t.height } }

        function k() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (pe) {
                var t, n = 1 / ve.length,
                    i = e / n,
                    r = Math.ceil(i),
                    o = i % 1;
                o <= .33 && (t = "fill1"), o > .33 && o <= .66 && (t = "fill2"), ve.forEach(function(e, n) {
                    return e.classList.remove("fill0"), e.classList.remove("fill1"), e.classList.remove("fill2"), n === r - 1 && o && o <= .66 ? void e.classList.add(t) : void(n > r - 1 && e.classList.add("fill0")) }), pe.setAttribute("aria-valuenow", e.toFixed(3)), pe.setAttribute("aria-valuetext", Math.round(100 * e) + "%") } }

        function S() {
            if (e.config.view === Ue.main || e.config.view === Ue.privateUnlocked) {
                var n = e.config.embed.settings,
                    i = { show: n.logo, showLink: !!e.config.video.url, url: e.config.video.url },
                    r = w();
                if (e.config.embed.settings.watch_trailer && !xe && !Re && !e.config.embed.autoplay && e.config.embed.on_site) return void T(i, r);
                var o = !e.telecine || e.telecine.supportsSettingVolume,
                    a = !e.telecine || e.telecine.supportsTextTracks,
                    s = "text_tracks" in e.config.request && e.config.request.text_tracks.length,
                    c = { targetBlank: 0 === e.config.embed.on_site, playState: Re ? "playing" : "paused", volume: o && n.volume, ccButton: a && s, ccOn: null !== ze, hdButton: Ve && e.config.video.hd, airplayButton: wt.airPlay, fullscreenButton: n.fullscreen, vimeoLogo: i, duration: Ee(e.config.video.duration), rawDuration: e.config.video.duration, strings: { play: "Play", pause: "Pause", loadedBar: "loaded", playedBar: "played", volume: "Volume (use arrow keys to change)", captions: "Choose captions", hd: "Select video quality", effect: "Choose an effect to apply to the video", airPlay: "Choose an AirPlay device", airPlayOff: "Turn off AirPlay", pipEnter: "Enter Picture-in-Picture", pipReturn: "Exit Picture-in-Picture", fullscreen: "Fullscreen", enterFullscreen: "Enter full screen", exitFullscreen: "Exit full screen", watchOnVimeo: "Watch on vimeo.com" } };
                r && (c.customLogo = r), t.classList.remove("trailer"), Be = !1, t.innerHTML = dt.render("controlbar", c), J = t.querySelector(".play"), Z = J.querySelector(".buffer"), ee = J.querySelector(".loaded"), te = J.querySelector(".played"), ne = t.querySelector(".play-bar"), ie = t.querySelector(".progress"), re = ne.querySelector(".buffer"),
                    oe = ne.querySelector(".loaded"), ae = ne.querySelector(".played"), se = ne.querySelector(".cuepoints"), ce = t.querySelector(".timecode"), ue = ce.querySelector(".box"), le = t.querySelector(".ghost-timecode"), de = le.querySelector(".box"), fe = t.querySelector(".thumb-preview"), he = t.querySelector(".thumb"), pe = t.querySelector(".volume"), pe && (ve = ii(pe.querySelectorAll("div")), k(e.config.request.cookie.volume)), me = t.querySelector(".hd"), ge = t.querySelector(".play-bar .cc"), Ge = t.querySelector(".effect"), ye = t.querySelector(".pip"), wt.airPlay && (be = t.querySelector(".airplay")), we = t.querySelector(".fullscreen"), Te = !1, xe || $(), qe && e.events.fire(Ke.controlBarVisibilityChanged, qe), Je && m()
            }
        }

        function T(n, i) { t.classList.add("trailer");
            var r = { vimeoLogo: n, text: e.config.video.vod.button_text || "Watch Trailer", strings: { playTrailer: "Play Trailer", watchOnVimeo: "Watch on vimeo.com" } };
            i && (r.customLogo = i), t.innerHTML = dt.render("controlbar_trailer", r), J = t.querySelector(".play"), Be = !0 }

        function E() { x(t, ".play", f), e.events.on([Ke.playInitiated, Ke.playButtonPressed], p), e.events.on([Ke.pauseButtonPressed, Ke.paused, Ke.error], h), e.events.on(Ke.played, function() { p() }), e.events.on(Ke.ended, function() { Fe = !1, h(), s(1) }), e.events.on(Ke.overlayOpened, function(e) { "notsupported" === e && h() }) }

        function P() { e.events.on(Ke.loadProgress, function(e, t, n) { ke || window.requestAnimationFrame(function() { d(n, e) }) }) }

        function L() { e.events.on(Ke.bufferStarted, function(e) { e.initial;
                re.classList.remove("hidden"), oe.classList.add("hidden"), Z.setAttribute("class", Z.getAttribute("class").replace(/\s+hidden/, "")), Oe = !0, Je || g() }), e.events.on(Ke.bufferEnded, function() { re.classList.add("hidden"), oe.classList.remove("hidden"), Z.setAttribute("class", Z.getAttribute("class") + " hidden"), Oe = !1 }) }

        function O() {
            function n(n) {
                if (!n.button || 2 !== n.button) { e.element.classList.add("scrubbing"), e.events.fire(Ke.scrubbingStarted);
                    var u = n.type;
                    if ("pointerdown" === u || "MSPointerDown" === u) { o = n.pointerId;
                        try { n.target.msSetPointerCapture ? n.target.msSetPointerCapture(o) : n.target.setPointerCapture(o) } catch (e) {}
                        nt(t).on("pointermove", ".progress", i).on("pointerup", ".progress", r) } else "touchstart" === u ? nt(t).on("touchmove", i).on("touchend", r) : nt(document).on("mousemove", i).on("mouseup", r);
                    var d = n.clientX;
                    n.targetTouches && n.targetTouches.length > 0 && (d = n.targetTouches[0].clientX, n.preventDefault());
                    var f = a(d),
                        h = null;
                    if (xe) s(f);
                    else {
                        var p = e.config.video.duration * f;
                        c(f, p), l(f, p), Fe = !0 }
                    return e.events.fire(Xe.seek, f, h), !1 } }

            function i(t) {
                if (Fe = !1, o === t.pointerId && t.isPrimary !== !1) {
                    var n = t.clientX;
                    t.targetTouches && t.targetTouches.length > 0 && (n = t.targetTouches[0].clientX, t.preventDefault());
                    var i = a(n);
                    s(i), e.events.fire(Xe.seek, i) } }

            function r(n) {
                var o = n.type; "pointerup" === o || "MSPointerUp" === o ? nt(t).off("pointermove", ".progress", i).off("pointerup", ".progress", r) : "touchend" === n.type ? nt(t).off("touchmove", i).off("touchend", r) : nt(document).off("mousemove", i).off("mouseup", r), e.events.fire(Ke.scrubbingEnded), e.element.classList.remove("scrubbing") }
            e.events.on(Ke.playProgress, function(t, n, i) { Fe && (0 === e.config.embed.time || e.config.embed.time > 0 && t >= e.config.embed.time) && (Fe = !1), Le || s(i, t) }), e.events.on(Ke.scrubbingStarted, function(e) { Le = !0, Ce = e }), e.events.on(Ke.scrubbingEnded, function() { Le = !1, Ce = !1 });
            var o;
            e.events.on(Ke.seeked, function(e, t, n) { Ce && s(n) }), nt(t).on(wt.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], ".progress", n) }

        function A() {
            function n() {
                return m || (m = e.verifyConfig().then(function(e) {
                    return C(e.thumb_preview.url) })), m.then(function(t) {
                    var n = e.config.request.thumb_preview;
                    return he.style.backgroundImage || (he.style.width = n.frame_width / 2 + "px", he.style.height = n.frame_height / 2 + "px", he.style.backgroundImage = "url(" + n.url + ")", he.style.backgroundSize = n.width / 2 + "px " + n.height / 2 + "px"), t }) }

            function a(t) {
                if (t.target === ne) {
                    var n = o(t.clientX);
                    s(n), e.events.fire(Xe.seek, n) } }

            function c(e) {
                return le.classList.contains("hidden") ? e : (fe.classList.remove("hidden"), window.requestAnimationFrame(function() { window.requestAnimationFrame(function() { fe.classList.remove("invisible") }) }), e) }

            function u(t) { Ie || Ae || (le.classList.remove("hidden"), Ie = !0, f(t), window.requestAnimationFrame(function() { window.requestAnimationFrame(function() { le.classList.remove("invisible") }) }), e.config.request.thumb_preview && g && n().then(c).catch(function() {}), nt(ne).on("click", a)) }

            function l(t) {
                var n = e.config.video.duration / e.config.request.thumb_preview.frames,
                    i = Math.min(e.config.request.thumb_preview.frames - 1, Math.ceil(t / n)),
                    r = i % e.config.request.thumb_preview.columns,
                    o = Math.floor(i / e.config.request.thumb_preview.columns),
                    a = -(r * e.config.request.thumb_preview.frame_width / 2),
                    s = -(o * e.config.request.thumb_preview.frame_height / 2);
                return [a, s] }

            function d(e) {
                for (var t = He, n = Array.isArray(t), i = 0, t = n ? t : t[Symbol.iterator]();;) {
                    var r;
                    if (n) {
                        if (i >= t.length) break;
                        r = t[i++] } else {
                        if (i = t.next(), i.done) break;
                        r = i.value }
                    var o = r,
                        a = o.getBoundingClientRect(),
                        s = a.left,
                        c = a.right,
                        u = a.width;
                    if (e >= s && e <= c) return { clientX: s + u / 2, snappedTo: o } }
                return { clientX: e, snappedTo: null } }

            function f(t) {
                if (e.config.request.thumb_preview && null === g) {
                    var i = ie.getBoundingClientRect().width,
                        a = document.querySelector(".player").clientHeight,
                        s = 215,
                        u = 185;
                    if (g = a >= s && i >= u, !g) return void fe.classList.add("hidden");
                    n().then(c).catch(function() {}) }
                Ie && ! function() {
                    var i = d(t.clientX, He),
                        a = i.clientX,
                        s = i.snappedTo,
                        c = o(a),
                        u = e.config.video.duration * c;
                    He.forEach(function(e) {
                        return e.classList.toggle("active", e === s) }), e.config.request.thumb_preview && g && n().then(function(e) {
                        var t = l(u),
                            n = Ze(t, 2),
                            i = n[0],
                            r = n[1];
                        return window.requestAnimationFrame(function() { he.style.backgroundPosition = i + "px " + r + "px" }), e }).catch(function() {}), window.requestAnimationFrame(function() { de.innerHTML = Ee(u);
                        var e = (100 * c).toFixed(3);
                        le.style.left = e + "%", p(c), t.clientX > r() + 10 && !fe.contains(document.elementFromPoint(t.clientX, t.clientY)) && v() }) }() }

            function h() {
                var e = J.getBoundingClientRect().left,
                    t = ne.getBoundingClientRect().right,
                    n = fe.getBoundingClientRect().width,
                    o = e + Math.ceil(n / 2),
                    a = t - Math.ceil(n / 2),
                    s = i(),
                    c = r(),
                    u = c - s,
                    l = (o - s) / u,
                    d = (a - s) / u;
                return [l, d] }

            function p(e) {
                var t = h(),
                    n = Ze(t, 2),
                    i = n[0],
                    r = n[1],
                    o = Math.max(i, Math.min(r, e)),
                    a = (100 * o).toFixed(3);
                fe.style.left = a + "%" }

            function v() { le && (le.classList.add("invisible"), fe.classList.add("invisible")), Ie = !1, nt(ne).off("click", a) }
            var m = void 0,
                g = null;
            e.events.on(Ke.resize, function() { g = null }), nt(t).on("mouseenter", ".progress", u).on("mousemove", ".play-bar", f).on("mouseleave", ".play-bar", v), nt(t).on("transitionend", ".ghost-timecode", function(e) { "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (le.classList.add("hidden"), fe.classList.add("hidden")) }, !1), e.events.on(Ke.mousedOut, v), e.events.on(Ke.configChanged, function() { m = null }) }

        function I() {
            function n(e) { ze = e, _e && (_e.setActiveItem(e), setTimeout(function() { _e.hide() }, 100)), ge && (ge.classList.add("on"), ge.classList.remove("off")) }

            function i() { ze = null, _e && (_e.setActiveItem("off"), setTimeout(function() { _e.hide() }, 100)), ge && (ge.classList.add("off"), ge.classList.remove("on")) }
            x(t, ".cc", function() { e.events.fire(Ke.ccButtonPressed) }), e.events.on(Ke.ccButtonPressed, function(e) { _e ? e && _e.toggle(e) : (_e = _(ge, ne), _e.show(e)) }), e.events.on(Ke.captionsChanged, function(e) {
                return e ? void n(e.id) : void i() }).on(Ke.controlBarVisibilityChanged, function(e) { e || _e && _e.hide() }).on([Xe.enableCaptions, Xe.disableCaptions], function() { S() }) }

        function M() {
            function n() {
                var t = dt.render("icon_hd");
                if (e.telecine.video.currentFile.mime === $e.dash) {
                    var n = e.config.request.files.dash.streams,
                        i = ii(n).sort(K()).filter(G(n)).map(function(e) {
                            var n = z(e);
                            return { id: n, label: Y(e, t), active: r === n } });
                    return i.push({ id: "auto", label: "Auto", active: !r || "auto" === r }), i }
                var o = e.telecine.video.files;
                return ii(o).filter(V("progressive")).filter(G(o)).sort(K()).map(function(e) {
                    return { label: Y(e, t), id: z(e), active: r === e.metadata.quality } }) }

            function i() {
                var t = n(),
                    i = new Se(t, me, ne, e);
                return i.on("selected", function(t) { e.events.fire(Xe.changeQuality, t) }), i }
            var r = null;
            x(t, ".hd", function() { e.events.fire(Ke.hdButtonPressed) }), e.events.on(Ke.hdButtonPressed, function(e) {
                return je ? void(e && je.toggle(e)) : (je = i(), void je.show(e)) }), e.events.on(Ke.qualityChanged, function(e) { r = e, je && je.setActiveItem(e) }), e.events.on(Xe.disableHd, function() { Ve = !1, S() }) }

        function F() {
            var n = document.createElement("a");
            if (n.style.cssText = "-moz-filter:blur(2px);-webkit-filter:blur(2px);filter:blur(2px);", !(n.style.length < 1)) {
                var i = null,
                    r = function() {
                        var t = [{ label: "Soporific", id: "aden" }, { label: "Escutcheon", id: "earlybird" }, { label: "Pluvious", id: "hudson" }, { label: "Moribund", id: "inkwell" }, { label: "Fecundity", id: "mayfair" }, { label: "Jejune", id: "toaster" }, { label: "None", id: "none", active: !0 }],
                            n = wt.browser.safari,
                            i = e.telecine.supportsEffect(ho),
                            r = We[e.telecine.video.currentFile.mime],
                            o = "dash" === r;
                        return !n && o && i && t.unshift({ label: "ASCII", id: "ascii" }), t };
                x(t, ".effect", function() {
                    return e.events.fire(Ke.effectButtonPressed) }), e.events.on(Ke.effectButtonPressed, function(t) {
                    return Ge.classList.remove("hidden"), i ? void(t && i.toggle(t)) : (i = new Se(r(), Ge, ne, e), i.on("selected", function(t) {
                        return e.events.fire(Xe.setEffect, t) }), void i.show(t)) }), e.events.on(Xe.setEffect, function(e) {
                    return i.setActiveItem(e), "none" === e ? (Ge.classList.add("off"), void Ge.classList.remove("on")) : (Ge.classList.add("on"), void Ge.classList.remove("off")) }), e.events.on(Ke.ready, function() { e.telecine.on("scannerchange", function() { i && (i.destroy(), i = null) }) }) } }

        function q() { x(t, ".pip", function() {
                return "picture-in-picture" === e.telecine.presentationMode ? void e.events.fire(Xe.deactivatePictureInPicture) : void e.events.fire(Xe.activatePictureInPicture) }), e.events.on(Ke.pictureInPictureAvailable, function() { ye && (ye.classList.remove("hidden"), ye.hidden = !1, n()) }).on(Ke.pictureInPictureNotAvailable, function() { ye && (ye.classList.add("hidden"), ye.hidden = !0, n()) }).on(Ke.pictureInPictureActivated, function() { Qe = !0, ye && (ye.classList.add("return"), ye.classList.remove("enter"), ye.setAttribute("title", ye.getAttribute("data-title-return"))) }).on(Ke.pictureInPictureDeactivated, function() { Qe = !1, ye && (ye.classList.add("enter"), ye.classList.remove("return"), ye.setAttribute("title", ye.getAttribute("data-title-enter"))) }) }

        function R() { wt.airPlay && (x(t, ".airplay", function() { e.events.fire(Ke.airPlayButtonPressed) }), e.events.on(Ke.airPlayAvailable, function() { be && (be.classList.remove("hidden"), be.hidden = !1, n()) }).on(Ke.airPlayNotAvailable, function() { be && (be.classList.add("hidden"), be.hidden = !0, n()) }).on(Ke.airPlayActivated, function() { Ye = !0, be && (be.classList.remove("off"), be.classList.add("on"), be.setAttribute("title", be.getAttribute("data-title-on"))), g() }).on(Ke.airPlayDeactivated, function() { Ye = !1, be && (be.classList.remove("on"), be.classList.add("off"), be.setAttribute("title", be.getAttribute("data-title-off"))) })) }

        function B() { x(t, ".fullscreen", function() { e.events.fire(Ke.fullscreenButtonPressed) }), e.events.on(Ke.didEnterFullscreen, function() { t.classList.remove("tiny"), we && we.setAttribute("title", we.getAttribute("data-title-unfullscreen")) }), e.events.on(Ke.didExitFullscreen, function(e) { we && we.setAttribute("title", we.getAttribute("data-title-fullscreen")), e || (ke = !0), Q && t.classList.add("tiny") }) }

        function D() { e.events.on([Ke.mousedOver, Ke.scrubbingStarted, Xe.changeVolume], g).on([Ke.mousedOut, Ke.mouseTimeout], m).on(Ke.willEnterFullscreen, function() { Te = !1, m() }).on(Ke.willExitFullscreen, function() { Te = !1 }).on(Ke.targetTimeReached, function() { Me = !0, m() }).on(Xe.changeVolume, function(e, t) { t || g() });
            var n = [".play", ".play-bar", ".custom-logo", ".menu"];
            nt(t).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], n, function(e) {
                return "pointerType" in e ? void("mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE || (Te = "pointerenter" === e.type || "MSPointerEnter" === e.type)) : void(wt.touch || (Te = "mouseover" === e.type)) }), nt(t).on("transitionend", function(e) { this === t && "opacity" === e.propertyName && t.classList.contains("invisible") && (t.classList.add("hidden"), t.setAttribute("hidden", "")) }) }

        function N() {
            function n(n) {
                if (1 === n.which) { pe.setAttribute("data-tabindex", pe.getAttribute("tabindex")), pe.removeAttribute("tabindex"), Ae = !0, e.element.classList.add("scrubbing"), e.events.fire(Ke.volumeScrubbingStarted);
                    var s = n.type;
                    if ("pointerdown" === s || "MSPointerDown" === s) { a = n.pointerId;
                        try { n.target.msSetPointerCapture ? n.target.msSetPointerCapture(a) : n.target.setPointerCapture(a) } catch (e) {}
                        nt(t).on("pointermove", ".volume", i).on("pointerup", ".volume", r) } else "touchstart" === s ? nt(document).on("touchmove", i).on("touchend", r) : nt(document).on("mousemove", i).on("mouseup", r);
                    var c = n.clientX;
                    n.targetTouches && (c = n.targetTouches[0].clientX);
                    var u = o(c);
                    e.events.fire(Xe.changeVolume, u), k(u) } }

            function i(t) {
                var n = t.clientX;
                t.targetTouches && (n = t.targetTouches[0].clientX, t.preventDefault());
                var i = o(n);
                e.events.fire(Xe.changeVolume, i), k(i) }

            function r(n) { Ae = !1, e.events.fire(Ke.volumeScrubbingEnded), e.element.classList.remove("scrubbing");
                var o = n.type; "pointerup" === o || "MSPointerUp" === o ? nt(t).off("pointermove", ".volume", i).off("pointerup", ".volume", r) : "touchend" === n.type ? nt(document).off("touchmove", i).off("touchend", r) : nt(document).off("mousemove", i).off("mouseup", r), pe.setAttribute("tabindex", pe.getAttribute("data-tabindex")), pe.removeAttribute("data-tabindex") }

            function o(e) {
                var t = pe.getBoundingClientRect().left,
                    n = pe.getBoundingClientRect().right,
                    i = n - t,
                    r = e - t,
                    o = r / i;
                return u(o, 0, 1) }
            nt(t).on("mouseover", ".volume div", function() {
                var e = this;
                e.classList.add("hover"), window.requestAnimationFrame(function() { window.requestAnimationFrame(function() { e.classList.remove("hover"), e.classList.add("animate") }) }) }), nt(t).on("transitionend", ".volume div", function(e) { "height" === e.propertyName && 12 === this.clientHeight && this.classList.remove("animate") }), nt(document).on("contextmenu", ".volume", function() { this.blur() });
            var a;
            nt(t).on(wt.pointerEvents ? "pointerdown" : ["touchstart", "mousedown"], ".volume", n), e.events.on(Ke.volumeChanged, function(e) {!Ae && ve && k(e) }).on([Xe.enableVolume, Xe.disableVolume], function() { S() }) }

        function H() { e.events.on(Ke.overlayOpened, function(e) {
                if ("notsupported" !== e && "private-unlocked" !== e && "help" !== e) Pe = !0, m();
                else
                    for (var n = t.querySelectorAll("a, button, input, [tabindex]"), i = 0, r = n.length; i < r; i++) {
                        var o = n[i].getAttribute("tabindex");
                        o && n[i].setAttribute("data-tabindex", o), n[i].setAttribute("tabindex", "-1") } }).on(Ke.overlayClosed, function() { Pe = !1, g();
                for (var e = t.querySelectorAll("[tabindex]"), n = 0, i = e.length; n < i; n++) {
                    var r = e[n].getAttribute("data-tabindex");
                    r && "null" !== r ? e[n].setAttribute("tabindex", r) : e[n].removeAttribute("tabindex"), e[n].removeAttribute("data-tabindex") } }) }

        function j() { e.events.on(Ke.configChanged, function() { S(), e.config.view === Ue.privateUnlocked && g(), n(), Ve = !0 }) }

        function U() { e.events.on(Xe.reset, function() { y(), g(), b() }), nt(window).on("resize", function() { n() }) }

        function W() { e.events.on(Ke.enteredTinyMode, function() { Q = !0, t.classList.add("tiny") }).on(Ke.enteredMiniMode, function() { Q = !1, t.classList.remove("tiny") }).on(Ke.enteredNormalMode, function() { Q = !1, t.classList.remove("tiny") }) }

        function $() {
            var t = e.config.user.progress,
                n = t / e.config.video.duration;!t || e.config.embed.autoplay || e.config.embed.time || (c(n, t), l(n, t), Fe = !0) }

        function X() {
            if (e.config.embed.on_site) {
                var n = new sr;
                e.events.on(Ke.cuePointAdded, function(i) {
                    if (i.data.visible) {
                        var r = document.createElement("div");
                        r.setAttribute("id", "cuepoint-" + i.id), r.setAttribute("data-time", i.time), r.classList.add("cuepoint"), r.classList.add("out"), r.appendChild(document.createElement("div"));
                        var o = i.time / e.config.video.duration * 100;
                        r.style.left = o + "%", n.set(i, r), se.appendChild(r), He = ii(t.querySelectorAll(".cuepoint")), window.requestAnimationFrame(function() {
                            return r.classList.remove("out") }) } }), e.events.on(Ke.cuePointRemoved, function(e) {
                    var t = n.get(e);
                    t && (n.delete(e), t.classList.add("out")) }), nt(t).on("transitionend", ".cuepoint", function(e) { this.classList.contains("out") && (se.removeChild(this), He = ii(t.querySelectorAll(".cuepoint"))) }) } }
        var Q, J, Z, ee, te, ne, ie, re, oe, ae, se, ce, ue, le, de, fe, he, pe, ve, me, ge, _e, ye, be, we, ke = !1,
            xe = !1,
            Te = !1,
            Pe = !1,
            Le = !1,
            Ce = !1,
            Oe = !1,
            Ae = !1,
            Ie = !1,
            Me = !1,
            Fe = !1,
            qe = !0,
            Re = !1,
            Be = !1,
            De = null,
            Ne = null,
            He = [],
            je = null,
            Ve = !0,
            ze = null,
            Ge = null,
            Ye = !1,
            Qe = !1,
            Je = e.config.embed.autoplay && e.config.request.flags.autohide_controls;
        return S(), E(), O(), L(), A(), N(), I(), M(), F(), q(), R(), B(), D(), H(), j(), U(), $(), W(), X(), e.events.on(Ke.playInitiated, function() { P(), xe = !0;
            var t = e.config.embed.time || e.telecine.currentTime;
            s(t / e.config.video.duration, t), Fe = !0 }), e.events.fire(Ke.controlBarModuleReady), {}
    }

    function Le(e, t) {
        function n() { clearTimeout(y), y = null }

        function i() { P && (clearTimeout(y), y = setTimeout(s, b)) }

        function r() { ht.element && ht.element.classList.contains("js-player-fullscreen") && (x || (t.style.cursor = "none", k = !0, x = !0)) }

        function o() { x && (t.style.cursor = "default", x = !1) }

        function s(t) {
            if ((T || S) && (n(), !document.activeElement || !document.body.classList.contains("showfocus") || !O.contains(document.activeElement) && !A.contains(document.activeElement))) { e.events.fire(t ? Ke.mousedOut : Ke.mouseTimeout), k = !0;
                var i = wt.threeSixtyVideo && e.config.video.is_panorama;
                i || (C.classList.add("hidden"), C.setAttribute("hidden", "")), w = !0, r() } }

        function c() { T && S || (e.events.fire(Ke.mousedOver), C.classList.remove("hidden"), C.removeAttribute("hidden")), i() }

        function u() { T || S ? t.removeAttribute("tabindex") : T || S || E || t.setAttribute("tabindex", "0") }

        function l() {
            function u() { c() }

            function l(t) {
                if (b = g, k) return void(k = !1);
                if (o(), 0 !== t.screenX && t.screenX !== screen.width - 1 && 0 !== t.screenY && t.screenY !== screen.height - 1) {
                    if (y = !0, wt.threeSixtyVideo && e.config.video.is_panorama) {
                        var u = a(e.element),
                            l = t.clientX - u.left,
                            d = t.clientY - u.top,
                            f = 55,
                            h = 45,
                            p = 180,
                            v = d > e.element.clientHeight - f,
                            m = l > e.element.clientWidth - h && d < p;
                        if (!v && !m) return }
                    w && c(), i() } else if (n(), r(), y) {
                    var _ = !0;
                    s(_), y = !1 } }

            function d() { b = _, i() }

            function f() {
                var e = !0;
                s(e) }

            function h(e) {
                var t = A.contains(e.target) || O.contains(e.target);
                if (T && S) {
                    if (!t && (T || S)) {
                        var n = !0;
                        s(n) } } else c() }

            function p(e) {
                return "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE ? (b = g, u(e)) : (b = _, void h(e)) }

            function v(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return l(e) }

            function m(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return f(e) }
            var y = !0;
            return wt.pointerEvents ? void nt(t).on("pointerenter", p).on("pointermove", v).on("pointerleave", m) : void nt(t).on("touchmove", d).on("touchend", h).on("mouseenter", u).on("mousemove", l).on("mouseleave", f) }

        function d() { e.events.on(Ke.played, function(e) { F || 0 === e || c() }).on([Ke.ended, Ke.paused], c).on([Ke.bufferEnded, Ke.scrubbingEnded, Ke.volumeChanged], i).on(Ke.playInitiated, function() { P = !0 }), e.events.on(Ke.overlayOpened, u).on(Ke.controlBarVisibilityChanged, function(e) { S = e, u() }).on(Ke.sidedockVisibilityChanged, function(e) { T = e, u() }) }

        function f() {
            function n(e) {
                return (e.classList.contains("title") || e.classList.contains("target") || I.contains(e.parentNode) && "HEADER" === e.parentNode.tagName || M.contains(e)) && !O.contains(e) }

            function i(t) {
                if (!o && 2 !== t.button && t.target.classList && n(t.target)) {
                    var i = ("pointerup" === t.type || "MSPointerUp" === t.type) && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE;
                    if (wt.touch || i) {
                        var r = e.telecine.supportedPresentationModes.indexOf("inline") !== -1;
                        if (wt.mobileAndroid && !e.config.request.flags.android_inline && (r = !1), P && r) return;
                        return void e.events.fire(Ke.playButtonPressed) }
                    a++, 1 === a && setTimeout(function() {
                        return P && wt.threeSixtyVideo && e.config.video.is_panorama ? (1 !== a && e.telecine.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(a = 0)) : (1 === a ? e.events.fire(e.telecine.paused ? Ke.playButtonPressed : Ke.pauseButtonPressed) : e.events.fire(Ke.fullscreenButtonPressed), void(a = 0)) }, 200) } }
            var r = !1,
                o = !1,
                a = 0;
            e.events.on(Ke.menuVisibilityChanged, function(e) { o = e }), nt(t).on(wt.pointerEvents ? "pointerup" : "click", i), nt(t).on("mousedown", ".video-wrapper", function(e) {
                if (!r) {
                    if (C.classList.remove("hidden"), C.removeAttribute("hidden"), 2 !== e.button) {
                        var t;
                        document.createEvent && (t = document.createEvent("MouseEvents"), t.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), C.dispatchEvent(t)) }
                    return !1 } }).on("contextmenu", ".video", function(e) {
                return C.classList.remove("hidden"), C.removeAttribute("hidden"), !1 }), e.events.on(Xe.toggleNativeControls, function(e) {
                return e ? (r = !0, void C.classList.add("hidden")) : (r = !1, void C.classList.remove("hidden")) }) }

        function h() {
            if (!wt.touch) {
                var n, i;
                nt(t).on("focus", "a, button, input, [tabindex]", function() { i = this, clearTimeout(n), n = null, document.activeElement === this && c() }), nt(t).on("blur", "a, button, input, [tabindex]", function() { document.activeElement === this && (n = setTimeout(s, 50)) }), t.addEventListener("focus", function(e) { c(), i && i.focus() }, !1), e.events.on(Ke.overlayOpened, function() { E = !0, t.removeAttribute("tabindex") }), e.events.on(Ke.overlayClosed, function() { E = !1 }) } }

        function p() { e.events.on(Ke.didEnterFullscreen, r).on(Ke.didExitFullscreen, function(e) {
                return w = !0, e ? void s() : (c(), void n()) }) }

        function v() { e.events.on([Ke.playProgress, Ke.seeked], function t(n) { n >= L && null === y && (e.events.fire(Ke.targetTimeReached), e.events.off([Ke.playProgress, Ke.seeked], t)) }) }

        function m() { e.events.on(Xe.reset, function() { w = !0, k = !0, S = !0, T = !1, P = !1, v(), n() }) }
        var g = 2e3,
            _ = 4500,
            y = null,
            b = wt.touch ? _ : g,
            w = !0,
            k = !0,
            x = !1,
            S = !0,
            T = !1,
            E = !1,
            P = !1,
            L = 1.75,
            C = t.querySelector(".target"),
            O = t.querySelector(".sidedock"),
            A = t.querySelector(".controls"),
            I = t.querySelector(".title"),
            M = t.querySelector(".video"),
            F = e.config.embed.autoplay && e.config.request.flags.autohide_controls;
        return l(), d(), f(), h(), p(), v(), m(), {} }

    function Ce(e, t) {
        function n() {
            return t.classList.contains("overflow") ? void t.classList.remove("overflow") : void(t.clientHeight < t.clientHeight && t.classList.add("overflow")) }

        function i(e) {
            if (!e) return {};
            var t = window.getComputedStyle(e);
            if (!t) return {};
            var n = t.width,
                i = t.height;
            return { width: n, height: i } }

        function r(e, t) {
            return e && t ? parseInt(e, 10) + "×" + parseInt(t, 10) + " " + h() : "" }

        function o() { t.classList.add("hidden"), t.setAttribute("hidden", ""), t.setAttribute("aria-hidden", "true") }

        function a() { t.classList.remove("hidden"), t.removeAttribute("hidden"), t.setAttribute("aria-hidden", "false"), n() }

        function s() {
            return Object.keys(e.config.request.ab_tests).map(function(t) {
                return t + ": " + e.config.request.ab_tests[t].group }).join(", ") }

        function c() {
            function t(t) {
                function i(e) {
                    return window.btoa(unescape(encodeURIComponent(e))) }

                function r(t) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = t;
                    n && (i = "https://" + e.config.player_url + "/debug?v=" + t), V.value = i }
                var o = { sessionId: e.config.request.session, clipId: A.textContent, playing: M.textContent, dimensions: F.textContent, cdn: q.textContent, ua: navigator.userAgent, referrer: e.config.request.referrer, country: e.config.request.country, graphEvents: S, graphLines: k, graphSpeeds: w.map(function(e) {
                        return e.map(function(e) {
                            return { speed: Math.round(e.speed) / 1e3, time: Math.round(100 * e.time) / 100 } }) }), duration: e.telecine.duration };
                if (e.config.request.ab_tests && (o.testGroup = s()), I && (o.profileId = I.textContent), j && (o.droppedFrames = j.textContent), D && (o.bandwidth = { avg: D.textContent, min: N.textContent, max: H.textContent }), window.btoa) {
                    var a = i(JSON.stringify(o));
                    return r(a), void t() }
                var c = new XMLHttpRequest;
                c.open("POST", "https://" + e.config.player_url + "/debug", !0), c.onload = function() {
                    var e = JSON.parse(c.responseText);
                    r(e, !1), t() }, c.onerror = function() { n("Error!") }, c.send(JSON.stringify(o)) }

            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Copied!";
                l(U, e), clearTimeout(z), z = setTimeout(function() { l(U, "Open link") }, 2e3) }
            t(function() { U.href = V.value, window.open(V.value) }) }

        function u() {
            var n = e.telecine.currentFile;
            if (n) {
                var a = n.metadata,
                    u = e.telecine.currentScanner,
                    l = "MediaSourceScanner" === u;
                W = t.parentElement.querySelector("video");
                var d = i(W),
                    f = d.width,
                    h = d.height;
                T = r(f, h);
                var p = { clipId: e.config.video.id, scanner: u, cdn: a.cdn, delivery: We[e.telecine.video.currentFile.mime], resolution: "" + a.quality + (a.fps ? "@" + a.fps : ""), dimensions: T, displayProfile: l, displayBandwidth: l, displayDroppedFrames: l, displayAudioVideoStream: l };
                p.displayAudioVideoStream && (p.separateAudioVideo = e.config.request.files.dash.separate_av), e.config.request.ab_tests && (p.testGroup = s()), t.innerHTML = dt.render("stats_debug", p), A = t.querySelector(".stats-debug-clip-id"), I = t.querySelector(".stats-debug-profile-id"), M = t.querySelector(".stats-debug-resolution"), F = t.querySelector(".stats-debug-dimensions"), q = t.querySelector(".stats-debug-cdn"), R = t.querySelector(".stats-debug-delivery"), B = t.querySelector(".stats-debug-time-series"), D = t.querySelector(".stats-debug-bandwidth"), N = t.querySelector(".stats-debug-bandwidth-min"), H = t.querySelector(".stats-debug-bandwidth-max"), j = t.querySelector(".stats-debug-dropped-frames"), U = t.querySelector(".stats-debug-copy"), V = t.querySelector(".stats-debug-code"), x(t, ".stats-debug-close", o), x(t, ".stats-debug-copy", c), O = !0 } }

        function l(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "textContent";
            window.requestAnimationFrame(function() {
                var i = e.parentElement;
                return "undefined" == typeof t ? void(i.style.display = "none") : (i.style.display = "block", void(e[n] = t)) }) }

        function d(e, t, n) {
            return Math.min(Math.max(e, t), n) }

        function f(t, n) {
            var o = 200,
                a = 14;
            if (t !== X) { X = t, t > $ && ($ = t, l(H, Math.floor(t / 1e3).toLocaleString() + " Kbps")), t < G && (G = t, l(N, Math.floor(t / 1e3).toLocaleString() + " Kbps"));
                var s = e.telecine.currentTime;
                w[L].push({ speed: t, time: s }) }
            var c = '<svg width="' + o + '" height="' + a + '" viewBox="0 0 ' + o + " " + a + '">',
                u = w[L].map(function(t) {
                    var n = t.time / e.telecine.duration * o,
                        i = a - a * t.speed / $;
                    return isNaN(i) && (i = 0), n + "," + d(i, 0, a) });
            if (Y) {
                var f = { time: e.telecine.currentTime, color: Y, type: Q[Y] };
                switch (f.type) {
                    case "resize":
                        var h = i(W),
                            p = r(h.width, h.height);
                        T = p, f.title = "Resized from " + T + " to " + p;
                        break;
                    case "downswitch":
                    case "upswitch":
                        f.title = "Switched from " + E + " to " + P;
                        break;
                    default:
                        f.title = Q[Y] }
                k[L].push(f), Y = !1 }
            return k[L].forEach(function(t) {
                var n = t.time,
                    i = t.color,
                    r = t.title,
                    s = n / e.telecine.duration * o,
                    u = "<g>";
                u += "<title>" + r + "</title>", u += '<line x1="' + s + '" y1="0" x2="' + s + '" y2="' + a + '" stroke-width="1" stroke="' + i + '" />', u += "</g>", c += u }), c += "<g>", c += '<polyline stroke="white" fill="none" points="', c += u.join(" "), c += '"></polyline>', c += "</g></svg></span></span>" }

        function h() {
            return window.devicePixelRatio && window.devicePixelRatio > 1 ? "@" + window.devicePixelRatio + "x" : "" }

        function p(e, t) { L += 1, w.push([]), k.push([]), S.push([{ title: e, time: Math.round(100 * t) / 100 }]) }

        function v(n, o) {
            var a;
            C[n] || (C[n] = []), C[n].length === b && C[n].pop(), O || u(), C[n].unshift(o);
            var s = void 0;
            switch (n) {
                case "resize":
                    return Y = J.resize, s = i(W), e.events.fire(Ke.resize, s), void l(F, "" + r(s.width, s.height));
                case "streamchange":
                    var c = o.index,
                        d = o.streams,
                        h = d[c],
                        v = e.config.request.files.dash.cdn,
                        m = e.config.request.files.dash.streams[c].profile;
                    return K !== h.bitrate && (null !== K && (Y = J.upswitch, h.bitrate < K && (Y = J.downswitch)), K = h.bitrate), E !== P && (E = P), W || (W = t.querySelector("video")), P = h.width + "×" + h.height + "@" + Math.round(h.framerate) + " " + Math.round(h.bitrate / 1e3).toLocaleString() + " Kbps", l(M, P), s = i(W), l(F, "" + r(s.width, s.height)), l(q, v), void l(I, m);
                case "scannerchange":
                    return void l(R, We[e.telecine.video.currentFile.mime]);
                case "streamtargetchange":
                    var g = e.config.request.files.dash.streams[o.index],
                        _ = [g, o.index, o.streams];
                    return void(a = e.events).fire.apply(a, [Ke.streamTargetChange].concat(_));
                case "bandwidth":
                    var y = o.speed,
                        w = o.bitrate;
                    l(D, Math.floor(y / 1e3).toLocaleString() + " Kbps");
                    var k = f(y, w);
                    return void l(B, k, "innerHTML");
                case "droppedframes":
                    var x = o.dropped,
                        S = o.total;
                    return void l(j, x.toLocaleString() + " / " + S.toLocaleString());
                case "seeked":
                case "ended":
                    return void p(n, e.telecine.currentTime) } }

        function m() { e.events.on(Ke.debugButtonPressed, function() {
                return t.classList.contains("hidden") ? void a() : void o() }) }

        function g() { e.events.on(Ke.configChanged, function(e) { window.requestAnimationFrame(u) }) }

        function _() {
            ["streamchange", "droppedframes", "bandwidth", "scannerchange", "streamtargetchange", "seeked", "ended"].forEach(function(t) { e.telecine.on(t, function(e) {
                    return v(t, e) }) }) }

        function y() { nt(window).on("resize", function() { v("resize"), n() }) }
        var b = 100,
            w = [
                []
            ],
            k = [
                []
            ],
            S = [],
            T = void 0,
            E = void 0,
            P = void 0,
            L = 0,
            C = {},
            O = !1,
            A = void 0,
            I = void 0,
            M = void 0,
            F = void 0,
            q = void 0,
            R = void 0,
            B = void 0,
            D = void 0,
            N = void 0,
            H = void 0,
            j = void 0,
            V = void 0,
            U = void 0,
            z = void 0,
            W = void 0,
            $ = Number.NEGATIVE_INFINITY,
            G = Number.POSITIVE_INFINITY,
            X = -1,
            K = null,
            Y = !1,
            Q = { "#FB5454": "downswitch", "#54FB54": "upswitch", "#F9FF4B": "resize" },
            J = { downswitch: "#FB5454", upswitch: "#54FB54", resize: "#F9FF4B" };
        u(), m(), g(), _(), y() }

    function Oe(e, t) {
        function n() {
            return !C && (e.config.view === Ue.main || e.config.view === Ue.privateUnlocked) }

        function i() { A && "help" === L && e.events.fire(Ke.overlayCloseButtonPressed) }

        function o(e) {
            return "number" != typeof e.which && (e.which = e.keyCode), e }

        function a(e) {
            if ("keypress" === e.type) {
                var t = String.fromCharCode(e.which);
                return e.shiftKey || (t = t.toLowerCase()), t }
            return e.which in Fo ? Fo[e.which] : String.fromCharCode(e.which).toLowerCase() }

        function s(e) {
            return !(e.ctrlKey || e.metaKey || e.altKey) && (e.which in Fo ? "keydown" === e.type : "keypress" === e.type) }

        function c(e) {
            var t = e.target || e.srcElement;
            return "INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable }

        function u(t) {
            if (t = Array.isArray(t) ? t : [t], A && "help" === L) {
                if (e.events.fire(Ke.overlayCloseButtonPressed), t[0] === Xe.showOverlay && "help" === t[1]) return !1;
                if (t[0] !== Xe.openVimeo) return setTimeout(function() { e.events.fire.apply(null, t) }, 250), !1 }
            return e.events.fire.apply(null, t), !1 }

        function l(t, n) {
            if (!D) { n && !e.telecine.paused && e.events.fire(Ke.pauseButtonPressed);
                var i = !0;
                e.events.fire(Ke.scrubbingStarted, i), D = !0 }
            h(B), B++, 1 === B && (R = e.config.video.fps);
            var r = n ? 1 : R,
                o = "right" === t ? r : -r,
                a = Math["right" === t ? "ceil" : "floor"](e.telecine.currentTime * e.config.video.fps);
            d(a + o) }

        function d(t) {
            var n = null,
                i = t / e.config.video.fps;
            e.events.fire(Xe.seek, n, i) }

        function f(t) { R = M, B = 0;
            var n = t.shiftKey;
            e.events.fire(Ke.scrubbingEnded, n), D = !1 }

        function h(e) {
            var t = e,
                n = Math.ceil(M),
                i = Math.ceil(F - M),
                r = q;
            R = p(t, n, i, r) }

        function p(e, t, n, i) {
            return e /= i, e--, n * (e * e * e + 1) + t }

        function v(e) {
            var t = I.focusableItems,
                n = t.indexOf(document.activeElement),
                i = "up" === e ? n - 1 : n + 1,
                r = null;
            return r = i >= t.length ? t[0] : i < 0 ? t[t.length - 1] : t[i], !r || (r.focus(), !1) }

        function g() {
            return !!I || (document.activeElement && document.activeElement !== document.body ? void 0 : (e.events.fire(Ke[e.telecine.paused ? "playButtonPressed" : "pauseButtonPressed"]), i(), !1)) }

        function _() {
            return I ? (I.element.contains(document.activeElement) && I.button.focus(), I.hide(), !1) : document.activeElement && t.contains(document.activeElement) ? (r(), !0) : A ? (e.events.fire(Ke.overlayCloseButtonPressed), !1) : void 0 }

        function y() {
            if (I) return !I.element.contains(document.activeElement) || v("up");
            if (wt.threeSixtyVideo && e.config.video.is_panorama) return e.telecine.getEffectByName("ThreeSixtyEffect").keyPress("up"), !1;
            if (e.config.embed.on_site && document.activeElement && !t.contains(document.activeElement)) return !0;
            i();
            var n = !1,
                r = !0;
            return e.events.fire(Xe.changeVolume, Mo, n, r), !1 }

        function b() {
            if (I) return !I.element.contains(document.activeElement) || v("down");
            if (wt.threeSixtyVideo && e.config.video.is_panorama) return e.telecine.getEffectByName("ThreeSixtyEffect").keyPress("down"), !1;
            if (e.config.embed.on_site && document.activeElement && !t.contains(document.activeElement)) return !0;
            i();
            var n = !1,
                r = !0;
            return e.events.fire(Xe.changeVolume, -Mo, n, r), !1 }

        function w(t, n) {
            if (I) return !I.element.contains(document.activeElement) || v("left" === n ? "up" : "down");
            if (i(), wt.threeSixtyVideo && e.config.video.is_panorama) return e.telecine.getEffectByName("ThreeSixtyEffect").keyPress(n), !1;
            if (document.activeElement && document.activeElement === O) {
                var r = !1,
                    o = !0,
                    a = "left" === n ? -Mo : Mo;
                return e.events.fire(Xe.changeVolume, a, r, o), !1 }
            return t.shiftKey || 0 === B ? void l(n, t.shiftKey) : void N(n, t.shiftKey) }

        function k() { e.events.on(Ke.overlayOpened, function(e) { A = !0, L = e, "notsupported" === e && (C = !0) }), e.events.on(Ke.overlayClosed, function() { A = !1, L = null }) }

        function x() { e.events.on(Ke.menuVisibilityChanged, function(e, t) { I = !!e && t }) }

        function S() { e.events.on(Ke.configChanged, function(e) { e && (C = !1) }) }

        function T() {
            function t(e) {
                if (o(e), s(e) && !c(e) && n()) {
                    var t = a(e);
                    if (t in r) {
                        if ("function" == typeof r[t]) return void(r[t](e, t) === !1 && (e.preventDefault(), e.stopPropagation()));
                        u(r[t]) === !1 && (e.preventDefault(), e.stopPropagation()) } } }

            function i(t) {
                if (o(t), !c(t) && n()) {
                    var i = a(t);
                    return wt.threeSixtyVideo && e.config.video.is_panorama && ("left" === i || "right" === i || "up" === i || "down" === i) ? void e.telecine.getEffectByName("ThreeSixtyEffect").keyUp(i) : void("left" !== i && "right" !== i || f(t))
                }
            }
            var r = { l: Ke.likeButtonPressed, w: Ke.watchLaterButtonPressed, s: Ke.shareButtonPressed, c: [Ke.ccButtonPressed, !0], h: [Ke.hdButtonPressed, !0], f: Ke.fullscreenButtonPressed, x: [Ke.effectButtonPressed, !0], e: [Ke.effectButtonPressed, !0], d: Ke.debugButtonPressed, space: g, up: y, down: b, left: w, right: w, esc: _, "?": [Xe.showOverlay, "help"] };
            e.config.embed.on_site || (r.v = Xe.openVimeo), document.addEventListener("keydown", t, !1), document.addEventListener("keypress", t, !1), document.addEventListener("keyup", i, !1)
        }

        function E() { e.events.on(Ke.becameActive, function() { C = !1 }).on(Ke.becameInactive, function() { C = !0 }), e.config.embed.on_site && document.querySelector(".player") === t && (C = !1) }

        function P() {
            var e = void 0,
                t = !1;
            document.body.addEventListener("keydown", function(n) { 9 !== n.which || document.body.classList.contains("showfocus") ? 27 === n.which ? document.body.classList.remove("showfocus") : 32 !== n.which && 13 !== n.which || (t = !0, clearTimeout(e), e = setTimeout(function() { t = !1 }, 200)) : document.body.classList.add("showfocus") }), document.body.addEventListener("click", function(e) { t || document.body.classList.remove("showfocus") }) }
        var L, C = !!e.config.embed.on_site,
            O = t.querySelector(".volume"),
            A = !1,
            I = !1,
            M = e.config.video.fps / 5,
            F = Math.max(M, .618 * e.config.video.duration),
            q = 100,
            R = M,
            B = 0,
            D = !1,
            N = m(l, 80);
        return k(), x(), S(), T(), E(), P(), { pause: function() { C = !0 }, unpause: function() { C = !1 } }
    }

    function Ae(e, t) {
        function n(e) {
            var n = "watchlater" === e || "unwatchlater" === e ? .5 : .4,
                i = t.clientHeight;
            return t.clientHeight > t.clientWidth && (i = t.clientWidth), { height: Math.round(i * n), width: Math.round(i * n * 1.6) } }

        function i(e, t) {
            var n = e.querySelector(".hour-hand"),
                i = e.querySelector(".minute-hand");
            if (n && i) {
                var r = t ? 1 : -1,
                    o = new Date,
                    a = Math.abs(o.getHours() - 12),
                    s = o.getMinutes(),
                    c = s / 60 * 360 - 135,
                    u = a / 12 * 360 + s / 60 * 5,
                    l = 1.5,
                    d = u + 30 * l * r,
                    f = c + 360 * l * r;
                if (wt.browser.firefox || wt.browser.opera) {
                    var h = "10 10";
                    n.setAttribute("transform", "rotate(" + u + "," + h + ")"), i.setAttribute("transform", "rotate(" + c + "," + h + ")");
                    var p = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
                    p.setAttribute("attributeName", "transform"), p.setAttribute("type", "rotate"), p.setAttribute("begin", "0.1s"), p.setAttribute("repeatCount", "indefinite");
                    var v = p.cloneNode(!1);
                    v.setAttribute("from", u + " " + h), v.setAttribute("to", u + 360 * r + " " + h), v.setAttribute("dur", "0.8s"), n.appendChild(v);
                    var m = p.cloneNode(!1);
                    m.setAttribute("from", c + " " + h), m.setAttribute("to", c + 360 * r + " " + h), m.setAttribute("dur", "9.6s"), i.appendChild(m) } else n.style[wt.transformProperty + "Origin"] = "46% 81.5%", i.style[wt.transformProperty + "Origin"] = "25.5% 26.5%", n.style[wt.transformProperty] = "rotate(" + u + "deg)", i.style[wt.transformProperty] = "rotate(" + c + "deg)";
                window.requestAnimationFrame(function() { e.classList.add("animate"), wt.browser.firefox || wt.browser.opera || window.requestAnimationFrame(function() { n.style[wt.transformProperty] = "rotate(" + d + "deg)", i.style[wt.transformProperty] = "rotate(" + f + "deg)" }) }) } }

        function r(e, r) {
            if (null !== t.parentElement.offsetParent) { t.classList.remove("hidden"), t.removeAttribute("hidden"), t.setAttribute("data-name", e);
                var a = n(e),
                    s = "width:" + a.width + "px;height:" + a.height + "px";
                d.style.cssText = s, d.innerHTML = r, "watchlater" !== e && "unwatchlater" !== e || i(d, "watchlater" === e), clearTimeout(l), t.classList.remove("animate"), window.requestAnimationFrame(function() { t.classList.remove("invisible"), l = setTimeout(o, 750) }) } }

        function o() { t.classList.add("animate"), t.classList.add("invisible") }

        function a() { t.classList.remove("animate"), t.classList.remove("invisible"), t.classList.add("hidden"), t.setAttribute("hidden", ""), t.removeAttribute("data-name"), d.innerHTML = "", d.classList.remove("filled"), d.classList.remove("animate"), e.events.fire(Ke.notificationHidden) }

        function s() { e.events.on(Ke.liked, function(e) { e || r("like", dt.render("icon_heart")) }), e.events.on(Ke.unliked, function(e) { e || r("unlike", dt.render("icon_broken_heart")) }) }

        function c() { e.events.on(Ke.addedToWatchLater, function(e) { e || r("watchlater", dt.render("icon_clock")) }), e.events.on(Ke.removedFromWatchLater, function(e) { e || r("unwatchlater", dt.render("icon_clock")) }) }

        function u() { nt(t).on("transitionend", function(e) { d.contains(e.target) && "height" === e.propertyName ? setTimeout(o, 100) : e.target === t && "opacity" === e.propertyName && window.requestAnimationFrame(a) }) }
        var l, d = t.querySelector(".notification");
        return u(), s(), c(), e.events.fire(Ke.notificationModuleReady), {} }

    function Ie(e, t) {
        function n(t) {
            if ("vod" === e.config.embed.outro) {
                var n = "undefined" != typeof e.config.video.vod.is_preorder ? e.config.video.vod.is_preorder : !!e.config.video.vod.date_available,
                    i = e.config.video.vod.is_coming_soon,
                    o = e.config.video.vod.date_available_formatted_datetime || e.config.video.vod.date_available,
                    s = "Coming soon to Vimeo On Demand.";
                return i && o && (s = "Coming soon to Vimeo On Demand on " + o + "."), n && (s = "Pre-order now. Watch on " + o + "."), g = { purchased: e.config.user.purchased, title: e.config.video.vod.feature_title, url: e.config.video.vod.url, currency: e.config.request.currency, countries: e.config.video.vod.countries, country: e.config.request.country, buttons: e.config.video.vod.purchase_options, translationMap: e.config.request.dynamic_translation_map, isPreorder: n, isComingSoon: i, releaseDate: o, strings: { watch: n ? "Watch on " + o : "Watch Now", preRelease: s } }, void(b === !0 && a()) }
            k = !0;
            var c = new XMLHttpRequest;
            c.open("GET", "https://" + e.config.player_url + "/video/" + e.config.video.id + "/outro?on_site=" + e.config.embed.on_site + "&type=" + e.config.embed.outro, !0), c.withCredentials = !0, c.onload = function() {
                try {
                    var n = JSON.parse(c.response);
                    g = n.data, "videos" !== n.type && "promoted" !== n.type || (g = { contexts: Array.isArray(g) ? g : [g], owner: e.config.video.owner.id }, r()), "function" == typeof t && t() } catch (e) {} }, c.send() }

        function i(e) {
            for (var t = e.innerHTML; e.scrollHeight > e.clientHeight;) t = t.substring(0, t.length - 1), e.innerHTML = t + "&hellip;" }

        function r() {
            for (var e = 0, t = g.contexts.length; e < t; e++)
                for (var n = 0, i = g.contexts[e].videos.length; n < i; n++) {
                    var r = new Image;
                    r.src = g.contexts[e].videos[n].thumbnail } }

        function o() {
            var e = window.getComputedStyle(v.querySelector("header h1"), null),
                t = e.getPropertyValue("-webkit-line-clamp"),
                n = e.textOverflow;
            if (!t)
                for (var r = v.querySelectorAll("header h1"), o = 0, a = r.length; o < a; o++) "clip" === n ? i(r[o]) : r[o].style.display = "inherit" }

        function a() {
            if ("beginning" === e.config.embed.outro) return void e.events.fire(Xe.reset);
            if (null === g && !k) return void n(a);
            if (g) {
                if ("videos" === e.config.embed.outro || "promoted" === e.config.embed.outro) {
                    var i = g.contexts.reduce(function(e, t) {
                        return e + t.videos.length }, 0);
                    if (0 === i) return }
                g.target = !e.config.embed.on_site, v.innerHTML = dt.render("outro_" + ("promoted" === e.config.embed.outro ? "videos" : e.config.embed.outro), g), v.setAttribute("data-type", e.config.embed.outro), t.classList.remove("hidden"), t.removeAttribute("hidden"), _ = !0, "videos" === e.config.embed.outro && o(), window.requestAnimationFrame(function() { window.requestAnimationFrame(function() { t.classList.add("in"), c() }) }) } }

        function s() { _ && (y = !1, _ = !1, window.requestAnimationFrame(function() { t.classList.remove("in"), e.events.fire(Ke.outroHidden), p() })) }

        function c() {
            if (!y && t.clientWidth) { window.removeEventListener("resize", S), y = !0;
                var n = [];
                if (g.contexts)
                    for (var i = 0; i < g.contexts.length; i++)
                        for (var r = 0; r < g.contexts[i].videos.length; r++) {
                            var o = g.contexts[i].videos[r].id,
                                a = v.querySelector('[data-video-id="' + o + '"]');
                            a && a.clientWidth > 0 && n.push(o) }
                e.events.fire(Ke.outroDisplayed, n) } }

        function u() { e.events.on(Ke.playProgress, function(e, t, i) { b = !1, !k && null === g && e >= t - w && n() }) }

        function l() { e.events.on(Ke.playInitiated, function() { "nothing" !== e.config.embed.outro && "beginning" !== e.config.embed.outro || (g = !1) }), e.events.on(Ke.ended, function() {
                return e.config.embed.email && 1 === e.config.embed.email.time ? (e.events.fire(Xe.showOverlay, "email-capture"), void e.events.once(Ke.overlayClosed, function() {
                    return e.events.fire(Xe.showOutro) })) : void e.events.fire(Xe.showOutro) }), e.events.on(Xe.showOutro, function() { e.performDelegateAction(ze.showOutro, function() { b = !0, a() }) }), e.events.on(Xe.hideOutro, function() { s() }), nt(t).on("click", ".videos a", function(t) { e.events.fire(Ke.outroVideoPressed, parseInt(this.getAttribute("data-video-id"), 10)) }), nt(t).on("transitionend", function(e) { t.classList.contains("in") || (t.classList.add("hidden"), t.setAttribute("hidden", "")) }, !1), e.events.on([Ke.played, Ke.seeked, Ke.scrubbingStarted], s) }

        function d() { e.events.on(Xe.showOverlay, function() { setTimeout(function() { t.classList.add("hidden") }, 150) }), e.events.on(Ke.overlayClosed, function() { t.classList.contains("in") && t.classList.remove("hidden") }) }

        function f() { e.events.on(Xe.reset, function() { g = null, k = !1 }) }

        function h() { x(t, ".vod-button", function() {
                var t = this.getAttribute("data-product-id");
                return e.events.fire(Ke.vodButtonPressed, t), !1 }), x(t, ".vod-watch-button", function() {
                if (!("date_available" in e.config.video.vod)) return s(), e.events.fire(Ke.vodButtonPressed), !1 }) }

        function p() { window.removeEventListener("resize", S), window.addEventListener("resize", S) }
        var v = t.querySelector(".outro"),
            g = null,
            _ = !1,
            y = !1,
            b = !1,
            w = 10,
            k = !1,
            S = m(c, 250);
        return u(), l(), d(), f(), h(), p(), {} }

    function Me() {
        return qo[Math.floor(Math.random() * qo.length)] }

    function Fe(e, t) {
        function n() {
            var e = t.getBoundingClientRect(),
                n = ee.getBoundingClientRect(),
                i = ie.getBoundingClientRect(),
                r = n.bottom + (e.height - n.bottom) / 2;
            return e.height - r - i.height / 2 + "px" }

        function i() {
            var e = t.getBoundingClientRect(),
                n = ee.getBoundingClientRect(),
                i = te.getBoundingClientRect(),
                r = e.height / 2,
                o = n.bottom + (e.height - n.bottom) / 2;
            return { top: r - i.height / 2 + "px", transform: "translateY(" + (o - r) + "px)" } }

        function a(o, a) { t.setAttribute("data-name", o), ee.innerHTML = a.template, J = document.activeElement, r(J), a.modal && l(), a.preventBackgroundClose && t.setAttribute("data-background-close", "false"), a.wrapperClass && t.classList.add(a.wrapperClass), a.icon.type && (a.logo && (ie.classList.remove("hidden"), te.classList.add("cloaked"), window.requestAnimationFrame(function() { ie.innerHTML = dt.render("logo"), ie.style.bottom = n() })), te.classList.remove("hidden"), ne.innerHTML = a.icon.html, window.requestAnimationFrame(function() {
                var e = i();
                te.style.top = e.top, te.style[wt.transformProperty] = e.transform }), t.setAttribute("data-icon", a.icon.type), te.setAttribute("data-icon", a.icon.type), ne.setAttribute("data-icon", a.icon.type), "private-unlocked" === o && ne.classList.add("open")), t.classList.add("invisible"), t.classList.remove("hidden"), t.removeAttribute("hidden"), t.classList.add("in"), ae = a, oe = o, re = !0, e.events.fire(Ke.overlayOpened, o), ["share", "hd-not-allowed"].indexOf(o) > -1 && p(t), window.requestAnimationFrame(function() { t.classList.remove("invisible"), window.requestAnimationFrame(function() { ee.classList.add("in"), Z.classList.add("in") }) }) }

        function s() { ee.classList.remove("in"), ee.classList.add("out") }

        function c(n) {
            if (!h() && re) { t.removeAttribute("data-background-close"), Z.classList.remove("in"), Z.classList.add("out"), s(), t.classList.remove("in"), t.classList.add("out"), clearTimeout(Y), Y = setTimeout(u, 200), n && n.preventDefault && n.preventDefault();
                var i = t.querySelector(".back");
                i && i.classList.add("cloaked"), e.events.fire(Ke.overlayClosed, oe), re = !1, oe = null, ae = null, window.requestAnimationFrame(function() { J && (o(J), J = null) }) } }

        function u() { t.setAttribute("hidden", ""), t.removeAttribute("data-name"), t.removeAttribute("data-icon"), t.classList.add("hidden"), t.classList.remove("out"), t.classList.remove("embed-active"), t.classList.remove("modal"), t.classList.remove("embed-only"), Z.classList.remove("out"), Z.classList.remove("in"), te.removeAttribute("data-icon"), te.classList.add("hidden"), te.classList.remove("animate"), ne.removeAttribute("data-icon"), ne.innerHTML = "", ie.classList.add("hidden"), ee.classList.remove("out"), ee.innerHTML = "", e.events.fire(Ke.overlayCleared) }

        function l() { t.classList.add("modal"), t.setAttribute("data-modal", "true") }

        function f() { t.setAttribute("data-modal", "false") }

        function h() {
            return "true" === t.getAttribute("data-modal") }

        function v(e) {
            if ("yes" === e.form.getAttribute("data-bubble")) { e.form.setAttribute("data-bubble", "no");
                var n = t.querySelector(".validation-bubble"),
                    i = n.querySelector(".validation-bubble-message");
                i.innerHTML = e.validationMessage || "There is an error with this input.";
                var r = e.getBoundingClientRect(),
                    o = e.form.getBoundingClientRect();
                n.style.left = r.left - o.left + "px", n.style.top = r.height + 1 + "px", n.classList.remove("hidden"), e.focus(), window.requestAnimationFrame(function() { n.classList.add("animate") }), m() } }

        function m(e) {
            var n = t.querySelector(".validation-bubble");
            if (n) {
                if (e) return clearTimeout(Q), void n.classList.remove("animate");
                clearTimeout(Q), Q = setTimeout(function() { n.classList.remove("animate") }, 5e3) } }

        function g(e) {
            var n = t.querySelector("input[type=password]");
            return n.form.classList.contains("submitted") ? (n.setAttribute("aria-invalid", "false"), n.setCustomValidity(""), n.checkValidity && !n.checkValidity() ? (n.setAttribute("aria-invalid", "true"), n.validity.valueMissing && n.setCustomValidity("Please enter the password."), e || v(n), !1) : (m(!0), !0)) : null }

        function _() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.showBubble,
                i = void 0 === n || n,
                r = t.querySelector("input[type=email]");
            return r.setAttribute("aria-invalid", "false"), r.setCustomValidity(""), r.checkValidity && !r.checkValidity() ? (r.setAttribute("aria-invalid", "true"), r.validity.valueMissing && r.setCustomValidity("Please enter your email."), r.validity.typeMismatch && r.setCustomValidity("Please enter a valid email."), i && v(r), !1) : (m(!0), !0) }

        function y(e, n, i) { p(t);
            var r = ii(e.querySelectorAll("input")),
                o = r.map(function(e) {
                    return e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : encodeURIComponent(e.value) }).join("&"),
                a = new XMLHttpRequest;
            a.open(e.method, e.action + window.location.search, !0), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.withCredentials = !0, a.timeout = 3e3, a.onload = function() {
                var e;
                try { e = JSON.parse(a.responseText) } catch (e) {}
                n(e, a) }, a.onerror = function(e) { i(e) }, a.send(o) }

        function b() { w(), S(), f(), s() }

        function w() { ie.classList.add("animate") }

        function k() { ie.classList.add("hidden"), ie.classList.remove("animate") }

        function S() { te.classList.remove("cloaked"), te.classList.add("animate"), window.requestAnimationFrame(function() { te.style[wt.transformProperty] = "translateY(-10px)" }) }

        function T() { te.classList.add("centered"), te.style[wt.transformProperty] = "" }

        function E() { ne.classList.add("open") }

        function P() { ne.classList.add("pulled-back") }

        function L() { ne.classList.add("out"), ne.classList.remove("pulled-back") }

        function C() { nt(t).on("transitionend", ".overlay-logo", function(e) { "opacity" === e.propertyName && this.classList.contains("animate") && k() }), nt(t).on("transitionend", ".overlay-icon-wrapper", function(e) { e.propertyName.indexOf("transform") > -1 && ("" === this.style[wt.transformProperty] ? (this.classList.remove("centered"), "lock" !== this.getAttribute("data-icon") || ne.classList.contains("open") || ne.querySelector("canvas") ? P() : setTimeout(E, 100)) : "translateY(-10px)" === this.style[wt.transformProperty] && T()) }), nt(t).on("transitionend", ".overlay-icon", function(e) { e.propertyName.indexOf("transform") > -1 && (this.classList.contains("out") ? (f(), c()) : this.classList.contains("pulled-back") ? L() : this.classList.contains("open") && P()) }) }

        function O() {
            return { modal: !1, template: null, logo: !1, icon: { type: null, html: null } } }

        function A(t, n) {
            var i = e.config.video.title,
                r = e.config.video.owner.name,
                o = e.config.video.share_url;
            return t.template = dt.render("share", { url: e.config.video.url, shareUrl: o, playerShareUrl: "https://" + e.config.player_url + "/video/" + e.config.video.id + "/share", title: i, owner: r, embed: "public" === e.config.video.embed_permission && e.config.embed.settings.embed, embedOnly: e.config.embed.settings.share && e.config.embed.settings.share.embed_only, embedCode: e.config.video.embed_code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), copyButton: se || wt.flash.installed, customizeEmbed: !!e.config.video.url, readOnly: !wt.touch, strings: { share: "Share", facebook: "Share on Facebook", twitter: "Share on Twitter", tumblr: "Share on Tumblr", email: "Share via Email", emailSubject: "Check out “" + i + "” from " + r + " on Vimeo", emailBody: "Check out “" + i + "” from " + r + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + o + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com.", embedCode: "Get embed code", embedTitle: "Embed", embedSubtitle: "Add this video to your site with the embed code below.", copy: "Copy", copySuccess: "Copied!", customize: '<a href="' + e.config.video.url + '#embed" target="_blank">Customize this embed</a> on Vimeo' } }), e.config.embed.settings.share && e.config.embed.settings.share.embed_only && (t.wrapperClass = "embed-only"), t }

        function I(t) {
            return t.icon = { type: "lock", html: dt.render("icon_lock") }, t.modal = !0, t.logo = !0, t.template = dt.render("private_locked", { action: "https://" + e.config.vimeo_url + "/log_in", strings: { title: "Private Video", subtitle: "Log in to watch (if you have permission)", logIn: "Log in", logInLabel: "Log in (opens in a new window)" } }), t }

        function M(t) {
            return t.icon = { type: "lock", html: dt.render("icon_lock") }, t.template = dt.render("password", { action: "https://" + e.config.player_url + "/video/" + e.config.video.id + "/check-password?referrer=" + e.config.request.referrer, strings: { title: "Password Required", subtitle: "If you’ve got it, enter it below.", password: "Password", watch: "Watch Video" } }), t.modal = !0, t.logo = !!e.config.embed.settings.branding, t }

        function F(e) {
            return e.icon = { type: "lock", html: dt.render("icon_lock") }, e.template = dt.render("private_unlocked", { strings: { title: "Private Video", subtitle: "You are logged in and have permission to watch (congrats).", watch: "Watch Video" } }), e }

        function q(e) {
            return e.template = dt.render("content_rating", { logo: dt.render("logo"), strings: { title: "Hold up!", subtitle: "This video is hidden because it may contain mature content including: nudity, strong language, and violence.", update: 'You can <a href="">update your mature content filter</a> at any time.', watch: "I still want to watch this video" } }), e.modal = !0, e }

        function R(e, t) {
            return e.template = dt.render("error", { title: t.title, message: t.message }), e.modal = !!t.modal, e.logo = !!t.logo, t.icon && "lock" === t.icon && (e.icon = { type: "lock", html: dt.render("icon_lock") }), e }

        function B(t) {
            return t.template = dt.render("help", { onSite: e.config.embed.on_site, strings: { title: "Keyboard Shortcuts", volumeUp: "Volume up", volumeDown: "Volume down", scrubForward: "Scrub forward", scrubBackwards: "Scrub backwards", like: "Like", share: "Share", watchLater: "Watch Later", captions: "Toggle Captions", hd: "Toggle HD menu", fullscreen: "Toggle fullscreen", viewOnVimeo: "View on Vimeo" } }), t }

        function D(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return t.template = dt.render("overlay_email_capture", { text: n.text || e.config.embed.email.text, subtitle: n.subtitle || "Share your email address with " + e.config.video.owner.name + ".", action: "https://" + e.config.player_url + "/video/" + e.config.video.id + "/submit-email", confirmation: n.confirmation || e.config.embed.email.confirmation, referrer: e.config.request.referrer, strings: { email: "Email address", fullName: "Full name (optional)", submit: "Submit" } }), t.modal = !1, t.logo = !1, t.preventBackgroundClose = !0, t }

        function N(e) {
            var t = window.getComputedStyle(e),
                n = document.createElement("button");
            n.style.visibility = "hidden", n.style.padding = 0, e.parentElement.appendChild(n), n.innerText = "Copy";
            var i = n.clientWidth;
            n.innerText = "Copied!";
            var r = n.clientWidth,
                o = parseFloat(t.fontSize),
                a = parseFloat(t.paddingLeft),
                s = parseFloat(t.paddingRight),
                c = a + Math.max(i, r) + s;
            return e.parentElement.removeChild(n), (c + 2) / o + "em" }

        function H() { e.events.on(Xe.showOverlay, function(n, i) { se = document.queryCommandSupported && document.queryCommandSupported("copy");
                var r = function() {
                    var e = O();
                    switch (n) {
                        case "share":
                            a(n, A(e, i));
                            var r = t.querySelector(".embed-copy");
                            return void(r.style.width = N(r));
                        case "private-locked":
                            return void a(n, I(e));
                        case "password":
                            return void a(n, M(e));
                        case "private-unlocked":
                            return void a(n, F(e));
                        case "error":
                            return void a(n, R(e, i));
                        case "help":
                            return void a(n, B(e));
                        case "content-rating":
                            return void a(n, q(e));
                        case "email-capture":
                            return void a(n, D(e, i)) } };
                return re ? "share" !== oe && "help" !== oe && "hd-not-allowed" !== oe || oe !== n ? (e.events.once(Ke.overlayCleared, r), f(), void c()) : void c() : void r() }), nt(t).on("input", "input", function() { this.form.classList.add("interacted") }).on(["focus", "blur"], "input", function() { m(!0) }).on("transitionend", ".validation-bubble", function(e) { "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && this.classList.add("hidden") }), e.events.on([Ke.overlayCloseButtonPressed, Ke.played], c), e.events.on(Ke.privateUnlocked, function() { "private-locked" === oe && (f(), c()) }), e.events.on(Ke.configChanged, function() { "share" === oe && (ae = A(O(), e.config.embed.settings.share.embed_only), ee.innerHTML = ae.template) }), nt(window).on("resize", function() {
                if (re) { ie.style.bottom = n();
                    var e = i();
                    te.style.top = e.top, te.style[wt.transformProperty] = e.transform } }) }

        function j() {
            function n() { e.events.fire(Ke.embedCodeCopied);
                var t = document.querySelector(".embed-copy");
                t.innerHTML = t.getAttribute("data-success-label"), clearTimeout(i), i = setTimeout(function() { t.innerHTML = t.getAttribute("data-label") }, 2e3) }
            var i;
            nt(t).on("transitionend", ".share-screen", function(e) { "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && this.classList.add("cloaked") }).on("transitionend", ".embed-screen", function(e) { "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (t.querySelector(".back").classList.add("cloaked"), this.classList.add("cloaked"), p(t)) }).on("copy", "input[name=embed_code]", function() { e.events.fire(Ke.embedCodeCopied) }), x(t, ".back", function() {
                return t.querySelector(".share-screen").classList.remove("cloaked"), t.classList.remove("embed-active"), !1 }), x(t, ".facebook", function() {
                return e.events.fire(Ke.facebookButtonPressed, this.href), r(), !1 }), x(t, ".twitter", function() {
                return e.events.fire(Ke.twitterButtonPressed, this.href), r(), !1 }), x(t, ".tumblr", function() {
                return e.events.fire(Ke.tumblrButtonPressed, this.href), r(), !1 }), x(t, ".email", function() {
                return e.events.fire(Ke.emailButtonPressed), window.location = this.href, r(), !1 }), x(t, ".embed", function() {
                return e.events.fire(Ke.embedButtonPressed), r(), !1 }), x(t, ".embed-copy", function() {
                if (se) {
                    var e = document.querySelector("input[name=embed_code]");
                    e.select();
                    try { document.execCommand("copy") && n() } catch (e) {}
                    return document.activeElement.blur(), !1 } }), wt.touch ? nt(ee).on("focus", "input[name=embed_code]", function() {
                var e = this;
                setTimeout(function() { e.setSelectionRange(0, 9999), e.setAttribute("readonly", "readonly") }, 0) }).on("blur", "input", function() { this.removeAttribute("readonly") }) : nt(ee).on("click", "input[name=embed_code]", function() { this.setSelectionRange(0, 9999) }), e.events.on(Ke.facebookButtonPressed, function(e) { d(e, "facebook", { width: 580, height: 400 }) }).on(Ke.twitterButtonPressed, function(e) { d(e, "twitter", { width: 550, height: 420 }) }).on(Ke.tumblrButtonPressed, function(e) { d(e, "tumblr", { width: 540, height: 600 }) }).on(Ke.embedButtonPressed, function() {
                function i() {
                    var t = document.querySelector(".embed-copy"),
                        i = new ZeroClipboard(t, { moviePath: e.config.request.urls.zeroclip_swf, trustedDomains: ["*"], allowScriptAccess: "always" });
                    i.on("complete", n) }
                if (e.config.embed.settings.share.embed_only || (t.querySelector(".back").classList.remove("cloaked"), t.querySelector(".embed-screen").classList.remove("cloaked"), t.classList.add("embed-active")), !se && wt.flash.installed) {
                    var r = "zc_script_loaded";
                    if (!document.getElementById(r)) {
                        var o, a = document.createElement("script");
                        return a.setAttribute("id", r), a.setAttribute("src", e.config.request.urls.zeroclip_js), a.onreadystatechange = a.onload = function() { o || i(), o = !0 }, void document.getElementsByTagName("head")[0].appendChild(a) }
                    i() } }) }

        function V() { nt(ee).on("click", ".popup", function() {
                return e.events.fire(Xe.openPopup, "login-private-locked"), !1 }) }

        function U() {
            function t(t) {
                function n(t, n) {
                    return t === !1 ? void i(n.status, n) : (e.events.fire(Ke.passwordUnlocked, t), "icon-hidden" === window.getComputedStyle(Z, ":after").content ? (f(), void c()) : void b()) }

                function i(e) { a.classList.remove("loading"), o.setCustomValidity("Uh oh. There was a problem. Please try again."), o.setAttribute("aria-invalid", "true"), v(o) }
                var r = g();
                if (!r) return !1;
                var o = t.querySelector("input[type=password]"),
                    a = t.querySelector("input[type=submit]");
                a.classList.add("loading"), y(t, n, i) }
            nt(ee).on("click", ".password input[type=submit]", function() { this.form.classList.add("submitted"), this.form.setAttribute("data-bubble", "yes"), g(!0) }).on("submit", ".password form", function() {
                return t(this), !1 }).on(["focus", "input"], [".password input[type=email]", ".password input[type=password]"], function() { g() }) }

        function z() { x(ee, ".unlocked button", function() { b(), wt.iPad || wt.iPhone || e.events.once(Ke.overlayCleared, function() { e.events.fire(Ke.playButtonPressed) }) }) }

        function W() { x(ee, ".content-rating button", function() { f(), c() }) }

        function $() {
            function t() {
                var e = ee.querySelector(".email-capture-form"),
                    t = ee.querySelector(".email-capture-confirm");
                e.classList.add("invisible"), t.classList.remove("hidden"), window.requestAnimationFrame(function() { window.requestAnimationFrame(function() { t.classList.add("in"), setTimeout(c, 2750) }) }) }

            function n(n) {
                function i(n, i) {
                    return n === !1 ? void r(i.status, i) : (e.events.fire(Ke.emailCaptureSuccess), void t()) }

                function r(e) { a.classList.remove("loading"), o.setCustomValidity("Uh oh. There was a problem. Please try again."), o.setAttribute("aria-invalid", "true"), v(o) }
                if (!_()) return !1;
                var o = n.querySelector("input[type=email]"),
                    a = n.querySelector("input[type=submit]"),
                    s = { signature: "signature", time: "timestamp", expires: "expires" };
                Object.keys(s).forEach(function(t) {
                    var i = n.querySelector("input[name=" + t + "]");
                    i.value = e.config.request[s[t]] }), a.classList.add("loading"), y(n, i, r) }
            nt(ee).on("click", ".email-capture input[type=submit]", function() { this.form.classList.add("submitted"), this.form.setAttribute("data-bubble", "yes"), _() }).on("submit", ".email-capture form", function() {
                return e.events.fire(Ke.emailCaptureSubmitted), n(this), !1 }).on(["focus", "input"], ".email-capture input[type=email]", function() { _({ showBubble: !1 }) }) }

        function G() {
            var t = function(e, t, n) {
                var i = window.location.search.indexOf("partypooper=1") > -1 || window.location.search.indexOf("fun=0") > -1;
                switch (e) {
                    case "not-supported":
                        return { name: "notsupported", title: i ? "Sorry" : Me(), message: n > .5 ? "There was an issue playing this video." : "This video can’t be played with your current setup." };
                    default:
                        return { name: e, title: t && t.title || "Sorry", message: t && t.message || "There was an issue with playback." } } };
            e.events.on(Ke.error, function(n) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { modal: !0, final: !0 };
                if (i.final !== !1) {
                    var r = e.telecine ? e.telecine.currentTime : 0,
                        o = t(n, i, r),
                        s = o.name,
                        u = o.title,
                        l = o.message,
                        d = O();
                    return d.modal = i.modal, d.template = dt.render("error", { title: u, message: l }), re ? (c(), void e.events.once(Ke.overlayClosed, function() {
                        return a(s, d) })) : void a(s, d) } }) }

        function X() { e.events.on(Ke.configChanged, function() { window.requestAnimationFrame(function() { f(), c() }) }) }

        function K() { x(t, ".close", function() { e.events.fire(Ke.overlayCloseButtonPressed) }), nt(t).on(["click", "touchend"], [".window-wrapper", ".share-wrapper", ".overlay-logo"], function(e) { e.stopPropagation() }).on(["click", "touchend"], [".overlay-cell", "nav"], function() {
                return "false" === t.getAttribute("data-background-close") || (e.events.fire(Ke.overlayCloseButtonPressed), !1) }) }
        var Y, Q, J, Z = t.querySelector(".overlay-cell"),
            ee = t.querySelector(".overlay"),
            te = t.querySelector(".overlay-icon-wrapper"),
            ne = te.querySelector(".overlay-icon"),
            ie = t.querySelector(".overlay-logo"),
            re = !1,
            oe = null,
            ae = null,
            se = !1;
        return H(), C(), j(), V(), U(), z(), W(), $(), G(), X(), K(), e.events.fire(Ke.overlayModuleReady), {} }

    function qe(e, t) {
        function i(e, t) {
            var n = ".player-" + u + " ",
                i = n + e.join("," + n);
            if (t) {
                var r = l + " ";
                i += "," + r + e.join("," + r) }
            return d && (i = i.replace(/:hover/g, ":active")), i = i.replace(/ &/g, "") }

        function r() {
            var e = document.createElement("style");
            return e.setAttribute("data-player", u), document.querySelector("head").appendChild(e), f = e.sheet }

        function o() {
            for (; f.cssRules.length > 0;) f.deleteRule(0) }

        function a() { f ? o() : r() }

        function s(e) { a();
            var t = e.complement,
                r = new B(23, 35, 34, .75),
                o = new B(0, 0, 0, .15),
                s = o.overlayOn(e);
            r.contrast(t).ratio < 3 && t.lighten(5, 3, r);
            var c, u = e.lightness < 40 ? e.clone().lighten(15, 3, e) : e.clone().darken(15, 3, e);
            return n(i(Ro, !0), "color:" + e.hex + " !important", f), n(i(Bo, !0), "color:" + t.hex + " !important", f), n(i(Do), "color:" + e.hex, f), n(i(jo), "fill:" + e.hex, f), n(i(Uo), "stroke:" + e.hex, f), n(i(Wo), "background-color:" + e.hex, f), n(i($o), "border-color:" + e.hex, f), n(i(No), "color:" + t.hex, f), n(i(Ho), "fill:" + t.hex, f), n(i(Vo), "fill:" + u.hex, f), n(i(zo), "stroke:" + u.hex, f), n(i(Zo), "border-color:" + s.hex, f), n(i(ea), "background-color:" + s.hex, f), e.luminance > .95 && (t = e.clone().darken(15, 3, e), n(i(Go), "color:" + t.hex, f), n(i(Xo), "fill:" + t.hex, f), n(i(Ko), "stroke:" + t.hex, f), u = t.clone().darken(15, 3, t), n(i(Vo), "fill:" + u.hex, f), n(i(zo), "stroke:" + u.hex, f)), e.yiq > 175 && e.luminance < .95 && (c = u.clone().darken(15, 3, u), n(i(Vo), "fill:" + c.hex, f), n(i(zo), "stroke:" + c.hex, f), n(i(Yo), "color:" + u.hex, f), n(i(Qo), "fill:" + u.hex, f), n(i(Jo), "stroke:" + u.hex, f)), { main: e.hex, selected: u.hex, sidedockHover: c ? u.hex : e.luminance > .95 ? t.hex : B.white.hex, sidedockSelected: e.luminance > .95 ? t.hex : e.hex, sidedockSelectedHover: c ? c.hex : u.hex } }

        function c() { e.events.on(Xe.changeColor, function(t) {
                var n;
                try { n = new B(t) } catch (e) { n = new B("00adef") }
                var i = s(n);
                e.config._colors = i, e.config.embed.color = i.main.replace("#", ""), e.events.fire(Ke.colorChanged, e.config.embed.color) }), e.events.fire(Xe.changeColor, e.config.embed.color) }
        var u = t.uuid,
            l = t.id,
            d = t.isMobileDevice,
            f = null;
        return c(), {} }

    function Re(e) {
        function t() { e.events.on(Xe.openPopup, function(t, n) {
                var i = "https://" + e.config.player_url,
                    o = i + "/video/" + e.config.video.id,
                    a = 670,
                    s = 545;
                switch (t) {
                    case "login-like":
                        r = d(o + "/login/like", "login", { width: a, height: s }), e.events.fire(Ke.popupOpened, t);
                        break;
                    case "login-watch-later":
                        r = d(o + "/login/watch-later", "login", { width: a, height: s }), e.events.fire(Ke.popupOpened, t);
                        break;
                    case "login-private-locked":
                        r = d(o + "/login/private", "login", { width: a, height: s }), e.events.fire(Ke.popupOpened, t);
                        break;
                    case "purchase":
                        var c = i + "/video/" + (e.config.video.vod.feature_id || e.config.video.id) + "/purchase/vod";
                        n && n.productId && (c += "/" + n.productId), c += "?referrer=" + encodeURIComponent(e.config.request.referrer), r = d(c, "purchase", { width: 790, height: 670 }), e.events.fire(Ke.popupOpened, t) } }), window.closePopup = function(t) {
                if (r) {
                    try { r.close(), e.events.fire(Ke.popupClosed, t) } catch (e) {}
                    r = null } } }

        function n() { e.config.embed.on_site || (window.confirmPurchase = function(t, n, i) {
                return n ? void e.loadVideo(t) : void(i && e.events.fire(Ke.playButtonPressed)) }) }

        function i() { e.config.embed.on_site || (window.confirmLoginAction = function(t, n) { e.events.fire(Ke.userLogIn, n) }) }
        var r = null;
        return t(), n(), i(), {} }

    function Be(e, t) {
        function n() { D && (K || (N && X || j || z || Q) && (H || (!V && !U || j || z) && (D = !1, e.events.fire(Ke.sidedockVisibilityChanged, D), (Y || t).classList.add("invisible")))) }

        function i() {
            if (!D && !z && !j) {
                var n = Y || t;
                n.classList.add("invisible"), n.classList.remove("hidden"), n.removeAttribute("hidden"), t.classList.remove("hidden"), t.removeAttribute("hidden"), t.classList.contains("vod") && t.classList.remove("vod"), setTimeout(function() { D = !0, e.events.fire(Ke.sidedockVisibilityChanged, D), n.classList.remove("invisible") }, 0) } }

        function r() { N = !1, H = !1, K = !1 }

        function o(t, n, i) {
            var r = "data-label-" + i,
                o = "add" !== i || e.config.user.logged_in ? r : "data-label-add-logged-out";
            t.setAttribute("aria-label", t.getAttribute(o)), n.classList.add("hidden"), n.setAttribute("hidden", ""), n.firstChild.innerHTML = t.getAttribute(r) }

        function a() {
            var e = W.indexOf(this);
            $.forEach(function(t, n) { n !== e && t && t.classList.add("invisible") }), e >= 0 && $[e] && ($[e].classList.add("invisible"), $[e].classList.remove("hidden"), $[e].removeAttribute("hidden", ""), G = window.requestAnimationFrame(function() { G = window.requestAnimationFrame(function() { $[e].classList.remove("invisible"), $[e].classList.add("visible") }) })) }

        function s() {
            var e = "BUTTON" === this.tagName ? this : this.querySelector("button"),
                t = W.indexOf(e);
            t >= 0 && $[t] && (G && (window.cancelAnimationFrame(G), G = null), $[t].classList.add("invisible"))
        }

        function c() {
            if (C) {
                var e = C.parentElement;
                Y.insertBefore(e, Y.firstChild) } }

        function u() {
            if (C) {
                var e = C.parentElement;
                t.insertBefore(e, Y) } }

        function l() {
            if (e.config.view === Ue.main || e.config.view === Ue.privateUnlocked) {
                var n = e.config.embed.settings,
                    i = e.config.video.vod && "purchase_options" in e.config.video.vod && e.config.video.vod.purchase_options.length,
                    r = i && e.config.video.vod.is_coming_soon,
                    o = "ondemand.main" === e.config.embed.context,
                    a = e.config.video.vod && e.config.user.purchased ? 1 : 0,
                    s = i && n.vod && b(e.config.video.vod.countries, e.config.request.country);
                s && r && o && (s = !1);
                var u = i && e.config.video.vod.purchase_options[0],
                    l = null;
                u && (l = _(e.config.request.dynamic_translation_map, "label_string", e.config.request.currency, u)), t.innerHTML = dt.render("sidedock", { loggedIn: !!e.config.user.logged_in, vodButton: s, purchased: a, vodPurchaseInfo: u, vodDisplayLabel: l, likeButton: n.like, liked: e.config.user.liked, watchLaterButton: n.watch_later, addedToWatchLater: e.config.user.watch_later, collectionsButton: n.collections, shareButton: n.share, strings: { like: "Like", likeLoggedOut: "Like (opens in a new window)", unlike: "Unlike", watchLaterAdd: "Add to Watch Later", watchLaterAddLoggedOut: "Add to Watch Later (opens in a new window)", watchLaterRemove: "Remove from Watch Later", collections: "Add to collections", share: n.share && n.share.embed_only ? "Embed" : "Share" } }), C = t.querySelector(".vod-button"), s && (Y = t.querySelector(".sidedock-inner"), a && c());
                var d = Y || t;
                i && s && !e.config.embed.settings.instant_sidedock ? t.classList.add("vod") : wt.touch && (D = !0, e.events.fire(Ke.sidedockVisibilityChanged, D), d.classList.remove("hidden"), d.removeAttribute("hidden"), d.classList.remove("invisible")), O = t.querySelector(".like-button"), A = t.querySelector(".like-label"), I = t.querySelector(".watch-later-button"), M = t.querySelector(".watch-later-label"), F = t.querySelector(".collections-button"), q = t.querySelector(".collections-label"), R = t.querySelector(".share-button"), B = t.querySelector(".share-label"), W = [C, O, I, R, F], $ = [null, A, M, B, q] } }

        function d() {
            var t = e.config.embed.settings.instant_sidedock,
                n = e.config.video.vod,
                r = n && "purchase_options" in n && n.purchase_options.length,
                o = n && b(e.config.video.vod.countries, e.config.request.country);
            (t || r && o) && (Q || i()) }

        function f() { x(t, ".vod-button", function() {
                var t = C.getAttribute("data-product-id");
                e.events.fire(Ke.vodButtonPressed, t) }, s), e.events.on(Ke.outroDisplayed, function() { c() }), e.events.on(Ke.outroHidden, function() { u() }) }

        function h() { x(t, ".like-button", function() { e.events.fire(Ke.likeButtonPressed) }, s), e.events.on(Ke.liked, function() { O && (O.classList.add("on"), o(O, A, "remove")) }), e.events.on(Ke.unliked, function() { O && (O.classList.remove("on"), o(O, A, "add")) }) }

        function p() { x(t, ".watch-later-button", function() { e.events.fire(Ke.watchLaterButtonPressed) }, s), e.events.on(Ke.addedToWatchLater, function() { I && (I.classList.add("on"), o(I, M, "remove")) }), e.events.on(Ke.removedFromWatchLater, function() { I && (I.classList.remove("on"), o(I, M, "add")) }) }

        function v() { x(t, ".collections-button", function() { e.events.fire(Ke.collectionsButtonPressed) }, s) }

        function m() { x(t, ".share-button", function() {
                return e.events.fire(e.config.embed.settings.share.embed_only ? Ke.embedButtonPressed : Ke.shareButtonPressed), !1 }, s) }

        function g() {
            var e = function(e) { "opacity" === e.propertyName && e.target.classList.contains("invisible") && (e.target.classList.add("hidden"), e.target.setAttribute("hidden", ""), e.target.classList.remove("visible")) };
            nt(t).on("blur", "button", s).on("mouseleave", ".box", s).on(["focus", "pointerdown", "touchstart", "mouseenter"], "button", a).on("transitionend", "label", e), x(t, "label", function() {
                var e = $.indexOf(this);
                e >= 0 && W[e].click() }) }

        function y() { e.events.on([Ke.mousedOut, Ke.mouseTimeout], n).on(Ke.mousedOver, i).on(Ke.targetTimeReached, function() { X = !0, n() }).on(Ke.played, function() { N = !0 }), nt(t).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], function(e) {
                return "pointerType" in e ? void("mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE || (H = "pointerenter" === e.type || "MSPointerEnter" === e.type)) : void(H = "mouseover" === e.type) }), nt(t).on("transitionend", function(e) {
                var n = Y || t; "opacity" === e.propertyName && n.classList.contains("invisible") && (n.classList.add("hidden"), n.setAttribute("hidden", ""), C && n.contains(C) && (t.classList.add("hidden"), t.setAttribute("hidden", ""))) }) }

        function w() { e.events.on(Ke.willEnterFullscreen, function() { H = !1, n() }).on(Ke.didExitFullscreen, function(e) { e || (K = !0) }) }

        function k() { e.events.on([Ke.airPlayActivated], function() { V = !0, i() }).on([Ke.airPlayDeactivated], function() { V = !1 }) }

        function S() { e.events.on(Ke.pictureInPictureActivated, function() { U = !0, i() }).on(Ke.pictureInPictureDeactivated, function() { U = !1 }) }

        function T() { e.events.on(Ke.overlayOpened, function() { j = !0, H = !1, n() }).on(Ke.overlayClosed, function() { j = !1, i() }) }

        function E() { e.events.on(Ke.alertVisibilityChanged, function(e) { z = e, e && n() }) }

        function P() { e.events.on(Ke.configChanged, function() { l() }) }

        function L() { e.events.on(Xe.reset, function() { H = !1, X = !1, n(), r() }) }
        var C, O, A, I, M, F, q, R, B, D = !1,
            N = !1,
            H = !1,
            j = !1,
            V = !1,
            U = !1,
            z = !1,
            W = [],
            $ = [],
            G = null,
            X = !1,
            K = !1,
            Y = null,
            Q = e.config.embed.autoplay && e.config.request.flags.autohide_controls;
        return l(), d(), f(), h(), p(), v(), m(), g(), y(), w(), k(), S(), T(), E(), P(), L(), e.events.fire(Ke.sidedockModuleReady), {}
    }

    function De(e, t) {
        function n() { p = !1, t.classList.add("invisible") }

        function i() { t.classList.remove("hidden"), t.removeAttribute("hidden"), setTimeout(function() { p = !0, t.classList.remove("invisible") }, 0) }

        function r() {
            if (p) {
                if (m) return void n();
                if (b) return void n();
                if (!g && _) return y && v ? void 0 : void n() } }

        function o() {
            if (!p) {
                if (g && !m) return void i();
                if (y && !w && !b) return _ || m ? e.config.embed.settings.info_on_pause && y && !m ? void i() : void 0 : void i() } }

        function a() {
            if (e.config.view === Ue.main || e.config.view === Ue.privateUnlocked) {
                var n = !!e.config.embed.settings.byline,
                    i = null !== e.config.video.owner.url,
                    r = e.config.video.owner.url,
                    o = 0 === e.config.embed.on_site,
                    a = "v1" === e.config.video.design_version_360,
                    s = "v2" === e.config.video.design_version_360,
                    c = { linkToOwner: i, ownerLink: r, targetBlank: o, showPortrait: !!e.config.embed.settings.portrait, portraitImg: e.config.video.owner[wt.devicePixelRatio > 1 ? "img_2x" : "img"], showByline: n, showTitle: !!e.config.embed.settings.title, showTitleLink: null !== e.config.video.url, titleLink: e.config.video.url, title: e.config.video.title, is360: e.config.video.is_panorama && (a || s), strings: {} };
                if (e.config.embed.settings.byline) {
                    var u = e.config.embed.settings.byline_badge,
                        l = "";
                    u && u.type && (l = dt.render("title_byline_badge", { targetBlank: o, cssClass: u.type, link: u.url || !1 })), c.strings.byline = "from " + dt.render("title_owner_byline", { linkToOwner: i, ownerLink: r, targetBlank: o, owner: e.config.video.owner.name }) + l }
                var d = e.config.embed.settings.badge;
                if (d) {
                    var f = wt.devicePixelRatio > 1 ? "img_2x" : "img";
                    wt.svg && d.svg && (f = "svg"), c.showPortrait = !1, c.badge = { link: d.link, img: d[f], offset: d.offset || !1, width: d.width, height: d.height, name: d.name, shadow: d.shadow || !1 } }
                e.config.embed.autoplay && (t.classList.add("hidden"), t.setAttribute("hidden", "")), t.innerHTML = dt.render("title", c) } }

        function s() { e.events.on([Ke.mousedOut, Ke.mouseTimeout], r).on(Ke.mousedOver, o).on(Ke.playInitiated, function() { _ = !0, y = !1, r() }).on([Ke.playButtonPressed, Ke.played], function() { y = !1, w = !1, r() }).on(Ke.paused, function(e, t) { t || (y = !0, o()) }).on(Ke.ended, function() { b = !0, r() }).on(Ke.scrubbingStarted, function() { k = y, w = !0 }).on(Ke.scrubbingEnded, function() { k && (w = !1) }).on(Ke.willEnterFullscreen, function() { r() }).on(Ke.didExitFullscreen, function(e) { e || o() }), nt(t).on(["pointerenter", "pointerleave", "mouseenter", "mouseleave"], function(e) {
                return "pointerType" in e ? void("mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE || (v = "pointerenter" === e.type || "MSPointerEnter" === e.type)) : void(v = "mouseover" === e.type) }), nt(t).on("transitionend", function(e) { "opacity" === e.propertyName && t.classList.contains("invisible") && (t.classList.add("hidden"), t.setAttribute("hidden", "")) }, !1) }

        function c() { e.events.on(Ke.ended, function(e) { r() }) }

        function u() { e.events.on([Ke.airPlayActivated], function() { g = !0, o() }).on([Ke.airPlayDeactivated], function() { g = !1, r() }) }

        function l() { e.events.on(Ke.overlayOpened, function(e) { "notsupported" !== e && "private-unlocked" !== e && "help" !== e && (m = !0, v = !1, r()) }).on(Ke.overlayClosed, function() { m = !1, v = !1, setTimeout(o, 0) }) }

        function d() { x(t, ".badge", function() { e.events.fire(Ke.badgePressed, e.config.embed.settings.badge.id) }) }

        function f() { e.events.on(Ke.configChanged, function() { a(), e.config.view === Ue.privateUnlocked && o() }) }

        function h() { e.events.on(Xe.reset, function() { _ = !1, y = !0, b = !1, w = !1, o() }) }
        var p = !0,
            v = !1,
            m = !1,
            g = !1,
            _ = !1,
            y = !0,
            b = !1,
            w = !1,
            k = !1;
        return a(), s(), c(), u(), l(), d(), f(), h(), e.events.fire(Ke.titleModuleReady), {} }

    function Ne(e, t, n, r) {
        function o() {
            var t = F,
                n = window.getComputedStyle(e, ":after");
            n && (F = n.getPropertyValue("content").replace(/["'\s]*/g, ""), F && t !== F && "undefined" != typeof q[F] && S.events.fire(q[F])) }

        function a() {
            var t = (S.config.view === Ue.main || S.config.view === Ue.privateUnlocked) && S.config.embed.settings && !S.config.embed.settings.playbar;
            e.classList.toggle("no-playbar", t), e.classList.toggle("with-fullscreen", !!S.config.embed.settings.fullscreen);
            var n = S.config.embed.settings.custom_logo;
            e.classList.toggle("with-custom-logo", !!n), e.classList.toggle("with-sticky-custom-logo", n && n.sticky), e.classList.toggle("background-mode", !!S.config.embed.settings.background), e.classList.toggle("touch-support", wt.touch) }

        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.config.video.url;
            if (!(!t || e && e.metaKey)) return t.indexOf("#") === -1 && S.telecine.currentTime > 0 && S.telecine.currentTime < S.config.video.duration - 30 && !S.telecine.paused && (t += "#at=" + Math.floor(S.telecine.currentTime)), S.config.embed.on_site ? void(window.location = t) : (window.open(t), i(e), S.events.fire(Ke.pauseButtonPressed), !1) }

        function c() { a(), S.events.on(Ke.configChanged, a) }

        function u() { C = new Ve(function(e, t) {
                var n = function() {
                        return window.innerWidth > 0 && window.innerHeight > 0 },
                    i = null,
                    r = function t() {
                        return clearTimeout(i), n() ? void e() : void(i = setTimeout(t, 250)) };
                S.events.once(Ke.ready, r), S.events.once(Ke.error, r) }) }

        function d() {
            var e = function(e, t) {
                return S.verifyConfig().then(function() {
                    var n = S.config.request,
                        i = n.signature,
                        r = n.session,
                        o = n.timestamp,
                        a = n.expires,
                        s = "https://" + S.config.player_url + "/video/" + S.config.video.id + "/" + e + "?signature=" + i + "&session=" + r + "&time=" + o + "&expires=" + a;
                    return h(s, { method: t }) }) };
            S.events.on(Ke.vodButtonPressed, function(e) {
                if (S.config.user.purchased) {
                    if (!S.config.video.vod.is_feature && S.config.video.vod.feature_id) return void S.loadVideo(S.config.video.vod.feature_id).then(function() {
                        return S.events.fire(Ke.playButtonPressed), S.config.video.vod.feature_id }).catch(function(e) { S.reportException(e), S.events.fire(Xe.showOverlay, "error", { title: "Sorry", message: "There was a problem. Please try again." }) });
                    if (S.config.video.vod && S.config.video.vod.is_coming_soon) return;
                    return void S.events.fire(Ke.playButtonPressed) }
                S.performDelegateAction(ze.purchase, function() { S.events.fire(Xe.openPopup, "purchase", { productId: e }) }, e) }), S.events.on(Ke.likeButtonPressed, function() {
                return S.config.user.logged_in ? void(S.config.user.id !== S.config.video.owner.id && (S.config.user.liked ? S.performDelegateAction(ze.unlike, function() { e("like", "DELETE"), S.config.user.liked = !1, S.events.fire(Ke.unliked) }) : S.performDelegateAction(ze.like, function() { e("like", "PUT"), S.config.user.liked = !0, S.events.fire(Ke.liked) }))) : void S.performDelegateAction(ze.loginForm, function() { S.events.fire(Xe.openPopup, "login-like") }, "like") }), S.events.on(Ke.watchLaterButtonPressed, function() {
                if (S.config.video.url || "unlisted" === S.config.video.privacy) return S.config.user.logged_in ? S.config.user.watch_later ? void S.performDelegateAction(ze.removeFromWatchLater, function() { e("watch-later", "DELETE"), S.config.user.watch_later = !1, S.events.fire(Ke.removedFromWatchLater) }) : void S.performDelegateAction(ze.addToWatchLater, function() { e("watch-later", "PUT"), S.config.user.watch_later = !0, S.events.fire(Ke.addedToWatchLater) }) : void S.performDelegateAction(ze.loginForm, function() { S.events.fire(Xe.openPopup, "login-watch-later") }, "watch-later") }), S.events.on(Ke.collectionsButtonPressed, function() { S.performDelegateAction(ze.collectionsOverlay, function() {
                    return S.config.video.vod && S.config.video.vod.url ? void s(null, S.config.video.vod.url + "#collections") : S.config.video.url ? void s(null, S.config.video.url + "#collections") : void 0 }) }), S.events.on(Ke.shareButtonPressed, function() {
                var e = S.config.embed.settings.share && S.config.embed.settings.share.embed_only,
                    t = function() { S.events.fire(Xe.showOverlay, "share", e) };
                return ht.element ? void t() : void S.performDelegateAction(ze.shareOverlay, t) }), S.events.on(Ke.embedButtonPressed, function() { S.config.embed.settings.share.embed_only && S.performDelegateAction(ze.shareOverlay, function() { S.events.fire(Xe.showOverlay, "share", !0) }) }) }

        function f() {
            function t() {
                var e = 90 === Math.abs(window.orientation) ? screen.height : screen.width;
                return wt.mobileAndroid && !wt.browser.chrome && !wt.browser.opera && wt.android >= 4 && (e /= window.devicePixelRatio), e / window.innerWidth }

            function n(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1.2,
                    n = Math.round(10 * Math.pow(e, t));
                return Math.max(n, 10) + "px" }

            function i() { C.then(function() {
                    var e = t(),
                        i = n(e);
                    return O.style.fontSize = i, A.style.fontSize = i, I.style.fontSize = i, !0 }).catch(function() {}) }

            function r() { O.style.fontSize = "", A.style.fontSize = "", I.style.fontSize = "" }
            S.events.on(Ke.didEnterFullscreen, r), S.events.on(Ke.didExitFullscreen, i), M && (e.classList.add("mobile"), i()) }

        function p() {
            if (nt(window).on("resize", o), "undefined" != typeof MutationObserver) {
                var t = new MutationObserver(o);
                t.observe(e, { attributes: !0, attributeFilter: ["class"] }) } }

        function v() {
            function t() {
                var t = e;
                if (r && r.getFullscreenElement && "function" == typeof r.getFullscreenElement) {
                    var n = r.getFullscreenElement();
                    n && n instanceof HTMLElement && n.contains(e) && n.classList.contains("js-player-fullscreen") && (t = n) }
                return t }

            function n(t, n) {
                return s ? void(s = !1) : void(o || (o = !0, S.events.fire(Ke.didEnterFullscreen, e === t, a))) }

            function i(e) {
                return s ? void(s = !1) : void(o && (o = !1, S.events.fire(Ke.didExitFullscreen, a), a || S.events.fire(Xe.toggleNativeControls, !1), a = !1)) }
            S.config.embed.fullscreen = !0, wt.iPad && e.classList.add("no-fullscreen-api-support"), ht.enabled && !wt.browser.bb10 || wt.iPad || (e.classList.add("no-fullscreen-support"), wt.iOS || (S.config.embed.fullscreen = !1));
            var o = !1,
                a = !1,
                s = !1;
            S.events.on([Ke.pictureInPictureActivated, Ke.pictureInPictureDeactivated], function() { s = !0 }), S.events.on(Xe.forceFullscreen, function() {
                return ht.enabled || ht.videoEnabled(e) ? (S.events.fire(Ke.willEnterFullscreen), a = !1, void ht.request(t())) : void S.events.fire(Xe.toggleNativeControls, !0) }), S.events.on(Ke.fullscreenButtonPressed, function() { "picture-in-picture" === S.telecine.presentationMode && S.events.fire(Xe.deactivatePictureInPicture), ht.element ? (S.events.fire(Ke.willExitFullscreen), ht.exit()) : (S.events.fire(Ke.willEnterFullscreen), a = !0, ht.request(t())) });
            var c = ht.onenter,
                u = ht.onexit;
            if (ht.onenter = function(t) {
                    if (!o) return e.contains(t) ? void n(t, !0) : void("function" == typeof c && c(t)) }, ht.onexit = function() {
                    return o ? void i(!0) : void("function" == typeof u && u()) }, nt(e).on("click", "a", function(e) { ht.element === t() && ht.exit() }), nt(e).on("gestureend", function(e) { e.scale > 1 && S.events.fire(Ke.fullscreenButtonPressed) }), "undefined" != typeof MSGesture) {
                var l = 1,
                    d = new MSGesture;
                d.target = e, nt(e).on("pointerdown", function(e) { d.addPointer(e.pointerId) }).on(["MSGestureChange"], function(e) { l *= e.scale }).on(["MSGestureEnd"], function() {
                    (!o && l >= 2 || o && l < 1) && S.events.fire(Ke.fullscreenButtonPressed), l = 1 }) } }

        function m() { x(e, "a[data-clip-link]", s), S.events.on(Xe.openVimeo, s) }

        function g() { c(), u(), d(), f(), p(), v(), m() }

        function _() { E || (E = new Fe(S, e.querySelector(".overlay-wrapper"))) }

        function y() { P || (P = new qe(S, { uuid: S.uuid, id: e.id, isMobileDevice: !1 })) }

        function b() { L || (L = new Re(S)) }

        function w() { _(), y(), b(), void new Pe(S, O), void new Le(S, e);
            var t = new Oe(S, e);
            void new Ae(S, e.querySelector(".notification-wrapper")), void new Ie(S, e.querySelector(".outro-wrapper")), void new Be(S, A), void new De(S, I), Object.defineProperties(T, { pauseKeyboard: { enumerable: !0, value: t.pause }, unpauseKeyboard: { enumerable: !0, value: t.unpause } }) }
        dt.helpers = et;
        var k = l(n),
            S = new xe({ element: e, delegate: r, cssLoadedPromise: k });
        e.classList.add("js-player-fullscreen");
        var T = S.externalApi,
            E = null,
            P = null,
            L = null,
            C = null,
            O = e.querySelector(".controls"),
            A = e.querySelector(".sidedock"),
            I = e.querySelector(".title"),
            M = wt.mobileAndroid || wt.iPhone || wt.windowsPhone || wt.browser.bb10,
            F = "normal",
            q = { tiny: Ke.enteredTinyMode, mini: Ke.enteredMiniMode, normal: Ke.enteredNormalMode, none: Ke.enteredNormalMode },
            R = { initializationHandler: function() {
                    return w(), g(), Ve.resolve() }, postInitializationHandler: function() {
                    return S.telecine && void new Ce(S, e.querySelector(".stats-debug")), Ve.resolve() }, authorizationHandler: function(e) { e(), _(), y();
                    var t = "Error",
                        n = "Unhandled video privacy";
                    switch (S.config.view) {
                        case Ue.privatePassword:
                            return new Ve(function(e, t) { S.events.fire(Xe.showOverlay, "password"), S.events.once(Ke.passwordUnlocked, function(t) { e(t) }) });
                        case Ue.privateLocked:
                            b();
                            var i = "private-locked",
                                r = null;
                            return S.config.user.logged_in && (i = "error", r = { title: "Private Video", message: "Sorry, you don’t have permission to watch.", modal: !0, logo: !!S.config.embed.settings.branding, icon: "lock" }), S.events.fire(Xe.showOverlay, i, r), Ve.reject();
                        case Ue.error:
                            t = S.config.title, n = S.config.message }
                    return S.events.fire(Xe.showOverlay, "error", { title: t, message: n, modal: !0 }), Ve.reject() } };
        return S.init(t, R).then(function() {
            return S.config.view !== Ue.privateUnlocked || S.config.embed.autoplay || S.events.fire(Xe.showOverlay, "private-unlocked"), !0 }).catch(function(t) { S.reportException(t), _(), y(), e.classList.remove("loading"), S.events.fire(Ke.error, "error", { message: "There was an error loading this video.", modal: !0, final: !0 }) }), T }
    var He = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        je = t(function(e) {! function(t, n, i) { n[t] = n[t] || i(), "undefined" != typeof e && e.exports ? e.exports = n[t] : "function" == typeof define && define.amd && define(function() {
                    return n[t] }) }("Promise", "undefined" != typeof He ? He : He, function() {
                function e(e, t) { f.add(e, t), d || (d = p(f.drain)) }

                function t(e) {
                    var t, n = typeof e;
                    return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t }

                function n() {
                    for (var e = 0; e < this.chain.length; e++) i(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                    this.chain.length = 0 }

                function i(e, n, i) {
                    var r, o;
                    try { n === !1 ? i.reject(e.msg) : (r = n === !0 ? e.msg : n.call(void 0, e.msg), r === i.promise ? i.reject(TypeError("Promise-chain cycle")) : (o = t(r)) ? o.call(r, i.resolve, i.reject) : i.resolve(r)) } catch (e) { i.reject(e) } }

                function r(i) {
                    var a, c = this;
                    if (!c.triggered) { c.triggered = !0, c.def && (c = c.def);
                        try {
                            (a = t(i)) ? e(function() {
                                var e = new s(c);
                                try { a.call(i, function() { r.apply(e, arguments) }, function() { o.apply(e, arguments) }) } catch (t) { o.call(e, t) } }): (c.msg = i, c.state = 1, c.chain.length > 0 && e(n, c)) } catch (e) { o.call(new s(c), e) } } }

                function o(t) {
                    var i = this;
                    i.triggered || (i.triggered = !0, i.def && (i = i.def), i.msg = t, i.state = 2, i.chain.length > 0 && e(n, i)) }

                function a(e, t, n, i) {
                    for (var r = 0; r < t.length; r++) ! function(r) { e.resolve(t[r]).then(function(e) { n(r, e) }, i) }(r) }

                function s(e) { this.def = e, this.triggered = !1 }

                function c(e) { this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0 }

                function u(t) {
                    if ("function" != typeof t) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var i = new c(this);
                    this.then = function(t, r) {
                        var o = { success: "function" != typeof t || t, failure: "function" == typeof r && r };
                        return o.promise = new this.constructor(function(e, t) {
                            if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                            o.resolve = e, o.reject = t }), i.chain.push(o), 0 !== i.state && e(n, i), o.promise }, this.catch = function(e) {
                        return this.then(void 0, e) };
                    try { t.call(void 0, function(e) { r.call(i, e) }, function(e) { o.call(i, e) }) } catch (e) { o.call(i, e) } }
                var l, d, f, h = Object.prototype.toString,
                    p = "undefined" != typeof setImmediate ? function(e) {
                        return setImmediate(e) } : setTimeout;
                try { Object.defineProperty({}, "x", {}), l = function(e, t, n, i) {
                        return Object.defineProperty(e, t, { value: n, writable: !0, configurable: i !== !1 }) } } catch (e) { l = function(e, t, n) {
                        return e[t] = n, e } }
                f = function() {
                    function e(e, t) { this.fn = e, this.self = t, this.next = void 0 }
                    var t, n, i;
                    return { add: function(r, o) { i = new e(r, o), n ? n.next = i : t = i, n = i, i = void 0 }, drain: function() {
                            var e = t;
                            for (t = n = d = void 0; e;) e.fn.call(e.self), e = e.next } } }();
                var v = l({}, "constructor", u, !1);
                return u.prototype = v, l(v, "__NPO__", 0, !1), l(u, "resolve", function(e) {
                    var t = this;
                    return e && "object" == typeof e && 1 === e.__NPO__ ? e : new t(function(t, n) {
                        if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                        t(e) }) }), l(u, "reject", function(e) {
                    return new this(function(t, n) {
                        if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                        n(e) }) }), l(u, "all", function(e) {
                    var t = this;
                    return "[object Array]" != h.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(n, i) {
                        if ("function" != typeof n || "function" != typeof i) throw TypeError("Not a function");
                        var r = e.length,
                            o = Array(r),
                            s = 0;
                        a(t, e, function(e, t) { o[e] = t, ++s === r && n(o) }, i) }) }), l(u, "race", function(e) {
                    var t = this;
                    return "[object Array]" != h.call(e) ? t.reject(TypeError("Not an array")) : new t(function(n, i) {
                        if ("function" != typeof n || "function" != typeof i) throw TypeError("Not a function");
                        a(t, e, function(e, t) { n(t) }, i) }) }), u }) }),
        Ve = e(je),
        Ue = { main: 1, privateLocked: 2, privateUnlocked: 3, privatePassword: 4, error: 7, contentRating: 9 },
        ze = { like: { will: "willLikeVideo", did: "didLikeVideo" }, unlike: { will: "willUnlikeVideo", did: "didUnlikeVideo" }, addToWatchLater: { will: "willAddToWatchLater", did: "didAddToWatchLater" }, removeFromWatchLater: { will: "willRemoveFromWatchLater", did: "didRemoveFromWatchLater" }, purchase: { will: "willOpenVodPurchaseForm", did: "didOpenVodPurchaseForm" }, shareOverlay: { will: "willOpenShareOverlay", did: "didOpenShareOverlay" }, loginForm: { will: "willOpenLoginForm", did: "didOpenLoginForm" }, collectionsOverlay: { will: "willOpenCollectionsOverlay", did: "didOpenCollectionsOverlay" }, showOutro: { will: "willShowOutro", did: "didShowOutro" }, playLog: { will: "willSendPlayLog", did: "didSendPlayLog" } },
        We = { "application/vnd.apple.mpegurl": "hls", "application/vnd.vimeo.dash+json": "dash", "video/mp4": "progressive", "video/webm": "progressive", "video/x-flv": "progressive" },
        $e = { h264: "video/mp4", hls: "application/vnd.apple.mpegurl", dash: "application/vnd.vimeo.dash+json", vp6: "video/x-flv", vp8: "video/webm", webm: "video/webm", hds: "application/f4m" },
        Ge = { HTMLScanner: "html", MediaSourceScanner: "html", SWFScanner: "flash" },
        Xe = { seek: 1, changeVolume: 3, showOverlay: 5, openPopup: 6, reset: 7, changeLoop: 8, changeQuality: 9, openVimeo: 10, changeColor: 11, disableHd: 14, disableVolume: 15, enableVolume: 16, disableCaptions: 17, enableCaptions: 18, forceFullscreen: 19, turnCaptionsOn: 20, turnCaptionsOff: 21, toggleNativeControls: 22, showOutro: 23, hideOutro: 24, setEffect: 25, activatePictureInPicture: 26, deactivatePictureInPicture: 27 },
        Ke = { apiError: 48, error: 49, playInitiated: 50, paused: 51, played: 52, loadProgress: 53, playProgress: 54, seeked: 55, ended: 56, bufferStarted: 57, bufferEnded: 58, volumeChanged: 59, qualityChanged: 60, targetTimeReached: 61, cueChanged: 62, streamChanged: 63, ranIntoBuffer: 64, playbackResumed: 65, adaptiveBandwidth: 66, resize: 67, streamTargetChange: 68, forcedQuality: 69, cuepoint: 70, fullscreenButtonPressed: 100, pauseButtonPressed: 101, playButtonPressed: 102, hdButtonPressed: 103, ccButtonPressed: 104, scrubbingStarted: 105, scrubbingEnded: 106, volumeScrubbingStarted: 107, volumeScrubbingEnded: 108, controlBarVisibilityChanged: 109, sidedockVisibilityChanged: 110, menuVisibilityChanged: 111, captionsChanged: 112, cuePointAdded: 113, cuePointRemoved: 114, badgePressed: 140, willEnterFullscreen: 150, didEnterFullscreen: 151, willExitFullscreen: 152, didExitFullscreen: 153, likeButtonPressed: 200, watchLaterButtonPressed: 201, shareButtonPressed: 202, embedButtonPressed: 203, vodButtonPressed: 205, collectionsButtonPressed: 206, overlayOpened: 250, overlayClosed: 251, overlayCleared: 252, overlayCloseButtonPressed: 253, facebookButtonPressed: 254, twitterButtonPressed: 255, tumblrButtonPressed: 256, emailButtonPressed: 257, embedCodeCopied: 258, popupOpened: 259, effectButtonPressed: 260, debugButtonPressed: 261, emailCaptureSubmitted: 262, popupClosed: 263, mousedOut: 300, mousedOver: 301, mouseTimeout: 302, liked: 303, unliked: 304, addedToWatchLater: 305, removedFromWatchLater: 306, userLogIn: 307, userLoggedIn: 308, userLoggedOut: 309, loginFailure: 310, colorChanged: 311, configChanged: 312, passwordUnlocked: 313, privateUnlocked: 314, enteredTinyMode: 315, enteredMiniMode: 320, enteredNormalMode: 316, signatureExpired: 317, requestConfigReloaded: 318, embedSettingChanged: 319, outroDisplayed: 321, outroHidden: 322, outroVideoPressed: 323, becameActive: 324, becameInactive: 325, tipped: 326, emailCaptureSuccess: 327, loadVideo: 328, titleModuleReady: 350, sidedockModuleReady: 351, controlBarModuleReady: 352, videoModuleReady: 353, overlayModuleReady: 354, notificationModuleReady: 355, statsModuleReady: 356, apiModuleReady: 357, analyticsModuleReady: 358, ready: 359, notificationHidden: 400, alertVisibilityChanged: 401, airPlayAvailable: 500, airPlayNotAvailable: 501, airPlayActivated: 502, airPlayDeactivated: 503, airPlayButtonPressed: 504, pictureInPictureAvailable: 505, pictureInPictureNotAvailable: 506, pictureInPictureActivated: 507, pictureInPictureDeactivated: 508 },
        Ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Qe = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
        Je = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t } }(),
        Ze = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0); } catch (e) { r = !0, o = e } finally {
                    try {!i && s.return && s.return() } finally {
                        if (r) throw o } }
                return n }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
        et = Object.freeze({ formatVodLabel: _, getDisplayPrice: y, isAvailableInCountry: b, translateFromRequest: w }),
        tt = t(function(e) {! function() {
                function t(e, t, n) {
                    var i = "blur" == t || "focus" == t;
                    e.element.addEventListener(t, n, i) }

                function n(e) { e.preventDefault(), e.stopPropagation() }

                function i(e) {
                    return l ? l : l = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : u.matchesSelector }

                function r(e, t, n) {
                    if ("_root" == t) return n;
                    if (e !== n) return i(e).call(e, t) ? e : e.parentNode ? (d++, r(e.parentNode, t, n)) : void 0 }

                function o(e, t, n, i) { h[e.id] || (h[e.id] = {}), h[e.id][t] || (h[e.id][t] = {}), h[e.id][t][n] || (h[e.id][t][n] = []), h[e.id][t][n].push(i) }

                function a(e, t, n, i) {
                    if (h[e.id])
                        if (t) {
                            if (!i && !n) return void(h[e.id][t] = {});
                            if (!i) return void delete h[e.id][t][n];
                            if (h[e.id][t][n])
                                for (var r = 0; r < h[e.id][t][n].length; r++)
                                    if (h[e.id][t][n][r] === i) { h[e.id][t][n].splice(r, 1);
                                        break } } else
                            for (var o in h[e.id]) h[e.id].hasOwnProperty(o) && (h[e.id][o] = {}) }

                function s(e, t, n) {
                    if (h[e][n]) {
                        var i, o, a = t.target || t.srcElement,
                            s = {},
                            c = 0,
                            l = 0;
                        d = 0;
                        for (i in h[e][n]) h[e][n].hasOwnProperty(i) && (o = r(a, i, p[e].element), o && u.matchesEvent(n, p[e].element, o, "_root" == i, t) && (d++, h[e][n][i].match = o, s[d] = h[e][n][i]));
                        for (t.stopPropagation = function() { t.cancelBubble = !0 }, c = 0; c <= d; c++)
                            if (s[c])
                                for (l = 0; l < s[c].length; l++) {
                                    if (s[c][l].call(s[c].match, t) === !1) return void u.cancel(t);
                                    if (t.cancelBubble) return } } }

                function c(e, t, n, i) {
                    function r(e) {
                        return function(t) { s(l, t, e) } }
                    if (this.element) { e instanceof Array || (e = [e]), n || "function" != typeof t || (n = t, t = "_root");
                        var c, l = this.id;
                        for (c = 0; c < e.length; c++) i ? a(this, e[c], t, n) : (h[l] && h[l][e[c]] || u.addEvent(this, e[c], r(e[c])), o(this, e[c], t, n));
                        return this } }

                function u(e, t) {
                    if (!(this instanceof u)) {
                        for (var n in p)
                            if (p[n].element === e) return p[n];
                        return f++, p[f] = new u(e, f), p[f] }
                    this.element = e, this.id = t }
                var l, d = 0,
                    f = 0,
                    h = {},
                    p = {};
                u.prototype.on = function(e, t, n) {
                    return c.call(this, e, t, n) }, u.prototype.off = function(e, t, n) {
                    return c.call(this, e, t, n, !0) }, u.matchesSelector = function() {}, u.cancel = n, u.addEvent = t, u.matchesEvent = function() {
                    return !0 }, "undefined" != typeof e && e.exports && (e.exports = u), window.Gator = u }() }),
        nt = e(tt),
        it = nt.addEvent,
        rt = "undefined" == typeof window.PointerEvent && "undefined" != typeof window.MSPointerEvent,
        ot = { pointerdown: "MSPointerDown", pointerup: "MSPointerUp", pointercancel: "MSPointerCancel", pointermove: "MSPointerMove", pointerenter: "MSPointerEnter", pointerleave: "MSPointerLeave", pointerover: "MSPointerOver", pointerout: "MSPointerOut" },
        at = "onmspointerenter" in document,
        st = "onmspointerleave" in document;
    nt.addEvent = function(e, t, n) { rt && ot[t] && (t = ot[t]), "transitionend" === t && (it(e, "webkitTransitionEnd", n), it(e, "otransitionend", n)), "mouseenter" === t && (t = "mouseover"), "mouseleave" === t && (t = "mouseout"), "MSPointerEnter" !== t || at || (t = "MSPointerOver"), "MSPointerLeave" !== t || st || (t = "MSPointerOut"), it(e, t, n) }, nt.matchesEvent = function(e, t, n, i, r) {
        return !("mouseenter" === e || "mouseleave" === e || !at && "MSPointerEnter" === e || !st && "MSPointerLeave" === e) || k(t, n, i, r) };
    var ct = {},
        ut = "en",
        lt = t(function(e) {
            ! function() {
                var t = {};
                t.templates = {}, t.render = function(e, n) {
                    return t.templates[e] ? t.templates[e].call(t, n || {}) : "" }, t.map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" }, t.escape = function(e) {
                    return e.replace(/[&<>"'\/]/g, function(e) {
                        return t.map[e] }) }, t.helpers = {}, t.templates.stream_studder = function(e) {
                    var t = "<h3> ";
                    return t += this.render("icon_warning") || "", t += ' <span>Having issues? <button class="player-alert-button-link button-link" aria-label="Switch to auto" data-alert-autofocus data-close data-context="suggestion">Switch to Auto</button> for smoother streaming.</span></h3>' }, t.templates.threesixty_support_alert = function(e) {
                    var t = "<h3> ";
                    return t += this.render("icon_warning") || "", t += ' <span>Looking for 360? See <a href="' + e.faqLink + '">supported browsers</a> for the full experience.<span></h3>' }, t.templates.buffer_pattern = function(e) {
                    var t = '<pattern id="' + e.id + '" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern>';
                    return t }, t.templates.compass = function(e) {
                    var t = '<svg viewBox="0 0 36 36"> ';
                    return t += 1 == e.version ? ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-45, 18, 18)" d="M0,0 m18,18 l12,0 A12,12 0 0,0 18,6 z"/><circle fill="none" class="compass-ring" stoke-width="3" r="14.5" cx="18" cy="18"></circle><polygon class="compass-dimple" points="16,3.5 18,1 20,3.5"/> ' : ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-30, 18, 18)" d="M0,0 m18,18 l13,0 A13,13 0 0,0 11.500000000000004,6.741669750802297 z"/><circle class="compass-centercircle" r="3" cx="18" cy="18"></circle><path class="compass-line" stroke-linecap="round" d="M0,18 L36,18 z" /> ', t += "</svg>" }, t.templates.content_rating = function(e) {
                    var t = '<div class="content-rating"><h1>' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + "</p><p>" + e.strings.update + "</p><button>" + e.strings.watch + '</button><div class="logo">' + e.logo + "</div></div>";
                    return t }, t.templates.controlbar = function(e) {
                    var t = '<button class="play rounded-box state-' + e.playState + '" title="' + e.strings.play + '" data-title-play="' + e.strings.play + '" data-title-pause="' + e.strings.pause + '" aria-label="' + e.strings.play + '"><div class="tiny-bars"><svg width="100%" height="100%" viewBox="0 0 65 40"><defs><clipPath id="rounded-border"><rect height="100%" width="100%" x="0" y="0" rx="5"/></clipPath> ';
                    return t += this.render("buffer_pattern", {
                        id: "tiny-buffer"
                    }) || "", t += ' </defs><g clip-path="url(#rounded-border)"><rect class="buffer hidden" height="3" width="110%" x="0" y="37" fill="url(#tiny-buffer)"/><rect class="loaded" height="3" width="0" x="0" y="37" fill="#666"/><rect class="played fill" height="3" width="0" x="0" y="37"/></g></svg></div><div class="play-icon">', t += this.render("icon_play") || "", t += '</div><div class="pause-icon">', t += this.render("icon_pause") || "", t += '</div></button><div class="play-bar rounded-box"><div class="progress"><div class="buffer hidden"><svg width="110%" tabindex="-1"><defs> ', t += this.render("buffer_pattern", { id: "buffer" }) || "", t += ' </defs><rect fill="url(#buffer)" width="100%" height="100%" /></svg></div><div class="loaded', e.rawDuration < 60 && (t += " short-video"), t += '" role="progressbar" aria-label="' + e.strings.loadedBar + '" aria-valuemin="0" aria-valuemax="' + e.rawDuration + '" aria-valuenow="0"></div><div class="played" role="progressbar" aria-label="' + e.strings.playedBar + '" aria-valuemin="0" aria-valuemax="' + e.rawDuration + '" aria-valuenow="0"></div><div class="cuepoints"></div><div class="thumb-preview invisible hidden" role="presentation" aria-hidden="true"><div class="thumb"></div></div><div class="ghost-timecode invisible hidden" role="presentation" aria-hidden="true"><div class="box">00:00</div></div><div class="timecode" role="presentation" aria-hidden="true"><div class="box">' + e.duration + "</div></div></div> ", e.volume && (t += ' <div class="volume" role="slider" aria-label="' + e.strings.volume + '" aria-valuemin="0" aria-valuemax="1" tabindex="0"><div></div><div></div><div></div><div></div><div></div></div> '), e.ccButton && (t += ' <button class="toggle cc ' + (e.ccOn ? "on" : "off") + '" title="' + e.strings.captions + '"> ', t += this.render("icon_cc") || "", t += " </button> "), e.hdButton && (t += ' <button class="hd" title="' + e.strings.hd + '" aria-label="HD"> ', t += this.render("icon_hd") || "", t += " </button> "), t += ' <button class="hidden toggle effect off" title="' + e.strings.effect + '"><svg viewBox="0 0 210 200" version="1.1"><g fill="none" fill-rule="evenodd"><circle class="red" fill="#f00" cx="63.5" cy="136.5" r="63.5"/><circle class="blue" fill="#2653ff" cx="146.5" cy="136.5" r="63.5"/><circle class="green" fill="#0f0" cx="104.5" cy="63.5" r="63.5"/></g></svg></button> ', e.airplayButton && (t += ' <button class="toggle airplay off hidden" title="' + e.strings.airPlay + '" data-title-off="' + e.strings.airPlay + '" data-title-on="' + e.strings.airPlayOff + '" hidden> ', t += this.render("icon_airplay") || "", t += " </button> "), t += ' <button class="pip hidden enter" title="' + e.strings.pipEnter + '" data-title-enter="' + e.strings.pipEnter + '" data-title-return="' + e.strings.pipReturn + '" hidden> ', t += this.render("icon_pip") || "", t += ' </button><button class="fullscreen', e.fullscreenButton || (t += " only-in-fullscreen"), t += '" title="' + e.strings.enterFullscreen + '" data-title-fullscreen="' + e.strings.enterFullscreen + '" data-title-unfullscreen="' + e.strings.exitFullscreen + '" aria-label="' + e.strings.fullscreen + '"><div class="fullscreen-icon">', t += this.render("icon_fullscreen") || "", t += '</div><div class="unfullscreen-icon">', t += this.render("icon_unfullscreen") || "", t += "</div></button> ", e.vimeoLogo.show && (t += ' <div class="logo"> ', e.vimeoLogo.showLink && (t += ' <a href="' + e.vimeoLogo.url + '"', e.targetBlank && (t += ' target="_blank"'), t += ' title="' + e.strings.watchOnVimeo + '" aria-label="' + e.strings.watchOnVimeo + '" data-clip-link> '), t += this.render("logo") || "", e.vimeoLogo.showLink && (t += " </a> "), t += " </div> "), t += "</div> ", e.customLogo && (t += ' <div class="custom-logo', e.customLogo.sticky && (t += " sticky"), t += '" style="width:' + e.customLogo.width + "px;height:" + e.customLogo.height + 'px"> ', e.customLogo.showLink && (t += '<a href="' + e.customLogo.url + '" target="_blank">'), t += ' <img src="' + e.customLogo.img + '" alt=""> ', e.customLogo.showLink && (t += "</a>"), t += " </div>"), t += ""
                }, t.templates.controlbar_trailer = function(e) {
                    var t = '<button class="play trailer rounded-box" title="' + e.strings.playTrailer + '" aria-label="' + e.strings.playTrailer + '"><div><span class="play-icon">';
                    return t += this.render("icon_play") || "", t += "</span><p>" + e.text + "</p></div></button>", e.vimeoLogo.show && (t += ' <div class="logo"> ', e.vimeoLogo.showLink && (t += ' <a href="' + e.vimeoLogo.url + '"', e.targetBlank && (t += ' target="_blank"'), t += ' title="' + e.strings.watchOnVimeo + '" aria-label="' + e.strings.watchOnVimeo + '" data-clip-link> '), t += this.render("logo") || "", e.vimeoLogo.showLink && (t += " </a> "), t += " </div>"), t += "", e.customLogo && (t += ' <div class="custom-logo', e.customLogo.sticky && (t += " sticky"), t += '" style="width:' + e.customLogo.width + "px;height:" + e.customLogo.height + 'px"> ', e.customLogo.showLink && (t += '<a href="' + e.customLogo.url + '" target="_blank">'), t += ' <img src="' + e.customLogo.img + '" alt=""> ', e.customLogo.showLink && (t += "</a>"), t += " </div>"), t += "" }, t.templates.error = function(e) {
                    var t = '<div class="window-wrapper error"><h1>' + e.title + "</h1> ";
                    return e.message && (t += " <p>" + e.message + "</p> "), t += "</div>" }, t.templates.help = function(e) {
                    var t = '<div class="window-wrapper help"><h1>' + e.strings.title + '</h1><dl><div class="volume-up secondary"><dt class="arrow">↑</dt><dd>' + e.strings.volumeUp + '</dd></div><div class="volume-down secondary"><dt class="arrow">↓</dt><dd>' + e.strings.volumeDown + '</dd></div><div class="scrub-forward secondary"><dt class="arrow">→</dt><dd>' + e.strings.scrubForward + '</dd></div><div class="scrub-backwards secondary"><dt class="arrow">←</dt><dd>' + e.strings.scrubBackwards + '</dd></div><div class="like"><dt>L</dt><dd>' + e.strings.like + '</dd></div><div class="share"><dt>S</dt><dd>' + e.strings.share + '</dd></div><div class="watch-later"><dt>W</dt><dd>' + e.strings.watchLater + '</dd></div><div class="toggle-captions"><dt>C</dt><dd>' + e.strings.captions + '</dd></div><div class="toggle-hd"><dt>H</dt><dd>' + e.strings.hd + '</dd></div><div class="fullscreen"><dt>F</dt><dd>' + e.strings.fullscreen + "</dd></div> ";
                    return e.onSite || (t += '<div class="view-on-vimeo"><dt>V</dt><dd>' + e.strings.viewOnVimeo + "</dd></div>"), t += " </dl></div>" }, t.templates.icon_airplay = function(e) {
                    var t = '<svg class="airplay-icon" viewBox="0 0 44 36" tabindex="-1"><polygon class="fill" points="0,0 44,0 44,27 34.5,27 31,23 40,23 40,4 4,4 4,23 13,23 9.5,27 0,27"/><polygon class="fill" points="7,36 22,18 37,36"/></svg>';
                    return t }, t.templates.icon_back = function(e) {
                    var t = '<svg class="icon-back" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M0 32l32 32v-20h32l0-24h-32v-20z"/></svg>';
                    return t }, t.templates.icon_broken_heart = function(e) {
                    var t = '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>';
                    return t }, t.templates.icon_cc = function(e) {
                    var t = '<svg viewBox="0 0 20 14" tabindex="-1"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M17 0h-14c-1.657 0-3 1.343-3 3v8c0 1.656 1.343 3 3 3h14c1.657 0 3-1.344 3-3v-8c0-1.657-1.343-3-3-3zm-7.271 8.282c-.145.923-.516 1.686-1.105 2.268-.597.591-1.369.89-2.294.89-1.138 0-2.049-.402-2.706-1.195-.647-.786-.975-1.866-.975-3.215 0-1.458.372-2.603 1.105-3.403.65-.708 1.487-1.067 2.487-1.067 1.33 0 2.321.482 2.947 1.435.34.53.526 1.072.553 1.611l.013.236h-1.984l-.044-.169c-.092-.355-.207-.622-.343-.793-.239-.298-.591-.443-1.076-.443-.483 0-.856.209-1.14.641-.298.455-.449 1.12-.449 1.977 0 .851.156 1.49.466 1.898.298.395.666.588 1.122.588.469 0 .814-.16 1.058-.491.138-.183.255-.472.351-.856l.042-.17h2.013l-.041.258zm7.582 0c-.145.923-.516 1.686-1.104 2.268-.598.591-1.369.89-2.294.89-1.139 0-2.049-.402-2.707-1.195-.646-.785-.975-1.865-.975-3.214 0-1.458.372-2.603 1.106-3.403.649-.708 1.485-1.067 2.486-1.067 1.33 0 2.32.482 2.946 1.435.34.53.526 1.072.554 1.611l.012.236h-1.9829999999999999l-.043-.169c-.092-.355-.208-.623-.344-.793-.238-.298-.591-.443-1.076-.443-.483 0-.856.209-1.139.641-.299.455-.45 1.12-.45 1.977 0 .851.157 1.49.467 1.898.299.395.666.588 1.121.588.469 0 .814-.16 1.058-.491.138-.183.256-.472.352-.856l.042-.17h2.012l-.041.257z"/></svg>';
                    return t }, t.templates.icon_clock = function(e) {
                    var t = '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>';
                    return t }, t.templates.icon_close = function(e) {
                    var t = '<svg class="icon-close" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M60 48.796l-16.812-16.796 16.812-16.796-11.204-11.204-16.796 16.804-16.804-16.804-11.196 11.204 16.796 16.796-16.796 16.796 11.196 11.204 16.804-16.804 16.796 16.804z"/></svg>';
                    return t }, t.templates.icon_collections = function(e) {
                    var t = '<svg class="collections-icon" viewBox="0 0 24 24" tabindex="-1"><path class="fill" d="M24 12c0-.3-.1-.6-.4-.8l-2.7-2.3 2.4-1c.4-.1.7-.5.7-.9 0-.3-.1-.6-.4-.8l-7-6c-.1-.1-.4-.2-.6-.2-.1 0-.3 0-.4.1l-15 6c-.3.1-.6.5-.6.9 0 .3.1.6.4.8l2.7 2.3-2.4 1c-.4.1-.7.5-.7.9 0 .3.1.6.4.8l2.7 2.3-2.4 1c-.4.1-.7.5-.7.9 0 .3.1.6.4.8l7 6c.1.1.4.2.6.2.1 0 .3 0 .4-.1l15-6c.4-.1.6-.5.6-.9 0-.3-.1-.6-.4-.8l-2.7-2.3 2.4-1c.4-.1.7-.5.7-.9zm-8.2-9.8l5.3 4.5-12.9 5.1-5.3-4.5 12.9-5.1zm5.3 14.5L8.2 21.8l-5.3-4.5 1.9-.8 2.6 2.2c.1.2.4.3.6.3.1 0 .3 0 .4-.1l10.5-4.2 2.2 2zm-12.9.1l-5.3-4.5 1.9-.8 2.6 2.2c.1.2.4.3.6.3.1 0 .3 0 .4-.1l10.5-4.2 2.3 1.9-13 5.2z"/></svg>';
                    return t }, t.templates.icon_embed = function(e) {
                    var t = '<svg class="embed-icon" viewBox="0 0 55 48" preserveAspectRatio="xMidYMid" tabindex="-1"><polygon class="fill" points="16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"/><polygon class="fill" points="42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"/><polygon class="fill" points="24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"/></svg>';
                    return t }, t.templates.icon_facebook = function(e) {
                    var t = '<svg class="facebook-icon" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"/></svg>';
                    return t }, t.templates.icon_fullscreen = function(e) {
                    var t = '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid" tabindex="-1"><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(270)" /></svg>';
                    return t }, t.templates.icon_hd = function(e) {
                    var t = '<svg viewBox="';
                    return t += e.notification ? "-1 -1 104.717 49.035" : "0 0 102.717 47.035", t += '" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="', t += e.stroke ? "stroke" : "fill", t += '" d="M100.014 6.758c-1.352-2.162-3.244-3.781-5.676-5.134-2.434-1.083-5.947-1.624-10.274-1.624h-21.625l-7.297 47.035h21.895c2.434 0 5.676-.274 8.92-1.352 2.434-.542 4.596-1.627 7.03-3.785 2.161-1.621 4.324-4.055 5.675-7.028 1.621-2.701 2.973-6.757 3.786-11.623.269-3.244.269-6.487.269-9.19-.54-2.704-1.352-5.138-2.703-7.299zm-12.433 16.76c-.541 3.783-1.352 6.485-2.165 8.109-1.08 1.893-2.162 2.703-3.782 3.514-1.083.541-3.515 1.082-6.217 1.082h-3.517l3.517-25.41h3.782c3.514 0 6.217.811 7.568 2.703 1.083 1.625 1.352 5.135.814 10.002z"/><path class="', t += e.stroke ? "stroke" : "fill", t += '" d="M37.572,0L35.14,16.491H19.463L21.895,0H7.027L0,47.035h14.866l2.703-18.922h15.677l-2.971,18.922h14.866L52.439,0H37.572z"/></svg>' }, t.templates.icon_heart = function(e) {
                    var t = '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>';
                    return t }, t.templates.icon_lock = function(e) {
                    var t = '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>';
                    return t }, t.templates.icon_mail = function(e) {
                    var t = '<svg class="mail-icon" viewBox="0 0 72 72" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"/><path class="fill" d="M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"/><path class="fill" d="M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"/><path class="fill" d="M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"/></svg>';
                    return t }, t.templates.icon_pause = function(e) {
                    var t = '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1"><rect class="fill" width="6" height="20" x="0" y="0" /><rect class="fill" width="6" height="20" x="12" y="0" /></svg>';
                    return t }, t.templates.icon_play = function(e) {
                    var t = '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1"><polygon class="fill" points="1,0 20,10 1,20" /></svg>';
                    return t }, t.templates.icon_share = function(e) {
                    var t = '<svg class="share-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1"><polygon class="fill" points="20,0 0,12 5,15 17,4 7,16 7,19 9,17 14,20"/></svg>';
                    return t }, t.templates.icon_tumblr = function(e) {
                    var t = '<svg class="tumblr-icon" viewBox="0 0 12 20" tabindex="-1"><path class="fill" d="M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"/></svg>';
                    return t }, t.templates.icon_twitter = function(e) {
                    var t = '<svg class="twitter-icon" viewBox="0 0 274 223" preserveAspectRatio="xMidYMid" tabindex="-1"><path class="fill" d="M85.98,222 C54.305,222 24.822,212.715 0,196.801 C4.388,197.319 8.853,197.584 13.38,197.584 C39.658,197.584 63.843,188.617 83.039,173.574 C58.495,173.121 37.781,156.905 30.644,134.621 C34.068,135.276 37.582,135.627 41.196,135.627 C46.312,135.627 51.267,134.942 55.974,133.66 C30.314,128.508 10.981,105.838 10.981,78.662 C10.981,78.426 10.981,78.191 10.985,77.957 C18.548,82.158 27.196,84.681 36.391,84.972 C21.341,74.914 11.438,57.746 11.438,38.287 C11.438,28.008 14.204,18.373 19.032,10.089 C46.696,44.023 88.025,66.353 134.641,68.692 C133.685,64.587 133.188,60.306 133.188,55.91 C133.188,24.935 158.302,-0.178 189.279,-0.178 C205.411,-0.178 219.988,6.634 230.22,17.535 C242.996,15.019 255,10.351 265.837,3.924 C261.649,17.021 252.756,28.013 241.175,34.955 C252.521,33.599 263.331,30.584 273.39,26.123 C265.87,37.371 256.36,47.25 245.402,55.158 C245.51,57.563 245.564,59.982 245.564,62.414 C245.564,136.533 189.148,222 85.98,222"/></svg>';
                    return t }, t.templates.icon_unfullscreen = function(e) {
                    var t = '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid" tabindex="-1"><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) "/><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(270)" /></svg>';
                    return t }, t.templates.icon_vod = function(e) {
                    var t = '<svg class="vod-icon" viewBox="0 0 21 23" tabindex="-1"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>';
                    return t }, t.templates.icon_check = function(e) {
                    var t = '<svg class="check-icon" viewBox="0 0 12 12"><path class="fill" d="M10.9 2.9l-.7-.7c-.2-.2-.6-.2-.8-.1L5 6.6 2.6 4.1c-.2-.1-.6-.1-.7 0l-.8.8c-.1.1-.1.5 0 .7l3.1 3.1c.4.4 1 .4 1.4 0l5.1-5.1c.3-.2.3-.6.2-.7z"/></svg>';
                    return t }, t.templates.icon_pip = function(e) {
                    var t = '<svg class="pip-icon" viewBox="0 0 16 12"><polygon class="fill" points="6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"/><rect class="fill" x="7" y="7" width="9" height="5"/><polyline class="fill enter" transform="translate(4, 4) rotate(180) translate(-4, -4)" points="5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"/><polyline class="fill return" points="5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"/></svg>';
                    return t }, t.templates.icon_vod_download = function(e) {
                    var t = '<svg class="vod-download-icon" viewBox="0 0 32 32" tabindex="-1"><path class="fill" d="M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z"/><path class="fill" d="M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z"/></svg>';
                    return t }, t.templates.icon_vod_rent = function(e) {
                    var t = '<svg class="vod-rent-icon" viewBox="0 0 32 32" tabindex="-1"><path class="fill" d="M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z"/><path class="fill" d="M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z"/></svg>';
                    return t }, t.templates.icon_vod_subscribe = function(e) {
                    var t = '<svg class="vod-subscribe-icon" viewBox="0 0 32 32" tabindex="-1"><path class="fill" d="M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z"/><path class="fill" d="M13 20v-8l8 4"/></svg>';
                    return t }, t.templates.icon_warning = function(e) {
                    var t = '<svg class="warning-icon" tabindex="-1" width="36" height="32.326" viewBox="287.915 380.297 36 32.326"><path d="M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"/></svg>';
                    return t }, t.templates.logo = function(e) {
                    var t = '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" aria-label="Vimeo" tabindex="-1"><title>Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>';
                    return t }, t.templates.outer = function(e) {
                    var t = '<div class="video-wrapper"><div class="video"><div class="telecine"></div></div></div><div class="target"></div><div class="captions hidden with-controls" hidden aria-live="assertive"><span></span></div><div class="outro-wrapper hidden" hidden><div class="outro" role="dialog" aria-live="assertive"></div></div><div class="controls-wrapper"><div class="title" role="contentinfo"></div><div class="controls"></div><div class="sidedock hidden" role="toolbar" hidden></div></div><div class="overlay-wrapper hidden" hidden><div class="overlay-cell"><div class="overlay" role="dialog" aria-live="assertive"></div><div class="overlay-icon-wrapper hidden"><div class="overlay-icon"></div></div><div class="overlay-logo logo"></div></div><nav><button class="back cloaked" aria-label="' + e.strings.back + '">';
                    return t += this.render("icon_back") || "", t += '</button><button class="close" aria-label="' + e.strings.close + '">', t += this.render("icon_close") || "", t += '</button></nav></div><div class="notification-wrapper hidden" hidden><div class="notification-cell"><div class="notification" role="dialog" aria-live="assertive"></div></div></div><div class="stats-debug rounded-box hidden" aria-hidden="true" hidden></div>' }, t.templates.outro_image = function(e) {
                    var t = "<div> ";
                    return e.url && (t += '<a href="' + e.url + '" target="_blank">'), t += '<img src="' + e.svg_url + '" class="outro-image">', e.url && (t += "</a>"), t += "</div>" }, t.templates.outro_link = function(e) {
                    var t = '<h1><a href="' + e.url + '" target="_blank">' + (e.text ? e.text : e.url) + "</a></h1>";
                    return t }, t.templates.outro_text = function(e) {
                    var t = '<div class="text-wrapper"><div class="text">' + e.text + "</div></div>";
                    return t }, t.templates.outro_videos = function(e) {
                    for (var t = "", n = 0, i = e.contexts.length; n < i; n++) { t += "";
                        var r = e.contexts[n];
                        t += '<div class="video-section', r.promoted && (t += " promoted"), t += '" data-videos="' + r.videos.length + '"><div><h1>' + r.context + '</h1><ul class="videos"> ';
                        for (var o = 0, a = r.videos.length; o < a; o++) t += ' <li><a href="' + r.videos[o].url + '"', e.target && (t += ' target="_blank"'), t += " title=\"'", t += this.escape(r.videos[o].title) || "", t += "'", r.videos[o].owner.id !== e.owner && (t += " from ", t += this.escape(r.videos[o].owner.name) || ""), t += '" data-video-id="' + r.videos[o].id + '"><div class="img-wrapper"><img src="' + r.videos[o].thumbnail + '" alt="" width="295" height="166"></div><div class="header-wrapper"><header><h1>', t += this.escape(r.videos[o].title) || "", t += "</h1> ", r.videos[o].owner.id !== e.owner && (t += " <h2><span>from</span>&nbsp;", t += this.escape(r.videos[o].owner.name) || "", t += "</h2> "), t += " </header></div></a> ";
                        t += " </ul></div></div>" }
                    return t += "" }, t.templates.outro_vod = function(e) {
                    var t = '<div class="vod-wrapper"><h1 class="vod-header"><a href="' + e.url + '" target="_blank">';
                    t += this.escape(e.title) || "", t += "</a></h1> ";
                    var n = e.countries,
                        i = e.country;
                    if (this.helpers.isAvailableInCountry(n, i))
                        if (e.purchased) t += ' <a class="vod-watch-button" role="button" href="' + e.url + '" target="_blank">' + e.strings.watch + "</a> ";
                        else {
                            if (!e.isComingSoon) { t += ' <ul class="vod"> ';
                                for (var r = 0, o = e.buttons.length; r < o; r++) { t += ' <li><a class="vod-button ' + e.buttons[r].type + '" role="button" href="' + e.url + "#buy=" + e.buttons[r].product_id + '" target="_blank" data-product-id="' + e.buttons[r].product_id + '" role="button"><div class="icon"> ', t += "buy" === e.buttons[r].type ? this.render("icon_vod_download") || "" : "rent" === e.buttons[r].type ? this.render("icon_vod_rent") || "" : "subscribe" === e.buttons[r].type ? this.render("icon_vod_subscribe") || "" : this.render("icon_vod") || "", t += " </div> ";
                                    var a = e.currency,
                                        s = e.buttons[r];
                                    t += " <p>" + this.helpers.formatVodLabel(e.translationMap, "outro_string", a, s) + "</p></a></li> " }
                                t += " </ul> " }(e.isPreorder || e.isComingSoon) && (t += " <p>" + e.strings.preRelease + "</p> ") }
                    return t += "</div>" }, t.templates.overlay_email_capture = function(e) {
                    var t = '<div class="window-wrapper email-capture form"><div class="email-capture-form"><h1>' + e.text + '</h1><p class="subtitle">' + e.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="validation-bubble hidden"><div class="validation-bubble-arrow-clipper"><div class="validation-bubble-arrow"></div></div><div class="validation-bubble-message"></div></div><input type="email" name="email" placeholder="' + e.strings.email + '" aria-label="' + e.strings.email + '" required aria-required="true"><input type="text" name="name" placeholder="' + e.strings.fullName + '" aria-label="' + e.strings.fullName + '" maxlength="180"><input type="hidden" name="referrer" value="' + e.referrer + '"><input type="hidden" name="signature" value=""><input type="hidden" name="time" value=""><input type="hidden" name="expires" value=""><input type="submit" value="' + e.strings.submit + '"></form></div><div class="email-capture-confirm hidden"><div class="check-icon-wrapper">';
                    return t += this.render("icon_check") || "", t += "</div><h1>" + e.confirmation + "</h1></div></div>" }, t.templates.password = function(e) {
                    var t = '<div class="window-wrapper password form"><h1>' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="validation-bubble hidden"><div class="validation-bubble-arrow-clipper"><div class="validation-bubble-arrow"></div></div><div class="validation-bubble-message"></div></div><input type="password" name="password" placeholder="' + e.strings.password + '" required aria-required="true" aria-label="' + e.strings.password + '"><input type="submit" value="' + e.strings.watch + '"></form></div>';
                    return t }, t.templates.private_locked = function(e) {
                    var t = '<div class="window-wrapper login"><h1>' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><a href="' + e.action + '" class="popup" target="_blank" role="button" aria-label="' + e.strings.logInLabel + '">' + e.strings.logIn + "</a></div>";
                    return t }, t.templates.private_unlocked = function(e) {
                    var t = '<div class="window-wrapper form unlocked"><h1>' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + "</p><button>" + e.strings.watch + "</button></div>";
                    return t }, t.templates.share = function(e) {
                    var t = '<div class="share-wrapper"><section class="share-screen' + (e.embedOnly ? " cloaked" : "") + '"><h1>' + e.strings.share + '</h1><ul class="buttons"><li><a href="' + e.playerShareUrl + '/facebook" target="_blank" class="facebook" title="' + e.strings.facebook + '" role="button" aria-label="' + e.strings.facebook + '">';
                    return t += this.render("icon_facebook") || "", t += '</a><li><a href="' + e.playerShareUrl + '/twitter" target="_blank" class="twitter" title="' + e.strings.twitter + '" role="button" aria-label="' + e.strings.twitter + '">', t += this.render("icon_twitter") || "", t += '</a><li><a href="' + e.playerShareUrl + '/tumblr" target="_blank" class="tumblr" title="' + e.strings.tumblr + '" role="button" aria-label="' + e.strings.tumblr + '">', t += this.render("icon_tumblr") || "", t += "</a> ", e.url && (t += ' <li><a href="mailto:?subject=', t += encodeURIComponent(e.strings.emailSubject) || "", t += "&amp;body=", t += encodeURIComponent(e.strings.emailBody) || "", t += '" class="email" title="' + e.strings.email + '" role="button" aria-label="' + e.strings.email + '">', t += this.render("icon_mail") || "", t += "</a> "), t += " </ul> ", e.embed && (t += ' <ul class="buttons"><li><a href="' + e.url + '#share" target="_blank" class="embed" title="' + e.strings.embedCode + '" role="button" aria-label="' + e.strings.embedCode + '">',
                        t += this.render("icon_embed") || "", t += "</a></li></ul> "), e.url && (t += ' <p class="footnote share"><a class="clip_url" href="' + e.shareUrl + '" target="_blank">' + e.shareUrl + "</a></p> "), t += " </section> ", e.embed && (t += ' <section class="embed-screen' + (e.embedOnly ? "" : " cloaked") + '"><div class="embed-wrapper"><h1>' + e.strings.embedTitle + '</h1><p class="subtitle">' + e.strings.embedSubtitle + '</p><div class="embed-code form"><div><input type="text" name="embed_code" title="Embed code" value="' + e.embedCode + '" spellcheck="false" aria-readonly="true"', e.readOnly && (t += " readonly"), t += "></div> ", e.copyButton && (t += ' <button class="embed-copy" data-clipboard-text=\'' + e.embedCode + "' data-label=\"" + e.strings.copy + '" data-success-label="' + e.strings.copySuccess + '">' + e.strings.copy + "</button> "), t += " </div> ", e.customizeEmbed && (t += ' <p class="footnote">' + e.strings.customize + "</p> "), t += " </div></section> "), t += "</div>"
                }, t.templates.sidedock = function(e) {
                    var t = "";
                    return e.vodButton && (t += ' <div class="box" data-vod-expiring="' + e.vodPurchaseInfo.expiring + '" data-vod-purchased="' + e.purchased + '"><button class="vod-button rounded-box', e.purchased && (t += " on"), e.vodPurchaseInfo.expiring && (t += " expiring"), t += '" data-product-id="' + e.vodPurchaseInfo.product_id + '"><div class="vod-button-inner"><span class="vod-label">' + e.vodDisplayLabel + "</span> ", t += this.render("icon_vod") || "", t += ' </div></button></div><div class="sidedock-inner">'), e.likeButton && (t += ' <div class="box"><label class="rounded-box hidden like-label" role="presentation"><span>' + (e.liked ? e.strings.unlike : e.strings.like) + '</span></label><button class="like-button rounded-box', e.liked && (t += " on"), t += '" aria-label="', t += e.loggedOut ? "" + e.strings.likeLoggedOut : "" + (e.liked ? e.strings.unlike : e.strings.like), t += '" data-label-add="' + e.strings.like + '" data-label-add-logged-out="' + e.strings.likeLoggedOut + '" data-label-remove="' + e.strings.unlike + '"> ', t += this.render("icon_heart") || "", t += " </button></div>"), e.watchLaterButton && (t += ' <div class="box"><label class="rounded-box hidden watch-later-label" role="presentation"><span>' + (e.addedToWatchLater ? e.strings.watchLaterRemove : e.strings.watchLaterAdd) + '</span></label><button class="watch-later-button rounded-box', e.addedToWatchLater && (t += " on"), t += '" aria-label="', t += e.loggedOut ? "" + e.strings.watchLaterLoggedOut : "" + (e.addedToWatchLater ? e.strings.watchLaterRemove : e.strings.watchLaterAdd), t += '" data-label-add="' + e.strings.watchLaterAdd + '" data-label-add-logged-out="' + e.strings.watchLaterAddLoggedOut + '" data-label-remove="' + e.strings.watchLaterRemove + '"> ', t += this.render("icon_clock") || "", t += " </button></div>"), e.collectionsButton && (t += ' <div class="box"><label class="rounded-box hidden collections-label" role="presentation"><span>' + e.strings.collections + '</span></label><button class="collections-button rounded-box" aria-label="' + e.strings.collections + '"> ', t += this.render("icon_collections") || "", t += " </button></div>"), e.shareButton && (t += ' <div class="box"><label class="rounded-box hidden share-label" role="presentation"><span>' + e.strings.share + '</span></label><button class="share-button rounded-box" aria-label="' + e.strings.share + '"> ', t += this.render("icon_share") || "", t += " </button></div>"), e.vodButton && (t += " </div>"), t += "" }, t.templates.stats_debug = function(e) {
                    var t = '<p><span class="stats-debug-label">Clip ID:</span><span class="stats-debug-value stats-debug-clip-id">' + e.clipId + "</span></p>";
                    return e.displayProfile && (t += '<p><span class="stats-debug-label">Profile ID:</span><span class="stats-debug-value stats-debug-profile-id">' + e.profileId + "</span></p>"), t += '<p><span class="stats-debug-label">Delivery:</span><span class="stats-debug-value stats-debug-delivery">' + e.delivery + '</span></p><p><span class="stats-debug-label">Playing:</span><span class="stats-debug-value stats-debug-resolution">' + e.resolution + '</span></p><p><span class="stats-debug-label">Embed size:</span><span class="stats-debug-value stats-debug-dimensions">' + e.dimensions + '</span></p><p><span class="stats-debug-label">CDN:</span><span class="stats-debug-value stats-debug-cdn">' + e.cdn + "</span></p>", e.displayAudioVideoStream && (t += '<p><span class="stats-debug-label">Separate AV:</span><span class="stats-debug-value stats-debug-test-group">' + e.separateAudioVideo + "</span></p>"), t += "", e.testGroup && (t += '<p><span class="stats-debug-label">Tests:</span><span class="stats-debug-value stats-debug-test-group">' + e.testGroup + "</span></p>"), t += "", e.displayDroppedFrames && (t += '<p><span class="stats-debug-label">Dropped frames:</span><span class="stats-debug-value stats-debug-dropped-frames">0 / 0</span></p>'), t += "", e.displayBandwidth && (t += '<p><span class="stats-debug-label">Bandwidth:</span><span class="stats-debug-value stats-debug-bandwidth">0 Kbps</span><span class="stats-debug-bandwidth-minmax"> (<span class="stats-debug-value stats-debug-bandwidth-min"></span><span class="stats-debug-value stats-debug-bandwidth-max"></span>) </span></p><div class="stats-debug-time-series"></div>'), t += '<button class="stats-debug-close" aria-label="Close stats debug panel">', t += this.render("icon_close") || "", t += '</button><input type="text" class="stats-debug-code"><a href="javascript:void(0)" class="stats-debug-copy" target="_blank">Open link</a>' }, t.templates.threesixty_instruct = function(e) {
                    var t = '<div class="intro-wrap' + (e.textOnly ? " text-only" : " big") + '"> ';
                    return t += e.textOnly ? " <span>Click and drag to look around</span> " : ' <div class="top-layer"><div class="arrow arrow--top"></div></div><div class="right-layer"><div class="arrow arrow--right"></div></div><div class="bottom-layer"><div class="arrow arrow--down"></div></div><div class="left-layer"><div class="arrow arrow--left"></div></div><div class="middle-layer"><div class="intro-phase-a"><svg class="globe-icon" viewbox="0 0 64 64"><g transform="translate(-98.642 -190.77)"><g transform="matrix(-1 0 0 -1 174.56 418.66)"></g><path d="m32 0c-17.664 3.5388e-15 -32 14.336-32 32s14.336 32 32 32 32-14.336 32-32-14.336-32-32-32zm-1.25 4.5v11.875c-4.11-0.038-8.129-0.513-12-1.344 1.091-3.281 2.512-6.3092 4.156-8.9998 2.47-0.8724 5.11-1.4047 7.844-1.5312zm2.5 0c2.734 0.1265 5.374 0.6588 7.844 1.5312 1.644 2.6906 3.065 5.7188 4.156 8.9998-3.871 0.831-7.89 1.306-12 1.344v-11.875zm-14.156 3.2188c-1.071 2.1124-2.003 4.3742-2.782 6.7502-1.46-0.379-2.897-0.828-4.312-1.313 2.039-2.181 4.446-4.0144 7.094-5.4372zm25.812 0c2.648 1.4228 5.055 3.2562 7.094 5.4372-1.415 0.485-2.852 0.934-4.312 1.313-0.779-2.376-1.711-4.6378-2.782-6.7502zm-34.656 7.4692c1.744 0.629 3.532 1.182 5.344 1.656-1.197 4.34-1.867 9.016-1.969 13.906h-9c0.2571-5.859 2.291-11.222 5.625-15.562zm43.5 0c3.334 4.34 5.368 9.703 5.625 15.562h-9c-0.102-4.89-0.772-9.566-1.969-13.906 1.812-0.474 3.6-1.027 5.344-1.656zm-35.688 2.25c4.089 0.89 8.344 1.367 12.688 1.406v11.906h-14.625c0.103-4.697 0.79-9.172 1.937-13.312zm27.876 0c1.147 4.14 1.834 8.615 1.937 13.312h-14.625v-11.906c4.344-0.039 8.599-0.516 12.688-1.406zm-41.313 15.812h9c0.102 4.89 0.772 9.566 1.969 13.906-1.812 0.474-3.6 1.027-5.344 1.656-3.334-4.34-5.3679-9.703-5.625-15.562zm11.5 0h14.625v11.906c-4.344 0.039-8.599 0.516-12.688 1.406-1.147-4.14-1.834-8.615-1.937-13.312zm17.125 0h14.625c-0.103 4.697-0.79 9.172-1.937 13.312-4.089-0.89-8.344-1.367-12.688-1.406v-11.906zm17.125 0h9c-0.257 5.859-2.291 11.222-5.625 15.562-1.744-0.629-3.532-1.182-5.344-1.656 1.197-4.34 1.867-9.016 1.969-13.906zm-19.625 14.375v11.875c-2.734-0.126-5.374-0.659-7.844-1.531-1.644-2.691-3.065-5.719-4.156-9 3.871-0.831 7.89-1.306 12-1.344zm2.5 0c4.11 0.038 8.129 0.513 12 1.344-1.091 3.281-2.512 6.309-4.156 9-2.47 0.872-5.11 1.405-7.844 1.531v-11.875zm-16.938 1.906c0.779 2.376 1.711 4.638 2.782 6.75-2.648-1.423-5.055-3.256-7.094-5.437 1.415-0.485 2.852-0.934 4.312-1.313zm31.376 0c1.46 0.379 2.897 0.828 4.312 1.313-2.039 2.181-4.446 4.014-7.094 5.437 1.071-2.112 2.003-4.374 2.782-6.75z" transform="translate(98.642 190.77)"/><g transform="translate(111.29 -12.026)"><g opacity=".60440"><g><g transform="matrix(-1 0 0 -1 198.35 442.45)"><g transform="translate(-5.9265e-7 .0000023598)"></g></g></g></g></g></g></svg><p class="instruct-copy">Look around!</p></div></div></div> ', t += "</div>" }, t.templates.title = function(e) {
                    var t = "<header> ";
                    return e.badge && (t += ' <div class="badge', e.badge.shadow && (t += " shadow"), t += '"> ', e.badge.link && (t += '<a href="' + e.badge.link + '"', e.targetBlank && (t += ' target="_blank"'), t += ">"), t += ' <img src="' + e.badge.img + '"', e.badge.offset && (t += ' style="margin-top:' + e.badge.offset.y + "px;margin-left:" + e.badge.offset.x + 'px"'), t += ' width="' + e.badge.width + '" height="' + e.badge.height + '" alt="' + e.badge.name + ' Badge"> ', e.badge.link && (t += "</a>"), t += " </div> "), e.showPortrait && (t += ' <div class="portrait" aria-hidden="true"> ', e.linkToOwner && (t += '<a tabindex="-1" href="' + e.ownerLink + '"', e.targetBlank && (t += ' target="_blank"'), t += ">"), t += ' <img src="' + e.portraitImg + '" alt="" width="60" height="60"> ', e.linkToOwner && (t += "</a>"), t += " </div> "), t += ' <div class="headers"> ', e.showTitle && (t += " <h1> ", e.showTitleLink && (t += '<a href="' + e.titleLink + '"', e.targetBlank && (t += ' target="_blank"'), t += " data-clip-link>"), t += this.escape(e.title) || "", e.showTitleLink && (t += "</a>"), e.is360 && (t += '<div class="threesix-badge-title">360°</div>'), t += " </h1> "), e.showByline && (t += ' <div class="sub-title"><h2 class="byline-from">' + e.strings.byline + "</h2> ", e.is360 && !e.showTitle && (t += ' <div class="threesix-badge-byline">360°</div> '), t += " </div> "), !e.is360 || e.showByline || e.showTitle || (t += ' <div class="threesix-badge-loner">360°</div> '), t += " </div></header>" }, t.templates.title_byline_badge = function(e) {
                    var t = "&nbsp;";
                    return e.link && (t += '<a tabindex="-1" href="' + e.link + '"', e.targetBlank && (t += ' target="_blank"'), t += ">"), t += ' <span class="byline-badge ' + e.cssClass + '">' + e.cssClass + "</span>", e.link && (t += "</a>"), t += "" }, t.templates.title_owner_byline = function(e) {
                    var t = "";
                    return e.linkToOwner ? (t += '<a href="' + e.ownerLink + '"', e.targetBlank && (t += ' target="_blank"'), t += ">", t += this.escape(e.owner) || "", t += "</a>") : (t += '<span class="user">', t += this.escape(e.owner) || "", t += "</span>"), t += "" }, "undefined" != typeof e && e.exports ? e.exports = t : window.Aftershave = t
            }()
        }),
        dt = e(lt),
        ft = t(function(e) {! function(t, n, i) {
                function r() {
                    var e = Array.prototype.slice.apply(arguments),
                        t = e.shift();
                    v[t].forEach(function(t) { "function" == typeof t && t.apply(t, e) }) }

                function o(e) {
                    return function(t, n) { p.indexOf(t) !== -1 && e.call(this, t, n) } }

                function a(e) {
                    var t = null;
                    if ("VIDEO" === e.tagName) t = e;
                    else {
                        var n = e.getElementsByTagName("video");
                        n[0] && (t = n[0]) }
                    return t }

                function s(e) {
                    var t = a(e);
                    if (t && t.webkitEnterFullscreen) {
                        try { t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", function e() { t.removeEventListener("loadedmetadata", e, !1), t.webkitEnterFullscreen(), _ = !!t.getAttribute("controls") }, !1), t.load()) : (t.webkitEnterFullscreen(), _ = !!t.getAttribute("controls")), g = t } catch (t) {
                            return E("not_supported", e) }
                        return !0 }
                    return E(void 0 === f.request ? "not_supported" : "not_enabled", e) }

                function c() { P.element || (T(), l()) }

                function u() { i && "webkitfullscreenchange" === f.change && t.addEventListener("resize", c, !1) }

                function l() { i && "webkitfullscreenchange" === f.change && t.removeEventListener("resize", c, !1) }
                var d = /i(Pad|Phone|Pod)/.test(navigator.userAgent) && parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/, "$1.$2"), 10) >= 7,
                    f = function() {
                        var e = n.createElement("video"),
                            t = { request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"], exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"], enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"], element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"], change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"] },
                            i = {};
                        for (var r in t)
                            for (var o = 0, a = t[r].length; o < a; o++)
                                if (t[r][o] in e || t[r][o] in n || "on" + t[r][o].toLowerCase() in n) { i[r] = t[r][o];
                                    break }
                        return i }(),
                    h = { ENTER: "enter", EXIT: "exit", CHANGE: "change", ERROR: "error" },
                    p = [],
                    v = {},
                    m = null;
                Object.keys(h).forEach(function(e) { p.push(h[e]), v[h[e]] = [] });
                var g = null,
                    _ = null,
                    y = function() {},
                    b = [],
                    w = !1,
                    k = !1,
                    x = { chrome: navigator.userAgent.indexOf("Chrome") !== -1, android: navigator.userAgent.indexOf("Android") !== -1, safari: navigator.userAgent.indexOf("Safari") !== -1, apple: navigator.userAgent.indexOf("Apple") !== -1 };
                x.chrome && x.android && (w = parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/, "$1"), 10) || !0), x.safari && x.apple && !x.chrome && !x.android && (k = parseFloat(navigator.userAgent.replace(/^.*Version\/(\d+)\.(\d+).*$/, "$1.$2")) || !0);
                var S = function(e) {
                        var t = b[b.length - 1];
                        t && (e !== t.element && e !== g || !t.hasEntered) && ("VIDEO" === e.tagName && (g = e), 1 === b.length && P.onenter(P.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0, r(h.ENTER, P.element)) },
                    T = function() {!g || _ || d || (g.setAttribute("controls", "controls"), g.removeAttribute("controls")), g = null, _ = null;
                        var e = b.pop();
                        e && (e.exit.call(e.element), r(h.EXIT, e.element), !i && m && 0 === t.scrollY && t.scrollTo(0, m), P.element || (b.forEach(function(e) { e.exit.call(e.element), r(h.EXIT, e.element) }), b = [], P.onexit())) },
                    E = function(e, t) {
                        if (b.length > 0) {
                            var n = b.pop();
                            t = t || n.element, n.error.call(t, e), P.onerror(t, e), r(h.ERROR, t, e) } },
                    P = { request: function(e, r, o, a) {
                            if (e = e || n.body, b.push({ element: e, enter: r || y, exit: o || y, error: a || y }), void 0 === f.request) return s(e);
                            if (i && n[f.enabled] === !1) return s(e);
                            if (w !== !1 && w < 32) return s(e);
                            if (i && void 0 === f.enabled) return f.enabled = "webkitFullscreenEnabled", e[f.request](), void setTimeout(function() { n[f.element] ? n[f.enabled] = !0 : (n[f.enabled] = !1, s(e)) }, 250);
                            try {!i && t && (m = t.scrollY), e[f.request](), k >= 5.1 && setTimeout(function() { n[f.element] || E(i ? "not_enabled" : "not_allowed", e) }, 100) } catch (t) { E("not_enabled", e) } }, exit: function() { l(), !n[f.exit] && P.element ? P.element[f.exit]() : n[f.exit]() }, toggle: function(e, t, n, i) { P.element ? P.exit() : P.request(e, t, n, i) }, videoEnabled: function(e) {
                            if (P.enabled) return !0;
                            e = e || n.body;
                            var t = a(e);
                            return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen) }, on: o(function(e, t) { v[e].push(t) }), off: o(function(e, t) {
                            var n = v[e].indexOf(t);
                            n > -1 && v[e].splice(n, 1) }), onenter: y, onexit: y, onchange: y, onerror: y };
                try { Object.defineProperties(P, { element: { enumerable: !0, get: function() {
                                return g && g.webkitDisplayingFullscreen ? g : n[f.element] || null } }, enabled: { enumerable: !0, get: function() {
                                return "webkitCancelFullScreen" === f.exit && !i || !(w !== !1 && w < 32) && (n[f.enabled] || !1) } } }) } catch (e) { P.element = null, P.enabled = !1 }
                f.change && n.addEventListener(f.change, function(e) {
                    if (P.onchange(P.element), r(h.CHANGE, P.element), P.element) {
                        var t = b[b.length - 2];
                        t && t.element === P.element ? T() : (S(P.element), u()) } else T() }, !1), n.addEventListener("webkitbeginfullscreen", function(e) {
                    var t = !0;
                    if (b.length > 0)
                        for (var n = 0, i = b.length; n < i; n++) {
                            var o = a(b[n].element);
                            if (o === e.srcElement) { t = !1;
                                break } }
                    t && b.push({ element: e.srcElement, enter: y, exit: y, error: y }), P.onchange(e.srcElement), r(h.CHANGE, P.srcElement), S(e.srcElement) }, !0), n.addEventListener("webkitendfullscreen", function(e) { P.onchange(e.srcElement), r(h.CHANGE, e.srcElement), T(e.srcElement) }, !0), f.error && n.addEventListener(f.error, function(e) { E("not_allowed") }, !1), "undefined" != typeof e && e.exports ? e.exports = P : t.BigScreen = P }(window, document, self !== top) }),
        ht = e(ft),
        pt = navigator.userAgent.toLowerCase(),
        vt = !!S("android") && (parseFloat(pt.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
        mt = window.devicePixelRatio || 1,
        gt = !(!S("windows phone") && !S("iemobile")) && (parseFloat(pt.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
        _t = !!S("msie") && parseFloat(pt.replace(/^.*msie (\d+).*$/, "$1")),
        yt = !!S("trident") && parseFloat(pt.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
        bt = !!(S("ipad;") || S("iphone;") || S("ipod touch;")) && parseFloat(pt.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")),
        wt = { airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window, android: vt, iOS: bt, mobileAndroid: vt && S("mobile"), browser: { bb10: S("bb10"), chrome: S("chrome"), firefox: S("firefox"), ie: _t || yt, edge: S("edge"), opera: S("opera"), safari: S("safari") && S("apple") && !S("chrome") && !S("android") }, devicePixelRatio: mt, flash: E(), iPhone: S("iphone;") || S("ipod touch;") || S("ipod;"), iPad: S("ipad;"), iPadNonRetina: S("ipad;") && mt < 2, mac: S("mac os"), pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1, svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || S("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1, transformProperty: T("transform"), windowsPhone: gt };
    if (wt.threeSixtyVideo = !(wt.browser.safari || wt.iOS || wt.iPad), function() {
            for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
                var n = e[t];
                window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"] }! /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) && window.requestAnimationFrame && window.cancelAnimationFrame || (window.requestAnimationFrame = function(e) {
                return setTimeout(e, 0) }, window.cancelAnimationFrame = clearTimeout) }(), Number.isInteger || (Number.isInteger = function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e }), !Object.setPrototypeOf && !{}.__proto__) {
        var kt = Object.getPrototypeOf;
        Object.getPrototypeOf = function(e) {
            return e.__proto__ ? e.__proto__ : kt.call(Object, e) } }
    if ("undefined" != typeof DOMTokenList) {
        var xt = function() {
            var e = document.createElement("div");
            return e.classList.toggle("test-class", !1), !e.classList.contains("test-class") }();
        xt || ! function() {
            var e = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(t, n) {
                return n === !0 ? void this.add(t) : n === !1 ? void this.remove(t) : void e.call(this, t) } }() }
    var St, Tt = t(function(e) {
            function t() {
                return "undefined" == typeof document ? "" : document.location.href }
            var n = { collectWindowErrors: !0, debug: !1 },
                i = [].slice,
                r = "?",
                o = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
            n.report = function() {
                function e(e) { l(), m.push(e) }

                function a(e) {
                    for (var t = m.length - 1; t >= 0; --t) m[t] === e && m.splice(t, 1) }

                function s() { d(), m = [] }

                function c(e, t) {
                    var r = null;
                    if (!t || n.collectWindowErrors) {
                        for (var o in m)
                            if (m.hasOwnProperty(o)) try { m[o].apply(null, [e].concat(i.call(arguments, 2))) } catch (e) { r = e }
                            if (r) throw r } }

                function u(e, i, a, s, u) {
                    var l = null;
                    if (y) n.computeStackTrace.augmentStackTraceWithInitialElement(y, i, a, e), f();
                    else if (u) l = n.computeStackTrace(u), c(l, !0);
                    else {
                        var d, h = { url: i, line: a, column: s },
                            v = void 0,
                            m = e;
                        if ("[object String]" === {}.toString.call(e)) {
                            var d = e.match(o);
                            d && (v = d[1], m = d[2]) }
                        h.func = r, l = { name: v, message: m, url: t(), stack: [h] }, c(l, !0) }
                    return !!p && p.apply(this, arguments) }

                function l() { v || (p = window.onerror, window.onerror = u, v = !0) }

                function d() { v && (window.onerror = p, v = !1, p = void 0) }

                function f() {
                    var e = y,
                        t = g;
                    g = null, y = null, _ = null, c.apply(null, [e, !1].concat(t)) }

                function h(e, t) {
                    var r = i.call(arguments, 1);
                    if (y) {
                        if (_ === e) return;
                        f() }
                    var o = n.computeStackTrace(e);
                    if (y = o, _ = e, g = r, setTimeout(function() { _ === e && f() }, o.incomplete ? 2e3 : 0), t !== !1) throw e }
                var p, v, m = [],
                    g = null,
                    _ = null,
                    y = null;
                return h.subscribe = e, h.unsubscribe = a, h.uninstall = s, h }(), n.computeStackTrace = function() {
                function e(e) {
                    if ("undefined" != typeof e.stack && e.stack) {
                        for (var n, i, o = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, c = e.stack.split("\n"), u = [], l = (/^(.*) is undefined$/.exec(e.message), 0), d = c.length; l < d; ++l) {
                            if (n = o.exec(c[l])) {
                                var f = n[2] && n[2].indexOf("native") !== -1;
                                i = { url: f ? null : n[2], func: n[1] || r, args: f ? [n[2]] : [], line: n[3] ? +n[3] : null, column: n[4] ? +n[4] : null } } else if (n = s.exec(c[l])) i = { url: n[2], func: n[1] || r, args: [], line: +n[3], column: n[4] ? +n[4] : null };
                            else {
                                if (!(n = a.exec(c[l]))) continue;
                                i = { url: n[3], func: n[1] || r, args: n[2] ? n[2].split(",") : [], line: n[4] ? +n[4] : null, column: n[5] ? +n[5] : null } }!i.func && i.line && (i.func = r), u.push(i) }
                        return u.length ? (u[0].column || "undefined" == typeof e.columnNumber || (u[0].column = e.columnNumber + 1), { name: e.name, message: e.message, url: t(), stack: u }) : null } }

                function i(e, t, n, i) {
                    var o = { url: t, line: n };
                    if (o.url && o.line) {
                        if (e.incomplete = !1, o.func || (o.func = r), e.stack.length > 0 && e.stack[0].url === o.url) {
                            if (e.stack[0].line === o.line) return !1;
                            if (!e.stack[0].line && e.stack[0].func === o.func) return e.stack[0].line = o.line, !1 }
                        return e.stack.unshift(o), e.partial = !0, !0 }
                    return e.incomplete = !0, !1 }

                function o(e, s) {
                    for (var c, u, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, d = [], f = {}, h = !1, p = o.caller; p && !h; p = p.caller)
                        if (p !== a && p !== n.report) {
                            if (u = { url: null, func: r, line: null, column: null }, p.name ? u.func = p.name : (c = l.exec(p.toString())) && (u.func = c[1]), "undefined" == typeof u.func) try { u.func = c.input.substring(0, c.input.indexOf("{")) } catch (e) {}
                            f["" + p] ? h = !0 : f["" + p] = !0, d.push(u) }
                    s && d.splice(0, s);
                    var v = { name: e.name, message: e.message, url: t(), stack: d };
                    return i(v, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), v }

                function a(i, r) {
                    var a = null;
                    r = null == r ? 0 : +r;
                    try {
                        if (a = e(i)) return a } catch (e) {
                        if (n.debug) throw e }
                    try {
                        if (a = o(i, r + 1)) return a } catch (e) {
                        if (n.debug) throw e }
                    return { name: i.name, message: i.message, url: t() } }
                return a.augmentStackTraceWithInitialElement = i, a.computeStackTraceFromStackProp = e, a }(), e.exports = n }),
        Et = e(Tt),
        Pt = Object.freeze({ default: Et }),
        Lt = t(function(e) {
            function t(e) { this.name = "RavenConfigError", this.message = e }
            t.prototype = new Error, t.prototype.constructor = t, e.exports = t }),
        Ct = e(Lt),
        Ot = Object.freeze({ default: Ct }),
        At = t(function(e, t) {
            function n(e, t, n, r) {
                return JSON.stringify(e, i(t, r), n) }

            function i(e, t) {
                var n = [],
                    i = [];
                return null == t && (t = function(e, t) {
                        return n[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, n.indexOf(t)).join(".") + "]" }),
                    function(r, o) {
                        if (n.length > 0) {
                            var a = n.indexOf(this);~a ? n.splice(a + 1) : n.push(this), ~a ? i.splice(a, 1 / 0, r) : i.push(r), ~n.indexOf(o) && (o = t.call(this, r, o)) } else n.push(o);
                        return null == e ? o : e.call(this, r, o) } }
            t = e.exports = n, t.getSerialize = i }),
        It = e(At),
        Mt = At.getSerialize,
        Ft = Object.freeze({ default: It, getSerialize: Mt }),
        qt = t(function(e) {
            var t = function(e, t, n) {
                var i = e[t],
                    r = e;
                if (t in e) {
                    var o = "warn" === t ? "warning" : t;
                    e[t] = function() {
                        var e = [].slice.call(arguments),
                            t = "" + e.join(" "),
                            a = { level: o, logger: "console", extra: { arguments: e } };
                        n && n(t, a), i && Function.prototype.apply.call(i, r, e) } } };
            e.exports = { wrapMethod: t } }),
        Rt = e(qt),
        Bt = qt.wrapMethod,
        Dt = Object.freeze({ default: Rt, wrapMethod: Bt }),
        Nt = t(function(t) {
            function n() {
                return +new Date }

            function i() { this._hasJSON = !("object" != typeof JSON || !JSON.stringify), this._hasDocument = !r(L), this._lastCapturedException = null, this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, this._globalContext = {}, this._globalOptions = { logger: "javascript", ignoreErrors: [], ignoreUrls: [], whitelistUrls: [], includePaths: [], crossOrigin: "anonymous", collectWindowErrors: !0, maxMessageLength: 0, stackTraceLimit: 50, autoBreadcrumbs: !0 }, this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, this._originalConsole = P.console || {}, this._originalConsoleMethods = {}, this._plugins = [], this._startTime = n(), this._wrappedBuiltIns = [], this._breadcrumbs = [], this._lastCapturedEvent = null, this._keypressTimeout, this._location = P.location, this._lastHref = this._location && this._location.href;
                for (var e in this._originalConsole) this._originalConsoleMethods[e] = this._originalConsole[e] }

            function r(e) {
                return void 0 === e }

            function o(e) {
                return "function" == typeof e }

            function a(e) {
                return "[object String]" === C.toString.call(e) }

            function s(e) {
                return "object" == typeof e && null !== e }

            function c(e) {
                for (var t in e) return !1;
                return !0 }

            function u(e) {
                var t = C.toString.call(e);
                return s(e) && "[object Error]" === t || "[object Exception]" === t || e instanceof Error }

            function l(e, t) {
                var n, i;
                if (r(e.length))
                    for (n in e) h(e, n) && t.call(null, n, e[n]);
                else if (i = e.length)
                    for (n = 0; n < i; n++) t.call(null, n, e[n]) }

            function d(e, t) {
                return t ? (l(t, function(t, n) { e[t] = n }), e) : e }

            function f(e, t) {
                return !t || e.length <= t ? e : e.substr(0, t) + "…" }

            function h(e, t) {
                return C.hasOwnProperty.call(e, t) }

            function p(e) {
                for (var t, n = [], i = 0, r = e.length; i < r; i++) t = e[i], a(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
                return new RegExp(n.join("|"), "i") }

            function v(e) {
                var t = [];
                return l(e, function(e, n) { t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n)) }), t.join("&") }

            function m(e) {
                var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                var n = t[6] || "",
                    i = t[8] || "";
                return { protocol: t[2], host: t[4], path: t[5], relative: t[5] + n + i } }

            function g() {
                var e = window.crypto || window.msCrypto;
                if (!r(e) && e.getRandomValues) {
                    var t = new Uint16Array(8);
                    e.getRandomValues(t), t[3] = 4095 & t[3] | 16384, t[4] = 16383 & t[4] | 32768;
                    var n = function(e) {
                        for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                        return t };
                    return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7]) }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0,
                        n = "x" === e ? t : 3 & t | 8;
                    return n.toString(16) }) }

            function _(e) {
                for (var t, n = 5, i = 80, r = [], o = 0, a = 0, s = " > ", c = s.length; e && o++ < n && (t = y(e), !("html" === t || o > 1 && a + r.length * c + t.length >= i));) r.push(t), a += t.length, e = e.parentNode;
                return r.reverse().join(s) }

            function y(e) {
                var t, n, i, r, o, s = [];
                if (!e || !e.tagName) return "";
                if (s.push(e.tagName.toLowerCase()), e.id && s.push("#" + e.id), t = e.className, t && a(t))
                    for (n = t.split(" "), o = 0; o < n.length; o++) s.push("." + n[o]);
                var c = ["type", "name", "title", "alt"];
                for (o = 0; o < c.length; o++) i = c[o], r = e.getAttribute(i), r && s.push("[" + i + '="' + r + '"]');
                return s.join("") }

            function b(e, t, n, i) {
                var r = e[t];
                e[t] = n(r), i && i.push([e, t, r]) }
            var w = e(Pt),
                k = e(Ot),
                x = e(Ft),
                S = e(Dt).wrapMethod,
                T = "source protocol user pass host port path".split(" "),
                E = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
                P = "undefined" != typeof window ? window : void 0,
                L = P && P.document;
            i.prototype = {
                VERSION: "3.8.1",
                debug: !1,
                TraceKit: w,
                config: function(e, t) {
                    var n = this;
                    if (n._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), n;
                    if (!e) return n;
                    var i = n._globalOptions;
                    t && l(t, function(e, t) { "tags" === e || "extra" === e ? n._globalContext[e] = t : i[e] = t }), n.setDSN(e), i.ignoreErrors.push(/^Script error\.?$/), i.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), i.ignoreErrors = p(i.ignoreErrors), i.ignoreUrls = !!i.ignoreUrls.length && p(i.ignoreUrls), i.whitelistUrls = !!i.whitelistUrls.length && p(i.whitelistUrls), i.includePaths = p(i.includePaths), i.maxBreadcrumbs = Math.max(0, Math.min(i.maxBreadcrumbs || 100, 100));
                    var r = { xhr: !0, console: !0, dom: !0, location: !0 },
                        o = i.autoBreadcrumbs;
                    return "[object Object]" === {}.toString.call(o) ? o = d(r, o) : o !== !1 && (o = r), i.autoBreadcrumbs = o, w.collectWindowErrors = !!i.collectWindowErrors, n },
                install: function() {
                    var e = this;
                    return e.isSetup() && !e._isRavenInstalled && (w.report.subscribe(function() { e._handleOnErrorStackInfo.apply(e, arguments) }), e._instrumentTryCatch(), e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(), e._drainPlugins(), e._isRavenInstalled = !0), Error.stackTraceLimit = e._globalOptions.stackTraceLimit, this },
                setDSN: function(e) {
                    var t = this,
                        n = t._parseDSN(e),
                        i = n.path.lastIndexOf("/"),
                        r = n.path.substr(1, i);
                    t._dsn = e, t._globalKey = n.user, t._globalSecret = n.pass && n.pass.substr(1), t._globalProject = n.path.substr(i + 1), t._globalServer = t._getGlobalServer(n), t._globalEndpoint = t._globalServer + "/" + r + "api/" + t._globalProject + "/store/" },
                context: function(e, t, n) {
                    return o(e) && (n = t || [], t = e, e = void 0), this.wrap(e, t).apply(this, n) },
                wrap: function(e, t, n) {
                    function i() {
                        var i = [],
                            r = arguments.length,
                            s = !e || e && e.deep !== !1;
                        for (n && o(n) && n.apply(this, arguments); r--;) i[r] = s ? a.wrap(e, arguments[r]) : arguments[r];
                        try {
                            return t.apply(this, i) } catch (t) {
                            throw a._ignoreNextOnError(), a.captureException(t, e), t } }
                    var a = this;
                    if (r(t) && !o(e)) return e;
                    if (o(e) && (t = e, e = void 0), !o(t)) return t;
                    try {
                        if (t.__raven__) return t;
                        if (t.__raven_wrapper__) return t.__raven_wrapper__ } catch (e) {
                        return t }
                    for (var s in t) h(t, s) && (i[s] = t[s]);
                    return i.prototype = t.prototype, t.__raven_wrapper__ = i, i.__raven__ = !0, i.__inner__ = t, i },
                uninstall: function() {
                    return w.report.uninstall(), this._restoreBuiltIns(), Error.stackTraceLimit = this._originalErrorStackTraceLimit, this._isRavenInstalled = !1, this },
                captureException: function(e, t) {
                    if (!u(e)) return this.captureMessage(e, d({ trimHeadFrames: 1, stacktrace: !0 }, t));
                    this._lastCapturedException = e;
                    try {
                        var n = w.computeStackTrace(e);
                        this._handleStackInfo(n, t) } catch (t) {
                        if (e !== t) throw t }
                    return this },
                captureMessage: function(e, t) {
                    if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
                        var n = d({ message: e + "" }, t);
                        if (t && t.stacktrace) {
                            var i;
                            try {
                                throw new Error(e) } catch (e) { i = e }
                            i.name = null, t = d({ fingerprint: e, trimHeadFrames: (t.trimHeadFrames || 0) + 1 }, t);
                            var r = w.computeStackTrace(i),
                                o = this._prepareFrames(r, t);
                            n.stacktrace = { frames: o.reverse() } }
                        return this._send(n), this } },
                captureBreadcrumb: function(e) {
                    var t = d({ timestamp: n() / 1e3 }, e);
                    return this._breadcrumbs.push(t), this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(), this },
                addPlugin: function(e) {
                    var t = [].slice.call(arguments, 1);
                    return this._plugins.push([e, t]), this._isRavenInstalled && this._drainPlugins(), this },
                setUserContext: function(e) {
                    return this._globalContext.user = e, this },
                setExtraContext: function(e) {
                    return this._mergeContext("extra", e), this },
                setTagsContext: function(e) {
                    return this._mergeContext("tags", e), this },
                clearContext: function() {
                    return this._globalContext = {}, this },
                getContext: function() {
                    return JSON.parse(x(this._globalContext)) },
                setEnvironment: function(e) {
                    return this._globalOptions.environment = e, this },
                setRelease: function(e) {
                    return this._globalOptions.release = e, this },
                setDataCallback: function(e) {
                    var t = this._globalOptions.dataCallback;
                    return this._globalOptions.dataCallback = o(e) ? function(n) {
                        return e(n, t) } : e, this },
                setShouldSendCallback: function(e) {
                    var t = this._globalOptions.shouldSendCallback;
                    return this._globalOptions.shouldSendCallback = o(e) ? function(n) {
                        return e(n, t) } : e, this },
                setTransport: function(e) {
                    return this._globalOptions.transport = e, this },
                lastException: function() {
                    return this._lastCapturedException },
                lastEventId: function() {
                    return this._lastEventId },
                isSetup: function() {
                    return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), !1)) },
                afterLoad: function() {
                    var e = P.RavenConfig;
                    e && this.config(e.dsn, e.config).install() },
                showReportDialog: function(e) {
                    if (L) { e = e || {};
                        var t = e.eventId || this.lastEventId();
                        if (!t) throw new k("Missing eventId");
                        var n = e.dsn || this._dsn;
                        if (!n) throw new k("Missing DSN");
                        var i = encodeURIComponent,
                            r = "";
                        r += "?eventId=" + i(t), r += "&dsn=" + i(n);
                        var o = e.user || this._globalContext.user;
                        o && (o.name && (r += "&name=" + i(o.name)), o.email && (r += "&email=" + i(o.email)));
                        var a = this._getGlobalServer(this._parseDSN(n)),
                            s = L.createElement("script");
                        s.async = !0, s.src = a + "/api/embed/error-page/" + r, (L.head || L.body).appendChild(s) } },
                _ignoreNextOnError: function() {
                    var e = this;
                    this._ignoreOnError += 1, setTimeout(function() { e._ignoreOnError -= 1 }) },
                _triggerEvent: function(e, t) {
                    var n, i;
                    if (this._hasDocument) { t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), L.createEvent ? (n = L.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = L.createEventObject(), n.eventType = e);
                        for (i in t) h(t, i) && (n[i] = t[i]);
                        if (L.createEvent) L.dispatchEvent(n);
                        else try { L.fireEvent("on" + n.eventType.toLowerCase(), n) } catch (e) {} } },
                _breadcrumbEventHandler: function(e) {
                    var t = this;
                    return function(n) {
                        if (t._keypressTimeout = null, t._lastCapturedEvent !== n) { t._lastCapturedEvent = n;
                            var i, r = n.target;
                            try { i = _(r) } catch (e) { i = "<unknown>" }
                            t.captureBreadcrumb({ category: "ui." + e, message: i }) } } },
                _keypressEventHandler: function() {
                    var e = this,
                        t = 1e3;
                    return function(n) {
                        var i = n.target,
                            r = i && i.tagName;
                        if (r && ("INPUT" === r || "TEXTAREA" === r || i.isContentEditable)) {
                            var o = e._keypressTimeout;
                            o || e._breadcrumbEventHandler("input")(n),
                                clearTimeout(o), e._keypressTimeout = setTimeout(function() { e._keypressTimeout = null }, t)
                        }
                    }
                },
                _captureUrlChange: function(e, t) {
                    var n = m(this._location.href),
                        i = m(t),
                        r = m(e);
                    this._lastHref = t, n.protocol === i.protocol && n.host === i.host && (t = i.relative), n.protocol === r.protocol && n.host === r.host && (e = r.relative), this.captureBreadcrumb({ category: "navigation", data: { to: t, from: e } }) },
                _instrumentTryCatch: function() {
                    function e(e) {
                        return function(t, i) {
                            for (var r = new Array(arguments.length), a = 0; a < r.length; ++a) r[a] = arguments[a];
                            var s = r[0];
                            return o(s) && (r[0] = n.wrap(s)), e.apply ? e.apply(this, r) : e(r[0], r[1]) } }

                    function t(e) {
                        var t = P[e] && P[e].prototype;
                        t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (b(t, "addEventListener", function(t) {
                            return function(i, o, a, s) {
                                try { o && o.handleEvent && (o.handleEvent = n.wrap(o.handleEvent)) } catch (e) {}
                                var c;
                                return r && r.dom && ("EventTarget" === e || "Node" === e) && ("click" === i ? c = n._breadcrumbEventHandler(i) : "keypress" === i && (c = n._keypressEventHandler())), t.call(this, i, n.wrap(o, void 0, c), a, s) } }, i), b(t, "removeEventListener", function(e) {
                            return function(t, n, i, r) {
                                try { n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__ : n) } catch (e) {}
                                return e.call(this, t, n, i, r) } }, i)) }
                    var n = this,
                        i = n._wrappedBuiltIns,
                        r = this._globalOptions.autoBreadcrumbs;
                    b(P, "setTimeout", e, i), b(P, "setInterval", e, i), P.requestAnimationFrame && b(P, "requestAnimationFrame", function(e) {
                        return function(t) {
                            return e(n.wrap(t)) } }, i);
                    for (var a = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], s = 0; s < a.length; s++) t(a[s]);
                    var c = P.jQuery || P.$;
                    c && c.fn && c.fn.ready && b(c.fn, "ready", function(e) {
                        return function(t) {
                            return e.call(this, n.wrap(t)) } }, i) },
                _instrumentBreadcrumbs: function() {
                    function e(e, n) { e in n && o(n[e]) && b(n, e, function(e) {
                            return t.wrap(e) }) }
                    var t = this,
                        n = this._globalOptions.autoBreadcrumbs,
                        i = t._wrappedBuiltIns;
                    if (n.xhr && "XMLHttpRequest" in P) {
                        var r = XMLHttpRequest.prototype;
                        b(r, "open", function(e) {
                            return function(n, i) {
                                return a(i) && i.indexOf(t._globalKey) === -1 && (this.__raven_xhr = { method: n, url: i, status_code: null }), e.apply(this, arguments) } }, i), b(r, "send", function(n) {
                            return function(i) {
                                function r() {
                                    if (a.__raven_xhr && (1 === a.readyState || 4 === a.readyState)) {
                                        try { a.__raven_xhr.status_code = a.status } catch (e) {}
                                        t.captureBreadcrumb({ type: "http", category: "xhr", data: a.__raven_xhr }) } }
                                for (var a = this, s = ["onload", "onerror", "onprogress"], c = 0; c < s.length; c++) e(s[c], a);
                                return "onreadystatechange" in a && o(a.onreadystatechange) ? b(a, "onreadystatechange", function(e) {
                                    return t.wrap(e, void 0, r) }) : a.onreadystatechange = r, n.apply(this, arguments) } }, i) }
                    n.xhr && "fetch" in P && b(P, "fetch", function(e) {
                        return function(n, i) {
                            for (var r = new Array(arguments.length), o = 0; o < r.length; ++o) r[o] = arguments[o];
                            var a = "GET";
                            r[1] && r[1].method && (a = r[1].method);
                            var s = { method: a, url: r[0], status_code: null };
                            return t.captureBreadcrumb({ type: "http", category: "fetch", data: s }), e.apply(this, r).then(function(e) {
                                return s.status_code = e.status, e }) } }, i), n.dom && this._hasDocument && (L.addEventListener ? (L.addEventListener("click", t._breadcrumbEventHandler("click"), !1), L.addEventListener("keypress", t._keypressEventHandler(), !1)) : (L.attachEvent("onclick", t._breadcrumbEventHandler("click")), L.attachEvent("onkeypress", t._keypressEventHandler())));
                    var s = P.chrome,
                        c = s && s.app && s.app.runtime,
                        u = !c && P.history && history.pushState;
                    if (n.location && u) {
                        var d = P.onpopstate;
                        P.onpopstate = function() {
                            var e = t._location.href;
                            if (t._captureUrlChange(t._lastHref, e), d) return d.apply(this, arguments) }, b(history, "pushState", function(e) {
                            return function() {
                                var n = arguments.length > 2 ? arguments[2] : void 0;
                                return n && t._captureUrlChange(t._lastHref, n + ""), e.apply(this, arguments) } }, i) }
                    if (n.console && "console" in P && console.log) {
                        var f = function(e, n) { t.captureBreadcrumb({ message: e, level: n.level, category: "console" }) };
                        l(["debug", "info", "warn", "error", "log"], function(e, t) { S(console, t, f) }) } },
                _restoreBuiltIns: function() {
                    for (var e; this._wrappedBuiltIns.length;) { e = this._wrappedBuiltIns.shift();
                        var t = e[0],
                            n = e[1],
                            i = e[2];
                        t[n] = i } },
                _drainPlugins: function() {
                    var e = this;
                    l(this._plugins, function(t, n) {
                        var i = n[0],
                            r = n[1];
                        i.apply(e, [e].concat(r)) }) },
                _parseDSN: function(e) {
                    var t = E.exec(e),
                        n = {},
                        i = 7;
                    try {
                        for (; i--;) n[T[i]] = t[i] || "" } catch (t) {
                        throw new k("Invalid DSN: " + e) }
                    if (n.pass && !this._globalOptions.allowSecretKey) throw new k("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                    return n },
                _getGlobalServer: function(e) {
                    var t = "//" + e.host + (e.port ? ":" + e.port : "");
                    return e.protocol && (t = e.protocol + ":" + t), t },
                _handleOnErrorStackInfo: function() { this._ignoreOnError || this._handleStackInfo.apply(this, arguments) },
                _handleStackInfo: function(e, t) {
                    var n = this._prepareFrames(e, t);
                    this._triggerEvent("handle", { stackInfo: e, options: t }), this._processException(e.name, e.message, e.url, e.lineno, n, t) },
                _prepareFrames: function(e, t) {
                    var n = this,
                        i = [];
                    if (e.stack && e.stack.length && (l(e.stack, function(e, t) {
                            var r = n._normalizeFrame(t);
                            r && i.push(r) }), t && t.trimHeadFrames))
                        for (var r = 0; r < t.trimHeadFrames && r < i.length; r++) i[r].in_app = !1;
                    return i = i.slice(0, this._globalOptions.stackTraceLimit) },
                _normalizeFrame: function(e) {
                    if (e.url) {
                        var t = { filename: e.url, lineno: e.line, colno: e.column, function: e.func || "?" };
                        return t.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(t.filename) || /(Raven|TraceKit)\./.test(t.function) || /raven\.(min\.)?js$/.test(t.filename)), t } },
                _processException: function(e, t, n, i, r, o) {
                    var a;
                    if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) && (t += "", r && r.length ? (n = r[0].filename || n, r.reverse(), a = { frames: r }) : n && (a = { frames: [{ filename: n, lineno: i, in_app: !0 }] }), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
                        var s = d({ exception: { values: [{ type: e, value: t, stacktrace: a }] }, culprit: n }, o);
                        this._send(s) } },
                _trimPacket: function(e) {
                    var t = this._globalOptions.maxMessageLength;
                    if (e.message && (e.message = f(e.message, t)), e.exception) {
                        var n = e.exception.values[0];
                        n.value = f(n.value, t) }
                    return e },
                _getHttpData: function() {
                    if (this._hasDocument && L.location && L.location.href) {
                        var e = { headers: { "User-Agent": navigator.userAgent } };
                        return e.url = L.location.href, L.referrer && (e.headers.Referer = L.referrer), e } },
                _send: function(e) {
                    var t = this._globalOptions,
                        i = { project: this._globalProject, logger: t.logger, platform: "javascript" },
                        r = this._getHttpData();
                    r && (i.request = r), e.trimHeadFrames && delete e.trimHeadFrames, e = d(i, e), e.tags = d(d({}, this._globalContext.tags), e.tags), e.extra = d(d({}, this._globalContext.extra), e.extra), e.extra["session:duration"] = n() - this._startTime, this._breadcrumbs && this._breadcrumbs.length > 0 && (e.breadcrumbs = { values: [].slice.call(this._breadcrumbs, 0) }), c(e.tags) && delete e.tags, this._globalContext.user && (e.user = this._globalContext.user), t.environment && (e.environment = t.environment), t.release && (e.release = t.release), t.serverName && (e.server_name = t.serverName), o(t.dataCallback) && (e = t.dataCallback(e) || e), e && !c(e) && (o(t.shouldSendCallback) && !t.shouldSendCallback(e) || this._sendProcessedPayload(e)) },
                _getUuid: function() {
                    return g() },
                _sendProcessedPayload: function(e, t) {
                    var n = this,
                        i = this._globalOptions;
                    if (this._lastEventId = e.event_id || (e.event_id = this._getUuid()), e = this._trimPacket(e), this._logDebug("debug", "Raven about to send:", e), this.isSetup()) {
                        var r = { sentry_version: "7", sentry_client: "raven-js/" + this.VERSION, sentry_key: this._globalKey };
                        this._globalSecret && (r.sentry_secret = this._globalSecret);
                        var o = e.exception && e.exception.values[0];
                        this.captureBreadcrumb({ category: "sentry", message: o ? (o.type ? o.type + ": " : "") + o.value : e.message, event_id: e.event_id, level: e.level || "error" });
                        var a = this._globalEndpoint;
                        (i.transport || this._makeRequest).call(this, { url: a, auth: r, data: e, options: i, onSuccess: function() { n._triggerEvent("success", { data: e, src: a }), t && t() }, onError: function(i) { n._triggerEvent("failure", { data: e, src: a }), i = i || new Error("Raven send failed (no additional details provided)"), t && t(i) } }) } },
                _makeRequest: function(e) {
                    function t() { 200 === n.status ? e.onSuccess && e.onSuccess() : e.onError && e.onError(new Error("Sentry error code: " + n.status)) }
                    var n = new XMLHttpRequest,
                        i = "withCredentials" in n || "undefined" != typeof XDomainRequest;
                    if (i) {
                        var r = e.url; "withCredentials" in n ? n.onreadystatechange = function() { 4 === n.readyState && t() } : (n = new XDomainRequest, r = r.replace(/^https?:/, ""), n.onload = t), n.open("POST", r + "?" + v(e.auth)), n.send(x(e.data)) } },
                _logDebug: function(e) { this._originalConsoleMethods[e] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1)) },
                _mergeContext: function(e, t) { r(t) ? delete this._globalContext[e] : this._globalContext[e] = d(this._globalContext[e] || {}, t) }
            };
            var C = Object.prototype;
            "undefined" != typeof __false__ && __false__ && (i.utils = { isUndefined: r, isFunction: o, isString: a, isObject: s, isEmptyObject: c, isError: u, each: l, objectMerge: d, truncate: f, hasKey: h, joinRegExp: p, urlencode: v, uuid4: g, htmlTreeAsString: _, htmlElementAsString: y, parseUrl: m, fill: b }), i.prototype.setUser = i.prototype.setUserContext, i.prototype.setReleaseContext = i.prototype.setRelease, t.exports = i
        }),
        Ht = e(Nt),
        jt = Object.freeze({ default: Ht }),
        Vt = t(function(t) {
            var n = e(jt),
                i = window.Raven,
                r = new n;
            r.noConflict = function() {
                return window.Raven = i, r }, r.afterLoad(), t.exports = r }),
        Ut = e(Vt),
        zt = { false: !1, LIB_VERSION: "2.9.16" };
    St = "undefined" == typeof window ? { navigator: {} } : window;
    var Wt = Array.prototype,
        $t = Function.prototype,
        Gt = Object.prototype,
        Xt = Wt.slice,
        Kt = Gt.toString,
        Yt = Gt.hasOwnProperty,
        Qt = St.console,
        Jt = St.navigator,
        Zt = St.document,
        en = Jt.userAgent,
        tn = $t.bind,
        nn = Wt.forEach,
        rn = Wt.indexOf,
        on = Array.isArray,
        an = {},
        sn = { trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") } },
        cn = { log: function() {
                if (zt.false && !sn.isUndefined(Qt) && Qt) try { Qt.log.apply(Qt, arguments) } catch (e) { sn.each(arguments, function(e) { Qt.log(e) }) } }, error: function() {
                if (zt.false && !sn.isUndefined(Qt) && Qt) {
                    var e = ["Mixpanel error:"].concat(sn.toArray(arguments));
                    try { Qt.error.apply(Qt, e) } catch (t) { sn.each(e, function(e) { Qt.error(e) }) } } }, critical: function() {
                if (!sn.isUndefined(Qt) && Qt) {
                    var e = ["Mixpanel error:"].concat(sn.toArray(arguments));
                    try { Qt.error.apply(Qt, e) } catch (t) { sn.each(e, function(e) { Qt.error(e) }) } } } };
    sn.bind = function(e, t) {
        var n, i;
        if (tn && e.bind === tn) return tn.apply(e, Xt.call(arguments, 1));
        if (!sn.isFunction(e)) throw new TypeError;
        return n = Xt.call(arguments, 2), i = function() {
            if (!(this instanceof i)) return e.apply(t, n.concat(Xt.call(arguments)));
            var r = {};
            r.prototype = e.prototype;
            var o = new r;
            r.prototype = null;
            var a = e.apply(o, n.concat(Xt.call(arguments)));
            return Object(a) === a ? a : o } }, sn.bind_instance_methods = function(e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = sn.bind(e[t], e)) }, sn.each = function(e, t, n) {
        if (null !== e && void 0 !== e)
            if (nn && e.forEach === nn) e.forEach(t, n);
            else if (e.length === +e.length) {
            for (var i = 0, r = e.length; i < r; i++)
                if (i in e && t.call(n, e[i], i, e) === an) return } else
            for (var o in e)
                if (Yt.call(e, o) && t.call(n, e[o], o, e) === an) return }, sn.escapeHTML = function(e) {
        var t = e;
        return t && sn.isString(t) && (t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")), t }, sn.extend = function(e) {
        return sn.each(Xt.call(arguments, 1), function(t) {
            for (var n in t) void 0 !== t[n] && (e[n] = t[n]) }), e }, sn.isArray = on || function(e) {
        return "[object Array]" === Kt.call(e) }, sn.isFunction = function(e) {
        try {
            return /^\s*\bfunction\b/.test(e) } catch (e) {
            return !1 } }, sn.isArguments = function(e) {
        return !(!e || !Yt.call(e, "callee")) }, sn.toArray = function(e) {
        return e ? e.toArray ? e.toArray() : sn.isArray(e) ? Xt.call(e) : sn.isArguments(e) ? Xt.call(e) : sn.values(e) : [] }, sn.values = function(e) {
        var t = [];
        return null === e ? t : (sn.each(e, function(e) { t[t.length] = e }), t) }, sn.identity = function(e) {
        return e }, sn.include = function(e, t) {
        var n = !1;
        return null === e ? n : rn && e.indexOf === rn ? e.indexOf(t) != -1 : (sn.each(e, function(e) {
            if (n || (n = e === t)) return an }), n) }, sn.includes = function(e, t) {
        return e.indexOf(t) !== -1 }, sn.inherit = function(e, t) {
        return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e }, sn.isObject = function(e) {
        return e === Object(e) && !sn.isArray(e) }, sn.isEmptyObject = function(e) {
        if (sn.isObject(e)) {
            for (var t in e)
                if (Yt.call(e, t)) return !1;
            return !0 }
        return !1 }, sn.isUndefined = function(e) {
        return void 0 === e }, sn.isString = function(e) {
        return "[object String]" == Kt.call(e) }, sn.isDate = function(e) {
        return "[object Date]" == Kt.call(e) }, sn.isNumber = function(e) {
        return "[object Number]" == Kt.call(e) }, sn.isElement = function(e) {
        return !(!e || 1 !== e.nodeType) }, sn.encodeDates = function(e) {
        return sn.each(e, function(t, n) { sn.isDate(t) ? e[n] = sn.formatDate(t) : sn.isObject(t) && (e[n] = sn.encodeDates(t)) }), e }, sn.timestamp = function() {
        return Date.now = Date.now || function() {
            return +new Date }, Date.now() }, sn.formatDate = function(e) {
        function t(e) {
            return e < 10 ? "0" + e : e }
        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) }, sn.safewrap = function(e) {
        return function() {
            try {
                return e.apply(this, arguments) } catch (e) { cn.critical("Implementation error. Please contact support@mixpanel.com.") } } }, sn.safewrap_class = function(e, t) {
        for (var n = 0; n < t.length; n++) e.prototype[t[n]] = sn.safewrap(e.prototype[t[n]]) }, sn.safewrap_instance_methods = function(e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = sn.safewrap(e[t])) }, sn.strip_empty_properties = function(e) {
        var t = {};
        return sn.each(e, function(e, n) { sn.isString(e) && e.length > 0 && (t[n] = e) }), t }, sn.truncate = function(e, t) {
        var n;
        return "string" == typeof e ? n = e.slice(0, t) : sn.isArray(e) ? (n = [], sn.each(e, function(e) { n.push(sn.truncate(e, t)) })) : sn.isObject(e) ? (n = {}, sn.each(e, function(e, i) { n[i] = sn.truncate(e, t) })) : n = e, n }, sn.JSONEncode = function() {
        return function(e) {
            var t = e,
                n = function(e) {
                    var t = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        n = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
                    return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, function(e) {
                        var t = n[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + e + '"' },
                i = function(e, t) {
                    var r = "",
                        o = "    ",
                        a = 0,
                        s = "",
                        c = "",
                        u = 0,
                        l = r,
                        d = [],
                        f = t[e];
                    switch (f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(e)), typeof f) {
                        case "string":
                            return n(f);
                        case "number":
                            return isFinite(f) ? String(f) : "null";
                        case "boolean":
                        case "null":
                            return String(f);
                        case "object":
                            if (!f) return "null";
                            if (r += o, d = [], "[object Array]" === Kt.apply(f)) {
                                for (u = f.length, a = 0; a < u; a += 1) d[a] = i(a, f) || "null";
                                return c = 0 === d.length ? "[]" : r ? "[\n" + r + d.join(",\n" + r) + "\n" + l + "]" : "[" + d.join(",") + "]", r = l, c }
                            for (s in f) Yt.call(f, s) && (c = i(s, f), c && d.push(n(s) + (r ? ": " : ":") + c));
                            return c = 0 === d.length ? "{}" : r ? "{" + d.join(",") + l + "}" : "{" + d.join(",") + "}", r = l, c } };
            return i("", { "": t }) } }(), sn.JSONDecode = function() {
        var e, t, n, i, r = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t" },
            o = function(t) {
                throw { name: "SyntaxError", message: t, at: e, text: n } },
            a = function(i) {
                return i && i !== t && o("Expected '" + i + "' instead of '" + t + "'"), t = n.charAt(e), e += 1, t },
            s = function() {
                var e, n = "";
                for ("-" === t && (n = "-", a("-")); t >= "0" && t <= "9";) n += t, a();
                if ("." === t)
                    for (n += "."; a() && t >= "0" && t <= "9";) n += t;
                if ("e" === t || "E" === t)
                    for (n += t, a(), "-" !== t && "+" !== t || (n += t, a()); t >= "0" && t <= "9";) n += t, a();
                return e = +n, isFinite(e) ? e : void o("Bad number") },
            c = function() {
                var e, n, i, s = "";
                if ('"' === t)
                    for (; a();) {
                        if ('"' === t) return a(), s;
                        if ("\\" === t)
                            if (a(), "u" === t) {
                                for (i = 0, n = 0; n < 4 && (e = parseInt(a(), 16), isFinite(e)); n += 1) i = 16 * i + e;
                                s += String.fromCharCode(i) } else {
                                if ("string" != typeof r[t]) break;
                                s += r[t] }
                        else s += t }
                o("Bad string") },
            u = function() {
                for (; t && t <= " ";) a() },
            l = function() {
                switch (t) {
                    case "t":
                        return a("t"), a("r"), a("u"), a("e"), !0;
                    case "f":
                        return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
                    case "n":
                        return a("n"), a("u"), a("l"), a("l"), null }
                o('Unexpected "' + t + '"') },
            d = function() {
                var e = [];
                if ("[" === t) {
                    if (a("["), u(), "]" === t) return a("]"), e;
                    for (; t;) {
                        if (e.push(i()), u(), "]" === t) return a("]"), e;
                        a(","), u() } }
                o("Bad array") },
            f = function() {
                var e, n = {};
                if ("{" === t) {
                    if (a("{"), u(), "}" === t) return a("}"), n;
                    for (; t;) {
                        if (e = c(), u(), a(":"), Object.hasOwnProperty.call(n, e) && o('Duplicate key "' + e + '"'), n[e] = i(), u(), "}" === t) return a("}"), n;
                        a(","), u() } }
                o("Bad object") };
        return i = function() {
                switch (u(), t) {
                    case "{":
                        return f();
                    case "[":
                        return d();
                    case '"':
                        return c();
                    case "-":
                        return s();
                    default:
                        return t >= "0" && t <= "9" ? s() : l() } },
            function(r) {
                var a;
                return n = r, e = 0, t = " ", a = i(), u(), t && o("Syntax error"), a } }(), sn.base64Encode = function(e) {
        var t, n, i, r, o, a, s, c, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            l = 0,
            d = 0,
            f = "",
            h = [];
        if (!e) return e;
        e = sn.utf8Encode(e);
        do t = e.charCodeAt(l++), n = e.charCodeAt(l++), i = e.charCodeAt(l++), c = t << 16 | n << 8 | i, r = c >> 18 & 63, o = c >> 12 & 63, a = c >> 6 & 63, s = 63 & c, h[d++] = u.charAt(r) + u.charAt(o) + u.charAt(a) + u.charAt(s); while (l < e.length);
        switch (f = h.join(""), e.length % 3) {
            case 1:
                f = f.slice(0, -2) + "==";
                break;
            case 2:
                f = f.slice(0, -1) + "=" }
        return f }, sn.utf8Encode = function(e) { e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        var t, n, i, r = "",
            o = 0;
        for (t = n = 0, o = e.length, i = 0; i < o; i++) {
            var a = e.charCodeAt(i),
                s = null;
            a < 128 ? n++ : s = a > 127 && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128), null !== s && (n > t && (r += e.substring(t, n)), r += s, t = n = i + 1) }
        return n > t && (r += e.substring(t, e.length)), r }, sn.UUID = function() {
        var e = function() {
                for (var e = 1 * new Date, t = 0; e == 1 * new Date;) t++;
                return e.toString(16) + t.toString(16) },
            t = function() {
                return Math.random().toString(16).replace(".", "") },
            n = function() {
                function e(e, t) {
                    var n, i = 0;
                    for (n = 0; n < t.length; n++) i |= r[n] << 8 * n;
                    return e ^ i }
                var t, n, i = en,
                    r = [],
                    o = 0;
                for (t = 0; t < i.length; t++) n = i.charCodeAt(t), r.unshift(255 & n), r.length >= 4 && (o = e(o, r), r = []);
                return r.length > 0 && (o = e(o, r)), o.toString(16) };
        return function() {
            var i = (screen.height * screen.width).toString(16);
            return e() + "-" + t() + "-" + n() + "-" + i + "-" + e() } }(), sn.isBlockedUA = function(e) {
        return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp)/i.test(e) }, sn.HTTPBuildQuery = function(e, t) {
        var n, i, r = [];
        return sn.isUndefined(t) && (t = "&"), sn.each(e, function(e, t) { n = encodeURIComponent(e.toString()), i = encodeURIComponent(t), r[r.length] = i + "=" + n }), r.join(t) }, sn.getQueryParam = function(e, t) { t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var n = "[\\?&]" + t + "=([^&#]*)",
            i = new RegExp(n),
            r = i.exec(e);
        return null === r || r && "string" != typeof r[1] && r[1].length ? "" : decodeURIComponent(r[1]).replace(/\+/g, " ") }, sn.getHashParam = function(e, t) {
        var n = e.match(new RegExp(t + "=([^&]*)"));
        return n ? n[1] : null }, sn.cookie = { get: function(e) {
            for (var t = e + "=", n = Zt.cookie.split(";"), i = 0; i < n.length; i++) {
                for (var r = n[i];
                    " " == r.charAt(0);) r = r.substring(1, r.length);
                if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length)) }
            return null }, parse: function(e) {
            var t;
            try { t = sn.JSONDecode(sn.cookie.get(e)) || {} } catch (e) {}
            return t }, set_seconds: function(e, t, n, i, r) {
            var o = "",
                a = "",
                s = "";
            if (i) {
                var c = Zt.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
                    u = c ? c[0] : "";
                o = u ? "; domain=." + u : "" }
            if (n) {
                var l = new Date;
                l.setTime(l.getTime() + 1e3 * n), a = "; expires=" + l.toGMTString() }
            r && (s = "; secure"), Zt.cookie = e + "=" + encodeURIComponent(t) + a + "; path=/" + o + s }, set: function(e, t, n, i, r) {
            var o = "",
                a = "",
                s = "";
            if (i) {
                var c = Zt.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
                    u = c ? c[0] : "";
                o = u ? "; domain=." + u : "" }
            if (n) {
                var l = new Date;
                l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3), a = "; expires=" + l.toGMTString() }
            r && (s = "; secure");
            var d = e + "=" + encodeURIComponent(t) + a + "; path=/" + o + s;
            return Zt.cookie = d, d }, remove: function(e, t) { sn.cookie.set(e, "", -1, t) } }, sn.localStorage = { error: function(e) { cn.error("localStorage error: " + e) }, get: function(e) {
            try {
                return window.localStorage.getItem(e) } catch (e) { sn.localStorage.error(e) }
            return null }, parse: function(e) {
            try {
                return sn.JSONDecode(sn.localStorage.get(e)) || {} } catch (e) {}
            return null }, set: function(e, t) {
            try { window.localStorage.setItem(e, t) } catch (e) { sn.localStorage.error(e) } }, remove: function(e) {
            try { window.localStorage.removeItem(e) } catch (e) { sn.localStorage.error(e) } } }, sn.register_event = function() {
        function e(e, n, i) {
            var r = function(r) {
                if (r = r || t(window.event)) {
                    var o, a, s = !0;
                    return sn.isFunction(i) && (o = i(r)), a = n.call(e, r), !1 !== o && !1 !== a || (s = !1), s } };
            return r }

        function t(e) {
            return e && (e.preventDefault = t.preventDefault, e.stopPropagation = t.stopPropagation), e }
        var n = function(t, n, i, r, o) {
            if (!t) return void cn.error("No valid element provided to register_event");
            if (t.addEventListener && !r) t.addEventListener(n, i, !!o);
            else {
                var a = "on" + n,
                    s = t[a];
                t[a] = e(t, i, s) } };
        return t.preventDefault = function() { this.returnValue = !1 }, t.stopPropagation = function() { this.cancelBubble = !0 }, n }(), sn.dom_query = function() {
        function e(e) {
            return e.all ? e.all : e.getElementsByTagName("*") }

        function t(e, t) {
            var n = " " + t + " ";
            return (" " + e.className + " ").replace(i, " ").indexOf(n) >= 0 }

        function n(n) {
            if (!Zt.getElementsByTagName) return [];
            var i, r, o, a, s, c, u, l, d, f, h = n.split(" "),
                p = [Zt];
            for (c = 0; c < h.length; c++)
                if (i = h[c].replace(/^\s+/, "").replace(/\s+$/, ""), i.indexOf("#") > -1) { r = i.split("#"), o = r[0];
                    var v = r[1],
                        m = Zt.getElementById(v);
                    if (!m || o && m.nodeName.toLowerCase() != o) return [];
                    p = [m] } else if (i.indexOf(".") > -1) { r = i.split("."), o = r[0];
                var g = r[1];
                for (o || (o = "*"), a = [], s = 0, u = 0; u < p.length; u++)
                    for (d = "*" == o ? e(p[u]) : p[u].getElementsByTagName(o), l = 0; l < d.length; l++) a[s++] = d[l];
                for (p = [], f = 0, u = 0; u < a.length; u++) a[u].className && sn.isString(a[u].className) && t(a[u], g) && (p[f++] = a[u]) } else {
                var _ = i.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/);
                if (_) { o = _[1];
                    var y = _[2],
                        b = _[3],
                        w = _[4];
                    for (o || (o = "*"), a = [], s = 0, u = 0; u < p.length; u++)
                        for (d = "*" == o ? e(p[u]) : p[u].getElementsByTagName(o), l = 0; l < d.length; l++) a[s++] = d[l];
                    p = [], f = 0;
                    var k;
                    switch (b) {
                        case "=":
                            k = function(e) {
                                return e.getAttribute(y) == w };
                            break;
                        case "~":
                            k = function(e) {
                                return e.getAttribute(y).match(new RegExp("\\b" + w + "\\b")) };
                            break;
                        case "|":
                            k = function(e) {
                                return e.getAttribute(y).match(new RegExp("^" + w + "-?")) };
                            break;
                        case "^":
                            k = function(e) {
                                return 0 === e.getAttribute(y).indexOf(w) };
                            break;
                        case "$":
                            k = function(e) {
                                return e.getAttribute(y).lastIndexOf(w) == e.getAttribute(y).length - w.length };
                            break;
                        case "*":
                            k = function(e) {
                                return e.getAttribute(y).indexOf(w) > -1 };
                            break;
                        default:
                            k = function(e) {
                                return e.getAttribute(y) } }
                    for (p = [], f = 0, u = 0; u < a.length; u++) k(a[u]) && (p[f++] = a[u]) } else {
                    for (o = i, a = [], s = 0, u = 0; u < p.length; u++)
                        for (d = p[u].getElementsByTagName(o), l = 0; l < d.length; l++) a[s++] = d[l];
                    p = a } }
            return p }
        var i = /[\t\r\n]/g;
        return function(e) {
            return sn.isElement(e) ? [e] : sn.isObject(e) && !sn.isUndefined(e.length) ? e : n.call(this, e) } }(), sn.info = { campaignParams: function() {
            var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                t = "",
                n = {};
            return sn.each(e, function(e) { t = sn.getQueryParam(Zt.URL, e), t.length && (n[e] = t) }), n }, searchEngine: function(e) {
            return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null }, searchInfo: function(e) {
            var t = sn.info.searchEngine(e),
                n = "yahoo" != t ? "q" : "p",
                i = {};
            if (null !== t) { i.$search_engine = t;
                var r = sn.getQueryParam(e, n);
                r.length && (i.mp_keyword = r) }
            return i }, browser: function(e, t, n) {
            return t = t || "", n || sn.includes(e, " OPR/") ? sn.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : sn.includes(e, "IEMobile") || sn.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : sn.includes(e, "Edge") ? "Microsoft Edge" : sn.includes(e, "FBIOS") ? "Facebook Mobile" : sn.includes(e, "Chrome") ? "Chrome" : sn.includes(e, "CriOS") ? "Chrome iOS" : sn.includes(e, "FxiOS") ? "Firefox iOS" : sn.includes(t, "Apple") ? sn.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : sn.includes(e, "Android") ? "Android Mobile" : sn.includes(e, "Konqueror") ? "Konqueror" : sn.includes(e, "Firefox") ? "Firefox" : sn.includes(e, "MSIE") || sn.includes(e, "Trident/") ? "Internet Explorer" : sn.includes(e, "Gecko") ? "Mozilla" : "" }, browserVersion: function(e, t, n) {
            var i = sn.info.browser(e, t, n),
                r = { "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/, "Microsoft Edge": /Edge\/(\d+(\.\d+)?)/, Chrome: /Chrome\/(\d+(\.\d+)?)/, "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/, Safari: /Version\/(\d+(\.\d+)?)/, "Mobile Safari": /Version\/(\d+(\.\d+)?)/, Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/, Firefox: /Firefox\/(\d+(\.\d+)?)/, "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/, Konqueror: /Konqueror:(\d+(\.\d+)?)/, BlackBerry: /BlackBerry (\d+(\.\d+)?)/, "Android Mobile": /android\s(\d+(\.\d+)?)/, "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/, Mozilla: /rv:(\d+(\.\d+)?)/ },
                o = r[i];
            if (void 0 === o) return null;
            var a = e.match(o);
            return a ? parseFloat(a[a.length - 2]) : null }, os: function() {
            var e = en;
            return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : "" }, device: function(e) {
            return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : "" }, referringDomain: function(e) {
            var t = e.split("/");
            return t.length >= 3 ? t[2] : "" }, properties: function() {
            return sn.extend(sn.strip_empty_properties({ $os: sn.info.os(), $browser: sn.info.browser(en, Jt.vendor, window.opera), $referrer: Zt.referrer, $referring_domain: sn.info.referringDomain(Zt.referrer), $device: sn.info.device(en) }), { $current_url: window.location.href, $browser_version: sn.info.browserVersion(en, Jt.vendor, window.opera), $screen_height: screen.height, $screen_width: screen.width, mp_lib: "web", $lib_version: zt.LIB_VERSION }) }, people_properties: function() {
            return sn.extend(sn.strip_empty_properties({ $os: sn.info.os(), $browser: sn.info.browser(en, Jt.vendor, window.opera) }), { $browser_version: sn.info.browserVersion(en, Jt.vendor, window.opera) }) }, pageviewInfo: function(e) {
            return sn.strip_empty_properties({ mp_page: e, mp_referrer: Zt.referrer, mp_browser: sn.info.browser(en, Jt.vendor, window.opera), mp_platform: sn.info.os() }) } }, sn.toArray = sn.toArray, sn.isObject = sn.isObject, sn.JSONEncode = sn.JSONEncode, sn.JSONDecode = sn.JSONDecode, sn.isBlockedUA = sn.isBlockedUA, sn.isEmptyObject = sn.isEmptyObject, sn.info = sn.info, sn.info.device = sn.info.device, sn.info.browser = sn.info.browser, sn.info.properties = sn.info.properties;
    var un = "__mpced",
        ln = 1,
        dn = 3,
        fn = {
            _initializedTokens: [],
            _previousElementSibling: function(e) {
                if (e.previousElementSibling) return e.previousElementSibling;
                do e = e.previousSibling; while (e && e.nodeType !== ln);
                return e },
            _loadScript: function(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.src = e, n.onload = t;
                var i = document.getElementsByTagName("script");
                i.length > 0 ? i[0].parentNode.insertBefore(n, i[0]) : document.body.appendChild(n) },
            _getClassName: function(e) {
                switch (typeof e.className) {
                    case "string":
                        return e.className;
                    case "object":
                        return e.className.baseVal || e.getAttribute("class") || "";
                    default:
                        return "" } },
            _getPropertiesFromElement: function(e) {
                var t = { classes: this._getClassName(e).split(" "), tag_name: e.tagName.toLowerCase() };
                if (sn.includes(["input", "select", "textarea"], e.tagName.toLowerCase())) {
                    var n = this._getFormFieldValue(e);
                    this._includeProperty(e, n) && (t.value = n) }
                sn.each(e.attributes, function(e) { t["attr__" + e.name] = e.value });
                for (var i = 1, r = 1, o = e; o = this._previousElementSibling(o);) i++, o.tagName === e.tagName && r++;
                return t.nth_child = i, t.nth_of_type = r, t },
            _isTag: function(e, t) {
                return e && e.tagName && e.tagName.toLowerCase() === t.toLowerCase() },
            _shouldTrackDomEvent: function(e, t) {
                if (!e || this._isTag(e, "html") || e.nodeType !== ln) return !1;
                var n = e.tagName.toLowerCase();
                switch (n) {
                    case "html":
                        return !1;
                    case "form":
                        return "submit" === t.type;
                    case "input":
                        return ["button", "submit"].indexOf(e.getAttribute("type")) === -1 ? "change" === t.type : "click" === t.type;
                    case "select":
                    case "textarea":
                        return "change" === t.type;
                    default:
                        return "click" === t.type } },
            _getDefaultProperties: function(e) {
                return { $event_type: e, $ce_version: 1, $host: window.location.host, $pathname: window.location.pathname } },
            _getInputValue: function(e) {
                var t = null,
                    n = e.type.toLowerCase();
                switch (n) {
                    case "checkbox":
                        e.checked && (t = [e.value]);
                        break;
                    case "radio":
                        e.checked && (t = e.value);
                        break;
                    default:
                        t = e.value }
                return t },
            _getSelectValue: function(e) {
                var t;
                if (e.multiple) {
                    var n = [];
                    sn.each(e.querySelectorAll("[selected]"), function(e) { n.push(e.value) }), t = n } else t = e.value;
                return t },
            _includeProperty: function(e, t) {
                for (var n = e; n.parentNode && !this._isTag(n, "body"); n = n.parentNode) {
                    var i = this._getClassName(n).split(" ");
                    if (sn.includes(i, "mp-sensitive") || sn.includes(i, "mp-no-track")) return !1 }
                if (sn.includes(this._getClassName(e).split(" "), "mp-include")) return !0;
                if (null === t) return !1;
                var r = e.type || "";
                switch (r.toLowerCase()) {
                    case "hidden":
                        return !1;
                    case "password":
                        return !1 }
                var o = e.name || e.id || "",
                    a = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|seccode|securitycode|securitynum|socialsec|socsec|ssn/i;
                if (a.test(o.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
                if ("string" == typeof t) {
                    var s = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
                    if (s.test((t || "").replace(/[\- ]/g, ""))) return !1;
                    var c = /(^\d{3}-?\d{2}-?\d{4}$)/;
                    if (c.test(t)) return !1 }
                return !0 },
            _getFormFieldValue: function(e) {
                var t;
                switch (e.tagName.toLowerCase()) {
                    case "input":
                        t = this._getInputValue(e);
                        break;
                    case "select":
                        t = this._getSelectValue(e);
                        break;
                    default:
                        t = e.value || e.textContent }
                return this._includeProperty(e, t) ? t : null },
            _getFormFieldProperties: function(e) {
                var t = {};
                return sn.each(e.elements, function(e) {
                    var n = e.getAttribute("name") || e.getAttribute("id");
                    if (null !== n) { n = "$form_field__" + n;
                        var i = this._getFormFieldValue(e);
                        if (this._includeProperty(e, i)) {
                            var r = t[n];
                            void 0 !== r ? t[n] = [].concat(r, i) : t[n] = i } } }, this), t },
            _extractCustomPropertyValue: function(e) {
                var t = [];
                return sn.each(document.querySelectorAll(e.css_selector), function(e) {
                    ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? t.push(e.value) : e.textContent && t.push(e.textContent) }), t.join(", ") },
            _getCustomProperties: function(e) {
                var t = {};
                return sn.each(this._customProperties, function(n) { sn.each(n.event_selectors, function(i) {
                        var r = document.querySelectorAll(i);
                        sn.each(r, function(i) { sn.includes(e, i) && (t[n.name] = this._extractCustomPropertyValue(n)) }, this) }, this) }, this), t },
            checkForBackoff: function(e) {
                var t = parseInt(e.getResponseHeader("X-MP-CE-Backoff"));
                if (!isNaN(t) && t > 0) { sn.timestamp() + 1e3 * t;
                    sn.cookie.set_seconds(un, !0, t, !0) } },
            _getEventTarget: function(e) {
                return "undefined" == typeof e.target ? e.srcElement : e.target },
            _trackEvent: function(e, t) {
                var n = this._getEventTarget(e);
                if (n.nodeType === dn && (n = n.parentNode), this._shouldTrackDomEvent(n, e)) {
                    for (var i = [n], r = n; r.parentNode && !this._isTag(r, "body");) i.push(r.parentNode), r = r.parentNode;
                    var o, a, s, c = [],
                        u = !1;
                    if (sn.each(i, function(e, t) {
                            if ("a" === e.tagName.toLowerCase() ? o = e.getAttribute("href") : "form" === e.tagName.toLowerCase() && (s = e), !a && t < 5 && e.textContent) {
                                var n = sn.trim(e.textContent);
                                n && (a = n.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)) }
                            var i = this._getClassName(e).split(" ");
                            sn.includes(i, "mp-no-track") && (u = !0), c.push(this._getPropertiesFromElement(e)) }, this), u) return !1;
                    var l = sn.extend(this._getDefaultProperties(e.type), { $elements: c, $el_attr__href: o, $el_text: a }, this._getCustomProperties(i));
                    return !s || "submit" !== e.type && "click" !== e.type || sn.extend(l, this._getFormFieldProperties(s)), t.track("$web_event", l), !0 } },
            _navigate: function(e) { window.location.href = e },
            _addDomEventHandlers: function(e) {
                var t = sn.bind(function(t) { sn.cookie.parse(un) !== !0 && (t = t || window.event, this._trackEvent(t, e)) }, this);
                sn.register_event(document, "submit", t, !1, !0), sn.register_event(document, "change", t, !1, !0), sn.register_event(document, "click", t, !1, !0) },
            _customProperties: {},
            init: function(e) {
                if (!document || !document.body) {
                    var t = this;
                    return void setTimeout(function() { t.init(e) }, 500) }
                var n = e.get_config("token");
                if (!(this._initializedTokens.indexOf(n) > -1 || (this._initializedTokens.push(n), this._maybeLoadEditor(e)))) {
                    var i = sn.bind(function(t) {
                        t && t.config && t.config.enable_collect_everything === !0 ? (t.custom_properties && (this._customProperties = t.custom_properties), e.track("$web_event", sn.extend({
                            $title: document.title
                        }, this._getDefaultProperties("pageview"))), this._addDomEventHandlers(e)) : e.__autotrack_enabled = !1
                    }, this);
                    e._send_request(e.get_config("decide_host") + "/decide/", { verbose: !0, version: "1", lib: "web", token: n }, e._prepare_callback(i))
                }
            },
            _editorParamsFromHash: function(e, t) {
                var n;
                try {
                    var i = sn.getHashParam(t, "state");
                    i = JSON.parse(decodeURIComponent(i));
                    var r = sn.getHashParam(t, "expires_in");
                    n = { accessToken: sn.getHashParam(t, "access_token"), accessTokenExpiresAt: (new Date).getTime() + 1e3 * Number(r), bookmarkletMode: !!i.bookmarkletMode, projectId: i.projectId, projectOwnerId: i.projectOwnerId, projectToken: i.token, readOnly: i.readOnly, userFlags: i.userFlags, userId: i.userId }, window.sessionStorage.setItem("editorParams", JSON.stringify(n)), i.desiredHash ? window.location.hash = i.desiredHash : window.history ? history.replaceState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "" } catch (e) {}
                return n },
            _maybeLoadEditor: function(e) {
                var t = !1;
                if (sn.getHashParam(window.location.hash, "state")) {
                    var n = sn.getHashParam(window.location.hash, "state");
                    n = JSON.parse(decodeURIComponent(n)), t = "mpeditor" === n.action }
                var i, r = !!window.sessionStorage.getItem("_mpcehash");
                return t ? i = this._editorParamsFromHash(e, window.location.hash) : r ? (i = this._editorParamsFromHash(e, window.sessionStorage.getItem("_mpcehash")), window.sessionStorage.removeItem("_mpcehash")) : i = JSON.parse(window.sessionStorage.getItem("editorParams") || "{}"), !(!i.projectToken || e.get_config("token") !== i.projectToken) && (this._loadEditor(e, i), !0) },
            _editorLoaded: !1,
            _loadEditor: function(e, t) {
                if (!this._editorLoaded) { this._editorLoaded = !0;
                    var n, i = "?_ts=" + (new Date).getTime(),
                        r = e.get_config("app_host") + "/site_media";
                    return n = zt.false ? r + "/compiled/reports/collect-everything/editor.js" + i : r + "/bundle-webpack/reports/collect-everything/editor.min.js" + i, this._loadScript(n, function() { window.mp_load_editor(t) }), !0 }
                return !1 },
            enabledForProject: function(e, t, n) { t = sn.isUndefined(t) ? 10 : t, n = sn.isUndefined(n) ? 10 : n;
                for (var i = 0, r = 0; r < e.length; r++) i += e.charCodeAt(r);
                return i % t < n },
            isBrowserSupported: function() {
                return sn.isFunction(document.querySelectorAll) }
        };
    sn.bind_instance_methods(fn), sn.safewrap_instance_methods(fn);
    var hn, pn, vn = 0,
        mn = 1,
        gn = "mixpanel",
        _n = "__mps",
        yn = "__mpso",
        bn = "__mpa",
        wn = "__mpap",
        kn = "__mpu",
        xn = "$set",
        Sn = "$set_once",
        Tn = "$add",
        En = "$append",
        Pn = "$union",
        Ln = "$people_distinct_id",
        Cn = "__alias",
        On = "__cmpns",
        An = "__timers",
        In = [_n, yn, bn, wn, kn, Ln, Cn, On, An],
        Mn = "https:" === document.location.protocol ? "https://" : "http://",
        Fn = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        qn = !Fn && en.indexOf("MSIE") === -1 && en.indexOf("Mozilla") === -1,
        Rn = { api_host: Mn + "api.mixpanel.com", app_host: Mn + "mixpanel.com", autotrack: !0, cdn: Mn + "cdn.mxpnl.com", cross_subdomain_cookie: !0, persistence: "cookie", persistence_name: "", cookie_name: "", loaded: function() {}, store_google: !0, save_referrer: !0, test: !1, verbose: !1, img: !1, track_pageview: !0, debug: !1, track_links_timeout: 300, cookie_expiration: 365, upgrade: !1, disable_persistence: !1, disable_cookie: !1, secure_cookie: !1, ip: !0, property_blacklist: [] };
    Rn.decide_host = Rn.api_host;
    var Bn = !1,
        Dn = function() {};
    Dn.prototype.create_properties = function() {}, Dn.prototype.event_handler = function() {}, Dn.prototype.after_track_handler = function() {}, Dn.prototype.init = function(e) {
        return this.mp = e, this }, Dn.prototype.track = function(e, t, n, i) {
        var r = this,
            o = sn.dom_query(e);
        return 0 === o.length ? void cn.error("The DOM query (" + e + ") returned 0 elements") : (sn.each(o, function(e) { sn.register_event(e, this.override_event, function(e) {
                var o = {},
                    a = r.create_properties(n, this),
                    s = r.mp.get_config("track_links_timeout");
                r.event_handler(e, this, o), window.setTimeout(r.track_callback(i, a, o, !0), s), r.mp.track(t, a, r.track_callback(i, a, o)) }) }, this), !0) }, Dn.prototype.track_callback = function(e, t, n, i) { i = i || !1;
        var r = this;
        return function() { n.callback_fired || (n.callback_fired = !0, e && e(i, t) === !1 || r.after_track_handler(t, n, i)) } }, Dn.prototype.create_properties = function(e, t) {
        var n;
        return n = "function" == typeof e ? e(t) : sn.extend({}, e) };
    var Nn = function() { this.override_event = "click" };
    sn.inherit(Nn, Dn), Nn.prototype.create_properties = function(e, t) {
        var n = Nn.superclass.create_properties.apply(this, arguments);
        return t.href && (n.url = t.href), n }, Nn.prototype.event_handler = function(e, t, n) { n.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target, n.href = t.href, n.new_tab || e.preventDefault() }, Nn.prototype.after_track_handler = function(e, t) { t.new_tab || setTimeout(function() { window.location = t.href }, 0) };
    var Hn = function() { this.override_event = "submit" };
    sn.inherit(Hn, Dn), Hn.prototype.event_handler = function(e, t, n) { n.element = t, e.preventDefault() }, Hn.prototype.after_track_handler = function(e, t) { setTimeout(function() { t.element.submit() }, 0) };
    var jn = function(e) { this.props = {}, this.campaign_params_saved = !1, e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
        var t = e.persistence; "cookie" !== t && "localStorage" !== t && (cn.critical("Unknown persistence type " + t + "; falling back to cookie"), t = e.persistence = "cookie");
        var n = function() {
            var e = !0;
            try {
                var t = "__mplssupport__",
                    n = "xyz";
                sn.localStorage.set(t, n), sn.localStorage.get(t) !== n && (e = !1), sn.localStorage.remove(t) } catch (t) { e = !1 }
            return e || cn.error("localStorage unsupported; falling back to cookie store"), e }; "localStorage" === t && n() ? this.storage = sn.localStorage : this.storage = sn.cookie, this.load(), this.update_config(e), this.upgrade(e), this.save() };
    jn.prototype.properties = function() {
        var e = {};
        return sn.each(this.props, function(t, n) { sn.include(In, n) || (e[n] = t) }), e }, jn.prototype.load = function() {
        if (!this.disabled) {
            var e = this.storage.parse(this.name);
            e && (this.props = sn.extend({}, e)) } }, jn.prototype.upgrade = function(e) {
        var t, n, i = e.upgrade;
        i && (t = "mp_super_properties", "string" == typeof i && (t = i), n = this.storage.parse(t), this.storage.remove(t), this.storage.remove(t, !0), n && (this.props = sn.extend(this.props, n.all, n.events))), e.cookie_name || "mixpanel" === e.name || (t = "mp_" + e.token + "_" + e.name, n = this.storage.parse(t), n && (this.storage.remove(t), this.storage.remove(t, !0), this.register_once(n))), this.storage === sn.localStorage && (n = sn.cookie.parse(this.name), sn.cookie.remove(this.name), sn.cookie.remove(this.name, !0), n && this.register_once(n)) }, jn.prototype.save = function() { this.disabled || (this._expire_notification_campaigns(), this.storage.set(this.name, sn.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure)) }, jn.prototype.remove = function() { this.storage.remove(this.name, !1), this.storage.remove(this.name, !0) }, jn.prototype.clear = function() { this.remove(), this.props = {} }, jn.prototype.register_once = function(e, t, n) {
        return !!sn.isObject(e) && ("undefined" == typeof t && (t = "None"), this.expire_days = "undefined" == typeof n ? this.default_expiry : n, sn.each(e, function(e, n) { this.props[n] && this.props[n] !== t || (this.props[n] = e) }, this), this.save(), !0) }, jn.prototype.register = function(e, t) {
        return !!sn.isObject(e) && (this.expire_days = "undefined" == typeof t ? this.default_expiry : t, sn.extend(this.props, e), this.save(), !0) }, jn.prototype.unregister = function(e) { e in this.props && (delete this.props[e], this.save()) }, jn.prototype._expire_notification_campaigns = sn.safewrap(function() {
        var e = this.props[On],
            t = zt.false ? 6e4 : 36e5;
        if (e) {
            for (var n in e) 1 * new Date - e[n] > t && delete e[n];
            sn.isEmptyObject(e) && delete this.props[On] } }), jn.prototype.update_campaign_params = function() { this.campaign_params_saved || (this.register_once(sn.info.campaignParams()), this.campaign_params_saved = !0) }, jn.prototype.update_search_keyword = function(e) { this.register(sn.info.searchInfo(e)) }, jn.prototype.update_referrer_info = function(e) { this.register_once({ $initial_referrer: e || "$direct", $initial_referring_domain: sn.info.referringDomain(e) || "$direct" }, "") }, jn.prototype.get_referrer_info = function() {
        return sn.strip_empty_properties({ $initial_referrer: this.props.$initial_referrer, $initial_referring_domain: this.props.$initial_referring_domain }) }, jn.prototype.safe_merge = function(e) {
        return sn.each(this.props, function(t, n) { n in e || (e[n] = t) }), e }, jn.prototype.update_config = function(e) { this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie) }, jn.prototype.set_disabled = function(e) { this.disabled = e, this.disabled && this.remove() }, jn.prototype.set_cross_subdomain = function(e) { e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save()) }, jn.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain }, jn.prototype.set_secure = function(e) { e !== this.secure && (this.secure = !!e, this.remove(), this.save()) }, jn.prototype._add_to_people_queue = function(e, t) {
        var n = this._get_queue_key(e),
            i = t[e],
            r = this._get_or_create_queue(xn),
            o = this._get_or_create_queue(Sn),
            a = this._get_or_create_queue(Tn),
            s = this._get_or_create_queue(Pn),
            c = this._get_or_create_queue(En, []);
        n === _n ? (sn.extend(r, i), this._pop_from_people_queue(Tn, i), this._pop_from_people_queue(Pn, i)) : n === yn ? sn.each(i, function(e, t) { t in o || (o[t] = e) }) : n === bn ? sn.each(i, function(e, t) { t in r ? r[t] += e : (t in a || (a[t] = 0), a[t] += e) }, this) : n === kn ? sn.each(i, function(e, t) { sn.isArray(e) && (t in s || (s[t] = []), s[t] = s[t].concat(e)) }) : n === wn && c.push(i), cn.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), cn.log(t), this.save() }, jn.prototype._pop_from_people_queue = function(e, t) {
        var n = this._get_queue(e);
        sn.isUndefined(n) || (sn.each(t, function(e, t) { delete n[t] }, this), this.save()) }, jn.prototype._get_queue_key = function(e) {
        return e === xn ? _n : e === Sn ? yn : e === Tn ? bn : e === En ? wn : e === Pn ? kn : void cn.error("Invalid queue:", e) }, jn.prototype._get_queue = function(e) {
        return this.props[this._get_queue_key(e)] }, jn.prototype._get_or_create_queue = function(e, t) {
        var n = this._get_queue_key(e);
        return t = sn.isUndefined(t) ? {} : t, this.props[n] || (this.props[n] = t) }, jn.prototype.set_event_timer = function(e, t) {
        var n = this.props[An] || {};
        n[e] = t, this.props[An] = n, this.save() }, jn.prototype.remove_event_timer = function(e) {
        var t = this.props[An] || {},
            n = t[e];
        return sn.isUndefined(n) || (delete this.props[An][e], this.save()), n };
    var Vn, Un = function() {},
        zn = function() {},
        Wn = function(e, t, n) {
            var i, r = n === gn ? pn : pn[n];
            if (r && hn === vn) i = r;
            else {
                if (r && !sn.isArray(r)) return void cn.error("You have already initialized " + n);
                i = new Un }
            if (i._init(e, t, n), i.people = new zn, i.people._init(i), zt.false = zt.false || i.get_config("debug"), i.__autotrack_enabled = i.get_config("autotrack"), i.get_config("autotrack")) {
                var o = 100,
                    a = 100;
                fn.enabledForProject(i.get_config("token"), o, a) ? fn.isBrowserSupported() ? fn.init(i) : (i.__autotrack_enabled = !1, cn.log("Disabling Automatic Event Collection because this browser is not supported")) : (i.__autotrack_enabled = !1, cn.log("Not in active bucket: disabling Automatic Event Collection."));
                try { Yn(i) } catch (e) { cn.error(e) } }
            return !sn.isUndefined(r) && sn.isArray(r) && (i._execute_array.call(i.people, r.people), i._execute_array(r)), i };
    Un.prototype.init = function(e, t, n) {
        if (sn.isUndefined(n)) return void cn.error("You must name your new library: init(token, config, name)");
        if (n === gn) return void cn.error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
        var i = Wn(e, t, n);
        return pn[n] = i, i._loaded(), i }, Un.prototype._init = function(e, t, n) { this.__loaded = !0, this.config = {}, this.set_config(sn.extend({}, Rn, t, { name: n, token: e, callback_fn: (n === gn ? n : "mixpanel." + n) + "._jsc" })), this._jsc = function() {}, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = { disable_all_events: !1, identify_called: !1 }, this.persistence = this.cookie = new jn(this.config), this.register_once({ distinct_id: sn.UUID() }, "") }, Un.prototype._loaded = function() { this.get_config("loaded")(this), this.get_config("track_pageview") && this.track_pageview() }, Un.prototype._dom_loaded = function() { sn.each(this.__dom_loaded_queue, function(e) { this._track_dom.apply(this, e) }, this), sn.each(this.__request_queue, function(e) { this._send_request.apply(this, e) }, this), delete this.__dom_loaded_queue, delete this.__request_queue }, Un.prototype._track_dom = function(e, t) {
        if (this.get_config("img")) return cn.error("You can't use DOM tracking functions with img = true."), !1;
        if (!Bn) return this.__dom_loaded_queue.push([e, t]), !1;
        var n = (new e).init(this);
        return n.track.apply(n, t) }, Un.prototype._prepare_callback = function(e, t) {
        if (sn.isUndefined(e)) return null;
        if (Fn) {
            var n = function(n) { e(n, t) };
            return n }
        var i = this._jsc,
            r = "" + Math.floor(1e8 * Math.random()),
            o = this.get_config("callback_fn") + "[" + r + "]";
        return i[r] = function(n) { delete i[r], e(n, t) }, o }, Un.prototype._send_request = function(e, t, n) {
        if (qn) return void this.__request_queue.push(arguments);
        var i = this.get_config("verbose");
        if (t.verbose && (i = !0), this.get_config("test") && (t.test = 1), i && (t.verbose = 1), this.get_config("img") && (t.img = 1), Fn || (n ? t.callback = n : (i || this.get_config("test")) && (t.callback = "(function(){})")), t.ip = this.get_config("ip") ? 1 : 0, t._ = (new Date).getTime().toString(), e += "?" + sn.HTTPBuildQuery(t), "img" in t) {
            var r = document.createElement("img");
            r.src = e, document.body.appendChild(r) } else if (Fn) try {
            var o = new XMLHttpRequest;
            o.open("GET", e, !0), o.withCredentials = !0, o.onreadystatechange = function() {
                if (4 === o.readyState)
                    if (e.indexOf("api.mixpanel.com/track") !== -1 && fn.checkForBackoff(o), 200 === o.status) n && n(i ? sn.JSONDecode(o.responseText) : Number(o.responseText));
                    else {
                        var t = "Bad HTTP status: " + o.status + " " + o.statusText;
                        cn.error(t), n && n(i ? { status: 0, error: t } : 0) } }, o.send(null) } catch (e) { cn.error(e) } else {
            var a = document.createElement("script");
            a.type = "text/javascript", a.async = !0, a.defer = !0, a.src = e;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(a, s) } }, Un.prototype._execute_array = function(e) {
        var t, n = [],
            i = [],
            r = [];
        sn.each(e, function(e) { e && (t = e[0], "function" == typeof e ? e.call(this) : sn.isArray(e) && "alias" === t ? n.push(e) : sn.isArray(e) && t.indexOf("track") !== -1 && "function" == typeof this[t] ? r.push(e) : i.push(e)) }, this);
        var o = function(e, t) { sn.each(e, function(e) { this[e[0]].apply(this, e.slice(1)) }, t) };
        o(n, this), o(i, this), o(r, this) }, Un.prototype.push = function(e) { this._execute_array([e]) }, Un.prototype.disable = function(e) { "undefined" == typeof e ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e) }, Un.prototype.track = function(e, t, n) {
        if ("function" != typeof n && (n = function() {}), sn.isUndefined(e)) return void cn.error("No event name provided to mixpanel.track");
        if (this._event_is_disabled(e)) return void n(0);
        t = t || {}, t.token = this.get_config("token");
        var i = this.persistence.remove_event_timer(e);
        if (!sn.isUndefined(i)) {
            var r = (new Date).getTime() - i;
            t.$duration = parseFloat((r / 1e3).toFixed(3)) }
        this.persistence.update_search_keyword(document.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(document.referrer), t = sn.extend({}, sn.info.properties(), this.persistence.properties(), t);
        try { this.get_config("autotrack") && "mp_page_view" !== e && "$create_alias" !== e && (t = sn.extend({}, t, this.mp_counts), this.mp_counts = { $__c: 0 }, sn.cookie.set("mp_" + this.get_config("name") + "__c", 0, 1, !0)) } catch (e) { cn.error(e) }
        var o = this.get_config("property_blacklist");
        sn.isArray(o) ? sn.each(o, function(e) { delete t[e] }) : cn.error("Invalid value for property_blacklist config: " + o);
        var a = { event: e, properties: t },
            s = sn.truncate(a, 255),
            c = sn.JSONEncode(s),
            u = sn.base64Encode(c);
        return cn.log("MIXPANEL REQUEST:"), cn.log(s), this._send_request(this.get_config("api_host") + "/track/", { data: u }, this._prepare_callback(n, s)), s }, Un.prototype.track_pageview = function(e) { sn.isUndefined(e) && (e = document.location.href), this.track("mp_page_view", sn.info.pageviewInfo(e)) }, Un.prototype.track_links = function() {
        return this._track_dom.call(this, Nn, arguments) }, Un.prototype.track_forms = function() {
        return this._track_dom.call(this, Hn, arguments) }, Un.prototype.time_event = function(e) {
        return sn.isUndefined(e) ? void cn.error("No event name provided to mixpanel.time_event") : void(this._event_is_disabled(e) || this.persistence.set_event_timer(e, (new Date).getTime())) }, Un.prototype.register = function(e, t) { this.persistence.register(e, t) }, Un.prototype.register_once = function(e, t, n) { this.persistence.register_once(e, t, n) }, Un.prototype.unregister = function(e) { this.persistence.unregister(e) }, Un.prototype._register_single = function(e, t) {
        var n = {};
        n[e] = t, this.register(n) }, Un.prototype.identify = function(e, t, n, i, r, o) { e !== this.get_distinct_id() && e !== this.get_property(Cn) && (this.unregister(Cn), this._register_single("distinct_id", e)), this._check_and_handle_notifications(this.get_distinct_id()), this._flags.identify_called = !0, this.people._flush(t, n, i, r, o) }, Un.prototype.reset = function() { this.persistence.clear(), this._flags.identify_called = !1, this.register_once({ distinct_id: sn.UUID() }, "") }, Un.prototype.get_distinct_id = function() {
        return this.get_property("distinct_id") }, Un.prototype.alias = function(e, t) {
        if (e === this.get_property(Ln)) return cn.critical("Attempting to create alias for existing People user - aborting."), -2;
        var n = this;
        return sn.isUndefined(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(Cn, e), this.track("$create_alias", { alias: e, distinct_id: t }, function() { n.identify(e) })) : (cn.error("alias matches current distinct_id - skipping api call."), this.identify(e), -1) }, Un.prototype.name_tag = function(e) { this._register_single("mp_name_tag", e) }, Un.prototype.set_config = function(e) { sn.isObject(e) && (sn.extend(this.config, e), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), zt.false = zt.false || this.get_config("debug")) }, Un.prototype.get_config = function(e) {
        return this.config[e] }, Un.prototype.get_property = function(e) {
        return this.persistence.props[e] }, Un.prototype.toString = function() {
        var e = this.get_config("name");
        return e !== gn && (e = "mixpanel." + e), e }, Un.prototype._event_is_disabled = function(e) {
        return sn.isBlockedUA(en) || this._flags.disable_all_events || sn.include(this.__disabled_events, e) }, Un.prototype._check_and_handle_notifications = function(e) {
        if (e && !this._flags.identify_called && !this.get_config("disable_notifications")) { cn.log("MIXPANEL NOTIFICATION CHECK");
            var t = { verbose: !0, version: "1", lib: "web", token: this.get_config("token"), distinct_id: e },
                n = this;
            this._send_request(this.get_config("decide_host") + "/decide/", t, this._prepare_callback(function(e) { e.notifications && e.notifications.length > 0 && n._show_notification.call(n, e.notifications[0]) })) } }, Un.prototype._show_notification = function(e) {
        var t = new Vn(e, this);
        t.show() }, zn.prototype._init = function(e) { this._mixpanel = e }, zn.prototype.set = function(e, t, n) {
        var i = {},
            r = {};
        return sn.isObject(e) ? (sn.each(e, function(e, t) { this._is_reserved_property(t) || (r[t] = e) }, this), n = t) : r[e] = t, this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), r = sn.extend({}, sn.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), r), i[xn] = r, this._send_request(i, n) }, zn.prototype.set_once = function(e, t, n) {
        var i = {},
            r = {};
        return sn.isObject(e) ? (sn.each(e, function(e, t) { this._is_reserved_property(t) || (r[t] = e) }, this), n = t) : r[e] = t, i[Sn] = r, this._send_request(i, n) }, zn.prototype.increment = function(e, t, n) {
        var i = {},
            r = {};
        return sn.isObject(e) ? (sn.each(e, function(e, t) {
            if (!this._is_reserved_property(t)) {
                if (isNaN(parseFloat(e))) return void cn.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                r[t] = e } }, this), n = t) : (sn.isUndefined(t) && (t = 1), r[e] = t), i[Tn] = r, this._send_request(i, n) }, zn.prototype.append = function(e, t, n) {
        var i = {},
            r = {};
        return sn.isObject(e) ? (sn.each(e, function(e, t) { this._is_reserved_property(t) || (r[t] = e) }, this), n = t) : r[e] = t, i[En] = r, this._send_request(i, n) }, zn.prototype.union = function(e, t, n) {
        var i = {},
            r = {};
        return sn.isObject(e) ? (sn.each(e, function(e, t) { this._is_reserved_property(t) || (r[t] = sn.isArray(e) ? e : [e]) }, this), n = t) : r[e] = sn.isArray(t) ? t : [t], i[Pn] = r, this._send_request(i, n) }, zn.prototype.track_charge = function(e, t, n) {
        return !sn.isNumber(e) && (e = parseFloat(e), isNaN(e)) ? void cn.error("Invalid value passed to mixpanel.people.track_charge - must be a number") : this.append("$transactions", sn.extend({ $amount: e }, t), n) }, zn.prototype.clear_charges = function(e) {
        return this.set("$transactions", [], e) }, zn.prototype.delete_user = function() {
        if (!this._identify_called()) return void cn.error("mixpanel.people.delete_user() requires you to call identify() first");
        var e = { $delete: this._mixpanel.get_distinct_id() };
        return this._send_request(e) }, zn.prototype.toString = function() {
        return this._mixpanel.toString() + ".people" }, zn.prototype._send_request = function(e, t) { e.$token = this._get_config("token"), e.$distinct_id = this._mixpanel.get_distinct_id();
        var n = sn.encodeDates(e),
            i = sn.truncate(n, 255),
            r = sn.JSONEncode(n),
            o = sn.base64Encode(r);
        return this._identify_called() ? (cn.log("MIXPANEL PEOPLE REQUEST:"), cn.log(i), this._mixpanel._send_request(this._get_config("api_host") + "/engage/", { data: o }, this._mixpanel._prepare_callback(t, i)), i) : (this._enqueue(e), sn.isUndefined(t) || t(this._get_config("verbose") ? { status: -1, error: null } : -1), i) }, zn.prototype._get_config = function(e) {
        return this._mixpanel.get_config(e) }, zn.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === !0 }, zn.prototype._enqueue = function(e) { xn in e ? this._mixpanel.persistence._add_to_people_queue(xn, e) : Sn in e ? this._mixpanel.persistence._add_to_people_queue(Sn, e) : Tn in e ? this._mixpanel.persistence._add_to_people_queue(Tn, e) : En in e ? this._mixpanel.persistence._add_to_people_queue(En, e) : Pn in e ? this._mixpanel.persistence._add_to_people_queue(Pn, e) : cn.error("Invalid call to _enqueue():", e) }, zn.prototype._flush = function(e, t, n, i, r) {
        var o = this,
            a = sn.extend({}, this._mixpanel.persistence._get_queue(xn)),
            s = sn.extend({}, this._mixpanel.persistence._get_queue(Sn)),
            c = sn.extend({}, this._mixpanel.persistence._get_queue(Tn)),
            u = this._mixpanel.persistence._get_queue(En),
            l = sn.extend({}, this._mixpanel.persistence._get_queue(Pn));
        if (sn.isUndefined(a) || !sn.isObject(a) || sn.isEmptyObject(a) || (o._mixpanel.persistence._pop_from_people_queue(xn, a), this.set(a, function(t, n) { 0 === t && o._mixpanel.persistence._add_to_people_queue(xn, a), sn.isUndefined(e) || e(t, n) })), sn.isUndefined(s) || !sn.isObject(s) || sn.isEmptyObject(s) || (o._mixpanel.persistence._pop_from_people_queue(Sn, s), this.set_once(s, function(e, t) { 0 === e && o._mixpanel.persistence._add_to_people_queue(Sn, s), sn.isUndefined(i) || i(e, t) })), sn.isUndefined(c) || !sn.isObject(c) || sn.isEmptyObject(c) || (o._mixpanel.persistence._pop_from_people_queue(Tn, c), this.increment(c, function(e, n) { 0 === e && o._mixpanel.persistence._add_to_people_queue(Tn, c), sn.isUndefined(t) || t(e, n) })), sn.isUndefined(l) || !sn.isObject(l) || sn.isEmptyObject(l) || (o._mixpanel.persistence._pop_from_people_queue(Pn, l), this.union(l, function(e, t) { 0 === e && o._mixpanel.persistence._add_to_people_queue(Pn, l), sn.isUndefined(r) || r(e, t) })), !sn.isUndefined(u) && sn.isArray(u) && u.length) {
            for (var d, f = function(e, t) { 0 === e && o._mixpanel.persistence._add_to_people_queue(En, d), sn.isUndefined(n) || n(e, t) }, h = u.length - 1; h >= 0; h--) d = u.pop(), o.append(d, f);
            o._mixpanel.persistence.save() } }, zn.prototype._is_reserved_property = function(e) {
        return "$distinct_id" === e || "$token" === e }, Un._Notification = function(e, t) { sn.bind_instance_methods(this), this.mixpanel = t, this.persistence = this.mixpanel.persistence, this.campaign_id = sn.escapeHTML(e.id), this.message_id = sn.escapeHTML(e.message_id), this.body = (sn.escapeHTML(e.body) || "").replace(/\n/g, "<br/>"), this.cta = sn.escapeHTML(e.cta) || "Close", this.dest_url = sn.escapeHTML(e.cta_url) || null, this.image_url = sn.escapeHTML(e.image_url) || null, this.notif_type = sn.escapeHTML(e.type) || "takeover", this.style = sn.escapeHTML(e.style) || "light", this.thumb_image_url = sn.escapeHTML(e.thumb_image_url) || null, this.title = sn.escapeHTML(e.title) || "", this.video_url = sn.escapeHTML(e.video_url) || null, this.video_width = Vn.VIDEO_WIDTH, this.video_height = Vn.VIDEO_HEIGHT, this.clickthrough = !0, this.dest_url || (this.dest_url = "#dismiss", this.clickthrough = !1), this.mini = "mini" === this.notif_type, this.mini || (this.notif_type = "takeover"), this.notif_width = this.mini ? Vn.NOTIF_WIDTH_MINI : Vn.NOTIF_WIDTH, this._set_client_config(), this.imgs_to_preload = this._init_image_html(), this._init_video() }, Vn = Un._Notification, Vn.ANIM_TIME = 200, Vn.MARKUP_PREFIX = "mixpanel-notification", Vn.BG_OPACITY = .6, Vn.NOTIF_TOP = 25, Vn.NOTIF_START_TOP = 200, Vn.NOTIF_WIDTH = 388, Vn.NOTIF_WIDTH_MINI = 420, Vn.NOTIF_HEIGHT_MINI = 85, Vn.THUMB_BORDER_SIZE = 5, Vn.THUMB_IMG_SIZE = 60, Vn.THUMB_OFFSET = Math.round(Vn.THUMB_IMG_SIZE / 2), Vn.VIDEO_WIDTH = 595, Vn.VIDEO_HEIGHT = 334, Vn.prototype.show = function() {
        var e = this;
        return this._set_client_config(), this.body_el ? (this._init_styles(), this._init_notification_el(), void this._preload_images(this._attach_and_animate)) : void setTimeout(function() { e.show() }, 300) }, Vn.prototype.dismiss = sn.safewrap(function() { this.marked_as_shown || this._mark_delivery({ invisible: !0 });
        var e = this.showing_video ? this._get_el("video") : this._get_notification_display_el();
        if (this.use_transitions) this._remove_class("bg", "visible"), this._add_class(e, "exiting"), setTimeout(this._remove_notification_el, Vn.ANIM_TIME);
        else {
            var t, n, i;
            this.mini ? (t = "right", n = 20, i = -100) : (t = "top", n = Vn.NOTIF_TOP, i = Vn.NOTIF_START_TOP + Vn.NOTIF_TOP), this._animate_els([{ el: this._get_el("bg"), attr: "opacity", start: Vn.BG_OPACITY, goal: 0 }, { el: e, attr: "opacity", start: 1, goal: 0 }, { el: e, attr: t, start: n, goal: i }], Vn.ANIM_TIME, this._remove_notification_el) } }), Vn.prototype._add_class = sn.safewrap(function(e, t) { t = Vn.MARKUP_PREFIX + "-" + t, "string" == typeof e && (e = this._get_el(e)), e.className ? ~(" " + e.className + " ").indexOf(" " + t + " ") || (e.className += " " + t) : e.className = t }), Vn.prototype._remove_class = sn.safewrap(function(e, t) { t = Vn.MARKUP_PREFIX + "-" + t, "string" == typeof e && (e = this._get_el(e)), e.className && (e.className = (" " + e.className + " ").replace(" " + t + " ", "").replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "")) }), Vn.prototype._animate_els = sn.safewrap(function(e, t, n, i) {
        var r, o, a, s = this,
            c = !1,
            u = 1 * new Date;
        for (i = i || u, a = u - i, r = 0; r < e.length; r++)
            if (o = e[r], "undefined" == typeof o.val && (o.val = o.start), o.val !== o.goal) { c = !0;
                var l = o.goal - o.start,
                    d = o.goal >= o.start ? 1 : -1;
                o.val = o.start + l * a / t, "opacity" !== o.attr && (o.val = Math.round(o.val)), (d > 0 && o.val >= o.goal || d < 0 && o.val <= o.goal) && (o.val = o.goal) }
        if (!c) return void(n && n());
        for (r = 0; r < e.length; r++)
            if (o = e[r], o.el) {
                var f = "opacity" === o.attr ? "" : "px";
                o.el.style[o.attr] = String(o.val) + f }
        setTimeout(function() { s._animate_els(e, t, n, i) }, 10) }), Vn.prototype._attach_and_animate = sn.safewrap(function() {
        var e = this;
        if (!this.shown && !this._get_shown_campaigns()[this.campaign_id]) { this.shown = !0, this.body_el.appendChild(this.notification_el), setTimeout(function() {
                var t = e._get_notification_display_el();
                if (e.use_transitions) e.mini || e._add_class("bg", "visible"), e._add_class(t, "visible"), e._mark_as_shown();
                else {
                    var n, i, r;
                    e.mini ? (n = "right", i = -100, r = 20) : (n = "top", i = Vn.NOTIF_START_TOP + Vn.NOTIF_TOP, r = Vn.NOTIF_TOP), e._animate_els([{ el: e._get_el("bg"), attr: "opacity", start: 0, goal: Vn.BG_OPACITY }, { el: t, attr: "opacity", start: 0, goal: 1 }, { el: t, attr: n, start: i, goal: r }], Vn.ANIM_TIME, e._mark_as_shown) } }, 100), sn.register_event(e._get_el("cancel"), "click", function(t) { t.preventDefault(), e.dismiss() });
            var t = e._get_el("button") || e._get_el("mini-content");
            sn.register_event(t, "click", function(t) { t.preventDefault(), e.show_video ? (e._track_event("$campaign_open", { $resource_type: "video" }), e._switch_to_video()) : (e.dismiss(), e.clickthrough && e._track_event("$campaign_open", { $resource_type: "link" }, function() { window.location.href = e.dest_url })) }) } }), Vn.prototype._get_el = function(e) {
        return document.getElementById(Vn.MARKUP_PREFIX + "-" + e) }, Vn.prototype._get_notification_display_el = function() {
        return this._get_el(this.notif_type) }, Vn.prototype._get_shown_campaigns = function() {
        return this.persistence.props[On] || (this.persistence.props[On] = {}) }, Vn.prototype._browser_lte = function(e, t) {
        return this.browser_versions[e] && this.browser_versions[e] <= t }, Vn.prototype._init_image_html = function() {
        var e = [];
        return this.mini ? (this.thumb_image_url = this.thumb_image_url || "//cdn.mxpnl.com/site_media/images/icons/notifications/mini-news-dark.png", e.push(this.thumb_image_url)) : (this.image_url ? (e.push(this.image_url), this.img_html = '<img id="img" src="' + this.image_url + '"/>') : this.img_html = "", this.thumb_image_url ? (e.push(this.thumb_image_url), this.thumb_img_html = '<div id="thumbborder-wrapper"><div id="thumbborder"></div></div><img id="thumbnail" src="' + this.thumb_image_url + '" width="' + Vn.THUMB_IMG_SIZE + '" height="' + Vn.THUMB_IMG_SIZE + '"/><div id="thumbspacer"></div>') : this.thumb_img_html = ""), e }, Vn.prototype._init_notification_el = function() {
        var e = "",
            t = "",
            n = "",
            i = '<div id="cancel"><div id="cancel-icon"></div></div>';
        if (this.notification_el = document.createElement("div"), this.notification_el.id = Vn.MARKUP_PREFIX + "-wrapper", this.mini) e = '<div id="mini"><div id="mainbox">' + i + '<div id="mini-content"><div id="mini-icon"><div id="mini-icon-img"></div></div><div id="body"><div id="body-text"><div>' + this.body + '</div></div></div></div></div><div id="mini-border"></div></div>';
        else {
            var r = this.clickthrough || this.show_video ? "" : '<div id="button-close"></div>',
                o = this.show_video ? '<div id="button-play"></div>' : "";
            this._browser_lte("ie", 7) && (r = "", o = ""), e = '<div id="takeover">' + this.thumb_img_html + '<div id="mainbox">' + i + '<div id="content">' + this.img_html + '<div id="title">' + this.title + '</div><div id="body">' + this.body + '</div><div id="tagline"><a href="http://mixpanel.com?from=inapp" target="_blank">POWERED BY MIXPANEL</a></div></div><div id="button">' + r + '<a id="button-link" href="' + this.dest_url + '">' + this.cta + "</a>" + o + "</div></div></div>" }
        this.youtube_video ? (t = "//www.youtube.com/embed/" + this.youtube_video + "?wmode=transparent&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=0&vq=hd1080", this.yt_custom && (t += "&enablejsapi=1&html5=1&controls=0", n = '<div id="video-controls"><div id="video-progress" class="video-progress-el"><div id="video-progress-total" class="video-progress-el"></div><div id="video-elapsed" class="video-progress-el"></div></div><div id="video-time" class="video-progress-el"></div></div>')) : this.vimeo_video && (t = "//player.vimeo.com/video/" + this.vimeo_video + "?autoplay=1&title=0&byline=0&portrait=0"), this.show_video && (this.video_iframe = '<iframe id="' + Vn.MARKUP_PREFIX + '-video-frame" width="' + this.video_width + '" height="' + this.video_height + '"  src="' + t + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="1" scrolling="no"></iframe>', n = '<div id="video-' + (this.flip_animate ? "" : "no") + 'flip"><div id="video"><div id="video-holder"></div>' + n + "</div></div>");
        var a = n + e;
        this.flip_animate && (a = (this.mini ? e : "") + '<div id="flipcontainer"><div id="flipper">' + (this.mini ? n : a) + "</div></div>"), this.notification_el.innerHTML = ('<div id="overlay" class="' + this.notif_type + '"><div id="campaignid-' + this.campaign_id + '"><div id="bgwrapper"><div id="bg"></div>' + a + "</div></div></div>").replace(/class=\"/g, 'class="' + Vn.MARKUP_PREFIX + "-").replace(/id=\"/g, 'id="' + Vn.MARKUP_PREFIX + "-") }, Vn.prototype._init_styles = function() {
        "dark" === this.style ? this.style_vals = { bg: "#1d1f25", bg_actions: "#282b32", bg_hover: "#3a4147", bg_light: "#4a5157", border_gray: "#32353c", cancel_opacity: "0.4", mini_hover: "#2a3137", text_title: "#fff", text_main: "#9498a3", text_tagline: "#464851", text_hover: "#ddd" } : this.style_vals = { bg: "#fff", bg_actions: "#e7eaee", bg_hover: "#eceff3", bg_light: "#f5f5f5", border_gray: "#e4ecf2", cancel_opacity: "1.0", mini_hover: "#fafafa", text_title: "#5c6578", text_main: "#8b949b", text_tagline: "#ced9e6", text_hover: "#7c8598" };
        var e = "0px 0px 35px 0px rgba(45, 49, 56, 0.7)",
            t = e,
            n = e,
            i = Vn.THUMB_IMG_SIZE + 2 * Vn.THUMB_BORDER_SIZE,
            r = Vn.ANIM_TIME / 1e3 + "s";
        this.mini && (e = "none");
        var o = {},
            a = Vn.NOTIF_WIDTH_MINI + 20;
        o["@media only screen and (max-width: " + (a - 1) + "px)"] = { "#overlay": { display: "none" } };
        var s = {
            ".flipped": { transform: "rotateY(180deg)" },
            "#overlay": { position: "fixed", top: "0", left: "0", width: "100%", height: "100%", overflow: "auto", "text-align": "center", "z-index": "10000", "font-family": '"Helvetica", "Arial", sans-serif', "-webkit-font-smoothing": "antialiased", "-moz-osx-font-smoothing": "grayscale" },
            "#overlay.mini": { height: "0", overflow: "visible" },
            "#overlay a": { width: "initial", padding: "0", "text-decoration": "none", "text-transform": "none", color: "inherit" },
            "#bgwrapper": {
                position: "relative",
                width: "100%",
                height: "100%"
            },
            "#bg": { position: "fixed", top: "0", left: "0", width: "100%", height: "100%", "min-width": 4 * this.doc_width + "px", "min-height": 4 * this.doc_height + "px", "background-color": "black", opacity: "0.0", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)", filter: "alpha(opacity=60)", transition: "opacity " + r },
            "#bg.visible": { opacity: Vn.BG_OPACITY },
            ".mini #bg": { width: "0", height: "0", "min-width": "0" },
            "#flipcontainer": { perspective: "1000px", position: "absolute", width: "100%" },
            "#flipper": { position: "relative", "transform-style": "preserve-3d", transition: "0.3s" },
            "#takeover": { position: "absolute", left: "50%", width: Vn.NOTIF_WIDTH + "px", "margin-left": Math.round(-Vn.NOTIF_WIDTH / 2) + "px", "backface-visibility": "hidden", transform: "rotateY(0deg)", opacity: "0.0", top: Vn.NOTIF_START_TOP + "px", transition: "opacity " + r + ", top " + r },
            "#takeover.visible": { opacity: "1.0", top: Vn.NOTIF_TOP + "px" },
            "#takeover.exiting": { opacity: "0.0", top: Vn.NOTIF_START_TOP + "px" },
            "#thumbspacer": { height: Vn.THUMB_OFFSET + "px" },
            "#thumbborder-wrapper": { position: "absolute", top: -Vn.THUMB_BORDER_SIZE + "px", left: Vn.NOTIF_WIDTH / 2 - Vn.THUMB_OFFSET - Vn.THUMB_BORDER_SIZE + "px", width: i + "px", height: i / 2 + "px", overflow: "hidden" },
            "#thumbborder": { position: "absolute", width: i + "px", height: i + "px", "border-radius": i + "px", "background-color": this.style_vals.bg_actions, opacity: "0.5" },
            "#thumbnail": { position: "absolute", top: "0px", left: Vn.NOTIF_WIDTH / 2 - Vn.THUMB_OFFSET + "px", width: Vn.THUMB_IMG_SIZE + "px", height: Vn.THUMB_IMG_SIZE + "px", overflow: "hidden", "z-index": "100", "border-radius": Vn.THUMB_IMG_SIZE + "px" },
            "#mini": { position: "absolute", right: "20px", top: Vn.NOTIF_TOP + "px", width: this.notif_width + "px", height: 2 * Vn.NOTIF_HEIGHT_MINI + "px", "margin-top": 20 - Vn.NOTIF_HEIGHT_MINI + "px", "backface-visibility": "hidden", opacity: "0.0", transform: "rotateX(90deg)", transition: "opacity 0.3s, transform 0.3s, right 0.3s" },
            "#mini.visible": { opacity: "1.0", transform: "rotateX(0deg)" },
            "#mini.exiting": { opacity: "0.0", right: "-150px" },
            "#mainbox": { "border-radius": "4px", "box-shadow": e, "text-align": "center", "background-color": this.style_vals.bg, "font-size": "14px", color: this.style_vals.text_main },
            "#mini #mainbox": { height: Vn.NOTIF_HEIGHT_MINI + "px", "margin-top": Vn.NOTIF_HEIGHT_MINI + "px", "border-radius": "3px", transition: "background-color " + r },
            "#mini-border": { height: Vn.NOTIF_HEIGHT_MINI + 6 + "px", width: Vn.NOTIF_WIDTH_MINI + 6 + "px", position: "absolute", top: "-3px", left: "-3px", "margin-top": Vn.NOTIF_HEIGHT_MINI + "px", "border-radius": "6px", opacity: "0.25", "background-color": "#fff", "z-index": "-1", "box-shadow": n },
            "#mini-icon": { position: "relative", display: "inline-block", width: "75px", height: Vn.NOTIF_HEIGHT_MINI + "px", "border-radius": "3px 0 0 3px", "background-color": this.style_vals.bg_actions, background: "linear-gradient(135deg, " + this.style_vals.bg_light + " 0%, " + this.style_vals.bg_actions + " 100%)", transition: "background-color " + r },
            "#mini:hover #mini-icon": { "background-color": this.style_vals.mini_hover },
            "#mini:hover #mainbox": { "background-color": this.style_vals.mini_hover },
            "#mini-icon-img": { position: "absolute", "background-image": "url(" + this.thumb_image_url + ")", width: "48px", height: "48px", top: "20px", left: "12px" },
            "#content": { padding: "30px 20px 0px 20px" },
            "#mini-content": { "text-align": "left", height: Vn.NOTIF_HEIGHT_MINI + "px", cursor: "pointer" },
            "#img": { width: "328px", "margin-top": "30px", "border-radius": "5px" },
            "#title": { "max-height": "600px", overflow: "hidden", "word-wrap": "break-word", padding: "25px 0px 20px 0px", "font-size": "19px", "font-weight": "bold", color: this.style_vals.text_title },
            "#body": { "max-height": "600px", "margin-bottom": "25px", overflow: "hidden", "word-wrap": "break-word", "line-height": "21px", "font-size": "15px", "font-weight": "normal", "text-align": "left" },
            "#mini #body": { display: "inline-block", "max-width": "250px", margin: "0 0 0 30px", height: Vn.NOTIF_HEIGHT_MINI + "px", "font-size": "16px", "letter-spacing": "0.8px", color: this.style_vals.text_title },
            "#mini #body-text": { display: "table", height: Vn.NOTIF_HEIGHT_MINI + "px" },
            "#mini #body-text div": { display: "table-cell", "vertical-align": "middle" },
            "#tagline": { "margin-bottom": "15px", "font-size": "10px", "font-weight": "600", "letter-spacing": "0.8px", color: "#ccd7e0", "text-align": "left" },
            "#tagline a": { color: this.style_vals.text_tagline, transition: "color " + r },
            "#tagline a:hover": { color: this.style_vals.text_hover },
            "#cancel": { position: "absolute", right: "0", width: "8px", height: "8px", padding: "10px", "border-radius": "20px", margin: "12px 12px 0 0", "box-sizing": "content-box", cursor: "pointer", transition: "background-color " + r },
            "#mini #cancel": { margin: "7px 7px 0 0" },
            "#cancel-icon": { width: "8px", height: "8px", overflow: "hidden", "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/cancel-x.png)", opacity: this.style_vals.cancel_opacity },
            "#cancel:hover": { "background-color": this.style_vals.bg_hover },
            "#button": { display: "block", height: "60px", "line-height": "60px", "text-align": "center", "background-color": this.style_vals.bg_actions, "border-radius": "0 0 4px 4px", overflow: "hidden", cursor: "pointer", transition: "background-color " + r },
            "#button-close": { display: "inline-block", width: "9px", height: "60px", "margin-right": "8px", "vertical-align": "top", "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/close-x-" + this.style + ".png)", "background-repeat": "no-repeat", "background-position": "0px 25px" },
            "#button-play": { display: "inline-block", width: "30px", height: "60px", "margin-left": "15px", "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/play-" + this.style + "-small.png)", "background-repeat": "no-repeat", "background-position": "0px 15px" },
            "a#button-link": { display: "inline-block", "vertical-align": "top", "text-align": "center", "font-size": "17px", "font-weight": "bold", overflow: "hidden", "word-wrap": "break-word", color: this.style_vals.text_title, transition: "color " + r },
            "#button:hover": { "background-color": this.style_vals.bg_hover, color: this.style_vals.text_hover },
            "#button:hover a": { color: this.style_vals.text_hover },
            "#video-noflip": { position: "relative", top: 2 * -this.video_height + "px" },
            "#video-flip": { "backface-visibility": "hidden", transform: "rotateY(180deg)" },
            "#video": { position: "absolute", width: this.video_width - 1 + "px", height: this.video_height + "px", top: Vn.NOTIF_TOP + "px", "margin-top": "100px", left: "50%", "margin-left": Math.round(-this.video_width / 2) + "px", overflow: "hidden", "border-radius": "5px", "box-shadow": t, transform: "translateZ(1px)", transition: "opacity " + r + ", top " + r },
            "#video.exiting": { opacity: "0.0", top: this.video_height + "px" },
            "#video-holder": { position: "absolute", width: this.video_width - 1 + "px", height: this.video_height + "px", overflow: "hidden", "border-radius": "5px" },
            "#video-frame": { "margin-left": "-1px", width: this.video_width + "px" },
            "#video-controls": { opacity: "0", transition: "opacity 0.5s" },
            "#video:hover #video-controls": { opacity: "1.0" },
            "#video .video-progress-el": { position: "absolute", bottom: "0", height: "25px", "border-radius": "0 0 0 5px" },
            "#video-progress": { width: "90%" },
            "#video-progress-total": { width: "100%", "background-color": this.style_vals.bg, opacity: "0.7" },
            "#video-elapsed": { width: "0", "background-color": "#6cb6f5", opacity: "0.9" },
            "#video #video-time": { width: "10%", right: "0", "font-size": "11px", "line-height": "25px", color: this.style_vals.text_main, "background-color": "#666", "border-radius": "0 0 5px 0" }
        };
        this._browser_lte("ie", 8) && sn.extend(s, { "* html #overlay": { position: "absolute" }, "* html #bg": { position: "absolute" }, "html, body": { height: "100%" } }), this._browser_lte("ie", 7) && sn.extend(s, { "#mini #body": { display: "inline", zoom: "1", border: "1px solid " + this.style_vals.bg_hover }, "#mini #body-text": { padding: "20px" }, "#mini #mini-icon": { display: "none" } });
        var c = ["backface-visibility", "border-radius", "box-shadow", "opacity", "perspective", "transform", "transform-style", "transition"],
            u = ["khtml", "moz", "ms", "o", "webkit"];
        for (var l in s)
            for (var d = 0; d < c.length; d++) {
                var f = c[d];
                if (f in s[l])
                    for (var h = s[l][f], p = 0; p < u.length; p++) s[l]["-" + u[p] + "-" + f] = h }
        var v = function(e, t) {
            var n = function(e) {
                    var t = "";
                    for (var n in e) {
                        var i = n.replace(/#/g, "#" + Vn.MARKUP_PREFIX + "-").replace(/\./g, "." + Vn.MARKUP_PREFIX + "-");
                        t += "\n" + i + " {";
                        var r = e[n];
                        for (var o in r) t += o + ":" + r[o] + ";";
                        t += "}" }
                    return t },
                i = function(e) {
                    var t = "";
                    for (var i in e) t += "\n" + i + " {" + n(e[i]) + "\n}";
                    return t },
                r = n(e) + i(t),
                o = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                a = document.createElement("style");
            o.appendChild(a), a.setAttribute("type", "text/css"), a.styleSheet ? a.styleSheet.cssText = r : a.textContent = r };
        v(s, o)
    }, Vn.prototype._init_video = sn.safewrap(function() {
        if (this.video_url) {
            var e = this;
            e.yt_custom = "postMessage" in window, e.dest_url = e.video_url;
            var t = e.video_url.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),
                n = e.video_url.match(/vimeo\.com\/.*?(\d+)/i);
            if (t) {
                if (e.show_video = !0, e.youtube_video = t[1], e.yt_custom) { window.onYouTubeIframeAPIReady = function() { e._get_el("video-frame") && e._yt_video_ready() };
                    var i = document.createElement("script");
                    i.src = "//www.youtube.com/iframe_api";
                    var r = document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(i, r) } } else n && (e.show_video = !0, e.vimeo_video = n[1]);
            (e._browser_lte("ie", 7) || e._browser_lte("firefox", 3)) && (e.show_video = !1, e.clickthrough = !0) } }), Vn.prototype._mark_as_shown = sn.safewrap(function() {
        var e = this;
        sn.register_event(e._get_el("bg"), "click", function() { e.dismiss() });
        var t = function(e, t) {
            var n = {};
            return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, null) : e.currentStyle && (n = e.currentStyle), n[t] };
        if (this.campaign_id) {
            var n = this._get_el("overlay");
            n && "hidden" !== t(n, "visibility") && "none" !== t(n, "display") && this._mark_delivery() } }), Vn.prototype._mark_delivery = sn.safewrap(function(e) { this.marked_as_shown || (this.marked_as_shown = !0, this.campaign_id && (this._get_shown_campaigns()[this.campaign_id] = 1 * new Date, this.persistence.save()), this._track_event("$campaign_delivery", e), this.mixpanel.people.append({ $campaigns: this.campaign_id, $notifications: { campaign_id: this.campaign_id, message_id: this.message_id, type: "web", time: new Date } })) }), Vn.prototype._preload_images = function(e) {
        var t = this;
        if (0 === this.imgs_to_preload.length) return void e();
        for (var n = 0, i = [], r = function() { n++, n === t.imgs_to_preload.length && e && (e(), e = null) }, o = 0; o < this.imgs_to_preload.length; o++) {
            var a = new Image;
            a.onload = r, a.src = this.imgs_to_preload[o], a.complete && r(), i.push(a) }
        this._browser_lte("ie", 7) && setTimeout(function() {
            var t = !0;
            for (o = 0; o < i.length; o++) i[o].complete || (t = !1);
            t && e && (e(), e = null) }, 500) }, Vn.prototype._remove_notification_el = sn.safewrap(function() { window.clearInterval(this._video_progress_checker), this.notification_el.style.visibility = "hidden", this.body_el.removeChild(this.notification_el) }), Vn.prototype._set_client_config = function() {
        var e = function(e) {
            var t = navigator.userAgent.match(e);
            return t && t[1] };
        this.browser_versions = {}, this.browser_versions.chrome = e(/Chrome\/(\d+)/), this.browser_versions.firefox = e(/Firefox\/(\d+)/), this.browser_versions.ie = e(/MSIE (\d+).+/), !this.browser_versions.ie && !window.ActiveXObject && "ActiveXObject" in window && (this.browser_versions.ie = 11), this.body_el = document.body || document.getElementsByTagName("body")[0], this.body_el && (this.doc_width = Math.max(this.body_el.scrollWidth, document.documentElement.scrollWidth, this.body_el.offsetWidth, document.documentElement.offsetWidth, this.body_el.clientWidth, document.documentElement.clientWidth), this.doc_height = Math.max(this.body_el.scrollHeight, document.documentElement.scrollHeight, this.body_el.offsetHeight, document.documentElement.offsetHeight, this.body_el.clientHeight, document.documentElement.clientHeight));
        var t = this.browser_versions.ie,
            n = document.createElement("div").style,
            i = function(e) {
                if (e in n) return !0;
                if (!t) { e = e[0].toUpperCase() + e.slice(1);
                    for (var i = ["O" + e, "Webkit" + e, "Moz" + e], r = 0; r < i.length; r++)
                        if (i[r] in n) return !0 }
                return !1 };
        this.use_transitions = this.body_el && i("transition") && i("transform"), this.flip_animate = (this.browser_versions.chrome >= 33 || this.browser_versions.firefox >= 15) && this.body_el && i("backfaceVisibility") && i("perspective") && i("transform") }, Vn.prototype._switch_to_video = sn.safewrap(function() {
        var e = this,
            t = [{ el: e._get_notification_display_el(), attr: "opacity", start: 1, goal: 0 }, { el: e._get_notification_display_el(), attr: "top", start: Vn.NOTIF_TOP, goal: -500 }, { el: e._get_el("video-noflip"), attr: "opacity", start: 0, goal: 1 }, { el: e._get_el("video-noflip"), attr: "top", start: 2 * -e.video_height, goal: 0 }];
        if (e.mini) {
            var n = e._get_el("bg"),
                i = e._get_el("overlay");
            n.style.width = "100%", n.style.height = "100%", i.style.width = "100%", e._add_class(e._get_notification_display_el(), "exiting"), e._add_class(n, "visible"), t.push({ el: e._get_el("bg"), attr: "opacity", start: 0, goal: Vn.BG_OPACITY }) }
        var r = e._get_el("video-holder");
        r.innerHTML = e.video_iframe;
        var o = function() { window.YT && window.YT.loaded && e._yt_video_ready(), e.showing_video = !0, e._get_notification_display_el().style.visibility = "hidden" };
        e.flip_animate ? (e._add_class("flipper", "flipped"), setTimeout(o, Vn.ANIM_TIME)) : e._animate_els(t, Vn.ANIM_TIME, o) }), Vn.prototype._track_event = function(e, t, n) { this.campaign_id ? (t = t || {}, t = sn.extend(t, { campaign_id: this.campaign_id, message_id: this.message_id, message_type: "web_inapp", message_subtype: this.notif_type }), this.mixpanel.track(e, t, n)) : n && n.call() }, Vn.prototype._yt_video_ready = sn.safewrap(function() {
        var e = this;
        if (!e.video_inited) { e.video_inited = !0;
            var t = e._get_el("video-elapsed"),
                n = e._get_el("video-time"),
                i = e._get_el("video-progress");
            new window.YT.Player(Vn.MARKUP_PREFIX + "-video-frame", { events: { onReady: function(r) {
                        var o = r.target,
                            a = o.getDuration(),
                            s = function(e) {
                                return ("00" + e).slice(-2) },
                            c = function(e) {
                                var t = Math.round(a - e),
                                    i = Math.floor(t / 60),
                                    r = Math.floor(i / 60);
                                t -= 60 * i, i -= 60 * r, n.innerHTML = "-" + (r ? r + ":" : "") + s(i) + ":" + s(t) };
                        c(0), e._video_progress_checker = window.setInterval(function() {
                            var e = o.getCurrentTime();
                            t.style.width = e / a * 100 + "%", c(e) }, 250), sn.register_event(i, "click", function(e) {
                            var t = Math.max(0, e.pageX - i.getBoundingClientRect().left);
                            o.seekTo(a * t / i.clientWidth, !0) }) } } }) } }), Un.prototype.init = Un.prototype.init, Un.prototype.reset = Un.prototype.reset, Un.prototype.disable = Un.prototype.disable, Un.prototype.time_event = Un.prototype.time_event, Un.prototype.track = Un.prototype.track, Un.prototype.track_links = Un.prototype.track_links, Un.prototype.track_forms = Un.prototype.track_forms, Un.prototype.track_pageview = Un.prototype.track_pageview, Un.prototype.register = Un.prototype.register, Un.prototype.register_once = Un.prototype.register_once, Un.prototype.unregister = Un.prototype.unregister, Un.prototype.identify = Un.prototype.identify, Un.prototype.alias = Un.prototype.alias, Un.prototype.name_tag = Un.prototype.name_tag, Un.prototype.set_config = Un.prototype.set_config, Un.prototype.get_config = Un.prototype.get_config, Un.prototype.get_property = Un.prototype.get_property, Un.prototype.get_distinct_id = Un.prototype.get_distinct_id, Un.prototype.toString = Un.prototype.toString, Un.prototype._check_and_handle_notifications = Un.prototype._check_and_handle_notifications, Un.prototype._show_notification = Un.prototype._show_notification, jn.prototype.properties = jn.prototype.properties, jn.prototype.update_search_keyword = jn.prototype.update_search_keyword, jn.prototype.update_referrer_info = jn.prototype.update_referrer_info, jn.prototype.get_cross_subdomain = jn.prototype.get_cross_subdomain, jn.prototype.clear = jn.prototype.clear, zn.prototype.set = zn.prototype.set, zn.prototype.set_once = zn.prototype.set_once, zn.prototype.increment = zn.prototype.increment, zn.prototype.append = zn.prototype.append, zn.prototype.union = zn.prototype.union, zn.prototype.track_charge = zn.prototype.track_charge, zn.prototype.clear_charges = zn.prototype.clear_charges, zn.prototype.delete_user = zn.prototype.delete_user, zn.prototype.toString = zn.prototype.toString, sn.safewrap_class(Un, ["identify", "_check_and_handle_notifications", "_show_notification"]);
    var $n = {},
        Gn = function() { sn.each($n, function(e, t) { t !== gn && (pn[t] = e) }), pn._ = sn },
        Xn = function() { pn.init = function(e, t, n) {
                if (n) return pn[n] || (pn[n] = $n[n] = Wn(e, t, n), pn[n]._loaded()), pn[n];
                var i = pn;
                $n[gn] ? i = $n[gn] : e && (i = Wn(e, t, gn), i._loaded(), $n[gn] = i), pn = i, hn === mn && (window[gn] = pn), Gn() } },
        Kn = function() {
            function e() { e.done || (e.done = !0, Bn = !0, qn = !1, sn.each($n, function(e) { e._dom_loaded() })) }

            function t() {
                try { document.documentElement.doScroll("left") } catch (e) {
                    return void setTimeout(t, 1) }
                e() }
            if (document.addEventListener) "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, !1);
            else if (document.attachEvent) { document.attachEvent("onreadystatechange", e);
                var n = !1;
                try { n = null === window.frameElement } catch (e) {}
                document.documentElement.doScroll && n && t() }
            sn.register_event(window, "load", e, !0) },
        Yn = function(e) {
            var t = e.get_config("name");
            e.mp_counts = e.mp_counts || {}, e.mp_counts.$__c = parseInt(sn.cookie.get("mp_" + t + "__c")) || 0;
            var n = function() { e.mp_counts.$__c = (e.mp_counts.$__c || 0) + 1, sn.cookie.set("mp_" + t + "__c", e.mp_counts.$__c, 1, !0) },
                i = function() {
                    try { e.mp_counts = e.mp_counts || {}, n() } catch (e) { cn.error(e) } };
            sn.register_event(document, "submit", i), sn.register_event(document, "change", i);
            var r = null;
            sn.register_event(document, "mousedown", function(e) { r = e.target }), sn.register_event(document, "mouseup", function(e) { e.target === r && i(e) }) },
        Qn = I(),
        Jn = { VIDEO_BUFFER_END: "video-buffer-end", VIDEO_BUFFER_START: "video-buffer-start", VIDEO_CHANGE_QUALITY: "video-change-quality", VIDEO_CONFIG_CHANGE: "video-config-change", VIDEO_FILE_CHANGE: "video-file-change", VIDEO_ENDED: "video-ended", VIDEO_ERROR: "video-error", VIDEO_LEAVE: "video-leave", VIDEO_MINUTE_WATCHED: "video-minute-watched", VIDEO_PAUSE: "video-pause", VIDEO_PLAY: "video-play", VIDEO_PLAYING: "video-playing", VIDEO_READY: "video-ready", VIDEO_SEEK: "video-seek", VIDEO_SEEKED: "video-seeked", VIDEO_STALLED: "video-stalled", VIDEO_STREAM_CHANGE: "video-stream-change", VIDEO_STREAM_SELECT: "video-stream-select" },
        Zn = function() {
            function e(t) { Qe(this, e), this.player = t, this.minuteWatchedTimerActive = !1, this.videoStarted = !1, this.videoSeeking = !1, this.videoPaused = !1, this.initialMinuteWatched = !0, this.currentMinuteWatchedTime = 0, this.seekStartVideoTime = 0, this.totalMinutesWatched = 0, this.streamInfo = null, this.initMinuteWatchedTimer(), this.initMixPanel(), this.initEventListeners() }
            return Je(e, [{ key: "initMixPanel", value: function() { Qn.init(this.player.config.request.mixpanel_token), this.trackEvent(Jn.VIDEO_READY, this.eventGlobalProperties()), Qn.time_event(Jn.VIDEO_LEAVE), Qn.time_event(Jn.VIDEO_STREAM_SELECT) } }, { key: "initEventListeners", value: function() {
                    var e = this;
                    this.player.events.on(Ke.playButtonPressed, function() { Qn.time_event(Jn.VIDEO_PLAYING);
                        var t = e.eventGlobalProperties();
                        e.videoStarted || (t.StartRequest = !0), e.trackEvent(Jn.VIDEO_PLAY, t) }), this.player.telecine.on("playing", function() {
                        if (!e.minuteWatchedTimerActive) {
                            var t = e.eventGlobalProperties();
                            e.videoStarted || (t.StartRequest = !0), e.minuteWatchedTimerActive = !0, e.videoStarted = !0, e.videoPaused = !1, e.trackEvent(Jn.VIDEO_PLAYING, t) } }), this.player.events.on(Ke.pauseButtonPressed, function() { e.minuteWatchedTimerActive = !1, e.videoPaused || (e.videoPaused = !0, e.trackEvent(Jn.VIDEO_PAUSE, e.eventGlobalProperties())) }), this.player.telecine.on("ended", function() { e.minuteWatchedTimerActive = !1, e.videoStarted = !1, e.trackEvent(Jn.VIDEO_ENDED, e.eventGlobalProperties()) }), this.player.events.on(Ke.scrubbingStarted, function() { e.videoSeeking = !0, e.seekStartVideoTime = e.player.telecine.currentTime, Qn.time_event(Jn.VIDEO_SEEKED), e.trackEvent(Jn.VIDEO_SEEK, e.eventGlobalProperties()) }), this.player.telecine.on("seeked", function() {
                        if (e.videoSeeking) { e.videoSeeking = !1;
                            var t = e.eventGlobalProperties();
                            t.SeekStartTime = e.seekStartVideoTime, t.SeekEndTime = e.player.telecine.currentTime, e.trackEvent(Jn.VIDEO_SEEKED, t) } }), this.player.telecine.on([Ke.bufferStarted, "streambufferstart"], function() { e.videoStarted && (Qn.time_event(Jn.VIDEO_BUFFER_END), e.trackEvent(Jn.VIDEO_BUFFER_START, e.eventGlobalProperties())) }), this.player.telecine.on([Ke.bufferEnded, "streambufferend"], function() { e.videoStarted && e.trackEvent(Jn.VIDEO_BUFFER_END, e.eventGlobalProperties()) }), this.player.events.on(Xe.changeQuality, function(t) {
                        var n = e.eventGlobalProperties();
                        n.RequestQuality = t, e.trackEvent(Jn.VIDEO_CHANGE_QUALITY, n) }), this.player.telecine.on("streamchange", function(t) {
                        var n = t.index,
                            i = (t.streams, e.streamInfo);
                        e.streamInfo = e.player.config.request.files.dash.streams[n];
                        var r = e.eventGlobalProperties();
                        e.videoStarted ? (r.PreviousProfile = i.profile, r.PreviousStreamId = i.id, r.PreviousQuality = i.quality, e.trackEvent(Jn.VIDEO_STREAM_CHANGE, r)) : e.trackEvent(Jn.VIDEO_STREAM_SELECT, r) }), this.player.events.on(Ke.configChanged, function() { e.minuteWatchedTimerActive = !1, e.videoSeeking = !1, e.videoPaused = !1, e.videoStarted = !1, e.minuteWatchedTimerActive = !1, Qn.time_event(Jn.VIDEO_STREAM_SELECT), e.trackEvent(Jn.VIDEO_CONFIG_CHANGE, e.eventGlobalProperties()) }), this.player.telecine.on("error", function(t) { e.minuteWatchedTimerActive = !1;
                        var n = e.eventGlobalProperties();
                        n.ErrorMessage = t.message, n.ErrorName = t.name, "FileError" === t.name && Qn.time_event(Jn.VIDEO_FILE_CHANGE), e.trackEvent(Jn.VIDEO_ERROR, n) }), this.player.telecine.on("currentfilechange", function() { e.trackEvent(Jn.VIDEO_FILE_CHANGE, e.eventGlobalProperties()) }), this.player.telecine.on("bandwidth", function(t) { e.streamInfo.bitrate = t.bitrate }), this.player.telecine.on("stalled", function() { e.trackEvent(Jn.VIDEO_STALLED, e.eventGlobalProperties()) }), M(function() { e.trackEvent(Jn.VIDEO_LEAVE, e.eventGlobalProperties()) }) } }, { key: "trackEvent", value: function(e, t) { Qn.track(e, t) } }, { key: "eventGlobalProperties", value: function() {
                    var e = { Autoplay: this.player.config.embed.autoplay, Bitrate: this.streamInfo ? this.streamInfo.bitrate : null, CDN: this.player.telecine.currentFile.metadata.cdn || "akamai", Context: this.player.config.embed.context, Delivery: We[this.player.telecine.currentFile.mime], Embed: !this.player.config.embed.on_site, FileQuality: this.player.telecine.currentFile.metadata.quality, Fullscreen: !!ht.element, FPS: this.streamInfo ? this.streamInfo.fps : null, ID: this.player.config.video.id, Loop: !!this.player.config.embed.loop, Mime: this.player.telecine.currentFile.mime, MinutesWatched: this.totalMinutesWatched, Origin: this.player.telecine.currentFile.metadata.origin, OwnerAccountType: this.player.config.video.owner.account_type, OwnerID: this.player.config.video.owner ? this.player.config.video.owner.id : 0, PlayerBuild: this.player.config.request.build.player, PlayerHeight: this.player.element.querySelector(".video").getBoundingClientRect().height, PlayerURL: this.player.config.player_url, PlayerWidth: this.player.element.querySelector(".video").getBoundingClientRect().width, Privacy: this.player.config.video.privacy, Profile: this.streamInfo ? this.streamInfo.profile : null, Rating: this.player.config.video.rating ? this.player.config.video.rating.id : null, Referrer: this.player.config.request.referrer, SeparateAV: !!this.player.config.request.files.dash && this.player.config.request.files.dash.separate_av, Session: this.player.config.request.session, StreamID: this.streamInfo ? this.streamInfo.id : null, StreamQuality: this.streamInfo ? this.streamInfo.quality : null, Type: Ge[this.player.telecine.currentScanner], UserAccountType: this.player.config.user.account_type, UserIsMod: this.player.config.user.mod, VODID: this.player.config.video.vod && this.player.config.video.vod.id ? this.player.config.video.vod.id : null, VODSaleID: this.player.config.video.vod && this.player.config.video.vod.sale_id ? this.player.config.video.vod.sale_id : null, VideoDuration: this.player.config.video.duration, VideoTime: this.player.telecine.currentTime, ViewMode: window.getComputedStyle(this.player.element, ":after").getPropertyValue("content").replace(/["'\s]*/g, ""), Volume: Math.round(100 * this.player.telecine.volume), Source: this.player.telecine.currentFile.src };
                    for (var t in this.player.config.request.ab_tests) e["Test_" + t] = this.player.config.request.ab_tests[t].data[t];
                    return e } }, { key: "logMinuteWatched", value: function() { this.trackEvent(Jn.VIDEO_MINUTE_WATCHED, this.eventGlobalProperties()) } }, { key: "initMinuteWatchedTimer", value: function() {
                    var e = this,
                        t = Math.floor(60 * Math.random());
                    setInterval(function() {
                        if (e.minuteWatchedTimerActive) return e.currentMinuteWatchedTime++, e.initialMinuteWatched ? void(e.currentMinuteWatchedTime === t && (e.initialMinuteWatched = !1, e.currentMinuteWatchedTime = 0, e.totalMinutesWatched++, e.logMinuteWatched())) : void(e.currentMinuteWatchedTime >= 60 && (e.currentMinuteWatchedTime = 0, e.totalMinutesWatched++, e.logMinuteWatched())) }, 1e3) } }]), e }();
    B.prototype = {get complement() {
            var e = this.clone();
            return e.rgb = { red: 255 - this.red, green: 255 - this.green, blue: 255 - this.blue }, e }, get hex() {
            return B.rgbToHex(this.red, this.green, this.blue) }, set hex(e) {
            return this.rgba = B.hexToRgb(e), this }, get hsl() {
            return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)" }, set hsl(e) { this.hue = e.hue, this.saturation = e.saturation, this.lightness = e.lightness;
            var t = B.hslToRgb(e.hue, e.saturation, e.lightness);
            return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this }, get luminance() {
            function e(e) {
                return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4) }
            var t = e(this.red / 255),
                n = e(this.green / 255),
                i = e(this.blue / 255),
                r = .2126 * t + .7152 * n + .0722 * i;
            return r }, get rgb() {
            return "rgb(" + this.red + "," + this.green + "," + this.blue + ")" }, set rgb(e) {
            return this.rgba = e, this }, get rgba() {
            return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")" }, set rgba(e) { this.red = e.red, this.green = e.green, this.blue = e.blue, this.alpha = e.alpha || 1;
            var t = B.rgbToHsl(e.red, e.green, e.blue);
            return this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this }, get yiq() {
            return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3 }, clone: function() {
            return new B(this) }, lighten: function(e, t, n) {
            if (this.hsl = { hue: this.hue, saturation: this.saturation, lightness: this.lightness + e }, t && n)
                for (var i = n.contrast(this).ratio; i < t && (this.lighten(5), i = n.contrast(this).ratio, !(this.lightness >= 100)););
            return this }, darken: function(e, t, n) {
            if (this.hsl = { hue: this.hue, saturation: this.saturation, lightness: this.lightness - e }, t && n)
                for (var i = n.contrast(this).ratio; i < t && (this.darken(5), i = n.contrast(this).ratio, !(this.lightness <= 0)););
            return this }, overlayOn: function(e) {
            if (this.alpha >= 1) return this;
            var t = this.clone();
            return t.rgba = { red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha), green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha), blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha), alpha: t.alpha + e.alpha * (1 - this.alpha) }, t }, contrast: function(e) {
            var t = this.alpha;
            if (t >= 1) { e.alpha < 1 && (e = e.overlayOn(this));
                var n = this.luminance + .05,
                    i = e.luminance + .05,
                    r = n / i;
                return i > n && (r = 1 / r), r = Math.round(10 * r) / 10, { ratio: r, error: 0, min: r, max: r } }
            var o = this.overlayOn(B.white).contrast(e).ratio,
                a = this.overlayOn(B.black).contrast(e).ratio,
                s = Math.max(o, a),
                c = { red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255), green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255), blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255) },
                u = this.clone();
            u.rgb = c;
            var l = this.overlayOn(u).contrast(e).ratio;
            return { ratio: Math.round((l + s) / 2 * 10) / 10, error: Math.round((s - l) / 2 * 10) / 10, min: l, max: s, closest: u, farthest: a === s ? B.white : B.black } }, wcagAACompliant: function(e) {
            return this.contrast(e).ratio >= 4.5 }, wcagAAACompliant: function(e) {
            return this.contrast(e).ratio >= 7 }, yiqContrastColor: function() {
            return this.yiq >= 120 ? new B(0, 0, 0) : new B(255, 255, 255) } }, B.hexToRgb = function(e) {
        var t;
        return e = String(e), 3 === e.length || 4 === e.length ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e), t && (t[1] += t[1], t[2] += t[2], t[3] += t[3])) : t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e), t ? { red: parseInt(t[1], 16), green: parseInt(t[2], 16), blue: parseInt(t[3], 16), alpha: 1 } : null }, B.rgbToHex = function(e, t, n) {
        return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n)).toString(16).slice(1) }, B.rgbToHsl = function(e, t, n) { e /= 255, t /= 255, n /= 255;
        var i = Math.max(e, t, n),
            r = Math.min(e, t, n),
            o = (i + r) / 2,
            a = o,
            s = o;
        if (i === r) return { hue: 0, saturation: 0, lightness: 100 * s };
        var c = i - r;
        return a = s > .5 ? c / (2 - i - r) : c / (i + r), i === e ? o = (t - n) / c + (t < n ? 6 : 0) : i === t ? o = (n - e) / c + 2 : i === n && (o = (e - t) / c + 4), o /= 6, { hue: Math.round(360 * o), saturation: Math.round(100 * a), lightness: Math.round(100 * s) } }, B.hslToRgb = function(e, t, n) {
        function i(e, t, n) {
            return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + 6 * (t - e) * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (6 * (2 / 3 - n)) : e }
        if (e /= 360, t /= 100, n /= 100, 0 === t) return { red: Math.floor(255 * n), green: Math.floor(255 * n), blue: Math.floor(255 * n) };
        var r = n < .5 ? n * (1 + t) : n + t - t * n,
            o = 2 * n - r;
        return { red: Math.floor(255 * i(o, r, e + 1 / 3)), green: Math.floor(255 * i(o, r, e)), blue: Math.floor(255 * i(o, r, e - 1 / 3)) } }, B.hslToHex = function(e, t, n) {
        var i = B.hslToRgb(e, t, n);
        return B.rgbToHex(i.red, i.green, i.blue) }, B.white = new B("fff"), B.black = new B("000");
    var ei = 6e4,
        ti = window.Array.from,
        ni = [1];
    "function" == typeof ti && ti(ni) === ni && (ti = !1);
    var ii = ti || function(e) {
            return [].slice.call(e, 0) },
        ri = ["quality", "volume", "captions"],
        oi = null,
        ai = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = n.displayTimeout,
                    r = void 0 === i ? 0 : i,
                    o = n.label,
                    a = void 0 === o ? "Alert" : o;
                Qe(this, e), A(this), this._container = t, this._visible = !1, this._message = null, this._alert = null, this._alertLabel = a;
                var s = Math.round(r / 1e3);
                0 !== s && (this._alertLabel = a + " Will be dismissed in " + s + " seconds"), this._displayTimer = null, this._displayTimeout = r, this._renderTemplate(), this._attachEvents() }
            return Je(e, [{ key: "show", value: function(e) {
                    var t = this;
                    if (this._visible !== !0) { clearTimeout(this._displayTimer), this._alert.classList.remove("hidden"), this._alert.removeAttribute("hidden"), window.requestAnimationFrame(function() { t._alert.classList.add("in") });
                        var n = this._alert.querySelector("[data-alert-autofocus]") || this._alert;
                        n.focus(), this._visible = !0, this.fire("show", e), 0 !== this._displayTimeout && (this._displayTimer = setTimeout(function() { t.hide("timeout") }, this._displayTimeout)) } } }, { key: "hide", value: function(e) {
                    var t = this;
                    this._visible !== !1 && (clearTimeout(this._displayTimer), this._alert.classList.add("leaving"), window.requestAnimationFrame(function() {
                        var e = t;
                        t._setHideAttributes(), nt(t._alert).on("transitionend", function t(n) { "opacity" === n.propertyName && (e._alert.classList.remove("leaving"), e._alert.classList.add("hidden"), e._alert.setAttribute("hidden", ""), nt(e._alert).off("transitionend", t)) }) }), this._visible = !1, this.fire("hide", e)) } }, { key: "_setHideAttributes", value: function() { this._alert.classList.remove("in") } }, { key: "_renderTemplate", value: function() { this._alert || (this._alert = document.createElement("div"), this._alert.setAttribute("role", "alertdialog"), this._alert.setAttribute("aria-label", this._alertLabel), this._alert.setAttribute("aria-atomic", "true"), this._alert.classList.add("player-alert"), this._alert.classList.add("hidden"), this._alert.setAttribute("hidden", ""), this._container.appendChild(this._alert), this._setHideAttributes()), this._message instanceof HTMLElement ? (this._alert.innerHTML = "", this._alert.appendChild(this._message)) : (this._alert.textContent = this._message, this._alert.innerHTML = this._message);
                    var e = document.createElement("button");
                    e.setAttribute("data-close", ""), e.setAttribute("aria-label", "Close alert"), e.classList.add("close"), e.innerHTML = dt.render("icon_close"), this._alert.appendChild(e) } }, { key: "_attachEvents", value: function() {
                    var e = this;
                    nt(this._alert).on("click", "[data-close]", function(t) { e.hide(t) }) } }, { key: "visible", get: function() {
                    return this._visible } }, { key: "message", get: function() {
                    return this._message }, set: function(e) { e instanceof HTMLElement && this._message && e.textContent === this._message.textContent || e !== this._message && (this._message = e, this._renderTemplate()) } }]), e }(),
        si = function() {
            function e(t, n, i) {
                var r = this;
                Qe(this, e), A(this), this.version = i, this.visible = !1;
                var o = this._wrap = document.createElement("div");
                o.classList.add("compass-wrapper"), o.innerHTML = dt.render("compass", { version: i }), o.classList.add("cloaked"), t.appendChild(o), n && o.addEventListener("click", n), this._layerSlice = o.querySelector(".compass-slice"), this._lineSlice = o.querySelector(".compass-line");
                var a = function() { r._mouseIn = !0 },
                    s = function(e) {
                        return function() { setTimeout(function() { r._mouseIn || (r.fade(), r._mouseIn = !1) }, e) } };
                nt(this._wrap).on("mousein", a).on("pointerin", a).on("mouseout", s(1e3)).on("pointerout", s(1e3)), s(2e3)() }
            return Je(e, [{
                key: "setAngle",
                value: function(e, t) {
                    var n = this;
                    this._animationFrame && window.cancelAnimationFrame(this._animationFrame);
                    var i = 0;
                    1 === this.version ? i = -45 : 2 === this.version && (i = -30);
                    var r = "" + (i + t),
                        o = (e + 85) / 170,
                        a = 18;
                    this._animationFrame = window.requestAnimationFrame(function() { n._layerSlice.setAttribute("transform", "rotate(" + r + ", " + a + ", " + a + ")"), n._lineSlice && n._lineSlice.setAttribute("d", n._getLinePath(o, a)) })
                }
            }, { key: "_getLinePath", value: function(e, t) {
                    var n = 5,
                        i = 2 * t - Math.round(2 * t * e),
                        r = 2 * Math.sqrt(2 * i * t - Math.pow(i, 2)),
                        o = (2 * t - r) / 2,
                        a = o + n,
                        s = 2 * t - o - n;
                    return "M" + a + "," + i + " L" + s + "," + i + " z" } }, { key: "reveal", value: function() {
                    var e = this;
                    this._wrap.classList.remove("cloaked"), window.requestAnimationFrame(function() { e._wrap.classList.add("in") }), this.visible = !0 } }, { key: "fade", value: function() { this._wrap.classList.add("fade"), this.visible = !0 } }, { key: "hide", value: function() {
                    var e = this;
                    this._wrap.classList.remove("in"), this._wrap.classList.remove("fade"), this._wrap.classList.add("leaving");
                    var t = function t() { "opacity" === event.propertyName && (e._wrap.classList.remove("leaving"), e._wrap.classList.add("cloaked"), e.visible = !1), nt(e._wrap).off("transitionend", t) };
                    nt(this._wrap).on("transitionend", t) } }]), e
        }(),
        ci = t(function(e) { e.exports = function() {
                var e;
                if ("function" != typeof Symbol) return !1;
                e = Symbol("test symbol");
                try { String(e) } catch (e) {
                    return !1 }
                return "symbol" == typeof Symbol.iterator || "object" == typeof Symbol.isConcatSpreadable && ("object" == typeof Symbol.iterator && ("object" == typeof Symbol.toPrimitive && ("object" == typeof Symbol.toStringTag && "object" == typeof Symbol.unscopables))) } }),
        ui = e(ci),
        li = Object.freeze({ default: ui }),
        di = t(function(e) { e.exports = function() {
                var e, t = Object.assign;
                return "function" == typeof t && (e = { foo: "raz" }, t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy") } }),
        fi = e(di),
        hi = Object.freeze({ default: fi }),
        pi = t(function(e) { e.exports = function() {
                try {
                    return Object.keys("primitive"), !0 } catch (e) {
                    return !1 } } }),
        vi = e(pi),
        mi = Object.freeze({ default: vi }),
        gi = t(function(e) {
            var t = Object.keys;
            e.exports = function(e) {
                return t(null == e ? e : Object(e)) } }),
        _i = e(gi),
        yi = Object.freeze({ default: _i }),
        bi = t(function(t) { t.exports = e(mi)() ? Object.keys : e(yi) }),
        wi = e(bi),
        ki = Object.freeze({ default: wi }),
        xi = t(function(e) { e.exports = function(e) {
                if (null == e) throw new TypeError("Cannot use null or undefined");
                return e } }),
        Si = e(xi),
        Ti = Object.freeze({ default: Si }),
        Ei = t(function(t) {
            var n = e(ki),
                i = e(Ti),
                r = Math.max;
            t.exports = function(e, t) {
                var o, a, s, c = r(arguments.length, 2);
                for (e = Object(i(e)), s = function(n) {
                        try { e[n] = t[n] } catch (e) { o || (o = e) } }, a = 1; a < c; ++a) t = arguments[a], n(t).forEach(s);
                if (void 0 !== o) throw o;
                return e } }),
        Pi = e(Ei),
        Li = Object.freeze({ default: Pi }),
        Ci = t(function(t) { t.exports = e(hi)() ? Object.assign : e(Li) }),
        Oi = e(Ci),
        Ai = Object.freeze({ default: Oi }),
        Ii = t(function(e) {
            var t = Array.prototype.forEach,
                n = Object.create,
                i = function(e, t) {
                    var n;
                    for (n in e) t[n] = e[n] };
            e.exports = function(e) {
                var r = n(null);
                return t.call(arguments, function(e) { null != e && i(Object(e), r) }), r } }),
        Mi = e(Ii),
        Fi = Object.freeze({ default: Mi }),
        qi = t(function(e) { e.exports = function(e) {
                return "function" == typeof e } }),
        Ri = e(qi),
        Bi = Object.freeze({ default: Ri }),
        Di = t(function(e) {
            var t = "razdwatrzy";
            e.exports = function() {
                return "function" == typeof t.contains && (t.contains("dwa") === !0 && t.contains("foo") === !1) } }),
        Ni = e(Di),
        Hi = Object.freeze({ default: Ni }),
        ji = t(function(e) {
            var t = String.prototype.indexOf;
            e.exports = function(e) {
                return t.call(this, e, arguments[1]) > -1 } }),
        Vi = e(ji),
        Ui = Object.freeze({ default: Vi }),
        zi = t(function(t) { t.exports = e(Hi)() ? String.prototype.contains : e(Ui) }),
        Wi = e(zi),
        $i = Object.freeze({ default: Wi }),
        Gi = t(function(t) {
            var n, i = e(Ai),
                r = e(Fi),
                o = e(Bi),
                a = e($i);
            n = t.exports = function(e, t) {
                var n, o, s, c, u;
                return arguments.length < 2 || "string" != typeof e ? (c = t, t = e, e = null) : c = arguments[2], null == e ? (n = s = !0, o = !1) : (n = a.call(e, "c"), o = a.call(e, "e"), s = a.call(e, "w")), u = { value: t, configurable: n, enumerable: o, writable: s }, c ? i(r(c), u) : u }, n.gs = function(e, t, n) {
                var s, c, u, l;
                return "string" != typeof e ? (u = n, n = t, t = e, e = null) : u = arguments[3], null == t ? t = void 0 : o(t) ? null == n ? n = void 0 : o(n) || (u = n, n = void 0) : (u = t, t = n = void 0), null == e ? (s = !0, c = !1) : (s = a.call(e, "c"), c = a.call(e, "e")), l = { get: t, set: n, configurable: s, enumerable: c }, u ? i(r(u), l) : l } }),
        Xi = e(Gi),
        Ki = Object.freeze({ default: Xi }),
        Yi = t(function(e) { e.exports = function(e) {
                return e && ("symbol" == typeof e || "Symbol" === e["@@toStringTag"]) || !1 } }),
        Qi = e(Yi),
        Ji = Object.freeze({ default: Qi }),
        Zi = t(function(t) {
            var n = e(Ji);
            t.exports = function(e) {
                if (!n(e)) throw new TypeError(e + " is not a symbol");
                return e } }),
        er = e(Zi),
        tr = Object.freeze({ default: er }),
        nr = t(function(t) {
            var n, i, r, o = e(Ki),
                a = e(tr),
                s = Object.create,
                c = Object.defineProperties,
                u = Object.defineProperty,
                l = Object.prototype,
                d = s(null); "function" == typeof Symbol && (n = Symbol);
            var f = function() {
                var e = s(null);
                return function(t) {
                    for (var n, i, r = 0; e[t + (r || "")];) ++r;
                    return t += r || "", e[t] = !0, n = "@@" + t, u(l, n, o.gs(null, function(e) { i || (i = !0, u(this, n, o(e)), i = !1) })), n } }();
            r = function(e) {
                if (this instanceof r) throw new TypeError("TypeError: Symbol is not a constructor");
                return i(e) }, t.exports = i = function e(t) {
                var n;
                if (this instanceof e) throw new TypeError("TypeError: Symbol is not a constructor");
                return n = s(r.prototype), t = void 0 === t ? "" : String(t), c(n, { __description__: o("", t), __name__: o("", f(t)) }) }, c(i, { for: o(function(e) {
                    return d[e] ? d[e] : d[e] = i(String(e)) }), keyFor: o(function(e) {
                    var t;
                    a(e);
                    for (t in d)
                        if (d[t] === e) return t }), hasInstance: o("", n && n.hasInstance || i("hasInstance")), isConcatSpreadable: o("", n && n.isConcatSpreadable || i("isConcatSpreadable")), iterator: o("", n && n.iterator || i("iterator")), match: o("", n && n.match || i("match")), replace: o("", n && n.replace || i("replace")), search: o("", n && n.search || i("search")), species: o("", n && n.species || i("species")), split: o("", n && n.split || i("split")), toPrimitive: o("", n && n.toPrimitive || i("toPrimitive")), toStringTag: o("", n && n.toStringTag || i("toStringTag")), unscopables: o("", n && n.unscopables || i("unscopables")) }), c(r.prototype, { constructor: o(i), toString: o("", function() {
                    return this.__name__ }) }), c(i.prototype, { toString: o(function() {
                    return "Symbol (" + a(this).__description__ + ")" }), valueOf: o(function() {
                    return a(this) }) }), u(i.prototype, i.toPrimitive, o("", function() {
                return a(this) })), u(i.prototype, i.toStringTag, o("c", "Symbol")), u(r.prototype, i.toStringTag, o("c", i.prototype[i.toStringTag])), u(r.prototype, i.toPrimitive, o("c", i.prototype[i.toPrimitive])) }),
        ir = e(nr),
        rr = Object.freeze({ default: ir }),
        or = t(function(t) { t.exports = e(li)() ? Symbol : e(rr) }),
        ar = e(or),
        sr = window.WeakMap || function() {
            var e = Object.defineProperty,
                t = Date.now() % 1e9,
                n = function() { this.name = "__st" + (1e9 * Math.random() >>> 0) + (t++ + "__") };
            return n.prototype.set = function(t, n) {
                if ("object" !== ("undefined" == typeof t ? "undefined" : Ye(t)) && "function" != typeof t) throw new TypeError("Invalid value used as weak map key");
                var i = t[this.name];
                return i && i[0] === t ? i[1] = n : e(t, this.name, { value: [t, n], writable: !0 }), this }, n.prototype.get = function(e) {
                var t;
                return (t = e[this.name]) && t[0] === e ? t[1] : void 0 }, n.prototype.delete = function(e) {
                var t = e[this.name];
                return !(!t || t[0] !== e) && (t[0] = t[1] = void 0, !0) }, n.prototype.has = function(e) {
                var t = e[this.name];
                return !!t && t[0] === e }, n }(),
        cr = "function" == typeof ar && "symbol" == typeof ar.iterator ? function(e) {
            return typeof e } : function(e) {
            return e && "function" == typeof ar && e.constructor === ar && e !== ar.prototype ? "symbol" : typeof e },
        ur = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
        lr = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t } }(),
        dr = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e },
        fr = function e(t, n, i) { null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === r) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, i) }
            if ("value" in r) return r.value;
            var a = r.get;
            if (void 0 !== a) return a.call(i) },
        hr = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) },
        pr = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t },
        vr = function e(t, n, i, r) {
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                null !== a && e(a, n, i, r) } else if ("value" in o && o.writable) o.value = i;
            else {
                var s = o.set;
                void 0 !== s && s.call(r, i) }
            return i },
        mr = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[ar.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0); } catch (e) { r = !0, o = e } finally {
                    try {!i && s.return && s.return() } finally {
                        if (r) throw o } }
                return n }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (ar.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
        gr = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n }
            return ii(e) },
        TelecineError = function TelecineError(e, t) { ur(this, TelecineError), this.name = e, this.message = t, Object.freeze(this) },
        _r = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ur(this, e), this._telecine = t, this._element = t._element, this._options = n }
            return lr(e, null, [{ key: "displayName", get: function() {
                    return "Effect" } }, { key: "supported", get: function() {
                    return !1 } }, { key: "supportedScanners", get: function() {
                    return [] } }]), lr(e, [{ key: "activate", value: function() {
                    throw new TelecineError("NotImplemented", "The effect must implement the activate method.") } }, { key: "deactivate", value: function() {
                    throw new TelecineError("NotImplemented", "The effect must implement the deactivate method.") } }]), e }(),
        yr = /Firefox/.test(navigator.userAgent),
        br = /i(Phone|Pad|Pod touch);/.test(navigator.userAgent),
        wr = /Android/.test(navigator.userAgent),
        kr = wr && /mobile/.test(navigator.userAgent.toLowerCase()),
        xr = { firefox: yr, iOS: br, android: wr, androidMobile: kr },
        Sr = function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t].id === "" + e) return this[t];
            return null },
        Tr = function(e, t) {
            if (!e || void 0 === e[t]) throw oe(1, "INDEX_SIZE_ERR");
            return e[t] };
    ge.from = function(e) {
        if (!(e instanceof TimeRanges)) throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object.");
        for (var t = [], n = [], i = 0, r = e.length; i < r; i++) t.push(e.start(i)), n.push(e.end(i));
        return ge(t, n) };
    var Er = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ur(this, e), this._element = t, this._options = n, this._telecineVideo = null, this._currentFile = null, this._externalDisplays = [], re(this) }
            return lr(e, null, [{ key: "displayName", get: function() {
                    return "Scanner" } }, { key: "supported", get: function() {
                    return !1 } }, { key: "supportedVideoTypes", get: function() {
                    return [] } }, { key: "supportedAudioTypes", get: function() {
                    return [] } }, { key: "supportedExternalDisplays", get: function() {
                    return [] } }, { key: "supportsSettingVolume", get: function() {
                    return !0 } }, { key: "supportsTextTracks", get: function() {
                    return !1 } }]), lr(e, [{ key: "deactivate", value: function() { this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")) } }, { key: "reactivate", value: function() {} }, { key: "play", value: function() {
                    throw new TelecineError("NotImplemented", "The scanner must implement the play method.") } }, { key: "pause", value: function() {
                    throw new TelecineError("NotImplemented", "The scanner must implement the pause method.") } }, { key: "addTextTrack", value: function(e) {
                    return this } }, { key: "removeTextTrack", value: function(e) {
                    return this } }, { key: "getCuesForTrack", value: function(e) {
                    return [] } }, { key: "getActiveCuesForTrack", value: function(e) {
                    return [] } }, { key: "setModeForTrack", value: function(e, t) {
                    return this } }, { key: "setSrcForTrack", value: function(e, t) {
                    return this } }, { key: "addCuePoint", value: function(e) { arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    throw new TelecineError("CuePointsNotSupported", "Cue points are not supported in this scanner.") } }, { key: "removeCuePoint", value: function(e) {
                    return !1 } }, { key: "removeAllCuePoints", value: function() {
                    return !1 } }, { key: "showExternalDisplayPicker", value: function(e) {
                    if (!this._externalDisplays.length) throw new TelecineError("ExternalDisplayUnvailable", "No external displays are available.");
                    if (!e) return void this._externalDisplays[0].showPicker();
                    var t = this._externalDisplays.filter(function(t) {
                        return t.constructor.displayName.replace("ExternalDisplay", "") === e })[0];
                    if (!t) throw new TelecineError("InvalidExternalDisplay", "The specified external display is not available.");
                    t.showPicker() } }, { key: "_pickFile", value: function() {
                    if (this._files.length < 1) return null;
                    var e = this._files.slice(0).sort(function(e, t) {
                        return e.priority - t.priority });
                    return e[0] } }, { key: "_updateCurrentFile", value: function() {
                    var e = this._pickFile();
                    return e ? void(this.currentFile = e) : void this.fire("scannererror", { reason: "all files failed" }) } }, { key: "_switchToNextFile", value: function() {
                    var e = this._files.indexOf(this._currentFile);
                    this._files.splice(e, 1), this._updateCurrentFile() } }, { key: "buffered", get: function() {
                    return ge() } }, { key: "cuePoints", get: function() {
                    return [] } }, { key: "currentFile", get: function() {
                    return this._currentFile }, set: function(e) { this._currentFile = e, this.fire("currentfilechange", e) } }, { key: "currentTime", get: function() {
                    return 0 }, set: function(e) {} }, { key: "duration", get: function() {
                    return NaN } }, { key: "ended", get: function() {
                    return !1 } }, { key: "externalDisplayAvailable", get: function() {
                    return this._externalDisplays.some(function(e) {
                        return e.available }) } }, { key: "externalDisplayActive", get: function() {
                    return this._externalDisplays.some(function(e) {
                        return e.active }) } }, { key: "loop", get: function() {
                    return !1 }, set: function(e) {} }, { key: "muted", get: function() {
                    return !1 }, set: function(e) {} }, { key: "paused", get: function() {
                    return !0 } }, { key: "playbackRate", get: function() {
                    return 1 }, set: function(e) {} }, { key: "preload", get: function() {
                    return "none" }, set: function(e) {} }, { key: "presentationMode", get: function() {
                    return "inline" }, set: function(e) {
                    if (this.supportedPresentationModes.indexOf(e) === -1) throw new TelecineError("InvalidPresentationMode", "The “" + e + "” presentation mode is not supported.") } }, { key: "supportedPresentationModes", get: function() {
                    return ["inline"] } }, { key: "video", get: function() {
                    return this._telecineVideo }, set: function(e) {
                    var t = this;
                    this.reactivate(), this._telecineVideo !== e && (this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeAllCuePoints(), this._telecineVideo = e, this._files = e.files.filter(function(e) {
                        return t.constructor.supportedVideoTypes.indexOf(e.mime) !== -1 }), this._telecineVideo.on("filesrcupdate", function(e) { e === t._currentFile && t._updateCurrentFile() }), this._telecineVideo.on("texttracksrcupdate", function(e) { t.video.currentScanner && t.video.currentScanner.setSrcForTrack(e, e.src) }), this._options.externalDisplays && this._options.externalDisplays.length && ! function() { t._externalDisplays = [];
                        var n = t.constructor.supportedExternalDisplays;
                        Array.isArray(n) || (n = []);
                        var i = n.map(function(e) {
                            return e.displayName });
                        t._options.externalDisplays.filter(function(e) {
                            return e.supported && i.indexOf(e.displayName) !== -1 }).forEach(function(n) {
                            var i = new n(e),
                                r = n.displayName.replace("ExternalDisplay", "");
                            i.on("available", function() {
                                return t.fire("externaldisplayavailable", { type: r }) }), i.on("unavailable", function() {
                                return t.fire("externaldisplayunavailable", { type: r }) }), i.on("activated", function() { "function" == typeof t.onexternaldisplayactivated && t.onexternaldisplayactivated(i), t.fire("externaldisplayactivated", { type: r }) }), i.on("deactivated", function() { "function" == typeof t.onexternaldisplaydeactivated && t.onexternaldisplaydeactivated(i), t.fire("externaldisplaydeactivated", { type: r }) }), t._externalDisplays.push(i) }) }(), this._updateCurrentFile()) } }, { key: "videoWidth", get: function() {
                    return 0 } }, { key: "videoHeight", get: function() {
                    return 0 } }, { key: "volume", get: function() {
                    return 1 }, set: function(e) {} }]), e }(),
        Pr = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "webkitbeginfullscreen", "webkitendfullscreen", "webkitpresentationmodechanged"],
        Lr = ["externaldisplayavailable", "externaldisplayunavailable", "externaldisplayactivated", "externaldisplaydeactivated"],
        Cr = ["scannerchange", "scannererror", "fileerror", "drmauthfailure", "drmauthsuccess", "drmfailure", "emeunsupported", "currentfilechange", "streamchange", "streambufferstart", "streambufferend", "droppedframes", "bandwidth", "streamtargetchange", "alert", "presentationmodechange", "cuepoint"],
        Or = [].concat(Pr, Lr, Cr),
        Ar = new sr,
        Ir = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ur(this, e);
                var i = parseFloat(t);
                if (isNaN(i)) throw new TypeError("Time must be a number.");
                if (i < 0) throw new TypeError("Time must be a positive number.");
                this.time = t, this.data = n, this.id = de(), this.vttCue = new VTTCue(t, t + .25, JSON.stringify(n)), this.vttCue.id = this.id, Ar.set(this.vttCue, this), Object.freeze(this) }
            return lr(e, null, [{ key: "fromVTTCue", value: function(t) {
                    if (Ar.has(t)) return Ar.get(t);
                    var n = {};
                    try { n = JSON.parse(t.text) } catch (e) {}
                    return new e(t.startTime, n) } }]), e }(),
        Mr = function() {
            function e(t) {
                var n = this;
                ur(this, e), this._interval = null, this._rates = [], this._averageRate = 0, this._lastChecked = null, this._lastLoaded = 0, this._scanner = t, this._scanner.on("loadstart", function() {
                    return n.startInterval() }), this._scanner.on("progress", function() {
                    return n.startInterval() }), this._scanner.on("ended", function() {
                    return n.stopInterval() }) }
            return lr(e, [{ key: "startInterval", value: function() {
                    var e = this;
                    this._interval || (this._interval = window.setInterval(function() {
                        return e.updateDownloadRate() }, 1e3)) } }, { key: "stopInterval", value: function() { window.clearInterval(this._interval) } }, { key: "updateDownloadRate", value: function() {
                    for (var e = le(), t = 0, n = this._scanner.buffered, i = Array.isArray(n), r = 0, n = i ? n : n[ar.iterator]();;) {
                        var o;
                        if (i) {
                            if (r >= n.length) break;
                            o = n[r++] } else {
                            if (r = n.next(), r.done) break;
                            o = r.value }
                        var a = o,
                            s = mr(a, 2),
                            c = s[0],
                            u = s[1];
                        t += u - c }
                    if (!this._lastChecked) return this._lastChecked = e, void(this._lastLoaded = t);
                    if (this._lastLoaded !== t) {
                        var l = Math.max(t - this._lastLoaded, 0);
                        this._rates.push(l), this._rates = this._rates.slice(-15), this._averageRate = this._rates.reduce(function(e, t) {
                            return e + t }) / this._rates.length, this._lastChecked = e, this._lastLoaded = t, Math.round(t) >= Math.round(this._scanner.duration) && this.stopInterval() } } }, { key: "averageDownloadRate", get: function() {
                    return this._averageRate } }]), e }(),
        Fr = function() {
            function e(t) { ur(this, e), this._available = !1, this._active = !1, this._video = t, re(this) }
            return lr(e, null, [{ key: "displayName", get: function() {
                    return "ExternalDisplay" } }, { key: "supported", get: function() {
                    return !1 } }, { key: "supportedVideoTypes", get: function() {
                    return [] } }]), lr(e, [{ key: "showPicker", value: function() {} }, { key: "getFile", value: function() {
                    var e = this.constructor.displayName.replace("ExternalDisplay", "");
                    if (this._video.externalDisplayFiles[e]) return this._video.externalDisplayFiles[e];
                    var t = this.constructor.supportedVideoTypes,
                        n = this._video.files.filter(function(e) {
                            return t.indexOf(e.mime) !== -1 }).sort(function(e, n) {
                            return e.mime === n.mime ? e.priority - n.priority : t.indexOf(e.mime) - t.indexOf(n.mime) });
                    if (!n.length) throw new Error("No files available for " + this.constructor.displayName + " external display.");
                    return n[0] } }, { key: "active", get: function() {
                    return this._active } }, { key: "available", get: function() {
                    return this._available } }, { key: "element", get: function() {
                    return document.createElement("div") } }]), e }(),
        AirPlayExternalDisplay = function(e) {
            function AirPlayExternalDisplay(e) { ur(this, AirPlayExternalDisplay);
                var t = pr(this, (AirPlayExternalDisplay.__proto__ || Object.getPrototypeOf(AirPlayExternalDisplay)).call(this, e));
                return t._videoElement = document.createElement("video"), t._videoElement.setAttribute("data-airplay", ""), t._videoElement.setAttribute("x-webkit-airplay", "allow"), t.addVideoEventListeners(), t }
            return hr(AirPlayExternalDisplay, e), lr(AirPlayExternalDisplay, null, [{ key: "displayName", get: function() {
                    return "AirPlayExternalDisplay" } }, { key: "supported", get: function() {
                    return "WebKitPlaybackTargetAvailabilityEvent" in window } }, { key: "supportedVideoTypes", get: function() {
                    return ["application/vnd.apple.mpegurl", "video/mp4"] } }]), lr(AirPlayExternalDisplay, [{ key: "addVideoEventListeners", value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._videoElement;
                    t.addEventListener("webkitplaybacktargetavailabilitychanged", function(t) {
                        switch (t.availability) {
                            case "available":
                                e._available || (e._available = !0, e.fire("available"));
                                break;
                            case "not-available":
                                e._available && (e._available = !1, e.fire("unavailable")) } }), t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function(t) {
                        return t.target.webkitCurrentPlaybackTargetIsWireless ? (e._active = !0, void e.fire("activated")) : (e._active = !1, void e.fire("deactivated")) }) } }, { key: "showPicker", value: function() {
                    var e = this;
                    this._videoElement.webkitShowPlaybackTargetPicker(), this.loadMetadata().then(function() { e._videoElement.webkitShowPlaybackTargetPicker() }) } }, { key: "loadMetadata", value: function() {
                    var e = this;
                    return this._videoElement.readyState >= 1 ? Ve.resolve() : new Ve(function(t, n) { e._videoElement.addEventListener("loadedmetadata", function() { t() }), e._videoElement.src = e.getFile().src }) } }, { key: "element", get: function() {
                    return this._videoElement }, set: function(e) {
                    if (!(e instanceof HTMLVideoElement)) throw new TypeError("The element for AirPlay must be a <video>.");
                    e !== this._videoElement && (this.addVideoEventListeners(e), this._videoElement = e, this._videoElement.setAttribute("x-webkit-airplay", "allow")) } }]), AirPlayExternalDisplay }(Fr),
        qr = document.createElement("video"),
        Rr = { "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl", "video/mp4": 'video/mp4; codecs="avc1.64001E"', "video/webm": 'video/webm; codecs="vp8, vorbis"', "video/x-flv": 'video/x-flv; codecs="vp6"' },
        Br = function() {
            var e = "undefined" != typeof TextTrack ? TextTrack : {};
            return { disabled: "DISABLED" in e ? e.DISABLED : "disabled", hidden: "HIDDEN" in e ? e.HIDDEN : "hidden", showing: "SHOWING" in e ? e.SHOWING : "showing" } }(),
        Dr = function() {
            var e = document.createElement("track");
            return "track" in e && "oncuechange" in e.track }(),
        Nr = 0,
        Hr = 1,
        jr = 2,
        Vr = 3,
        Ur = 4,
        zr = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ur(this, t);
                var i = pr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                    r = e.querySelector("video");
                return r || (r = document.createElement("video"), r.preload = "none", i._element.appendChild(r)), i._video = r, n.htmlScanner && n.htmlScanner.controls && (i._video.controls = !0), i._boundHandleVideoEvent = i.handleVideoEvent.bind(i), i.addVideoEventListeners(), i._downloadRate = new Mr(i), i._bufferTimer = null, i._readyState = Nr, i._paused = !0, i._preload = "none", i._externalDisplayActivated = !1, i._inFullscreen = !1, i }
            return hr(t, e), lr(t, null, [{ key: "displayName", get: function() {
                    return "HTMLScanner" } }, { key: "supported", get: function() {
                    return t.supportedVideoTypes.length > 0 } }, { key: "supportedVideoTypes", get: function() {
                    var e = [];
                    if ("function" != typeof qr.canPlayType) return e;
                    for (var t in Rr) {
                        var n = Rr[t];
                        xr.android && "application/vnd.apple.mpegurl" === t || (!xr.android || xr.androidMobile || "video/mp4" !== t ? qr.canPlayType(n).replace(/^no$/, "") && e.push(t) : e.push(t)) }
                    return e } }, { key: "supportedExternalDisplays", get: function() {
                    return [AirPlayExternalDisplay] } }, { key: "supportsSettingVolume", get: function() {
                    if (xr.android) return !1;
                    var e = qr.volume;
                    return qr.volume = .5 * e, qr.volume !== e } }, { key: "supportsTextTracks", get: function() {
                    return "undefined" != typeof qr.textTracks && qr.textTracks instanceof TextTrackList } }]), lr(t, [{ key: "deactivate", value: function() { fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deactivate", this).call(this), this.removeVideoEventListeners(), this.removeSnapshot(), this._video.style.display = "none" } }, { key: "reactivate", value: function() { fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reactivate", this).call(this), this.addVideoEventListeners(), this._video.style.display = "" } }, { key: "addVideoEventListeners", value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._video;
                    Pr.forEach(function(n) { t.addEventListener(n, e._boundHandleVideoEvent) }) } }, { key: "removeVideoEventListeners", value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._video;
                    Pr.forEach(function(n) { t.removeEventListener(n, e._boundHandleVideoEvent) }) } }, { key: "play", value: function() { this._video.preload = "", this._paused = !1, this._video.play() } }, { key: "pause", value: function() { this._paused = !0, this._video.pause() } }, { key: "addTextTrack", value: function(e) {
                    var n = this,
                        i = document.createElement("track");
                    return i.id = "telecine-track-" + e.id, i.src = e.src, i.kind = e.kind, i.srclang = e.language, i.label = e.label, i.addEventListener("cuechange", function() {
                        return e.dispatchEvent("cuechange") }), this._video.addEventListener("timeupdate", function() { n._video.webkitDisplayingFullscreen && (e.mode = i.track.mode) }), i.addEventListener("load", function() {
                        var t = xr.iOS && n._video.webkitDisplayingFullscreen;
                        return e._modeHasBeenSet && !t ? void(i.track.mode = Br[e.mode]) : void(e.mode = i.track.mode) }), e._modeHasBeenSet && (i.track.mode = Br[e.mode]), Dr || ! function() {
                        var t = [];
                        n._video.addEventListener("timeupdate", function() {
                            var n = i.track;
                            if (n && "disabled" !== Br[n.mode]) {
                                if (t.length !== n.activeCues.length) return e.dispatchEvent("cuechange"), void(t = ii(n.activeCues));
                                for (var r = 0, o = n.activeCues.length; r < o; r++)
                                    if (n.activeCues[r].startTime !== t[r].startTime) return e.dispatchEvent("cuechange"), void(t = ii(n.activeCues)) } }) }(), ve(function() {
                        return n._video.appendChild(i) }), fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addTextTrack", this).call(this, e) } }, { key: "removeTextTrack", value: function(e) {
                    var n = this._video.querySelector("#telecine-track-" + e.id);
                    return n && this._video.removeChild(n), fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeTextTrack", this).call(this, e) } }, { key: "getCuesForTrack", value: function(e) {
                    var n = this.getTrackById("telecine-track-" + e.id);
                    return n ? ii(n.cues) : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getCuesForTrack", this).call(this, e) } }, { key: "getActiveCuesForTrack", value: function(e) {
                    var n = this.getTrackById("telecine-track-" + e.id);
                    return n ? ii(n.activeCues) : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getActiveCuesForTrack", this).call(this, e) } }, { key: "setModeForTrack", value: function(e, n) {
                    var i = this.getTrackById("telecine-track-" + e.id);
                    return i && i.mode !== Br[n] && (i.mode = Br[n], Dr || "disabled" === n || e.dispatchEvent("cuechange")), fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setModeForTrack", this).call(this, e, n) } }, { key: "setSrcForTrack", value: function(e, n) {
                    var i = this._video.querySelector("#telecine-track-" + e.id);
                    return i && null === i.track.cues && (i.src = n), fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setSrcForTrack", this).call(this, e, n) } }, { key: "addCuePoint", value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._cuePointTrack || (this._cuePointTrack = this._video.addTextTrack("metadata"), this._cuePointTrack.mode = "hidden", this._cuePointTrack.addEventListener("cuechange", function(e) {
                        [].concat(gr(e.target.activeCues)).forEach(function(e) { t.fire("cuepoint", Ir.fromVTTCue(e)) }) }));
                    var i = new Ir(e, n);
                    return this._cuePointTrack.addCue(i.vttCue), i } }, { key: "removeCuePoint", value: function(e) {
                    if (!e) throw new TelecineError("InvalidCuePoint", "The specified cue point is not valid.");
                    return this._cuePointTrack.removeCue(e.vttCue), !0 } }, { key: "removeAllCuePoints", value: function() {
                    var e = this;
                    return this._cuePointTrack && this._cuePointTrack.length && [].concat(gr(this._cuePointTrack.cues)).forEach(function(t) { e._cuePointTrack.removeCue(t) }), !0 } }, { key: "oncanplay", value: function() {
                    return !1 } }, { key: "oncanplaythrough", value: function() {
                    return !1 } }, { key: "onerror", value: function() {
                    if (!this._video.error) return !1;
                    switch (this._video.error.code) {
                        case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            return this.fire("error", new TelecineError("HTMLSourceNotSupported", this._currentFile)), this._switchToNextFile(), !1;
                        case this._video.error.MEDIA_ERR_DECODE:
                            return this.fire("error", new TelecineError("HTMLDecode", this._currentFile)), this._switchToNextFile(), !1;
                        case this._video.error.MEDIA_ERR_NETWORK:
                            return this.fire("error", new TelecineError("HTMLNetwork", this._currentFile)), !1;
                        case this._video.error.MEDIA_ERR_ABORTED:
                            return this.fire("error", new TelecineError("HTMLAborted", this._currentFile)), !1;
                        default:
                            return this.fire("error", new TelecineError("HTMLUnknown", this._currentFile)), !1 } } }, { key: "onloadedmetadata", value: function() { this.readyState = Hr } }, { key: "onloadeddata", value: function() { this.readyState = jr } }, { key: "onsuspend", value: function() { this.updateReadyState() } }, { key: "onplay", value: function() {
                    return this._ignorePlayEvent ? (this._ignorePlayEvent = !1, !1) : void(("picture-in-picture" === this.presentationMode || "fullscreen" === this.presentationMode || this._inFullscreen) && (this._paused = !1)) } }, { key: "onpause", value: function() {
                    return window.clearTimeout(this._bufferTimer), this._ignorePauseEvent ? (this._ignorePauseEvent = !1, !1) : void(("picture-in-picture" === this.presentationMode || "fullscreen" === this.presentationMode || this._inFullscreen) && (this._paused = !0)) } }, { key: "onended", value: function() {
                    if (this._paused = !0, this._video.paused || this._video.pause(), this.currentTime < this._video.duration) return !1 } }, { key: "onprogress", value: function() { this.updateReadyState() } }, { key: "ontimeupdate", value: function() {
                    var e = this,
                        t = ue(this.buffered, this.currentTime),
                        n = mr(t, 2),
                        i = n[1],
                        r = 1e3 * (i - this.currentTime);
                    if (!xr.firefox && (r < .25 && this.currentTime + r < this.duration && (this.readyState = jr), window.clearTimeout(this._bufferTimer), !this.paused)) {
                        for (var o = 0, a = this.buffered, s = Array.isArray(a), c = 0, a = s ? a : a[ar.iterator]();;) {
                            var u;
                            if (s) {
                                if (c >= a.length) break;
                                u = a[c++] } else {
                                if (c = a.next(), c.done) break;
                                u = c.value }
                            var l = u,
                                d = mr(l, 2),
                                f = d[0],
                                h = d[1];
                            o += h - f }
                        o >= this.duration || (this._bufferTimer = window.setTimeout(function() { e._video.paused || e.readyState > jr && (e.readyState = jr) }, 1500)) } } }, { key: "onwaiting", value: function() {
                    return xr.firefox && (this.readyState = jr), !1 } }, { key: "onemptied", value: function() { this._readyState = Nr } }, { key: "onseeked", value: function() { this.readyState < jr && (this.readyState = jr), this.updateReadyState() } }, { key: "onwebkitbeginfullscreen", value: function() { this._inFullscreen = !0 } }, { key: "onwebkitendfullscreen", value: function() { this._inFullscreen = !1, this._video.paused && (this._paused = !0) } }, { key: "onwebkitpresentationmodechanged", value: function() {
                    switch (this._video.webkitPresentationMode) {
                        case "picture-in-picture":
                            this._video.controls = !0;
                            break;
                        case "inline":
                            var e = this._options.htmlScanner && this._options.htmlScanner.controls;
                            e || (this._video.controls = !1) }
                    this.fire("presentationmodechange", this._video.webkitPresentationMode) } }, { key: "shouldHandleVideoEvent", value: function(e) {
                    return !0 } }, { key: "handleVideoEvent", value: function(e) { e.target === this._video && this.shouldHandleVideoEvent(e) !== !1 && ("function" == typeof this["on" + e.type] && this["on" + e.type](e) === !1 || this.fire(e.type)) } }, { key: "swapVideo", value: function(e, t) {
                    var n = e.paused;
                    this.removeVideoEventListeners(e), e.parentElement.replaceChild(t, e), e.pause(), t.currentTime = e.currentTime, n || t.play(), this.addVideoEventListeners(t), this._video = t } }, { key: "onexternaldisplayactivated", value: function(e) { this._externalDisplayActivated || (this._video !== e.element && (this._originalVideo = this._video, this.swapVideo(this._video, e.element)), this._externalDisplayActivated = !0) } }, { key: "onexternaldisplaydeactivated", value: function(e) { this._externalDisplayActivated && (this._originalVideo && (this.swapVideo(e.element, this._originalVideo), this._originalVideo = null), this._externalDisplayActivated = !1) } }, { key: "setVideoSrc", value: function(e) { this._video.src = e } }, { key: "canSeekTo", value: function(e) {
                    var t = this.duration;
                    if (t && e > t && (e = t), this._video.seekable.length > 0)
                        for (var n = 0, i = this._video.seekable.length; n < i; n++)
                            if (this._video.seekable.start(n) <= e && this._video.seekable.end(n) >= e) return !0;
                    return !1 } }, {
                key: "seekToTime",
                value: function(e) {
                    var t = this;
                    return this.canSeekTo(e) ? (ue(this.buffered, e).length || (this.readyState = Hr),
                        this._video.currentTime = e, Ve.resolve(this._video.currentTime)) : new Ve(function(n, i) {
                        var r = function i() { t.canSeekTo(e) && (Pr.forEach(function(e) { t._video.removeEventListener(e, i) }), ue(t.buffered, e).length || (t.readyState = Hr), t._video.currentTime = e, n(t._video.currentTime)) };
                        Pr.forEach(function(e) { t._video.addEventListener(e, r) }) })
                }
            }, { key: "takeSnapshot", value: function() {
                    var e = this._element.querySelector("[telecine-snapshot]");
                    e || (e = document.createElement("canvas"), e.setAttribute("telecine-snapshot", ""), this._element.appendChild(e)), e.setAttribute("width", this._element.clientWidth + "px"), e.setAttribute("height", this._element.clientHeight + "px"), e.style.display = "";
                    var t = me(this._video.clientWidth, this._video.clientHeight, this._video.videoWidth, this._video.videoHeight),
                        n = t.width,
                        i = t.height,
                        r = t.left,
                        o = t.top;
                    e.style.cssText = "position:absolute;width:" + n + "px;height:" + i + "px;left:" + r + "px;top:" + o + "px";
                    var a = e.getContext("2d");
                    a.drawImage(this._video, 0, 0, e.width, e.height) } }, { key: "removeSnapshot", value: function() {
                    var e = this._element.querySelector("[telecine-snapshot]");
                    e && (e.style.display = "none") } }, { key: "getTrackById", value: function(e) {
                    if ("function" == typeof this._video.textTracks.getTrackById) return this._video.textTracks.getTrackById(e);
                    var t = document.getElementById(e);
                    return t ? t.track : null } }, { key: "updateReadyState", value: function() {
                    if (this.buffered.length) {
                        var e = this.duration - this.buffered.end(this.buffered.length - 1),
                            t = e / this._downloadRate.averageDownloadRate,
                            n = this.duration - this.currentTime;
                        if (isFinite(t)) {
                            var i = ue(this.buffered, this.currentTime),
                                r = mr(i, 2),
                                o = r[1],
                                a = o - this.currentTime;
                            t < n ? this.readyState = Ur : this.readyState === Ur && t > n ? this.readyState = Vr : a > 2 && (t <= n / 2 || a > 10) && (this.readyState = Vr) } } } }, { key: "buffered", get: function() {
                    return ge.from(this._video.buffered) } }, { key: "cuePoints", get: function() {
                    return this._cuePointTrack ? [].concat(gr(this._cuePointTrack.cues)).map(function(e) {
                        return Ir.fromVTTCue(e) }) : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "cuePoints", this) } }, { key: "currentFile", get: function() {
                    return fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "currentFile", this) }, set: function(e) {
                    var n = this,
                        i = !this._video.paused,
                        r = this.currentTime,
                        o = !this._currentFile || e.video.id !== this._currentFile.video.id;
                    if (o || this.takeSnapshot(), this._ignorePlayEvent = !1, this._ignorePauseEvent = !1, this._currentFile = e, o && (this._video.preload = this._preload), this.constructor === t && this._video.readyState > Nr && (this._video.currentTime = 0), (xr.iOS || xr.android) && this._currentFile.video.title) {
                        var a = this._currentFile.video.title;
                        this._currentFile.video.subtitle && (a = a + " " + this._currentFile.video.subtitle), this._video.setAttribute("title", a) } else this._video.removeAttribute("title");
                    this._readyState = Nr, this.setVideoSrc(this._currentFile.src, o), this.fire("currentfilechange", e), this.constructor !== t || o ? i && (this._video.preload = "", this._video.play()) : (this._video.preload = "", this.seekToTime(r).then(function() { i && n._video.play() }), this.once("canplay", function() {
                        return n.removeSnapshot() }), this.once("playing", function() {
                        return n.removeSnapshot() })) } }, { key: "currentTime", get: function() {
                    return this._video.currentTime }, set: function(e) { this.seekToTime(e) } }, { key: "duration", get: function() {
                    return this._video.duration } }, { key: "ended", get: function() {
                    return this._video.ended } }, { key: "loop", get: function() {
                    return this._video.loop }, set: function(e) { this._video.loop = e } }, { key: "muted", get: function() {
                    return this._video.muted }, set: function(e) { this._video.muted = e } }, { key: "paused", get: function() {
                    return this._paused } }, { key: "playbackRate", get: function() {
                    return this.video.playbackRate }, set: function(e) { this.video.playbackRate = e } }, { key: "preload", get: function() {
                    return this._preload }, set: function(e) { this._video.preload = e, this._preload = e } }, { key: "presentationMode", get: function() {
                    return this._video.webkitPresentationMode ? this._video.webkitPresentationMode : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "presentationMode", this) }, set: function(e) { vr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "presentationMode", e, this), "function" == typeof this._video.webkitSetPresentationMode && this._video.webkitSetPresentationMode(e) } }, { key: "supportedPresentationModes", get: function() {
                    var e = fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "supportedPresentationModes", this);
                    if ("function" == typeof this._video.webkitSupportsPresentationMode && (this._video.webkitSupportsPresentationMode("picture-in-picture") && e.push("picture-in-picture"), !this._video.webkitSupportsPresentationMode("inline"))) {
                        var n = e.indexOf("inline");
                        n >= 0 && e.splice(n, 1) }
                    return e } }, { key: "video", get: function() {
                    return this._telecineVideo }, set: function(e) {
                    var n = this;
                    vr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "video", e, this), xr.iOS && this._externalDisplays.forEach(function(e) { "AirPlay" === e.constructor.displayName && (e.element = n._video) }), this._telecineVideo.drmHandler && this._telecineVideo.drmHandler.init(this) } }, { key: "videoWidth", get: function() {
                    return this._video.videoWidth } }, { key: "videoHeight", get: function() {
                    return this._video.videoHeight } }, { key: "volume", get: function() {
                    return this._video.volume }, set: function(e) { this._video.volume = e } }, { key: "readyState", get: function() {
                    return this._readyState }, set: function(e) {
                    if (this._readyState !== e && !(this._video.readyState === Hr && e > Hr)) {
                        var t = this._readyState;
                        this._readyState = e, t >= Vr && e <= jr && (this.fire("waiting"), this._video.paused || (this._ignorePauseEvent = !0, this._video.pause())), t <= jr && e === Vr && (this.fire("canplay"), this._paused === !1 && this._video.play()), e === Ur && (t <= jr && (this.fire("canplay"), this._paused === !1 && this._video.paused && (this._ignorePlayEvent = !0, this._video.play())), this.fire("canplaythrough")) } } }]), t
        }(Er),
        Wr = "function" == typeof ar && "symbol" == typeof ar.iterator ? function(e) {
            return typeof e } : function(e) {
            return e && "function" == typeof ar && e.constructor === ar ? "symbol" : typeof e },
        $r = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
        Gr = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t } }(),
        Xr = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[ar.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0); } catch (e) { r = !0, o = e } finally {
                    try {!i && s.return && s.return() } finally {
                        if (r) throw o } }
                return n }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (ar.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
        Kr = [],
        Yr = function() {
            function e() {
                var t = this,
                    n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    i = n.retryCount,
                    r = void 0 === i ? 3 : i,
                    o = n.parallel,
                    a = void 0 === o ? 1 : o,
                    s = n.includeWithSpeeds,
                    c = void 0 === s || s;
                $r(this, e), this._queue = [], this._activeXhrRequests = new Set, this._retries = new sr, this._retryCount = r, this._running = !1, this._processingQueue = !1, this._parallel = a, this._includeWithSpeeds = c, this._pendingFetchMap = new sr, we(this), window.addEventListener("online", function() { t.start() }), window.addEventListener("offline", function() { t.stop() }) }
            return Gr(e, null, [{ key: "getPercentileSpeed", value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 5 : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? .8 : arguments[1],
                        n = Kr.slice(-e);
                    return ye(n, t) } }, { key: "getAverageSpeed", value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 5 : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                        n = Kr.slice(-e);
                    return _e(n, t) } }, { key: "getMedianSpeed", value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 5 : arguments[0],
                        t = Kr.slice(-e);
                    return be(t) } }, { key: "getResponseSpeeds", value: function() {
                    return Kr } }, { key: "getTime", value: function() {
                    return "undefined" != typeof performance ? performance.now() : (new Date).getTime() } }, { key: "calculateExponentialBackoff", value: function(e) {
                    return 500 * Math.pow(2, e) + Math.round(1e3 * Math.random()) } }]), Gr(e, [{ key: "add", value: function(e, t, n) {
                    return this._queue[n ? "unshift" : "push"]([e, t]), this._running && !this._processingQueue && this._processQueue(), this } }, { key: "start", value: function() {
                    return this._running = !0, this._processQueue(), this } }, { key: "stop", value: function() {
                    return this._running = !1, this } }, { key: "abort", value: function() {
                    var e = this;
                    this._queue.forEach(function(t) {
                        var n = e._getIdentifierFromData(t),
                            i = Xr(n, 3),
                            r = i[2];
                        e.fire("downloadabort", r) }), this._queue = [], this._processingQueue = !1, this._activeXhrRequests.forEach(function(e) { e.abort() }) } }, { key: "_processQueue", value: function() {
                    if (this._running) { this._processingQueue = !0;
                        for (var e = this._parallel - this._activeXhrRequests.size, t = 0; t < e; t++) this._fetchOne() } } }, { key: "_retry", value: function(t, n, i) {
                    var r = this,
                        o = n[0],
                        a = n[1];
                    if (this._retries.get(o) || this._retries.set(o, 0), this._retries.set(o, this._retries.get(o) + 1), this._retries.get(o) > this._retryCount) return void this.fire("downloaderror", i, t.status);
                    var s = e.calculateExponentialBackoff(this._retries.get(o));
                    setTimeout(function() {
                        var e = !0;
                        r.add(o, a, e) }, s) } }, { key: "_handleXHRResponse", value: function(e, t, n, i) {
                    return e.status >= 500 && e.status < 600 ? void this._retry(e, t, n) : e.status >= 400 && e.status < 500 ? void this.fire("downloaderror", n, e.status) : (this.fire("downloadend", n), void i.call(this, new Uint8Array(e.response))) } }, { key: "_getIdentifierFromData", value: function(e) {
                    var t = e[1],
                        n = e[0],
                        i = n;
                    return n.id && (i = n.id), [n.url, n.byteRange, i, t] } }, { key: "_continueProcessingQueue", value: function() {
                    return 0 === this._activeXhrRequests.size && 0 === this._queue.length ? void(this._processingQueue = !1) : void(this._activeXhrRequests.size < this._parallel && this._processQueue()) } }, { key: "_fetchOne", value: function() {
                    var t = this;
                    if (0 === this._queue.length) return void(this._processingQueue = !1);
                    var n = this._queue.shift(),
                        i = this._getIdentifierFromData(n),
                        r = Xr(i, 4),
                        o = r[0],
                        a = r[1],
                        s = r[2],
                        c = r[3],
                        u = e.getTime(),
                        l = new XMLHttpRequest;
                    l.addEventListener("progress", function(e) { e.lengthComputable && t._pendingFetchMap.set(l, { bytesTotal: e.total, bytesLoaded: e.loaded, percent: e.loaded / e.total, identifier: s }) }), l.open("GET", o, !0), l.responseType = "arraybuffer", a && l.setRequestHeader("Range", "bytes=" + a), l.onload = function(i) { t._activeXhrRequests.delete(l), t._pendingFetchMap.delete(l);
                        var r = (e.getTime() - u) / 1e3,
                            o = i.target.response.byteLength;
                        if (o > 40960) {
                            var a = 8 * o,
                                d = a / r;
                            Kr.length > 100 && Kr.shift(), t._includeWithSpeeds && Kr.push(d) }
                        t._handleXHRResponse(l, n, s, c), t._continueProcessingQueue() }, l.onerror = function() { t._activeXhrRequests.delete(l), t._pendingFetchMap.delete(l), t._retry(l, n, s), t._continueProcessingQueue() }, l.onabort = function() { t._pendingFetchMap.delete(l), t._activeXhrRequests.delete(l), t.fire("downloadabort", s) }, this.fire("downloadstart", s), this._activeXhrRequests.add(l), l.send() } }, { key: "parallel", get: function() {
                    return this._parallel }, set: function(e) { this._parallel = e } }, { key: "pendingFetches", get: function() {
                    var e = this,
                        t = [];
                    return this._activeXhrRequests.forEach(function(n) { e._pendingFetchMap.get(n) && t.push(e._pendingFetchMap.get(n)) }), t } }]), e }(),
        Qr = function() {
            function e(t) { $r(this, e), we(this), this._sorcerer = t, this._sourceBuffer = null, this._activeStreamIndex = null, this._needsStreamSwitch = !1, this._needInitSegment = !0, this._lastAppended = null, this._toRemove = [], this._streams = [], this._quotaExceeded = !1, this._quotaExceededTimer = null, this._finalSegmentStartTime = void 0, this._delayBufferEndUntilEndOfStream = !1 }
            return Gr(e, [{ key: "addStream", value: function(e) {
                    var t = this;
                    e.on("segmentadd", function() {
                        return t._process() });
                    var n = this._streams.push(e) - 1;
                    e.index = n, null === this._activeStreamIndex && (this._setActiveIndex(n), this._needsStreamSwitch = !0) } }, { key: "switchTo", value: function(e) {
                    var t = this,
                        n = e; "object" === ("undefined" == typeof e ? "undefined" : Wr(e)) && (n = e.index);
                    var i = this._activeStreamIndex !== n,
                        r = i;
                    if (!i && this._needsStreamSwitch && (i = !0), i) { this._needsStreamSwitch = !1;
                        var o = this._activeStreamIndex,
                            a = this._streams[o];
                        a && r && a.abort(), this._switchToIndex = n, this._setActiveIndex(n) }
                    return this._process(), new Ve(function(e) {
                        return i ? void(t._resolveSwitchComplete = function() { t._switchToIndex === n && (t._resolveSwitchComplete = null, e(), t.fire("streamchange", n)) }) : void e() }) } }, { key: "clear", value: function() { this._streams.forEach(function(e) { e.clear() }) } }, { key: "remove", value: function(e) {
                    var t = this,
                        n = arguments.length <= 1 || void 0 === arguments[1] ? this._sorcerer._mediaSource.duration : arguments[1];
                    return new Ve(function(i, r) { t._toRemove.push([e, n, i]), t._process() }) } }, { key: "_attachEvents", value: function() {
                    var e = this;
                    this.bound = { handleUpdateEnd: this._handleUpdateEnd.bind(this), handleEnded: function() { e._finalSegmentStartTime = void 0 } }, this._sourceBuffer.addEventListener("updateend", this.bound.handleUpdateEnd), this._sorcerer.on("endofstream", function() { e._delayBufferEndUntilEndOfStream = !1, e._finalSegmentStartTime = void 0, e._handleUpdateEnd() }), this._sorcerer.on("ended", this.bound.handleEnded) } }, { key: "_handleUpdateEnd", value: function() {
                    return this._delayBufferEndUntilEndOfStream ? void this._sorcerer._fireStreamHasEnded() : (this._lastAppended && (this.fire("appendbufferend", this._lastAppended), this._lastAppended = null, this._resolveSwitchComplete && this._resolveSwitchComplete()), void this._process()) } }, { key: "_removeEventListeners", value: function() { this.bound && (this._sourceBuffer && this._sourceBuffer.removeEventListener("updateend", this.bound.handleUpdateEnd), this._sorcerer.off("endofstream", this.bound.handleUpdateEnd), this._sorcerer.off("ended", this.bound.handleEnded)) } }, { key: "_setActiveIndex", value: function(e) { this._needInitSegment = !0, this._activeStreamIndex = e, this._sorcerer._frameDropper.streamIndex = e } }, { key: "_process", value: function() {
                    var e = this,
                        t = this._streams[this._activeStreamIndex];
                    if (!this._sourceBuffer) return void this.on("sourcebufferattach", this._process);
                    if (t && "closed" !== this._sorcerer._mediaSource.readyState) {
                        var n = this._sourceBuffer;
                        if (!n.updating) {
                            if (this._toRemove.length) {
                                var i = function() {
                                    var t = e._toRemove.shift(),
                                        i = Xr(t, 3),
                                        r = i[0],
                                        o = i[1],
                                        a = i[2],
                                        s = e;
                                    n.addEventListener("updateend", function e(t) { n.removeEventListener("updateend", e), a(), clearTimeout(s._quotaExceededTimer), s._quotaExceededTimer = setTimeout(function() { s._quotaExceeded = !1, s._process() }, 5e3) });
                                    var c = r;
                                    return n.remove(c, o), { v: void 0 } }();
                                if ("object" === ("undefined" == typeof i ? "undefined" : Wr(i))) return i.v }
                            if (!this._quotaExceeded) {
                                if (this._needInitSegment) return t.getInitSegment().then(function(t) {
                                    return e._lastAppended = null, n.appendBuffer(t), t }).catch(function(e) {}), void(this._needInitSegment = !1);
                                var r = t.getNextSegment();
                                if (null !== r) {
                                    var o = t.getIdForSegment(r),
                                        a = t.isFinal(r);
                                    if (a) {
                                        var s = 0;
                                        this._sourceBuffer.buffered.length > 0 && (s = this._sourceBuffer.buffered.end(this._sourceBuffer.buffered.length - 1)), this._finalSegmentStartTime = s, this._delayBufferEndUntilEndOfStream = !0 }
                                    this._lastAppended = o, this.fire("appendbufferstart", o);
                                    try { n.appendBuffer(r) } catch (e) {
                                        if ("QuotaExceededError" === e.name) { this._quotaExceeded = !0;
                                            var c = 6;
                                            if (this._sorcerer._video.currentTime > c) {
                                                var u = 0,
                                                    l = this._sorcerer._video.currentTime - c;
                                                this._sorcerer.removeBuffer(u, l) }
                                            t._readyToAppend.unshift(r) } } } } } } } }, { key: "streams", get: function() {
                    return this._streams } }, { key: "activeStreamIndex", get: function() {
                    return this._activeStreamIndex } }, { key: "sourceBuffer", get: function() {
                    return this._sourceBuffer }, set: function(e) { this._sourceBuffer = e, this._attachEvents(), this.fire("sourcebufferattach") } }, { key: "finalSegmentStartTime", get: function() {
                    return this._finalSegmentStartTime } }, { key: "delayBufferEndUntilEndOfStream", get: function() {
                    return this._delayBufferEndUntilEndOfStream } }]), e }(),
        Jr = function() {
            function e(t) {
                var n = this,
                    i = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                $r(this, e), we(this), this._readyToAppend = [], this._initSegment = null, this._index = NaN, this._codec = i;
                var r = 0 === i.indexOf("audio"),
                    o = { includeWithSpeeds: !r };
                this._fetcher = new Yr(o).start(), ["downloadend", "downloadabort"].forEach(function(e) { n._fetcher.on(e, function(t) { n.fire(e, t) }) }), this._bufferData = new sr, this._segmentToId = {}, this._getInitSegmentPromise = new Ve(function(i, r) {
                    return e.isValidSegmentUrl(t) ? void n._fetcher.add({ url: t.url || t, byteRange: t.byteRange, id: null }, function(e) { n._initSegment = e, i(e) }) : (n._initSegment = t, void i(t)) }) }
            return Gr(e, null, [{ key: "isValidSegmentUrl", value: function(e) {
                    return "string" == typeof e || "string" == typeof e.url && "string" == typeof e.byteRange } }]), Gr(e, [{ key: "getIdForSegment", value: function(t) {
                    return e.isValidSegmentUrl(t) ? this._segmentToId[t] : this._bufferData.get(t).id } }, { key: "isFinal", value: function(e) {
                    return this._bufferData.get(e).final } }, { key: "addSegment", value: function(t, n, i) {
                    var r = this,
                        o = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    return new Ve(function(a, s) {
                        return e.isValidSegmentUrl(t) ? (r._segmentToId[t] = n || t, r.fire("queued", r.getIdForSegment(t)), void r._fetcher.add({ url: t.url || t, byteRange: t.byteRange, id: r.getIdForSegment(t) }, function(e) { r._bufferData.set(e, { id: n || t, final: i }), r._readyToAppend.push(e), r.fire("bufferqueueadd", r.getIdForSegment(t)), o || r.fire("segmentadd"), a() })) : (r._bufferData.set(t, { id: n, final: i }), r._readyToAppend.push(t), r.fire("bufferqueueadd", n), void a()) }) } }, { key: "clear", value: function() { this._readyToAppend = [] } }, { key: "abort", value: function() {
                    var e = this;
                    this._getInitSegmentPromise.then(function() { e._fetcher.abort() }) } }, { key: "getNextSegment", value: function() {
                    return 0 === this._readyToAppend.length ? null : this._readyToAppend.shift() } }, { key: "getInitSegment", value: function() {
                    return this._getInitSegmentPromise } }, { key: "codec", get: function() {
                    return this._codec }, set: function(e) { this._codec = e } }, { key: "index", get: function() {
                    return this._index }, set: function(e) { this._index = e } }, { key: "pendingFetches", get: function() {
                    return this._fetcher.pendingFetches } }]), e }(),
        Zr = function() {
            function e(t) { $r(this, e), this._video = t, this._running = !1, this._droppedFramesTimeout = null, this._droppedFrameData = {}, this._decodedFrameData = {}, this._droppedFrames = 0, this._decodedFrames = 0, this._streamIndex = "default", this.bound = { startCheckingDroppedFrames: this._startCheckingDroppedFrames.bind(this), stopCheckingDroppedFrames: this._stopCheckingDroppedFrames.bind(this) } }
            return Gr(e, [{ key: "start", value: function() {
                    return this._startCheckingDroppedFrames(), this } }, { key: "stop", value: function() {
                    return this._stopCheckingDroppedFrames(), this } }, { key: "destroy", value: function() { this._stopCheckingDroppedFrames(), this._removeEvents() } }, { key: "getDroppedFrameRate", value: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? "average" : arguments[2],
                        i = this._droppedFrameData[t];
                    if (!i) return 0;
                    if (i.length < e) return 0;
                    var r = i.slice(-e);
                    return "median" === n ? be(r) : _e(r) } }, { key: "getDroppedFrameTotal", value: function() {
                    return { dropped: this._getTotalDroppedFrames(), total: this._getTotalFrames() } } }, { key: "_attachEvents", value: function() { this._video.addEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.addEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.addEventListener("ended", this.bound.stopCheckingDroppedFrames) } }, { key: "_removeEvents", value: function() { this._video.removeEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.removeEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.removeEventListener("ended", this.bound.stopCheckingDroppedFrames) } }, { key: "_startCheckingDroppedFrames", value: function() { this._running = !0, this._checkDroppedFrames() } }, { key: "_stopCheckingDroppedFrames", value: function() { this._running = !1 } }, { key: "_checkDroppedFrames", value: function() {
                    var e = this;
                    if (this._running && null !== this._streamIndex) { clearTimeout(this._droppedFramesTimeout);
                        var t = this._getTotalDroppedFrames(),
                            n = t - this._droppedFrames;
                        this._droppedFrames = t;
                        var i = this._getTotalFrames(),
                            r = i - this._decodedFrames;
                        this._decodedFrames = i, this._droppedFrameData[this._streamIndex] || (this._droppedFrameData[this._streamIndex] = []), this._decodedFrameData[this._streamIndex] || (this._decodedFrameData[this._streamIndex] = []), this._droppedFrameData[this._streamIndex].length > 100 && this._droppedFrameData[this._streamIndex].shift(), this._decodedFrameData[this._streamIndex].length > 100 && this._decodedFrameData[this._streamIndex].shift(), this._droppedFrameData[this._streamIndex].push(n), this._decodedFrameData[this._streamIndex].push(r), this._droppedFramesTimeout = setTimeout(function() { e._checkDroppedFrames() }, 1e3) } } }, { key: "_getTotalDroppedFrames", value: function() {
                    return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().droppedVideoFrames : this._video.webkitDroppedFrameCount || 0 } }, { key: "_getTotalFrames", value: function() {
                    if ("function" == typeof this._video.getVideoPlaybackQuality) {
                        var e = this._video.getVideoPlaybackQuality();
                        return e.totalVideoFrames - e.droppedVideoFrames - e.corruptedVideoFrames }
                    return this._video.webkitDecodedFrameCount || 0 } }, { key: "streamIndex", get: function() {
                    return this._streamIndex }, set: function(e) { this._streamIndex = e } }]), e }(),
        eo = function() {
            function e(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                $r(this, e), this._video = t, this._options = n, we(this), this._options.duration && (this._options.duration = Math.ceil(100 * this._options.duration) / 100), this._bufferCount = 0, this._frameDropper = new Zr(t), this._mediaSource = new MediaSource, this._video.src = URL.createObjectURL(this._mediaSource), this._buffersForCodec = {}, this._readyPromiseResolve = null, this._attachEvents() }
            return Gr(e, [{ key: "switchTo", value: function(e) {
                    return 1 === this._bufferCount && this.video.switchTo(e) } }, { key: "getCurrentSpeed", value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = e.type,
                        n = void 0 === t ? "average" : t,
                        i = e.howMany,
                        r = void 0 === i ? 10 : i,
                        o = e.weights,
                        a = void 0 === o ? [] : o,
                        s = e.percentile,
                        c = void 0 === s ? null : s;
                    return "average" === n ? Yr.getAverageSpeed(r, a) : "median" === n ? Yr.getMedianSpeed(r) : Yr.getPercentileSpeed(r, c) } }, { key: "getResponseSpeeds", value: function() {
                    return Yr.getResponseSpeeds() } }, { key: "getDroppedFrameRate", value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? this.activeStreamIndex : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? "average" : arguments[2];
                    return this._frameDropper.getDroppedFrameRate(e, t, n) } }, { key: "getDroppedFrameTotal", value: function() {
                    return this._frameDropper.getDroppedFrameTotal() } }, { key: "clear", value: function() {
                    for (var e in this._buffersForCodec) this._buffersForCodec[e].clear() } }, { key: "removeBuffer", value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? this._video.duration : arguments[1];
                    if (e > t) return Ve.resolve();
                    var n = [];
                    for (var i in this._buffersForCodec) n.push(this._buffersForCodec[i].remove(e, t));
                    return Ve.all(n) } }, { key: "addStream", value: function(e, t) {
                    var n = this,
                        i = this._getCodecType(e);
                    this._buffersForCodec[i] || ! function() { n._bufferCount += 1;
                        var t = new Qr(n, i);
                        n._buffersForCodec[i] = t, n.readyPromise.then(function() {
                            var r = void 0;
                            try { r = n._mediaSource.addSourceBuffer(e) } catch (e) {
                                if (22 !== e.code) return void n.fire("srcnotsupported", e);
                                r = n._buffersForCodec[i] }
                            n._options.duration && (r.appendWindowEnd = n._options.duration), t.sourceBuffer = r }), ["appendbufferstart", "appendbufferend", "streamchange"].forEach(function(e) { t.on(e, function(t) { n.fire(e, t) }) }) }();
                    var r = new Jr(t, e);
                    return ["downloadend", "downloadabort", "queued", "bufferqueueadd"].forEach(function(e) { r.on(e, function(t) { n.fire(e, t) }) }), this._buffersForCodec[i].addStream(r), r } }, { key: "destroy", value: function() { this.clear(), this._removeEventListeners(), this._frameDropper.destroy(), this._video.src && URL.revokeObjectURL(this._video.src) } }, { key: "_attachEvents", value: function() {
                    var e = this;
                    this.bound = { handleSourceOpen: this._handleSourceOpen.bind(this), handleTimeUpdate: this._handleTimeUpdate.bind(this), handleEnded: this._handleEnded.bind(this) }, this.readyPromise = new Ve(function(t, n) { e._readyPromiseResolve = t, e._mediaSource.addEventListener("sourceopen", e.bound.handleSourceOpen) }) } }, { key: "_sourceBuffersAreUpdating", value: function() {
                    for (var e = 0; e < this._mediaSource.sourceBuffers.length; e++)
                        if (this._mediaSource.sourceBuffers[e].updating) return !0;
                    return !1 } }, { key: "_fireStreamHasEnded", value: function() {
                    var e = !0,
                        t = !1;
                    for (var n in this._buffersForCodec) {
                        var i = this._buffersForCodec[n];
                        i.delayBufferEndUntilEndOfStream && (t = !0), void 0 === i.finalSegmentStartTime && (e = !1) }
                    e && "open" === this._mediaSource.readyState && (this._sourceBuffersAreUpdating() || (this._mediaSource.endOfStream(), t && this.fire("endofstream"))) } }, { key: "_handleTimeUpdate", value: function() { this._fireStreamHasEnded() } }, { key: "_handleEnded", value: function() { this.fire("ended") } }, { key: "_handleSourceOpen", value: function() { this._options.duration && (this._mediaSource.duration = this._options.duration), this._addEventListeners(), this._readyPromiseResolve(), this._mediaSource.removeEventListener("sourceopen", this.bound.handleSourceOpen) } }, { key: "_addEventListeners", value: function() { this._video.addEventListener("timeupdate", this.bound.handleTimeUpdate), this._video.addEventListener("ended", this.bound.handleEnded) } }, { key: "_removeEventListeners", value: function() {
                    for (var e in this._buffersForCodec) this._buffersForCodec[e]._removeEventListeners();
                    this._video.removeEventListener("timeupdate", this.bound.handleTimeUpdate), this._video.removeEventListener("ended", this.bound.handleEnded) } }, { key: "_getCodecType", value: function(e) {
                    return 0 === e.indexOf("audio") ? "audio" : "video" } }, { key: "mediaSource", get: function() {
                    return this._mediaSource } }, { key: "streams", get: function() {
                    return 1 === this._bufferCount && this.video.streams } }, { key: "activeStreamIndex", get: function() {
                    return 1 === this._bufferCount && this.video.activeStreamIndex } }, { key: "video", get: function() {
                    return !!this._buffersForCodec.video && this._buffersForCodec.video } }, { key: "audio", get: function() {
                    return !!this._buffersForCodec.audio && this._buffersForCodec.audio } }]), e }(),
        to = function() {
            function e(t) { ur(this, e), this.scanner = t }
            return lr(e, null, [{ key: "displayName", get: function() {
                    return "Brain" } }]), lr(e, [{ key: "shouldPowerUp", value: function(e, t) {
                    return !1 } }, { key: "shouldPowerDown", value: function(e, t) {
                    return !1 } }, { key: "canPowerUp", value: function(e, t) {
                    return 1 !== e.length && t < e.length - 1 } }, { key: "canPowerDown", value: function(e, t) {
                    return 1 !== e.length && t > 0 } }, { key: "filterStreams", value: function(e) {
                    return e } }]), e }(),
        no = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ur(this, t);
                var i = pr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return i._options = n, i.finalSegmentLoaded = !1, i.blacklisted = [], i.whitelisted = [], i }
            return hr(t, e), lr(t, null, [{ key: "displayName", get: function() {
                    return "Skyfire" } }]), lr(t, [{ key: "shouldPowerUp", value: function(e, t, n) {
                    var i = .85;
                    n && this._options.startingBandwidthThreshold && (i = this._options.startingBandwidthThreshold);
                    var r = e.indexOf(t);
                    if (r === -1 && (r = 0), !this.canPowerUp(e, r)) return !1;
                    var o = this.getCurrentSpeed();
                    if (!o) return !1;
                    for (var a = r + 1, s = r; a < e.length;) o * i > e[a].bitrate + e[a].audioBitrate && (s = a), a += 1;
                    return s !== r && s } }, { key: "shouldPowerDown", value: function(e, t) {
                    var n = e.indexOf(t),
                        i = n === -1;
                    if (i) return e.length - 1;
                    if (!this.canPowerDown(e, n)) return !1;
                    var r = 10,
                        o = this.scanner.sorcerer.getDroppedFrameRate(r, n, "median"),
                        a = t.framerate,
                        s = this.getCurrentSpeed();
                    if (!s) return !1;
                    var c = o / a * 100;
                    if (c >= 75) return this.blacklist(n), n - 1;
                    for (var u = n, l = n; l > 0;) .9 * s < e[l].bitrate + e[l].audioBitrate && (u = l - 1), l -= 1;
                    return u !== n && u } }, { key: "isTimeInBuffer", value: function(e) {
                    var t = this.scanner._video;
                    return this._timesAreInRange(e, e, t.buffered) } }, { key: "getCurrentSpeed", value: function() {
                    var e = 3,
                        t = [1, 2, 5];
                    return this.scanner.sorcerer.getCurrentSpeed({ type: "average", howMany: e, weights: t }) } }, { key: "getDistanceFromBuffer", value: function(e) {
                    for (var t = e, n = this.scanner._video, i = 0; i < n.buffered.length; i++)
                        if (n.buffered.start(i) <= e && n.buffered.end(i) >= e) { t = n.buffered.end(i);
                            break }
                    return t - e } }, { key: "getTimeEstimateToLoad", value: function(e, t) {
                    if (null === t) return 3;
                    var n = t.segments[e],
                        i = n.end - n.start,
                        r = this.getCurrentSpeed(),
                        o = i * (t.bitrate + t.audioBitrate) / r;
                    return 1.3 * o } }, { key: "canPlayFromTimeInStream", value: function(e, t) {
                    if (!this.isTimeInBuffer(e)) return !1;
                    if (!t) return !1;
                    var n = this.getSegmentsToLoad();
                    if (0 === n.length) return !0;
                    var i = this.getDistanceFromBuffer(e);
                    return this.getTimeEstimateToLoad(n[0], t) < i } }, { key: "getSegmentsToLoad", value: function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video", n = arguments[2], i = this.scanner._video, r = this.scanner.currentTime, o = [], a = this._getSecondsToLoadAhead(r, i.duration, n), s = r + a, c = this.scanner.sorcerer[t].activeStreamIndex, u = this.scanner._streams[t][c], l = this.scanner.sorcerer[t].sourceBuffer.buffered, d = 0; d < u.segments.length; d++) {
                        var f = u.segments[d],
                            h = d === u.segments.length - 1;
                        if (!(f.end < r || f.start > s)) {
                            var p = r >= f.start && r < f.end,
                                v = this._isSegmentInBuffer(f, l, h);!e && v || e && v && p || (p ? o.push(d) : s >= f.start && o.push(d)) } }
                    return o } }, { key: "blacklist", value: function(e) { this.blacklisted[e] = 1 } }, { key: "lock", value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this.whitelisted = e } }, { key: "filterStreams", value: function(e) {
                    for (var t = this.scanner._video.clientWidth, n = this.scanner._video.clientHeight, i = [], r = void 0, o = !1, a = 0; a < e.length; a++)
                        if (r && r[0] === e[a].width && r[1] === e[a].height) i.push(e[a]);
                        else {
                            if (o) break;
                            if (!(this.blacklisted[a] && this.whitelisted.indexOf(a) === -1 || this.whitelisted.length && this.whitelisted.indexOf(a) === -1))
                                if (this.whitelisted.length) i.push(e[a]);
                                else {
                                    var s = this._getScaleFromDimensions(t, n, e[a].width, e[a].height),
                                        c = 1e3 / (window.devicePixelRatio || 1),
                                        u = n < c ? 1.75 : 1;
                                    s >= u && (o = !0), i.push(e[a]), r = [e[a].width, e[a].height] } }
                    return i } }, { key: "_getVisibleDimensions", value: function(e, t, n, i) {
                    var r = n / i,
                        o = e - t * r,
                        a = t - e / r,
                        s = e - o,
                        c = t - a;
                    return o > 0 && (c = t), a > 0 && (s = e), [s, c] } }, { key: "_getScaleFromDimensions", value: function(e, t, n, i) {
                    var r = this._getVisibleDimensions(e, t, n, i),
                        o = n * i,
                        a = window.devicePixelRatio || 1,
                        s = r[0] * r[1] * a * a;
                    return o / s } }, { key: "_getSecondsToLoadAhead", value: function(e, t, n) {
                    var i = 12e3,
                        r = n && n.bitrate > i;
                    return 1 === this.whitelisted.length ? r ? 30 : 90 : 18 } }, { key: "_round", value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
                    if (e = parseFloat(e), isNaN(e)) return 0;
                    var n = Math.pow(10, t);
                    return Math.round(e * n) / n } }, { key: "_timesAreInRange", value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    t = Math.min(t, this.scanner._video.duration);
                    for (var r = 0; r < n.length; r++) {
                        var o = this._round(n.start(r)) - i,
                            a = this._round(n.end(r)) + i;
                        if (o <= e && a >= t) return !0 }
                    return !1 } }, { key: "_hasSeparateStreams", value: function() {
                    return this.scanner._streams.video.length > 0 && this.scanner._streams.audio.length > 0 } }, { key: "_isSegmentInBuffer", value: function(e, t, n) {
                    var i = 1;
                    return this._hasSeparateStreams() && (i = .05), n && !this.finalSegmentLoaded ? (this.finalSegmentLoaded = !0, !1) : this._timesAreInRange(e.start, e.end, t, i) } }]), t }(to),
        io = 1,
        ro = 2,
        oo = 3,
        ao = 4,
        so = 1e4,
        co = 5,
        uo = "video",
        lo = "audio",
        fo = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ur(this, t);
                var i = pr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return i.reset(), n.mediaSourceScanner && (i._maxPreloadStreamIndex = n.mediaSourceScanner.maxPreloadStreamIndex), i }
            return hr(t, e), lr(t, null, [{ key: "displayName", get: function() {
                    return "MediaSourceScanner" } }, { key: "supported", get: function() {
                    return "undefined" != typeof MediaSource && "undefined" != typeof Set } }, { key: "supportedVideoTypes", get: function() {
                    return ["application/vnd.vimeo.dash+json"] } }]), lr(t, [{ key: "deactivate", value: function() { fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deactivate", this).call(this), this.reset(), this.sorcerer && this.sorcerer.destroy() } }, {
                key: "reset",
                value: function() {
                    this._waitingOnSet = new Set, this._streamsForSegment = {}, this._brain = new no(this, this._options.mediaSourceScanner || {}), this._ready = !1, this._startedPlaying = !1, this._manifest = null, this._streams = {}, this._streams[lo] = [], this._streams[uo] = [], this._audioStreams = [], this._onReady = null, this._baseUrl = null, this._lastTargetStreamId = null, this._timeToSeekTo = null, this._resolveSeek = null, this._resolveStartPreload = null, this._reloadingExistingVideo = !1, this._lastStreamIndex = null, this._checkSwitchUp = !1, this._clearBufferAtTime = !1, this._preloadStream = null, this._badPlaybackTimer = null, this._isBufferingTooLong = !1, this._ranIntoBuffer = !1, this._bufferCount = 0, this._restrictedStreamIndexes = [], this._switching = {};
                }
            }, { key: "preloadStream", value: function() {
                    var e = this;
                    return this._preloadStream ? this._preloadStream : (this._preloadStream = new Ve(function(t, n) {
                        var i = 1;
                        e._streams.audio.length && (i = 2);
                        var r = 0,
                            o = !1,
                            a = e.sorcerer.video.activeStreamIndex;
                        e._restrictedStreamIndexes.length && (a = e._streams[uo].indexOf(e._manifest.video[e._restrictedStreamIndexes[0]]));
                        var s = function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                t && (a = e.sorcerer.video.activeStreamIndex);
                                for (var n in e._streams)
                                    if (0 !== e._streams[n].length) {
                                        var i = a;
                                        n === lo && (i = e._getAudioIndexFromVideo(a));
                                        var s = e._getSegmentUrl(i, 0, n),
                                            c = e._isFinalSegment(i, 0),
                                            u = e.sorcerer[n].streams[i],
                                            l = { stream: i, segment: 0, type: n },
                                            d = !0,
                                            f = s;
                                        if (e._useRangeRequests()) {
                                            var h = e._getRangeForSegment(i, 0, n);
                                            f = { url: f, byteRange: h } } "audio" !== n || i !== o ? ("audio" === n && o === !1 && (o = i), u.addSegment(f, l, c, d)) : (r += 1, e._handleAppendBufferEnd(l)) } },
                            c = function n(o) {
                                if (r += 1, !(r < i) && 0 === o.segment) {
                                    if (0 === e._restrictedStreamIndexes.length) {
                                        var c = !0,
                                            u = e._getStreamIndexToLoad(c);
                                        if (u !== !1 && u > o.stream) return e.sorcerer.video.switchTo(u), e._streams.audio.length && e.sorcerer.audio.switchTo(e._getAudioIndexFromVideo(u)), r = 0, void s(!0) }
                                    var l = e._getCurrentStream(a),
                                        d = l.segments[0].end;
                                    e.currentTime > d && (e.sorcerer.clear(), e._waitingOnSet = new Set), e.sorcerer.video.switchTo(a), e._streams.audio.length && e.sorcerer.audio.switchTo(e._getAudioIndexFromVideo(a)), e.sorcerer.off("bufferqueueadd", n), e._ready = !0, t() } };
                        e.sorcerer.on("bufferqueueadd", c), s() }), this._preloadStream) } }, { key: "loadManifest", value: function(e) {
                    var t = this;
                    return new Ve(function(n, i) {
                        var r = new XMLHttpRequest;
                        r.open("GET", e, !0), r.onload = function() {
                            if (r.status >= 400) return t.reset(), void i("JSON manifest failed to load.");
                            try { n(JSON.parse(r.response)) } catch (e) { i() } }, r.onerror = function() { t.reset(), i("JSON manifest failed to load.") }, r.send() }) } }, { key: "setVideoSrc", value: function(e, t) {
                    var n = this,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (i && !t && this._onReady) {
                        if (("metadata" === this._preload || "none" === this._preload && !this._paused) && !this._ready) return void this._onReady.then(function() {
                            var t = n._paused;
                            n.setVideoSrc(e, t, !1) });
                        if ("auto" === this._preload) return void this._onReady.then(function() { n.setVideoSrc(e, !1, !1) }) }
                    if (t) { this.reset();
                        try { this._video.currentTime = 0 } catch (e) {} }
                    t || this._onReady || !this._paused || this.sorcerer || (t = !0);
                    var r = "_initializeManifest";
                    t && (this._video.preload = "", r = "_initialize");
                    var o = e.split("/");
                    o.pop(), this._baseUrl = o.join("/") + "/", this._reloadingExistingVideo = !t, this._onReady = this._startPreload(e, this._preload).then(this.loadManifest.bind(this)).then(this[r].bind(this)), t && "auto" === this._preload && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this), !1)), this._onReady = this._addCatchToPromise(this._onReady) } }, { key: "updateReadyState", value: function() {} }, { key: "lockStreamIndexes", value: function() {
                    var e = this,
                        t = this._restrictedStreamIndexes.map(function(t) {
                            return e._streams[uo].indexOf(e._manifest.video[t]) });
                    if (this._video.paused || (this._ignorePauseEvent = !0, this._video.pause()), this._switching[uo] = !1, this._brain.lock(t), this._startedPlaying || "auto" === this._preload) {
                        var n = 7,
                            i = Math.max(this.currentTime - n, 0),
                            r = Math.min(this.currentTime + n, this._video.duration);
                        this.sorcerer.removeBuffer(i, r).then(function() {
                            return e._startedPlaying || "auto" !== e._preload ? (e.seekToTime(e.currentTime), void(!e._paused && e._video.paused && (e._ignorePlayEvent = !0, e.play()))) : void e._loadSegments() }) } } }, { key: "seekToTime", value: function(e) {
                    var t = this,
                        n = null === this._timeToSeekTo;
                    if (n || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, this._ready)
                        for (var i in this._streams)
                            if (this._streams[i].length > 0) {
                                var r = this.sorcerer[i].activeStreamIndex,
                                    o = this.sorcerer[i].streams[r];
                                o.abort() }
                    return this._loadSegments(), this._paused && 0 === e && this.fire("seeking"), this.readyState = io, this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), !n && this._waitingOnPlay && this.play(), this._onReady.then(function() {
                        return t._seekInProgressPromise }).catch(function(e) {}) } }, { key: "takeSnapshot", value: function() {} }, { key: "onstalled", value: function() {
                    return !1 } }, { key: "onseeked", value: function(e) { this._loadSegments(), fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onseeked", this).call(this, e) } }, { key: "onended", value: function(e) { fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onended", this).call(this, e);
                    var n = 6;
                    this.sorcerer.removeBuffer(n) } }, { key: "onseeking", value: function(e) {
                    var t = this;
                    clearTimeout(this._seekTimeout), this._seekTimeout = setTimeout(function() { t._loadSegments() }, 100) } }, { key: "onloadeddata", value: function() {
                    var e = this;
                    ve(function() { e.readyState = ao }) } }, { key: "ontimeupdate", value: function(e) {
                    if (0 === this.currentTime) return !1;
                    if (this._timeToSeekTo) return !1;
                    if (this._startedPlaying || (this._startedPlaying = !0), this._clearBufferAtTime && this.currentTime >= this._clearBufferAtTime) {
                        var t = 2;
                        this.sorcerer.removeBuffer(0, this._clearBufferAtTime - t), this._clearBufferAtTime = !1 }
                    this._loadSegments();
                    var n = this.sorcerer.getDroppedFrameTotal();
                    this.fire("droppedframes", n);
                    var i = this.sorcerer.getResponseSpeeds(),
                        r = this._streams[uo][this.sorcerer.video.activeStreamIndex],
                        o = { speed: this._brain.getCurrentSpeed(), bitrate: r.bitrate, speeds: i };
                    this.fire("bandwidth", o);
                    var a = this._video.buffered.length;
                    if (!a) return !0;
                    var s = this._video.buffered.end(a - 1);
                    if (Math.ceil(s) === Math.ceil(this._video.duration)) return !0;
                    var c = .2;
                    return Math.abs(this.currentTime - s) < c ? !this._ranIntoBuffer && (this._bufferCount += 1, this.fire("streambufferstart", { hasLowerStreamIndex: this.sorcerer[uo].activeStreamIndex > 0 }), this._ranIntoBuffer = !0, this._startBadPlaybackTimer(), this.readyState = ro, !1) : void 0 } }, { key: "onprogress", value: function() { this._brain.canPlayFromTimeInStream(this.currentTime, this._getCurrentStream()) && (clearTimeout(this._badPlaybackTimer), this.readyState < oo && (this.readyState = ao), this._ranIntoBuffer && (this.fire("streambufferend"), this._ranIntoBuffer = !1)) } }, { key: "onplay", value: function() {
                    return "picture-in-picture" === this.presentationMode && (this._paused = !1, !0) } }, { key: "onpause", value: function() {
                    return "picture-in-picture" === this.presentationMode && (this._paused = !0, !0) } }, { key: "onwaiting", value: function(e) {
                    return !1 } }, { key: "pause", value: function() {
                    var e = this;
                    ve(function() { e.fire("pause") }), fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", this).call(this) } }, { key: "play", value: function() {
                    var e = this;
                    ve(function() { e.fire("play") }), this._waitingOnPlay = !0, this._paused = !1, xr.android && !this._ready && (this._waitingOnPlay = !1, this._video.play()), this._resolveStartPreload && this._resolveStartPreload(), this._reloadingExistingVideo || this._ready || "auto" === this._preload || (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), this._ready || this._startBadPlaybackTimer();
                    var t = this._seekInProgressPromise || Ve.resolve();
                    return this._onReady.then(function() {
                        return t }).then(function() { e._waitingOnPlay = !1, e._paused || e._video.play() }) } }, { key: "_getAudioIndexFromVideo", value: function(e) {
                    return 0 !== this._streams.audio.length && (this._streams.audio.length > 1 && this._streams.video[e].bitrate > 1e6 ? 1 : 0) } }, { key: "_addCallbackToPromise", value: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = e.then(t);
                    return n && (i = this._addCatchToPromise(i)), i } }, { key: "_addCatchToPromise", value: function(e) {
                    var t = this;
                    return e.catch(function(e) {
                        return t.fire("fileerror", { reason: e }), new Ve(function(e, t) {}) }) } }, { key: "_handleBufferForSeek", value: function() {
                    if (this._ready) {
                        var e = this._streams[uo][this.sorcerer.video.activeStreamIndex],
                            t = e.bitrate / 1e3,
                            n = 12e3;
                        t > n && this.sorcerer.removeBuffer() } } }, { key: "_startPreload", value: function(e, t) {
                    var n = this;
                    return new Ve(function(i, r) {
                        return "none" !== t || n._reloadingExistingVideo && !n._paused ? void i(e) : void(n._resolveStartPreload = function() { i(e), n._resolveStartPreload = null }) }) } }, { key: "_getSeekReadyPromiseForTime", value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._timeToSeekTo;
                    return new Ve(function(n, i) {
                        var r = !e._startedPlaying && 0 === t;
                        return r || e._brain.canPlayFromTimeInStream(t, e._getCurrentStream()) ? void n(t) : (e._handleBufferForSeek(), void(e._resolveSeek = n)) }).then(function(t) { e._timeToSeekTo = null, e._seekInProgressPromise = null, e.readyState = ao;
                        var n = new Ve(function(t, n) { e._lastSeekReject = n;
                            var i = function n() { t(e._video.currentTime), e._video.removeEventListener("seeked", n) };
                            e._video.addEventListener("seeked", i) });
                        return e._video.currentTime = t, n }) } }, { key: "_handlePreloadChanged", value: function(e, t) { "auto" !== e && "auto" === t && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), e !== t && "none" !== t && this._resolveStartPreload && this._resolveStartPreload() } }, { key: "_initializeManifest", value: function(e) {
                    var t = this;
                    return new Ve(function(n, i) { t._manifest = e, t._streams[uo] = t._sortStreams(e.video), e.audio && (t._streams[lo] = t._sortStreams(e.audio));
                        for (var r = 0; r < t._streams[uo].length; r++) {
                            var o = 0;
                            if (e.audio) {
                                var a = t._streams[lo][t._getAudioIndexFromVideo(r)];
                                a && (o = a.bitrate) }
                            t._streams[uo][r].audioBitrate = o }
                        n() }) } }, { key: "_setUpSorcerer", value: function(e, t) { this.sorcerer && this.sorcerer.destroy(), this.sorcerer = new eo(e, t) } }, { key: "_getDuration", value: function() {
                    var e = 0;
                    for (var t in this._streams) this._streams[t].length && (e = Math.max(e, this._streams[t][0].duration));
                    return e } }, { key: "_initialize", value: function(e) {
                    var t = this;
                    return new Ve(function(n, i) { t._initializeManifest(e).then(function() {
                            var i = t._brain.filterStreams(t._streams[uo]),
                                r = i.length - 1,
                                o = e.video[0];
                            if (t._restrictedStreamIndexes.length && (o = e.video[t._restrictedStreamIndexes[0]]), void 0 !== t._maxPreloadStreamIndex) {
                                var a = t._streams[uo].indexOf(e.video[t._maxPreloadStreamIndex]);
                                r <= a && (o = t._streams[uo][r]) }
                            t._setUpSorcerer(t._video, { duration: t._getDuration() }), t.sorcerer.on("srcnotsupported", function() { t.fire("scannererror", { reason: "this codec is not supported for mediasource playback" }) }), t.sorcerer.readyPromise.then(function() {
                                var e = t._streams[uo].indexOf(o),
                                    i = function(e) { t._streams[e].forEach(function(n, i) {
                                            var r = t._getSegmentUrl(i, "init", e);
                                            if (t._useRangeRequests() && t._streams[e][i].init_segment_range) {
                                                var o = t._getRangeForSegment(i, "init", e);
                                                r = { url: r, byteRange: o } }
                                            t.sorcerer.addStream(n.mime_type + '; codecs="' + t._streams[e][i].codecs + '"', r) }) };
                                for (var r in t._streams) i(r);
                                t.sorcerer.video.switchTo(e), t.sorcerer.on("queued", t._handleQueued.bind(t)), t.sorcerer.on("downloadabort", t._handleAborted.bind(t)), t.sorcerer.on("appendbufferend", t._handleAppendBufferEnd.bind(t)), t.sorcerer.on("downloadend", t._handleDownloadEnd.bind(t)), t.sorcerer.video.on("streamchange", function(e) { e > t._lastStreamIndex && t.currentTime > 0 && (t._checkSwitchUp = !0), t._lastStreamIndex = e;
                                    var n = t._manifest.video.indexOf(t._streams[uo][e]),
                                        i = { index: n, streams: t._manifest.video };
                                    t.fire("streamchange", i), t._startBadPlaybackTimer() }), t.sorcerer.on("droppedframes", function() {
                                    return t.fire("alert", "droppedframes") }), t.sorcerer.mediaSource.addEventListener("sourceended", function() { t.fire("progress") }), n() }) }) }) } }, { key: "_sortStreams", value: function(e) {
                    function t(e, t) {
                        var n = e.width * e.height * e.bitrate,
                            i = t.width * t.height * t.bitrate;
                        return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - i }
                    var n = e.slice(0);
                    return n.sort(t), n } }, { key: "_useRangeRequests", value: function() {
                    return !!this._manifest.video[0].segments[0].range } }, { key: "_getRangeForSegment", value: function(e, t, n) {
                    return "init" === t ? this._streams[n][e].init_segment_range : this._streams[n][e].segments[t].range } }, { key: "_getSegmentUrl", value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uo,
                        i = "init" === t;
                    if (i && !this._streams[n][e].init_segment_range && this._streams[n][e].init_segment.indexOf(".") === -1) {
                        var r = this._streams[n][e].init_segment;
                        return he(r) }
                    var o = this._baseUrl,
                        a = this._manifest.base_url && this._manifest.base_url.indexOf("//") !== -1;
                    return a && (o = this._manifest.base_url), this._manifest.base_url && !a && (o += this._manifest.base_url), this._streams[n][e].base_url && (o += this._streams[n][e].base_url), this._useRangeRequests() ? o : "init" === t ? o += this._streams[n][e].init_segment : (this._streams[n][e].segments[t].url && (o += this._streams[n][e].segments[t].url), o) } }, { key: "_key", value: function(e, t, n) {
                    return e + ":" + t + ":" + n } }, { key: "_isFinalSegment", value: function(e, t) {
                    return t === this._streams[uo][e].segments.length - 1 } }, { key: "_getCurrentlyLoadingStreamsForSegment", value: function(e, t) {
                    var n = [],
                        i = this._streamsForSegment[e];
                    if (!i) return n;
                    for (var r = 0; r < i.length; r++) this._waitingOnSet.has(this._key(i[r], e, t)) && n.push(i[r]);
                    return n } }, { key: "_getCurrentStream", value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uo;
                    return "undefined" != typeof this.sorcerer && (e = this.sorcerer[t].activeStreamIndex), this._streams[t][e] } }, { key: "_getStreamIndexToLoad", value: function(e) {
                    var t = this._streams[uo];
                    if (t = this._brain.filterStreams(t), 0 === t.length) return !1;
                    if (this._switching[uo]) return !1;
                    var n = t[t.length - 1];
                    if (n.id !== this._lastTargetStreamId) { this._lastTargetStreamId = n.id;
                        var i = this._streams[uo].indexOf(n),
                            r = { index: i, streams: this._streams[uo] };
                        this.fire("streamtargetchange", r) }
                    var o = this._getCurrentStream(),
                        a = this._brain.shouldPowerUp(t, o, e);
                    return this._checkForBadPlayback(), a === !1 && (a = this._brain.shouldPowerDown(t, o)), a === !1 ? a : this._streams[uo].indexOf(t[a]) } }, { key: "_startBadPlaybackTimer", value: function() {
                    var e = this;
                    clearTimeout(this._badPlaybackTimer), this._badPlaybackTimer = setTimeout(function() { e._isBufferingTooLong = !0, e._checkForBadPlayback() }, so) } }, { key: "_checkForBadPlayback", value: function() { this._isHavingBadPlaybackInCurrentQuality() && this.fire("alert", "streamstudder") } }, { key: "_isHavingBadPlaybackInCurrentQuality", value: function() {
                    return !!this._restrictedStreamIndexes.length && (!(!this._isBufferingTooLong && this._bufferCount < co) && (this._isBufferingTooLong, this._bufferCount >= co, this._isBufferingTooLong = !1, this._bufferCount = 0, !0)) } }, { key: "_loadSegmentsForType", value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uo,
                        n = this._getStreamIndexToLoad();
                    t === lo && (n === !1 && (n = this.sorcerer[uo].activeStreamIndex), n = this._getAudioIndexFromVideo(n), this.sorcerer[lo].activeStreamIndex === n && (n = !1));
                    var i = !1;
                    n !== !1 && (i = n > this.sorcerer[t].activeStreamIndex, this._switching[t] = !0, this.sorcerer[t].switchTo(n).then(function() { e._switching[t] = !1 }));
                    for (var r = this._brain.getSegmentsToLoad(i, t, this._getCurrentStream()), o = this.sorcerer[t].activeStreamIndex, a = 0; a < r.length; a++) {
                        var s = this._getSegmentUrl(o, r[a], t),
                            c = this._getCurrentlyLoadingStreamsForSegment(r[a], t);
                        if (!(c.length > 1 || 1 === c.length && o <= c[0])) {
                            var u = this._isFinalSegment(o, r[a], t),
                                l = { stream: o, segment: r[a], type: t },
                                d = this.sorcerer[t].streams[o],
                                f = s;
                            if (this._useRangeRequests()) {
                                var h = this._getRangeForSegment(o, r[a], t);
                                f = { url: f, byteRange: h } }
                            d.addSegment(f, l, u) } } } }, { key: "_loadSegments", value: function() {
                    var e = this;
                    return this._onReady.then(function() {
                        for (var t in e._streams) e._streams[t].length > 0 && e._loadSegmentsForType(t) }) } }, { key: "_handleQueued", value: function(e) { this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)), this._streamsForSegment[e.segment] || (this._streamsForSegment[e.segment] = []), this._streamsForSegment[e.segment].indexOf(e.stream) === -1 && this._streamsForSegment[e.segment].push(e.stream) } }, { key: "_clearWaitingOn", value: function(e) {
                    var t = this,
                        n = this._streamsForSegment[e.segment];
                    n.forEach(function(n) { t._waitingOnSet.delete(t._key(n, e.segment, e.type)) }) } }, { key: "_handleAborted", value: function(e) { this._clearWaitingOn(e) } }, { key: "_handleAppendBufferEnd", value: function(e) { this._checkSwitchUp && e.stream === this._lastStreamIndex && (this._checkSwitchUp = !1, this._clearBufferAtTime = this._streams[uo][e.stream].segments[e.segment].start), this._clearWaitingOn(e), null !== this._timeToSeekTo && this._resolveSeek && this._brain.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream()) && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null) } }, { key: "_handleDownloadEnd", value: function(e) {} }, { key: "preload", get: function() {
                    return this._preload }, set: function(e) { this._handlePreloadChanged(this._preload, e), this._preload = e } }, { key: "videoWidth", get: function() {
                    var e = this._getCurrentStream();
                    return e ? e.width : this._video.videoWidth } }, { key: "videoHeight", get: function() {
                    var e = this._getCurrentStream();
                    return e ? e.height : this._video.videoHeight } }, { key: "restrictedStreamIndexes", get: function() {
                    return this._restrictedStreamIndexes }, set: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this._restrictedStreamIndexes.join(",") !== t.join(",") && (this._restrictedStreamIndexes = t, this._onReady.then(function() {
                        return e.lockStreamIndexes() })) } }, { key: "currentTime", get: function() {
                    return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime }, set: function(e) { this.seekToTime(e) } }]), t
        }(zr),
        ho = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ur(this, t);
                var i = pr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                    r = document.createElement("canvas");
                return i._backingCanvas = r.getContext("2d"), i._resizeHandler = function() {
                    return i.onresize() }, i }
            return hr(t, e), lr(t, null, [{ key: "displayName", get: function() {
                    return "AsciiEffect" } }, { key: "supported", get: function() {
                    return !/iphone|ipod/i.test(navigator.userAgent) } }, { key: "supportedScanners", get: function() {
                    return [zr, fo] } }]), lr(t, [{ key: "activate", value: function() {
                    return window.addEventListener("resize", this._resizeHandler, !1), this._telecine.paused ? void this._renderFrame() : void this._startRendering() } }, { key: "deactivate", value: function() { this._stopRendering(), window.removeEventListener("resize", this._resizeHandler, !1), this._element.removeChild(this._output) } }, { key: "onplay", value: function() { this._startRendering() } }, { key: "onpause", value: function() { this._stopRendering() } }, { key: "onended", value: function() { this._stopRendering() } }, { key: "onseeked", value: function() { this._renderFrame() } }, { key: "onresize", value: function() {
                    var e = this._telecine._currentScanner._video,
                        t = this._getRenderProperties(e.clientWidth, e.clientHeight, this._telecine.videoWidth, this._telecine.videoHeight);
                    this._adjustRenderSize(this._output, t), this._telecine.paused && this._renderFrame() } }, { key: "_getRenderProperties", value: function(e, t, n, i) {
                    var r = me(e, t, n, i),
                        o = Math.max(Math.min(Math.floor(r.height / 10), 60), 10);
                    this._options.color && (o = Math.floor(o / 2));
                    var a = document.createElement("pre");
                    a.style.cssText = "position:absolute;left:-9001px;top:0;font-size:10px;margin:0;padding:0;line-height:1", a.innerHTML = "X", this._element.appendChild(a);
                    var s = t / o / a.clientHeight * 10 + "px";
                    a.style.fontSize = s;
                    for (var c = a.clientHeight, u = Math.ceil(r.height / c), l = r.height - u * c, d = parseFloat((l / u + c) / c), f = a.clientWidth, h = Math.ceil(r.width / f), p = [], v = 0; v < h; v++) p.push("X");
                    a.innerHTML = p.join("");
                    var m = r.width - a.clientWidth,
                        g = m / h + "px";
                    return this._element.removeChild(a), { fontSize: s, lineHeight: d, letterSpacing: g, horizontalResolution: h, verticalResolution: u, top: r.top } } }, { key: "_createOutputElement", value: function(e) {
                    var t = document.createElement("pre");
                    return t.style.cssText = "position:absolute;left:0;top:0;margin:0;padding:0;background:#000;width:100%;height:100%;text-align:center", t.style.color = this._options.color ? "#fff" : "#0f0", this._adjustRenderSize(t, e), this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"), t } }, { key: "_adjustRenderSize", value: function(e, t) {
                    var n = t.fontSize,
                        i = t.lineHeight,
                        r = t.letterSpacing,
                        o = t.horizontalResolution,
                        a = t.verticalResolution,
                        s = t.top;
                    this._backingCanvas.width = o, this._backingCanvas.height = a, this._renderWidth = o, this._renderHeight = a, e.style.fontSize = n, e.style.lineHeight = i, e.style.letterSpacing = r, e.style.paddingTop = s + "px" } }, { key: "_getFrame", value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this._backingCanvas.drawImage(e, 0, 0, this._renderWidth, this._renderHeight);
                    var n = null;
                    try { n = this._backingCanvas.getImageData(0, 0, this._renderWidth, this._renderHeight).data } catch (e) { this._stopRendering() }
                    for (var i = [], r = 0; r < this._renderHeight; r++) {
                        for (var o = 0; o < this._renderWidth; o++) {
                            var a = 4 * (r * this._renderWidth + o),
                                s = n[a],
                                c = n[a + 1],
                                u = n[a + 2],
                                l = 3 * s + 4 * c + u >>> 3;
                            if (t) {
                                var d = " CGO08@" [Math.floor(l / 256 * 7)];
                                if (" " === d || s >= 250 && c >= 250 && u >= 250) { i.push(d);
                                    continue }
                                i.push('<span style="color:rgb(' + s + "," + c + "," + u + ')">' + d + "</span>") } else {
                                var f = "  .,:;iltfLG@" [Math.floor(l / 256 * 13)];
                                i.push(f) } }
                        i.push("\n") }
                    return i.join("") } }, { key: "_requestRenderAnimationFrame", value: function() {
                    var e = this;
                    this._animationFrame && window.cancelAnimationFrame(this._animationFrame), this._content && (this._animationFrame = window.requestAnimationFrame(function() { e._output.innerHTML = e._content, e._content = null })) } }, { key: "_renderFrame", value: function() {
                    if (!this._output) {
                        var e = this._telecine._currentScanner._video,
                            t = this._getRenderProperties(e.clientWidth, e.clientHeight, this._telecine.videoWidth, this._telecine.videoHeight);
                        this._output = this._createOutputElement(t), this._element.appendChild(this._output) }
                    this._content = this._getFrame(this._telecine._currentScanner._video, this._options.color), this._requestRenderAnimationFrame() } }, { key: "_startRendering", value: function() {
                    var e = this;
                    this._interval && window.clearInterval(this._interval);
                    var t = Math.min(Math.max(this._options.fps, 15), 30);
                    this._interval = window.setInterval(function() { e._renderFrame() }, 1 / t) } }, { key: "_stopRendering", value: function() { this._interval && (window.clearInterval(this._interval), this._interval = null) } }]), t }(_r),
        po = function() {
            var e = "Shockwave Flash",
                t = "application/x-shockwave-flash",
                n = "ShockwaveFlash.ShockwaveFlash",
                i = window.navigator,
                r = 0,
                o = !1,
                a = null;
            if ("undefined" != typeof i.plugins && "object" === cr(i.plugins[e])) {
                if (a = i.plugins[e].description, a && ("undefined" == typeof i.mimeTypes || !i.mimeTypes[t] || i.mimeTypes[t].enabledPlugin)) { o = !0, a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    var s = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10),
                        c = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    r = parseFloat(s + "." + c) } } else if ("undefined" != typeof window.ActiveXObject) try {
                var u = new ActiveXObject(n);
                u && (a = u.GetVariable("$version"), a && (o = !0, a = a.split(" ")[1].split(","), r = parseFloat(parseInt(a[0], 10) + "." + parseInt(a[1], 10)))) } catch (e) {}
            return { installed: o, version: r } }(),
        vo = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (ur(this, t), !n.swfScanner || !n.swfScanner.swfUrl) throw new Error("The url to the swf is required to use the SWFScanner.");
                var i = pr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                    r = "flideo_" + de().replace(/-/g, "_");
                return window[r] = { onFlashEvent: function(e) {
                        return i.onEvent(e) } }, i._swf = i.createSwf(i._options.swfScanner.swfUrl, r + ".onFlashReady"), i._element.appendChild(i._swf), i._loaded = !1, i._volume = 1, i._muted = !1, i._loadedPromise = new Ve(function(e, t) { window[r].onFlashReady = function() { i._loaded = !0, i.attachVideoEvents(r + ".onFlashEvent"), e() }, setTimeout(t, 1e4) }), i }
            return hr(t, e), lr(t, null, [{ key: "displayName", get: function() {
                    return "SWFScanner" } }, { key: "supported", get: function() {
                    return po.installed && po.version >= 10.1 } }, { key: "supportedVideoTypes", get: function() {
                    return ["application/vnd.apple.mpegurl", "video/mp4", "video/x-flv"] } }]), lr(t, [{ key: "deactivate", value: function() { this._swf.parentElement.removeChild(this._swf) } }, { key: "play", value: function() {
                    var e = this;
                    this.onLoaded(function() {
                        return e._swf._play() }) } }, { key: "pause", value: function() {
                    var e = this;
                    this.onLoaded(function() {
                        return e._swf._pause() }) } }, { key: "attachVideoEvents", value: function(e) {
                    var t = this;
                    Pr.forEach(function(n) { t._swf.api_addEventListener(n, e) }) } }, { key: "createSwf", value: function(e, t) {
                    var n = document.createElement("object");
                    n.setAttribute("type", "application/x-shockwave-flash"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("data", e);
                    var i = { flashvars: "ready=" + t, movie: e, allowfullscreen: "true", allowscriptaccess: "always", bgcolor: "#000000", wmode: "opaque", quality: "high", scalemode: "noscale" };
                    for (var r in i) {
                        var o = document.createElement("param");
                        o.setAttribute("name", r), o.setAttribute("value", i[r]), n.appendChild(o) }
                    return n } }, { key: "onEvent", value: function(e) { this.fire(e.type, e) } }, { key: "onLoaded", value: function(e) { this._loadedPromise = this._loadedPromise.then(e) } }, { key: "buffered", get: function() {
                    if (!this._loaded) return fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "buffered", this);
                    var e = this._swf.getBuffered(),
                        n = e.start,
                        i = e.end;
                    return ge(n, i) } }, { key: "currentFile", get: function() {
                    return fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "currentFile", this) }, set: function(e) {
                    var n = this,
                        i = this._currentFile;
                    vr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "currentFile", e, this), this.onLoaded(function() {
                        var t = !n._swf.getPaused(),
                            r = n._swf.getCurrentTime();
                        n._swf.setSrc(e.src), n.fire("currentfilechange", e), i && (n._swf.setCurrentTime(r), t && n._swf._play()) }) } }, { key: "currentTime", get: function() {
                    return this._loaded ? this._swf.getCurrentTime() : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "currentTime", this) }, set: function(e) {
                    var t = this;
                    this.onLoaded(function() {
                        return t._swf.setCurrentTime(e) }) } }, { key: "duration", get: function() {
                    return this._loaded ? this._swf.getDuration() : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "duration", this) } }, { key: "ended", get: function() {
                    return this._loaded ? this._swf.getEnded() : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "ended", this) } }, { key: "loop", get: function() {
                    return this._loaded ? this._swf.getLoop() : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "loop", this) }, set: function(e) {
                    var t = this;
                    this.onLoaded(function() {
                        return t._swf.setLoop(e) }) } }, { key: "muted", get: function() {
                    return this._muted }, set: function(e) {
                    var t = this;
                    this._muted = e;
                    var n = e === !0 ? 0 : this._volume;
                    this.onLoaded(function() {
                        return t._swf.setVolume(n) }) } }, { key: "paused", get: function() {
                    return this._loaded ? this._swf.getPaused() : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "paused", this) } }, { key: "videoWidth", get: function() {
                    return this._loaded ? this._swf.getVideoWidth() : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "videoWidth", this) } }, { key: "videoHeight", get: function() {
                    return this._loaded ? this._swf.getVideoHeight() : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "videoHeight", this) } }, { key: "volume", get: function() {
                    return this._loaded ? this._swf.getVolume() : fr(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "volume", this) }, set: function(e) {
                    var t = this;
                    this._volume = e, this.onLoaded(function() {
                        return t._swf.setVolume(e) }) } }]), t }(Er),
        mo = new sr,
        go = new sr,
        TelecineFile = function() {
            function TelecineFile(e, t) {
                var n = e.src,
                    i = e.mime,
                    r = e.id,
                    o = void 0 === r ? de() : r,
                    a = e.priority,
                    s = void 0 === a ? 0 : a,
                    c = e.metadata,
                    u = void 0 === c ? {} : c;
                if (ur(this, TelecineFile), !n) throw new TypeError("Must provide a src for the file.");
                if (!i) throw new TypeError("Must provide a mime type for the file.");
                Object.defineProperties(this, { mime: { value: i, enumerable: !0 }, id: { value: "" + o, enumerable: !0 }, metadata: { value: u, enumerable: !0 } }), this.video = t, this.priority = s, this.src = n }
            return lr(TelecineFile, [{ key: "priority", get: function() {
                    return mo.get(this) }, set: function(e) {
                    if (e = parseInt(e, 10), "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0) return void mo.set(this, e);
                    throw new TypeError("The file priority must be an integer greater than or equal to 0.") } }, { key: "src", get: function() {
                    return go.get(this) }, set: function(e) { go.set(this, e), this.video.fire("filesrcupdate", this) } }, { key: "restrictedStreamIndexes", get: function() {
                    if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                    return this.video.currentScanner.restrictedStreamIndexes }, set: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (!Array.isArray(e)) throw new TypeError("Indexes must be an array.");
                    if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                    this.video.currentScanner.restrictedStreamIndexes = e } }]), TelecineFile }(),
        _o = ["disabled", "hidden", "showing"],
        yo = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
        bo = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
        wo = new sr,
        ko = new sr,
        TelecineTextTrack = function() {
            function TelecineTextTrack(e, t) {
                var n = e.kind,
                    i = e.src,
                    r = void 0 === i ? null : i,
                    o = e.label,
                    a = void 0 === o ? "" : o,
                    s = e.language,
                    c = void 0 === s ? "" : s,
                    u = e.id,
                    l = void 0 === u ? de() : u;
                if (ur(this, TelecineTextTrack), yo.indexOf(n) === -1) throw oe(12, "SYNTAX_ERR", "Syntax Error");
                re(this), Object.defineProperties(this, { kind: { value: n, enumerable: !0 }, label: { value: a, enumerable: !0 }, language: { value: c, enumerable: !0 }, id: { value: "" + l, enumerable: !0 }, rtl: { value: bo.indexOf(c.substr(0, 2)) !== -1, enumerable: !0 } }), this.video = t, this.src = r, this._modeHasBeenSet = !1, wo.set(this, "disabled") }
            return lr(TelecineTextTrack, [{ key: "dispatchEvent", value: function(e) { this.fire(e, { target: this }) } }, { key: "mode", get: function() {
                    return wo.get(this) }, set: function(e) {
                    if (_o.indexOf(e) > -1) {
                        if (this._modeHasBeenSet = !0, wo.get(this) === e) return;
                        wo.set(this, e), this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, e), this.dispatchEvent("modechange") } } }, { key: "src", get: function() {
                    return ko.get(this) }, set: function(e) { ko.set(this, e), this.video.fire("texttracksrcupdate", this) } }, { key: "cues", get: function() {
                    return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : [] } }, { key: "activeCues", get: function() {
                    return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : [] } }]), TelecineTextTrack }(),
        xo = function() {
            function e(t, n) { ur(this, e), this._cdms = t.cdms, this._lrToken = t.lr_token, this._userId = t.user, this._assetId = t.asset, this._useHls = n, this._licenseUrl = null, this._keySession = null, this._preferredKeySystem = null }
            return lr(e, [{ key: "init", value: function(e) {
                    var t = this;
                    return this._video = e._video, this._scanner = e, this._canHandleEME() ? (this._licenseRequestMetadata = this._getLicenseRequestHeader(), this._getKeySystems().then(function(e) {
                        if (e.forEach(function(e) { e.keySystem && (t._preferredKeySystem = e) }), !t._preferredKeySystem) return t._scanner.fire("emeunsupported"), !1;
                        var n = t._getCdmFromSystem(t._preferredKeySystem),
                            i = "encrypted";
                        return t._licenseUrl = n.license_url, t._useHls && (t._certificateUrl = n.certificate_url, i = "webkitneedkey"), t._video.addEventListener(i, function(e) {
                            return t._generateRequest(e) }), t._useHls ? (t._video.webkitSetMediaKeys(t._preferredKeySystem.keySystem), !0) : t._video.mediaKeys ? (t._keySession = t._video.mediaKeys.createSession(), t._keySession.addEventListener("message", function(e) {
                            return t._getLicense(e) }), !0) : (t._keySession = t._preferredKeySystem.keySystem.createSession(), t._keySession.addEventListener("message", function(e) {
                            return t._getLicense(e) }), t._video.setMediaKeys(t._preferredKeySystem.keySystem), !0) })) : (this._scanner.fire("emeunsupported"), !1) } }, { key: "destroy", value: function() { this._keySession.close() } }, { key: "_generateRequest", value: function(e) {
                    var t = this;
                    return "com.apple.fps.1_0" === this._preferredKeySystem.name ? (this._loadFairPlayCertificate().then(function(n) { t._contentId = "assetId=" + t._assetId;
                        var i = t._concatInitDataIdAndCertificate(e.initData, t._contentId, n);
                        t._keySession = t._preferredKeySystem.keySystem.createSession("video/mp4", i), t._keySession.addEventListener("webkitkeymessage", function(e) {
                            return t._getLicense(e) }, !1) }).catch(function(e) { t._scanner.fire(e.error, e.payload) }), !0) : !this._keySession.sessionId && !this._activeKeySession && (this._activeKeySession = this._keySession.generateRequest(e.initDataType, e.initData).catch(function() { t._scanner.fire("drmfailure") }), !0) } }, {
                key: "_getLicense",
                value: function(e) {
                    var t = this;
                    return new Ve(function(n, i) {
                        t._activeKeySession = null;
                        var r = new XMLHttpRequest;
                        r.keySession = e.target, r.responseType = "arraybuffer", r.open("POST", t._licenseUrl), r.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(t._licenseRequestMetadata)));
                        var o = e.message;
                        if ("com.microsoft.playready" === t._preferredKeySystem.name && ! function() {
                                var n = t._unpackPlayReadyRequest(e.message),
                                    i = n[0];
                                Object.keys(i).forEach(function(e) { r.setRequestHeader([e], i[e]) }), o = n[1]
                            }(), "com.apple.fps.1_0" === t._preferredKeySystem.name) {
                            var a = btoa(String.fromCharCode.apply(null, o));
                            a = encodeURIComponent(a), o = "spc=" + a + "&" + t._contentId, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded") }
                        r.onload = function() {
                            if (403 === r.status) {
                                var e = JSON.parse(r.getResponseHeader("x-dt-error-message"));
                                return void i({ error: "drmauthfailure", payload: { text: e.error, code: e.error_code } }) }
                            if (r.status >= 400) return void i({ error: "drmfailure" });
                            try { t._scanner.fire("drmauthsuccess");
                                var o = new Uint8Array(r.response),
                                    a = o.buffer; "com.apple.fps.1_0" === t._preferredKeySystem.name && (a = t._unpackFairPlayLicenseResponse(btoa(String.fromCharCode.apply(null, o)))), r.keySession.update(a), n() } catch (e) { i("Error updating key session: " + e) } }, r.onerror = i, r.send(o)
                    }).catch(function(e) { t._scanner.fire(e.error, e.payload) })
                }
            }, { key: "_canHandleEME", value: function() {
                    var e = !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys);
                    return e } }, { key: "_concatInitDataIdAndCertificate", value: function(e, t, n) { "string" == typeof t && (t = pe(t));
                    var i = 0,
                        r = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + n.byteLength),
                        o = new DataView(r),
                        a = new Uint8Array(r, i, e.byteLength);
                    a.set(e), i += e.byteLength, o.setUint32(i, t.byteLength, !0), i += 4;
                    var s = new Uint8Array(r, i, t.byteLength);
                    s.set(t), i += s.byteLength, o.setUint32(i, n.byteLength, !0), i += 4;
                    var c = new Uint8Array(r, i, n.byteLength);
                    return c.set(n), new Uint8Array(r, 0, r.byteLength) } }, { key: "_loadFairPlayCertificate", value: function() {
                    var e = this;
                    return new Ve(function(t, n) {
                        var i = new XMLHttpRequest;
                        i.responseType = "arraybuffer", i.open("GET", e._certificateUrl), i.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(e._licenseRequestMetadata))), i.onload = function() {
                            if (403 === i.status) {
                                var e = JSON.parse(i.getResponseHeader("x-dt-error-message"));
                                return void n({ error: "drmauthfailure", payload: { text: e.error, code: e.error_code } }) }
                            if (i.status >= 400) return void n({ error: "drmfailure" });
                            try { t(new Uint8Array(i.response)) } catch (e) { n(e) } }, i.onerror = n, i.send() }) } }, { key: "_getCdmFromSystem", value: function(e) {
                    var t = this,
                        n = null;
                    return Object.keys(this._cdms).forEach(function(i) { e.name === t._cdms[i].id && (n = t._cdms[i]) }), n } }, { key: "_unpackFairPlayLicenseResponse", value: function(e) {
                    var t = window.atob(e.trim());
                    return "<ckc>" === t.substr(0, 5) && "</ckc>" === t.substr(-6) && (t = t.slice(5, -6)), new Uint8Array(atob(t).split("").map(function(e) {
                        return e.charCodeAt(0) })) } }, { key: "_unpackPlayReadyRequest", value: function(e) {
                    for (var t = String.fromCharCode.apply(null, new Uint16Array(e)), n = (new DOMParser).parseFromString(t, "application/xml"), i = {}, r = n.getElementsByTagName("HttpHeader"), o = 0; o < r.length; ++o) {
                        var a = r[o].querySelector("name"),
                            s = r[o].querySelector("value");
                        i[a.textContent] = s.textContent }
                    var c = n.querySelector("Challenge");
                    return e = new Uint8Array(atob(c.textContent).split("").map(function(e) {
                        return e.charCodeAt(0) })), [i, e] } }, { key: "_getLicenseRequestHeader", value: function() {
                    var e = {},
                        t = window.screen.availWidth + "x" + window.screen.availHeight,
                        n = window.devicePixelRatio;
                    return e.merchant = "vimeo", e.sessionId = JSON.stringify({ ua: navigator.userAgent, token: this._lrToken, resolution: t, pixelRatio: n }), e.userId = this._userId, e } }, { key: "_getKeySystems", value: function() {
                    var e = this,
                        t = { persistentState: "required", sessionTypes: ["persistent-license"] },
                        n = Object.keys(this._cdms).map(function(n) {
                            var i = e._cdms[n].id,
                                r = { name: i, keySystem: null };
                            return r = e._useHls ? new Ve(function(e, t) {
                                var n = null;
                                try { n = new window.WebKitMediaKeys(i) } catch (t) { e(null) }
                                e(n) }).then(function(e) {
                                return { name: i, keySystem: e } }) : navigator.requestMediaKeySystemAccess(i, [t, {}]).then(function(e) {
                                return e.createMediaKeys() }).catch(function(e) {}).then(function(e) {
                                return { name: i, keySystem: e } }) });
                    return Ve.all(n) } }]), e
        }(),
        So = new sr,
        TelecineVideo = function() {
            function TelecineVideo(e) {
                var t = this,
                    n = e.files,
                    i = e.id,
                    r = void 0 === i ? de() : i,
                    o = e.title,
                    a = void 0 === o ? null : o,
                    s = e.subtitle,
                    c = void 0 === s ? null : s,
                    u = e.metadata,
                    l = void 0 === u ? {} : u,
                    d = e.textTracks,
                    f = void 0 === d ? ce() : d,
                    h = e.externalDisplayFiles,
                    p = void 0 === h ? {} : h;
                if (ur(this, TelecineVideo), !n || !Array.isArray(n)) throw new TypeError("Must provide files for the video.");
                re(this);
                var v = se(n.map(function(e) {
                        return e instanceof TelecineFile ? (e.video = t, e) : new TelecineFile(e, t) })),
                    m = ce(f.map(function(e) {
                        return e instanceof TelecineTextTrack ? (e.video = t, e) : new TelecineTextTrack(e, t) }));
                Object.keys(p).forEach(function(e) {!p[e] || p[e] instanceof TelecineFile || (p[e] = new TelecineFile(p[e], t)) }), Object.defineProperties(this, { id: { value: "" + r, enumerable: !0 }, title: { value: a, enumerable: !0 }, subtitle: { value: c, enumerable: !0 }, metadata: { value: l, enumerable: !0 }, files: { value: v, enumerable: !0 }, textTracks: { value: m, enumerable: !0 }, externalDisplayFiles: { value: p, enumerable: !0 } }), l.drm && (this._drmHandler = new xo(l.drm, l.useHls)) }
            return lr(TelecineVideo, [{ key: "deactivate", value: function() {
                    var e = this;
                    this._drmHandler && this._drmHandler.destroy(), this.textTracks.forEach(function(t) {
                        return e.currentScanner.removeTextTrack(t) }) } }, { key: "drmHandler", get: function() {
                    return this._drmHandler || null } }, { key: "currentFile", get: function() {
                    return this.currentScanner.currentFile }, set: function(e) { this.currentScanner.currentFile = e } }, { key: "currentScanner", get: function() {
                    return So.get(this) }, set: function(e) {
                    var t = this;
                    this.currentScanner && this.textTracks.forEach(function(e) {
                        return t.currentScanner.removeTextTrack(e) }), this.textTracks.forEach(function(t) {
                        return e.addTextTrack(t) }), So.set(this, e) } }]), TelecineVideo }(),
        To = function() {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                ur(this, e), this._element = t, this._scanners = n, this._options = i, this._video = null, this._textTracks = ce(), this._properties = {}, this._currentScanner = new Er, this._blacklistedScanners = [], this._activeEffects = [], re(this) }
            return lr(e, [{ key: "supportsEffect", value: function(e) {
                    var t = this;
                    return !!e.supported && e.supportedScanners.some(function(e) {
                        return t._getScannerName(t._currentScanner) === e.displayName }) } }, { key: "getEffectByName", value: function(e) {
                    var t = this,
                        n = null;
                    return this._activeEffects.forEach(function(i) { e === t._getEffectName(i) && (n = i) }), n } }, { key: "activateEffect", value: function(e, t) {
                    var n = new e(this, t);
                    return n.activate(), this._activeEffects.push(n), n } }, { key: "deactivateEffect", value: function(e) {
                    var t = this;
                    this._activeEffects.some(function(n, i) {
                        return n.constructor === e && (n.deactivate(), t._activeEffects.splice(i, 1), !0) }) } }, { key: "deactivateEffects", value: function() {
                    var e = this;
                    this._activeEffects.forEach(function(t) {
                        return e.deactivateEffect(t.constructor) }) } }, { key: "play", value: function() {
                    if (!this._video || this._video.files.length < 1) throw new TelecineError("NoFiles", "There are no files to play.");
                    return this._currentScanner.play(), this._properties.paused = !1, this } }, { key: "pause", value: function() {
                    if (!this._video || this._video.files.length < 1) throw new TelecineError("NoFiles", "There are no files to play.");
                    return this._currentScanner.pause(), this._properties.paused = !0, this } }, { key: "showExternalDisplayPicker", value: function(e) {
                    return this._currentScanner.showExternalDisplayPicker(e) } }, { key: "supportsPresentationMode", value: function(e) {
                    return this.supportedPresentationModes.indexOf(e) !== -1 } }, { key: "addCuePoint", value: function(e, t) {
                    return this._currentScanner.addCuePoint(e, t) } }, { key: "removeCuePoint", value: function(e) {
                    return this._currentScanner.removeCuePoint(e) } }, { key: "removeAllCuePoints", value: function() {
                    return this._currentScanner.removeAllCuePoints() } }, { key: "_findScanner", value: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.textTrackSupport, n = void 0 !== t && t, i = this._video.files.map(function(e) {
                            return e.mime }), r = this._scanners, o = r, a = Array.isArray(o), s = 0, o = a ? o : o[ar.iterator]();;) {
                        var c;
                        if (a) {
                            if (s >= o.length) break;
                            c = o[s++] } else {
                            if (s = o.next(), s.done) break;
                            c = s.value }
                        var u = c;
                        if (u.supported && (!n || u.supportsTextTracks) && this._blacklistedScanners.indexOf(this._getScannerName(u)) === -1) {
                            var l = u.supportedVideoTypes;
                            if (l.some(function(e) {
                                    return i.indexOf(e) !== -1 })) return u } }
                    return n ? (this.fire("error", new TelecineError("TextTracksNotSupported", "None of the scanners support text tracks in this browser.")), this._blacklistedScanners = [], this._findScanner()) : null } }, { key: "_initScanner", value: function(e, t) {
                    var n = this;
                    if (this._currentScanner.constructor === e) return void(this._currentScanner.video !== t && (t.currentScanner = this._currentScanner, this._currentScanner.video = t));
                    this._currentScanner.deactivate();
                    var i = new e(this._element, this._options);
                    Or.forEach(function(e) { i.on(e, function(t) {
                            return n._handleEvent(e, t, i) }) }), this._currentScanner = i, t.currentScanner = i, this._currentScanner.video = t, Object.keys(this._properties).forEach(function(e) {
                        return "paused" === e ? void(n._properties.paused === !1 && n._currentScanner.play()) : void(n._currentScanner[e] = n._properties[e]) }), this.fire("scannerchange", this._getScannerName(this._currentScanner)) } }, { key: "_updateScanner", value: function() {
                    if (null !== this._video) {
                        var e = this._findScanner({ textTrackSupport: this._video.textTracks.length > 0 });
                        return e ? void this._initScanner(e, this._video) : void this.fire("error", new TelecineError("FilesNotPlayable", "None of the files could be played in this browser.")) } } }, { key: "_changeFile", value: function() { this._options.tests.cdn_switch.data.cdn_switch ? this._currentScanner._switchToNextFile() : this._handleEvent("scannererror", { reason: "json manifest failed to load" }, this._currentScanner) } }, { key: "_handleEvent", value: function(e, t, n) {
                    if (n === this._currentScanner) {
                        switch (e) {
                            case "error":
                                return void(t instanceof TelecineError && this.fire("error", t));
                            case "scannererror":
                                this.fire("error", new TelecineError("ScannerError", "The current scanner can no longer be used because " + t.reason)), this._blacklistedScanners.push(this._getScannerName(this._currentScanner)), this._updateScanner([]);
                                break;
                            case "fileerror":
                                this.fire("error", new TelecineError("FileError", "The current file can no longer be used because " + t.reason)), this._changeFile();
                                break;
                            case "emeunsupported":
                                this.fire("error", new TelecineError("DRMFailure", { text: null, code: "emeunsupported" }));
                                break;
                            case "drmfailure":
                                this.fire("error", new TelecineError("DRMFailure", { text: null, code: null }));
                                break;
                            case "drmauthfailure":
                                this.fire("error", new TelecineError("DRMFailure", { text: t.text, code: t.code }));
                                break;
                            case "drmauthsuccess":
                                this.fire("drmauthsuccess");
                                break;
                            case "timeupdate":
                                this._properties.currentTime = this._currentScanner.currentTime;
                                break;
                            case "ended":
                                this._properties.paused = !0 }
                        this._activeEffects.forEach(function(t) { "function" == typeof t["on" + e] && t["on" + e]() }), this.fire(e, t) } } }, { key: "_getScannerName", value: function(e) {
                    return e instanceof Er ? e.constructor.displayName : e.prototype.constructor.displayName } }, { key: "_getEffectName", value: function(e) {
                    return e instanceof _r ? e.constructor.displayName : e.prototype.constructor.displayName } }, { key: "supportsSettingVolume", get: function() {
                    return this._scanners.some(function(e) {
                        return e.supported && e.supportsSettingVolume }) } }, { key: "supportsTextTracks", get: function() {
                    return this._scanners.some(function(e) {
                        return e.supported && e.supportsTextTracks }) } }, { key: "activeEffects", get: function() {
                    return this._activeEffects } }, { key: "buffered", get: function() {
                    return this._currentScanner.buffered } }, { key: "cuePoints", get: function() {
                    return this._currentScanner.cuePoints } }, { key: "currentFile", get: function() {
                    return this._currentScanner.currentFile }, set: function(e) {
                    if ("string" == typeof e && (e = this._files.filter(function(t) {
                            return t.id === e })[0]), !e) throw new TelecineError("FileNotValid", "The file is not valid.");
                    this._currentScanner.currentFile = e } }, { key: "currentScanner", get: function() {
                    return this._getScannerName(this._currentScanner) } }, { key: "currentTime", get: function() {
                    return this._currentScanner.currentTime }, set: function(e) { this._properties.currentTime = e, this._currentScanner.currentTime = e } }, { key: "duration", get: function() {
                    return this._currentScanner.duration } }, { key: "ended", get: function() {
                    return this._currentScanner.ended } }, { key: "externalDisplayAvailable", get: function() {
                    return this._currentScanner.externalDisplayAvailable } }, { key: "externalDisplayActive", get: function() {
                    return this._currentScanner.externalDisplayActive } }, { key: "loop", get: function() {
                    return this._currentScanner.loop }, set: function(e) { this._properties.loop = e, this._currentScanner.loop = e } }, { key: "muted", get: function() {
                    return this._currentScanner.muted }, set: function(e) { this._properties.muted = !!e, this._currentScanner.muted = !!e } }, { key: "paused", get: function() {
                    return this._currentScanner.paused } }, { key: "playbackRate", get: function() {
                    return this._currentScanner.playbackRate }, set: function(e) { this._properties.playbackRate = e, this._currentScanner.playbackRate = e } }, { key: "preload", get: function() {
                    return this._currentScanner.preload }, set: function(e) { this._properties.preload = e, this._currentScanner.preload = e } }, { key: "presentationMode", get: function() {
                    return this._currentScanner.presentationMode }, set: function(e) { this._currentScanner.presentationMode = e } }, { key: "supportedPresentationModes", get: function() {
                    return this._currentScanner.supportedPresentationModes } }, { key: "video", get: function() {
                    return this._video }, set: function(e) { this._video && this._video.deactivate(), this._blacklistedScanners = [], this._video = new TelecineVideo(e), this._updateScanner() } }, { key: "videoWidth", get: function() {
                    return this._currentScanner.videoWidth } }, { key: "videoHeight", get: function() {
                    return this._currentScanner.videoHeight } }, { key: "volume", get: function() {
                    return this._currentScanner.volume }, set: function(e) {
                    if (e < 0 || e > 1) throw new TelecineError("IndexSizeError", "Failed to set the 'volume' property: The volume provided (" + e + ") is outside of the range [0, 1].");
                    this._properties.volume = e, this._currentScanner.volume = e } }]), e }(),
        Eo = 300,
        Po = .35,
        Lo = 20,
        Co = 85,
        Oo = 60,
        Ao = 400,
        Io = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ur(this, t);
                var i = pr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return i._camera = null, i._scene = null, i._renderer = null, i._animationFrame = null, i._isUserInteracting = !1, i._onMouseDownMouseX = 0, i._onMouseDownMouseY = 0, i._coordinates = { lat: 0, long: 0 }, i._previousCoordinates = { lat: 0, long: 0 }, i._onMouseDownCoordinates = { lat: 0, long: 0 }, i._phi = 0, i._theta = 0, i._distance = Ao, i._video = i._telecine._currentScanner._video, i._gyroVector = { x: 0, y: 0 }, i._offset = { lat: 0, long: 0 }, i._writeSpeeds = { videoFps: i._options.fps, motionRenderSpeed: Oo }, i._maxTimeBetweenWrites = 1e3 / i._writeSpeeds.videoFps, i._motionTimeouts = [], i._movingAutomatically = !1, i._updateFromGyroscopePending = !1, i._keysPressed = { up: !1, down: !1, left: !1, right: !1 }, i }
            return hr(t, e), lr(t, null, [{ key: "displayName", get: function() {
                    return "ThreeSixtyEffect" } }, { key: "supported", get: function() {
                    return !0 } }, { key: "supportedScanners", get: function() {
                    return [zr, fo] } }]), lr(t, [{ key: "activate", value: function() {
                    var e = this;
                    new Ve(function(t, n) { window.THREE && t();
                        var i = document.createElement("script");
                        i.src = e._options.threeUrl, document.body.appendChild(i), i.onload = function() { t() } }).then(function() {
                        return e._initialize() }) } }, { key: "_initialize", value: function() { this._telecine.fire("360useraction", { type: "init" }), this._camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1100), this._camera.target = new THREE.Vector3(0, 0, 0), this._scene = new THREE.Scene;
                    var e = new THREE.SphereBufferGeometry(500, 120, 80);
                    e.scale(-1, 1, 1);
                    var t = new THREE.VideoTexture(this._video);
                    t.minFilter = THREE.LinearFilter, t.format = THREE.RGBFormat;
                    var n = new THREE.MeshBasicMaterial({ map: t }),
                        i = new THREE.Mesh(e, n);
                    this._scene.add(i), this._renderer = new THREE.WebGLRenderer, this._renderer.setPixelRatio(window.devicePixelRatio), this._output = document.createElement("div"), this._renderer.domElement.classList.add("telecine-three-renderer"), this._output.appendChild(this._renderer.domElement), this._element.appendChild(this._output);
                    var r = "#000";
                    this._options.transparentCanvasWrap && (r = "transparent"), this._output.style.cssText = "position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:" + r + ";width:100%;height:100%;text-align:center", this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"), this._startRendering() } }, { key: "deactivate", value: function() { this._element.removeChild(this._output), this._stopRendering() } }, { key: "showRenderer", value: function() { this._renderer.domElement.classList.add("telecine-three-renderer--show") } }, { key: "snapToCenter", value: function() {
                    var e = this;
                    this._motionTimeouts.forEach(function(e) {
                        return clearTimeout(e) });
                    for (var t = 50, n = this._coordinates.long >= 180 ? 360 : 0, i = 0, r = { long: (n - this._coordinates.long) / 11, lat: (i - this._coordinates.lat) / 11 }, o = function(n) { e._motionTimeouts.push(setTimeout(function() { 0 === n && (e._movingAutomatically = !0, e._options.isMobile || (e._maxTimeBetweenWrites = 1e3 / e._writeSpeeds.motionRenderSpeed)), n === t - 1 && (e._movingAutomatically = !1, e._options.isMobile || (e._maxTimeBetweenWrites = 1e3 / e._writeSpeeds.videoFps)), e._updateViewpoint(e._coordinates.lat + r.lat / Math.pow(1.1, n), e._coordinates.long + r.long / Math.pow(1.1, n)), e._offset.lat = THREE.Math.radToDeg(e._gyroVector.x) + e._coordinates.lat + r.lat, e._offset.long = THREE.Math.radToDeg(e._gyroVector.y) + e._coordinates.long + r.long }, n * e._maxTimeBetweenWrites)) }, a = 0; a < t; a++) o(a) } }, { key: "_updateViewpoint", value: function(e, t) { e %= 360, this._coordinates.lat = Math.max(-Co, Math.min(Co, e)), t %= 360, t = t >= 0 ? t : 360 + t, this._coordinates.long = t } }, { key: "makeContact", value: function(e) { this._isUserInteracting = !0, this._motionTimeouts.forEach(function(e) {
                        return clearTimeout(e) }), this._movingAutomatically = !1, this._contactPoint = { x: e.x, y: e.y }, this._onMouseDownCoordinates.long = this._coordinates.long, this._onMouseDownCoordinates.lat = this._coordinates.lat, this._motionStart = { long: this._coordinates.long, lat: this._coordinates.lat }, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed) } }, { key: "move", value: function(e) { this._previousCoordinates.long = this._coordinates.long, this._previousCoordinates.lat = this._coordinates.lat, this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
                    var t = .3 * (this._contactPoint.y - e.y) + this._motionStart.lat,
                        n = .3 * (this._contactPoint.x - e.x) + this._motionStart.long;
                    this._updateViewpoint(t, n) } }, { key: "moveDevice", value: function(e, t, n, i) {
                    if (!this._movingAutomatically) { this._updateFromGyroscopePending = !0;
                        var r = new THREE.Quaternion,
                            o = window.orientation || 0;
                        e = e ? THREE.Math.degToRad(e) : 0, t = t ? THREE.Math.degToRad(t) : 0, n = n ? THREE.Math.degToRad(n) : 0;
                        var a = o ? THREE.Math.degToRad(o) : 0,
                            s = new THREE.Vector3(0, 0, 1),
                            c = new THREE.Euler,
                            u = new THREE.Quaternion,
                            l = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
                        c.set(t, e, -n, "YXZ"), r.setFromEuler(c), r.multiply(l), r.multiply(u.setFromAxisAngle(s, -a)), this._gyroVector = (new THREE.Euler).setFromQuaternion(r, "YXZ"), this._updateViewpoint(-THREE.Math.radToDeg(this._gyroVector.x) + this._offset.lat, -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long) } } }, { key: "releaseContact", value: function(e) {
                    if (this._isUserInteracting = !1, this._motionStart && !e) {
                        var t = Math.hypot(this._coordinates.long - this._motionStart.long, this._coordinates.lat - this._motionStart.lat);
                        this._moveDueToMomentum(t) } } }, { key: "abandonMotion", value: function() { this._isUserInteracting = !1, this._motionStart = null } }, { key: "keyPress", value: function(e) { this._keysPressed[e] || (this._keysPressed[e] = !0) } }, { key: "keyUp", value: function(e) { this._keysPressed[e] = !1, this._moveDueToMomentum(1 / 0) } }, { key: "_moveFromKeyPress", value: function() {
                    var e = this;
                    this._previousCoordinates.long = this._coordinates.long, this._previousCoordinates.lat = this._coordinates.lat, Object.keys(this._keysPressed).forEach(function(t) {
                        if (e._keysPressed[t]) switch (t) {
                            case "up":
                                e._updateViewpoint(e._coordinates.lat - Po, e._coordinates.long);
                                break;
                            case "down":
                                e._updateViewpoint(e._coordinates.lat + Po, e._coordinates.long);
                                break;
                            case "left":
                                e._updateViewpoint(e._coordinates.lat, e._coordinates.long - Po);
                                break;
                            case "right":
                                e._updateViewpoint(e._coordinates.lat, e._coordinates.long + Po) } }) } }, { key: "_keyIsDown", value: function() {
                    var e = this;
                    return Object.keys(this._keysPressed).map(function(t) {
                        return e._keysPressed[t] }).some(function(e) {
                        return e }) } }, { key: "_moveDueToMomentum", value: function(e) {
                    var t = this;
                    e >= Lo && ! function() {
                        for (var e = { long: t._coordinates.long - t._previousCoordinates.long, lat: t._coordinates.lat - t._previousCoordinates.lat }, n = function(n) { t._motionTimeouts.push(setTimeout(function() { 1 === n && (t._movingAutomatically = !0), n === Eo - 1 && (t._movingAutomatically = !1, t._maxTimeBetweenWrites = 1e3 / t._writeSpeeds.videoFps);
                                    var i = 2 / Math.pow(n, 1.5);
                                    t._offset.lat = THREE.Math.radToDeg(t._gyroVector.x) + t._coordinates.lat + e.lat, t._offset.long = THREE.Math.radToDeg(t._gyroVector.y) + t._coordinates.long + e.long, t._updateViewpoint(t._coordinates.lat + e.lat * i, t._coordinates.long + e.long * i) }, n * t._maxTimeBetweenWrites)) }, i = 1; i < Eo; i++) n(i) }() } }, { key: "onplay", value: function() { this._startRendering() } }, { key: "onseeked", value: function() { this._update() } }, { key: "onresize", value: function() { this.adjustRenderSize(), this._isUserInteracting = !1 } }, { key: "_update", value: function() { this._phi = THREE.Math.degToRad(90 - this._coordinates.lat), this._theta = THREE.Math.degToRad(this._coordinates.long), this._camera.position.x = this._distance * Math.sin(this._phi) * Math.cos(this._theta), this._camera.position.y = this._distance * Math.cos(this._phi), this._camera.position.z = this._distance * Math.sin(this._phi) * Math.sin(this._theta), this._camera.lookAt(this._camera.target), this._renderer.render(this._scene, this._camera), this._telecine.fire("cameraupdate", { lon: this._coordinates.long, lat: this._coordinates.lat }) } }, { key: "adjustRenderSize", value: function() { this._camera.aspect = Math.max(1 / 3, Math.min(3, this._video.clientWidth / this._video.clientHeight)), this._distance = Math.min(Ao, this._options.dimensions.width / this._options.dimensions.height / this._camera.aspect * Ao);
                    var e = me(this._video.clientWidth, this._video.clientHeight, this._camera.aspect, 1);
                    this._camera.aspect = e.width / e.height, this._camera.updateProjectionMatrix(), this._renderer.setSize(e.width, e.height), this._output.style.paddingTop = e.top + "px" } }, { key: "_startRendering", value: function() {
                    var e = this;
                    this._interval && window.clearInterval(this._interval), this.adjustRenderSize(), this._interval = window.setInterval(function() { e._renderFrame(), e._keyIsDown() && e._moveFromKeyPress() }, this._maxTimeBetweenWrites / 1e3) } }, { key: "_stopRendering", value: function() { this._interval && (window.clearInterval(this._interval), this._interval = null), this._motionTimeouts && this._motionTimeouts.forEach(function(e) {
                        return clearTimeout(e) }) } }, { key: "_renderFrame", value: function() { this._requestRenderAnimationFrame() } }, { key: "_requestRenderAnimationFrame", value: function() {
                    var e = this;
                    this._animationFrame && window.cancelAnimationFrame(this._animationFrame);
                    var t = this._movingAutomatically || this._isUserInteracting || this._updateFromGyroscopePending || this._keyIsDown();
                    this._animationFrame = window.requestAnimationFrame(function() {
                        (!e._telecine._currentScanner.paused && !e._telecine._currentScanner._ranIntoBuffer || t) && (e._update(), e._updateFromGyroscopePending = !1) }) } }, { key: "currentCoordinates", get: function() {
                    return this._coordinates } }]), t }(_r),
        Mo = .05,
        Fo = { 16: "shift", 27: "esc", 32: "space", 37: "left", 38: "up", 39: "right", 40: "down" },
        qo = "Uh Oh!,D’Oh!,Aw fiddlesticks!,Jeepers!,Oh dear!,Ouch!,Zoinks!,Awww, snap!,Blast!,Curses!,ACK!,Aw shucks.,Major bummer.,Dag-nab-it!,Aargh!,Boo-hoo!,¡Ay caramba!".split(","),
        Ro = [".title a"],
        Bo = [".title a:hover"],
        Do = ["a", ".button-link", ".overlay-wrapper .footnote.share a:hover", ".title h1", ".title span.user", ".outro .video-section > div > h1 a:hover", ".outro .videos h1", ".outro .videos h2", ".menu li:hover", ".menu li.active"],
        No = ["a:hover", ".button-link:hover"],
        Ho = [".overlay-wrapper .close:hover .fill", ".overlay-wrapper .back:hover .fill", ".stats-debug-close:hover .fill", ".stats-debug-copy:hover"],
        jo = [".play-bar .on .fill", ".play-bar a:hover .fill", ".play-bar button:not(.toggle):hover .fill", ".tiny-bars .fill", ".sidedock .on .fill"],
        Vo = [".sidedock .on:hover .fill"],
        Uo = [".play-bar .on .stroke", ".sidedock .on .stroke"],
        zo = [".sidedock .on:hover .stroke"],
        Wo = [".sidedock button:hover", "&.touch-support .sidedock button:active", ".controls .play:hover", ".controls .play-bar .played", "&.no-playbar .play-bar button:not(.toggle):hover", ".controls.tiny .play-bar button:not(.toggle):hover", ".controls .volume div", ".overlay .buttons li", ".overlay .window-wrapper button", '.overlay .window-wrapper input[type="submit"]', '.overlay .window-wrapper a[role="button"]', ".overlay .embed-copy", ".overlay .email-capture-confirm .check-icon-wrapper", '.outro a[role="button"]', ".outro .videos li:hover img", ".outro .videos li a:focus img", ".outro .vod li", ".menu li.active:before"],
        $o = [".outro .videos li:hover img", ".outro .videos li a:focus img", ".menu li.active:before"],
        Go = [".overlay-wrapper .overlay .buttons li a", ".overlay-wrapper .overlay button.embed-copy", ".overlay-wrapper .footnote.share a:hover", ".overlay .window-wrapper button", '.overlay .window-wrapper input[type="submit"]', '.overlay .window-wrapper a[role="button"]', ".outro .vod-header a:hover", '.outro .vod-wrapper a[role="button"]', '.outro-wrapper .outro-inner a[role="button"]', ".sidedock button:hover", ".sidedock button:hover .vod-label", ".play:hover"],
        Xo = [".controls .play:hover .fill", ".sidedock button:hover .fill", ".play-bar a:hover .fill", ".play-bar button:not(.toggle):hover .fill", "&.no-playbar .play-bar button:not(.toggle):hover .fill", ".controls.tiny .play-bar button:not(.toggle):hover .fill", ".sidedock .on .fill", '.overlay .share-wrapper a[role="button"] .fill', ".overlay .email-capture-confirm .check-icon .fill", '.outro .vod-wrapper a[role="button"] .fill'],
        Ko = [".controls .play:hover .stroke", ".sidedock button:hover .stroke", ".sidedock .on .stroke"],
        Yo = ['.overlay-wrapper .overlay a[role="button"]', ".overlay-wrapper .overlay button.embed-copy", ".sidedock button:hover", ".play:hover", '.outro a[role="button"]'],
        Qo = [".controls .play:hover .fill", ".sidedock button:hover .fill", ".controls .play-bar .fullscreen.tiny:hover .fill"],
        Jo = [".sidedock button:hover .stroke"],
        Zo = [".menu li:active:before"],
        ea = ['.overlay .window-wrapper input[type="submit"]:active', ".overlay .embed-copy.zeroclipboard-is-active", '.overlay a[role="button"]:active', ".outro .vod-watch-button:active", ".sidedock button:active"];
    return window.BigScreen = ht, Ne
}();
