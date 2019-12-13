var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

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
import { EventAggregator } from 'aurelia-event-aggregator';
import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

export let Tabs = (_dec = customElement('aup-tabs'), _dec2 = inject(Element, EventAggregator), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class Tabs {
  constructor(element, eventAggregator) {
    _initDefineProp(this, 'class', _descriptor, this);

    _initDefineProp(this, 'tabs', _descriptor2, this);

    _initDefineProp(this, 'translate', _descriptor3, this);

    _initDefineProp(this, 'activeTabId', _descriptor4, this);

    this._element = element;
    this._eventAggregator = eventAggregator;
  }

  attached() {
    this._refresh();
  }

  tabsChanged() {
    this._refresh();
  }

  click(tab, event) {
    let previousActiveId;
    event.stopPropagation();
    if (!tab.disabled) {
      const target = event.target;
      const currentActiveTab = this._element.querySelector('a.nav-link.active');
      if (target !== currentActiveTab) {
        const targetHref = target.getAttribute('href');
        const targetId = targetHref.replace('#', '');
        previousActiveId = this.activeTabId;
        this._setTabActiveState(targetId);
        this._eventAggregator.publish(`aurelia-plugins:tabs:active-tab-changed`, { from: previousActiveId, to: targetId });
        this._eventAggregator.publish(`aurelia-plugins:tabs:tab-clicked:${targetId}`, event);
      }
    }
  }

  isActive(tab) {
    return tab.id === this.activeTabId;
  }

  _refresh() {
    setTimeout(() => {
      this._setTabActiveState(this.activeTabId);
    }, 0);
  }

  _setTabActiveState(newActiveId) {
    this.activeTabId = newActiveId;
    this.tabs.forEach(tab => {
      const tabPane = '#' + tab.id;
      const navLink = this._element.querySelector('a.nav-link.' + tab.id);
      const tabContents = this._element.parentElement.querySelector(tabPane);
      if (navLink && tabContents) {
        if (tab.id === this.activeTabId) {
          tabContents.classList.add('active');
          navLink.classList.add('active');
        } else {
          tabContents.classList.remove('active');
          navLink.classList.remove('active');
        }
      }
    });
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'class', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'nav-tabs';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'translate', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'activeTabId', [_dec3], {
  enumerable: true,
  initializer: function () {
    return null;
  }
})), _class2)) || _class) || _class);