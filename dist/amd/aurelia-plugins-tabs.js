define(['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.globalResources([_aureliaPal.PLATFORM.moduleName('./aurelia-plugins-tabs-tabs'), _aureliaPal.PLATFORM.moduleName('./aurelia-plugins-tabs-tab-content'), _aureliaPal.PLATFORM.moduleName('./aurelia-plugins-tabs-tab-pane')]);
  }
});