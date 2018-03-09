// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {EventAggregator} from 'aurelia-event-aggregator';
import {bindable, customElement} from 'aurelia-templating';

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

  // CONSTRUCTOR
  constructor(element, eventAggregator) {
    this._element = element;
    this._eventAggregator = eventAggregator;
  }

  // LIFECYCLE HANDLERS
  attached() {
    this._refreshActiveTab();
  }

  tabsChanged() {
    this._refreshActiveTab();
  }

  // PUBLIC METHODS
  click(event) {
    event.stopPropagation();
    const target = event.target;
    /* 'active' can be undefined if the list of tabs has changed */
    const active = this._element.querySelector('a.nav-link.active');
    if (!active || target === active) {
      return;
    }
    const targetId = target.getAttribute('href').substring(1);
    const targetTab = this.tabs.find(tab => (tab.id === targetId));
    if (targetTab.disabled) {
      return;
    }
    const targetHref = target.getAttribute('href');
    const activeHref = active.getAttribute('href');
    target.classList.add('active');
    active.classList.remove('active');
    document.querySelector(targetHref).classList.add('active');
    document.querySelector(activeHref).classList.remove('active');
    this._eventAggregator.publish(`aurelia-plugins:tabs:tab-clicked:${targetHref.replace('#', '')}`, event);
  }

  _refreshActiveTab() {
    const active = this.tabs.find(tab => tab.active);
    if (!active) {
      return;
    }
    document.querySelector(`#${active.id}`).classList.add('active');
  }
}