'use strict';

System.register(['aurelia-templating'], function (_export, _context) {
  "use strict";

  var bindable, containerless, customElement, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, TabPane;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      containerless = _aureliaTemplating.containerless;
      customElement = _aureliaTemplating.customElement;
    }],
    execute: function () {
      _export('TabPane', TabPane = (_dec = containerless(), _dec2 = customElement('tab-pane'), _dec(_class = _dec2(_class = (_class2 = function TabPane() {
        

        _initDefineProp(this, 'model', _descriptor, this);

        _initDefineProp(this, 'tab', _descriptor2, this);

        _initDefineProp(this, 'viewModel', _descriptor3, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'tab', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'viewModel', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('TabPane', TabPane);
    }
  };
});