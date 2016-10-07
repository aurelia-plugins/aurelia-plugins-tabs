define(['exports', './aurelia-nav-tabs'], function (exports, _aureliaNavTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaNavTabs).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaNavTabs[key];
      }
    });
  });
});