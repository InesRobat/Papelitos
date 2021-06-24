require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

// for footer
if(/Android [4-6]/.test(navigator.appVersion)) {
   window.addEventListener("resize", function() {
      if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
         window.setTimeout(function() {
            document.activeElement.scrollIntoViewIfNeeded();
         },0);
      }
   })
}