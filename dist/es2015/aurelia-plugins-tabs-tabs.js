var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

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

import { inject } from 'aurelia-dependency-injection';
import { bindable, customElement } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';

export let Tabs = (_dec = customElement('aup-tabs'), _dec2 = inject(Element, EventAggregator), _dec(_class = _dec2(_class = (_class2 = class Tabs {
  constructor(element, eventAggregator) {
    _initDefineProp(this, 'tabs', _descriptor, this);

    this._element = element;
    this._eventAggregator = eventAggregator;
  }

  attached() {
    var active = this.tabs.find(tab => tab.active);
    if (!active) return;
    document.querySelector(`#${ active.id }`).classList.add('active');
  }

  click(event) {
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
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);