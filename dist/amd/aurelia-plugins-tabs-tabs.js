define(['exports', 'aurelia-dependency-injection', 'aurelia-event-aggregator', 'aurelia-templating', 'aurelia-binding'], function (exports, _aureliaDependencyInjection, _aureliaEventAggregator, _aureliaTemplating, _aureliaBinding) {
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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Tabs = exports.Tabs = (_dec = (0, _aureliaTemplating.customElement)('aup-tabs'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec3 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.toView }), _dec(_class = _dec2(_class = (_class2 = function () {
    function Tabs(element, eventAggregator) {
      _classCallCheck(this, Tabs);

      _initDefineProp(this, 'class', _descriptor, this);

      _initDefineProp(this, 'tabs', _descriptor2, this);

      _initDefineProp(this, 'translate', _descriptor3, this);

      _initDefineProp(this, 'activeTabId', _descriptor4, this);

      this._element = element;
      this._eventAggregator = eventAggregator;
    }

    Tabs.prototype.attached = function attached() {
      this._refresh();
    };

    Tabs.prototype.tabsChanged = function tabsChanged() {
      this._refresh();
    };

    Tabs.prototype.click = function click(tab, event) {
      var currentActiveId = void 0;
      var targetId = void 0;
      event.stopPropagation();
      if (tab.disabled) return;
      var target = event.target;
      var currentActiveTab = this._element.querySelector('a.nav-link.active');
      if (target === currentActiveTab) return;
      var targetHref = target.getAttribute('href');
      target.classList.add('active');
      document.querySelector(targetHref).classList.add('active');
      targetId = targetHref.replace('#', '');
      if (currentActiveTab) {
        var currentActiveHref = currentActiveTab.getAttribute('href');
        currentActiveId = currentActiveHref.replace('#', '');
        currentActiveTab.classList.remove('active');
        document.querySelector(currentActiveHref).classList.remove('active');
      }
      this._updateActiveStatusInBoundTabs(currentActiveId, targetId);
      this._eventAggregator.publish('aurelia-plugins:tabs:active-tab-changed', { from: currentActiveId, to: targetId });
      this._eventAggregator.publish('aurelia-plugins:tabs:tab-clicked:' + targetId, event);
    };

    Tabs.prototype._refresh = function _refresh() {
      var _this = this;

      var active = this.tabs.find(function (tab) {
        return tab.active;
      });
      if (!active) return;
      this.activeTabId = active.id;
      if (!this._addTabActiveClass(active.id)) {
        setTimeout(function () {
          _this._addTabActiveClass(active.id);
        }, 0);
      }
    };

    Tabs.prototype._addTabActiveClass = function _addTabActiveClass(tabId) {
      var element = document.querySelector('#' + tabId);
      if (element) {
        element.classList.add('active');
      }
      return !!element;
    };

    Tabs.prototype._updateActiveStatusInBoundTabs = function _updateActiveStatusInBoundTabs(activeId, targetId) {
      this._setTabActiveState(activeId, false);
      this._setTabActiveState(targetId, true);
    };

    Tabs.prototype._setTabActiveState = function _setTabActiveState(tabId, newActiveState) {
      if (tabId) {
        var tab = this._findTab(tabId);
        if (tab) {
          tab.active = newActiveState;
          if (newActiveState) {
            this.activeTabId = tabId;
          }
        }
      }
    };

    Tabs.prototype._findTab = function _findTab(targetId) {
      return this.tabs.find(function (tab) {
        return tab.id === targetId;
      });
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
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'translate', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'activeTabId', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class2)) || _class) || _class);
});