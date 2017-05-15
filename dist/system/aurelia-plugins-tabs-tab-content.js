'use strict';

System.register(['aurelia-templating'], function (_export, _context) {
  "use strict";

  var customElement, _dec, _class, TabContent;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }],
    execute: function () {
      _export('TabContent', TabContent = (_dec = customElement('aup-tab-content'), _dec(_class = function TabContent() {
        _classCallCheck(this, TabContent);
      }) || _class));

      _export('TabContent', TabContent);
    }
  };
});