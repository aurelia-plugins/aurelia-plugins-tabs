// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {EventAggregator} from 'aurelia-event-aggregator';
import {bindable, customElement} from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';


// CLASS ATTRIBUTES
@customElement('aup-tabs')
@inject(Element, EventAggregator)


// PUBLIC CLASS
export class Tabs {
  // PRIVATE PROPERTIES (DI)
  _element;
  _eventAggregator;

  // BINDABLE PROPERTIES
  @bindable class = 'nav-tabs';
  @bindable tabs;
  @bindable translate = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  activeTabId = null;

  // CONSTRUCTOR
  constructor(element, eventAggregator) {
    this._element = element;
    this._eventAggregator = eventAggregator;
  }

  // LIFECYCLE HANDLERS
  attached() {
    this._refresh();
  }

  // BINDABLE METHODS
  tabsChanged() {
    this._refresh();
  }

  // PUBLIC METHODS
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
        this._eventAggregator.publish(`aurelia-plugins:tabs:active-tab-changed`, {from: previousActiveId, to: targetId});
        this._eventAggregator.publish(`aurelia-plugins:tabs:tab-clicked:${targetId}`, event);
      }
    }
  }

  isActive(tab) {
    return tab.id === this.activeTabId;
  }

  // PRIVATE METHODS
  /**
   * All tab contents *will* (shortly) be recreated and so need setTimeout as only when the elements are in the DOM
   * can we set their active state.
   */
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
        }
        else {
          tabContents.classList.remove('active');
          navLink.classList.remove('active');
        }
      }
    });
  }
}