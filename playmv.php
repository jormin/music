<?php
    include_once("./lib/init.php");
    $mvid = intval($_REQUEST['mvid']);
    $netease = new NeteaseMusicAPI();
    $mvinfo = json_decode($netease->mv($mvid),true);
    if($mvinfo['data']){
        $mv = $mvinfo['data'];
        $parr = array("1080","720","480","240");
        foreach ($parr as $key => $item) {
            if($mv['brs'][$item]){
                $mv['url'] = $mv['brs'][$item];
                break;
            }
        }
    }else{
        $mv = null;
    }
?>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <link rel="canonical" href="https://vimeo.com/26198635">
    <title><?php echo $mv['name'] ?></title> 
    <style>#player,.fallback,body,html,iframe{width:100%;height:100%;margin:0;padding:0;background-color:#000;overflow:hidden}.player.loading{opacity:0}</style>
    <!--[if IE]>
    <script>var cacheBuster="?"+Math.round(Math.random()*1e3+(new Date).getTime());</script>
    <![endif]-->
    <link rel="stylesheet" href="/res/vendor/vimeo/player.css">
    <style type="text/css">
        .sidedock{
            display: none;
        }
    </style>
</head>
<body>
    <div id="player" class="player js-player-fullscreen with-fullscreen with-sticky-custom-logo">
    </div>
    <script src="/res/js/jquery.min.js"></script>
    <script type="text/javascript">
    (function(e, a) {
    var t = {
        "view": 1,
        "request": {
            "files": {
                "hls": {
                    "separate_av": false,
                    "default_cdn": "level3",
                    "cdns": {
                        "level3": {
                            "url": "<?php echo $mv['url'];?>",
                            "origin": "level3"
                        }
                    },
                    "origin": "level3"
                },
                "progressive": [{
                    "profile": 113,
                    "width": 1280,
                    "mime": "video/mp4",
                    "fps": 25,
                    "url": "<?php echo $mv['url'];?>",
                    "cdn": "level3",
                    "quality": "720p",
                    "id": 58145923,
                    "origin": "level3",
                    "height": 720
                }, {
                    "profile": 107,
                    "width": 640,
                    "mime": "video/mp4",
                    "fps": 25,
                    "url": "<?php echo $mv['url'];?>",
                    "cdn": "level3",
                    "quality": "360p",
                    "id": 58145909,
                    "origin": "level3",
                    "height": 360
                }]
            },
            "lang": "zh_CN",
            "ga_account": "UA-76641-35",
            "ab_tests": {
                "cdn_switch": {
                    "data": {
                        "cdn_switch": false
                    },
                    "group": 0
                }
            },
            "referrer": "http://simplemodal.plasm.it/",
            "cookie_domain": ".vimeo.com",
            "timestamp": 1482025507,
            "expires": 3600,
            "mixpanel_token": "70d46977e96e9a6dc94d325018e1a7a5",
            "currency": "USD",
            "comscore_id": "14640914",
            "session": "9d271015bb207a4d1657d93b3b506eb77609928f1482025507",
            "cookie": {
                "scaling": 1,
                "volume": 1.0,
                "quality": null,
                "hd": 0,
                "captions": null
            },
            "build": {
                "player": "f6cdbc0a",
                "js": "2.45.1"
            },
            "urls": {
                "zeroclip_swf": "https://f.vimeocdn.com/p/external/zeroclipboard/ZeroClipboard.swf",
                "js": "/res/vendor/vimeo/player.js",
                "proxy": "https://player.vimeo.com/static/proxy.html",
                "flideo": "https://f.vimeocdn.com/p/flash/flideo/1.0.6/flideo.swf",
                "three_js": "https://f.vimeocdn.com/p/external/three.rvimeo.min.js",
                "moog": "https://f.vimeocdn.com/p/flash/moogaloop/6.4.4/moogaloop.swf?clip_id=26198635",
                "comscore_js": "https://f.vimeocdn.com/p/external/streamsense.4.1408.29.min.js",
                "blurr": "https://fresnel.vimeocdn.com/add/player-stats",
                "chromeless_css": "https://f.vimeocdn.com/p/2.45.1/css/chromeless.css",
                "vuid_js": "https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js",
                "chromeless_js": "https://f.vimeocdn.com/p/2.45.1/js/chromeless.js",
                "moog_js": "https://f.vimeocdn.com/p/2.45.1/js/moogaloop.js",
                "zeroclip_js": "https://f.vimeocdn.com/p/external/zeroclipboard/ZeroClipboard-patch.js",
                "css": "https://f.vimeocdn.com/p/2.45.1/css/player.css"
            },
            "signature": "2889ee7953a87ebe164c486e66d1c586",
            "flags": {
                "dnt": 0,
                "preload_video": "metadata_on_hover",
                "plays": 1,
                "mixpanel": 0,
                "webp": 1,
                "flash_hls": 0,
                "android_inline": 0,
                "partials": 0,
                "blurr": 1,
                "autohide_controls": 0
            },
            "country": "CN"
        },
        "player_url": "player.vimeo.com",
        "video": {
            "allow_hd": 1,
            "embed_code": "<iframe src=\"<?php echo $mv['url'];?>\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
            "default_to_hd": 0,
            "title": "The Wall - A Javascript plugin for Mootools",
            "url": "<?php echo $mv['url'];?>",
            "privacy": "anybody",
            "owner": {
                "account_type": "basic",
                "name": "<?php echo $mv['artistName'];?>",
                "img": "",
                "url": "javascript;;",
                "img_2x": "",
                "id": <?php echo $mv['artistId'];?>
            },
            "share_url": "javascript:;",
            "height": 720,
            "design_version_360": null,
            "width": 1280,
            "embed_permission": "public",
            "thumbs": {
                "1280": "<?php echo $mv['cover']; ?>",
                "960": "<?php echo $mv['cover']; ?>",
                "640": "<?php echo $mv['cover']; ?>",
                "base": "<?php echo $mv['cover']; ?>"
            },
            "fps": 25.0,
            "duration": 42,
            "is_panorama": 0,
            "id": 26198635,
            "hd": 1
        },
        "build": {
            "player": "f6cdbc0a",
            "rpc": "dev"
        },
        "embed": {
            "autopause": 1,
            "color": "824571",
            "on_site": 0,
            "outro": "promoted",
            "api": 3,
            "player_id": "",
            "quality": null,
            "settings": {
                "fullscreen": 1,
                "byline": 0,
                "like": 1,
                "playbar": 1,
                "title": 0,
                "color": 0,
                "branding": 1,
                "share": 1,
                "scaling": 1,
                "logo": 1,
                "collections": 0,
                "info_on_pause": 0,
                "watch_later": 1,
                "portrait": 0,
                "embed": 1,
                "badge": 0,
                "volume": 1
            },
            "context": "embed.main",
            "time": 0,
            "email": {
                "text": "",
                "confirmation": "",
                "time": -1
            },
            "loop": 0,
            "autoplay": 1
        },
        "vimeo_url": "vimeo.com",
        "user": {
            "liked": 0,
            "account_type": "basic",
            "progress": 0,
            "owner": 0,
            "watch_later": 0,
            "logged_in": 0,
            "id": 0,
            "mod": 0
        }
    };
    if (!t.request) {
        return
    }
    if (typeof t.request === "object" && "error" in t.request) {
        if ("html" in t.request) {
            e.documentElement.innerHTML = t.request.html.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        }
        return
    }
    var r = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return true
            }
        }();
    if (!r && /twitter/i.test(navigator.userAgent) && t.video.url) {
        window.location = t.video.url
    }
    if (t.request.lang) {
        e.documentElement.setAttribute("lang", t.request.lang)
    }
    var n = "exitFullscreen" in e || "webkitExitFullscreen" in e || "webkitCancelFullScreen" in e || "mozCancelFullScreen" in e || "msExitFullscreen" in e || "webkitEnterFullScreen" in e.createElement("video");
    var i = function() {
            var e = navigator;
            var a = "Shockwave Flash";
            var t = "application/x-shockwave-flash";
            var r = "ShockwaveFlash.ShockwaveFlash";
            if (typeof e.plugins !== "undefined" && typeof e.plugins[a] === "object") {
                if (e.plugins[a].description && !(typeof e.mimeTypes !== "undefined" && e.mimeTypes[t] && !e.mimeTypes[t].enabledPlugin)) {
                    return true
                }
            }
            try {
                if (window.ActiveXObject && new ActiveXObject(r)) {
                    return true
                }
            } catch (e) {}
            return false
        }();
    var o = function() {
            var a = e.createElement("video");
            return {
                h264: "canPlayType" in a && a.canPlayType("video/mp4") !== "",
                textTracks: typeof TextTrackList !== "undefined" && typeof a.textTracks !== "undefined" && a.textTracks instanceof TextTrackList
            }
        }();
    var s = function() {
            var a = e.createElement("div");
            a.innerHTML = "<svg/>";
            return (a.firstChild && a.firstChild.namespaceURI) === "http://www.w3.org/2000/svg"
        }();
    var l = /MSIE 9/.test(navigator.userAgent) && /Windows Phone/.test(navigator.userAgent);
    var c = /IE 10/.test(navigator.userAgent);
    window._gaq = [
        ["player._setAccount", 'UA-76641-35'],
        ["player._setDomainName", "player.vimeo.com"],
        ["player._set", "_anonymizeIp", true],
        ["player._trackPageview"]
    ];
    var u = n || c || l;
    var d = e.getElementsByTagName("script")[0];
    var m = e.createElement("script");
    var f = false;
    var p = false;
    if ("text_tracks" in t.request && (!o.textTracks || o.textTracks && !o.h264) && i) {
        u = false
    }
    if (!s) {
        u = false
    }
    var v = "vod" in t.video && t.video.vod.is_feature;
    if (v && i && ("files" in t.request && !t.request.files.dash)) {
        u = false
    }
    if (u) {
        a.className = "player loading";
        var g = (new Date).getTime();
        m.src = t.request.urls.js;
        d.parentNode.insertBefore(m, d);
        m["onreadystatechange" in m ? "onreadystatechange" : "onload"] = function() {
            if (!f && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                f = true;
                var e = (new Date).getTime() - g;
                window._gaq.push(["player._trackTiming", "Player", "JavaScript Load", e]);
                p = new VimeoPlayer(a, t, y || {
                    link: w,
                    startTime: g
                })
            }
        };
        var y = false;
        var w = e.createElement("link");
        w.rel = "stylesheet";
        w.href = t.request.urls.css + (typeof cacheBuster === "undefined" ? "" : cacheBuster);
        e.getElementsByTagName("head")[0].appendChild(w);
        w.onload = function() {
            y = true;
            var e = (new Date).getTime() - g;
            window._gaq.push(["player._trackTiming", "Player", "CSS Load", e])
        }
    } else if (i) {
        
        var h = false;
        var T = e.getElementById("flash-object");
        window.onMoogaloopLoaded = function() {
            h = true;
            if (!p && f) {
                a.className = "player";
                p = new VimeoPlayer(T, t)
            }
        };
        window.getConfig = function() {
            return t
        };
        window.setConfig = function(e) {
            t = e
        };
        m.src = t.request.urls.moog_js;
        d.parentNode.insertBefore(m, d);
        m["onreadystatechange" in m ? "onreadystatechange" : "onload"] = function() {
            if (!f && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                f = true;
                if (!p && h) {
                    p = new VimeoPlayer(T, t)
                }
            }
        }
    }
})(document, document.getElementById("player"));
</script>
</body>
</html>