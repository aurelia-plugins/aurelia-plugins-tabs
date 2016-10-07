define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.globalResources('./aurelia-nav-tabs-tabs', './aurelia-nav-tabs-tab-content', './aurelia-nav-tabs-tab-pane');
  }
});