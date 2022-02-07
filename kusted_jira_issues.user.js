// ==UserScript==
// @name         KustEd Jira issue beautification
// @namespace    https://kontent.ai/learn
// @version      3.1.0
// @description  Hides unused fields in the right Jira bar.
// @author       Tomas Nosek, Kentico
// @include      https://kentico.atlassian.net/browse/*
// @icon         https://raw.githubusercontent.com/KenticoDocs/tampermonkey-scripts/master/files/custedlogo_48.png
// @updateURL    https://github.com/KenticoDocs/tampermonkey-scripts/raw/master/kusted_jira_issues.user.js
// @downloadURL  https://github.com/KenticoDocs/tampermonkey-scripts/raw/master/kusted_jira_issues.user.js
// @resource     IMPORTED_CSS https://raw.githubusercontent.com/KenticoDocs/tampermonkey-scripts/master/files/kusted_jira_issues.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @commithandle Jira board&backlog
// ==/UserScript==

(function() {
    'use strict';

    const css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(css);
})();