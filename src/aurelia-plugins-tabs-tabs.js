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
  @bindable({ defaultBindingMode: bindingMode.toView }) // out
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
    let currentActiveId;
    let targetId;
    event.stopPropagation();
    if (tab.disabled) return;
    const target = event.target;
    const currentActiveTab = this._element.querySelector('a.nav-link.active');
    if (target === currentActiveTab) return;
    const targetHref = target.getAttribute('href');
    target.classList.add('active');
    document.querySelector(targetHref).classList.add('active');
    targetId = targetHref.replace('#', '');
    if (currentActiveTab) {
      const currentActiveHref = currentActiveTab.getAttribute('href');
      currentActiveId = currentActiveHref.replace('#', '');
      currentActiveTab.classList.remove('active');
      document.querySelector(currentActiveHref).classList.remove('active');
    }
    this._updateActiveStatusInBoundTabs(currentActiveId, targetId);
    this._eventAggregator.publish(`aurelia-plugins:tabs:active-tab-changed`, {from: currentActiveId, to: targetId});
    this._eventAggregator.publish(`aurelia-plugins:tabs:tab-clicked:${targetId}`, event);
  }

  // PRIVATE METHODS
  _refresh() {
    const active = this.tabs.find(tab => tab.active);
    if (!active) return;
    this.activeTabId = active.id;
    if (!this._addTabActiveClass(active.id)) {
      // No element there?! Give it another chance as may not have entered the dom yet
      setTimeout(() => {
        this._addTabActiveClass(active.id);
      }, 0);
    }
  }

  _addTabActiveClass(tabId) {
    const element = document.querySelector(`#${tabId}`);
    if (element) {
      element.classList.add('active');
    }
    return !!element;
  }

  _updateActiveStatusInBoundTabs(activeId, targetId) {
    this._setTabActiveState(activeId, false);
    this._setTabActiveState(targetId, true);
  }

  _setTabActiveState(tabId, newActiveState) {
    if (tabId) {
      let tab = this._findTab(tabId);
      if (tab) {
        tab.active = newActiveState;
        if (newActiveState) {
          this.activeTabId = tabId;
        }
      }
    }
  }

  _findTab(targetId) {
    return this.tabs.find(tab => tab.id === targetId);
  }

}