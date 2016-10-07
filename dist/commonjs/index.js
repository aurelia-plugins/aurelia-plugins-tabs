'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaNavTabs = require('./aurelia-nav-tabs');

Object.keys(_aureliaNavTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaNavTabs[key];
    }
  });
});