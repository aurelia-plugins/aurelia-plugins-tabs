System.register(['aurelia-templating'], function (_export, _context) {
  "use strict";

  var customElement;
  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }],
    execute: function () {
      var _dec, _class;

      let TabContent = (_dec = customElement('aup-tab-content'), _dec(_class = class TabContent {}) || _class);

      _export('TabContent', TabContent);
    }
  };
});