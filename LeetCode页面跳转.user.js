// ==UserScript==
// @name         LeetCode页面跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*.leetcode.com/*
// @match        https://*.leetcode.com/*
// @grant        none
// ==/UserScript==

(function() {
    var currentURL = window.location.href; // 获取当前网页地址
    currentURL=currentURL.replace('leetcode','leetcode-cn');
    window.location.href = currentURL;
})();