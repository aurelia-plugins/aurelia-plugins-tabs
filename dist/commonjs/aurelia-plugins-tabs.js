'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
function configure(aurelia) {
  aurelia.globalResources('./aurelia-plugins-tabs-tabs', './aurelia-plugins-tabs-tab-content', './aurelia-plugins-tabs-tab-pane');
}