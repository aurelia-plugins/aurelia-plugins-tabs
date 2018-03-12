define(['exports', 'aurelia-dependency-injection', 'aurelia-event-aggregator', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaEventAggregator, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tabs = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var Tabs = exports.Tabs = (_dec = (0, _aureliaTemplating.customElement)('aup-tabs'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = (_class2 = function () {
    function Tabs(element, eventAggregator) {
      _classCallCheck(this, Tabs);

      _initDefineProp(this, 'class', _descriptor, this);

      _initDefineProp(this, 'tabs', _descriptor2, this);

      this._element = element;
      this._eventAggregator = eventAggregator;
    }

    Tabs.prototype.attached = function attached() {
      this._refreshActiveTab();
    };

    Tabs.prototype.tabsChanged = function tabsChanged() {
      this._refreshActiveTab();
    };

    Tabs.prototype.click = function click(event) {
      event.stopPropagation();
      var target = event.target;

      var active = this._element.querySelector('a.nav-link.active');
      if (!active || target === active) {
        return;
      }
      var targetId = target.getAttribute('href').substring(1);
      var targetTab = this.tabs.find(function (tab) {
        return tab.id === targetId;
      });
      if (targetTab.disabled) {
        return;
      }
      var targetHref = target.getAttribute('href');
      var activeHref = active.getAttribute('href');
      target.classList.add('active');
      active.classList.remove('active');
      document.querySelector(targetHref).classList.add('active');
      document.querySelector(activeHref).classList.remove('active');
      this._eventAggregator.publish('aurelia-plugins:tabs:tab-clicked:' + targetHref.replace('#', ''), event);
    };

    Tabs.prototype._refreshActiveTab = function _refreshActiveTab() {
      var active = this.tabs.find(function (tab) {
        return tab.active;
      });
      if (!active) {
        return;
      }
      document.querySelector('#' + active.id).classList.add('active');
    };

    return Tabs;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'class', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'nav-tabs';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});