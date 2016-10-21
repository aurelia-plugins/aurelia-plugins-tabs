'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaPluginsTabs = require('./aurelia-plugins-tabs');

Object.keys(_aureliaPluginsTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaPluginsTabs[key];
    }
  });
});