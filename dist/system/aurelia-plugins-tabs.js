System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.globalResources('./aurelia-plugins-tabs-tabs', './aurelia-plugins-tabs-tab-content', './aurelia-plugins-tabs-tab-pane');
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});