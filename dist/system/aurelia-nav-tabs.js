'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.globalResources('./aurelia-nav-tabs-tabs', './aurelia-nav-tabs-tab-content', './aurelia-nav-tabs-tab-pane');
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});