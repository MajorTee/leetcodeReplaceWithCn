// ==UserScript==
// @name         交大知网
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.cnki.net/*

// @grant        none
// ==/UserScript==

(function() {
    var currentURL = window.location.href; // 获取当前网页地址
    if (console.log(currentURL.indexOf("kns.cnki") != -1 )) {
        currentURL=currentURL.replace('kns.cnki.net','kns-cnki-net-s.era.lib.swjtu.edu.cn');
    } else {
        currentURL=currentURL.replace('cnki.net','www-cnki-net-s.era.lib.swjtu.edu.cn');
    }
    window.location.href = currentURL;
})();