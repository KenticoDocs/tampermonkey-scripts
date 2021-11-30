// ==UserScript==
// @name         Kontent app beautification
// @namespace    https://docs.kontent.ai/
// @version      3.0.2
// @description  Collapses large padding, hides guidelines when not editing, makes editable parts of the app more prominent, always shows all filters.
// @author       Tomas Nosek, Kentico
// @include      https://app.kontent.ai/*
// @icon         https://raw.githubusercontent.com/KenticoDocs/tampermonkey-scripts/master/custedlogo_48.png
// @updateURL    https://github.com/KenticoDocs/tampermonkey-scripts/raw/master/kusted_kontent_app_concise.user.js
// @resource     IMPORTED_CSS https://raw.githubusercontent.com/KenticoDocs/tampermonkey-scripts/master/files/kusted_kontent_app_concise.css
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @commithandle KK concise
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;

    const css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(css);

    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (!mutation.addedNodes) return
            
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                // Show all saved filters
                let node = mutation.addedNodes[i];
                if (node.innerText != null && node.innerText.toLowerCase().indexOf('show all filters') > -1)
                {
                    $(node).find('button:contains("Show all filters")').click();
                }
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true
        , subtree: true
    });

    function isContentInventory() {
        return window.location.href.indexOf("content-inventory/0") > -1;
    }
})();