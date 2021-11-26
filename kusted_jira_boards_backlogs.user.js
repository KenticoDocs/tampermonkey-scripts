// ==UserScript==
// @name         KustEd Jira board and backlog beautification
// @namespace    https://docs.kontent.ai/
// @version      3.0.1
// @description  Collapses the top bar for company-managed boards and backlogs
// @author       Tomas Nosek, Kentico
// @match        https://kentico.atlassian.net/jira/software/c/projects/
// @include      */boards/*
// @icon         https://raw.githubusercontent.com/KenticoDocs/tampermonkey-scripts/master/custedlogo_16.png
// @resource     IMPORTED_CSS https://raw.githubusercontent.com/KenticoDocs/tampermonkey-scripts/master/kusted_jira_boards_backlogs.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    const css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(css);
})();