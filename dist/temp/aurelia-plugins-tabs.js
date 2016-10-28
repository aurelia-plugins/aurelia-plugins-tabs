'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabContent = exports.TabPane = exports.Tabs = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _dec3, _dec4, _class4, _desc2, _value2, _class5, _descriptor3, _descriptor4, _descriptor5, _dec5, _class7;

exports.configure = configure;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

function configure(aurelia) {
  aurelia.globalResources('./aurelia-plugins-tabs-tabs', './aurelia-plugins-tabs-tab-content', './aurelia-plugins-tabs-tab-pane');
}

var Tabs = exports.Tabs = (_dec = (0, _aureliaTemplating.customElement)('aup-tabs'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = (_class2 = function () {
  function Tabs(element, eventAggregator) {
    _classCallCheck(this, Tabs);

    _initDefineProp(this, 'class', _descriptor, this);

    _initDefineProp(this, 'tabs', _descriptor2, this);

    this._element = element;
    this._eventAggregator = eventAggregator;
  }

  Tabs.prototype.attached = function attached() {
    var active = this.tabs.find(function (tab) {
      return tab.active;
    });
    if (!active) return;
    document.querySelector('#' + active.id).classList.add('active');
  };

  Tabs.prototype.click = function click(event) {
    event.stopPropagation();
    var target = event.target;
    var active = this._element.querySelector('a.nav-link.active');
    if (target === active) return;
    var targetHref = target.getAttribute('href');
    var activeHref = active.getAttribute('href');
    target.classList.add('active');
    active.classList.remove('active');
    document.querySelector(targetHref).classList.add('active');
    document.querySelector(activeHref).classList.remove('active');
    this._eventAggregator.publish('aurelia-plugins:tabs:tab-clicked:' + targetHref.replace('#', ''), event);
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
var TabPane = exports.TabPane = (_dec3 = (0, _aureliaTemplating.containerless)(), _dec4 = (0, _aureliaTemplating.customElement)('aup-tab-pane'), _dec3(_class4 = _dec4(_class4 = (_class5 = function TabPane() {
  _classCallCheck(this, TabPane);

  _initDefineProp(this, 'model', _descriptor3, this);

  _initDefineProp(this, 'tab', _descriptor4, this);

  _initDefineProp(this, 'viewModel', _descriptor5, this);
}, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, 'model', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, 'tab', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, 'viewModel', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class5)) || _class4) || _class4);
var TabContent = exports.TabContent = (_dec5 = (0, _aureliaTemplating.customElement)('aup-tab-content'), _dec5(_class7 = function TabContent() {
  _classCallCheck(this, TabContent);
}) || _class7);