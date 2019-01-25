// ==UserScript==
// @name         GoogleClassroomPlus
// @namespace    https://classroom.google.com/
// @version      0.1
// @description  Enchancements for Google Classroom
// @author       Shiv Trivedi
// @match        https://classroom.google.com/*
// @grant        none
// ==/UserScript==

'use strict';
window.onbeforeunload = function () {
    if (document.querySelector('#yDmH0d > div.v7wOcf.ZGnOx.u155de > div > div.ktcYN > div:nth-child(2) > div > div.QRiHXd.Pe5z7e > div.CG2qQ.TE4AFe > div > content > span').textContent == "Unsubmit") {
        return "You haven't submitted yet!";
    }
    return undefined;
}
