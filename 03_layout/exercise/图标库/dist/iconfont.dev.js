"use strict";

!function (e) {
  var t,
      _n,
      o,
      i,
      c,
      d = '<svg><symbol id="icon-zuobiao" viewBox="0 0 1024 1024"><path d="M511.913993 607.897867c-105.960692 0-191.967747-86.179069-191.967747-191.967747s86.179069-191.967747 191.967747-191.967747 191.967747 86.179069 191.967747 191.967747S617.874685 607.897867 511.913993 607.897867zM511.913993 287.951621c-70.525785 0-127.978498 57.452713-127.978498 127.978498s57.452713 127.978498 127.978498 127.978498 127.978498-57.452713 127.978498-127.978498S582.611792 287.951621 511.913993 287.951621z"  ></path><path d="M511.913993 960.010751c-7.912649 0-15.825298-2.92424-22.017806-8.77272-12.729044-12.213002-13.245087-32.510667-1.032085-45.239711 86.523098-90.651436 311.173526-355.553166 311.173526-489.896187 0-158.769024-129.182597-287.951621-287.951621-287.951621-158.769024 0-287.951621 129.182597-287.951621 287.951621 0 75.686209 72.589955 206.072904 204.180749 367.42214 11.180917 13.761129 9.116748 33.88678-4.472367 45.067697-13.761129 11.180917-33.88678 9.116748-45.067697-4.472367C233.595162 646.084999 159.973123 508.989753 159.973123 415.930119 159.973123 221.898203 317.882076 63.989249 511.913993 63.989249S864.026877 221.898203 864.026877 415.930119c0 187.323366-315.473879 519.998656-328.890979 534.103813C528.771376 956.570469 520.514698 960.010751 511.913993 960.010751z"  ></path></symbol></svg>',
      a = (a = document.getElementsByTagName("script"))[a.length - 1].getAttribute("data-injectcss"),
      s = function s(e, t) {
    t.parentNode.insertBefore(e, t);
  };

  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }

  function l() {
    c || (c = !0, o());
  }

  function r() {
    try {
      i.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }

    l();
  }

  t = function t() {
    var e,
        t = document.createElement("div");
    t.innerHTML = d, d = null, (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", t = t, (e = document.body).firstChild ? s(t, e.firstChild) : e.appendChild(t));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (_n = function n() {
    document.removeEventListener("DOMContentLoaded", _n, !1), t();
  }, document.addEventListener("DOMContentLoaded", _n, !1)) : document.attachEvent && (o = t, i = e.document, c = !1, r(), i.onreadystatechange = function () {
    "complete" == i.readyState && (i.onreadystatechange = null, l());
  });
}(window);