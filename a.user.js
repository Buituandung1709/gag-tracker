// ==UserScript==
// @name        New script
// @namespace   Violentmonkey Scripts
// @match       *://wplace.live/*
// @grant       none
// @version     1.0.1
// @author      -
// @description None
// ==/UserScript==

fetch('https://raw.githubusercontent.com/gcampos04/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)