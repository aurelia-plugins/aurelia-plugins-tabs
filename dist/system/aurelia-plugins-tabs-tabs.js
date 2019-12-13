'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-event-aggregator', 'aurelia-templating', 'aurelia-binding'], function (_export, _context) {
  "use strict";

  var inject, EventAggregator, bindable, customElement, bindingMode, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Tabs;

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

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }],
    execute: function () {
      _export('Tabs', Tabs = (_dec = customElement('aup-tabs'), _dec2 = inject(Element, EventAggregator), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
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
          var previousActiveId = void 0;
          event.stopPropagation();
          if (!tab.disabled) {
            var target = event.target;
            var currentActiveTab = this._element.querySelector('a.nav-link.active');
            if (target !== currentActiveTab) {
              var targetHref = target.getAttribute('href');
              var targetId = targetHref.replace('#', '');
              previousActiveId = this.activeTabId;
              this._setTabActiveState(targetId);
              this._eventAggregator.publish('aurelia-plugins:tabs:active-tab-changed', { from: previousActiveId, to: targetId });
              this._eventAggregator.publish('aurelia-plugins:tabs:tab-clicked:' + targetId, event);
            }
          }
        };

        Tabs.prototype.isActive = function isActive(tab) {
          return tab.id === this.activeTabId;
        };

        Tabs.prototype._refresh = function _refresh() {
          var _this = this;

          setTimeout(function () {
            _this._setTabActiveState(_this.activeTabId);
          }, 0);
        };

        Tabs.prototype._setTabActiveState = function _setTabActiveState(newActiveId) {
          var _this2 = this;

          this.activeTabId = newActiveId;
          this.tabs.forEach(function (tab) {
            var tabPane = '#' + tab.id;
            var navLink = _this2._element.querySelector('a.nav-link.' + tab.id);
            var tabContents = _this2._element.parentElement.querySelector(tabPane);
            if (navLink && tabContents) {
              if (tab.id === _this2.activeTabId) {
                tabContents.classList.add('active');
                navLink.classList.add('active');
              } else {
                tabContents.classList.remove('active');
                navLink.classList.remove('active');
              }
            }
          });
        };

        return Tabs;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'class', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'nav-tabs';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'translate', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'activeTabId', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Tabs', Tabs);
    }
  };
});