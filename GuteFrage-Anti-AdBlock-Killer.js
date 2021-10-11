// ==UserScript==
// @name         GuteFrage Anti-AdBlock-Killer

// @description  Removes the annoying adblock-reminder on German site "Gutefrage.net".
// @description:de Entfernt das nervige Adblock-Banner auf GuteFrage.net.

// @version      0.1
// @author       Rsge
// @copyright    2021+, Jan G. (Rsge)
// @license      Mozilla Public License 2.0
// @icon         https://www.gutefrage.net/nmms-assets/images/immutable/logos/fb_gutefrage.png

// @namespace    https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer
// @homepageURL  https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer
// @supportURL   https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer/issues


// @include      https://www.gutefrage.net/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var node
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            node = mutation.addedNodes[0];
            //console.log(node);
            if (mutation.addedNodes[0] != null && node.id == "wl-container") {
                node.remove();
                console.log(`
         ▄              ▄
        ▌▒█           ▄▀▒▌
        ▌▒▒▀▄       ▄▀▒▒▒▐
       ▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
     ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
   ▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██▀▒▌      such adblock
  ▐▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▌
  ▌▒▒▐▄█▀▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
 ▐▒▒▒▒▒▒▒▒▒▒▒▌██▀▒▒▒▒▒▒▒▒▀▄▌
 ▌▒▀▄██▄▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌   much freedom
 ▌▀▐▄█▄█▌▄▒▀▒▒▒▒▒▒░░░░░░▒▒▒▐
▐▒▀▐▀▐▀▒▒▄▄▒▄▒▒▒▒▒░░░░░░▒▒▒▒▌
▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒░░░░░░▒▒▒▐
 ▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌             wow
 ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
  ▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▌
    ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀
   ▐▀▒▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀
  ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀    https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer`)
            }
        });
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
